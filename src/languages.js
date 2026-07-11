"use strict";

window.WUWA_LANGUAGES = (() => {
  const packs = {};
  const DEFAULT_LANG = "zh-CN";
  let active = DEFAULT_LANG;
  let coreData = null;

  const asList = (v) => Array.isArray(v) ? v : (v ? [v] : []);
  const getPath = (obj, path) => String(path || "").split(".").reduce((cur, key) => (cur && cur[key] !== undefined ? cur[key] : undefined), obj);
  const getPack = () => packs[active] || packs[DEFAULT_LANG] || {};
  const HAN_RE = /[\u3400-\u9fff]/;
  const CJK_TEXT_RE = /[\u3400-\u9fff，。；、：？！【】（）]/;
  const SIMPLIFIED_FALLBACK_RE = /[伤声谐骇视标态队触发层击熔导湮灭气衍变无]/;

  function register(code, pack) {
    if (!code || !pack) return;
    packs[code] = { code, ...pack };
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

  function extend(code, patch) {
    if (!code || !patch) return;
    packs[code] = mergeObject(packs[code] || { code }, patch);
  }

  function clone(value) {
    if (typeof structuredClone === "function") return structuredClone(value);
    return JSON.parse(JSON.stringify(value));
  }

  function resetObject(target, source) {
    Object.keys(target || {}).forEach((key) => { delete target[key]; });
    Object.assign(target, clone(source || {}));
  }

  function mergeOverlay(target, source) {
    if (!source || !target) return target;
    if (Array.isArray(source)) {
      source.forEach((item, idx) => {
        if (item && typeof item === "object") {
          target[idx] = mergeOverlay(target[idx] || (Array.isArray(item) ? [] : {}), item);
          return;
        }
        target[idx] = item;
      });
      return target;
    }
    Object.entries(source).forEach(([key, value]) => {
      if (value && typeof value === "object") {
        target[key] = mergeOverlay(target[key] || (Array.isArray(value) ? [] : {}), value);
        return;
      }
      target[key] = value;
    });
    return target;
  }

  function captureCoreData(W, data, sonatas) {
    if (coreData) return;
    coreData = {
      chars: Object.fromEntries(asList(W?.order).map((id) => [id, clone(W.chars[id])])),
      weapons: Object.fromEntries(asList(data?.weapons).map((weapon) => [weapon.id, clone(weapon)])),
      sonatas: Object.fromEntries(asList(sonatas).map((set) => [set.id, clone(set)])),
    };
  }

  function applyData(W = window.WUWA, data = window.WUWA_DATA, sonatas = window.WUWA_SONATAS) {
    captureCoreData(W, data, sonatas);
    const defaultTexts = packs[DEFAULT_LANG]?.data || {};
    const activeTexts = getPack().data || {};
    asList(W?.order).forEach((id) => {
      const target = W.chars?.[id];
      if (!target) return;
      resetObject(target, coreData.chars[id]);
      mergeOverlay(target, defaultTexts.chars?.[id]);
      if (active !== DEFAULT_LANG) mergeOverlay(target, activeTexts.chars?.[id]);
    });
    asList(data?.weapons).forEach((weapon) => {
      resetObject(weapon, coreData.weapons[weapon.id]);
      mergeOverlay(weapon, defaultTexts.weapons?.[weapon.id]);
      if (active !== DEFAULT_LANG) mergeOverlay(weapon, activeTexts.weapons?.[weapon.id]);
    });
    asList(sonatas).forEach((set) => {
      resetObject(set, coreData.sonatas[set.id]);
      mergeOverlay(set, defaultTexts.sonatas?.[set.id]);
      if (active !== DEFAULT_LANG) mergeOverlay(set, activeTexts.sonatas?.[set.id]);
    });
  }

  function available() {
    return Object.values(packs).map((pack) => ({ code: pack.code, label: pack.label, shortLabel: pack.shortLabel || pack.label }));
  }

  function set(code) {
    if (packs[code]) active = code;
    return active;
  }

  function current() {
    return active;
  }

  function currentHtmlLang() {
    return getPack().htmlLang || active;
  }

  function isEnglish() {
    return /^en\b/i.test(active);
  }

  function isKorean() {
    return /^ko\b/i.test(active);
  }

  function isJapanese() {
    return /^ja\b/i.test(active);
  }

  function isChinese() {
    return /^zh\b/i.test(active);
  }

  function locale() {
    return getPack().locale || (isEnglish() ? "en" : isKorean() ? "ko" : isJapanese() ? "ja" : "zh");
  }

  function sourceSeparator() {
    return isChinese() ? "：" : ": ";
  }

  function sourceJoin(source, value) {
    if (!value) return source || "";
    return source ? `${source}${sourceSeparator()}${value}` : value;
  }

  function paren(value) {
    return isChinese() ? `（${value}）` : ` (${value})`;
  }

  function semicolon() {
    return isChinese() ? "；" : "; ";
  }

  function stackUnit(count = 2) {
    if (isEnglish()) return count === 1 ? "stack" : "stacks";
    if (isKorean()) return "스택";
    if (isJapanese()) return "スタック";
    return "层";
  }

  function stackText(value) {
    if (isEnglish()) return `${value} ${stackUnit(numOrOne(value))}`;
    if (isKorean() || isJapanese()) return `${value}${stackUnit()}`;
    return `${value} ${stackUnit()}`;
  }

  function stackTextCompact(value) {
    if (isEnglish()) return `${value} ${stackUnit(numOrOne(value))}`;
    return `${value}${stackUnit()}`;
  }

  function numOrOne(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : 2;
  }

  function pointText(value) {
    if (isEnglish()) return `${value} pts`;
    if (isKorean()) return `${value}pt`;
    if (isJapanese()) return `${value}Pt`;
    return `${value} 点`;
  }

  function pointTextCompact(value) {
    if (isEnglish()) return `${value} pts`;
    if (isKorean()) return `${value}pt`;
    if (isJapanese()) return `${value}Pt`;
    return `${value}点`;
  }

  function durationSeconds(value) {
    if (isEnglish()) return `${value}s`;
    if (isKorean()) return `${value}초`;
    if (isJapanese()) return `${value}秒`;
    return `持续 ${value} 秒`;
  }

  function hasText(value) {
    if (isEnglish()) return `Has ${value}`;
    if (isKorean()) return `${value} 있음`;
    if (isJapanese()) return `${value}あり`;
    return `有${value}`;
  }

  function inText(value) {
    if (isEnglish()) return `In ${value}`;
    if (isKorean()) return `${value} 상태`;
    if (isJapanese()) return `${value}状態`;
    return `处于${value}`;
  }

  function atLeastText(label, value) {
    if (isEnglish()) return `${label} at least ${value}`;
    if (isKorean()) return `${label} ${value} 이상`;
    if (isJapanese()) return `${label}${value}以上`;
    return `${label}不少于${value}`;
  }

  function atLeastCapText(label, value) {
    if (isEnglish()) return `${label} at least ${value}% cap`;
    if (isKorean()) return `${label} 상한 ${value}% 이상`;
    if (isJapanese()) return `${label}上限${value}%以上`;
    return `${label}不少于${value}%上限`;
  }

  function atMaxText(label) {
    if (isEnglish()) return `${label} at max`;
    if (isKorean()) return `${label} 최대`;
    if (isJapanese()) return `${label}最大`;
    return `${label}达到上限`;
  }

  function orText() {
    if (isEnglish()) return " or ";
    if (isKorean()) return " 또는 ";
    if (isJapanese()) return "または";
    return "或";
  }

  function damageBonusLabel(name) {
    if (isEnglish()) return `${name} DMG Bonus`;
    if (isKorean()) return `${name} 피해 보너스`;
    if (isJapanese()) return `${name}ダメージアップ`;
    return `${name}伤害加成`;
  }

  function typeBonusLabel(name) {
    const raw = String(name || "").trim();
    if (!raw) {
      if (isEnglish()) return "Type DMG Bonus";
      if (isKorean()) return "유형 피해 보너스";
      if (isJapanese()) return "タイプダメージアップ";
      return "类型加成";
    }
    if (isEnglish()) return `${raw} Bonus`;
    if (isKorean()) return raw.endsWith("피해") ? `${raw} 보너스` : `${raw} 피해 보너스`;
    if (isJapanese()) return raw.endsWith("ダメージ") ? `${raw}アップ` : `${raw}ダメージアップ`;
    return `${raw}伤害加成`;
  }

  function stripKnownSuffix(value, suffixes) {
    const raw = String(value || "").trim();
    const suffix = suffixes.find((item) => raw.endsWith(item));
    if (!suffix) return raw;
    return raw.slice(0, -suffix.length).trim();
  }

  function damageIncreaseLabel(name) {
    const raw = String(name || "").trim();
    if (!raw) {
      if (isEnglish()) return "DMG Increase";
      if (isKorean()) return "피해 증가";
      if (isJapanese()) return "ダメージブースト";
      return "伤害加深";
    }
    if (isEnglish()) return /\bDMG$/i.test(raw) ? `${raw} Increase` : `${raw || "DMG"} DMG Increase`;
    if (isKorean()) return raw.endsWith("피해") ? `${raw} 증가` : `${raw || "피해"} 피해 증가`;
    if (isJapanese()) return raw.endsWith("ダメージ") ? `${raw}ブースト` : `${raw || "ダメージ"}ダメージブースト`;
    return `${raw || "伤害"}加深`;
  }

  function multiplierIncreaseLabel(name) {
    const raw = String(name || "").trim();
    if (isEnglish()) return /\bDMG$/i.test(raw) ? `${raw} Multiplier Increase` : `${raw || "Skill"} DMG Multiplier Increase`;
    if (isKorean()) return raw.endsWith("피해") ? `${raw} 배율 상승` : `${raw || "스킬"} 피해 배율 상승`;
    if (isJapanese()) return raw.endsWith("ダメージ") ? `${raw}倍率アップ` : `${raw || "スキル"}ダメージ倍率アップ`;
    return `${raw || "技能"}倍率提升`;
  }

  function compareLocale() {
    if (isEnglish()) return "en";
    if (isKorean()) return "ko";
    if (isJapanese()) return "ja";
    return "zh";
  }

  function interpolate(text, vars) {
    if (!vars) return text;
    return String(text).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
  }

  function t(path, vars) {
    const own = getPath(getPack().strings, path);
    const fallback = getPath(packs[DEFAULT_LANG]?.strings, path);
    return interpolate(own ?? fallback ?? path, vars);
  }

  function mapValue(group, value) {
    const raw = String(value ?? "");
    const own = getPack()[group]?.[raw];
    const fallback = packs[DEFAULT_LANG]?.[group]?.[raw];
    return own ?? fallback ?? raw;
  }

  function text(value) {
    const raw = String(value ?? "");
    if (!raw) return "";
    const direct = mapValue("text", raw);
    if (direct !== raw) return direct;
    if (isKorean()) return normalizeKoreanText(applyPhraseReplacements(replaceKnownObjectNames(raw)), CJK_TEXT_RE.test(raw));
    if (isJapanese() && looksLocalizedJapanese(raw)) return applyPhraseReplacements(replaceKnownObjectNames(raw));
    if (isJapanese()) return normalizeJapaneseText(applyPhraseReplacements(replaceKnownObjectNames(raw)), CJK_TEXT_RE.test(raw));
    if (!isEnglish()) return direct;
    return normalizeEnglishText(applyPhraseReplacements(replaceKnownObjectNames(raw)), CJK_TEXT_RE.test(raw));
  }

  function applyPhraseReplacements(value) {
    const replacements = getPack().phrases || {};
    return Object.keys(replacements)
      .sort((a, b) => b.length - a.length)
      .reduce((out, key) => out.split(key).join(replacements[key]), String(value || ""));
  }

  function localeData(code, group, id) {
    if (!code || !group || id == null) return null;
    return packs[code]?.data?.[group]?.[id] || null;
  }

  function officialName(group, id) {
    return localeData("en-US", group, id)?.name || "";
  }

  function replacementPairs() {
    const pairs = [];
    const genericSkillName = /^(第[一二三四五六七八九十]+段|普攻第[一二三四五六七八九十]+段|重击|空中攻击|闪避反击|共鸣解放|变奏技能|延奏技能|技能)$/;
    const add = (source, target) => {
      const raw = String(source || "").trim();
      const value = String(target || "").trim();
      if (!raw || !value || raw === value) return;
      if (raw.length < 2 && HAN_RE.test(raw)) return;
      pairs.push([raw, value]);
    };
    const zhData = packs[DEFAULT_LANG]?.data || {};
    const targetData = packs[isKorean() ? "ko" : isJapanese() ? "ja-JP" : "en-US"]?.data || {};
    Object.keys(zhData.chars || {}).forEach((id) => {
      const zh = zhData.chars[id] || {};
      const target = targetData.chars?.[id] || {};
      add(zh.name, target.name);
      asList(zh.skills).forEach((skill, idx) => {
        if (!genericSkillName.test(String(skill?.name || ""))) add(skill?.name, target.skills?.[idx]?.name);
      });
    });
    Object.keys(zhData.weapons || {}).forEach((id) => add(zhData.weapons[id]?.name, targetData.weapons?.[id]?.name));
    Object.keys(zhData.sonatas || {}).forEach((id) => {
      const zh = zhData.sonatas[id] || {};
      const target = targetData.sonatas?.[id] || {};
      add(zh.name, target.name);
      asList(zh.leads || zh.lead).forEach((lead, idx) => add(lead?.echo, asList(target.leads || target.lead)[idx]?.echo));
    });
    return pairs.sort((a, b) => b[0].length - a[0].length);
  }

  function replaceKnownObjectNames(value) {
    if (!isEnglish() && !isKorean() && !isJapanese()) return value;
    return replacementPairs().reduce((out, [source, target]) => out.split(source).join(target), value);
  }

  function looksLocalizedJapanese(value) {
    const raw = String(value || "");
    if (SIMPLIFIED_FALLBACK_RE.test(raw)) return false;
    return /[\u3040-\u30ff]|[ァ-ヶー]|・|攻撃|防御|共鳴|変奏|終奏|音骸|通常|重撃|空中|回避|協同|協和|異常|焦熱|凝縮|電導|気動|回折|消滅|治療|目標|状態|形態|段階|属性|効果|倍率|上限|固定|耐性|基礎|最終|期待値|共鳴者/.test(raw);
  }

  const CHINESE_NUMBER = { 零: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
  function chineseNumber(value) {
    const raw = String(value || "");
    if (/^\d+$/.test(raw)) return raw;
    if (raw === "十") return 10;
    if (raw.startsWith("十")) return 10 + (CHINESE_NUMBER[raw.slice(1)] || 0);
    if (raw.endsWith("十")) return (CHINESE_NUMBER[raw[0]] || 1) * 10;
    if (raw.includes("十")) {
      const [tens, ones] = raw.split("十");
      return (CHINESE_NUMBER[tens] || 1) * 10 + (CHINESE_NUMBER[ones] || 0);
    }
    return CHINESE_NUMBER[raw] || raw;
  }

  function fallbackHanText(segment) {
    const raw = String(segment || "");
    const direct = mapValue("text", raw);
    if (direct !== raw) return direct;
    if (isKorean()) {
      if (/伤害|技能|普攻|重击|攻击|解放|回路|变奏|延奏/.test(raw)) return "스킬";
      if (/状态|形态|模式|阶段|领域|场地|标记/.test(raw)) return "상태";
      if (/目标|怪物|敌/.test(raw)) return "목표";
      if (/层|层数|叠/.test(raw)) return "스택";
      if (/角色|队伍|自身/.test(raw)) return "공명자";
      if (/属性|加成|增益|效果/.test(raw)) return "효과";
      return "효과";
    }
    if (isJapanese()) {
      if (/伤害|技能|普攻|重击|攻击|解放|回路|变奏|延奏/.test(raw)) return "スキル";
      if (/状态|形态|模式|阶段|领域|场地|标记/.test(raw)) return "状態";
      if (/目标|怪物|敌/.test(raw)) return "目標";
      if (/层|层数|叠/.test(raw)) return "スタック";
      if (/角色|队伍|自身/.test(raw)) return "共鳴者";
      if (/属性|加成|增益|效果/.test(raw)) return "効果";
      return "効果";
    }
    if (/伤害|技能|普攻|重击|攻击|解放|回路|变奏|延奏/.test(raw)) return "the skill";
    if (/状态|形态|模式|阶段|领域|场地|标记/.test(raw)) return "the state";
    if (/目标|怪物|敌/.test(raw)) return "the target";
    if (/层|层数|叠/.test(raw)) return "stacks";
    if (/角色|队伍|自身/.test(raw)) return "Resonator";
    if (/属性|加成|增益|效果/.test(raw)) return "effect";
    return "effect";
  }

  function normalizeEnglishText(value, force = false) {
    let out = String(value || "");
    if (!isEnglish() || (!force && !CJK_TEXT_RE.test(out))) return out;
    out = out
      .replace(/第([一二两三四五六七八九十\d]+)段/g, (_, n) => `Stage ${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)链/g, (_, n) => `RC${chineseNumber(n)}`)
      .replace(/链([一二两三四五六七八九十\d]+)/g, (_, n) => `RC${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)阶/g, (_, n) => `Rank ${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)级/g, (_, n) => `Lv. ${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)层/g, (_, n) => `${chineseNumber(n)} stacks`)
      .replace(/[【】]/g, "")
      .replace(/（/g, " (")
      .replace(/）/g, ") ")
      .replace(/：/g, ": ")
      .replace(/，/g, ", ")
      .replace(/。/g, ". ")
      .replace(/；/g, "; ")
      .replace(/、/g, " / ")
      .replace(/·/g, " · ");
    out = applyPhraseReplacements(out);
    out = replaceKnownObjectNames(out);
    out = out.replace(/[\u3400-\u9fff]+(?:\s*·\s*[\u3400-\u9fff]+)*/g, fallbackHanText);
    return out
      .replace(/\beffect(?:\s+effect)+\b/g, "effect")
      .replace(/([A-Za-z)%])(?=(gains|enters|exits|inherits|deals|increases|decreases|reduces|reaches|switches|removes|consumes|applies|activates|unlocks|after|when|at|based|can|Use|Duration|Each|Current|Max|the|stats|stacks|adds)\b)/g, "$1 ")
      .replace(/([a-z])(?=(ATK|DEF|HP|DMG|RES|Crit|Energy|Basic|Heavy|Resonance|Echo|Outro|Intro|Forte|Inherent|Havoc|Fusion|Glacio|Electro|Aero|Spectro|Tune|Hack)\b)/g, "$1 ")
      .replace(/([A-Za-z)%])(?=(and|or|is|as|All)\b)/g, "$1 ")
      .replace(/\b(Resonator|members|self|Reverberation|Notes|Spirituality|Trace|State|Skill|DMG|ATK|DEF|HP|Havoc|Fusion|Glacio|Electro|Aero|Spectro|stacks)(?=(ATK|DEF|HP|DMG|All|Havoc|Fusion|Glacio|Electro|Aero|Spectro|Basic|Heavy|Resonance|Echo|stacks|adds|increases|decreases|gains|deals|inherits|is|can)\b)/g, "$1 ")
      .replace(/\)(?=[A-Za-z])/g, ") ")
      .replace(/\b(ATK|DEF|HP|DMG|RES|Bonus|Amplification|Rate|Regen|Reverberation|Notes|Spirituality|Trace|effect)(\d)/g, "$1 $2")
      .replace(/\beffect(?=(gains|enters|exits|inherits|deals|increases|decreases|reduces|reaches|switches|removes|consumes|applies|activates|unlocks|after|when|at|the)\b)/g, "effect ")
      .replace(/\s*\/\s*/g, " / ")
      .replace(/\s*·\s*/g, " · ")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*;\s*/g, "; ")
      .replace(/\s+/g, " ")
      .replace(/\s+([,.%;:])/g, "$1")
      .replace(/\bUse\s+after\b/g, "After use")
      .replace(/\bUse\s+when\b/g, "When using")
      .trim();
  }

  function normalizeKoreanText(value, force = false) {
    let out = String(value || "");
    if (!isKorean() || (!force && !CJK_TEXT_RE.test(out))) return out;
    out = out
      .replace(/第([一二两三四五六七八九十\d]+)段/g, (_, n) => `${chineseNumber(n)}단`)
      .replace(/([一二两三四五六七八九十\d]+)链/g, (_, n) => `${chineseNumber(n)}체인`)
      .replace(/链([一二两三四五六七八九十\d]+)\s*/g, (_, n) => `공명 체인 ${chineseNumber(n)} `)
      .replace(/([一二两三四五六七八九十\d]+)阶/g, (_, n) => `랭크 ${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)级/g, (_, n) => `Lv. ${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)层/g, (_, n) => `${chineseNumber(n)}스택`)
      .replace(/[【】]/g, "")
      .replace(/（/g, " (")
      .replace(/）/g, ") ")
      .replace(/：/g, ": ")
      .replace(/，/g, ", ")
      .replace(/。/g, ". ")
      .replace(/；/g, "; ")
      .replace(/、/g, " / ")
      .replace(/·/g, " · ");
    out = applyPhraseReplacements(out);
    out = replaceKnownObjectNames(out);
    out = out.replace(/[\u3400-\u9fff]+(?:\s*·\s*[\u3400-\u9fff]+)*/g, fallbackHanText);
    return out
      .replace(/([A-Za-z가-힣)%])(?=(획득|진입|퇴장|가|은|는|이|을|를|후|시|에서|으로|증가|감소|적용|발동|소모|부여|중첩)\b)/g, "$1 ")
      .replace(/\)(?=[A-Za-z가-힣])/g, ") ")
      .replace(/\s*\/\s*/g, " / ")
      .replace(/\s*·\s*/g, " · ")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*;\s*/g, "; ")
      .replace(/\s+/g, " ")
      .replace(/\s+([,.%;:])/g, "$1")
      .trim();
  }

  function normalizeJapaneseText(value, force = false) {
    let out = String(value || "");
    if (!isJapanese() || (!force && !CJK_TEXT_RE.test(out))) return out;
    out = out
      .replace(/第([一二两三四五六七八九十\d]+)段/g, (_, n) => `${chineseNumber(n)}段目`)
      .replace(/([一二两三四五六七八九十\d]+)链/g, (_, n) => `${chineseNumber(n)}チェーン`)
      .replace(/链([一二两三四五六七八九十\d]+)\s*/g, (_, n) => `共鳴チェーン${chineseNumber(n)} `)
      .replace(/([一二两三四五六七八九十\d]+)阶/g, (_, n) => `ランク${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)级/g, (_, n) => `Lv.${chineseNumber(n)}`)
      .replace(/([一二两三四五六七八九十\d]+)层/g, (_, n) => `${chineseNumber(n)}スタック`)
      .replace(/[【】]/g, "")
      .replace(/（/g, "（")
      .replace(/）/g, "）")
      .replace(/：/g, "：")
      .replace(/，/g, "、")
      .replace(/。/g, "。")
      .replace(/；/g, "；")
      .replace(/、/g, " / ")
      .replace(/·/g, "・");
    out = applyPhraseReplacements(out);
    out = replaceKnownObjectNames(out);
    out = out.replace(/[\u3400-\u9fff]+(?:\s*・\s*[\u3400-\u9fff]+)*/g, fallbackHanText);
    return out
      .replace(/\s*\/\s*/g, " / ")
      .replace(/\s*・\s*/g, "・")
      .replace(/\s+/g, " ")
      .trim();
  }

  function element(value) {
    return mapValue("elements", value);
  }

  function damageType(value) {
    return mapValue("damageTypes", value);
  }

  function category(value) {
    return mapValue("categories", value);
  }

  function stat(value) {
    return mapValue("stats", value);
  }

  function zone(value) {
    return mapValue("zones", value);
  }

  function provider(value) {
    return mapValue("providers", value);
  }

  function pieceTag(value) {
    return mapValue("pieceTags", value);
  }

  function effect(keyOrDef) {
    if (keyOrDef && typeof keyOrDef === "object") {
      const key = keyOrDef.key || keyOrDef.label;
      const mapped = mapValue("effects", key);
      if (mapped !== String(key ?? "")) return mapped;
      return mapValue("effects", keyOrDef.label || keyOrDef.shortLabel || key);
    }
    return mapValue("effects", keyOrDef);
  }

  function effectShort(keyOrDef) {
    if (keyOrDef && typeof keyOrDef === "object") {
      const key = keyOrDef.key || keyOrDef.shortLabel || keyOrDef.label;
      const mapped = mapValue("effectShort", key);
      if (mapped !== String(key ?? "")) return mapped;
      return mapValue("effectShort", keyOrDef.shortLabel || keyOrDef.label || key);
    }
    return mapValue("effectShort", keyOrDef);
  }

  function charName(c) {
    if (!c) return t("common.empty");
    return c.name || mapValue("characters", c.id) || c.id;
  }

  function weaponName(w) {
    if (!w) return t("common.none");
    return w.name || mapValue("weapons", w.id) || w.id;
  }

  function sonataName(s) {
    if (!s) return t("common.unselected");
    return s.name || mapValue("sonatas", s.id) || s.id;
  }

  function leadEchoName(lead) {
    if (!lead) return t("common.unselectedLead");
    if (isKorean()) return text(lead.echo || mapValue("leadEchoes", lead.id || lead.echo));
    if (isJapanese()) return text(lead.echo || mapValue("leadEchoes", lead.id || lead.echo));
    return lead.echo || mapValue("leadEchoes", lead.id || lead.echo);
  }

  function skillName(skill) {
    if (!skill) return t("common.none");
    return skill.name || skill.id;
  }

  function skillOptionName(skill) {
    return skillName(skill);
  }

  function resourceLabel(resource) {
    if (!resource) return "";
    return text(resource.label || resource.id || "");
  }

  function combatStateLabel(def) {
    return text(def?.label || def?.id || "");
  }

  function combatOptionLabel(opt) {
    return text(opt?.label || opt?.valueLabel || opt?.value || "");
  }

  function source(value) {
    const raw = String(value || "");
    if (isKorean()) {
      const mapped = raw.replace(/^链(\d+)·/, "체인$1 · ").replace(/^链(\d+).*/, "체인$1");
      if (/[가-힣]/.test(mapped)) return mapped;
      return text(mapped);
    }
    if (isJapanese()) {
      const mapped = raw.replace(/^链(\d+)·/, "チェーン$1・").replace(/^链(\d+).*/, "チェーン$1");
      if (looksLocalizedJapanese(mapped)) return mapped;
      return text(mapped);
    }
    if (!isEnglish()) return raw;
    if (/^链\d+/.test(raw)) return raw.replace(/^链(\d+).*/, "RC$1");
    return text(raw)
      .replace(/^RC(\d+)·/, "RC$1 · ")
      .replace(/^Outro·/, "Outro · ")
      .replace(/^Inherent Skill·/, "Inherent Skill · ")
      .replace(/^Forte Circuit·/, "Forte Circuit · ")
      .replace(/^(Inherent Skill|Forte Circuit|Outro|Intro|Resonance Skill|Resonance Liberation)\s*·\s*effect$/, "$1")
      .replace(/^(Inherent Skill|Forte Circuit|Outro|Intro|Resonance Skill|Resonance Liberation)effect$/, "$1")
      .replace(/(?:\s*·\s*effect)+$/g, "");
  }

  function buffLabel(buff) {
    if (!buff) return "";
    if (isKorean()) {
      if (buff.zone === "damageBonus") {
        return buff.element ? `${element(buff.element)} 피해 보너스` : "모든 속성 피해 보너스";
      }
      if (buff.zone === "typeBonus") return typeBonusLabel(damageType(buff.type || buff.damageType));
      if (buff.zone === "amplify") {
        const label = text(buff.label || "");
        if (label && !["피해 증가", "증가", "피해 심화", "심화"].includes(label)) return label;
        return damageIncreaseLabel(damageType(buff.damageType || buff.type || ""));
      }
      if (buff.zone === "vulnerability") return `${damageType(buff.damageType || buff.type || "") || "피해"} 취약`;
      if (buff.zone === "skillMultBonus") {
        const label = stripKnownSuffix(text(buff.label), ["피해 배율 증가", "피해 배율 상승", "배율 증가", "배율 상승"]);
        return multiplierIncreaseLabel(label);
      }
      if (buff.zone === "effectCapBonus") return `${effect(buff.effect || "")} 상한`;
      if (buff.multAdd || buff.multAddByResource || buff.perStackBonus) {
        const label = stripKnownSuffix(text(buff.label), ["피해 배율 증가", "피해 배율 상승", "배율 증가", "배율 상승"]);
        return multiplierIncreaseLabel(label);
      }
      return text(buff.label || "");
    }
    if (isJapanese()) {
      if (buff.zone === "damageBonus") {
        return buff.element ? `${element(buff.element)}ダメージアップ` : "全属性ダメージアップ";
      }
      if (buff.zone === "typeBonus") return typeBonusLabel(damageType(buff.type || buff.damageType));
      if (buff.zone === "amplify") {
        const label = text(buff.label || "");
        if (label && !["ダメージブースト", "ブースト"].includes(label)) return label;
        return damageIncreaseLabel(damageType(buff.damageType || buff.type || ""));
      }
      if (buff.zone === "vulnerability") return `${damageType(buff.damageType || buff.type || "") || "ダメージ"}被ダメージアップ`;
      if (buff.zone === "skillMultBonus") {
        const label = stripKnownSuffix(text(buff.label), ["ダメージ倍率アップ", "倍率アップ"]);
        return multiplierIncreaseLabel(label);
      }
      if (buff.zone === "effectCapBonus") return `${effect(buff.effect || "")}上限`;
      if (buff.multAdd || buff.multAddByResource || buff.perStackBonus) {
        const label = stripKnownSuffix(text(buff.label), ["ダメージ倍率アップ", "倍率アップ"]);
        return multiplierIncreaseLabel(label);
      }
      return text(buff.label || "");
    }
    if (!isEnglish()) return buff.label || "";
    if (buff.zone === "damageBonus") {
      return buff.element ? `${element(buff.element)} DMG Bonus` : "All-Attribute DMG Bonus";
    }
    if (buff.zone === "typeBonus") return typeBonusLabel(damageType(buff.type || buff.damageType));
    if (buff.zone === "amplify") {
      const label = text(buff.label || "");
      if (label && !["DMG Increase", "Increase", "DMG Amplification", "Amplification"].includes(label)) return label;
      return damageIncreaseLabel(damageType(buff.damageType || buff.type || ""));
    }
    if (buff.zone === "vulnerability") return `${damageType(buff.damageType || buff.type || "") || "DMG"} Vulnerability`;
    if (buff.zone === "skillMultBonus") {
      const label = stripKnownSuffix(text(buff.label), ["DMG Multiplier Increase", "Multiplier Increase"]);
      return multiplierIncreaseLabel(label);
    }
    if (buff.zone === "effectCapBonus") return `${effect(buff.effect || "")} Max Stacks`;
    if (buff.multAdd || buff.multAddByResource || buff.perStackBonus) {
      const label = stripKnownSuffix(text(buff.label), ["DMG Multiplier Increase", "Multiplier Increase"]);
      return multiplierIncreaseLabel(label);
    }
    return text(buff.label || "");
  }

  function sourceTitle(value) {
    if (isKorean() || isJapanese()) return source(value);
    if (!isEnglish()) return String(value || "").replace(/^链(\d+)·/, "$1链·");
    return source(value);
  }

  function localizeList(values, mapper = text) {
    return asList(values).map(mapper).join("/");
  }

  return {
    register, extend, applyData, localeData, officialName, available, set, current, currentHtmlLang,
    isEnglish, isKorean, isJapanese, isChinese, locale, sourceSeparator, sourceJoin, paren, semicolon,
    stackUnit, stackText, stackTextCompact, pointText, pointTextCompact, durationSeconds, hasText, inText,
    atLeastText, atLeastCapText, atMaxText, orText, damageBonusLabel, typeBonusLabel, compareLocale,
    t, text, mapValue, element, damageType, category, stat, zone, provider, pieceTag,
    effect, effectShort, charName, weaponName, sonataName, leadEchoName, skillName, skillOptionName,
    resourceLabel, combatStateLabel, combatOptionLabel, source, sourceTitle, buffLabel, localizeList,
  };
})();
