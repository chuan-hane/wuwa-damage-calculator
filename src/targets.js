"use strict";

window.WUWA_TARGETS = (() => {
  const DATA = window.WUWA_TARGET_DATA || { elements: [], modes: {}, gameplayBuffs: {}, targets: {}, snapshot: {} };
  const L = window.WUWA_LANGUAGES;
  const MODE_ORDER = ["openWorld", "toa", "whiwa", "dpmatrix"];
  const GAMEPLAY_ZONES = [
    "attackPercent", "attackFlat", "hpPercent", "defensePercent", "critRate", "critDamage",
    "damageBonus", "typeBonus", "skillMultBonus", "amplify", "vulnerability", "finalDmg",
    "resShred", "defShred", "defIgnore", "breakAmp",
  ];

  function elements() {
    return Array.isArray(DATA.elements) ? DATA.elements : [];
  }

  function resistanceArray(value = 0) {
    return Object.fromEntries(elements().map((element) => [element, Number(value)]));
  }

  function modeData(mode) {
    return DATA.modes?.[mode] || null;
  }

  function seasons(mode) {
    return Array.isArray(modeData(mode)?.seasons) ? modeData(mode).seasons : [];
  }

  function season(mode, seasonId) {
    return seasons(mode).find((item) => String(item.id) === String(seasonId)) || null;
  }

  function currentSeasonId(mode) {
    const source = modeData(mode);
    if (!source) return null;
    return String(source.currentSeasonId ?? source.seasons?.find((item) => item.current)?.id ?? "");
  }

  function target(targetId) {
    return DATA.targets?.[targetId] || null;
  }

  function openWorldAttribute(item) {
    const deviations = elements().map((element, index) => ({ element, index, value: Number(item?.resistances?.[element]) || 0 }))
      .filter((entry) => entry.value !== 10);
    if (!deviations.length) return { key: "none", element: null, order: -1 };
    if (deviations.length !== 1 || deviations[0].value !== 40) return null;
    return { key: deviations[0].element, element: deviations[0].element, order: deviations[0].index };
  }

  function openWorldAttributeName(item) {
    const attribute = openWorldAttribute(item);
    if (!attribute) return "";
    return attribute.element ? L.element(attribute.element) : L.t("targets.attributeNone");
  }

  function openWorldTargets(items) {
    const attributes = new Map();
    items.forEach((item) => {
      const attribute = openWorldAttribute(item);
      if (attribute && !attributes.has(attribute.key)) attributes.set(attribute.key, item);
    });
    return Array.from(attributes.values()).sort((a, b) => openWorldAttribute(a).order - openWorldAttribute(b).order);
  }

  function targetsFor(mode, seasonId) {
    const selectedSeason = season(mode, seasonId);
    const items = (selectedSeason?.targetIds || []).map(target).filter(Boolean);
    if (mode !== "openWorld") return items;
    return openWorldTargets(items);
  }

  function clearOverrides(enemy) {
    enemy.targetLevelOverride = null;
    enemy.targetResistanceOverrides = {};
  }

  function ensureGameplayState(enemy) {
    if (!enemy.targetBuffValues || typeof enemy.targetBuffValues !== "object") enemy.targetBuffValues = {};
    if (!enemy.targetBuffChoices || typeof enemy.targetBuffChoices !== "object") enemy.targetBuffChoices = {};
  }

  function ensureSelection(enemy) {
    if (!enemy || typeof enemy !== "object") return null;
    if (!modeData(enemy.targetMode)) enemy.targetMode = MODE_ORDER.find(modeData) || null;
    const mode = enemy.targetMode;
    if (!mode) return null;
    if (!season(mode, enemy.targetSeasonId)) enemy.targetSeasonId = currentSeasonId(mode);
    const candidates = targetsFor(mode, enemy.targetSeasonId);
    if (!candidates.some((item) => item.id === enemy.targetId)) enemy.targetId = candidates[0]?.id || null;
    if (!enemy.targetResistanceOverrides || typeof enemy.targetResistanceOverrides !== "object") enemy.targetResistanceOverrides = {};
    ensureGameplayState(enemy);
    return target(enemy.targetId);
  }

  function selectMode(enemy, mode) {
    if (!modeData(mode)) return;
    enemy.targetMode = mode;
    enemy.targetSeasonId = currentSeasonId(mode);
    enemy.targetId = targetsFor(mode, enemy.targetSeasonId)[0]?.id || null;
    clearOverrides(enemy);
  }

  function selectSeason(enemy, seasonId) {
    if (!season(enemy.targetMode, seasonId)) return;
    enemy.targetSeasonId = String(seasonId);
    enemy.targetId = targetsFor(enemy.targetMode, enemy.targetSeasonId)[0]?.id || null;
    clearOverrides(enemy);
  }

  function selectTarget(enemy, targetId) {
    const next = target(targetId);
    if (!next || next.mode !== enemy.targetMode || String(next.seasonId) !== String(enemy.targetSeasonId)) return;
    let selected = next;
    if (next.mode === "openWorld") {
      const attribute = openWorldAttribute(next);
      if (!attribute) return;
      selected = targetsFor(next.mode, next.seasonId).find((item) => openWorldAttribute(item)?.key === attribute.key);
      if (!selected) return;
    }
    enemy.targetId = selected.id;
    clearOverrides(enemy);
  }

  function localeEntry(group, id) {
    return L.localeData(L.current(), group, id) || L.localeData("zh-CN", group, id) || null;
  }

  function gameplayBuff(id) {
    return DATA.gameplayBuffs?.[id] || null;
  }

  function gameplayBuffName(buff) {
    return localeEntry("targetBuffs", buff?.id)?.name || buff?.id || "";
  }

  function gameplayBuffDescription(buff) {
    return localeEntry("targetBuffs", buff?.id)?.desc || "";
  }

  function modeName(mode) {
    return localeEntry("targetModes", mode)?.name || mode;
  }

  function seasonName(mode, seasonId) {
    if (mode === "openWorld") return modeName(mode);
    return localeEntry("targetSeasons", mode + ":" + seasonId)?.name || L.t("targets.seasonFallback", { value: seasonId });
  }

  function areaName(item) {
    if (!item) return "";
    const key = item.mode === "openWorld"
      ? "openWorld:rarity:" + item.areaId
      : item.mode + ":" + item.seasonId + ":" + item.areaId;
    return localeEntry("targetAreas", key)?.name || String(item.areaId);
  }

  function stageName(item) {
    if (!item) return "";
    if (item.mode === "whiwa") {
      const title = localeEntry("targetStages", "whiwa:" + item.seasonId + ":" + item.stageId)?.name || String(item.stageId);
      const floor = Number(item.stageOrder) === 12
        ? L.t("targets.endlessFloor")
        : L.t("targets.floor", { value: item.stageOrder });
      return floor + " · " + title;
    }
    if (item.mode === "toa") return L.t("targets.floor", { value: item.stageId });
    if (item.mode === "dpmatrix") return L.t("targets.wave", { value: item.stageId });
    return "";
  }

  function waveName(item) {
    if (!item || item.mode === "openWorld" || item.mode === "toa" || item.mode === "dpmatrix" || item.waveId == null) return "";
    return L.t("targets.wave", { value: item.waveId });
  }

  function targetName(item) {
    if (item?.mode === "openWorld") return openWorldAttributeName(item);
    return localeEntry("targetNames", item?.nameId)?.name || String(item?.monsterId || "");
  }

  function targetPathId(item) {
    if (!item || item.mode === "openWorld") return "";
    const parts = [item.mode, item.seasonId];
    if (item.mode !== "dpmatrix") parts.push(item.areaId);
    parts.push(item.stageId);
    return parts.join(":");
  }

  function targetPathName(item) {
    if (!item || item.mode === "openWorld") return "";
    if (item.mode === "dpmatrix") return stageName(item);
    if (item.mode === "whiwa") return [stageName(item), areaName(item)].filter(Boolean).join(" · ");
    return [areaName(item), stageName(item)].filter(Boolean).join(" → ");
  }

  function targetPathLabel(mode) {
    if (mode === "toa") return L.t("targets.towerFloor");
    if (mode === "whiwa") return L.t("targets.floorLabel");
    if (mode === "dpmatrix") return L.t("targets.waveLabel");
    return "";
  }

  function targetOptionName(item) {
    if (item?.mode === "openWorld") return openWorldAttributeName(item);
    const element = item.element ? L.element(item.element) : "";
    return [targetName(item), element].filter(Boolean).join(" · ");
  }

  function gameplayData(item) {
    return item?.gameplay || { fixedIds: [], controlIds: [], choiceGroups: [] };
  }

  function choiceValue(enemy, group) {
    ensureGameplayState(enemy);
    const stored = enemy.targetBuffChoices[group.id];
    if (group.optionIds.includes(stored)) return stored;
    return group.defaultOptionId || "";
  }

  function setGameplayChoice(enemy, groupId, value) {
    ensureGameplayState(enemy);
    const selected = target(enemy.targetId);
    const group = gameplayData(selected).choiceGroups.find((item) => item.id === groupId);
    if (!group || (value && !group.optionIds.includes(value))) return;
    enemy.targetBuffChoices[groupId] = value || "";
  }

  function controlValue(enemy, buff) {
    ensureGameplayState(enemy);
    const stored = enemy.targetBuffValues[buff.id];
    if (buff.control === "toggle") return stored === true;
    if (buff.control !== "range") return null;
    const value = Number(stored ?? buff.defaultValue ?? buff.min ?? 0);
    return Math.min(Math.max(value, Number(buff.min)), Number(buff.max));
  }

  function setGameplayValue(enemy, buffId, value) {
    ensureGameplayState(enemy);
    const buff = gameplayBuff(buffId);
    if (!buff || !["toggle", "range"].includes(buff.control)) return;
    if (buff.control === "toggle") {
      enemy.targetBuffValues[buff.id] = value === true;
      return;
    }
    const number = Number(value);
    if (!Number.isFinite(number)) return;
    const step = Number(buff.step) || 1;
    const stepped = Math.round(number / step) * step;
    enemy.targetBuffValues[buff.id] = Math.min(Math.max(stepped, Number(buff.min)), Number(buff.max));
  }

  function optionActive(enemy, item, buffId) {
    return gameplayData(item).choiceGroups.some((group) => group.optionIds.includes(buffId) && choiceValue(enemy, group) === buffId);
  }

  function buffActive(enemy, item, buff) {
    if (!buff) return false;
    if (buff.parentId) return optionActive(enemy, item, buff.parentId) && controlValue(enemy, buff) === true;
    if (buff.control === "fixed") return gameplayData(item).fixedIds.includes(buff.id);
    if (buff.control === "option") return optionActive(enemy, item, buff.id);
    if (buff.control === "toggle") return gameplayData(item).controlIds.includes(buff.id) && controlValue(enemy, buff) === true;
    if (buff.control === "range") return gameplayData(item).controlIds.includes(buff.id) && controlValue(enemy, buff) !== 0;
    return false;
  }

  function effectMatches(effect, context) {
    if (effect.modes && !effect.modes.includes(context.resultMode)) return false;
    if (effect.element && effect.element !== context.damageElement) return false;
    if (effect.effect && effect.effect !== context.effectKey) return false;
    if (!effect.damageTypes) return true;
    const current = new Set(context.damageTypes || []);
    return effect.damageTypes.some((type) => current.has(type));
  }

  function effectValue(effect, buff, enemy) {
    if (effect.controlValue) return Number(controlValue(enemy, buff)) || 0;
    if (effect.controlMultiplier) return (Number(controlValue(enemy, buff)) || 0) * Number(effect.value);
    return Number(effect.value) || 0;
  }

  function allGameplayBuffs(item) {
    const data = gameplayData(item);
    const direct = [...data.fixedIds, ...data.controlIds, ...data.choiceGroups.flatMap((group) => group.optionIds)];
    const parents = new Set(data.choiceGroups.flatMap((group) => group.optionIds));
    const children = Object.values(DATA.gameplayBuffs || {}).filter((buff) => parents.has(buff.parentId)).map((buff) => buff.id);
    return [...new Set([...direct, ...children])].map(gameplayBuff).filter(Boolean);
  }

  function activeGameplayEffects(enemy, context = {}) {
    const item = target(enemy.targetId);
    if (!item) return [];
    return allGameplayBuffs(item).flatMap((buff) => {
      if (!buffActive(enemy, item, buff)) return [];
      return (buff.effects || []).filter((effect) => effect.zone === "resistance" || effectMatches(effect, context)).map((effect) => ({
        ...effect,
        buff,
        value: effectValue(effect, buff, enemy),
      }));
    });
  }

  function gameplayAggregate(enemy, context = {}) {
    const totals = Object.fromEntries(GAMEPLAY_ZONES.map((zone) => [zone, 0]));
    totals.sources = {};
    activeGameplayEffects(enemy, context).forEach((effect) => {
      if (!(effect.zone in totals)) return;
      totals[effect.zone] += effect.value;
      if (!totals.sources[effect.zone]) totals.sources[effect.zone] = [];
      totals.sources[effect.zone].push({
        source: L.t("targets.gameplayBuffSource"),
        label: gameplayBuffName(effect.buff),
        zone: effect.zone,
        value: effect.value,
        suffix: "%",
        signed: true,
      });
    });
    return totals;
  }

  function resistanceAdjustments(enemy) {
    return activeGameplayEffects(enemy).filter((effect) => effect.zone === "resistance");
  }

  function gameplayControls(enemy) {
    const item = target(enemy.targetId);
    const data = gameplayData(item);
    const groups = data.choiceGroups.map((group) => ({
      ...group,
      value: choiceValue(enemy, group),
      options: group.optionIds.map(gameplayBuff).filter(Boolean),
    }));
    const fixed = data.fixedIds.map(gameplayBuff).filter(Boolean);
    const controls = data.controlIds.map(gameplayBuff).filter(Boolean);
    const selectedParents = new Set(groups.map((group) => group.value).filter(Boolean));
    const children = Object.values(DATA.gameplayBuffs || {}).filter((buff) => selectedParents.has(buff.parentId));
    return { groups, fixed, controls: [...controls, ...children] };
  }

  function fallbackContext(enemy, damageElement) {
    const value = Number(enemy?.res);
    const resistance = Number.isFinite(value) ? value : 10;
    const enemyLevel = Number(enemy?.enemyLevel);
    return {
      automatic: false,
      target: null,
      name: L.t("common.custom"),
      enemyLevel: Number.isFinite(enemyLevel) ? enemyLevel : 90,
      automaticLevel: null,
      resistances: resistanceArray(resistance),
      automaticResistances: null,
      damageElement,
      resistance,
      overrideActive: false,
    };
  }

  function context(enemy, damageElement) {
    const selected = ensureSelection(enemy);
    if (!selected) return fallbackContext(enemy, damageElement);
    const automaticResistances = { ...selected.resistances };
    const gameplayResistance = resistanceAdjustments(enemy);
    gameplayResistance.forEach((effect) => {
      const targetElements = effect.elements === "all" ? elements() : effect.elements || [];
      targetElements.forEach((element) => { automaticResistances[element] = Number(automaticResistances[element]) + effect.value; });
    });
    const levelOverride = Number(enemy.targetLevelOverride);
    const enemyLevel = enemy.targetLevelOverride != null && Number.isFinite(levelOverride) ? levelOverride : Number(selected.level);
    const resistances = {};
    elements().forEach((element) => {
      const override = Number(enemy.targetResistanceOverrides?.[element]);
      const hasOverride = enemy.targetResistanceOverrides?.[element] != null && Number.isFinite(override);
      resistances[element] = hasOverride ? override : Number(automaticResistances[element]) || 0;
    });
    const resistance = Number(resistances[damageElement]);
    return {
      automatic: true,
      target: selected,
      name: targetName(selected),
      enemyLevel,
      automaticLevel: selected.level,
      resistances,
      automaticResistances,
      damageElement,
      resistance: Number.isFinite(resistance) ? resistance : 0,
      overrideActive: enemy.targetLevelOverride != null || Object.values(enemy.targetResistanceOverrides || {}).some((value) => value != null),
    };
  }

  function sortedSeasons(mode) {
    return seasons(mode).slice().sort((a, b) => {
      if (a.current !== b.current) return a.current ? -1 : 1;
      return Number(b.id) - Number(a.id);
    });
  }

  function targetPaths(mode, seasonId) {
    if (mode === "openWorld") return [];
    const paths = new Map();
    targetsFor(mode, seasonId).forEach((item) => {
      const id = targetPathId(item);
      if (!paths.has(id)) paths.set(id, { id, label: targetPathName(item), items: [] });
      paths.get(id).items.push(item);
    });
    return Array.from(paths.values());
  }

  function selectedPathId(enemy) {
    return targetPathId(target(enemy?.targetId));
  }

  function selectPath(enemy, pathId) {
    const next = targetsFor(enemy.targetMode, enemy.targetSeasonId).find((item) => targetPathId(item) === pathId);
    if (!next) return;
    enemy.targetId = next.id;
    clearOverrides(enemy);
  }

  function targetGroupName(item, pathId) {
    if (item.mode === "openWorld") return "";
    if (!pathId) return targetPathName(item);
    if (item.mode === "whiwa") return waveName(item);
    return "";
  }

  function groupedTargets(mode, seasonId, pathId = "") {
    const groups = new Map();
    targetsFor(mode, seasonId).forEach((item) => {
      if (pathId && targetPathId(item) !== pathId) return;
      const label = targetGroupName(item, pathId);
      if (!groups.has(label)) groups.set(label, []);
      groups.get(label).push(item);
    });
    return Array.from(groups, ([label, items]) => ({
      label,
      items: items.slice().sort((a, b) => {
        if (mode !== "openWorld") return Number(a.waveId) - Number(b.waveId) || targetOptionName(a).localeCompare(targetOptionName(b), L.compareLocale());
        return openWorldAttribute(a).order - openWorldAttribute(b).order;
      }),
    }));
  }

  function syncedDate() {
    const fallback = String(DATA.snapshot?.syncedAt || "").slice(0, 10);
    const date = new Date(DATA.snapshot?.syncedAt);
    if (Number.isNaN(date.getTime())) return fallback;
    return new Intl.DateTimeFormat(L.current(), { dateStyle: "medium" }).format(date);
  }

  return {
    data: DATA,
    modeOrder: MODE_ORDER,
    elements,
    modeData,
    seasons,
    sortedSeasons,
    currentSeasonId,
    targetsFor,
    targetPaths,
    selectedPathId,
    groupedTargets,
    target,
    ensureSelection,
    clearOverrides,
    selectMode,
    selectSeason,
    selectPath,
    selectTarget,
    context,
    modeName,
    seasonName,
    areaName,
    stageName,
    waveName,
    targetName,
    targetPathLabel,
    targetPathName,
    targetOptionName,
    gameplayBuff,
    gameplayBuffName,
    gameplayBuffDescription,
    gameplayControls,
    setGameplayChoice,
    setGameplayValue,
    controlValue,
    gameplayAggregate,
    syncedDate,
  };
})();
