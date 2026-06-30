"use strict";

window.WUWA_SETTLEMENT = (() => {
  function create({ state, ch, wp, echoStats, weaponBuffs, sonataBuffs, esc }) {
    const {
      SEC_ZONE, skillLevelRatio, skillMultValue, num, zeros, EFFECT_DEFS, effectKeyOf,
    } = window.WUWA_RULES;
    const L = window.WUWA_LANGUAGES;

    const pushUniq = (arr, v) => { if (v && !arr.includes(v)) arr.push(v); };
    const asList = (v) => Array.isArray(v) ? v : (v ? [v] : []);
    const EFFECT_DEEPEN_ZONES = new Set(["amplify", "vulnerability"]);
    const EFFECT_DEFENSE_ZONES = new Set(["resShred", "defShred", "defIgnore"]);
    const HARMONY_RESPONSE_DAMAGE_TYPES = new Set(["tuneBreak", "tuneBreakDmg", "offTune", "offTuneDmg", "hackDmg", "tuneRupture", "tuneRuptureDmg"]);
    const HARMONY_RESPONSE_IGNORED_ZONES = new Set(["attackPercent", "attackFlat", "hpPercent", "defensePercent", "critRate", "critDamage", "damageBonus", "typeBonus"]);
    const HARMONY_RESPONSE_EXPLICIT_ZONES = new Set(["skillMultBonus", "amplify", "vulnerability", "finalDmg"]);
    const HARMONY_RESPONSE_DEFENSE_ZONES = new Set(["resShred", "defShred", "defIgnore"]);
    const STATE_SKILL_FILTER_KINDS = new Set(["mode", "form", "phase"]);
    const OFFSET_STATE_KINDS = new Set(["target"]);
    const OFFSET_STATE_RE = /偏移|震谐.*干涉|干涉.*震谐|集谐.*干涉|干涉.*集谐|骇破.*干涉|干涉.*骇破|谐度.*干涉|干涉.*谐度|Off-?Tune|Interference|Interfered|Shifting|Hack|Tune Strain|Tune Rupture|Offset/i;
    const TUNE_BREAK_LEVEL_RATE = 1600;

    function slotBuffs(slot) {
      const c = ch(slot.char);
      if (!c) return [];
      const own = (c.buffs || []).map((b) => ({ ...b, provider: "技能树" }));
      const chain = (c.chain || []).flatMap((node) =>
        (node.buffs || []).map((b) => ({ ...b, seq: node.seq, source: `链${node.seq}·${node.name}`, desc: b.desc || node.desc, provider: "共鸣链" }))
      );
      const weapon = weaponBuffs(slot.weapon, slot.rank).map((b) => ({ ...b, provider: "武器" }));
      const sonata = sonataBuffs(slot).map((b) => ({ ...b, provider: "声骸" }));
      return [...own, ...chain, ...weapon, ...sonata].filter((buff) => buffCompatibleWithSelectedCombatStateFilters(slot, buff));
    }

    function skillUnlocked(slot, sk) {
      if (!sk) return true;
      if (sk.seq && num(slot.seq) < num(sk.seq)) return false;
      if (sk.maxSeq != null && num(slot.seq) > num(sk.maxSeq)) return false;
      return true;
    }

    function manuallySelectedStateReady(slot, stateName) {
      const def = combatStateDefFor(slot, stateName);
      if (def) return stateValueMatches(configuredCombatStateValue(slot, def), stateName, def);
      return slot.toggles[stateKey(stateName)] === true;
    }

    function manualStateRequirementReady(slot, requirement) {
      const states = asList(requirement);
      return !states.length || states.some((stateName) => manuallySelectedStateReady(slot, stateName));
    }

    function manualAllStateRequirementsReady(slot, requirement) {
      const states = asList(requirement);
      return !states.length || states.every((stateName) => manuallySelectedStateReady(slot, stateName));
    }

    function skillMatchesSelectedCombatStates(slot, sk) {
      if (!manualStateRequirementReady(slot, sk?.requiresState)) return false;
      if (!manualAllStateRequirementsReady(slot, sk?.requiresAllStates)) return false;
      return asList(sk?.impliedStates).every((stateName) => {
        const def = combatStateDefFor(slot, stateName);
        if (!def) return true;
        const choice = configuredCombatStateValue(slot, def);
        if (combatStateFiltersSkills(def)) return !!choice && stateValueMatches(choice, stateName, def);
        return !choice || stateValueMatches(choice, stateName, def);
      });
    }

    function skillMatchesCurrentStateChoice(slot, sk) {
      return [...asList(sk?.requiresState), ...asList(sk?.impliedStates)].some((stateName) => manuallySelectedStateReady(slot, stateName));
    }

    function stateCompatibleSkills(slot) {
      const c = ch(slot.char);
      if (!c) return [];
      return (c.skills || []).filter((sk) => skillUnlocked(slot, sk) && skillMatchesSelectedCombatStates(slot, sk));
    }

    function fallbackSkillInState(sk, skills) {
      if (!sk?.fallbackSkillId) return null;
      return skills.find((item) => skillIdMatches(item, sk.fallbackSkillId)) || null;
    }

    function visibleFallbackSkill(slot, sk, skills, seen = new Set()) {
      if (!sk?.fallbackSkillId || skillResourceReady(slot, sk) || seen.has(sk.id)) return null;
      const fallback = fallbackSkillInState(sk, skills);
      if (!fallback) return null;
      return visibleFallbackSkill(slot, fallback, skills, new Set([...seen, sk.id])) || fallback;
    }

    function readyReplacementSkill(slot, sk, skills) {
      return skills.find((item) => {
        if (!item.fallbackSkillId || !skillResourceReady(slot, item)) return false;
        return skillIdMatches(sk, item.fallbackSkillId);
      }) || null;
    }

    function skillHiddenByResource(slot, sk, skills) {
      if (visibleFallbackSkill(slot, sk, skills)) return true;
      return !!readyReplacementSkill(slot, sk, skills);
    }

    function availableSkills(slot) {
      const skills = stateCompatibleSkills(slot);
      return skills.filter((sk) => !skillHiddenByResource(slot, sk, skills));
    }

    function selectedSkill(slot) {
      const c = ch(slot.char);
      if (!c) return null;
      const skills = availableSkills(slot);
      const stateSkills = stateCompatibleSkills(slot);
      const defaultSkillId = defaultSkillIdForSlot(slot, c);
      const rawSelected = skillById(slot, slot.skill);
      const selectedReplacement = rawSelected && readyReplacementSkill(slot, rawSelected, stateSkills);
      const selectedFallback = rawSelected && visibleFallbackSkill(slot, rawSelected, stateSkills);
      return skills.find((s) => skillIdMatches(s, slot.skill))
        || (selectedReplacement && skills.includes(selectedReplacement) ? selectedReplacement : null)
        || (selectedFallback && skills.includes(selectedFallback) ? selectedFallback : null)
        || skills.find((s) => skillIdMatches(s, defaultSkillId))
        || skills.find((s) => skillMatchesCurrentStateChoice(slot, s))
        || skills[0]
        || null;
    }

    function defaultSkillIdForSlot(slot, c) {
      let id = c.defaultSkillId;
      asList(c.defaultSkillIdBySeq).forEach((rule) => {
        if (num(slot.seq) >= num(rule.seq)) id = rule.id;
      });
      return id;
    }

    const resourceKey = (label) => "res_" + label;

    function manualResourceReady(slot, item) {
      const id = typeof item === "string" ? item : item?.requiresResource || item?.id;
      const labels = typeof item === "string" ? [] : [item?.requiresResourceLabel, item?.resourceLabel, item?.label];
      return [id, ...labels].filter(Boolean).every((key) => slot.toggles[resourceKey(key)] !== false);
    }

    function characterResourceDefs(slot) {
      return asList(ch(slot.char)?.resources);
    }

    function characterResourceDef(slot, idOrLabel) {
      return characterResourceDefs(slot).find((resource) => resource.id === idOrLabel || resource.label === idOrLabel) || null;
    }

    function characterResourceCap(slot, resource) {
      let cap = num(resource.max ?? resource.cap ?? 0);
      asList(resource.maxBySeq || resource.capBySeq).forEach((rule) => {
        if (num(slot.seq) >= num(rule.seq)) cap = num(rule.max ?? rule.cap);
      });
      return cap;
    }

    function characterResourceMin(resource) {
      return num(resource.min ?? 0);
    }

    function characterResourceDefault(slot, resource) {
      const cap = characterResourceCap(slot, resource);
      const min = characterResourceMin(resource);
      const raw = resource.defaultValue ?? resource.default;
      if (raw === "max") return cap;
      if (raw == null) return min;
      return Math.min(Math.max(num(raw), min), cap);
    }

    function characterResourceRawValue(slot, resource) {
      const cap = characterResourceCap(slot, resource);
      const min = characterResourceMin(resource);
      const raw = slot.resources?.[resource.id];
      const value = raw == null ? characterResourceDefault(slot, resource) : num(raw);
      return Math.min(Math.max(value, min), cap);
    }

    function characterResourceGroupMax(resource) {
      if (!resource?.group) return null;
      return num(resource.groupMax ?? resource.sharedMax ?? resource.max);
    }

    function normalizedCharacterResourceValues(slot) {
      const remaining = {};
      const values = {};
      characterResourceDefs(slot).forEach((resource) => {
        const raw = characterResourceRawValue(slot, resource);
        if (!resource.group) {
          values[resource.id] = raw;
          return;
        }
        if (remaining[resource.group] == null) remaining[resource.group] = characterResourceGroupMax(resource);
        const value = Math.min(raw, Math.max(0, remaining[resource.group]));
        values[resource.id] = value;
        remaining[resource.group] -= value;
      });
      return values;
    }

    function characterResourceValue(slot, idOrLabel) {
      const resource = characterResourceDef(slot, idOrLabel);
      if (!resource) return null;
      return normalizedCharacterResourceValues(slot)[resource.id];
    }

    function characterResourceControlMax(slot, resource, values) {
      const cap = characterResourceCap(slot, resource);
      if (!resource.group) return cap;
      const groupUsedByOthers = characterResourceDefs(slot)
        .filter((other) => other.group === resource.group && other.id !== resource.id)
        .reduce((total, other) => total + num(values[other.id]), 0);
      return Math.min(cap, Math.max(characterResourceMin(resource), characterResourceGroupMax(resource) - groupUsedByOthers));
    }

    function resourceRequirementValue(slot, resource, req) {
      if (req?.fractionOfCap != null) return characterResourceCap(slot, resource) * num(req.fractionOfCap);
      return num(req?.value);
    }

    function resourceAlternateStateReady(slot, stateName) {
      const def = combatStateDefFor(slot, stateName);
      if (def) return stateValueMatches(configuredCombatStateValue(slot, def), stateName, def);
      return slot.toggles[stateKey(stateName)] === true;
    }

    function resourceRequirementReady(slot, req) {
      if (asList(req?.alternateStates).some((stateName) => resourceAlternateStateReady(slot, stateName))) return true;
      const resource = characterResourceDef(slot, req?.id || req?.label);
      if (!resource) return false;
      return characterResourceValue(slot, resource.id) >= resourceRequirementValue(slot, resource, req);
    }

    function characterResourceControlsForSlot(slot) {
      const values = normalizedCharacterResourceValues(slot);
      return characterResourceDefs(slot).map((resource) => ({
        kind: "value",
        id: resource.id,
        label: resource.label,
        min: characterResourceMin(resource),
        max: characterResourceControlMax(slot, resource, values),
        value: values[resource.id],
      }));
    }

    function skillResourceReady(slot, sk) {
      if (!sk) return true;
      if (sk.requiresResourceSumAtLeast) {
        const req = sk.requiresResourceSumAtLeast;
        const total = asList(req.ids || req.resources).reduce((sum, id) => sum + num(characterResourceValue(slot, id)), 0);
        return total >= num(req.value);
      }
      const allResourceReqs = asList(sk.requiresAllResourcesAtLeast);
      if (allResourceReqs.length) {
        return allResourceReqs.every((req) => resourceRequirementReady(slot, req));
      }
      if (sk.requiresResourceFull) {
        const resource = characterResourceDef(slot, sk.requiresResourceFull);
        if (!resource) return false;
        return characterResourceValue(slot, resource.id) >= characterResourceCap(slot, resource);
      }
      if (sk.requiresResourceAtLeast) {
        return resourceRequirementReady(slot, sk.requiresResourceAtLeast);
      }
      const resource = characterResourceDef(slot, sk.requiresResource);
      if (resource) return characterResourceValue(slot, resource.id) > characterResourceMin(resource);
      return !sk.requiresResource || manualResourceReady(slot, sk);
    }

    function skillById(slot, id) {
      const c = ch(slot.char);
      return asList(c?.skills).find((s) => skillUnlocked(slot, s) && skillIdMatches(s, id)) || null;
    }

    function skillIdMatches(sk, id) {
      return !!sk && !!id && (sk.id === id || asList(sk.legacyIds).includes(id));
    }

    function skillRefMatches(sk, ref) {
      return !!sk && !!ref && (skillIdMatches(sk, ref) || sk.name === ref);
    }

    function skillRefsMatch(sk, refs) {
      return !!sk && asList(refs).some((ref) => skillRefMatches(sk, ref));
    }

    function skillRefLabel(slot, ref) {
      const c = ch(slot.char);
      const sk = asList(c?.skills).find((item) => skillRefMatches(item, ref));
      return sk ? L.skillName(sk) : L.text(ref);
    }

    function skillRefsLabel(slot, refs) {
      return asList(refs).map((ref) => skillRefLabel(slot, ref)).join("/");
    }

    function manualResourceLabel(item) {
      return item?.requiresResourceLabel || item?.resourceLabel || item?.requiresResource || item?.id || "";
    }

    function resourceControlsForSlot(slot) {
      const controls = characterResourceControlsForSlot(slot);
      const seen = new Set();
      const add = (id, label) => {
        if (!id || seen.has(id)) return;
        if (characterResourceDef(slot, id)) return;
        seen.add(id);
        controls.push({ kind: "manual", id, label: label || id, ready: manualResourceReady(slot, { id, label }) });
      };
      const skills = stateCompatibleSkills(slot);
      skills.forEach((sk) => {
        if (!sk.requiresResourceFull && !sk.requiresResourceAtLeast && !sk.requiresAllResourcesAtLeast && !sk.requiresResourceSumAtLeast && sk.requiresResource && fallbackSkillInState(sk, skills)) add(sk.requiresResource, manualResourceLabel(sk));
      });
      const selected = selectedSkill(slot);
      if (selected?.requiresResource && !selected.requiresResourceFull && !selected.requiresResourceAtLeast && !selected.requiresAllResourcesAtLeast && !selected.requiresResourceSumAtLeast) add(selected.requiresResource, manualResourceLabel(selected));
      return controls;
    }

    function resolveSkillResource(slot, sk, seen = new Set()) {
      if (!sk || skillResourceReady(slot, sk)) return sk;
      if (!sk.fallbackSkillId || seen.has(sk.id)) return null;
      return resolveSkillResource(slot, skillById(slot, sk.fallbackSkillId), new Set([...seen, sk.id]));
    }

    function resolvedSkill(slot) {
      return resolveSkillResource(slot, selectedSkill(slot));
    }

    const stateKey = (label) => "state_" + label;
    const stateChoiceKey = (label) => "stateChoice_" + label;
    const CATEGORY_EVENT = {
      basicAttack: "castBasicAttack",
      resonanceSkill: "castResonanceSkill",
      resonanceLiberation: "castResonanceLiberation",
      forteCircuit: "castForteCircuit",
      introSkill: "castIntroSkill",
      outroSkill: "castOutroSkill",
      echoSkill: "castEchoSkill",
      resonanceChain: "castResonanceChain",
    };
    const EVENT_ALIAS = {
      introEntry: "introEntry", "变奏入场": "introEntry", "角色登场": "introEntry",
      castBasicAttack: "castBasicAttack", "施放普攻": "castBasicAttack", "施放常态攻击": "castBasicAttack",
      castResonanceSkill: "castResonanceSkill", "施放共鸣技能": "castResonanceSkill",
      castResonanceLiberation: "castResonanceLiberation", "施放共鸣解放": "castResonanceLiberation",
      castForteCircuit: "castForteCircuit", "施放共鸣回路": "castForteCircuit",
      castIntroSkill: "castIntroSkill", "施放变奏技能": "castIntroSkill",
      castOutroSkill: "castOutroSkill", "施放延奏技能": "castOutroSkill",
      castEchoSkill: "castEchoSkill", "施放声骸技能": "castEchoSkill",
      castResonanceChain: "castResonanceChain", "施放共鸣链": "castResonanceChain",
      shield: "shield", 护盾: "shield", 获得护盾: "shield",
      heal: "heal", 治疗: "heal",
      consumeConcerto: "consumeConcerto", 消耗协奏能量: "consumeConcerto",
      applyAeroErosion: "applyAeroErosion", 附加风蚀效应: "applyAeroErosion",
      applySpectroFrazzle: "applySpectroFrazzle", 附加光噪效应: "applySpectroFrazzle",
      applyGlacioChafe: "applyGlacioChafe", 附加霜渐效应: "applyGlacioChafe",
      applyPhotochromicFlux: "applyPhotochromicFlux", 附加光致变染: "applyPhotochromicFlux",
      applyObservationMark: "applyObservationMark", 附加观测标记: "applyObservationMark",
      enterReincarnation: "enterReincarnation", 进入重世状态: "enterReincarnation",
      gainLesserYang: "gainLesserYang", 获得少阳: "gainLesserYang",
    };
    const CATEGORY_LEGACY_KEYS = {
      basicAttack: ["常态攻击"],
      resonanceSkill: ["共鸣技能"],
      resonanceLiberation: ["共鸣解放"],
      forteCircuit: ["共鸣回路"],
      introSkill: ["变奏技能"],
      outroSkill: ["延奏技能"],
      echoSkill: ["声骸技能"],
      resonanceChain: ["共鸣链"],
    };

    function skillLevelFor(slot, category) {
      if (!category) return 10;
      const levels = slot.skillLevels || {};
      if (levels[category] != null) return levels[category];
      const legacy = (CATEGORY_LEGACY_KEYS[category] || []).find((key) => levels[key] != null);
      return legacy ? levels[legacy] : 10;
    }

    function eventKeyOf(eventName) {
      return EVENT_ALIAS[eventName] || eventName;
    }

    function pushEvent(arr, eventName) {
      pushUniq(arr, eventKeyOf(eventName));
    }

    function isIntroSkill(sk) {
      return !!sk && (sk.category === "introSkill" || sk.damageType === "introSkill");
    }

    function introEntryReady(slot) {
      return isIntroSkill(resolvedSkill(slot)) || slot.introEntry === true;
    }

    const INTRO_ENTRY_EVENTS = new Set(["introEntry", "castIntroSkill"]);
    function eventListUsesIntroEntry(events) {
      return asList(events).some((eventName) => INTRO_ENTRY_EVENTS.has(eventKeyOf(eventName)));
    }

    function buffUsesIntroEntryTrigger(buff) {
      return eventListUsesIntroEntry(buff.triggerEvents)
        || asList(buff.triggerRules).some((rule) => eventListUsesIntroEntry(rule.events));
    }

    function introEntryRelevantForSlot(slot) {
      return isIntroSkill(resolvedSkill(slot)) || slotBuffs(slot).some(buffUsesIntroEntryTrigger);
    }

    function actionEventsForSlot(slot) {
      const c = ch(slot.char);
      const sk = resolvedSkill(slot);
      const events = [];
      asList(c.skillEvents).forEach((eventDef) => pushEvent(events, skillEventNameForSlot(slot, sk, eventDef)));
      asList(sk?.triggerEvents).forEach((eventName) => pushEvent(events, eventName));
      if (introEntryReady(slot)) {
        ["introEntry", "castIntroSkill"].forEach((eventName) => pushEvent(events, eventName));
      }
      if (sk?.category && sk.category !== "introSkill") pushEvent(events, CATEGORY_EVENT[sk.category] || ("cast:" + sk.category));
      return events;
    }

    function skillEventNameForSlot(slot, sk, eventDef) {
      if (typeof eventDef === "string") return eventDef;
      if (!eventDef || typeof eventDef !== "object") return null;
      if (eventDef.seq && num(slot.seq) < num(eventDef.seq)) return null;
      if (eventDef.skills && !skillRefsMatch(sk, eventDef.skills)) return null;
      if (eventDef.damageTypes && !asList(eventDef.damageTypes).some((type) => damageTypesForSkill(sk).includes(type))) return null;
      return eventDef.event || eventDef.name || eventDef.value || null;
    }

    function skillImpliesState(slot, stateName) {
      const implied = asList(resolvedSkill(slot)?.impliedStates);
      return implied.some((s) => {
        const def = combatStateDefFor(slot, stateName);
        return def ? stateValueMatches(s, stateName, def) : s === stateName;
      });
    }

    function combatStateDefs(slot) {
      return asList(ch(slot.char).combatStates);
    }

    function combatStateFiltersSkills(def) {
      return !!def && (def.filterSkills === true || def.skillFilter === true || STATE_SKILL_FILTER_KINDS.has(def.kind));
    }

    function combatStateDefaultValue(def) {
      const options = asList(def?.options);
      if (def?.defaultValue != null) return def.defaultValue;
      if (def?.required) return (options[0] && options[0].value) || "";
      return "";
    }

    function configuredCombatStateValue(slot, def) {
      const stored = combatStateStoredValue(slot, def);
      return normalizeCombatStateStoredValue(stored, def) || combatStateDefaultValue(def);
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

    function combatStateDefAvailable(slot, def) {
      return manualStateRequirementReady(slot, def.requiresState) && manualAllStateRequirementsReady(slot, def.requiresAllStates);
    }

    function combatStateDefFor(slot, stateName) {
      return combatStateDefs(slot).find((def) => {
        if (def.id === stateName) return true;
        return asList(def.options).some((opt) => opt.value === stateName);
      }) || null;
    }

    function impliedCombatStateValue(slot, def) {
      const implied = asList(resolvedSkill(slot)?.impliedStates);
      return implied.find((stateName) => stateValueBelongsToDef(stateName, def)) || "";
    }

    function selectedCombatStateValue(slot, def) {
      if (combatStateFiltersSkills(def)) return configuredCombatStateValue(slot, def);
      return impliedCombatStateValue(slot, def) || configuredCombatStateValue(slot, def);
    }

    function stateValueMatches(value, stateName, def) {
      if (!value) return false;
      if (stateName === def.id) return stateValueBelongsToDef(value, def);
      return value === stateName;
    }

    function stateValueBelongsToDef(value, def) {
      return value === def.id || asList(def.options).some((opt) => opt.value === value);
    }

    function combatStateOptionForValue(def, value) {
      return asList(def?.options).find((opt) => opt.value === value) || null;
    }

    function combatStateReady(slot, stateName) {
      const def = combatStateDefFor(slot, stateName);
      if (def) return stateValueMatches(selectedCombatStateValue(slot, def), stateName, def);
      return skillImpliesState(slot, stateName) || slot.toggles[stateKey(stateName)] === true;
    }

    function stateRequirementCompatibleWithSelectedFilters(slot, requirement, mode) {
      const states = asList(requirement);
      if (!states.length) return true;
      const matches = states.map((stateName) => {
        const def = combatStateDefFor(slot, stateName);
        if (!combatStateFiltersSkills(def)) return true;
        const choice = configuredCombatStateValue(slot, def);
        return !choice || stateValueMatches(choice, stateName, def);
      });
      return mode === "all" ? matches.every(Boolean) : matches.some(Boolean);
    }

    function buffCompatibleWithSelectedCombatStateFilters(slot, buff) {
      if (!stateRequirementCompatibleWithSelectedFilters(slot, buff.requiresState, "any")) return false;
      return stateRequirementCompatibleWithSelectedFilters(slot, buff.requiresAllStates, "all");
    }

    function stateLabel(slot, stateName) {
      const def = combatStateDefFor(slot, stateName);
      if (!def) return L.text(stateName);
      const opt = combatStateOptionForValue(def, stateName);
      if (opt) return L.combatOptionLabel(opt);
      return L.combatStateLabel(def);
    }

    function stateRequirementReady(slot, requirement) {
      const states = asList(requirement);
      return !states.length || states.some((stateName) => combatStateReady(slot, stateName));
    }

    function allStateRequirementsReady(slot, requirement) {
      const states = asList(requirement);
      return !states.length || states.every((stateName) => combatStateReady(slot, stateName));
    }

    function buffStateRequirementsReady(slot, buff) {
      return stateRequirementReady(slot, buff.requiresState) && allStateRequirementsReady(slot, buff.requiresAllStates);
    }

    function stateRequirementLabel(requirement) {
      return asList(requirement).map((stateName) => stateLabel(state.slots[state.outputIdx], stateName)).join("/");
    }

    function allStateRequirementLabel(requirement) {
      return asList(requirement).map((stateName) => stateLabel(state.slots[state.outputIdx], stateName)).join(" + ");
    }

    function buffStateRequirementLabelForSlot(slot, buff) {
      const labels = [];
      if (buff.requiresState) labels.push(asList(buff.requiresState).map((stateName) => stateLabel(slot, stateName)).join("/"));
      if (buff.requiresAllStates) labels.push(asList(buff.requiresAllStates).map((stateName) => stateLabel(slot, stateName)).join(" + "));
      return labels.join(" + ");
    }

    function buffStateRequirementLabel(buff) {
      return buffStateRequirementLabelForSlot(state.slots[state.outputIdx], buff);
    }

    function activateSingleStateRequirement(slot, stateName) {
      if (!stateName) return;
      const def = combatStateDefFor(slot, stateName);
      if (!def) {
        slot.toggles[stateKey(stateName)] = true;
        return;
      }
      const options = asList(def.options);
      const value = stateName === def.id ? (options[0] && options[0].value) || def.id : stateName;
      slot.toggles[stateChoiceKey(def.id)] = value;
    }

    function activateStateRequirement(slot, requirement) {
      if (stateRequirementReady(slot, requirement)) return;
      activateSingleStateRequirement(slot, asList(requirement)[0]);
    }

    function activateAllStateRequirements(slot, requirement) {
      asList(requirement).forEach((stateName) => {
        if (!combatStateReady(slot, stateName)) activateSingleStateRequirement(slot, stateName);
      });
    }

    function activateBuffStateRequirements(slot, buff) {
      activateStateRequirement(slot, buff.requiresState);
      activateAllStateRequirements(slot, buff.requiresAllStates);
    }

    function requiredStatesForSlot(slot) {
      const names = [];
      slotBuffs(slot).forEach((buff) => {
        if (buff.seq && slot.seq < buff.seq) return;
        asList(buff.requiresState).forEach((name) => { if (!names.includes(name)) names.push(name); });
        asList(buff.requiresAllStates).forEach((name) => { if (!names.includes(name)) names.push(name); });
      });
      return names;
    }

    function stateControlsHTML(slot, idx) {
      const used = new Set();
      const visibleStateDef = (def) => combatStateDefAvailable(slot, def) && !offsetStateControlDef(def);
      const knownStates = combatStateDefs(slot).filter(visibleStateDef).map((def) => {
        used.add(def.id);
        return combatStateSelectHTML(slot, idx, def);
      }).join("");
      const legacyStates = requiredStatesForSlot(slot).map((stateName) => {
        const def = combatStateDefFor(slot, stateName);
        if (!def) return legacyStateToggleHTML(slot, idx, stateName);
        if (!visibleStateDef(def)) return "";
        if (used.has(def.id)) return "";
        used.add(def.id);
        return combatStateSelectHTML(slot, idx, def);
      }).join("");
      return knownStates + legacyStates;
    }

    function offsetStateControlDef(def) {
      if (!def || !OFFSET_STATE_KINDS.has(def.kind)) return false;
      return asList(def.options).some((opt) => OFFSET_STATE_RE.test(offsetStateOptionText(def, opt)));
    }

    function offsetStateOptionText(def, opt) {
      return [def.id, def.label, L.combatStateLabel(def), opt?.value, opt?.label, L.combatOptionLabel(opt), opt?.formulaKind].join(" ");
    }

    function legacyStateToggleHTML(slot, idx, stateName) {
      const implied = skillImpliesState(slot, stateName);
      const checked = combatStateReady(slot, stateName) ? "checked" : "";
      const disabled = implied ? "disabled" : "";
      return `<div class="field toggle-field"><label class="buff toggle-card resource-toggle"><input type="checkbox" data-act="state" data-slot="${idx}" data-key="${esc(stateName)}" ${checked} ${disabled} /> ${esc(L.isEnglish() ? `In ${L.text(stateName)}` : `处于${stateName}`)}</label></div>`;
    }

    function combatStateSelectHTML(slot, idx, def) {
      const implied = combatStateFiltersSkills(def) ? "" : impliedCombatStateValue(slot, def);
      const value = selectedCombatStateValue(slot, def);
      const disabled = implied ? "disabled" : "";
      const kindStatusText = {
        target: L.text("按当前目标状态/标记选择"),
        field: L.text("按当前场地效果选择"),
        mode: L.text("按当前模式选择"),
        form: L.text("按当前形态选择"),
        phase: L.text("按当前阶段选择"),
        buff: L.text("按当前增益选择"),
        mechanic: L.text("按当前机制选择"),
      };
      const manualStatus = kindStatusText[def.kind] || L.text("按当前战斗状态选择");
      const status = implied ? L.text("当前技能决定") : manualStatus;
      const inactiveLabel = def.inactiveLabel || "未处于" + def.label;
      const inactiveShortByKind = {
        target: L.text("目标无"),
        field: L.text("未展开"),
        mode: L.text("未确认"),
        form: L.text("未确认"),
        phase: L.text("未确认"),
        buff: L.text("未获得"),
        mechanic: L.text("未确认"),
      };
      const inactiveShort = String(inactiveLabel).startsWith("未确认") ? L.text("未确认") : (inactiveShortByKind[def.kind] || L.text("未处于"));
      const choices = def.required ? asList(def.options) : [{ value: "", label: inactiveShort, title: inactiveLabel }, ...asList(def.options)];
      const options = choices.map((opt) =>
        `<button type="button" class="design-segment state-seg${opt.value === value ? " on" : ""}" data-act="state-choice" data-slot="${idx}" data-key="${esc(def.id)}" data-value="${esc(opt.value)}" title="${esc(L.text(opt.title || opt.label))}" ${disabled}>${esc(L.text(opt.label))}</button>`
      ).join("");
      const hintText = `${L.text(def.entry || "")}${def.entry && def.effects ? " " : ""}${L.text(def.effects || "")}`;
      return `<div class="field state-field">
    <label>${esc(L.combatStateLabel(def))}<span class="state-source">${esc(status)}</span></label>
    <div class="state-choice-row" style="--state-choice-count:${choices.length}" role="group" aria-label="${esc(L.combatStateLabel(def))}">${options}</div>
    <div class="hint" title="${esc(hintText)}">${esc(hintText)}</div>
  </div>`;
    }

    function damageTypesForSkill(sk) {
      return sk ? [sk.damageType, ...asList(sk.damageTags)].filter(Boolean) : [];
    }

    function damageRequirementMatches(ctx, requirement) {
      const requirements = asList(requirement);
      if (!requirements.length) return true;
      const types = ctx.damageTypes || (ctx.damageType ? [ctx.damageType] : []);
      return requirements.some((type) => types.includes(type));
    }

    function isHarmonyResponseContext(ctx) {
      const types = ctx.damageTypes || (ctx.damageType ? [ctx.damageType] : []);
      return types.some((type) => HARMONY_RESPONSE_DAMAGE_TYPES.has(type));
    }

    function buffExplicitlyTargetsCurrentSkill(buff, ctx) {
      const type = buff.type || buff.damageType;
      if (type && damageRequirementMatches(ctx, type)) return true;
      return skillRefsMatch(ctx.skill, buff.skills);
    }

    function harmonyResponseBuffGateReason(buff, ctx) {
      if (!isHarmonyResponseContext(ctx)) return null;
      if (HARMONY_RESPONSE_IGNORED_ZONES.has(buff.zone)) {
        return buff.zone === "critRate" || buff.zone === "critDamage"
          ? "谐度响应伤害不暴击"
          : "谐度响应伤害不吃攻击/普通伤害加成";
      }
      if (HARMONY_RESPONSE_EXPLICIT_ZONES.has(buff.zone) && !buffExplicitlyTargetsCurrentSkill(buff, ctx)) {
        return "需明确作用于谐度响应伤害";
      }
      return null;
    }

    function dpsContext(outputIdx = state.outputIdx, skillOverride = null) {
      const s1 = state.slots[outputIdx];
      const c = ch(s1.char);
      const sk = skillOverride || resolvedSkill(s1);
      return { element: c?.element, damageType: sk ? sk.damageType : null, damageTypes: damageTypesForSkill(sk), skillName: sk ? sk.name : null, skillId: sk ? sk.id : null, skill: sk };
    }

    function currentSkillTriggersBuff(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      if (idx !== outputIdx) return false;
      const ctx = ctxOverride || dpsContext(outputIdx);
      return skillRefsMatch(ctx.skill, buff.triggerSkills);
    }

    function currentDamageTypeTriggersBuff(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      if (idx !== outputIdx) return false;
      const types = (ctxOverride || dpsContext(outputIdx)).damageTypes || [];
      return asList(buff.triggerDamageTypes).some((type) => types.includes(type));
    }

    function currentEventTriggersBuff(slot, idx, buff, outputIdx = state.outputIdx) {
      if (idx !== outputIdx) return false;
      const events = actionEventsForSlot(slot);
      return asList(buff.triggerEvents).some((eventName) => events.includes(eventKeyOf(eventName)));
    }

    function triggerRuleSatisfied(slot, idx, rule, outputIdx = state.outputIdx, ctxOverride = null) {
      if (idx !== outputIdx || !rule) return false;
      if (rule.requiresState && !stateRequirementReady(slot, rule.requiresState)) return false;
      if (rule.requiresAllStates && !allStateRequirementsReady(slot, rule.requiresAllStates)) return false;
      const ctx = ctxOverride || dpsContext(outputIdx);
      const checks = [];
      if (rule.skills) checks.push(skillRefsMatch(ctx.skill, rule.skills));
      if (rule.damageTypes) checks.push(asList(rule.damageTypes).some((type) => (ctx.damageTypes || []).includes(type)));
      if (rule.events) {
        const events = actionEventsForSlot(slot);
        checks.push(asList(rule.events).some((eventName) => events.includes(eventKeyOf(eventName))));
      }
      return checks.length > 0 && checks.some(Boolean);
    }

    function satisfiedTriggerRule(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      return asList(buff.triggerRules).find((rule) => triggerRuleSatisfied(slot, idx, rule, outputIdx, ctxOverride)) || null;
    }

    function isSupportOutroBuff(slot, idx, buff, outputIdx = state.outputIdx) {
      return idx !== outputIdx && (String(buff.source).startsWith("延奏") || buff.triggerOutro === true);
    }

    function buffSeqUnlocked(slot, buff) {
      if (buff.seq && num(slot.seq) < num(buff.seq)) return false;
      if (buff.maxSeq != null && num(slot.seq) > num(buff.maxSeq)) return false;
      return true;
    }

    function directTriggerInfo(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      const rule = satisfiedTriggerRule(slot, idx, buff, outputIdx, ctxOverride);
      const triggered = !!rule
        || currentSkillTriggersBuff(slot, idx, buff, outputIdx, ctxOverride)
        || currentDamageTypeTriggersBuff(slot, idx, buff, outputIdx, ctxOverride)
        || currentEventTriggersBuff(slot, idx, buff, outputIdx);
      return { triggered, stacks: rule?.stacks ?? triggerStacksByTeamElement(slot, buff) ?? buff.triggerStacks };
    }

    function triggerStacksByTeamElement(slot, buff) {
      const req = buff.triggerStacksByTeamElement;
      if (!req) return null;
      const provider = ch(slot.char);
      const element = req.element || provider?.element;
      const matching = state.slots.filter((teamSlot) => ch(teamSlot.char)?.element === element).length;
      const selfMatches = provider?.element === element ? 1 : 0;
      const otherMatching = Math.max(0, matching - (req.excludeSelf === false ? 0 : selfMatches));
      let stacks = num(req.base ?? req.baseStacks);
      stacks += otherMatching * num(req.perOther ?? req.perOtherMember);
      stacks += matching * num(req.perMember);
      asList(req.bonuses || req.thresholdBonuses).forEach((bonus) => {
        const min = bonus.min ?? bonus.minMatching ?? bonus.count;
        const minOther = bonus.minOther ?? bonus.minOtherMatching;
        if (min != null && matching < num(min)) return;
        if (minOther != null && otherMatching < num(minOther)) return;
        stacks += num(bonus.stacks ?? bonus.value);
      });
      return Math.max(0, Math.round(stacks));
    }

    function stackGroupTriggerInfo(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      if (!buff.stackGroup) return { triggered: false, stacks: null };
      return slotBuffs(slot).reduce((found, other) => {
        if (other.stackGroup !== buff.stackGroup || !buffSeqUnlocked(slot, other)) return found;
        const info = directTriggerInfo(slot, idx, other, outputIdx, ctxOverride);
        if (!info.triggered) return found;
        const stacks = info.stacks == null ? found.stacks : Math.max(num(found.stacks), num(info.stacks));
        return { triggered: true, stacks };
      }, { triggered: false, stacks: null });
    }

    function buffTriggerSatisfied(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      const own = directTriggerInfo(slot, idx, buff, outputIdx, ctxOverride);
      const group = stackGroupTriggerInfo(slot, idx, buff, outputIdx, ctxOverride);
      const triggered = own.triggered || group.triggered;
      const hasTriggeredStacks = own.stacks != null || group.stacks != null;
      if (!triggered) return false;
      if (buff.maxStacks && buff.defaultStacks === 0 && !hasTriggeredStacks) return false;
      return true;
    }

    function supportStateNeedsConfirmation(slot, idx, buff, outputIdx = state.outputIdx) {
      return idx !== outputIdx
        && buff.scope === "team"
        && (buff.requiresState || buff.requiresAllStates)
        && !buffStateRequirementsReady(slot, buff);
    }

    function buffNeedsPrecondition(slot, idx, buff, outputIdx = state.outputIdx, ctxOverride = null) {
      return supportStateNeedsConfirmation(slot, idx, buff, outputIdx)
        || !!buff.requiresResource
        || (buff.requiresEffectStacks && !effectStackRequirementReady(buff))
        || (buff.requiresAnyEffectStacks && !anyEffectStackRequirementReady(buff))
        || ((buff.defaultActive === false || isSupportOutroBuff(slot, idx, buff, outputIdx)) && !buffTriggerSatisfied(slot, idx, buff, outputIdx, ctxOverride));
    }

    function effectStackRequirement(buff) {
      const req = buff.requiresEffectStacks;
      if (!req) return null;
      const key = effectKeyOf(req.effect || req.key);
      if (key === "none") return null;
      return { key, stacks: Math.max(0, Math.round(num(req.stacks ?? req.min))) };
    }

    function effectStackRequirementReady(buff) {
      const req = effectStackRequirement(buff);
      if (!req) return true;
      return activeEffectStacks(req.key) >= req.stacks;
    }

    function effectStackRequirementLabel(rawReq) {
      const key = effectKeyOf(rawReq?.effect || rawReq?.key);
      const label = (EFFECT_DEFS[key] && EFFECT_DEFS[key].label) || key;
      return `${label}${Math.max(0, Math.round(num(rawReq?.stacks ?? rawReq?.min)))}层`;
    }

    function syncEffectStackRequirement(buff) {
      const req = effectStackRequirement(buff);
      if (!req) return;
      state.effectCalc = state.effectCalc || {};
      const previousKey = effectKeyOf(state.effectCalc.key);
      state.effectCalc.key = req.key;
      state.effectCalc.stacks = previousKey === req.key ? Math.max(num(state.effectCalc.stacks), req.stacks) : req.stacks;
      const currentProvider = Math.round(num(state.effectCalc.providerIdx, -1));
      if (state.slots[currentProvider] && slotProvidesEffect(state.slots[currentProvider], req.key)) return;
      const found = state.slots.findIndex((slot) => slotProvidesEffect(slot, req.key));
      state.effectCalc.providerIdx = found >= 0 ? found : null;
    }

    function buffStackStorageKey(buff) {
      return "stk_" + (buff.stackGroup || buff.id);
    }

    function buffStackCap(slot, buff) {
      let cap = buff.stackMax ?? buff.groupMax ?? buff.maxStacks ?? 0;
      asList(buff.stackMaxBySeq || buff.stackGroupMaxBySeq).forEach((rule) => {
        if (num(slot.seq) >= num(rule.seq)) cap = rule.max ?? rule.stacks ?? rule.value;
      });
      return Math.max(0, Math.round(num(cap)));
    }

    function buffOwnStackFallback(slot, buff, idx, outputIdx, ctxOverride = null) {
      let fallback = buff.defaultStacks ?? buff.maxStacks;
      const info = directTriggerInfo(slot, idx, buff, outputIdx, ctxOverride);
      if (info.triggered && info.stacks != null) fallback = info.stacks;
      return num(fallback);
    }

    function buffStackCount(slot, buff, idx = state.slots.indexOf(slot), outputIdx = state.outputIdx, ctxOverride = null) {
      const key = buffStackStorageKey(buff);
      let fallback = buffOwnStackFallback(slot, buff, idx, outputIdx, ctxOverride);
      if (buff.stackGroup) {
        slotBuffs(slot).forEach((other) => {
          if (other.stackGroup !== buff.stackGroup || !buffSeqUnlocked(slot, other)) return;
          fallback = Math.max(fallback, buffOwnStackFallback(slot, other, idx, outputIdx, ctxOverride));
        });
      }
      const value = num(slot.toggles[key] ?? fallback);
      const cap = buffStackCap(slot, buff);
      return cap ? Math.min(Math.max(0, value), cap) : Math.max(0, value);
    }

    function buffStackContribution(slot, buff, idx = state.slots.indexOf(slot), outputIdx = state.outputIdx, ctxOverride = null) {
      const stacks = buffStackCount(slot, buff, idx, outputIdx, ctxOverride);
      if (buff.stackStart == null && buff.stackEnd == null && !buff.stackRange) return stacks;
      const range = asList(buff.stackRange);
      const start = Math.max(1, Math.round(num(buff.stackStart ?? range[0] ?? 1)));
      const end = Math.max(start, Math.round(num(buff.stackEnd ?? range[1] ?? buff.maxStacks)));
      return Math.max(0, Math.min(stacks, end) - start + 1);
    }

    function buffStackRangeLabel(buff) {
      const range = asList(buff.stackRange);
      const start = Math.max(1, Math.round(num(buff.stackStart ?? range[0] ?? 1)));
      const end = Math.max(start, Math.round(num(buff.stackEnd ?? range[1] ?? buff.maxStacks)));
      return start === end ? `需层数达到第${start}层` : `需层数达到第${start}-${end}层`;
    }

    function anyEffectStackRequirementReady(buff) {
      const req = buff.requiresAnyEffectStacks;
      if (!req) return true;
      const calc = state.effectCalc || {};
      const key = effectKeyOf(calc.key);
      return key !== "none" && activeEffectStacks(key) >= Math.max(0, Math.round(num(req.stacks ?? req.min ?? 1)));
    }

    function anyEffectStackRequirementLabel(rawReq) {
      return `任一异常效应${Math.max(0, Math.round(num(rawReq?.stacks ?? rawReq?.min ?? 1)))}层`;
    }

    function buffClearedByCurrentSkill(slot, buff, ctx) {
      if (!skillRefsMatch(ctx.skill, buff.clearedBySkills)) return false;
      const exemptSeq = buff.clearExemptSeq == null ? Infinity : num(buff.clearExemptSeq);
      return num(slot.seq) < exemptSeq;
    }

    function buffStackGateReason(slot, idx, buff, seen, outputIdx, ctx) {
      const req = buff.requiresBuffStacks;
      if (!req) return null;
      const ref = slotBuffs(slot).find((b) => b.id === req.id);
      const refStatus = ref && !seen.has(buff.id) ? buffStatus(slot, idx, ref, new Set([...seen, buff.id]), outputIdx, ctx) : null;
      const stacks = ref ? buffStackCount(slot, ref, idx, outputIdx, ctx) : 0;
      return (!ref || !refStatus || !refStatus.applies || stacks < req.stacks) ? `需${req.label || req.id}${req.stacks}层` : null;
    }

    function buffGateReason(slot, idx, buff, seen, outputIdx, ctx, isDps) {
      const harmonyGate = harmonyResponseBuffGateReason(buff, ctx);
      if (buff.effect && buff.defaultActive !== false && !isSupportOutroBuff(slot, idx, buff, outputIdx) && !supportStateNeedsConfirmation(slot, idx, buff, outputIdx)) return "仅效应伤害";
      if (buff.seq && slot.seq < buff.seq) return `需 ${buff.seq} 链`;
      if (buff.maxSeq != null && slot.seq > buff.maxSeq) return `已被高链效果替换`;
      if (!buffStateRequirementsReady(slot, buff) && !supportStateNeedsConfirmation(slot, idx, buff, outputIdx)) return `需处于${buffStateRequirementLabelForSlot(slot, buff)}`;
      if (!sourceStatRequirementReady(slot, buff)) return `需${sourceStatRequirementLabel(buff.requiresSourceStat)}`;
      if (!sourceCharRequirementReady(slot, buff)) return `需${sourceCharRequirementLabel(buff)}`;
      if (buff.maxStacks && (buff.stackStart != null || buff.stackEnd != null || buff.stackRange) && buffTriggerSatisfied(slot, idx, buff, outputIdx, ctx) && buffStackContribution(slot, buff, idx, outputIdx, ctx) <= 0) return buffStackRangeLabel(buff);
      if (buff.requiresEffectStacks && !effectStackRequirementReady(buff) && slot.toggles[buff.id] === true) return `需${effectStackRequirementLabel(buff.requiresEffectStacks)}`;
      if (buff.requiresAnyEffectStacks && !anyEffectStackRequirementReady(buff) && slot.toggles[buff.id] === true) return `需${anyEffectStackRequirementLabel(buff.requiresAnyEffectStacks)}`;
      if (buffClearedByCurrentSkill(slot, buff, ctx)) return "被当前技能清除";
      if (!isDps && buff.scope !== "team") return "仅自身输出时生效";
      if (isDps && (String(buff.source).startsWith("延奏") || buff.triggerOutro === true)) return "延奏不给自己";
      if (buff.skills && !skillRefsMatch(ctx.skill, buff.skills)) return "仅 " + skillRefsLabel(slot, buff.skills);
      if (buff.element && buff.element !== ctx.element) return "需输出位为" + L.element(buff.element);
      if (buff.damageType && !damageRequirementMatches(ctx, buff.damageType)) return "需当前技能为" + asList(buff.damageType).map(L.damageType).join("/");
      if (harmonyGate) return harmonyGate;
      return buffStackGateReason(slot, idx, buff, seen, outputIdx, ctx);
    }

    function buffStatus(slot, idx, buff, seen = new Set(), outputIdx = state.outputIdx, ctxOverride = null) {
      const ctx = ctxOverride || dpsContext(outputIdx);
      const isDps = idx === outputIdx;
      const gated = buffGateReason(slot, idx, buff, seen, outputIdx, ctx, isDps);
      const precondition = buffNeedsPrecondition(slot, idx, buff, outputIdx, ctx);
      const toggleOn = precondition ? slot.toggles[buff.id] === true : true;
      return { gated, precondition, toggleOn, applies: !gated && toggleOn };
    }

    function setBuffToggle(slot, idx, buffId, checked) {
      const buff = slotBuffs(slot).find((b) => b.id === buffId);
      if (checked && buff && supportStateNeedsConfirmation(slot, idx, buff)) {
        activateBuffStateRequirements(slot, buff);
        syncEffectStackRequirement(buff);
        delete slot.toggles[buffId];
        return;
      }
      if (checked && buff && buff.exclusiveGroup) {
        slotBuffs(slot).forEach((other) => {
          if (other.id === buff.id || other.exclusiveGroup !== buff.exclusiveGroup) return;
          slot.toggles[other.id] = false;
          if (other.requiresResource) slot.toggles[resourceKey(other.requiresResource)] = false;
        });
      }
      if (buff && buff.requiresResource) {
        slot.toggles[resourceKey(buff.requiresResource)] = checked;
      }
      if (checked && buff) syncEffectStackRequirement(buff);
      slot.toggles[buffId] = checked;
    }

    const SOURCE_STAT_ALIAS = {
      energyRegen: "energyRegen", 共鸣效率: "energyRegen",
      critRate: "critRate", crit: "critRate", 暴击: "critRate", 暴击率: "critRate",
      critDamage: "critDamage", 暴击伤害: "critDamage",
      attack: "attack", atk: "attack", 攻击: "attack",
      hp: "hp", 生命: "hp",
      defense: "defense", def: "defense", 防御: "defense",
      attackPercent: "attackPercent", 攻击百分比: "attackPercent", 攻击百分比加成: "attackPercent",
      hpPercent: "hpPercent", 生命百分比: "hpPercent",
      defensePercent: "defensePercent", 防御百分比: "defensePercent",
      healingBonus: "healingBonus", 治疗效果加成: "healingBonus",
      breakAmp: "breakAmp", 谐度破坏增幅: "breakAmp",
      discordEff: "discordEff", 偏谐值累积效率: "discordEff",
    };
    const SOURCE_STAT_LABEL = {
      energyRegen: "共鸣效率", critRate: "暴击", critDamage: "暴击伤害",
      attack: "攻击", hp: "生命", defense: "防御",
      attackPercent: "攻击%", hpPercent: "生命%", defensePercent: "防御%",
      healingBonus: "治疗效果加成", breakAmp: "谐度破坏增幅", discordEff: "偏谐值累积效率",
    };
    function sourceStatKey(stat) {
      return SOURCE_STAT_ALIAS[stat] || stat;
    }

    function skillStatKey(stat) {
      const key = sourceStatKey(stat || "attack");
      return key === "hp" || key === "defense" ? key : "attack";
    }

    const SOURCE_STAT_ZONE = {
      energyRegen: "energyRegen",
      critRate: "critRate",
      critDamage: "critDamage",
      attackPercent: "attackPercent",
      hpPercent: "hpPercent",
      defensePercent: "defensePercent",
      healingBonus: "healingBonus",
      breakAmp: "breakAmp",
      discordEff: "discordEff",
    };

    function weaponSecondaryValue(slot, zone) {
      const w = wp(slot.weapon);
      return w && SEC_ZONE[w.secondaryStat] === zone ? num(w.secondary90) : 0;
    }

    function sourceStatBuffValue(slot, key) {
      const zone = SOURCE_STAT_ZONE[key];
      if (!zone) return 0;
      const idx = state.slots.indexOf(slot);
      return slotBuffs(slot).reduce((total, buff) => {
        if (buff.provider !== "声骸" || buff.zone !== zone || buff.scaleBy || buff.requiresSourceStat) return total;
        if (!buffStatus(slot, idx, buff).applies) return total;
        return total + buffValue(slot, buff, idx);
      }, 0);
    }

    function sourceStatValue(slot, stat) {
      const c = ch(slot.char);
      if (!c) return 0;
      const key = sourceStatKey(stat);
      const tree = c.base.tree || {};
      const w = wp(slot.weapon);
      const es = echoStats(slot);
      if (key === "energyRegen") return (c.base.energyRegen ?? 100) + (tree.energyRegen || 0) + weaponSecondaryValue(slot, "energyRegen") + es.energyRegen + sourceStatBuffValue(slot, key);
      if (key === "critRate") return c.base.critRate + (tree.critRate || 0) + weaponSecondaryValue(slot, "critRate") + es.critRate + sourceStatBuffValue(slot, key);
      if (key === "critDamage") return c.base.critDamage + (tree.critDamage || 0) + weaponSecondaryValue(slot, "critDamage") + es.critDamage + sourceStatBuffValue(slot, key);
      if (key === "attackPercent") return (tree.attackPct || 0) + weaponSecondaryValue(slot, "attackPercent") + es.attackPercent + sourceStatBuffValue(slot, key);
      if (key === "hpPercent") return (tree.hpPct || 0) + weaponSecondaryValue(slot, "hpPercent") + es.hpPercent + sourceStatBuffValue(slot, key);
      if (key === "defensePercent") return (tree.defPct || 0) + weaponSecondaryValue(slot, "defensePercent") + es.defensePercent + sourceStatBuffValue(slot, key);
      if (key === "healingBonus") return (tree.healingBonus || 0) + es.healingBonus + sourceStatBuffValue(slot, key);
      if (key === "breakAmp") return outputBreakAmp(state.slots.indexOf(slot));
      if (key === "discordEff") return (c.base.discordEff ?? 100) + (tree.discordEff || 0) + es.discordEff + sourceStatBuffValue(slot, key);
      if (key === "attack") {
        const baseAtk = c.base.attack + (w ? num(w.attack90) : 0);
        return baseAtk * (1 + sourceStatValue(slot, "attackPercent") / 100) + es.flatAtk;
      }
      if (key === "hp") return c.base.hp * (1 + sourceStatValue(slot, "hpPercent") / 100) + es.flatHp;
      if (key === "defense") return c.base.defense * (1 + sourceStatValue(slot, "defensePercent") / 100) + es.flatDef;
      return 0;
    }

    function activeSourceStatBuffValue(slot, key, currentBuff) {
      const zone = SOURCE_STAT_ZONE[key];
      if (!zone) return 0;
      const outputIdx = state.slots.indexOf(slot);
      return state.slots.reduce((sum, providerSlot, providerIdx) => {
        return sum + slotBuffs(providerSlot).reduce((total, buff) => {
          if (buff === currentBuff || buff.id === "w_sec" || buff.zone !== zone || buff.scaleBy || buff.provider === "声骸") return total;
          if (!buffStatus(providerSlot, providerIdx, buff, new Set(), outputIdx).applies) return total;
          return total + buffValue(providerSlot, buff, providerIdx);
        }, 0);
      }, 0);
    }

    function sourceStatRequirementReady(slot, buff) {
      const req = buff.requiresSourceStat;
      if (!req) return true;
      const value = sourceStatValue(slot, req.stat);
      if (req.min != null && value < num(req.min)) return false;
      if (req.max != null && value > num(req.max)) return false;
      return true;
    }

    function sourceStatRequirementLabel(req) {
      const label = req.label || SOURCE_STAT_LABEL[sourceStatKey(req.stat)] || req.stat;
      if (req.min != null) return `${label}至少${num(req.min)}%`;
      if (req.max != null) return `${label}不高于${num(req.max)}%`;
      return label;
    }

    function sourceCharRequirementReady(slot, buff) {
      const required = asList(buff.requiresChar || buff.requiresSourceChar);
      if (!required.length) return true;
      const c = ch(slot.char);
      const names = [c?.id, c?.name, window.WUWA_LANGUAGES?.officialName?.("chars", c?.id), ...asList(c?.aliases)].filter(Boolean);
      return required.some((name) => names.includes(name));
    }

    function sourceCharRequirementLabel(buff) {
      return asList(buff.requiresChar || buff.requiresSourceChar)
        .map((id) => ch(id) ? L.charName(ch(id)) : L.text(id))
        .join("/");
    }

    function effectTypeStateRequirementReady(slot, key) {
      const c = ch(slot.char);
      const requirements = c?.effectTypeRequiresState || c?.effectTypeRequirements || {};
      const raw = Object.entries(requirements).find(([effect]) => effectKeyOf(effect) === key)?.[1];
      if (!raw) return true;
      if (typeof raw === "string" || Array.isArray(raw)) return stateRequirementReady(slot, raw);
      return stateRequirementReady(slot, raw.requiresState) && allStateRequirementsReady(slot, raw.requiresAllStates);
    }

    function explicitEffectKeysForSlot(slot) {
      const c = ch(slot.char);
      if (!c) return [];
      const keys = new Set(asList(c.effectTypes)
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
        if (key !== "none" && key !== "all") keys.add(key);
      });
      return [...keys];
    }

    function slotProvidesEffect(slot, effectKey) {
      return explicitEffectKeysForSlot(slot).includes(effectKey);
    }

    function teamProvidesEffect(effectKey) {
      return state.slots.some((slot) => slotProvidesEffect(slot, effectKey));
    }

    function effectProviderIndex(effectKey) {
      const requested = Math.round(num(state.effectCalc?.providerIdx, -1));
      if (state.slots[requested] && slotProvidesEffect(state.slots[requested], effectKey)) return requested;
      const found = state.slots.findIndex((slot) => slotProvidesEffect(slot, effectKey));
      return found >= 0 ? found : state.outputIdx;
    }

    function attackForSlot(idx) {
      const slot = state.slots[idx];
      const c = ch(slot && slot.char);
      if (!c) return 0;
      const w = wp(slot.weapon);
      const b = aggregate(idx);
      const es = echoStats(slot);
      const tree = c.base.tree || {};
      const baseAtk = c.base.attack + (w ? num(w.attack90) : 0);
      const atkPct = (tree.attackPct || 0) + b.attackPercent + es.attackPercent;
      return baseAtk * (1 + atkPct / 100) + es.flatAtk + b.attackFlat;
    }

    function scaleBySourceSlot(slot, scale, outputIdx = state.outputIdx) {
      if (scale.target === "output" || scale.source === "output" || scale.from === "output") return state.slots[outputIdx] || slot;
      return slot;
    }

    function scaleByInfo(slot, buff, outputIdx = state.outputIdx) {
      const scale = buff.scaleBy;
      if (!scale) return null;
      const sourceSlot = scaleBySourceSlot(slot, scale, outputIdx);
      const key = sourceStatKey(scale.stat);
      const base = sourceStatValue(sourceSlot, key) + (scale.includeActiveBuffs ? activeSourceStatBuffValue(sourceSlot, key, buff) : 0);
      const source = base + num(scale.statBonus);
      const raw = source * num(scale.rate);
      return {
        key,
        label: SOURCE_STAT_LABEL[key] || scale.stat,
        base,
        source,
        raw,
        min: scale.min == null ? null : num(scale.min),
        cap: scale.cap == null ? null : num(scale.cap),
      };
    }

    function buffValue(slot, buff, idx = state.slots.indexOf(slot), outputIdx = state.outputIdx, ctxOverride = null) {
      let v = num(buff.value);
      if (buff.scaleBy) {
        const info = scaleByInfo(slot, buff, outputIdx);
        v = info.raw;
        if (info.min != null) v = Math.max(v, info.min);
        if (info.cap != null) v = Math.min(v, info.cap);
      }
      if (buff.maxStacks) {
        const st = buffStackContribution(slot, buff, idx, outputIdx, ctxOverride);
        v = (v * st) / buff.maxStacks;
      }
      return v;
    }

    function aggregate(outputIdx = state.outputIdx) {
      const t = zeros();
      const ctx = dpsContext(outputIdx);
      state.slots.forEach((slot, idx) => {
        slotBuffs(slot).forEach((buff) => {
          if (buff.effect) return;
          const type = buff.type || buff.damageType;
          if (buff.zone === "typeBonus" && !damageRequirementMatches(ctx, type)) return;
          if (buffStatus(slot, idx, buff, new Set(), outputIdx).applies && t[buff.zone] !== undefined) t[buff.zone] += buffValue(slot, buff, idx, outputIdx);
        });
      });
      return t;
    }

    function outputBreakAmp(outputIdx = state.outputIdx) {
      const slot = state.slots[outputIdx];
      const c = ch(slot.char);
      if (!c) return 0;
      const tree = c.base.tree || {};
      let total = (c.base.breakAmp ?? 0) + (tree.breakAmp || 0);
      state.slots.forEach((providerSlot, providerIdx) => {
        slotBuffs(providerSlot).forEach((buff) => {
          if (buff.zone !== "breakAmp") return;
          if (!buffStatus(providerSlot, providerIdx, buff, new Set(), outputIdx).applies) return;
          total += buffValue(providerSlot, buff, providerIdx, outputIdx);
        });
      });
      return total;
    }

    function harmonyResponseAggregate(outputIdx = state.outputIdx, ctxOverride = null) {
      const t = { breakAmp: outputBreakAmp(outputIdx), skillMultBonus: 0, amplify: 0, vulnerability: 0, finalDmg: 0, resShred: 0, defShred: 0, defIgnore: 0 };
      const ctx = ctxOverride || dpsContext(outputIdx);
      state.slots.forEach((slot, idx) => {
        slotBuffs(slot).forEach((buff) => {
          if (!buffStatus(slot, idx, buff, new Set(), outputIdx, ctx).applies) return;
          const v = buffValue(slot, buff, idx, outputIdx, ctx);
          if (HARMONY_RESPONSE_DEFENSE_ZONES.has(buff.zone)) t[buff.zone] += v;
          if (HARMONY_RESPONSE_EXPLICIT_ZONES.has(buff.zone) && buffExplicitlyTargetsCurrentSkill(buff, ctx)) t[buff.zone] += v;
        });
      });
      return t;
    }

    function isCoherenceInterferenceFinalDmgBuff(slot, buff) {
      if (!buff || buff.zone !== "finalDmg" || buff.scaleBy?.stat !== "breakAmp") return false;
      if (buff.offsetFormulaKind === "coherenceInterference" || buff.formulaKind === "coherenceInterference") return true;
      const requirements = [...asList(buff.requiresState), ...asList(buff.requiresAllStates)];
      if (requirements.some((stateName) => {
        const def = combatStateDefFor(slot, stateName);
        return combatStateOptionForValue(def, stateName)?.formulaKind === "coherenceInterference";
      })) return true;
      const text = [
        buff.id, buff.label, buff.source, buff.trigger, buff.stackGroup, buff.desc, buff.excerpt,
        ...asList(buff.requiresState), ...asList(buff.requiresAllStates),
      ].join(" ");
      return /集谐.*干涉/.test(text);
    }

    function appliedCoherenceInterferenceFinalDmg(outputIdx = state.outputIdx) {
      let total = 0;
      state.slots.forEach((slot, idx) => {
        slotBuffs(slot).forEach((buff) => {
          if (!isCoherenceInterferenceFinalDmgBuff(slot, buff)) return;
          if (buffStatus(slot, idx, buff, new Set(), outputIdx).applies) total += buffValue(slot, buff, idx, outputIdx);
        });
      });
      return total;
    }

    function resistanceFactor(resPct) {
      const r = resPct / 100;
      if (r < 0) return 1 - r / 2;
      if (r < 0.8) return 1 - r;
      return 1 / (1 + 5 * r);
    }

    function effectCapTargetMatches(targets, def) {
      const effects = asList(targets).map(effectKeyOf).filter((key) => key !== "none");
      return !effects.length || effects.includes(def.key);
    }

    function effectCapBonus(def, outputIdx = state.outputIdx) {
      if (!def.supportsCapBonus) return { value: 0, sources: [], parts: [] };
      let value = 0;
      const sources = [];
      const parts = [];
      state.slots.forEach((slot) => {
        const c = ch(slot.char);
        const bonus = c && c.effectCapBonus;
        if (bonus && effectCapTargetMatches(bonus.effects, def)) {
          const v = num(bonus.value);
          if (v > 0) {
            value += v;
            sources.push(c.name);
            parts.push({ source: c.name, value: v });
          }
        }
        slotBuffs(slot).forEach((buff) => {
          if (buff.zone !== "effectCapBonus") return;
          if (!effectCapTargetMatches(buff.effects, def)) return;
          const idx = state.slots.indexOf(slot);
          if (!buffStatus(slot, idx, buff, new Set(), outputIdx).applies) return;
          const v = buffValue(slot, buff, idx, outputIdx);
          if (v <= 0) return;
          const source = `${c.name}·${buff.source}`;
          value += v;
          sources.push(source);
          parts.push({ source, value: v });
        });
      });
      return { value, sources, parts };
    }

    function providerEffectBaseCap(def, providerIdx) {
      const c = ch(state.slots[providerIdx] && state.slots[providerIdx].char);
      const caps = c && (c.effectBaseCaps || c.effectCaps);
      const ownCap = caps && (caps[def.key] ?? caps[def.label] ?? caps[def.shortLabel]);
      return Math.max(0, Math.round(num(ownCap ?? def.baseCap ?? def.maxStacks ?? 0)));
    }

    function effectCap(def, providerIdx, outputIdx = state.outputIdx) {
      const base = providerEffectBaseCap(def, providerIdx);
      const bonus = effectCapBonus(def, outputIdx);
      return { base, value: Math.min(def.maxStacks ?? base + bonus.value, base + bonus.value), bonus };
    }

    function activeEffectStacks(effectKey) {
      const calc = state.effectCalc || {};
      const key = effectKeyOf(calc.key);
      if (key !== effectKey || key === "none" || !teamProvidesEffect(key)) return 0;
      const def = EFFECT_DEFS[key] || EFFECT_DEFS.none;
      const providerIdx = effectProviderIndex(key);
      const cap = effectCap(def, providerIdx).value;
      return clampStacks(calc.stacks, def, cap);
    }

    function clampStacks(value, def, cap, fallbackOverride) {
      const fallback = fallbackOverride ?? def.defaultStacks ?? cap;
      const n = Math.round(num(value, fallback));
      return Math.min(Math.max(n, 0), cap);
    }

    function fixedEffectValue(def, stacks) {
      if (stacks <= 0) return 0;
      if (def.fixedFormula === "lightNoise") return 208 + 896 * stacks;
      if (def.fixedFormula === "windErosion") return stacks <= 1 ? 1653 : 4133 * (stacks - 1);
      return null;
    }

    function effectRate(def, stacks) {
      const rate = num(def.rates && def.rates[stacks], NaN);
      return Number.isFinite(rate) ? rate : null;
    }

    function effectRageRate(def, stacks) {
      if (!def.rageRates || stacks <= 0) return 0;
      if (def.rageRates === "same") return effectRate(def, stacks) ?? 0;
      return num(def.rageRates[stacks], 0);
    }

    function effectBaseInfo(def, stacks, totalAtk, rageStacks = 0, extraRate = 0) {
      if (def.kind === "fixed") {
        return { valid: true, base: fixedEffectValue(def, stacks), source: "fixed" };
      }
      if (def.kind !== "attack") return { valid: false };
      const baseRate = stacks <= 0 ? 0 : effectRate(def, stacks);
      if (baseRate == null) return { valid: false, rate: null, source: "attack" };
      const rageRate = effectRageRate(def, rageStacks);
      const rate = baseRate + rageRate + num(extraRate);
      return { valid: true, base: totalAtk * rate / 100, rate, baseRate, rageRate, extraRate: num(extraRate), rageStacks, attack: totalAtk, source: "attack" };
    }

    function effectRequirementMatches(effect, effectKey) {
      const raw = String(effect ?? "").replace(/[【】]/g, "").trim();
      if (!raw) return true;
      if (["all", "全部", "异常效应", "全部异常效应"].includes(raw)) return true;
      return effectKeyOf(raw) === effectKey;
    }

    function effectBuffStatus(slot, idx, buff, effectKey, def, seen = new Set(), outputIdx = state.outputIdx) {
      const ctx = dpsContext(outputIdx);
      const isDps = idx === outputIdx;
      let gated = null;
      if (buff.effect && !effectRequirementMatches(buff.effect, effectKey)) gated = `仅${buff.effect}伤害`;
      else if (buff.seq && slot.seq < buff.seq) gated = `需 ${buff.seq} 链`;
      else if (!buffStateRequirementsReady(slot, buff) && !supportStateNeedsConfirmation(slot, idx, buff, outputIdx)) gated = `需处于${buffStateRequirementLabel(buff)}`;
      else if (!sourceStatRequirementReady(slot, buff)) gated = `需${sourceStatRequirementLabel(buff.requiresSourceStat)}`;
      else if (!sourceCharRequirementReady(slot, buff)) gated = `需${sourceCharRequirementLabel(buff)}`;
      else if (!isDps && buff.scope !== "team") gated = "仅自身输出时生效";
      else if (isDps && (String(buff.source).startsWith("延奏") || buff.triggerOutro === true)) gated = "延奏不给自己";
      else if (buff.skills && !skillRefsMatch(ctx.skill, buff.skills)) gated = "仅 " + skillRefsLabel(slot, buff.skills);
      else if (buff.element && buff.element !== def.element) gated = "需目标效应为" + L.element(buff.element);
      else if (buff.damageType && !damageRequirementMatches(ctx, buff.damageType)) gated = "需当前技能为" + asList(buff.damageType).map(L.damageType).join("/");
      else if (buff.requiresBuffStacks) {
        const req = buff.requiresBuffStacks;
        const ref = slotBuffs(slot).find((b) => b.id === req.id);
        const refStatus = ref && !seen.has(buff.id) ? effectBuffStatus(slot, idx, ref, effectKey, def, new Set([...seen, buff.id]), outputIdx) : null;
        const stacks = ref ? buffStackCount(slot, ref, idx, outputIdx) : 0;
        if (!ref || !refStatus || !refStatus.applies || stacks < req.stacks) gated = `需${req.label || req.id}${req.stacks}层`;
      }
      const precondition = buffNeedsPrecondition(slot, idx, buff, outputIdx);
      const toggleOn = precondition ? slot.toggles[buff.id] === true : true;
      return { gated, precondition, toggleOn, applies: !gated && toggleOn };
    }

    function effectAggregate(effectKey, def, outputIdx = state.outputIdx) {
      const t = {
        deepen: num(state.effectCalc?.deepen), manualDeepen: num(state.effectCalc?.deepen), buffDeepen: 0,
        finalDmg: 0, buffFinalDmg: 0, extraRate: 0,
        resShred: 0, defShred: 0, defIgnore: 0,
      };
      state.slots.forEach((slot, idx) => {
        slotBuffs(slot).forEach((buff) => {
          const effectSpecific = !!buff.effect;
          const defenseDebuff = !effectSpecific && EFFECT_DEFENSE_ZONES.has(buff.zone);
          if (!effectSpecific && !defenseDebuff) return;
          const st = effectSpecific ? effectBuffStatus(slot, idx, buff, effectKey, def, new Set(), outputIdx) : buffStatus(slot, idx, buff, new Set(), outputIdx);
          if (!st.applies) return;
          const v = buffValue(slot, buff, idx, outputIdx);
          if (effectSpecific && EFFECT_DEEPEN_ZONES.has(buff.zone)) {
            t.deepen += v;
            t.buffDeepen += v;
            return;
          }
          if (effectSpecific && buff.zone === "finalDmg") {
            t.finalDmg += v;
            t.buffFinalDmg += v;
            return;
          }
          if (effectSpecific && buff.zone === "effectExtraRate") {
            t.extraRate += v;
            return;
          }
          if (EFFECT_DEFENSE_ZONES.has(buff.zone)) t[buff.zone] += v;
        });
      });
      return t;
    }

    function computeEffect() {
      const calc = state.effectCalc || {};
      const key = effectKeyOf(calc.key);
      const def = EFFECT_DEFS[key] || EFFECT_DEFS.none;
      if (!def || def.kind === "none") return { enabled: false, key: "none", def: EFFECT_DEFS.none };
      if (!teamProvidesEffect(key)) return { enabled: false, key: "none", def: EFFECT_DEFS.none };
      const providerIdx = effectProviderIndex(key);
      const providerSlot = state.slots[providerIdx];
      const providerChar = ch(providerSlot && providerSlot.char);
      const effectAtk = attackForSlot(providerIdx);
      const capInfo = effectCap(def, providerIdx);
      const cap = capInfo.value;
      const stacks = clampStacks(calc.stacks, def, cap);
      const rageStacks = def.rageRates ? clampStacks(calc.electroRageStacks, def, cap, 0) : 0;
      if (def.kind === "defShred") {
        return {
          enabled: true, key, def, kind: def.kind, providerIdx, providerName: providerChar ? providerChar.name : "",
          stacks, cap, capBase: capInfo.base, capBonus: capInfo.bonus, defShred: stacks * num(def.valuePerStack), note: def.note,
        };
      }
      const b = effectAggregate(key, def, providerIdx);
      const baseInfo = effectBaseInfo(def, stacks, effectAtk, rageStacks, b.extraRate);
      const defReduction = Math.min(Math.max((state.enemy.defShred + b.defShred) / 100, 0), 0.95);
      const defIgnore = Math.min(Math.max((state.enemy.defIgnore + b.defIgnore) / 100, 0), 0.95);
      const res = state.enemy.res - state.enemy.resShred - b.resShred;
      const levelTerm = 800 + 8 * state.enemy.charLevel;
      const enemyDef = (8 * state.enemy.enemyLevel + 792) * (1 - defReduction);
      const defFactor = levelTerm / (levelTerm + enemyDef * (1 - defIgnore));
      const resFactor = resistanceFactor(res);
      const deepenFactor = Math.max(0, 1 + b.deepen / 100);
      const finalDmgFactor = Math.max(0, 1 + b.finalDmg / 100);
      const raw = baseInfo.valid ? baseInfo.base * deepenFactor * defFactor * resFactor * finalDmgFactor : null;
      return {
        enabled: true, key, def, kind: def.kind, providerIdx, providerName: providerChar ? providerChar.name : "",
        stacks, cap, capBase: capInfo.base, capBonus: capInfo.bonus,
        rageStacks, rageCap: def.rageRates ? cap : null,
        base: baseInfo.base ?? null, rate: baseInfo.rate, baseRate: baseInfo.baseRate,
        rageRate: baseInfo.rageRate, extraRate: baseInfo.extraRate || 0, attack: baseInfo.attack,
        valid: baseInfo.valid, deepen: b.deepen, manualDeepen: b.manualDeepen, buffDeepen: b.buffDeepen,
        finalDmg: b.finalDmg, buffFinalDmg: b.buffFinalDmg, finalDmgFactor,
        defFactor, resFactor, res, raw, damage: raw == null ? null : Math.floor(raw), note: def.note,
        charLevel: state.enemy.charLevel, enemyLevel: state.enemy.enemyLevel,
        manualDefShred: state.enemy.defShred, buffDefShred: b.defShred,
        manualDefIgnore: state.enemy.defIgnore, buffDefIgnore: b.defIgnore,
        manualRes: state.enemy.res, manualResShred: state.enemy.resShred, buffResShred: b.resShred,
        defReduction: defReduction * 100, defIgnore: defIgnore * 100,
      };
    }

    function offsetOptionValue(entry) {
      if (!entry || entry.kind === "none") return "none";
      if (entry.kind === "tuneBreak") return "tuneBreak";
      if (entry.kind === "response") return `response|${entry.skillId}`;
      if (entry.kind === "state") return `state|${entry.stateId}|${entry.stateValue}`;
      return "none";
    }

    function stateDefAvailableForRequirement(slot, requirement) {
      const states = asList(requirement);
      return !states.length || states.some((stateName) => {
        const def = combatStateDefFor(slot, stateName);
        return !def || combatStateDefAvailable(slot, def);
      });
    }

    function offsetDamageSkills(slot) {
      const c = ch(slot.char);
      if (!c) return [];
      return asList(c.skills).filter((sk) =>
        skillUnlocked(slot, sk)
        && isHarmonyResponseContext({ damageType: sk.damageType, damageTypes: damageTypesForSkill(sk) })
        && stateDefAvailableForRequirement(slot, sk.requiresState)
        && manualAllStateRequirementsReady(slot, sk.requiresAllStates)
      );
    }

    function offsetStateEntriesForSlot(slot, idx) {
      const c = ch(slot.char);
      if (!c) return [];
      return combatStateDefs(slot).flatMap((def) => {
        if (!OFFSET_STATE_KINDS.has(def.kind)) return [];
        if (!combatStateDefAvailable(slot, def)) return [];
        return asList(def.options)
          .filter((opt) => OFFSET_STATE_RE.test(offsetStateOptionText(def, opt)))
          .filter((opt) => offsetStateFormulaKind(opt.value, opt) !== "state")
          .map((opt) => ({
            kind: "state",
            stateId: def.id,
            stateValue: opt.value,
            label: L.combatOptionLabel(opt),
            providerIdx: idx,
            providerName: c.name,
            stateLabel: L.combatStateLabel(def),
          }));
      });
    }

    function slotProvidesOffset(slot) {
      if (!ch(slot.char)) return false;
      if (offsetDamageSkills(slot).length) return true;
      return offsetStateEntriesForSlot(slot, state.slots.indexOf(slot)).length > 0;
    }

    function teamOffsetEntries() {
      const entries = [{ kind: "tuneBreak", label: "谐度破坏伤害" }];
      const seen = new Set(entries.map(offsetOptionValue));
      state.slots.forEach((slot, idx) => {
        const c = ch(slot.char);
        if (!c) return;
        offsetDamageSkills(slot).forEach((sk) => {
          const entry = {
            kind: "response",
            skillId: sk.id,
            label: sk.name,
            damageType: sk.damageType,
            providerIdx: idx,
            providerName: c.name,
          };
          const key = offsetOptionValue(entry);
          if (seen.has(key)) return;
          entries.push(entry);
          seen.add(key);
        });
        offsetStateEntriesForSlot(slot, idx).forEach((entry) => {
          const key = offsetOptionValue(entry);
          if (seen.has(key)) return;
          entries.push(entry);
          seen.add(key);
        });
      });
      return entries.map((entry) => ({ ...entry, optionValue: offsetOptionValue(entry) }));
    }

    function offsetProviderMatchesEntry(slot, entry) {
      if (!slot || !ch(slot.char) || !entry) return false;
      if (entry.kind === "tuneBreak") return true;
      if (entry.kind === "response") return offsetDamageSkills(slot).some((sk) => skillIdMatches(sk, entry.skillId));
      if (entry.kind !== "state") return false;
      return combatStateDefs(slot).some((def) =>
        combatStateDefAvailable(slot, def) && def.id === entry.stateId && asList(def.options).some((opt) => opt.value === entry.stateValue)
      );
    }

    function offsetProvidersForEntry(entry) {
      return state.slots.map((slot, idx) => ({ slot, idx, c: ch(slot.char) }))
        .filter((item) => item.c && offsetProviderMatchesEntry(item.slot, entry))
        .map((item) => ({ idx: item.idx, name: item.c.name }));
    }

    function offsetResponseFormulaKind(sk, fallbackType) {
      const types = new Set(damageTypesForSkill(sk));
      if (fallbackType) types.add(fallbackType);
      if (types.has("hackDmg")) return "hackBreak";
      if (types.has("tuneRupture") || types.has("tuneRuptureDmg")) return "tuneRupture";
      return "harmonyResponse";
    }

    function offsetStateFormulaKind(stateValue, opt = null) {
      if (opt?.formulaKind) return opt.formulaKind;
      const text = String(stateValue || "");
      return text.includes("集谐") && text.includes("干涉") ? "coherenceInterference" : "state";
    }

    function selectedOffsetEntry(entries) {
      const calc = state.offsetCalc || {};
      if (calc.key === "tuneBreak") return entries.find((entry) => entry.kind === "tuneBreak") || null;
      if (calc.key === "response") return entries.find((entry) => entry.kind === "response" && entry.skillId === calc.skillId) || null;
      if (calc.key === "state") {
        return entries.find((entry) =>
          entry.kind === "state" && entry.stateId === calc.stateId && entry.stateValue === calc.stateValue
        ) || null;
      }
      return entries.find((entry) => entry.kind === "tuneBreak") || null;
    }

    function offsetProviderIndex(entry) {
      if (!entry) return state.outputIdx;
      if (entry.kind === "tuneBreak") return state.outputIdx;
      if (entry.providerIdx != null && offsetProviderMatchesEntry(state.slots[entry.providerIdx], entry)) return entry.providerIdx;
      const providers = offsetProvidersForEntry(entry);
      const requested = Math.round(num(state.offsetCalc?.providerIdx, -1));
      if (providers.some((provider) => provider.idx === requested)) return requested;
      return providers[0]?.idx ?? state.outputIdx;
    }

    function offsetDefenseFactors(extra = {}) {
      const defReduction = Math.min(Math.max((state.enemy.defShred + num(extra.defShred)) / 100, 0), 0.95);
      const defIgnore = Math.min(Math.max((state.enemy.defIgnore + num(extra.defIgnore)) / 100, 0), 0.95);
      const levelTerm = 800 + 8 * state.enemy.charLevel;
      const enemyDef = (8 * state.enemy.enemyLevel + 792) * (1 - defReduction);
      const defFactor = levelTerm / (levelTerm + enemyDef * (1 - defIgnore));
      const res = state.enemy.res - state.enemy.resShred - num(extra.resShred);
      return { defFactor, res, resFactor: resistanceFactor(res), defReduction: defReduction * 100, defIgnore: defIgnore * 100 };
    }

    function computeOffsetTuneBreak(entry, entries) {
      const providerIdx = offsetProviderIndex(entry);
      const providers = offsetProvidersForEntry(entry);
      const providerChar = ch(state.slots[providerIdx]?.char);
      const harmonyBase = Math.max(0, num(state.enemy.harmonyBase, 10027));
      const tuneBreakRate = TUNE_BREAK_LEVEL_RATE;
      const breakAmp = outputBreakAmp(providerIdx);
      const breakAmpFactor = Math.max(0, 1 + breakAmp / 100);
      const factors = offsetDefenseFactors();
      const deepen = state.enemy.vulnerability - state.enemy.dmgReduction;
      const deepenFactor = Math.max(0, 1 + deepen / 100);
      const finalDmg = Math.max(0, 1 + state.enemy.finalDmg / 100);
      const fixedFactor = 0.8;
      const raw = harmonyBase * tuneBreakRate / 100 * breakAmpFactor * factors.defFactor * deepenFactor * finalDmg * fixedFactor;
      return {
        available: true, enabled: true, valid: true, kind: "tuneBreak", key: "tuneBreak", formulaKind: "tuneBreak",
        entries, providers, providerIdx, providerName: providerChar?.name || "", label: "谐度破坏伤害",
        harmonyBase, multiplier: tuneBreakRate, breakAmp, breakAmpFactor,
        enemyVulnerability: state.enemy.vulnerability, enemyDmgReduction: state.enemy.dmgReduction,
        deepen, deepenFactor, finalDmg, fixedFactor, raw, damage: Math.floor(raw), ...factors,
      };
    }

    function computeOffsetResponse(entry, entries) {
      const providerIdx = offsetProviderIndex(entry);
      const providers = offsetProvidersForEntry(entry);
      const providerSlot = state.slots[providerIdx];
      const providerChar = ch(providerSlot?.char);
      const sk = asList(providerChar?.skills).find((skill) => skillIdMatches(skill, entry.skillId));
      const harmonyBase = Math.max(0, num(state.enemy.harmonyBase, 10027));
      const levelCategory = sk?.category;
      const skLevel = skillLevelFor(providerSlot, levelCategory);
      const lvRatio = skillLevelRatio(skLevel);
      const baseMult = sk ? skillMultValue(sk.multiplier, lvRatio) : 0;
      const ctx = dpsContext(providerIdx, sk);
      const harmony = harmonyResponseAggregate(providerIdx, ctx);
      const formulaKind = offsetResponseFormulaKind(sk, entry.damageType);
      const skillMultBonus = harmony.skillMultBonus || 0;
      const multiplier = baseMult * (1 + skillMultBonus / 100);
      const deepen = state.enemy.vulnerability - state.enemy.dmgReduction + harmony.amplify + harmony.vulnerability;
      const deepenFactor = Math.max(0, 1 + deepen / 100);
      const finalDmg = Math.max(0, 1 + (state.enemy.finalDmg + harmony.finalDmg) / 100);
      const breakAmp = harmony.breakAmp;
      const breakAmpFactor = Math.max(0, 1 + breakAmp / 100);
      const factors = offsetDefenseFactors(harmony);
      const stateReady = sk && stateRequirementReady(providerSlot, sk.requiresState) && allStateRequirementsReady(providerSlot, sk.requiresAllStates);
      const raw = stateReady
        ? harmonyBase * multiplier / 100 * breakAmpFactor * deepenFactor * factors.defFactor * factors.resFactor * finalDmg
        : null;
      return {
        available: true, enabled: true, valid: !!stateReady, kind: "response", key: "response", formulaKind,
        entries, providers, providerIdx, providerName: providerChar?.name || "", label: sk?.name || entry.label,
        skill: sk, damageType: sk?.damageType || entry.damageType, skLevel, harmonyBase, baseMult, multiplier,
        skillMultBonus, breakAmp, breakAmpFactor, buffDeepen: harmony.amplify + harmony.vulnerability,
        enemyVulnerability: state.enemy.vulnerability, enemyDmgReduction: state.enemy.dmgReduction,
        deepen, deepenFactor, finalDmg, raw, damage: raw == null ? null : Math.floor(raw), ...factors,
        requiredState: sk ? buffStateRequirementLabelForSlot(providerSlot, sk) : "",
      };
    }

    function computeOffsetState(entry, entries) {
      const calc = state.offsetCalc || {};
      const providerIdx = offsetProviderIndex(entry);
      const providers = offsetProvidersForEntry(entry);
      const providerSlot = state.slots[providerIdx];
      const providerChar = ch(providerSlot?.char);
      const def = combatStateDefs(providerSlot).find((stateDef) => stateDef.id === entry.stateId);
      const current = def ? selectedCombatStateValue(providerSlot, def) : "";
      const confirmed = def ? stateValueMatches(current, entry.stateValue, def) : false;
      const expectedOpt = combatStateOptionForValue(def, entry.stateValue);
      const currentOpt = combatStateOptionForValue(def, current);
      const fallbackStacks = providerSlot?.toggles?.["stk_" + entry.stateValue] ?? providerSlot?.toggles?.["stk_" + entry.stateId] ?? 0;
      const stacks = Math.max(0, Math.round(num(calc.stacks, fallbackStacks)));
      const breakAmp = outputBreakAmp(providerIdx);
      const formulaKind = offsetStateFormulaKind(entry.stateValue, expectedOpt);
      const perStackRate = formulaKind === "coherenceInterference" ? 0.12 : 0;
      const finalDmgGain = stacks * breakAmp * perStackRate;
      return {
        available: true, enabled: true, valid: confirmed, kind: "state", key: "state", formulaKind,
        entries, providers, providerIdx, providerName: providerChar?.name || "", label: entry.label,
        stateId: entry.stateId, stateLabel: entry.stateLabel, stateValue: entry.stateValue, currentState: current,
        stateValueLabel: expectedOpt ? L.combatOptionLabel(expectedOpt) : L.text(entry.label || entry.stateValue),
        currentStateLabel: currentOpt ? L.combatOptionLabel(currentOpt) : L.text(current || "未确认"),
        stacks, breakAmp, perStackRate, finalDmgGain, status: confirmed ? "已确认" : "未确认",
      };
    }

    function computeOffset() {
      const entries = teamOffsetEntries();
      if (!entries.length) return { available: false, enabled: false, entries: [] };
      const entry = selectedOffsetEntry(entries);
      const tuneBreakEntry = entries.find((item) => item.kind === "tuneBreak");
      if (!entry) return computeOffsetTuneBreak(tuneBreakEntry, entries);
      if (entry.kind === "tuneBreak") return computeOffsetTuneBreak(entry, entries);
      if (entry.kind === "response") return computeOffsetResponse(entry, entries);
      if (entry.kind === "state") return computeOffsetState(entry, entries);
      return computeOffsetTuneBreak(tuneBreakEntry, entries);
    }

    function compute() {
      const s1 = state.slots[state.outputIdx];
      const c = ch(s1.char);
      const w = wp(s1.weapon);
      const selectedSk = selectedSkill(s1);
      const sk = resolvedSkill(s1);
      const b = aggregate();
      const es = echoStats(s1);
      const tree = c.base.tree || {};

      const baseAtk = c.base.attack + (w ? num(w.attack90) : 0);
      const atkPct = (tree.attackPct || 0) + b.attackPercent + es.attackPercent;
      const totalAtk = baseAtk * (1 + atkPct / 100) + es.flatAtk + b.attackFlat;
      const totalHp = c.base.hp * (1 + ((tree.hpPct || 0) + b.hpPercent + es.hpPercent) / 100) + es.flatHp;
      const totalDef = c.base.defense * (1 + ((tree.defPct || 0) + b.defensePercent + es.defensePercent) / 100) + es.flatDef;
      const displayAtk = Math.floor(totalAtk);
      const displayHp = Math.floor(totalHp);
      const displayDef = Math.floor(totalDef);
      const critRate = c.base.critRate + (tree.critRate || 0) + b.critRate + es.critRate;
      const critDamage = c.base.critDamage + (tree.critDamage || 0) + b.critDamage + es.critDamage;
      const effect = computeEffect();
      const offset = computeOffset();
      const offsetFinalDmg = offset.kind === "state" && offset.formulaKind === "coherenceInterference" && offset.valid ? offset.finalDmgGain : 0;
      const coherenceBuffFinalDmg = offsetFinalDmg ? appliedCoherenceInterferenceFinalDmg(state.outputIdx) : 0;

      const stat = skillStatKey(sk && sk.stat);
      const statBase = stat === "hp" ? totalHp : stat === "defense" ? totalDef : totalAtk;
      const harmonyBase = Math.max(0, num(state.enemy.harmonyBase, 10027));

      const layers = skillLayersForSlot(s1, sk);
      const levelCategory = (selectedSk && selectedSk.category) || (sk && sk.category);
      const skLevel = skillLevelFor(s1, levelCategory);
      const lvRatio = skillLevelRatio(skLevel);
      const resourceReady = skillResourceReady(s1, selectedSk);
      const resourceBlocked = !!selectedSk && !resourceReady && !sk;
      let perStackBonus = 0;
      state.slots.forEach((slot, idx) => slotBuffs(slot).forEach((buff) => {
        if (buff.perStackBonus && buffStatus(slot, idx, buff).applies) perStackBonus += num(buff.perStackBonus);
      }));
      const stackMult = sk && sk.perStack ? sk.perStack * layers * (1 + perStackBonus / 100) : 0;
      const levelMult = sk ? skillMultValue(sk.multiplier + stackMult, lvRatio) : 0;
      let multAdd = 0;
      state.slots.forEach((slot, idx) => slotBuffs(slot).forEach((buff) => {
        if (!buffStatus(slot, idx, buff).applies) return;
        if (buff.multAdd) multAdd += num(buff.multAdd);
        if (buff.multScaleAdd) multAdd += skillMultValue(levelMult * num(buff.multScaleAdd) / 100, 1);
      }));
      const baseMult = levelMult + multAdd;
      const isHarmonyResponse = sk ? isHarmonyResponseContext({ damageType: sk.damageType, damageTypes: damageTypesForSkill(sk) }) : false;
      const harmony = isHarmonyResponse ? harmonyResponseAggregate(state.outputIdx) : null;
      const normalTotals = offsetFinalDmg ? { ...b, finalDmg: b.finalDmg - coherenceBuffFinalDmg + offsetFinalDmg } : b;
      const formulaTotals = isHarmonyResponse ? { ...b, ...harmony, damageBonus: 0, typeBonus: 0, critRate: 0, critDamage: 0 } : normalTotals;
      const skillMultBonus = formulaTotals.skillMultBonus || 0;
      const skillMult = (baseMult * (1 + skillMultBonus / 100)) / 100;

      const skType = sk ? sk.damageType : null;
      const echoBonus = (tree.elemBonus || 0) + (es.elem[c.element] || 0) + (skType ? es.type[skType] || 0 : 0);
      const bonus = isHarmonyResponse ? 1 : 1 + (b.damageBonus + b.typeBonus + echoBonus) / 100;
      const amplify = isHarmonyResponse ? Math.max(0, 1 + formulaTotals.amplify / 100) : 1 + b.amplify / 100;
      const vuln = isHarmonyResponse
        ? Math.max(0, 1 + formulaTotals.vulnerability / 100)
        : Math.max(0, 1 - state.enemy.dmgReduction / 100 + (state.enemy.vulnerability + b.vulnerability) / 100);

      const effectDefShred = effect.enabled && effect.kind === "defShred" ? effect.defShred : 0;
      const totalDefShred = state.enemy.defShred + formulaTotals.defShred + effectDefShred;
      const totalDefIgnore = state.enemy.defIgnore + formulaTotals.defIgnore;
      const defReduction = Math.min(Math.max(totalDefShred / 100, 0), 0.95);
      const defIgnore = Math.min(Math.max(totalDefIgnore / 100, 0), 0.95);
      const res = state.enemy.res - state.enemy.resShred - formulaTotals.resShred;
      const levelTerm = 800 + 8 * state.enemy.charLevel;
      const enemyDef = (8 * state.enemy.enemyLevel + 792) * (1 - defReduction);
      const defFactor = levelTerm / (levelTerm + enemyDef * (1 - defIgnore));
      const resFactor = resistanceFactor(res);

      const cr = isHarmonyResponse ? 0 : Math.min(Math.max(critRate / 100, 0), 1);
      const cd = isHarmonyResponse ? 1 : Math.max(critDamage / 100, 1);
      const finalDmg = isHarmonyResponse ? Math.max(0, 1 + formulaTotals.finalDmg / 100) : 1 + (state.enemy.finalDmg + formulaTotals.finalDmg) / 100;
      const breakAmp = isHarmonyResponse ? formulaTotals.breakAmp : 0;
      const breakAmpFactor = isHarmonyResponse ? Math.max(0, 1 + breakAmp / 100) : 1;
      const formulaBase = isHarmonyResponse ? harmonyBase : statBase;
      const damageScalar = formulaBase * bonus * amplify * vuln * breakAmpFactor * defFactor * resFactor * finalDmg * (1 + skillMultBonus / 100) / 100;
      const base = damageScalar * baseMult;
      const normal = Math.floor(base);
      const critHit = Math.floor(base * cd);
      const expected = Math.floor(base * (cr * cd + (1 - cr)));

      return {
        panel: { stat, totalAtk, totalHp, totalDef, displayAtk, displayHp, displayDef, critRate, critDamage, baseMult, skillMult },
        totals: formulaTotals, rawTotals: b, offsetFinalDmg, coherenceBuffFinalDmg, es, defFactor, resFactor, bonus, amplify, vuln, finalDmg, cr, cd,
        defense: {
          manualDefShred: state.enemy.defShred,
          buffDefShred: formulaTotals.defShred,
          effectDefShred,
          totalDefShred,
          manualDefIgnore: state.enemy.defIgnore,
          buffDefIgnore: formulaTotals.defIgnore,
          totalDefIgnore,
        },
        damageModel: isHarmonyResponse ? "harmonyResponse" : "normal", breakAmp, breakAmpFactor, harmonyBase,
        normal, expected, critHit, sk, selectedSk, layers, skLevel, perStackBonus, multAdd, resourceReady, resourceBlocked, damageScalar, effect, offset,
      };
    }

    function skillDefaultLayers(slot, sk) {
      if (!sk) return 0;
      if (sk.stackResource) {
        const value = characterResourceValue(slot, sk.stackResource);
        if (value != null) return value;
      }
      let layers = sk.defaultLayers ?? sk.stackMax ?? 0;
      asList(sk.defaultLayersBySeq).forEach((rule) => {
        if (num(slot.seq) >= num(rule.seq)) layers = rule.layers;
      });
      return layers;
    }

    function skillLayersForSlot(slot, sk) {
      if (!sk) return 0;
      if (sk.stackResource) return skillDefaultLayers(slot, sk);
      return slot.layers == null ? skillDefaultLayers(slot, sk) : slot.layers;
    }

    return {
      slotBuffs, availableSkills, selectedSkill, resourceKey, resourceControlsForSlot, skillResourceReady, resolvedSkill,
      stateKey, stateChoiceKey, isIntroSkill, introEntryReady, introEntryRelevantForSlot, stateControlsHTML,
      buffStackCount, buffStatus, setBuffToggle, scaleByInfo, buffValue, compute,
    };
  }

  return { create };
})();
