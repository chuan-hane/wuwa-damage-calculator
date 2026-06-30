"use strict";

window.WUWA_STAGE_VIEW = (() => {
  function create({
    state, W, ch, wp, WEAPONS, SONATAS, leadChoicesForEcho, syncEchoLead,
    ECHO_COSTS, echoMainOptions, echoSubOptions, echoSubValues, echoFixedMain, ensureEchoDetail, echoDetailSummary, statLabel,
    availableSkills, selectedSkill, resourceControlsForSlot, skillResourceReady, resolvedSkill, isIntroSkill, introEntryReady, introEntryRelevantForSlot, stateControlsHTML,
    panelEntryTableHTML, autoResolutionHTML, settlementBuffRowsHTML,
  }) {
    const { skillLevelRatio, EFFECT_DEFS, EFFECT_ORDER, HARMONY_BASE_OPTIONS, effectKeyOf, num } = window.WUWA_RULES;
    const L = window.WUWA_LANGUAGES;
    const {
      fmt, fx, esc, tnum, RES_HINT, DAMAGE_MODES, skillFormulaText, damageSplitHTML,
    } = window.WUWA_RENDER_HELPERS;
    const asList = (v) => Array.isArray(v) ? v : (v ? [v] : []);
    const STATE_SKILL_FILTER_KINDS = new Set(["mode", "form", "phase"]);
    const SONATA_DISPLAY_ORDER = new Map([
      1, 2, 3, 4, 5, 6, 7, 16, 8, 10, 11, 13, 15, 12, 14, 17, 18, 19, 20, 21, 22, 23, 25, 33, 26, 27, 28, 29, 30, 31, 24,
    ].map((id, idx) => [id, idx]));

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
        opts = W.order.map(ch).slice().sort((a, b) => (a.debut ?? 99) - (b.debut ?? 99)).map((c) => ({
          v: c.id, sel: c.id === slot.char, icon: c.portrait, label: L.charName(c),
          search: (c.name + " " + L.officialName("chars", c.id) + " " + (c.aliases || []).join(" ")).toLowerCase(),
        }));
        if (idx !== state.outputIdx) opts.unshift({ v: "", sel: !slot.char, icon: "", label: L.t("common.empty"), search: "空 none empty kong 不带人" });
      } else {
        const cur = wp(slot.weapon), sig = ch(slot.char).signatureWeaponId;
        curLabel = cur ? L.weaponName(cur) : L.t("common.none"); ph = L.t("common.searchWeapon");
        opts = WEAPONS.filter((w) => w.type === ch(slot.char).weaponType)
          .slice().sort((a, b) => b.quality - a.quality || (b.id === sig) - (a.id === sig) || L.weaponName(a).localeCompare(L.weaponName(b), L.isEnglish() ? "en" : "zh"))
          .map((w) => ({ v: w.id, sel: w.id === slot.weapon, icon: w.icon, label: L.weaponName(w), sub: `${w.quality}★`, sig: w.id === sig, search: `${w.name} ${L.officialName("weapons", w.id)}`.toLowerCase() }));
      }
      const curIcon = kind === "weapon" ? comboIconHTML({ icon: wp(slot.weapon)?.icon, label: curLabel, sub: "" }, kind) : "";
      const comboClass = kind === "weapon" ? " team-weapon-combo" : "";
      const items = opts.map((o) => `<li class="combo-opt${o.sel ? " sel" : ""}" data-act="combo-pick" data-kind="${kind}" data-slot="${idx}" data-value="${o.v}" data-search="${esc(o.search)}">
      ${comboIconHTML(o, kind)}
      <span class="combo-opt-lbl">${esc(o.label)}</span>${o.sig ? `<span class="combo-tag-sig">${esc(L.t("common.signature"))}</span>` : ""}${o.sub ? `<span class="combo-opt-sub">${o.sub}</span>` : ""}
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
        .map((s) => `<option value="${s.id}" ${s.id === sel ? "selected" : ""}>${esc(L.sonataName(s))}</option>`)
        .join("");
    }

    function sonataById(id) {
      return SONATAS.find((s) => s.id === id);
    }

    function sonataName(id) {
      return L.sonataName(sonataById(id));
    }

    function sonataIconHTML(set) {
      if (!set?.icon) return `<span class="echo-set-icon echo-set-icon-fallback">${esc(L.isEnglish() ? "S" : "套")}</span>`;
      return `<img class="echo-set-icon" src="${esc(set.icon)}" alt="" onerror="this.style.visibility='hidden'" />`;
    }

    function echoSetIconGroupHTML(ids) {
      const names = ids.map(sonataName);
      return `<div class="team-gear-set-icons" title="${esc(names.join(" + "))}">${ids.map((id, i) => {
        const name = sonataName(id);
        const sep = i ? `<span class="echo-set-plus">+</span>` : "";
        return `${sep}<span class="echo-set-chip" tabindex="0" role="img" aria-label="${esc(name)}" title="${esc(name)}" data-tip="${esc(name)}">${sonataIconHTML(sonataById(id))}</span>`;
      }).join("")}</div>`;
    }

    function layerFieldsHTML() {
      const oi = state.outputIdx;
      const s1 = state.slots[oi];
      const sk = selectedSkill(s1);
      let html = "";
      if (introEntryRelevantForSlot(s1)) {
        const introImplied = isIntroSkill(resolvedSkill(s1));
        html += `<div class="field toggle-field"><label class="buff toggle-card resource-toggle"><input type="checkbox" data-act="intro-entry" data-slot="${oi}" ${introEntryReady(s1) ? "checked" : ""} ${introImplied ? "disabled" : ""} /> ${esc(L.text("已变奏入场"))}</label></div>`;
      }
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
        html += `<div class="field toggle-field"><label class="buff toggle-card resource-toggle"><input type="checkbox" data-act="resource" data-slot="${oi}" data-key="${esc(resource.id || resource.label)}" ${resource.ready ? "checked" : ""} /> ${esc(L.isEnglish() ? `Has ${resourceName}` : `有${resourceName}`)}</label></div>`;
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
        return L.isEnglish() ? `${L.text(label)} at least ${tnum(req.value)}` : `${L.text(label)}不少于${tnum(req.value)}`;
      }
      if (sk.requiresResourceAtLeast) {
        const req = sk.requiresResourceAtLeast;
        const label = req.label || resourceNameForSkill(slot, req.id);
        const main = req.fractionOfCap != null
          ? (L.isEnglish() ? `${L.text(label)} at least ${tnum(num(req.fractionOfCap) * 100)}% cap` : `${L.text(label)}不少于${tnum(num(req.fractionOfCap) * 100)}%上限`)
          : (L.isEnglish() ? `${L.text(label)} at least ${tnum(req.value)}` : `${L.text(label)}不少于${tnum(req.value)}`);
        const alternates = asList(req.alternateStates);
        return alternates.length ? `${main}${L.isEnglish() ? " or " : "或"}${alternates.map((item) => L.text(item)).join("/")}` : main;
      }
      if (sk.requiresResourceFull) {
        const label = resourceNameForSkill(slot, sk.requiresResourceFull);
        return L.isEnglish() ? `${L.text(label)} at max` : `${L.text(label)}达到上限`;
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
      if (sk.perStack && r.perStackBonus) formula += `; ${L.text(sk.stackLabel)} ${L.isEnglish() ? "bonus part" : "增加部分"} ×(1 + ${tnum(r.perStackBonus)}%) ＝ ${tnum(ten)}%`;
      if (lv !== 10) formula += ` ×${skillLevelRatio(lv)} (${L.t("common.levelShort", { value: lv })})`;
      if (r.multAdd) formula += ` + ${tnum(r.multAdd)}% (${L.text("倍率增加")})`;
      if (lv !== 10 || r.multAdd) formula += ` ＝ ${tnum(r.panel.baseMult)}%`;
      if (r.totals.skillMultBonus) formula += ` ×(1 + ${r.totals.skillMultBonus}% ${L.text("技能倍率提升")}) ＝ ${tnum(r.panel.skillMult * 100)}%`;
      const displayName = selectedSk.id !== sk.id ? `${L.skillName(selectedSk)} (${L.text("按")} ${L.skillName(sk)})` : L.skillName(sk);
      const tags = (sk.damageTags || []).length ? ` · ${L.text("标签")}: ${sk.damageTags.map((tag) => `"${esc(L.damageType(tag))}"`).join("/")}` : "";
      const harmonyNote = isHarmonyResponse ? `<div>${L.isEnglish() ? "Tune response DMG is calculated separately from Tune Base Value, response coefficient, and Tune Break Boost. It does not use ATK, Crit, Attribute DMG Bonus, or Type DMG Bonus." : "谐度响应伤害按谐度基础值、响应系数与谐度破坏增幅独立结算，不吃攻击、暴击、属性加成、类型加成。"}</div>` : "";
      return (
        `<div class="dmg-type"><div>${esc(L.text("本次"))}: <b>${esc(displayName)}</b> (${esc(L.category(selectedSk.category))})</div>` +
        `<div>${esc(L.text("此次伤害视为"))} "<span class="dt">${esc(L.damageType(sk.damageType))}</span>"${tags} · ${elementBadgeHTML(c.element)} · ${esc(baseName)} ${esc(multLabel)}</div>` +
        `<div class="formula">${esc(L.text(formula))}</div>${harmonyNote}</div>`
      );
    }

    function charPickerComboHTML(idx, triggerHTML, extraClass) {
      const opts = W.order.map(ch).slice().sort((a, b) => (a.debut ?? 99) - (b.debut ?? 99)).map((c) => ({
        v: c.id, icon: c.portrait, label: L.charName(c),
        search: (c.name + " " + L.officialName("chars", c.id) + " " + (c.aliases || []).join(" ")).toLowerCase(),
      }));
      const items = opts.map((o) => `<li class="combo-opt" data-act="combo-pick" data-kind="char" data-slot="${idx}" data-value="${o.v}" data-search="${esc(o.search)}">
      ${comboIconHTML(o, "char")}
      <span class="combo-opt-lbl">${esc(o.label)}</span>
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

    function seqSelectHTML(slot, idx) {
      return `<select class="team-meta-select" data-act="seq-set" data-slot="${idx}" aria-label="${esc(L.provider("共鸣链"))}">${[0, 1, 2, 3, 4, 5, 6].map((v) => `<option value="${v}" ${slot.seq === v ? "selected" : ""}>${esc(L.t("common.sequence", { value: v }))}</option>`).join("")}</select>`;
    }

    function echoCardPickerHTML(e, idx) {
      return `<div class="team-echo-row"><div class="team-gear-set-row">${teamEchoSetIconHTML(e, idx)}</div><div class="team-gear-lead-row">${teamLeadEchoPickerHTML(e, idx)}</div></div>`;
    }

    function echoDetailToggleHTML(e, idx) {
      return `<label class="team-echo-detail">
      <input type="checkbox" data-act="echo-detail" data-slot="${idx}" ${e?.detailMode ? "checked" : ""} />
      <span>${esc(L.text("详细声骸模式"))}</span>
    </label>`;
    }

    function teamEchoSetIconHTML(e, idx) {
      if (!e || e.combo === "single5") return echoSetIconGroupHTML([e?.primary]);
      if (e.combo === "split32") return echoSetIconGroupHTML([e.primary, e.secondary]);
      if (e.combo === "split122") return echoSetIconGroupHTML([e.primary, e.secondary, e.tertiary]);
      return echoSetIconGroupHTML([e.primary]);
    }

    function teamLeadEchoPickerHTML(e, idx) {
      syncEchoLead(e);
      const choices = leadChoicesForEcho(e);
      if (!choices.length) return `<div class="team-gear-summary team-gear-summary--muted">${esc(L.isEnglish() ? "No Lead Echo effect recorded" : "未录首位单体")}</div>`;
      if (e.detailMode) {
        const current = choices.find((choice) => choice.key === e.lead);
        return `<div class="team-gear-summary">${esc(current ? L.leadEchoName(current.lead) : L.t("common.unselectedLead"))}</div>`;
      }
      return `<select class="team-gear-select" data-act="elead" data-slot="${idx}" aria-label="${esc(L.text("首位声骸"))}">
      ${choices.map((choice) => `<option value="${choice.key}" ${choice.key === e.lead ? "selected" : ""}>${esc(L.leadEchoName(choice.lead))}</option>`).join("")}
    </select>`;
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
      const charTrigger = `${avatar}<span class="team-char-copy"><b>${esc(L.charName(c))}</b><span>${esc(L.element(c.element))}</span></span><span class="combo-caret">▾</span>`;
      return `<div class="team-card${idx === state.outputIdx ? " on" : ""}" data-act="output" data-slot="${idx}">
      <button type="button" class="team-card-clear" data-act="clear-slot" data-slot="${idx}" aria-label="${esc(L.text("删除"))} ${esc(L.charName(c))}">✕</button>
      <div class="team-card-head">
        ${charPickerComboHTML(idx, charTrigger, "team-char-combo")}
        ${seqSelectHTML(slot, idx)}
      </div>
      <div class="team-weapon-row">
        ${comboHTML("weapon", idx)}
        ${rankSelectHTML(slot, idx)}
      </div>
      ${echoCardPickerHTML(e, idx)}
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
        .map((set) => `<option value="${set.id}" ${set.id === selected ? "selected" : ""}>${esc(L.sonataName(set))}</option>`)
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
      return choices.map((choice) => `<option value="${esc(choice.key)}" ${choice.key === slot.echo.lead ? "selected" : ""}>${esc(L.leadEchoName(choice.lead))} · ${choice.cost}c</option>`).join("");
    }

    function detailSubRows(slot, idx, echoIdx, item, c) {
      const options = echoSubOptions(c);
      return (item.subs || []).map((sub, subIdx) => {
        const values = echoSubValues(sub.key);
        return `<div class="echo-detail-sub">
        <select data-act="detail-sub-key" data-slot="${idx}" data-echo-index="${echoIdx}" data-sub-index="${subIdx}" aria-label="${esc(L.text("副词条"))}">
          <option value="">${esc(L.text("副词条"))}</option>
          ${options.map((opt) => `<option value="${esc(opt.key)}" ${opt.key === sub.key ? "selected" : ""}>${esc(opt.label)}</option>`).join("")}
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
      <span class="echo-detail-set-select">${sonataIconHTML(set)}<select data-act="detail-echo-set" data-slot="${idx}" data-echo-index="${echoIdx}" aria-label="${esc(L.text("声骸套装"))}">${detailSetOptions(item.set)}</select></span>
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
      <div class="echo-detail-summary-line">${esc(L.isEnglish() ? "Useful substats" : "命中词条")} ${summary.hitSubs}/${summary.selectedSubs}</div>
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
        <div class="module-title"><h2>${esc(L.text("声骸详情"))} <span class="module-title-name">${esc(L.charName(c))}</span></h2></div>
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
      const statDisplay = isHarmonyResponse ? r.harmonyBase : r.panel.stat === "hp" ? r.panel.displayHp : r.panel.stat === "defense" ? r.panel.displayDef : r.panel.displayAtk;
      const statLabel = isHarmonyResponse ? L.text("谐度基础值") : L.stat(r.panel.stat);
      const totalResShred = num(state.enemy.resShred) + num(r?.totals?.resShred);
      const resSub = L.isEnglish() ? `RES ${tnum(state.enemy.res)}% + RES Shred ${tnum(totalResShred)}%` : `抗${tnum(state.enemy.res)}% + 减抗${tnum(totalResShred)}%`;
      const damageMode = activeDamageMode();
      const critMul = isHarmonyResponse ? 1 : damageMode === "expected" ? 1 + r.cr * (r.cd - 1) : damageMode === "crit" ? r.cd : 1;
      const bonusCard = isHarmonyResponse
        ? { k: L.text("谐度增幅"), v: `<b>${esc(fx(r.breakAmpFactor))}</b>`, sub: L.isEnglish() ? `${esc(tnum(r.breakAmp))} pts` : `${esc(tnum(r.breakAmp))} 点` }
        : { k: L.text("加成区"), v: `<b>${esc(tnum(r.bonus))}</b>`, sub: L.isEnglish() ? `+${esc(tnum((r.bonus - 1) * 100))}% · Attribute + Type` : `+${esc(tnum((r.bonus - 1) * 100))}% · 属性+类型` };
      const amplifyCard = isHarmonyResponse
        ? { k: L.text("响应增伤"), v: `<b>${esc(tnum(r.amplify * r.vuln))}</b>`, sub: L.isEnglish() ? "Tune response only" : "谐度响应专属加深/易伤" }
        : { k: L.text("加深区"), v: `<b>${esc(tnum(r.amplify))}</b>`, sub: L.isEnglish() ? `+${esc(tnum((r.amplify - 1) * 100))}% · Separate zone` : `+${esc(tnum((r.amplify - 1) * 100))}% · 独立乘区` };
      let critCard = { k: L.text("不可暴击"), v: "<b>1</b>", sub: L.isEnglish() ? "Tune response" : "谐度响应" };
      if (!isHarmonyResponse) {
        switch (damageMode) {
          case "expected":
            critCard = { k: L.text("期望修正"), v: `<b>${esc(tnum(critMul))}</b>`, sub: `${L.stat("暴击率")} ${esc(tnum(r.panel.critRate))}%` };
            break;
          case "crit":
            critCard = { k: L.text("暴击伤害"), v: `<b>${esc(tnum(critMul))}</b>`, sub: `${L.stat("暴击伤害")} ${esc(tnum(r.panel.critDamage))}%` };
            break;
          default:
            critCard = { k: L.text("非暴伤害"), v: "<b>1</b>", sub: L.isEnglish() ? "Crit ignored" : "不计算暴击" };
        }
      }
      const finalCard = isHarmonyResponse
        ? { k: L.text("最终伤害"), v: `<b>${r.finalDmg === 1 ? esc(L.isEnglish() ? "Ignored" : "不参与") : esc(tnum(r.finalDmg))}</b>`, sub: L.isEnglish() ? "Only explicit effects apply" : "明确指定才参与" }
        : { k: L.text("最终伤害"), v: `<b>${esc(tnum(r.finalDmg))}</b>`, sub: L.isEnglish() ? `+${esc(tnum((r.finalDmg - 1) * 100))}% · Final zone` : `+${esc(tnum((r.finalDmg - 1) * 100))}% · 最终乘区` };
      const cards = [
        { k: L.text("属性基数"), v: `<b>${esc(fmt(statDisplay))}</b>`, sub: esc(statLabel) },
        { k: L.text("技能倍率"), v: `<b>${esc(`${tnum(r.panel.skillMult * 100)}%`)}</b>`, sub: esc(r.sk ? L.damageType(r.sk.damageType) : "—") },
        bonusCard,
        amplifyCard,
        critCard,
        { k: L.text("防御系数"), v: `<b>${esc(fx(r.defFactor))}</b>`, sub: L.isEnglish() ? `Lv.${esc(tnum(state.enemy.charLevel))} / Enemy Lv.${esc(tnum(state.enemy.enemyLevel))}` : `我${esc(tnum(state.enemy.charLevel))} / 敌${esc(tnum(state.enemy.enemyLevel))}级` },
        { k: L.text("抗性系数"), v: `<b>${esc(fx(r.resFactor))}</b>`, sub: esc(resSub) },
        finalCard,
      ];
      return cards.map(({ k, v, sub }) => `<div class="metric-card formula-card">
    <span>${esc(k)}</span>
    ${v}
    ${sub.startsWith("<small") ? sub : `<small>${sub}</small>`}
  </div>`).join("");
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
      const label = e.rageCap != null ? (L.isEnglish() ? "Effect/Burst cap" : "效应/爆发上限") : L.text("上限");
      if (!e.capBonus?.value) return `${label} ${e.cap} ${L.isEnglish() ? "stacks" : "层"}`;
      const base = num(e.capBase ?? e.cap - e.capBonus.value);
      const parts = effectCapBonusParts(e);
      if (!parts.length) return `${label} ${e.cap} ${L.isEnglish() ? "stacks" : "层"}`;
      return `${label}=${tnum(base)}${L.isEnglish() ? " stacks" : "层"}+${parts.join("+")}=${tnum(e.cap)}${L.isEnglish() ? " stacks" : "层"}`;
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
        return `${L.sourceTitle(effectCapSourceLabel(part.source))}${tnum(value)}${L.isEnglish() ? " stacks" : "层"}`;
      }).filter(Boolean);
    }

    function effectFormulaHTML(r, availableKeys = teamEffectKeys()) {
      const e = visibleEffectResult(r, availableKeys);
      if (!e.enabled) return L.isEnglish() ? "Effect DMG is calculated separately and does not enter the normal DMG above." : "效应伤害独立结算，不进入上方普通伤害。";
      if (e.kind === "defShred") return `<div class="effect-equation">${esc(L.effect(e.def))}: ${e.stacks} ${L.isEnglish() ? "stacks" : "层"} × ${tnum(e.def.valuePerStack)}% = <b>${tnum(e.defShred)}%</b> ${L.text("减防")}，${L.isEnglish() ? "included in the DEF Multiplier above" : "已计入上方防御系数"}</div>`;
      if (!e.valid) return `${esc(L.effect(e.def))}${L.isEnglish() ? " currently only has recorded multipliers for " : "当前只录入"}${(e.def.allowedStacks || []).join("/")}${L.isEnglish() ? " stacks." : "层倍率。"}`;
      const baseValue = e.kind === "attack" ? tnum(e.attack) : tnum(e.base);
      const multValue = e.kind === "attack" ? `${tnum(e.rate)}%` : (L.isEnglish() ? "stack base" : "层数基础");
      const rateParts = e.kind === "attack" ? [`${esc(L.effectShort(e.def))} ${e.stacks}${L.isEnglish() ? " stacks" : "层"} ${tnum(e.baseRate)}%`] : [];
      if (e.kind === "attack" && e.rageCap != null) rateParts.push(`${L.isEnglish() ? "Burst" : "爆发"} ${e.rageStacks}${L.isEnglish() ? " stacks" : "层"} ${tnum(e.rageRate)}%`);
      if (e.kind === "attack" && e.extraRate) rateParts.push(`${L.isEnglish() ? "Extra" : "额外"} ${tnum(e.extraRate)}%`);
      const multDetail = e.kind === "attack" ? rateParts.join(" + ") : `${esc(L.effectShort(e.def))} ${e.stacks}${L.isEnglish() ? " stacks" : "层"}`;
      const provider = e.providerName ? `${e.providerName} ${L.stat("攻击")}` : (L.isEnglish() ? "Provider ATK" : "提供者攻击");
      return `<div class="effect-mini-strip effect-mini-strip--formula formula-strip formula-strip--multiply">
        <div class="effect-mini-card formula-card"><span>${esc(L.text("属性基数"))}</span><b>${baseValue}</b><small>${e.kind === "attack" ? esc(provider) : esc(L.effect(e.def))}</small></div>
        <div class="effect-mini-card formula-card"><span>${esc(L.isEnglish() ? "Effect Multiplier" : "效应倍率")}</span><b>${multValue}</b><small>${multDetail}</small></div>
        <div class="effect-mini-card formula-card"><span>${esc(L.isEnglish() ? "Effect Amplification" : "效应加深")}</span><b>${tnum(e.deepen)}%</b><small>${L.isEnglish() ? "Manual" : "手动"} ${tnum(e.manualDeepen)} + Buff ${tnum(e.buffDeepen)}</small></div>
        <div class="effect-mini-card formula-card"><span>${esc(L.text("最终伤害"))}</span><b>${fx(e.finalDmgFactor || 1)}</b><small>Buff ${tnum(e.buffFinalDmg || 0)}%</small></div>
        <div class="effect-mini-card formula-card"><span>${esc(L.text("防御系数"))}</span><b>${fx(e.defFactor)}</b><small>${L.isEnglish() ? `Lv.${tnum(e.charLevel)} / Enemy Lv.${tnum(e.enemyLevel)}` : `我${tnum(e.charLevel)} / 敌${tnum(e.enemyLevel)}`}</small></div>
        <div class="effect-mini-card formula-card"><span>${esc(L.text("抗性系数"))}</span><b>${fx(e.resFactor)}</b><small>${L.isEnglish() ? "RES" : "抗"} ${tnum(e.res)}%</small></div>
      </div>`;
    }

    function effectStackControlHTML(e) {
      if (!e.enabled) return `<input type="number" disabled value="" />`;
      const def = e.def || {};
      if (def.allowedStacks) {
        const options = def.allowedStacks.filter((n) => n <= e.cap);
        return `<select data-act="effect-stacks">${options.map((n) => `<option value="${n}" ${n === e.stacks ? "selected" : ""}>${n} ${L.isEnglish() ? "stacks" : "层"}</option>`).join("")}</select>`;
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
      if (!o.valid) return L.isEnglish() ? "State required" : "需状态";
      return fmt(o.damage);
    }

    function offsetCapTextHTML(r) {
      const o = r.offset || {};
      if (!o.available) return "";
      if (!o.enabled) return L.isEnglish() ? "Separate from normal DMG above" : "独立于上方普通伤害";
      if (o.kind === "state" && o.formulaKind === "coherenceInterference") return `${L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "集谐·干涉"))} · ${tnum(o.stacks)}${L.isEnglish() ? " stacks" : "层"}`;
      if (o.kind === "state") return `${L.text("层数")} ${tnum(o.stacks)} ${L.isEnglish() ? "stacks" : "层"}`;
      const base = `${offsetCostLabel()} · ${L.text("谐度基础值")} ${fmt(o.harmonyBase)}`;
      if (o.kind === "response" && !o.valid && o.requiredState) return `${base} · ${L.isEnglish() ? "Needs " : "需"}${L.text(o.requiredState)}`;
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
      return found ? `${L.t("common.target")}${found.label}` : (L.isEnglish() ? "Custom target" : "自定义目标");
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

    function miniCardHTML(k, v, sub) {
      return `<div class="effect-mini-card formula-card"><span>${esc(L.text(k))}</span><b>${v}</b><small>${esc(L.text(sub))}</small></div>`;
    }

    function offsetDefenseSub() {
      return L.isEnglish() ? `Lv.${tnum(state.enemy.charLevel)} / Enemy Lv.${tnum(state.enemy.enemyLevel)}` : `我${tnum(state.enemy.charLevel)} / 敌${tnum(state.enemy.enemyLevel)}`;
    }

    function offsetDeepenCardHTML(o) {
      const buff = tnum(o.buffDeepen || 0);
      const sub = L.isEnglish() ? `Vulnerability ${tnum(o.enemyVulnerability)}% · Reduction ${tnum(o.enemyDmgReduction)}%${buff !== "0" ? ` · Buff ${buff}%` : ""}` : `易伤${tnum(o.enemyVulnerability)}% · 减伤${tnum(o.enemyDmgReduction)}%${buff !== "0" ? ` · Buff${buff}%` : ""}`;
      return miniCardHTML("减伤/易伤", esc(tnum(o.deepenFactor)), sub);
    }

    function offsetResponseLabels(o) {
      if (o.formulaKind === "hackBreak") return { damage: L.text("骇破伤害"), multiplier: L.text("骇破倍率") };
      if (o.formulaKind === "tuneRupture") return { damage: L.text("震谐伤害"), multiplier: L.text("震谐倍率") };
      return { damage: L.text("谐度响应伤害"), multiplier: L.text("响应倍率") };
    }

    function offsetResponseFinalSub(o) {
      const final = tnum(o.finalDmg);
      return final === "1" ? `${L.isEnglish() ? "RES" : "抗"}${tnum(o.res)}%` : `${L.isEnglish() ? "RES" : "抗"}${tnum(o.res)}% · ${L.text("最终伤害")}×${final}`;
    }

    function offsetFormulaHTML(r) {
      const o = r.offset || {};
      if (!o.enabled) return L.isEnglish() ? "Off-Tune System DMG is calculated separately and does not enter the normal DMG above." : "偏移体系伤害独立结算，不进入上方普通伤害。";
      if (o.kind === "state") {
        if (o.formulaKind === "coherenceInterference") {
          const compactState = o.currentStateLabel || o.stateValueLabel || compactOffsetStateName(o.currentState || o.stateValue || "集谐·干涉");
          const stateHint = o.valid ? "" : `<div class="effect-equation">${L.isEnglish() ? "Confirm target state first: " : "需先确认目标处于"}${esc(L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "集谐·干涉")))}${L.isEnglish() ? " before applying this bonus." : "，才应用该收益。"}</div>`;
          return `<div class="effect-mini-strip">
          ${miniCardHTML("状态", esc(L.text(compactState || "未确认")), o.valid ? "已确认" : "未确认")}
          ${miniCardHTML("层数", esc(`${tnum(o.stacks)}${L.isEnglish() ? " stacks" : "层"}`), "集谐干涉")}
          ${miniCardHTML("谐度增幅", esc(`${tnum(o.breakAmp)}${L.isEnglish() ? " pts" : "点"}`), "角色面板")}
          ${miniCardHTML("每层", esc(`${tnum(o.perStackRate)}%`), L.isEnglish() ? "per boost point" : "每点增幅")}
          ${miniCardHTML("最终提升", esc(`+${tnum(o.finalDmgGain)}%`), L.isEnglish() ? "Final zone" : "最终乘区")}
        </div><div class="effect-equation">${esc(L.text("最终伤害提升"))} = ${esc(tnum(o.stacks))}${L.isEnglish() ? " stacks" : "层"} × ${esc(tnum(o.breakAmp))}${L.isEnglish() ? " pts" : "点"} × ${esc(tnum(o.perStackRate))}% = <b>${esc(tnum(o.finalDmgGain))}%</b></div>${stateHint}`;
        }
        return `<div class="effect-mini-strip">
          ${miniCardHTML("状态", esc(L.text(o.currentStateLabel || compactOffsetStateName(o.currentState || "未确认"))), esc(L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "—"))))}
          ${miniCardHTML("层数", esc(`${tnum(o.stacks)}${L.isEnglish() ? " stacks" : "层"}`), "状态层数")}
          ${miniCardHTML("谐度增幅", esc(`${tnum(o.breakAmp)}${L.isEnglish() ? " pts" : "点"}`), "相关角色面板")}
          ${miniCardHTML("结算", esc(L.text(o.status || "未确认")), "该状态本身不直接造成伤害")}
        </div>`;
      }
      if (o.kind === "tuneBreak") {
        return `<div class="effect-mini-strip effect-mini-strip--formula formula-strip formula-strip--multiply">
          ${miniCardHTML("谐度基础值", esc(fmt(o.harmonyBase)), esc(offsetCostLabel(o.harmonyBase)))}
          ${miniCardHTML("等级倍率", esc(`${tnum(o.multiplier)}%`), "固定等级参数")}
          ${miniCardHTML("谐度增幅", esc(fx(o.breakAmpFactor)), `${esc(tnum(o.breakAmp))} 点`)}
          ${miniCardHTML("防御系数", esc(fx(o.defFactor)), offsetDefenseSub(o))}
          ${miniCardHTML("抗性/固定", esc(tnum(o.fixedFactor)), "固定系数0.8")}
        </div><div class="effect-equation">${L.text("谐度破坏伤害")} = ${L.text("谐度基础值")} × ${L.text("等级倍率")} × ${L.text("谐度增幅")} × ${L.text("防御系数")} × ${L.text("减伤/易伤")} × ${L.text("最终伤害")} × ${L.isEnglish() ? "fixed 0.8" : "固定0.8"}</div>`;
      }
      const stateHint = o.valid ? "" : `<div class="effect-equation">${L.isEnglish() ? "Confirm target state first: " : "需先确认目标处于"}${esc(L.text(o.requiredState || "对应干涉状态"))}${L.isEnglish() ? " before calculating this response DMG." : "，才结算该响应伤害。"}</div>`;
      const labels = offsetResponseLabels(o);
      return `<div class="effect-mini-strip effect-mini-strip--formula formula-strip formula-strip--multiply">
        ${miniCardHTML("谐度基础值", esc(fmt(o.harmonyBase)), esc(offsetCostLabel(o.harmonyBase)))}
        ${miniCardHTML(labels.multiplier, esc(`${tnum(o.multiplier)}%`), `${esc(o.label || "响应技能")} ${esc(o.skLevel || 10)}级`)}
        ${miniCardHTML("谐度增幅", esc(fx(o.breakAmpFactor)), `${esc(tnum(o.breakAmp))} 点`)}
        ${offsetDeepenCardHTML(o)}
        ${miniCardHTML("防御系数", esc(fx(o.defFactor)), offsetDefenseSub(o))}
        ${miniCardHTML("抗性/最终", esc(tnum(o.resFactor * o.finalDmg)), offsetResponseFinalSub(o))}
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
      const effectHTML = effectCalcHTML(r);
      const offsetHTML = offsetCalcHTML(r);
      const independentHTML = `${effectHTML ? `<div id="out-effect">${effectHTML}</div>` : ""}${offsetHTML ? `<div id="out-offset">${offsetHTML}</div>` : ""}`;
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
    <div class="damage-lower${independentHTML ? "" : " no-independent"}">
      <div class="damage-control-main">
        ${calcControlsHTML(r)}
      </div>
      ${independentHTML ? `<div class="damage-control-stack"><div class="other-damage-head">${esc(L.text("其它伤害 · 独立结算"))}</div>${independentHTML}</div>` : ""}
    </div>
  </section>`;
    }

    function panelStageHTML(r) {
      const slot = state.slots[state.outputIdx];
      const idx = state.outputIdx;
      const echoDetail = echoDetailPanelHTML(slot, idx);
      return `<section class="stage-card panel-stage">${panelEntryTableHTML(r, slot, idx)}</section>${echoDetail ? `<section class="stage-card echo-detail-stage">${echoDetail}</section>` : ""}`;
    }

    function buffStageHTML() {
      return `<section class="stage-card buff-stage">
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
        ? (L.isEnglish() ? `This input shows and edits total DEF Shred, including ${tnum(r.defense.effectDefShred)}% from Havoc Bane.` : `输入框显示并编辑当前总减防；其中虚湮${tnum(r.defense.effectDefShred)}%。`)
        : (L.isEnglish() ? "This input shows and edits total DEF Shred. Auto sources such as Buffs are included in real time." : "输入框显示并编辑当前总减防；Buff 等自动来源会实时折入。");
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
      return `<div class="effect-calc metric-extra">
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
    };
  }

  return { create };
})();
