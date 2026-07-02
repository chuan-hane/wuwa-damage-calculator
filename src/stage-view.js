"use strict";

window.WUWA_STAGE_VIEW = (() => {
  function create({
    state, W, ch, wp, WEAPONS, SONATAS, leadChoicesForEcho, syncEchoLead,
    ECHO_COSTS, echoMainOptions, echoSubOptions, echoSubValues, echoFixedMain, ensureEchoDetail, echoDetailSummary, statLabel,
    availableSkills, selectedSkill, resourceControlsForSlot, resolvedSkill, stateControlsHTML,
    panelEntryTableHTML, autoResolutionHTML, settlementBuffRowsHTML,
  }) {
    const { skillLevelRatio, skillMultValue, EFFECT_DEFS, EFFECT_ORDER, HARMONY_BASE_OPTIONS, effectKeyOf, num } = window.WUWA_RULES;
    const L = window.WUWA_LANGUAGES;
    const {
      fmt, fx, esc, tnum, RES_HINT, DAMAGE_MODES, skillFormulaText, damageSplitHTML,
      betaVersionLabel, betaVersionSuffix, betaBadgeHTML,
    } = window.WUWA_RENDER_HELPERS;
    const asList = (v) => Array.isArray(v) ? v : (v ? [v] : []);
    const STATE_SKILL_FILTER_KINDS = new Set(["mode", "form", "phase"]);
    const SONATA_DISPLAY_ORDER = new Map([
      1, 2, 3, 4, 5, 6, 7, 16, 8, 10, 11, 13, 15, 12, 14, 17, 18, 19, 20, 21, 22, 23, 25, 33, 26, 27, 28, 29, 30, 31, 24,
    ].map((id, idx) => [id, idx]));
    const charSortValue = (c) => Number(c?.debut ?? -Infinity);

    function skillStatKey(stat) {
      if (stat === "生命" || stat === "hp") return "hp";
      if (stat === "防御" || stat === "defense" || stat === "def") return "defense";
      return "attack";
    }

    function comboHTML(kind, idx) {
      const slot = state.slots[idx];
      let opts, curLabel, ph;
      if (kind === "char") {
        const cur = ch(slot.char);
        curLabel = cur ? L.charName(cur) : L.t("common.empty"); ph = L.t("common.searchCharacter");
        opts = W.order.map(ch).slice().sort((a, b) => charSortValue(b) - charSortValue(a)).map((c) => ({
          v: c.id, sel: c.id === slot.char, icon: c.portrait, label: L.charName(c), betaVersion: c.betaVersion,
          search: (c.name + " " + L.officialName("chars", c.id) + " " + (c.aliases || []).join(" ") + " " + betaVersionLabel(c)).toLowerCase(),
        }));
        if (idx !== state.outputIdx) opts.unshift({ v: "", sel: !slot.char, icon: "", label: L.t("common.empty"), search: "空 none empty kong 不带人" });
      } else {
        const cur = wp(slot.weapon), sig = ch(slot.char).signatureWeaponId;
        curLabel = cur ? L.weaponName(cur) : L.t("common.none"); ph = L.t("common.searchWeapon");
        opts = WEAPONS.filter((w) => w.type === ch(slot.char).weaponType)
          .slice().sort((a, b) => b.quality - a.quality || (b.id === sig) - (a.id === sig) || L.weaponName(a).localeCompare(L.weaponName(b), L.compareLocale()))
          .map((w) => ({ v: w.id, sel: w.id === slot.weapon, icon: w.icon, label: L.weaponName(w), sub: `${w.quality}★`, sig: w.id === sig && !w.betaVersion, betaVersion: w.betaVersion, search: `${w.name} ${L.officialName("weapons", w.id)} ${betaVersionLabel(w)}`.toLowerCase() }));
      }
      const curIcon = kind === "weapon" ? comboIconHTML({ icon: wp(slot.weapon)?.icon, label: curLabel, sub: "" }, kind) : "";
      const comboClass = kind === "weapon" ? " team-weapon-combo" : "";
      const items = opts.map((o) => `<li class="combo-opt${o.sel ? " sel" : ""}" data-act="combo-pick" data-kind="${kind}" data-slot="${idx}" data-value="${o.v}" data-search="${esc(o.search)}">
      ${comboIconHTML(o, kind)}
      <span class="combo-opt-lbl">${esc(o.label)}</span>${betaBadgeHTML(o.betaVersion)}${o.sig ? `<span class="combo-tag-sig">${esc(L.t("common.signature"))}</span>` : ""}${o.sub ? `<span class="combo-opt-sub">${o.sub}</span>` : ""}
    </li>`).join("");
      return `<div class="combo${comboClass}" data-kind="${kind}">
    <button type="button" class="combo-btn" data-act="combo-toggle">${curIcon}<span class="combo-lbl">${esc(curLabel)}</span><span class="combo-caret">▾</span></button>
    <div class="combo-pop"><input type="text" class="combo-search" placeholder="${ph}" data-act="combo-search" /><ul class="combo-list">${items}</ul></div>
  </div>`;
    }

    function comboIconHTML(opt, kind) {
      if (opt.icon) return `<img class="combo-ic" src="${esc(opt.icon)}" onerror="this.style.visibility='hidden'" alt="" />`;
      const text = kind === "weapon" ? (opt.sub || L.t("common.weaponFallback")) : (opt.label || L.t("common.emptyFallback")).slice(0, 1);
      return `<span class="combo-ic combo-ic-fallback">${esc(text)}</span>`;
    }

    function elementBadgeHTML(element) {
      const icon = window.WUWA_ICON_ASSETS?.elements?.[element];
      const img = icon ? `<img class="element-ic" src="${esc(icon)}" alt="" onerror="this.style.display='none'" />` : "";
      return `<span class="element-badge">${img}<span>${esc(L.element(element))}</span></span>`;
    }

    function skillOptions(slot) {
      const cats = {};
      const currentId = selectedSkill(slot)?.id;
      availableSkills(slot).forEach((s) => { (cats[s.category] = cats[s.category] || []).push(s); });
      return Object.entries(cats).map(([cat, arr]) =>
        `<optgroup label="${esc(L.category(cat))}">` + arr.map((s) => `<option value="${s.id}" ${s.id === currentId ? "selected" : ""}>${esc(L.skillOptionName(s))} (${esc(L.text(skillFormulaText(s)))})</option>`).join("") + `</optgroup>`
      ).join("");
    }

    function sonataSortValue(s) {
      const fallback = SONATAS.indexOf(s);
      return s.releaseOrder ?? SONATA_DISPLAY_ORDER.get(s.id) ?? (fallback >= 0 ? fallback : 9999);
    }

    function sonataOptions(sel, filter) {
      return SONATAS.filter((s) => !filter || filter(s))
        .slice()
        .sort((a, b) => sonataSortValue(a) - sonataSortValue(b))
        .map((s) => `<option value="${s.id}" ${s.id === sel ? "selected" : ""}>${esc(L.sonataName(s) + betaVersionSuffix(s))}</option>`)
        .join("");
    }

    function sonataById(id) {
      return SONATAS.find((s) => s.id === id);
    }

    function sonataDisplayName(id) {
      const set = sonataById(id);
      return set ? L.sonataName(set) + betaVersionSuffix(set) : L.t("common.unselected");
    }

    function leadEchoDisplayName(choice) {
      return choice ? L.leadEchoName(choice.lead) : L.t("common.unselectedLead");
    }

    function sonataIconHTML(set) {
      if (!set?.icon) return `<span class="echo-set-icon echo-set-icon-fallback">${esc(L.text("套"))}</span>`;
      return `<img class="echo-set-icon" src="${esc(set.icon)}" alt="" onerror="this.style.visibility='hidden'" />`;
    }

    function formulaCardTipHTML(tip) {
      return tip ? `<div class="formula-card-tip" role="tooltip">${esc(tip)}</div>` : "";
    }

    function formulaCardAria(label, tip) {
      return L.sourceJoin(label, tip);
    }

    function formulaSource(label, value, suffix = "") {
      return num(value) ? `${L.text(label)} ${tnum(value)}${suffix}` : "";
    }

    function formulaSourceText(label, value, suffix = "") {
      return num(value) ? `${label} ${tnum(value)}${suffix}` : "";
    }

    function formulaSources(items, empty = "0") {
      const text = items.filter(Boolean).join(" + ");
      return text || empty;
    }

    function formulaParen(text) {
      return L.paren(text);
    }

    function formulaBreak() {
      return L.semicolon();
    }

    function metricFormulaCardHTML({ k, v, sub, tip }) {
      const subHTML = sub.startsWith("<small") ? sub : `<small>${sub}</small>`;
      return `<div class="metric-card formula-card" tabindex="0" aria-label="${esc(formulaCardAria(k, tip))}">
    <span>${esc(k)}</span>
    ${v}
    ${subHTML}
    ${formulaCardTipHTML(tip)}
  </div>`;
    }

    function echoSetIconGroupHTML(ids) {
      const names = ids.map(sonataDisplayName);
      return `<div class="team-gear-set-icons" title="${esc(names.join(" + "))}">${ids.map((id, i) => {
        const name = sonataDisplayName(id);
        const sep = i ? `<span class="echo-set-plus">+</span>` : "";
        return `${sep}<span class="echo-set-chip" tabindex="0" role="img" aria-label="${esc(name)}" title="${esc(name)}" data-tip="${esc(name)}">${sonataIconHTML(sonataById(id))}</span>`;
      }).join("")}</div>`;
    }

    function layerFieldsHTML() {
      const oi = state.outputIdx;
      const s1 = state.slots[oi];
      const sk = selectedSkill(s1);
      let html = "";
      const resources = resourceControlsForSlot(s1);
      const valueResources = resources.filter((resource) => resource.kind === "value");
      if (valueResources.length) {
        html += `<div class="resource-field-row" style="--resource-field-count:${Math.min(valueResources.length, 4)}">`;
        valueResources.forEach((resource) => {
          html += `<div class="field"><label>${esc(L.resourceLabel(resource))} (${esc(tnum(resource.min))}-${esc(tnum(resource.max))})</label><input type="number" min="${esc(resource.min)}" max="${esc(resource.max)}" step="1" data-act="char-resource" data-slot="${oi}" data-key="${esc(resource.id)}" value="${esc(tnum(resource.value))}" /></div>`;
        });
        html += `</div>`;
      }
      resources.filter((resource) => resource.kind !== "value").forEach((resource) => {
        const resourceName = L.text(resource.label || resource.id);
        html += `<div class="field toggle-field"><label class="buff toggle-card resource-toggle"><input type="checkbox" data-act="resource" data-slot="${oi}" data-key="${esc(resource.id || resource.label)}" ${resource.ready ? "checked" : ""} /> ${esc(L.hasText(resourceName))}</label></div>`;
      });
      html += stateControlsHTML(s1, oi);
      if (sk && sk.perStack && !sk.stackResource) {
        const layers = s1.layers == null ? skillDefaultLayers(s1, sk) : s1.layers;
        html += `<div class="field"><label>${esc(L.text(sk.stackLabel))} (0-${sk.stackMax})</label><input type="number" min="0" max="${sk.stackMax}" data-act="layers" data-slot="${oi}" value="${layers}" /></div>`;
      }
      return html;
    }

    function skillDefaultLayers(slot, sk) {
      if (!sk) return 0;
      let layers = sk.defaultLayers ?? sk.stackMax ?? 0;
      (Array.isArray(sk.defaultLayersBySeq) ? sk.defaultLayersBySeq : []).forEach((rule) => {
        if (num(slot.seq) >= num(rule.seq)) layers = rule.layers;
      });
      return layers;
    }

    function resourceNameForSkill(slot, id) {
      const resource = asList(ch(slot?.char)?.resources).find((item) => item.id === id || item.label === id);
      return resource ? L.resourceLabel(resource) : L.text(id);
    }

    function skillResourceLabel(slot, sk) {
      if (!sk) return "";
      if (sk.requiresResource) return L.text(sk.requiresResourceLabel || sk.resourceLabel || resourceNameForSkill(slot, sk.requiresResource));
      if (sk.requiresResourceSumAtLeast) {
        const req = sk.requiresResourceSumAtLeast;
        const label = req.label || asList(req.ids || req.resources).map((id) => resourceNameForSkill(slot, id)).join("+") || L.text("资源");
        return L.atLeastText(L.text(label), tnum(req.value));
      }
      if (sk.requiresResourceAtLeast) {
        const req = sk.requiresResourceAtLeast;
        const label = req.label || resourceNameForSkill(slot, req.id);
        const main = req.fractionOfCap != null
          ? L.atLeastCapText(L.text(label), tnum(num(req.fractionOfCap) * 100))
          : L.atLeastText(L.text(label), tnum(req.value));
        const alternates = asList(req.alternateStates);
        return alternates.length ? `${main}${L.orText()}${alternates.map((item) => L.text(item)).join("/")}` : main;
      }
      if (sk.requiresResourceFull) {
        const label = resourceNameForSkill(slot, sk.requiresResourceFull);
        return L.atMaxText(L.text(label));
      }
      return "";
    }

    function typeTagHTML(r) {
      const s1 = state.slots[state.outputIdx];
      const sk = r.sk || selectedSkill(s1);
      if (!sk) return "";
      const selectedSk = r.selectedSk || sk;
      const c = ch(s1.char);
      if (r.resourceBlocked) {
        return (
          `<div class="dmg-type"><div>${esc(L.text("本次"))}: <b>${esc(L.skillName(selectedSk))}</b> (${esc(L.category(selectedSk.category))})</div>` +
          `<div>${esc(L.text("缺少"))} "<span class="dt">${esc(skillResourceLabel(s1, selectedSk))}</span>", ${esc(L.text("当前技能不可释放"))}</div></div>`
        );
      }
      const lv = r.skLevel || 10;
      const statName = L.stat(skillStatKey(sk.stat));
      const isHarmonyResponse = r.damageModel === "harmonyResponse";
      const baseName = isHarmonyResponse ? L.text("谐度基础值") : statName;
      const expr = skillFormulaText(sk, r.layers);
      const stackMult = sk.perStack ? sk.perStack * r.layers : 0;
      const ten = sk.multiplier + stackMult * (1 + (r.perStackBonus || 0) / 100);
      const multLabel = isHarmonyResponse ? L.text("响应系数") : L.text("倍率");
      let formula = `${multLabel} ＝ ${expr}`;
      if (sk.perStack || /[+×]/.test(sk.formula)) formula += ` ＝ ${tnum(sk.multiplier + stackMult)}%`;
      if (sk.perStack && r.perStackBonus) formula += `; ${L.text(sk.stackLabel)} ${L.text("增加部分")} ×(1 + ${tnum(r.perStackBonus)}%) ＝ ${tnum(ten)}%`;
      if (lv !== 10) formula += ` ×${skillLevelRatio(lv)} (${L.t("common.levelShort", { value: lv })})`;
      if (r.multAdd) formula += ` + ${tnum(r.multAdd)}% (${L.text("倍率增加")})`;
      if (lv !== 10 || r.multAdd) formula += ` ＝ ${tnum(r.panel.baseMult)}%`;
      if (r.totals.skillMultBonus) formula += ` ×(1 + ${r.totals.skillMultBonus}% ${L.text("技能倍率提升")}) ＝ ${tnum(r.panel.skillMult * 100)}%`;
      const displayName = selectedSk.id !== sk.id ? `${L.skillName(selectedSk)} (${L.text("按")} ${L.skillName(sk)})` : L.skillName(sk);
      const tags = (sk.damageTags || []).length ? ` · ${L.text("标签")}: ${sk.damageTags.map((tag) => `"${esc(L.damageType(tag))}"`).join("/")}` : "";
      const harmonyNote = isHarmonyResponse ? `<div>${L.text("谐度响应伤害按谐度基础值、响应系数与谐度破坏增幅独立结算，不吃攻击、暴击、属性加成、类型加成。")}</div>` : "";
      return (
        `<div class="dmg-type"><div>${esc(L.text("本次"))}: <b>${esc(displayName)}</b> (${esc(L.category(selectedSk.category))})</div>` +
        `<div>${esc(L.text("此次伤害视为"))} "<span class="dt">${esc(L.damageType(sk.damageType))}</span>"${tags} · ${elementBadgeHTML(c.element)} · ${esc(baseName)} ${esc(multLabel)}</div>` +
        `<div class="formula">${esc(L.text(formula))}</div>${harmonyNote}</div>`
      );
    }

    function charPickerComboHTML(idx, triggerHTML, extraClass) {
      const opts = W.order.map(ch).slice().sort((a, b) => charSortValue(b) - charSortValue(a)).map((c) => ({
        v: c.id, icon: c.portrait, label: L.charName(c), betaVersion: c.betaVersion,
        search: (c.name + " " + L.officialName("chars", c.id) + " " + (c.aliases || []).join(" ") + " " + betaVersionLabel(c)).toLowerCase(),
      }));
      const items = opts.map((o) => `<li class="combo-opt" data-act="combo-pick" data-kind="char" data-slot="${idx}" data-value="${o.v}" data-search="${esc(o.search)}">
      ${comboIconHTML(o, "char")}
      <span class="combo-opt-lbl">${esc(o.label)}</span>${betaBadgeHTML(o.betaVersion)}
    </li>`).join("");
      const cls = extraClass ? ` ${extraClass}` : "";
      return `<div class="combo${cls}" data-kind="char">
    <button type="button" class="combo-btn" data-act="combo-toggle">${triggerHTML}</button>
    <div class="combo-pop"><input type="text" class="combo-search" placeholder="${esc(L.t("common.searchCharacter"))}" data-act="combo-search" /><ul class="combo-list">${items}</ul></div>
  </div>`;
    }

    function rankSelectHTML(slot, idx) {
      return `<select class="team-meta-select" data-act="rank-set" data-slot="${idx}" aria-label="${esc(L.text("武器阶级"))}">${[1, 2, 3, 4, 5].map((v) => `<option value="${v}" ${slot.rank === v ? "selected" : ""}>${esc(L.t("common.rank", { value: v }))}</option>`).join("")}</select>`;
    }

    function seqOptionLabel(slot, value) {
      const seqText = L.t("common.sequence", { value });
      if (!value) return seqText;
      const node = asList(ch(slot.char)?.chain).find((item, index) => num(item.seq ?? index + 1) === value);
      return node?.name ? `${seqText} · ${L.text(node.name)}` : seqText;
    }

    function seqSelectHTML(slot, idx) {
      return `<select class="team-meta-select team-seq-select" data-act="seq-set" data-slot="${idx}" aria-label="${esc(L.provider("共鸣链"))}">${[0, 1, 2, 3, 4, 5, 6].map((v) => `<option value="${v}" ${slot.seq === v ? "selected" : ""}>${esc(seqOptionLabel(slot, v))}</option>`).join("")}</select>`;
    }

    function echoCardPickerHTML(slot, idx) {
      const e = slot.echo;
      return `<div class="team-echo-row"><div class="team-gear-set-row">${teamEchoSetIconHTML(slot)}</div><div class="team-gear-lead-row">${teamLeadEchoPickerHTML(e, idx)}</div></div>`;
    }

    function echoDetailToggleHTML(e, idx) {
      return `<label class="team-echo-detail">
      <input type="checkbox" data-act="echo-detail" data-slot="${idx}" ${e?.detailMode ? "checked" : ""} />
      <span>${esc(L.text("详细声骸模式"))}</span>
    </label>`;
    }

    function teamEchoSetIconHTML(slot) {
      return echoSetIconGroupHTML(teamEchoSetIds(slot));
    }

    function teamEchoSetIds(slot) {
      const e = slot?.echo;
      if (e?.detailMode) {
        const ids = [];
        (ensureEchoDetail(slot, ch(slot.char))?.echoes || []).forEach((item) => {
          if (item.set && !ids.includes(item.set)) ids.push(item.set);
        });
        return ids.length ? ids : [e.primary];
      }
      if (!e || e.combo === "single5") return [e?.primary];
      if (e.combo === "split32") return [e.primary, e.secondary];
      if (e.combo === "split122") return [e.primary, e.secondary, e.tertiary];
      return [e.primary];
    }

    function teamLeadEchoPickerHTML(e, idx) {
      syncEchoLead(e);
      const choices = leadChoicesForEcho(e);
      if (!choices.length) return `<div class="team-gear-summary team-gear-summary--muted">${esc(L.text("未录首位单体"))}</div>`;
      const current = choices.find((choice) => choice.key === e.lead);
      if (e.detailMode) {
        return `<div class="team-gear-summary"><span class="team-gear-label">${esc(leadEchoDisplayName(current))}</span></div>`;
      }
      return `<span class="team-gear-select-wrap"><select class="team-gear-select" data-act="elead" data-slot="${idx}" aria-label="${esc(L.text("首位声骸"))}">
      ${choices.map((choice) => `<option value="${choice.key}" ${choice.key === e.lead ? "selected" : ""}>${esc(leadEchoDisplayName(choice))}</option>`).join("")}
    </select></span>`;
    }

    function teamCardHTML(idx) {
      const slot = state.slots[idx];
      const c = ch(slot.char);
      if (!c) {
        return `<div class="team-card team-card-empty">
      ${charPickerComboHTML(idx, `<span class="team-avatar team-avatar-add">＋</span><span class="team-empty-label">${esc(L.text("添加队友"))}</span>`, "team-avatar-combo")}
    </div>`;
      }
      const e = slot.echo;
      syncEchoLead(e, c.element);
      const avatarCore = c.portrait
        ? `<img class="team-avatar" src="${esc(c.portrait)}" alt="" onerror="this.style.display='none'" />`
        : `<span class="team-avatar team-avatar-fallback">${esc(c.name.slice(0, 1))}</span>`;
      const avatar = `<span class="team-avatar-wrap">${avatarCore}<span class="team-avatar-level">${esc(L.t("common.levelShort", { value: 90 }))}</span></span>`;
      const charTrigger = `${avatar}<span class="team-char-copy"><span class="team-char-name-line"><b>${esc(L.charName(c))}</b></span><span class="team-char-meta">${esc(L.element(c.element))}</span></span><span class="combo-caret">▾</span>`;
      const currentLead = leadChoicesForEcho(e).find((choice) => choice.key === e.lead);
      const cardBeta = betaBadgeHTML(c, wp(slot.weapon), ...teamEchoSetIds(slot).map(sonataById), currentLead?.lead);
      return `<div class="team-card${idx === state.outputIdx ? " on" : ""}" data-act="output" data-slot="${idx}">
      ${cardBeta ? `<div class="team-card-beta">${cardBeta}</div>` : ""}
      <button type="button" class="team-card-clear" data-act="clear-slot" data-slot="${idx}" aria-label="${esc(L.text("删除"))} ${esc(L.charName(c))}">✕</button>
      <div class="team-card-head">
        ${charPickerComboHTML(idx, charTrigger, "team-char-combo")}
      </div>
      <div class="team-seq-row">${seqSelectHTML(slot, idx)}</div>
      <div class="team-weapon-row">
        ${comboHTML("weapon", idx)}
        ${rankSelectHTML(slot, idx)}
      </div>
      ${echoCardPickerHTML(slot, idx)}
      ${echoDetailToggleHTML(e, idx)}
    </div>`;
    }

    function teamCardsHTML() {
      return `<div class="team-cards">${state.slots.map((s, i) => teamCardHTML(i)).join("")}</div>`;
    }

    function activeDamageMode() {
      return DAMAGE_MODES[state.damageMode] ? state.damageMode : "expected";
    }

    function detailSetOptions(selected) {
      return SONATAS.slice()
        .sort((a, b) => sonataSortValue(a) - sonataSortValue(b))
        .map((set) => `<option value="${set.id}" ${set.id === selected ? "selected" : ""}>${esc(L.sonataName(set) + betaVersionSuffix(set))}</option>`)
        .join("");
    }

    function detailCostOptions(slot, echoIdx, selected) {
      const echoes = slot.echo.detail?.echoes || [];
      const otherCost = echoes.reduce((total, item, i) => total + (i === echoIdx ? 0 : num(item.cost)), 0);
      return ECHO_COSTS.map((cost) => `<option value="${cost}" ${cost === selected ? "selected" : ""} ${otherCost + cost > 12 ? "disabled" : ""}>${cost}C</option>`).join("");
    }

    function detailMainOptions(item, c) {
      const options = echoMainOptions(item.cost, c);
      const selected = options.some((opt) => opt.key === item.main) ? item.main : options[0]?.key;
      return options.map((opt) => `<option value="${esc(opt.key)}" ${opt.key === selected ? "selected" : ""}>${esc(opt.label)} ${tnum(opt.value)}${opt.key.endsWith("Flat") ? "" : "%"}</option>`).join("");
    }

    function detailLeadOptions(slot, item) {
      const choices = leadChoicesForEcho({ detailMode: true, detail: { echoes: [{ set: item.set }] } });
      if (!choices.length) return `<option value="">${esc(L.t("common.unselected"))} · ${num(item.cost) || 4}c</option>`;
      return choices.map((choice) => `<option value="${esc(choice.key)}" ${choice.key === slot.echo.lead ? "selected" : ""}>${esc(leadEchoDisplayName(choice))} · ${choice.cost}c</option>`).join("");
    }

    function detailSubRows(slot, idx, echoIdx, item, c) {
      const options = echoSubOptions(c);
      return (item.subs || []).map((sub, subIdx) => {
        const values = echoSubValues(sub.key);
        const usedKeys = new Set((item.subs || []).map((other, otherIdx) => otherIdx === subIdx ? "" : other.key).filter(Boolean));
        return `<div class="echo-detail-sub">
        <select data-act="detail-sub-key" data-slot="${idx}" data-echo-index="${echoIdx}" data-sub-index="${subIdx}" aria-label="${esc(L.text("副词条"))}">
          <option value="">${esc(L.text("副词条"))}</option>
          ${options.map((opt) => `<option value="${esc(opt.key)}" ${opt.key === sub.key ? "selected" : ""} ${usedKeys.has(opt.key) ? "disabled" : ""}>${esc(opt.label)}</option>`).join("")}
        </select>
        <select data-act="detail-sub-value" data-slot="${idx}" data-echo-index="${echoIdx}" data-sub-index="${subIdx}" ${sub.key ? "" : "disabled"} aria-label="${esc(L.text("副词条数值"))}">
          ${values.length ? values.map((v) => `<option value="${v}" ${num(v) === num(sub.value) ? "selected" : ""}>${tnum(v)}${sub.key && sub.key.endsWith("Flat") ? "" : "%"}</option>`).join("") : `<option value="0">—</option>`}
        </select>
      </div>`;
      }).join("");
    }

    function echoDetailSetPicker(slot, idx, echoIdx, item) {
      const set = sonataById(item.set);
      return `<label class="echo-detail-field echo-detail-field--set">
      <span>${esc(L.text("套装"))}</span>
      <span class="echo-detail-set-select">${sonataIconHTML(set)}<select data-act="detail-echo-set" data-slot="${idx}" data-echo-index="${echoIdx}" aria-label="${esc(L.text("声骸套装"))}">${detailSetOptions(item.set)}</select>${betaBadgeHTML(set)}</span>
    </label>`;
    }

    function echoDetailPieceHTML(slot, idx, echoIdx, item, c, isLead) {
      const fixed = echoFixedMain(item.cost);
      return `<div class="echo-detail-card">
      <div class="echo-detail-title">${esc(isLead ? L.text("首位声骸") : L.text(`声骸 ${echoIdx + 1}`))}</div>
      ${echoDetailSetPicker(slot, idx, echoIdx, item)}
      ${isLead ? `<label class="echo-detail-field"><span>${esc(L.text("首位"))}</span><select data-act="detail-lead" data-slot="${idx}" aria-label="${esc(L.text("首位声骸"))}">${detailLeadOptions(slot, item)}</select></label>` : ""}
      ${isLead ? "" : `<label class="echo-detail-field"><span>${esc(L.t("common.cost"))}</span><select data-act="detail-echo-cost" data-slot="${idx}" data-echo-index="${echoIdx}" aria-label="${esc(L.t("common.cost"))}">${detailCostOptions(slot, echoIdx, item.cost)}</select></label>`}
      <label class="echo-detail-field"><span>${esc(L.text("主词条"))}</span><select data-act="detail-echo-main" data-slot="${idx}" data-echo-index="${echoIdx}" aria-label="${esc(L.text("主词条"))}">${detailMainOptions(item, c)}</select></label>
      <div class="echo-detail-fixed">${esc(L.text("固定"))}: ${esc(L.text(fixed.label))} ${esc(tnum(fixed.value))}</div>
      <div class="echo-detail-subs">${detailSubRows(slot, idx, echoIdx, item, c)}</div>
    </div>`;
    }

    function echoDetailSummaryHTML(slot, c) {
      const summary = echoDetailSummary(slot, c);
      const buffs = window.WUWA_EQUIPMENT.sonataBuffs(slot);
      const setEffects = buffs.filter((b) => b.pieceTag !== "首位单体效果").map((b) => `${L.pieceTag(b.pieceTag)} · ${L.buffLabel(b)}`);
      const leadEffects = buffs.filter((b) => b.pieceTag === "首位单体效果").map((b) => L.buffLabel(b));
      const fieldText = Object.entries(summary.fields)
        .filter(([, v]) => num(v))
        .slice(0, 6)
        .map(([key, value]) => `${statLabel(key, c)} ${tnum(value)}${key.endsWith("Flat") ? "" : "%"}`)
        .join(" / ");
      return `<div class="echo-detail-card echo-detail-card--summary">
      <div class="echo-detail-title">${esc(L.text("声骸汇总"))}</div>
      <div class="echo-detail-summary-line">${esc(L.t("common.cost"))} ${summary.totalCost}/12</div>
      <div class="echo-detail-summary-line">${esc(L.text("命中词条"))} ${summary.hitSubs}/${summary.selectedSubs}</div>
      <div class="echo-detail-summary-text"><b>${esc(L.text("套装效果"))}</b>${esc(setEffects.join(" / ") || L.text("未触发"))}</div>
      <div class="echo-detail-summary-text"><b>${esc(L.text("首位效果"))}</b>${esc(leadEffects.join(" / ") || L.t("common.unselected"))}</div>
      <div class="echo-detail-summary-text"><b>${esc(L.text("面板汇总"))}</b>${esc(fieldText || L.text("无"))}</div>
    </div>`;
    }

    function echoDetailPanelHTML(slot, idx) {
      if (!slot.echo?.detailMode || !slot.char) return "";
      const c = ch(slot.char);
      const detail = ensureEchoDetail(slot, c);
      const echoes = detail?.echoes || [];
      return `<div class="echo-detail-panel">
      <div class="stage-card-head module-head">
        <div class="module-title"><h2>${esc(L.text("声骸详情"))} <span class="module-title-name">${esc(L.charName(c))}</span>${betaBadgeHTML(c)}</h2></div>
      </div>
      <div class="echo-detail-grid">
        ${echoDetailSummaryHTML(slot, c)}
        ${echoes.map((item, echoIdx) => echoDetailPieceHTML(slot, idx, echoIdx, item, c, echoIdx === 0)).join("")}
      </div>
    </div>`;
    }

    function stageTopbarHTML() {
      const langs = L.available();
      return `<section class="stage-topbar">
    <div class="stage-brand">
      <div>
        <h1>${esc(L.t("app.title"))}</h1>
        <p>${esc(L.t("app.subtitle"))}</p>
      </div>
    </div>
    <div class="stage-actions">
      <a class="stage-github-link" href="https://github.com/chuan-hane/wuwa-damage-calculator" target="_blank" rel="noopener noreferrer" aria-label="${esc(L.t("topbar.githubAria"))}">${esc(L.t("topbar.githubLabel"))}</a>
      <div class="stage-language" role="group" aria-label="${esc(L.t("topbar.languageAria"))}">
        ${langs.map((lang) => `<button type="button" class="stage-language-btn${lang.code === state.lang ? " on" : ""}" data-act="language" data-lang="${esc(lang.code)}" aria-pressed="${lang.code === state.lang ? "true" : "false"}">${esc(lang.shortLabel)}</button>`).join("")}
      </div>
    </div>
  </section>`;
    }

    function damageMetricCardsHTML(r) {
      const isHarmonyResponse = r.damageModel === "harmonyResponse";
      const s1 = state.slots[state.outputIdx];
      const c = ch(s1.char);
      const tree = c?.base?.tree || {};
      const statDisplay = isHarmonyResponse ? r.harmonyBase : r.panel.stat === "hp" ? r.panel.displayHp : r.panel.stat === "defense" ? r.panel.displayDef : r.panel.displayAtk;
      const statRaw = r.panel.stat === "hp" ? r.panel.totalHp : r.panel.stat === "defense" ? r.panel.totalDef : r.panel.totalAtk;
      const statLabel = isHarmonyResponse ? L.text("谐度基础值") : L.stat(r.panel.stat);
      const totalResShred = num(state.enemy.resShred) + num(r?.totals?.resShred);
      const effectiveRes = num(state.enemy.res) - totalResShred;
      const resSub = `${L.text("抗")}${tnum(state.enemy.res)}% + ${L.text("减抗")}${tnum(totalResShred)}%`;
      const damageMode = activeDamageMode();
      const critMul = isHarmonyResponse ? 1 : damageMode === "expected" ? 1 + r.cr * (r.cd - 1) : damageMode === "crit" ? r.cd : 1;
      const lvRatio = r.sk ? skillLevelRatio(r.skLevel) : 1;
      const rawSkillMult = r.sk ? num(r.sk.multiplier) : 0;
      const stackMult = r.sk?.perStack ? num(r.sk.perStack) * num(r.layers) * (1 + num(r.perStackBonus) / 100) : 0;
      const levelMult = r.sk ? skillMultValue(rawSkillMult + stackMult, lvRatio) : 0;
      const skillMultBonus = num(r.totals?.skillMultBonus);
      const skType = r.sk?.damageType;
      const echoElemLabel = `${L.text("声骸属性伤害加成")}${c?.element ? formulaParen(L.element(c.element)) : ""}`;
      const echoTypeLabel = `${L.text("声骸类型伤害加成")}${skType ? formulaParen(L.damageType(skType)) : ""}`;
      const echoBonusParts = [
        formulaSource("属性树", tree.elemBonus, "%"),
        formulaSourceText(echoElemLabel, r.es?.elem?.[c?.element], "%"),
        formulaSourceText(echoTypeLabel, skType ? r.es?.type?.[skType] : 0, "%"),
      ];
      const normalBonusParts = [
        formulaSource("伤害加成 Buff", r.rawTotals?.damageBonus, "%"),
        formulaSource("类型加成 Buff", r.rawTotals?.typeBonus, "%"),
        ...echoBonusParts,
      ];
      const statTip = isHarmonyResponse
        ? `${L.text("谐度基础值")} = ${fmt(r.harmonyBase)}\n${L.sourceJoin(L.text("来源"), L.text(offsetCostLabel(r.harmonyBase)))}`
        : `${statLabel} = ${fmt(statDisplay)}${L.paren(L.text("显示取整"))}\n${L.text("伤害计算使用")} ${tnum(statRaw)}`;
      const stackPart = stackMult ? ` + ${L.text("层数倍率")} ${tnum(stackMult)}%` : "";
      const skillTip = `${L.text("技能倍率")} = (((${L.text("基础倍率")} ${tnum(rawSkillMult)}%${stackPart}) × ${L.text("等级系数")} ${tnum(lvRatio)}) + ${L.text("倍率增加")} ${tnum(r.multAdd)}%) × (1 + ${L.text("技能倍率提升")} ${tnum(skillMultBonus)}%) = ${tnum(r.panel.skillMult * 100)}%\n${L.text("等级")} ${tnum(r.skLevel)}`;
      const bonusCard = isHarmonyResponse
        ? { k: L.text("谐度增幅"), v: `<b>${esc(fx(r.breakAmpFactor))}</b>`, sub: L.pointText(esc(tnum(r.breakAmp))), tip: `${L.text("谐度增幅")} = 1 + ${L.text("谐度破坏增幅")} ${tnum(r.breakAmp)} / 100 = ${fx(r.breakAmpFactor)}` }
        : { k: L.text("加成区"), v: `<b>${esc(tnum(r.bonus))}</b>`, sub: `+${esc(tnum((r.bonus - 1) * 100))}% · ${L.text("属性+类型")}`, tip: `${L.text("加成区")} = 1 + (${formulaSources(normalBonusParts, "0%")}) / 100 = ${tnum(r.bonus)}` };
      const amplifyCard = isHarmonyResponse
        ? { k: L.text("响应增伤"), v: `<b>${esc(tnum(r.amplify * r.vuln))}</b>`, sub: L.text("谐度响应专属加深/易伤"), tip: `${L.text("响应增伤")} = (1 + ${tnum(r.totals.amplify)}%) × (1 + ${tnum(r.totals.vulnerability)}%) = ${tnum(r.amplify * r.vuln)}` }
        : { k: L.text("加深区"), v: `<b>${esc(tnum(r.amplify))}</b>`, sub: `+${esc(tnum((r.amplify - 1) * 100))}% · ${L.text("独立乘区")}`, tip: `${L.text("加深区")} = 1 + ${L.text("伤害加深 Buff")} ${tnum(r.rawTotals.amplify)}% / 100 = ${tnum(r.amplify)}` };
      const vulnBuff = num(r.rawTotals?.vulnerability);
      const vulnCard = { k: L.text("减伤/易伤"), v: `<b>${esc(tnum(r.vuln))}</b>`, sub: `${L.text("易伤")}${esc(tnum(state.enemy.vulnerability))}% · ${L.text("减伤")}${esc(tnum(state.enemy.dmgReduction))}%`, tip: `${L.text("减伤/易伤")} = max(0, 1 - ${L.text("受到伤害减少")} ${tnum(state.enemy.dmgReduction)}% + ${L.text("易伤")} ${tnum(state.enemy.vulnerability)}% + ${L.text("易伤 Buff")} ${tnum(vulnBuff)}%) = ${tnum(r.vuln)}` };
      let critCard = { k: L.text("不可暴击"), v: "<b>1</b>", sub: L.text("谐度响应") };
      if (!isHarmonyResponse) {
        switch (damageMode) {
          case "expected":
            critCard = { k: L.text("期望修正"), v: `<b>${esc(tnum(critMul))}</b>`, sub: `${L.stat("暴击率")} ${esc(tnum(r.panel.critRate))}%`, tip: `${L.text("期望修正")} = ${L.stat("暴击率")} ${tnum(r.panel.critRate)}% × ${L.stat("暴击伤害")} ${tnum(r.panel.critDamage)}% + (1 - ${L.stat("暴击率")}) = ${tnum(critMul)}` };
            break;
          case "crit":
            critCard = { k: L.text("暴击伤害"), v: `<b>${esc(tnum(critMul))}</b>`, sub: `${L.stat("暴击伤害")} ${esc(tnum(r.panel.critDamage))}%`, tip: `${L.text("暴击伤害")} = ${tnum(r.panel.critDamage)}% / 100 = ${tnum(critMul)}` };
            break;
          default:
            critCard = { k: L.text("非暴伤害"), v: "<b>1</b>", sub: L.text("不计算暴击"), tip: `${L.text("非暴伤害")} = 1` };
        }
      }
      if (isHarmonyResponse) critCard.tip = `${L.text("不可暴击")} = 1`;
      const totalDefShred = num(r.defense?.totalDefShred);
      const totalDefIgnore = num(r.defense?.totalDefIgnore);
      const levelTerm = 800 + 8 * num(state.enemy.charLevel);
      const enemyDefTerm = 8 * num(state.enemy.enemyLevel) + 792;
      const charLevelText = `${L.text("我方等级")}${tnum(state.enemy.charLevel)}`;
      const enemyLevelText = `${L.text("敌方等级")}${tnum(state.enemy.enemyLevel)}`;
      const defTip = `${L.text("防御系数")} = (800 + 8 × ${charLevelText}) / ((800 + 8 × ${charLevelText}) + (8 × ${enemyLevelText} + 792) × (1 - ${L.text("减防")} ${tnum(totalDefShred)}%) × (1 - ${L.text("防御无视")} ${tnum(totalDefIgnore)}%)) = ${fx(r.defFactor)}`;
      const resTip = `${L.text("抗性系数")} = f(${tnum(effectiveRes)}%) = ${fx(r.resFactor)}\n${L.text("抗性")} ${tnum(state.enemy.res)}% - ${L.text("减抗")} ${tnum(totalResShred)}%`;
      const finalCard = isHarmonyResponse
        ? { k: L.text("最终伤害"), v: `<b>${r.finalDmg === 1 ? esc(L.text("不参与")) : esc(tnum(r.finalDmg))}</b>`, sub: L.text("明确指定才参与"), tip: `${L.text("最终伤害")} = 1 + ${L.text("明确指定 Buff")} ${tnum(r.totals.finalDmg)}% / 100 = ${tnum(r.finalDmg)}` }
        : { k: L.text("最终伤害"), v: `<b>${esc(tnum(r.finalDmg))}</b>`, sub: `+${esc(tnum((r.finalDmg - 1) * 100))}% · ${L.text("最终乘区")}`, tip: `${L.text("最终伤害")} = 1 + (${L.text("手动")} ${tnum(state.enemy.finalDmg)}% + Buff ${tnum(r.totals.finalDmg)}%) / 100 = ${tnum(r.finalDmg)}` };
      const cards = [
        { k: L.text("属性基数"), v: `<b>${esc(fmt(statDisplay))}</b>`, sub: esc(statLabel), tip: statTip },
        { k: L.text("技能倍率"), v: `<b>${esc(`${tnum(r.panel.skillMult * 100)}%`)}</b>`, sub: esc(r.sk ? L.damageType(r.sk.damageType) : "—"), tip: skillTip },
        bonusCard,
        amplifyCard,
        ...(isHarmonyResponse ? [] : [vulnCard]),
        critCard,
        { k: L.text("防御系数"), v: `<b>${esc(fx(r.defFactor))}</b>`, sub: `${L.text("我")}${esc(tnum(state.enemy.charLevel))} / ${L.text("敌")}${esc(tnum(state.enemy.enemyLevel))}${L.text("级")}`, tip: defTip },
        { k: L.text("抗性系数"), v: `<b>${esc(fx(r.resFactor))}</b>`, sub: esc(resSub), tip: resTip },
        finalCard,
      ];
      return cards.map(metricFormulaCardHTML).join("");
    }

    function stateChoiceKey(label) {
      return "stateChoice_" + label;
    }

    function combatStateDefaultValue(def) {
      const options = asList(def?.options);
      if (def?.defaultValue != null) return def.defaultValue;
      if (def?.required) return (options[0] && options[0].value) || "";
      return "";
    }

    function combatStateFiltersSkills(def) {
      return !!def && (def.filterSkills === true || def.skillFilter === true || STATE_SKILL_FILTER_KINDS.has(def.kind));
    }

    function combatStateDefForSlot(slot, stateName) {
      const c = ch(slot?.char);
      return asList(c?.combatStates).find((def) => {
        if (def.id === stateName) return true;
        return asList(def.options).some((opt) => opt.value === stateName);
      }) || null;
    }

    function impliedCombatStateValue(slot, def) {
      const implied = asList(resolvedSkill(slot)?.impliedStates);
      const exact = implied.find((s) => stateValueBelongsToDef(s, def));
      return exact || "";
    }

    function selectedCombatStateValue(slot, def) {
      const stored = combatStateStoredValue(slot, def);
      const configured = normalizeCombatStateStoredValue(stored, def) || combatStateDefaultValue(def);
      if (combatStateFiltersSkills(def)) return configured;
      return impliedCombatStateValue(slot, def) || configured;
    }

    function combatStateStoredValue(slot, def) {
      const toggles = slot?.toggles || {};
      return toggles[stateChoiceKey(def.id)] ?? toggles[stateChoiceKey(def.label)] ?? toggles[stateChoiceKey(def.idLabel)];
    }

    function normalizeCombatStateStoredValue(value, def) {
      if (!value) return "";
      const opt = asList(def.options).find((item) =>
        value === item.value || value === item.label || value === item.valueLabel || value === item.title
      );
      if (opt) return opt.value;
      if (value === def.id || value === def.label || value === def.idLabel) return def.id;
      return value;
    }

    function stateValueMatches(value, stateName, def) {
      if (!value) return false;
      if (stateName === def.id) return stateValueBelongsToDef(value, def);
      return value === stateName;
    }

    function stateValueBelongsToDef(value, def) {
      return value === def.id || asList(def?.options).some((opt) => opt.value === value);
    }

    function combatStateReady(slot, stateName) {
      const def = combatStateDefForSlot(slot, stateName);
      if (!def) return slot?.toggles?.["state_" + stateName] === true;
      return stateValueMatches(selectedCombatStateValue(slot, def), stateName, def);
    }

    function stateRequirementReady(slot, requirement) {
      const states = asList(requirement);
      return !states.length || states.some((stateName) => combatStateReady(slot, stateName));
    }

    function allStateRequirementsReady(slot, requirement) {
      return asList(requirement).every((stateName) => combatStateReady(slot, stateName));
    }

    function buffStateRequirementsReady(slot, buff) {
      return stateRequirementReady(slot, buff.requiresState) && allStateRequirementsReady(slot, buff.requiresAllStates);
    }

    function effectTypeStateRequirementReady(slot, key) {
      const c = ch(slot?.char);
      const requirements = c?.effectTypeRequiresState || c?.effectTypeRequirements || {};
      const raw = Object.entries(requirements).find(([effect]) => effectKeyOf(effect) === key)?.[1];
      if (!raw) return true;
      if (typeof raw === "string" || Array.isArray(raw)) return stateRequirementReady(slot, raw);
      return stateRequirementReady(slot, raw.requiresState) && allStateRequirementsReady(slot, raw.requiresAllStates);
    }

    function effectKeysForSlot(slot) {
      const c = ch(slot.char);
      if (!c) return [];
      const keys = new Set((c.effectTypes || [])
        .map(effectKeyOf)
        .filter((key) => key !== "none" && effectTypeStateRequirementReady(slot, key)));
      const buffs = [
        ...(c.buffs || []),
        ...(c.chain || []).flatMap((node) => (node.buffs || []).map((buff) => ({ ...buff, seq: buff.seq ?? node.seq }))),
      ];
      buffs.forEach((buff) => {
        if (buff.seq && slot.seq < buff.seq) return;
        if (!buffStateRequirementsReady(slot, buff)) return;
        const key = effectKeyOf(buff.effect);
        if (key !== "none") keys.add(key);
      });
      return [...keys];
    }

    function teamEffectKeys() {
      const keys = new Set();
      state.slots.forEach((slot) => {
        effectKeysForSlot(slot).forEach((key) => keys.add(key));
      });
      return EFFECT_ORDER.filter((key) => keys.has(key));
    }

    function effectProvidersForKey(key) {
      return state.slots.map((slot, idx) => ({ slot, idx, c: ch(slot.char) }))
        .filter((item) => item.c && effectKeysForSlot(item.slot).includes(key));
    }

    function visibleEffectResult(r, availableKeys) {
      const e = r.effect || {};
      if (!availableKeys.length || !availableKeys.includes(e.key)) return { enabled: false, key: "none", def: EFFECT_DEFS.none };
      return e;
    }

    function effectValueHTML(r, availableKeys = teamEffectKeys()) {
      const e = visibleEffectResult(r, availableKeys);
      if (!e.enabled) return L.t("common.unselected");
      if (e.kind === "defShred") return `-${tnum(e.defShred)}% ${L.stat("防御")}`;
      if (!e.valid) return "—";
      return fmt(e.damage);
    }

    function effectCapTextHTML(r, availableKeys = teamEffectKeys()) {
      const e = visibleEffectResult(r, availableKeys);
      if (!e.enabled) return L.text("未启用");
      const label = e.rageCap != null ? L.text("效应/爆发上限") : L.text("上限");
      if (!e.capBonus?.value) return `${label} ${L.stackText(e.cap)}`;
      const base = num(e.capBase ?? e.cap - e.capBonus.value);
      const parts = effectCapBonusParts(e);
      if (!parts.length) return `${label} ${L.stackText(e.cap)}`;
      return `${label}=${L.stackTextCompact(tnum(base))}+${parts.join("+")}=${L.stackTextCompact(tnum(e.cap))}`;
    }

    function effectCapSourceLabel(source) {
      return String(source || "")
        .replace(/·延奏(?:·.*)?$/, "延奏")
        .replace(/·链(\d+)·.*$/, "$1链");
    }

    function effectCapBonusParts(e) {
      let remaining = Math.max(0, num(e.cap) - num(e.capBase));
      return (e.capBonus?.parts || []).map((part) => {
        const value = Math.min(num(part.value), remaining);
        remaining -= value;
        if (value <= 0) return "";
        return `${L.sourceTitle(effectCapSourceLabel(part.source))}${L.stackTextCompact(tnum(value))}`;
      }).filter(Boolean);
    }

    function knownEffectStacksText(def) {
      const stacks = (def.allowedStacks || Object.keys(def.rates || {}).map((key) => Number(key)).filter(Number.isFinite))
        .sort((a, b) => a - b);
      return stacks.length ? stacks.join("/") : L.text("已知");
    }

    function effectFormulaHTML(r, availableKeys = teamEffectKeys()) {
      const e = visibleEffectResult(r, availableKeys);
      if (!e.enabled) return L.text("效应伤害独立结算，不进入上方普通伤害。");
      if (e.kind === "defShred") return `<div class="effect-equation">${esc(L.effect(e.def))}: ${L.stackText(e.stacks)} × ${tnum(e.def.valuePerStack)}% = <b>${tnum(e.defShred)}%</b> ${L.text("减防")}，${L.text("已计入上方防御系数")}</div>`;
      if (!e.valid) return `${esc(L.effect(e.def))}${L.text("当前只录入")}${knownEffectStacksText(e.def)}${L.text("层倍率。")}`;
      const baseValue = e.kind === "attack" ? tnum(e.attack) : tnum(e.base);
      const multValue = e.kind === "attack" ? `${tnum(e.rate)}%` : L.text("层数基础");
      const rateParts = e.kind === "attack" ? [`${esc(L.effectShort(e.def))} ${L.stackText(e.stacks)} ${tnum(e.baseRate)}%`] : [];
      if (e.kind === "attack" && e.rageCap != null) rateParts.push(`${L.text("爆发")} ${L.stackText(e.rageStacks)} ${tnum(e.rageRate)}%`);
      if (e.kind === "attack" && e.extraRate) rateParts.push(`${L.text("额外")} ${tnum(e.extraRate)}%`);
      const multDetail = e.kind === "attack" ? rateParts.join(" + ") : `${esc(L.effectShort(e.def))} ${L.stackText(e.stacks)}`;
      const provider = e.providerName ? `${e.providerName} ${L.stat("攻击")}` : L.text("提供者攻击");
      const effectDeepenFactor = Math.max(0, 1 + num(e.deepen) / 100);
      const baseTip = e.kind === "attack"
        ? `${L.text("效应基础值")} = ${provider} ${tnum(e.attack)} × ${L.text("效应倍率")} ${tnum(e.rate)}% / 100 = ${tnum(e.base)}`
        : `${L.text("效应基础值")} = ${L.effect(e.def)} ${L.stackText(e.stacks)} ${L.text("层固定基础值")} ${tnum(e.base)}`;
      const multTip = e.kind === "attack"
        ? `${L.text("效应倍率")} = ${formulaSources(rateParts, "0%")} = ${tnum(e.rate)}%`
        : `${L.text("效应倍率")} = ${L.effectShort(e.def)} ${L.stackText(e.stacks)}`;
      const deepenTip = `${L.text("效应加深")} = max(0, 1 + (${L.text("手动")} ${tnum(e.manualDeepen)}% + Buff ${tnum(e.buffDeepen)}%) / 100) = ${fx(effectDeepenFactor)}`;
      const finalTip = `${L.text("最终伤害")} = 1 + Buff ${tnum(e.buffFinalDmg || 0)}% / 100 = ${fx(e.finalDmgFactor || 1)}`;
      const effectLevelTerm = 800 + 8 * num(e.charLevel);
      const effectEnemyDefTerm = 8 * num(e.enemyLevel) + 792;
      const effectDefShred = num(e.manualDefShred) + num(e.buffDefShred);
      const effectDefIgnore = num(e.manualDefIgnore) + num(e.buffDefIgnore);
      const charLevelText = `${L.text("我方等级")}${tnum(e.charLevel)}`;
      const enemyLevelText = `${L.text("敌方等级")}${tnum(e.enemyLevel)}`;
      const defTip = `${L.text("防御系数")} = (800 + 8 × ${charLevelText}) / ((800 + 8 × ${charLevelText}) + (8 × ${enemyLevelText} + 792) × (1 - ${L.text("减防")} ${tnum(effectDefShred)}%) × (1 - ${L.text("防御无视")} ${tnum(effectDefIgnore)}%)) = ${fx(e.defFactor)}\n${tnum(effectLevelTerm)} / (${tnum(effectLevelTerm)} + ${tnum(effectEnemyDefTerm)} × (1 - ${tnum(effectDefShred)}%) × (1 - ${tnum(effectDefIgnore)}%))`;
      const resTip = `${L.text("抗性系数")} = f(${tnum(e.res)}%) = ${fx(e.resFactor)}\n${L.text("抗性")} ${tnum(e.manualRes)}% - ${L.text("减抗")} ${tnum(e.manualResShred)}% - Buff ${tnum(e.buffResShred)}%`;
      return `<div class="effect-mini-strip effect-mini-strip--formula formula-strip formula-strip--multiply">
        ${miniCardHTML("效应基础值", baseValue, e.kind === "attack" ? provider : L.effect(e.def), baseTip)}
        ${miniCardHTML("效应倍率", multValue, multDetail, multTip)}
        ${miniCardHTML("效应加深", fx(effectDeepenFactor), `+${tnum(e.deepen)}%`, deepenTip)}
        ${miniCardHTML("最终伤害", fx(e.finalDmgFactor || 1), `Buff ${tnum(e.buffFinalDmg || 0)}%`, finalTip)}
        ${miniCardHTML("防御系数", fx(e.defFactor), `${L.text("我")}${tnum(e.charLevel)} / ${L.text("敌")}${tnum(e.enemyLevel)}`, defTip)}
        ${miniCardHTML("抗性系数", fx(e.resFactor), `${L.text("抗性")} ${tnum(e.res)}%`, resTip)}
      </div>`;
    }

    function effectStackControlHTML(e) {
      if (!e.enabled) return `<input type="number" disabled value="" />`;
      const def = e.def || {};
      if (def.allowedStacks) {
        const options = def.allowedStacks.filter((n) => n <= e.cap);
        return `<select data-act="effect-stacks">${options.map((n) => `<option value="${n}" ${n === e.stacks ? "selected" : ""}>${L.stackText(n)}</option>`).join("")}</select>`;
      }
      return `<input type="number" min="0" max="${e.cap}" step="1" data-act="effect-stacks" value="${e.stacks}" />`;
    }

    function effectRageStackControlHTML(e) {
      if (!e.enabled || e.rageCap == null) return "";
      return `<label class="effect-field"><span>${esc(L.text("爆发层数"))}</span><input type="number" min="0" max="${e.rageCap}" step="1" data-act="effect-rage-stacks" value="${e.rageStacks}" /></label>`;
    }

    function effectProviderControlHTML(e) {
      if (!e.enabled) return `<label class="effect-field"><span>${esc(L.text("提供者"))}</span><select disabled><option>—</option></select></label>`;
      const providers = effectProvidersForKey(e.key);
      if (!providers.length) return `<label class="effect-field"><span>${esc(L.text("提供者"))}</span><select disabled><option>—</option></select></label>`;
      const selectedIdx = providers.some((item) => item.idx === e.providerIdx) ? e.providerIdx : providers[0].idx;
      const options = providers.map((item) => `<option value="${item.idx}" ${item.idx === selectedIdx ? "selected" : ""}>${esc(L.charName(item.c))}</option>`).join("");
      return `<label class="effect-field"><span>${esc(L.text("提供者"))}</span><select data-act="effect-provider">${options}</select></label>`;
    }

    function effectCalcHTML(r) {
      const availableKeys = teamEffectKeys();
      if (!availableKeys.length) return "";
      const calc = state.effectCalc || {};
      const e = visibleEffectResult(r, availableKeys);
      const selectedKey = e.enabled ? e.key : "none";
      const disabled = e.enabled ? "" : "disabled";
      const deepen = calc.deepen ?? 0;
      const options = ["none", ...availableKeys].map((key) => {
        const def = EFFECT_DEFS[key];
        return `<option value="${key}" ${key === selectedKey ? "selected" : ""}>${esc(L.effect(def))}</option>`;
      }).join("");
      return `<div class="effect-calc">
    <div class="effect-head">
      <span class="effect-title">${esc(L.text("效应伤害"))}</span>
      <b class="effect-value" id="effect-value">${esc(effectValueHTML(r, availableKeys))}</b>
      <span class="effect-cap-text" id="effect-cap-text">${esc(effectCapTextHTML(r, availableKeys))}</span>
    </div>
    <div class="effect-controls">
      <label class="effect-field"><span>${esc(L.text("效应"))}</span><select data-act="effect-key">${options}</select></label>
      ${effectProviderControlHTML(e)}
      <label class="effect-field"><span>${esc(L.text("层数"))}</span>${effectStackControlHTML(e)}</label>
      ${effectRageStackControlHTML(e)}
      <label class="effect-field"><span>${esc(L.text("手动加深%"))}</span><input type="number" step="0.1" data-act="effect-deepen" value="${esc(deepen)}" ${disabled} /></label>
    </div>
    <div class="effect-formula" id="effect-formula">${effectFormulaHTML(r, availableKeys)}</div>
  </div>`;
    }

    function offsetSelectedValue(o) {
      if (!o || !o.enabled) return "tuneBreak";
      if (o.kind === "tuneBreak") return "tuneBreak";
      if (o.kind === "response") return `response|${o.skill?.id || ""}`;
      if (o.kind === "state") return `state|${o.stateId || ""}|${o.stateValue || ""}`;
      return "none";
    }

    function offsetValueHTML(r) {
      const o = r.offset || {};
      if (!o.available) return "";
      if (!o.enabled) return L.t("common.unselected");
      if (o.kind === "state" && o.formulaKind === "coherenceInterference" && o.valid) return `+${tnum(o.finalDmgGain)}%`;
      if (o.kind === "state") return L.text(o.status || "未确认");
      if (!o.valid) return L.text("需状态");
      return fmt(o.damage);
    }

    function offsetCapTextHTML(r) {
      const o = r.offset || {};
      if (!o.available) return "";
      if (!o.enabled) return L.text("独立于上方普通伤害");
      if (o.kind === "state" && o.formulaKind === "coherenceInterference") return `${L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "集谐·干涉"))} · ${L.stackText(tnum(o.stacks))}`;
      if (o.kind === "state") return `${L.text("层数")} ${L.stackText(tnum(o.stacks))}`;
      const base = `${offsetCostLabel()} · ${L.text("谐度基础值")} ${fmt(o.harmonyBase)}`;
      if (o.kind === "response" && !o.valid && o.requiredState) return `${base} · ${L.text("需")}${L.text(o.requiredState)}`;
      return base;
    }

    function compactOffsetStateName(value) {
      const text = String(value || "").trim();
      if (!text) return "";
      if (text.includes("集谐") && text.includes("干涉")) return "集谐·干涉";
      if (text.includes("震谐") && text.includes("干涉")) return "震谐·干涉";
      if (text.includes("骇破") && text.includes("干涉")) return "骇破·干涉";
      if (text.includes("集谐") && text.includes("偏移")) return "集谐·偏移";
      if (text.includes("震谐") && text.includes("偏移")) return "震谐·偏移";
      if (text.includes("骇破") && text.includes("偏移")) return "骇破·偏移";
      return text.replace(/^目标/, "");
    }

    function offsetCostLabel(value = state.enemy.harmonyBase) {
      const found = HARMONY_BASE_OPTIONS.find((item) => num(value) === item.value);
      return found ? `${L.t("common.target")}${found.label}` : L.text("自定义目标");
    }

    function offsetCostControlHTML(o) {
      if (!o.enabled || o.kind === "state") return "";
      const current = num(state.enemy.harmonyBase);
      const matched = HARMONY_BASE_OPTIONS.some((item) => item.value === current);
      const options = HARMONY_BASE_OPTIONS.map((item) =>
        `<option value="${item.value}" ${item.value === current ? "selected" : ""}>${item.label} · ${fmt(item.value)}</option>`
      ).join("");
      const custom = matched ? "" : `<option value="${esc(current)}" selected>${esc(L.t("common.custom"))} · ${esc(fmt(current))}</option>`;
      return `<label class="effect-field"><span>${esc(L.text("目标Cost"))}</span><select data-act="offset-cost">${options}${custom}</select></label>`;
    }

    function offsetDetailControlHTML(o) {
      if (!o.enabled || o.kind === "tuneBreak") return "";
      if (o.kind === "response") {
        const lv = o.skLevel || 10;
        const opts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => `<option value="${level}" ${level === lv ? "selected" : ""}>${esc(L.t("common.levelShort", { value: level }))}</option>`).join("");
        return `<label class="effect-field"><span>${esc(L.text("响应等级"))}</span><select data-act="offset-skilllevel">${opts}</select></label>`;
      }
      return `<label class="effect-field"><span>${esc(L.text("层数"))}</span><input type="number" min="0" step="1" data-act="offset-stacks" value="${esc(o.stacks || 0)}" /></label>`;
    }

    function plainText(value) {
      return String(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    }

    function miniCardHTML(k, v, sub, tip = "") {
      const label = L.text(k);
      const subText = L.text(plainText(sub));
      const detail = tip || `${label} = ${plainText(v)}${subText ? `\n${subText}` : ""}`;
      return `<div class="effect-mini-card formula-card" tabindex="0" aria-label="${esc(formulaCardAria(label, detail))}">
        <span>${esc(label)}</span><b>${v}</b><small>${esc(subText)}</small>${formulaCardTipHTML(detail)}
      </div>`;
    }

    function offsetDefenseSub() {
      return `${L.text("我")}${tnum(state.enemy.charLevel)} / ${L.text("敌")}${tnum(state.enemy.enemyLevel)}`;
    }

    function offsetHarmonyBaseTip(o) {
      return `${L.text("谐度基础值")} = ${fmt(o.harmonyBase)}\n${L.sourceJoin(L.text("来源"), L.text(offsetCostLabel(o.harmonyBase)))}`;
    }

    function offsetBreakAmpTip(o) {
      return `${L.text("谐度增幅")} = 1 + ${L.text("谐度破坏增幅")} ${tnum(o.breakAmp)} / 100 = ${fx(o.breakAmpFactor)}`;
    }

    function offsetDefenseTip(o) {
      const levelTerm = 800 + 8 * num(state.enemy.charLevel);
      const enemyDefTerm = 8 * num(state.enemy.enemyLevel) + 792;
      const charLevelText = `${L.text("我方等级")}${tnum(state.enemy.charLevel)}`;
      const enemyLevelText = `${L.text("敌方等级")}${tnum(state.enemy.enemyLevel)}`;
      return `${L.text("防御系数")} = (800 + 8 × ${charLevelText}) / ((800 + 8 × ${charLevelText}) + (8 × ${enemyLevelText} + 792) × (1 - ${L.text("减防")} ${tnum(o.defReduction)}%) × (1 - ${L.text("防御无视")} ${tnum(o.defIgnore)}%)) = ${fx(o.defFactor)}\n${tnum(levelTerm)} / (${tnum(levelTerm)} + ${tnum(enemyDefTerm)} × (1 - ${tnum(o.defReduction)}%) × (1 - ${tnum(o.defIgnore)}%))`;
    }

    function offsetFinalTip(o) {
      const total = Math.max(0, (num(o.finalDmg) - 1) * 100);
      const buff = total - num(state.enemy.finalDmg);
      return `${L.text("最终伤害")} = max(0, 1 + (${L.text("手动")} ${tnum(state.enemy.finalDmg)}% + Buff ${tnum(buff)}%) / 100) = ${tnum(o.finalDmg)}`;
    }

    function offsetResTip(o) {
      const totalResShred = num(state.enemy.res) - num(o.res);
      const buffResShred = totalResShred - num(state.enemy.resShred);
      return `${L.text("抗性系数")} = f(${tnum(o.res)}%) = ${fx(o.resFactor)}\n${L.text("抗性")} ${tnum(state.enemy.res)}% - ${L.text("减抗")} ${tnum(state.enemy.resShred)}% - Buff ${tnum(buffResShred)}%`;
    }

    function offsetDeepenCardHTML(o) {
      const buff = tnum(o.buffDeepen || 0);
      const sub = `${L.text("易伤")}${tnum(o.enemyVulnerability)}% · ${L.text("减伤")}${tnum(o.enemyDmgReduction)}%${buff !== "0" ? ` · Buff ${buff}%` : ""}`;
      const tip = `${L.text("减伤/易伤")} = max(0, 1 - ${L.text("受到伤害减少")} ${tnum(o.enemyDmgReduction)}% + ${L.text("易伤")} ${tnum(o.enemyVulnerability)}% + Buff ${buff}%) = ${tnum(o.deepenFactor)}`;
      return miniCardHTML("减伤/易伤", esc(tnum(o.deepenFactor)), sub, tip);
    }

    function offsetResponseLabels(o) {
      if (o.formulaKind === "hackBreak") return { damage: L.text("骇破伤害"), multiplier: L.text("骇破倍率") };
      if (o.formulaKind === "tuneRupture") return { damage: L.text("震谐伤害"), multiplier: L.text("震谐倍率") };
      return { damage: L.text("谐度响应伤害"), multiplier: L.text("响应倍率") };
    }

    function offsetResponseMultiplierTip(o, labels) {
      return `${labels.multiplier} = ${L.text("基础倍率")} ${tnum(o.baseMult)}% × (1 + ${L.text("技能倍率提升")} ${tnum(o.skillMultBonus)}%) = ${tnum(o.multiplier)}%\n${L.text("等级")} ${tnum(o.skLevel || 10)}`;
    }

    function offsetFormulaHTML(r) {
      const o = r.offset || {};
      if (!o.enabled) return L.text("偏移体系伤害独立结算，不进入上方普通伤害。");
      if (o.kind === "state") {
        if (o.formulaKind === "coherenceInterference") {
          const compactState = o.currentStateLabel || o.stateValueLabel || compactOffsetStateName(o.currentState || o.stateValue || "集谐·干涉");
          const stateHint = o.valid ? "" : `<div class="effect-equation">${L.text("需先确认目标处于")}${esc(L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "集谐·干涉")))}${L.text("，才应用该收益。")}</div>`;
          return `<div class="effect-mini-strip">
          ${miniCardHTML("状态", esc(L.text(compactState || "未确认")), o.valid ? "已确认" : "未确认")}
          ${miniCardHTML("层数", esc(L.stackText(tnum(o.stacks))), "集谐干涉")}
          ${miniCardHTML("谐度增幅", esc(L.pointText(tnum(o.breakAmp))), "角色面板")}
          ${miniCardHTML("每层", esc(`${tnum(o.perStackRate)}%`), L.text("每点增幅"))}
          ${miniCardHTML("最终提升", esc(`+${tnum(o.finalDmgGain)}%`), L.text("最终乘区"))}
        </div><div class="effect-equation">${esc(L.text("最终伤害提升"))} = ${esc(L.stackTextCompact(tnum(o.stacks)))} × ${esc(L.pointTextCompact(tnum(o.breakAmp)))} × ${esc(tnum(o.perStackRate))}% = <b>${esc(tnum(o.finalDmgGain))}%</b></div>${stateHint}`;
        }
        return `<div class="effect-mini-strip">
          ${miniCardHTML("状态", esc(L.text(o.currentStateLabel || compactOffsetStateName(o.currentState || "未确认"))), esc(L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "—"))))}
          ${miniCardHTML("层数", esc(L.stackText(tnum(o.stacks))), "状态层数")}
          ${miniCardHTML("谐度增幅", esc(L.pointText(tnum(o.breakAmp))), "相关角色面板")}
          ${miniCardHTML("结算", esc(L.text(o.status || "未确认")), "该状态本身不直接造成伤害")}
        </div>`;
      }
      if (o.kind === "tuneBreak") {
        return `<div class="effect-mini-strip effect-mini-strip--formula formula-strip formula-strip--multiply">
          ${miniCardHTML("谐度基础值", esc(fmt(o.harmonyBase)), esc(offsetCostLabel(o.harmonyBase)), offsetHarmonyBaseTip(o))}
          ${miniCardHTML("等级倍率", esc(`${tnum(o.multiplier)}%`), "固定等级参数", `${L.text("等级倍率")} = ${tnum(o.multiplier)}%`)}
          ${miniCardHTML("谐度增幅", esc(fx(o.breakAmpFactor)), L.pointText(esc(tnum(o.breakAmp))), offsetBreakAmpTip(o))}
          ${miniCardHTML("防御系数", esc(fx(o.defFactor)), offsetDefenseSub(o), offsetDefenseTip(o))}
          ${offsetDeepenCardHTML(o)}
          ${miniCardHTML("最终伤害", esc(tnum(o.finalDmg)), `+${tnum((num(o.finalDmg) - 1) * 100)}%`, offsetFinalTip(o))}
          ${miniCardHTML("固定系数", esc(tnum(o.fixedFactor)), "固定系数0.8", `${L.text("固定系数")} = ${tnum(o.fixedFactor)}`)}
        </div><div class="effect-equation">${L.text("谐度破坏伤害")} = ${L.text("谐度基础值")} × ${L.text("等级倍率")} × ${L.text("谐度增幅")} × ${L.text("防御系数")} × ${L.text("减伤/易伤")} × ${L.text("最终伤害")} × ${L.text("固定0.8")}</div>`;
      }
      const stateHint = o.valid ? "" : `<div class="effect-equation">${L.text("需先确认目标处于")}${esc(L.text(o.requiredState || "对应干涉状态"))}${L.text("，才结算该响应伤害。")}</div>`;
      const labels = offsetResponseLabels(o);
      return `<div class="effect-mini-strip effect-mini-strip--formula formula-strip formula-strip--multiply">
        ${miniCardHTML("谐度基础值", esc(fmt(o.harmonyBase)), esc(offsetCostLabel(o.harmonyBase)), offsetHarmonyBaseTip(o))}
        ${miniCardHTML(labels.multiplier, esc(`${tnum(o.multiplier)}%`), `${esc(o.label || L.text("响应技能"))} ${esc(L.t("common.levelShort", { value: o.skLevel || 10 }))}`, offsetResponseMultiplierTip(o, labels))}
        ${miniCardHTML("谐度增幅", esc(fx(o.breakAmpFactor)), L.pointText(esc(tnum(o.breakAmp))), offsetBreakAmpTip(o))}
        ${offsetDeepenCardHTML(o)}
        ${miniCardHTML("防御系数", esc(fx(o.defFactor)), offsetDefenseSub(o), offsetDefenseTip(o))}
        ${miniCardHTML("抗性系数", esc(fx(o.resFactor)), `${L.text("抗性")}${tnum(o.res)}%`, offsetResTip(o))}
        ${miniCardHTML("最终伤害", esc(tnum(o.finalDmg)), `+${tnum((num(o.finalDmg) - 1) * 100)}%`, offsetFinalTip(o))}
      </div><div class="effect-equation">${esc(labels.damage)} = ${L.text("谐度基础值")} × ${esc(labels.multiplier)} × ${L.text("谐度增幅")} × ${L.text("防御系数")} × ${L.text("抗性系数")} × ${L.text("减伤/易伤")} × ${L.text("最终伤害")}</div>${stateHint}`;
    }

    function offsetCalcHTML(r) {
      const o = r.offset || {};
      if (!o.available) return "";
      const selected = offsetSelectedValue(o);
      const options = (o.entries || []).map((entry) => {
        const detail = entry.kind === "response" ? ` (${L.damageType(entry.damageType || "响应")})` : "";
        return `<option value="${esc(entry.optionValue)}" ${entry.optionValue === selected ? "selected" : ""}>${esc(L.text(entry.label))}${detail}</option>`;
      }).join("");
      return `<div class="effect-calc offset-calc">
    <div class="effect-head">
      <span class="effect-title">${esc(L.text("偏移体系"))}</span>
      <b class="effect-value" id="offset-value">${esc(offsetValueHTML(r))}</b>
      <span class="effect-cap-text" id="offset-cap-text">${esc(offsetCapTextHTML(r))}</span>
    </div>
    <div class="effect-controls">
      <label class="effect-field"><span>${esc(L.text("体系"))}</span><select data-act="offset-key">${options}</select></label>
      ${offsetCostControlHTML(o)}
      ${offsetDetailControlHTML(o)}
    </div>
    <div class="effect-formula" id="offset-formula">${offsetFormulaHTML(r)}</div>
  </div>`;
    }

    function damageStageHTML(r) {
      const modeKey = activeDamageMode();
      const mode = DAMAGE_MODES[modeKey];
      const activeValue = mode.value(r);
      const lineModes = [["crit", "out-crit", r.critHit], ["expected", "out-exp", r.expected], ["normal", "out-normal", r.normal]];
      const lineHTML = lineModes.map(([key, id, val]) =>
        `<button type="button" class="dmg-line-btn${key === modeKey ? " on" : ""}" data-act="dmg-mode" data-mode="${key}">${DAMAGE_MODES[key].label} <b id="${id}">${fmt(val)}</b></button>`
      ).join("");
      return `<section class="stage-card damage-stage">
    <div class="damage-hero">
      <div class="damage-main">
        <span class="stage-kicker">${esc(L.text("最终伤害"))} · ${mode.label}</span>
        <div class="stage-damage" id="out-active">${fmt(activeValue)}</div>
        <div class="stage-damage-line">${lineHTML}</div>
        <div id="out-active-split">${damageSplitHTML(r, mode.split)}</div>
      </div>
      <div class="hero-team">
        ${teamCardsHTML()}
      </div>
    </div>
    ${targetControlsHTML(r)}
    <div class="metric-strip formula-strip formula-strip--multiply" id="metric-strip">${damageMetricCardsHTML(r)}</div>
    ${damageLowerHTML(r)}
  </section>`;
    }

    function independentDamageHTML(r) {
      const effectHTML = effectCalcHTML(r);
      const offsetHTML = offsetCalcHTML(r);
      return `${effectHTML ? `<div id="out-effect">${effectHTML}</div>` : ""}${offsetHTML ? `<div id="out-offset">${offsetHTML}</div>` : ""}`;
    }

    function damageLowerHTML(r) {
      const independentHTML = independentDamageHTML(r);
      return `<div class="damage-lower${independentHTML ? "" : " no-independent"}" id="damage-lower">
      <div class="damage-control-main">
        ${calcControlsHTML(r)}
      </div>
      ${independentHTML ? `<div class="damage-control-stack"><div class="other-damage-head">${esc(L.text("其它伤害 · 独立结算"))}</div>${independentHTML}</div>` : ""}
    </div>`;
    }

    function panelStageHTML(r) {
      const slot = state.slots[state.outputIdx];
      const idx = state.outputIdx;
      const echoDetail = echoDetailPanelHTML(slot, idx);
      return `<section class="stage-card panel-stage">${panelEntryTableHTML(r, slot, idx)}</section>${echoDetail ? `<section class="stage-card echo-detail-stage">${echoDetail}</section>` : ""}`;
    }

    function buffStageHTML() {
      return `<section class="stage-card buff-stage" id="buff-stage">
    <div class="stage-card-head module-head">
      <div class="module-title"><h2>${esc(L.text("本次攻击 Buff"))}</h2></div>
      <div class="module-actions">
        <button type="button" class="panel-clear" data-act="buff-reset">${esc(L.t("common.reset"))}</button>
        <label class="stage-desc-toggle"><input type="checkbox" data-act="show-desc" ${state.showDesc ? "checked" : ""} /> ${esc(L.t("common.originalText"))}</label>
      </div>
    </div>
    ${autoResolutionHTML()}
    <div class="buffs">${settlementBuffRowsHTML()}</div>
  </section>`;
    }

    function stageLayoutHTML(r) {
      return `<div class="stage-shell">
    ${stageTopbarHTML()}
    ${damageStageHTML(r)}
    <div class="stage-grid">
      <div class="stage-stack">
        ${panelStageHTML(r)}
      </div>
      <div class="stage-stack">
        ${buffStageHTML()}
      </div>
    </div>
  </div>`;
    }

    function calcControlsHTML(r) {
      const oi = state.outputIdx;
      const s1 = state.slots[oi];
      const cat0 = (r.selectedSk || r.sk) ? (r.selectedSk || r.sk).category : "";
      const curLv = (cat0 && s1.skillLevels && s1.skillLevels[cat0]) || 10;
      return `<div class="control-card">
    <div class="card-head"><span>${esc(L.text("本次结算"))}</span><small>${esc(L.text("技能"))} / ${esc(L.text("入场"))} / ${esc(L.text("条件"))}</small></div>
    <div class="skill-control-row">
      <div class="field"><label>${esc(L.text("技能"))}</label><select data-act="skill" data-slot="${oi}">${skillOptions(s1)}</select></div>
      <div class="field"><label>${esc(L.text("技能等级"))}${cat0 ? ` (${esc(L.category(cat0))})` : ""}</label><select data-act="skilllevel" data-slot="${oi}">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => `<option value="${level}" ${level === curLv ? "selected" : ""}>${esc(L.t("common.levelShort", { value: level }))}</option>`).join("")}</select></div>
    </div>
    <div id="dmg-type">${typeTagHTML(r)}</div>
    <div id="layer-fields" class="field-grid field-grid--compact">${layerFieldsHTML()}</div>
  </div>`;
    }

    function targetControlsHTML(r) {
      const e = state.enemy;
      const enemyField = ({ key, label, hint, step = "0.1", autoValue = 0 }) => {
        const auto = num(autoValue);
        const total = num(e[key]) + auto;
        return `<label class="effect-field"><span>${label}${hint ? `<span class="help" tabindex="0" role="note" aria-label="${esc(hint)}">?<span class="help-tip" role="tooltip">${esc(hint)}</span></span>` : ""}</span><input type="number" step="${esc(step)}" data-act="enemy" data-key="${esc(key)}" data-total="1" data-auto="${esc(auto)}" value="${esc(tnum(total))}" /></label>`;
      };
      const autoDefShred = num(r?.defense?.buffDefShred) + num(r?.defense?.effectDefShred);
      const defHint = r?.defense && r.defense.effectDefShred
        ? L.t("hints.defShredWithHavocBane", { value: tnum(r.defense.effectDefShred) })
        : L.t("hints.defShred");
      const baseFields = [
        { key: "enemyLevel", label: L.text("敌方等级"), step: "1" },
        { key: "res", label: L.text("属性抗性%"), hint: RES_HINT },
        { key: "resShred", label: L.text("属性减抗%"), autoValue: r?.totals?.resShred },
      ];
      const extraFields = [
        { key: "defShred", label: L.text("减防%"), hint: defHint, autoValue: autoDefShred },
        { key: "defIgnore", label: L.text("防御无视%"), autoValue: r?.defense?.buffDefIgnore },
        { key: "finalDmg", label: L.text("最终伤害%"), autoValue: r?.totals?.finalDmg },
        { key: "vulnerability", label: L.text("易伤%"), autoValue: r?.totals?.vulnerability },
        { key: "dmgReduction", label: L.text("受到伤害减少%") },
      ];
      const shouldShowExtra = (field) => state.showTargetExtras || num(field.autoValue) !== 0 || num(e[field.key]) !== 0;
      const visibleExtraFields = extraFields.filter(shouldShowExtra);
      const hiddenExtraCount = extraFields.length - visibleExtraFields.length;
      const toggle = hiddenExtraCount || state.showTargetExtras
        ? `<button type="button" class="metric-extra-toggle${state.showTargetExtras ? " on" : ""}" data-act="target-extra-toggle">${esc(state.showTargetExtras ? L.t("common.collapse") : L.t("common.more"))}</button>`
        : "";
      const columnCount = baseFields.length + extraFields.length + (toggle ? 1 : 0);
      return `<div class="effect-calc metric-extra" id="target-controls">
    <div class="effect-controls metric-extra-fields" style="--metric-extra-columns:${columnCount}">
      ${baseFields.concat(visibleExtraFields).map(enemyField).join("")}
      ${toggle}
    </div>
  </div>`;
    }

    return {
      stageLayoutHTML, typeTagHTML, damageMetricCardsHTML, activeDamageMode,
      effectValueHTML, effectFormulaHTML, effectCapTextHTML,
      offsetValueHTML, offsetFormulaHTML, offsetCapTextHTML,
      targetControlsHTML, damageLowerHTML, buffStageHTML,
    };
  }

  return { create };
})();
