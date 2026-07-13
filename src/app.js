"use strict";
// 前端逻辑：基础面板挂载(角色base+属性树+武器静态) + 队伍Buff + 去混乘区。
const W = window.WUWA;
const L = window.WUWA_LANGUAGES;
const ch = (id) => W.chars[id];
const {
  WEAPONS, SONATAS, wp, defaultEchoForChar, leadChoicesForEcho, syncEchoLead,
  weaponBuffs, sonataBuffs, echoStats: equipmentEchoStats,
  ECHO_COSTS, echoMainOptions, echoSubOptions, echoSubValues, echoFixedMain,
  ensureEchoDetail, echoFieldValues, echoDetailSummary, statLabel,
} = window.WUWA_EQUIPMENT;
const {
  num, effectKeyOf,
} = window.WUWA_RULES;
const {
  esc,
} = window.WUWA_RENDER_HELPERS;
const defaultEcho = (charId) => defaultEchoForChar(charId ? ch(charId) : null);
// 面板默认展开的「添加」行：治疗辅助(validSubs 含 heal)默认带治疗效果加成行
const defaultPanelRows = (charId) => (charId && (ch(charId).validSubs || []).includes("heal")) ? ["heal"] : [];
const echoStats = (slot) => equipmentEchoStats(slot, slot.char ? ch(slot.char) : null);
const characterSlotState = (charId) => { const c = charId ? ch(charId) : null; return { char: charId || null, weapon: c ? c.defaultWeaponId ?? c.signatureWeaponId : null, toggles: {}, resources: {}, echo: defaultEcho(charId), skill: c?.defaultSkillId ?? null, layers: null, extraPanelRows: charId ? defaultPanelRows(charId) : [] }; };
const initialSlot = (charId, weapon, skill) => ({ ...characterSlotState(charId), weapon, skill, rank: 1, seq: 0, skillLevels: {} });

function pickCharacter(idx, charId) {
  const s = state.slots[idx];
  if (!charId) { Object.assign(s, characterSlotState(null)); return; }
  const existingIdx = state.slots.findIndex((slot) => slot.char === charId);
  if (existingIdx >= 0) {
    state.outputIdx = existingIdx;
    return;
  }
  Object.assign(s, characterSlotState(charId));
}

function clearCharacter(idx) {
  const s = state.slots[idx];
  if (!s.char) return;
  const nextOutput = state.slots.findIndex((slot, i) => i !== idx && slot.char);
  if (nextOutput < 0) return;
  Object.assign(s, characterSlotState(null));
  if (state.outputIdx === idx) state.outputIdx = nextOutput;
}

// —— 状态 ——
const state = {
  lang: L.current(),
  outputIdx: 0, // 当前作「输出位」的号位（结算列可切 1/2/3）；其余位作支援
  resultMode: "skill", // 顶部统一结算：skill / effect / offset
  damageMode: "crit", // 顶部伤害显示：crit / expected / normal
  showDesc: false, // buff 第二行默认显示短摘；由 Buff 区「原文」开关切到完整文本
  showTargetExtras: false, // 目标参数行额外乘区默认折叠，只在有生效来源或用户展开时显示
  effectCalc: { key: "none", providerIdx: null, stacks: 10, stackMode: "auto", electroRageStacks: 0, deepen: 0 }, // 大伤害数字下方：独立效应伤害结算
  offsetCalc: { key: "tuneBreak", providerIdx: null, skillId: null, stateId: null, stateValue: null, stacks: 3, deepen: 0 }, // 偏移/谐度破坏体系独立结算
  slots: [
    initialSlot("jinhsi", "ages_of_harvest", "forte_illuminous_epiphany_stella"),
    initialSlot("zhezhi", "rime_draped_sprouts", "forte_creations_zenith"),
    initialSlot("verina", "cosmic_ripples", "lib"),
  ],
  enemy: { charLevel: 90, enemyLevel: 90, harmonyBase: 10027, res: 10, resShred: 0, defShred: 0, defIgnore: 0, vulnerability: 0, dmgReduction: 0, finalDmg: 0 },
};

const {
  slotBuffs, availableSkills, selectedSkill, resourceKey, resourceControlsForSlot, resolvedSkill,
  stateKey, stateChoiceKey, stateControlsHTML,
  buffStackCount, buffStatus, setBuffToggle, scaleByInfo, buffValue, compute,
} = window.WUWA_SETTLEMENT.create({ state, ch, wp, echoStats, weaponBuffs, sonataBuffs, esc });
const {
  buffFormulaText, autoResolutionHTML, settlementBuffRowsHTML, stackFeedsBuffRequirement, resetBuffStage,
} = window.WUWA_BUFF_VIEW.create({ state, ch, slotBuffs, buffStatus, buffValue, buffStackCount, scaleByInfo });
const {
  panelEntryTableHTML, refreshPanelEntryTotals,
} = window.WUWA_PANEL_VIEW.create({ state, ch, wp, echoStats, echoFieldValues, slotBuffs, buffStatus, buffValue, setHTML });
const {
  stageLayoutHTML, typeTagHTML,
  resultMainDisplayHTML, resultMainHTML, resultFormulaBodyHTML, resultFormulaHTML, damageDockHTML,
  settlementStageHTML, buffStageHTML,
} = window.WUWA_STAGE_VIEW.create({
  state, W, ch, wp, WEAPONS, SONATAS, leadChoicesForEcho, syncEchoLead,
  ECHO_COSTS, echoMainOptions, echoSubOptions, echoSubValues, echoFixedMain, ensureEchoDetail, echoDetailSummary, statLabel, echoStats,
  availableSkills, selectedSkill, resourceControlsForSlot, resolvedSkill, stateControlsHTML,
  panelEntryTableHTML, autoResolutionHTML, settlementBuffRowsHTML,
});

// —— 渲染 ——
const board = document.getElementById("board");

function captureScrollPosition() {
  if (typeof window === "undefined" || typeof window.scrollTo !== "function") return null;
  return [window.scrollX || window.pageXOffset || 0, window.scrollY || window.pageYOffset || 0];
}

function restoreScrollPosition(pos) {
  if (!pos || typeof window === "undefined" || typeof window.scrollTo !== "function") return;
  window.scrollTo(pos[0], pos[1]);
}

function withScrollRestore(update) {
  const pos = captureScrollPosition();
  const result = update();
  if (!pos) return result;
  restoreScrollPosition(pos);
  if (typeof window.requestAnimationFrame === "function") window.requestAnimationFrame(() => restoreScrollPosition(pos));
  return result;
}

function syncLanguage() {
  L.set(state.lang);
  L.applyData(W, window.WUWA_DATA, window.WUWA_SONATAS);
  const title = L.t("app.title");
  if (document?.documentElement) document.documentElement.lang = L.currentHtmlLang();
  if (typeof document !== "undefined") document.title = title;
}

let damageDockFrame = 0;

function syncDamageDock() {
  damageDockFrame = 0;
  if (typeof document === "undefined" || typeof document.querySelector !== "function") return;
  const dock = document.getElementById("topbar-damage-dock");
  const topbar = document.querySelector(".stage-topbar");
  const source = document.getElementById("damage-dock-sentinel");
  if (!dock || !topbar || !source) return;
  const dockHeight = dock.hidden ? 0 : dock.getBoundingClientRect().height;
  const topbarBaseBottom = topbar.getBoundingClientRect().bottom - dockHeight;
  dock.hidden = source.getBoundingClientRect().top > topbarBaseBottom;
}

function queueDamageDockSync() {
  if (damageDockFrame || typeof window.requestAnimationFrame !== "function") return;
  damageDockFrame = window.requestAnimationFrame(syncDamageDock);
}

function render() {
  syncLanguage();
  withScrollRestore(() => {
    const r = compute();
    board.innerHTML = stageLayoutHTML(r);
    bind();
    syncDamageDock();
  });
}
function setHTML(id, h) { const el = document.getElementById(id); if (el) el.innerHTML = h; }
function replaceOuterHTML(id, h) {
  const el = document.getElementById(id);
  if (!el || el === board || !("outerHTML" in el)) return null;
  el.outerHTML = h;
  return document.getElementById(id);
}

function refreshResultDisplay(r) {
  const resultMainDisplay = replaceOuterHTML("result-main-display", resultMainDisplayHTML(r));
  const resultFormulaBody = replaceOuterHTML("result-formula-body", resultFormulaBodyHTML(r));
  const damageDock = replaceOuterHTML("topbar-damage-dock", damageDockHTML(r));
  if (!resultMainDisplay || !resultFormulaBody || !damageDock) return false;
  bind(resultMainDisplay);
  bind(resultFormulaBody);
  syncDamageDock();
  return true;
}

function targetAutoValues(r) {
  return {
    finalDmg: num(r?.totals?.finalDmg),
    resShred: num(r?.totals?.resShred),
    defShred: num(r?.defense?.buffDefShred) + num(r?.defense?.effectDefShred),
    defIgnore: num(r?.defense?.buffDefIgnore),
    vulnerability: num(r?.totals?.vulnerability),
  };
}

function refreshTargetInputs(r) {
  const autos = targetAutoValues(r);
  const active = document.activeElement;
  board.querySelectorAll('input[data-act="enemy"][data-total="1"]').forEach((input) => {
    const key = input.dataset.key;
    const auto = num(autos[key]);
    input.dataset.auto = String(auto);
    if (input === active) return;
    input.value = String(Math.round((num(state.enemy[key]) + auto) * 100) / 100);
  });
}

function repaint() {
  // 重建无输入框的展示容器(面板/结算)，不动输入框 → 数字输入时不丢焦点
  const r = compute();
  refreshPanelEntryTotals(r);
  setHTML("dmg-type", typeTagHTML(r));
  if (!refreshResultDisplay(r)) { render(); return; }
  refreshTargetInputs(r);
  // 叠层 / 按属性换算 buff 的「当前公式」实时刷新（纯文本，不动输入框）
  state.slots.forEach((slot, idx) => {
    slotBuffs(slot).forEach((b) => {
      if (b.maxStacks || b.scaleBy) setHTML(`bval_${idx}_${b.id}`, esc(buffFormulaText(slot, b, idx)));
    });
  });
}

function refreshAfterBuffToggle() {
  withScrollRestore(() => {
    const r = compute();
    refreshPanelEntryTotals(r);
    const resultMain = replaceOuterHTML("result-main", resultMainHTML(r));
    const resultFormula = replaceOuterHTML("result-formula", resultFormulaHTML(r));
    const settlementStage = replaceOuterHTML("settlement-stage", settlementStageHTML(r));
    const damageDock = replaceOuterHTML("topbar-damage-dock", damageDockHTML(r));
    const buffStage = replaceOuterHTML("buff-stage", buffStageHTML());
    const sections = [resultMain, resultFormula, settlementStage, damageDock, buffStage];
    if (sections.some((section) => !section)) { render(); return; }
    sections.forEach(bind);
    syncDamageDock();
  });
}

function updateEnemyInput(el) {
  const raw = el.value.trim();
  const key = el.dataset.key;
  const auto = el.dataset.total === "1" ? num(el.dataset.auto) : 0;
  // 这排输入框显示总值；内部仍只存手动增量，避免把 Buff 固化进手填值。
  // 等级/抗性留空时不归零，避免清空瞬间塌成 0。
  if (raw === "" && ["enemyLevel", "res"].includes(key)) { repaint(); return; }
  state.enemy[key] = raw === "" ? 0 : num(raw) - auto;
  repaint();
}

function clampNumberInput(el, fallback = 0) {
  const raw = el.value.trim();
  if (raw === "") return fallback;
  const min = el.min === "" ? -Infinity : num(el.min, -Infinity);
  const max = el.max === "" ? Infinity : num(el.max, Infinity);
  const value = Math.min(Math.max(Math.round(num(raw, fallback)), min), max);
  if (String(value) !== raw) el.value = value;
  return value;
}

const list = (v) => Array.isArray(v) ? v : (v ? [v] : []);
const STATE_SKILL_FILTER_KINDS = new Set(["mode", "form", "phase"]);
const OFFSET_STATE_RE = /偏移|震谐.*干涉|干涉.*震谐|集谐.*干涉|干涉.*集谐|骇破.*干涉|干涉.*骇破|谐度.*干涉|干涉.*谐度|Off-?Tune|Interference|Interfered|Shifting|Hack|Tune Strain|Tune Rupture|Offset/i;

function skillIdMatches(sk, id) {
  return !!sk && !!id && (sk.id === id || list(sk.legacyIds).includes(id));
}

function combatStateDefForApp(slot, stateName) {
  const c = ch(slot.char);
  return list(c?.combatStates).find((def) => {
    if (def.id === stateName || def.label === stateName || def.idLabel === stateName) return true;
    return list(def.options).some((opt) => opt.value === stateName || opt.label === stateName || opt.valueLabel === stateName);
  }) || null;
}

function combatStateDefaultValueForApp(def) {
  const options = list(def?.options);
  if (def?.defaultValue != null) return def.defaultValue;
  if (def?.required) return (options[0] && options[0].value) || "";
  return "";
}

function combatStateFiltersSkillsForApp(def) {
  return !!def && (def.filterSkills === true || def.skillFilter === true || STATE_SKILL_FILTER_KINDS.has(def.kind));
}

function selectedCombatStateValueForApp(slot, def) {
  const stored = combatStateStoredValueForApp(slot, def);
  const configured = normalizeCombatStateStoredValueForApp(stored, def) || combatStateDefaultValueForApp(def);
  if (combatStateFiltersSkillsForApp(def)) return configured;
  const implied = list(resolvedSkill(slot)?.impliedStates);
  const exact = implied.find((s) => stateValueBelongsToDefForApp(s, def));
  return exact || configured;
}

function combatStateStoredValueForApp(slot, def) {
  const toggles = slot?.toggles || {};
  return toggles[stateChoiceKey(def.id)] ?? toggles[stateChoiceKey(def.label)] ?? toggles[stateChoiceKey(def.idLabel)];
}

function normalizeCombatStateStoredValueForApp(value, def) {
  if (!value) return "";
  const opt = list(def.options).find((item) =>
    value === item.value || value === item.label || value === item.valueLabel || value === item.title
  );
  if (opt) return opt.value;
  if (value === def.id || value === def.label || value === def.idLabel) return def.id;
  return value;
}

function combatStateOptionForValueApp(def, value) {
  const normalized = normalizeCombatStateStoredValueForApp(value, def);
  return list(def?.options).find((item) => item.value === normalized) || null;
}

function stateValueMatchesForApp(value, stateName, def) {
  if (!value) return false;
  if (stateName === def.id) return stateValueBelongsToDefForApp(value, def);
  return value === stateName;
}

function stateValueBelongsToDefForApp(value, def) {
  return value === def.id || list(def?.options).some((opt) => opt.value === value);
}

function combatStateReadyForApp(slot, stateName) {
  const def = combatStateDefForApp(slot, stateName);
  if (!def) return slot?.toggles?.[stateKey(stateName)] === true;
  return stateValueMatchesForApp(selectedCombatStateValueForApp(slot, def), stateName, def);
}

function stateRequirementReadyForApp(slot, requirement) {
  const states = list(requirement);
  return !states.length || states.some((stateName) => combatStateReadyForApp(slot, stateName));
}

function allStateRequirementsReadyForApp(slot, requirement) {
  return list(requirement).every((stateName) => combatStateReadyForApp(slot, stateName));
}

function buffStateRequirementsReadyForApp(slot, buff) {
  return stateRequirementReadyForApp(slot, buff.requiresState) && allStateRequirementsReadyForApp(slot, buff.requiresAllStates);
}

function effectTypeStateRequirementReadyForApp(slot, key) {
  const c = ch(slot?.char);
  const requirements = c?.effectTypeRequiresState || c?.effectTypeRequirements || {};
  const raw = Object.entries(requirements).find(([effect]) => effectKeyOf(effect) === key)?.[1];
  if (!raw) return true;
  if (typeof raw === "string" || Array.isArray(raw)) return stateRequirementReadyForApp(slot, raw);
  return stateRequirementReadyForApp(slot, raw.requiresState) && allStateRequirementsReadyForApp(slot, raw.requiresAllStates);
}

function activateOffsetState(slot, stateName) {
  const def = combatStateDefForApp(slot, stateName);
  if (!def) {
    slot.toggles[stateKey(stateName)] = true;
    return;
  }
  const value = stateName === def.id ? (list(def.options)[0]?.value || def.id) : stateName;
  slot.toggles[stateChoiceKey(def.id)] = value;
}

function selectedOffsetProviderIdx() {
  const calc = state.offsetCalc || {};
  if (calc.key === "tuneBreak") return state.outputIdx;
  if (calc.key === "response") {
    const found = state.slots.findIndex((slot) =>
      list(ch(slot.char)?.skills).some((skill) => skillIdMatches(skill, calc.skillId))
    );
    return found >= 0 ? found : state.outputIdx;
  }
  if (calc.key === "state") {
    const found = state.slots.findIndex((slot) =>
      list(ch(slot.char)?.combatStates).some((def) =>
        def.id === calc.stateId && list(def.options).some((opt) => opt.value === calc.stateValue)
      )
    );
    return found >= 0 ? found : state.outputIdx;
  }
  return state.outputIdx;
}

function syncOffsetSelectionPrecondition() {
  const calc = state.offsetCalc || {};
  if (calc.key === "none") return;
  const providerIdx = selectedOffsetProviderIdx();
  state.offsetCalc.providerIdx = providerIdx;
  const slot = state.slots[providerIdx];
  if (!slot || !slot.char) return;
  if (calc.key === "state" && calc.stateId && calc.stateValue) {
    slot.toggles[stateChoiceKey(calc.stateId)] = calc.stateValue;
    return;
  }
  if (calc.key !== "response") return;
  const c = ch(slot.char);
  const sk = list(c.skills).find((skill) => skillIdMatches(skill, calc.skillId));
  list(sk?.requiresState).forEach((name) => activateOffsetState(slot, name));
  list(sk?.requiresAllStates).forEach((name) => activateOffsetState(slot, name));
}

function slotProvidesEffect(slot, key) {
  const c = ch(slot.char);
  if (!c) return false;
  const keys = new Set((c.effectTypes || [])
    .map(effectKeyOf)
    .filter((effectKey) => effectKey !== "none" && effectTypeStateRequirementReadyForApp(slot, effectKey)));
  [
    ...(c.buffs || []),
    ...(c.chain || []).flatMap((node) => (node.buffs || []).map((buff) => ({ ...buff, seq: buff.seq ?? node.seq }))),
  ].forEach((buff) => {
    if (buff.seq && slot.seq < buff.seq) return;
    if (!buffStateRequirementsReadyForApp(slot, buff)) return;
    const effectKey = effectKeyOf(buff.effect);
    if (effectKey !== "none") keys.add(effectKey);
  });
  return keys.has(key);
}

function firstEffectProviderIdx(key) {
  const idx = state.slots.findIndex((slot) => slotProvidesEffect(slot, key));
  return idx >= 0 ? idx : null;
}

function updateEffectInput(el) {
  const key = el.dataset.act;
  if (key === "effect-stacks") {
    state.effectCalc.stacks = clampNumberInput(el, state.effectCalc.stacks || 0);
    state.effectCalc.stackMode = "manual";
  }
  if (key === "effect-rage-stacks") state.effectCalc.electroRageStacks = clampNumberInput(el, state.effectCalc.electroRageStacks || 0);
  if (key === "effect-deepen") state.effectCalc.deepen = num(el.value);
  repaint();
}

function updateOffsetKey(value) {
  const parts = String(value || "none").split("|");
  const key = parts[0] || "none";
  state.offsetCalc.key = key;
  if (key === "response") {
    state.offsetCalc.skillId = parts[1] || null;
    state.offsetCalc.stateId = null;
    state.offsetCalc.stateValue = null;
  } else if (key === "state") {
    state.offsetCalc.skillId = null;
    state.offsetCalc.stateId = parts[1] || null;
    state.offsetCalc.stateValue = parts.slice(2).join("|") || null;
  } else {
    state.offsetCalc.skillId = null;
    state.offsetCalc.stateId = null;
    state.offsetCalc.stateValue = null;
  }
  syncOffsetSelectionPrecondition();
}

function updateOffsetInput(el) {
  const act = el.dataset.act;
  state.offsetCalc = state.offsetCalc || {};
  if (act === "offset-stacks") state.offsetCalc.stacks = clampNumberInput(el, state.offsetCalc.stacks || 0);
  repaint();
}

function isCoherenceInterferenceTarget(value) {
  const text = String(value || "");
  return text.includes("集谐") && text.includes("干涉");
}

function skillRequiresTargetState(skill, value) {
  return list(skill?.requiresState).some((req) => req === value);
}

function responseSkillForTargetState(slot, value) {
  const c = ch(slot?.char);
  return list(c?.skills).find((skill) => skillRequiresTargetState(skill, value)) || null;
}

function currentOffsetBelongsToTargetState(slot, def) {
  const calc = state.offsetCalc || {};
  if (calc.key === "state") return calc.stateId === def.id;
  if (calc.key !== "response") return false;
  const c = ch(slot?.char);
  const sk = list(c?.skills).find((skill) => skillIdMatches(skill, calc.skillId));
  const values = new Set(list(def.options).map((opt) => opt.value));
  return list(sk?.requiresState).some((req) => values.has(req));
}

function syncOffsetFromStateChoice(slotIdx, stateId, value) {
  state.offsetCalc = state.offsetCalc || {};
  const slot = state.slots[slotIdx];
  const def = combatStateDefForApp(slot, stateId);
  if (state.offsetCalc.key === "state" && state.offsetCalc.stateId === def?.id && !value) {
    updateOffsetKey("tuneBreak");
    return;
  }
  const normalizedValue = normalizeCombatStateStoredValueForApp(value, def);
  const opt = combatStateOptionForValueApp(def, normalizedValue);
  const stateText = [def?.id, normalizedValue, stateId, value, def?.label, L.combatStateLabel(def), opt?.label, L.combatOptionLabel(opt), opt?.valueLabel, opt?.formulaKind].join(" ");
  if (def?.kind !== "target" || !normalizedValue || !OFFSET_STATE_RE.test(stateText)) return;
  if (opt?.formulaKind === "coherenceInterference" || isCoherenceInterferenceTarget(stateText)) {
    state.offsetCalc.key = "state";
    state.offsetCalc.providerIdx = slotIdx;
    state.offsetCalc.skillId = null;
    state.offsetCalc.stateId = def.id;
    state.offsetCalc.stateValue = normalizedValue;
    return;
  }
  const responseSkill = responseSkillForTargetState(slot, normalizedValue);
  if (responseSkill) {
    state.offsetCalc.key = "response";
    state.offsetCalc.providerIdx = slotIdx;
    state.offsetCalc.skillId = responseSkill.id;
    state.offsetCalc.stateId = null;
    state.offsetCalc.stateValue = null;
    return;
  }
  if (currentOffsetBelongsToTargetState(slot, def)) updateOffsetKey("tuneBreak");
}

// data-act → 绑定函数(el, idx)。替代长 if/else 链，分发 O(1)、逐项独立。
const bindEffectInput = (el) => { el.oninput = () => updateEffectInput(el); el.onchange = () => render(); };
const bindOffsetInput = (el) => { el.oninput = () => updateOffsetInput(el); el.onchange = () => render(); };
function detailEchoAt(idx, echoIdx) {
  const slot = state.slots[idx];
  ensureEchoDetail(slot, slot.char ? ch(slot.char) : null);
  return slot.echo.detail.echoes[echoIdx];
}

function syncDetailLead(slot) {
  const first = slot.echo.detail?.echoes?.[0];
  const choices = leadChoicesForEcho({ detailMode: true, detail: { echoes: first ? [{ set: first.set }] : [] } });
  if (!choices.length) return;
  if (!choices.some((choice) => choice.key === slot.echo.lead)) slot.echo.lead = choices[0].key;
  const choice = choices.find((item) => item.key === slot.echo.lead);
  if (!choice || !first) return;
  const costChanged = first.cost !== choice.cost;
  first.cost = choice.cost;
  const mainOptions = echoMainOptions(first.cost, slot.char ? ch(slot.char) : null);
  if (costChanged || !mainOptions.some((opt) => opt.key === first.main)) first.main = mainOptions[0]?.key || "";
}

function updateDetailEcho(idx, echoIdx, update) {
  const slot = state.slots[idx];
  const c = slot.char ? ch(slot.char) : null;
  const item = detailEchoAt(idx, echoIdx);
  update(item, slot, c);
  ensureEchoDetail(slot, c);
  syncDetailLead(slot);
  render();
}

const ACTIONS = {
  language: (el) => { el.onclick = () => { state.lang = el.dataset.lang || "zh-CN"; render(); }; },
  output: (el, idx) => { el.onclick = (ev) => { if (ev.target.closest("button, select, input, .combo, .echo-set-chip")) return; state.outputIdx = idx; render(); }; },
  "dock-output": (el, idx) => { el.onclick = () => { if (state.outputIdx === idx) return; state.outputIdx = idx; render(); }; },
  "clear-slot": (el, idx) => { el.onclick = (ev) => { ev.stopPropagation(); clearCharacter(idx); render(); }; },
  "result-mode": (el) => { el.onclick = () => { state.resultMode = el.dataset.mode || "skill"; render(); }; },
  "dmg-mode": (el) => { el.onclick = () => { state.damageMode = el.dataset.mode; render(); }; },
  "effect-key": (el) => { el.onchange = () => {
    const def = window.WUWA_RULES.EFFECT_DEFS[el.value] || window.WUWA_RULES.EFFECT_DEFS.none;
    state.effectCalc.key = def.key;
    state.effectCalc.providerIdx = firstEffectProviderIdx(def.key);
    state.effectCalc.stacks = def.defaultStacks || 0;
    state.effectCalc.stackMode = "auto";
    state.effectCalc.electroRageStacks = 0;
    render();
  }; },
  "effect-provider": (el) => { el.onchange = () => { state.effectCalc.providerIdx = el.value === "" ? null : +el.value; render(); }; },
  "effect-stacks": bindEffectInput,
  "effect-rage-stacks": bindEffectInput,
  "effect-deepen": bindEffectInput,
  "offset-key": (el) => { el.onchange = () => { updateOffsetKey(el.value); render(); }; },
  "offset-cost": (el) => { el.onchange = () => { state.enemy.harmonyBase = num(el.value); render(); }; },
  "offset-stacks": bindOffsetInput,
  "offset-skilllevel": (el) => { el.onchange = () => {
    const r = compute();
    if (r.offset?.kind === "response" && r.offset.skill && state.slots[r.offset.providerIdx]) {
      const slot = state.slots[r.offset.providerIdx];
      (slot.skillLevels = slot.skillLevels || {})[r.offset.skill.category] = +el.value;
    }
    render();
  }; },
  "show-desc": (el) => { el.onchange = () => { state.showDesc = el.checked; render(); }; },
  "target-extra-toggle": (el) => { el.onclick = () => { state.showTargetExtras = !state.showTargetExtras; render(); }; },
  "combo-toggle": (el) => { el.onclick = (ev) => { ev.stopPropagation(); const combo = el.closest(".combo"); const wasOpen = combo.classList.contains("open"); board.querySelectorAll(".combo.open").forEach((c) => c.classList.remove("open")); if (!wasOpen) { combo.classList.add("open"); const s = combo.querySelector(".combo-search"); if (s) { s.value = ""; filterCombo(s); s.focus(); } } }; },
  "combo-search": (el) => { el.onclick = (ev) => ev.stopPropagation(); el.oninput = () => filterCombo(el); },
  "combo-pick": (el) => { el.onclick = (ev) => { ev.stopPropagation(); const si = +el.dataset.slot; if (el.dataset.kind === "char") pickCharacter(si, el.dataset.value); else state.slots[si].weapon = el.dataset.value; render(); }; },
  "rank-set": (el, idx) => { el.onchange = () => { state.slots[idx].rank = +el.value; render(); }; },
  "seq-set": (el, idx) => { el.onchange = () => { state.slots[idx].seq = +el.value; render(); }; },
  skill: (el, idx) => { el.onchange = () => { state.slots[idx].skill = el.value; state.slots[idx].layers = null; render(); }; },
  skilllevel: (el, idx) => { el.onchange = () => { const s = state.slots[idx]; const sk = selectedSkill(s); if (sk) (s.skillLevels = s.skillLevels || {})[sk.category] = +el.value; render(); }; },
  layers: (el, idx) => { el.oninput = () => { state.slots[idx].layers = num(el.value); repaint(); }; },
  "char-resource": (el, idx) => {
    const update = () => {
      const slot = state.slots[idx];
      slot.resources = slot.resources || {};
      slot.resources[el.dataset.key] = clampNumberInput(el);
      repaint();
    };
    el.oninput = update;
    el.onchange = () => { update(); render(); };
  },
  resource: (el, idx) => { el.onchange = () => { state.slots[idx].toggles[resourceKey(el.dataset.key)] = el.checked; render(); }; },
  "state-choice": (el, idx) => {
    const updateStateChoice = () => {
      const value = el.dataset.value ?? el.value;
      state.slots[idx].toggles[stateChoiceKey(el.dataset.key)] = value;
      syncOffsetFromStateChoice(idx, el.dataset.key, value);
      render();
    };
    if (el.tagName === "SELECT" || el.tagName === "INPUT") el.onchange = updateStateChoice;
    else el.onclick = updateStateChoice;
  },
  state: (el, idx) => { el.onchange = () => { state.slots[idx].toggles[stateKey(el.dataset.key)] = el.checked; render(); }; },
  toggle: (el, idx) => { el.onchange = () => { setBuffToggle(state.slots[idx], idx, el.dataset.buff, el.checked); refreshAfterBuffToggle(); }; },
  "buff-reset": (el) => { el.onclick = () => { resetBuffStage(); render(); }; },
  stack: (el, idx) => {
    el.oninput = () => {
      const stackKey = el.dataset.stackKey || ("stk_" + el.dataset.buff);
      state.slots[idx].toggles[stackKey] = num(el.value);
      board.querySelectorAll('[data-act="stack"]').forEach((input) => {
        const inputKey = input.dataset.stackKey || ("stk_" + input.dataset.buff);
        if (input !== el && input.dataset.slot === el.dataset.slot && inputKey === stackKey) input.value = el.value;
      });
      repaint();
    };
    el.onchange = () => { if (stackFeedsBuffRequirement(state.slots[idx], el.dataset.buff)) render(); };
  },
  enemy: (el) => {
    el.addEventListener("input", () => updateEnemyInput(el));
    el.addEventListener("change", () => updateEnemyInput(el));
  },
  "echo-clear": (el, idx) => { el.onclick = () => { state.slots[idx].echo.fields = {}; render(); }; },
  "panel-add": (el, idx) => { el.onchange = () => { if (el.value) { const s = state.slots[idx]; (s.extraPanelRows = s.extraPanelRows || []).push(el.value); render(); } }; },
  "panel-rm": (el, idx) => { el.onclick = () => { const s = state.slots[idx]; s.extraPanelRows = (s.extraPanelRows || []).filter((x) => x !== el.dataset.key); render(); }; },
  elead: (el, idx) => { el.onchange = () => { state.slots[idx].echo.lead = el.value || null; render(); }; },
  "echo-detail": (el, idx) => { el.onchange = () => { const slot = state.slots[idx]; slot.echo.detailMode = el.checked; if (el.checked) ensureEchoDetail(slot, slot.char ? ch(slot.char) : null); render(); }; },
  "detail-echo-set": (el, idx) => { el.onchange = () => updateDetailEcho(idx, +el.dataset.echoIndex, (item) => { item.set = +el.value; }); },
  "detail-echo-cost": (el, idx) => { el.onchange = () => {
    const echoIdx = +el.dataset.echoIndex;
    const nextCost = +el.value;
    const slot = state.slots[idx];
    ensureEchoDetail(slot, slot.char ? ch(slot.char) : null);
    const otherCost = slot.echo.detail.echoes.reduce((total, item, i) => total + (i === echoIdx ? 0 : num(item.cost)), 0);
    if (otherCost + nextCost > 12) { render(); return; }
    updateDetailEcho(idx, echoIdx, (item) => { item.cost = nextCost; item.main = ""; });
  }; },
  "detail-echo-main": (el, idx) => { el.onchange = () => updateDetailEcho(idx, +el.dataset.echoIndex, (item) => { item.main = el.value; }); },
  "detail-sub-key": (el, idx) => { el.onchange = () => updateDetailEcho(idx, +el.dataset.echoIndex, (item) => { const subIdx = +el.dataset.subIndex; const sub = item.subs[subIdx]; const duplicate = el.value && item.subs.some((other, otherIdx) => otherIdx !== subIdx && other.key === el.value); sub.key = duplicate ? "" : el.value; sub.value = echoSubValues(sub.key)[0] || 0; }); },
  "detail-sub-value": (el, idx) => { el.onchange = () => updateDetailEcho(idx, +el.dataset.echoIndex, (item) => { item.subs[+el.dataset.subIndex].value = num(el.value); }); },
  "detail-lead": (el, idx) => { el.onchange = () => updateDetailEcho(idx, 0, (item, slot) => {
    const choices = leadChoicesForEcho({ detailMode: true, detail: { echoes: [{ set: item.set }] } });
    const choice = choices.find((option) => option.key === el.value);
    slot.echo.lead = choice?.key || null;
    if (choice) {
      item.cost = choice.cost;
      item.main = "";
    }
  }); },
  efield: (el, idx) => { el.oninput = () => { state.slots[idx].echo.fields[el.dataset.key] = num(el.value); repaint(); }; },
};

function bind(root = board) {
  const controls = root.matches?.("[data-act]")
    ? [root, ...root.querySelectorAll("[data-act]")]
    : Array.from(root.querySelectorAll("[data-act]"));
  controls.forEach((el) => {
    const idx = el.dataset.slot != null ? +el.dataset.slot : null;
    ACTIONS[el.dataset.act]?.(el, idx);
  });
  // 弹层内空白点击不关闭；点列以外关闭所有打开的下拉
  root.querySelectorAll(".combo-pop").forEach((p) => (p.onclick = (ev) => ev.stopPropagation()));
  document.onclick = () => board.querySelectorAll(".combo.open").forEach((c) => c.classList.remove("open"));
}

// 下拉内搜索过滤（不重渲染，避免丢焦点）
function filterCombo(input) {
  const q = input.value.trim().toLowerCase();
  input.closest(".combo").querySelectorAll(".combo-opt").forEach((li) => {
    li.style.display = !q || (li.dataset.search || "").includes(q) ? "" : "none";
  });
}

if (typeof window.addEventListener === "function") {
  window.addEventListener("scroll", queueDamageDockSync, { passive: true });
  window.addEventListener("resize", queueDamageDockSync);
}
render();
