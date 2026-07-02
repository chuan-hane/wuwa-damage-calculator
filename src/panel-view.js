"use strict";

window.WUWA_PANEL_VIEW = (() => {
  function create({ state, ch, wp, echoStats, echoFieldValues, slotBuffs, buffStatus, buffValue, setHTML }) {
    const {
      STAT_DEF, ELEMENTS, TYPES, TYPE_FIELD_BY_DAMAGE, TYPE_BY_KEY, TYPE_ADD_ORDER, ELEM_ADD_ORDER, num,
    } = window.WUWA_RULES;
    const { fmt, esc, tnum, parts, sum, nonEchoEntries, nonEchoSum, pct, betaBadgeHTML } = window.WUWA_RENDER_HELPERS;
    const L = window.WUWA_LANGUAGES;
    const BREAK_AMP_RE = /谐度破坏增幅|谐度破坏|偏谐|失谐|震谐|集谐|骇破|偏移|干涉|Tune|Hack|Mistuned/i;
    const PANEL_BUFF_ROUTE = { attackPercent: "atkPct", hpPercent: "hpPct", defensePercent: "defPct", critRate: "crit", critDamage: "critDmg", energyRegen: "er", healingBonus: "heal", breakAmp: "breakAmp", discordEff: "discordEff" };

    function pushPanelBuff(D, buff, tag, v) {
      const bucket = PANEL_BUFF_ROUTE[buff.zone];
      if (bucket) { D[bucket].push([tag, v]); return; }
      if (buff.zone === "attackFlat") { D.atkAdd.push([tag, v]); return; }
      if (buff.zone === "damageBonus") { (buff.element ? [buff.element] : ELEMENTS).forEach((e) => D.elem[e]?.push([tag, v])); return; }
      if (buff.zone === "typeBonus") { const type = buff.type || buff.damageType; (type && D.type[type] ? [type] : TYPES).forEach((t) => D.type[t].push([tag, v])); }
    }

    function panelDetail() {
      const s1 = state.slots[state.outputIdx], c = ch(s1.char), w = wp(s1.weapon), tree = c.base.tree || {};
      const D = { atkFlat: [], atkPct: [], atkAdd: [], hpPct: [], defPct: [], crit: [], critDmg: [], er: [], heal: [], breakAmp: [], discordEff: [], elem: {}, type: {}, hpAdd: 0, defAdd: 0 };
      ELEMENTS.forEach((e) => (D.elem[e] = []));
      TYPES.forEach((t) => (D.type[t] = []));
      D.atkFlat.push(["角色基础", c.base.attack]);
      if (w) D.atkFlat.push([`武器${w.name}`, num(w.attack90)]);
      D.crit.push(["角色基础", c.base.critRate]);
      D.critDmg.push(["角色基础", c.base.critDamage]);
      D.er.push(["角色基础", c.base.energyRegen ?? 100]);
      D.breakAmp.push(["角色基础", c.base.breakAmp ?? 0]);
      D.discordEff.push(["角色基础", c.base.discordEff ?? 100]);
      if (tree.attackPct) D.atkPct.push(["属性树", tree.attackPct]);
      if (tree.hpPct) D.hpPct.push(["属性树", tree.hpPct]);
      if (tree.defPct) D.defPct.push(["属性树", tree.defPct]);
      if (tree.critRate) D.crit.push(["属性树", tree.critRate]);
      if (tree.critDamage) D.critDmg.push(["属性树", tree.critDamage]);
      if (tree.elemBonus) D.elem[c.element].push(["属性树", tree.elemBonus]);
      if (tree.healingBonus) D.heal.push(["属性树", tree.healingBonus]);
      if (tree.breakAmp) D.breakAmp.push(["属性树", tree.breakAmp]);
      if (tree.discordEff) D.discordEff.push(["属性树", tree.discordEff]);
      state.slots.forEach((slot, idx) => {
        const isDps = idx === state.outputIdx;
        slotBuffs(slot).forEach((buff) => {
          if (buff.effect) return;
          if (buff.seq && slot.seq < buff.seq) return;
          if (!buffStatus(slot, idx, buff).applies) return;
          if (!(isDps ? !String(buff.source).startsWith("延奏") : buff.scope === "team")) return;
          const v = buffValue(slot, buff, idx);
          const tag = (isDps ? "" : ch(slot.char).name + "·") + buff.source;
          pushPanelBuff(D, buff, tag, v);
        });
      });
      const es = echoStats(s1);
      const pushEcho = (bucket, v) => { if (v) D[bucket].push(["声骸", v]); };
      pushEcho("atkPct", es.attackPercent); pushEcho("hpPct", es.hpPercent); pushEcho("defPct", es.defensePercent);
      pushEcho("crit", es.critRate); pushEcho("critDmg", es.critDamage);
      pushEcho("er", es.energyRegen); pushEcho("heal", es.healingBonus);
      pushEcho("discordEff", es.discordEff);
      ELEMENTS.forEach((el) => { if (es.elem[el]) D.elem[el].push(["声骸", es.elem[el]]); });
      TYPES.forEach((t) => { if (es.type[t]) D.type[t].push(["声骸", es.type[t]]); });
      if (es.flatAtk) D.atkAdd.push(["声骸固定", es.flatAtk]);
      D.hpAdd = es.flatHp; D.defAdd = es.flatDef;
      return D;
    }

    const baseWithEchoFormula = (baseText, arr) => {
      const v = nonEchoSum(arr);
      return `${baseText} × (1${v ? ` + ${pct(v)}` : ""} +`;
    };

    const baseFlatFormula = (baseText, arr) => {
      const v = nonEchoSum(arr);
      return `${baseText} × (1${v ? ` + ${pct(v)}` : ""}) +`;
    };

    const pctFormulaLead = (arr) => {
      const terms = nonEchoEntries(arr).map(([, v]) => pct(v));
      return terms.length ? `${terms.join(" + ")} +` : "";
    };

    function primaryTypeKey(c) {
      const valid = (c.validSubs || []).find((k) => STAT_DEF[k] && STAT_DEF[k].zone === "typeBonus");
      if (valid) return valid;
      const dsk = (c.skills || []).find((s) => s.id === c.defaultSkillId);
      if (dsk && TYPE_FIELD_BY_DAMAGE[dsk.damageType]) return TYPE_FIELD_BY_DAMAGE[dsk.damageType];
      const top = (c.skills || []).filter((s) => TYPE_FIELD_BY_DAMAGE[s.damageType]).slice().sort((a, b) => b.multiplier - a.multiplier)[0];
      return top ? TYPE_FIELD_BY_DAMAGE[top.damageType] : "skillDmg";
    }

    function typeBonusRow(t, D, idPrefix = "") {
      const key = TYPE_FIELD_BY_DAMAGE[t], arr = D.type[t] || [];
      const typeName = L.damageType(t);
      const label = L.typeBonusLabel(typeName);
      return { id: `${idPrefix}type_${key}`, label, total: tnum(sum(arr)) + "%", formula: `${label} = ${pctFormulaLead(arr)}`, title: parts(arr, "%"), fields: key ? [{ key, suffix: "%" }] : [] };
    }

    function elemBonusRow(el, c, D, idPrefix = "") {
      const arr = D.elem[el] || [];
      const elemName = L.element(el);
      const label = L.damageBonusLabel(elemName);
      return { id: `${idPrefix}elem_${el}`, label, total: tnum(sum(arr)) + "%", formula: `${label} = ${pctFormulaLead(arr)}`, title: parts(arr, "%"), fields: el === "physical" ? [] : [{ key: `elem:${el}`, suffix: "%" }] };
    }

    function textMatchesBreakAmp(...values) {
      return BREAK_AMP_RE.test(values.flatMap((v) => Array.isArray(v) ? v : [v]).filter(Boolean).join(" "));
    }

    function charBuffs(c) {
      return [...(c.buffs || []), ...(c.chain || []).flatMap((node) => node.buffs || [])];
    }

    function charBreakAmpRelevant(c) {
      const base = c.base || {};
      const tree = base.tree || {};
      if ((base.breakAmp || 0) || tree.breakAmp || (c.validSubs || []).includes("breakAmp")) return true;
      if ((c.skills || []).some((sk) => textMatchesBreakAmp(sk.name, sk.category, sk.damageType, sk.damageTags))) return true;
      if ((c.combatStates || []).some((def) => textMatchesBreakAmp(def.id, def.label, def.entry, def.effects, (def.options || []).flatMap((opt) => [opt.value, opt.label])))) return true;
      return charBuffs(c).some((buff) =>
        buff.zone === "breakAmp"
        || buff.scaleBy?.stat === "breakAmp"
        || textMatchesBreakAmp(buff.label, buff.source, buff.excerpt, buff.desc, buff.damageType, buff.damageTags)
      );
    }

    function breakAmpRow(D, id = "breakAmp", removeKey = null) {
      return { id, label: "谐度破坏增幅", total: tnum(sum(D.breakAmp)), formula: "谐度破坏增幅 = ", title: parts(D.breakAmp), fields: [], removeKey };
    }

    function extraPanelRow(key, c, b, D) {
      if (key === "breakAmp") return breakAmpRow(D, "x_breakAmp", key);
      if (key === "discordEff") return { id: "x_discordEff", label: "偏谐值累积效率", total: tnum(sum(D.discordEff)) + "%", formula: `偏谐值累积效率 = ${pctFormulaLead(D.discordEff)}`, title: parts(D.discordEff, "%"), fields: [{ key: "discordEff", suffix: "%" }], removeKey: key };
      if (key === "heal") { const row = { id: "x_heal", label: "治疗效果加成", total: tnum(sum(D.heal)) + "%", formula: `治疗效果加成 = ${pctFormulaLead(D.heal)}`, title: parts(D.heal, "%"), fields: [{ key: "heal", suffix: "%" }], removeKey: key }; return row; }
      if (key.startsWith("type:")) { const row = typeBonusRow(key.slice(5), D, "x_"); row.removeKey = key; return row; }
      if (key.startsWith("elem:")) { const row = elemBonusRow(key.slice(5), c, D, "x_"); row.removeKey = key; return row; }
      return null;
    }

    function availableAddKeys(c, slot) {
      if (slot.echo?.detailMode) return [];
      const shown = new Set(slot.extraPanelRows || []);
      const out = [];
      if (!shown.has("discordEff")) out.push(["discordEff", "偏谐值累积效率"]);
      const ptType = TYPE_BY_KEY[primaryTypeKey(c)];
      TYPE_ADD_ORDER.filter((t) => t !== ptType).forEach((t) => {
        const typeName = L.damageType(t);
        if (!shown.has("type:" + t)) out.push(["type:" + t, L.typeBonusLabel(typeName)]);
      });
      ELEM_ADD_ORDER.filter((el) => el !== c.element).forEach((el) => {
        const elemName = L.element(el);
        if (!shown.has("elem:" + el)) out.push(["elem:" + el, L.damageBonusLabel(elemName)]);
      });
      if (!shown.has("heal")) out.push(["heal", "治疗效果加成"]);
      return out;
    }

    function autoDetailPanelKeys(c, slot) {
      if (!slot.echo?.detailMode) return [];
      const fields = echoFieldValues(slot, c);
      const out = [];
      const primaryType = primaryTypeKey(c);
      if (fields.discordEff) out.push("discordEff");
      if (fields.heal) out.push("heal");
      if (fields.breakAmp && !charBreakAmpRelevant(c)) out.push("breakAmp");
      TYPE_ADD_ORDER.forEach((t) => {
        const key = TYPE_FIELD_BY_DAMAGE[t];
        if (key && key !== primaryType && fields[key]) out.push("type:" + t);
      });
      ELEM_ADD_ORDER.forEach((el) => {
        if (el !== c.element && fields[`elem:${el}`]) out.push("elem:" + el);
      });
      return out;
    }

    function panelEntryRows(r, slot) {
      const c = ch(slot.char), b = c.base, w = wp(slot.weapon), D = panelDetail();
      const add = (v) => (v ? ` + 声骸固定 ${tnum(v)}` : "");
      const addParts = (arr) => (arr.length ? ` + ${parts(arr)}` : "");
      const hasFixedBreakAmp = charBreakAmpRelevant(c);
      const rows = [
        { id: "hp", label: "生命", total: fmt(r.panel.displayHp), formula: `生命 = ${baseWithEchoFormula(tnum(b.hp), D.hpPct)}`, title: `角色基础 ${tnum(b.hp)}${D.hpPct.length ? ` × (1 + ${parts(D.hpPct, "%")})` : ""}${add(D.hpAdd)}`, fields: [{ key: "hpFlat" }, { key: "hpPct", suffix: "%" }] },
        { id: "atk", label: "攻击", total: fmt(r.panel.displayAtk), formula: `攻击 = ${baseFlatFormula(`(${tnum(b.attack)} + ${tnum(w ? num(w.attack90) : 0)})`, D.atkPct)}`, title: `(${parts(D.atkFlat)})${D.atkPct.length ? ` × (1 + ${parts(D.atkPct, "%")})` : ""}${addParts(D.atkAdd)}`, fields: [{ key: "atkFlat" }] },
        { id: "def", label: "防御", total: fmt(r.panel.displayDef), formula: `防御 = ${baseWithEchoFormula(tnum(b.defense), D.defPct)}`, title: `角色基础 ${tnum(b.defense)}${D.defPct.length ? ` × (1 + ${parts(D.defPct, "%")})` : ""}${add(D.defAdd)}`, fields: [{ key: "defFlat" }, { key: "defPct", suffix: "%" }] },
        { id: "er", label: "共鸣效率", total: tnum(sum(D.er)) + "%", formula: `共鸣效率 = ${pctFormulaLead(D.er)}`, title: parts(D.er, "%"), fields: [{ key: "energyRegen", suffix: "%" }] },
        { id: "crit", label: "暴击率", total: r.panel.critRate.toFixed(1) + "%", formula: `暴击率 = ${pctFormulaLead(D.crit)}`, title: parts(D.crit, "%"), fields: [{ key: "critRate", suffix: "%" }] },
        { id: "critDmg", label: "暴击伤害", total: r.panel.critDamage.toFixed(1) + "%", formula: `暴击伤害 = ${pctFormulaLead(D.critDmg)}`, title: parts(D.critDmg, "%"), fields: [{ key: "critDamage", suffix: "%" }] },
        elemBonusRow(c.element, c, D),
        typeBonusRow(TYPE_BY_KEY[primaryTypeKey(c)], D),
      ];
      if (hasFixedBreakAmp) rows.splice(4, 0, breakAmpRow(D));
      const extraKeys = slot.echo?.detailMode ? autoDetailPanelKeys(c, slot) : (slot.extraPanelRows || []);
      extraKeys.forEach((key) => {
        if (key === "breakAmp" && hasFixedBreakAmp) return;
        const row = extraPanelRow(key, c, b, D);
        if (row) {
          if (slot.echo?.detailMode) row.removeKey = null;
          rows.push(row);
        }
      });
      return rows;
    }

    function panelEntryInputHTML(slot, idx, field, c) {
      const detailMode = !!slot.echo?.detailMode;
      const values = detailMode ? echoFieldValues(slot, c) : slot.echo.fields;
      const value = values[field.key] ?? "";
      const attrs = detailMode ? `disabled aria-label="${esc(L.text("由详细声骸汇总"))}"` : `data-act="efield" data-slot="${idx}" data-key="${field.key}"`;
      return `<label class="panel-num-field${detailMode ? " panel-num-field--readonly" : ""}">
    <input type="number" step="0.1" ${attrs} value="${esc(value)}" placeholder="0" />
  </label>`;
    }

    function panelFieldWithSuffixHTML(slot, idx, field, c, ghost = false) {
      const suffix = field.suffix ? `<span class="panel-input-suffix">${esc(field.suffix)}</span>` : (ghost ? `<span class="panel-input-suffix is-ghost" aria-hidden="true">%</span>` : "");
      const kind = field.suffix ? "panel-input-wrap--pct" : "panel-input-wrap--flat";
      return `<span class="panel-input-wrap ${kind}">${panelEntryInputHTML(slot, idx, field, c)}${suffix}</span>`;
    }

    function panelEchoInputsHTML(row, slot, idx, c) {
      const flat = row.fields.find((field) => !field.suffix);
      const pctField = row.fields.find((field) => field.suffix === "%");
      if (flat) {
        const pctCell = pctField
          ? panelFieldWithSuffixHTML(slot, idx, pctField, c)
          : `<span class="panel-input-wrap panel-input-wrap--pct panel-cell-ghost" aria-hidden="true"><span class="panel-num-field"><input type="number" tabindex="-1" disabled /></span><span class="panel-input-suffix">%</span></span>`;
        return `<div class="panel-entry-inputs panel-entry-inputs--mixed">
      ${pctCell}
      <span class="panel-entry-input-op${pctField ? "" : " panel-cell-ghost"}" aria-hidden="true">)+</span>
      ${panelFieldWithSuffixHTML(slot, idx, flat, c)}
    </div>`;
      }
      return `<div class="panel-entry-inputs panel-entry-inputs--single">
    ${pctField ? panelFieldWithSuffixHTML(slot, idx, pctField, c, true) : '<span class="panel-entry-input-empty" aria-hidden="true"></span>'}
  </div>`;
    }

    function panelFormulaHTML(row) {
      const prefix = `${row.label} = `;
      const expr = row.formula.startsWith(prefix) ? row.formula.slice(prefix.length) : row.formula;
      if (!expr) return `<span class="panel-entry-label">${esc(L.text(row.label))}</span><span class="panel-entry-equals"></span><span class="panel-entry-equation"></span>`;
      return `<span class="panel-entry-label">${esc(L.text(row.label))}</span><span class="panel-entry-equals">=</span><span class="panel-entry-equation">${esc(L.text(expr))}</span>`;
    }

    function panelEntryTableHTML(r, slot, idx) {
      const c = ch(slot.char);
      const rowData = panelEntryRows(r, slot);
      const rows = rowData.map((row) => `<div class="panel-entry-row${row.removeKey ? " panel-entry-row--extra" : ""}" id="panel-row-${row.id}" tabindex="0" aria-label="${esc(L.sourceJoin(L.text(row.label), L.text(row.title || "无额外来源")))}">
    <div class="panel-entry-formula" id="panel-formula-${row.id}">${panelFormulaHTML(row)}</div>
    <div class="panel-entry-echo-anchor"></div>
    <div class="panel-entry-total"><span class="panel-entry-sep">=</span><span id="panel-total-${row.id}">${esc(row.total)}</span>${row.removeKey ? `<button type="button" class="panel-row-rm" data-act="panel-rm" data-slot="${idx}" data-key="${esc(row.removeKey)}" title="${esc(L.text("移除"))}" aria-label="${esc(L.text("移除"))}${esc(L.text(row.label))}">×</button>` : ""}</div>
    ${row.title ? `<span class="panel-entry-tip" id="panel-tip-${row.id}" role="tooltip">${esc(L.text(row.title))}</span>` : ""}
  </div>`).join("");
      const addOpts = availableAddKeys(c, slot);
      const addRow = addOpts.length ? `<div class="panel-entry-row panel-add-row">
    <select class="panel-add-select" data-act="panel-add" data-slot="${idx}">
      <option value="">＋ ${esc(L.text("添加属性…"))}</option>
      ${addOpts.map(([k, l]) => `<option value="${esc(k)}">${esc(L.text(l))}</option>`).join("")}
    </select>
  </div>` : "";
      const echoRows = rowData.map((row) => `<div class="panel-echo-row">${panelEchoInputsHTML(row, slot, idx, c)}</div>`).join("") + (addOpts.length ? `<div class="panel-echo-row panel-echo-row--add" aria-hidden="true"></div>` : "");
      return `<div class="panel-entry-table" id="panel-entry-table">
    <div class="panel-entry-head">
      <div class="module-title"><h2>${esc(L.text("角色面板"))} <span class="module-title-name">${esc(L.charName(c))}</span>${betaBadgeHTML(c)}</h2></div>
      <div class="panel-entry-echo-anchor"></div>
      <div></div>
    </div>
    ${rows}${addRow}
    <div class="panel-echo-box">
      <div class="panel-echo-head">
        <div class="module-title"><h2>${esc(L.text("声骸加成"))}</h2><small>${esc(slot.echo?.detailMode ? L.text("由详细声骸汇总") : L.text("输入游戏中声骸总面板"))}</small></div>
        ${slot.echo?.detailMode ? `<span class="panel-echo-mode">${esc(L.text("详细模式"))}</span>` : `<button type="button" class="panel-clear" data-act="echo-clear" data-slot="${idx}">${esc(L.t("common.reset"))}</button>`}
      </div>
      ${echoRows}
    </div>
  </div>`;
    }

    function refreshPanelEntryTotals(r) {
      const slot = state.slots[state.outputIdx];
      panelEntryRows(r, slot).forEach((row) => {
        setHTML(`panel-total-${row.id}`, esc(row.total));
        setHTML(`panel-formula-${row.id}`, panelFormulaHTML(row));
        setHTML(`panel-tip-${row.id}`, esc(row.title || ""));
        const el = document.getElementById(`panel-row-${row.id}`);
        if (el) el.setAttribute("aria-label", L.sourceJoin(L.text(row.label), L.text(row.title || "无额外来源")));
      });
    }

    return { panelEntryTableHTML, refreshPanelEntryTotals };
  }

  return { create };
})();
