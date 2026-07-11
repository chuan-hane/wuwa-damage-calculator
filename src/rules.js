"use strict";

window.WUWA_RULES = (() => {
  const ZONES = [
    "attackPercent", "attackFlat", "hpPercent", "defensePercent",
    "critRate", "critDamage",
    "damageBonus", "typeBonus", "typeBonusScale", "amplify", "vulnerability", "skillMultBonus", "finalDmg", "fixedCrit",
    "resShred", "defShred", "defIgnore",
  ];
  const ZONE_LABEL = {
    attackPercent: "攻击%", attackFlat: "固定攻击", hpPercent: "生命%", defensePercent: "防御%",
    critRate: "暴击", critDamage: "暴击伤害",
    damageBonus: "属性/全加成", typeBonus: "类型加成", typeBonusScale: "类型加成来源提升", amplify: "伤害加深",
    vulnerability: "易伤", skillMultBonus: "技能倍率提升", finalDmg: "最终伤害提升", fixedCrit: "固定双暴",
    resShred: "减抗", defShred: "减防", defIgnore: "防御无视",
    energyRegen: "共鸣效率", healingBonus: "治疗效果加成",
    breakAmp: "谐度破坏增幅", discordEff: "偏谐值累积效率",
    effectExtraRate: "效应额外倍率",
  };

  const STAT_DEF = {
    critRate: { label: "暴击", zone: "critRate" },
    critDamage: { label: "暴击伤害", zone: "critDamage" },
    attackPct: { label: "攻击%", zone: "attackPercent" },
    hpPct: { label: "生命%", zone: "hpPercent" },
    defPct: { label: "防御%", zone: "defensePercent" },
    atkFlat: { label: "攻击(固定)", flat: "flatAtk" },
    hpFlat: { label: "生命(固定)", flat: "flatHp" },
    defFlat: { label: "防御(固定)", flat: "flatDef" },
    energyRegen: { label: "共鸣效率", zone: "energyRegen" },
    heal: { label: "治疗效果加成", zone: "healingBonus" },
    breakAmp: { label: "谐度破坏增幅", zone: "breakAmp" },
    discordEff: { label: "偏谐值累积效率", zone: "discordEff" },
    elem: { label: "属性伤害加成", elem: true },
    basicDmg: { label: "普攻伤害加成", zone: "typeBonus", type: "basic" },
    heavyDmg: { label: "重击伤害加成", zone: "typeBonus", type: "heavy" },
    skillDmg: { label: "共鸣技能伤害加成", zone: "typeBonus", type: "resonanceSkill" },
    burstDmg: { label: "共鸣解放伤害加成", zone: "typeBonus", type: "resonanceLiberation" },
    echoSkillDmg: { label: "声骸技能伤害加成", zone: "typeBonus", type: "echoSkill" },
  };
  const CORE_SUBS = ["atkFlat", "critRate", "critDamage"];
  const SEC_ZONE = {
    critRate: "critRate", critDamage: "critDamage", attackPercent: "attackPercent",
    hpPercent: "hpPercent", defensePercent: "defensePercent", energyRegen: "energyRegen",
  };
  const ELEMENTS = ["fusion", "glacio", "electro", "aero", "spectro", "havoc"];
  const TYPES = ["basic", "heavy", "resonanceSkill", "resonanceLiberation", "echoSkill"];

  const SKILL_LEVEL_RATIO = [0.50293, 0.54430, 0.58553, 0.64315, 0.68452, 0.73191, 0.79780, 0.86385, 0.92989, 1];
  const skillLevelRatio = (lv) => SKILL_LEVEL_RATIO[Math.min(Math.max(Math.round(lv || 10), 1), 10) - 1];
  const skillMultValue = (percent, ratio = 1) => Math.round(percent * ratio * 100) / 100;

  const num = (v, d = 0) => { const n = parseFloat(v); return Number.isNaN(n) ? d : n; };
  const zeros = () => Object.fromEntries(ZONES.map((z) => [z, 0]));
  const FORMULA_MULTIPLY_ZONES = new Set(["amplify", "vulnerability", "skillMultBonus", "finalDmg"]);

  const TYPE_FIELD_BY_DAMAGE = { basic: "basicDmg", heavy: "heavyDmg", resonanceSkill: "skillDmg", resonanceLiberation: "burstDmg", echoSkill: "echoSkillDmg" };
  const TYPE_BY_KEY = { basicDmg: "basic", heavyDmg: "heavy", skillDmg: "resonanceSkill", burstDmg: "resonanceLiberation", echoSkillDmg: "echoSkill" };
  const TYPE_ADD_ORDER = ["resonanceSkill", "basic", "heavy", "resonanceLiberation", "echoSkill"];
  const ELEM_ADD_ORDER = ["physical", "glacio", "fusion", "electro", "aero", "spectro", "havoc"];
  const EFFECT_DEFS = {
    none: { key: "none", label: "不计算", kind: "none" },
    electro: {
      key: "electro", label: "电磁效应", shortLabel: "电磁", element: "electro", kind: "attack",
      defaultStacks: 10, baseCap: 10, maxStacks: 16, supportsCapBonus: true,
      rates: { 1: 50, 2: 90.65, 3: 131.3, 4: 171.95, 5: 212.6, 6: 253.25, 7: 293.9, 8: 334.55, 9: 375.2, 10: 415.85, 11: 554.47, 12: 693.08, 13: 831.7 },
      rageLabel: "电磁爆发", rageRates: "same",
      note: "电磁爆发是独立溢出层数，触发时与电磁效应各自查同一张层数倍率表后相加；14-16层倍率待查证。",
    },
    frost: {
      key: "frost", label: "霜渐效应", shortLabel: "霜渐", element: "glacio", kind: "attack",
      defaultStacks: 10, baseCap: 10, maxStacks: 16, supportsCapBonus: true,
      rates: { 1: 24.5, 2: 44.42, 3: 64.34, 4: 84.26, 5: 104.17, 6: 124.09, 7: 144.01, 8: 163.93, 9: 183.85, 10: 203.77, 11: 271.69, 12: 339.61, 13: 407.53 },
      note: "14-16层倍率待查证。",
    },
    fusion: {
      key: "fusion", label: "聚爆效应", shortLabel: "聚爆", element: "fusion", kind: "attack",
      defaultStacks: 10, baseCap: 10, maxStacks: 16, supportsCapBonus: true,
      allowedStacks: [10, 13], rates: { 10: 698.63, 13: 1397.26 },
      note: "聚爆按满层结算，当前只录入 10 层与上限+3后的 13 层；16层倍率待查证。",
    },
    lightNoise: {
      key: "lightNoise", label: "光噪效应", shortLabel: "光噪", element: "spectro", kind: "fixed",
      defaultStacks: 10, baseCap: 10, maxStacks: 16, supportsCapBonus: true, fixedFormula: "lightNoise",
      note: "光噪按当前层数单次基础值计算；消耗式累计结算另算。",
    },
    windErosion: {
      key: "windErosion", label: "风蚀效应", shortLabel: "风蚀", element: "aero", kind: "fixed",
      defaultStacks: 3, baseCap: 6, maxStacks: 12, supportsCapBonus: true, fixedFormula: "windErosion",
    },
    havocBane: {
      key: "havocBane", label: "虚湮效应", shortLabel: "虚湮", element: "havoc", kind: "defShred",
      defaultStacks: 3, baseCap: 3, maxStacks: 9, valuePerStack: 2, supportsCapBonus: true,
      note: "虚湮不是伤害，按每层降低防御显示。",
    },
  };
  const EFFECT_ORDER = ["none", "electro", "frost", "fusion", "lightNoise", "windErosion", "havocBane"];
  const HARMONY_BASE_OPTIONS = [
    { cost: 1, label: "1C", value: 716 },
    { cost: 3, label: "3C", value: 2149 },
    { cost: 4, label: "4C", value: 10027 },
  ];
  const EFFECT_ALIASES = {
    "": "none", none: "none", 不计算: "none",
    electro: "electro", 电磁: "electro", 电磁效应: "electro",
    frost: "frost", 霜渐: "frost", 霜渐效应: "frost",
    fusion: "fusion", 聚爆: "fusion", 聚爆效应: "fusion",
    lightNoise: "lightNoise", 光噪: "lightNoise", 光噪效应: "lightNoise",
    windErosion: "windErosion", 风蚀: "windErosion", 风蚀效应: "windErosion",
    havocBane: "havocBane", 虚湮: "havocBane", 虚湮效应: "havocBane",
  };
  function effectKeyOf(value) {
    const raw = String(value ?? "").replace(/[【】]/g, "").trim();
    return EFFECT_DEFS[raw] ? raw : (EFFECT_ALIASES[raw] || "none");
  }

  return {
    ZONES, ZONE_LABEL, STAT_DEF, CORE_SUBS, SEC_ZONE, ELEMENTS, TYPES,
    SKILL_LEVEL_RATIO, skillLevelRatio, skillMultValue, num, zeros, FORMULA_MULTIPLY_ZONES,
    TYPE_FIELD_BY_DAMAGE, TYPE_BY_KEY, TYPE_ADD_ORDER, ELEM_ADD_ORDER,
    EFFECT_DEFS, EFFECT_ORDER, HARMONY_BASE_OPTIONS, effectKeyOf,
  };
})();
