"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const API_BASE = String(process.env.WUWA_LANGUAGE_API_BASE || "").replace(/\/+$/, "");
const DEFAULT_LANG = "zh-CN";
const OUTPUT_LANGS = [
  { code: "en-US", api: "en" },
  { code: "ko", api: "ko" },
  { code: "ja-JP", api: "ja" },
];
const FETCH_TIMEOUT_MS = 20000;
const FETCH_RETRIES = 2;
const FETCH_CONCURRENCY = 8;

const langText = {
  "en-US": {
    default: "Default",
    none: "None",
    stack: "stack",
    stacks: "stacks",
    afterOutro: "After casting Outro Skill",
    afterIntro: "After casting Intro Skill",
    afterEcho: "After casting Echo Skill",
    afterSkill: "After casting {name}",
    whenState: "In {name}",
    targetState: "Target has {name}",
    notState: "Not in {name}",
    selectState: "Select the current {name}.",
    perStack: "{label} +{value}% per stack",
    flat: "{label} +{value}",
    percent: "{label} +{value}%",
    capped: "{label} based on {stat}, cap {cap}%",
    stackCap: "{effect} stack cap +{value}",
    allElement: "All-Attribute DMG Bonus",
    allDmg: "All DMG Bonus",
    damageIncrease: "DMG Increase",
    dmgMultiplierIncrease: "DMG Multiplier Increase",
    extraMultiplier: "Extra Multiplier",
    coordinated: "Coordinated Attack DMG",
    total: "Total",
    extra: "Extra",
    sourceSep: ": ",
    sourceJoin: ": ",
    optionNone: "None",
    suffixState: "State",
    suffixForm: "Form",
    valueAtMax: "{label} at max",
    valueAtLeast: "{label} at least {value}",
    cast: "After casting",
    hit: "After hit",
    enabled: "Enabled",
    resourceFull: "{name} full",
  },
  ko: {
    default: "기본",
    none: "없음",
    stack: "스택",
    stacks: "스택",
    afterOutro: "반주 스킬 발동 후",
    afterIntro: "변주 스킬 발동 후",
    afterEcho: "에코 어빌리티 발동 후",
    afterSkill: "{name} 발동 후",
    whenState: "{name} 상태",
    targetState: "목표가 {name} 상태",
    notState: "{name} 아님",
    selectState: "현재 {name} 상태를 선택합니다.",
    perStack: "{label} 스택당 +{value}%",
    flat: "{label} +{value}",
    percent: "{label} +{value}%",
    capped: "{stat}에 따라 {label} 증가, 상한 {cap}%",
    stackCap: "{effect} 스택 상한 +{value}",
    allElement: "전체 속성 피해 보너스",
    allDmg: "전체 피해 증가",
    damageIncrease: "피해 증가",
    dmgMultiplierIncrease: "피해 배율 상승",
    extraMultiplier: "추가 배율",
    coordinated: "협동 공격 피해",
    total: "총합",
    extra: "추가",
    sourceSep: " · ",
    sourceJoin: " · ",
    optionNone: "없음",
    suffixState: "상태",
    suffixForm: "형태",
    valueAtMax: "{label} 최대",
    valueAtLeast: "{label} {value} 이상",
    cast: "발동 후",
    hit: "명중 후",
    enabled: "활성",
    resourceFull: "{name} 최대",
  },
  "ja-JP": {
    default: "デフォルト",
    none: "なし",
    stack: "スタック",
    stacks: "スタック",
    afterOutro: "終奏スキル発動後",
    afterIntro: "変奏スキル発動後",
    afterEcho: "音骸スキル発動後",
    afterSkill: "{name}発動後",
    whenState: "{name}状態",
    targetState: "目標が{name}状態",
    notState: "{name}以外",
    selectState: "現在の{name}状態を選択します。",
    perStack: "{label} 1スタックにつき+{value}%",
    flat: "{label} +{value}",
    percent: "{label} +{value}%",
    capped: "{stat}に応じて{label}アップ、上限{cap}%",
    stackCap: "{effect}スタック上限+{value}",
    allElement: "全属性ダメージアップ",
    allDmg: "全ダメージアップ",
    damageIncrease: "ダメージブースト",
    dmgMultiplierIncrease: "ダメージ倍率アップ",
    extraMultiplier: "追加倍率",
    coordinated: "協同攻撃ダメージ",
    total: "合計",
    extra: "追加",
    sourceSep: "・",
    sourceJoin: "・",
    optionNone: "なし",
    suffixState: "状態",
    suffixForm: "形態",
    valueAtMax: "{label}最大",
    valueAtLeast: "{label}{value}以上",
    cast: "発動後",
    hit: "命中後",
    enabled: "有効",
    resourceFull: "{name}最大",
  },
};

const baseTerms = {
  "en-US": {
    elements: {
      fusion: "Fusion",
      glacio: "Glacio",
      electro: "Electro",
      aero: "Aero",
      spectro: "Spectro",
      havoc: "Havoc",
      physical: "Physical",
    },
    categories: {
      basicAttack: "Basic Attack",
      resonanceSkill: "Resonance Skill",
      resonanceLiberation: "Resonance Liberation",
      forteCircuit: "Forte Circuit",
      introSkill: "Intro Skill",
      outroSkill: "Outro Skill",
      echoSkill: "Echo Skill",
      resonanceChain: "Resonance Chain",
    },
      damageTypes: {
      basic: "Basic Attack DMG",
      heavy: "Heavy Attack DMG",
      midAir: "Mid-air Attack DMG",
      dodgeCounter: "Dodge Counter DMG",
      resonanceSkill: "Resonance Skill DMG",
      resonanceLiberation: "Resonance Liberation DMG",
      echoSkill: "Echo Skill DMG",
      introSkill: "Intro Skill DMG",
      outroSkill: "Outro Skill DMG",
      coordinated: "Coordinated Attack",
      hackDmg: "Hack DMG",
      tuneBreak: "Tune Break",
      tuneBreakDmg: "Tune Break DMG",
      tuneRupture: "Tune Rupture DMG",
      tuneRuptureDmg: "Tune Rupture DMG",
      electro: "Electro Flare",
      frost: "Glacio Chafe",
      fusion: "Fusion Burst",
      lightNoise: "Spectro Frazzle",
      windErosion: "Aero Erosion",
      havocBane: "Havoc Bane",
    },
    stats: {
      attack: "ATK",
      hp: "HP",
      defense: "DEF",
      critRate: "Crit. Rate",
      critDamage: "Crit. DMG",
      attackPercent: "ATK",
      hpPercent: "HP",
      defensePercent: "DEF",
      energyRegen: "Energy Regen",
      healingBonus: "Healing Bonus",
      breakAmp: "Tune Break Boost",
      discordEff: "Off-Tune Buildup Efficiency",
    },
    zones: {
      attackPercent: "ATK",
      attackFlat: "Flat ATK",
      hpPercent: "HP",
      defensePercent: "DEF",
      critRate: "Crit. Rate",
      critDamage: "Crit. DMG",
      damageBonus: "DMG Bonus",
      typeBonus: "DMG Bonus",
      amplify: "DMG Increase",
      vulnerability: "Vulnerability",
      skillMultBonus: "DMG Multiplier Increase",
      multAdd: "DMG Multiplier Increase",
      finalDmg: "Final DMG Bonus",
      resShred: "RES Shred",
      defShred: "DEF Shred",
      defIgnore: "DEF Ignore",
      energyRegen: "Energy Regen",
      healingBonus: "Healing Bonus",
      breakAmp: "Tune Break Boost",
      discordEff: "Off-Tune Buildup Efficiency",
      effectCapBonus: "Effect Stack Cap",
    },
    effects: {
      electro: "Electro Flare",
      frost: "Glacio Chafe",
      fusion: "Fusion Burst",
      lightNoise: "Spectro Frazzle",
      windErosion: "Aero Erosion",
      havocBane: "Havoc Bane",
    },
  },
  ko: {
    elements: {
      fusion: "용융",
      glacio: "응결",
      electro: "전도",
      aero: "기류",
      spectro: "회절",
      havoc: "인멸",
      physical: "물리",
    },
    categories: {
      basicAttack: "일반 공격",
      resonanceSkill: "공명 스킬",
      resonanceLiberation: "공명 해방",
      forteCircuit: "공명 회로",
      introSkill: "변주 스킬",
      outroSkill: "반주 스킬",
      echoSkill: "에코 어빌리티",
      resonanceChain: "공명 체인",
    },
    damageTypes: {
      basic: "일반 공격 피해",
      heavy: "강공격 피해",
      midAir: "공중 공격 피해",
      dodgeCounter: "회피 반격 피해",
      resonanceSkill: "공명 스킬 피해",
      resonanceLiberation: "공명 해방 피해",
      echoSkill: "에코 어빌리티 피해",
      introSkill: "변주 스킬 피해",
      outroSkill: "반주 스킬 피해",
      coordinated: "협동 공격",
      hackDmg: "해킹 파괴 피해",
      tuneBreak: "조화도 파괴",
      tuneBreakDmg: "조화도 파괴 피해",
      tuneRupture: "진동 파열 피해",
      tuneRuptureDmg: "진동 파열 피해",
      electro: "전자 효과",
      frost: "서리 효과",
      fusion: "불꽃 효과",
      lightNoise: "광학 효과",
      windErosion: "풍식 효과",
      havocBane: "암흑 효과",
    },
    stats: {
      attack: "공격력",
      hp: "HP",
      defense: "방어력",
      critRate: "크리티컬",
      critDamage: "크리티컬 피해",
      attackPercent: "공격력",
      hpPercent: "HP",
      defensePercent: "방어력",
      energyRegen: "공명 효율",
      healingBonus: "치료 효과 보너스",
      breakAmp: "조화도 파괴 증폭",
      discordEff: "편조 축적 효율",
    },
    zones: {
      attackPercent: "공격력",
      attackFlat: "고정 공격력",
      hpPercent: "HP",
      defensePercent: "방어력",
      critRate: "크리티컬",
      critDamage: "크리티컬 피해",
      damageBonus: "피해 보너스",
      typeBonus: "피해 보너스",
      amplify: "피해 증가",
      vulnerability: "받는 피해 증가",
      skillMultBonus: "피해 배율 상승",
      multAdd: "피해 배율 상승",
      finalDmg: "최종 피해 보너스",
      resShred: "내성 감소",
      defShred: "방어 감소",
      defIgnore: "방어 무시",
      energyRegen: "공명 효율",
      healingBonus: "치료 효과 보너스",
      breakAmp: "조화도 파괴 증폭",
      discordEff: "편조 축적 효율",
      effectCapBonus: "이상 효과 스택 상한",
    },
    effects: {
      electro: "전자 효과",
      frost: "서리 효과",
      fusion: "불꽃 효과",
      lightNoise: "광학 효과",
      windErosion: "풍식 효과",
      havocBane: "암흑 효과",
    },
  },
  "ja-JP": {
    elements: {
      fusion: "焦熱",
      glacio: "凝縮",
      electro: "電導",
      aero: "気動",
      spectro: "回折",
      havoc: "消滅",
      physical: "物理",
    },
    categories: {
      basicAttack: "通常攻撃",
      resonanceSkill: "共鳴スキル",
      resonanceLiberation: "共鳴解放",
      forteCircuit: "共鳴回路",
      introSkill: "変奏スキル",
      outroSkill: "終奏スキル",
      echoSkill: "音骸スキル",
      resonanceChain: "共鳴チェーン",
    },
    damageTypes: {
      basic: "通常攻撃ダメージ",
      heavy: "重撃ダメージ",
      midAir: "空中攻撃ダメージ",
      dodgeCounter: "回避反撃ダメージ",
      resonanceSkill: "共鳴スキルダメージ",
      resonanceLiberation: "共鳴解放ダメージ",
      echoSkill: "音骸スキルダメージ",
      introSkill: "変奏スキルダメージ",
      outroSkill: "終奏スキルダメージ",
      coordinated: "協同攻撃",
      hackDmg: "ハックダメージ",
      tuneBreak: "協和破壊",
      tuneBreakDmg: "協和破壊ダメージ",
      tuneRupture: "震撃協和ダメージ",
      tuneRuptureDmg: "震撃協和ダメージ",
      electro: "電磁効果",
      frost: "結霜効果",
      fusion: "斉爆効果",
      lightNoise: "騒光効果",
      windErosion: "風蝕効果",
      havocBane: "虚滅効果",
    },
    stats: {
      attack: "攻撃力",
      hp: "HP",
      defense: "防御力",
      critRate: "クリティカル",
      critDamage: "クリティカルダメージ",
      attackPercent: "攻撃力",
      hpPercent: "HP",
      defensePercent: "防御力",
      energyRegen: "共鳴効率",
      healingBonus: "治療効果アップ",
      breakAmp: "協和破壊ブースト",
      discordEff: "協和値蓄積効率",
    },
    zones: {
      attackPercent: "攻撃力",
      attackFlat: "固定攻撃力",
      hpPercent: "HP",
      defensePercent: "防御力",
      critRate: "クリティカル",
      critDamage: "クリティカルダメージ",
      damageBonus: "ダメージアップ",
      typeBonus: "ダメージアップ",
      amplify: "ダメージブースト",
      vulnerability: "被ダメージアップ",
      skillMultBonus: "ダメージ倍率アップ",
      multAdd: "ダメージ倍率アップ",
      finalDmg: "最終ダメージアップ",
      resShred: "耐性ダウン",
      defShred: "防御力ダウン",
      defIgnore: "防御力無視",
      energyRegen: "共鳴効率",
      healingBonus: "治療効果アップ",
      breakAmp: "協和破壊ブースト",
      discordEff: "協和値蓄積効率",
      effectCapBonus: "異常効果スタック上限",
    },
    effects: {
      electro: "電磁効果",
      frost: "結霜効果",
      fusion: "斉爆効果",
      lightNoise: "騒光効果",
      windErosion: "風蝕効果",
      havocBane: "虚滅効果",
    },
  },
};

const sourcePrefix = {
  "en-US": {
    "固有": "Inherent Skill",
    "共鸣回路": "Forte Circuit",
    "共鸣技能": "Resonance Skill",
    "共鸣解放": "Resonance Liberation",
    "变奏": "Intro Skill",
    "变奏技能": "Intro Skill",
    "延奏": "Outro Skill",
    "延奏技能": "Outro Skill",
    "声骸": "Echo Skill",
    "共鸣链": "Resonance Chain",
  },
  ko: {
    "固有": "고유 스킬",
    "共鸣回路": "공명 회로",
    "共鸣技能": "공명 스킬",
    "共鸣解放": "공명 해방",
    "变奏": "변주 스킬",
    "变奏技能": "변주 스킬",
    "延奏": "반주 스킬",
    "延奏技能": "반주 스킬",
    "声骸": "에코 어빌리티",
    "共鸣链": "공명 체인",
  },
  "ja-JP": {
    "固有": "固有スキル",
    "共鸣回路": "共鳴回路",
    "共鸣技能": "共鳴スキル",
    "共鸣解放": "共鳴解放",
    "变奏": "変奏スキル",
    "变奏技能": "変奏スキル",
    "延奏": "終奏スキル",
    "延奏技能": "終奏スキル",
    "声骸": "音骸スキル",
    "共鸣链": "共鳴チェーン",
  },
};

const manualSkillNames = {
  ko: {
    "aalto.skill_mist_bullet": "안개 트릭 - 안개 미사일 피해 (총합)",
    "calcharo.k6_hunting_shadow": "최후의 일격 - 환영 협동 공격 피해",
    "jianxin.skill_special_chi": "공명 스킬 - 특수 기의 반격 피해",
    "lingyang.forte_mountain_roamer_practice": "사자의 길 - 산속의 수행자 · 수련",
    "mortefi.air": "즉흥 연주 - 공중 공격 총 피해",
    "rover_havoc.outro": "소리의 부름",
    "zhezhi.k5_extra_mohe": "허실의 경계 - 5번째 공명 체인 추가 먹학 피해",
    "shorekeeper.burst_field": "회귀의 고리 - 스타 필드",
    "camellya.outro": "뒤엉킨 넝쿨 - 반주 스킬 피해",
    "camellya.outro_bloom": "뒤엉킨 넝쿨 - 붉은 동백꽃 후속 피해",
    "brant.outro_blast": "미소와 환호를 위해 - 진로 확정! 폭발 피해",
    "brant.rekindle": "세계는 선장의 카니발 - 추가 폭발 피해",
    "ciaccona.c6_solo": "멈추지 않는 카덴차 - 솔로 콘서트 협동 공격 피해",
    "phrolova.k6_hecate_phantom": "영원한 안식에서 떠나는 밤 - 저 너머의 환영 · 헤카테 피해",
    "augusta.c6_wrath": "찬란한 빛에 새겨진 맹세 - 천둥의 분노 피해",
    "qiuyuan.skill_lotuscloak": "숲속을 지나 - 연잎 망토 등장",
    "qiuyuan.ink_exit": "푸른 칼끝 - 취묵 상태 종료 피해",
    "denia.c3_sc_na4_dark_core": "밤바람을 가르는 붉은 버들 - 어둠의 핵심 · 연극의 모습 일반 공격 4단 피해",
    "denia.c3_sc_skill_dark_core": "밤바람을 가르는 붉은 버들 - 어둠의 핵심 · 흉내낸 거품 · 연극의 모습 피해",
    "lucy.heavy_multithread_sql": "잠긴 스레드 - 강공격 · 멀티스레딩 피해 (SQL)",
    "lucy.skill_pulse_c2": "프로토콜 침입 - 2번째 공명 체인 펄스 간섭 추가 피해",
    "lumi.yellow_na": "전방 인도 - 노란 불 · 일반 공격 피해",
    "phrolova.hecate_1_bg": "잊혀진 심연의 왈츠 - 일반 공격 · 헤카테 1단 피해 (대기)",
    "phrolova.hecate_2_bg": "잊혀진 심연의 왈츠 - 일반 공격 · 헤카테 2단 피해 (대기)",
    "phrolova.hecate_strings_bg": "잊혀진 심연의 왈츠 - 강화된 공격 · 현악 · 헤카테 피해 (대기)",
    "phrolova.hecate_cadenza_bg": "잊혀진 심연의 왈츠 - 강화된 공격 · 카덴차 · 헤카테 피해 (대기)",
    "augusta.dodge_sunstrike": "나처럼 빛나는 태양 - 공중 회피 반격 · 영원한 불패의 태양 · 신속 공격 피해",
    "denia.void_bd_na1": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 일반 공격 1단 피해",
    "denia.void_bd_na2": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 일반 공격 2단 피해",
    "denia.void_bd_na3": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 일반 공격 3단 피해",
    "denia.void_bd_na4": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 일반 공격 4단 피해",
    "denia.void_bd_heavy": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 강공격 피해",
    "denia.void_bd_air_heavy": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 공중 강공격 피해",
    "denia.void_bd_dodge": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 회피 반격 피해",
    "denia.void_bd_air1": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 공중 공격 1단 피해",
    "denia.void_bd_air2": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 공중 공격 2단 피해",
    "denia.void_bd_air3": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 공중 공격 3단 피해",
    "denia.void_bd_air4": "「완전무결」 - 보이드매터 입자 · 환멸의 모습 공중 공격 4단 피해",
  },
  "ja-JP": {
    "aalto.skill_mist_bullet": "瞬間移動トリック - 霧弾丸ダメージ（合計）",
    "calcharo.k6_hunting_shadow": "最終警告 - 幻影協同攻撃ダメージ",
    "jianxin.skill_special_chi": "共鳴スキル - 特殊気の巡り反撃ダメージ",
    "lingyang.forte_mountain_roamer_practice": "形神統一 - 山を歩む者・修練",
    "mortefi.air": "即興曲 - 空中攻撃合計ダメージ",
    "rover_havoc.outro": "慟哭",
    "zhezhi.k5_extra_mohe": "虚実の雅趣 - 5番目共鳴チェーン追加墨鶴ダメージ",
    "shorekeeper.burst_field": "終末ループ - 星域",
    "camellya.outro": "纏わり - 終奏スキルダメージ",
    "camellya.outro_bloom": "纏わり - 咲き誇る赤い椿追撃ダメージ",
    "brant.outro_blast": "航路確定！ - 爆発ダメージ",
    "brant.rekindle": "ブラントは答える、カルネヴァーレこそ世界なんだ！ - 追加爆発ダメージ",
    "ciaccona.c6_solo": "未完のフィナーレ - ソロ協同攻撃ダメージ",
    "phrolova.k6_hecate_phantom": "闇夜、其は安息と終焉より目覚めし時 - 彼方の幻影・ヘカテーダメージ",
    "augusta.c6_wrath": "まばゆい光に、その名は永遠に刻まれる - 怒りの雷ダメージ",
    "qiuyuan.skill_lotuscloak": "枝葉をよぎる剣影 - 蓮葉のマント登場",
    "qiuyuan.ink_exit": "黒中の蒼 - 酔墨状態終了ダメージ",
    "denia.c3_sc_na4_dark_core": "夜風を駆けるはヤナギの木 - 暗核・通常攻撃・芝居の形4段目ダメージ",
    "denia.c3_sc_skill_dark_core": "夜風を駆けるはヤナギの木 - 暗核・擬態の泡沫・芝居の形ダメージ",
    "lucy.heavy_multithread_sql": "スレッド実行 - 重撃・マルチスレッドダメージ（SQL）",
    "lucy.skill_pulse_c2": "ブリーチプロトコル - 2番目共鳴チェーン パルス干渉追加ダメージ",
    "lumi.yellow_na": "道案内 - 黄色灯・通常攻撃ダメージ",
    "phrolova.hecate_1_bg": "忘れられし深淵のワルツ - 通常攻撃・ヘカテー1段目ダメージ（控え）",
    "phrolova.hecate_2_bg": "忘れられし深淵のワルツ - 通常攻撃・ヘカテー2段目ダメージ（控え）",
    "phrolova.hecate_strings_bg": "忘れられし深淵のワルツ - 強化攻撃・弦楽・ヘカテーダメージ（控え）",
    "phrolova.hecate_cadenza_bg": "忘れられし深淵のワルツ - 強化攻撃・カデンツァ・ヘカテーダメージ（控え）",
    "augusta.dodge_sunstrike": "余こそ太陽なり - 空中回避反撃・無敗の炎陽・瞬撃ダメージ",
    "denia.void_bd_na1": "「完全無欠」 - ボイドマター粒子・通常攻撃・幻滅の形1段目ダメージ",
    "denia.void_bd_na2": "「完全無欠」 - ボイドマター粒子・通常攻撃・幻滅の形2段目ダメージ",
    "denia.void_bd_na3": "「完全無欠」 - ボイドマター粒子・通常攻撃・幻滅の形3段目ダメージ",
    "denia.void_bd_na4": "「完全無欠」 - ボイドマター粒子・通常攻撃・幻滅の形4段目ダメージ",
    "denia.void_bd_heavy": "「完全無欠」 - ボイドマター粒子・重撃・幻滅の形ダメージ",
    "denia.void_bd_air_heavy": "「完全無欠」 - ボイドマター粒子・空中重撃・幻滅の形ダメージ",
    "denia.void_bd_dodge": "「完全無欠」 - ボイドマター粒子・回避反撃・幻滅の形ダメージ",
    "denia.void_bd_air1": "「完全無欠」 - ボイドマター粒子・空中攻撃・幻滅の形1段目ダメージ",
    "denia.void_bd_air2": "「完全無欠」 - ボイドマター粒子・空中攻撃・幻滅の形2段目ダメージ",
    "denia.void_bd_air3": "「完全無欠」 - ボイドマター粒子・空中攻撃・幻滅の形3段目ダメージ",
    "denia.void_bd_air4": "「完全無欠」 - ボイドマター粒子・空中攻撃・幻滅の形4段目ダメージ",
  },
};

const manualTermMap = {
  "en-US": {
    "暴击": "Crit. Rate",
    "暴击率": "Crit. Rate",
    "暴击伤害": "Crit. DMG",
    "治疗效果加成": "Healing Bonus",
    "伤害加深": "DMG Increase",
    "倍率提升": "DMG Multiplier Increase",
    "技能倍率提升": "DMG Multiplier Increase",
    "技能伤害": "Skill DMG",
    "伤害公式": "DMG Formula",
    "谐度响应伤害按谐度基础值、响应系数与谐度破坏增幅独立结算，不吃攻击、暴击、属性加成、类型加成。": "Tune Response DMG uses Tune Base Value, Response Multiplier, and Tune Break Boost; ATK, Crit., Attribute DMG Bonus, and DMG Type Bonus do not apply.",
    "已计入普通伤害防御系数": "Included in the Skill DMG DEF multiplier",
    "全属性伤害加成": "All-Attribute DMG Bonus",
    "属性伤害加成": "Attribute DMG Bonus",
    "异常效应层数上限": "Effect Stack Cap",
    "状态": "State",
    "形态": "Form",
    "目标": "Target",
    "默认": "Default",
    "登场": "Active",
    "后台": "Off-field",
    "残忍": "Cruelty",
    "杀意": "Killing Intent",
    "失序值": "Mayhem",
    "气": "Chi",
    "混元气旋周天": "Zhoutian Progress",
    "未达小周天": "Before Minor Zhoutian",
    "小周天": "Minor Zhoutian",
    "大周天": "Major Zhoutian",
    "大周天·内": "Major Zhoutian: Inner",
    "大周天·外": "Major Zhoutian: Outer",
    "大周天 · 内": "Major Zhoutian: Inner",
    "大周天 · 外": "Major Zhoutian: Outer",
    "内": "Inner",
    "外": "Outer",
    "狮魂": "Lion's Spirit",
    "怒气值": "Annoyance",
    "暗流": "Umbra",
    "尘微之声": "Diminutive Sound",
    "声流响": "Melodies",
    "流响": "Melody",
    "目标印记": "Target Mark",
    "缚罪标记": "Sinner's Mark",
    "惩罚印记": "Punishment Mark",
    "锋芒": "Readiness",
    "雷之楔": "Thunder Wedge",
    "雷之楔在场": "Thunder Wedge Active",
    "雷池": "Thunder Field",
    "雷池范围": "Thunder Field Range",
    "焰羽": "Fiery Feather",
    "焰羽状态": "Fiery Feather",
    "离火": "Enflamement",
    "红椿盛绽": "Crimson Blossom",
    "红椿·蕊": "Crimson Pistils",
    "红椿·蕾": "Crimson Buds",
    "红椿 · 蕊": "Crimson Pistils",
    "红椿 · 蕾": "Crimson Buds",
    "一日花": "Ephemeral",
    "永生花": "Perennial",
    "含苞状态": "Budding Mode",
    "酣梦": "Sweet Dream",
    "演算效能": "Capacity",
    "超算效能": "Performance Capacity",
    "实证数据": "Actual Data",
    "星域": "Stellarealm",
    "浅析": "Outer",
    "深潜": "Inner",
    "解限": "Supernal",
    "浅析星域": "Outer Stellarealm",
    "深潜星域": "Inner Stellarealm",
    "解限星域": "Supernal Stellarealm",
    "霜色": "Frost",
    "吉兆": "Auspice",
    "吉兆组合": "Auspice Combination",
    "对偶": "Antithesis",
    "双关": "Double Pun",
    "联珠": "Triplet",
    "合说": "Perfect Rhyme",
    "光能": "Spark",
    "黄灯": "Yellow Light",
    "红灯": "Red Light",
    "灯号模式": "Traffic Light Mode",
    "黄灯模式": "Yellow Light Mode",
    "红灯模式": "Red Light Mode",
    "黄灯聚光": "Yellow Spotlight",
    "红灯聚光": "Red Spotlight",
    "黄灯聚光模式": "Yellow Spotlight Mode",
    "红灯聚光模式": "Red Spotlight Mode",
    "灵萃": "Substance",
    "镀色晶": "Tinted Crystal",
    "镀色晶激活": "Tinted Crystal Active",
    "福音": "Solace",
    "祈愿": "Prayer",
    "赦罪": "Absolution",
    "告解": "Confession",
    "赦罪/告解状态": "Absolution/Confession State",
    "镜之环": "Ring of Mirrors",
    "镜之环位置": "Ring of Mirrors Position",
    "环外": "Outside the Ring",
    "环内": "Inside the Ring",
    "颤栗": "Shiver",
    "迷离": "Trance",
    "蜃境": "Mirage",
    "目标迷梦": "Target Hazy Dream",
    "迷梦": "Hazy Dream",
    "冗余动能": "Redundant Kinetic Energy",
    "烈阳余烬": "Blazing Ember",
    "目标烈阳余烬": "Target Blazing Ember",
    "斩棘": "Sunburst",
    "斩棘状态": "Sunburst State",
    "芙露德莉斯": "Fleurdelys",
    "权柄": "Conviction",
    "看潮怒风哮之刃": "Blade of Howling Squall",
    "月相状态": "Lunar Cycle",
    "月相流转": "Lunar Cycle",
    "月相流转·弦月": "Lunar Cycle - Half Moon",
    "月相流转·新月": "Lunar Cycle - New Moon",
    "满月领域": "Full Moon Domain",
    "位格状态": "Demon Hypostasis",
    "恶魔位格": "Demon Hypostasis",
    "目标虚无绞痕": "Target Void Entanglement",
    "静质量能": "Rest Mass Energy",
    "相对动能": "Relative Kinetic Energy",
    "目标干涉标记": "Target Interfered Marker",
    "目标谐度干涉": "Target Off-Tune Interference",
    "谐度干涉": "Off-Tune Interference",
    "震谐": "Tune Rupture",
    "集谐": "Tune Strain",
    "骇破": "Hack",
    "偏移": "Shifting",
    "干涉": "Interfered",
    "目标震谐": "Target Tune Rupture",
    "目标集谐": "Target Tune Strain",
    "目标骇破": "Target Hack",
    "目标震谐状态": "Target Tune Rupture State",
    "目标集谐状态": "Target Tune Strain State",
    "目标骇破状态": "Target Hack State",
    "骇破目标状态": "Hack Target State",
    "目标震谐 · 偏移": "Target Tune Rupture - Shifting",
    "目标震谐 · 干涉": "Target Tune Rupture - Interfered",
    "目标集谐 · 偏移": "Target Tune Strain - Shifting",
    "目标集谐 · 干涉": "Target Tune Strain - Interfered",
    "目标骇破 · 偏移": "Target Hack - Shifting",
    "目标骇破 · 干涉": "Target Hack - Interfered",
    "谐度干涉 · 震谐": "Off-Tune Interference - Tune Rupture",
    "谐度干涉 · 集谐": "Off-Tune Interference - Tune Strain",
    "居合架势": "Iai Stance",
    "雪锈": "Snowrust",
    "SQL": "SQL",
    "少阴": "Minor Yin",
    "少阳": "Minor Yang",
    "雷法": "Thunder Spell",
    "一气初动": "Primordial Qi",
    "两仪交泰": "Yin and Yang",
    "三才合一": "Heaven, Earth, Mind",
    "雷法 · 一气初动": "Thunder Spell - Primordial Qi",
    "雷法 · 两仪交泰": "Thunder Spell - Yin and Yang",
    "雷法 · 三才合一": "Thunder Spell - Heaven, Earth, Mind",
    "辉芒状态": "Brilliance",
    "机兵": "Mech",
    "视觉冲击": "Visual Impact",
    "符文·期望": "Rune: Trust",
    "符文·答问": "Rune: Answer",
    "符文 · 期望": "Rune: Trust",
    "符文 · 答问": "Rune: Answer",
    "符文": "Rune",
    "期望": "Trust",
    "身相形态": "Self Form",
    "身相": "Self",
    "常世身": "Present Self",
    "预求身": "Foreclaimed Self",
    "战斗模式": "Combat Mode",
    "模式·猎手": "Huntress Mode",
    "模式·铁胆": "Guts Mode",
    "模式 · 猎手": "Huntress Mode",
    "模式 · 铁胆": "Guts Mode",
    "模式": "Combat Mode",
    "猎手": "Huntress",
    "铁胆": "Guts",
    "该用这个了！": "Gloves Are Comin' Off!",
    "答问": "Thus Spoke the Blade",
  },
  ko: {
    "暴击": "크리티컬",
    "暴击率": "크리티컬",
    "暴击伤害": "크리티컬 피해",
    "治疗效果加成": "치료 효과 보너스",
    "伤害加深": "피해 증가",
    "倍率提升": "피해 배율 상승",
    "技能倍率提升": "피해 배율 상승",
    "技能伤害": "스킬 피해",
    "伤害公式": "피해 계산식",
    "谐度响应伤害按谐度基础值、响应系数与谐度破坏增幅独立结算，不吃攻击、暴击、属性加成、类型加成。": "조화도 응답 피해는 조화도 기본값, 응답 계수, 조화도 파괴 증폭으로 독립 계산되며 공격력, 크리티컬, 속성 보너스, 유형 보너스를 받지 않습니다.",
    "已计入普通伤害防御系数": "스킬 피해 방어 계수에 반영됨",
    "全属性伤害加成": "전체 속성 피해 보너스",
    "属性伤害加成": "속성 피해 보너스",
    "异常效应层数上限": "이상 효과 스택 상한",
    "状态": "상태",
    "形态": "형태",
    "目标": "목표",
    "默认": "기본",
    "登场": "등장",
    "后台": "대기",
    "残忍": "잔인",
    "杀意": "살의",
    "失序值": "무질서 게이지",
    "气": "기",
    "混元气旋周天": "기의 축적 상태",
    "未达小周天": "소주천 미만",
    "小周天": "소주천",
    "大周天": "대주천",
    "大周天·内": "대주천 · 내",
    "大周天·外": "대주천 · 외",
    "大周天 · 内": "대주천 · 내",
    "大周天 · 外": "대주천 · 외",
    "狮魂": "사자의 혼",
    "怒气值": "분노 게이지",
    "暗流": "어둠의 흐름",
    "尘微之声": "미세한 소리",
    "声流响": "흐르는 소리",
    "流响": "흐르는 소리",
    "目标印记": "목표 표식",
    "缚罪标记": "죄악의 표식",
    "惩罚印记": "징벌의 인장",
    "锋芒": "예리한 뇌전",
    "雷之楔": "뇌전의 쐐기",
    "雷之楔在场": "뇌전의 쐐기 존재",
    "雷池": "뇌전의 늪",
    "雷池范围": "뇌전의 늪 범위",
    "焰羽": "빨간 깃털",
    "焰羽状态": "빨간 깃털",
    "离火": "이화",
    "红椿盛绽": "피어난 동백꽃",
    "红椿·蕊": "붉은 동백꽃 · 꽃술",
    "红椿·蕾": "붉은 동백꽃 · 꽃망울",
    "红椿 · 蕊": "붉은 동백꽃 · 꽃술",
    "红椿 · 蕾": "붉은 동백꽃 · 꽃망울",
    "一日花": "일순의 꽃",
    "永生花": "영원한 꽃",
    "含苞状态": "만개 직전 상태",
    "酣梦": "달콤한 꿈",
    "演算效能": "연산 효과",
    "超算效能": "강력 연산 효과",
    "实证数据": "실증 데이터",
    "星域": "별의 영역",
    "浅析": "표층",
    "深潜": "심층",
    "解限": "해금",
    "浅析星域": "별의 영역 · 표층",
    "深潜星域": "별의 영역 · 심층",
    "解限星域": "별의 영역 · 해금",
    "霜色": "서리빛",
    "吉兆": "길상",
    "吉兆组合": "길상 조합",
    "对偶": "대우(對偶)",
    "双关": "쌍관(雙關)",
    "联珠": "연주(聯珠)",
    "合说": "합설(合說)",
    "光能": "불빛 에너지",
    "黄灯": "노란 불",
    "红灯": "빨간 불",
    "灯号模式": "신호등 모드",
    "黄灯模式": "노란 불 모드",
    "红灯模式": "빨간 불 모드",
    "黄灯聚光": "노란 불 스포트라이트",
    "红灯聚光": "빨간 불 스포트라이트",
    "黄灯聚光模式": "노란 불 스포트라이트 모드",
    "红灯聚光模式": "빨간 불 스포트라이트 모드",
    "灵萃": "영민",
    "镀色晶": "도색 결정체",
    "镀色晶激活": "도색 결정체 활성화",
    "福音": "복음",
    "祈愿": "기도",
    "赦罪": "사죄",
    "告解": "고해",
    "赦罪/告解状态": "사죄/고해 상태",
    "镜之环": "거울의 고리",
    "镜之环位置": "거울의 고리 위치",
    "环外": "고리 밖",
    "环内": "고리 안",
    "颤栗": "떨림",
    "迷离": "몽롱",
    "蜃境": "신기루",
    "目标迷梦": "목표 환몽",
    "迷梦": "환몽",
    "冗余动能": "잉여 운동 에너지",
    "烈阳余烬": "강렬한 불기운",
    "目标烈阳余烬": "목표 강렬한 불기운",
    "斩棘": "가시 베기",
    "斩棘状态": "가시 베기 상태",
    "芙露德莉斯": "플뢰르 드 리스",
    "权柄": "결의",
    "看潮怒风哮之刃": "폭풍의 울음을 가르는 칼날",
    "月相状态": "달의 순환",
    "月相流转": "달의 순환",
    "月相流转·弦月": "달의 순환 · 반달",
    "月相流转·新月": "달의 순환 · 초승달",
    "满月领域": "보름달 영역",
    "位格状态": "악마 위격",
    "恶魔位格": "악마 위격",
    "目标虚无绞痕": "목표 공허히 얽힌 흔적",
    "静质量能": "정지 질량 에너지",
    "相对动能": "상대 운동 에너지",
    "目标干涉标记": "목표 간섭 표기",
    "目标谐度干涉": "목표 조화도 간섭",
    "谐度干涉": "조화도 간섭",
    "震谐": "조화 파동",
    "集谐": "조화 밀집",
    "骇破": "해킹",
    "偏移": "이탈",
    "干涉": "간섭",
    "目标震谐": "목표 조화 파동",
    "目标集谐": "목표 조화 밀집",
    "目标骇破": "목표 해킹",
    "目标震谐状态": "목표 조화 파동 상태",
    "目标集谐状态": "목표 조화 밀집 상태",
    "目标骇破状态": "목표 해킹 상태",
    "骇破目标状态": "해킹 목표 상태",
    "目标震谐 · 偏移": "목표 조화 파동 · 이탈",
    "目标震谐 · 干涉": "목표 조화 파동 · 간섭",
    "目标集谐 · 偏移": "목표 조화 밀집 · 이탈",
    "目标集谐 · 干涉": "목표 조화 밀집 · 간섭",
    "目标骇破 · 偏移": "목표 해킹 · 이탈",
    "目标骇破 · 干涉": "목표 해킹 · 간섭",
    "谐度干涉 · 震谐": "조화도 간섭 · 조화 파동",
    "谐度干涉 · 集谐": "조화도 간섭 · 조화 밀집",
    "居合架势": "거합 자세",
    "雪锈": "눈녹",
    "SQL": "SQL",
    "少阴": "소음(少陰)",
    "少阳": "소양(少陽)",
    "雷法": "뇌법(雷法)",
    "一气初动": "기운의 근원",
    "两仪交泰": "음양의 조화",
    "三才合一": "천지인 합일",
    "雷法 · 一气初动": "뇌법(雷法) · 기운의 근원",
    "雷法 · 两仪交泰": "뇌법(雷法) · 음양의 조화",
    "雷法 · 三才合一": "뇌법(雷法) · 천지인 합일",
    "辉芒状态": "찬란한 빛",
    "机兵": "메카스카우트",
    "视觉冲击": "비주얼 쇼크",
    "符文·期望": "룬 · 기대",
    "符文·答问": "룬 · 문답",
    "符文 · 期望": "룬 · 기대",
    "符文 · 答问": "룬 · 문답",
    "符文": "룬",
    "期望": "기대",
    "身相形态": "형태",
    "身相": "형태",
    "常世身": "현세의 나",
    "预求身": "선견력",
    "战斗模式": "전투 모드",
    "模式·猎手": "헌트리스 모드",
    "模式·铁胆": "거츠 모드",
    "模式 · 猎手": "헌트리스 모드",
    "模式 · 铁胆": "거츠 모드",
    "模式": "모드",
    "猎手": "헌트리스",
    "铁胆": "거츠",
    "该用这个了！": "이제부터가 진짜야!",
    "答问": "검의 회답",
    "小孩子才做选择": "선택은 아이들이나 하는 것",
    "变奏入场": "변주 입장",
    "共鸣技能后": "공명 스킬 후",
    "共鸣解放后": "공명 해방 후",
    "变奏入场后": "변주 입장 후",
    "提供治疗": "치료 제공",
    "冲击": "충격",
    "角色登场": "캐릭터 등장",
    "施放变奏技能": "변주 스킬 발동",
    "施放共鸣技能": "공명 스킬 발동",
    "施放共鸣解放": "공명 해방 발동",
    "治疗": "치료",
    "护盾": "실드",
    "协同攻击": "협동 공격",
    "对应干涉状态": "대응 간섭 상태",
    "该状态本身不直接造成伤害": "해당 상태 자체는 직접 피해를 주지 않음",
    "状态层数": "상태 스택",
    "相关角色面板": "관련 캐릭터 스탯",
    "集谐干涉": "조화 밀집 · 간섭",
  },
  "ja-JP": {
    "角色基础": "共鳴者基礎",
    "属性树": "スキルツリー",
    "声骸": "音骸",
    "声骸固定": "音骸固定値",
    "声骸加成": "音骸ステータス",
    "武器": "武器",
    "Broadblade": "長刃",
    "Sword": "迅刀",
    "Pistols": "拳銃",
    "Gauntlets": "手甲",
    "Rectifier": "増幅器",
    "技能树": "スキルツリー",
    "共鸣链": "共鳴チェーン",
    "其他": "その他",
    "不计算": "計算しない",
    "未启用": "未使用",
    "未选择": "未選択",
    "未触发": "未発動",
    "无": "なし",
    "一直有效": "常時有効",
    "当前技能有效": "現在のスキルに有効",
    "常驻": "常時",
    "技能内": "スキル内",
    "当前状态": "現在の状態",
    "当前形态": "現在の形態",
    "当前模式": "現在のモード",
    "共鸣模态": "共鳴モード",
    "当前阶段": "現在の段階",
    "已确认": "確認済み",
    "需确认触发条件": "発動条件の確認が必要",
    "自动应用": "自動適用",
    "已关闭": "オフ",
    "当前技能决定": "現在のスキルで決定",
    "按当前目标状态/标记选择": "現在の目標状態/マークで選択",
    "按当前场地效果选择": "現在のフィールド効果で選択",
    "按当前模式选择": "現在のモードで選択",
    "按当前形态选择": "現在の形態で選択",
    "按当前阶段选择": "現在の段階で選択",
    "按当前增益选择": "現在のバフで選択",
    "按当前机制选择": "現在のメカニズムで選択",
    "按当前战斗状态选择": "現在の戦闘状態で選択",
    "目标无": "目標状態なし",
    "未展开": "未展開",
    "未确认": "未確認",
    "未获得": "未獲得",
    "未处于": "未適用",
    "有": "あり",
    "处于": "状態:",
    "效应": "異常効果",
    "提供者": "提供者",
    "层数": "スタック",
    "爆发层数": "爆発スタック",
    "手动加深%": "手動ブースト%",
    "体系": "体系",
    "目标Cost": "目標Cost",
    "响应等级": "レスポンスLv",
    "本次结算": "今回の計算",
    "技能": "スキル",
    "技能等级": "スキルLv",
    "入场": "登場",
    "条件": "条件",
    "敌方等级": "敵Lv",
    "我方等级": "味方Lv",
    "属性抗性%": "属性耐性%",
    "属性减抗%": "属性耐性ダウン%",
    "减防%": "防御力ダウン%",
    "防御无视%": "防御力無視%",
    "最终伤害%": "最終ダメージ%",
    "易伤%": "被ダメージアップ%",
    "受到伤害减少%": "被ダメージ軽減%",
    "角色面板": "共鳴者ステータス",
    "本次攻击 Buff": "今回の攻撃 Buff",
    "声骸详情": "音骸詳細",
    "声骸汇总": "音骸合計",
    "套装效果": "セット効果",
    "首位效果": "メイン音骸効果",
    "面板汇总": "ステータス合計",
    "套装": "セット",
    "套": "セット",
    "首位声骸": "メイン音骸",
    "首位": "メイン",
    "主词条": "メインステータス",
    "副词条": "サブステータス",
    "副词条数值": "サブステータス値",
    "固定": "固定",
    "固定等级参数": "固定レベル係数",
    "声骸 1": "音骸1",
    "声骸 2": "音骸2",
    "声骸 3": "音骸3",
    "声骸 4": "音骸4",
    "声骸 5": "音骸5",
    "详细声骸模式": "詳細音骸モード",
    "详细模式": "詳細モード",
    "由详细声骸汇总": "詳細音骸から集計",
    "输入游戏中声骸总面板": "ゲーム内の音骸合計値を入力",
    "添加队友": "チームメンバーを追加",
    "武器阶级": "武器ランク",
    "删除": "削除",
    "移除": "削除",
    "当前攻击没有可自动应用或需确认触发条件的 Buff。": "現在の攻撃に自動適用または確認待ちのBuffはありません。",
    "本次释放自动结算": "今回の発動を自動判定",
    "按当前技能、队伍、链数、资源、状态自动判定": "現在のスキル、チーム、共鳴チェーン、リソース、状態から判定",
    "需前置确认": "前提確認が必要",
    "可变数值": "可変値",
    "不满足门槛": "条件未達成",
    "未自动应用的 Buff": "自動適用されないBuff",
    "不满足当前技能 / 队伍 / 延奏 / 状态门槛": "現在のスキル / チーム / 終奏 / 状態条件を満たしていません",
    "最终伤害": "最終ダメージ",
    "技能伤害": "スキルダメージ",
    "伤害公式": "ダメージ計算式",
    "其它伤害 · 独立结算": "その他ダメージ・個別計算",
    "效应伤害": "異常効果ダメージ",
    "偏移体系": "オフセット体系",
    "谐度基础值": "協和基礎値",
    "谐度破坏伤害": "協和破壊ダメージ",
    "谐度破坏增幅": "協和破壊ブースト",
    "谐度增幅": "協和破壊ブースト",
    "谐度响应": "協和レスポンス",
    "谐度响应伤害": "協和レスポンスダメージ",
    "响应倍率": "レスポンス倍率",
    "响应系数": "レスポンス係数",
    "响应增伤": "レスポンスダメージアップ",
    "响应技能": "レスポンススキル",
    "骇破伤害": "ハックダメージ",
    "骇破倍率": "ハック倍率",
    "震谐伤害": "震撃協和ダメージ",
    "震谐倍率": "震撃協和倍率",
    "偏谐值": "オフチューン値",
    "失谐": "オフチューン",
    "属性基数": "ステータス基準値",
    "技能倍率": "スキル倍率",
    "基础倍率": "基礎倍率",
    "倍率": "倍率",
    "倍率增加": "倍率加算",
    "增加部分": "加算部分",
    "效应倍率": "異常効果倍率",
    "效应加深": "異常効果ブースト",
    "效应基础值": "異常効果基礎値",
    "效应/爆发上限": "異常効果/爆発上限",
    "效应伤害独立结算，不进入上方普通伤害。": "異常効果ダメージは個別に計算され、上の通常ダメージには入りません。",
    "偏移体系伤害独立结算，不进入上方普通伤害。": "オフセット体系ダメージは個別に計算され、上の通常ダメージには入りません。",
    "谐度响应伤害按谐度基础值、响应系数与谐度破坏增幅独立结算，不吃攻击、暴击、属性加成、类型加成。": "協和レスポンスダメージは協和基礎値、レスポンス係数、協和破壊ブーストで個別に計算し、攻撃力、クリティカル、属性ダメージアップ、タイプダメージアップは適用しません。",
    "加成区": "ダメージアップ区",
    "加深区": "ブースト区",
    "独立乘区": "独立乗区",
    "最终乘区": "最終乗区",
    "不可暴击": "クリティカル不可",
    "不计算暴击": "クリティカル計算なし",
    "期望修正": "期待値補正",
    "期望分段：": "期待値内訳:",
    "分段：": "内訳:",
    "暴击伤害": "クリティカルダメージ",
    "非暴伤害": "非クリティカルダメージ",
    "防御系数": "防御係数",
    "抗性系数": "耐性係数",
    "减伤": "ダメージ軽減",
    "易伤": "被ダメージアップ",
    "受到伤害减少": "被ダメージ軽減",
    "伤害加深 Buff": "ダメージブーストBuff",
    "易伤 Buff": "被ダメージアップBuff",
    "等级倍率": "レベル倍率",
    "等级系数": "レベル係数",
    "固定系数": "固定係数",
    "固定系数0.8": "固定係数0.8",
    "固定0.8": "固定0.8",
    "最终提升": "最終ダメージアップ",
    "最终伤害提升": "最終ダメージアップ",
    "每层": "1スタックごと",
    "每点增幅": "ブースト1ptごと",
    "结算": "計算",
    "当前技能不可释放": "現在のスキルは発動できません",
    "缺少": "不足",
    "此次伤害视为": "今回のダメージ扱い",
    "标签": "タグ",
    "本次": "今回",
    "按": "基準",
    "资源": "リソース",
    "达到上限": "上限到達",
    "不少于": "以上",
    "上限": "上限",
    "或": "または",
    "目标": "目標",
    "我": "味方",
    "敌": "敵",
    "属性": "属性",
    "声骸套装": "音骸セット",
    "无额外来源": "追加ソースなし",
    "添加属性…": "ステータスを追加…",
    "仅自身输出时生效": "この共鳴者が計算スロットの時のみ有効",
    "支援位": "サポート枠",
    "延奏不给自己": "終奏は自身に適用されません",
    "需输出位为冷凝": "計算スロットが凝縮である必要があります",
    "需输出位为热熔": "計算スロットが焦熱である必要があります",
    "需输出位为导电": "計算スロットが電導である必要があります",
    "需输出位为气动": "計算スロットが気動である必要があります",
    "需输出位为衍射": "計算スロットが回折である必要があります",
    "需输出位为湮灭": "計算スロットが消滅である必要があります",
    "需当前技能为普攻": "現在のスキルが通常攻撃ダメージである必要があります",
    "需当前技能为重击": "現在のスキルが重撃ダメージである必要があります",
    "需当前技能为共鸣技能": "現在のスキルが共鳴スキルダメージである必要があります",
    "需当前技能为共鸣解放": "現在のスキルが共鳴解放ダメージである必要があります",
    "需当前技能为声骸技能": "現在のスキルが音骸スキルダメージである必要があります",
    "不参与": "適用外",
    "明确指定才参与": "明示指定時のみ適用",
    "明确指定 Buff": "明示指定Buff",
    "当前倍率": "現在倍率",
    "当前只录入": "現在は次のみ登録",
    "层数倍率": "スタック倍率",
    "层倍率。": "スタック倍率。",
    "层固定基础值": "スタック固定基礎値",
    "层数基础": "スタック基礎値",
    "显示取整": "表示は切り捨て",
    "伤害计算使用": "ダメージ計算で使用",
    "前置已满足": "前提達成済み",
    "手动": "手動",
    "最高": "最大",
    "额外": "追加",
    "等级": "Lv",
    "级": "Lv",
    "来源": "ソース",
    "命中词条": "ヒットしたステータス",
    "武器副词条": "武器サブステータス",
    "声骸属性伤害加成": "音骸属性ダメージアップ",
    "声骸类型伤害加成": "音骸タイプダメージアップ",
    "属性+类型": "属性+タイプ",
    "基础倍率": "基礎倍率",
    "属性基数": "ステータス基準値",
    "提供者攻击": "提供者攻撃力",
    "已计入上方防御系数": "上の防御係数に反映済み",
    "已计入普通伤害防御系数": "スキルダメージの防御係数に反映済み",
    "需先确认目标处于": "先に目標状態の確認が必要:",
    "需状态": "必要状態",
    "不满足当前技能 / 队伍 / 延奏 / 状态门槛": "現在のスキル / チーム / 終奏 / 状態条件を満たしていません",
    "独立于上方普通伤害": "上の通常ダメージとは別計算",
    "物理伤害加成": "物理ダメージアップ",
    "暴击": "クリティカル",
    "暴击率": "クリティカル",
    "暴击伤害": "クリティカルダメージ",
    "治疗效果加成": "治療効果アップ",
    "伤害加深": "ダメージブースト",
    "倍率提升": "ダメージ倍率アップ",
    "技能倍率提升": "ダメージ倍率アップ",
    "全属性伤害加成": "全属性ダメージアップ",
    "属性伤害加成": "属性ダメージアップ",
    "异常效应层数上限": "異常効果スタック上限",
    "状态": "状態",
    "形态": "形態",
    "目标": "目標",
    "默认": "デフォルト",
    "登场": "登場",
    "后台": "控え",
    "残忍": "残忍",
    "杀意": "殺意",
    "失序值": "錯乱値",
    "气": "気",
    "混元气旋周天": "混元一気進行",
    "未达小周天": "小周天未達",
    "小周天": "小周天",
    "大周天": "大周天",
    "大周天·内": "大周天・内",
    "大周天·外": "大周天・外",
    "大周天 · 内": "大周天・内",
    "大周天 · 外": "大周天・外",
    "狮魂": "獅魂",
    "怒气值": "焦燥値",
    "暗流": "暗流",
    "尘微之声": "微塵の声",
    "声流响": "流れる響き",
    "流响": "流れる響き",
    "目标印记": "目標マーク",
    "缚罪标记": "罪のマーク",
    "惩罚印记": "罰のマーク",
    "锋芒": "雷光",
    "雷之楔": "雷の楔",
    "雷之楔在场": "雷の楔存在",
    "雷池": "雷の池",
    "雷池范围": "雷の池範囲",
    "焰羽": "焔羽",
    "焰羽状态": "焔羽",
    "离火": "離火",
    "红椿盛绽": "咲き誇る赤い椿",
    "红椿·蕊": "赤い椿・蕊",
    "红椿·蕾": "赤い椿・蕾",
    "红椿 · 蕊": "赤い椿・蕊",
    "红椿 · 蕾": "赤い椿・蕾",
    "一日花": "一日花",
    "永生花": "永遠なる花",
    "含苞状态": "開花待ち状態",
    "酣梦": "安眠",
    "演算效能": "演算力",
    "超算效能": "超演算力",
    "实证数据": "演算データ",
    "演算数据": "演算データ",
    "星域": "星域",
    "浅析": "浅き",
    "深潜": "深き",
    "解限": "超制限",
    "浅析星域": "浅き星域",
    "深潜星域": "深き星域",
    "解限星域": "超制限星域",
    "霜色": "霜色",
    "吉兆": "吉兆",
    "吉兆组合": "吉兆の組み合わせ",
    "对偶": "対偶",
    "双关": "双関",
    "联珠": "連珠",
    "合说": "一式",
    "光能": "光エネルギー",
    "黄灯": "黄色灯",
    "红灯": "赤色灯",
    "灯号模式": "信号モード",
    "黄灯模式": "黄色灯モード",
    "红灯模式": "赤色灯モード",
    "黄灯聚光": "黄色灯・高出力",
    "红灯聚光": "赤色灯・高出力",
    "黄灯聚光模式": "黄色灯・高出力",
    "红灯聚光模式": "赤色灯・高出力",
    "灵萃": "サブスタンス",
    "镀色晶": "ティンテッドプリズム",
    "镀色晶激活": "ティンテッドプリズム有効",
    "福音": "福音",
    "祈愿": "祈り",
    "赦罪": "アブソリューション",
    "告解": "コンフェッション",
    "赦罪/告解状态": "アブソリューション/コンフェッション状態",
    "镜之环": "鏡の環",
    "镜之环位置": "鏡の環位置",
    "环外": "環外",
    "环内": "環内",
    "颤栗": "トレマー",
    "迷离": "トランス",
    "蜃境": "ミラージュ",
    "目标迷梦": "目標まどろみの夢",
    "迷梦": "まどろみの夢",
    "焰光": "焔光",
    "冗余动能": "リダンダントエナジー",
    "烈阳余烬": "烈日の残光",
    "目标烈阳余烬": "目標烈日の残光",
    "斩棘": "ブライアスラッシュ",
    "斩棘状态": "ブライアスラッシュ状態",
    "芙露德莉斯": "フルールドリス",
    "权柄": "決意",
    "看潮怒风哮之刃": "荒ぶる潮、吼える風の刃",
    "月相状态": "月相の巡り",
    "月相流转": "月相の巡り",
    "月相流转·弦月": "月相の巡り・弦月",
    "月相流转·新月": "月相の巡り・三日月",
    "满月领域": "満月領域",
    "满月": "満月",
    "位格状态": "ハイポスタシス・デビル",
    "恶魔位格": "ハイポスタシス・デビル",
    "目标虚无绞痕": "目標虚無の絞め痕",
    "虚无绞痕": "虚無の絞め痕",
    "静质量能": "静止エネルギー",
    "相对动能": "相対運動エネルギー",
    "目标干涉标记": "目標干渉マーク",
    "目标谐度干涉": "目標協和干渉",
    "谐度干涉": "協和干渉",
    "震谐": "震撃協和",
    "集谐": "密集協和",
    "骇破": "ハック",
    "偏移": "オフセット",
    "干涉": "インターフェア",
    "目标震谐": "目標震撃協和",
    "目标集谐": "目標密集協和",
    "目标骇破": "目標ハック",
    "目标震谐状态": "目標震撃協和状態",
    "目标集谐状态": "目標密集協和状態",
    "目标骇破状态": "目標ハック状態",
    "骇破目标状态": "ハック目標状態",
    "目标震谐 · 偏移": "目標震撃協和・オフセット",
    "目标震谐 · 干涉": "目標震撃協和・インターフェア",
    "目标集谐 · 偏移": "目標密集協和・オフセット",
    "目标集谐 · 干涉": "目標密集協和・インターフェア",
    "目标骇破 · 偏移": "目標ハック・オフセット",
    "目标骇破 · 干涉": "目標ハック・インターフェア",
    "谐度干涉 · 震谐": "協和干渉・震撃協和",
    "谐度干涉 · 集谐": "協和干渉・密集協和",
    "震谐·偏移": "震撃協和・オフセット",
    "集谐·偏移": "密集協和・オフセット",
    "震谐·干涉": "震撃協和・インターフェア",
    "集谐·干涉": "密集協和・インターフェア",
    "骇破·偏移": "ハック・オフセット",
    "骇破·干涉": "ハック・インターフェア",
    "居合架势": "居合の構え",
    "雪锈": "白雪の錆",
    "SQL": "SQL",
    "少阴": "少陰",
    "少阳": "少陽",
    "雷法": "雷法",
    "一气初动": "一気初動",
    "两仪交泰": "両儀交泰",
    "三才合一": "三才合一",
    "雷法 · 一气初动": "雷法・一気初動",
    "雷法 · 两仪交泰": "雷法・両儀交泰",
    "雷法 · 三才合一": "雷法・三才合一",
    "辉芒状态": "輝かしい鋭鋒",
    "机兵": "メカスカウト",
    "视觉冲击": "ビジュアルインパクト",
    "符文·期望": "ルーン・期待",
    "符文·答问": "ルーン・問答",
    "符文 · 期望": "ルーン・期待",
    "符文 · 答问": "ルーン・問答",
    "符文": "ルーン",
    "期望": "期待",
    "身相形态": "御身形態",
    "身相": "御身",
    "常世身": "現世の御身",
    "预求身": "予求の御身",
    "战斗模式": "戦闘モード",
    "模式·猎手": "ハントレスモード",
    "模式·铁胆": "ガッツモード",
    "模式 · 猎手": "ハントレスモード",
    "模式 · 铁胆": "ガッツモード",
    "模式": "モード",
    "猎手": "ハントレス",
    "铁胆": "ガッツ",
    "该用这个了！": "ちょっと本気出すか！",
    "答问": "応剣",
    "聚爆效应": "斉爆効果",
    "霜冻效应": "厳霜効果",
    "霜渐效应": "結霜効果",
    "电磁效应": "電磁効果",
    "光噪效应": "騒光効果",
    "风蚀效应": "風蝕効果",
    "虚湮效应": "虚滅効果",
    "小孩子才做选择": "選ぶのは子供だけ",
    "变奏入场": "変奏入場",
    "共鸣技能后": "共鳴スキル後",
    "共鸣解放后": "共鳴解放後",
    "变奏入场后": "変奏入場後",
    "提供治疗": "治療を提供",
    "冲击": "衝撃",
    "角色登场": "キャラ登場",
    "施放变奏技能": "変奏スキル発動",
    "施放共鸣技能": "共鳴スキル発動",
    "施放共鸣解放": "共鳴解放発動",
    "治疗": "治療",
    "护盾": "シールド",
    "协同攻击": "協同攻撃",
    "对应干涉状态": "対応するインターフェア状態",
    "该状态本身不直接造成伤害": "この状態自体は直接ダメージを与えない",
    "状态层数": "状態スタック",
    "相关角色面板": "関連キャラステータス",
    "集谐干涉": "密集協和・インターフェア",
  },
};

function jsFilesUnder(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsFilesUnder(full);
    if (entry.isFile() && entry.name.endsWith(".js")) return [full];
    return [];
  });
}

function mergeObject(target, source) {
  Object.entries(source || {}).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      target[key] = mergeObject(target[key] && typeof target[key] === "object" && !Array.isArray(target[key]) ? target[key] : {}, value);
      return;
    }
    target[key] = value;
  });
  return target;
}

function loadRepoData() {
  let loadingCharFile = null;
  global.window = {};
  global.WUWA = window.WUWA = {
    chars: {},
    order: [],
    register(c) {
      Object.defineProperty(c, "__file", { value: loadingCharFile, enumerable: false });
      this.chars[c.id] = c;
      this.order.push(c.id);
    },
  };
  window.WUWA_LANGUAGES = {
    packs: {},
    register(code, pack) {
      this.packs[code] = { code, ...pack };
    },
    extend(code, patch) {
      this.packs[code] = mergeObject(this.packs[code] || { code }, patch);
    },
    localeData(code, group, id) {
      return this.packs[code]?.data?.[group]?.[id] || null;
    },
  };
  require(path.join(root, "data/core/weapons.js"));
  require(path.join(root, "data/core/sonatas.js"));
  for (const file of jsFilesUnder(path.join(root, "data/core/chara")).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
    loadingCharFile = path.relative(root, file);
    require(file);
    loadingCharFile = null;
  }
  for (const lang of [DEFAULT_LANG, ...OUTPUT_LANGS.map((item) => item.code)]) {
    for (const file of jsFilesUnder(path.join(root, "data/languages", lang)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
      require(file);
    }
  }
}

async function getJson(url) {
  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      if (attempt === FETCH_RETRIES) throw new Error(`Language data request failed: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error("Language data request failed");
}

async function mapConcurrent(items, limit, fn) {
  const out = [];
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      out[index] = await fn(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

function cleanHtml(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<size=[^>]+>/gi, "")
    .replace(/<\/?color[^>]*>/gi, "")
    .replace(/<\/?span[^>]*>/gi, "")
    .replace(/<te[^>]*>(.*?)<\/te>/gi, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/（/g, "(")
    .replace(/）/g, ")")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function extractMarkedTerms(value) {
  const raw = String(value || "");
  const terms = [];
  const patterns = [
    /<te[^>]*>(.*?)<\/te>/gi,
    /<span[^>]*color:\s*#ffd12f[^>]*>(.*?)<\/span>/gi,
    /<span[^>]*class="[^"]*font-bold[^"]*"[^>]*>(.*?)<\/span>/gi,
    /<color=Title>(.*?)<\/span>/gi,
  ];
  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(raw))) terms.push(cleanHtml(match[1]));
  });
  const clean = cleanHtml(raw);
  for (const pattern of [/【([^】]+)】/g, /「([^」]+)」/g, /"([^"]+)"/g]) {
    let match;
    while ((match = pattern.exec(clean))) terms.push(match[1].trim());
  }
  return terms.filter(Boolean);
}

function extractPatternTerms(value, pattern) {
  const raw = String(value || "");
  const terms = [];
  let match;
  while ((match = pattern.exec(raw))) terms.push(cleanHtml(match[1]));
  return terms.filter(Boolean);
}

function addAlignedMarkedTerms(zhText, targetText, add) {
  const patterns = [
    /<te[^>]*>(.*?)<\/te>/gi,
    /<span[^>]*color:\s*#ffd12f[^>]*>(.*?)<\/span>/gi,
    /<span[^>]*class="[^"]*font-bold[^"]*"[^>]*>(.*?)<\/span>/gi,
    /<color=Title>(.*?)<\/span>/gi,
  ];
  for (const pattern of patterns) {
    const zhTerms = extractPatternTerms(zhText, new RegExp(pattern.source, pattern.flags));
    const targetTerms = extractPatternTerms(targetText, new RegExp(pattern.source, pattern.flags));
    if (zhTerms.length && zhTerms.length === targetTerms.length) zhTerms.forEach((term, idx) => add(term, targetTerms[idx]));
  }
  for (const pattern of [/【([^】]+)】/g, /「([^」]+)」/g, /"([^"]+)"/g]) {
    const zhTerms = extractPatternTerms(cleanHtml(zhText), new RegExp(pattern.source, pattern.flags));
    const targetTerms = extractPatternTerms(cleanHtml(targetText), new RegExp(pattern.source, pattern.flags));
    if (zhTerms.length && zhTerms.length === targetTerms.length) zhTerms.forEach((term, idx) => add(term, targetTerms[idx]));
  }
}

function slug(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function normName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[：:]/g, ":")
    .replace(/\s*[—–-]\s*/g, " - ")
    .replace(/\s+/g, " ")
    .trim();
}

function relCharFile(c) {
  return c.__file.replace(/^data\/core\/chara\//, "").replace(/\.js$/, ".js");
}

function apiSkillAttributes(apiChar) {
  const attrs = [];
  for (const skill of apiChar.Skills || []) {
    for (const attr of Object.values(skill.SkillAttributes || {})) {
      attrs.push({
        id: attr.attributeId,
        skillId: skill.SkillId,
        skillName: skill.SkillName,
        skillType: skill.SkillType,
        attrName: attr.attributeName,
        values: attr.values || [],
        fullName: `${skill.SkillName} - ${attr.attributeName}`,
      });
    }
  }
  return attrs;
}

function interpolation(template, vars) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

function asList(value) {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

function firstSentenceContaining(texts, term) {
  const needle = String(term || "").trim();
  if (!needle) return "";
  for (const text of texts) {
    const clean = cleanHtml(text);
    if (!clean.includes(needle)) continue;
    const parts = clean.split(/(?<=[.!?。])\s+|\n+/).map((part) => part.trim()).filter(Boolean);
    const found = parts.find((part) => part.includes(needle));
    if (found) return found;
    return clean;
  }
  return "";
}

function labelText(lang, group, key) {
  return baseTerms[lang]?.[group]?.[key] || key || "";
}

function effectName(lang, key) {
  return labelText(lang, "effects", key) || key;
}

function damageTypeName(lang, key) {
  return labelText(lang, "damageTypes", key) || key;
}

function percentValue(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value ?? "");
  return String(Math.round(number * 100) / 100);
}

function buffValueText(buff) {
  const value = buff.value ?? buff.statBonus ?? buff.cap ?? buff.multAdd ?? buff.multScaleAdd ?? buff.perStackBonus ?? "";
  return percentValue(value);
}

function elementalDamageBonusLabel(lang, elementName) {
  if (lang === "ko") return `${elementName} 피해 보너스`;
  if (lang === "ja-JP") return `${elementName}ダメージアップ`;
  return `${elementName} DMG Bonus`;
}

function typeDamageBonusLabel(lang, damageTypeNameValue) {
  const name = String(damageTypeNameValue || "");
  if (lang === "ko") {
    return name.endsWith("피해")
      ? `${name} 보너스`
      : `${name} 피해 보너스`;
  }
  if (lang === "ja-JP") {
    return name.endsWith("ダメージ")
      ? `${name}アップ`
      : `${name}ダメージアップ`;
  }
  return `${name} Bonus`;
}

function damageIncreaseLabel(lang, targetName) {
  const name = String(targetName || "");
  if (!name) return langText[lang].damageIncrease;
  if (lang === "ko") return name.endsWith("피해") ? `${name} 증가` : `${name} 피해 증가`;
  if (lang === "ja-JP") return name.endsWith("ダメージ") ? `${name}ブースト` : `${name}ダメージブースト`;
  return /\bDMG$/i.test(name) ? `${name} Increase` : `${name} DMG Increase`;
}

function damageMultiplierIncreaseLabel(lang, targetName) {
  const name = String(targetName || "");
  if (!name) return langText[lang].dmgMultiplierIncrease;
  if (lang === "ko") return name.endsWith("피해") ? `${name} 배율 상승` : `${name} 피해 배율 상승`;
  if (lang === "ja-JP") return name.endsWith("ダメージ") ? `${name}倍率アップ` : `${name}ダメージ倍率アップ`;
  return /\bDMG$/i.test(name) ? `${name} Multiplier Increase` : `${name} DMG Multiplier Increase`;
}

function buffLabel(buff, lang, skillNameForId) {
  if (!buff) return "";
  const terms = baseTerms[lang];
  if (buff.zone === "damageBonus") {
    if (buff.element) return elementalDamageBonusLabel(lang, labelText(lang, "elements", buff.element));
    return langText[lang].allElement;
  }
  if (buff.zone === "typeBonus") {
    if (!buff.damageType) return labelText(lang, "zones", "typeBonus");
    return typeDamageBonusLabel(lang, damageTypeName(lang, buff.damageType));
  }
  if (buff.zone === "skillMultBonus" || buff.zone === "multAdd") {
    const skill = asList(buff.skills).map(skillNameForId).filter(Boolean)[0];
    return damageMultiplierIncreaseLabel(lang, skill);
  }
  if (buff.multAdd != null) {
    const skill = asList(buff.skills).map(skillNameForId).filter(Boolean)[0];
    return damageMultiplierIncreaseLabel(lang, skill);
  }
  if (buff.multScaleAdd != null || buff.perStackBonus != null) {
    const skill = asList(buff.skills).map(skillNameForId).filter(Boolean)[0];
    return skill ? `${skill} ${langText[lang].extraMultiplier}` : langText[lang].extraMultiplier;
  }
  if (buff.zone === "effectExtraRate") {
    const target = effectName(lang, asList(buff.effects || buff.effect)[0] || "");
    return target ? `${target} ${langText[lang].extraMultiplier}` : langText[lang].extraMultiplier;
  }
  if (buff.zone === "amplify") {
    const skill = asList(buff.skills).map(skillNameForId).filter(Boolean)[0];
    const prefix = skill || (buff.damageType ? damageTypeName(lang, buff.damageType) : "");
    return damageIncreaseLabel(lang, prefix);
  }
  if (buff.zone === "effectCapBonus") {
    const target = effectName(lang, asList(buff.effects || buff.effect)[0] || "");
    return interpolation(langText[lang].stackCap, { effect: target, value: "" }).replace(/\s*\+$/, "");
  }
  if (buff.zone === "vulnerability") return labelText(lang, "zones", "vulnerability");
  if (buff.zone === "finalDmg") return labelText(lang, "zones", "finalDmg");
  if (buff.zone === "resShred") return labelText(lang, "zones", "resShred");
  if (buff.zone === "defShred") return labelText(lang, "zones", "defShred");
  if (buff.zone === "defIgnore") return labelText(lang, "zones", "defIgnore");
  if (buff.zone && terms.zones[buff.zone]) return terms.zones[buff.zone];
  if (lang === "ko") return "효과";
  if (lang === "ja-JP") return "効果";
  return "Effect";
}

function buffExcerpt(buff, lang, label) {
  if (!buff) return "";
  if (buff.scaleBy?.cap != null) {
    const stat = labelText(lang, "stats", buff.scaleBy.stat);
    return interpolation(langText[lang].capped, { label, stat, cap: percentValue(buff.scaleBy.cap) });
  }
  const value = buffValueText(buff);
  if (buff.zone === "effectCapBonus") {
    const target = effectName(lang, asList(buff.effects || buff.effect)[0] || "");
    return interpolation(langText[lang].stackCap, { effect: target, value });
  }
  if (buff.maxStacks && value) return interpolation(langText[lang].perStack, { label, value });
  if (value === "") return label;
  if (["attackFlat"].includes(buff.zone)) return interpolation(langText[lang].flat, { label, value });
  return interpolation(langText[lang].percent, { label, value });
}

function triggerText(buff, lang, skillNameForId, stateNameForId) {
  if (!buff) return langText[lang].default;
  const skills = asList(buff.triggerSkills || buff.skills).map(skillNameForId).filter(Boolean);
  if (skills.length && (buff.triggerSkills || buff.defaultActive === false)) return interpolation(langText[lang].afterSkill, { name: skills.join(" / ") });
  if (asList(buff.triggerEvents).includes("castIntroSkill") || buff.triggerOutro) return langText[lang].afterIntro;
  if (asList(buff.triggerEvents).includes("castOutroSkill")) return langText[lang].afterOutro;
  if (asList(buff.triggerEvents).includes("castEchoSkill")) return langText[lang].afterEcho;
  const state = stateNameForId(asList(buff.requiresAllStates || buff.requiresState)[0]);
  if (state) return interpolation(langText[lang].whenState, { name: state });
  if (buff.requiresEffectStacks || buff.requiresAnyEffectStacks) {
    const effect = effectName(lang, buff.requiresEffectStacks?.effect || buff.requiresEffectStacks?.key || "effect");
    return interpolation(langText[lang].targetState, { name: effect });
  }
  return langText[lang].default;
}

function buildSource(raw, lang, translateTerm) {
  const text = String(raw || "").trim();
  if (!text) return "";
  return text.split(/\s*\/\s*/).map((part) => {
    const [prefix, ...rest] = part.split(/[·:：]/);
    const name = rest.join("·").trim();
    const mappedPrefix = sourcePrefix[lang][prefix] || translateTerm(prefix);
    const mappedName = translateTerm(name);
    if (!mappedName || mappedName === mappedPrefix) return mappedPrefix || mappedName || part;
    return `${mappedPrefix}${langText[lang].sourceSep}${mappedName}`;
  }).join(" / ");
}

function buildRequiresResourceLabel(sk, lang, translateTerm, resourceNameForId) {
  if (sk.requiresResourceFull) return interpolation(langText[lang].resourceFull, { name: resourceNameForId(sk.requiresResourceFull) });
  if (sk.requiresResourceAtLeast) {
    const req = sk.requiresResourceAtLeast;
    return interpolation(langText[lang].valueAtLeast, { label: resourceNameForId(req.id || req.label), value: percentValue(req.value ?? req.fractionOfCap * 100) });
  }
  if (sk.requiresResourceSumAtLeast) {
    const label = translateTerm(sk.requiresResourceSumAtLeast.label) || asList(sk.requiresResourceSumAtLeast.ids).map(resourceNameForId).join("+");
    return interpolation(langText[lang].valueAtLeast, { label, value: percentValue(sk.requiresResourceSumAtLeast.value) });
  }
  if (sk.requiresAllResourcesAtLeast) {
    return sk.requiresAllResourcesAtLeast.map((req) => interpolation(langText[lang].valueAtLeast, { label: resourceNameForId(req.id || req.label), value: percentValue(req.value) })).join(" / ");
  }
  if (sk.requiresResource) return resourceNameForId(sk.requiresResource);
  return "";
}

function collectApiTerms(zhChar, targetChar, termMap) {
  const add = (zh, target) => {
    const a = cleanHtml(zh).trim();
    const b = cleanHtml(target).trim();
    if (!a || !b || a === b) return;
    termMap.set(a, b);
    if (a.endsWith("获取规则")) {
      const base = a.slice(0, -"获取规则".length).replace(/[【】「」]/g, "").trim();
      const targetBase = b
        .replace(/\s*(Acquisition|Obtaining|Restore|Recovery)?\s*Rules?$/i, "")
        .replace(/\s*획득 규칙$/, "")
        .replace(/[「」"]/g, "")
        .trim();
      if (base && targetBase) termMap.set(base, targetBase);
    }
    const bracketed = a.match(/^【(.+)】和【(.+)】获取规则$/);
    if (bracketed) {
      const parts = b.match(/(.+?)\s+and\s+(.+)/i) || b.match(/「(.+?)」과\s+「(.+?)」/);
      if (parts) {
        termMap.set(bracketed[1], cleanHtml(parts[1]).replace(/[「」"]/g, "").trim());
        termMap.set(bracketed[2], cleanHtml(parts[2]).replace(/[「」"]/g, "").trim());
      }
    }
  };
  add(zhChar.Name?.Content, targetChar.Name?.Content);
  const targetSkillsById = new Map((targetChar.Skills || []).map((skill) => [skill.SkillId, skill]));
  for (const zhSkill of zhChar.Skills || []) {
    const targetSkill = targetSkillsById.get(zhSkill.SkillId);
    if (!targetSkill) continue;
    add(zhSkill.SkillType, targetSkill.SkillType);
    add(zhSkill.SkillName, targetSkill.SkillName);
    const targetAttrs = new Map(Object.values(targetSkill.SkillAttributes || {}).map((attr) => [attr.attributeId, attr]));
    for (const zhAttr of Object.values(zhSkill.SkillAttributes || {})) {
      add(zhAttr.attributeName, targetAttrs.get(zhAttr.attributeId)?.attributeName);
    }
    addAlignedMarkedTerms(zhSkill.SkillDescribe, targetSkill.SkillDescribe, add);
  }
  const targetChainsById = new Map((targetChar.ResonantChain || []).map((node) => [node.Id, node]));
  for (const zhNode of zhChar.ResonantChain || []) {
    const targetNode = targetChainsById.get(zhNode.Id);
    if (!targetNode) continue;
    add(zhNode.NodeName, targetNode.NodeName);
    addAlignedMarkedTerms(zhNode.AttributesDescription, targetNode.AttributesDescription, add);
  }
}

function trustedExistingMapping(value, lang) {
  const raw = String(value || "").trim();
  if (!raw) return false;
  if (lang === "en-US" && /[\u3400-\u9fff]/.test(raw)) return false;
  if (lang === "ko" && (
    raw === "효과"
    || /효과(후|시|설명|스택|공격력)/.test(raw)
    || /시전(공명|변주)/.test(raw)
  )) return false;
  if (lang === "en-US" && /^(effect|the skill|the state|the target)$/i.test(raw)) return false;
  return true;
}

function seedTermMapFromExistingText(lang, termMap) {
  const text = window.WUWA_LANGUAGES.packs[lang]?.text || {};
  Object.entries(text).forEach(([key, value]) => {
    if (!/[\u3400-\u9fff]/.test(key)) return;
    if (!trustedExistingMapping(value, lang)) return;
    termMap.set(key, String(value).trim());
  });
}

function makeTranslator(lang, termMap) {
  const manual = manualTermMap[lang] || {};
  const replacementEntries = () => {
    const entries = [
      ...Object.entries(manual),
      ...[...termMap.entries()],
    ].filter(([key, value]) => key && value && /[\u3400-\u9fff]/.test(key));
    return entries.sort((a, b) => b[0].length - a[0].length);
  };
  function translateTerm(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    if (manual[raw]) return manual[raw];
    if (termMap.has(raw)) return termMap.get(raw);
    const unquoted = raw.replace(/^【(.+)】$/, "$1").replace(/^「(.+)」$/, "$1");
    if (unquoted !== raw) {
      const translated = translateTerm(unquoted);
      if (translated && translated !== unquoted) return translated;
    }
    if (raw.includes("·")) {
      return raw.split("·").map((part) => translateTerm(part)).join(" · ");
    }
    if (raw.includes("/")) {
      return raw.split("/").map((part) => translateTerm(part)).join("/");
    }
    if (raw.endsWith("获取规则")) {
      const base = translateTerm(raw.slice(0, -"获取规则".length));
      if (base && base !== raw.slice(0, -"获取规则".length)) {
        if (lang === "ko") return `${base} 획득 규칙`;
        if (lang === "ja-JP") return `${base}の獲得方法`;
        return `${base} Acquisition Rules`;
      }
    }
    if (raw.endsWith("状态")) {
      const base = translateTerm(raw.slice(0, -2));
      if (base && base !== raw.slice(0, -2)) {
        if (lang === "ko") return `${base} 상태`;
        if (lang === "ja-JP") return `${base}状態`;
        return `${base} State`;
      }
    }
    if (raw.endsWith("形态")) {
      const base = translateTerm(raw.slice(0, -2));
      if (base && base !== raw.slice(0, -2)) {
        if (lang === "ko") return `${base} 형태`;
        if (lang === "ja-JP") return `${base}形態`;
        return `${base} Form`;
      }
    }
    if (/[\u3400-\u9fff]/.test(raw)) {
      let replaced = raw;
      for (const [key, target] of replacementEntries()) replaced = replaced.split(key).join(target);
      if (replaced !== raw) return replaced;
    }
    return raw;
  }
  return translateTerm;
}

function writeLanguageFile(lang, relativePath, data) {
  const full = path.join(root, "data/languages", lang, relativePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  const body = `"use strict";\n\nwindow.WUWA_LANGUAGES.extend(${JSON.stringify(lang)}, ${JSON.stringify(data, null, 2)});\n`;
  fs.writeFileSync(full, body);
}

async function main() {
  if (!API_BASE) throw new Error("Set WUWA_LANGUAGE_API_BASE before rebuilding language packs.");
  loadRepoData();

  console.error("Fetching character index...");
  const enRoleList = (await getJson(`${API_BASE}/en/character`)).roleList;
  const roleCandidates = new Map();
  enRoleList.forEach((role) => {
    const key = normName(role.Name);
    roleCandidates.set(key, [...(roleCandidates.get(key) || []), role]);
  });

  const charDetails = new Map();
  async function fetchChar(apiLang, id) {
    const key = `${apiLang}:${id}`;
    if (!charDetails.has(key)) charDetails.set(key, await getJson(`${API_BASE}/${apiLang}/character/${id}`));
    return charDetails.get(key);
  }

  const charApiIds = new Map();
  console.error(`Resolving API ids for ${window.WUWA.order.length} characters...`);
  for (const id of window.WUWA.order) {
    const en = window.WUWA_LANGUAGES.localeData("en-US", "chars", id);
    const candidates = roleCandidates.get(normName(en?.name)) || [];
    if (!candidates.length) throw new Error(`No API character match for ${id} (${en?.name})`);
    let best = null;
    let bestScore = -1;
    for (const candidate of candidates) {
      const detail = await fetchChar("en", candidate.Id);
      const score = (detail.Skills || []).reduce((sum, skill) => sum + Object.keys(skill.SkillAttributes || {}).length, 0);
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
    charApiIds.set(id, best.Id);
  }

  const apiChars = {};
  for (const { code, api } of OUTPUT_LANGS) apiChars[code] = new Map();
  const zhApiChars = new Map();
  console.error("Fetching localized character details...");
  let fetchedChars = 0;
  await mapConcurrent(window.WUWA.order, FETCH_CONCURRENCY, async (id) => {
    const apiId = charApiIds.get(id);
    const details = await Promise.all([
      fetchChar("zh-Hans", apiId),
      ...OUTPUT_LANGS.map(({ api }) => fetchChar(api, apiId)),
    ]);
    zhApiChars.set(id, details[0]);
    OUTPUT_LANGS.forEach(({ code }, detailIndex) => apiChars[code].set(id, details[detailIndex + 1]));
    fetchedChars += 1;
    if (fetchedChars % 10 === 0 || fetchedChars === window.WUWA.order.length) {
      console.error(`Fetched characters ${fetchedChars}/${window.WUWA.order.length}`);
    }
  });

  const termMaps = {};
  for (const { code } of OUTPUT_LANGS) {
    termMaps[code] = new Map(Object.entries(manualTermMap[code] || {}));
    seedTermMapFromExistingText(code, termMaps[code]);
    for (const id of window.WUWA.order) collectApiTerms(zhApiChars.get(id), apiChars[code].get(id), termMaps[code]);
  }

  for (const { code } of OUTPUT_LANGS) {
    console.error(`Writing ${code} character packs...`);
    const translateTerm = makeTranslator(code, termMaps[code]);
    for (const id of window.WUWA.order) {
      const core = window.WUWA.chars[id];
      const zhPack = window.WUWA_LANGUAGES.localeData("zh-CN", "chars", id) || {};
      const currentEnPack = window.WUWA_LANGUAGES.localeData("en-US", "chars", id) || {};
      const target = apiChars[code].get(id);
      const zhApi = zhApiChars.get(id);
      const targetAttrsById = new Map(apiSkillAttributes(target).map((attr) => [attr.id, attr]));
      const targetAttrsByFullName = new Map(apiSkillAttributes(target).map((attr) => [normName(attr.fullName), attr]));
      const enAttrsByFullName = new Map(apiSkillAttributes(apiChars["en-US"].get(id)).map((attr) => [normName(attr.fullName), attr]));
      const skillNameById = new Map();
      const skills = (core.skills || []).map((sk, idx) => {
        const key = `${id}.${sk.id}`;
        let name = manualSkillNames[code]?.[key] || "";
        if (!name) {
          const currentEnName = currentEnPack.skills?.[idx]?.name;
          const enAttr = enAttrsByFullName.get(normName(currentEnName));
          const targetAttr = enAttr ? targetAttrsById.get(enAttr.id) : targetAttrsByFullName.get(normName(currentEnName));
          name = targetAttr ? targetAttr.fullName : "";
        }
        if (!name && code === "en-US") name = currentEnPack.skills?.[idx]?.name || "";
        if (!name) throw new Error(`No ${code} skill name for ${id}.${sk.id}`);
        skillNameById.set(sk.id, name);
        const item = { name };
        const reqLabel = buildRequiresResourceLabel(sk, code, translateTerm, (resourceId) => {
          const resource = (core.resources || []).find((res) => res.id === resourceId || res.label === resourceId);
          return translateTerm(zhPack.resources?.[(core.resources || []).indexOf(resource)]?.label || resource?.label || resourceId);
        });
        if (reqLabel) item.requiresResourceLabel = reqLabel;
        return item;
      });

      const stateNameById = new Map();
      (core.combatStates || []).forEach((state, idx) => {
        const zhState = zhPack.combatStates?.[idx] || {};
        const label = translateTerm(zhState.idLabel || zhState.label || state.idLabel || state.label || state.id);
        stateNameById.set(state.id, label);
        stateNameById.set(state.label, label);
        stateNameById.set(state.idLabel, label);
        asList(state.options).forEach((opt, optIdx) => {
          const zhOpt = zhState.options?.[optIdx] || {};
          const optName = translateTerm(zhOpt.valueLabel || zhOpt.label || opt.valueLabel || opt.label || opt.value);
          stateNameById.set(opt.value, optName);
          stateNameById.set(opt.label, optName);
          stateNameById.set(opt.valueLabel, optName);
        });
      });
      const skillNameForId = (skillId) => skillNameById.get(skillId) || translateTerm(skillId);
      const stateNameForId = (stateId) => stateNameById.get(stateId) || translateTerm(stateId);
      const sourceTexts = [
        ...(target.Skills || []).flatMap((skill) => [skill.SkillDescribe]),
        ...(target.ResonantChain || []).flatMap((node) => [node.AttributesDescription]),
      ];

      const out = {
        name: target.Name?.Content,
        skills,
      };
      if (core.resources?.length) {
        out.resources = core.resources.map((resource, idx) => ({
          label: translateTerm(zhPack.resources?.[idx]?.label || resource.label || resource.id),
        }));
      }
      if (core.combatStates?.length) {
        out.combatStates = core.combatStates.map((state, idx) => {
          const zhState = zhPack.combatStates?.[idx] || {};
          const label = translateTerm(zhState.idLabel || zhState.label || state.idLabel || state.label || state.id);
          const context = firstSentenceContaining(sourceTexts, label) || interpolation(langText[code].selectState, { name: label });
          const item = {
            label: translateTerm(zhState.label || state.label || label),
            idLabel: label,
            inactiveLabel: interpolation(langText[code].notState, { name: label }),
            entry: context,
            effects: context,
          };
          if (state.options?.length) {
            item.options = state.options.map((opt, optIdx) => {
              const zhOpt = zhState.options?.[optIdx] || {};
              const valueLabel = translateTerm(zhOpt.valueLabel || zhOpt.label || opt.valueLabel || opt.label || opt.value);
              return { label: valueLabel, valueLabel };
            });
          }
          return item;
        });
      }
      if (core.buffs?.length) {
        out.buffs = core.buffs.map((buff, idx) => {
          const zhBuff = zhPack.buffs?.[idx] || {};
          const label = buffLabel(buff, code, skillNameForId);
          const source = buildSource(zhBuff.source, code, translateTerm);
          const desc = source ? firstSentenceContaining(sourceTexts, source.split(langText[code].sourceSep).pop()) : "";
          return {
            source,
            label,
            trigger: triggerText(buff, code, skillNameForId, stateNameForId),
            excerpt: buffExcerpt(buff, code, label),
            desc: desc || buffExcerpt(buff, code, label),
          };
        });
      }
      if (core.chain?.length) {
        const targetChains = new Map((target.ResonantChain || []).map((node) => [node.NodeIndex, node]));
        out.chain = core.chain.map((node, idx) => {
          const targetNode = targetChains.get(node.seq || idx + 1) || target.ResonantChain?.[idx];
          const item = {
            name: targetNode?.NodeName || "",
            desc: cleanHtml(targetNode?.AttributesDescription || ""),
          };
          if (node.buffs?.length) {
            item.buffs = node.buffs.map((buff) => {
              const label = buffLabel(buff, code, skillNameForId);
              return {
                label,
                trigger: triggerText(buff, code, skillNameForId, stateNameForId),
                excerpt: buffExcerpt(buff, code, label),
              };
            });
          }
          return item;
        });
      }
      writeLanguageFile(code, path.join("chara", relCharFile(core)), { data: { chars: { [id]: out } } });
    }
  }

  console.error("Rebuilding weapons...");
  await rebuildWeapons();
  console.error("Rebuilding sonatas...");
  await rebuildSonatas();
  console.error("Rebuilding mechanics...");
  await rebuildMechanics(termMaps);
}

async function rebuildWeapons() {
  const enList = (await getJson(`${API_BASE}/en/weapon`)).weapons;
  const details = {};
  async function weaponDetail(apiLang, id) {
    const key = `${apiLang}:${id}`;
    if (!details[key]) details[key] = await getJson(`${API_BASE}/${apiLang}/weapon/${id}`);
    return details[key];
  }
  const byName = new Map(enList.map((weapon) => [normName(weapon.Name), weapon]));
  const enPack = window.WUWA_LANGUAGES.packs["en-US"]?.data?.weapons || {};
  const weaponIds = new Map();
  for (const weapon of window.WUWA_DATA.weapons) {
    const enName = enPack[weapon.id]?.name;
    const apiWeapon = byName.get(normName(enName));
    if (!apiWeapon) throw new Error(`No API weapon match for ${weapon.id} (${enName})`);
    weaponIds.set(weapon.id, apiWeapon.Id);
  }
  for (const { code, api } of OUTPUT_LANGS) {
    console.error(`Fetching ${code} weapon details...`);
    let fetchedWeapons = 0;
    const entries = await mapConcurrent(window.WUWA_DATA.weapons, FETCH_CONCURRENCY, async (weapon) => {
      const detail = await weaponDetail(api, weaponIds.get(weapon.id));
      const desc = cleanHtml(detail.Desc);
      const item = {
        name: detail.WeaponName,
        typeName: detail.WeaponTypeName,
        resonanceName: detail.ResonName,
        description: desc,
        effects: (weapon.effects || []).map((effect) => {
          const label = buffLabel(effect, code, () => "");
          return {
            label,
            excerpt: buffExcerpt(effect, code, label),
            conditionText: desc,
          };
        }),
      };
      fetchedWeapons += 1;
      if (fetchedWeapons % 20 === 0 || fetchedWeapons === window.WUWA_DATA.weapons.length) {
        console.error(`Fetched ${code} weapons ${fetchedWeapons}/${window.WUWA_DATA.weapons.length}`);
      }
      return [weapon.id, item];
    });
    const data = Object.fromEntries(entries);
    writeLanguageFile(code, "weapons.js", { data: { weapons: data } });
  }
}

async function rebuildSonatas() {
  const enEchoList = (await getJson(`${API_BASE}/en/echo`)).Echo;
  const echoLists = { "en-US": enEchoList };
  for (const { code, api } of OUTPUT_LANGS) {
    if (!echoLists[code]) echoLists[code] = (await getJson(`${API_BASE}/${api}/echo`)).Echo;
  }
  const echoByEnSlug = new Map(enEchoList.map((echo) => [slug(echo.Name), echo]));
  const detailCache = {};
  async function echoDetail(apiLang, id) {
    const key = `${apiLang}:${id}`;
    if (!detailCache[key]) detailCache[key] = await getJson(`${API_BASE}/${apiLang}/echo/${id}`);
    return detailCache[key];
  }
  for (const { code, api } of OUTPUT_LANGS) {
    const targetById = new Map(echoLists[code].map((echo) => [echo.Id, echo]));
    const sonataData = {};
    for (const set of window.WUWA_SONATAS) {
      const currentEnSonata = window.WUWA_LANGUAGES.localeData("en-US", "sonatas", set.id) || {};
      const apiGroupName = currentEnSonata.name;
      const sampleEcho = enEchoList.find((echo) => (echo.FetterGroups || []).some((group) => normName(group.Name) === normName(apiGroupName)))
        || enEchoList.find((echo) => (echo.FetterGroups || []).some((group) => String(group.Id) === String(set.id)));
      if (!sampleEcho) throw new Error(`No API echo sample for sonata ${set.id} (${apiGroupName})`);
      const enGroup = (sampleEcho.FetterGroups || []).find((group) => normName(group.Name) === normName(apiGroupName))
        || (sampleEcho.FetterGroups || []).find((group) => String(group.Id) === String(set.id));
      const targetSample = targetById.get(sampleEcho.Id);
      const targetGroup = (targetSample?.FetterGroups || []).find((group) => String(group.Id) === String(enGroup?.Id))
        || (targetSample?.FetterGroups || []).find((group) => normName(group.Name) === normName(apiGroupName));
      const detail = await echoDetail(api, sampleEcho.Id);
      const effects = detail.FetterDetails?.[targetGroup?.Name]?.EffectDescriptions || [];
      const item = { name: targetGroup?.Name || "" };
      if (set.p2) item.p2 = sonataBuffText(set.p2, code, effects[0]);
      if (set.p3) item.p3 = asList(set.p3).map((buff, idx) => sonataBuffText(buff, code, effects[idx + 1] || effects[idx]));
      if (set.p5) {
        if (Array.isArray(set.p5)) item.p5 = set.p5.map((buff, idx) => sonataBuffText(buff, code, effects[idx + 1] || effects[idx] || effects[effects.length - 1]));
        else item.p5 = sonataBuffText(set.p5, code, effects[1] || effects[effects.length - 1]);
      }
      const leads = asList(set.leads || set.lead);
      if (leads.length) {
        const mappedLeads = [];
        for (const lead of leads) {
          const enEcho = echoByEnSlug.get(slug(currentEnSonata.leads?.find((x) => x.echo && slug(x.echo) === slug(lead.id))?.echo || currentEnSonata.lead?.echo || lead.id)) || echoByEnSlug.get(slug(lead.id));
          const targetEcho = enEcho ? targetById.get(enEcho.Id) : null;
          const leadDetail = targetEcho ? await echoDetail(api, targetEcho.Id) : null;
          const leadDesc = cleanHtml(leadDetail?.Skill?.DescriptionEx || leadDetail?.Handbook?.Descrtption2 || "");
          mappedLeads.push({
            echo: targetEcho?.Name || lead.id,
            buffs: (lead.buffs || []).map((buff) => {
              const label = buffLabel(buff, code, () => "");
              return {
                label,
                trigger: buff.defaultActive === false ? langText[code].hit : langText[code].enabled,
                excerpt: buffExcerpt(buff, code, label),
                desc: leadDesc || buffExcerpt(buff, code, label),
              };
            }),
          });
        }
        if (set.lead && !set.leads) item.lead = mappedLeads[0];
        else item.leads = mappedLeads;
      }
      sonataData[set.id] = item;
    }
    writeLanguageFile(code, "sonatas.js", { data: { sonatas: sonataData } });
  }
}

function sonataBuffText(buff, code, officialDesc) {
  const label = buffLabel(buff, code, () => "");
  const desc = cleanHtml(officialDesc) || buffExcerpt(buff, code, label);
  return {
    label,
    trigger: buff.defaultActive === false ? langText[code].cast : langText[code].default,
    excerpt: buffExcerpt(buff, code, label),
    desc,
  };
}

async function rebuildMechanics(termMaps) {
  for (const { code } of OUTPUT_LANGS) {
    const source = window.WUWA_LANGUAGES.packs[code] || {};
    const translateTerm = makeTranslator(code, termMaps[code]);
    const text = { ...(source.text || {}) };
    Object.keys(text).forEach((key) => {
      if (/[\u3400-\u9fff]/.test(key)) {
        const translated = translateTerm(key);
        if (translated && (code !== "en-US" || !/[\u3400-\u9fff]/.test(translated))) text[key] = translated;
      }
    });
    Object.entries(manualTermMap[code] || {}).forEach(([key, value]) => {
      text[key] = value;
    });
    if (code === "ko") {
      text["暴击"] = "크리티컬";
      text["暴击率"] = "크리티컬";
      text["治疗效果加成"] = "치료 효과 보너스";
      text["伤害加深"] = "피해 증가";
      text["技能倍率提升"] = "피해 배율 상승";
      text["倍率提升"] = "피해 배율 상승";
    }
    const patch = {
      text,
      phrases: source.phrases || {},
    };
    writeLanguageFile(code, "mechanics.js", patch);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
