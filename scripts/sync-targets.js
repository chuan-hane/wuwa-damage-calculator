"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const API_BASE = String(process.env.WUWA_TARGET_API_BASE || "").replace(/\/+$/, "");
const API_SCHEMA_URL = String(process.env.WUWA_TARGET_API_SCHEMA_URL || "");
const LANGUAGES = {
  "zh-CN": "zh-Hans",
  "en-US": "en",
  "ja-JP": "ja",
  ko: "ko",
};
const ELEMENTS = ["glacio", "fusion", "electro", "aero", "spectro", "havoc"];
const ELEMENT_BY_ID = {
  1: "glacio",
  2: "fusion",
  3: "electro",
  4: "aero",
  5: "spectro",
  6: "havoc",
};
const RESISTANCE_KEYS = {
  glacio: "DamageResistanceElement1",
  fusion: "DamageResistanceElement2",
  electro: "DamageResistanceElement3",
  aero: "DamageResistanceElement4",
  spectro: "DamageResistanceElement5",
  havoc: "DamageResistanceElement6",
};
const MODE_IDS = ["openWorld", "toa", "whiwa", "dpmatrix"];
const TOA_INCLUDED_AREAS = new Map([[1, new Set([4])], [2, new Set([1, 2, 3, 4])], [3, new Set([4])]]);
const WHIWA_INCLUDED_ORDER = new Set([9, 10, 11, 12]);
const WHIWA_LEVEL_BY_ORDER = { 9: 90, 10: 90, 11: 90, 12: 100 };
const WHIWA_TOKEN_QUALITY_IDS = new Set([4, 5]);
const WHIWA_PERSISTENT_PURPLE_TOKEN_IDS = [71500011, 71501001, 71501002, 71501003, 71501004];
const WHIWA_CURRENT_REWARD_TOKEN_IDS = [71500090, 71500091, 71500092, 71500093];
const MODE_RULES = {
  whiwa: { all: 10 },
  dpmatrix: { all: 20, matchingElement: 20 },
};
const RESISTANCE_ELEMENT_TOKENS = {
  glacio: ["冷凝", "Glacio", "凝縮", "응결"],
  fusion: ["热熔", "Fusion", "焦熱", "용융"],
  electro: ["导电", "Electro", "電導", "전도"],
  aero: ["气动", "Aero", "気動", "기류"],
  spectro: ["衍射", "Spectro", "回折", "회절"],
  havoc: ["湮灭", "Havoc", "消滅", "인멸"],
};
const MODE_NAMES = {
  "zh-CN": { openWorld: "大世界", toa: "逆境深塔", whiwa: "冥歌海墟", dpmatrix: "终焉矩阵·奇点扩张" },
  "en-US": { openWorld: "Open World", toa: "Tower of Adversity", whiwa: "Whimpering Wastes", dpmatrix: "Endstate Matrix: Singularity Expansion" },
  "ja-JP": { openWorld: "オープンワールド", toa: "逆境深塔", whiwa: "死の歌が纏う海の廃墟", dpmatrix: "終焉マトリクス・奇点拡張" },
  ko: { openWorld: "오픈 월드", toa: "역경의 탑", whiwa: "죽음의 노래와 바닷속 폐허", dpmatrix: "종말 매트릭스 · 특이점 확장" },
};

const CONDITIONAL_RESISTANCE_SCHEMAS = {
  92008095: { value: 40, perLayer: 8, maxLayers: 5, suffix: "resistance-layers" },
  92008113: { value: 15, suffix: "resistance-removed" },
  92008120: { value: 15, suffix: "resistance-removed" },
  92008132: { value: 15, suffix: "resistance-removed" },
  92008151: { value: 15, suffix: "resistance-removed" },
  92008180: { value: 15, suffix: "resistance-removed" },
};

const TOA_GAMEPLAY_SCHEMAS = {
  92008030: [
    { suffix: "intro-atk", control: "toggle", clause: 0, effects: [{ zone: "attackPercent", value: 20, modes: ["skill"] }] },
    { suffix: "skill-liberation", control: "toggle", clause: -1, effects: [{ zone: "typeBonus", value: 30, damageTypes: ["resonanceLiberation"], modes: ["skill"] }] },
  ],
  92008110: [
    { suffix: "def-ignore", control: "fixed", clause: 0, effects: [{ zone: "defIgnore", value: 25, modes: ["skill", "effect"] }] },
    { suffix: "negative-status", control: "toggle", clause: -1, effects: [{ zone: "vulnerability", value: 20, modes: ["skill"] }] },
  ],
  920081671: [
    { suffix: "time-ramp", control: "range", clause: 0, min: 0, max: 60, step: 5, defaultValue: 0, effects: [{ zone: "finalDmg", controlValue: true, modes: ["skill"] }] },
  ],
  92008174: [
    { suffix: "fixed", control: "fixed", clause: 0, effects: [
      { zone: "finalDmg", value: 15, modes: ["skill"] },
      { zone: "finalDmg", value: 20, element: "glacio", modes: ["skill"] },
      { zone: "finalDmg", value: 80, effect: "frost", modes: ["effect"] },
    ] },
    { suffix: "hack-shifting", control: "toggle", clause: -1, effects: [{ zone: "finalDmg", value: 50, modes: ["skill"] }] },
  ],
  92008180: [],
  92008182: [
    { suffix: "crit-dmg", control: "fixed", clause: 0, effects: [{ zone: "critDamage", value: 25, modes: ["skill"] }] },
    { suffix: "intro-basic-heavy", control: "toggle", clause: -1, effects: [
      { zone: "typeBonus", value: 40, damageTypes: ["basic"], modes: ["skill"] },
      { zone: "typeBonus", value: 40, damageTypes: ["heavy"], modes: ["skill"] },
    ] },
  ],
};

const WHIWA_TOKEN_SCHEMAS = {
  71500011: { qualityId: 4, effects: [] },
  71501001: { qualityId: 4, effects: [
    { zone: "finalDmg", value: 15, modes: ["skill"] },
    { zone: "vulnerability", value: 50, damageTypes: ["tuneRupture", "tuneRuptureDmg"], modes: ["offset"] },
  ] },
  71501002: { qualityId: 4, effects: [{ zone: "finalDmg", value: 15, modes: ["skill"] }], children: [
    { suffix: "concentrated-harmony", control: "toggle", clause: -1, dropLeadingCommaClause: true, effects: [{ zone: "finalDmg", value: 15, modes: ["skill"] }] },
  ] },
  71501003: { qualityId: 4, effects: [
    { zone: "finalDmg", value: 15, modes: ["skill"] },
    { zone: "finalDmg", value: 25, damageTypes: ["echoSkill"], modes: ["skill"] },
  ] },
  71501004: { qualityId: 4, effects: [{ zone: "finalDmg", value: 15, modes: ["skill"] }], children: [
    { suffix: "negative-status", control: "toggle", clause: -1, dropLeadingCommaClause: true, effects: [{ zone: "finalDmg", value: 15, modes: ["skill"] }] },
  ] },
  71500090: { qualityId: 4, effects: [{ zone: "amplify", value: 25, modes: ["skill"] }] },
  71500091: { qualityId: 5, effects: [], children: [
    { suffix: "havoc-bane", control: "toggle", clause: 0, effects: [{ zone: "finalDmg", value: 60, modes: ["skill"] }] },
  ] },
  71500092: { qualityId: 5, effects: [{ zone: "finalDmg", value: 50, effect: "frost", modes: ["effect"] }], children: [
    { suffix: "glacio-chafe", control: "toggle", clause: -1, effects: [{ zone: "finalDmg", value: 50, element: "glacio", modes: ["skill"] }] },
  ] },
  71500093: { qualityId: 5, effects: [
    { zone: "finalDmg", value: 20, element: "spectro", modes: ["skill"] },
    { zone: "finalDmg", value: 40, damageTypes: ["heavy"], modes: ["skill"] },
    { zone: "finalDmg", value: 40, damageTypes: ["basic"], modes: ["skill"] },
  ] },
};

const MATRIX_BUFF_SCHEMAS = {
  26: { effects: [], children: [
    { suffix: "negative-status", control: "toggle", clause: 0, effects: [{ zone: "finalDmg", value: 25, modes: ["skill"] }] },
    { suffix: "havoc-bane", control: "toggle", clause: -1, effects: [{ zone: "finalDmg", value: 30, modes: ["skill"] }] },
  ] },
  27: { effects: [
    { zone: "finalDmg", value: 30, damageTypes: ["echoSkill"], modes: ["skill"] },
    { zone: "finalDmg", value: 20, element: "fusion", modes: ["skill"] },
    { zone: "finalDmg", value: 20, damageTypes: ["heavy"], modes: ["skill"] },
  ] },
  28: { effects: [{ zone: "finalDmg", value: 150, damageTypes: ["tuneRupture", "tuneRuptureDmg"], modes: ["offset"] }], children: [
    { suffix: "tune-shifting", control: "toggle", clause: -1, effects: [{ zone: "finalDmg", value: 25, modes: ["skill"] }] },
  ] },
  29: { effects: [
    { zone: "finalDmg", value: 20, modes: ["skill"] },
    { zone: "finalDmg", value: 20, damageTypes: ["resonanceSkill"], modes: ["skill"] },
  ] },
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function cleanText(value) {
  return String(value || "").replace(/<br\s*\/?\s*>/gi, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function textClauses(value) {
  return String(value || "")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .split(/\n+|[。；;]|[.](?:\s+|$)/)
    .map(cleanText)
    .filter(Boolean);
}

function toaRecordIncluded(record) {
  return TOA_INCLUDED_AREAS.get(Number(record?.areaNum))?.has(Number(record?.floor)) === true;
}

function matrixVisibleWaves(level) {
  return asArray(level?.Waves).filter((wave) => wave.IsShowInView === true);
}

function matrixSingularityLevel(payload) {
  const matches = asArray(payload?.Levels).filter((level) => {
    const rounds = new Set(matrixVisibleWaves(level).map((wave) => Number(wave.Round)));
    return Number(level.MaxLoopCount) > 0 && rounds.size >= 3;
  });
  assert(matches.length === 1, "dpmatrix " + payload?.Season + ": expected exactly one Singularity Expansion level");
  return matches[0];
}

function gameplayId(mode, seasonId, sourceId, suffix) {
  return targetId([mode, seasonId, sourceId, suffix]);
}

function registerGameplayBuff(gameplayBuffs, definition) {
  const existing = gameplayBuffs[definition.id];
  if (existing) {
    assert(JSON.stringify(existing) === JSON.stringify(definition), "conflicting gameplay buff " + definition.id);
    return definition.id;
  }
  gameplayBuffs[definition.id] = definition;
  return definition.id;
}

function gameplayRefs(fixedIds = [], controlIds = [], choiceGroups = []) {
  return { fixedIds: uniqueIds(fixedIds), controlIds: uniqueIds(controlIds), choiceGroups };
}

function definitionFromSchema({ mode, seasonId, sourceId, suffix, schema, localeRef, parentId = null, control = null }) {
  const definition = {
    id: gameplayId(mode, seasonId, sourceId, suffix),
    mode,
    control: control || schema.control || "fixed",
    effects: schema.effects || [],
    localeRef,
  };
  if (parentId) definition.parentId = parentId;
  for (const key of ["min", "max", "step", "defaultValue", "qualityId"]) {
    if (schema[key] != null) definition[key] = schema[key];
  }
  return definition;
}

function elementFromApi(value) {
  return ELEMENT_BY_ID[Number(value)] || null;
}

function resistanceArray(value = 0) {
  return Object.fromEntries(ELEMENTS.map((element) => [element, Number(value)]));
}

function validateResistance(resistances, label) {
  ELEMENTS.forEach((element) => {
    assert(Number.isFinite(resistances[element]), label + ": missing " + element + " resistance");
  });
  return resistances;
}

function normalizeMonsterResistance(monster) {
  const props = monster && monster.Properties;
  assert(props && typeof props === "object", "monster " + monster?.Id + ": missing Properties");
  const result = {};
  ELEMENTS.forEach((element) => {
    const property = props[RESISTANCE_KEYS[element]];
    assert(property && Number.isFinite(Number(property.Value)), "monster " + monster.Id + ": missing " + RESISTANCE_KEYS[element]);
    result[element] = Number(property.Value) / 100;
  });
  return validateResistance(result, "monster " + monster.Id);
}

function hasMonsterResistance(monster) {
  const props = monster && monster.Properties;
  if (!props || typeof props !== "object") return false;
  return ELEMENTS.every((element) => Number.isFinite(Number(props[RESISTANCE_KEYS[element]]?.Value)));
}

function propsMap(properties) {
  return new Map(asArray(properties).map((property) => [property.key, property]));
}

function toaFinalResistance(monster, label) {
  const map = propsMap(monster.whiteGreenProps);
  const result = {};
  ELEMENTS.forEach((element) => {
    const property = map.get(RESISTANCE_KEYS[element]);
    assert(property && property.isPercent === true, label + ": resistance is not a percent");
    assert(Number.isFinite(Number(property.value)), label + ": missing " + RESISTANCE_KEYS[element]);
    result[element] = Number(property.value);
  });
  return validateResistance(result, label);
}

function toaMonsterLevel(monster, label) {
  const property = propsMap(monster.whiteGreenProps).get("Lv");
  assert(property && Number.isFinite(Number(property.value)), label + ": missing Lv");
  return Number(property.value);
}

function toaSeasonCoverage(payload) {
  const records = collectToaRecords(payload).filter(toaRecordIncluded);
  const monsters = records.flatMap((record) => asArray(record.monsters));
  const withLevel = monsters.filter((monster) => propsMap(monster.whiteGreenProps).has("Lv")).length;
  const withResistance = monsters.filter((monster) => {
    const map = propsMap(monster.whiteGreenProps);
    return ELEMENTS.every((element) => map.get(RESISTANCE_KEYS[element])?.isPercent === true);
  }).length;
  return {
    records: records.length,
    monsters: monsters.length,
    withLevel,
    withResistance,
    complete: records.length > 0 && withLevel === monsters.length && withResistance === monsters.length,
  };
}

function collectToaRecords(value, output = []) {
  if (!value || typeof value !== "object") return output;
  if (Array.isArray(value)) {
    value.forEach((item) => collectToaRecords(item, output));
    return output;
  }
  if (Array.isArray(value.monsters) && value.season != null) {
    output.push(value);
    return output;
  }
  Object.values(value).forEach((item) => collectToaRecords(item, output));
  return output;
}

function targetId(parts) {
  return parts.map((part) => String(part)).join(":");
}

function targetNameId(monsterId) {
  return "monster:" + monsterId;
}

function matrixNameId(monsterId) {
  return "matrix:" + monsterId;
}

function addTarget(targets, target) {
  const existing = targets[target.id];
  if (existing) {
    assert(JSON.stringify(existing) === JSON.stringify(target), "conflicting target id " + target.id);
    return target.id;
  }
  targets[target.id] = target;
  return target.id;
}

function uniqueIds(ids) {
  return Array.from(new Set(ids));
}

function conditionalResistanceDefinition(buff, seasonId, recordId) {
  const schema = CONDITIONAL_RESISTANCE_SCHEMAS[Number(buff.id)];
  if (!schema) return null;
  const range = schema.maxLayers
    ? {
        control: "range",
        min: 0,
        max: schema.maxLayers,
        step: 1,
        defaultValue: 0,
        effects: [{ zone: "resistance", value: -schema.perLayer, controlMultiplier: true, elements: "all" }],
      }
    : {
        control: "toggle",
        effects: [{ zone: "resistance", value: -schema.value, elements: "all" }],
      };
  return definitionFromSchema({
    mode: "toa",
    seasonId,
    sourceId: targetId([recordId, buff.id]),
    suffix: schema.suffix,
    schema: range,
    localeRef: { kind: "toaBuff", seasonId: String(seasonId), recordId: Number(recordId), buffId: Number(buff.id), clause: -1 },
  });
}

function toaGameplay(record, seasonId, gameplayBuffs) {
  const fixedIds = [];
  const controlIds = [];
  asArray(record.buffs).forEach((buff) => {
    const resistanceDefinition = conditionalResistanceDefinition(buff, seasonId, record.id);
    if (resistanceDefinition) {
      controlIds.push(registerGameplayBuff(gameplayBuffs, resistanceDefinition));
      return;
    }
    asArray(TOA_GAMEPLAY_SCHEMAS[Number(buff.id)]).forEach((schema) => {
      const definition = definitionFromSchema({
        mode: "toa",
        seasonId,
        sourceId: targetId([record.id, buff.id]),
        suffix: schema.suffix,
        schema,
        localeRef: { kind: "toaBuff", seasonId: String(seasonId), recordId: Number(record.id), buffId: Number(buff.id), clause: schema.clause },
      });
      const id = registerGameplayBuff(gameplayBuffs, definition);
      if (definition.control === "fixed") fixedIds.push(id);
      else controlIds.push(id);
    });
  });
  return gameplayRefs(fixedIds, controlIds);
}

function toaExclusion(record, seasonId, modifierInfo) {
  return {
    seasonId: String(seasonId),
    recordId: Number(record.id),
    areaId: Number(record.areaNum),
    floor: Number(record.floor),
    reason: modifierInfo.conditional ? "conditionalResistanceModifier" : "unparsedResistanceModifier",
    buffIds: modifierInfo.buffIds,
  };
}

function addToaRecordTargets(record, seasonId, modifierInfo, targets, gameplayBuffs) {
  const gameplay = toaGameplay(record, seasonId, gameplayBuffs);
  return asArray(record.monsters).map((monster) => {
    const label = "toa " + seasonId + " record " + record.id + " monster " + monster.id;
    const id = targetId(["toa", seasonId, record.id, monster.id]);
    return addTarget(targets, {
      id,
      mode: "toa",
      seasonId: String(seasonId),
      areaId: Number(record.areaNum),
      stageId: Number(record.floor),
      waveId: null,
      recordId: Number(record.id),
      monsterId: Number(monster.id),
      nameId: targetNameId(monster.id),
      element: elementFromApi(asArray(monster.elements)[0]?.id),
      level: toaMonsterLevel(monster, label),
      resistances: applyModifiers(toaFinalResistance(monster, label), modifierInfo.modifiers),
      resistance: {
        sourceKind: "stageFinal",
        includesModeModifiers: true,
        modifiers: modifierInfo.modifiers,
      },
      gameplay,
    });
  });
}

function buildToaSeason(payload, seasonId, targets, exclusions = [], gameplayBuffs = {}) {
  const ids = [];
  const records = collectToaRecords(payload).filter(toaRecordIncluded);
  assert(records.length, "toa " + seasonId + ": no encounter records");
  records.forEach((record) => {
    assert(Number(record.season) === Number(seasonId), "toa " + seasonId + ": mismatched record season");
    const modifierInfo = toaResistanceModifierInfo(record);
    if (!modifierInfo.supported) {
      exclusions.push(toaExclusion(record, seasonId, modifierInfo));
      return;
    }
    ids.push(...addToaRecordTargets(record, seasonId, modifierInfo, targets, gameplayBuffs));
  });
  assert(ids.length, "toa " + seasonId + ": no supported targets");
  return uniqueIds(ids);
}

function resistanceElementsInText(text) {
  if (/全属性|all.attribute|all element|全耐性|모든 속성/i.test(text)) return ELEMENTS;
  return ELEMENTS.filter((element) => RESISTANCE_ELEMENT_TOKENS[element].some((token) => text.includes(token)));
}

function resistanceClauseModifiers(clause, buffId) {
  if (!/(?:抗性|RES|耐性|내성)/i.test(clause)) return [];
  const valueMatch = clause.match(/(\d+(?:\.\d+)?)\s*%/);
  const lowered = /降低|减少|decrease|reduce|低下|감소/i.test(clause);
  const raised = /提高|提升|增加|increase|raise|上昇|증가/i.test(clause);
  if (!valueMatch || lowered === raised) return null;
  const elements = resistanceElementsInText(clause);
  if (!elements.length) return null;
  const value = Number(valueMatch[1]) * (lowered ? -1 : 1);
  return elements.map((element) => ({ kind: "attributeResistanceAdjustment", element, value, sourceId: Number(buffId) }));
}

function resistanceBuffInfo(buff) {
  const text = cleanText([buff?.name, buff?.desc].filter(Boolean).join(" "));
  const hasResistance = /(?:抗性|RES|耐性|내성)/i.test(text);
  if (!hasResistance) return { hasResistance: false, supported: true, modifiers: [] };
  const conditionalSchema = CONDITIONAL_RESISTANCE_SCHEMAS[Number(buff?.id)];
  if (conditionalSchema) {
    const modifiers = ELEMENTS.map((element) => ({
      kind: "attributeResistanceAdjustment",
      element,
      value: conditionalSchema.value,
      sourceId: Number(buff.id),
    }));
    return { hasResistance: true, supported: true, conditional: true, modifiers };
  }
  const conditional = /移除|每释放|初始拥有|无法重复|触发|remove|after|when|initial|解除|発動|제거|발동/i.test(text);
  if (conditional) return { hasResistance: true, supported: false, conditional: true, modifiers: [] };
  const clauses = text.split(/[，,。.;；]/).filter(Boolean);
  const parsed = clauses.map((clause) => resistanceClauseModifiers(clause, buff.id));
  if (parsed.some((value) => value === null)) return { hasResistance: true, supported: false, conditional: false, modifiers: [] };
  const modifiers = parsed.flat();
  return { hasResistance: true, supported: modifiers.length > 0, conditional: false, modifiers };
}

function toaResistanceModifierInfo(record) {
  const entries = asArray(record.buffs).map((buff) => ({ buff, info: resistanceBuffInfo(buff) })).filter((entry) => entry.info.hasResistance);
  const unsupported = entries.find((entry) => !entry.info.supported);
  if (unsupported) {
    return {
      supported: false,
      conditional: unsupported.info.conditional,
      modifiers: [],
      buffIds: entries.map((entry) => Number(entry.buff.id)),
    };
  }
  return { supported: true, conditional: entries.some((entry) => entry.info.conditional), modifiers: entries.flatMap((entry) => entry.info.modifiers), buffIds: [] };
}

function resistanceBuffModifier(buff, locale = "zh-CN") {
  const info = resistanceBuffInfo(buff);
  if (!info.supported || info.modifiers.length !== 1 || info.modifiers[0].value <= 0) return null;
  return { ...info.modifiers[0], locale };
}

function applyModifiers(intrinsic, modifiers) {
  const result = { ...intrinsic };
  modifiers.forEach((modifier) => {
    if (modifier.kind === "modeBase") {
      ELEMENTS.forEach((element) => { result[element] += Number(modifier.value); });
      return;
    }
    if (modifier.kind === "attributeResistanceAdjustment") result[modifier.element] += Number(modifier.value);
  });
  return validateResistance(result, "composed resistance");
}

function whiwaLevelsForGroup(group) {
  return asArray(group.levels)
    .filter((level) => WHIWA_INCLUDED_ORDER.has(Number(level.orderIndex)))
    .map((level) => ({ group, level }));
}

function whiwaLevelEntries(payload) {
  return asArray(payload.stageGroups).flatMap(whiwaLevelsForGroup);
}

function whiwaStageModifiers(stage, seasonId) {
  const buffs = asArray(stage.buffs);
  const explicit = buffs.map((buff) => resistanceBuffModifier(buff)).filter(Boolean);
  const resistanceBuffs = buffs.filter((buff) => resistanceBuffInfo(buff).hasResistance);
  assert(explicit.length === resistanceBuffs.length, "whiwa " + seasonId + " stage " + stage.instId + ": unparsed resistance buff");
  return [
    { kind: "modeBase", value: MODE_RULES.whiwa.all, sourceId: "whiwaTestedBase" },
    ...explicit.map(({ locale, ...modifier }) => modifier),
  ];
}

function whiwaSelectableTokenIds(payload) {
  const rewardIds = asArray(payload?.buffItems).map((item) => Number(item.itemId));
  return uniqueIds([...WHIWA_PERSISTENT_PURPLE_TOKEN_IDS, ...rewardIds]);
}

function whiwaTokenGroup(payload, seasonId, gameplayBuffs) {
  if (String(seasonId) !== "19") return null;
  const rewardItems = new Map(asArray(payload.buffItems).map((item) => [Number(item.itemId), item]));
  const optionIds = whiwaSelectableTokenIds(payload).map((itemId) => {
    const schema = WHIWA_TOKEN_SCHEMAS[itemId];
    assert(schema, "whiwa " + seasonId + ": unstructured current Token " + itemId);
    const qualityId = Number(schema.qualityId);
    assert(WHIWA_TOKEN_QUALITY_IDS.has(qualityId), "whiwa " + seasonId + ": unsupported Token quality " + itemId);
    const rewardItem = rewardItems.get(itemId);
    if (rewardItem) assert(Number(rewardItem.item?.qualityId) === qualityId, "whiwa " + seasonId + ": Token quality changed " + itemId);
    const parent = definitionFromSchema({
      mode: "whiwa",
      seasonId,
      sourceId: itemId,
      suffix: "token",
      schema: { control: "option", effects: schema.effects, qualityId },
      localeRef: { kind: "whiwaItem", seasonId: String(seasonId), itemId, clause: null },
    });
    registerGameplayBuff(gameplayBuffs, parent);
    asArray(schema.children).forEach((child) => {
      registerGameplayBuff(gameplayBuffs, definitionFromSchema({
        mode: "whiwa",
        seasonId,
        sourceId: itemId,
        suffix: child.suffix,
        schema: child,
        parentId: parent.id,
        localeRef: {
          kind: "whiwaItem",
          seasonId: String(seasonId),
          itemId,
          clause: child.clause,
          dropLeadingCommaClause: child.dropLeadingCommaClause === true,
        },
      }));
    });
    return parent.id;
  });
  assert(optionIds.length === Object.keys(WHIWA_TOKEN_SCHEMAS).length, "whiwa " + seasonId + ": incomplete current Token options");
  const qualities = optionIds.map((id) => gameplayBuffs[id].qualityId);
  assert(qualities.filter((qualityId) => qualityId === 4).length === 6, "whiwa " + seasonId + ": incomplete current purple Token options");
  assert(qualities.filter((qualityId) => qualityId === 5).length === 3, "whiwa " + seasonId + ": incomplete current gold Token options");
  return { id: targetId(["whiwa", seasonId, "token"]), optionIds, defaultOptionId: null };
}

function whiwaGameplay(entry, seasonId, gameplayBuffs, tokenGroup) {
  if (String(seasonId) !== "19") return gameplayRefs();
  const level = entry.level;
  const fixedIds = [];
  const controlIds = [];
  const tideClause = Number(level.orderIndex) === 12 ? -3 : -2;
  const tide = definitionFromSchema({
    mode: "whiwa",
    seasonId,
    sourceId: level.id,
    suffix: "tide-state",
    schema: { control: "toggle", effects: [{ zone: "finalDmg", value: 60, modes: ["skill"] }] },
    localeRef: { kind: "whiwaLevel", seasonId: String(seasonId), levelId: Number(level.id), clause: tideClause },
  });
  controlIds.push(registerGameplayBuff(gameplayBuffs, tide));
  if (Number(level.orderIndex) === 12) {
    const endless = definitionFromSchema({
      mode: "whiwa",
      seasonId,
      sourceId: level.id,
      suffix: "endless-final",
      schema: { control: "fixed", effects: [{ zone: "finalDmg", value: 30, modes: ["skill"] }] },
      localeRef: { kind: "whiwaLevel", seasonId: String(seasonId), levelId: Number(level.id), clause: 0 },
    });
    fixedIds.push(registerGameplayBuff(gameplayBuffs, endless));
  }
  return gameplayRefs(fixedIds, controlIds, tokenGroup ? [tokenGroup] : []);
}

function addWhiwaStageTargets(entry, stage, stageIndex, seasonId, targets, monsterDetails, gameplay) {
  const { group, level } = entry;
  const enemyLevel = WHIWA_LEVEL_BY_ORDER[Number(level.orderIndex)];
  const modifiers = whiwaStageModifiers(stage, seasonId);
  return asArray(stage.monsters).map((monster) => {
    const detail = monsterDetails.get(Number(monster.id));
    assert(detail, "whiwa " + seasonId + ": missing monster detail " + monster.id);
    const id = targetId(["whiwa", seasonId, level.id, stage.instId, monster.id]);
    return addTarget(targets, {
      id,
      mode: "whiwa",
      seasonId: String(seasonId),
      areaId: Number(group.id),
      stageId: Number(level.id),
      stageOrder: Number(level.orderIndex),
      waveId: stageIndex + 1,
      recordId: Number(stage.instId),
      monsterId: Number(monster.id),
      nameId: targetNameId(monster.id),
      element: elementFromApi(monster.element?.id ?? asArray(monster.elements)[0]?.id),
      level: enemyLevel,
      resistances: applyModifiers(normalizeMonsterResistance(detail), modifiers),
      resistance: {
        sourceKind: "composed",
        includesModeModifiers: true,
        intrinsicSource: "monster",
        modifiers,
      },
      gameplay,
    });
  });
}

function addWhiwaLevelTargets(entry, seasonId, targets, monsterDetails, gameplay) {
  const enemyLevel = WHIWA_LEVEL_BY_ORDER[Number(entry.level.orderIndex)];
  assert(enemyLevel, "whiwa " + seasonId + " level " + entry.level.id + ": unsupported order");
  return asArray(entry.level.stages).flatMap((stage, stageIndex) =>
    addWhiwaStageTargets(entry, stage, stageIndex, seasonId, targets, monsterDetails, gameplay)
  );
}

function buildWhiwaSeason(payload, seasonId, targets, monsterDetails, gameplayBuffs = {}) {
  assert(Number(payload?.season) === Number(seasonId), "whiwa " + seasonId + ": mismatched season");
  const groups = asArray(payload.stageGroups);
  assert(groups.length, "whiwa " + seasonId + ": no stage groups");
  const tokenGroup = whiwaTokenGroup(payload, seasonId, gameplayBuffs);
  const ids = whiwaLevelEntries(payload).flatMap((entry) => {
    const gameplay = whiwaGameplay(entry, seasonId, gameplayBuffs, tokenGroup);
    return addWhiwaLevelTargets(entry, seasonId, targets, monsterDetails, gameplay);
  });
  assert(ids.length, "whiwa " + seasonId + ": no included targets");
  return uniqueIds(ids);
}

function matrixBuffGroup(level, seasonId, gameplayBuffs) {
  if (String(seasonId) !== "6") return null;
  assert(Number(level.NewTowerBuffCount) === 1, "dpmatrix " + seasonId + ": enhancement selection count changed");
  const optionIds = asArray(level.NewTowerBuffs).map((buff) => {
    const schema = MATRIX_BUFF_SCHEMAS[Number(buff.Id)];
    assert(schema, "dpmatrix " + seasonId + ": unstructured current enhancement " + buff.Id);
    const parent = definitionFromSchema({
      mode: "dpmatrix",
      seasonId,
      sourceId: buff.Id,
      suffix: "enhancement",
      schema: { control: "option", effects: schema.effects },
      localeRef: { kind: "matrixBuff", seasonId: String(seasonId), levelId: Number(level.Id), buffId: Number(buff.Id), clause: null },
    });
    registerGameplayBuff(gameplayBuffs, parent);
    asArray(schema.children).forEach((child) => {
      registerGameplayBuff(gameplayBuffs, definitionFromSchema({
        mode: "dpmatrix",
        seasonId,
        sourceId: buff.Id,
        suffix: child.suffix,
        schema: child,
        parentId: parent.id,
        localeRef: { kind: "matrixBuff", seasonId: String(seasonId), levelId: Number(level.Id), buffId: Number(buff.Id), clause: child.clause },
      }));
    });
    return parent.id;
  });
  assert(optionIds.length === Object.keys(MATRIX_BUFF_SCHEMAS).length, "dpmatrix " + seasonId + ": incomplete current enhancements");
  return { id: targetId(["dpmatrix", seasonId, "enhancement"]), optionIds, defaultOptionId: null };
}

function addMatrixLevelTargets(level, seasonId, targets, gameplayBuffs) {
  const group = matrixBuffGroup(level, seasonId, gameplayBuffs);
  const gameplay = gameplayRefs([], [], group ? [group] : []);
  return matrixVisibleWaves(level).map((wave) => {
    const matchingElement = elementFromApi(wave.ElementId);
    const modifiers = [{ kind: "modeBase", value: MODE_RULES.dpmatrix.all, sourceId: "dpmatrixTestedBase" }];
    if (matchingElement) {
      modifiers.push({
        kind: "attributeResistanceAdjustment",
        element: matchingElement,
        value: MODE_RULES.dpmatrix.matchingElement,
        sourceId: "dpmatrixTestedMatching",
      });
    }
    const id = targetId(["dpmatrix", seasonId, level.Id, wave.Round, wave.Wave, wave.Id]);
    return addTarget(targets, {
      id,
      mode: "dpmatrix",
      seasonId: String(seasonId),
      areaId: Number(level.Id),
      stageId: Number(wave.Round),
      waveId: Number(wave.Wave),
      recordId: Number(wave.Id),
      monsterId: Number(wave.MonsterId),
      nameId: matrixNameId(wave.MonsterId),
      element: matchingElement,
      level: Number(wave.MonsterLevel),
      resistances: applyModifiers(resistanceArray(0), modifiers),
      resistance: {
        sourceKind: "composedFinal",
        includesModeModifiers: true,
        modifiers,
      },
      gameplay,
    });
  });
}

function buildMatrixSeason(payload, seasonId, targets, gameplayBuffs = {}) {
  assert(Number(payload?.Season) === Number(seasonId), "dpmatrix " + seasonId + ": mismatched season");
  const level = matrixSingularityLevel(payload);
  const ids = addMatrixLevelTargets(level, seasonId, targets, gameplayBuffs);
  assert(ids.length, "dpmatrix " + seasonId + ": no visible targets");
  return uniqueIds(ids);
}

function buildOpenWorld(monsterList, monsterDetails, targets) {
  const ids = [];
  assert(monsterList.length, "monster list is empty");
  monsterList.forEach((monster) => {
    const detail = monsterDetails.get(Number(monster.Id));
    assert(detail, "open world: missing monster detail " + monster.Id);
    if (!hasMonsterResistance(detail)) return;
    const id = targetId(["openWorld", monster.Id]);
    ids.push(addTarget(targets, {
      id,
      mode: "openWorld",
      seasonId: "default",
      areaId: Number(monster.RarityId),
      stageId: 0,
      waveId: 0,
      monsterId: Number(monster.Id),
      nameId: targetNameId(monster.Id),
      element: elementFromApi(monster.Element?.Id ?? asArray(detail.ElementIdArray)[0]),
      level: 90,
      resistances: normalizeMonsterResistance(detail),
      resistance: {
        sourceKind: "monsterIntrinsic",
        includesModeModifiers: false,
        modifiers: [],
      },
      gameplay: gameplayRefs(),
    }));
  });
  return uniqueIds(ids);
}

function seasonValue(entry, mode) {
  if (mode === "toa") return Number(entry.id);
  return Number(entry.Season);
}

function seasonName(entry, mode) {
  if (mode === "toa") return entry.name;
  return entry.Name || entry.CycleName;
}

function currentSeasonEntry(entries, mode) {
  if (mode === "dpmatrix") return entries.slice().sort((a, b) => seasonValue(b, mode) - seasonValue(a, mode))[0];
  const current = entries.filter((entry) => entry.current === true);
  assert(current.length === 1, mode + ": expected exactly one current season");
  return current[0];
}

function includedSeasons(entries, mode, current) {
  const currentId = seasonValue(current, mode);
  if (mode === "dpmatrix") return entries.filter((entry) => seasonValue(entry, mode) <= currentId);
  if (mode === "whiwa" || mode === "toa") return entries.filter((entry) => seasonValue(entry, mode) > 0 && seasonValue(entry, mode) <= currentId);
  return entries.filter((entry) => seasonValue(entry, mode) <= currentId);
}

function seasonCore(entry, mode, currentId, targetIds) {
  const id = String(seasonValue(entry, mode));
  return {
    id,
    current: id === String(currentId),
    start: entry.start || null,
    finish: entry.finish || null,
    targetIds,
  };
}

function localeSkeleton(code) {
  return {
    targetModes: Object.fromEntries(MODE_IDS.map((mode) => [mode, { name: MODE_NAMES[code][mode] }])),
    targetSeasons: {},
    targetAreas: {},
    targetStages: {},
    targetNames: {},
    targetBuffs: {},
  };
}

function setLocaleValue(group, key, value, label) {
  const name = cleanText(value);
  assert(name, label + ": missing localized name");
  const existing = group[key]?.name;
  assert(!existing || existing === name, label + ": conflicting localized name for " + key);
  group[key] = { name };
}

function collectToaRecordLocale(record, seasonId, locale) {
  setLocaleValue(locale.targetAreas, targetId(["toa", seasonId, record.areaNum]), record.areaName, "toa area");
  asArray(record.monsters).forEach((monster) => {
    setLocaleValue(locale.targetNames, targetNameId(monster.id), monster.name, "toa monster");
  });
}

function collectToaLocale(payload, seasonId, locale) {
  collectToaRecords(payload).filter(toaRecordIncluded).forEach((record) => collectToaRecordLocale(record, seasonId, locale));
}

function collectWhiwaStageLocale(stage, locale) {
  asArray(stage.monsters).forEach((monster) => {
    setLocaleValue(locale.targetNames, targetNameId(monster.id), monster.name, "whiwa monster");
  });
}

function collectWhiwaLevelLocale(level, seasonId, locale) {
  if (!WHIWA_INCLUDED_ORDER.has(Number(level.orderIndex))) return;
  setLocaleValue(locale.targetStages, targetId(["whiwa", seasonId, level.id]), level.title, "whiwa stage");
  asArray(level.stages).forEach((stage) => collectWhiwaStageLocale(stage, locale));
}

function collectWhiwaGroupLocale(group, seasonId, locale) {
  setLocaleValue(locale.targetAreas, targetId(["whiwa", seasonId, group.id]), group.name, "whiwa area");
  asArray(group.levels).forEach((level) => collectWhiwaLevelLocale(level, seasonId, locale));
}

function collectWhiwaLocale(payload, seasonId, locale) {
  asArray(payload.stageGroups).forEach((group) => collectWhiwaGroupLocale(group, seasonId, locale));
}

function collectMatrixLevelLocale(level, seasonId, locale) {
  setLocaleValue(locale.targetAreas, targetId(["dpmatrix", seasonId, level.Id]), level.Name, "matrix level");
  asArray(level.Waves).filter((wave) => wave.IsShowInView === true).forEach((wave) => {
    setLocaleValue(locale.targetNames, matrixNameId(wave.MonsterId), wave.Name, "matrix target");
  });
}

function collectMatrixLocale(payload, seasonId, locale) {
  collectMatrixLevelLocale(matrixSingularityLevel(payload), seasonId, locale);
}

function collectOpenWorldLocale(monsterList, locale) {
  monsterList.forEach((monster) => {
    setLocaleValue(locale.targetAreas, targetId(["openWorld", "rarity", monster.RarityId]), monster.Rarity, "monster rarity");
    setLocaleValue(locale.targetNames, targetNameId(monster.Id), monster.Name, "open world monster");
  });
}

function whiwaLevelById(payload, levelId) {
  return asArray(payload?.stageGroups).flatMap((group) => asArray(group.levels)).find((level) => Number(level.id) === Number(levelId));
}

function localizedGameplaySource(definition, details, itemDetails) {
  const ref = definition.localeRef;
  const payload = details[definition.mode]?.get(String(ref.seasonId));
  if (ref.kind === "toaBuff") {
    const record = collectToaRecords(payload).find((item) => Number(item.id) === Number(ref.recordId));
    const buff = asArray(record?.buffs).find((item) => Number(item.id) === Number(ref.buffId));
    return { name: buff?.name, desc: buff?.desc };
  }
  if (ref.kind === "whiwaLevel") {
    const level = whiwaLevelById(payload, ref.levelId);
    return { name: level?.title, desc: level?.desc };
  }
  if (ref.kind === "whiwaItem") {
    const item = itemDetails.get(Number(ref.itemId));
    return { name: item?.Name, desc: item?.AttributesDescription };
  }
  if (ref.kind === "matrixBuff") {
    const level = asArray(payload?.Levels).find((item) => Number(item.Id) === Number(ref.levelId));
    const buff = asArray(level?.NewTowerBuffs).find((item) => Number(item.Id) === Number(ref.buffId));
    return { name: buff?.Name, desc: buff?.Desc };
  }
  throw new Error("unsupported gameplay locale source " + ref.kind);
}

function collectGameplayLocale(gameplayBuffs, details, itemDetails, locale, code) {
  Object.values(gameplayBuffs).forEach((definition) => {
    const source = localizedGameplaySource(definition, details, itemDetails);
    const desc = cleanText(source.desc);
    assert(desc, code + ": missing gameplay buff description " + definition.id);
    const clause = definition.localeRef.clause;
    const clauseSource = definition.localeRef.kind === "whiwaItem"
      ? String(source.desc).split(/(?:<br\s*\/?\s*>\s*){2,}/i)[0]
      : source.desc;
    const clauses = textClauses(clauseSource);
    const selectedClause = Number(clause) < 0 ? clauses.at(Number(clause)) : clauses[Number(clause)];
    const name = clause == null
      ? cleanText(source.name)
      : definition.localeRef.dropLeadingCommaClause
        ? cleanText(String(selectedClause).replace(/^[^,，、]+[,，、]\s*/, ""))
        : selectedClause;
    assert(name, code + ": missing gameplay buff label " + definition.id + " clause " + clause);
    locale.targetBuffs[definition.id] = { name, desc };
  });
}

function validateLocaleCoverage(locale, targets, modeSeasons, gameplayBuffs, code) {
  MODE_IDS.forEach((mode) => assert(locale.targetModes[mode]?.name, code + ": missing mode " + mode));
  Object.values(targets).forEach((target) => {
    assert(locale.targetNames[target.nameId]?.name, code + ": missing target name " + target.nameId);
    if (target.mode === "openWorld") {
      assert(locale.targetAreas[targetId(["openWorld", "rarity", target.areaId])]?.name, code + ": missing open-world area");
      return;
    }
    assert(locale.targetSeasons[targetId([target.mode, target.seasonId])]?.name, code + ": missing season");
    if (target.mode === "toa") assert(locale.targetAreas[targetId(["toa", target.seasonId, target.areaId])]?.name, code + ": missing toa area");
    if (target.mode === "whiwa") {
      assert(locale.targetAreas[targetId(["whiwa", target.seasonId, target.areaId])]?.name, code + ": missing whiwa area");
      assert(locale.targetStages[targetId(["whiwa", target.seasonId, target.stageId])]?.name, code + ": missing whiwa stage");
    }
    if (target.mode === "dpmatrix") assert(locale.targetAreas[targetId(["dpmatrix", target.seasonId, target.areaId])]?.name, code + ": missing matrix level");
  });
  MODE_IDS.filter((mode) => mode !== "openWorld").forEach((mode) => {
    asArray(modeSeasons[mode]?.seasons).forEach((season) => {
      assert(locale.targetSeasons[targetId([mode, season.id])]?.name, code + ": missing season label " + mode + " " + season.id);
    });
  });
  Object.keys(gameplayBuffs).forEach((id) => assert(locale.targetBuffs[id]?.name && locale.targetBuffs[id]?.desc, code + ": missing gameplay buff " + id));
}

async function fetchJson(url, attempt = 1) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      headers: { accept: "application/json", "user-agent": "wuwa-damage-calculator-target-sync/1.0" },
      signal: controller.signal,
    });
    assert(response.ok, url + ": HTTP " + response.status);
    return await response.json();
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    return fetchJson(url, attempt + 1);
  } finally {
    clearTimeout(timeout);
  }
}

async function concurrentMap(values, limit, mapper) {
  const output = new Array(values.length);
  let cursor = 0;
  async function worker() {
    const index = cursor;
    cursor += 1;
    if (index >= values.length) return;
    output[index] = await mapper(values[index], index);
    return worker();
  }
  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, () => worker()));
  return output;
}

function endpoint(locale, route) {
  return API_BASE + "/" + LANGUAGES[locale] + route;
}

async function fetchModeLists(code) {
  const [monsters, toa, whiwa, dpmatrix] = await Promise.all([
    fetchJson(endpoint(code, "/monster")),
    fetchJson(endpoint(code, "/toa")),
    fetchJson(endpoint(code, "/whiwa")),
    fetchJson(endpoint(code, "/dpmatrix")),
  ]);
  assert(Array.isArray(monsters.monsterList), code + ": invalid monster list");
  assert(Array.isArray(toa.seasons), code + ": invalid toa list");
  assert(Array.isArray(whiwa), code + ": invalid whiwa list");
  assert(Array.isArray(dpmatrix), code + ": invalid dpmatrix list");
  return { monsters: monsters.monsterList, toa: toa.seasons, whiwa, dpmatrix };
}

async function fetchSeasonDetails(code, mode, seasons) {
  return concurrentMap(seasons, 4, async (season) => {
    const id = seasonValue(season, mode);
    return [String(id), await fetchJson(endpoint(code, "/" + mode + "/" + id))];
  }).then((entries) => new Map(entries));
}

async function fetchLocalizedDetails(code, lists, includedByMode) {
  const details = {};
  for (const mode of ["toa", "whiwa", "dpmatrix"]) {
    const includedIds = new Set(includedByMode[mode].map((entry) => String(seasonValue(entry, mode))));
    const localeSeasons = lists[mode].filter((entry) => includedIds.has(String(seasonValue(entry, mode))));
    assert(localeSeasons.length === includedIds.size, code + ": incomplete " + mode + " season list");
    process.stdout.write(mode + " details " + code + " (" + localeSeasons.length + ")\n");
    details[mode] = await fetchSeasonDetails(code, mode, localeSeasons);
  }
  return details;
}

async function fetchMonsterDetails(monsterIds) {
  let done = 0;
  const rows = await concurrentMap(monsterIds, 6, async (id) => {
    const detail = await fetchJson(endpoint("zh-CN", "/monster/" + id));
    done += 1;
    if (done % 40 === 0 || done === monsterIds.length) process.stdout.write("monster details " + done + "/" + monsterIds.length + "\n");
    return [Number(id), detail];
  });
  return new Map(rows);
}

async function fetchWhiwaItemDetails(code, payload) {
  const ids = whiwaSelectableTokenIds(payload);
  const rows = await concurrentMap(ids, 4, async (id) => {
    const detail = await fetchJson(endpoint(code, "/item/" + id));
    const schema = WHIWA_TOKEN_SCHEMAS[id];
    assert(cleanText(detail?.Name), code + ": missing Whiwa Token name " + id);
    assert(cleanText(detail?.AttributesDescription), code + ": missing Whiwa Token description " + id);
    assert(Number(detail?.QualityId) === Number(schema?.qualityId), code + ": Whiwa Token quality changed " + id);
    return [id, detail];
  });
  return new Map(rows);
}

function whiwaMonsterIdsForStage(stage) {
  return asArray(stage.monsters).map((monster) => Number(monster.id));
}

function whiwaMonsterIdsForLevelEntry(entry) {
  return asArray(entry.level.stages).flatMap(whiwaMonsterIdsForStage);
}

function whiwaMonsterIdsForPayload(payload) {
  return whiwaLevelEntries(payload).flatMap(whiwaMonsterIdsForLevelEntry);
}

function referencedWhiwaMonsterIds(details) {
  return new Set(Array.from(details.values()).flatMap(whiwaMonsterIdsForPayload));
}

function seasonTargetIds(mode, payload, seasonId, targets, monsterDetails, toaExclusions, gameplayBuffs) {
  switch (mode) {
    case "toa": return buildToaSeason(payload, seasonId, targets, toaExclusions, gameplayBuffs);
    case "whiwa": return buildWhiwaSeason(payload, seasonId, targets, monsterDetails, gameplayBuffs);
    case "dpmatrix": return buildMatrixSeason(payload, seasonId, targets, gameplayBuffs);
    default: throw new Error("unsupported target mode " + mode);
  }
}

function buildModeCore(mode, entries, currentEntry, details, targets, monsterDetails, toaExclusions, gameplayBuffs) {
  const currentId = String(seasonValue(currentEntry, mode));
  const seasons = entries.map((entry) => {
    const id = String(seasonValue(entry, mode));
    const payload = details.get(id);
    assert(payload, mode + " " + id + ": missing zh-Hans detail");
    return seasonCore(entry, mode, currentId, seasonTargetIds(mode, payload, id, targets, monsterDetails, toaExclusions, gameplayBuffs));
  });
  return {
    currentSeasonId: currentId,
    currentStrategy: mode === "dpmatrix" ? "highestSeasonId" : "apiCurrentFlag",
    seasons,
  };
}

function collectSeasonLocale(mode, season, sourceEntries, details, locale, code) {
  const entry = sourceEntries.find((item) => String(seasonValue(item, mode)) === season.id);
  assert(entry, code + ": missing " + mode + " season " + season.id);
  setLocaleValue(locale.targetSeasons, targetId([mode, season.id]), seasonName(entry, mode), mode + " season");
  const payload = details.get(season.id);
  switch (mode) {
    case "toa": collectToaLocale(payload, season.id, locale); break;
    case "whiwa": collectWhiwaLocale(payload, season.id, locale); break;
    case "dpmatrix": collectMatrixLocale(payload, season.id, locale); break;
    default: throw new Error("unsupported locale target mode " + mode);
  }
}

function collectModeLocale(mode, lists, details, modes, locale, code) {
  modes[mode].seasons.forEach((season) => {
    collectSeasonLocale(mode, season, lists[mode], details[mode], locale, code);
  });
}

function buildLocaleSnapshot(code, lists, details, modes, targets, gameplayBuffs, itemDetails) {
  const locale = localeSkeleton(code);
  collectOpenWorldLocale(lists.monsters, locale);
  ["toa", "whiwa", "dpmatrix"].forEach((mode) => collectModeLocale(mode, lists, details, modes, locale, code));
  collectGameplayLocale(gameplayBuffs, details, itemDetails, locale, code);
  validateLocaleCoverage(locale, targets, modes, gameplayBuffs, code);
  return locale;
}

function jsFile(prefix, value) {
  return "\"use strict\";\n\n" + prefix + JSON.stringify(value, null, 2) + ";\n";
}

function languageFile(code, data) {
  return jsFile("window.WUWA_LANGUAGES.extend(" + JSON.stringify(code) + ", { data: ", data).replace(/;\n$/, " });\n");
}

function writeSnapshot(files) {
  const temps = [];
  try {
    Object.entries(files).forEach(([relative, content]) => {
      const destination = path.join(ROOT, relative);
      const temp = destination + ".tmp-" + process.pid;
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.writeFileSync(temp, content, "utf8");
      temps.push([temp, destination]);
    });
    temps.forEach(([temp, destination]) => fs.renameSync(temp, destination));
  } catch (error) {
    temps.forEach(([temp]) => {
      if (fs.existsSync(temp)) fs.unlinkSync(temp);
    });
    throw error;
  }
}

function validateCurrentGameplaySchemas(currentEntries, details) {
  const expected = { toa: "37", whiwa: "19", dpmatrix: "6" };
  Object.entries(expected).forEach(([mode, seasonId]) => {
    assert(String(seasonValue(currentEntries[mode], mode)) === seasonId, mode + " current season has no reviewed gameplay Buff schema");
  });
  const toaPayload = details.toa.get(expected.toa);
  collectToaRecords(toaPayload).filter(toaRecordIncluded).forEach((record) => {
    asArray(record.buffs).forEach((buff) => {
      const handled = TOA_GAMEPLAY_SCHEMAS[Number(buff.id)] || resistanceBuffInfo(buff).supported;
      assert(handled, "toa current Buff " + buff.id + " has no reviewed structure");
    });
  });
  const whiwaPayload = details.whiwa.get(expected.whiwa);
  const whiwaItems = asArray(whiwaPayload?.buffItems);
  const itemIds = whiwaItems.map((item) => Number(item.itemId)).sort((a, b) => a - b);
  assert(JSON.stringify(itemIds) === JSON.stringify(WHIWA_CURRENT_REWARD_TOKEN_IDS), "whiwa current reward Token set changed");
  const tokenQualities = whiwaItems.map((item) => Number(item.item?.qualityId));
  assert(tokenQualities.filter((qualityId) => qualityId === 4).length === 1 && tokenQualities.filter((qualityId) => qualityId === 5).length === 3, "whiwa current reward Token qualities changed");
  const selectableQualities = whiwaSelectableTokenIds(whiwaPayload).map((id) => WHIWA_TOKEN_SCHEMAS[id]?.qualityId);
  assert(selectableQualities.filter((qualityId) => qualityId === 4).length === 6, "whiwa current selectable purple Token set changed");
  assert(selectableQualities.filter((qualityId) => qualityId === 5).length === 3, "whiwa current selectable gold Token set changed");
  const includedLevels = whiwaLevelEntries(whiwaPayload);
  assert(includedLevels.length === 4, "whiwa current high-floor set changed");
  includedLevels.forEach(({ level }) => assert(cleanText(level.desc).includes("60%"), "whiwa " + level.id + ": missing reviewed tide effect"));
  assert(cleanText(includedLevels.find(({ level }) => Number(level.orderIndex) === 12)?.level.desc).includes("30%"), "whiwa current endless effect changed");
  const matrixLevel = matrixSingularityLevel(details.dpmatrix.get(expected.dpmatrix));
  const matrixIds = asArray(matrixLevel.NewTowerBuffs).map((buff) => Number(buff.Id)).sort((a, b) => a - b);
  assert(JSON.stringify(matrixIds) === JSON.stringify(Object.keys(MATRIX_BUFF_SCHEMAS).map(Number).sort((a, b) => a - b)), "dpmatrix current enhancement set changed");
}

function validateKnownSamples(targets, gameplayBuffs) {
  const open = targets["openWorld:310000430"];
  assert(open?.resistances.havoc === 40 && open?.resistances.glacio === 10, "monster resistance normalization sample failed");
  const toa = Object.values(targets).find((target) => target.mode === "toa" && target.seasonId === "37" && target.recordId === 402);
  assert(toa?.resistances.havoc === 60 && toa?.resistances.glacio === 20, "toa percent sample failed");
  assert(toa?.resistances.aero === 10, "toa unconditional stage resistance adjustment sample failed");
  assert(toa?.resistance.includesModeModifiers === true && !toa?.resistance.modifiers.some((modifier) => modifier.kind === "modeBase"), "toa final resistance must not be restacked");
  const conditionalToa = Object.values(targets).find((target) => target.mode === "toa" && target.seasonId === "37" && target.recordId === 405);
  assert(conditionalToa?.resistances.glacio === 35 && conditionalToa?.resistances.aero === 75, "toa conditional resistance default sample failed");
  const whiwa = Object.values(targets).find((target) => target.mode === "whiwa" && target.seasonId === "19" && target.monsterId === 310000430);
  assert(whiwa?.level === 90, "whiwa high-floor level sample failed");
  const matrixRounds = new Set(Object.values(targets).filter((target) => target.mode === "dpmatrix" && target.seasonId === "6" && target.areaId === 12).map((target) => target.stageId));
  assert(matrixRounds.size === 3, "matrix current season must expose three rounds");
  assert(Object.keys(gameplayBuffs).length > 0, "current gameplay Buff snapshot is empty");
}

async function synchronize() {
  if (!API_BASE || !API_SCHEMA_URL) {
    throw new Error("Set WUWA_TARGET_API_BASE and WUWA_TARGET_API_SCHEMA_URL before syncing target data.");
  }
  const openapi = await fetchJson(API_SCHEMA_URL);
  const apiVersion = String(openapi?.info?.version || "");
  assert(apiVersion, "OpenAPI document has no version");

  const listsByLocale = new Map();
  for (const code of Object.keys(LANGUAGES)) {
    process.stdout.write("lists " + code + "\n");
    listsByLocale.set(code, await fetchModeLists(code));
  }

  const zhLists = listsByLocale.get("zh-CN");
  const currentEntries = {
    toa: currentSeasonEntry(zhLists.toa, "toa"),
    whiwa: currentSeasonEntry(zhLists.whiwa, "whiwa"),
    dpmatrix: currentSeasonEntry(zhLists.dpmatrix, "dpmatrix"),
  };
  const includedByMode = {
    toa: includedSeasons(zhLists.toa, "toa", currentEntries.toa),
    whiwa: includedSeasons(zhLists.whiwa, "whiwa", currentEntries.whiwa),
    dpmatrix: includedSeasons(zhLists.dpmatrix, "dpmatrix", currentEntries.dpmatrix),
  };

  const detailsByLocale = new Map();
  const zhDetails = {};
  for (const mode of ["toa", "whiwa", "dpmatrix"]) {
    process.stdout.write(mode + " details zh-CN (" + includedByMode[mode].length + ")\n");
    zhDetails[mode] = await fetchSeasonDetails("zh-CN", mode, includedByMode[mode]);
  }
  validateCurrentGameplaySchemas(currentEntries, zhDetails);
  const excludedToaSeasons = [];
  includedByMode.toa = includedByMode.toa.filter((entry) => {
    const id = String(seasonValue(entry, "toa"));
    const coverage = toaSeasonCoverage(zhDetails.toa.get(id));
    if (coverage.complete) return true;
    excludedToaSeasons.push({ seasonId: id, reason: "missingTargetLevelOrResistance", ...coverage });
    return false;
  });
  assert(includedByMode.toa.some((entry) => String(seasonValue(entry, "toa")) === String(seasonValue(currentEntries.toa, "toa"))), "current toa season has incomplete target data");
  detailsByLocale.set("zh-CN", zhDetails);

  for (const code of Object.keys(LANGUAGES).filter((value) => value !== "zh-CN")) {
    detailsByLocale.set(code, await fetchLocalizedDetails(code, listsByLocale.get(code), includedByMode));
  }

  const includedToaIds = new Set(includedByMode.toa.map((entry) => String(seasonValue(entry, "toa"))));
  zhDetails.toa.forEach((payload, id) => {
    if (includedToaIds.has(id)) buildToaSeason(payload, id, {});
  });
  zhDetails.dpmatrix.forEach((payload, id) => buildMatrixSeason(payload, id, {}));
  const monsterIds = new Set(zhLists.monsters.map((monster) => Number(monster.Id)));
  referencedWhiwaMonsterIds(zhDetails.whiwa).forEach((id) => monsterIds.add(id));
  const monsterDetails = await fetchMonsterDetails(Array.from(monsterIds).sort((a, b) => a - b));
  const excludedOpenWorldTargets = zhLists.monsters
    .filter((monster) => !hasMonsterResistance(monsterDetails.get(Number(monster.Id))))
    .map((monster) => ({ monsterId: Number(monster.Id), reason: "missingResistanceFields" }));
  const excludedToaRecords = [];
  const gameplayBuffs = {};

  const targets = {};
  const modes = {
    openWorld: {
      currentSeasonId: "default",
      currentStrategy: "fixed",
      seasons: [{ id: "default", current: true, start: null, finish: null, targetIds: buildOpenWorld(zhLists.monsters, monsterDetails, targets) }],
    },
  };
  for (const mode of ["toa", "whiwa", "dpmatrix"]) {
    modes[mode] = buildModeCore(mode, includedByMode[mode], currentEntries[mode], zhDetails[mode], targets, monsterDetails, excludedToaRecords, gameplayBuffs);
  }

  validateKnownSamples(targets, gameplayBuffs);
  const itemDetailsByLocale = new Map();
  for (const code of Object.keys(LANGUAGES)) {
    const details = detailsByLocale.get(code);
    itemDetailsByLocale.set(code, await fetchWhiwaItemDetails(code, details.whiwa.get(modes.whiwa.currentSeasonId)));
  }
  const localeFiles = {};
  for (const code of Object.keys(LANGUAGES)) {
    const lists = listsByLocale.get(code);
    const details = detailsByLocale.get(code);
    const locale = buildLocaleSnapshot(code, lists, details, modes, targets, gameplayBuffs, itemDetailsByLocale.get(code));
    localeFiles["data/languages/" + code + "/targets.js"] = languageFile(code, locale);
  }

  const syncedAt = new Date().toISOString();
  const core = {
    schemaVersion: 2,
    snapshot: {
      apiVersion,
      syncedAt,
      currentSeasons: Object.fromEntries(["toa", "whiwa", "dpmatrix"].map((mode) => [mode, modes[mode].currentSeasonId])),
      resistanceUnits: {
        monster: { apiUnit: "basisPoint", divisor: 100, normalizedUnit: "percent", sampleMonsterId: 310000430 },
        toa: { apiUnit: "percent", divisor: 1, normalizedUnit: "percent", sampleSeasonId: 37, sampleMonsterId: 310000430 },
      },
      synthesis: {
        toa: {
          stageFinalIncludesModeModifiers: true,
          unconditionalResistanceBuffs: "apply",
          conditionalResistanceBuffs: "applyDefaultAndExposeRemovalControl",
          includedFloors: { left: [4], middle: [1, 2, 3, 4], right: [4] },
        },
        whiwa: {
          includedOrders: [9, 10, 11, 12],
          levelByOrder: WHIWA_LEVEL_BY_ORDER,
          baseAllResistance: MODE_RULES.whiwa.all,
        },
        dpmatrix: {
          includedLevel: "singularityExpansion",
          levelDetection: "MaxLoopCount>0AndAtLeastThreeVisibleRounds",
          baseAllResistance: MODE_RULES.dpmatrix.all,
          matchingElementResistance: MODE_RULES.dpmatrix.matchingElement,
        },
        gameplayBuffs: {
          reviewedCurrentSeasons: { toa: 37, whiwa: 19, dpmatrix: 6 },
          triggeredEffectsDefaultActive: false,
          matrixSelectionLimit: 1,
          whiwaTokenSelectionLimit: 1,
          whiwaTokenQualityIds: [4, 5],
          whiwaPersistentPurpleTokenIds: WHIWA_PERSISTENT_PURPLE_TOKEN_IDS,
          whiwaCurrentRewardTokenIds: WHIWA_CURRENT_REWARD_TOKEN_IDS,
          whiwaSelectableTokenCounts: { purple: 6, gold: 3 },
        },
      },
      exclusions: {
        openWorld: excludedOpenWorldTargets,
        toaSeasons: excludedToaSeasons,
        toaRecords: excludedToaRecords,
      },
    },
    elements: ELEMENTS,
    modes,
    gameplayBuffs,
    targets,
  };
  const files = {
    "data/core/targets.js": jsFile("window.WUWA_TARGET_DATA = ", core),
    ...localeFiles,
  };
  writeSnapshot(files);
  process.stdout.write("wrote " + Object.keys(targets).length + " targets at " + syncedAt + "\n");
  return core;
}

if (require.main === module) {
  synchronize().catch((error) => {
    console.error(error.stack || error);
    process.exitCode = 1;
  });
}

module.exports = {
  ELEMENTS,
  WHIWA_LEVEL_BY_ORDER,
  normalizeMonsterResistance,
  hasMonsterResistance,
  toaFinalResistance,
  toaSeasonCoverage,
  collectToaRecords,
  resistanceBuffModifier,
  applyModifiers,
  buildToaSeason,
  buildWhiwaSeason,
  buildMatrixSeason,
  synchronize,
};
