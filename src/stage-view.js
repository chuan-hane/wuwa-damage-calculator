"use strict";

window.WUWA_STAGE_VIEW = (() => {
  function create({
    state, W, ch, wp, WEAPONS, SONATAS, leadChoicesForEcho, syncEchoLead,
    ECHO_COSTS, echoMainOptions, echoSubOptions, echoSubValues, echoFixedMain, ensureEchoDetail, echoDetailSummary, statLabel, echoStats,
    availableSkills, selectedSkill, resourceControlsForSlot, resolvedSkill, stateControlsHTML,
    panelEntryTableHTML, autoResolutionHTML, settlementBuffRowsHTML,
  }) {
    const { skillLevelRatio, skillMultValue, EFFECT_DEFS, EFFECT_ORDER, HARMONY_BASE_OPTIONS, effectKeyOf, num } = window.WUWA_RULES;
    const L = window.WUWA_LANGUAGES;
    const TARGETS = window.WUWA_TARGETS;
    const {
      fmt, fx, esc, tnum, DAMAGE_MODES, skillFormulaText, damageSplitHTML,
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

    function formulaCardDetailText(sub, tip = "", fallback = "") {
      return [plainText(sub), tip || fallback].filter(Boolean).join("\n");
    }

    function staticFormulaSource(source, label, value, suffix = "%", signed = true, keepZero = false) {
      return { source, label, value, suffix, signed, keepZero, static: true };
    }

    function formulaSourceOrigin(part) {
      const owner = part.charId ? L.charName(ch(part.charId)) : "";
      const source = part.source ? L.sourceTitle(part.source) : "";
      return [owner, source].filter(Boolean).join("·");
    }

    function formulaSourceLabel(part) {
      if (part.static) return L.text(part.label || "");
      return L.buffLabel(part) || L.zone(part.zone) || L.text(part.label || "");
    }

    function formulaSourceLine(part) {
      const origin = formulaSourceOrigin(part);
      const label = formulaSourceLabel(part);
      const value = num(part.value);
      const sign = part.signed !== false && value > 0 ? "+" : "";
      const detail = `${sign}${tnum(value)}${part.suffix ?? "%"}`;
      return `${[origin, label].filter(Boolean).join(" · ")} ${detail}`.trim();
    }

    function formulaSourceTip(parts, fallback = "无额外来源") {
      const lines = asList(parts).flat().filter((part) => part && (part.keepZero || num(part.value))).map(formulaSourceLine);
      return lines.length ? lines.join("\n") : L.text(fallback);
    }

    function formulaCardHTML({ k, v, sub, tip }) {
      const label = L.text(k);
      const rawValue = String(v ?? "");
      const valueHTML = /^<b(?:\s|>)/.test(rawValue.trim()) ? rawValue : `<b>${rawValue}</b>`;
      const detail = formulaCardDetailText(L.text(plainText(sub)), tip, `${label} = ${plainText(rawValue)}`);
      return `<div class="metric-card formula-card" tabindex="0" aria-label="${esc(formulaCardAria(label, detail))}">
    <span>${esc(label)}</span>
    ${valueHTML}
    ${formulaCardTipHTML(detail)}
  </div>`;
    }

    function formulaStripHTML(cards, { multiply = true, id = "" } = {}) {
      const content = Array.isArray(cards) ? cards.map(formulaCardHTML).join("") : String(cards || "");
      const idAttr = id ? ` id="${esc(id)}"` : "";
      return `<div class="metric-strip formula-strip${multiply ? " formula-strip--multiply" : ""}"${idAttr}>${content}</div>`;
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
      const isFixedDamage = r.damageModel === "fixed";
      if (isFixedDamage) {
        const floorNote = sk.fixedDamageHpFloorPct == null
          ? ""
          : `<div>${esc(L.text("实际伤害受目标生命下限限制"))}: ${esc(tnum(sk.fixedDamageHpFloorPct))}%</div>`;
        return (
          `<div class="dmg-type"><div>${esc(L.text("本次"))}: <b>${esc(L.skillName(selectedSk))}</b> (${esc(L.category(selectedSk.category))})</div>` +
          `<div>${esc(L.text("此次伤害视为"))} "<span class="dt">${esc(L.damageType(sk.damageType))}</span>" · ${elementBadgeHTML(sk.element || c.element)} · ${esc(L.text("固定"))}</div>` +
          `<div class="formula">${esc(L.text("固定"))} ${esc(fmt(r.fixedDamage))}</div>${floorNote}</div>`
        );
      }
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
        `<div>${esc(L.text("此次伤害视为"))} "<span class="dt">${esc(L.damageType(sk.damageType))}</span>"${tags} · ${elementBadgeHTML(sk.element || c.element)} · ${esc(baseName)} ${esc(multLabel)}</div>` +
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

    function stageTopbarHTML(r) {
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
    ${damageDockHTML(r)}
  </section>`;
    }

    function sourceParts(sources, key) {
      return asList(sources?.[key]);
    }

    function panelStatSourceParts(slot, stat, es, sources) {
      if (!slot) return [];
      const c = ch(slot.char);
      const w = wp(slot.weapon);
      const tree = c?.base?.tree || {};
      if (!c) return [];
      const config = {
        attack: { base: c.base.attack, pct: tree.attackPct, pctKey: "attackPercent", pctField: "attackPct", flat: es.flatAtk, flatKey: "attackFlat", flatField: "atkFlat" },
        hp: { base: c.base.hp, pct: tree.hpPct, pctKey: "hpPercent", pctField: "hpPct", flat: es.flatHp, flatKey: "hpFlat", flatField: "hpFlat" },
        defense: { base: c.base.defense, pct: tree.defPct, pctKey: "defensePercent", pctField: "defPct", flat: es.flatDef, flatKey: "defenseFlat", flatField: "defFlat" },
      }[stat] || null;
      if (!config) return [];
      return [
        staticFormulaSource("角色基础", L.stat(stat), config.base, "", false, true),
        ...(stat === "attack" && w ? [staticFormulaSource(`${L.text("武器")}·${L.weaponName(w)}`, "攻击", w.attack90, "", false)] : []),
        staticFormulaSource("属性树", statLabel(config.pctField, c), config.pct),
        sourceParts(sources, config.pctKey),
        staticFormulaSource("声骸", statLabel(config.pctField, c), es[config.pctKey]),
        sourceParts(sources, config.flatKey),
        staticFormulaSource("声骸", statLabel(config.flatField, c), config.flat, ""),
      ];
    }

    function panelCritSourceParts(slot, key, es, sources) {
      const c = ch(slot.char);
      const tree = c?.base?.tree || {};
      if (!c) return [];
      const isRate = key === "critRate";
      return [
        staticFormulaSource("角色基础", L.stat(key), c.base[key], "%", false, true),
        staticFormulaSource("属性树", L.stat(key), tree[key] || 0),
        sourceParts(sources, key),
        staticFormulaSource("声骸", L.stat(key), isRate ? es.critRate : es.critDamage),
      ];
    }

    function fixedCritSourceParts(sources, key) {
      return sourceParts(sources, "fixedCrit").map((part) => ({
        ...part,
        static: true,
        label: key === "critRate" ? "暴击率" : "暴击伤害",
        value: key === "critRate" ? part.critRate : part.critDamage,
        suffix: "%",
        signed: false,
      }));
    }

    function targetPercentSource(label, value, signed = false) {
      return staticFormulaSource("目标", label, value, "%", signed);
    }

    function targetLevelSources(target) {
      return [
        staticFormulaSource("目标", "我方等级", state.enemy.charLevel, "", false, true),
        staticFormulaSource("目标", "敌方等级", target?.enemyLevel ?? state.enemy.enemyLevel, "", false, true),
      ];
    }

    function damageMetricCardsHTML(r) {
      const isHarmonyResponse = r.damageModel === "harmonyResponse";
      if (r.damageModel === "fixed") {
        const sources = [
          staticFormulaSource(`${L.text("技能")}·${r.sk ? L.skillName(r.sk) : L.text("固定")}`, "固定", r.fixedDamage, "", false, true),
        ];
        if (r.sk?.fixedDamageHpFloorPct != null) {
          sources.push(staticFormulaSource("目标", "实际伤害受目标生命下限限制", r.sk.fixedDamageHpFloorPct, "%", false));
        }
        return formulaCardHTML({
          k: L.text("固定"),
          v: `<b>${esc(fmt(r.fixedDamage))}</b>`,
          sub: L.text("不受伤害加成影响"),
          tip: formulaSourceTip(sources),
        });
      }
      const s1 = state.slots[state.outputIdx];
      const c = ch(s1.char);
      const tree = c?.base?.tree || {};
      const target = r.target || {};
      const statDisplay = isHarmonyResponse ? r.harmonyBase : r.panel.stat === "hp" ? r.panel.displayHp : r.panel.stat === "defense" ? r.panel.displayDef : r.panel.displayAtk;
      const statLabel = isHarmonyResponse ? L.text("谐度基础值") : L.stat(r.panel.stat);
      const totalResShred = num(state.enemy.resShred) + num(r?.totals?.resShred);
      const resSub = `${L.text("抗")}${tnum(target.resistance)}% + ${L.text("减抗")}${tnum(totalResShred)}%`;
      const damageMode = activeDamageMode();
      const responseCanCrit = isHarmonyResponse && r.totals?.fixedCritRate != null;
      const critMul = isHarmonyResponse && !responseCanCrit ? 1 : damageMode === "expected" ? 1 + r.cr * (r.cd - 1) : damageMode === "crit" ? r.cd : 1;
      const lvRatio = r.sk ? skillLevelRatio(r.skLevel) : 1;
      const rawSkillMult = r.sk ? num(r.sk.multiplier) : 0;
      const stackMult = r.sk?.perStack ? num(r.sk.perStack) * num(r.layers) * (1 + num(r.perStackBonus) / 100) : 0;
      const levelMult = r.sk ? skillMultValue(rawSkillMult + stackMult, lvRatio) : 0;
      const skType = r.sk?.damageType;
      const damageElement = r.damageElement || r.sk?.damageElement || r.sk?.element || c?.element;
      const treeElemBonus = damageElement === c?.element ? tree.elemBonus : 0;
      const normalSources = r.rawTotals?.sources || {};
      const activeSources = r.sources || {};
      const statTip = isHarmonyResponse
        ? formulaSourceTip([staticFormulaSource(offsetCostLabel(r.harmonyBase), "谐度基础值", r.harmonyBase, "", false, true)])
        : formulaSourceTip(panelStatSourceParts(s1, r.panel.stat, r.es, normalSources));
      const baseLevelMult = r.sk ? skillMultValue(rawSkillMult, lvRatio) : 0;
      const skillOrigin = `${L.text("技能")}·${r.sk ? L.skillName(r.sk) : "—"}·${L.t("common.levelShort", { value: r.skLevel || 10 })}`;
      const skillTip = formulaSourceTip([
        staticFormulaSource(skillOrigin, "基础倍率", baseLevelMult, "%", false, true),
        staticFormulaSource(r.sk?.stackLabel || r.sk?.stackResource || "层数", "层数倍率", levelMult - baseLevelMult),
        sourceParts(activeSources, "perStackBonus"),
        sourceParts(activeSources, "multAdd"),
        sourceParts(activeSources, "skillMultBonus"),
      ]);
      const bonusSources = [
        staticFormulaSource("属性树", damageElement ? L.damageBonusLabel(L.element(damageElement)) : L.text("属性伤害加成"), treeElemBonus),
        staticFormulaSource("声骸", damageElement ? L.damageBonusLabel(L.element(damageElement)) : L.text("属性伤害加成"), r.es?.elem?.[damageElement]),
        staticFormulaSource("声骸", skType ? L.typeBonusLabel(L.damageType(skType)) : L.text("类型伤害加成"), skType ? r.es?.type?.[skType] : 0),
        sourceParts(normalSources, "damageBonus"),
        sourceParts(normalSources, "typeBonus"),
        sourceParts(normalSources, "typeBonusScale"),
      ];
      const bonusCard = isHarmonyResponse
        ? { k: L.text("谐度增幅"), v: `<b>${esc(fx(r.breakAmpFactor))}</b>`, sub: L.pointText(esc(tnum(r.breakAmp))), tip: formulaSourceTip(sourceParts(activeSources, "breakAmp"), "无额外来源") }
        : { k: L.text("加成区"), v: `<b>${esc(tnum(r.bonus))}</b>`, sub: `+${esc(tnum((r.bonus - 1) * 100))}% · ${L.text("属性+类型")}`, tip: formulaSourceTip(bonusSources) };
      const amplifyCard = isHarmonyResponse
        ? { k: L.text("响应增伤"), v: `<b>${esc(tnum(r.amplify * r.vuln))}</b>`, sub: L.text("谐度响应专属加深/易伤"), tip: formulaSourceTip([sourceParts(activeSources, "amplify"), sourceParts(activeSources, "vulnerability")]) }
        : { k: L.text("加深区"), v: `<b>${esc(tnum(r.amplify))}</b>`, sub: `+${esc(tnum((r.amplify - 1) * 100))}% · ${L.text("独立乘区")}`, tip: formulaSourceTip(sourceParts(normalSources, "amplify")) };
      const vulnCard = {
        k: L.text("易伤"),
        v: `<b>${esc(tnum(r.vuln))}</b>`,
        sub: `${L.text("易伤")}${esc(tnum(state.enemy.vulnerability))}% · ${L.text("减伤")}${esc(tnum(state.enemy.dmgReduction))}%`,
        tip: formulaSourceTip([
          targetPercentSource("受到伤害减少", state.enemy.dmgReduction, false),
          targetPercentSource("易伤", state.enemy.vulnerability, true),
          sourceParts(normalSources, "vulnerability"),
        ]),
      };
      let critCard = { k: L.text("不可暴击"), v: "<b>1</b>", sub: L.text("谐度响应") };
      const shownCritRate = responseCanCrit ? r.totals.fixedCritRate : r.panel.critRate;
      const shownCritDamage = responseCanCrit ? r.totals.fixedCritDamage : r.panel.critDamage;
      const critRateSources = responseCanCrit ? fixedCritSourceParts(activeSources, "critRate") : panelCritSourceParts(s1, "critRate", r.es, normalSources);
      const critDamageSources = responseCanCrit ? fixedCritSourceParts(activeSources, "critDamage") : panelCritSourceParts(s1, "critDamage", r.es, normalSources);
      if (!isHarmonyResponse || responseCanCrit) {
        switch (damageMode) {
          case "expected":
            critCard = { k: L.text("期望修正"), v: `<b>${esc(tnum(critMul))}</b>`, sub: `${L.stat("暴击率")} ${esc(tnum(shownCritRate))}%`, tip: formulaSourceTip([critRateSources, critDamageSources]) };
            break;
          case "crit":
            critCard = { k: L.text("暴击伤害"), v: `<b>${esc(tnum(critMul))}</b>`, sub: `${L.stat("暴击伤害")} ${esc(tnum(shownCritDamage))}%`, tip: formulaSourceTip(critDamageSources) };
            break;
          default:
            critCard = { k: L.text("非暴伤害"), v: "<b>1</b>", sub: L.text("不计算暴击"), tip: "" };
        }
      }
      if (isHarmonyResponse && !responseCanCrit) critCard.tip = "";
      const defTip = formulaSourceTip([
        targetLevelSources(target),
        targetPercentSource("减防", r.defense?.manualDefShred, true),
        sourceParts(activeSources, "defShred"),
        r.defense?.effectDefShred ? staticFormulaSource(L.effect(r.effect?.def || "效应"), "减防", r.defense.effectDefShred) : null,
        targetPercentSource("防御无视", r.defense?.manualDefIgnore, true),
        sourceParts(activeSources, "defIgnore"),
      ]);
      const resTip = formulaSourceTip([
        targetPercentSource("抗性", target.resistance, false),
        targetPercentSource("减抗", state.enemy.resShred, true),
        sourceParts(activeSources, "resShred"),
      ]);
      const finalSources = [
        targetPercentSource("最终伤害提升", state.enemy.finalDmg, true),
        sourceParts(activeSources, "finalDmg"),
        r.offsetFinalDmg ? staticFormulaSource(L.text("集谐干涉"), "最终伤害提升", r.offsetFinalDmg) : null,
      ];
      const finalCard = isHarmonyResponse
        ? { k: L.text("最终伤害提升"), v: `<b>${r.finalDmg === 1 ? esc(L.text("不参与")) : esc(tnum(r.finalDmg))}</b>`, sub: L.text("明确指定才参与"), tip: formulaSourceTip(finalSources) }
        : { k: L.text("最终伤害提升"), v: `<b>${esc(tnum(r.finalDmg))}</b>`, sub: `+${esc(tnum((r.finalDmg - 1) * 100))}% · ${L.text("最终乘区")}`, tip: formulaSourceTip(finalSources) };
      const cards = [
        { k: L.text("属性基数"), v: `<b>${esc(fmt(statDisplay))}</b>`, sub: esc(statLabel), tip: statTip },
        { k: L.text("技能倍率"), v: `<b>${esc(`${tnum(r.panel.skillMult * 100)}%`)}</b>`, sub: esc(r.sk ? L.damageType(r.sk.damageType) : "—"), tip: skillTip },
        bonusCard,
        amplifyCard,
        ...(isHarmonyResponse ? [] : [vulnCard]),
        critCard,
        { k: L.text("防御系数"), v: `<b>${esc(fx(r.defFactor))}</b>`, sub: `${L.text("我")}${esc(tnum(state.enemy.charLevel))} / ${L.text("敌")}${esc(tnum(target.enemyLevel))}${L.text("级")}`, tip: defTip },
        { k: L.text("抗性系数"), v: `<b>${esc(fx(r.resFactor))}</b>`, sub: esc(resSub), tip: resTip },
        finalCard,
      ];
      return cards.map(formulaCardHTML).join("");
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
      const value = activeDamageMode() === "crit" ? e.critHit : activeDamageMode() === "normal" ? e.normal : e.expected;
      return fmt(value);
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
      if (!e.enabled) return L.t("common.unselected");
      if (e.kind === "defShred") {
        const perStack = num(e.def.valuePerStack);
        return formulaStripHTML([
          {
            k: "层数",
            v: esc(tnum(e.stacks)),
            tip: formulaSourceTip([staticFormulaSource(L.effect(e.def), "层数", e.stacks, "", false, true)]),
          },
          {
            k: `${L.text("每层")} · ${L.text("减防")}`,
            v: `${esc(tnum(perStack))}%`,
            tip: formulaSourceTip([staticFormulaSource(L.effect(e.def), "减防", perStack, "%", false, true)]),
          },
        ]);
      }
      if (!e.valid) return `${esc(L.effect(e.def))}${L.text("当前只录入")}${knownEffectStacksText(e.def)}${L.text("层倍率。")}`;
      const baseValue = e.kind === "attack" ? tnum(e.attack) : tnum(e.base);
      const multValue = e.kind === "attack" ? `${tnum(e.rate)}%` : L.text("层数基础");
      const rateParts = e.kind === "attack" ? [`${esc(L.effectShort(e.def))} ${L.stackText(e.stacks)} ${tnum(e.baseRate)}%`] : [];
      if (e.kind === "attack" && e.rageCap != null) rateParts.push(`${L.text("爆发")} ${L.stackText(e.rageStacks)} ${tnum(e.rageRate)}%`);
      if (e.kind === "attack" && e.extraRate) rateParts.push(`${L.text("额外")} ${tnum(e.extraRate)}%`);
      const multDetail = e.kind === "attack" ? rateParts.join(" + ") : `${esc(L.effectShort(e.def))} ${L.stackText(e.stacks)}`;
      const provider = e.providerName ? `${e.providerName} ${L.stat("攻击")}` : L.text("提供者攻击");
      const effectDeepenFactor = Math.max(0, 1 + num(e.deepen) / 100);
      const sources = e.sources || {};
      const providerSlot = state.slots[e.providerIdx];
      const baseTip = e.kind === "attack"
        ? formulaSourceTip(panelStatSourceParts(providerSlot, "attack", echoStats(providerSlot), e.attackSources || {}))
        : formulaSourceTip([staticFormulaSource(`${L.effect(e.def)}·${L.stackText(e.stacks)}`, "层固定基础值", e.base, "", false, true)]);
      const multTip = e.kind === "attack"
        ? formulaSourceTip([
          staticFormulaSource(`${L.effectShort(e.def)}·${L.stackText(e.stacks)}`, "层数倍率", e.baseRate || 0, "%", false, true),
          e.rageCap != null ? staticFormulaSource(`${L.text("爆发")}·${L.stackText(e.rageStacks)}`, "层数倍率", e.rageRate || 0, "%", false) : null,
          sourceParts(sources, "effectExtraRate"),
        ])
        : formulaSourceTip([staticFormulaSource(L.effectShort(e.def), "层数", e.stacks, L.text("层"), false, true)]);
      const deepenTip = formulaSourceTip([
        staticFormulaSource("手动", "效应加深", e.manualDeepen || 0),
        sourceParts(sources, "amplify"),
        sourceParts(sources, "vulnerability"),
      ]);
      const finalTip = formulaSourceTip(sourceParts(sources, "finalDmg"));
      const defTip = formulaSourceTip([
        targetLevelSources(e.target),
        targetPercentSource("减防", e.manualDefShred, true),
        sourceParts(sources, "defShred"),
        targetPercentSource("防御无视", e.manualDefIgnore, true),
        sourceParts(sources, "defIgnore"),
      ]);
      const resTip = formulaSourceTip([
        targetPercentSource("抗性", e.manualRes, false),
        targetPercentSource("减抗", e.manualResShred, true),
        sourceParts(sources, "resShred"),
      ]);
      const critTip = formulaSourceTip([
        fixedCritSourceParts(sources, "critRate"),
        fixedCritSourceParts(sources, "critDamage"),
      ]);
      const cards = [
        { k: "效应基础值", v: baseValue, sub: e.kind === "attack" ? provider : L.effect(e.def), tip: baseTip },
        { k: "效应倍率", v: multValue, sub: multDetail, tip: multTip },
        { k: "效应加深", v: fx(effectDeepenFactor), sub: `+${tnum(e.deepen)}%`, tip: deepenTip },
        { k: "最终伤害提升", v: fx(e.finalDmgFactor || 1), sub: `Buff ${tnum(e.buffFinalDmg || 0)}%`, tip: finalTip },
        { k: "防御系数", v: fx(e.defFactor), sub: `${L.text("我")}${tnum(e.charLevel)} / ${L.text("敌")}${tnum(e.enemyLevel)}`, tip: defTip },
        { k: "抗性系数", v: fx(e.resFactor), sub: `${L.text("抗性")} ${tnum(e.res)}%`, tip: resTip },
      ];
      if (e.fixedCritRate != null) {
        cards.push({
          k: activeDamageMode() === "crit" ? "暴击伤害" : activeDamageMode() === "normal" ? "非暴伤害" : "期望修正",
          v: activeDamageMode() === "crit" ? fx(e.cd) : activeDamageMode() === "normal" ? "1" : fx(1 + e.cr * (e.cd - 1)),
          sub: `${L.stat("暴击率")} ${tnum(e.fixedCritRate)}% · ${L.stat("暴击伤害")} ${tnum(e.fixedCritDamage)}%`,
          tip: critTip,
        });
      }
      return formulaStripHTML(cards);
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
      return `<label class="result-inline-field"><span>${esc(L.text("爆发层数"))}</span><input type="number" min="0" max="${e.rageCap}" step="1" data-act="effect-rage-stacks" value="${e.rageStacks}" /></label>`;
    }

    function effectProviderControlHTML(e) {
      if (!e.enabled) return `<label class="result-inline-field"><span>${esc(L.text("提供者"))}</span><select disabled><option>—</option></select></label>`;
      const providers = effectProvidersForKey(e.key);
      if (!providers.length) return `<label class="result-inline-field"><span>${esc(L.text("提供者"))}</span><select disabled><option>—</option></select></label>`;
      const selectedIdx = providers.some((item) => item.idx === e.providerIdx) ? e.providerIdx : providers[0].idx;
      const options = providers.map((item) => `<option value="${item.idx}" ${item.idx === selectedIdx ? "selected" : ""}>${esc(L.charName(item.c))}</option>`).join("");
      return `<label class="result-inline-field"><span>${esc(L.text("提供者"))}</span><select data-act="effect-provider">${options}</select></label>`;
    }

    function effectInlineControlsHTML(r) {
      const availableKeys = teamEffectKeys();
      if (!availableKeys.length) return "";
      const calc = state.effectCalc || {};
      const e = visibleEffectResult(r, availableKeys);
      const selectedKey = e.enabled ? e.key : availableKeys[0];
      const disabled = e.enabled ? "" : "disabled";
      const deepen = calc.deepen ?? 0;
      const capText = e.enabled ? effectCapTextHTML(r, availableKeys) : "";
      const options = availableKeys.map((key) => {
        const def = EFFECT_DEFS[key];
        const label = key === selectedKey && capText ? `${L.effect(def)} · ${capText}` : L.effect(def);
        return `<option value="${key}" ${key === selectedKey ? "selected" : ""}>${esc(label)}</option>`;
      }).join("");
      const rageClass = e.rageCap == null ? "" : " result-inline-controls--effect-rage";
      return `<div class="result-inline-controls result-inline-controls--effect${rageClass}" id="result-inline-controls">
      <label class="result-inline-field result-inline-field--wide"><span>${esc(L.text("效应"))}</span><select data-act="effect-key" title="${esc(capText)}">${options}</select></label>
      ${effectProviderControlHTML(e)}
      <label class="result-inline-field"><span>${esc(L.text("层数"))}</span>${effectStackControlHTML(e)}</label>
      ${effectRageStackControlHTML(e)}
      <label class="result-inline-field"><span>${esc(L.text("手动加深%"))}</span><input type="number" step="0.1" data-act="effect-deepen" value="${esc(deepen)}" ${disabled} /></label>
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
      if (o.kind !== "response") return fmt(o.damage);
      const value = activeDamageMode() === "crit" ? o.critHit : activeDamageMode() === "normal" ? o.normal : o.expected;
      return fmt(value);
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

    function offsetCostOptionsHTML(compact = false) {
      const current = num(state.enemy.harmonyBase);
      const matched = HARMONY_BASE_OPTIONS.some((item) => item.value === current);
      const options = HARMONY_BASE_OPTIONS.map((item) =>
        `<option value="${item.value}" ${item.value === current ? "selected" : ""}>${item.label}${compact ? "" : ` · ${fmt(item.value)}`}</option>`
      ).join("");
      const customValue = compact ? "" : ` · ${fmt(current)}`;
      const custom = matched ? "" : `<option value="${esc(current)}" selected>${esc(L.t("common.custom") + customValue)}</option>`;
      return options + custom;
    }

    function offsetCostControlHTML(o, wide) {
      if (!o.enabled || o.kind === "state") return "";
      return `<label class="result-inline-field${wide ? " result-inline-field--wide" : ""}"><span>${esc(L.t("targets.cost"))}</span><select data-act="offset-cost">${offsetCostOptionsHTML()}</select></label>`;
    }

    function offsetDetailControlHTML(o, wide) {
      if (!o.enabled || o.kind === "tuneBreak") return "";
      if (o.kind === "response") {
        const lv = o.skLevel || 10;
        const opts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => `<option value="${level}" ${level === lv ? "selected" : ""}>${esc(L.t("common.levelShort", { value: level }))}</option>`).join("");
        return `<label class="result-inline-field${wide ? " result-inline-field--wide" : ""}"><span>${esc(L.text("响应等级"))}</span><select data-act="offset-skilllevel">${opts}</select></label>`;
      }
      return `<label class="result-inline-field${wide ? " result-inline-field--wide" : ""}"><span>${esc(L.text("层数"))}</span><input type="number" min="0" step="1" data-act="offset-stacks" value="${esc(o.stacks || 0)}" /></label>`;
    }

    function plainText(value) {
      return String(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    }

    function offsetDefenseSub(o) {
      return `${L.text("我")}${tnum(state.enemy.charLevel)} / ${L.text("敌")}${tnum(o?.target?.enemyLevel ?? state.enemy.enemyLevel)}`;
    }

    function offsetHarmonyBaseTip(o) {
      return formulaSourceTip([staticFormulaSource(offsetCostLabel(o.harmonyBase), "谐度基础值", o.harmonyBase, "", false, true)]);
    }

    function offsetBreakAmpTip(o) {
      const sources = sourceParts(o.sources, "breakAmp");
      return formulaSourceTip(sources.length ? sources : [staticFormulaSource("角色面板", "谐度破坏增幅", o.breakAmp, "%", false, true)]);
    }

    function offsetDefenseTip(o) {
      return formulaSourceTip([
        targetLevelSources(o.target),
        targetPercentSource("减防", state.enemy.defShred, true),
        sourceParts(o.sources, "defShred"),
        targetPercentSource("防御无视", state.enemy.defIgnore, true),
        sourceParts(o.sources, "defIgnore"),
      ]);
    }

    function offsetFinalTip(o) {
      return formulaSourceTip([
        targetPercentSource("最终伤害提升", state.enemy.finalDmg, true),
        sourceParts(o.sources, "finalDmg"),
      ]);
    }

    function offsetResTip(o) {
      return formulaSourceTip([
        targetPercentSource("抗性", o.target?.resistance ?? state.enemy.res, false),
        targetPercentSource("减抗", state.enemy.resShred, true),
        sourceParts(o.sources, "resShred"),
      ]);
    }

    function offsetDeepenCard(o) {
      const buff = tnum(o.buffDeepen || 0);
      const sub = `${L.text("易伤")}${tnum(o.enemyVulnerability)}% · ${L.text("减伤")}${tnum(o.enemyDmgReduction)}%${buff !== "0" ? ` · Buff ${buff}%` : ""}`;
      const tip = formulaSourceTip([
        targetPercentSource("受到伤害减少", o.enemyDmgReduction, false),
        targetPercentSource("易伤", o.enemyVulnerability, true),
        sourceParts(o.sources, "amplify"),
        sourceParts(o.sources, "vulnerability"),
      ]);
      return { k: "易伤", v: esc(tnum(o.deepenFactor)), sub, tip };
    }

    function offsetResponseLabels(o) {
      if (o.formulaKind === "hackBreak") return { damage: L.text("骇破伤害"), multiplier: L.text("骇破倍率") };
      if (o.formulaKind === "tuneRupture") return { damage: L.text("震谐伤害"), multiplier: L.text("震谐倍率") };
      return { damage: L.text("谐度响应伤害"), multiplier: L.text("响应倍率") };
    }

    function offsetResponseMultiplierTip(o) {
      return formulaSourceTip([
        staticFormulaSource(`${L.text("技能")}·${L.text(o.label || "响应技能")}·${L.t("common.levelShort", { value: o.skLevel || 10 })}`, "基础倍率", o.baseMult, "%", false, true),
        sourceParts(o.sources, "skillMultBonus"),
      ]);
    }

    function offsetFormulaHTML(r) {
      const o = r.offset || {};
      if (!o.enabled) return L.t("common.unselected");
      if (o.kind === "state") {
        if (o.formulaKind === "coherenceInterference") {
          const compactState = o.currentStateLabel || o.stateValueLabel || compactOffsetStateName(o.currentState || o.stateValue || "集谐·干涉");
          const stateHint = o.valid ? "" : `<div class="formula-state-hint">${L.text("需先确认目标处于")}${esc(L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "集谐·干涉")))}${L.text("，才应用该收益。")}</div>`;
          const finalGainTip = formulaSourceTip([
            staticFormulaSource(L.text(compactState), "层数", o.stacks, L.text("层"), false, true),
            sourceParts(o.sources, "breakAmp"),
            staticFormulaSource("固定", "每点增幅", o.perStackRate, "%", false, true),
          ]);
          return `${formulaStripHTML([
            { k: "状态", v: esc(L.text(compactState || "未确认")), sub: o.valid ? "已确认" : "未确认", tip: L.sourceJoin(L.text("目标"), L.text(compactState || "未确认")) },
            { k: "层数", v: esc(L.stackText(tnum(o.stacks))), sub: "集谐干涉", tip: formulaSourceTip([staticFormulaSource(L.text(compactState), "层数", o.stacks, L.text("层"), false, true)]) },
            { k: "谐度增幅", v: esc(L.pointText(tnum(o.breakAmp))), sub: "角色面板", tip: offsetBreakAmpTip(o) },
            { k: "每层", v: esc(`${tnum(o.perStackRate)}%`), sub: L.text("每点增幅"), tip: formulaSourceTip([staticFormulaSource("固定", "每点增幅", o.perStackRate, "%", false, true)]) },
            { k: "最终提升", v: esc(`+${tnum(o.finalDmgGain)}%`), sub: L.text("最终乘区"), tip: finalGainTip },
          ], { multiply: false })}${stateHint}`;
        }
        const currentState = L.text(o.currentStateLabel || compactOffsetStateName(o.currentState || "未确认"));
        const expectedState = L.text(o.stateValueLabel || compactOffsetStateName(o.stateValue || "—"));
        return formulaStripHTML([
          { k: "状态", v: esc(currentState), sub: esc(expectedState), tip: L.sourceJoin(L.text("目标"), currentState) },
          { k: "层数", v: esc(L.stackText(tnum(o.stacks))), sub: "状态层数", tip: formulaSourceTip([staticFormulaSource(currentState, "层数", o.stacks, L.text("层"), false, true)]) },
          { k: "谐度增幅", v: esc(L.pointText(tnum(o.breakAmp))), sub: "相关角色面板", tip: offsetBreakAmpTip(o) },
          { k: "结算", v: esc(L.text(o.status || "未确认")), sub: "该状态本身不直接造成伤害", tip: L.sourceJoin(L.text("目标"), currentState) },
        ], { multiply: false });
      }
      if (o.kind === "tuneBreak") {
        return formulaStripHTML([
          { k: "谐度基础值", v: esc(fmt(o.harmonyBase)), sub: esc(offsetCostLabel(o.harmonyBase)), tip: offsetHarmonyBaseTip(o) },
          { k: "等级倍率", v: esc(`${tnum(o.multiplier)}%`), sub: "固定等级参数", tip: formulaSourceTip([staticFormulaSource("固定等级参数", "等级倍率", o.multiplier, "%", false, true)]) },
          { k: "谐度增幅", v: esc(fx(o.breakAmpFactor)), sub: L.pointText(esc(tnum(o.breakAmp))), tip: offsetBreakAmpTip(o) },
          { k: "防御系数", v: esc(fx(o.defFactor)), sub: offsetDefenseSub(o), tip: offsetDefenseTip(o) },
          offsetDeepenCard(o),
          { k: "最终伤害提升", v: esc(tnum(o.finalDmg)), sub: `+${tnum((num(o.finalDmg) - 1) * 100)}%`, tip: offsetFinalTip(o) },
          { k: "固定系数", v: esc(tnum(o.fixedFactor)), sub: "固定系数0.8", tip: formulaSourceTip([staticFormulaSource("固定", "固定系数", o.fixedFactor, "", false, true)]) },
        ]);
      }
      const stateHint = o.valid ? "" : `<div class="formula-state-hint">${L.text("需先确认目标处于")}${esc(L.text(o.requiredState || "对应干涉状态"))}${L.text("，才结算该响应伤害。")}</div>`;
      const labels = offsetResponseLabels(o);
      const cards = [
        { k: "谐度基础值", v: esc(fmt(o.harmonyBase)), sub: esc(offsetCostLabel(o.harmonyBase)), tip: offsetHarmonyBaseTip(o) },
        { k: labels.multiplier, v: esc(`${tnum(o.multiplier)}%`), sub: `${esc(o.label || L.text("响应技能"))} ${esc(L.t("common.levelShort", { value: o.skLevel || 10 }))}`, tip: offsetResponseMultiplierTip(o) },
        { k: "谐度增幅", v: esc(fx(o.breakAmpFactor)), sub: L.pointText(esc(tnum(o.breakAmp))), tip: offsetBreakAmpTip(o) },
        offsetDeepenCard(o),
        { k: "防御系数", v: esc(fx(o.defFactor)), sub: offsetDefenseSub(o), tip: offsetDefenseTip(o) },
        { k: "抗性系数", v: esc(fx(o.resFactor)), sub: `${L.text("抗性")}${tnum(o.res)}%`, tip: offsetResTip(o) },
        { k: "最终伤害提升", v: esc(tnum(o.finalDmg)), sub: `+${tnum((num(o.finalDmg) - 1) * 100)}%`, tip: offsetFinalTip(o) },
      ];
      if (o.fixedCritRate != null) {
        cards.push({
          k: activeDamageMode() === "crit" ? "暴击伤害" : activeDamageMode() === "normal" ? "非暴伤害" : "期望修正",
          v: activeDamageMode() === "crit" ? fx(o.cd) : activeDamageMode() === "normal" ? "1" : fx(1 + o.cr * (o.cd - 1)),
          sub: `${L.stat("暴击率")} ${tnum(o.fixedCritRate)}% · ${L.stat("暴击伤害")} ${tnum(o.fixedCritDamage)}%`,
          tip: formulaSourceTip([fixedCritSourceParts(o.sources, "critRate"), fixedCritSourceParts(o.sources, "critDamage")]),
        });
      }
      return `${formulaStripHTML(cards)}${stateHint}`;
    }

    function offsetInlineControlsHTML(r) {
      const o = r.offset || {};
      if (!o.available) return "";
      const selected = offsetSelectedValue(o);
      const options = (o.entries || []).map((entry) => {
        const detail = entry.kind === "response" ? ` (${L.damageType(entry.damageType || "响应")})` : "";
        return `<option value="${esc(entry.optionValue)}" ${entry.optionValue === selected ? "selected" : ""}>${esc(L.text(entry.label))}${detail}</option>`;
      }).join("");
      const hasCost = o.enabled && o.kind !== "state";
      const hasDetail = o.enabled && o.kind !== "tuneBreak";
      const systemWide = hasCost === hasDetail;
      return `<div class="result-inline-controls" id="result-inline-controls">
      <label class="result-inline-field${systemWide ? " result-inline-field--wide" : ""}"><span>${esc(L.text("体系"))}</span><select data-act="offset-key">${options}</select></label>
      ${offsetCostControlHTML(o, false)}
      ${offsetDetailControlHTML(o, false)}
    </div>`;
    }

    function resultModes(r) {
      return [
        { key: "skill", label: L.text("技能伤害"), available: true },
        { key: "effect", label: L.text("效应伤害"), available: teamEffectKeys().length > 0 },
        { key: "offset", label: L.text("偏移体系"), available: !!r.offset?.available },
      ];
    }

    function activeResultMode(r) {
      const requested = state.resultMode || "skill";
      return resultModes(r).some((mode) => mode.key === requested && mode.available) ? requested : "skill";
    }

    function resultData(r) {
      const key = activeResultMode(r);
      const damageMode = DAMAGE_MODES[activeDamageMode()];
      const outputChar = ch(state.slots[state.outputIdx]?.char);
      const outputName = outputChar ? L.charName(outputChar) : L.text("空位");
      if (key === "effect") {
        const availableKeys = teamEffectKeys();
        const e = visibleEffectResult(r, availableKeys);
        const providerChar = e.providerIdx == null ? null : ch(state.slots[e.providerIdx]?.char);
        const hasDamageModes = !!(e.enabled && e.valid && e.kind !== "defShred" && e.fixedCritRate != null);
        return {
          key,
          kindLabel: L.text("效应伤害"),
          detailLabel: e.enabled ? L.effect(e.def) : L.t("common.unselected"),
          sourceName: providerChar ? L.charName(providerChar) : outputName,
          value: effectValueHTML(r, availableKeys),
          meta: "",
          values: hasDamageModes ? { crit: e.critHit, expected: e.expected, normal: e.normal } : null,
          split: "",
        };
      }
      if (key === "offset") {
        const o = r.offset || {};
        const providerChar = o.providerIdx == null ? null : ch(state.slots[o.providerIdx]?.char);
        const detailLabel = o.kind === "state"
          ? L.text(o.currentStateLabel || o.stateValueLabel || compactOffsetStateName(o.stateValue || o.label))
          : o.skill ? L.skillName(o.skill) : L.text(o.label || "谐度破坏伤害");
        const hasDamageModes = !!(o.enabled && o.valid && o.kind === "response" && o.fixedCritRate != null);
        return {
          key,
          kindLabel: L.text("偏移体系"),
          detailLabel,
          sourceName: providerChar ? L.charName(providerChar) : outputName,
          value: offsetValueHTML(r),
          meta: "",
          values: hasDamageModes ? { crit: o.critHit, expected: o.expected, normal: o.normal } : null,
          split: "",
        };
      }
      return {
        key: "skill",
        kindLabel: L.text("技能伤害"),
        detailLabel: r.sk ? L.skillName(r.sk) : L.t("common.unselected"),
        sourceName: outputName,
        value: fmt(damageMode.value(r)),
        meta: "",
        values: { crit: r.critHit, expected: r.expected, normal: r.normal },
        split: damageSplitHTML(r, damageMode.split),
      };
    }

    function resultModeTabsHTML(r) {
      const active = activeResultMode(r);
      const buttons = resultModes(r).map((mode) =>
        `<button type="button" class="result-mode-tab${mode.key === active ? " on" : ""}" data-act="result-mode" data-mode="${mode.key}" aria-pressed="${mode.key === active ? "true" : "false"}" ${mode.available ? "" : "disabled"}>${esc(mode.label)}</button>`
      ).join("");
      return `<div class="result-mode-tabs" id="result-mode-tabs" role="group" aria-label="${esc(L.text("最终伤害"))}">${buttons}</div>`;
    }

    function resultDamageLineHTML(data) {
      if (!data.values) return "";
      const modeKey = activeDamageMode();
      const items = [["crit", "out-crit"], ["expected", "out-exp"], ["normal", "out-normal"]];
      return `<div class="stage-damage-line">${items.map(([key, id]) =>
        `<button type="button" class="dmg-line-btn${key === modeKey ? " on" : ""}" data-act="dmg-mode" data-mode="${key}">${DAMAGE_MODES[key].label} <b id="${id}">${fmt(data.values[key])}</b></button>`
      ).join("")}</div>`;
    }

    function resultMainDisplayHTML(r) {
      const data = resultData(r);
      return `<div class="result-main-display" id="result-main-display">
        <span class="stage-kicker">${esc(data.kindLabel)} · ${esc(data.detailLabel)}</span>
        <div class="stage-damage" id="out-active">${esc(data.value)}</div>
        ${resultModeTabsHTML(r)}
        ${resultDamageLineHTML(data)}
        <div class="stage-result-meta" id="result-meta">${esc(data.meta)}</div>
        <div id="out-active-split">${data.split}</div>
        <span class="damage-dock-sentinel" id="damage-dock-sentinel" aria-hidden="true"></span>
      </div>`;
    }

    function resultMainHTML(r) {
      const mode = activeResultMode(r);
      const inlineControls = mode === "effect" ? effectInlineControlsHTML(r) : mode === "offset" ? offsetInlineControlsHTML(r) : "";
      return `<div class="damage-main" id="result-main">
        ${resultMainDisplayHTML(r)}
        ${inlineControls}
      </div>`;
    }

    function topbarOutputSetIconsHTML(slot) {
      const ids = teamEchoSetIds(slot).filter(Boolean);
      const names = ids.map(sonataDisplayName);
      return `<span class="topbar-output-set-icons" title="${esc(names.join(" + "))}">${ids.map((id, i) => {
        const name = sonataDisplayName(id);
        const separator = i ? `<span class="echo-set-plus">+</span>` : "";
        return `${separator}<span class="echo-set-chip" role="img" aria-label="${esc(name)}" title="${esc(name)}" data-tip="${esc(name)}">${sonataIconHTML(sonataById(id))}</span>`;
      }).join("")}</span>`;
    }

    function topbarOutputSlotHTML(slot, idx) {
      const c = ch(slot.char);
      if (!c) {
        return `<button type="button" class="topbar-output-slot topbar-output-slot--empty" disabled><span>${esc(L.t("common.empty"))}</span></button>`;
      }
      const e = slot.echo;
      syncEchoLead(e, c.element);
      const lead = leadChoicesForEcho(e).find((choice) => choice.key === e.lead);
      const leadName = leadEchoDisplayName(lead);
      const charName = L.charName(c);
      const build = `${num(slot.seq)}+${num(slot.rank) || 1}`;
      const avatar = c.portrait
        ? `<img class="topbar-output-avatar" src="${esc(c.portrait)}" alt="" onerror="this.style.display='none'" />`
        : `<span class="topbar-output-avatar topbar-output-avatar--fallback">${esc(charName.slice(0, 1))}</span>`;
      const setNames = teamEchoSetIds(slot).filter(Boolean).map(sonataDisplayName).join(" + ");
      const aria = [charName, build, setNames, leadName].filter(Boolean).join(" · ");
      return `<button type="button" class="topbar-output-slot${idx === state.outputIdx ? " on" : ""}" data-act="dock-output" data-slot="${idx}" aria-pressed="${idx === state.outputIdx ? "true" : "false"}" aria-label="${esc(aria)}">
      <span class="topbar-output-identity">${avatar}<b>${esc(charName)}</b><span class="topbar-output-build">${esc(build)}</span></span>
      <span class="topbar-output-gear">${topbarOutputSetIconsHTML(slot)}<span class="topbar-output-lead" title="${esc(leadName)}">${esc(leadName)}</span></span>
    </button>`;
    }

    function damageDockHTML(r) {
      const data = resultData(r);
      const mode = activeDamageMode();
      const modeLabel = data.values ? DAMAGE_MODES[mode].label : data.kindLabel;
      const value = data.values ? fmt(data.values[mode]) : data.value;
      return `<div class="topbar-damage-dock" id="topbar-damage-dock" role="group" aria-label="${esc(L.text("最终伤害"))}" hidden>
      <div class="topbar-damage-summary"><span>${esc(modeLabel)}</span><b id="dock-out-active">${esc(value)}</b><span class="topbar-damage-skill" title="${esc(data.detailLabel)}">${esc(data.detailLabel)}</span></div>
      <div class="topbar-output-slots" role="group" aria-label="${esc(L.text("本次结算"))}">${state.slots.map(topbarOutputSlotHTML).join("")}</div>
    </div>`;
    }

    function resultFormulaBodyHTML(r) {
      const data = resultData(r);
      const formula = data.key === "effect"
        ? effectFormulaHTML(r)
        : data.key === "offset"
          ? offsetFormulaHTML(r)
          : formulaStripHTML(damageMetricCardsHTML(r), { id: "metric-strip" });
      return `<div class="result-formula-body" id="result-formula-body">${formula}</div>`;
    }

    function resultFormulaHTML(r) {
      const data = resultData(r);
      return `<div class="result-formula result-formula--${data.key}" id="result-formula">
      <div class="target-stage"><span class="target-stage-title">${esc(L.t("targets.section"))}</span>${targetControlsHTML(r)}</div>
      <div class="result-formula-head"><span>${esc(L.text("伤害公式"))}</span></div>
      ${resultFormulaBodyHTML(r)}
    </div>`;
    }

    function settlementStageHTML(r) {
      return `<section class="stage-card settlement-stage" id="settlement-stage">${calcControlsHTML(r)}</section>`;
    }

    function damageStageHTML(r) {
      return `<section class="stage-card damage-stage damage-overview-stage" id="damage-result-source">
    <div class="damage-hero">
      ${resultMainHTML(r)}
      <div class="hero-team">
        ${teamCardsHTML()}
      </div>
    </div>
    ${resultFormulaHTML(r)}
  </section>`;
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
    ${stageTopbarHTML(r)}
    ${damageStageHTML(r)}
    <div class="stage-grid">
      <div class="stage-stack">
        ${settlementStageHTML(r)}
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
      return `<div class="settlement-content">
    <div class="card-head"><span>${esc(L.text("本次结算"))}</span><small>${esc(L.text("技能"))} / ${esc(L.text("入场"))} / ${esc(L.text("条件"))}</small></div>
    <div class="skill-control-row">
      <div class="field"><label>${esc(L.text("技能"))}</label><select data-act="skill" data-slot="${oi}">${skillOptions(s1)}</select></div>
      <div class="field"><label>${esc(L.text("技能等级"))}${cat0 ? ` (${esc(L.category(cat0))})` : ""}</label><select data-act="skilllevel" data-slot="${oi}">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => `<option value="${level}" ${level === curLv ? "selected" : ""}>${esc(L.t("common.levelShort", { value: level }))}</option>`).join("")}</select></div>
    </div>
    <div id="dmg-type">${typeTagHTML(r)}</div>
    <div id="layer-fields" class="field-grid field-grid--compact">${layerFieldsHTML()}</div>
  </div>`;
    }

    function activeTargetInfo(r) {
      const fallback = { context: r.target, element: r.damageElement };
      const mode = activeResultMode(r);
      if (mode === "skill") return fallback;
      if (mode === "effect") {
        const effect = visibleEffectResult(r, teamEffectKeys());
        if (!effect?.target) return fallback;
        return { context: effect.target, element: effect.def?.element || r.damageElement };
      }
      const offset = r.offset || {};
      if (!offset.target) return fallback;
      return { context: offset.target, element: offset.damageElement || r.damageElement };
    }

    function targetSummaryHTML(r, active = activeTargetInfo(r)) {
      const context = active.context || TARGETS.context(state.enemy, active.element);
      const damageElement = active.element || r.damageElement || ch(state.slots[state.outputIdx].char)?.element;
      const outputChar = ch(state.slots[state.outputIdx].char);
      const summary = L.t("targets.summary", {
        character: L.charName(outputChar),
        element: L.element(damageElement),
        target: context.name,
        level: L.t("common.levelShort", { value: tnum(context.enemyLevel) }),
        resistance: tnum(context.resistance),
      });
      return `<div class="target-summary" id="target-summary">${esc(summary)}</div>`;
    }

    function targetGameplayControlsHTML() {
      const gameplay = TARGETS.gameplayControls(state.enemy);
      if (!gameplay.groups.length && !gameplay.fixed.length && !gameplay.controls.length) return "";
      const groupLabel = state.enemy.targetMode === "whiwa"
        ? L.t("targets.token")
        : state.enemy.targetMode === "dpmatrix"
          ? L.t("targets.enhancement")
          : L.t("targets.buff");
      const optionHTML = (group, buff) => `<option value="${esc(buff.id)}" ${group.value === buff.id ? "selected" : ""}>${esc(TARGETS.gameplayBuffName(buff))}</option>`;
      const choiceOptionsHTML = (group) => {
        if (state.enemy.targetMode !== "whiwa") return group.options.map((buff) => optionHTML(group, buff)).join("");
        return [
          { qualityId: 5, label: L.t("targets.tokenGold") },
          { qualityId: 4, label: L.t("targets.tokenPurple") },
        ].map(({ qualityId, label }) => {
          const options = group.options.filter((buff) => Number(buff.qualityId) === qualityId);
          if (!options.length) return "";
          return `<optgroup label="${esc(label)}">${options.map((buff) => optionHTML(group, buff)).join("")}</optgroup>`;
        }).join("");
      };
      const groups = gameplay.groups.map((group) => {
        const options = choiceOptionsHTML(group);
        return `<label class="target-buff-select"><span>${esc(groupLabel)}</span><select data-act="target-buff-choice" data-group="${esc(group.id)}"><option value="">${esc(L.t("targets.buffUnselected"))}</option>${options}</select></label>`;
      }).join("");
      const fixed = gameplay.fixed.length
        ? `<div class="target-buff-fixed"><span>${esc(L.t("targets.stageEffects"))}</span>${gameplay.fixed.map((buff) => `<span class="target-buff-chip" title="${esc(TARGETS.gameplayBuffDescription(buff))}">${esc(TARGETS.gameplayBuffName(buff))}</span>`).join("")}</div>`
        : "";
      const controls = gameplay.controls.map((buff) => {
        const name = TARGETS.gameplayBuffName(buff);
        const desc = TARGETS.gameplayBuffDescription(buff);
        if (buff.control === "range") {
          const value = TARGETS.controlValue(state.enemy, buff);
          const options = [];
          for (let current = Number(buff.min); current <= Number(buff.max); current += Number(buff.step)) {
            options.push(`<option value="${esc(current)}" ${current === value ? "selected" : ""}>${esc(L.t("targets.buffValue", { value: tnum(current) }))}</option>`);
          }
          return `<label class="target-buff-range" title="${esc(desc)}"><span>${esc(name)}</span><select data-act="target-buff-range" data-buff="${esc(buff.id)}">${options.join("")}</select></label>`;
        }
        return `<label class="target-buff-toggle" title="${esc(desc)}"><input type="checkbox" data-act="target-buff-toggle" data-buff="${esc(buff.id)}" ${TARGETS.controlValue(state.enemy, buff) ? "checked" : ""} /> <span>${esc(name)}</span></label>`;
      }).join("");
      const selectedDescriptions = gameplay.groups.map((group) => group.options.find((buff) => buff.id === group.value)).filter(Boolean).map((buff) => TARGETS.gameplayBuffDescription(buff));
      const description = selectedDescriptions.length ? `<div class="target-buff-description">${selectedDescriptions.map(esc).join(" · ")}</div>` : "";
      return `<div class="target-buff-controls">${groups}${fixed}${controls}${description}</div>`;
    }

    function targetControlsHTML(r) {
      const enemy = state.enemy;
      const active = activeTargetInfo(r);
      const context = active.context || TARGETS.context(enemy, active.element);
      const modeOptions = TARGETS.modeOrder.map((mode) =>
        `<option value="${esc(mode)}" ${mode === enemy.targetMode ? "selected" : ""}>${esc(TARGETS.modeName(mode))}</option>`
      ).join("");
      const seasons = TARGETS.sortedSeasons(enemy.targetMode);
      const currentSeasonId = TARGETS.currentSeasonId(enemy.targetMode);
      const seasonOptions = seasons.map((item) => {
        const isCurrent = String(item.id) === String(currentSeasonId);
        const suffix = isCurrent ? ` · ${L.t("targets.current")}` : "";
        return `<option value="${esc(item.id)}" ${String(item.id) === String(enemy.targetSeasonId) ? "selected" : ""}>${esc(TARGETS.seasonName(enemy.targetMode, item.id) + suffix)}</option>`;
      }).join("");
      const seasonControl = seasons.length <= 1 ? "" : `<label class="target-season-field"><span>${esc(L.t("targets.season"))}</span><select data-act="target-season">${seasonOptions}</select></label>`;
      const targetPaths = TARGETS.targetPaths(enemy.targetMode, enemy.targetSeasonId);
      const selectedPathId = TARGETS.selectedPathId(enemy);
      const pathControl = targetPaths.length ? `<label class="formula-target-path"><span>${esc(TARGETS.targetPathLabel(enemy.targetMode))}</span><select data-act="target-path">${targetPaths.map((path) =>
        `<option value="${esc(path.id)}" ${path.id === selectedPathId ? "selected" : ""}>${esc(path.label)}</option>`
      ).join("")}</select></label>` : "";
      const targetOptions = TARGETS.groupedTargets(enemy.targetMode, enemy.targetSeasonId, selectedPathId).map((group) => {
        const options = group.items.map((item) =>
          `<option value="${esc(item.id)}" ${item.id === enemy.targetId ? "selected" : ""}>${esc(TARGETS.targetOptionName(item))}</option>`
        ).join("");
        return group.label ? `<optgroup label="${esc(group.label)}">${options}</optgroup>` : options;
      }).join("");
      const updatedAt = L.t("targets.updatedAt", { date: TARGETS.syncedDate() });
      const gameplayControls = targetGameplayControlsHTML();
      const toggle = `<button type="button" class="formula-target-toggle${state.showTargetExtras ? " on" : ""}" data-act="target-extra-toggle">${esc(state.showTargetExtras ? L.t("common.collapse") : L.t("common.more"))}</button>`;
      const targetLabel = enemy.targetMode === "openWorld" ? L.t("targets.attribute") : L.t("targets.target");
      const costControl = `<label class="formula-target-cost"><span>${esc(L.t("targets.cost"))}</span><select data-act="offset-cost">${offsetCostOptionsHTML(true)}</select></label>`;
      const levelControl = `<label class="formula-target-level"><span>${esc(L.t("targets.enemyLevel"))}</span><input type="number" min="1" step="1" data-act="target-level" value="${esc(tnum(context.enemyLevel))}" /></label>`;
      const primaryClass = `formula-target-primary${seasonControl ? " formula-target-primary--with-season" : ""}${pathControl ? " formula-target-primary--with-path" : ""}`;
      if (!state.showTargetExtras) {
        return `<div class="formula-target-controls" id="target-controls">
      <div class="${primaryClass}">
        <label><span>${esc(L.t("targets.mode"))}</span><select data-act="target-mode">${modeOptions}</select></label>
        ${seasonControl}
        ${pathControl}
        <label class="formula-target-pick"><span>${esc(targetLabel)}</span><select data-act="target-pick">${targetOptions}</select></label>
        ${levelControl}
        ${costControl}
        ${toggle}
      </div>
      ${targetSummaryHTML(r, active)}
      ${gameplayControls}
    </div>`;
      }

      const enemyField = ({ key, label, hint, step = "0.1", autoValue = 0 }) => {
        const auto = num(autoValue);
        const total = num(enemy[key]) + auto;
        const help = hint ? `<span class="help" tabindex="0" role="note" aria-label="${esc(hint)}">?<span class="help-tip" role="tooltip">${esc(hint)}</span></span>` : "";
        return `<label class="effect-field"><span>${esc(label)}${help}</span><input type="number" step="${esc(step)}" data-act="enemy" data-key="${esc(key)}" data-total="1" data-auto="${esc(auto)}" value="${esc(tnum(total))}" /></label>`;
      };
      const resistanceInputs = TARGETS.elements().map((element) =>
        `<label class="effect-field"><span>${esc(L.t("targets.resistance", { element: L.element(element) }))}</span><input type="number" step="0.1" data-act="target-resistance" data-element="${esc(element)}" value="${esc(tnum(context.resistances[element]))}" /></label>`
      ).join("");
      const autoDefShred = num(r?.defense?.buffDefShred) + num(r?.defense?.effectDefShred);
      const defHint = r?.defense && r.defense.effectDefShred
        ? L.t("hints.defShredWithHavocBane", { value: tnum(r.defense.effectDefShred) })
        : L.t("hints.defShred");
      const extraFields = [
        { key: "resShred", label: L.text("属性减抗%"), autoValue: r?.totals?.resShred },
        { key: "defShred", label: L.text("减防%"), hint: defHint, autoValue: autoDefShred },
        { key: "defIgnore", label: L.text("防御无视%"), autoValue: r?.defense?.buffDefIgnore },
        { key: "finalDmg", label: L.text("最终伤害%"), autoValue: r?.totals?.finalDmg },
        { key: "vulnerability", label: L.text("易伤%"), autoValue: r?.totals?.vulnerability },
        { key: "dmgReduction", label: L.text("受到伤害减少%") },
      ];
      const reset = context.overrideActive
        ? `<button type="button" class="panel-clear" data-act="target-reset">${esc(L.t("targets.resetAutomatic"))}</button>`
        : "";
      const moreHead = reset
        ? `<div class="target-more-head">${reset}</div>`
        : "";
      return `<div class="formula-target-controls formula-target-controls--expanded" id="target-controls">
    <div class="${primaryClass}">
      <label><span>${esc(L.t("targets.mode"))}</span><select data-act="target-mode">${modeOptions}</select></label>
      ${seasonControl}
      ${pathControl}
      <label class="formula-target-pick"><span>${esc(targetLabel)}</span><select data-act="target-pick">${targetOptions}</select></label>
      ${levelControl}
      ${costControl}
      ${toggle}
    </div>
    ${targetSummaryHTML(r, active)}
    ${gameplayControls}
    <div class="target-more-panel">
      ${moreHead}
      <fieldset class="target-resistance-fieldset"><legend>${esc(L.t("targets.fullResistance"))}</legend><div class="target-resistance-grid">${resistanceInputs}</div></fieldset>
      <div class="effect-controls formula-target-fields formula-target-modifiers">${extraFields.map(enemyField).join("")}</div>
      <div class="target-updated">${esc(updatedAt)}</div>
    </div>
  </div>`;
    }

    return {
      stageLayoutHTML, typeTagHTML, damageMetricCardsHTML, activeDamageMode,
      effectValueHTML, effectFormulaHTML, effectCapTextHTML,
      offsetValueHTML, offsetFormulaHTML,
      activeResultMode, resultMainDisplayHTML, resultMainHTML, resultFormulaBodyHTML, resultFormulaHTML, damageDockHTML,
      targetSummaryHTML, settlementStageHTML, buffStageHTML,
    };
  }

  return { create };
})();
