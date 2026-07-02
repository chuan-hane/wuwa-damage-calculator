"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const charDir = path.join(dataDir, "core/chara");

function jsFilesUnder(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsFilesUnder(full);
    if (!entry.isFile() || !entry.name.endsWith(".js")) return [];
    return [path.relative(root, full)];
  });
}

const charFiles = jsFilesUnder(charDir).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

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

require(path.join(root, "data/core/weapons.js"));
require(path.join(root, "data/core/sonatas.js"));
for (const file of charFiles) {
  loadingCharFile = file;
  require(path.join(root, file));
  loadingCharFile = null;
}
require(path.join(root, "data/icons.js"));
require(path.join(root, "src/languages.js"));
function languageFiles(lang) {
  const dir = path.join(root, "data/languages", lang);
  const order = ["base.js", "ui.js", "terms.js", "mechanics.js"];
  const known = order.filter((file) => fs.existsSync(path.join(dir, file)));
  const rest = jsFilesUnder(dir)
    .map((file) => path.relative(dir, path.join(root, file)))
    .filter((file) => file.endsWith(".js") && !known.includes(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return [...known, ...rest].map((file) => path.join(dir, file));
}
const SUPPORTED_LANGS = ["zh-CN", "en-US", "ko", "ja-JP"];
for (const lang of SUPPORTED_LANGS) {
  for (const file of languageFiles(lang)) require(file);
}
window.WUWA_LANGUAGES.applyData(window.WUWA, window.WUWA_DATA, window.WUWA_SONATAS);
require(path.join(root, "src/rules.js"));
require(path.join(root, "src/render-helpers.js"));
require(path.join(root, "src/equipment.js"));
require(path.join(root, "src/settlement.js"));
require(path.join(root, "src/buff-view.js"));
require(path.join(root, "src/panel-view.js"));
require(path.join(root, "src/stage-view.js"));

const board = { innerHTML: "", querySelectorAll: () => [] };
global.document = { getElementById: () => board, onclick: null, documentElement: { lang: "" }, title: "" };

const app = fs.readFileSync(path.join(root, "src/app.js"), "utf8").replace(
  /\nrender\(\);\s*$/,
  "\nglobalThis.__T = { state, pickCharacter, compute, slotBuffs, availableSkills, resourceKey, resourceControlsForSlot, resolvedSkill, buffStatus, setBuffToggle, stateChoiceKey, stateControlsHTML, buffFormulaText, render, syncOffsetFromStateChoice };",
);
eval(app);

function assert(ok, message) {
  if (!ok) throw new Error(message);
}

function buff(slot, id) {
  const found = __T.slotBuffs(slot).find((b) => b.id === id);
  assert(found, `Missing buff ${id}`);
  return found;
}

function skill(c, id) {
  const found = (c.skills || []).find((s) => s.id === id || (s.legacyIds || []).includes(id));
  assert(found, `Missing skill ${c.id}.${id}`);
  return found;
}

const weapons = window.WUWA_DATA.weapons;
const sonatas = window.WUWA_SONATAS;
const validScaleStats = new Set([
  "energyRegen", "critRate", "critDamage", "attack", "hp", "defense",
  "attackPercent", "hpPercent", "defensePercent", "healingBonus", "breakAmp", "discordEff",
  "共鸣效率", "暴击", "暴击率", "暴击伤害", "攻击", "生命", "防御", "治疗效果加成", "谐度破坏增幅", "偏谐值累积效率",
]);
const validSkillStats = new Set(["attack", "hp", "defense"]);
const validEventKeys = new Set([
  "introEntry", "castBasicAttack", "castResonanceSkill", "castResonanceLiberation",
  "castForteCircuit", "castIntroSkill", "castOutroSkill", "castEchoSkill", "castResonanceChain",
  "shield", "heal", "consumeConcerto",
  "applyAeroErosion", "applySpectroFrazzle", "applyGlacioChafe", "applyPhotochromicFlux",
  "applyObservationMark", "enterReincarnation", "gainLesserYang",
]);
const validCharIds = new Set(window.WUWA.order);
const validBuffZones = new Set([...Object.keys(window.WUWA_RULES.ZONE_LABEL), "effectCapBonus"]);
const validEffectKeys = new Set(Object.keys(window.WUWA_RULES.EFFECT_DEFS).filter((key) => key !== "none"));
const validElements = new Set(window.WUWA_RULES.ELEMENTS);

function validateBuffShape(owner, b, siblingIds, bad) {
  if (b.zone && !validBuffZones.has(b.zone)) bad.push(`${owner}: zone ${b.zone} unsupported`);
  if (b.scaleBy && !validScaleStats.has(b.scaleBy.stat)) bad.push(`${owner}: scaleBy.stat ${b.scaleBy.stat} unsupported`);
  if (b.requiresSourceStat && !validScaleStats.has(b.requiresSourceStat.stat)) bad.push(`${owner}: requiresSourceStat.stat ${b.requiresSourceStat.stat} unsupported`);
  validateEvents(`${owner}: triggerEvents`, b.triggerEvents, bad);
  for (const rule of [].concat(b.triggerRules || [])) validateEvents(`${owner}: triggerRules.events`, rule.events, bad);
  for (const charId of [].concat(b.requiresChar || [], b.requiresSourceChar || [])) {
    if (!validCharIds.has(charId)) bad.push(`${owner}: character reference ${charId} missing`);
    if (/[\u3400-\u9fff]/.test(String(charId))) bad.push(`${owner}: character reference ${charId} must use id`);
  }
  if (b.requiresEffectStacks) {
    const key = window.WUWA_RULES.effectKeyOf(b.requiresEffectStacks.effect || b.requiresEffectStacks.key);
    if (!validEffectKeys.has(key)) bad.push(`${owner}: requiresEffectStacks.effect ${b.requiresEffectStacks.effect || b.requiresEffectStacks.key} unsupported`);
    if (!Number.isFinite(Number(b.requiresEffectStacks.stacks ?? b.requiresEffectStacks.min))) bad.push(`${owner}: requiresEffectStacks.stacks missing`);
  }
  if (b.requiresBuffStacks && siblingIds && !siblingIds.has(b.requiresBuffStacks.id)) bad.push(`${owner}: requiresBuffStacks ${b.requiresBuffStacks.id} missing`);
  if (b.triggerStacksByTeamElement) {
    const element = b.triggerStacksByTeamElement.element;
    if (element && !validElements.has(element)) bad.push(`${owner}: triggerStacksByTeamElement.element ${element} unsupported`);
    if (!Number.isFinite(Number(b.triggerStacksByTeamElement.base ?? b.triggerStacksByTeamElement.baseStacks ?? 0))) bad.push(`${owner}: triggerStacksByTeamElement.base invalid`);
  }
}

function validateEvents(owner, events, bad) {
  for (const event of [].concat(events || [])) {
    if (!validEventKeys.has(event)) bad.push(`${owner}: event ${event} unsupported`);
    if (/[\u3400-\u9fff]/.test(String(event))) bad.push(`${owner}: event ${event} must use token`);
  }
}

function allBuffs(c) {
  return [
    ...(c.buffs || []),
    ...(c.chain || []).flatMap((node) => (node.buffs || []).map((b) => ({ ...b, seq: b.seq ?? node.seq }))),
  ];
}

function findWeapon(id) {
  return weapons.find((w) => (
    w.id === id
    || w.name === id
    || window.WUWA_LANGUAGES.localeData("zh-CN", "weapons", w.id)?.name === id
    || window.WUWA_LANGUAGES.localeData("en-US", "weapons", w.id)?.name === id
  ));
}

function weaponEffect(weaponId, effectId) {
  const w = findWeapon(weaponId);
  assert(w, `Missing weapon ${weaponId}`);
  const found = (w.effects || []).find((e) => e.id === effectId);
  assert(found, `Missing weapon effect ${weaponId}.${effectId}`);
  return found;
}

function findSonata(id) {
  return sonatas.find((s) => s.id === id);
}

function resetTeam(chars = ["jinhsi", "zhezhi", "verina"]) {
  __T.state.slots.forEach((slot) => {
    slot.char = null;
    slot.weapon = null;
    slot.rank = 1;
    slot.seq = 0;
    slot.toggles = {};
    slot.resources = {};
    slot.skillLevels = {};
    slot.skill = null;
    slot.layers = null;
    slot.extraPanelRows = [];
  });
  chars.forEach((charId, idx) => __T.pickCharacter(idx, charId));
  __T.state.outputIdx = 0;
  __T.state.enemy = { charLevel: 90, enemyLevel: 90, harmonyBase: 10027, res: 10, resShred: 0, defShred: 0, defIgnore: 0, vulnerability: 0, dmgReduction: 0, finalDmg: 0 };
  __T.state.showDesc = false;
  __T.state.showTargetExtras = false;
  __T.state.damageMode = "expected";
  __T.state.offsetCalc = { key: "tuneBreak", providerIdx: null, skillId: null, stateId: null, stateValue: null, stacks: 3, deepen: 0 };
}

function expectEqual(actual, expected, label) {
  assert(actual === expected, `${label}: expected ${expected}, got ${actual}`);
}

function visibleText(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<\/(option|div|span|label|section|article|li|summary|details|p|h[1-6])>/gi, " | ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function indexLoadsAllCharacterFiles() {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert(html.includes("<title>wuwa伤害计算器</title>"), "index title should stay wuwa damage calculator");
  const scripts = [...html.matchAll(/<script\s+src="(data\/core\/chara\/[^"]+\.js)"/g)].map((m) => m[1]);
  const missing = charFiles.filter((file) => !scripts.includes(file));
  const extra = scripts.filter((file) => !charFiles.includes(file));
  assert(!missing.length, `index.html missing character scripts: ${missing.join(", ")}`);
  assert(!extra.length, `index.html has unknown character scripts: ${extra.join(", ")}`);
}

function languagePacksAreSplit() {
  for (const lang of SUPPORTED_LANGS) {
    const dir = path.join(root, "data/languages", lang);
    const files = fs.readdirSync(dir).filter((file) => file.endsWith(".js")).sort();
    assert(!files.includes("index.js"), `${lang} language pack should be split into domain files, not a single index.js`);
    assert(files.length >= 2, `${lang} language pack should contain split files`);
    assert(fs.existsSync(path.join(dir, "base.js")), `${lang} language pack should include base.js`);
  }
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  for (const lang of SUPPORTED_LANGS) {
    assert(!html.includes(`data/languages/${lang}/index.js`), "index.html should load split language files, not language index.js files");
  }
}

function coreDataDoesNotContainDisplayTextFields() {
  const displayKeys = [
    "name", "weaponTypeName", "label", "source", "trigger", "excerpt", "desc",
    "entry", "inactiveLabel", "conditionText", "description", "resonanceName", "typeName", "echo",
  ];
  const pattern = new RegExp(`\"(${displayKeys.join("|")})\"\\s*:`);
  const bad = jsFilesUnder(path.join(dataDir, "core")).filter((file) => pattern.test(fs.readFileSync(path.join(root, file), "utf8")));
  assert(!bad.length, `core data should keep display text in language packs only: ${bad.join(", ")}`);
  const aliasBad = charFiles.filter((file) => !/"aliases": \[\]/.test(fs.readFileSync(path.join(root, file), "utf8")));
  assert(!aliasBad.length, `core character aliases should live in language packs only: ${aliasBad.join(", ")}`);
}

function stateAndResourceTokensAreLanguageNeutral() {
  const bad = [];
  const hasCjk = (value) => /[\u3400-\u9fff]/.test(String(value));
  const check = (owner, field, value) => {
    [].concat(value || []).forEach((item) => {
      if (hasCjk(item)) bad.push(`${owner}.${field}: ${item}`);
    });
  };
  const checkResourceRequirement = (owner, field, req) => {
    if (!req) return;
    [].concat(req).forEach((item) => {
      check(owner, `${field}.id`, item?.id);
      check(owner, `${field}.ids`, item?.ids || item?.resources);
      check(owner, `${field}.alternateStates`, item?.alternateStates);
    });
  };

  for (const c of Object.values(window.WUWA.chars)) {
    for (const resource of c.resources || []) {
      check(`${c.id}.resource`, "id", resource.id);
      check(`${c.id}.resource`, "group", resource.group);
    }
    for (const def of c.combatStates || []) {
      const owner = `${c.id}.state.${def.id}`;
      check(owner, "id", def.id);
      check(owner, "defaultValue", def.defaultValue);
      check(owner, "requiresState", def.requiresState);
      check(owner, "requiresAllStates", def.requiresAllStates);
      for (const opt of def.options || []) check(owner, "option.value", opt.value);
    }
    for (const sk of c.skills || []) {
      const owner = `${c.id}.${sk.id}`;
      check(owner, "requiresState", sk.requiresState);
      check(owner, "requiresAllStates", sk.requiresAllStates);
      check(owner, "impliedStates", sk.impliedStates);
      check(owner, "requiresResource", sk.requiresResource);
      check(owner, "requiresResourceFull", sk.requiresResourceFull);
      check(owner, "stackResource", sk.stackResource);
      checkResourceRequirement(owner, "requiresResourceAtLeast", sk.requiresResourceAtLeast);
      checkResourceRequirement(owner, "requiresAllResourcesAtLeast", sk.requiresAllResourcesAtLeast);
      checkResourceRequirement(owner, "requiresResourceSumAtLeast", sk.requiresResourceSumAtLeast);
    }
    for (const b of allBuffs(c)) {
      const owner = `${c.id}.${b.id}`;
      check(owner, "requiresState", b.requiresState);
      check(owner, "requiresAllStates", b.requiresAllStates);
      check(owner, "requiresResource", b.requiresResource);
      check(owner, "stackGroup", b.stackGroup);
    }
  }
  assert(!bad.length, `state/resource tokens must be language-neutral:\n${bad.join("\n")}`);
}

function initialRenderCompletes() {
  __T.state.lang = "zh-CN";
  __T.render();
  const html = String(board.innerHTML);
  const damageIdx = html.indexOf('id="out-active"');
  const formulaIdx = html.indexOf('id="metric-strip"');
  const lowerIdx = html.indexOf('class="damage-lower');
  const skillDetailIdx = html.indexOf('<div id="dmg-type"');
  assert(html.includes("stage-shell"), "initial render did not produce the stage shell");
  assert(html.includes("<h1>wuwa伤害计算器</h1>"), "topbar title should stay wuwa damage calculator");
  assert(html.includes('class="stage-language"') && html.includes('data-act="language"') && html.includes('data-lang="zh-CN"') && html.includes(">ZH</button>") && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "topbar should render functional language switch controls");
  assert(html.includes('class="stage-github-link"') && html.includes("https://github.com/chuan-hane/wuwa-damage-calculator"), "topbar should link to the GitHub repository");
  assert((html.match(/data-act="echo-detail"/g) || []).length === 3 && html.includes("详细声骸模式"), "team cards should render detailed echo mode switches");
  assert(damageIdx >= 0 && formulaIdx > damageIdx && formulaIdx < lowerIdx, "main damage formula should sit below the large damage number and above lower controls");
  assert(skillDetailIdx > lowerIdx, "skill detail formula should stay inside the lower skill controls");
  assert(html.includes('class="skill-control-row"') && html.indexOf('data-act="skill"') > html.indexOf('class="skill-control-row"') && html.indexOf('data-act="skilllevel"') > html.indexOf('class="skill-control-row"'), "skill and skill level controls should share one row");
  assert(!html.includes('class="mode-tabs"'), "top-right damage mode tabs should not render");
  assert(!html.includes('class="pos-num"'), "top output selector should not render slot numbers");
  assert(!html.includes("damage-formula-panel"), "old formula panel wrapper should not be rendered");
  assert(html.includes('class="damage-lower') && html.includes('class="damage-control-main"'), "skill controls should be in the lower damage section");
  assert(html.includes("offset-calc"), "offset-system calculator should be permanently visible");
  assert(html.includes("谐度破坏伤害"), "base Tune Break damage should be selectable without offset-system teammates");
  assert(!html.includes("减防0%"), "compact damage formulas should not render zero defense shred");
  assert(html.includes('data-act="offset-cost"'), "offset calculator should expose target Cost selection");
  assert(!html.includes('data-act="offset-char-level"'), "offset calculator should not expose player level selection");
  assert(!html.includes('data-key="charLevel"'), "target controls should not expose player level input");
  assert(html.includes("team-avatar-level"), "team cards should show fixed level badge on character avatars");
  assert(!html.includes('data-act="offset-provider"'), "offset calculator should not expose provider selection");
  assert(!html.includes("<option value=\"none\">不计算</option>"), "offset calculator should not expose a no-calculation option");
  assert(!html.includes('data-act="effect-key"'), "initial non-effect team should not show the abnormal-effect calculator");
  const r = __T.compute();
  assert(r.offset.available, "base Tune Break calculator should be available for ordinary teams");
  expectEqual(r.offset.kind, "tuneBreak", "offset calculator should default to base Tune Break damage");
  assert((r.offset.entries || []).some((entry) => entry.kind === "tuneBreak"), "ordinary teams should include base Tune Break damage entry");
  const offsetHtml = html.slice(html.indexOf('id="out-offset"'), html.indexOf("</div></div></section>", html.indexOf('id="out-offset"')));
  assert(offsetHtml.includes("<span>减伤/易伤</span>") && offsetHtml.includes("<span>最终伤害</span>") && offsetHtml.includes("<span>固定系数</span>"), "base Tune Break formula should show every multiplier card");
  assert(!offsetHtml.includes("抗性/固定"), "base Tune Break formula should not imply RES is part of Tune Break damage");
  assert(offsetHtml.includes("effect-mini-strip--formula") && !offsetHtml.includes("<b>×"), "offset formula cards should use outer multiply signs");
}

function englishRenderCompletes() {
  __T.state.lang = "en-US";
  __T.render();
  const html = String(board.innerHTML);
  assert(document.documentElement.lang === "en", "English render should set html lang=en");
  assert(document.title === "Wuthering Waves Damage Calculator", "English render should set the document title");
  assert(html.includes("<h1>Wuthering Waves Damage Calculator</h1>"), "topbar should render the English title");
  assert(html.includes('aria-label="Open GitHub repository"'), "English topbar should localize the GitHub repository link label");
  assert(html.includes("Resonator Panel"), "panel heading should render in English");
  assert(html.includes("Current Attack Buffs"), "buff heading should render in English");
  assert(html.includes("Final DMG"), "damage stage should use official English DMG wording");
  assert(html.includes("Tune Break DMG"), "offset system should use official Tune Break DMG terminology");
  assert(html.includes("Jinhsi") && html.includes("Ages of Harvest"), "English render should use formal character and weapon names");
  assert(html.includes('data-lang="zh-CN"') && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "all language buttons should remain available");
  __T.state.lang = "zh-CN";
  __T.render();
}

function koreanRenderCompletes() {
  __T.state.lang = "ko";
  __T.render();
  const html = String(board.innerHTML);
  assert(document.documentElement.lang === "ko", "Korean render should set html lang=ko");
  assert(document.title === "명조 피해 계산기", "Korean render should set the document title");
  assert(html.includes("<h1>명조 피해 계산기</h1>"), "topbar should render the Korean title");
  assert(html.includes('aria-label="GitHub 저장소 열기"'), "Korean topbar should localize the GitHub repository link label");
  assert(html.includes("공명자 스탯"), "panel heading should render in Korean");
  assert(html.includes("이번 공격 버프"), "buff heading should render in Korean");
  assert(html.includes("최종 피해"), "damage stage should render in Korean");
  assert(html.includes("조화도 파괴 피해"), "offset system should render in Korean");
  assert(html.includes("금희") && html.includes("태평성대"), "Korean render should use Korean character and weapon names");
  assert(html.includes('data-lang="zh-CN"') && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "all language buttons should remain available");
  __T.state.lang = "zh-CN";
  __T.render();
}

function japaneseRenderCompletes() {
  __T.state.lang = "ja-JP";
  __T.render();
  const html = String(board.innerHTML);
  assert(document.documentElement.lang === "ja", "Japanese render should set html lang=ja");
  assert(document.title === "鳴潮ダメージ計算機", "Japanese render should set the document title");
  assert(html.includes("<h1>鳴潮ダメージ計算機</h1>"), "topbar should render the Japanese title");
  assert(html.includes('aria-label="GitHub リポジトリを開く"'), "Japanese topbar should localize the GitHub repository link label");
  assert(html.includes("共鳴者ステータス"), "panel heading should render in Japanese");
  assert(html.includes("今回の攻撃 Buff"), "buff heading should render in Japanese");
  assert(html.includes("最終ダメージ"), "damage stage should render in Japanese");
  assert(html.includes("協和破壊ダメージ"), "offset system should render in Japanese");
  assert(html.includes("今汐") && html.includes("歳華調和"), "Japanese render should use Japanese character and weapon names");
  assert(html.includes('data-lang="zh-CN"') && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "all language buttons should remain available");
  __T.state.lang = "zh-CN";
  __T.render();
}

function englishVisibleTextHasNoChinese() {
  const bad = [];
  for (const id of window.WUWA.order) {
    resetTeam([id]);
    __T.state.lang = "en-US";
    __T.render();
    const text = visibleText(board.innerHTML);
    if (!/[\u3400-\u9fff]/.test(text)) continue;
    const match = text.match(/[^.!?\n。；;]*[\u3400-\u9fff][^.!?\n。；;]*/);
    bad.push(`${id}: ${(match && match[0].slice(0, 220)) || "Chinese text remains"}`);
  }
  __T.state.lang = "zh-CN";
  __T.render();
  assert(!bad.length, `English visible text should not contain Chinese:\n${bad.join("\n")}`);
}

function scanStringValues(value, owner, bad, pattern) {
  if (Array.isArray(value)) {
    value.forEach((item, idx) => scanStringValues(item, `${owner}[${idx}]`, bad, pattern));
    return;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => scanStringValues(item, owner ? `${owner}.${key}` : key, bad, pattern));
    return;
  }
  if (typeof value === "string" && pattern.test(value)) bad.push(`${owner}: ${value.slice(0, 220)}`);
}

function mergeLanguagePatch(target, source) {
  for (const [key, value] of Object.entries(source || {})) {
    if (value && typeof value === "object" && !Array.isArray(value)) target[key] = mergeLanguagePatch(target[key] || {}, value);
    else target[key] = value;
  }
  return target;
}

function isolatedLanguagePack(lang) {
  const ctx = {
    window: {
      WUWA_LANGUAGES: {
        packs: {},
        register(code, pack) {
          this.packs[code] = { code, ...pack };
        },
        extend(code, patch) {
          this.packs[code] = mergeLanguagePatch(this.packs[code] || { code }, patch);
        },
      },
    },
  };
  vm.createContext(ctx);
  for (const file of languageFiles(lang)) {
    vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  }
  return ctx.window.WUWA_LANGUAGES.packs[lang];
}

function targetLanguageFallbackPatterns() {
  return [
    ["en-US", /[\u3400-\u9fff]|DMG DMG/],
    ["ko", /目标|状态|雷之楔|雷池|集谐|震谐|骇破|偏移|干涉|韶光|焰光|黯核|聚爆效应|霜冻效应|红|蕾|模式|该用这个|身相|常世|预求|^효과$|효과 \+0|Effect \+0|jue|DMG Bonus|DMG Increase|DMG Multiplier|피해 피해/],
    ["ja-JP", /目标|状态|雷之楔|雷池|集谐|震谐|骇破|干涉|焰光|黯核|聚爆效应|霜冻效应|红|模式|该用这个|常世身|预求身|^効果$|効果 \+0|Effect \+0|효과 \+0|jue|DMG Bonus|DMG Increase|DMG Multiplier|ダメージ ダメージ/],
  ];
}

function targetLanguageDataHasNoFallbackText() {
  const bad = [];
  for (const [lang, pattern] of targetLanguageFallbackPatterns()) {
    scanStringValues(isolatedLanguagePack(lang), lang, bad, pattern);
  }
  assert(!bad.length, `target language data should not contain fallback/generated placeholder text:\n${bad.join("\n")}`);
}

function targetVisibleTextHasNoFallbackText() {
  const bad = [];
  for (const [lang, pattern] of targetLanguageFallbackPatterns().filter(([lang]) => lang !== "en-US")) {
    for (const id of window.WUWA.order) {
      resetTeam([id]);
      __T.state.lang = lang;
      __T.render();
      const text = visibleText(board.innerHTML);
      if (!pattern.test(text)) continue;
      const match = text.match(new RegExp(`[^\\n。；;]*(${pattern.source})[^\\n。；;]*`));
      bad.push(`${lang}.${id}: ${(match && match[0].slice(0, 220)) || "fallback text remains"}`);
    }
  }
  __T.state.lang = "zh-CN";
  __T.render();
  assert(!bad.length, `target visible text should not contain fallback/generated placeholder text:\n${bad.join("\n")}`);
}

function targetLanguageDataCompleteness() {
  const bad = [];
  const targets = [
    ["ko", "Korean"],
    ["ja-JP", "Japanese"],
  ];
  for (const [lang, label] of targets) {
    for (const id of window.WUWA.order) {
      const c = window.WUWA.chars[id];
      const pack = window.WUWA_LANGUAGES.localeData(lang, "chars", id);
      if (!pack?.name) bad.push(`${id}: missing ${label} character name`);
      (c.skills || []).forEach((sk, idx) => {
        if (!pack?.skills?.[idx]?.name) bad.push(`${id}.${sk.id}: missing ${label} skill name`);
      });
    }
    for (const w of weapons) {
      if (!window.WUWA_LANGUAGES.localeData(lang, "weapons", w.id)?.name) bad.push(`weapon ${w.id}: missing ${label} name`);
    }
    for (const set of sonatas) {
      const pack = window.WUWA_LANGUAGES.localeData(lang, "sonatas", set.id);
      if (!pack?.name) bad.push(`sonata ${set.id}: missing ${label} name`);
      const leads = [].concat(set.leads || [], set.lead || []);
      const targetLeads = [].concat(pack?.leads || [], pack?.lead || []);
      leads.forEach((lead, idx) => {
        const echo = targetLeads[idx]?.echo;
        if (!echo) bad.push(`sonata ${set.id}.${lead.id || idx}: missing ${label} lead echo`);
        else if (echo === lead.id || (lang !== "ja-JP" && echo === lead.echo)) bad.push(`sonata ${set.id}.${lead.id || idx}: ${label} lead echo fell back to core id ${echo}`);
      });
    }
  }
  assert(!bad.length, bad.join("\n"));
}

function targetWeaponBuffExcerptsStayConcise() {
  const bad = [];
  for (const lang of ["en-US", "ko", "ja-JP"]) {
    const weaponsPack = isolatedLanguagePack(lang)?.data?.weapons || {};
    for (const [id, weapon] of Object.entries(weaponsPack)) {
      (weapon.effects || []).forEach((effect, idx) => {
        const excerpt = String(effect.excerpt || "").trim();
        const conditionText = String(effect.conditionText || "").trim();
        if (!excerpt) bad.push(`${lang}.${id}.effects[${idx}]: missing excerpt`);
        if (excerpt.length > 120) bad.push(`${lang}.${id}.effects[${idx}]: excerpt too long: ${excerpt.slice(0, 180)}`);
        if (conditionText.length > 120 && excerpt === conditionText) bad.push(`${lang}.${id}.effects[${idx}]: excerpt duplicates full official text`);
      });
    }
  }
  assert(!bad.length, `weapon buff default excerpts should stay concise:\n${bad.join("\n")}`);
}

function sourceTextHasNoEchoTypo() {
  const typo = "声" + "骇";
  const files = [
    "README.md",
    "README.en.md",
    "README.ko.md",
    "README.ja-JP.md",
    "scripts/verify.js",
    ...jsFilesUnder(path.join(root, "src")),
    ...jsFilesUnder(path.join(root, "data/languages")),
  ];
  const bad = files.filter((file) => fs.readFileSync(path.join(root, file), "utf8").includes(typo));
  assert(!bad.length, `Echo text typo should not appear in source files: ${bad.join(", ")}`);
}

function readmesLinkLiveSite() {
  const url = "https://wuwa-damage-calculator.chuan-hane.workers.dev";
  const readmes = [
    ["README.md", "Chinese"],
    ["README.en.md", "English"],
    ["README.ko.md", "Korean"],
    ["README.ja-JP.md", "Japanese"],
  ];
  for (const [file, label] of readmes) {
    assert(fs.readFileSync(path.join(root, file), "utf8").includes(url), `${label} README should link to the live site`);
  }
}

function readmeLanguageNavUsesCodes() {
  const navs = [
    ["README.md", "### ZH | [EN](README.en.md) | [KO](README.ko.md) | [JA](README.ja-JP.md)"],
    ["README.en.md", "### [ZH](README.md) | EN | [KO](README.ko.md) | [JA](README.ja-JP.md)"],
    ["README.ko.md", "### [ZH](README.md) | [EN](README.en.md) | KO | [JA](README.ja-JP.md)"],
    ["README.ja-JP.md", "### [ZH](README.md) | [EN](README.en.md) | [KO](README.ko.md) | JA"],
  ];
  for (const [file, expected] of navs) {
    const firstLine = fs.readFileSync(path.join(root, file), "utf8").split(/\r?\n/, 1)[0];
    assert(firstLine === expected, `${file} should use language-code navigation`);
  }
}

function damageMetricCritLabels() {
  resetTeam(["jinhsi"]);
  __T.state.damageMode = "crit";
  __T.render();
  let html = String(board.innerHTML);
  let metricHtml = html.slice(html.indexOf('class="metric-strip"'), html.indexOf('class="damage-lower'));
  assert(html.includes("<span>暴击伤害</span>") && !html.includes("<span>暴击区</span>"), "crit metric should be labeled as crit damage");
  assert(!metricHtml.includes("<b>×"), "metric card values should not duplicate the outer multiply sign");
  __T.state.damageMode = "expected";
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("<span>期望修正</span>") && !html.includes("<span>暴击区</span>"), "expected metric should be labeled as expected correction");
  __T.state.damageMode = "normal";
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("<span>非暴伤害</span>") && !html.includes("<span>暴击区</span>"), "normal metric should be labeled as non-crit damage");
}

function formulaStripResponsiveCss() {
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  const metricBaseIdx = css.indexOf(".metric-strip {\n  --formula-gap");
  const responsiveIdx = css.lastIndexOf("@container (max-width: 38rem)");
  assert(metricBaseIdx >= 0, "metric strip base style should exist");
  assert(responsiveIdx > metricBaseIdx, "metric strip responsive rules should follow the base style so they override it");
  assert(css.includes("grid-template-columns: repeat(9, minmax(0, 1fr));"), "main metric formula should keep all cards in one row until the shared narrow breakpoint");
  assert(css.includes(".formula-card {\n  position: relative;\n  min-width: 0;") && css.includes("max-width: 100%;\n  overflow-wrap: anywhere;"), "formula cards should constrain and wrap long localized text");
  assert(css.includes(".metric-card span,\n.metric-card small {\n  display: block;\n  min-width: 0;") && css.includes("line-height: 1.25;\n  overflow-wrap: anywhere;"), "metric card labels and notes should wrap inside formula cards");
  assert(css.includes(".metric-card b {\n  display: block;") && css.includes("font-variant-numeric: tabular-nums;\n  overflow-wrap: anywhere;"), "metric card values should wrap internally before the cards wrap");
  assert(css.includes(".effect-mini-strip.formula-strip--multiply {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    padding-left: var(--formula-gap);"), "effect and offset formula wraps should reserve room for row-start multiply signs");
  assert(!css.includes("nth-child(4n + 1)::before") && !css.includes("nth-child(odd)::before"), "wrapped formulas should keep row-start multiply signs visible");
}

function renderPreservesScroll() {
  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;
  const oldScrollTo = window.scrollTo;
  const oldRaf = window.requestAnimationFrame;
  let restored = null;
  try {
    window.scrollX = 12;
    window.scrollY = 345;
    window.scrollTo = (x, y) => { restored = [x, y]; };
    window.requestAnimationFrame = (fn) => fn();
    __T.render();
    expectEqual(restored && restored.join(","), "12,345", "render should restore scroll position after full rerender");
  } finally {
    window.scrollX = oldScrollX;
    window.scrollY = oldScrollY;
    window.scrollTo = oldScrollTo;
    window.requestAnimationFrame = oldRaf;
  }
}

function buffToggleUsesPartialRefresh() {
  const appJs = fs.readFileSync(path.join(root, "src/app.js"), "utf8");
  const stageJs = fs.readFileSync(path.join(root, "src/stage-view.js"), "utf8");
  const toggleHandler = appJs.match(/toggle:\s*\(el,\s*idx\)\s*=>\s*\{\s*el\.onchange\s*=\s*\(\)\s*=>\s*\{([^}]*)\};\s*\},/);
  assert(toggleHandler, "buff toggle handler should stay explicit");
  assert(toggleHandler[1].includes("refreshAfterBuffToggle();"), "buff toggle should use partial refresh");
  assert(!toggleHandler[1].includes("render();"), "buff toggle should not full-render the whole board");
  assert(appJs.includes("function replaceOuterHTML") && appJs.includes("bind(targetControls);") && appJs.includes("bind(lower);") && appJs.includes("bind(buffStage);"), "partial buff refresh should replace and bind only local sections");
  assert(stageJs.includes('id="target-controls"') && stageJs.includes('id="damage-lower"') && stageJs.includes('id="buff-stage"'), "partial buff refresh needs stable target, damage, and buff section ids");
  assert(stageJs.includes("targetControlsHTML, damageLowerHTML, buffStageHTML"), "stage view should export partial section renderers");
}

function weaponPickerKeepsStringIds() {
  const appJs = fs.readFileSync(path.join(root, "src/app.js"), "utf8");
  assert(!appJs.includes("state.slots[si].weapon = +el.dataset.value"), "weapon picker must keep string weapon ids instead of coercing them to NaN");
  assert(appJs.includes("state.slots[si].weapon = el.dataset.value"), "weapon picker should assign weapon ids as strings");
}

function characterSchemasAreLinked() {
  const bad = [];
  const expectedDebuts = {
    aalto: 1.0,
    baizhi: 1.0,
    calcharo: 1.0,
    chixia: 1.0,
    danjin: 1.0,
    encore: 1.0,
    jianxin: 1.0,
    jiyan: 1.0,
    lingyang: 1.0,
    mortefi: 1.0,
    rover_havoc: 1.0,
    rover_spectro: 1.0,
    sanhua: 1.0,
    taoqi: 1.0,
    verina: 1.0,
    yangyang: 1.0,
    yinlin: 1.0,
    yuanwu: 1.0,
    changli: 1.1,
    jinhsi: 1.1,
    xiangliyao: 1.2,
    zhezhi: 1.2,
    shorekeeper: 1.3,
    youhu: 1.3,
    camellya: 1.4,
    lumi: 1.4,
    carlotta: 2.0,
    roccia: 2.0,
    rover_aero: 2.0,
    brant: 2.1,
    phoebe: 2.1,
    cantarella: 2.2,
    ciaccona: 2.3,
    zani: 2.3,
    cartethyia: 2.4,
    lupa: 2.4,
    phrolova: 2.5,
    augusta: 2.6,
    iuno: 2.6,
    galbrena: 2.7,
    qiuyuan: 2.7,
    buling: 2.8,
    chisa: 2.8,
    lynae: 3.0,
    mornye: 3.0,
    aemeath: 3.1,
    luukherssen: 3.1,
    sigrika: 3.2,
    denia: 3.3,
    hiyuki: 3.3,
    lucilla: 3.4,
    lucy: 3.4,
    rebecca: 3.4,
  };
  for (const c of Object.values(window.WUWA.chars)) {
    const skillIds = new Set((c.skills || []).map((s) => s.id));
    const resourceKeys = new Set((c.resources || []).flatMap((r) => [r.id, r.label].filter(Boolean)));
    const weaponId = c.defaultWeaponId ?? c.signatureWeaponId;
    if (expectedDebuts[c.id] != null && Number(c.debut) !== expectedDebuts[c.id]) bad.push(`${c.id}: debut ${c.debut} should be ${expectedDebuts[c.id]}`);
    const expectedDir = `data/core/chara/v${Number(c.debut).toFixed(1)}/`;
    if (c.__file && !c.__file.startsWith(expectedDir)) bad.push(`${c.id}: debut ${c.debut} stored in ${c.__file}, expected ${expectedDir}`);
    if (!skillIds.has(c.defaultSkillId)) bad.push(`${c.id}: defaultSkillId ${c.defaultSkillId} missing`);
    const defaultWeapon = findWeapon(weaponId);
    if (weaponId == null) bad.push(`${c.id}: default/signature weapon missing`);
    else if (!defaultWeapon) bad.push(`${c.id}: default/signature weapon ${weaponId} missing`);
    else if (Number(defaultWeapon.type) !== Number(c.weaponType)) bad.push(`${c.id}: default/signature weapon ${weaponId} type ${defaultWeapon.type} does not match character weaponType ${c.weaponType}`);
    if (c.echoSet != null && !findSonata(c.echoSet)) bad.push(`${c.id}: echoSet ${c.echoSet} missing`);
    if (c.echoSet2 != null && !findSonata(c.echoSet2)) bad.push(`${c.id}: echoSet2 ${c.echoSet2} missing`);
    if (c.echoSet3 != null && !findSonata(c.echoSet3)) bad.push(`${c.id}: echoSet3 ${c.echoSet3} missing`);
    for (const key of [].concat(c.effectTypes || [])) {
      if (!validEffectKeys.has(key)) bad.push(`${c.id}: effectTypes ${key} unsupported`);
    }

    for (const [idx, sk] of (c.skills || []).entries()) {
      if (!window.WUWA_LANGUAGES.localeData("en-US", "chars", c.id)?.skills?.[idx]?.name) bad.push(`${c.id}.${sk.id}: missing official English skill name`);
      if (!/^[a-z0-9_]+$/.test(sk.id)) bad.push(`${c.id}.${sk.id}: skill id must be lower_snake_case`);
      if (/^(a|s)\d+$/.test(sk.id)) bad.push(`${c.id}.${sk.id}: skill id must not be an anonymous sequence id`);
      if (sk.stat && !validSkillStats.has(sk.stat)) bad.push(`${c.id}.${sk.id}: stat ${sk.stat} unsupported`);
      for (const legacyId of [].concat(sk.legacyIds || [])) {
        if (legacyId === sk.id) bad.push(`${c.id}.${sk.id}: legacyIds should not repeat current id`);
      }
      validateEvents(`${c.id}.${sk.id}: triggerEvents`, sk.triggerEvents, bad);
      if ([].concat(sk.triggerEvents || []).includes("castEchoSkill")) {
        bad.push(`${c.id}.${sk.id}: character skill must not use triggerEvents castEchoSkill; use damageType echoSkill or a manual buff precondition`);
      }
      if (sk.fallbackSkillId && !skillIds.has(sk.fallbackSkillId)) bad.push(`${c.id}.${sk.id}: fallbackSkillId ${sk.fallbackSkillId} missing`);
      if (sk.stackResource && !resourceKeys.has(sk.stackResource)) bad.push(`${c.id}.${sk.id}: stackResource ${sk.stackResource} missing`);
      if (sk.requiresResourceFull && !resourceKeys.has(sk.requiresResourceFull)) bad.push(`${c.id}.${sk.id}: requiresResourceFull ${sk.requiresResourceFull} missing`);
      if (sk.requiresResourceAtLeast) {
        const req = sk.requiresResourceAtLeast;
        if (!resourceKeys.has(req.id || req.label)) bad.push(`${c.id}.${sk.id}: requiresResourceAtLeast ${(req.id || req.label)} missing`);
        if (req.value == null && req.fractionOfCap == null) bad.push(`${c.id}.${sk.id}: requiresResourceAtLeast missing value`);
        (req.alternateStates || []).forEach((stateName) => {
          if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${sk.id}: requiresResourceAtLeast alternateState ${stateName} missing`);
        });
      }
      if (sk.requiresResourceSumAtLeast) {
        const req = sk.requiresResourceSumAtLeast;
        if (!(req.ids || req.resources || []).length) bad.push(`${c.id}.${sk.id}: requiresResourceSumAtLeast missing ids`);
        (req.ids || req.resources || []).forEach((id) => {
          if (!resourceKeys.has(id)) bad.push(`${c.id}.${sk.id}: requiresResourceSumAtLeast ${id} missing`);
        });
        if (req.value == null) bad.push(`${c.id}.${sk.id}: requiresResourceSumAtLeast missing value`);
      }
      (sk.requiresAllResourcesAtLeast || []).forEach((req) => {
        if (!resourceKeys.has(req.id || req.label)) bad.push(`${c.id}.${sk.id}: requiresAllResourcesAtLeast ${(req.id || req.label)} missing`);
        if (req.value == null && req.fractionOfCap == null) bad.push(`${c.id}.${sk.id}: requiresAllResourcesAtLeast missing value`);
        (req.alternateStates || []).forEach((stateName) => {
          if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${sk.id}: requiresAllResourcesAtLeast alternateState ${stateName} missing`);
        });
      });
      for (const stateName of [].concat(sk.impliedStates || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${sk.id}: impliedState ${stateName} missing`);
      }
      for (const stateName of [].concat(sk.requiresState || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${sk.id}: requiresState ${stateName} missing`);
      }
      for (const stateName of [].concat(sk.requiresAllStates || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${sk.id}: requiresAllStates ${stateName} missing`);
      }
    }
    for (const [idx, eventDef] of [].concat(c.skillEvents || []).entries()) {
      const eventName = typeof eventDef === "string" ? eventDef : eventDef?.event || eventDef?.name || eventDef?.value;
      validateEvents(`${c.id}.skillEvents.${idx}`, eventName, bad);
      for (const skillRef of [].concat(eventDef?.skills || [])) {
        if (!skillIds.has(skillRef)) bad.push(`${c.id}.skillEvents.${idx}: skill reference ${skillRef} missing`);
      }
    }

    const buffs = allBuffs(c);
    const buffIds = new Set(buffs.map((b) => b.id));
    for (const b of buffs) {
      validateBuffShape(`${c.id}.${b.id}`, b, buffIds, bad);
      for (const skillRef of [].concat(b.skills || [], b.triggerSkills || [], b.clearedBySkills || [])) {
        if (!skillIds.has(skillRef)) bad.push(`${c.id}.${b.id}: skill reference ${skillRef} missing`);
      }
      for (const stateName of [].concat(b.requiresState || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${b.id}: requiresState ${stateName} missing`);
      }
      for (const stateName of [].concat(b.requiresAllStates || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${b.id}: requiresAllStates ${stateName} missing`);
      }
    }
  }
  assert(!bad.length, bad.join("\n"));
}

function combatStateOptionCombos(c) {
  return (c.combatStates || [])
    .filter((def) => (def.options || []).length)
    .reduce((combos, def) => {
      const key = __T.stateChoiceKey(def.id);
      const values = [null, ...(def.options || []).map((opt) => opt.value).filter(Boolean)];
      return combos.flatMap((combo) =>
        values.map((value) => (value == null ? { ...combo } : { ...combo, [key]: value }))
      );
    }, [{}]);
}

function sequenceForSkillPair(sk, fallback) {
  if (sk.maxSeq != null) return sk.maxSeq;
  if (sk.seq != null) return sk.seq;
  if (fallback.maxSeq != null) return fallback.maxSeq;
  if (fallback.seq != null) return fallback.seq;
  return 6;
}

function resourceFallbackSkillVisibility() {
  const bad = [];
  let observedFallback = 0;
  for (const c of Object.values(window.WUWA.chars)) {
    const pairs = (c.skills || []).filter((sk) => sk.requiresResource && sk.fallbackSkillId && !sk.requiresResourceFull && !sk.requiresResourceAtLeast && !sk.requiresAllResourcesAtLeast && !sk.requiresResourceSumAtLeast);
    if (!pairs.length) continue;
    resetTeam([c.id]);
    const slot = __T.state.slots[0];
    for (const sk of pairs) {
      const fallback = skill(c, sk.fallbackSkillId);
      slot.seq = sequenceForSkillPair(sk, fallback);
      for (const combo of combatStateOptionCombos(c)) {
        const resourceKey = __T.resourceKey(sk.requiresResource);

        slot.toggles = { ...combo };
        slot.skill = sk.id;
        const onIds = new Set(__T.availableSkills(slot).map((s) => s.id));
        const onControls = new Set(__T.resourceControlsForSlot(slot).flatMap((control) => [control.id, control.label].filter(Boolean)));
        if (onIds.has(sk.id) && onIds.has(fallback.id)) bad.push(`${c.id}.${sk.id}: resource ready shows fallback ${fallback.id}`);
        if (onIds.has(sk.id) && !onControls.has(sk.requiresResource)) bad.push(`${c.id}.${sk.id}: resource ready hides ${sk.requiresResource} control`);

        slot.toggles = { ...combo, [resourceKey]: false };
        slot.skill = fallback.id;
        const offIds = new Set(__T.availableSkills(slot).map((s) => s.id));
        const offControls = new Set(__T.resourceControlsForSlot(slot).flatMap((control) => [control.id, control.label].filter(Boolean)));
        if (offIds.has(sk.id) && offIds.has(fallback.id)) bad.push(`${c.id}.${sk.id}: resource off shows both ${sk.id} and ${fallback.id}`);
        const sameActionReplacement = onIds.has(sk.id) && !onIds.has(fallback.id) && !offIds.has(sk.id) && offIds.has(fallback.id);
        if (!sameActionReplacement) continue;
        observedFallback += 1;
        if (!offControls.has(sk.requiresResource)) bad.push(`${c.id}.${sk.id}: fallback ${fallback.id} hides ${sk.requiresResource} control`);
      }
    }
  }
  assert(observedFallback > 0, "resource fallback visibility check did not observe any fallback skills");
  assert(!bad.length, bad.join("\n"));
}

function skillHasStructuredResourceGate(sk) {
  return Boolean(
    sk.requiresResourceFull ||
    sk.requiresResourceAtLeast ||
    sk.requiresAllResourcesAtLeast ||
    sk.requiresResourceSumAtLeast
  );
}

function allCharacterResourceThresholdsAreStructured() {
  const bad = [];
  const nonResourceThresholdWindows = new Set([
    "danjin.heavy_5",
    "zhezhi.k5_extra_mohe",
    "camellya.forte_ephemeral",
    "camellya.forte_ephemeral_2",
    "roccia.forte_3_2",
    "brant.outro_blast",
    "qiuyuan.skill_lotuscloak",
  ]);
  const thresholdText = /\d|满|充满|不少于|以上/;
  for (const c of Object.values(window.WUWA.chars)) {
    for (const sk of c.skills || []) {
      const resourceText = String(sk.requiresResourceLabel || sk.resourceLabel || sk.requiresResource || "");
      if (!thresholdText.test(resourceText)) continue;
      if (nonResourceThresholdWindows.has(`${c.id}.${sk.id}`)) continue;
      if (skillHasStructuredResourceGate(sk)) continue;
      bad.push(`${c.id}.${sk.id}: ${resourceText}`);
    }
  }
  assert(!bad.length, `resource threshold gates for all characters must bind to structured resources:\n${bad.join("\n")}`);
}

function allPlainResourceGatesAreReviewed() {
  const reviewedManualWindows = new Set([
    "calcharo.k6_hunting_shadow",
    "danjin.heavy_3",
    "danjin.heavy_5",
    "jianxin.skill_special_chi",
    "rover_spectro.forte_echo1",
    "rover_spectro.forte_echo2",
    "taoqi.forte_timed_counters_1",
    "taoqi.forte_timed_counters_2",
    "taoqi.forte_timed_counters_3",
    "xiangliyao.forte_revamp",
    "zhezhi.k5_extra_mohe",
    "zhezhi.k6_white_crane",
    "camellya.forte_ephemeral",
    "camellya.forte_ephemeral_2",
    "camellya.outro_bloom",
    "roccia.forte_3_2",
    "brant.outro_blast",
    "brant.rekindle",
    "zani.forte_dawning",
    "lupa.skill_fang",
    "lupa.break_enemy",
    "lupa.offfield_flame",
    "phrolova.intro_immortality",
    "phrolova.k6_hecate_phantom",
    "qiuyuan.skill_lotuscloak",
    "qiuyuan.ink_exit",
    "buling.field_tick",
    "lynae.to_a_vivid_tomorrow",
    "luukherssen.ichor_deposit",
    "luukherssen.forte_gavel",
    "hiyuki.lib_inward",
    "lucy.heavy_multithread",
    "lucy.heavy_multithread_sql",
    "lucy.burst_darknet",
  ]);
  const bad = [];
  for (const c of Object.values(window.WUWA.chars)) {
    const resourceKeys = new Set((c.resources || []).flatMap((r) => [r.id, r.label].filter(Boolean)));
    const resourceIdByLabel = new Map((c.resources || []).filter((r) => r.label).map((r) => [r.label, r.id]));
    for (const sk of c.skills || []) {
      if (!sk.requiresResource || skillHasStructuredResourceGate(sk)) continue;
      const gateKeys = [sk.requiresResource, sk.requiresResourceLabel, sk.resourceLabel].filter(Boolean);
      const labeledResourceId = [sk.requiresResourceLabel, sk.resourceLabel].map((key) => resourceIdByLabel.get(key)).find(Boolean);
      if (labeledResourceId && sk.requiresResource !== labeledResourceId) {
        bad.push(`${c.id}.${sk.id}: ${sk.requiresResourceLabel || sk.resourceLabel} must bind to ${labeledResourceId}, got ${sk.requiresResource}`);
        continue;
      }
      if (gateKeys.some((key) => resourceKeys.has(key))) continue;
      if (reviewedManualWindows.has(`${c.id}.${sk.id}`)) continue;
      bad.push(`${c.id}.${sk.id}: ${sk.requiresResourceLabel || sk.requiresResource}`);
    }
  }
  assert(!bad.length, `plain requiresResource gates must either match character resources or be explicitly reviewed manual windows:\n${bad.join("\n")}`);
}

function v3StructuredResourceControls() {
  resetTeam(["lynae"]);
  let slot = __T.state.slots[0];
  let labels = new Set(__T.resourceControlsForSlot(slot).map((ctrl) => ctrl.label));
  ["溢彩", "本色", "流光"].forEach((label) => assert(labels.has(label), `Lynae should expose ${label} as a numeric resource`));
  ["120点溢彩", "3点本色", "1/3流光上限"].forEach((label) => assert(!labels.has(label), `Lynae should not expose legacy checkbox ${label}`));
  slot.toggles[__T.stateChoiceKey("战斗阶段")] = "绮彩巡游";
  slot.skill = "polychrome_leap_1";
  slot.resources.luminousFlux = 39;
  let r = __T.compute();
  assert(r.resourceBlocked, "Lynae Polychrome Leap should require one third of current Luminous Flux cap");
  slot.resources.luminousFlux = 40;
  r = __T.compute();
  assert(!r.resourceBlocked, "Lynae Polychrome Leap should unlock at one third of base Luminous Flux cap");
  slot.seq = 6;
  slot.resources.luminousFlux = 119;
  r = __T.compute();
  assert(r.resourceBlocked, "Lynae Polychrome Leap should use the sequence-6 Luminous Flux cap");
  slot.resources.luminousFlux = 120;
  r = __T.compute();
  assert(!r.resourceBlocked, "Lynae Polychrome Leap should unlock at one third of sequence-6 Luminous Flux cap");
  slot.skill = "visual_impact";
  slot.resources.trueColor = 2;
  r = __T.compute();
  assert(r.resourceBlocked, "Lynae Visual Impact should require 3 True Color");
  slot.resources.trueColor = 3;
  r = __T.compute();
  assert(!r.resourceBlocked, "Lynae Visual Impact should unlock at 3 True Color");

  resetTeam(["aemeath"]);
  slot = __T.state.slots[0];
  labels = new Set(__T.resourceControlsForSlot(slot).map((ctrl) => ctrl.label));
  assert(labels.has("同步率") && labels.has("共鸣率"), "Aemeath should expose Sync Rate and Resonance Rate as numeric resources");
  slot.toggles[__T.stateChoiceKey("光翼共奏之时")] = "光翼共奏之时状态";
  slot.skill = "duet_overture";
  slot.resources.syncRate = 99;
  r = __T.compute();
  assert(r.resourceBlocked, "Aemeath Seraphic Duet should require 100 Sync Rate");
  slot.resources.syncRate = 100;
  r = __T.compute();
  assert(!r.resourceBlocked, "Aemeath Seraphic Duet should unlock at 100 Sync Rate");
  slot.skill = "lib_finale";
  slot.toggles[__T.stateChoiceKey("星辉破界而来·于此释放")] = "星辉破界而来·于此释放";
  slot.resources.resonanceRate = 99;
  r = __T.compute();
  assert(r.resourceBlocked, "Aemeath Finale should require both Sync Rate and Resonance Rate full");
  slot.resources.resonanceRate = 100;
  r = __T.compute();
  assert(!r.resourceBlocked, "Aemeath Finale should unlock when both rates are full");

  resetTeam(["hiyuki"]);
  slot = __T.state.slots[0];
  labels = new Set(__T.resourceControlsForSlot(slot).map((ctrl) => ctrl.label));
  ["心念", "淬寒·枯霜", "寒意"].forEach((label) => assert(labels.has(label), `Hiyuki should expose ${label} as a numeric resource`));
  slot.toggles[__T.stateChoiceKey("身相")] = "预求身";
  slot.skill = "fore_heavy_bitterfrost";
  slot.resources.bitterfrost = 2;
  r = __T.compute();
  assert(r.sk.id === "fore_heavy", "Hiyuki Bitterfrost heavy should fall back below 3 Bitterfrost");
  slot.resources.bitterfrost = 3;
  r = __T.compute();
  assert(r.sk.id === "fore_heavy_bitterfrost", "Hiyuki Bitterfrost heavy should unlock at 3 Bitterfrost");
  slot.toggles[__T.stateChoiceKey("居合架势")] = "居合架势";
  slot.skill = "forte_iai";
  slot.resources.chill = 99;
  r = __T.compute();
  assert(r.resourceBlocked, "Hiyuki Iai should require 100 Chill");
  slot.resources.chill = 100;
  r = __T.compute();
  assert(!r.resourceBlocked, "Hiyuki Iai should unlock at 100 Chill");

  resetTeam(["lucilla"]);
  slot = __T.state.slots[0];
  labels = new Set(__T.resourceControlsForSlot(slot).map((ctrl) => ctrl.label));
  assert(labels.has("照片") && !labels.has("3张照片"), "Lucilla should expose Photo as one numeric resource, not a 3-photo checkbox");
  slot.skill = "clear_as_day_frost";
  slot.resources.photo = 2;
  r = __T.compute();
  assert(r.resourceBlocked, "Lucilla Clear As Day should require 3 Photos");
  slot.resources.photo = 3;
  r = __T.compute();
  assert(!r.resourceBlocked, "Lucilla Clear As Day should unlock at 3 Photos");
  slot.toggles[__T.stateChoiceKey("追忆状态")] = "追忆状态";
  slot.skill = "oblivion_frost";
  slot.resources.photo = 0;
  r = __T.compute();
  assert(r.resourceBlocked, "Lucilla Oblivion should require at least 1 Photo");
  slot.resources.photo = 1;
  r = __T.compute();
  assert(!r.resourceBlocked, "Lucilla Oblivion should unlock with 1 Photo");

  resetTeam(["rebecca"]);
  slot = __T.state.slots[0];
  labels = new Set(__T.resourceControlsForSlot(slot).map((ctrl) => ctrl.label));
  assert(labels.has("狂热") && !labels.has("120点狂热"), "Rebecca should expose Fervor as one numeric resource");
  slot.skill = "fervor_hunt";
  slot.resources.fervor = 119;
  r = __T.compute();
  assert(r.sk.id === "hunt_heavy", "Rebecca Fervor Hunt should fall back below 120 Fervor");
  slot.resources.fervor = 120;
  r = __T.compute();
  assert(r.sk.id === "fervor_hunt", "Rebecca Fervor Hunt should unlock at 120 Fervor");

  resetTeam(["lucy"]);
  slot = __T.state.slots[0];
  labels = new Set(__T.resourceControlsForSlot(slot).map((ctrl) => ctrl.label));
  assert(labels.has("根权限") && labels.has("传输协议"), "Lucy should expose Root Access and Protocol as numeric resources");
  slot.toggles[__T.stateChoiceKey("算法压缩")] = "算法压缩";
  slot.toggles[__T.resourceKey("重击·双线程后")] = false;
  slot.skill = "heavy_double_thread";
  slot.resources.rootAccess = 99;
  r = __T.compute();
  assert(r.sk.id === "heavy_single_thread", "Lucy Dual Threading should fall back below 100 Root Access");
  slot.resources.rootAccess = 100;
  r = __T.compute();
  assert(r.sk.id === "heavy_double_thread", "Lucy Dual Threading should unlock at 100 Root Access");
  slot.skill = "skill_deadlock";
  slot.resources.protocol = 0;
  r = __T.compute();
  assert(r.sk.id === "skill_deadlock", "Lucy Deadlock should unlock while Algorithm Compaction is active even without Protocol");
  slot.toggles = {};
  slot.resources.protocol = 0;
  r = __T.compute();
  assert(r.sk.id === "skill_payload_dash", "Lucy Deadlock should fall back without Protocol or Algorithm Compaction");
  slot.resources.protocol = 100;
  r = __T.compute();
  assert(r.sk.id === "skill_deadlock", "Lucy Deadlock should unlock at 100 Protocol");
}

function rawSonataBuffs(set) {
  const out = [];
  const push = (kind, eff) => {
    if (!eff) return;
    const arr = Array.isArray(eff) ? eff : (eff.buffs ? eff.buffs : [eff]);
    arr.forEach((b, i) => out.push({ owner: `sonata ${set.id}.${kind}.${b.id || i}`, id: b.id || `${kind}_${i}`, buff: b }));
  };
  push("p1", set.p1);
  push("p2", set.p2);
  push("p3", set.p3);
  push("p5", set.p5);
  for (const lead of [].concat(set.leads || [], set.lead || [])) {
    (lead.buffs || []).forEach((b, i) => out.push({ owner: `sonata ${set.id}.lead.${b.id || i}`, id: b.id || `lead_${i}`, buff: b }));
  }
  return out;
}

function equipmentSchemasAreLinked() {
  const bad = [];
  for (const w of weapons) {
    const ids = new Set((w.effects || []).map((b) => b.id));
    for (const b of w.effects || []) validateBuffShape(`weapon ${w.id}.${b.id}`, b, ids, bad);
  }
  for (const s of sonatas) {
    const buffs = rawSonataBuffs(s);
    const ids = new Set(buffs.map((item) => item.id));
    for (const item of buffs) validateBuffShape(item.owner, item.buff, ids, bad);
  }
  assert(!bad.length, bad.join("\n"));
}

function sonataLeadDataCompleteness() {
  const expected = new Map([
    [1, ["辉萤军势"]],
    [2, ["燎照之骑", "梦魇·燎照之骑"]],
    [3, ["云闪之鳞", "朔雷之鳞", "梦魇·云闪之鳞", "梦魇·朔雷之鳞"]],
    [4, ["飞廉之猩", "梦魇·飞廉之猩"]],
    [5, ["哀声鸷", "角"]],
    [6, ["无冠者", "梦魇·无冠者"]],
    [7, ["鸣钟之龟", "无归的谬误"]],
    [8, ["聚械机偶"]],
    [10, ["异构武装", "梦魇·辉萤军势"]],
    [11, ["梦魇·哀声鸷", "荣光节使"]],
    [12, ["叹息古龙", "无妄者"]],
    [13, ["罗蕾莱", "梦魇·无常凶鹭"]],
    [14, ["共鸣回响·芙露德莉斯", "梦魇·凯尔匹"]],
    [15, ["赫卡忒", "梦魇·朔雷之鳞", "梦魇·辉萤军势"]],
    [16, ["无常凶鹭"]],
    [17, ["共鸣回响·芙露德莉斯", "梦魇·凯尔匹"]],
    [18, ["荣耀狮像"]],
    [19, ["梦魇·赫卡忒", "共鸣回响·芬莱克"]],
    [20, ["伪作的神王", "海之女"]],
    [21, ["共鸣回响·芬莱克"]],
    [22, ["蚀脊龙", "共鸣回响·鸣式·利维亚坦"]],
    [23, ["共鸣回响·鸣式·利维亚坦"]],
    [24, ["共鸣回响·梦魇亚当·重锤"]],
    [25, ["海维夏"]],
    [26, ["海维夏"]],
    [27, ["辛吉勒姆"]],
    [28, ["炉芯机骸"]],
    [29, ["无铭探索者"]],
    [30, ["共鸣回响·鸣式·虚造神型"]],
    [31, ["无铭探索者"]],
    [33, ["炉芯机骸"]],
  ]);
  for (const [id, names] of expected) {
    const set = findSonata(id);
    const leads = [].concat(set.leads || [], set.lead || []);
    const actual = leads.map((lead) => lead.echo);
    names.forEach((name) => assert(actual.includes(name), `${set.name} missing lead echo ${name}`));
  }

  for (const set of sonatas) {
    const enSet = window.WUWA_LANGUAGES.localeData("en-US", "sonatas", set.id);
    assert(set.id && enSet?.name, `${set.name} missing project id or formal English sonata metadata`);
    const leads = [].concat(set.leads || [], set.lead || []);
    const enLeads = [].concat(enSet?.leads || [], enSet?.lead || []);
    leads.forEach((lead, idx) => {
      const enLead = enLeads[idx];
      assert(lead.id && enLead?.echo, `${set.name}/${lead.echo} missing project id or formal English lead echo metadata`);
      assert(!/^Phantom:/.test(enLead.echo) && !String(lead.echo).startsWith("异相·"), `${set.name}/${lead.echo} should not expose phantom lead echoes`);
      assert((lead.buffs || []).length > 0, `${set.name}/${lead.echo} should not expose empty lead effects`);
    });
  }
  const tidebreaking = findSonata(12);
  const dreamlessIdx = [].concat(tidebreaking.leads || [], tidebreaking.lead || []).findIndex((lead) => lead.id === "dreamless");
  const dreamless = [].concat(window.WUWA_LANGUAGES.localeData("en-US", "sonatas", 12)?.leads || [], window.WUWA_LANGUAGES.localeData("en-US", "sonatas", 12)?.lead || [])[dreamlessIdx];
  assert(dreamless && dreamless.echo === "Dreamless", "Tidebreaking Courage should keep the Dreamless echo variant attached to that sonata");

  const celestialChoices = window.WUWA_EQUIPMENT.leadChoicesForEcho({ combo: "single5", primary: 5 });
  expectEqual(celestialChoices.length, 2, "Celestial Light should expose only explicitly recorded lead echoes");
  assert(celestialChoices.some((choice) => choice.lead.echo === "哀声鸷"), "Celestial Light should expose Mourning Aix as a lead echo");
  assert(celestialChoices.some((choice) => choice.lead.echo === "角"), "Celestial Light should expose Jué as a lead echo");
  assert(!celestialChoices.some((choice) => choice.lead.echo === "巡哨机傀"), "Celestial Light lead list should not include generic set echoes");
  const moonlitChoices = window.WUWA_EQUIPMENT.leadChoicesForEcho({ combo: "single5", primary: 16 });
  expectEqual(moonlitChoices.length, 1, "Moonlit Clouds should expose only explicitly recorded lead echoes");
  assert(moonlitChoices.some((choice) => choice.lead.echo === "无常凶鹭"), "Moonlit Clouds should expose Impermanence Heron as a lead echo");
  const splitChoices = window.WUWA_EQUIPMENT.leadChoicesForEcho({ combo: "split32", primary: 20, secondary: 4 });
  assert(splitChoices.some((choice) => choice.set.id === 20), "3+2 lead choices should include the primary three-piece set");
  assert(splitChoices.some((choice) => choice.set.id === 4), "3+2 lead choices should include the secondary two-piece set");
  const eternalChoices = window.WUWA_EQUIPMENT.leadChoicesForEcho({ combo: "single5", primary: 11 });
  assert(eternalChoices.some((choice) => choice.lead.echo === "荣光节使"), "Eternal Radiance should keep the explicitly requested Capitaneus 3-cost lead echo");
  resetTeam(["jinhsi"]);
  __T.state.slots[0].echo.combo = "single5";
  __T.render();
  const teamHtml = String(board.innerHTML);
  assert(teamHtml.includes("team-gear-set-icons") && !teamHtml.includes('data-act="eprimary"'), "single-set echo should render as a fixed icon, not a selector");
  assert(teamHtml.includes('data-tip="浮星祛暗"'), "fixed echo set icon should expose the sonata name tooltip");

  resetTeam(["ciaccona"]);
  let slot = __T.state.slots[0];
  slot.echo.combo = "single5";
  slot.echo.primary = 14;
  slot.echo.lead = "14:reminiscence_fleurdelys";
  let extra = buff(slot, "son_14:reminiscence_fleurdelys_se_reminiscence_fleurdelys_aero_cartethyia");
  assert(!__T.buffStatus(slot, 0, extra).applies, "Fleurdelys extra aero lead bonus should require Cartethyia or Aero Rover");

  resetTeam(["cartethyia"]);
  slot = __T.state.slots[0];
  slot.echo.combo = "single5";
  slot.echo.primary = 14;
  slot.echo.lead = "14:reminiscence_fleurdelys";
  extra = buff(slot, "son_14:reminiscence_fleurdelys_se_reminiscence_fleurdelys_aero_cartethyia");
  assert(__T.buffStatus(slot, 0, extra).applies, "Cartethyia should receive Fleurdelys extra aero lead bonus");

  resetTeam(["rover_aero"]);
  slot = __T.state.slots[0];
  slot.echo.combo = "single5";
  slot.echo.primary = 14;
  slot.echo.lead = "14:reminiscence_fleurdelys";
  extra = buff(slot, "son_14:reminiscence_fleurdelys_se_reminiscence_fleurdelys_aero_cartethyia");
  assert(__T.buffStatus(slot, 0, extra).applies, "Aero Rover should receive Fleurdelys extra aero lead bonus");
}

function sonataEffectAttachmentBuffsAreManual() {
  const bad = [];
  for (const s of sonatas) {
    for (const item of rawSonataBuffs(s)) {
      const events = item.buff.triggerEvents || [];
      if (events.some((event) => String(event).startsWith("apply"))) {
        bad.push(item.owner);
      }
    }
  }
  assert(!bad.length, `effect-attachment sonata buffs should be manual post-window confirmations: ${bad.join(", ")}`);

  resetTeam(["cartethyia"]);
  const slot = __T.state.slots[0];
  slot.skill = "na4";
  slot.echo.combo = "single5";
  slot.echo.primary = 14;
  const selfBuff = buff(slot, "son_14_gusts_of_welkin_self_aero");
  assert(!__T.buffStatus(slot, 0, selfBuff).applies, "Gusts of Welkin 5pc should not apply to the same hit that attaches Wind Erosion");
  __T.setBuffToggle(slot, 0, "son_14_gusts_of_welkin_self_aero", true);
  assert(__T.buffStatus(slot, 0, selfBuff).applies, "Gusts of Welkin 5pc should apply after the post-attachment window is manually confirmed");
}

function buffHasTriggerPrecondition(b) {
  const hasItems = (value) => Array.isArray(value) ? value.length > 0 : !!value;
  return !!(b && (
    b.triggerOutro === true
    || hasItems(b.triggerEvents)
    || hasItems(b.triggerSkills)
    || hasItems(b.triggerDamageTypes)
    || hasItems(b.triggerRules)
    || b.triggerStacks != null
    || b.triggerStacksByTeamElement
  ));
}

function triggeredBuffDefaultsAreExplicit() {
  const bad = [];
  for (const c of Object.values(window.WUWA.chars)) {
    for (const b of allBuffs(c)) {
      if (buffHasTriggerPrecondition(b) && b.defaultActive !== false) bad.push(`${c.id}.${b.id}`);
    }
  }
  for (const w of weapons) {
    for (const b of window.WUWA_EQUIPMENT.weaponBuffs(w.id, 1)) {
      if (buffHasTriggerPrecondition(b) && b.defaultActive !== false) bad.push(`weapon ${w.id}.${b.id}`);
    }
  }
  for (const s of sonatas) {
    for (const item of rawSonataBuffs(s)) {
      if (buffHasTriggerPrecondition(item.buff) && item.buff.defaultActive !== false) bad.push(item.owner);
    }
  }
  assert(!bad.length, `triggered buffs should be defaultActive:false unless proven current-hit safe: ${bad.join(", ")}`);
}

function weaponBuffScopesUseBeneficiary() {
  const selfBuff = window.WUWA_EQUIPMENT.weaponBuffs("phasic_homogenizer", 1).find((b) => b.id === "w_e1");
  const teamBuff = window.WUWA_EQUIPMENT.weaponBuffs("static_mist", 1).find((b) => b.id === "w_e0");
  expectEqual(selfBuff.scope, "self", "weapon text with team trigger but self beneficiary should stay self-scoped");
  expectEqual(teamBuff.scope, "team", "weapon text with incoming character beneficiary should stay team-scoped");

  resetTeam(["jinhsi", "ciaccona"]);
  const support = __T.state.slots[1];
  support.weapon = "phasic_homogenizer";
  let b = buff(support, "w_e1");
  assert(__T.buffStatus(support, 1, b).gated === "仅自身输出时生效", "support self-scoped weapon buff should not be confirmable for another output");

  support.weapon = "static_mist";
  b = buff(support, "w_e0");
  const st = __T.buffStatus(support, 1, b);
  assert(st.precondition && !st.gated, "support outro weapon buff for the incoming character should remain confirmable");
}

function stateDefFor(c, stateName) {
  return (c.combatStates || []).find((def) => {
    if (def.id === stateName || def.label === stateName || def.idLabel === stateName) return true;
    if (String(stateName).startsWith(def.id + "·")) return true;
    return (def.options || []).some((opt) => opt.value === stateName || opt.label === stateName || opt.valueLabel === stateName);
  }) || null;
}

function stateOptionValueFor(c, stateName) {
  const def = stateDefFor(c, stateName);
  if (!def) return stateName;
  const opt = (def.options || []).find((item) => item.value === stateName || item.label === stateName || item.valueLabel === stateName);
  return opt?.value || stateName;
}

function resourceIdFor(c, resourceName) {
  return (c.resources || []).find((item) => item.id === resourceName || item.label === resourceName)?.id || resourceName;
}

function stateOrderIndex(def, stateName) {
  if (def.id === stateName) return -1;
  return (def.options || []).findIndex((opt) => opt.value === stateName || String(opt.value).startsWith(stateName + "·"));
}

function stateRequirementArraysAreOrdered() {
  const bad = [];
  for (const c of Object.values(window.WUWA.chars)) {
    for (const b of allBuffs(c)) {
      if (!Array.isArray(b.requiresState) || b.requiresState.length < 2) continue;
      const defs = b.requiresState.map((stateName) => stateDefFor(c, stateName));
      if (!defs.every(Boolean)) continue;
      if (!defs.every((def) => def.id === defs[0].id)) continue;
      const order = b.requiresState.map((stateName, i) => stateOrderIndex(defs[i], stateName));
      for (let i = 1; i < order.length; i += 1) {
        if (order[i] < order[i - 1]) bad.push(`${c.id}.${b.id}: requiresState order ${b.requiresState.join(" -> ")}`);
      }
    }
  }
  assert(!bad.length, bad.join("\n"));
}

const validCombatStateKinds = new Set(["status", "target", "field", "mode", "form", "phase", "buff", "mechanic"]);

function combatStateKindsMatchDescriptions() {
  const bad = [];
  for (const c of Object.values(window.WUWA.chars)) {
    for (const def of c.combatStates || []) {
      const ownText = [
        def.id, def.idLabel, def.label, def.inactiveLabel, def.entry, def.effects,
        ...(def.options || []).flatMap((opt) => [opt.value, opt.valueLabel, opt.label]),
      ].filter(Boolean).join(" ");
      if (def.kind && !validCombatStateKinds.has(def.kind)) bad.push(`${c.id}.${def.id}: invalid kind ${def.kind}`);
      if (!def.kind && !ownText.includes("状态")) bad.push(`${c.id}.${def.id}: non-status selector must declare kind`);
      if (def.kind === "status" && !ownText.includes("状态")) {
        bad.push(`${c.id}.${def.id}: status kind lacks original text evidence`);
      }
      if (def.kind === "target" && !/目标|标记|附加|携带|拥有/.test(ownText)) bad.push(`${c.id}.${def.id}: target kind lacks target/debuff evidence`);
      if (def.kind === "field" && !/场|领域|范围|生成|展开|召唤|雾气|门|楔|阵|环/.test(ownText)) bad.push(`${c.id}.${def.id}: field kind lacks field evidence`);
    }
  }
  assert(!bad.length, bad.join("\n"));
}

function cappedScaleByExcerptsMentionCap() {
  const bad = [];
  for (const c of Object.values(window.WUWA.chars)) {
    for (const b of allBuffs(c)) {
      if (b.scaleBy?.cap != null && !String(b.excerpt || "").includes("上限")) bad.push(`${c.id}:${b.id}`);
    }
  }
  assert(!bad.length, `Capped scaleBy excerpts missing cap: ${bad.join(", ")}`);
}

function scaleByCapBadgeShowsCap() {
  __T.pickCharacter(1, "shorekeeper");
  const slot = __T.state.slots[1];
  const cr = __T.buffFormulaText(slot, buff(slot, "b_field_cr"), 1);
  const cd = __T.buffFormulaText(slot, buff(slot, "b_field_cd"), 1);
  assert(cr.includes("上限12.5%"), `CR badge missing cap: ${cr}`);
  assert(cd.includes("上限25%"), `CD badge missing cap: ${cd}`);
}

function supportTeamBuffConfirmationWritesProviderState() {
  resetTeam(["jinhsi", "shorekeeper", "verina"]);
  __T.state.outputIdx = 0;
  const slot = __T.state.slots[1];
  const fieldState = stateDefFor(window.WUWA.chars.shorekeeper, "星域");
  const key = __T.stateChoiceKey(fieldState.id);
  const deepenValue = stateOptionValueFor(window.WUWA.chars.shorekeeper, "星域·深潜");
  const releasedValue = stateOptionValueFor(window.WUWA.chars.shorekeeper, "星域·解限");
  const cr = buff(slot, "b_field_cr");
  const cd = buff(slot, "b_field_cd");

  assert(__T.buffStatus(slot, 1, cr).precondition, "CR should need support-state confirmation before state is selected");
  __T.setBuffToggle(slot, 1, "b_field_cr", true);
  assert(slot.toggles[key] === deepenValue, `CR confirmation should set Deepen field, got ${slot.toggles[key]}`);

  __T.state.outputIdx = 1;
  assert(__T.buffStatus(slot, 1, cr).applies, "CR should still apply after switching back to provider");

  __T.state.outputIdx = 0;
  assert(__T.buffStatus(slot, 1, cd).precondition, "CD should still need a higher field state");
  __T.setBuffToggle(slot, 1, "b_field_cd", true);
  assert(slot.toggles[key] === releasedValue, `CD confirmation should upgrade to Released field, got ${slot.toggles[key]}`);

  __T.state.outputIdx = 1;
  assert(__T.buffStatus(slot, 1, cd).applies, "CD should still apply after switching back to provider");
}

function baselineA() {
  resetTeam();
  let r = __T.compute();
  expectEqual(r.expected, 80890, "baseline A 0-chain expected");
  expectEqual(r.panel.displayAtk, 2118, "baseline A 0-chain displayed attack before outro");
  expectEqual(Math.round(r.panel.critRate * 10) / 10, 77.3, "baseline A crit rate");
  expectEqual(r.panel.critDamage, 270, "baseline A crit damage");

  __T.state.slots[0].seq = 6;
  r = __T.compute();
  expectEqual(r.expected, 185889, "baseline A 6-chain expected");

  resetTeam();
  __T.setBuffToggle(__T.state.slots[1], 1, "b3", true);
  __T.setBuffToggle(__T.state.slots[1], 1, "b4", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b1", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b2", true);
  r = __T.compute();
  expectEqual(r.expected, 123925, "baseline A 0-chain outro-confirmed expected");
  expectEqual(r.panel.displayAtk, 2318, "baseline A displayed attack after Verina attack buff");

  __T.state.slots[0].seq = 6;
  r = __T.compute();
  expectEqual(r.expected, 284785, "baseline A 6-chain outro-confirmed expected");
}

function baselineB() {
  resetTeam();
  const slot = __T.state.slots[0];
  slot.skill = "a1";
  slot.skillLevels = { "常态攻击": 6 };
  slot.echo.fields = {
    attackPct: 88.1,
    atkFlat: 440,
    critRate: 40,
    critDamage: 108.8,
    elem: 30,
    basicDmg: 24.4,
    heavyDmg: 16.5,
  };

  __T.state.enemy.enemyLevel = 83;
  let r = __T.compute();
  expectEqual(r.panel.displayAtk, 2438, "baseline B displayed attack");
  expectEqual(Math.round(r.panel.totalAtk * 1000) / 1000, 2438.999, "baseline B internal attack");
  expectEqual(r.panel.baseMult, 48.65, "baseline B level-6 multiplier");
  expectEqual(r.critHit, 2772, "baseline B enemy 83 crit");

  __T.state.enemy.enemyLevel = 85;
  r = __T.compute();
  expectEqual(r.critHit, 2757, "baseline B enemy 85 crit");
}

function formulaNumberFormattingFloors() {
  resetTeam();
  const slot = __T.state.slots[0];
  slot.skill = "a1";
  slot.skillLevels = { "常态攻击": 6 };
  slot.echo.fields = { attackPct: 88.1, atkFlat: 440, critRate: 40, critDamage: 108.8, elem: 30, basicDmg: 24.4, heavyDmg: 16.5 };
  __T.state.enemy.enemyLevel = 83;
  __T.state.lang = "zh-CN";
  __T.render();
  const html = String(board.innerHTML);
  const metricHtml = html.slice(html.indexOf('id="metric-strip"'), html.indexOf('class="damage-lower'));
  assert(metricHtml.includes("<b>2,438</b>"), "main formula stat base should display floored panel value");
  assert(!metricHtml.includes("<b>2,439</b>"), "main formula stat base should not round panel value up");
}

function formulaCardTooltips() {
  resetTeam();
  const slot = __T.state.slots[0];
  slot.echo.fields = { elem: 30, skillDmg: 57 };
  __T.state.enemy.vulnerability = 12;
  __T.state.enemy.dmgReduction = 5;
  __T.state.lang = "zh-CN";
  __T.render();
  const html = String(board.innerHTML);
  const metricHtml = html.slice(html.indexOf('id="metric-strip"'), html.indexOf('class="damage-lower'));
  assert((metricHtml.match(/class="formula-card-tip"/g) || []).length >= 9, "main formula cards should expose hover source tooltips for every multiplier card");
  assert(metricHtml.includes("技能倍率 =") && metricHtml.includes("防御系数 ="), "formula card tooltips should explain how card values are derived");
  assert(metricHtml.includes("声骸类型伤害加成（共鸣技能） 57%"), "echo type tooltip source should name the current damage type");
  assert(metricHtml.includes("层数倍率") && metricHtml.includes("等级系数"), "skill multiplier tooltip should expand stack and level terms");
  assert(metricHtml.includes("800 + 8 × 我方等级90") && metricHtml.includes("8 × 敌方等级90 + 792"), "defense tooltip should expand level terms");
  assert(metricHtml.includes("减伤/易伤") && metricHtml.includes("受到伤害减少 5%") && metricHtml.includes("易伤 12%"), "normal formula should show the damage reduction/vulnerability multiplier");
  assert(metricHtml.includes('tabindex="0"') && metricHtml.includes('role="tooltip"'), "formula card tooltips should be keyboard reachable");
  assert(metricHtml.includes('<div class="formula-card-tip"') && !metricHtml.includes('<span class="formula-card-tip"'), "formula card tooltips should not inherit parent span text color");
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  assert(css.includes(".formula-card:hover .formula-card-tip") && css.includes("white-space: pre-line;"), "formula card tooltip CSS should show multiline details on card hover");
  assert(css.includes(".formula-card .formula-card-tip") && css.includes("color: #f8fafc;"), "formula card tooltip text should keep high contrast over the dark tooltip background");
}

function introEntryIsSkillDriven() {
  resetTeam(["encore"]);
  __T.render();
  assert(!String(board.innerHTML).includes('data-act="intro-entry"'), "intro-entry control should not render");

  resetTeam(["yangyang"]);
  let slot = __T.state.slots[0];
  let b = buff(slot, "b1");
  __T.render();
  assert(!String(board.innerHTML).includes('data-act="intro-entry"'), "intro-entry control should stay removed for intro-triggered buffs");
  assert(__T.buffStatus(slot, 0, b).precondition && !__T.buffStatus(slot, 0, b).applies, "intro-triggered buff should wait until an intro skill is selected");
  slot.skill = "intro";
  assert(__T.buffStatus(slot, 0, b).applies, "intro skill should automatically provide intro-entry events");
}

function detailedEchoModeRegressions() {
  resetTeam(["jinhsi"]);
  const slot = __T.state.slots[0];
  const c = window.WUWA.chars.jinhsi;
  slot.echo.detailMode = true;
  slot.echo.fields = { atkFlat: 9999, attackPct: 999, critRate: 99 };
  const detail = window.WUWA_EQUIPMENT.ensureEchoDetail(slot, c);
  detail.echoes[1].subs[0] = { key: "heavyDmg", value: 11.6 };
  detail.echoes[1].subs[1] = { key: "heavyDmg", value: 10.9 };
  detail.echoes[2].subs[0] = { key: "heal", value: 0 };
  detail.echoes[4].set = 16;
  detail.echoes[0].cost = 1;
  detail.echoes[0].main = "critDamage";
  detail.echoes[3].cost = 1;
  detail.echoes[3].main = "critRate";
  window.WUWA_EQUIPMENT.ensureEchoDetail(slot, c);
  expectEqual(detail.echoes[0].cost, 4, "lead echo cost should be driven by the selected lead echo");
  expectEqual(detail.echoes[0].main, "critRate", "lead echo should reset to a valid 4-cost main stat when the lead cost changes");
  expectEqual(detail.echoes[3].main, "attackPct", "non-lead echo main stat should be normalized to valid options for its cost");
  expectEqual(detail.echoes[1].subs[1].key, "", "detailed echo mode should clear duplicate substat keys on the same echo");
  let fields = window.WUWA_EQUIPMENT.echoFieldValues(slot, c);
  expectEqual(fields.atkFlat, 350, "detailed echo mode should ignore manual fixed attack and use detailed fixed mains");
  assert(fields.attackPct < 100, "detailed echo mode should ignore manual attack percent");
  const r = __T.compute();
  assert(r.panel.displayAtk < 5000, "detailed echo mode should not use stale manual echo attack");
  __T.render();
  const html = String(board.innerHTML);
  assert(html.includes('角色面板 <span class="module-title-name">今汐</span>'), "panel title should include the current character name at readable size");
  assert(html.includes('class="stage-card echo-detail-stage"'), "detailed echo panel should render as a separate stage card");
  assert(html.includes('class="stage-card-head module-head"') && !html.includes("echo-detail-head"), "detailed echo header should use the shared stage card divider");
  assert(html.includes('<h2>声骸详情 <span class="module-title-name">今汐</span></h2>') && !html.includes("<small>详细声骸模式</small>"), "detailed echo header should be a single-line title with the current character name");
  assert((html.match(/class="echo-detail-card/g) || []).length === 6, "detailed echo panel should render summary plus five echo cards");
  assert((html.match(/data-act="detail-lead"/g) || []).length === 1, "only the lead echo card should choose the lead echo");
  assert((html.match(/data-act="detail-echo-cost"/g) || []).length === 4, "lead echo card should not render a separate cost selector");
  assert(html.includes("哀声鸷 · 4c"), "lead echo selector should display the echo cost inline");
  assert(html.includes("Cost 12/12"), "detailed echo summary should display total cost");
  assert(html.includes("重击伤害加成"), "detailed echo-only type bonuses should auto-render in the panel");
  const setRowStart = html.indexOf('class="team-gear-set-row"');
  const setRowHtml = html.slice(setRowStart, html.indexOf('class="team-gear-lead-row"', setRowStart));
  assert(setRowHtml.includes('data-tip="浮星祛暗"') && setRowHtml.includes('data-tip="轻云出月"'), "team card set icons should reflect detailed echo sets");
  assert(/value="heavyDmg"\s+disabled/.test(html), "selected detailed substat keys should be disabled in sibling rows");
  assert(html.includes("panel-num-field--readonly") && !html.includes('data-act="efield"'), "detailed echo mode should make echo panel values read-only");
  assert(!html.includes('data-act="panel-add"') && !html.includes('data-act="echo-clear"'), "detailed echo mode should hide manual echo add/reset controls");
}

function reportedCharacterFixes() {
  expectEqual(window.WUWA.chars.lynae.base.breakAmp, 10, "Lynae base Tune Break Boost should match recorded raw property data");
  expectEqual(window.WUWA.chars.mornye.base.breakAmp, 10, "Mornye base Tune Break Boost should match recorded raw property data");
  expectEqual(window.WUWA.chars.luukherssen.base.breakAmp, 10, "Luuk Herssen base Tune Break Boost should match recorded raw property data");
  expectEqual(window.WUWA.chars.lucy.base.breakAmp, 10, "Lucy base Tune Break Boost should match recorded raw property data");
  expectEqual(window.WUWA.chars.rebecca.base.breakAmp, 10, "Rebecca base Tune Break Boost should match recorded raw property data");
  expectEqual(window.WUWA.chars.sigrika.base.breakAmp, 0, "Sigrika base Tune Break Boost should match recorded raw property data");

  resetTeam(["youhu"]);
  let slot = __T.state.slots[0];
  slot.skill = "a5";
  slot.resources.frost = 0;
  let r = __T.compute();
  assert(r.sk && r.sk.id === "skill", `Youhu Frostfall without Frost should fall back to Ask Divination, got ${r.sk && r.sk.id}`);
  assert(r.normal > 0, "Youhu Frostfall fallback should not calculate as zero damage");

  resetTeam(["brant"]);
  slot = __T.state.slots[0];
  slot.echo.fields.energyRegen = 62.96;
  let b = buff(slot, "son_12_tidebreaking_courage_all");
  assert(__T.buffStatus(slot, 0, b).applies, "Brant Tidebreaking Courage sonata should auto-apply all-damage bonus at 250 ER");
  b = buff(slot, "b_theatrical_atk");
  assert(__T.buffFormulaText(slot, b, 0).includes("+1200"), "Brant ER scaleBy should include courage sonata 2-piece ER");
  slot.echo.fields.energyRegen = 52.95;
  b = buff(slot, "son_12_tidebreaking_courage_all");
  assert(!__T.buffStatus(slot, 0, b).applies, "Brant Tidebreaking Courage sonata should not apply below 250 ER");

  resetTeam(["cantarella"]);
  slot = __T.state.slots[0];
  slot.skill = "perception_drain";
  slot.resources.tremor = 0;
  r = __T.compute();
  assert(r.sk && r.sk.id === "skill_reverie", `Cantarella Perception Drain without Tremor should fall back to Reverie, got ${r.sk && r.sk.id}`);
  assert(r.normal > 0 && !r.resourceBlocked, "Cantarella Tremor fallback should not calculate as zero damage");

  resetTeam(["zani"]);
  slot = __T.state.slots[0];
  slot.skill = "skill_targeted";
  b = buff(slot, "son_11_eternal_radiance_crit");
  assert(!__T.buffStatus(slot, 0, b).applies && __T.buffStatus(slot, 0, b).precondition, "Zani light-noise skill should not consume Eternal Radiance post-attachment crit on the same hit");
  __T.setBuffToggle(slot, 0, "son_11_eternal_radiance_crit", true);
  assert(__T.buffStatus(slot, 0, b).applies, "Eternal Radiance crit should apply after the post-attachment window is manually confirmed");
  b = buff(slot, "son_11_eternal_radiance_spectro");
  assert(__T.buffStatus(slot, 0, b).precondition, "Eternal Radiance Spectro bonus should require confirming 10 Light Noise stacks");
  __T.setBuffToggle(slot, 0, "son_11_eternal_radiance_spectro", true);
  expectEqual(__T.state.effectCalc.key, "lightNoise", "confirming 10-stack Light Noise bonus should select Light Noise effect");
  expectEqual(__T.state.effectCalc.stacks, 10, "confirming 10-stack Light Noise bonus should set effect stacks to 10");
  assert(__T.buffStatus(slot, 0, b).applies, "Eternal Radiance Spectro bonus should apply after syncing Light Noise stacks");
  __T.state.effectCalc.stacks = 9;
  assert(!__T.buffStatus(slot, 0, b).applies, "Eternal Radiance Spectro bonus should stop applying below 10 Light Noise stacks");
  slot.skill = "forte_nightfall";
  slot.layers = 0;
  slot.toggles["res_焰光"] = false;
  r = __T.compute();
  assert(r.sk && r.sk.id === "forte_nightfall", `Zani Nightfall should stay selected at zero Blaze, got ${r.sk && r.sk.id}`);
  assert(r.normal > 0 && !r.resourceBlocked, "Zani Nightfall zero Blaze should not calculate as zero damage");

  resetTeam(["ciaccona"]);
  slot = __T.state.slots[0];
  b = buff(slot, "b_solo_aero");
  slot.toggles[__T.stateChoiceKey("演绎状态")] = "演绎状态";
  assert(!__T.buffStatus(slot, 0, b).applies, "Ciaccona performance state alone should not grant solo Aero bonus");
  slot.toggles[__T.stateChoiceKey("音律独奏")] = "音律独奏";
  assert(__T.buffStatus(slot, 0, b).applies, "Ciaccona solo state should grant solo Aero bonus");

  resetTeam(["phoebe"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  let skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(!skillIds.has("starflash_absolution") && !skillIds.has("starflash_confession"), "Phoebe mode skills should wait for the current Prayer state");
  const prayerHTML = __T.stateControlsHTML(slot, 0);
  const prayerState = stateDefFor(window.WUWA.chars.phoebe, "赦罪/告解状态");
  const prayerKey = __T.stateChoiceKey(prayerState.id);
  const prayerButtonRe = new RegExp(`<button[^>]*data-act="state-choice"[^>]*data-key="${prayerState.id}"[^>]*>[^<]*<\\/button>`, "g");
  const prayerInputs = [...prayerHTML.matchAll(prayerButtonRe)].map((m) => m[0]);
  assert(prayerInputs.length === 3 && prayerHTML.includes("state-seg") && prayerHTML.includes(">赦罪</button>") && prayerHTML.includes(">告解</button>"), "Phoebe Prayer state should render as horizontal single-select segments");
  assert(prayerInputs.every((input) => !input.includes("disabled")), "Phoebe Prayer state should be chosen before selecting mode skills");
  slot.toggles[prayerKey] = stateOptionValueFor(window.WUWA.chars.phoebe, "赦罪状态");
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("starflash_absolution") && skillIds.has("absolution_litany") && skillIds.has("c6_starflash_absolution"), "Phoebe Absolution skills should remain available in Absolution state");
  assert(!skillIds.has("starflash_confession") && !skillIds.has("confession") && !skillIds.has("c6_starflash_confession"), "Phoebe Confession skills should be hidden in Absolution state");
  slot.toggles[prayerKey] = stateOptionValueFor(window.WUWA.chars.phoebe, "告解状态");
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("starflash_confession") && skillIds.has("confession") && skillIds.has("c6_starflash_confession"), "Phoebe Confession skills should remain available in Confession state");
  assert(!skillIds.has("starflash_absolution") && !skillIds.has("absolution_litany") && !skillIds.has("c6_starflash_absolution"), "Phoebe Absolution skills should be hidden in Confession state");
  slot.skill = "starflash_absolution";
  assert(__T.compute().sk.id === "burst_confession", "Phoebe should fall back to a Confession skill when the old Absolution skill is no longer selectable");

  resetTeam(["lupa", "verina"]);
  slot = __T.state.slots[0];
  slot.skill = "burst";
  b = buff(slot, "b_glory_res");
  expectEqual(__T.buffFormulaText(slot, b, 0), "-3%", "Lupa Glory should grant one res-ignore layer in a one-Fusion team");
  resetTeam(["lupa", "changli", "verina"]);
  slot = __T.state.slots[0];
  slot.skill = "burst";
  b = buff(slot, "b_glory_res");
  expectEqual(__T.buffFormulaText(slot, b, 0), "-6%", "Lupa Glory should count one other Fusion teammate");
  resetTeam(["lupa", "changli", "brant"]);
  slot = __T.state.slots[0];
  slot.skill = "burst";
  b = buff(slot, "b_glory_res");
  expectEqual(__T.buffFormulaText(slot, b, 0), "-15%", "Lupa Glory should reach five layers in a three-Fusion team");

  resetTeam(["augusta"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  slot.skill = "thunder_spin";
  b = buff(slot, "k6_crown_cr_extra");
  assert(__T.buffStatus(slot, 0, b).gated === "需层数达到第3-4层", "Augusta third/fourth crown layer buff should not show as applied at two layers");
  slot.toggles.stk_augusta_crown = 4;
  b = buff(slot, "k2_overcap_cd");
  expectEqual(__T.buffFormulaText(slot, b, 0), "+90.3%（上限100%）", "Augusta overcap conversion should not double-count weapon secondary crit");

  resetTeam(["ciaccona", "cartethyia"]);
  __T.state.outputIdx = 0;
  const support = __T.state.slots[1];
  support.toggles.outro_aero = true;
  b = buff(support, "outro_aero");
  __T.state.effectCalc = { key: "electro", stacks: 1, electroRageStacks: 0, deepen: 0 };
  assert(!__T.buffStatus(support, 1, b).applies, "Cartethyia outro should not accept a stale unavailable abnormal effect");
  __T.state.effectCalc = { key: "windErosion", stacks: 1, electroRageStacks: 0, deepen: 0 };
  assert(__T.buffStatus(support, 1, b).applies, "Cartethyia outro should accept a currently available abnormal effect");

  resetTeam(["cartethyia"]);
  slot = __T.state.slots[0];
  slot.seq = 4;
  slot.skill = "na4";
  b = buff(slot, "k4_all");
  assert(__T.buffStatus(slot, 0, b).precondition && !__T.buffStatus(slot, 0, b).applies, "Cartethyia chain 4 post-effect buff should not apply to the same hit that attaches erosion");
  slot.toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  slot.skill = "lib_tideblade";
  b = buff(slot, "w_e1");
  assert(!__T.buffStatus(slot, 0, b).applies, "Cartethyia signature weapon defense ignore should not trigger from Liberation damage");
  slot.toggles[__T.stateChoiceKey("形态")] = "卡提希娅";
  slot.skill = "na1";
  assert(__T.buffStatus(slot, 0, b).applies, "Cartethyia signature weapon defense ignore should trigger from basic damage");

  resetTeam(["qiuyuan"]);
  slot = __T.state.slots[0];
  slot.skill = "ink1";
  slot.resources.swordGauge = 199;
  r = __T.compute();
  assert(r.resourceBlocked, "Qiuyuan Answering Sword basic should require 200 Sword Gauge");
  slot.seq = 3;
  slot.skill = "hesuo";
  slot.toggles["res_满协奏且未处于淋漓醉墨"] = false;
  r = __T.compute();
  assert(r.resourceBlocked, "Qiuyuan Hesuo Chulin should require concerto and not being in ink state");

  resetTeam(["luukherssen", "lynae", "rebecca"]);
  slot = __T.state.slots[0];
  __T.state.slots[1].toggles.b_visual_break = true;
  __T.state.slots[2].toggles.b_hack_break_amp = true;
  slot.toggles[__T.stateChoiceKey("目标集谐·干涉")] = "目标集谐·干涉";
  b = buff(slot, "b_doctor_amp");
  assert(__T.buffFormulaText(slot, b, 0).includes("+30%"), "Luuk Herssen breakAmp scaleBy should read active Tune Break Boost buffs");

  resetTeam(["mornye", "lynae"]);
  slot = __T.state.slots[0];
  __T.state.slots[1].toggles.b_visual_break = true;
  b = buff(slot, "b_interference_amp_base");
  expectEqual(b.zone, "vulnerability", "Mornye Interference Mark should be target damage taken, not outgoing amplify");
  slot.toggles[__T.stateChoiceKey("干涉标记")] = "干涉标记";
  slot.toggles[__T.stateChoiceKey("谐度干涉")] = "谐度干涉·集谐";
  assert(__T.buffStatus(slot, 0, b).applies, "Mornye Interference Mark target vulnerability should apply after target states are confirmed");
  slot.toggles[__T.stateChoiceKey("谐度干涉")] = "谐度干涉·集谐";
  slot.toggles.b_tune_response = true;
  b = buff(slot, "b_tune_response");
  slot.toggles[`stk_${b.stackGroup}`] = 3;
  assert(__T.buffStatus(slot, 0, b).applies, "Mornye Tune Strain - Interfered final damage should be modeled");
  assert(__T.buffFormulaText(slot, b, 0).includes("+18%"), "Mornye Tune Strain - Interfered should scale from active Tune Break Boost buffs per stack");
  slot.skill = "rupture_beam";
  slot.toggles[__T.stateChoiceKey("谐度干涉")] = "谐度干涉·震谐";
  r = __T.compute();
  expectEqual(r.damageModel, "harmonyResponse", "Mornye Tune Rupture response should use the harmony-response formula branch");
  expectEqual(r.normal, r.critHit, "Mornye Tune Rupture response should not crit");
  expectEqual(r.normal, r.expected, "Mornye Tune Rupture response expected damage should equal non-crit damage");

  resetTeam(["sigrika"]);
  slot = __T.state.slots[0];
  slot.skill = "true_name";
  assert(__T.resolvedSkill(slot)?.id === "true_name", "Sigrika default Period resource should explicitly enable Learn My True Name");
  let sigrikaResources = __T.resourceControlsForSlot(slot);
  assert(sigrikaResources.every((ctrl) => ctrl.kind === "value"), "Sigrika structured resources should not create legacy checkbox controls");
  assert(!sigrikaResources.some((ctrl) => ctrl.label === "符文"), "Sigrika total Rune should be derived from Rune types, not manually entered");
  slot.resources.hopeRune = 2;
  slot.resources.answerRune = 2;
  sigrikaResources = __T.resourceControlsForSlot(slot);
  const sigrikaRuneSum = sigrikaResources
    .filter((ctrl) => ctrl.id === "hopeRune" || ctrl.id === "answerRune")
    .reduce((sum, ctrl) => sum + ctrl.value, 0);
  assert(sigrikaRuneSum <= 2, "Sigrika Hope/Answer runes should share a total cap of 2");
  b = buff(slot, "b_blessing_aero");
  assert(!__T.buffStatus(slot, 0, b).applies, "Sigrika Echo Skill DMG should not be treated as casting an Echo Skill");
  assert(__T.buffStatus(slot, 0, b).precondition, "Sigrika Semantic Blessing should require manual confirmation/stacks");
  assert(!__T.buffStatus(slot, 0, buff(slot, "b_er_echo")).applies, "Sigrika ER conversion should not apply below 125% energy regen");
  assert(!__T.buffStatus(slot, 0, buff(slot, "son_29_sound_of_true_name_echo_crit")).applies, "Sound of True Name 5-piece Echo Skill crit should require a prior Echo Skill hit window");
  assert(!__T.buffStatus(slot, 0, buff(slot, "son_29_sound_of_true_name_aero")).applies, "Sound of True Name 5-piece Aero bonus should require a prior Echo Skill hit window");
  slot.resources.hopeRune = 1;
  slot.resources.answerRune = 1;
  slot.skill = "rune_outburst";
  assert(__T.resolvedSkill(slot)?.id === "rune_outburst", "Sigrika Runic Outburst should require both Hope and Answer runes");
  __T.setBuffToggle(slot, 0, "b_soliskin_mult", true);
  assert(__T.buffStatus(slot, 0, buff(slot, "b_soliskin_mult")).applies, "Sigrika high Soliskin energy branch should apply when selected");
  assert(!__T.buffStatus(slot, 0, buff(slot, "b_soliskin_amp")).applies, "Sigrika low Soliskin energy branch should be gated by high branch selection");
  __T.setBuffToggle(slot, 0, "b_soliskin_amp", true);
  assert(!__T.buffStatus(slot, 0, buff(slot, "b_soliskin_mult")).applies, "Sigrika high Soliskin energy branch should be gated by low branch selection");
  assert(__T.buffStatus(slot, 0, buff(slot, "b_soliskin_amp")).applies, "Sigrika low Soliskin energy branch should apply when selected");

  resetTeam(["verina"]);
  slot = __T.state.slots[0];
  slot.skill = "a13";
  b = buff(slot, "b1");
  assert(__T.buffStatus(slot, 0, b).applies, "Verina inherent attack buff should apply to her own Liberation trigger");
  slot.seq = 4;
  b = buff(slot, "k4");
  assert(__T.buffStatus(slot, 0, b).applies, "Verina chain 4 Spectro bonus should apply to her own Liberation trigger");

  resetTeam(["zhezhi"]);
  slot = __T.state.slots[0];
  slot.seq = 4;
  slot.skill = "a10";
  b = buff(slot, "k4");
  assert(!__T.buffStatus(slot, 0, b).applies, "Zhezhi chain 4 should not auto-trigger from Mohe coordinated attacks");

  resetTeam(["taoqi"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  expectEqual(buff(slot, "k6_basic").zone, "typeBonus", "Taoqi chain 6 basic bonus should be type bonus");
  expectEqual(buff(slot, "k6_heavy").zone, "typeBonus", "Taoqi chain 6 heavy bonus should be type bonus");

  resetTeam(["camellya"]);
  slot = __T.state.slots[0];
  slot.seq = 3;
  slot.skill = "a20";
  b = buff(slot, "k3_atk");
  assert(!__T.buffStatus(slot, 0, b).applies, "Camellya One-Day Flower should not pre-apply the Bud state attack buff");
  slot.seq = 6;
  slot.skill = "a21";
  b = buff(slot, "k2");
  assert(!__T.buffStatus(slot, 0, b).applies, "Camellya chain 2 One-Day Flower bonus should not apply to Ever-Bloom by name");

  resetTeam(["youhu"]);
  slot = __T.state.slots[0];
  slot.skill = "a15";
  slot.toggles[__T.stateChoiceKey("吉兆组合")] = "吉兆组合·联珠";
  assert(!__T.buffStatus(slot, 0, buff(slot, "b3")).applies, "Youhu Antithesis bonus should not apply in Triplet state");
  assert(__T.buffStatus(slot, 0, buff(slot, "b4")).applies, "Youhu Triplet bonus should apply in Triplet state");
  slot.seq = 2;
  assert(!__T.buffStatus(slot, 0, buff(slot, "k2_duo")).applies, "Youhu chain 2 Antithesis repeat should not apply in Triplet state");
  assert(__T.buffStatus(slot, 0, buff(slot, "k2_triple")).applies, "Youhu chain 2 Triplet repeat should apply in Triplet state");
  slot.toggles[__T.stateChoiceKey("吉兆组合")] = "吉兆组合·合说";
  assert(__T.buffStatus(slot, 0, buff(slot, "b4")).applies, "Youhu Perfect Rhyme should reuse the Triplet damage bonus");
  assert(__T.buffStatus(slot, 0, buff(slot, "k2_triple")).applies, "Youhu chain 2 should repeat Perfect Rhyme's damage bonus");

  resetTeam(["youhu"]);
  slot = __T.state.slots[0];
  slot.skill = "a15";
  slot.resources.auspices = 3;
  r = __T.compute();
  assert(r.resourceBlocked, "Youhu Poetic Essence without 4 Auspices should be marked as resource-blocked");
  expectEqual(r.normal, 0, "hard-gated resource skill should not produce damage");
  __T.render();
  assert(String(board.innerHTML).includes("当前技能不可释放"), "resource-blocked skill should show an explicit unavailable hint");

  resetTeam(["yangyang"]);
  slot = __T.state.slots[0];
  slot.skill = "a11";
  b = buff(slot, "b1");
  assert(__T.buffStatus(slot, 0, b).applies, "Yangyang intro inherent should auto-apply on intro skill");
  slot.seq = 1;
  b = buff(slot, "k1");
  assert(__T.buffStatus(slot, 0, b).applies, "Yangyang chain 1 should auto-apply on intro skill");
  slot.seq = 6;
  slot.skill = "a13";
  b = buff(slot, "k6");
  assert(__T.buffStatus(slot, 0, b).applies, "Yangyang chain 6 should auto-apply on Feather Release");

  resetTeam(["verina", "youhu"]);
  __T.state.slots[0].skill = "a14";
  __T.setBuffToggle(__T.state.slots[1], 1, "b2", true);
  r = __T.compute();
  expectEqual(r.sk.damageType, "resonanceLiberation", "Verina coordinated attack should keep its normal damage type");
  assert((r.sk.damageTags || []).includes("coordinated"), "Verina coordinated attack should carry coordinated tag");
  expectEqual(r.totals.amplify, 100, "Youhu outro should match coordinated attack tag");

  resetTeam(["yuanwu"]);
  slot = __T.state.slots[0];
  const yuanwu = window.WUWA.chars.yuanwu;
  const thunderUprising = stateOptionValueFor(yuanwu, "雷厉风行");
  const hasThunderUprising = (sk) => (sk?.impliedStates || []).includes(thunderUprising);
  const thunderWedge = stateDefFor(yuanwu, "雷之楔在场");
  const thunderWedgeKey = __T.stateChoiceKey(thunderWedge.id);
  slot.skill = "a12";
  r = __T.compute();
  assert(!hasThunderUprising(r.sk), "Yuanwu Thunder Wedge entry should not imply Thunder Uprising state");
  slot.skill = "a13";
  r = __T.compute();
  assert(!hasThunderUprising(r.sk), "Yuanwu Liberation entry should not imply Thunder Uprising state");
  slot.skill = "a16";
  r = __T.compute();
  assert(hasThunderUprising(r.sk), "Yuanwu Thunder Uprising attacks should still imply Thunder Uprising state");
  slot.seq = 5;
  slot.skill = "a13";
  slot.toggles[thunderWedgeKey] = stateOptionValueFor(yuanwu, "雷之楔在场");
  b = buff(slot, "k5");
  assert(__T.buffStatus(slot, 0, b).applies, "Yuanwu chain 5 should require Thunder Wedge presence, not Thunder Field range");
  slot.seq = 6;
  b = buff(slot, "k6");
  assert(!__T.buffStatus(slot, 0, b).applies, "Yuanwu chain 6 should still require Thunder Field range");
  slot.toggles[thunderWedgeKey] = stateOptionValueFor(yuanwu, "雷之楔在场·雷池范围");
  assert(__T.buffStatus(slot, 0, b).applies, "Yuanwu chain 6 should apply inside Thunder Field range");
  assert(window.WUWA.chars.yuanwu.skillEvents.some((e) => e.event === "shield" && e.seq === 4), "Yuanwu chain 4 shield event should be chain-gated");

  resetTeam(["lingyang"]);
  slot = __T.state.slots[0];
  slot.skill = "a19";
  slot.toggles["res_狮魂低于10"] = false;
  r = __T.compute();
  assert(r.sk && r.sk.id === "forte_stormy_kicks", `Lingyang Cloud Style should not fall through to another skill, got ${r.sk && r.sk.id}`);
  assert(!r.resourceBlocked, "Lingyang Cloud Style should not expose low Lion's Spirit as a resource gate");
  assert(r.normal > 0, "Lingyang Cloud Style should calculate damage directly when selected");

  resetTeam(["calcharo"]);
  slot = __T.state.slots[0];
  slot.seq = 3;
  slot.skill = "lib";
  slot.toggles[__T.stateChoiceKey("杀戮武装")] = "杀戮武装";
  b = buff(slot, "k3");
  assert(!b.skills, "Calcharo chain 3 Electro bonus should not be narrowed by a skill whitelist");
  assert(__T.buffStatus(slot, 0, b).applies, "Calcharo chain 3 Electro bonus should apply to Electro damage while Armed for Kill is confirmed");
  r = __T.compute();
  expectEqual(r.totals.damageBonus, 35, "Calcharo chain 3 should stack with the default Electro sonata bonus");
  slot.seq = 5;
  slot.skill = "lib_necessary";
  r = __T.compute();
  expectEqual(r.sk.category, "introSkill", "Calcharo Necessary Means should be modeled as an intro skill");
  expectEqual(r.totals.typeBonus, 50, "Calcharo chain 5 should be a damage bonus, not a skill multiplier");
  slot.seq = 6;
  slot.skill = "k6_hunting_shadow";
  r = __T.compute();
  expectEqual(r.sk.damageType, "resonanceLiberation", "Calcharo chain 6 Hunting Shadow should count as Resonance Liberation damage");
  assert((r.sk.damageTags || []).includes("coordinated"), "Calcharo chain 6 Hunting Shadow should carry coordinated tag");
  slot.skill = "lib";
  b = buff(slot, "k4");
  slot.toggles.k4 = true;
  assert(__T.buffStatus(slot, 0, b).gated === "延奏不给自己", "triggerOutro chain buff should not be confirmable on its own provider");

  resetTeam(["zhezhi"]);
  slot = __T.state.slots[0];
  slot.skill = "k5_extra_mohe";
  r = __T.compute();
  expectEqual(r.selectedSk.id, "forte_creations_zenith", "Zhezhi chain 5 extra crane should be hidden before chain 5");
  slot.seq = 5;
  r = __T.compute();
  expectEqual(r.selectedSk.id, "k5_extra_mohe", "Zhezhi chain 5 extra crane should unlock at chain 5");
  expectEqual(r.sk.multiplier, 91.29, "Zhezhi chain 5 extra crane multiplier");
  slot.seq = 6;
  slot.skill = "k6_white_crane";
  r = __T.compute();
  expectEqual(r.selectedSk.id, "k6_white_crane", "Zhezhi chain 6 white crane should unlock at chain 6");
  expectEqual(r.sk.multiplier, 357.86, "Zhezhi chain 6 white crane multiplier");

  resetTeam(["aalto"]);
  slot = __T.state.slots[0];
  slot.seq = 3;
  slot.skill = "a1";
  slot.toggles[__T.stateChoiceKey("雾气")] = "雾气";
  b = buff(slot, "k3");
  expectEqual(__T.buffFormulaText(slot, b, 0), "+50%当前倍率", "Aalto chain 3 badge should show current-multiplier add");
  r = __T.compute();
  expectEqual(r.panel.baseMult, 47.72, "Aalto chain 3 should add 50% of current level-scaled multiplier");
  slot.seq = 6;
  slot.skill = "a7";
  slot.toggles[__T.stateChoiceKey("虚实之门")] = "虚实之门";
  r = __T.compute();
  expectEqual(r.totals.typeBonus, 50, "Aalto chain 6 heavy bonus should be type bonus");

  resetTeam(["jiyan"]);
  const jiyan = window.WUWA.chars.jiyan;
  expectEqual(jiyan.skills.find((s) => s.id === "ha_windborne").multiplier, 105.96, "Jiyan Windborne Strike multiplier");
  expectEqual(jiyan.skills.find((s) => s.id === "ha_abyssal").multiplier, 81.71, "Jiyan Abyssal Slash multiplier");
  assert(!jiyan.combatStates.some((s) => s.id === "破阵值"), "Jiyan Resolve should not be modeled as a combat state");
  slot = __T.state.slots[0];
  slot.skill = "skill_windqueller";
  b = buff(slot, "b3");
  assert(!__T.buffStatus(slot, 0, b).applies, "Jiyan Windqueller bonus should need Formation state or Resolve");
  __T.setBuffToggle(slot, 0, "b3", true);
  assert(__T.buffStatus(slot, 0, b).applies, "Jiyan Windqueller bonus should be confirmable when Resolve is at least 30");
  slot.toggles = {};
  slot.toggles[__T.stateChoiceKey("破阵状态")] = "破阵状态";
  assert(__T.buffStatus(slot, 0, b).applies, "Jiyan Windqueller bonus should apply in Qingloong Mode");
  r = __T.compute();
  expectEqual(r.totals.typeBonus, 20, "Jiyan Windqueller bonus should be type bonus, not skill multiplier");

  resetTeam(["chixia"]);
  expectEqual(skill(window.WUWA.chars.chixia, "a7").multiplier, 32.21, "Chixia aerial attack multiplier");

  resetTeam(["buling"]);
  const bulingSkill = window.WUWA.chars.buling.skills.find((s) => s.id === "skill");
  const bulingTick = window.WUWA.chars.buling.skills.find((s) => s.id === "skill_pull_tick");
  expectEqual(bulingSkill.multiplier, 58.4, "Buling Thunder Talisman multiplier");
  expectEqual(bulingTick.multiplier, 58.4, "Buling sustained pull multiplier");

  const chisa = window.WUWA.chars.chisa;
  const chisaVoidSnare = stateDefFor(chisa, "虚无绞痕");
  assert(!stateDefFor(chisa, "虚湮之线"), "Chisa Thread of Nihility should not be modeled as a combat state");
  assert(chisaVoidSnare?.kind === "target", "Chisa Void Snare should be labeled as a target marker");
  const chisaThreadDef = allBuffs(chisa).find((x) => x.id === "b_thread_def");
  assert(chisaThreadDef.defaultActive === false && !chisaThreadDef.requiresState && !chisaThreadDef.requiresAllStates, "Chisa Thread of Nihility defense ignore should be a manual buff confirmation");
  const chisaC2 = allBuffs(chisa).find((x) => x.id === "c2_dmg");
  assert(chisaC2.defaultActive === false && !chisaC2.requiresState && !chisaC2.requiresAllStates, "Chisa chain 2 Thread of Nihility bonus should be a manual buff confirmation");
  resetTeam(["chisa"]);
  assert(!__T.stateControlsHTML(__T.state.slots[0], 0).includes("虚湮之线"), "Chisa state UI should not expose Thread of Nihility");
  assert(__T.stateControlsHTML(__T.state.slots[0], 0).includes("按当前目标状态/标记选择"), "Chisa target marker UI should not call Void Snare a combat state");

  resetTeam(["jinhsi", "chisa"]);
  const chisaSupport = __T.state.slots[1];
  b = buff(chisaSupport, "b_thread_def");
  assert(!__T.buffStatus(chisaSupport, 1, b).applies, "Chisa Thread defense ignore should not apply before confirmation");
  __T.setBuffToggle(chisaSupport, 1, "b_thread_def", true);
  assert(__T.buffStatus(chisaSupport, 1, b).applies, "Chisa Thread defense ignore should apply after confirmation");
  chisaSupport.seq = 2;
  b = buff(chisaSupport, "c2_dmg");
  assert(!__T.buffStatus(chisaSupport, 1, b).applies, "Chisa chain 2 Thread bonus should not apply before confirmation");
  __T.setBuffToggle(chisaSupport, 1, "c2_dmg", true);
  assert(__T.buffStatus(chisaSupport, 1, b).applies, "Chisa chain 2 Thread bonus should apply after confirmation");

  resetTeam(["buling", "chisa"]);
  __T.state.effectCalc = { key: "electro", providerIdx: 0, stacks: 10, electroRageStacks: 0, deepen: 0 };
  const chisaSlot = __T.state.slots[1];
  chisaSlot.seq = 6;
  b = buff(chisaSlot, "c6_effect_amp");
  let st = __T.buffStatus(chisaSlot, 1, b);
  assert(st.precondition && !st.gated, "effect-only support state buff should expose a confirmation control");
  __T.setBuffToggle(chisaSlot, 1, "c6_effect_amp", true);
  assert(chisaSlot.toggles[__T.stateChoiceKey(chisaVoidSnare.id)] === stateOptionValueFor(chisa, "虚无绞痕·终焉"), "confirming Chisa effect amp should write the provider target state");
  r = __T.compute();
  expectEqual(r.effect.buffDeepen, 30, "confirmed Chisa chain 6 should deepen effect damage");

  resetTeam(["jinhsi"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  slot.skill = "a20";
  __T.render();
  assert(String(board.innerHTML).includes('data-key="incandescence"') && String(board.innerHTML).includes("韶光 (0-50)"), "Jinhsi Incandescence should render as a persistent character resource control");
  assert(String(board.innerHTML).includes("6链·寒尽又逢春"), "chain buff source text should include the sequence number");
  slot.resources.incandescence = 50;
  b = buff(slot, "k6_stack");
  expectEqual(__T.buffFormulaText(slot, b, 0), "+45%层数倍率", "Jinhsi chain 6 stack badge");
  r = __T.compute();
  expectEqual(r.layers, 50, "Jinhsi Stella Glamor should read Incandescence from the character resource");
  expectEqual(r.perStackBonus, 45, "Jinhsi chain 6 should boost Incandescence multiplier gain");
  expectEqual(r.panel.baseMult, 3577.07, "Jinhsi chain 6 should include boosted Incandescence gain before skill multiplier bonus");
  slot.resources.incandescence = 10;
  r = __T.compute();
  expectEqual(r.layers, 10, "Jinhsi Incandescence edits should update the skill layers");

  resetTeam(["aalto"]);
  slot = __T.state.slots[0];
  slot.toggles[__T.stateChoiceKey("迷雾潜行")] = "迷雾潜行";
  slot.skill = "forte_mist_bullet";
  __T.render();
  assert(String(board.innerHTML).includes('data-key="mistDrops"') && String(board.innerHTML).includes("雾滴 (0-6)"), "Aalto Mist Drops should render as a persistent character resource control");
  r = __T.compute();
  expectEqual(r.layers, 6, "Aalto Mist Bullet should default to full Mist Drops");
  expectEqual(r.panel.baseMult, 357.9, "Aalto Mist Bullet should scale from full Mist Drops");
  slot.resources.mistDrops = 2;
  r = __T.compute();
  expectEqual(r.layers, 2, "Aalto Mist Bullet should read Mist Drops from the character resource");
  expectEqual(r.panel.baseMult, 119.3, "Aalto Mist Bullet should update when Mist Drops changes");

  resetTeam(["zani"]);
  slot = __T.state.slots[0];
  const zaniBlaze = resourceIdFor(window.WUWA.chars.zani, "焰光");
  slot.toggles[__T.stateChoiceKey("灼焰形态")] = "灼焰形态";
  slot.skill = "forte_nightfall";
  __T.render();
  assert(String(board.innerHTML).includes(`data-key="${zaniBlaze}"`) && String(board.innerHTML).includes("焰光 (0-40)"), "Zani Blaze should render as a persistent character resource control");
  r = __T.compute();
  expectEqual(r.layers, 40, "Zani Nightfall should default to full Blaze");
  expectEqual(r.panel.baseMult, 795.63, "Zani Nightfall should scale from full Blaze");
  slot.resources[zaniBlaze] = 29;
  slot.skill = "forte_daybreak";
  r = __T.compute();
  assert(r.resourceBlocked, "Zani Daybreak should be blocked below 30 Blaze");
  assert(!__T.resourceControlsForSlot(slot).some((control) => control.label === "焰光不少于30"), "Zani Blaze threshold should not render a duplicate boolean resource toggle");
  slot.resources[zaniBlaze] = 30;
  r = __T.compute();
  expectEqual(r.sk.id, "forte_daybreak", "Zani Daybreak should unlock at 30 Blaze");

  resetTeam(["chisa"]);
  slot = __T.state.slots[0];
  const chisaSawring = resourceIdFor(window.WUWA.chars.chisa, "锯环残响");
  slot.toggles[__T.stateChoiceKey("电锯模式")] = "电锯模式";
  slot.skill = "sawring_end";
  __T.render();
  assert(String(board.innerHTML).includes(`data-key="${chisaSawring}"`) && String(board.innerHTML).includes("锯环残响 (0-100)"), "Chisa Sawring Reverberation should render as a persistent character resource control");
  r = __T.compute();
  expectEqual(r.layers, 100, "Chisa Sawring End should default to full Sawring Reverberation");
  expectEqual(r.panel.baseMult, 516.67, "Chisa Sawring End should scale from full Sawring Reverberation");
  slot.resources[chisaSawring] = 25;
  r = __T.compute();
  expectEqual(r.layers, 25, "Chisa Sawring End should read Sawring Reverberation from the character resource");
  expectEqual(r.panel.baseMult, 322.42, "Chisa Sawring End should update when Sawring Reverberation changes");
  slot.skill = "skill_cycle";
  slot.resources[chisaSawring] = 99;
  r = __T.compute();
  expectEqual(r.sk.id, "skill_eye", "Chisa Serrated Loop should fall back before Sawring Reverberation is full");
  slot.resources[chisaSawring] = 100;
  r = __T.compute();
  expectEqual(r.sk.id, "skill_cycle", "Chisa Serrated Loop should unlock at full Sawring Reverberation");

  resetTeam(["xiangliyao"]);
  slot = __T.state.slots[0];
  slot.skill = "skill_deduction";
  b = buff(slot, "b1");
  assert(__T.buffStatus(slot, 0, b).applies, "Xiangli Yao inherent should auto-trigger on Resonance Skill");
  expectEqual(__T.buffFormulaText(slot, b, 0), "+5%", "Xiangli Yao inherent should grant one stack on current Resonance Skill");
  slot.seq = 2;
  b = buff(slot, "k2");
  assert(__T.buffStatus(slot, 0, b).applies, "Xiangli Yao chain 2 should auto-trigger on Resonance Skill");
  slot.seq = 4;
  slot.skill = "lib_cogitation";
  b = buff(slot, "k4");
  assert(__T.buffStatus(slot, 0, b).applies, "Xiangli Yao chain 4 should auto-trigger on Cogitation Model");

  resetTeam(["lumi"]);
  slot = __T.state.slots[0];
  slot.toggles[__T.stateChoiceKey("灯号模式")] = "红灯聚光模式";
  slot.skill = "a17";
  slot.resources.lightEnergy = 0;
  r = __T.compute();
  expectEqual(r.selectedSk.id, "forte_energized_pounce", "Lumi Fortified Pounce should remain the selected skill");
  expectEqual(r.sk.id, "skill_pounce", "Lumi Fortified Pounce without energy should fall back to Pounce");
  assert(!r.resourceBlocked && r.normal > 0, "Lumi Fortified Pounce fallback should still calculate damage");
  slot.toggles[__T.stateChoiceKey("灯号模式")] = "黄灯聚光模式";
  slot.skill = "a18";
  slot.resources.lightEnergy = 0;
  r = __T.compute();
  expectEqual(r.selectedSk.id, "forte_energized_rebound", "Lumi Fortified Retreat should remain the selected skill");
  expectEqual(r.sk.id, "skill_rebound", "Lumi Fortified Retreat without energy should fall back to Retreat");
  assert(!r.resourceBlocked && r.normal > 0, "Lumi Fortified Retreat fallback should still calculate damage");

  resetTeam(["danjin"]);
  slot = __T.state.slots[0];
  slot.skill = "a18";
  slot.resources.rubyBlossom = 0;
  r = __T.compute();
  expectEqual(r.sk.id, "heavy", "Danjin full Chaoscleave should recursively fall back to normal Heavy Attack when 120 and 60 Ruby Blossom are unavailable");

  resetTeam(["verina"]);
  slot = __T.state.slots[0];
  slot.skill = "heavy_2";
  assert(__T.resourceControlsForSlot(slot).some((control) => control.kind === "value" && control.label === "光合能量"), "Verina should expose Photosynthesis Energy as a numeric character resource");
  slot.resources.photosynthesis = 0;
  r = __T.compute();
  expectEqual(r.sk.id, "heavy", "Verina Starflower Blooms should fall back when Photosynthesis Energy is zero");
  slot.resources.photosynthesis = 1;
  r = __T.compute();
  expectEqual(r.sk.id, "heavy_2", "Verina Starflower Blooms should calculate when Photosynthesis Energy is available");

  resetTeam(["augusta"]);
  slot = __T.state.slots[0];
  assert(["战势", "权炳", "威慑"].every((label) => __T.resourceControlsForSlot(slot).some((control) => control.kind === "value" && control.label === label)), "Augusta should expose Battle Momentum, Authority, and Deterrence as numeric resources");
  slot.skill = "thunder_back";
  slot.resources.battleMomentum = 99;
  r = __T.compute();
  expectEqual(r.sk.id, "heavy_iron", "Augusta Thunderoar should require full Battle Momentum");
  slot.resources.battleMomentum = 100;
  r = __T.compute();
  expectEqual(r.sk.id, "thunder_back", "Augusta Thunderoar should unlock at full Battle Momentum");
  slot.skill = "sunstrike_1";
  slot.resources.authority = 99;
  r = __T.compute();
  expectEqual(r.sk.id, "skill_slash", "Augusta Undying Sunlight should require full Authority");
  slot.resources.authority = 100;
  r = __T.compute();
  expectEqual(r.sk.id, "sunstrike_1", "Augusta Undying Sunlight should unlock at full Authority");

  resetTeam(["mornye"]);
  slot = __T.state.slots[0];
  assert(["静质量能", "相对动能"].every((label) => __T.resourceControlsForSlot(slot).some((control) => control.kind === "value" && control.label === label)), "Mornye should expose Static Mass Energy and Relative Kinetic Energy as numeric resources");
  slot.skill = "mass_shift";
  slot.resources.staticMassEnergy = 99;
  r = __T.compute();
  expectEqual(r.sk.id, "heavy", "Mornye Geopotential Shift should require full Static Mass Energy");
  slot.resources.staticMassEnergy = 100;
  r = __T.compute();
  expectEqual(r.sk.id, "mass_shift", "Mornye Geopotential Shift should unlock at full Static Mass Energy");
  slot.toggles[__T.stateChoiceKey("广域观测模式")] = "广域观测模式";
  slot.skill = "inversion";
  slot.resources.relativeKineticEnergy = 99;
  r = __T.compute();
  assert(r.resourceBlocked, "Mornye Inversion should be blocked until Relative Kinetic Energy is full");
  slot.resources.relativeKineticEnergy = 100;
  r = __T.compute();
  assert(!r.resourceBlocked && r.sk.id === "inversion", "Mornye Inversion should calculate at full Relative Kinetic Energy");

  resetTeam(["iuno"]);
  slot = __T.state.slots[0];
  slot.toggles[__T.stateChoiceKey("月相流转")] = "月相流转·新月";
  slot.skill = "yg_a1";
  let iunoSkillIds = __T.availableSkills(slot).map((sk) => sk.id);
  assert(iunoSkillIds.includes("yg_a1e") && !iunoSkillIds.includes("yg_a1"), "Iuno New Moon with Spirituality should show enhanced Moonbow basic instead of normal basic");
  r = __T.compute();
  expectEqual(r.selectedSk.id, "yg_a1e", "Iuno normal Moonbow basic should map to enhanced basic when Spirituality is available");
  expectEqual(r.sk.id, "yg_a1e", "Iuno enhanced Moonbow basic should calculate when Spirituality is available");
  __T.render();
  let html = String(board.innerHTML);
  assert(html.includes("灵性 (0-100)"), "Iuno New Moon should expose Spirituality as a numeric character resource");
  assert(html.includes("team-gear-set-icons") && !html.includes('data-act="esecondary"'), "Iuno should render fixed compact 3+2 echo set icons");
  assert(!html.includes("套装（3+2）"), "Iuno fixed 3+2 echo set should not render as visible text");
  assert(!html.includes("有灵性"), "Iuno Spirituality should not render as a legacy checkbox");
  slot.resources.spirituality = 0;
  slot.skill = "yg_a1e";
  iunoSkillIds = __T.availableSkills(slot).map((sk) => sk.id);
  assert(iunoSkillIds.includes("yg_a1") && !iunoSkillIds.includes("yg_a1e"), "Iuno New Moon without Spirituality should show normal Moonbow basic instead of enhanced basic");
  r = __T.compute();
  expectEqual(r.selectedSk.id, "yg_a1", "Iuno enhanced Moonbow basic should map to normal basic without Spirituality");
  expectEqual(r.sk.id, "yg_a1", "Iuno normal Moonbow basic should calculate without Spirituality");
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("灵性 (0-100)"), "Iuno New Moon should keep the Spirituality resource visible at zero");
  slot.skill = "rs_chuyin";
  b = buff(slot, "b2");
  assert(!__T.buffStatus(slot, 0, b).applies, "Iuno shield should not grant Pale Light stacks outside Full Moon Domain");
  slot.toggles[__T.stateChoiceKey("满月领域")] = "满月领域";
  assert(__T.buffStatus(slot, 0, b).applies, "Iuno shield should grant Pale Light stacks inside Full Moon Domain");
  expectEqual(__T.buffFormulaText(slot, b, 0), "×(1+4%)", "Iuno Full Moon shield should grant one Pale Light stack");
  slot.skill = "intro";
  slot.toggles[__T.stateChoiceKey("满月领域")] = "满月领域";
  assert(__T.buffStatus(slot, 0, b).applies, "Iuno intro should grant Pale Light stacks directly");
  expectEqual(__T.buffFormulaText(slot, b, 0), "×(1+20%)", "Iuno intro should grant five Pale Light stacks even inside Full Moon Domain");
}

function effectDamageModel() {
  resetTeam(["jinhsi", "buling"]);
  __T.state.effectCalc = { key: "electro", stacks: 10, electroRageStacks: 0, deepen: 0 };
  let r = __T.compute();
  const baseDamage = r.effect.damage;
  expectEqual(r.effect.providerIdx, 1, "electro effect provider should default to Buling");
  assert(r.effect.enabled && r.effect.damage > 0, "electro effect should calculate damage");
  expectEqual(r.effect.rate, 415.85, "10-stack electro rate");
  __T.render();
  let html = String(board.innerHTML);
  let effectHtml = html.slice(html.indexOf('id="out-effect"'), html.indexOf('id="out-offset"'));
  assert(effectHtml.includes("effect-mini-strip--formula") && !effectHtml.includes("<b>×"), "effect formula cards should use outer multiply signs");
  assert(effectHtml.includes("<span>效应基础值</span>") && effectHtml.includes("<span>效应倍率</span>"), "effect formula should name effect base and multiplier clearly");
  assert(effectHtml.includes("<span>效应加深</span>") && !effectHtml.includes("<span>效应加深</span><b>0%</b>"), "effect amplification card should show the multiplier factor, not the raw percent");

  __T.state.effectCalc.deepen = 20;
  r = __T.compute();
  assert(r.effect.damage > baseDamage * 1.19, "manual effect amplification should increase effect damage through a multiplier");
  __T.render();
  html = String(board.innerHTML);
  effectHtml = html.slice(html.indexOf('id="out-effect"'), html.indexOf('id="out-offset"'));
  assert(effectHtml.includes("<span>效应加深</span>") && effectHtml.includes("<b>1.200</b>"), "effect amplification card should display the active multiplier factor");
  assert(effectHtml.includes("效应加深 = max(0, 1 + (手动 20% + Buff 0%) / 100) = 1.200"), "effect amplification tooltip should explain manual and buff deepen sources");
  __T.state.effectCalc.deepen = 0;

  __T.state.effectCalc.electroRageStacks = 10;
  r = __T.compute();
  expectEqual(r.effect.rageStacks, 10, "electro rage stacks should be tracked separately");
  expectEqual(r.effect.baseRate, 415.85, "10-stack electro base rate should stay unchanged");
  expectEqual(r.effect.rageRate, 415.85, "10-stack electro rage should use the same rate table");
  expectEqual(Math.round(r.effect.rate * 100) / 100, 831.7, "electro rate should add flare and rage rates");
  assert(r.effect.damage > baseDamage * 1.9, "10 electro + 10 rage should roughly double 10 electro damage");
  __T.state.effectCalc.electroRageStacks = 0;

  __T.state.effectCalc.stacks = 0;
  r = __T.compute();
  expectEqual(r.effect.damage, 0, "zero-stack electro without rage should deal zero effect damage");
  __T.state.effectCalc.electroRageStacks = 10;
  r = __T.compute();
  expectEqual(r.effect.baseRate, 0, "zero-stack electro should keep base effect rate at zero");
  expectEqual(r.effect.rageRate, 415.85, "electro rage should calculate even when base electro stacks are zero");
  assert(r.effect.damage > 0, "electro rage should deal damage without base electro stacks");
  __T.state.effectCalc.stacks = 10;
  __T.state.effectCalc.electroRageStacks = 0;

  __T.state.slots[0].echo.fields.critDamage = 200;
  r = __T.compute();
  expectEqual(r.effect.damage, baseDamage, "effect damage should not use crit damage");

  __T.state.slots[0].echo.fields.attackPct = 200;
  r = __T.compute();
  expectEqual(r.effect.damage, baseDamage, "effect damage should not use current output attack");

  __T.state.slots[1].echo.fields.attackPct = 200;
  r = __T.compute();
  assert(r.effect.damage > baseDamage, "effect damage should use provider attack");
  __T.state.slots[1].echo.fields = {};

  __T.state.effectCalc.stacks = 13;
  r = __T.compute();
  expectEqual(r.effect.stacks, 10, "electro stacks should clamp to base cap without cap bonus");

  __T.state.effectCalc.stacks = 14325;
  __T.state.effectCalc.electroRageStacks = 14325;
  r = __T.compute();
  expectEqual(r.effect.stacks, 10, "electro stacks should clamp oversized input to base cap");
  expectEqual(r.effect.rageStacks, 10, "electro rage stacks should clamp oversized input to base cap");

  window.WUWA.chars.verina.effectCapBonus = { value: 3 };
  resetTeam(["buling", "verina"]);
  __T.state.effectCalc = { key: "electro", stacks: 13, electroRageStacks: 13, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 13, "electro stacks should allow 13 with team cap bonus");
  expectEqual(r.effect.rageStacks, 13, "electro rage stacks should allow 13 with team cap bonus");
  expectEqual(r.effect.capBonus.value, 3, "effect cap bonus should come from team");
  expectEqual(Math.round(r.effect.rate * 100) / 100, 1663.4, "13 electro + 13 rage should add both rates");
  assert(r.effect.damage > baseDamage, "13-stack electro effect should exceed 10-stack damage");
  delete window.WUWA.chars.verina.effectCapBonus;

  resetTeam(["jinhsi", "chisa"]);
  __T.state.effectCalc = { key: "havocBane", providerIdx: 1, stacks: 6, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 3, "havoc bane should clamp to 3 without Chisa outro cap");
  expectEqual(r.effect.defShred, 6, "havoc bane should display 3-stack defense shred");
  expectEqual(r.defense.effectDefShred, 6, "havoc bane defense shred should be tracked separately from manual defense shred");
  expectEqual(r.defense.totalDefShred, 6, "havoc bane defense shred should contribute to total defense shred");
  __T.render();
  assert(!String(board.innerHTML).includes("手动减防%"), "defense shred field label should not imply the whole field is manual");
  assert(String(board.innerHTML).includes("减防%"), "defense shred field should keep a concise label");
  assert(!String(board.innerHTML).includes("自动+6%"), "defense shred field should not split automatic effect defense shred into a badge");
  assert(/data-key="defShred"[^>]*data-auto="6"[^>]*value="6"/.test(String(board.innerHTML)), "defense shred field should display automatic effect defense shred in the input total");
  const noHavocDefFactor = r.defFactor;
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  r = __T.compute();
  expectEqual(r.effect.stacks, 6, "havoc bane should allow 6 with Chisa outro cap");
  expectEqual(r.effect.defShred, 12, "havoc bane should display 6-stack defense shred");
  assert(r.defFactor > noHavocDefFactor, "havoc bane defense shred should affect normal damage defense factor");
  assert(r.effect.damage == null, "havoc bane should not produce damage");

  resetTeam(["zani", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "lightNoise", stacks: 13, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 13, "light noise should allow 13 with Chisa outro cap");
  __T.state.effectCalc.stacks = 0;
  r = __T.compute();
  expectEqual(r.effect.damage, 0, "zero-stack light noise should deal zero effect damage");

  resetTeam(["ciaccona", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", stacks: 9, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 9, "wind erosion should allow 9 with Chisa outro cap");

  resetTeam(["cartethyia", "chisa"]);
  __T.state.slots[0].seq = 2;
  __T.state.slots[0].toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 9, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 9, "Cartethyia sequence 2 and Chisa outro cap bonuses should stack up to the global wind erosion cap");
  expectEqual(r.effect.stacks, 9, "Cartethyia should allow 9 wind erosion stacks when both cap bonuses are active");

  resetTeam(["cartethyia"]);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 6, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 3, "Cartethyia base wind erosion cap should be 3 at sequence 0");
  expectEqual(r.effect.stacks, 3, "Cartethyia wind erosion stacks should clamp to 3 at sequence 0");
  const erosionExtra = buff(__T.state.slots[0], "b_erosion_extra_4");
  assert(!__T.buffStatus(__T.state.slots[0], 0, erosionExtra).applies, "Cartethyia should not satisfy 4-stack erosion bonuses when raw input exceeds a 3-stack cap");
  __T.state.slots[0].seq = 2;
  r = __T.compute();
  expectEqual(r.effect.cap, 3, "Cartethyia sequence 2 cap bonus should still require Manifested state");
  __T.state.slots[0].toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  r = __T.compute();
  expectEqual(r.effect.cap, 6, "Cartethyia sequence 2 should raise wind erosion cap to 6 in Manifested state");
  expectEqual(r.effect.stacks, 6, "Cartethyia sequence 2 should allow 6 wind erosion stacks in Manifested state");
  assert(__T.buffStatus(__T.state.slots[0], 0, erosionExtra).applies, "Cartethyia should satisfy 4-stack erosion bonuses after the cap is actually raised");
  __T.state.effectCalc.stacks = 0;
  r = __T.compute();
  expectEqual(r.effect.damage, 0, "zero-stack wind erosion should deal zero effect damage");

  resetTeam(["buling", "chisa"]);
  __T.state.effectCalc = { key: "electro", stacks: 10, electroRageStacks: 0, deepen: 0 };
  __T.state.slots[1].seq = 6;
  __T.state.slots[1].toggles["stateChoice_虚无绞痕"] = "虚无绞痕·终焉";
  r = __T.compute();
  expectEqual(r.effect.buffDeepen, 30, "Chisa 6-chain should deepen all abnormal effect damage");
}

function effectPanelVisibility() {
  resetTeam();
  __T.render();
  assert(!String(board.innerHTML).includes('data-act="effect-key"'), "team without effect source should hide effect calculator");
  assert(String(board.innerHTML).includes("offset-calc"), "team without offset specialists should still show Tune Break calculator");

  resetTeam(["buling"]);
  __T.state.effectCalc = { key: "electro", stacks: 10, electroRageStacks: 3, deepen: 0 };
  __T.render();
  const html = String(board.innerHTML);
  assert(html.includes('data-act="effect-key"'), "team with effect source should show effect calculator");
  assert(html.includes("爆发层数"), "electro effect calculator should show electro rage stacks");
  assert(html.includes("效应/爆发上限 10 层"), "electro effect calculator should show shared flare/rage cap");
  const electroEffectSelect = html.match(/<select data-act="effect-key">([\s\S]*?)<\/select>/);
  assert(electroEffectSelect && electroEffectSelect[1].includes(">电磁效应<"), "Chinese effect selector should localize effect names");
  assert(!electroEffectSelect[1].includes(">electro<"), "Chinese effect selector should not expose effect keys");

  resetTeam(["cartethyia"]);
  __T.state.effectCalc = { key: "windErosion", stacks: 3, deepen: 0 };
  __T.render();
  const cartethyiaEffectSelect = String(board.innerHTML).match(/<select data-act="effect-key">([\s\S]*?)<\/select>/);
  assert(cartethyiaEffectSelect, "Cartethyia should render effect selector");
  const options = [...cartethyiaEffectSelect[1].matchAll(/value="([^"]+)"/g)].map((m) => m[1]);
  expectEqual(options.join(","), "none,windErosion", "Cartethyia-only team should only offer wind erosion effect");
  assert(String(board.innerHTML).includes("上限 3 层"), "Cartethyia-only effect calculator should show 3-stack wind erosion cap");

  resetTeam(["cartethyia", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 6, deepen: 0 };
  __T.render();
  const capBonusHTML = String(board.innerHTML);
  assert(capBonusHTML.includes("上限=3层+千咲延奏3层=6层"), "effect cap bonus should render as base plus source equals final cap");
  assert(!capBonusHTML.includes("effect-cap-toggle"), "effect cap bonus should not render a separate control-row reminder");

  __T.state.slots[0].seq = 2;
  __T.state.slots[0].toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  __T.state.effectCalc.stacks = 9;
  __T.render();
  assert(String(board.innerHTML).includes("上限=3层+卡提希娅2链3层+千咲延奏3层=9层"), "multiple cap bonuses should render as an additive cap equation");
}

function modalEffectAndOffsetControlRegressions() {
  const effectOptions = () => {
    __T.render();
    const match = String(board.innerHTML).match(/<select data-act="effect-key">([\s\S]*?)<\/select>/);
    return match ? [...match[1].matchAll(/value="([^"]+)"/g)].map((m) => m[1]) : [];
  };

  resetTeam(["denia"]);
  let slot = __T.state.slots[0];
  slot.skill = "bd_banish2";
  __T.render();
  assert(String(board.innerHTML).includes('data-act="char-resource"') && String(board.innerHTML).includes('data-key="darkCore"'), "Denia Dark Core should render as a persistent character resource control");
  assert(String(board.innerHTML).includes('data-key="voidParticle"'), "Denia Void Particle should render as a persistent character resource control");
  assert(String(board.innerHTML).includes("黯核 (0-3)"), "Denia Dark Core control should show the base cap before sequence 3");
  assert(String(board.innerHTML).includes("虚质粒子 (0-100)"), "Denia Void Particle control should show its numeric cap");
  let r = __T.compute();
  expectEqual(r.layers, 3, "Denia Dark Core should default to its current cap");
  expectEqual(Math.round(r.panel.baseMult * 100) / 100, 562.01, "Denia Banish stage 2 should scale from the persistent Dark Core value");
  slot.resources.darkCore = 1;
  r = __T.compute();
  expectEqual(r.layers, 1, "Denia Banish stage 2 should read Dark Core from the character resource");
  expectEqual(Math.round(r.panel.baseMult * 100) / 100, 262.01, "Denia Banish stage 2 should update when Dark Core changes");
  slot.resources.darkCore = 0;
  r = __T.compute();
  assert(r.resourceBlocked, "Denia Banish stage 2 should be blocked at zero Dark Core");
  slot.seq = 3;
  slot.resources.darkCore = 5;
  slot.toggles[__T.stateChoiceKey("形态")] = "布景之形";
  slot.skill = "sc_na4";
  r = __T.compute();
  expectEqual(r.sk.id, "c3_sc_na4_dark_core", "Denia sequence 3 full Dark Core should replace Stagecraft basic attack stage 4");
  __T.render();
  assert(String(board.innerHTML).includes("黯核 (0-5)"), "Denia Dark Core cap should rise to 5 at sequence 3");
  slot.resources.darkCore = 4;
  r = __T.compute();
  expectEqual(r.sk.id, "sc_na4", "Denia sequence 3 non-full Dark Core should keep the normal Stagecraft basic attack stage 4");

  resetTeam(["denia"]);
  slot = __T.state.slots[0];
  slot.toggles[__T.stateChoiceKey("形态")] = "幻灭之形";
  slot.skill = "void_bd_na1";
  slot.resources.voidParticle = 0;
  r = __T.compute();
  expectEqual(r.selectedSk.id, "bd_na1", "Denia Void Particle selection should map to fallback at zero resource");
  expectEqual(r.sk.id, "bd_na1", "Denia Void Particle basic should fall back when no Void Particle is available");
  slot.resources.voidParticle = 1;
  r = __T.compute();
  expectEqual(r.sk.id, "void_bd_na1", "Denia Void Particle basic should calculate when Void Particle is available");

  resetTeam(["denia"]);
  slot = __T.state.slots[0];
  const deniaTargetState = stateDefFor(window.WUWA.chars.denia, "目标集谐状态");
  const deniaInterference = stateOptionValueFor(window.WUWA.chars.denia, "目标集谐·干涉");
  slot.toggles[__T.stateChoiceKey("共鸣模态")] = "共鸣模态·集谐";
  assert(!effectOptions().includes("fusion"), "Denia Tune Strain mode should not expose Fusion effect damage");
  assert(!String(board.innerHTML).includes(`data-key="${deniaTargetState.id}"`), "Denia offset/interference target control should move out of the left state area");
  let offsetValues = new Set((__T.compute().offset.entries || []).map((entry) => entry.optionValue));
  assert(offsetValues.has(`state|${deniaTargetState.id}|${deniaInterference}`), "Denia Tune Strain Interference should stay available in the offset-system calculator");
  slot.toggles[__T.stateChoiceKey("共鸣模态")] = "共鸣模态·聚爆";
  assert(effectOptions().includes("fusion"), "Denia Fusion mode should expose Fusion effect damage");

  resetTeam(["aemeath"]);
  slot = __T.state.slots[0];
  const aemeathTargetState = stateDefFor(window.WUWA.chars.aemeath, "目标震谐状态");
  const aemeathTrailState = stateDefFor(window.WUWA.chars.aemeath, "目标震谐轨迹");
  const aemeathFusionTrailState = stateDefFor(window.WUWA.chars.aemeath, "目标聚爆轨迹");
  assert(!effectOptions().includes("fusion"), "Aemeath Tune Rupture mode should not expose Fusion effect damage");
  assert(!String(board.innerHTML).includes(`data-key="${aemeathTargetState.id}"`), "Aemeath offset/interference target control should move out of the left state area");
  assert(String(board.innerHTML).includes(`data-key="${aemeathTrailState.id}"`), "Aemeath Tune Rupture trail control should remain visible");
  offsetValues = new Set((__T.compute().offset.entries || []).map((entry) => entry.optionValue));
  assert(offsetValues.has("response|tune_starburst"), "Aemeath Tune Rupture response should stay available in the offset-system calculator");
  slot.toggles[__T.stateChoiceKey("共鸣模态")] = "共鸣模态·聚爆";
  assert(effectOptions().includes("fusion"), "Aemeath Fusion mode should expose Fusion effect damage");
  assert(String(board.innerHTML).includes(`data-key="${aemeathFusionTrailState.id}"`), "Aemeath Fusion trail control should remain visible");

  resetTeam(["lucilla"]);
  slot = __T.state.slots[0];
  assert(effectOptions().includes("frost"), "Lucilla Frost mode should expose Frost effect damage");
  slot.toggles[__T.stateChoiceKey("共鸣模态")] = "共鸣模态·声骸";
  assert(!effectOptions().includes("frost"), "Lucilla Echo mode should not expose Frost effect damage");
}

function roverFormsAreSeparateCharacters() {
  const expected = [
    ["rover_spectro", "漂泊者·衍射", "spectro", "lightNoise", "emerald_of_genesis"],
    ["rover_havoc", "漂泊者·湮灭", "havoc", null, "emerald_of_genesis"],
    ["rover_aero", "漂泊者·气动", "aero", null, "bloodpacts_pledge"],
  ];
  expected.forEach(([id, name, element, effect, weaponId]) => {
    const c = window.WUWA.chars[id];
    assert(c, `${id} should be registered`);
    expectEqual(c.name, name, `${id} name`);
    expectEqual(c.element, element, `${id} element`);
    expectEqual(c.signatureWeaponId, weaponId, `${id} signature weapon`);
    expectEqual(c.defaultWeaponId, weaponId, `${id} default weapon`);
    if (effect) assert((c.effectTypes || []).includes(effect), `${id} should provide ${effect}`);
    resetTeam([id]);
    expectEqual(__T.state.slots[0].weapon, weaponId, `${id} should equip its default weapon`);
    const r = __T.compute();
    assert(r.expected > 0, `${id} default skill should calculate positive damage`);
  });

  resetTeam(["rover_aero"]);
  __T.render();
  assert(!String(board.innerHTML).includes('data-act="effect-key"'), "Aero Rover alone should not expose wind erosion without an existing abnormal-effect source");

  resetTeam(["ciaccona", "rover_aero"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_cap", true);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 9, deepen: 0 };
  const r = __T.compute();
  expectEqual(r.effect.cap, 9, "Aero Rover outro should raise an existing wind erosion provider cap to 9 after confirmation");
  expectEqual(r.effect.stacks, 9, "Aero Rover outro should allow an existing wind erosion provider to reach 9 stacks after confirmation");
  __T.render();
  assert(String(board.innerHTML).includes("上限=6层+漂泊者·气动延奏3层=9层"), "Aero Rover cap bonus should render as an additive cap equation");
}

function cyberpunkCharacterRegressions() {
  resetTeam(["lucy"]);
  let slot = __T.state.slots[0];
  expectEqual(slot.echo.combo, "split122", "Lucy should default to 1+2+2 echo mode");
  expectEqual(`${slot.echo.primary},${slot.echo.secondary},${slot.echo.tertiary}`, "24,5,8", "Lucy should default to Shadow of Shattered Dreams + Celestial Light + Lingering Tunes echo pieces");
  __T.render();
  const lucyHtml = String(board.innerHTML);
  assert(lucyHtml.includes("team-gear-set-icons") && !lucyHtml.includes('data-act="etertiary"'), "Lucy should render fixed compact 1+2+2 echo set icons");
  assert(!lucyHtml.includes("套装（1+2+2）"), "Lucy fixed 1+2+2 echo set should not render as visible text");
  let echoBuffIds = new Set(__T.slotBuffs(slot).map((b) => b.id));
  assert(echoBuffIds.has("son_24_shadow_of_shattered_dreams_basic") && echoBuffIds.has("son_24_shadow_of_shattered_dreams_heavy"), "Lucy should include Shadow of Shattered Dreams one-piece effects");
  assert(echoBuffIds.has("son_5_p2_0") && echoBuffIds.has("son_8_p2_0"), "Lucy should include Spectro and ATK two-piece effects");
  assert(__T.buffStatus(slot, 0, buff(slot, "son_24:reminiscence_nightmare_adam_smasher_se_reminiscence_nightmare_adam_smasher_crit")).applies, "Lucy should receive Reminiscence - Nightmare: Adam Smasher lead crit bonus");
  let skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(!skillIds.has("skill_pulse_c2"), "Lucy chain 2 extra Pulse hit should be hidden at sequence 0");
  slot.seq = 2;
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("skill_pulse_c2"), "Lucy chain 2 extra Pulse hit should unlock at sequence 2");
  slot.seq = 6;
  slot.skill = "break_data";
  slot.toggles[__T.stateChoiceKey("骇破目标状态")] = "目标骇破·干涉";
  let r = __T.compute();
  expectEqual(r.sk.damageType, "hackDmg", "Lucy hack response should use the unified hack-break damage type");
  expectEqual(r.damageModel, "harmonyResponse", "Lucy hack response should use the harmony-response formula branch");
  expectEqual(r.normal, r.critHit, "Lucy hack response should not crit");
  expectEqual(r.normal, r.expected, "Lucy hack response expected damage should equal non-crit damage");
  expectEqual(__T.buffStatus(slot, 0, buff(slot, "son_5_p2_0")).gated, "谐度响应伤害不吃攻击/普通伤害加成", "Lucy Spectro two-piece should not apply to hack-break damage");
  assert(__T.buffStatus(slot, 0, buff(slot, "k6_hack_vuln")).applies, "Lucy chain 6 hack vulnerability should match hack-break damage");

  resetTeam(["rebecca"]);
  slot = __T.state.slots[0];
  expectEqual(slot.echo.combo, "split122", "Rebecca should default to 1+2+2 echo mode");
  expectEqual(`${slot.echo.primary},${slot.echo.secondary},${slot.echo.tertiary}`, "24,3,8", "Rebecca should default to Shadow of Shattered Dreams + Void Thunder + Lingering Tunes echo pieces");
  __T.render();
  const rebeccaHtml = String(board.innerHTML);
  assert(rebeccaHtml.includes("team-gear-set-icons") && !rebeccaHtml.includes('data-act="etertiary"'), "Rebecca should render fixed compact 1+2+2 echo set icons");
  assert(!rebeccaHtml.includes("套装（1+2+2）"), "Rebecca fixed 1+2+2 echo set should not render as visible text");
  echoBuffIds = new Set(__T.slotBuffs(slot).map((b) => b.id));
  assert(echoBuffIds.has("son_24_shadow_of_shattered_dreams_basic") && echoBuffIds.has("son_24_shadow_of_shattered_dreams_heavy"), "Rebecca should include Shadow of Shattered Dreams one-piece effects");
  assert(echoBuffIds.has("son_3_p2_0") && echoBuffIds.has("son_8_p2_0"), "Rebecca should include Electro and ATK two-piece effects");
  assert(__T.buffStatus(slot, 0, buff(slot, "son_24:reminiscence_nightmare_adam_smasher_se_reminiscence_nightmare_adam_smasher_crit")).applies, "Rebecca should receive Reminiscence - Nightmare: Adam Smasher lead crit bonus");
  slot.toggles[__T.stateChoiceKey("模式")] = "模式·猎手";
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("hunt_na1") && !skillIds.has("guts_na1"), "Rebecca Hunter mode should hide Guts-mode skills");
  slot.toggles[__T.stateChoiceKey("小孩子才做选择")] = "小孩子才做选择";
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("hunt_na1") && !skillIds.has("guts_na1"), "Rebecca Choice state should not override the current mode skill filter");
  slot.skill = "hunt_na1";
  assert(__T.buffStatus(slot, 0, buff(slot, "b_mode_hunt")).applies, "Rebecca Hunter bonus should apply in Hunter mode");
  assert(__T.buffStatus(slot, 0, buff(slot, "b_mode_guts")).applies, "Rebecca Choice state should also apply Guts bonus");
  slot.seq = 4;
  assert(__T.buffStatus(slot, 0, buff(slot, "k4_mode_cd")).applies, "Rebecca chain 4 should key off Choice state");
  slot.seq = 6;
  assert(!__T.slotBuffs(slot).some((b) => b.id === "k6_basic_bonus"), "Rebecca chain 6 source-value amplification should not be modeled as flat +40% Basic DMG Bonus");
  slot.skill = "hack_meltdown";
  slot.toggles[__T.stateChoiceKey("目标骇破")] = "目标骇破·干涉";
  r = __T.compute();
  expectEqual(r.sk.damageType, "hackDmg", "Rebecca hack response should use the unified hack-break damage type");
  expectEqual(r.damageModel, "harmonyResponse", "Rebecca hack response should use the harmony-response formula branch");
  expectEqual(r.normal, r.critHit, "Rebecca hack response should not crit");
  expectEqual(r.normal, r.expected, "Rebecca hack response expected damage should equal non-crit damage");
  expectEqual(__T.buffStatus(slot, 0, buff(slot, "b_mode_hunt")).gated, "谐度响应伤害不暴击", "Rebecca crit damage mode buff should not apply to hack-break damage");
  expectEqual(__T.buffStatus(slot, 0, buff(slot, "son_3_p2_0")).gated, "谐度响应伤害不吃攻击/普通伤害加成", "Rebecca Electro two-piece should not apply to hack-break damage");
  const baseHack = r.normal;
  slot.toggles.b_hack_break_amp = true;
  r = __T.compute();
  expectEqual(r.breakAmp, 40, "Rebecca offset buff should add to base hack-break amplification");
  assert(r.normal > baseHack * 1.27, "Rebecca breakAmp buff should increase hack response by the extra 30 points");
  const breakAmpHack = r.normal;
  __T.state.offsetCalc = { key: "response", providerIdx: 0, skillId: "hack_meltdown", stacks: 3, deepen: 0 };
  r = __T.compute();
  expectEqual(r.offset.kind, "response", "Rebecca hack response should also render in the offset-system calculator");
  expectEqual(r.offset.damageType, "hackDmg", "Offset-system calculator should preserve hack-break damage type");
  assert(r.offset.damage > baseHack * 1.27, "Offset-system response damage should include Tune Break Boost");
  slot.echo.fields.attackPct = 200;
  slot.echo.fields.critDamage = 300;
  slot.echo.fields["elem:electro"] = 100;
  __T.state.enemy.finalDmg = 100;
  r = __T.compute();
  expectEqual(r.normal, breakAmpHack, "Hack-break damage should ignore attack, crit damage, element bonus, and manual final damage");
  __T.render();
  assert(String(board.innerHTML).includes("偏移体系"), "Offset-system calculator should render for hack-break characters");
  assert(String(board.innerHTML).includes("骇破响应·熔触"), "Offset-system calculator should list hack response skills");
  assert(String(board.innerHTML).includes("骇破倍率"), "Hack-break offset formula should label the response multiplier as Hack Break");
  assert(String(board.innerHTML).includes("骇破伤害 = 谐度基础值 × 骇破倍率"), "Hack-break offset formula should show the current Hack Break equation");
  assert(String(board.innerHTML).includes("减伤/易伤"), "Hack-break response formula should show the damage-reduction/vulnerability card");
  assert(String(board.innerHTML).includes("<span>抗性系数</span>") && String(board.innerHTML).includes("<span>最终伤害</span>"), "Hack-break response formula should split RES and final damage into separate cards");
  assert(!String(board.innerHTML).includes("抗性/最终"), "Hack-break response formula should not merge RES and final damage into one card");
  assert(String(board.innerHTML).includes("谐度响应伤害按谐度基础值"), "Harmony-response stage note should explain the special formula");
  assert(!String(board.innerHTML).includes('data-key="harmonyBase"'), "More bonuses/debuffs should not expose raw harmony base input");
  assert(String(board.innerHTML).includes("目标Cost"), "Offset-system calculator should expose target Cost selection");
  assert(!String(board.innerHTML).includes('data-act="offset-char-level"'), "Offset-system calculator should not expose player level selection");
  assert(!String(board.innerHTML).includes('data-act="offset-provider"'), "Offset-system calculator should not expose provider selection");
  assert(r.normal > 0, "Rebecca hack response should calculate positive damage");
}

function lynaeCharacterRegressions() {
  resetTeam(["lynae"]);
  const slot = __T.state.slots[0];
  expectEqual(window.WUWA_LANGUAGES.localeData("en-US", "weapons", "spectrum_blaster")?.name, "Spectrum Blaster", "Lynae signature weapon should use its formal English name");
  expectEqual(window.WUWA_LANGUAGES.localeData("en-US", "sonatas", 25)?.name, "Pact of Neonlight Leap", "Lynae sonata should use its formal English name");
  expectEqual(window.WUWA_LANGUAGES.localeData("en-US", "sonatas", 25)?.lead?.echo, "Hyvatia", "Lynae lead echo should use its formal English name");
  expectEqual(slot.weapon, "spectrum_blaster", "Lynae should default to Spectrum Blaster");
  expectEqual(slot.echo.combo, "single5", "Lynae should default to a 5-piece echo set");
  expectEqual(slot.echo.primary, 25, "Lynae should default to Pact of Neonlight Leap");

  slot.toggles[__T.stateChoiceKey("战斗阶段")] = "光学取样";
  let skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("lynae_style_palettes") && !skillIds.has("additive_color"), "Lynae Optical Sampling Stage should hide Kaleidoscopic Parade skills");
  slot.toggles[__T.stateChoiceKey("战斗阶段")] = "绮彩巡游";
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("additive_color") && !skillIds.has("lynae_style_palettes"), "Lynae Kaleidoscopic Parade should hide Optical Sampling Stage skills");

  slot.toggles[__T.stateChoiceKey("共鸣模态")] = "共鸣模态·震谐";
  let r = __T.compute();
  let offsetValues = new Set((r.offset.entries || []).map((entry) => entry.optionValue));
  assert(offsetValues.has("response|tune_rupture_response_spectral"), "Lynae Tune Rupture mode should expose the Tune Rupture response damage entry");
  assert(![...offsetValues].some((value) => String(value).includes("目标震谐状态")), "Lynae Tune Rupture mode should not expose raw Tune Rupture target states in the offset calculator");
  assert(![...offsetValues].some((value) => String(value).includes("目标集谐状态")), "Lynae Tune Rupture mode should hide Tune Strain target states");
  assert(![...offsetValues].some((value) => String(value).includes("共鸣模态")), "Lynae resonance mode should not appear as an offset-system target state");
  slot.toggles[__T.stateChoiceKey("目标震谐状态")] = "目标震谐·干涉";
  __T.syncOffsetFromStateChoice(0, "目标震谐状态", "目标震谐·干涉");
  expectEqual(__T.state.offsetCalc.key, "response", "Selecting Tune Rupture Interference should sync the offset calculator to the response damage entry");
  expectEqual(__T.state.offsetCalc.skillId, "tune_rupture_response_spectral", "Selecting Tune Rupture Interference should sync Spectral Analysis as the offset entry");
  __T.render();
  assert(String(board.innerHTML).includes("谐度破坏增幅"), "Lynae panel should always show Tune Break Boost");
  assert(!String(board.innerHTML).includes('data-key="breakAmp"'), "Tune Break Boost panel row should not render an echo input");

  slot.skill = "tune_rupture_response_spectral_analysis";
  slot.toggles[__T.stateChoiceKey("目标震谐状态")] = "目标震谐·干涉";
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("tune_rupture_response_spectral"), "Lynae Tune Rupture response skill should be selectable after target state confirmation");
  r = __T.compute();
  expectEqual(r.damageModel, "harmonyResponse", "Lynae Tune Rupture Response - Spectral Analysis should use the harmony-response formula branch");
  expectEqual(r.breakAmp, 10, "Lynae should have 10 base Tune Break Boost");
  expectEqual(r.normal, r.critHit, "Lynae Tune Rupture Response - Spectral Analysis should not crit");
  expectEqual(r.normal, r.expected, "Lynae Tune Rupture Response - Spectral Analysis expected damage should equal non-crit damage");
  expectEqual(__T.buffStatus(slot, 0, buff(slot, "b_liberation_final")).gated, "需明确作用于谐度响应伤害", "Lynae generic final damage buff should not apply to Tune Rupture Response - Spectral Analysis");
  const baseResponse = r.normal;
  slot.echo.fields.attackPct = 200;
  slot.echo.fields.critDamage = 300;
  slot.echo.fields["elem:spectro"] = 100;
  __T.state.enemy.finalDmg = 100;
  r = __T.compute();
  expectEqual(r.normal, baseResponse, "Lynae Tune Rupture Response - Spectral Analysis should ignore attack, crit damage, element bonus, and manual final damage");
  slot.toggles.b_visual_break = true;
  r = __T.compute();
  expectEqual(r.breakAmp, 50, "Lynae Basic Attack - Visual Impact buff should add to base Tune Break Boost after confirmation");
  assert(r.normal > baseResponse * 1.36, "Lynae Tune Break Boost buff should increase Tune Rupture Response - Spectral Analysis by the extra 40 points");
  __T.state.offsetCalc = { key: "response", providerIdx: 0, skillId: "tune_rupture_response_spectral", stacks: 3, deepen: 0 };
  r = __T.compute();
  expectEqual(r.offset.kind, "response", "Lynae Tune Rupture response should render in the offset-system calculator");
  expectEqual(r.offset.formulaKind, "tuneRupture", "Lynae Tune Rupture response should use the Tune Rupture offset formula kind");
  assert(r.offset.damage > baseResponse * 1.36, "Offset-system Tune Rupture response should include Tune Break Boost");
  __T.render();
  assert(String(board.innerHTML).includes("震谐倍率"), "Tune Rupture offset formula should label the response multiplier as Tune Rupture");
  assert(String(board.innerHTML).includes("震谐伤害 = 谐度基础值 × 震谐倍率"), "Tune Rupture offset formula should show the current Tune Rupture equation");
  assert(String(board.innerHTML).includes("<span>抗性系数</span>") && String(board.innerHTML).includes("<span>最终伤害</span>"), "Tune Rupture response formula should split RES and final damage into separate cards");
  __T.state.offsetCalc = { key: "tuneBreak", providerIdx: 0, skillId: null, stateId: null, stateValue: null, stacks: 3, deepen: 0 };
  r = __T.compute();
  expectEqual(r.offset.kind, "tuneBreak", "Tune Break damage should be selectable in the offset-system calculator");
  assert(r.offset.damage > 0, "Tune Break damage should calculate as an independent offset-system result");
  __T.render();
  assert(!String(board.innerHTML).includes("谐度破坏等级倍率%"), "Tune Break level multiplier should not render as a control field");
  assert(!String(board.innerHTML).includes('data-act="offset-rate"'), "Tune Break level multiplier should not render a manual input");
  assert(!String(board.innerHTML).includes('data-act="offset-deepen"'), "Offset calculator should not render a manual deepen input");
  assert(!String(board.innerHTML).includes('data-act="offset-provider"'), "Offset calculator should not render a provider selector");
  assert(String(board.innerHTML).includes('data-act="offset-cost"'), "Offset calculator should render target Cost selector");
  assert(!String(board.innerHTML).includes('data-act="offset-char-level"'), "Offset calculator should not render player level selector");
  assert(String(board.innerHTML).includes("固定等级参数"), "Tune Break formula should explain the fixed level multiplier in formula details");
  assert(String(board.innerHTML).includes("<span>减伤/易伤</span>") && String(board.innerHTML).includes("<span>最终伤害</span>") && String(board.innerHTML).includes("<span>固定系数</span>"), "Tune Break formula should expose damage reduction, final damage, and fixed 0.8 as cards");
  assert(!String(board.innerHTML).includes("抗性/固定"), "Tune Break formula should not label fixed 0.8 as a RES factor");

  slot.skill = "visual_impact";
  slot.toggles[__T.stateChoiceKey("共鸣模态")] = "共鸣模态·集谐";
  r = __T.compute();
  offsetValues = new Set((r.offset.entries || []).map((entry) => entry.optionValue));
  const lynaeStrainState = stateDefFor(window.WUWA.chars.lynae, "目标集谐状态");
  const lynaeStrainInterfered = stateOptionValueFor(window.WUWA.chars.lynae, "目标集谐·干涉");
  const lynaeStrainOffset = stateOptionValueFor(window.WUWA.chars.lynae, "目标集谐·偏移");
  assert(offsetValues.has(`state|${lynaeStrainState.id}|${lynaeStrainInterfered}`), "Lynae Tune Strain mode should expose Tune Strain Interfered as the offset gain entry");
  assert(!offsetValues.has(`state|${lynaeStrainState.id}|${lynaeStrainOffset}`), "Lynae Tune Strain mode should not expose raw Tune Strain Offset in the offset calculator");
  assert(![...offsetValues].some((value) => String(value).includes("目标震谐状态")), "Lynae Tune Strain mode should hide Tune Rupture target states");
  assert(![...offsetValues].some((value) => String(value).includes("共鸣模态")), "Lynae resonance mode entries should stay out of the offset-system dropdown");
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(!skillIds.has("tune_rupture_response_spectral"), "Lynae Tune Strain mode should hide Tune Rupture response skill");
  slot.toggles[__T.stateChoiceKey(lynaeStrainState.id)] = lynaeStrainInterfered;
  const strainBuff = buff(slot, "b_tune_strain_response");
  delete slot.toggles[`stk_${strainBuff.stackGroup}`];
  delete slot.toggles.b_tune_strain_response;
  __T.state.offsetCalc = { key: "state", providerIdx: 0, skillId: null, stateId: lynaeStrainState.id, stateValue: lynaeStrainInterfered, stacks: 0, deepen: 0 };
  const noInterferenceDamage = __T.compute().expected;
  __T.state.offsetCalc.stacks = 3;
  r = __T.compute();
  expectEqual(r.offset.kind, "state", "Tune Strain Interfered should render as an offset-system state entry");
  expectEqual(r.offset.formulaKind, "coherenceInterference", "Tune Strain Interfered should use the coherence-interference formula kind");
  assert(r.offset.valid && r.offset.status === "已确认", "Confirmed Tune Strain Interfered state should be reflected in the offset-system calculator");
  expectEqual(r.offset.finalDmgGain, 18, "Tune Strain Interfered formula should scale stacks by Tune Break Boost");
  expectEqual(r.offsetFinalDmg, 18, "Tune Strain Interfered final damage gain should feed the main damage formula");
  assert(r.expected > noInterferenceDamage, "Increasing Tune Strain Interfered stacks should increase the main selected damage");
  slot.toggles[`stk_${strainBuff.stackGroup}`] = 3;
  slot.toggles.b_tune_strain_response = true;
  r = __T.compute();
  assert(__T.buffStatus(slot, 0, strainBuff).applies, "Lynae Tune Strain - Interfered final damage buff should apply after target state confirmation");
  assert(__T.buffFormulaText(slot, strainBuff, 0).includes("+18%"), "Lynae Tune Strain - Interfered should scale 3 stacks from active Tune Break Boost");
  expectEqual(r.totals.finalDmg, 18, "Offset-system Tune Strain final damage should not double count the legacy buff card value");
  __T.render();
  assert(String(board.innerHTML).includes("最终伤害提升 = 3层 × 50点 × 0.12% = <b>18%</b>"), "Tune Strain Interfered formula should be visible in the offset-system calculator");

  resetTeam(["luukherssen", "lynae", "rebecca"]);
  const output = __T.state.slots[0];
  const support = __T.state.slots[1];
  support.toggles.b_visual_break = true;
  __T.state.slots[2].toggles.b_hack_break_amp = true;
  const p5Base = buff(support, "son_25_pact_of_neonlight_leap_atk_base");
  const p5Dynamic = buff(support, "son_25_pact_of_neonlight_leap_atk_break_amp");
  support.toggles[p5Base.id] = true;
  let withoutDynamic = __T.compute();
  support.toggles[p5Dynamic.id] = true;
  let withDynamic = __T.compute();
  assert(__T.buffStatus(support, 1, p5Dynamic).applies, "Pact of Neonlight Leap 5pc dynamic attack buff should apply from support after confirmation");
  expectEqual(__T.buffFormulaText(support, p5Dynamic, 1), "+15%（上限15%）", "Pact of Neonlight Leap 5pc dynamic attack should scale from output breakAmp and cap at 15%");
  expectEqual(Math.round((withDynamic.rawTotals.attackPercent - withoutDynamic.rawTotals.attackPercent) * 100) / 100, 15, "Pact of Neonlight Leap 5pc dynamic attack should add 15 attack percent to the output");
}

function hiyukiCharacterRegressions() {
  resetTeam(["hiyuki"]);
  const slot = __T.state.slots[0];
  const c = window.WUWA.chars.hiyuki;
  const attachmentEvents = (c.skills || []).flatMap((sk) => sk.triggerEvents || []).filter((event) => event === "applyGlacioChafe");
  assert(!attachmentEvents.length, "Hiyuki Glacio Chafe attachment should not be modeled as a current-hit trigger event");

  __T.state.effectCalc = { key: "frost", providerIdx: 0, stacks: 10, deepen: 0 };
  __T.setBuffToggle(slot, 0, "b_snow_rust_cd", true);
  const snowRust = buff(slot, "b_snow_rust_cd");
  slot.toggles[`stk_${snowRust.stackGroup}`] = 2;
  let r = __T.compute();
  expectEqual(Math.round(r.effect.extraRate * 100) / 100, 102, "Hiyuki Snow Rust 2 stacks should add 102% extra Glacio Bite rate");

  slot.seq = 3;
  r = __T.compute();
  expectEqual(Math.round(r.effect.extraRate * 100) / 100, 590, "Hiyuki S3 should increase the extra Glacio Bite rate by 488%");

  slot.toggles[`stk_${snowRust.stackGroup}`] = 3;
  slot.seq = 5;
  const beforeS6 = __T.compute().effect.damage;
  slot.seq = 6;
  r = __T.compute();
  expectEqual(r.effect.finalDmg, 25, "Hiyuki S6 Snow Rust 3 stacks should add 25% effect final damage");
  assert(r.effect.damage > beforeS6 * 1.24, "Hiyuki S6 effect final damage should increase Glacio Bite damage");

  const frostWeapon = buff(slot, "w_e3");
  assert(frostWeapon.effect === "frost", "Hiyuki signature weapon effect damage deepen should target Frost effect damage");
  let st = __T.buffStatus(slot, 0, frostWeapon);
  assert(st.precondition && !st.gated && !st.applies, "Hiyuki signature effect deepen should require manual post-attachment confirmation");
  __T.setBuffToggle(slot, 0, frostWeapon.id, true);
  r = __T.compute();
  assert(r.effect.buffDeepen >= 80, "Confirmed Hiyuki signature effect deepen should feed the Frost effect calculation");

  resetTeam(["hiyuki"]);
  const snowCrit = buff(__T.state.slots[0], "son_30_wishes_of_quiet_snowfall_crit");
  st = __T.buffStatus(__T.state.slots[0], 0, snowCrit);
  assert(st.precondition && !st.applies, "Wishes of Quiet Snowfall crit should not auto-apply to the Resonance Liberation hit that creates it");
}

function newCharacterWeaponRegressions() {
  resetTeam(["aemeath"]);
  let slot = __T.state.slots[0];
  slot.skill = "lib_overdrive";
  let defIgnore = buff(slot, "w_e1");
  let resIgnore = buff(slot, "w_e2");
  assert(defIgnore && defIgnore.zone === "defIgnore" && defIgnore.value === 32 && defIgnore.damageType === "resonanceLiberation", "Aemeath signature weapon should include Liberation defense ignore");
  assert(resIgnore && resIgnore.zone === "resShred" && resIgnore.value === 10 && resIgnore.element === "fusion", "Aemeath signature weapon should include Fusion resistance ignore");
  let st = __T.buffStatus(slot, 0, defIgnore);
  assert(st.precondition && !st.applies, "Aemeath signature post-offset defense ignore should require manual confirmation");
  __T.setBuffToggle(slot, 0, defIgnore.id, true);
  __T.setBuffToggle(slot, 0, resIgnore.id, true);
  let r = __T.compute();
  expectEqual(r.rawTotals.defIgnore, 32, "Confirmed Aemeath signature weapon should feed defense ignore");
  expectEqual(r.rawTotals.resShred, 10, "Confirmed Aemeath signature weapon should feed Fusion resistance ignore");
  __T.render();
  let html = String(board.innerHTML);
  assert(/data-key="res"[^>]*data-auto="0"[^>]*value="10"/.test(html), "attribute resistance input should keep base resistance separate from resistance shred");
  assert(/data-key="resShred"[^>]*data-auto="10"[^>]*value="10"/.test(html), "resistance shred input should display active resistance shred as the total");
  assert(/data-key="defIgnore"[^>]*data-auto="32"[^>]*value="32"/.test(html), "defense ignore field should appear when an active buff provides defense ignore");
  assert(!html.includes('data-key="defShred"'), "defense shred field should stay folded when no active source or manual value exists");
  assert(!html.includes('data-key="charLevel"'), "target controls should not expose player level input");
  assert(html.indexOf('data-key="enemyLevel"') < html.indexOf('data-key="res"'), "enemy level should render before attribute resistance");
  assert(html.indexOf('data-key="res"') < html.indexOf('data-key="resShred"'), "attribute resistance and resistance shred fields should render next to each other");
  assert(html.indexOf('data-key="resShred"') < html.indexOf('data-key="defIgnore"'), "active extra target fields should render after resistance shred");
  assert(html.includes("属性抗性%"), "resistance field should use attribute resistance wording");
  assert(html.includes("属性减抗%"), "resistance shred field should use attribute shred wording");
  assert(html.includes('data-act="target-extra-toggle"'), "folded target extra controls should keep an expansion control");
  assert(html.includes("--metric-extra-columns:9"), "folded target controls should reserve full expanded column widths");
  assert(html.includes("抗10% + 减抗10%"), "resistance factor card should display base resistance and total shred sources");
  assert(!html.includes("抗10% + 减抗10% ="), "resistance factor card should not repeat the effective resistance after an equals sign");

  resetTeam(["lucilla"]);
  slot = __T.state.slots[0];
  slot.skill = "letting_go_frost";
  const glacio = buff(slot, "w_e2");
  assert(glacio && glacio.zone === "damageBonus" && glacio.value === 30 && glacio.element === "glacio", "Lucilla signature weapon should include post-Frost Glacio damage bonus");
  st = __T.buffStatus(slot, 0, glacio);
  assert(st.precondition && !st.applies, "Lucilla signature post-Frost Glacio bonus should require manual confirmation");
  const beforeGlacio = __T.compute().rawTotals.damageBonus;
  __T.setBuffToggle(slot, 0, glacio.id, true);
  r = __T.compute();
  expectEqual(r.rawTotals.damageBonus - beforeGlacio, 30, "Confirmed Lucilla signature weapon should feed Glacio damage bonus");
}

function modernEchoDefaultRegressions() {
  const expected = [
    ["phrolova", "split32", 19, 6, "19:nightmare_hecate"],
    ["galbrena", "split32", 22, 2, "22:corrosaurus"],
    ["qiuyuan", "split32", 21, 4, "21:reminiscence_fenrico"],
    ["augusta", "split32", 20, 3, null],
    ["iuno", "split32", 20, 4, null],
    ["chisa", "split32", 23, 6, null],
    ["cartethyia", "single5", 17, null, null],
    ["mornye", "single5", 33, null, "33:reactor_husk"],
    ["sigrika", "single5", 29, null, "29:nameless_explorer"],
  ];
  expected.forEach(([id, combo, primary, secondary, lead]) => {
    const e = window.WUWA_EQUIPMENT.defaultEchoForChar(window.WUWA.chars[id]);
    expectEqual(e.combo, combo, `${id} default echo combo`);
    expectEqual(e.primary, primary, `${id} default primary echo set`);
    expectEqual(e.secondary, secondary, `${id} default secondary echo set`);
    if (lead) expectEqual(e.lead, lead, `${id} default lead echo`);
  });
}

function p1WeaponEffectRegressions() {
  let e = weaponEffect("和光回唱", "e3");
  assert(e.zone === "amplify" && e.effect === "lightNoise" && e.value === 30, "Phoebe signature weapon should include outro Light Noise effect deepen");

  e = weaponEffect("海的呢喃", "e2");
  assert(e.zone === "resShred" && e.element === "havoc" && e.value === 12, "Cantarella signature weapon should include second-layer Havoc resistance ignore");

  e = weaponEffect("焰光裁定", "e1");
  assert(e.zone === "defIgnore" && e.value === 8, "Zani signature weapon should include basic-triggered defense ignore");
  e = weaponEffect("焰光裁定", "e2");
  assert(e.zone === "amplify" && e.effect === "lightNoise" && e.value === 50, "Zani signature weapon should include direct Light Noise effect deepen");

  e = weaponEffect("林间的咏叹调", "e1");
  assert(e.zone === "damageBonus" && e.element === "aero" && e.value === 24, "Ciaccona signature weapon should include post-erosion Aero damage bonus");
  e = weaponEffect("林间的咏叹调", "e2");
  assert(e.zone === "resShred" && e.element === "aero" && e.requiresEffectStacks && e.requiresEffectStacks.effect === "windErosion", "Ciaccona signature weapon should include Wind Erosion-gated Aero resistance shred");

  e = weaponEffect("焰痕", "e1");
  assert(e.zone === "typeBonus" && e.damageType === "resonanceLiberation" && e.value === 24, "Lupa signature weapon should include Liberation damage bonus");
  e = weaponEffect("焰痕", "e2");
  assert(e.zone === "damageBonus" && e.element === "fusion" && e.value === 24, "Lupa signature weapon should include team Fusion damage bonus");

  e = weaponEffect("光影双生", "e1");
  assert(e.zone === "amplify" && e.damageType === "heavy" && e.value === 24, "Galbrena signature weapon should include Heavy damage deepen");
  e = weaponEffect("光影双生", "e2");
  assert(e.zone === "amplify" && e.damageType === "echoSkill" && e.value === 24, "Galbrena signature weapon should include Echo Skill damage deepen");
  e = weaponEffect("光影双生", "e3");
  assert(e.zone === "defIgnore" && e.value === 8, "Galbrena signature weapon should include dual-window defense ignore");

  e = weaponEffect("裁竹", "e1");
  assert(e.zone === "typeBonus" && e.damageType === "heavy" && e.maxStacks === 2 && e.value === 60, "Qiuyuan signature weapon should store Xiezhu Heavy bonus as full two-stack value");
  e = weaponEffect("裁竹", "e2");
  assert(e.zone === "typeBonus" && e.damageType === "echoSkill" && e.value === 20, "Qiuyuan signature weapon should include team Echo Skill damage bonus");

  e = weaponEffect("宙算仪轨", "e1");
  assert(e.zone === "defensePercent" && e.value === 16 && e.defaultActive === true, "Mornye signature weapon should include static defense percent");

  e = weaponEffect("白昼之脊", "e1");
  assert(e.zone === "damageBonus" && e.element === "spectro" && e.value === 20, "Luuk Herssen signature weapon should include Spectro damage bonus");
  e = weaponEffect("白昼之脊", "e2");
  assert(e.zone === "amplify" && e.damageType === "basic" && e.value === 20, "Luuk Herssen signature weapon should include Basic damage deepen");
  e = weaponEffect("白昼之脊", "e3");
  assert(e.zone === "defIgnore" && e.damageType === "basic" && e.value === 10, "Luuk Herssen signature weapon should include Basic defense ignore");

  e = weaponEffect("昭日译注", "e1");
  assert(e.zone === "amplify" && e.damageType === "echoSkill" && e.value === 32, "Sigrika signature weapon should include Echo Skill damage deepen");
  e = weaponEffect("昭日译注", "e2");
  assert(e.zone === "defIgnore" && e.element === "aero" && !e.damageType && e.value === 10, "Sigrika signature weapon should include Aero defense ignore");

  e = weaponEffect("蜃影", "e1");
  assert(e.zone === "damageBonus" && e.element === "spectro" && e.maxStacks === 2 && e.value === 40, "Lucy signature weapon should include stacked Spectro damage bonus");
  e = weaponEffect("蜃影", "e2");
  assert(e.zone === "amplify" && e.damageType === "heavy" && e.value === 30, "Lucy signature weapon should include Heavy damage deepen");
  e = weaponEffect("蜃影", "e3");
  assert(e.zone === "defIgnore" && e.damageType === "heavy" && e.value === 10, "Lucy signature weapon should include Heavy defense ignore");

  resetTeam(["phoebe"]);
  let slot = __T.state.slots[0];
  let b = buff(slot, "w_e3");
  assert(b.scope === "team" && b.triggerOutro === true, "Phoebe signature outro effect should convert to a team outro buff");

  resetTeam(["lupa"]);
  slot = __T.state.slots[0];
  b = buff(slot, "w_e2");
  assert(b.scope === "team", "Lupa signature extended Fusion bonus should convert to team scope");

  resetTeam(["mornye"]);
  slot = __T.state.slots[0];
  b = buff(slot, "w_e1");
  assert(__T.buffStatus(slot, 0, b).applies, "Mornye signature static defense percent should apply by default");
}

function iconAssetsUseSonataSets() {
  const assets = window.WUWA_ICON_ASSETS || {};
  assert(assets.sonatas && !assets.echoes, "icon assets should use sonata set icons, not lead echo icons");
  const missing = sonatas.filter((set) => !set.icon || assets.sonatas[String(set.id)] !== set.icon).map((set) => set.name);
  assert(!missing.length, `sonata icons should attach to echo sets: ${missing.join(", ")}`);
  const leadIcons = sonatas.flatMap((set) => [].concat(set.leads || [], set.lead || []).filter((lead) => lead.icon).map((lead) => `${set.name}/${lead.echo}`));
  assert(!leadIcons.length, `lead echoes should not receive set icons: ${leadIcons.join(", ")}`);
}

const checks = [
  ["index loads every character file", indexLoadsAllCharacterFiles],
  ["language packs are split", languagePacksAreSplit],
  ["core data keeps display text out", coreDataDoesNotContainDisplayTextFields],
  ["state/resource tokens are language-neutral", stateAndResourceTokensAreLanguageNeutral],
  ["initial render completes", initialRenderCompletes],
  ["English render completes", englishRenderCompletes],
  ["Korean render completes", koreanRenderCompletes],
  ["Japanese render completes", japaneseRenderCompletes],
  ["English visible text has no Chinese", englishVisibleTextHasNoChinese],
  ["target language data has no fallback text", targetLanguageDataHasNoFallbackText],
  ["target visible text has no fallback text", targetVisibleTextHasNoFallbackText],
  ["target language data completeness", targetLanguageDataCompleteness],
  ["target weapon buff excerpts stay concise", targetWeaponBuffExcerptsStayConcise],
  ["source text has no echo typo", sourceTextHasNoEchoTypo],
  ["READMEs link live site", readmesLinkLiveSite],
  ["README language nav uses codes", readmeLanguageNavUsesCodes],
  ["damage metric crit labels", damageMetricCritLabels],
  ["formula number formatting floors", formulaNumberFormattingFloors],
  ["formula card tooltips", formulaCardTooltips],
  ["intro entry skill-driven events", introEntryIsSkillDriven],
  ["formula strip responsive css", formulaStripResponsiveCss],
  ["render preserves scroll", renderPreservesScroll],
  ["buff toggle uses partial refresh", buffToggleUsesPartialRefresh],
  ["weapon picker keeps string ids", weaponPickerKeepsStringIds],
  ["character schema references resolve", characterSchemasAreLinked],
  ["resource fallback skill visibility", resourceFallbackSkillVisibility],
  ["all character resource thresholds are structured", allCharacterResourceThresholdsAreStructured],
  ["all plain resource gates are reviewed", allPlainResourceGatesAreReviewed],
  ["v3 structured resource controls", v3StructuredResourceControls],
  ["equipment schema references resolve", equipmentSchemasAreLinked],
  ["sonata lead data completeness", sonataLeadDataCompleteness],
  ["sonata effect attachment buffs are manual", sonataEffectAttachmentBuffsAreManual],
  ["triggered buff defaults are explicit", triggeredBuffDefaultsAreExplicit],
  ["weapon buff scopes use beneficiary", weaponBuffScopesUseBeneficiary],
  ["state requirement arrays are ordered", stateRequirementArraysAreOrdered],
  ["combat state kinds match descriptions", combatStateKindsMatchDescriptions],
  ["capped scaleBy excerpts mention cap", cappedScaleByExcerptsMentionCap],
  ["scaleBy cap appears in buff badge", scaleByCapBadgeShowsCap],
  ["support team-buff state confirmation writes provider state", supportTeamBuffConfirmationWritesProviderState],
  ["baseline A Jinhsi team numbers", baselineA],
  ["baseline B rounding sample", baselineB],
  ["detailed echo mode regressions", detailedEchoModeRegressions],
  ["reported character fixes", reportedCharacterFixes],
  ["effect damage model", effectDamageModel],
  ["effect panel visibility", effectPanelVisibility],
  ["modal effect and offset control regressions", modalEffectAndOffsetControlRegressions],
  ["Rover forms are separate characters", roverFormsAreSeparateCharacters],
  ["Cyberpunk character regressions", cyberpunkCharacterRegressions],
  ["Lynae character regressions", lynaeCharacterRegressions],
  ["Hiyuki character regressions", hiyukiCharacterRegressions],
  ["new character weapon regressions", newCharacterWeaponRegressions],
  ["modern echo default regressions", modernEchoDefaultRegressions],
  ["P1 weapon effect regressions", p1WeaponEffectRegressions],
  ["icon assets use sonata sets", iconAssetsUseSonataSets],
];

for (const [name, fn] of checks) {
  fn();
  console.log(`OK ${name}`);
}
