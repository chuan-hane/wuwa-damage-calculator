"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const charDir = path.join(dataDir, "core/chara");
const betaCoreDir = path.join(dataDir, "core/beta");
const BETA_VERSION_RE = /^Beta\d+\.\d+\.\d+$/;
const targetSync = require(path.join(root, "scripts/sync-targets.js"));
const targetFixtures = JSON.parse(fs.readFileSync(path.join(root, "scripts/fixtures/target-api-samples.json"), "utf8"));

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
const betaCoreFiles = jsFilesUnder(betaCoreDir).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

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
require(path.join(root, "data/core/targets.js"));
for (const file of betaCoreFiles.filter((file) => /\/weapons\.js$/.test(file))) require(path.join(root, file));
for (const file of betaCoreFiles.filter((file) => /\/sonatas\.js$/.test(file))) require(path.join(root, file));
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
require(path.join(root, "src/targets.js"));
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
  "\nglobalThis.__T = { state, pickCharacter, compute, slotBuffs, availableSkills, resourceKey, resourceControlsForSlot, resolvedSkill, buffStatus, setBuffToggle, buffStackCount, stateChoiceKey, stateControlsHTML, buffFormulaText, render, syncOffsetFromStateChoice };",
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
  "applyAeroErosion", "applySpectroFrazzle", "applyGlacioChafe", "applyElectroFlare", "applyHavocBane", "applyFusionBurst", "applyPhotochromicFlux",
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
  for (const charId of [].concat(b.requiresChar || [], b.requiresSourceChar || [], b.requiresActiveChar || [])) {
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
  __T.state.enemy = {
    charLevel: 90,
    enemyLevel: 90,
    harmonyBase: 10027,
    res: 10,
    resShred: 0,
    defShred: 0,
    defIgnore: 0,
    vulnerability: 0,
    dmgReduction: 0,
    finalDmg: 0,
    targetMode: "openWorld",
    targetSeasonId: null,
    targetId: null,
    targetLevelOverride: null,
    targetResistanceOverrides: {},
    targetBuffValues: {},
    targetBuffChoices: {},
  };
  window.WUWA_TARGETS.ensureSelection(__T.state.enemy);
  __T.state.showDesc = false;
  __T.state.showTargetExtras = false;
  __T.state.resultMode = "skill";
  __T.state.damageMode = "expected";
  __T.state.effectCalc = { key: "none", providerIdx: null, stacks: 10, stackMode: "auto", electroRageStacks: 0, deepen: 0 };
  __T.state.offsetCalc = { key: "tuneBreak", providerIdx: null, skillId: null, stateId: null, stateValue: null, stacks: 3, deepen: 0 };
}

function disableDefaultConfirmedBuffs(indices = null) {
  const allowed = indices == null ? null : new Set([].concat(indices));
  __T.state.slots.forEach((slot, idx) => {
    if (allowed && !allowed.has(idx)) return;
    for (const b of __T.slotBuffs(slot)) {
      const st = __T.buffStatus(slot, idx, b);
      if (st.precondition && !st.gated) __T.setBuffToggle(slot, idx, b.id, false);
    }
  });
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

function indexLoadsAllBetaFiles() {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const scripts = [...html.matchAll(/<script\s+src="([^"]+\.js)"/g)].map((m) => m[1]);
  const betaLanguageFiles = jsFilesUnder(path.join(dataDir, "languages"))
    .filter((file) => file.includes("/beta/") || /\/chara\/Beta\d+\.\d+\.\d+\//.test(file));
  const betaFiles = [
    ...betaCoreFiles,
    ...charFiles.filter((file) => /\/Beta\d+\.\d+\.\d+\//.test(file)),
    ...betaLanguageFiles,
  ].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const missing = betaFiles.filter((file) => !scripts.includes(file));
  assert(!missing.length, `index.html missing beta scripts: ${missing.join(", ")}`);
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
      check(owner, "excludesState", sk.excludesState);
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
      checkResourceRequirement(owner, "multAddByResource", b.multAddByResource);
    }
  }
  assert(!bad.length, `state/resource tokens must be language-neutral:\n${bad.join("\n")}`);
}

function initialRenderCompletes() {
  __T.state.lang = "zh-CN";
  __T.render();
  const html = String(board.innerHTML);
  const damageIdx = html.indexOf('id="out-active"');
  const resultModeTabsIdx = html.indexOf('id="result-mode-tabs"');
  const heroTeamIdx = html.indexOf('class="hero-team"');
  const overviewIdx = html.indexOf('class="stage-card damage-stage damage-overview-stage"');
  const overviewEndIdx = html.indexOf("</section>", overviewIdx);
  const stageGridIdx = html.indexOf('class="stage-grid"');
  const targetIdx = html.indexOf('id="target-controls"');
  const settlementIdx = html.indexOf('id="settlement-stage"');
  const panelIdx = html.indexOf('class="stage-card panel-stage"');
  const buffIdx = html.indexOf('class="stage-card buff-stage"');
  const formulaIdx = html.indexOf('id="metric-strip"');
  const skillDetailIdx = html.indexOf('<div id="dmg-type"');
  assert(html.includes("stage-shell"), "initial render did not produce the stage shell");
  assert(html.includes("<h1>wuwa伤害计算器</h1>"), "topbar title should stay wuwa damage calculator");
  assert(html.includes('class="stage-language"') && html.includes('data-act="language"') && html.includes('data-lang="zh-CN"') && html.includes(">ZH</button>") && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "topbar should render functional language switch controls");
  assert(html.includes('class="stage-github-link"') && html.includes("https://github.com/chuan-hane/wuwa-damage-calculator"), "topbar should link to the GitHub repository");
  assert((html.match(/data-act="echo-detail"/g) || []).length === 3 && html.includes("详细声骸模式"), "team cards should render detailed echo mode switches");
  assert(html.includes('id="damage-dock-sentinel"') && html.indexOf('id="damage-dock-sentinel"') < heroTeamIdx, "damage dock trigger should sit at the end of the left damage summary");
  assert((html.match(/data-act="dock-output"/g) || []).length === 3 && html.includes("topbar-output-build") && html.includes("topbar-output-set-icons") && html.includes("topbar-output-lead"), "fixed damage dock should expose three output slots with build and Echo summaries");
  const formulaHeadIdx = html.indexOf('class="result-formula-head"');
  const targetStageIdx = html.indexOf('class="target-stage"');
  assert(damageIdx >= 0 && targetStageIdx > damageIdx && targetIdx > targetStageIdx && formulaHeadIdx > targetIdx && formulaIdx > formulaHeadIdx && overviewEndIdx > formulaIdx && settlementIdx > overviewEndIdx, "the gameplay target block should sit above the separate formula heading and cards");
  assert(resultModeTabsIdx > damageIdx && heroTeamIdx > resultModeTabsIdx, "the compact result-mode switch should sit below the large result inside the left result column");
  assert(stageGridIdx > overviewEndIdx && settlementIdx > stageGridIdx && panelIdx > settlementIdx && buffIdx > panelIdx, "settlement should lead the left grid column above the character panel while Buff starts in the right column");
  assert(overviewIdx >= 0 && formulaIdx > overviewIdx, "the unified result and formula should share the first card");
  assert(skillDetailIdx > settlementIdx, "skill detail should stay inside the original settlement block below the formula");
  assert(html.includes('class="skill-control-row"') && html.indexOf('data-act="skill"') > html.indexOf('class="skill-control-row"') && html.indexOf('data-act="skilllevel"') > html.indexOf('class="skill-control-row"'), "skill and skill level controls should share one row");
  assert(!html.includes('class="mode-tabs"'), "top-right damage mode tabs should not render");
  assert(!html.includes('class="pos-num"'), "top output selector should not render slot numbers");
  assert(!html.includes("damage-formula-panel"), "old formula panel wrapper should not be rendered");
  assert(html.includes('id="result-mode-tabs"') && html.includes('data-mode="skill"') && html.includes('data-mode="effect"') && html.includes('data-mode="offset"'), "the top workbench should expose skill, effect, and offset result modes");
  assert(html.includes('class="stage-card settlement-stage"') && html.indexOf('class="stage-card settlement-stage"') > overviewEndIdx && !html.includes('class="damage-lower') && !html.includes("其它伤害 · 独立结算"), "settlement should render as its own stage card after the result card");
  assert(html.includes('data-act="skill"') && !html.includes("result-inline-controls") && !html.includes("result-mode-parameters"), "skill mode should retain the original settlement controls without redundant mode parameters");
  assert(!html.includes("减防0%"), "compact damage formulas should not render zero defense shred");
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
  __T.state.resultMode = "offset";
  __T.render();
  const offsetPage = String(board.innerHTML);
  const offsetControlsIdx = offsetPage.indexOf('id="result-inline-controls"');
  const offsetHeroTeamIdx = offsetPage.indexOf('class="hero-team"');
  assert(offsetPage.includes('class="result-inline-controls"') && offsetPage.includes("谐度破坏伤害"), "offset mode should expose base Tune Break controls without specialist teammates");
  assert(offsetPage.includes('data-act="offset-cost"'), "offset mode should expose target Cost selection");
  assert(offsetControlsIdx > offsetPage.indexOf('id="result-mode-tabs"') && offsetHeroTeamIdx > offsetControlsIdx, "offset controls should sit below the compact result switch inside the left result column");
  assert(!offsetPage.includes('class="result-mode-parameters"') && offsetPage.includes('class="stage-card settlement-stage"') && offsetPage.includes('data-act="skill"'), "offset controls should leave the formula clean while the standalone settlement card remains visible");
  const offsetHtml = offsetPage.slice(offsetPage.indexOf('id="result-formula"'), offsetPage.indexOf("</section>", offsetPage.indexOf('id="result-formula"')));
  const offsetFormulaCardsHtml = offsetHtml.slice(offsetHtml.indexOf('class="result-formula-head"'));
  assert(!offsetFormulaCardsHtml.includes('data-act="offset-key"') && !offsetFormulaCardsHtml.includes('data-act="offset-cost"'), "offset selectors should stay outside the formula cards");
  assert(offsetHtml.includes("<span>易伤</span>") && offsetHtml.includes("<span>最终伤害提升</span>") && offsetHtml.includes("<span>固定系数</span>"), "base Tune Break formula should show every multiplier card");
  assert(!offsetHtml.includes("抗性/固定"), "base Tune Break formula should not imply RES is part of Tune Break damage");
  const offsetHeadIdx = offsetHtml.indexOf('class="result-formula-head"');
  const offsetTargetIdx = offsetHtml.indexOf('id="target-controls"');
  const offsetStripIdx = offsetHtml.indexOf('class="metric-strip formula-strip formula-strip--multiply"');
  assert(offsetTargetIdx >= 0 && offsetHeadIdx > offsetTargetIdx && offsetStripIdx > offsetHeadIdx && !offsetHtml.includes("谐度破坏伤害 ="), "offset mode should keep the gameplay target block above the formula heading");
  assert(offsetStripIdx >= 0 && !offsetHtml.includes("<b>×"), "offset formula cards should use the shared formula strip and outer multiply signs");
  assert(offsetHtml.includes('class="metric-card formula-card"') && !offsetHtml.includes("effect-mini-card"), "offset formulas should reuse the main formula card component");
  __T.state.resultMode = "skill";
}

function splitDamageRendersUnderMainDamage() {
  __T.state.lang = "zh-CN";
  resetTeam(["suisui"]);
  __T.state.damageMode = "normal";
  __T.state.slots[0].resources.cloud_breath = 0;
  __T.state.slots[0].skill = "skill_zephyr";
  __T.render();
  let html = String(board.innerHTML);
  let damageIdx = html.indexOf('id="out-active"');
  let splitIdx = html.indexOf('class="damage-split');
  let metricIdx = html.indexOf('id="metric-strip"');
  let splitHtml = html.slice(splitIdx, html.indexOf('<div class="hero-team">', splitIdx));
  assert(splitIdx > damageIdx && splitIdx < metricIdx, "split damage should render below the large damage number and above metric cards");
  assert(splitHtml.includes("分段伤害：") && !splitHtml.includes("分段公式：") && !splitHtml.includes("23.86% × 6"), "split damage block should not show the percentage formula row");

  __T.state.lang = "en-US";
  __T.render();
  html = String(board.innerHTML);
  splitIdx = html.indexOf('class="damage-split');
  metricIdx = html.indexOf('id="metric-strip"');
  splitHtml = html.slice(splitIdx, html.indexOf('<div class="hero-team">', splitIdx));
  assert(splitHtml.includes("Split DMG:") && !splitHtml.includes("Split formula:") && !splitHtml.includes("分段公式"), "split damage labels should stay localized and omit the percentage formula");
}

function englishRenderCompletes() {
  resetTeam();
  __T.state.lang = "en-US";
  __T.render();
  const html = String(board.innerHTML);
  assert(document.documentElement.lang === "en", "English render should set html lang=en");
  assert(document.title === "Wuthering Waves Damage Calculator", "English render should set the document title");
  assert(html.includes("<h1>Wuthering Waves Damage Calculator</h1>"), "topbar should render the English title");
  assert(html.includes('aria-label="Open GitHub repository"'), "English topbar should localize the GitHub repository link label");
  assert(html.includes("Resonator Panel"), "panel heading should render in English");
  assert(html.includes("Current Attack Buffs"), "buff heading should render in English");
  assert(html.includes("Final DMG") && html.includes("Skill DMG") && html.includes("Off-Tune System"), "unified result modes should use official English DMG wording");
  assert(html.includes("Jinhsi") && html.includes("Ages of Harvest"), "English render should use formal character and weapon names");
  assert(html.includes('data-lang="zh-CN"') && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "all language buttons should remain available");
  __T.state.resultMode = "offset";
  __T.render();
  assert(String(board.innerHTML).includes("Tune Break DMG"), "English offset mode should use official Tune Break DMG terminology");
  __T.state.resultMode = "skill";
  __T.state.lang = "zh-CN";
  __T.render();
}

function selectSnapshotTarget(target) {
  const targets = window.WUWA_TARGETS;
  targets.selectMode(__T.state.enemy, target.mode);
  targets.selectSeason(__T.state.enemy, target.seasonId);
  targets.selectTarget(__T.state.enemy, target.id);
}

function targetSelectionInterface() {
  resetTeam(["jinhsi"]);
  __T.state.lang = "zh-CN";
  __T.render();
  let html = String(board.innerHTML);
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  const appSource = fs.readFileSync(path.join(root, "src/app.js"), "utf8");
  const targets = window.WUWA_TARGETS;
  expectEqual(targets.sortedSeasons("toa").slice(0, 3).map((item) => item.id).join(","), "39,38,37", "ToA seasons should sort newest to oldest above the current season");
  expectEqual(targets.sortedSeasons("whiwa").slice(0, 2).map((item) => item.id).join(","), "20,19", "Whiwa seasons should sort newest to oldest above the current season");
  expectEqual(targets.sortedSeasons("dpmatrix").slice(0, 2).map((item) => item.id).join(","), "6,5", "Matrix seasons should sort newest to oldest");
  const targetPickerHTML = (page) => {
    const start = page.indexOf('class="formula-target-pick"');
    return page.slice(start, page.indexOf("</label>", start));
  };
  const targetLevelHTML = (page) => {
    const start = page.indexOf('class="formula-target-level"');
    return page.slice(start, page.indexOf("</label>", start));
  };
  const targetChoiceToggleHTML = (page) => {
    const start = page.indexOf('class="target-choice-toggle"');
    return page.slice(start, page.indexOf("</button>", start));
  };
  assert(html.includes('data-act="target-mode"') && html.includes('data-act="target-pick"'), "target toolbar should expose linked mode and target-attribute selectors");
  assert(html.includes('class="target-stage"') && html.includes("今汐") && html.includes("衍射抗性"), "the gameplay block should summarize the active damage element and target resistance");
  assert(html.includes('class="element-icon element-icon--spectro target-summary-icon"') && html.includes('class="element-icon-image" src="assets/icons/elements/spectro.webp"'), "target summary should show the actual damage element icon through the shared component");
  assert(html.includes('class="element-badge"><span class="element-icon element-icon--spectro"'), "skill element should use the same shared component as target controls and summary");
  assert(html.includes('id="target-summary"') && appSource.includes('replaceOuterHTML("target-summary", targetSummaryHTML(r))'), "target summary should refresh immediately with target-level and resistance input changes");
  assert(css.includes(".target-stage") && css.includes(".formula-target-toggle {\n  align-self: end;"), "the gameplay block should align the selectors and More button on the same baseline");
  assert(css.includes("grid-template-columns: repeat(4, auto) auto;") && css.includes("justify-content: start;"), "the gameplay selectors should size to their content instead of stretching across the row");
  assert(css.includes(".formula-target-primary select,\n.target-buff-controls select {\n  appearance: none;") && css.includes("background-image:\n    linear-gradient(45deg, transparent 50%, var(--muted) 50%)"), "the gameplay selectors should reuse the standard custom caret style");
  assert(css.includes(".element-icon {") && css.includes("width: 1em;") && css.includes("height: 1em;") && css.includes(".element-icon-image {") && css.includes("filter: grayscale(1) brightness(0.55) contrast(10);") && css.includes(".element-icon--aero {") && !css.includes(".target-control-icon--element") && !css.includes(".target-resistance-icon {"), "all attribute icons should share one text-relative high-contrast element component");
  assert(html.includes("→ 目标 "), "target summary should label the text after the arrow as the target");
  assert(css.includes(".target-choice-toggle {\n  display: flex;") && css.includes(".target-choice.show-preview .target-choice-tooltip {") && appSource.includes("showTargetChoicePreview") && appSource.includes('"target-choice-toggle"'), "Token and enhancement selectors should use a fixed-height custom menu with floating formula-card previews");
  assert(css.includes(".target-choice-pop {\n  z-index: 80;\n  top: calc(100% + 4px);\n  padding: 5px;") && css.includes("background: rgba(54, 54, 54, 0.82);") && css.includes("backdrop-filter: blur(24px) saturate(140%);") && css.includes(".target-choice-pop .target-choice-option {\n  position: relative;\n  width: 100%;\n  min-height: 24px;\n  padding: 2px 10px;") && css.includes(".target-choice-pop .target-choice-option.sel::before {\n  content: \"✓\";"), "Token and enhancement menus should match the native skill-selector popup styling");
  assert(!html.includes('class="res-help') && !html.includes("目标属性抗性参考"), "the old resistance reference table should be removed");
  assert(targetLevelHTML(html).includes('data-act="target-level"') && !targetLevelHTML(html).includes("disabled") && !html.includes('data-act="target-resistance"'), "Open World enemy level should stay editable in the primary gameplay row while six-resistance overrides stay inside More");
  const openWorldTargets = targets.targetsFor("openWorld", "default");
  expectEqual(openWorldTargets.length, 7, "Open World attribute choices");
  const openWorldGroups = targets.groupedTargets("openWorld", "default");
  expectEqual(openWorldGroups.length, 1, "Open World attribute group count");
  expectEqual(openWorldGroups[0].items.map(targets.targetOptionName).join(","), "无属性,冷凝,热熔,导电,气动,衍射,湮灭", "Open World attribute labels");
  const attributeLabels = new Set(["无属性", ...targets.elements().map((element) => window.WUWA_LANGUAGES.element(element))]);
  ["toa", "whiwa", "dpmatrix"].forEach((mode) => targets.seasons(mode).forEach((season) => {
    targets.targetPaths(mode, season.id).forEach((targetPath) => {
      targets.groupedTargets(mode, season.id, targetPath.id).forEach((group) => {
        const labels = group.items.map(targets.targetOptionName);
        assert(labels.every((label) => attributeLabels.has(label)), `${mode} target choices should contain attribute names only`);
        expectEqual(new Set(labels).size, labels.length, `${mode} target attributes should be deduplicated within each wave`);
      });
    });
  }));
  assert(html.includes("目标属性") && !targetPickerHTML(html).includes("%") && !targetPickerHTML(html).includes("级") && !targetPickerHTML(html).includes("先锋幼岩") && !targetPickerHTML(html).includes("optgroup"), "Open World target picker should expose attributes without resistance values, levels, or monster names");
  const glacioTarget = openWorldTargets.find((item) => targets.targetOptionName(item) === "冷凝");
  targets.selectTarget(__T.state.enemy, glacioTarget.id);
  expectEqual(targets.context(__T.state.enemy, "glacio").resistance, 40, "Glacio target automatic matching resistance");
  expectEqual(targets.context(__T.state.enemy, "spectro").resistance, 10, "Glacio target automatic non-matching resistance");
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("冷凝 90级") && html.includes("衍射抗性10%"), "target summary should show the selected attribute and automatically derived current resistance");
  assert(targetPickerHTML(html).includes('class="element-icon element-icon--glacio target-control-icon"') && targetPickerHTML(html).includes('class="element-icon-image" src="assets/icons/elements/glacio.webp"'), "Open World attribute selection should show its local element icon through the shared component");
  assert(html.indexOf('class="formula-target-pick"') < html.indexOf('class="formula-target-level"') && html.indexOf('class="formula-target-level"') < html.indexOf('class="formula-target-cost"') && html.indexOf('class="formula-target-cost"') < html.indexOf('class="formula-target-toggle'), "enemy level should stay on the primary row before Cost and More");
  expectEqual((html.match(/data-act="offset-cost"/g) || []).length, 1, "skill mode gameplay Cost selector count");
  assert(html.includes('<option value="10027" selected>4C</option>'), "gameplay Cost selector should keep compact 1C/3C/4C labels");

  __T.state.enemy.targetLevelOverride = 81;
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes('data-act="target-level" value="81"') && html.includes("81级") && !targetPickerHTML(html).includes("级"), "enemy-level override should update the level control and summary without leaving a stale level in the target picker");
  targets.clearOverrides(__T.state.enemy);

  for (const mode of targets.modeOrder) {
    targets.selectMode(__T.state.enemy, mode);
    __T.render();
    html = String(board.innerHTML);
    expectEqual((html.match(/data-act="offset-cost"/g) || []).length, 1, `${mode} gameplay Cost selector count`);
    const levelHTML = targetLevelHTML(html);
    assert(mode === "openWorld"
      ? levelHTML.includes('data-act="target-level"') && !levelHTML.includes("disabled")
      : levelHTML.includes("disabled") && !levelHTML.includes('data-act="target-level"'), `${mode} enemy-level editability`);
  }

  __T.state.enemy.harmonyBase = 2149;
  __T.state.resultMode = "offset";
  __T.render();
  html = String(board.innerHTML);
  expectEqual((html.match(/data-act="offset-cost"/g) || []).length, 2, "linked gameplay and offset Cost selector count");
  expectEqual((html.match(/<option value="2149" selected>/g) || []).length, 2, "linked gameplay and offset 3C selection");
  __T.state.enemy.harmonyBase = 716;
  __T.render();
  html = String(board.innerHTML);
  expectEqual((html.match(/<option value="716" selected>/g) || []).length, 2, "linked gameplay and offset 1C selection");
  __T.state.resultMode = "skill";
  __T.state.enemy.harmonyBase = 10027;
  targets.selectMode(__T.state.enemy, "openWorld");

  targets.selectMode(__T.state.enemy, "toa");
  __T.render();
  html = String(board.innerHTML);
  const toaPaths = window.WUWA_TARGETS.targetPaths("toa", __T.state.enemy.targetSeasonId);
  const toaTarget = targets.target(__T.state.enemy.targetId);
  const toaTargetName = window.WUWA_LANGUAGES.localeData("zh-CN", "targetNames", toaTarget.nameId)?.name || "";
  const toaPicker = targetPickerHTML(html);
  const toaChoices = targets.groupedTargets("toa", __T.state.enemy.targetSeasonId, targets.selectedPathId(__T.state.enemy), toaTarget.id).flatMap((group) => group.items);
  expectEqual(toaPaths.length, 6, "ToA current season tower/floor choices");
  assert(html.includes('data-act="target-season"') && html.includes('data-act="target-path"') && html.includes("逆境深塔") && html.includes("残响之塔 → 4层"), "ToA should expose season and only the retained tower/floor choices in the primary row");
  assert(targetLevelHTML(html).includes("disabled") && !targetLevelHTML(html).includes('data-act="target-level"'), "ToA enemy level should be fixed by the selected floor");
  const fixedToaLevel = targets.context(__T.state.enemy, "spectro").enemyLevel;
  __T.state.enemy.targetLevelOverride = fixedToaLevel + 7;
  expectEqual(targets.context(__T.state.enemy, "spectro").enemyLevel, fixedToaLevel, "ToA should ignore stale manual enemy-level overrides");
  assert(html.includes('data-act="target-buff-toggle"') && html.includes("自动生效"), "ToA fixed and triggered stage effects should appear in the gameplay block");
  expectEqual(new Set(toaChoices.map(targets.targetOptionName)).size, toaChoices.length, "ToA target attributes should be deduplicated");
  assert(toaPicker.includes(`src="assets/icons/elements/${toaTarget.element}.webp"`) && (!toaTargetName || !toaPicker.includes(toaTargetName)) && !html.includes("target-control-icon--matrix"), "ToA should show only the selected attribute and its element icon");

  targets.selectMode(__T.state.enemy, "whiwa");
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("9层 · 急潮") && html.includes("10层 · 狂澜") && html.includes("11层 · 海魇") && html.includes("无尽层 · 无尽湍渊"), "Whiwa target groups should identify floors 9-11 and Endless");
  assert(html.includes('data-act="target-season"') && html.includes('data-act="target-buff-choice"') && html.includes("信物"), "Whiwa should expose season and a single Token selector");
  const whiwaSelected = targets.target(__T.state.enemy.targetId);
  const whiwaTargetName = window.WUWA_LANGUAGES.localeData("zh-CN", "targetNames", whiwaSelected.nameId)?.name || "";
  assert(targetPickerHTML(html).includes(`src="assets/icons/elements/${whiwaSelected.element}.webp"`) && (!whiwaTargetName || !targetPickerHTML(html).includes(whiwaTargetName)), "Whiwa should show only the selected attribute and its element icon");
  assert(html.includes('class="combo-pop target-choice-pop"') && html.includes('class="combo-opt target-choice-option') && html.includes('class="combo-lbl"') && html.includes('class="combo-caret"'), "Whiwa Token selector should reuse the standard custom dropdown styles");
  assert(html.includes('class="target-choice-group-label">金色信物') && html.includes('class="target-choice-group-label">紫色信物'), "Whiwa Token selector should group the gold and purple options");
  for (const name of ["眷属-珍奇契约", "镌刻者—长夜孤灯", "希冀者—长夜孤灯", "编造者—长夜孤灯", "慰藉者—长夜孤灯", "狂欢者—船长印章"]) {
    assert(html.includes(name), `Whiwa Token selector should include current purple Token ${name}`);
  }
  const whiwaTarget = whiwaSelected;
  const tokenGroup = whiwaTarget.gameplay.choiceGroups[0];
  expectEqual((html.match(/data-preview=/g) || []).length, tokenGroup.optionIds.length, "Whiwa Token options should expose floating previews before selection");
  expectEqual((html.match(/class="formula-card-tip target-choice-tooltip"/g) || []).length, 1, "Whiwa Token selector should reuse one formula-card tooltip");
  assert(tokenGroup.optionIds.every((id) => html.includes(targets.gameplayBuffDescription(targets.gameplayBuff(id)))) && !html.includes('class="target-buff-description"'), "Whiwa Token effects should live in option previews instead of a post-selection description");
  for (const qualityId of [5, 4]) {
    const tokenId = tokenGroup.optionIds.find((id) => Number(targets.gameplayBuff(id).qualityId) === qualityId);
    const token = targets.gameplayBuff(tokenId);
    targets.setGameplayChoice(__T.state.enemy, tokenGroup.id, tokenId);
    __T.render();
    html = String(board.innerHTML);
    const tokenIcon = window.WUWA_ICON_ASSETS.targetGameplay.whiwa[String(token.localeRef.itemId)];
    const qualityClass = qualityId === 5 ? "target-control-icon--gold" : "target-control-icon--purple";
    const selectedToggle = targetChoiceToggleHTML(html);
    assert(tokenIcon && selectedToggle.includes(`src="${tokenIcon}"`) && selectedToggle.includes(qualityClass), `Whiwa quality ${qualityId} Token should show its local icon and rarity treatment without changing the control height`);
  }

  targets.selectMode(__T.state.enemy, "dpmatrix");
  __T.render();
  html = String(board.innerHTML);
  const matrixPaths = window.WUWA_TARGETS.targetPaths("dpmatrix", __T.state.enemy.targetSeasonId);
  expectEqual(matrixPaths.length, 3, "Matrix current season wave choices");
  assert(html.includes('data-act="target-season"') && html.includes("终焉矩阵·奇点扩张") && html.includes("波次 1") && !html.includes("轮次 1"), "Matrix should expose season, the full Singularity Expansion name, and three player-facing wave choices");
  window.WUWA_TARGETS.selectPath(__T.state.enemy, matrixPaths[2].id);
  expectEqual(window.WUWA_TARGETS.target(__T.state.enemy.targetId).stageId, 3, "Matrix wave selector should change the active target group");
  const matrixTarget = targets.target(__T.state.enemy.targetId);
  const matrixGroup = matrixTarget.gameplay.choiceGroups[0];
  const matrixBuff = targets.gameplayBuff(matrixGroup.optionIds[0]);
  expectEqual((html.match(/data-act="target-buff-choice"/g) || []).length, matrixGroup.optionIds.length + 1, "Matrix should expose one hoverable option for every enhancement plus the unselected choice");
  expectEqual((html.match(/data-preview=/g) || []).length, matrixGroup.optionIds.length, "Matrix enhancement options should expose floating previews before selection");
  expectEqual((html.match(/class="formula-card-tip target-choice-tooltip"/g) || []).length, 1, "Matrix enhancement selector should reuse one formula-card tooltip");
  targets.setGameplayChoice(__T.state.enemy, matrixGroup.id, matrixBuff.id);
  __T.render();
  html = String(board.innerHTML);
  const matrixTargetName = window.WUWA_LANGUAGES.localeData("zh-CN", "targetNames", matrixTarget.nameId)?.name || "";
  const matrixBuffIcon = window.WUWA_ICON_ASSETS.targetGameplay.dpmatrix[String(matrixBuff.localeRef.buffId)];
  const matrixToggle = targetChoiceToggleHTML(html);
  assert(matrixBuffIcon && targetPickerHTML(html).includes(`src="assets/icons/elements/${matrixTarget.element}.webp"`) && (!matrixTargetName || !targetPickerHTML(html).includes(matrixTargetName)) && matrixToggle.includes(`src="${matrixBuffIcon}"`) && matrixToggle.includes("target-control-icon--matrix"), "Matrix should show only the selected attribute icon and the chosen enhancement icon without changing the control height");

  __T.state.showTargetExtras = true;
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes('data-act="target-season"') && targetLevelHTML(html).includes("disabled") && !html.includes('data-act="target-custom"'), "seasonal modes should expose a fixed enemy level in the primary row without a redundant custom-target mode");
  assert(html.indexOf('data-act="target-season"') < html.indexOf('class="target-summary"') && html.indexOf('class="formula-target-level"') < html.indexOf('class="target-summary"'), "season and fixed enemy level should remain in the primary gameplay row");
  expectEqual((html.match(/data-act="target-resistance"/g) || []).length, 6, "More should expose all six attribute resistance inputs");
  expectEqual((html.match(/target-resistance-icon/g) || []).length, 6, "More should show six resistance icons through the shared element component");
  assert(html.includes("完整六属性抗性") && html.includes("目标数据更新于") && !html.includes("target-source-parts"), "More should show the complete resistance array and update date without an extra metadata row");
  targets.selectMode(__T.state.enemy, "openWorld");
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes('data-act="target-level"') && !html.includes('data-act="target-season"') && !html.includes('data-act="target-custom"'), "Open World More should omit meaningless season and custom-target controls");
  __T.state.showTargetExtras = false;
}

function targetApiFixtureRegressions() {
  const monster = targetSync.normalizeMonsterResistance(targetFixtures.monster);
  expectEqual(monster.glacio, 10, "monster API basis-point Glacio normalization");
  expectEqual(monster.havoc, 40, "monster API basis-point Havoc normalization");

  const toaTargets = {};
  const toaIds = targetSync.buildToaSeason(targetFixtures.toa, 37, toaTargets);
  const toa = toaTargets[toaIds[0]];
  expectEqual(toa.level, 90, "ToA fixture enemy level");
  expectEqual(toa.resistances.glacio, 20, "ToA fixture percent resistance unit");
  expectEqual(toa.resistances.havoc, 60, "ToA fixture matching resistance");
  expectEqual(toa.resistances.aero, 10, "ToA fixture explicit stage resistance adjustment");
  assert(toa.resistance.sourceKind === "stageFinal" && toa.resistance.includesModeModifiers && !toa.resistance.modifiers.some((modifier) => modifier.kind === "modeBase"), "ToA final resistance should never receive another mode-base stack");
  assert(targetSync.toaSeasonCoverage(targetFixtures.toa).complete, "complete ToA fixture should be accepted");
  assert(!targetSync.toaSeasonCoverage(targetFixtures.toaIncomplete).complete, "ToA fixture without level and resistance fields should be excluded");
  const futureToaLevels = targetSync.toaLevelMap(targetFixtures.toaFutureLevels, 38);
  assert(targetSync.toaLevelCoverage(targetFixtures.toaFuture, futureToaLevels).complete, "reviewed future ToA level fixture should cover every target");
  const futureToaTargets = {};
  const futureToaGameplay = {};
  const fixtureMonsterDetails = new Map([[targetFixtures.monster.Id, targetFixtures.monster]]);
  const futureToaIds = targetSync.buildToaSeason(targetFixtures.toaFuture, 38, futureToaTargets, [], futureToaGameplay, fixtureMonsterDetails, futureToaLevels);
  expectEqual(futureToaIds.length, 2, "future ToA fixture target count");
  const futureMultiAttribute = Object.values(futureToaTargets).find((target) => target.recordId === 415);
  expectEqual(futureMultiAttribute.level, 100, "future ToA reviewed enemy level");
  expectEqual(futureMultiAttribute.resistances.glacio, 20, "future ToA composed base resistance");
  expectEqual(futureMultiAttribute.resistances.fusion, 10, "future ToA explicit resistance reduction");
  expectEqual(futureMultiAttribute.resistances.electro, 30, "future ToA explicit resistance increase");
  expectEqual(futureMultiAttribute.resistances.havoc, 60, "future ToA matching resistance");
  assert(futureMultiAttribute.resistance.sourceKind === "composed" && futureMultiAttribute.resistance.includesModeModifiers, "future ToA should identify complete composed resistance");
  expectEqual(futureMultiAttribute.resistance.modifiers.filter((modifier) => modifier.kind === "modeBase").length, 1, "future ToA mode base application count");
  const futureConditional = Object.values(futureToaTargets).find((target) => target.recordId === 417);
  expectEqual(futureConditional.resistances.glacio, 35, "future ToA conditional resistance should default active once");
  expectEqual(futureConditional.resistances.havoc, 75, "future ToA conditional matching resistance should default active once");
  assert(futureConditional.gameplay.controlIds.some((id) => id.endsWith("resistance-removed")), "future ToA conditional resistance should expose a removal control");
  const conditionalRecord = JSON.parse(JSON.stringify(targetFixtures.toa.sample));
  conditionalRecord.id = 400;
  conditionalRecord.areaNum = 2;
  conditionalRecord.floor = 3;
  conditionalRecord.buffs = [{ id: 92008180, desc: "敌方全属性抗性提升15%。敌方受到异常效应伤害时移除。" }];
  const conditionalExclusions = [];
  const mixedToaTargets = {};
  const mixedGameplayBuffs = {};
  const mixedToaIds = targetSync.buildToaSeason({ base: targetFixtures.toa.sample, conditional: conditionalRecord }, 37, mixedToaTargets, conditionalExclusions, mixedGameplayBuffs);
  expectEqual(mixedToaIds.length, 2, "ToA conditional resistance record should remain selectable");
  const conditionalTarget = Object.values(mixedToaTargets).find((target) => target.recordId === conditionalRecord.id);
  expectEqual(conditionalTarget.resistances.glacio, 35, "ToA conditional resistance should default to active");
  assert(conditionalTarget.gameplay.controlIds.length === 1 && conditionalExclusions.length === 0, "ToA conditional resistance should expose a removal control instead of excluding the target");

  const whiwaTargets = {};
  const whiwaGameplayBuffs = {};
  const monsterDetails = new Map([[targetFixtures.monster.Id, targetFixtures.monster]]);
  const whiwaIds = targetSync.buildWhiwaSeason(targetFixtures.whiwa, 19, whiwaTargets, monsterDetails, whiwaGameplayBuffs);
  const whiwa = whiwaTargets[whiwaIds[0]];
  expectEqual(whiwa.level, 90, "Whiwa order 9 fixture level");
  expectEqual(whiwa.resistances.glacio, 20, "Whiwa intrinsic plus mode-base resistance");
  expectEqual(whiwa.resistances.aero, 40, "Whiwa explicit attribute resistance increase");
  expectEqual(whiwa.resistances.havoc, 50, "Whiwa matching intrinsic plus mode-base resistance");
  const tokenQualities = whiwa.gameplay.choiceGroups[0].optionIds.map((id) => whiwaGameplayBuffs[id].qualityId).sort();
  expectEqual(tokenQualities.join(","), "4,4,4,4,4,4,5,5,5", "Whiwa fixture complete purple and gold Token qualities");

  const futureWhiwaTargets = {};
  const futureWhiwaGameplay = {};
  const futureWhiwaIds = targetSync.buildWhiwaSeason(targetFixtures.whiwaFuture, 20, futureWhiwaTargets, monsterDetails, futureWhiwaGameplay);
  const futureWhiwa = futureWhiwaTargets[futureWhiwaIds[0]];
  expectEqual(futureWhiwa.level, 90, "future Whiwa order 9 fixture level");
  expectEqual(futureWhiwa.resistances.aero, 40, "future Whiwa explicit attribute resistance increase");
  expectEqual(futureWhiwa.resistance.modifiers.filter((modifier) => modifier.kind === "modeBase").length, 1, "future Whiwa mode base application count");
  const futureTokenGroup = futureWhiwa.gameplay.choiceGroups[0];
  expectEqual(futureTokenGroup.optionIds.length, 9, "future Whiwa complete Token option count");
  const futureCaptain = futureWhiwaGameplay[futureTokenGroup.optionIds.find((id) => id.includes(":71500094:"))];
  assert(futureCaptain.effects.some((effect) => effect.zone === "amplify" && effect.value === 25), "future Whiwa purple Token structure");
  const futureShuttle = futureWhiwaGameplay[futureTokenGroup.optionIds.find((id) => id.includes(":71500096:"))];
  assert(futureShuttle.effects.some((effect) => effect.effect === "fusion" && effect.value === 100), "future Whiwa Fusion Burst Token structure");

  const matrixTargets = {};
  const matrixIds = targetSync.buildMatrixSeason(targetFixtures.dpmatrix, 6, matrixTargets);
  expectEqual(matrixIds.length, 3, "Matrix fixture should expose all three player-facing waves");
  expectEqual(Array.from(new Set(matrixIds.map((id) => matrixTargets[id].stageId))).sort().join(","), "1,2,3", "Matrix fixture wave choices");
  matrixIds.forEach((id) => {
    const target = matrixTargets[id];
    expectEqual(target.resistances[target.element], 40, `Matrix ${id} matching resistance`);
    targetSync.ELEMENTS.filter((element) => element !== target.element).forEach((element) => {
      expectEqual(target.resistances[element], 20, `Matrix ${id} base ${element} resistance`);
    });
  });
}

function targetSnapshotCoverage() {
  const data = window.WUWA_TARGET_DATA;
  const targets = Object.values(data.targets);
  assert(data.schemaVersion === 2 && data.snapshot.apiVersion, "target snapshot should record schema and API version");
  const snapshotText = JSON.stringify(data.snapshot);
  for (const key of ["provider", "apiBase", "docsUrl", "openapiUrl", "levelEvidenceUrl", "resistanceEvidenceId"]) {
    assert(!snapshotText.includes(`"${key}"`), `target snapshot should omit connection metadata: ${key}`);
  }
  assert(data.snapshot.syncedAt && data.snapshot.currentSeasons.toa && data.snapshot.currentSeasons.whiwa && data.snapshot.currentSeasons.dpmatrix, "target snapshot should record sync time and current seasons");
  assert(targets.length > 0, "target snapshot should contain targets");
  targets.forEach((target) => {
    assert(Number.isFinite(target.level), `${target.id}: target level missing`);
    targetSync.ELEMENTS.forEach((element) => assert(Number.isFinite(target.resistances[element]), `${target.id}: ${element} resistance missing`));
    assert(target.resistance && typeof target.resistance.includesModeModifiers === "boolean", `${target.id}: resistance modifier inclusion flag missing`);
  });

  const toaSeasonIds = new Set(data.modes.toa.seasons.map((season) => Number(season.id)));
  assert(Array.from(toaSeasonIds).every((id) => id >= 32), "ToA seasons without complete level and resistance data should be omitted");
  assert(toaSeasonIds.has(38) && toaSeasonIds.has(39), "reviewed future ToA seasons should be included");
  expectEqual(data.modes.toa.currentSeasonId, "37", "future ToA seasons should not replace the current default");
  assert((data.snapshot.exclusions.toaSeasons || []).some((item) => Number(item.seasonId) === 31), "snapshot should record excluded incomplete ToA seasons");
  assert((data.snapshot.exclusions.toaRecords || []).every((item) => item.reason === "unparsedResistanceModifier"), "snapshot should only omit ToA records whose resistance modifier is not structurally proven");
  const toaTargets = targets.filter((target) => target.mode === "toa");
  assert(toaTargets.every((target) => (target.areaId === 1 && target.stageId === 4) || (target.areaId === 2 && [1, 2, 3, 4].includes(target.stageId)) || (target.areaId === 3 && target.stageId === 4)), "ToA snapshot should keep only left 4, middle 1-4, and right 4");
  const futureToaTargets = toaTargets.filter((target) => ["38", "39"].includes(target.seasonId));
  assert(futureToaTargets.every((target) => target.level === (target.areaId === 2 ? 100 : 90)), "future ToA target levels should match the reviewed tower/floor mapping");
  assert(futureToaTargets.every((target) => target.resistance.sourceKind === "composed" && target.resistance.includesModeModifiers), "future ToA targets should carry complete composed resistance metadata");
  assert(futureToaTargets.every((target) => target.resistance.modifiers.filter((modifier) => modifier.kind === "modeBase").length === 1), "future ToA mode resistance should be applied exactly once");
  const whiwaTargets = targets.filter((target) => target.mode === "whiwa");
  assert(whiwaTargets.every((target) => [9, 10, 11, 12].includes(target.stageOrder)), "Whiwa floors 1-8 should be omitted");
  assert(whiwaTargets.every((target) => target.level === (target.stageOrder === 12 ? 100 : 90)), "Whiwa snapshot should use level 90 for orders 9-11 and level 100 for endless");
  assert(data.modes.whiwa.seasons.some((season) => Number(season.id) === 20), "reviewed future Whiwa season should be included");
  expectEqual(data.modes.whiwa.currentSeasonId, "19", "future Whiwa season should not replace the current default");
  const whiwaTokens = Object.values(data.gameplayBuffs).filter((buff) => buff.mode === "whiwa" && buff.control === "option");
  for (const seasonId of ["19", "20"]) {
    const seasonalTokens = whiwaTokens.filter((buff) => buff.id.startsWith(`whiwa:${seasonId}:`));
    expectEqual(seasonalTokens.filter((buff) => buff.qualityId === 4).length, 6, `Whiwa ${seasonId} purple Token count`);
    expectEqual(seasonalTokens.filter((buff) => buff.qualityId === 5).length, 3, `Whiwa ${seasonId} gold Token count`);
  }
  expectEqual(data.snapshot.synthesis.gameplayBuffs.whiwaSelectableTokenCounts.purple, 6, "Whiwa snapshot selectable purple Token metadata");
  expectEqual(data.snapshot.synthesis.gameplayBuffs.whiwaSelectableTokenCounts.gold, 3, "Whiwa snapshot selectable gold Token metadata");
  assert(data.snapshot.synthesis.toa.calibratedTargetCount === 13, "ToA composed resistance calibration should cover all current retained targets");
  assert(data.snapshot.synthesis.gameplayBuffs.reviewedSeasons.toa.join(",") === "37,38,39", "reviewed ToA season metadata");
  assert(data.snapshot.synthesis.gameplayBuffs.reviewedSeasons.whiwa.join(",") === "19,20", "reviewed Whiwa season metadata");

  const currentMatrix = targets.filter((target) => target.mode === "dpmatrix" && target.seasonId === data.modes.dpmatrix.currentSeasonId && target.areaId === 12);
  expectEqual(Array.from(new Set(currentMatrix.map((target) => target.stageId))).sort().join(","), "1,2,3", "current Matrix season should expose three wave choices");
  const openWorldTargets = targets.filter((target) => target.mode === "openWorld");
  assert(openWorldTargets.every((target) => target.level === 90), "open-world targets should default to level 90");
  assert(Object.keys(data.gameplayBuffs).length > 0, "snapshot should include structured gameplay Buffs");

  for (const mode of ["toa", "whiwa", "dpmatrix"]) {
    const enemy = {};
    window.WUWA_TARGETS.ensureSelection(enemy);
    window.WUWA_TARGETS.selectMode(enemy, mode);
    expectEqual(enemy.targetSeasonId, window.WUWA_TARGETS.currentSeasonId(mode), `${mode} should default to the current season`);
  }
  const futureEnemy = {};
  window.WUWA_TARGETS.ensureSelection(futureEnemy);
  window.WUWA_TARGETS.selectMode(futureEnemy, "toa");
  window.WUWA_TARGETS.selectSeason(futureEnemy, "38");
  assert(futureEnemy.targetSeasonId === "38" && window.WUWA_TARGETS.target(futureEnemy.targetId)?.seasonId === "38", "future ToA season should be selectable");
  window.WUWA_TARGETS.selectMode(futureEnemy, "whiwa");
  window.WUWA_TARGETS.selectSeason(futureEnemy, "20");
  assert(futureEnemy.targetSeasonId === "20" && window.WUWA_TARGETS.target(futureEnemy.targetId)?.seasonId === "20", "future Whiwa season should be selectable");

  const encounters = new Map();
  targets.filter((target) => target.mode !== "openWorld").forEach((target) => {
    const key = [target.mode, target.seasonId, target.areaId, target.stageId, target.waveId].join(":");
    if (!encounters.has(key)) encounters.set(key, []);
    encounters.get(key).push(target);
  });
  const multiMonster = Array.from(encounters.values()).find((items) => new Set(items.map((item) => item.monsterId)).size > 1);
  assert(multiMonster, "seasonal snapshot should include a multi-monster encounter");
  multiMonster.forEach((target) => {
    selectSnapshotTarget(target);
    expectEqual(window.WUWA_TARGETS.context(__T.state.enemy, "spectro").target.id, target.id, `multi-monster target ${target.id} should be individually selectable`);
  });
}

function targetResistanceDerivationRegressions() {
  const data = window.WUWA_TARGET_DATA;
  const charByElement = Object.fromEntries(targetSync.ELEMENTS.map((element) => [
    element,
    window.WUWA.order.find((id) => window.WUWA.chars[id].element === element),
  ]));
  const switchCase = Object.values(data.targets).flatMap((target) => targetSync.ELEMENTS.flatMap((first) =>
    targetSync.ELEMENTS.filter((second) => second !== first && target.resistances[first] !== target.resistances[second]).map((second) => ({ target, first, second }))
  )).find((item) => charByElement[item.first] && charByElement[item.second]);
  assert(switchCase, "snapshot should contain a target with distinct resistances for two playable elements");

  resetTeam([charByElement[switchCase.first], charByElement[switchCase.second]]);
  selectSnapshotTarget(switchCase.target);
  __T.state.slots.filter((slot) => slot.char).forEach((slot) => {
    const ownElement = window.WUWA.chars[slot.char].element;
    const ownSkill = __T.availableSkills(slot).find((item) => (item.damageElement || item.element || ownElement) === ownElement);
    assert(ownSkill, `${slot.char}: no own-element skill for target resistance regression`);
    slot.skill = ownSkill.id;
  });
  __T.state.outputIdx = 0;
  let first = __T.compute();
  expectEqual(first.damageElement, switchCase.first, "first output character damage element");
  expectEqual(first.target.resistance, switchCase.target.resistances[switchCase.first], "first output character target resistance");
  __T.state.outputIdx = 1;
  const second = __T.compute();
  expectEqual(second.damageElement, switchCase.second, "second output character damage element");
  expectEqual(second.target.resistance, switchCase.target.resistances[switchCase.second], "second output character target resistance");
  assert(first.target.target.id === second.target.target.id && first.resFactor !== second.resFactor, "switching output characters should keep the target and immediately change the applied resistance factor");

  resetTeam(["rover_electro"]);
  selectSnapshotTarget(data.targets["openWorld:310000430"]);
  __T.state.slots[0].skill = "na1";
  const electro = __T.compute();
  __T.state.slots[0].skill = "havoc_air1";
  const havoc = __T.compute();
  expectEqual(electro.damageElement, "electro", "Rover normal skill element");
  expectEqual(havoc.damageElement, "havoc", "skill-provided damage element should override character element");
  expectEqual(electro.target.resistance, 10, "Rover Electro target resistance");
  expectEqual(havoc.target.resistance, 40, "Rover Havoc action target resistance");

  const explicitDamageElementSkill = skill(window.WUWA.chars.rover_electro, "havoc_air1");
  explicitDamageElementSkill.damageElement = "spectro";
  const explicitDamageElement = __T.compute();
  delete explicitDamageElementSkill.damageElement;
  expectEqual(explicitDamageElement.damageElement, "spectro", "damageElement should take priority over skill element");
  expectEqual(explicitDamageElement.target.resistance, 10, "damageElement should select its own resistance entry");

  const automaticLevel = havoc.target.enemyLevel;
  const automaticResistance = havoc.target.resistance;
  __T.state.enemy.targetLevelOverride = automaticLevel + 7;
  __T.state.enemy.targetResistanceOverrides.havoc = automaticResistance + 13;
  let overridden = __T.compute();
  expectEqual(overridden.target.enemyLevel, automaticLevel + 7, "manual target level override");
  expectEqual(overridden.target.resistance, automaticResistance + 13, "manual target resistance override");
  window.WUWA_TARGETS.clearOverrides(__T.state.enemy);
  overridden = __T.compute();
  expectEqual(overridden.target.enemyLevel, automaticLevel, "reset should restore automatic target level");
  expectEqual(overridden.target.resistance, automaticResistance, "reset should restore automatic target resistance");
}

function gameplayBuffRegressions() {
  const data = window.WUWA_TARGET_DATA;
  const currentTarget = (mode, predicate = () => true) => Object.values(data.targets).find((target) =>
    target.mode === mode && target.seasonId === data.modes[mode].currentSeasonId && predicate(target)
  );

  resetTeam(["jinhsi"]);
  const matrix = currentTarget("dpmatrix");
  selectSnapshotTarget(matrix);
  __T.state.slots[0].skill = "na1";
  const matrixGroup = matrix.gameplay.choiceGroups[0];
  const matrixBase = __T.compute().totals.finalDmg;
  const general = matrixGroup.optionIds.find((id) => id.includes(":29:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, matrixGroup.id, general);
  expectEqual(__T.compute().totals.finalDmg - matrixBase, 20, "Matrix General Enhancement should add its unconditional final DMG");
  const negative = matrixGroup.optionIds.find((id) => id.includes(":26:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, matrixGroup.id, negative);
  expectEqual(__T.compute().totals.finalDmg, matrixBase, "Matrix triggered enhancement effects should default inactive");
  const negativeChildren = Object.values(data.gameplayBuffs).filter((buff) => buff.parentId === negative);
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, negativeChildren[0].id, true);
  expectEqual(__T.compute().totals.finalDmg - matrixBase, 25, "Matrix first confirmed trigger");
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, negativeChildren[1].id, true);
  expectEqual(__T.compute().totals.finalDmg - matrixBase, 55, "Matrix independent confirmed triggers should add without merging their conditions");

  resetTeam(["jinhsi"]);
  const whiwa = currentTarget("whiwa", (target) => target.stageOrder === 9);
  selectSnapshotTarget(whiwa);
  const tokenGroup = whiwa.gameplay.choiceGroups[0];
  const tokenBase = __T.compute().totals.amplify;
  const captainSeal = tokenGroup.optionIds.find((id) => id.includes(":71500090:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, tokenGroup.id, captainSeal);
  expectEqual(__T.compute().totals.amplify - tokenBase, 25, "Whiwa Token should apply once when selected");
  const finalDmgBase = __T.compute().totals.finalDmg;
  const hopebearer = tokenGroup.optionIds.find((id) => id.includes(":71501002:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, tokenGroup.id, hopebearer);
  expectEqual(__T.compute().totals.finalDmg - finalDmgBase, 15, "Whiwa persistent purple Token should apply its unconditional effect");
  const hopebearerTrigger = Object.values(data.gameplayBuffs).find((buff) => buff.parentId === hopebearer);
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, hopebearerTrigger.id, true);
  expectEqual(__T.compute().totals.finalDmg - finalDmgBase, 30, "Whiwa persistent purple Token trigger should require confirmation");
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, tokenGroup.id, captainSeal);
  expectEqual(__T.compute().totals.finalDmg, finalDmgBase, "Whiwa Token selection should not retain another Token's confirmed child effect");
  const rarePact = tokenGroup.optionIds.find((id) => id.includes(":71500011:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, tokenGroup.id, rarePact);
  expectEqual(__T.compute().totals.finalDmg, finalDmgBase, "Whiwa non-formula purple Token should remain selectable without inventing a damage effect");
  const skillContext = { resultMode: "skill", damageElement: "spectro", damageTypes: ["basic"] };
  const offsetContext = { resultMode: "offset", damageElement: "spectro", damageTypes: ["tuneRupture", "tuneRuptureDmg"] };
  const inscriber = tokenGroup.optionIds.find((id) => id.includes(":71501001:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, tokenGroup.id, inscriber);
  expectEqual(window.WUWA_TARGETS.gameplayAggregate(__T.state.enemy, skillContext).finalDmg, 15, "Whiwa Inscriber should apply its unconditional final DMG effect");
  expectEqual(window.WUWA_TARGETS.gameplayAggregate(__T.state.enemy, offsetContext).vulnerability, 50, "Whiwa Inscriber should scope its Tune Rupture damage-taken effect to offset damage");
  const fabricator = tokenGroup.optionIds.find((id) => id.includes(":71501003:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, tokenGroup.id, fabricator);
  expectEqual(window.WUWA_TARGETS.gameplayAggregate(__T.state.enemy, skillContext).finalDmg, 15, "Whiwa Fabricator should keep its unconditional final DMG effect");
  expectEqual(window.WUWA_TARGETS.gameplayAggregate(__T.state.enemy, { ...skillContext, damageTypes: ["echoSkill"] }).finalDmg, 40, "Whiwa Fabricator should add its Echo Skill final DMG effect only to Echo Skills");

  resetTeam(["jinhsi"]);
  const toaLeft = currentTarget("toa", (target) => target.recordId === 402);
  selectSnapshotTarget(toaLeft);
  expectEqual(__T.compute().totals.defIgnore, 25, "ToA fixed stage DEF Ignore should apply automatically");

  const toaMiddle = currentTarget("toa", (target) => target.recordId === 405);
  selectSnapshotTarget(toaMiddle);
  expectEqual(window.WUWA_TARGETS.context(__T.state.enemy, "glacio").resistance, 35, "ToA conditional All-Attribute RES should default active exactly once");
  const middleControls = toaMiddle.gameplay.controlIds.map((id) => data.gameplayBuffs[id]);
  const removal = middleControls.find((buff) => buff.id.endsWith("resistance-removed"));
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, removal.id, true);
  expectEqual(window.WUWA_TARGETS.context(__T.state.enemy, "glacio").resistance, 20, "confirming the ToA removal condition should restore stage-final RES");
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, removal.id, false);
  expectEqual(window.WUWA_TARGETS.context(__T.state.enemy, "glacio").resistance, 35, "clearing the removal confirmation should restore automatic RES");
  const ramp = middleControls.find((buff) => buff.control === "range");
  const rampBase = __T.compute().totals.finalDmg;
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, ramp.id, 60);
  expectEqual(__T.compute().totals.finalDmg - rampBase, 60, "ToA timed stage effect should use the selected proven value");

  resetTeam(["jinhsi"]);
  const futureToa = Object.values(data.targets).find((target) => target.mode === "toa" && target.seasonId === "38" && target.recordId === 417);
  selectSnapshotTarget(futureToa);
  const futureResistance = window.WUWA_TARGETS.context(__T.state.enemy, "glacio").resistance;
  const futureControls = futureToa.gameplay.controlIds.map((id) => data.gameplayBuffs[id]);
  const futureRemoval = futureControls.find((buff) => buff.id.endsWith("resistance-removed"));
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, futureRemoval.id, true);
  expectEqual(window.WUWA_TARGETS.context(__T.state.enemy, "glacio").resistance, futureResistance - 15, "future ToA confirmed removal should subtract the default resistance exactly once");
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, futureRemoval.id, false);
  expectEqual(window.WUWA_TARGETS.context(__T.state.enemy, "glacio").resistance, futureResistance, "future ToA cleared removal should restore the composed target resistance");
  const futureRamp = futureControls.find((buff) => buff.id.endsWith("time-ramp"));
  const futureRampBase = __T.compute().totals.finalDmg;
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, futureRamp.id, 60);
  expectEqual(__T.compute().totals.finalDmg - futureRampBase, 60, "future ToA timed stage effect should use the selected value");

  resetTeam(["jinhsi"]);
  const futureWhiwa = Object.values(data.targets).find((target) => target.mode === "whiwa" && target.seasonId === "20" && target.stageOrder === 9);
  selectSnapshotTarget(futureWhiwa);
  const futureTokenGroup = futureWhiwa.gameplay.choiceGroups[0];
  const futureAmplifyBase = __T.compute().totals.amplify;
  const futureCaptain = futureTokenGroup.optionIds.find((id) => id.includes(":71500094:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, futureTokenGroup.id, futureCaptain);
  expectEqual(__T.compute().totals.amplify - futureAmplifyBase, 25, "future Whiwa purple Token should apply once when selected");
  const futureMirror = futureTokenGroup.optionIds.find((id) => id.includes(":71500095:"));
  window.WUWA_TARGETS.setGameplayChoice(__T.state.enemy, futureTokenGroup.id, futureMirror);
  const futureMirrorBase = __T.compute().totals.finalDmg;
  const futureMirrorTrigger = Object.values(data.gameplayBuffs).find((buff) => buff.parentId === futureMirror);
  window.WUWA_TARGETS.setGameplayValue(__T.state.enemy, futureMirrorTrigger.id, true);
  expectEqual(__T.compute().totals.finalDmg - futureMirrorBase, 60, "future Whiwa triggered Token should require confirmation and apply once");
}

function targetLocalesAndOfflineRuntime() {
  const data = window.WUWA_TARGET_DATA;
  const officialModeNames = {
    "zh-CN": ["大世界", "逆境深塔", "冥歌海墟", "终焉矩阵·奇点扩张"],
    "en-US": ["Open World", "Tower of Adversity", "Whimpering Wastes", "Endstate Matrix: Singularity Expansion"],
    "ja-JP": ["オープンワールド", "逆境深塔", "死の歌が纏う海の廃墟", "終焉マトリクス・奇点拡張"],
    ko: ["오픈 월드", "역경의 탑", "죽음의 노래와 바닷속 폐허", "종말 매트릭스 · 특이점 확장"],
  };
  const bad = [];
  for (const lang of SUPPORTED_LANGS) {
    const ui = isolatedLanguagePack(lang).strings?.targets || {};
    for (const key of ["section", "mode", "target", "attribute", "attributeNone", "cost", "season", "enemyLevel", "fullResistance", "summary", "updatedAt", "endlessFloor", "towerFloor", "floorLabel", "waveLabel", "token", "tokenGold", "tokenPurple", "enhancement", "buffUnselected"]) {
      if (!ui[key]) bad.push(`${lang}: missing targets.${key}`);
    }
    window.WUWA_TARGETS.modeOrder.forEach((mode, index) => {
      const name = window.WUWA_LANGUAGES.localeData(lang, "targetModes", mode)?.name;
      if (name !== officialModeNames[lang][index]) bad.push(`${lang}: target mode ${mode} expected ${officialModeNames[lang][index]}, got ${name}`);
    });
    Object.values(data.targets).forEach((target) => {
      if (!window.WUWA_LANGUAGES.localeData(lang, "targetNames", target.nameId)?.name) bad.push(`${lang}: missing target name ${target.nameId}`);
      if (target.mode === "openWorld") return;
      if (!window.WUWA_LANGUAGES.localeData(lang, "targetSeasons", `${target.mode}:${target.seasonId}`)?.name) bad.push(`${lang}: missing target season ${target.mode}:${target.seasonId}`);
    });
    Object.keys(data.gameplayBuffs).forEach((id) => {
      const buff = window.WUWA_LANGUAGES.localeData(lang, "targetBuffs", id);
      if (!buff?.name || !buff?.desc) bad.push(`${lang}: missing target gameplay Buff ${id}`);
      if (/。。|。\s*。/.test(buff?.desc || "")) bad.push(`${lang}: malformed gameplay Buff paragraph punctuation ${id}`);
    });
    const glacioTrigger = window.WUWA_LANGUAGES.localeData(lang, "targetBuffs", "whiwa:19:71500092:glacio-chafe")?.name || "";
    if (/该信物|This Token|この贈り物|해당 증표/.test(glacioTrigger)) bad.push(`${lang}: Whiwa Token trigger label should describe the trigger instead of its usage limit`);
    const harmonyTrigger = window.WUWA_LANGUAGES.localeData(lang, "targetBuffs", "whiwa:19:71501002:concentrated-harmony")?.name || "";
    if (/^敵が受ける最終ダメージ/.test(harmonyTrigger)) bad.push(`${lang}: Whiwa conditional Token label should omit the unconditional effect`);
  }
  assert(!bad.length, `target locale coverage is incomplete:\n${bad.slice(0, 40).join("\n")}`);

  const runtimeFiles = ["index.html", ...jsFilesUnder(path.join(root, "src")), "data/core/targets.js", ...SUPPORTED_LANGS.map((lang) => `data/languages/${lang}/targets.js`)];
  const networkRuntimeFiles = runtimeFiles.filter((file) => /\bfetch\s*\(|XMLHttpRequest\s*\(/.test(fs.readFileSync(path.join(root, file), "utf8")));
  assert(!networkRuntimeFiles.length, `runtime target data should work offline without API calls: ${networkRuntimeFiles.join(", ")}`);
  const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert(index.includes('src="data/core/targets.js"') && SUPPORTED_LANGS.every((lang) => index.includes(`src="data/languages/${lang}/targets.js"`)) && index.includes('src="src/targets.js"'), "index should load the local target snapshot and all four target language packs");
  const syncSource = fs.readFileSync(path.join(root, "scripts/sync-targets.js"), "utf8");
  const validationIndex = syncSource.lastIndexOf("validateKnownSamples(targets, gameplayBuffs);");
  const iconSyncIndex = syncSource.lastIndexOf("await synchronizeTargetIcons(core");
  const writeIndex = syncSource.lastIndexOf("writeSnapshot(files);");
  assert(validationIndex >= 0 && validationIndex < iconSyncIndex && iconSyncIndex < writeIndex, "sync should validate data and localize every icon before replacing the previous snapshot");
}

function targetConnectionDetailsStayPrivate() {
  const pipelineFiles = [
    "data/core/targets.js",
    "data/icons.js",
    "scripts/audit-official-language-packs.js",
    "scripts/sync-icons.js",
    "scripts/rebuild-language-packs.js",
    "scripts/sync-targets.js",
    "scripts/fixtures/target-api-samples.json",
    ...SUPPORTED_LANGS.map((lang) => `data/languages/${lang}/targets.js`),
  ];
  const hardcodedConnections = pipelineFiles.filter((file) => /https?:\/\/|www\./i.test(fs.readFileSync(path.join(root, file), "utf8")));
  assert(!hardcodedConnections.length, `target data connection details should be supplied at runtime: ${hardcodedConnections.join(", ")}`);
  const syncFiles = fs.readdirSync(path.join(root, "scripts")).filter((name) => /^sync-.*targets\.js$/.test(name));
  expectEqual(syncFiles.join(","), "sync-targets.js", "target sync script should use a neutral filename");
  const fixtureFiles = fs.readdirSync(path.join(root, "scripts/fixtures")).filter((name) => /^target.*\.json$/.test(name));
  expectEqual(fixtureFiles.join(","), "target-api-samples.json", "target samples should use a neutral filename");
  const targetUiText = SUPPORTED_LANGS.map((lang) => fs.readFileSync(path.join(root, `data/languages/${lang}/ui.js`), "utf8")).join("\n");
  assert(!/sourceBreakdown|sourceMonsterIntrinsic|sourceStageFinal|sourceModeBase|sourceAttributeAdjustment|sourceManual/.test(targetUiText), "target UI packs should omit connection and derivation metadata labels");
}

function koreanRenderCompletes() {
  resetTeam();
  __T.state.lang = "ko";
  __T.render();
  const html = String(board.innerHTML);
  assert(document.documentElement.lang === "ko", "Korean render should set html lang=ko");
  assert(document.title === "명조 피해 계산기", "Korean render should set the document title");
  assert(html.includes("<h1>명조 피해 계산기</h1>"), "topbar should render the Korean title");
  assert(html.includes('aria-label="GitHub 저장소 열기"'), "Korean topbar should localize the GitHub repository link label");
  assert(html.includes("공명자 스탯"), "panel heading should render in Korean");
  assert(html.includes("이번 공격 버프"), "buff heading should render in Korean");
  assert(html.includes("최종 피해") && html.includes("스킬 피해") && html.includes("편조 시스템"), "unified result modes should render in Korean");
  assert(html.includes("금희") && html.includes("태평성대"), "Korean render should use Korean character and weapon names");
  assert(html.includes('data-lang="zh-CN"') && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "all language buttons should remain available");
  __T.state.resultMode = "offset";
  __T.render();
  assert(String(board.innerHTML).includes("조화도 파괴 피해"), "Korean offset mode should render Tune Break damage");
  __T.state.resultMode = "skill";
  __T.state.lang = "zh-CN";
  __T.render();
}

function japaneseRenderCompletes() {
  resetTeam();
  __T.state.lang = "ja-JP";
  __T.render();
  const html = String(board.innerHTML);
  assert(document.documentElement.lang === "ja", "Japanese render should set html lang=ja");
  assert(document.title === "鳴潮 / Wuthering Waves Damage Calculator", "Japanese render should set the document title");
  assert(html.includes("<h1>鳴潮 / Wuthering Waves Damage Calculator</h1>"), "topbar should render the Japanese title with the full English calculator name");
  assert(html.includes('aria-label="GitHub リポジトリを開く"'), "Japanese topbar should localize the GitHub repository link label");
  assert(html.includes("共鳴者ステータス"), "panel heading should render in Japanese");
  assert(html.includes("今回の攻撃 Buff"), "buff heading should render in Japanese");
  assert(html.includes("最終ダメージ") && html.includes("スキルダメージ") && html.includes("オフセット体系"), "unified result modes should render in Japanese");
  assert(html.includes("今汐") && html.includes("歳華調和"), "Japanese render should use Japanese character and weapon names");
  assert(html.includes('data-lang="zh-CN"') && html.includes('data-lang="en-US"') && html.includes('data-lang="ko"') && html.includes('data-lang="ja-JP"'), "all language buttons should remain available");
  __T.state.resultMode = "offset";
  __T.render();
  assert(String(board.innerHTML).includes("協和破壊ダメージ"), "Japanese offset mode should render Tune Break damage");
  __T.state.resultMode = "skill";
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
    "README.ja.md",
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
    ["README.ja.md", "Japanese"],
  ];
  for (const [file, label] of readmes) {
    assert(fs.readFileSync(path.join(root, file), "utf8").includes(url), `${label} README should link to the live site`);
  }
}

function readmeLanguageNavUsesCodes() {
  const navs = [
    ["README.md", "### ZH | [EN](README.en.md) | [KO](README.ko.md) | [JA](README.ja.md)"],
    ["README.en.md", "### [ZH](README.md) | EN | [KO](README.ko.md) | [JA](README.ja.md)"],
    ["README.ko.md", "### [ZH](README.md) | [EN](README.en.md) | KO | [JA](README.ja.md)"],
    ["README.ja.md", "### [ZH](README.md) | [EN](README.en.md) | [KO](README.ko.md) | JA"],
  ];
  for (const [file, expected] of navs) {
    const firstLine = fs.readFileSync(path.join(root, file), "utf8").split(/\r?\n/, 1)[0];
    assert(firstLine === expected, `${file} should use language-code navigation`);
  }
}

function localizedReadmesUseReviewedTerminology() {
  const checks = [
    ["README.en.md", [/is aims/i, /Stat Bonus nodes/, /damage taken zone/, /final DMG increase/, /\sx\s/]],
    ["README.ko.md", [/Buff/, /고정 스탯 보너스 노드/, /받는 피해 구역/, /\sx\s/]],
    ["README.ja.md", [/固定ステータスボーナスノード/, /\sx\s/]],
  ];
  const bad = [];
  for (const [file, patterns] of checks) {
    const text = fs.readFileSync(path.join(root, file), "utf8");
    for (const pattern of patterns) {
      if (pattern.test(text)) bad.push(`${file}: ${pattern}`);
    }
  }
  assert(!bad.length, `localized README terminology should stay reviewed:\n${bad.join("\n")}`);
}

function damageMetricCritLabels() {
  resetTeam(["jinhsi"]);
  __T.state.damageMode = "crit";
  __T.render();
  let html = String(board.innerHTML);
  let metricHtml = html.slice(html.indexOf('class="metric-strip"'), html.indexOf("</section>", html.indexOf('class="metric-strip"')));
  assert(html.includes("<span>暴击伤害</span>") && !html.includes("<span>暴击区</span>"), "crit metric should be labeled as crit damage");
  assert(html.includes('<div class="topbar-damage-summary"><span>暴击</span>') && (html.match(/id="dock-out-active"/g) || []).length === 1 && !html.includes("dock-out-exp") && !html.includes("dock-out-normal"), "fixed dock should show only the selected crit result");
  assert(!metricHtml.includes("<b>×"), "metric card values should not duplicate the outer multiply sign");
  __T.state.damageMode = "expected";
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("<span>期望修正</span>") && !html.includes("<span>暴击区</span>"), "expected metric should be labeled as expected correction");
  assert(html.includes('<div class="topbar-damage-summary"><span>期望</span>'), "fixed dock should follow the selected expected result");
  __T.state.damageMode = "normal";
  __T.render();
  html = String(board.innerHTML);
  assert(html.includes("<span>非暴伤害</span>") && !html.includes("<span>暴击区</span>"), "normal metric should be labeled as non-crit damage");
  assert(html.includes('<div class="topbar-damage-summary"><span>非暴</span>'), "fixed dock should follow the selected non-crit result");
}

function formulaStripResponsiveCss() {
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  const stageView = fs.readFileSync(path.join(root, "src/stage-view.js"), "utf8");
  const metricBaseIdx = css.indexOf(".metric-strip {\n  --formula-gap");
  const responsiveIdx = css.lastIndexOf("@container (max-width: 38rem)");
  assert(metricBaseIdx >= 0, "metric strip base style should exist");
  assert(responsiveIdx > metricBaseIdx, "metric strip responsive rules should follow the base style so they override it");
  assert(css.includes(".metric-strip {\n  --formula-gap: 16px;\n  display: flex;") && !css.includes(".effect-mini-strip"), "all wide formula strips should use the same flexible row component");
  assert(css.includes("flex: 1 1 max-content;"), "formula cards should distribute width from their rendered content length");
  assert(css.includes("width: min(100%, 360px);") && css.includes("height: 30px;") && css.includes("font-size: var(--font-sm);"), "the result-mode switch should stay compact inside the result column");
  assert(css.includes(".result-inline-controls {") && css.includes("grid-template-columns: minmax(0, 1.55fr) minmax(92px, 0.8fr);") && css.includes(".result-inline-controls--effect {") && css.includes(".result-inline-controls--effect-rage {") && !css.includes(".result-mode-parameters") && css.includes(".result-formula {") && css.includes(".settlement-content {") && !css.includes(".damage-lower") && !css.includes(".damage-control-stack"), "effect and offset controls should share the compact result area while formulas and settlement keep their own sections");
  assert(css.includes(".formula-card {\n  position: relative;\n  min-width: 0;") && css.includes("max-width: 100%;\n  overflow-wrap: anywhere;") && !css.includes(".effect-mini-card"), "all formula modes should share one constrained card component");
  assert(stageView.includes("function formulaCardHTML") && stageView.includes("function formulaStripHTML") && !stageView.includes("miniCardHTML") && !stageView.includes("effect-mini-strip"), "skill, effect, and offset formulas should use one card renderer and one strip renderer");
  assert(css.includes(".target-stage {\n  display: grid;") && css.includes(".formula-target-fields {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;") && css.includes(".formula-target-controls .effect-field input {\n  width: 72px;\n  height: 30px;") && css.includes(".formula-target-toggle {\n  align-self: end;\n  width: auto;\n  min-width: 64px;"), "the gameplay block should use compact controls with a baseline-aligned More button");
  assert(css.includes("grid-template-columns: repeat(4, auto) auto;") && css.includes("grid-template-columns: repeat(5, auto) auto;") && css.includes("grid-template-columns: repeat(6, auto) auto;"), "all gameplay modes should size target controls to their content");
  assert(css.includes(".formula-target-level input {\n  width: 72px;"), "enemy level should stay compact while other gameplay controls size to content");
  assert(css.includes(".formula-target-cost {\n    grid-column: 1 / -1;"), "the gameplay Cost control should stack at compact widths");
  assert(!css.includes(".result-formula-summary"), "the formula title row should not restore the textual equation");
  assert(css.includes(".metric-card span {\n  display: block;\n  min-width: 0;") && css.includes("line-height: 1.25;\n  overflow-wrap: anywhere;"), "metric card labels should wrap inside formula cards");
  assert(css.includes(".metric-card b {\n  display: block;") && css.includes("font-variant-numeric: tabular-nums;\n  overflow-wrap: anywhere;"), "metric card values should wrap internally before the cards wrap");
  assert(css.includes(".metric-strip {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    padding-left: var(--formula-gap);"), "all wrapped formula strips should reserve room for row-start multiply signs");
  assert(!css.includes("nth-child(4n + 1)::before") && !css.includes("nth-child(odd)::before"), "wrapped formulas should keep row-start multiply signs visible");
}

function topbarSticksToViewportTop() {
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  const appSrc = fs.readFileSync(path.join(root, "src/app.js"), "utf8");
  assert(css.includes("--topbar-y-pad: 0px;"), "fixed topbar should sit flush with the viewport top");
  assert(css.includes("--font-page-title: 22px;"), "fixed topbar title should stay visually prominent");
  assert(css.includes("--topbar-base-h: 68px;") && css.includes("--topbar-h: var(--topbar-base-h);"), "stage shell should reserve enough space for the fixed topbar base row");
  assert(css.includes("padding: 0 var(--page-x-pad) var(--page-y-pad);"), "stage page padding should not reintroduce a top gap above the fixed topbar");
  assert(/\.stage-shell\s*\{[^}]*display:\s*grid;[^}]*gap:\s*var\(--stage-gap\);/s.test(css), "top-level stage cards should use the shared stage gap");
  assert(/\.stage-grid\s*\{[^}]*margin-top:\s*0;/s.test(css), "the lower grid should rely on the shared stage gap instead of adding a second margin");
  assert(css.includes(".stage-topbar {\n  position: fixed;") && css.includes("border-radius: 0 0 14px 14px;"), "fixed topbar should have square top corners when attached to the viewport top");
  assert(css.includes(".topbar-damage-dock") && css.includes(".topbar-damage-dock[hidden]") && css.includes(".topbar-output-slots") && css.includes(".topbar-output-slot.on"), "fixed topbar should expose a collapsible damage dock with selectable output slots");
  assert(css.includes(".topbar-damage-summary {\n  min-height: 40px;\n  display: flex;\n  align-items: center;") && /\.topbar-output-slot\s*\{[^}]*height:\s*40px;[^}]*min-height:\s*40px;[^}]*display:\s*flex;[^}]*align-items:\s*center;/s.test(css), "fixed damage and output summaries should share one compact aligned row");
  assert(/\.topbar-output-slots\s*\{[^}]*display:\s*flex;[^}]*justify-content:\s*flex-end;/s.test(css) && css.includes(".topbar-output-slot {\n  flex: 0 1 auto;\n  width: fit-content;"), "fixed output slots should size to their content and stay aligned to the right edge");
  assert(/\.topbar-output-slot\s*\{[^}]*overflow:\s*visible;/s.test(css) && css.includes(".topbar-output-set-icons .echo-set-chip::after {\n  width: max-content;\n  max-width: none;\n  white-space: nowrap;\n  overflow-wrap: normal;"), "fixed Sonata icons should show their complete hover names on one horizontal line");
  assert(appSrc.includes('window.addEventListener("scroll", queueDamageDockSync') && appSrc.includes('getElementById("damage-dock-sentinel")') && appSrc.includes("source.getBoundingClientRect().top > topbarBaseBottom") && !appSrc.includes('getElementById("damage-result-source")'), "damage dock should appear when the damage summary crosses the fixed topbar");
  assert(appSrc.includes('"dock-output": (el, idx)') && appSrc.includes("state.outputIdx = idx; render();"), "fixed output slots should switch the calculated character");
}

function betaVersionBadgesRender() {
  resetTeam(["jinhsi"]);
  __T.state.lang = "zh-CN";
  const slot = __T.state.slots[0];
  const w = findWeapon(slot.weapon);
  const set = findSonata(slot.echo.primary);
  const choices = window.WUWA_EQUIPMENT.leadChoicesForEcho(slot.echo);
  const choice = choices.find((item) => item.key === slot.echo.lead) || choices[0];
  const leadIdx = Math.max(0, choices.indexOf(choice));
  const betaLabel = "Beta3.5.6";
  const clone = (value) => JSON.parse(JSON.stringify(value || {}));
  const originalSonataPack = clone(window.WUWA_LANGUAGES.localeData("zh-CN", "sonatas", set.id));
  const patchedSonataPack = clone(originalSonataPack);
  patchedSonataPack.betaVersion = betaLabel;
  patchedSonataPack.leads = patchedSonataPack.leads || [];
  patchedSonataPack.leads[leadIdx] = { ...(patchedSonataPack.leads[leadIdx] || {}), betaVersion: betaLabel };
  const restoredSonataPack = { ...originalSonataPack, betaVersion: null };
  try {
    window.WUWA_LANGUAGES.extend("zh-CN", {
      data: {
        chars: { jinhsi: { betaVersion: betaLabel } },
        weapons: { [w.id]: { betaVersion: betaLabel } },
        sonatas: { [set.id]: patchedSonataPack },
      },
    });
    __T.render();
    let html = String(board.innerHTML);
    assert((html.match(/class="team-card-beta"/g) || []).length === 1, "collapsed team card should render one card-level beta badge for same-version beta data");
    assert(html.indexOf("team-card-beta") < html.indexOf("team-card-clear"), "collapsed team card should place the beta badge on the top-left border before the clear button");
    const cardBeta = html.match(/<div class="team-card-beta">[\s\S]*?<\/div>/)?.[0] || "";
    assert(cardBeta.includes(betaLabel), "card-level beta badge should display the exact beta version label");
    const charButton = html.match(/<div class="combo team-char-combo[\s\S]*?<button[\s\S]*?<\/button>/)?.[0] || "";
    const weaponButton = html.match(/<div class="combo team-weapon-combo[\s\S]*?<button[\s\S]*?<\/button>/)?.[0] || "";
    const setIcons = html.match(/<div class="team-gear-set-icons"[\s\S]*?<\/div>/)?.[0] || "";
    const leadWrap = html.match(/<span class="team-gear-select-wrap">[\s\S]*?<\/span>/)?.[0] || "";
    assert(!charButton.includes(betaLabel) && !weaponButton.includes(betaLabel) && !setIcons.includes("beta-version-badge") && !leadWrap.includes(betaLabel), "collapsed team card controls should not repeat beta badges inline");
    const charOption = html.match(/<li[^>]+data-kind="char"[^>]+data-value="jinhsi"[\s\S]*?<\/li>/)?.[0] || "";
    assert(charOption.includes(betaLabel), "character dropdown options should keep beta labels");
    const weaponOption = html.match(new RegExp(`<li[^>]+data-kind="weapon"[^>]+data-value="${w.id}"[\\s\\S]*?</li>`))?.[0] || "";
    assert(weaponOption.includes(betaLabel) && !weaponOption.includes("combo-tag-sig"), "beta weapons should not render the signature weapon tag");
    slot.echo.detailMode = true;
    __T.render();
    html = String(board.innerHTML);
    assert(html.includes("echo-detail-set-select") && html.includes(betaLabel), "detailed echo selectors should expose beta version labels");
    const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
    assert(css.includes(".beta-version-badge") && css.includes("font-size: var(--font-xs);") && css.includes("left: 16px;") && css.includes("transform: translateY(-50%);"), "beta badges should use the project minimum font size and sit on the top-left card border");
    assert(!css.includes(".team-card.on::before") && css.includes(".team-card.on {\n  border-color: #20211e;"), "selected team card should highlight the whole border instead of drawing a side bar");
  } finally {
    window.WUWA_LANGUAGES.extend("zh-CN", {
      data: {
        chars: { jinhsi: { betaVersion: null } },
        weapons: { [w.id]: { betaVersion: null } },
        sonatas: { [set.id]: restoredSonataPack },
      },
    });
    window.WUWA_LANGUAGES.applyData(window.WUWA, window.WUWA_DATA, window.WUWA_SONATAS);
    slot.echo.detailMode = false;
  }
}

function teamCardLongNamesWrap() {
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  const rule = (selector) => {
    const start = css.indexOf(`${selector} {`);
    if (start < 0) return "";
    const end = css.indexOf("\n}", start);
    return end >= 0 ? css.slice(start, end + 2) : "";
  };
  const nameRule = rule(".team-char-copy b");
  const nameLineRule = rule(".team-char-name-line");
  const metaRule = rule(".team-char-meta");
  const headRule = rule(".team-card-head");
  const seqRule = rule(".team-card .team-seq-select");
  const echoRowRule = rule(".team-echo-row");
  const echoSelectRule = rule(".team-gear-select");
  assert(nameRule.includes("overflow-wrap: anywhere;") && nameRule.includes("white-space: normal;"), "team card character names should wrap instead of truncating");
  assert(nameLineRule.includes("overflow: visible;") && nameLineRule.includes("white-space: normal;"), "team card character name line should not clip wrapped names");
  assert(metaRule.includes("text-overflow: ellipsis;") && metaRule.includes("white-space: nowrap;"), "team card character meta should remain compact");
  assert(headRule.includes("grid-template-columns: minmax(0, 1fr);"), "team card character picker should use its own row");
  assert(seqRule.includes("width: 100%;") && seqRule.includes("justify-self: stretch;"), "team card sequence selector should use a full standalone row");
  assert(echoRowRule.includes("background: var(--team-control-bg);") && echoRowRule.includes("padding-left: 9px;"), "echo set icon and lead selector should share one aligned control background");
  assert(echoSelectRule.includes("background-color: transparent;") && echoSelectRule.includes("padding-left: 0;"), "lead selector should not draw a second inset control behind the echo set icon");
}

function teamCardSequenceSelectShowsChainNames() {
  resetTeam(["jinhsi"]);
  __T.state.lang = "zh-CN";
  __T.render();
  const html = String(board.innerHTML);
  const select = html.match(/<select class="team-meta-select team-seq-select"[\s\S]*?<\/select>/)?.[0] || "";
  assert(select.includes("1链 · 沉海洄天溯") && select.includes("6链 · 寒尽又逢春"), "team card sequence selector should show resonance chain names");
  assert(html.indexOf("team-seq-row") > html.indexOf("team-card-head"), "team card sequence selector should render below the character header");

  __T.state.lang = "ja-JP";
  __T.render();
  let localized = String(board.innerHTML);
  assert(localized.includes("チェーン1") && !localized.includes("共鳴チェーン1"), "Japanese sequence selector should use short chain labels");
  assert(window.WUWA_LANGUAGES.source("链6·寒尽又逢春").startsWith("チェーン6"), "Japanese chain source labels should omit resonance");

  __T.state.lang = "ko";
  __T.render();
  localized = String(board.innerHTML);
  assert(localized.includes("체인1") && !localized.includes("공명 체인 1"), "Korean sequence selector should use short chain labels");
  assert(window.WUWA_LANGUAGES.source("链6·寒尽又逢春").startsWith("체인6"), "Korean chain source labels should omit resonance");
}

function characterPickerSortsNewestFirst() {
  resetTeam(["jinhsi"]);
  __T.state.lang = "zh-CN";
  __T.render();
  const picked = [];
  for (const match of String(board.innerHTML).matchAll(/data-act="combo-pick" data-kind="char" data-slot="0" data-value="([^"]+)"/g)) {
    const id = match[1];
    if (window.WUWA.chars[id] && !picked.includes(id)) picked.push(id);
  }
  const firstThree = new Set(picked.slice(0, 3));
  assert(["rover_electro", "yangyang_xuanling", "suisui"].every((id) => firstThree.has(id)), `character picker should list the newest 3.5 characters first: ${picked.slice(0, 5).join(", ")}`);
  assert(Number(window.WUWA.chars[picked[3]]?.debut) <= 3.4, "older stable characters should follow the 3.5 characters");
}

function v35CharacterEntryRegressions() {
  const y = window.WUWA.chars.yangyang_xuanling;
  assert(y?.debut === 3.5 && y.betaVersion == null, "Yangyang: Xuanling should be stable v3.5 data");
  assert(y.effectTypes?.includes("havocBane"), "Yangyang: Xuanling should explicitly provide Havoc Bane");
  assert(skill(y, "azure_na4").triggerEvents?.includes("applyHavocBane"), "Yangyang: Xuanling azure NA4 should apply Havoc Bane");
  assert(skill(y, "feather_na4").triggerEvents?.includes("applyHavocBane"), "Yangyang: Xuanling feather NA4 should apply Havoc Bane");
  const oneWithWindEvent = (y.skillEvents || []).find((event) => event.requiresState === "one_with_wind_active");
  assert(oneWithWindEvent?.event === "applyHavocBane" && oneWithWindEvent.stacks === 6 && oneWithWindEvent.skills?.includes("flow_azure") && oneWithWindEvent.skills?.includes("flow_feather"), "Yangyang: Xuanling One with the Wind should make both Sword Stance Flow skills apply 6 Havoc Bane stacks");
  assert((y.combatStates || []).some((state) => state.id === "one_with_wind"), "Yangyang: Xuanling should expose One with the Wind as an explicit trigger condition");
  const yangyangC6Heavy = allBuffs(y).find((b) => b.id === "c6_heavy_amp");
  assert(yangyangC6Heavy?.zone === "vulnerability" && yangyangC6Heavy.defaultActive === false && !yangyangC6Heavy.triggerEvents?.includes("applyHavocBane"), "Yangyang: Xuanling C6 target-takes-damage effect should be a manually confirmed vulnerability after Havoc Bane is inflicted");
  assert(skill(y, "outro").category === "outroSkill" && skill(y, "outro").multiplier === 300 && skill(y, "outro").formula === "300.00%", "Yangyang: Xuanling Outro should keep its real 300% damage entry");
  const yangyangOutro = allBuffs(y).find((b) => b.id === "b_outro_havoc_amp");
  assert(yangyangOutro?.triggerOutro === true && yangyangOutro.requiresEffectStacks?.effect === "havocBane", "Yangyang: Xuanling outro support effect should require Havoc Bane after Outro confirmation");

  const vowBuffs = allBuffs(y).filter((b) => b.id.startsWith("b_unbroken_vow_stack_"));
  assert(vowBuffs.length === 6, "Yangyang: Xuanling Unbroken Vow should use six fixed threshold buffs");
  assert(vowBuffs.every((b, idx) => b.zone === "amplify" && b.value === (idx < 3 ? 10 : 12) && b.requiresEffectStacks?.stacks === idx + 1 && !b.maxStacks), "Yangyang: Xuanling Unbroken Vow thresholds should add 10/10/10/12/12/12% at Havoc Bane stacks 1-6");
  resetTeam(["yangyang_xuanling"]);
  const vowSlot = __T.state.slots[0];
  vowSlot.seq = 3;
  vowSlot.skill = "intro";
  assert(vowBuffs.every((item) => !__T.buffStatus(vowSlot, 0, buff(vowSlot, item.id)).applies), "Yangyang: Xuanling Unbroken Vow should still require available Havoc Bane stacks");
  [10, 20, 30, 42, 54, 66].forEach((expected, idx) => {
    __T.state.effectCalc = { key: "havocBane", providerIdx: 0, stacks: idx + 1, stackMode: "manual", deepen: 0 };
    const total = vowBuffs.reduce((sum, item) => sum + (__T.buffStatus(vowSlot, 0, buff(vowSlot, item.id)).applies ? item.value : 0), 0);
    expectEqual(total, expected, `Yangyang: Xuanling Unbroken Vow should total ${expected}% at ${idx + 1} Havoc Bane stacks`);
  });
  vowSlot.skill = "flow_azure";
  vowSlot.resources.melody = 0;
  vowSlot.toggles[__T.stateChoiceKey("sword_stance")] = "sword_stance_feather";
  vowSlot.toggles[__T.stateChoiceKey("one_with_wind")] = "one_with_wind_active";
  __T.state.effectCalc = { key: "havocBane", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  expectEqual(__T.compute().effect.actionStacks, 6, "Yangyang: Xuanling Sword Stance Flow should apply 6 Havoc Bane stacks only in One with the Wind");

  const stanceKey = __T.stateChoiceKey("sword_stance");
  vowSlot.toggles[stanceKey] = "sword_stance_azure";
  vowSlot.resources.melody = 100;
  let skillIds = new Set(__T.availableSkills(vowSlot).map((item) => item.id));
  assert(skillIds.has("switch_feather") && !skillIds.has("switch_azure") && !skillIds.has("flow_feather"), "Yangyang: Xuanling Azure Stance should switch toward Feather Stance while Melody remains");
  vowSlot.resources.melody = 0;
  skillIds = new Set(__T.availableSkills(vowSlot).map((item) => item.id));
  assert(skillIds.has("flow_feather") && !skillIds.has("switch_feather"), "Yangyang: Xuanling Azure Stance should replace the switch with Feather Flow at zero Melody");
  vowSlot.toggles[stanceKey] = "sword_stance_feather";
  vowSlot.resources.melody = 100;
  skillIds = new Set(__T.availableSkills(vowSlot).map((item) => item.id));
  assert(skillIds.has("switch_azure") && !skillIds.has("switch_feather") && !skillIds.has("flow_azure"), "Yangyang: Xuanling Feather Stance should switch toward Azure Stance while Melody remains");
  vowSlot.resources.melody = 0;
  skillIds = new Set(__T.availableSkills(vowSlot).map((item) => item.id));
  assert(skillIds.has("flow_azure") && !skillIds.has("switch_azure"), "Yangyang: Xuanling Feather Stance should replace the switch with Azure Flow at zero Melody");

  const featheredOath = allBuffs(y).find((item) => item.id === "b_windbound_heavy_cd");
  assert(featheredOath?.value === 150 && featheredOath.maxStacks === 6, "Yangyang: Xuanling Feathered Oath should total 150% Crit. DMG at six stacks");
  vowSlot.skill = "azure_heavy";
  let runtimeOath = buff(vowSlot, "b_windbound_heavy_cd");
  assert(__T.buffStatus(vowSlot, 0, runtimeOath).toggleOn, "Yangyang: Xuanling Feathered Oath should default checked when its precondition is confirmable");
  expectEqual(__T.buffStackCount(vowSlot, runtimeOath, 0), 0, "Yangyang: Xuanling Feathered Oath should keep its independent default stack count");
  __T.setBuffToggle(vowSlot, 0, runtimeOath.id, true);
  vowSlot.toggles.stk_b_windbound_heavy_cd = 1;
  expectEqual(__T.buffFormulaText(vowSlot, runtimeOath, 0), "+25%", "Yangyang: Xuanling Feathered Oath should grant 25% Crit. DMG per stack");
  vowSlot.toggles.stk_b_windbound_heavy_cd = 6;
  expectEqual(__T.buffFormulaText(vowSlot, runtimeOath, 0), "+150%", "Yangyang: Xuanling Feathered Oath should grant 150% Crit. DMG at six stacks");

  const s = window.WUWA.chars.suisui;
  assert(s?.debut === 3.5 && s.betaVersion == null, "Suisui should be stable v3.5 data");
  assert(skill(s, "air").multiplier === 70.72 && skill(s, "air").formula === "70.72%", "Suisui Zephyr mid-air attack should use the formal v3.5 lv10 value");
  assert(skill(s, "drizzle_na2").multiplier === 159.07 && skill(s, "drizzle_na2").formula === "31.81% + 15.91% × 2 + 15.91% × 2 + 31.81% + 31.81%", "Suisui Drizzle NA2 should use the formal v3.5 multi-hit formula");
  assert(skill(s, "drizzle_na3").multiplier === 165.12 && skill(s, "drizzle_na3").formula === "13.76% × 3 + 13.76% × 3 + 13.76% × 3 + 13.76% × 3", "Suisui Drizzle NA3 should use the formal v3.5 multi-hit formula");
  assert(skill(s, "drizzle_na4").multiplier === 159.05 && skill(s, "drizzle_na4").formula === "159.05%", "Suisui Drizzle NA4 should use the formal v3.5 single-hit value");
  const awakening = skill(s, "skill_awakening");
  assert(awakening.multiplier === 28.63 && awakening.formula === "28.63%", "Suisui Awakening Spring should use the SkillAttributes lv10 value");
  assert(awakening.requiresResourceFull === "cloud_breath", "Suisui Awakening Spring should require full Cloud Breath");
  assert(awakening.fallbackSkillId === "skill_zephyr", "Suisui Awakening Spring should replace the normal Zephyr Skill at full Cloud Breath");
  assert([].concat(awakening.requiresState || []).includes("form_zephyr"), "Suisui Awakening Spring should be available from Zephyr Stance");
  assert(![].concat(awakening.impliedStates || []).includes("form_drizzle"), "Suisui Awakening Spring should not require already being in Drizzle Stance");
  assert(skill(s, "intro").multiplier === 28.63 && skill(s, "intro").formula === "28.63%", "Suisui Intro should use the SkillAttributes lv10 value");

  resetTeam(["suisui"]);
  const suisuiDps = __T.state.slots[0];
  assert(__T.resolvedSkill(suisuiDps)?.id === "skill_awakening", "Suisui default full-resource state should select Awakening Spring");
  skillIds = new Set(__T.availableSkills(suisuiDps).map((item) => item.id));
  assert(skillIds.has("skill_awakening") && !skillIds.has("skill_zephyr"), "Suisui full Cloud Breath should show Awakening Spring in place of the normal Zephyr Skill");
  suisuiDps.resources.cloud_breath = 0;
  skillIds = new Set(__T.availableSkills(suisuiDps).map((item) => item.id));
  assert(skillIds.has("skill_zephyr") && !skillIds.has("skill_awakening"), "Suisui zero Cloud Breath should show the normal Zephyr Skill instead of Awakening Spring");

  let e = weaponEffect("azure_oath", "e1");
  assert(e.zone === "amplify" && e.damageType === "heavy" && e.defaultActive === false && !e.triggerEvents, "Azure Oath post-Havoc-Bane heavy effect should be manually confirmed after the attachment hit");
  e = weaponEffect("azure_oath", "e2");
  assert(e.zone === "defIgnore" && e.damageType === "heavy" && e.defaultActive === false && !e.triggerEvents, "Azure Oath post-Havoc-Bane heavy effect should include manually confirmed defense ignore");
  resetTeam(["yangyang_xuanling"]);
  const ySlot = __T.state.slots[0];
  ySlot.weapon = "azure_oath";
  ySlot.skill = "azure_heavy";
  assert(__T.resolvedSkill(ySlot)?.triggerEvents?.includes("applyHavocBane"), "Yangyang: Xuanling Azure Heavy should still attach Havoc Bane");
  assert(__T.buffStatus(ySlot, 0, buff(ySlot, "w_e1")).applies, "Azure Oath heavy deepen should default checked");
  assert(__T.buffStatus(ySlot, 0, buff(ySlot, "w_e2")).applies, "Azure Oath defense ignore should default checked");
  __T.setBuffToggle(ySlot, 0, "w_e1", false);
  assert(!__T.buffStatus(ySlot, 0, buff(ySlot, "w_e1")).applies, "Azure Oath heavy deepen should remain manually disableable");
  __T.setBuffToggle(ySlot, 0, "w_e1", true);
  __T.setBuffToggle(ySlot, 0, "w_e2", true);
  assert(__T.buffStatus(ySlot, 0, buff(ySlot, "w_e1")).applies, "Azure Oath heavy deepen should apply after confirmation");
  assert(__T.buffStatus(ySlot, 0, buff(ySlot, "w_e2")).applies, "Azure Oath defense ignore should apply after confirmation");
  e = weaponEffect("firstlights_herald", "e1");
  assert(e.zone === "attackPercent" && e.scope === "team" && e.defaultActive === false, "Firstlight's Herald conditional team ATK should stay manually confirmed");
  const landscapeCap = allBuffs(s).find((b) => b.id === "b_landscape_effect_cap");
  assert(landscapeCap?.defaultActive === false, "Suisui effect-cap increase should require confirmation that an abnormal effect was inflicted in the field");
  const reflectingFinal = allBuffs(s).find((b) => b.id === "b_outro_reflecting_final");
  assert(reflectingFinal?.defaultActive === false && reflectingFinal.triggerOutro === true && reflectingFinal.requiresAllStates?.join(",") === "ceaseless_landscape_active,reflecting_shadows_active" && reflectingFinal.requiresResourceAtLeast?.id === "floral_epistle" && reflectingFinal.requiresResourceAtLeast?.value === 400, "Suisui 400 Floral Epistle final damage should require manual Outro confirmation, both states, and the resource threshold");
  const flowerAtk = allBuffs(s).find((b) => b.id === "b_outro_flower_atk");
  assert(!flowerAtk?.requiresAnyEffectStacks, "Suisui Undulating Mist ATK buff should remain after the triggering abnormal-effect stack is consumed");
  assert(flowerAtk?.triggerOutro === true && flowerAtk.requiresResourceAtLeast?.id === "floral_epistle" && flowerAtk.requiresResourceAtLeast?.value === 600, "Suisui Undulating Mist ATK buff should require Outro and 600 Floral Epistle");
  assert(flowerAtk?.scaleBy?.rate === 0.8333333333333334, "Suisui Undulating Mist ATK conversion should preserve the exact 5/6 rate");
  assert(!allBuffs(s).find((b) => b.id === "c2_effect_cd")?.requiresAnyEffectStacks, "Suisui C2 Crit. DMG should remain after the triggering abnormal-effect stack is consumed");

  resetTeam(["chisa", "suisui"]);
  const suisuiSlot = __T.state.slots[1];
  assert(__T.buffStatus(suisuiSlot, 1, buff(suisuiSlot, "b_outro_all_amp")).applies, "Suisui Outro deepen should default checked for support");
  suisuiSlot.resources.floral_epistle = 399;
  __T.setBuffToggle(suisuiSlot, 1, "b_outro_reflecting_final", true);
  assert(!__T.buffStatus(suisuiSlot, 1, buff(suisuiSlot, "b_outro_reflecting_final")).applies, "Suisui 400 Floral Epistle effect should stay gated at 399");
  suisuiSlot.resources.floral_epistle = 400;
  assert(__T.buffStatus(suisuiSlot, 1, buff(suisuiSlot, "b_outro_reflecting_final")).applies, "Suisui 400 Floral Epistle effect should apply after its states and Outro are confirmed");
  suisuiSlot.resources.floral_epistle = 599;
  __T.setBuffToggle(suisuiSlot, 1, "b_outro_flower_atk", true);
  assert(!__T.buffStatus(suisuiSlot, 1, buff(suisuiSlot, "b_outro_flower_atk")).applies, "Suisui 600 Floral Epistle effect should stay gated at 599");
  suisuiSlot.resources.floral_epistle = 600;
  assert(__T.buffStatus(suisuiSlot, 1, buff(suisuiSlot, "b_outro_flower_atk")).applies, "Suisui 600 Floral Epistle effect should apply after its consumption trigger and Outro are confirmed even when no stack remains");
  suisuiSlot.seq = 2;
  const c2EffectCrit = buff(suisuiSlot, "c2_effect_cd");
  assert(__T.buffStatus(suisuiSlot, 1, c2EffectCrit).applies, "Suisui C2 Crit. DMG should default checked");
  __T.setBuffToggle(suisuiSlot, 1, c2EffectCrit.id, true);
  assert(__T.buffStatus(suisuiSlot, 1, buff(suisuiSlot, "c2_effect_cd")).applies, "Suisui C2 Crit. DMG should apply after confirmation even when the consumed stack is gone");

  const set = findSonata(350433);
  assert(set?.betaVersion == null && set.fetterGroupId === 33, "Song of Feathered Trace should be stable and keep its FetterGroup link");
  assert(set.lead?.id === "thousand_puppet_pavilion" && set.lead.cost === 4, "Song of Feathered Trace should use Thousand-Puppet Pavilion as its 4C lead Echo");
  assert(set.p5.every((b) => b.defaultActive === false), "Song of Feathered Trace 5-piece effects should require manual confirmation");
}

function roverElectroEntryRegressions() {
  const c = window.WUWA.chars.rover_electro;
  assert(c?.debut === 3.5 && c.betaVersion == null, "Rover: Electro should be stable v3.5 data");
  assert(c.signatureWeaponId === null && c.defaultWeaponId === "emerald_of_genesis", "Rover: Electro should not invent a signature weapon and should use the existing default sword");
  assert(c.base.hp === 10775 && c.base.attack === 437 && c.base.defense === 1136, "Rover: Electro should use formal level-90 base stats");
  assert(c.base.tree.critRate === 8 && c.base.tree.attackPct === 12, "Rover: Electro should total the formal Crit. Rate and ATK stat nodes");
  assert(c.effectTypes?.includes("electro"), "Rover: Electro should explicitly provide Electro Flare");
  assert((c.resources || []).find((r) => r.id === "electric_surge")?.max === 120, "Rover: Electro Electric Surge cap should be 120");
  assert((c.resources || []).find((r) => r.id === "thunder_rage")?.max === 100, "Rover: Electro Thunder Rage cap should be 100");
  assert((c.resources || []).find((r) => r.id === "concerto_energy")?.max === 100, "Rover: Electro should expose Concerto Energy for the 60-point hold-Overshock gate");

  assert(skill(c, "overload_tap").multiplier === 1412.58 && skill(c, "overload_hold").multiplier === 1412.58, "Rover: Electro tap and hold Overshock should use the formal level-10 multiplier");
  const holdOvershock = skill(c, "overload_hold");
  assert(holdOvershock.requiresAllResourcesAtLeast?.some((req) => req.id === "concerto_energy" && req.value === 60), "Rover: Electro hold Overshock should require 60 Concerto Energy");
  assert(holdOvershock.triggerEvents?.includes("consumeConcerto"), "Rover: Electro hold Overshock should emit the Concerto-consumption event");
  assert(skill(c, "lib").multiplier === 1192.86, "Rover: Electro Ultimate Tactics should use the formal level-10 multiplier");
  assert(["thrum_aero_air1", "thrum_aero_air2"].every((id) => skill(c, id).triggerEvents?.includes("heal")), "Rover: Electro Aero Mid-air Attacks should emit healing events");
  assert(["air", "dodge", "havoc_air1", "havoc_air2", "havoc_air3", "air_dodge"].every((id) => skill(c, id).damageType === "basic"), "Rover: Electro Deterrence variants should follow the official Basic Attack damage classification");
  const elementSkills = {
    thrum_spectro1: "spectro",
    thrum_havoc1: "havoc",
    thrum_aero: "aero",
    thunder_bane: "electro",
  };
  Object.entries(elementSkills).forEach(([id, element]) => {
    const sk = skill(c, id);
    assert(sk.element === element && sk.damageType === "resonanceSkill", `Rover: Electro ${id} should use ${element} Resonance Skill damage`);
  });
  assert((c.skillEvents || []).some((event) => event.event === "applyElectroFlare" && event.stacks === 10 && event.skills?.includes("overload_tap") && event.skills?.includes("overload_hold")), "Rover: Electro Overshock should apply 10 Electro Flare stacks through Decipher");
  assert((c.skillEvents || []).some((event) => event.seq === 2 && event.event === "applyElectroFlare" && event.stacks === 5 && event.skills?.includes("lib")), "Rover: Electro chain 2 should make Ultimate Tactics apply 5 Electro Flare stacks");
  const thunderBane = skill(c, "thunder_bane");
  assert(thunderBane.triggeredDamage === true && !thunderBane.triggerEvents?.some((event) => String(event).startsWith("cast")), "Rover: Electro Thunder Bane should be triggered damage rather than a cast event");
  assert(thunderBane.multiplier === 0 && thunderBane.perStack === 39.77 && thunderBane.stackMax === 6 && thunderBane.defaultLayers === 1, "Rover: Electro Thunder Bane should settle 39.77% once per confirmed Thrum hit");
  assert(thunderBane.requiresAllStates?.includes("thrum_hit"), "Rover: Electro Thunder Bane should require a confirmed Thrum hit");

  const teamAtk = allBuffs(c).find((b) => b.id === "b_overload_team_atk");
  const regression = allBuffs(c).find((b) => b.id === "b_regression_skill_bonus");
  const outro = allBuffs(c).find((b) => b.id === "b_outro_all_amp");
  assert(teamAtk?.zone === "attackPercent" && teamAtk.value === 10 && teamAtk.scope === "team" && teamAtk.defaultActive === false && !teamAtk.triggerSkills, "Rover: Electro post-Overshock team ATK should require prior-trigger confirmation");
  assert(regression?.zone === "typeBonus" && regression.damageType === "resonanceSkill" && regression.value === 20 && regression.defaultActive === false && !regression.triggerSkills, "Rover: Electro Regression should require prior hold-Overshock confirmation");
  assert(outro?.zone === "amplify" && outro.value === 25 && outro.triggerOutro === true && outro.requiresAnyEffectStacks?.stacks === 1, "Rover: Electro Outro should require Outro confirmation and an inflicted Negative Status");
  assert(allBuffs(c).find((b) => b.id === "k3_overload")?.zone === "skillMultBonus", "Rover: Electro chain 3 should increase the Overshock skill multiplier");
  assert(allBuffs(c).find((b) => b.id === "k5_crit_damage")?.requiresState === "apex_resonance", "Rover: Electro chain 5 Crit. DMG should require Apex Resonance");

  resetTeam(["rover_electro"]);
  const slot = __T.state.slots[0];
  const modeKey = __T.stateChoiceKey("resonance_mode");
  slot.resources.concerto_energy = 59;
  let skillIds = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(skillIds.has("overload_tap") && !skillIds.has("overload_hold"), "Rover: Electro should hide hold Overshock below 60 Concerto Energy while keeping tap Overshock available");
  slot.resources.concerto_energy = 60;
  skillIds = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(skillIds.has("overload_tap") && skillIds.has("overload_hold"), "Rover: Electro should unlock hold Overshock at 60 Concerto Energy");

  slot.skill = "overload_hold";
  __T.state.effectCalc = { key: "electro", providerIdx: 0, stacks: 10, stackMode: "auto", electroRageStacks: 0, deepen: 0 };
  let effectResult = __T.compute().effect;
  expectEqual(effectResult.actionStacks, 10, "Rover: Electro Overshock should expose 10 automatic Electro Flare stacks");
  expectEqual(effectResult.stacks, 10, "Rover: Electro Overshock should settle 10 Electro Flare stacks by default");
  slot.seq = 2;
  slot.skill = "lib";
  effectResult = __T.compute().effect;
  expectEqual(effectResult.actionStacks, 5, "Rover: Electro chain 2 Ultimate Tactics should expose 5 automatic Electro Flare stacks");
  expectEqual(effectResult.stacks, 5, "Rover: Electro chain 2 Ultimate Tactics should settle 5 Electro Flare stacks by default");
  __T.state.effectCalc.stackMode = "manual";
  __T.state.effectCalc.stacks = 7;
  expectEqual(__T.compute().effect.stacks, 7, "manual effect stacks should override Rover: Electro action-derived stacks");
  __T.state.effectCalc = { key: "none", providerIdx: null, stacks: 10, stackMode: "auto", electroRageStacks: 0, deepen: 0 };
  slot.seq = 0;

  assert(skillIds.has("overload_tap") && skillIds.has("overload_hold") && !skillIds.has("thrum_spectro1"), "Rover: Electro normal mode should show full-Surge Overshock and hide Thrum of All Sounds");
  slot.toggles[modeKey] = "apex_resonance";
  skillIds = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(skillIds.has("thrum_spectro1") && !skillIds.has("thunder_bane") && !skillIds.has("skill") && !skillIds.has("skill_repel") && !skillIds.has("overload_tap") && !skillIds.has("overload_hold"), "Rover: Electro Apex Resonance should replace Thunderclap and Overshock with Thrum of All Sounds while keeping Thunder Bane gated behind a hit");

  slot.skill = "thrum_spectro1";
  slot.echo.fields["elem:spectro"] = 0;
  slot.echo.fields["elem:electro"] = 0;
  const baseline = __T.compute();
  assert(baseline.damageElement === "spectro", "Rover: Electro Spectro Thrum should expose Spectro as the current damage element");
  slot.echo.fields["elem:spectro"] = 17;
  const spectroBonus = __T.compute();
  assert(Math.abs(spectroBonus.bonus - baseline.bonus - 0.17) < 1e-9, "Rover: Electro Spectro Thrum should use Spectro echo damage bonus");
  slot.echo.fields["elem:spectro"] = 0;
  slot.echo.fields["elem:electro"] = 23;
  const electroBonus = __T.compute();
  assert(Math.abs(electroBonus.bonus - baseline.bonus) < 1e-9, "Rover: Electro Spectro Thrum should not use Electro echo damage bonus");

  const detailOptions = window.WUWA_EQUIPMENT.echoMainOptions(3, c).map((option) => option.key);
  assert(["elem:electro", "elem:aero", "elem:spectro", "elem:havoc"].every((key) => detailOptions.includes(key)), "Rover: Electro detailed 3-cost Echo options should include every damage element used by the character");
  slot.echo.detailMode = true;
  const detail = window.WUWA_EQUIPMENT.ensureEchoDetail(slot, c);
  detail.echoes[1].main = "attackPct";
  const detailBaseline = __T.compute();
  detail.echoes[1].main = "elem:spectro";
  const detailSpectro = __T.compute();
  assert(Math.abs(detailSpectro.bonus - detailBaseline.bonus - 0.3) < 1e-9, "Rover: Electro detailed Echo mode should apply a Spectro 3-cost main stat to Spectro Thrum damage");
  slot.echo.detailMode = false;

  slot.toggles[__T.stateChoiceKey("thunder_bane_trigger")] = "thrum_hit";
  skillIds = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(skillIds.has("thunder_bane"), "Rover: Electro should expose Thunder Bane only after confirming a Thrum hit");
  slot.skill = "thunder_bane";
  slot.layers = 3;
  expectEqual(__T.compute().panel.baseMult, 119.31, "Rover: Electro Thunder Bane should multiply 39.77% by the confirmed trigger count");
  slot.echo.primary = 3;
  slot.echo.combo = "single5";
  const voidThunder = __T.slotBuffs(slot).find((item) => item.id === "son_3_p5_0");
  assert(voidThunder, "Rover: Electro trigger regression should find the Void Thunder 5-piece effect");
  assert(__T.buffStatus(slot, 0, voidThunder).precondition && __T.buffStatus(slot, 0, voidThunder).applies, "Void Thunder should default checked when its casting precondition remains confirmable");
  slot.toggles[modeKey] = "normal_resonance";
  slot.skill = "overload_tap";
  slot.layers = null;
  assert(__T.buffStatus(slot, 0, voidThunder).applies, "an actual Overshock cast should still trigger Void Thunder");
}

function renderPreservesScroll() {
  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;
  const oldScrollTo = window.scrollTo;
  const oldRaf = window.requestAnimationFrame;
  const restored = [];
  let raf = null;
  try {
    window.scrollX = 12;
    window.scrollY = 345;
    window.scrollTo = (x, y) => { restored.push([x, y]); };
    window.requestAnimationFrame = (fn) => { raf = fn; };
    __T.render();
    expectEqual(restored[0] && restored[0].join(","), "12,345", "render should restore scroll position synchronously after full rerender");
    assert(typeof raf === "function", "render should schedule a second scroll restoration for layout changes");
    raf();
    expectEqual(restored[1] && restored[1].join(","), "12,345", "render should restore scroll position again on the next frame");
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
  assert(appJs.includes("function replaceOuterHTML") && appJs.includes('replaceOuterHTML("result-main-display", resultMainDisplayHTML(r))') && appJs.includes("const sections = [resultMain, resultFormula, settlementStage, damageDock, buffStage]") && appJs.includes("sections.forEach(bind);"), "partial refresh should preserve inline result controls and replace only local workbench sections");
  assert(appJs.includes("function withScrollRestore") && /function refreshAfterBuffToggle\(\)\s*\{\s*withScrollRestore/.test(appJs), "partial buff refresh should preserve scroll while replacing sections");
  assert(appJs.includes("restoreScrollPosition(pos);\n  if (typeof window.requestAnimationFrame"), "scroll restoration should happen immediately and again on the next frame");
  assert(stageJs.includes('id="target-controls"') && stageJs.includes('id="result-formula"') && stageJs.includes('id="settlement-stage"') && stageJs.includes('id="buff-stage"'), "partial buff refresh needs stable result, settlement, and buff section ids");
  assert(stageJs.includes("resultMainDisplayHTML, resultMainHTML, resultFormulaBodyHTML, resultFormulaHTML, damageDockHTML") && !stageJs.includes("activeResultMode, resultModeTabsHTML, resultMainHTML") && !stageJs.includes("damageDockHTML,\n      targetControlsHTML") && stageJs.includes("settlementStageHTML, buffStageHTML"), "stage view should export result and settlement partial renderers without exposing nested target controls or the internal mode switch renderer");
  assert(stageJs.includes('${settlementStageHTML(r)}\n        ${panelStageHTML(r)}') && stageJs.includes('${buffStageHTML()}'), "settlement and character panel should share the left stack while Buff occupies the raised right stack");
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
    rover_electro: 3.5,
    yangyang_xuanling: 3.5,
    suisui: 3.5,
  };
  for (const c of Object.values(window.WUWA.chars)) {
    const skillIds = new Set((c.skills || []).map((s) => s.id));
    const resourceKeys = new Set((c.resources || []).flatMap((r) => [r.id, r.label].filter(Boolean)));
    const weaponId = c.defaultWeaponId ?? c.signatureWeaponId;
    if (expectedDebuts[c.id] != null && Number(c.debut) !== expectedDebuts[c.id]) bad.push(`${c.id}: debut ${c.debut} should be ${expectedDebuts[c.id]}`);
    const betaVersion = validateBetaVersion(`character ${c.id}`, c, bad);
    const expectedDir = betaVersion ? `data/core/chara/${betaVersion}/` : `data/core/chara/v${Number(c.debut).toFixed(1)}/`;
    if (c.__file && !c.__file.startsWith(expectedDir)) bad.push(`${c.id}: debut ${c.debut} stored in ${c.__file}, expected ${expectedDir}`);
    if (betaVersion) {
      for (const lang of SUPPORTED_LANGS) {
        const expectedLanguageFile = `data/languages/${lang}/chara/${betaVersion}/${c.id}.js`;
        if (!fs.existsSync(path.join(root, expectedLanguageFile))) bad.push(`${c.id}: beta language file missing ${expectedLanguageFile}`);
      }
    }
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
    for (const [idx, resource] of (c.resources || []).entries()) {
      for (const rule of [].concat(resource.maxByState || resource.capByState || [])) {
        const stateName = rule.state || rule.requiresState;
        if (!stateName || !stateDefFor(c, stateName)) bad.push(`${c.id}.resources.${idx}: maxByState ${stateName || "missing"} missing`);
      }
    }

    for (const [idx, sk] of (c.skills || []).entries()) {
      if (!window.WUWA_LANGUAGES.localeData("en-US", "chars", c.id)?.skills?.[idx]?.name) bad.push(`${c.id}.${sk.id}: missing official English skill name`);
      if (!/^[a-z0-9_]+$/.test(sk.id)) bad.push(`${c.id}.${sk.id}: skill id must be lower_snake_case`);
      if (/^(a|s)\d+$/.test(sk.id)) bad.push(`${c.id}.${sk.id}: skill id must not be an anonymous sequence id`);
      if (sk.stat && !validSkillStats.has(sk.stat)) bad.push(`${c.id}.${sk.id}: stat ${sk.stat} unsupported`);
      if (sk.element && !validElements.has(sk.element)) bad.push(`${c.id}.${sk.id}: element ${sk.element} unsupported`);
      for (const legacyId of [].concat(sk.legacyIds || [])) {
        if (legacyId === sk.id) bad.push(`${c.id}.${sk.id}: legacyIds should not repeat current id`);
      }
      validateEvents(`${c.id}.${sk.id}: triggerEvents`, sk.triggerEvents, bad);
      if (sk.triggeredDamage && [].concat(sk.triggerEvents || []).some((event) => String(event).startsWith("cast"))) {
        bad.push(`${c.id}.${sk.id}: triggered damage must not emit cast events`);
      }
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
      for (const stateName of [].concat(sk.excludesState || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${sk.id}: excludesState ${stateName} missing`);
      }
    }
    for (const [idx, eventDef] of [].concat(c.skillEvents || []).entries()) {
      const eventName = typeof eventDef === "string" ? eventDef : eventDef?.event || eventDef?.name || eventDef?.value;
      validateEvents(`${c.id}.skillEvents.${idx}`, eventName, bad);
      if (eventDef?.stacks != null && eventDef.stacks !== "max" && (!Number.isInteger(Number(eventDef.stacks)) || Number(eventDef.stacks) <= 0)) {
        bad.push(`${c.id}.skillEvents.${idx}: stacks must be a positive integer or max`);
      }
      for (const skillRef of [].concat(eventDef?.skills || [])) {
        if (!skillIds.has(skillRef)) bad.push(`${c.id}.skillEvents.${idx}: skill reference ${skillRef} missing`);
      }
      if (eventDef?.requiresResourceAtLeast && !resourceKeys.has(eventDef.requiresResourceAtLeast.id || eventDef.requiresResourceAtLeast.label)) {
        bad.push(`${c.id}.skillEvents.${idx}: requiresResourceAtLeast ${(eventDef.requiresResourceAtLeast.id || eventDef.requiresResourceAtLeast.label)} missing`);
      }
      for (const stateName of [].concat(eventDef?.requiresState || [], eventDef?.requiresAllStates || [])) {
        if (!stateDefFor(c, stateName)) bad.push(`${c.id}.skillEvents.${idx}: state ${stateName} missing`);
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
      if (b.requiresResourceAtLeast) {
        const req = b.requiresResourceAtLeast;
        if (!resourceKeys.has(req.id || req.label)) bad.push(`${c.id}.${b.id}: requiresResourceAtLeast ${(req.id || req.label)} missing`);
        if (req.value == null && req.fractionOfCap == null) bad.push(`${c.id}.${b.id}: requiresResourceAtLeast missing value`);
        (req.alternateStates || []).forEach((stateName) => {
          if (!stateDefFor(c, stateName)) bad.push(`${c.id}.${b.id}: requiresResourceAtLeast alternateState ${stateName} missing`);
        });
      }
      if (b.requiresResourceBelow) {
        const req = b.requiresResourceBelow;
        if (!resourceKeys.has(req.id || req.label)) bad.push(`${c.id}.${b.id}: requiresResourceBelow ${(req.id || req.label)} missing`);
        if (req.value == null && req.fractionOfCap == null) bad.push(`${c.id}.${b.id}: requiresResourceBelow missing value`);
      }
      if (b.stackResource && !resourceKeys.has(b.stackResource)) bad.push(`${c.id}.${b.id}: stackResource ${b.stackResource} missing`);
      if (b.multAddByResource && !resourceKeys.has(b.multAddByResource.id || b.multAddByResource.resource)) bad.push(`${c.id}.${b.id}: multAddByResource ${(b.multAddByResource.id || b.multAddByResource.resource)} missing`);
    }
  }
  assert(!bad.length, bad.join("\n"));
}

function validateBetaVersion(owner, item, bad) {
  if (item?.betaVersion == null) return "";
  const label = String(item.betaVersion).trim();
  if (!BETA_VERSION_RE.test(label)) bad.push(`${owner}: betaVersion must look like BetaX.Y.Z`);
  return label;
}

function betaDataFilesUseVersionedPaths() {
  const bad = [];
  const coreBetaPattern = /^data\/core\/beta\/Beta\d+\.\d+\.\d+\/(weapons|sonatas)\.js$/;
  const languageBetaPattern = /^data\/languages\/(zh-CN|en-US|ko|ja-JP)\/beta\/Beta\d+\.\d+\.\d+\/(weapons|sonatas)\.js$/;
  const betaFiles = [
    ...jsFilesUnder(path.join(dataDir, "core")).filter((file) => /\/beta\//i.test(file)),
    ...jsFilesUnder(path.join(dataDir, "languages")).filter((file) => /\/beta\//i.test(file)),
  ];
  betaFiles.forEach((file) => {
    if (file.startsWith("data/core/beta/") && !coreBetaPattern.test(file)) bad.push(`${file}: beta weapon/sonata files must be under data/core/beta/BetaX.Y.Z/`);
    if (file.startsWith("data/languages/") && file.includes("/beta/") && !languageBetaPattern.test(file)) bad.push(`${file}: beta weapon/sonata language files must be under data/languages/<lang>/beta/BetaX.Y.Z/`);
  });
  for (const file of charFiles) {
    const match = file.match(/^data\/core\/chara\/(Beta[^/]+)\//);
    if (match && !BETA_VERSION_RE.test(match[1])) bad.push(`${file}: beta character folder must look like BetaX.Y.Z`);
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
    "yinlin.c6_judgement_strike",
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
    "xiangliyao.forte_revamp",
    "zhezhi.k5_extra_mohe",
    "zhezhi.k6_white_crane",
    "camellya.forte_ephemeral",
    "camellya.forte_ephemeral_2",
    "camellya.outro_bloom",
    "roccia.forte_3_2",
    "roccia.magic_box",
    "brant.outro_blast",
    "brant.rekindle",
    "zani.forte_dawning",
    "lupa.skill_fang",
    "lupa.break_enemy",
    "lupa.offfield_flame",
    "phrolova.intro_immortality",
    "phrolova.k6_hecate_phantom",
    "qiuyuan.skill_lotuscloak",
    "qiuyuan.c3_outro_sheath_fallen",
    "mortefi.c1_marcato_duet",
    "yinlin.c6_judgement_strike",
    "qiuyuan.ink_exit",
    "buling.field_tick",
    "lynae.to_a_vivid_tomorrow",
    "luukherssen.ichor_deposit",
    "luukherssen.forte_gavel",
    "luukherssen.ichor_blade",
    "hiyuki.lib_inward",
    "lucy.heavy_multithread",
    "lucy.heavy_multithread_sql",
    "lucy.burst_darknet",
    "chisa.c1_fixed_havoc",
    "yangyang_xuanling.c6_shadow",
    "yangyang_xuanling.wraith_of_sound",
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
    validateBetaVersion(`weapon ${w.id}`, w, bad);
    const ids = new Set((w.effects || []).map((b) => b.id));
    for (const b of w.effects || []) validateBuffShape(`weapon ${w.id}.${b.id}`, b, ids, bad);
  }
  for (const s of sonatas) {
    validateBetaVersion(`sonata ${s.id}`, s, bad);
    for (const lead of [].concat(s.leads || [], s.lead || [])) validateBetaVersion(`sonata ${s.id}.${lead.id || lead.echo}`, lead, bad);
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
  assert(__T.buffStatus(slot, 0, selfBuff).applies, "Gusts of Welkin 5pc should default checked");
  __T.setBuffToggle(slot, 0, "son_14_gusts_of_welkin_self_aero", false);
  assert(!__T.buffStatus(slot, 0, selfBuff).applies, "Gusts of Welkin 5pc should remain manually disableable");
  __T.setBuffToggle(slot, 0, "son_14_gusts_of_welkin_self_aero", true);
  assert(__T.buffStatus(slot, 0, selfBuff).applies, "Gusts of Welkin 5pc should apply after confirmation");
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
  assert(__T.buffStatus(slot, 1, cr).applies, "CR should apply immediately after support-state confirmation");

  __T.state.outputIdx = 1;
  assert(__T.buffStatus(slot, 1, cr).applies, "CR should still apply after switching back to provider");

  __T.state.outputIdx = 0;
  assert(__T.buffStatus(slot, 1, cd).precondition, "CD should still need a higher field state");
  __T.setBuffToggle(slot, 1, "b_field_cd", true);
  assert(slot.toggles[key] === releasedValue, `CD confirmation should upgrade to Released field, got ${slot.toggles[key]}`);
  assert(__T.buffStatus(slot, 1, cd).applies, "CD should apply immediately after support-state confirmation");

  __T.state.outputIdx = 1;
  assert(__T.buffStatus(slot, 1, cd).applies, "CD should still apply after switching back to provider");
}

function baselineA() {
  resetTeam();
  __T.state.slots[0].toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  __T.state.slots[0].skill = "forte_illuminous_epiphany_stella";
  disableDefaultConfirmedBuffs();
  let r = __T.compute();
  expectEqual(r.expected, 80890, "baseline A 0-chain expected");
  expectEqual(r.panel.displayAtk, 2118, "baseline A 0-chain displayed attack before outro");
  expectEqual(Math.round(r.panel.critRate * 10) / 10, 77.3, "baseline A crit rate");
  expectEqual(r.panel.critDamage, 270, "baseline A crit damage");

  __T.state.slots[0].seq = 6;
  disableDefaultConfirmedBuffs([0]);
  r = __T.compute();
  expectEqual(r.expected, 185889, "baseline A 6-chain expected");

  resetTeam();
  __T.state.slots[0].toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  __T.state.slots[0].skill = "forte_illuminous_epiphany_stella";
  disableDefaultConfirmedBuffs();
  __T.setBuffToggle(__T.state.slots[1], 1, "b3", true);
  __T.setBuffToggle(__T.state.slots[1], 1, "b4", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b1", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b2", true);
  r = __T.compute();
  expectEqual(r.expected, 123925, "baseline A 0-chain outro-confirmed expected");
  expectEqual(r.panel.displayAtk, 2318, "baseline A displayed attack after Verina attack buff");

  __T.state.slots[0].seq = 6;
  disableDefaultConfirmedBuffs([0]);
  r = __T.compute();
  expectEqual(r.expected, 284785, "baseline A 6-chain outro-confirmed expected");
}

function baselineB() {
  resetTeam();
  disableDefaultConfirmedBuffs();
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

  __T.state.enemy.targetLevelOverride = 83;
  let r = __T.compute();
  expectEqual(r.panel.displayAtk, 2438, "baseline B displayed attack");
  expectEqual(Math.round(r.panel.totalAtk * 1000) / 1000, 2438.999, "baseline B internal attack");
  expectEqual(r.panel.baseMult, 48.65, "baseline B level-6 multiplier");
  expectEqual(r.critHit, 2772, "baseline B enemy 83 crit");

  __T.state.enemy.targetLevelOverride = 85;
  r = __T.compute();
  expectEqual(r.critHit, 2757, "baseline B enemy 85 crit");
}

function formulaNumberFormattingFloors() {
  resetTeam();
  const slot = __T.state.slots[0];
  slot.skill = "a1";
  slot.skillLevels = { "常态攻击": 6 };
  slot.echo.fields = { attackPct: 88.1, atkFlat: 440, critRate: 40, critDamage: 108.8, elem: 30, basicDmg: 24.4, heavyDmg: 16.5 };
  __T.state.enemy.targetLevelOverride = 83;
  __T.state.lang = "zh-CN";
  __T.render();
  const displayAtk = __T.compute().panel.displayAtk.toLocaleString("en-US");
  const html = String(board.innerHTML);
  const metricHtml = html.slice(html.indexOf('id="metric-strip"'), html.indexOf("</section>", html.indexOf('id="metric-strip"')));
  assert(metricHtml.includes(`<b>${displayAtk}</b>`), "main formula stat base should display floored panel value");
  assert(!metricHtml.includes("<b>2,439</b>"), "main formula stat base should not round the old baseline panel value up");
}

function confirmableBuffDefaultsAndStructuredPreconditions() {
  resetTeam(["chixia"]);
  const slot = __T.state.slots[0];
  const firedBullets = buff(slot, "b1");
  let st = __T.buffStatus(slot, 0, firedBullets);
  assert(!st.precondition && st.applies, "Chixia fired-bullet ATK should follow its structured action counter");
  expectEqual(__T.buffStackCount(slot, firedBullets, 0), 30, "Chixia should default to the 30-shot Boom Boom threshold");
  slot.resources.dakaDakaShots = 12;
  expectEqual(__T.buffStackCount(slot, firedBullets, 0), 12, "Chixia ATK stacks should follow fired Thermobaric Bullets");
  slot.skill = "forte_boom_boom";
  assert(__T.compute().resourceBlocked, "Chixia Boom Boom should require 30 fired Thermobaric Bullets");
  slot.resources.dakaDakaShots = 30;
  assert(!__T.compute().resourceBlocked, "Chixia Boom Boom should unlock at 30 fired Thermobaric Bullets");

  resetTeam(["jinhsi"]);
  const alwaysOnSlot = __T.state.slots[0];
  const alwaysOn = buff(alwaysOnSlot, "b1");
  st = __T.buffStatus(alwaysOnSlot, 0, alwaysOn);
  assert(!st.precondition && st.applies, "always-on buffs should stay applied without a confirmation state");
  __T.setBuffToggle(alwaysOnSlot, 0, alwaysOn.id, false);
  assert(__T.buffStatus(alwaysOnSlot, 0, alwaysOn).applies, "always-on buffs should ignore manual toggle changes");

  resetTeam(["sigrika"]);
  const exclusiveSlot = __T.state.slots[0];
  exclusiveSlot.resources.hopeRune = 1;
  exclusiveSlot.resources.answerRune = 1;
  exclusiveSlot.skill = "rune_outburst";
  const highEnergy = buff(exclusiveSlot, "b_soliskin_mult");
  const lowEnergy = buff(exclusiveSlot, "b_soliskin_amp");
  assert(__T.buffStatus(exclusiveSlot, 0, highEnergy).applies && !__T.buffStatus(exclusiveSlot, 0, lowEnergy).applies, "Sigrika should automatically use the 30-or-more Soliskin Vitality branch");
  exclusiveSlot.resources.soliskinVitality = 20;
  assert(!__T.buffStatus(exclusiveSlot, 0, highEnergy).applies && __T.buffStatus(exclusiveSlot, 0, lowEnergy).applies, "Sigrika should automatically use the below-30 Soliskin Vitality branch");
  expectEqual(__T.buffStackCount(exclusiveSlot, lowEnergy, 0), 2, "Sigrika low-energy branch should gain one stack per 10 Soliskin Vitality");
}

function formulaCardTooltips() {
  resetTeam();
  const slot = __T.state.slots[0];
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  slot.skill = "forte_illuminous_epiphany_stella";
  slot.echo.fields = { elem: 30, skillDmg: 57 };
  __T.state.enemy.vulnerability = 12;
  __T.state.enemy.dmgReduction = 5;
  __T.state.lang = "zh-CN";
  __T.render();
  const html = String(board.innerHTML);
  const metricStart = html.indexOf('id="metric-strip"');
  const metricHtml = html.slice(metricStart, html.indexOf("</section>", metricStart));
  assert((metricHtml.match(/class="formula-card-tip"/g) || []).length >= 9, "main formula cards should expose hover source tooltips for every multiplier card");
  assert(!metricHtml.includes("<small>"), "formula cards should keep their third line out of the card body");
  assert(metricHtml.includes("角色基础") && metricHtml.includes("属性树"), "formula card tooltips should list concrete source categories");
  assert(metricHtml.includes("声骸") && metricHtml.includes("共鸣技能伤害加成 +57%"), "echo type tooltip source should name the current damage type");
  assert(metricHtml.includes("基础倍率") && metricHtml.includes("层数倍率"), "skill multiplier tooltip should list its contributing sources");
  assert(metricHtml.includes("目标 · 我方等级 90") && metricHtml.includes("目标 · 敌方等级 90"), "defense tooltip should list both level sources");
  assert(metricHtml.includes("<span>易伤</span>") && metricHtml.includes("目标 · 受到伤害减少 5%") && metricHtml.includes("目标 · 易伤 +12%"), "normal formula should show vulnerability as the card title while retaining both factor sources");
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
  assert(__T.buffStatus(slot, 0, b).precondition && __T.buffStatus(slot, 0, b).applies, "intro-triggered buff should default checked before an intro skill is selected");
  __T.setBuffToggle(slot, 0, b.id, false);
  assert(!__T.buffStatus(slot, 0, b).applies, "intro-triggered buff should stay user-disableable before an intro skill is selected");
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
  assert(__T.buffStatus(slot, 0, b).applies && __T.buffStatus(slot, 0, b).precondition, "Zani Eternal Radiance crit should default checked");
  __T.setBuffToggle(slot, 0, "son_11_eternal_radiance_crit", false);
  assert(!__T.buffStatus(slot, 0, b).applies, "Zani Eternal Radiance crit should remain manually disableable");
  __T.setBuffToggle(slot, 0, "son_11_eternal_radiance_crit", true);
  assert(__T.buffStatus(slot, 0, b).applies, "Eternal Radiance crit should apply after confirmation");
  b = buff(slot, "son_11_eternal_radiance_spectro");
  assert(__T.buffStatus(slot, 0, b).precondition && !__T.buffStatus(slot, 0, b).applies, "Eternal Radiance Spectro bonus should still require available Light Noise stacks");
  __T.setBuffToggle(slot, 0, "son_11_eternal_radiance_spectro", true);
  expectEqual(__T.state.effectCalc.key, "lightNoise", "confirming 10-stack Light Noise bonus should select Light Noise effect");
  expectEqual(__T.state.effectCalc.stacks, 10, "confirming 10-stack Light Noise bonus should set effect stacks to 10");
  assert(__T.buffStatus(slot, 0, b).applies, "Eternal Radiance Spectro bonus should apply after syncing Light Noise stacks");
  __T.state.effectCalc.stacks = 9;
  assert(!__T.buffStatus(slot, 0, b).applies, "Eternal Radiance Spectro bonus should stop applying below 10 Light Noise stacks");
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_1";
  slot.skill = "forte_nightfall";
  slot.resources.blaze = 0;
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
  expectEqual(__T.buffFormulaText(slot, b, 0), "-3%", "Lupa Glory should use the one stack granted by the current Liberation in a solo-Fusion team");
  slot.toggles.stk_b_glory_res = 1;
  expectEqual(__T.buffFormulaText(slot, b, 0), "-3%", "Lupa Glory should still allow one manually selected res-ignore layer");
  resetTeam(["lupa", "changli", "verina"]);
  slot = __T.state.slots[0];
  slot.skill = "burst";
  b = buff(slot, "b_glory_res");
  expectEqual(__T.buffFormulaText(slot, b, 0), "-6%", "Lupa Glory should use two stacks with one other Fusion teammate");
  slot.toggles.stk_b_glory_res = 2;
  expectEqual(__T.buffFormulaText(slot, b, 0), "-6%", "Lupa Glory should still allow two manually selected layers");
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
  assert(!__T.buffStatus(slot, 0, b).applies, "Augusta current skill should grant only two crown layers, below the third/fourth-layer threshold");
  slot.toggles.stk_augusta_crown = 2;
  assert(__T.buffStatus(slot, 0, b).gated === "需层数达到第3-4层", "Augusta third/fourth crown layer buff should still be gated after manually lowering stacks to two");
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
  slot.skill = "heavy";
  b = buff(slot, "k4_all");
  assert(__T.buffStatus(slot, 0, b).precondition && __T.buffStatus(slot, 0, b).applies, "Cartethyia chain 4 post-effect buff should default checked");
  __T.setBuffToggle(slot, 0, b.id, false);
  assert(!__T.buffStatus(slot, 0, b).applies, "Cartethyia chain 4 post-effect buff should remain manually disableable");
  __T.setBuffToggle(slot, 0, b.id, true);
  assert(__T.buffStatus(slot, 0, b).applies, "Cartethyia chain 4 post-effect buff should apply after confirmation");
  slot.toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  slot.skill = "lib_tideblade";
  b = buff(slot, "w_e1");
  assert(__T.buffStatus(slot, 0, b).applies, "Cartethyia signature weapon defense ignore should default checked on later damage");
  __T.setBuffToggle(slot, 0, b.id, false);
  assert(!__T.buffStatus(slot, 0, b).applies, "Cartethyia signature weapon defense ignore should remain manually disableable");
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
  slot.resources.period = 0;
  slot.resources.hopeRune = 2;
  slot.resources.answerRune = 2;
  sigrikaResources = __T.resourceControlsForSlot(slot);
  let sigrikaRuneSum = sigrikaResources
    .filter((ctrl) => ctrl.id === "hopeRune" || ctrl.id === "answerRune")
    .reduce((sum, ctrl) => sum + ctrl.value, 0);
  assert(sigrikaRuneSum <= 2, "Sigrika Hope/Answer runes should share a total cap of 2 below 50 Full Stop");
  slot.resources.period = 50;
  sigrikaResources = __T.resourceControlsForSlot(slot);
  sigrikaRuneSum = sigrikaResources
    .filter((ctrl) => ctrl.id === "hopeRune" || ctrl.id === "answerRune")
    .reduce((sum, ctrl) => sum + ctrl.value, 0);
  expectEqual(sigrikaRuneSum, 4, "Sigrika should hold 2 additional runes at 50 Full Stop");
  slot.resources.period = 100;
  b = buff(slot, "b_blessing_aero");
  assert(__T.buffStatus(slot, 0, b).precondition && __T.buffStatus(slot, 0, b).applies, "Sigrika Semantic Blessing should default checked");
  expectEqual(__T.buffStackCount(slot, b, 0), 0, "Sigrika Semantic Blessing should keep its independent default stack count");
  __T.setBuffToggle(slot, 0, b.id, true);
  assert(__T.buffStatus(slot, 0, b).applies, "Sigrika Semantic Blessing should apply after confirmation");
  expectEqual(__T.buffStackCount(slot, b, 0), 6, "Sigrika Semantic Blessing should use max stacks after confirmation");
  assert(!__T.buffStatus(slot, 0, buff(slot, "b_er_echo")).applies, "Sigrika ER conversion should not apply below 125% energy regen");
  const trueNameCrit = buff(slot, "son_29_sound_of_true_name_echo_crit");
  assert(__T.buffStatus(slot, 0, trueNameCrit).applies, "Sound of True Name 5-piece Echo Skill crit should default checked");
  __T.setBuffToggle(slot, 0, trueNameCrit.id, true);
  assert(__T.buffStatus(slot, 0, trueNameCrit).applies, "Sound of True Name 5-piece Echo Skill crit should apply after confirmation");
  const trueNameAero = buff(slot, "son_29_sound_of_true_name_aero");
  assert(__T.buffStatus(slot, 0, trueNameAero).applies, "Sound of True Name 5-piece Aero bonus should default checked");
  __T.setBuffToggle(slot, 0, trueNameAero.id, true);
  assert(__T.buffStatus(slot, 0, trueNameAero).applies, "Sound of True Name 5-piece Aero bonus should apply after confirmation");
  slot.resources.hopeRune = 1;
  slot.resources.answerRune = 1;
  slot.skill = "rune_outburst";
  assert(__T.resolvedSkill(slot)?.id === "rune_outburst", "Sigrika Runic Outburst should require both Hope and Answer runes");
  slot.resources.soliskinVitality = 60;
  assert(__T.buffStatus(slot, 0, buff(slot, "b_soliskin_mult")).applies, "Sigrika high Soliskin energy branch should apply automatically at 30 or more");
  assert(!__T.buffStatus(slot, 0, buff(slot, "b_soliskin_amp")).applies, "Sigrika low Soliskin energy branch should be gated at 30 or more");
  slot.resources.soliskinVitality = 10;
  assert(!__T.buffStatus(slot, 0, buff(slot, "b_soliskin_mult")).applies, "Sigrika high Soliskin energy branch should be gated below 30");
  assert(__T.buffStatus(slot, 0, buff(slot, "b_soliskin_amp")).applies, "Sigrika low Soliskin energy branch should apply automatically below 30");
  expectEqual(__T.buffStackCount(slot, buff(slot, "b_soliskin_amp"), 0), 1, "Sigrika should gain 15% amplification per 10 Soliskin Vitality");

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
  assert(__T.buffStatus(slot, 0, b).applies, "Zhezhi chain 4 should default checked");
  __T.setBuffToggle(slot, 0, b.id, false);
  assert(!__T.buffStatus(slot, 0, b).applies, "Zhezhi chain 4 should remain manually disableable");
  __T.setBuffToggle(slot, 0, b.id, true);
  assert(__T.buffStatus(slot, 0, b).applies, "Zhezhi chain 4 should apply after confirmation");

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
  slot.toggles[__T.stateChoiceKey(stateDefFor(yuanwu, "雷厉风行").id)] = thunderUprising;
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
  slot.toggles[__T.stateChoiceKey("status_1")] = "status_1_option_1";
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
  disableDefaultConfirmedBuffs([0]);
  b = buff(slot, "k3");
  assert(!b.skills, "Calcharo chain 3 Electro bonus should not be narrowed by a skill whitelist");
  assert(__T.buffStatus(slot, 0, b).applies, "Calcharo chain 3 Electro bonus should apply to Electro damage while Armed for Kill is confirmed");
  r = __T.compute();
  expectEqual(r.totals.damageBonus, 35, "Calcharo chain 3 should stack with the default Electro sonata bonus");
  slot.seq = 5;
  slot.skill = "lib_necessary";
  disableDefaultConfirmedBuffs([0]);
  r = __T.compute();
  expectEqual(r.sk.category, "introSkill", "Calcharo Necessary Means should be modeled as an intro skill");
  expectEqual(r.totals.typeBonus, 50, "Calcharo chain 5 should be a damage bonus, not a skill multiplier");
  slot.seq = 6;
  slot.skill = "k6_hunting_shadow";
  disableDefaultConfirmedBuffs([0]);
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
  assert(r.selectedSk.id !== "k5_extra_mohe", "Zhezhi chain 5 extra crane should be hidden before chain 5");
  slot.seq = 5;
  r = __T.compute();
  expectEqual(r.selectedSk.id, "k5_extra_mohe", "Zhezhi chain 5 extra crane should unlock at chain 5");
  expectEqual(r.sk.multiplier, 91.29, "Zhezhi chain 5 extra crane multiplier");
  slot.seq = 6;
  slot.skill = "k6_white_crane";
  r = __T.compute();
  expectEqual(r.selectedSk.id, "k6_white_crane", "Zhezhi chain 6 white crane should unlock at chain 6");
  expectEqual(r.sk.multiplier, 357.87, "Zhezhi chain 6 white crane multiplier");

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
  disableDefaultConfirmedBuffs([0]);
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
  assert(__T.buffStatus(slot, 0, b).applies, "Jiyan Windqueller bonus should default checked outside Qingloong Mode");
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
  assert(__T.buffStatus(chisaSupport, 1, b).applies, "Chisa Thread defense ignore should default checked");
  __T.setBuffToggle(chisaSupport, 1, "b_thread_def", true);
  assert(__T.buffStatus(chisaSupport, 1, b).applies, "Chisa Thread defense ignore should apply after confirmation");
  chisaSupport.seq = 2;
  b = buff(chisaSupport, "c2_dmg");
  assert(__T.buffStatus(chisaSupport, 1, b).applies, "Chisa chain 2 Thread bonus should default checked");
  __T.setBuffToggle(chisaSupport, 1, "c2_dmg", true);
  assert(__T.buffStatus(chisaSupport, 1, b).applies, "Chisa chain 2 Thread bonus should apply after confirmation");

  resetTeam(["buling", "chisa"]);
  __T.state.effectCalc = { key: "electro", providerIdx: 0, stacks: 10, electroRageStacks: 0, deepen: 0 };
  const chisaSlot = __T.state.slots[1];
  chisaSlot.seq = 6;
  b = buff(chisaSlot, "c6_effect_amp");
  let st = __T.buffStatus(chisaSlot, 1, b);
  assert(st.precondition && !st.gated && st.applies, "effect-only support state buff should expose a default-checked confirmation control");
  __T.setBuffToggle(chisaSlot, 1, "c6_effect_amp", true);
  assert(chisaSlot.toggles[__T.stateChoiceKey(chisaVoidSnare.id)] === stateOptionValueFor(chisa, "虚无绞痕·终焉"), "confirming Chisa effect amp should write the provider target state");
  r = __T.compute();
  expectEqual(r.effect.buffDeepen, 30, "confirmed Chisa chain 6 should deepen effect damage");

  resetTeam(["jinhsi"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
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
  assert(String(board.innerHTML).includes(`data-key="${zaniBlaze}"`) && String(board.innerHTML).includes("焰光 (0-150)"), "Zani Blaze should render its Blazing Form cap as a persistent character resource control");
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
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_0";
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
  expectEqual(__T.buffFormulaText(slot, b, 0), "+5%", "Xiangli Yao current Resonance Skill should grant one stack");
  slot.toggles.stk_b1 = 1;
  expectEqual(__T.buffFormulaText(slot, b, 0), "+5%", "Xiangli Yao inherent should still allow one manually selected stack");
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
  slot.resources.photosynthesisEnergy = 0;
  r = __T.compute();
  expectEqual(r.sk.id, "heavy", "Verina Starflower Blooms should fall back when Photosynthesis Energy is zero");
  slot.resources.photosynthesisEnergy = 1;
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
  assert(__T.buffStatus(slot, 0, b).applies, "Iuno Pale Light should default checked before a qualifying shield or Intro trigger");
  expectEqual(__T.buffFormulaText(slot, b, 0), "×(1+0%)", "Iuno Pale Light should stay at zero stacks before a qualifying trigger");
  slot.toggles[__T.stateChoiceKey("满月领域")] = "满月领域";
  assert(__T.buffStatus(slot, 0, b).applies, "Iuno shield should grant Pale Light stacks inside Full Moon Domain");
  slot.toggles.stk_b2 = 1;
  expectEqual(__T.buffFormulaText(slot, b, 0), "×(1+4%)", "Iuno Full Moon shield should grant one Pale Light stack");
  slot.skill = "intro";
  slot.toggles[__T.stateChoiceKey("满月领域")] = "满月领域";
  assert(__T.buffStatus(slot, 0, b).applies, "Iuno intro should grant Pale Light stacks directly");
  slot.toggles.stk_b2 = 5;
  expectEqual(__T.buffFormulaText(slot, b, 0), "×(1+20%)", "Iuno intro should grant five Pale Light stacks even inside Full Moon Domain");
}

function effectDamageModel() {
  resetTeam(["jinhsi", "buling"]);
  __T.state.resultMode = "effect";
  __T.state.effectCalc = { key: "electro", stacks: 10, electroRageStacks: 0, deepen: 0 };
  let r = __T.compute();
  const baseDamage = r.effect.damage;
  expectEqual(r.effect.providerIdx, 1, "electro effect provider should default to Buling");
  assert(r.effect.enabled && r.effect.damage > 0, "electro effect should calculate damage");
  expectEqual(r.effect.rate, 415.85, "10-stack electro rate");
  __T.render();
  let html = String(board.innerHTML);
  let effectHtml = html.slice(html.indexOf('id="result-formula"'), html.indexOf("</section>", html.indexOf('id="result-formula"')));
  const effectHeadIdx = effectHtml.indexOf('class="result-formula-head"');
  const effectTargetIdx = effectHtml.indexOf('id="target-controls"');
  const effectStripIdx = effectHtml.indexOf('class="metric-strip formula-strip formula-strip--multiply"');
  assert(effectTargetIdx >= 0 && effectHeadIdx > effectTargetIdx && effectStripIdx > effectHeadIdx && !effectHtml.includes("电磁效应 ="), "effect mode should keep the gameplay target block above the formula heading");
  assert(effectStripIdx >= 0 && !effectHtml.includes("<b>×"), "effect formula cards should use the shared formula strip and outer multiply signs");
  assert(effectHtml.includes("<span>效应基础值</span>") && effectHtml.includes("<span>效应倍率</span>"), "effect formula should name effect base and multiplier clearly");
  assert(effectHtml.includes("<span>效应加深</span>") && !effectHtml.includes("<span>效应加深</span><b>0%</b>"), "effect amplification card should show the multiplier factor, not the raw percent");

  __T.state.effectCalc.deepen = 20;
  r = __T.compute();
  assert(r.effect.damage > baseDamage * 1.19, "manual effect amplification should increase effect damage through a multiplier");
  __T.render();
  html = String(board.innerHTML);
  effectHtml = html.slice(html.indexOf('id="result-formula"'), html.indexOf("</section>", html.indexOf('id="result-formula"')));
  assert(effectHtml.includes("<span>效应加深</span>") && effectHtml.includes("<b>1.200</b>"), "effect amplification card should display the active multiplier factor");
  assert(effectHtml.includes("手动 · 效应加深 +20%"), "effect amplification tooltip should list the manual deepen source");
  assert(!effectHtml.slice(effectStripIdx).includes("<small>"), "effect formula cards should keep their third line inside the hover tooltip");
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

  resetTeam(["buling", "rover_aero"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_cap", true);
  __T.state.effectCalc = { key: "electro", stacks: 13, electroRageStacks: 13, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 10, "Aero Rover outro cap bonus should only target wind erosion");
  expectEqual(r.effect.stacks, 10, "Aero Rover outro should not raise electro stacks");

  resetTeam(["buling", "cartethyia"]);
  __T.state.slots[1].seq = 2;
  __T.state.slots[1].toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  __T.state.effectCalc = { key: "electro", stacks: 13, electroRageStacks: 13, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 10, "Cartethyia sequence 2 cap bonus should only target wind erosion");
  expectEqual(r.effect.stacks, 10, "Cartethyia sequence 2 should not raise electro stacks");

  resetTeam(["jinhsi", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", false);
  __T.state.effectCalc = { key: "havocBane", providerIdx: 1, stacks: 6, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 3, "havoc bane should clamp to 3 without Chisa outro cap");
  expectEqual(r.effect.defShred, 6, "havoc bane should display 3-stack defense shred");
  expectEqual(r.defense.effectDefShred, 6, "havoc bane defense shred should be tracked separately from manual defense shred");
  expectEqual(r.defense.totalDefShred, 6, "havoc bane defense shred should contribute to total defense shred");
  __T.state.resultMode = "effect";
  __T.state.showTargetExtras = true;
  __T.render();
  const havocFormulaHtml = String(board.innerHTML).slice(String(board.innerHTML).indexOf('id="result-formula"'), String(board.innerHTML).indexOf('id="settlement-stage"'));
  assert(havocFormulaHtml.includes('class="metric-strip formula-strip formula-strip--multiply"') && havocFormulaHtml.includes("<span>层数</span>") && havocFormulaHtml.includes("<span>每层 · 减防</span>") && havocFormulaHtml.includes("<b>3</b>") && havocFormulaHtml.includes("<b>2%</b>"), "havoc bane formula should visibly show stacks multiplied by defense shred per stack");
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

  resetTeam(["yangyang_xuanling", "chisa"]);
  __T.state.slots[0].skill = "intro";
  __T.state.slots[0].seq = 3;
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "havocBane", providerIdx: 0, stacks: 9, stackMode: "manual", deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 9, "Yangyang Xuanling sequence 3 and Chisa outro cap bonuses should stack up to 9 Havoc Bane stacks");
  expectEqual(r.effect.stacks, 9, "Yangyang Xuanling should allow 9 Havoc Bane stacks when both cap bonuses are active");
  expectEqual(r.effect.defShred, 18, "havoc bane should display 9-stack defense shred when both cap bonuses are active");

  resetTeam(["zani", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "lightNoise", stacks: 13, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 13, "light noise should allow 13 with Chisa outro cap");

  resetTeam(["zani", "suisui", "chisa"]);
  __T.state.slots[1].toggles[__T.stateChoiceKey("ceaseless_landscape")] = "ceaseless_landscape_active";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_landscape_effect_cap", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "lightNoise", stacks: 16, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 16, "Suisui field and Chisa outro cap bonuses should stack light noise up to 16");
  expectEqual(r.effect.stacks, 16, "light noise should allow 16 stacks when both cap bonuses are active");
  assert(r.effect.valid, "light noise 16-stack fixed formula should remain valid");
  __T.state.effectCalc.stacks = 0;
  r = __T.compute();
  expectEqual(r.effect.damage, 0, "zero-stack light noise should deal zero effect damage");

  resetTeam(["buling", "suisui", "chisa"]);
  __T.state.slots[1].toggles[__T.stateChoiceKey("ceaseless_landscape")] = "ceaseless_landscape_active";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_landscape_effect_cap", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "electro", stacks: 16, electroRageStacks: 16, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 16, "Suisui field and Chisa outro cap bonuses should stack electro up to 16");
  expectEqual(r.effect.stacks, 16, "electro should keep the 16-stack input even while its 16-stack rate is unrecorded");
  expectEqual(r.effect.rageStacks, 16, "electro rage should share the 16-stack cap");
  assert(!r.effect.valid, "electro 16-stack damage should not be calculated until 14-16 rates are recorded");

  resetTeam(["ciaccona", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", stacks: 9, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.stacks, 9, "wind erosion should allow 9 with Chisa outro cap");

  resetTeam(["cartethyia", "suisui", "chisa"]);
  __T.state.slots[0].seq = 2;
  __T.state.slots[0].toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  __T.state.slots[1].toggles[__T.stateChoiceKey("ceaseless_landscape")] = "ceaseless_landscape_active";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_landscape_effect_cap", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 12, deepen: 0 };
  r = __T.compute();
  expectEqual(r.effect.cap, 12, "Cartethyia sequence 2, Suisui field, and Chisa outro cap bonuses should stack wind erosion up to 12");
  expectEqual(r.effect.stacks, 12, "wind erosion should allow 12 stacks when three cap bonuses are active");

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
  const renderEffect = () => {
    __T.state.resultMode = "effect";
    __T.render();
    return String(board.innerHTML);
  };
  resetTeam();
  let pageHTML = renderEffect();
  assert(!pageHTML.includes('data-act="effect-key"'), "team without effect source should disable effect mode and omit its controls");
  assert(/data-mode="effect"[^>]*disabled/.test(pageHTML), "team without effect source should keep effect mode visible but disabled");
  __T.state.resultMode = "offset";
  __T.render();
  assert(String(board.innerHTML).includes("result-inline-controls"), "offset mode should expose compact Tune Break controls without offset specialists");

  resetTeam(["buling"]);
  __T.state.effectCalc = { key: "none", providerIdx: null, stacks: 0, stackMode: "auto", electroRageStacks: 0, deepen: 0 };
  const defaultEffect = __T.compute().effect;
  expectEqual(defaultEffect.key, "electro", "an effect-capable team should default to its first available effect");
  expectEqual(__T.state.effectCalc.key, "electro", "default effect selection should persist in calculator state");
  expectEqual(defaultEffect.stacks, 10, "default effect selection should use that effect's default stack count");
  __T.state.effectCalc.electroRageStacks = 3;
  const html = renderEffect();
  const effectControlsIdx = html.indexOf('class="result-inline-controls result-inline-controls--effect');
  const effectHeroTeamIdx = html.indexOf('class="hero-team"');
  const effectFormulaHTML = html.slice(html.indexOf('id="result-formula"'), html.indexOf('id="settlement-stage"'));
  assert(effectControlsIdx > html.indexOf('id="result-mode-tabs"') && effectHeroTeamIdx > effectControlsIdx, "effect controls should sit below the compact result switch inside the left result column");
  assert(html.includes('data-act="effect-key"') && html.includes('data-act="effect-provider"') && html.includes('data-act="effect-stacks"') && html.includes('data-act="effect-deepen"'), "team with an effect source should show every effect control in the result area");
  assert(!effectFormulaHTML.includes('data-act="effect-key"') && !effectFormulaHTML.includes('data-act="effect-stacks"'), "effect selectors should not be duplicated inside the formula area");
  assert(effectFormulaHTML.includes('class="metric-card formula-card"') && !effectFormulaHTML.includes("effect-mini-card"), "effect formulas should reuse the main formula card component");
  assert(html.includes("爆发层数"), "electro effect calculator should show electro rage stacks");
  assert(html.includes("效应/爆发上限 10 层"), "electro effect calculator should show shared flare/rage cap");
  const electroEffectSelect = html.match(/<select data-act="effect-key"[^>]*>([\s\S]*?)<\/select>/);
  assert(electroEffectSelect && electroEffectSelect[1].includes(">电磁效应 · 效应/爆发上限 10 层<"), "effect selector should combine the localized effect name with its current cap");
  assert(!electroEffectSelect[1].includes(">electro<"), "Chinese effect selector should not expose effect keys");
  assert(!electroEffectSelect[1].includes('value="none"') && !electroEffectSelect[1].includes("不计算"), "effect selector should not expose an unselected option");
  const effectMeta = html.match(/<div class="stage-result-meta" id="result-meta">([\s\S]*?)<\/div>/);
  assert(effectMeta && effectMeta[1] === "", "effect cap should no longer render as a separate line above the selector");

  resetTeam(["cartethyia"]);
  __T.state.effectCalc = { key: "windErosion", stacks: 3, deepen: 0 };
  pageHTML = renderEffect();
  const cartethyiaEffectSelect = pageHTML.match(/<select data-act="effect-key"[^>]*>([\s\S]*?)<\/select>/);
  assert(cartethyiaEffectSelect, "Cartethyia should render effect selector");
  const options = [...cartethyiaEffectSelect[1].matchAll(/value="([^"]+)"/g)].map((m) => m[1]);
  expectEqual(options.join(","), "windErosion", "Cartethyia-only team should only offer wind erosion effect without an unselected option");
  assert(pageHTML.includes("上限 3 层"), "Cartethyia-only effect calculator should show 3-stack wind erosion cap");

  resetTeam(["cartethyia", "chisa"]);
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 6, deepen: 0 };
  const capBonusHTML = renderEffect();
  assert(capBonusHTML.includes("上限=3层+千咲延奏3层=6层"), "effect cap bonus should render as base plus source equals final cap");
  assert(!capBonusHTML.includes("effect-cap-toggle"), "effect cap bonus should not render a separate control-row reminder");

  __T.state.slots[0].seq = 2;
  __T.state.slots[0].toggles[__T.stateChoiceKey("形态")] = "芙露德莉斯";
  __T.state.effectCalc.stacks = 9;
  assert(renderEffect().includes("上限=3层+卡提希娅2链3层+千咲延奏3层=9层"), "multiple cap bonuses should render as an additive cap equation");

  resetTeam(["cartethyia", "suisui", "chisa"]);
  __T.state.slots[0].seq = 2;
  __T.state.slots[0].toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  __T.state.slots[1].toggles[__T.stateChoiceKey("ceaseless_landscape")] = "ceaseless_landscape_active";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_landscape_effect_cap", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 12, deepen: 0 };
  const windCapHTML = renderEffect();
  assert(windCapHTML.includes("上限=3层+卡提希娅2链3层+穗穗·共鸣解放·康衢之谣3层+千咲延奏3层=12层"), "three wind erosion cap bonuses should render together");

  resetTeam(["zani", "suisui", "chisa"]);
  __T.state.slots[1].toggles[__T.stateChoiceKey("ceaseless_landscape")] = "ceaseless_landscape_active";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_landscape_effect_cap", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "lightNoise", stacks: 16, deepen: 0 };
  assert(renderEffect().includes("上限=10层+穗穗·共鸣解放·康衢之谣3层+千咲延奏3层=16层"), "Suisui and Chisa cap bonuses should render together for light noise");

  resetTeam(["buling", "suisui", "chisa"]);
  __T.state.slots[1].toggles[__T.stateChoiceKey("ceaseless_landscape")] = "ceaseless_landscape_active";
  __T.setBuffToggle(__T.state.slots[1], 1, "b_landscape_effect_cap", true);
  __T.setBuffToggle(__T.state.slots[2], 2, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "electro", stacks: 16, electroRageStacks: 16, deepen: 0 };
  const electroCapHTML = renderEffect();
  assert(electroCapHTML.includes("效应/爆发上限=10层+穗穗·共鸣解放·康衢之谣3层+千咲延奏3层=16层"), "Suisui and Chisa cap bonuses should render together for electro");
  assert(electroCapHTML.includes("当前只录入1/2/3/4/5/6/7/8/9/10/11/12/13层倍率"), "missing 16-stack electro rates should show recorded stack list");

  resetTeam(["yangyang_xuanling", "chisa"]);
  __T.state.slots[0].skill = "intro";
  __T.state.slots[0].seq = 3;
  __T.setBuffToggle(__T.state.slots[1], 1, "b_outro_effect_cap", true);
  __T.state.effectCalc = { key: "havocBane", providerIdx: 0, stacks: 9, deepen: 0 };
  assert(renderEffect().includes("上限=3层+秧秧·玄翎3链3层+千咲延奏3层=9层"), "Havoc Bane cap bonuses from Yangyang Xuanling chain 3 and Chisa outro should both render");
}

function modalEffectAndOffsetControlRegressions() {
  const effectOptions = () => {
    __T.state.resultMode = "effect";
    __T.render();
    const match = String(board.innerHTML).match(/<select data-act="effect-key"[^>]*>([\s\S]*?)<\/select>/);
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
  assert(r.sk.formula === "128.00%" && r.multAdd === 1200 && Math.round(r.panel.baseMult * 100) / 100 === 1328, "Denia sequence 3 Dark Core multiplier increase should be modeled as multAdd, not duplicated in the skill formula");
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
  slot.skill = "sc_na3";
  __T.state.effectCalc = { key: "fusion", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  expectEqual(__T.compute().effect.actionStacks, 2, "Denia listed Forte actions should apply 2 Fusion Burst stacks on hit");

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
  __T.state.resultMode = "effect";
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
  __T.setBuffToggle(slot, 0, "b_hack_break_amp", false);
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
  __T.state.resultMode = "offset";
  __T.render();
  assert(String(board.innerHTML).includes("偏移体系"), "Offset-system calculator should render for hack-break characters");
  assert(String(board.innerHTML).includes("骇破响应·熔触"), "Offset-system calculator should list hack response skills");
  assert(String(board.innerHTML).includes("骇破倍率"), "Hack-break offset formula should label the response multiplier as Hack Break");
  assert(!String(board.innerHTML).includes("骇破伤害 =") && String(board.innerHTML).includes("<span>骇破倍率</span>"), "Hack-break offset formula should rely on the shared multiplier cards without a textual equation");
  assert(String(board.innerHTML).includes("<span>易伤</span>"), "Hack-break response formula should show the vulnerability card");
  assert(String(board.innerHTML).includes("<span>抗性系数</span>") && String(board.innerHTML).includes("<span>最终伤害提升</span>"), "Hack-break response formula should split RES and final damage into separate cards");
  assert(!String(board.innerHTML).includes("抗性/最终"), "Hack-break response formula should not merge RES and final damage into one card");
  const responseFormulaHTML = String(board.innerHTML).slice(String(board.innerHTML).indexOf('id="result-formula"'), String(board.innerHTML).indexOf('id="settlement-stage"'));
  assert(!responseFormulaHTML.includes("谐度响应伤害按谐度基础值"), "Harmony-response formula should stop after the equation without a repeated explanatory note");
  assert(!String(board.innerHTML).includes('data-key="harmonyBase"'), "More bonuses/debuffs should not expose raw harmony base input");
  assert(String(board.innerHTML).includes('data-act="offset-cost"'), "Offset-system calculator should expose target Cost selection");
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
  assert(String(board.innerHTML).includes('data-key="breakAmp"'), "Tune Break Boost panel row should render an echo input");

  slot.skill = "tune_rupture_response_spectral_analysis";
  slot.toggles[__T.stateChoiceKey("目标震谐状态")] = "目标震谐·干涉";
  skillIds = new Set(__T.availableSkills(slot).map((s) => s.id));
  assert(skillIds.has("tune_rupture_response_spectral"), "Lynae Tune Rupture response skill should be selectable after target state confirmation");
  disableDefaultConfirmedBuffs([0]);
  r = __T.compute();
  expectEqual(r.damageModel, "harmonyResponse", "Lynae Tune Rupture Response - Spectral Analysis should use the harmony-response formula branch");
  expectEqual(r.breakAmp, 10, "Lynae should have 10 base Tune Break Boost");
  slot.echo.fields.breakAmp = 20;
  r = __T.compute();
  expectEqual(r.breakAmp, 30, "Lynae Tune Break Boost should include echo fields");
  slot.echo.fields.breakAmp = 0;
  r = __T.compute();
  expectEqual(r.breakAmp, 10, "Lynae Tune Break Boost should return to base after clearing echo fields");
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
  __T.state.resultMode = "offset";
  __T.render();
  assert(String(board.innerHTML).includes("震谐倍率"), "Tune Rupture offset formula should label the response multiplier as Tune Rupture");
  assert(!String(board.innerHTML).includes("震谐伤害 =") && String(board.innerHTML).includes("<span>震谐倍率</span>"), "Tune Rupture offset formula should rely on the shared multiplier cards without a textual equation");
  assert(String(board.innerHTML).includes("<span>抗性系数</span>") && String(board.innerHTML).includes("<span>最终伤害提升</span>"), "Tune Rupture response formula should split RES and final damage into separate cards");
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
  assert(String(board.innerHTML).includes("<span>易伤</span>") && String(board.innerHTML).includes("<span>最终伤害提升</span>") && String(board.innerHTML).includes("<span>固定系数</span>"), "Tune Break formula should expose vulnerability, final damage, and fixed 0.8 as cards");
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
  slot.toggles[`stk_${strainBuff.stackGroup}`] = 0;
  slot.toggles.b_tune_strain_response = false;
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
  slot.toggles.b_liberation_final = false;
  slot.toggles.w_e2 = false;
  r = __T.compute();
  assert(__T.buffStatus(slot, 0, strainBuff).applies, "Lynae Tune Strain - Interfered final damage buff should apply after target state confirmation");
  assert(__T.buffFormulaText(slot, strainBuff, 0).includes("+18%"), "Lynae Tune Strain - Interfered should scale 3 stacks from active Tune Break Boost");
  expectEqual(r.totals.finalDmg, 18, "Offset-system Tune Strain final damage should not double count the legacy buff card value");
  __T.render();
  const strainHtml = String(board.innerHTML);
  const strainFormulaHTML = strainHtml.slice(strainHtml.indexOf('id="result-formula"'), strainHtml.indexOf('id="settlement-stage"'));
  assert(!strainFormulaHTML.includes("最终伤害提升 =") && strainFormulaHTML.includes("<span>层数</span>") && strainFormulaHTML.includes("<span>谐度增幅</span>") && strainFormulaHTML.includes("<span>最终提升</span>"), "Tune Strain Interfered should expose its inputs through shared cards without a textual equation");

  resetTeam(["luukherssen", "lynae", "rebecca"]);
  const output = __T.state.slots[0];
  const support = __T.state.slots[1];
  support.toggles.b_visual_break = true;
  __T.state.slots[2].toggles.b_hack_break_amp = true;
  const p5Base = buff(support, "son_25_pact_of_neonlight_leap_atk_base");
  const p5Dynamic = buff(support, "son_25_pact_of_neonlight_leap_atk_break_amp");
  support.toggles[p5Base.id] = true;
  support.toggles[p5Dynamic.id] = false;
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
  assert(st.precondition && !st.gated && st.applies, "Hiyuki signature effect deepen should default checked");
  __T.setBuffToggle(slot, 0, frostWeapon.id, true);
  r = __T.compute();
  assert(r.effect.buffDeepen >= 80, "Confirmed Hiyuki signature effect deepen should feed the Frost effect calculation");

  resetTeam(["hiyuki"]);
  const snowCrit = buff(__T.state.slots[0], "son_30_wishes_of_quiet_snowfall_crit");
  st = __T.buffStatus(__T.state.slots[0], 0, snowCrit);
  assert(st.precondition && st.applies, "Wishes of Quiet Snowfall crit should default checked");
  __T.setBuffToggle(__T.state.slots[0], 0, snowCrit.id, true);
  assert(__T.buffStatus(__T.state.slots[0], 0, snowCrit).applies, "Wishes of Quiet Snowfall crit should apply after confirmation");
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
  assert(st.precondition && st.applies, "Aemeath signature post-offset defense ignore should default checked");
  __T.setBuffToggle(slot, 0, defIgnore.id, true);
  __T.setBuffToggle(slot, 0, resIgnore.id, true);
  let r = __T.compute();
  expectEqual(r.rawTotals.defIgnore, 32, "Confirmed Aemeath signature weapon should feed defense ignore");
  expectEqual(r.rawTotals.resShred, 10, "Confirmed Aemeath signature weapon should feed Fusion resistance ignore");
  __T.state.showTargetExtras = true;
  __T.render();
  let html = String(board.innerHTML);
  assert((html.match(/data-act="target-resistance"/g) || []).length === 6, "expanded target controls should show the complete six-resistance array");
  assert(/data-key="resShred"[^>]*data-auto="10"[^>]*value="10"/.test(html), "resistance shred input should display active resistance shred as the total");
  assert(/data-key="defIgnore"[^>]*data-auto="32"[^>]*value="32"/.test(html), "defense ignore field should appear when an active buff provides defense ignore");
  assert(!html.includes('data-key="charLevel"'), "target controls should not expose player level input");
  assert(html.indexOf('data-act="target-level"') < html.indexOf('data-act="target-resistance"'), "enemy level should render before the six resistance overrides");
  assert(html.indexOf('data-act="target-resistance"') < html.indexOf('data-key="resShred"'), "automatic target values should render before other target modifiers");
  assert(html.includes("属性减抗%"), "resistance shred field should use attribute shred wording");
  assert(html.includes('data-act="target-extra-toggle"'), "folded target extra controls should keep an expansion control");
  assert(html.includes('class="effect-controls formula-target-fields formula-target-modifiers"') && !html.includes("--metric-extra-columns"), "expanded target modifiers should use the compact formula toolbar");
  assert(html.includes(`抗${r.target.resistance}% + 减抗10%`), "resistance factor card should display derived target resistance and total shred sources");
  assert(!html.includes(`抗${r.target.resistance}% + 减抗10% =`), "resistance factor card should not repeat the effective resistance after an equals sign");

  resetTeam(["lucilla"]);
  slot = __T.state.slots[0];
  slot.skill = "letting_go_frost";
  const glacio = buff(slot, "w_e2");
  assert(glacio && glacio.zone === "damageBonus" && glacio.value === 30 && glacio.element === "glacio", "Lucilla signature weapon should include post-Frost Glacio damage bonus");
  st = __T.buffStatus(slot, 0, glacio);
  assert(st.precondition && st.applies, "Lucilla signature post-Frost Glacio bonus should default checked");
  const defaultGlacio = __T.compute().rawTotals.damageBonus;
  __T.setBuffToggle(slot, 0, glacio.id, false);
  const disabledGlacio = __T.compute().rawTotals.damageBonus;
  expectEqual(defaultGlacio - disabledGlacio, 30, "Lucilla signature weapon should remain manually disableable");
  __T.setBuffToggle(slot, 0, glacio.id, true);
  r = __T.compute();
  expectEqual(r.rawTotals.damageBonus, defaultGlacio, "Re-enabled Lucilla signature weapon should restore Glacio damage bonus");
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

function sixCharacterAuditRegressions() {
  const chisa = window.WUWA.chars.chisa;
  resetTeam(["chisa"]);
  let slot = __T.state.slots[0];
  let ids = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(ids.has("na1") && !ids.has("sawring_1"), "Chisa default non-Chainsaw mode should hide Chainsaw-only attacks");
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_1";
  ids = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(ids.has("sawring_1") && !ids.has("na1") && ids.has("lib_return"), "Chisa Chainsaw mode should replace normal attacks while keeping common actions");
  assert(skill(chisa, "chain_clamp").triggerEvents?.includes("heal") && skill(chisa, "chain_clamp_extra").triggerEvents?.includes("heal"), "Chisa Death Snip variants should emit healing events");
  assert(skill(chisa, "lib_return").triggerEvents?.includes("heal"), "Chisa Resonance Liberation should emit its healing event");

  slot.seq = 1;
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_0";
  slot.toggles[__T.stateChoiceKey("target_1")] = "target_1_option_1";
  slot.skill = "c1_fixed_havoc";
  let r = __T.compute();
  assert(r.resourceBlocked, "Chisa C1 fixed damage should require one-time target confirmation");
  slot.toggles[__T.resourceKey("c1_fixed_damage_available")] = true;
  __T.state.enemy.vulnerability = 999;
  __T.state.enemy.targetResistanceOverrides.havoc = 99;
  r = __T.compute();
  expectEqual(r.damageModel, "fixed", "Chisa C1 should use the fixed-damage settlement branch");
  expectEqual(r.normal, 61803, "Chisa C1 fixed damage should remain 61803 through other multiplier changes");
  expectEqual(r.critHit, 61803, "Chisa C1 fixed damage should not crit");
  expectEqual(skill(chisa, "c1_fixed_havoc").fixedDamageHpFloorPct, 61.8, "Chisa C1 should preserve its target HP floor");

  const mornye = window.WUWA.chars.mornye;
  resetTeam(["mornye"]);
  slot = __T.state.slots[0];
  ids = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(ids.has("na1") && !ids.has("wide_na1"), "Mornye default mode should hide Wide Field Observation attacks");
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_1";
  ids = new Set(__T.availableSkills(slot).map((item) => item.id));
  assert(ids.has("wide_na1") && !ids.has("na1") && ids.has("lib"), "Mornye Wide Field Observation mode should replace normal attacks while keeping common actions");
  const mornyeBaseMarker = allBuffs(mornye).find((item) => item.id === "b_interference_amp_base");
  const mornyeC1Marker = allBuffs(mornye).find((item) => item.id === "k1_amp");
  expectEqual(mornyeBaseMarker?.zone, "vulnerability", "Mornye Interfered Marker should use the target vulnerability zone");
  expectEqual(mornyeC1Marker?.zone, "vulnerability", "Mornye C1 should preserve the Interfered Marker vulnerability zone");

  slot.skill = "lib";
  slot.seq = 0;
  slot.toggles[__T.stateChoiceKey("target_1")] = "target_1_option_1";
  slot.toggles[__T.stateChoiceKey("target_2")] = "target_2_option_1";
  assert(__T.buffStatus(slot, 0, buff(slot, "b_interference_amp_base")).applies, "Mornye C0 Interfered Marker should require both the marker and an Interfered state");

  slot.seq = 1;
  delete slot.toggles[__T.stateChoiceKey("target_2")];
  assert(__T.buffStatus(slot, 0, buff(slot, "k1_amp")).applies, "Mornye C1 Interfered Marker should no longer require an Interfered state");
  const mornyeBuffView = window.WUWA_BUFF_VIEW.create({
    state: __T.state,
    ch: (id) => window.WUWA.chars[id],
    slotBuffs: __T.slotBuffs,
    buffStatus: __T.buffStatus,
    buffValue: () => 0,
    buffStackCount: __T.buffStackCount,
    scaleByInfo: () => null,
  });
  assert(!mornyeBuffView.combatBuffs(slot).some((item) => item.id === "b_interference_amp_base"), "Mornye C1 should hide the replaced C0 Interfered Marker buff");

  slot.seq = 2;
  const normalField = "field_1_option_1";
  const highField = "field_1_option_2";
  const fieldBase = buff(slot, "b_field_discord");
  const fieldC2 = buff(slot, "k2_discord");
  slot.toggles[__T.stateChoiceKey("field_1")] = normalField;
  assert(__T.buffStatus(slot, 0, fieldBase).applies && __T.buffStatus(slot, 0, fieldC2).applies, "Mornye C2 Syntony Field should grant 50% + 20% Off-Tune Buildup Rate");
  slot.toggles[__T.stateChoiceKey("field_1")] = highField;
  assert(__T.buffStatus(slot, 0, fieldBase).applies && __T.buffStatus(slot, 0, fieldC2).applies, "Mornye C2 High Syntony Field should inherit the same 50% + 20% Off-Tune Buildup Rate");
  assert(__T.buffStatus(slot, 0, buff(slot, "b_strong_def")).applies, "Mornye High Syntony Field should also retain its 20% DEF buff");

  const yangyang = window.WUWA.chars.yangyang_xuanling;
  resetTeam(["yangyang_xuanling"]);
  slot = __T.state.slots[0];
  __T.state.effectCalc = { key: "havocBane", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "azure_na4";
  expectEqual(__T.compute().effect.actionStacks, 1, "Yangyang: Xuanling basic stage 4 should apply 1 Havoc Bane stack");
  slot.seq = 3;
  slot.skill = "azure_heavy";
  expectEqual(__T.compute().effect.actionStacks, 3, "Yangyang: Xuanling C3 Azure heavy should apply 2 base plus 1 extra Havoc Bane stacks");
  slot.skill = "lib";
  expectEqual(__T.compute().effect.actionStacks, 6, "Yangyang: Xuanling Liberation should use the default-checked confirmable cap increase");
  const azureBreath = buff(slot, "b_desperate_breath_azure");
  slot.skill = "azure_heavy";
  assert(!azureBreath.triggerSkills && __T.buffStatus(slot, 0, azureBreath).precondition && __T.buffStatus(slot, 0, azureBreath).applies, "Yangyang: Xuanling Bated Breath should default checked while retaining its cooldown precondition");
  ["lib_shadow", "c1_shadow", "c2_shadow", "c6_shadow", "wraith_of_sound"].forEach((id) => {
    assert(skill(yangyang, id).triggeredDamage === true, `Yangyang: Xuanling ${id} should be modeled as triggered damage`);
  });
  slot.seq = 6;
  slot.skill = "c6_shadow";
  r = __T.compute();
  assert(r.resourceBlocked, "Yangyang: Xuanling C6 shadow should require Still as Withered Wood trigger confirmation");
  slot.toggles[__T.resourceKey("still_as_withered_wood_ready")] = true;
  slot.layers = 5;
  r = __T.compute();
  expectEqual(r.panel.baseMult, 1689.9, "Yangyang: Xuanling C6 shadow should support up to five summons");
  assert(r.panel.critRate >= 100, "Yangyang: Xuanling C6 shadow should remain guaranteed to crit");
  slot.skill = "wraith_of_sound";
  delete slot.toggles[__T.resourceKey("wraith_of_sound_triggered")];
  r = __T.compute();
  assert(r.resourceBlocked, "Yangyang: Xuanling Wraith of Sound should require cycle-reset confirmation");
  slot.toggles[__T.resourceKey("wraith_of_sound_triggered")] = true;
  r = __T.compute();
  expectEqual(r.damageModel, "fixed", "Yangyang: Xuanling Wraith of Sound should use the fixed-damage settlement branch");
  expectEqual(r.normal, 523, "Yangyang: Xuanling Wraith of Sound should deal fixed 523 damage");
  expectEqual(r.critHit, 523, "Yangyang: Xuanling Wraith of Sound should not crit");

  resetTeam(["suisui"]);
  slot = __T.state.slots[0];
  __T.state.effectCalc = { key: "frost", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "skill_awakening";
  expectEqual(__T.compute().effect.actionStacks, 1, "Suisui Awakening Spring should apply 1 Glacio Chafe stack");
  slot.toggles[__T.stateChoiceKey("form")] = "form_drizzle";
  slot.skill = "drizzle_na4";
  expectEqual(__T.compute().effect.actionStacks, 1, "Suisui Drizzle basic stage 4 should apply 1 Glacio Chafe stack");
}

function v3FullAuditRegressions() {
  resetTeam(["aemeath"]);
  let slot = __T.state.slots[0];
  slot.seq = 6;
  slot.skill = "duet_tune_bonus";
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_1";
  slot.toggles[__T.stateChoiceKey("target_2")] = "target_2_option_1";
  let r = __T.compute();
  expectEqual(r.totals.fixedCritRate, 80, "Aemeath C6 Tune Rupture should use fixed 80% Crit. Rate");
  expectEqual(r.totals.fixedCritDamage, 275, "Aemeath C6 Tune Rupture should use fixed 275% Crit. DMG");
  assert(r.normal < r.expected && r.expected < r.critHit, "Aemeath C6 Tune Rupture should expose non-crit, expected, and crit results");
  expectEqual(__T.buffStackCount(slot, buff(slot, "b_duet_tune_trail"), 0), 10, "Aemeath C6 Seraphic Duet should automatically inflict 10 Rupturous Trail stacks");
  slot.skill = "duet_overture";
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_2";
  slot.toggles[__T.stateChoiceKey("target_3")] = "target_3_option_1";
  slot.toggles[__T.stateChoiceKey("status_1")] = "status_1_option_1";
  __T.state.effectCalc = { key: "fusion", providerIdx: 0, stacks: 10, stackMode: "manual", deepen: 0 };
  r = __T.compute();
  expectEqual(r.sk?.id, "duet_overture", "Aemeath Fusion Burst audit should keep Seraphic Duet selected");
  expectEqual(r.effect.fixedCritRate, 80, "Aemeath C6 Fusion Burst should use fixed 80% Crit. Rate");
  expectEqual(r.effect.fixedCritDamage, 275, "Aemeath C6 Fusion Burst should use fixed 275% Crit. DMG");
  expectEqual(__T.buffStackCount(slot, buff(slot, "b_fusion_trail_extra"), 0), 10, "Aemeath C6 Seraphic Duet should automatically inflict 10 Fusion Trail stacks");

  resetTeam(["luukherssen"]);
  slot = __T.state.slots[0];
  slot.skill = "ichor_blade";
  slot.toggles[__T.resourceKey("ichor_blade_active")] = true;
  r = __T.compute();
  expectEqual(r.damageModel, "fixed", "Luuk Herssen Ichor Blade should use fixed damage");
  expectEqual(r.normal, 10, "Luuk Herssen Ichor Blade should deal 10 fixed damage per 0.15s");
  assert(__T.resourceControlsForSlot(slot).some((ctrl) => ctrl.id === "ichorFlow" && ctrl.max === 300), "Luuk Herssen should expose 300 Ichor Flow");

  resetTeam(["denia"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_1";
  __T.state.effectCalc = { key: "fusion", providerIdx: 0, stacks: 10, stackMode: "manual", deepen: 0 };
  slot.skill = "erosion_field";
  expectEqual(__T.compute().effect.extraRate, 200, "Denia C6 Fusion Burst extra multiplier should apply to Erosion Field");
  slot.skill = "sc_lib";
  expectEqual(__T.compute().effect.extraRate, 0, "Denia C6 Fusion Burst extra multiplier should not apply to unrelated Fusion Burst triggers");

  resetTeam(["hiyuki"]);
  slot = __T.state.slots[0];
  __T.state.effectCalc = { key: "frost", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_1";
  slot.toggles[__T.resourceKey("resource_gate_3")] = true;
  slot.skill = "lib_inward";
  expectEqual(__T.compute().effect.actionStacks, 4, "Hiyuki Inward Vision should apply 4 Glacio Chafe stacks");
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  slot.toggles[__T.stateChoiceKey("mechanic_1")] = "mechanic_1_option_1";
  slot.toggles[__T.resourceKey("resource_gate_4")] = true;
  slot.skill = "forte_iai";
  expectEqual(__T.compute().effect.actionStacks, 3, "Hiyuki Iai should apply 3 Glacio Chafe stacks with Frostharden Iai");
  slot.resources.frosthardenIai = 0;
  expectEqual(__T.compute().effect.actionStacks, null, "Hiyuki Iai should not apply Glacio Chafe without Frostharden Iai");
  slot.skill = "lib_blade";
  slot.resources.snowforgedBlade = 2;
  expectEqual(__T.compute().layers, 2, "Hiyuki Blade Liberation should read Snowforged Blade from the shared resource");

  resetTeam(["lucilla"]);
  slot = __T.state.slots[0];
  __T.state.effectCalc = { key: "frost", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "spotlight_frost";
  expectEqual(__T.compute().effect.actionStacks, 1, "Lucilla Spotlight should apply 1 Glacio Chafe stack");
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_2";
  let zoom = buff(slot, "b_zoom");
  __T.setBuffToggle(slot, 0, zoom.id, true);
  expectEqual(__T.buffStackCount(slot, zoom, 0), 1, "Lucilla Zoom should cap at 1 stack before Sequence 2");
  resetTeam(["lucilla"]);
  slot = __T.state.slots[0];
  slot.seq = 2;
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_2";
  zoom = buff(slot, "b_zoom");
  __T.setBuffToggle(slot, 0, zoom.id, true);
  expectEqual(__T.buffStackCount(slot, zoom, 0), 4, "Lucilla Zoom should cap at 4 stacks from Sequence 2");
  assert(__T.resourceControlsForSlot(slot).some((ctrl) => ctrl.id === "filmRoll" && ctrl.max === 10), "Lucilla Sequence 2 should expose 10 Film Roll stacks");

  resetTeam(["rebecca"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  slot.skill = "hunt_na1";
  slot.echo.fields.basicDmg = 50;
  r = __T.compute();
  expectEqual(r.scaledTypeBonus, r.typeBonus * 1.4, "Rebecca C6 should increase Basic Attack DMG Bonus from every source by 40%");
  expectEqual(skill(window.WUWA.chars.rebecca, "c6_extra_hit").multiplier, 900, "Rebecca C6 additional hit should be a separate 900% Basic Attack damage entry");
  assert(!allBuffs(window.WUWA.chars.rebecca).some((item) => item.id === "k6_extra_hit" || item.multAdd === 900), "Rebecca C6 additional hit should not be merged into the triggering skill multiplier");
  const lucyTurret = buff(slot, "b_outro_lucy_mult");
  assert(lucyTurret.zone === "skillMultBonus" && lucyTurret.value === 250 && lucyTurret.defaultActive === false && lucyTurret.skills.includes("outro_preem_choom"), "Rebecca's Lucy-enhanced turret should be a manually confirmed 250% Outro multiplier increase");
}

function v2FullAuditRegressions() {
  resetTeam(["carlotta"]);
  let slot = __T.state.slots[0];
  let controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "moldableCrystals" && ctrl.max === 6), "Carlotta should expose 6 Moldable Crystals");
  assert(controls.some((ctrl) => ctrl.id === "substance" && ctrl.max === 120), "Carlotta should expose 120 Substance");
  slot.resources.substance = 119;
  slot.skill = "heavy_limit";
  let r = __T.compute();
  assert(!__T.availableSkills(slot).some((item) => item.id === "heavy_limit") && r.sk.id === "heavy", "Carlotta Containment Tactics should fall back below full Substance");
  slot.resources.substance = 120;
  r = __T.compute();
  assert(__T.availableSkills(slot).some((item) => item.id === "heavy_limit") && r.sk.id === "heavy_limit", "Carlotta Containment Tactics should unlock at 120 Substance");

  resetTeam(["roccia"]);
  slot = __T.state.slots[0];
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "imagination" && ctrl.max === 300), "Roccia should expose 300 Imagination");
  expectEqual(skill(window.WUWA.chars.roccia, "forte_3_2").formula, "357.86%", "Roccia Reality Recreation should use Real Fantasy Stage 3 multiplier");
  assert(window.WUWA_LANGUAGES.localeData("en-US", "chars", "roccia").skills.some((item) => item.name === "Reality Recreation"), "Roccia Reality Recreation should keep its official English name");
  const magicBox = skill(window.WUWA.chars.roccia, "magic_box");
  assert(magicBox.fixedDamage === 100 && magicBox.category === "echoSkill" && magicBox.damageType === "echoSkill" && magicBox.defaultResourceActive === false, "Roccia Magic Box should be a manually confirmed fixed 100 Echo Skill action");
  expectEqual(window.WUWA_LANGUAGES.localeData("en-US", "chars", "roccia").skills.at(-1).name, "Super Attractive Magic Box - Magic Box DMG", "Roccia Magic Box should use the official English skill name in its derived action label");
  assert(!buff(slot, "k5_heavy").skills.includes("lib"), "Roccia Sequence 5 Heavy Attack multiplier should not leak into Resonance Liberation");

  assert(skill(window.WUWA.chars.rover_aero, "skill_sever").triggerEvents.includes("applyAeroErosion"), "Rover: Aero Skyfall Severance should emit Aero Erosion application event");

  resetTeam(["phoebe"]);
  slot = __T.state.slots[0];
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "gospel" && ctrl.max === 60), "Phoebe should expose 60 Divine Voice");
  assert(controls.some((ctrl) => ctrl.id === "prayer" && ctrl.max === 120), "Phoebe should expose 120 Prayer");
  __T.state.effectCalc = { key: "lightNoise", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_2";
  assert(!__T.availableSkills(slot).some((item) => item.id === "burst"), "Phoebe base Liberation should be hidden while a mode-specific Liberation is active");
  slot.skill = "burst_confession";
  expectEqual(__T.compute().effect.actionStacks, 8, "Phoebe Confession Liberation should apply 8 Spectro Frazzle stacks");
  slot.seq = 1;
  expectEqual(__T.compute().effect.actionStacks, 10, "Phoebe Sequence 1 Confession Liberation should fill Spectro Frazzle to its cap");
  slot.skill = "starflash_confession";
  slot.resources.gospel = 29;
  assert(!__T.availableSkills(slot).some((item) => item.id === "starflash_confession") && __T.compute().sk.id === "heavy", "Phoebe Confession Starflash should fall back below 30 Divine Voice");
  slot.resources.gospel = 30;
  assert(__T.availableSkills(slot).some((item) => item.id === "starflash_confession") && __T.compute().sk.id === "starflash_confession", "Phoebe Confession Starflash should unlock at 30 Divine Voice");
  slot.seq = 4;
  slot.skill = "na1";
  assert(__T.buffStatus(slot, 0, buff(slot, "k4_res")).applies, "Phoebe Sequence 4 Spectro RES reduction should auto-trigger on Basic Attack");
  slot.skill = "heavy";
  assert(__T.buffStatus(slot, 0, buff(slot, "k4_res")).applies, "Phoebe Sequence 4 Spectro RES reduction confirmation should default checked after another action");
  __T.render();
  assert(String(board.innerHTML).includes('data-buff="k4_res" checked'), "confirmable Buff checkbox should render checked by default");
  __T.setBuffToggle(slot, 0, "k4_res", false);
  assert(!__T.buffStatus(slot, 0, buff(slot, "k4_res")).applies, "Phoebe Sequence 4 Spectro RES reduction should allow manual disable after another action");
  slot.seq = 0;
  slot.skill = "starflash_absolution";
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_1";
  __T.state.effectCalc = { key: "lightNoise", providerIdx: 0, stacks: 1, stackMode: "manual", deepen: 0 };
  assert(__T.buffStatus(slot, 0, buff(slot, "b_starflash_absolution")).applies, "Phoebe Absolution Starflash amplification should require an existing Spectro Frazzle stack");

  resetTeam(["ciaccona"]);
  slot = __T.state.slots[0];
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "na4";
  expectEqual(__T.compute().effect.actionStacks, 1, "Ciaccona Basic Attack Stage 4 should apply 1 Aero Erosion stack");
  __T.state.effectCalc = { key: "lightNoise", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "lib_tonic_yellow";
  expectEqual(__T.compute().effect.actionStacks, 1, "Ciaccona yellow Tonic should apply 1 Spectro Frazzle stack");

  resetTeam(["zani"]);
  slot = __T.state.slots[0];
  slot.skill = "na1";
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "blaze" && ctrl.max === 100), "Zani should expose 100 Blaze outside Blazing Form");
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_1";
  slot.skill = "forte_nightfall";
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "blaze" && ctrl.max === 150), "Zani should expose 150 Blaze in Blazing Form");
  slot.resources.blaze = 150;
  r = __T.compute();
  expectEqual(r.layers, 40, "Zani Nightfall should consume at most 40 Blaze for multiplier scaling");
  slot.seq = 3;
  slot.skill = "lib_last";
  slot.resources.blaze = 60;
  r = __T.compute();
  expectEqual(r.multAdd, 480, "Zani Sequence 3 Final Advent should add 8% multiplier per Blaze consumed");
  expectEqual(r.panel.baseMult, 1754.08, "Zani Sequence 3 Final Advent should add the current Blaze-scaled multiplier");

  resetTeam(["cartethyia"]);
  slot = __T.state.slots[0];
  __T.state.effectCalc = { key: "windErosion", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "na4";
  expectEqual(__T.compute().effect.actionStacks, 1, "Cartethyia Basic Attack Stage 4 should apply 1 Aero Erosion stack");
  slot.skill = "skill";
  expectEqual(__T.compute().effect.actionStacks, 2, "Cartethyia Resonance Skill should apply 2 Aero Erosion stacks");
  slot.skill = "intro_past";
  expectEqual(__T.compute().effect.actionStacks, 2, "Cartethyia's own Intro Skill should apply 2 Aero Erosion stacks");
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  slot.seq = 3;
  slot.skill = "fl_na5";
  expectEqual(__T.compute().effect.actionStacks, 2, "Cartethyia Sequence 3 Fleurdelys Basic Attack Stage 5 should apply 2 Aero Erosion stacks");
  expectEqual(__T.buffStackCount(slot, buff(slot, "k1_cd"), 0), 4, "Cartethyia Sequence 1 Conviction Crit. DMG should follow 120 Resolve");
  slot.resources.resolve = 60;
  expectEqual(__T.buffStackCount(slot, buff(slot, "k1_cd"), 0), 2, "Cartethyia Sequence 1 Conviction Crit. DMG should update every 30 Resolve");
  slot.resources.resolve = 120;
  slot.seq = 6;
  slot.skill = "lib_tideblade";
  expectEqual(__T.compute().effect.actionStacks, 6, "Cartethyia Sequence 6 Tideblade should fill Aero Erosion to the current cap");
  slot.seq = 4;
  slot.skill = "fl_na5";
  assert(__T.buffStatus(slot, 0, buff(slot, "k4_all")).applies, "Cartethyia Sequence 4 all-Attribute bonus should auto-trigger when the current skill applies an abnormal effect");

  resetTeam(["galbrena"]);
  slot = __T.state.slots[0];
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "afterflame" && ctrl.max === 40), "Galbrena should expose 40 Afterflame");
  slot.toggles[__T.stateChoiceKey("state_1")] = "state_1_option_1";
  slot.skill = "seraphic_1";
  expectEqual(__T.compute().rawTotals.vulnerability, 60, "Galbrena full Afterflame should amplify Hypostasis attacks by 60%");
  slot.resources.afterflame = 20;
  expectEqual(__T.compute().rawTotals.vulnerability, 30, "Galbrena Afterflame amplification should follow the resource value");

  resetTeam(["augusta"]);
  slot = __T.state.slots[0];
  assert(!__T.availableSkills(slot).some((item) => item.id === "lib_immortal"), "Augusta Undying Sun should stay hidden outside Wealward of Freyja");
  slot.toggles[__T.stateChoiceKey("phase_1")] = "phase_1_option_1";
  assert(__T.availableSkills(slot).some((item) => item.id === "lib_immortal"), "Augusta Undying Sun should become available in Wealward of Freyja");

  resetTeam(["buling"]);
  slot = __T.state.slots[0];
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "trigramMountain") && controls.some((ctrl) => ctrl.id === "trigramThunder"), "Buling should expose Mountain and Thunder Trigrams");
  slot.resources.trigramMountain = 1;
  slot.resources.trigramThunder = 1;
  slot.skill = "heavy_yi";
  assert(!__T.compute().resourceBlocked, "Buling Mountain Over Thunder should require one Trigram of each type");
  __T.state.effectCalc = { key: "electro", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.skill = "intro";
  expectEqual(__T.compute().effect.actionStacks, 4, "Buling Intro should apply 4 Electro Flare stacks");
  slot.toggles[__T.stateChoiceKey("field_1")] = "field_1_option_1";
  slot.skill = "field_tick";
  expectEqual(__T.compute().effect.actionStacks, 2, "Buling Five Thunders Spell Array should apply 2 Electro Flare stacks per tick");
  slot.seq = 5;
  slot.skill = "forte_lib";
  expectEqual(__T.compute().effect.actionStacks, 6, "Buling chain 5 should apply 6 Electro Flare stacks when Five Thunders Spell Array is generated");

  resetTeam(["chisa"]);
  slot = __T.state.slots[0];
  controls = __T.resourceControlsForSlot(slot);
  assert(controls.some((ctrl) => ctrl.id === "lifethreadJetstream" && ctrl.max === 100), "Chisa should expose 100 Lifethread - Jetstream");
  __T.state.effectCalc = { key: "havocBane", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  slot.toggles[__T.stateChoiceKey("target_1")] = "target_1_option_1";
  slot.skill = "na1";
  expectEqual(__T.compute().effect.actionStacks, null, "Chisa should not apply Havoc Bane through Unseen Snare before chain 4");
  slot.seq = 4;
  expectEqual(__T.compute().effect.actionStacks, 1, "Chisa direct damage to an Unseen Snare target should apply 1 Havoc Bane stack");
}

function v1FullAuditRegressions() {
  const resourceCases = [
    ["baizhi", "concentration", 4],
    ["chixia", "thermobaricBullets", 70],
    ["chixia", "dakaDakaShots", 30],
    ["jiyan", "resolve", 60],
    ["rover_spectro", "diminutiveSound", 100],
    ["taoqi", "resolvingCaliber", 3],
    ["zhezhi", "afflatus", 90],
    ["zhezhi", "painterDelight", 2],
    ["camellya", "crimsonPistil", 100],
  ];
  resourceCases.forEach(([charId, resourceId, max]) => {
    resetTeam([charId]);
    const control = __T.resourceControlsForSlot(__T.state.slots[0]).find((item) => item.id === resourceId);
    assert(control?.max === max, `${charId} should expose ${resourceId} with cap ${max}`);
  });

  resetTeam(["baizhi"]);
  let slot = __T.state.slots[0];
  slot.seq = 2;
  slot.resources.concentration = 3;
  assert(__T.buffStatus(slot, 0, buff(slot, "k2_glacio")).gated?.includes("念意达到4"), "Baizhi Sequence 2 should require all 4 Concentration");

  const formalResourceIds = {
    encore: "mayhem",
    mortefi: "annoyance",
    rover_spectro: "diminutiveSound",
    verina: "photosynthesisEnergy",
    yinlin: "judgmentPoints",
    xiangliyao: "capacity",
  };
  Object.entries(formalResourceIds).forEach(([charId, resourceId]) => {
    assert((window.WUWA.chars[charId].resources || []).some((item) => item.id === resourceId), `${charId} should use official resource id ${resourceId}`);
  });

  assert(skill(window.WUWA.chars.baizhi, "skill").triggerEvents.includes("heal"), "Baizhi Emergency Plan should emit heal");
  assert(skill(window.WUWA.chars.verina, "lib_coordinated").triggerEvents.includes("heal"), "Verina coordinated attack should emit heal");
  assert(skill(window.WUWA.chars.danjin, "heavy_2").triggerEvents.includes("heal"), "Danjin Chaoscleave should emit heal");
  assert(!skill(window.WUWA.chars.danjin, "heavy_3").triggerEvents?.includes("heal"), "Danjin Scatterbloom should not emit heal");
  assert(skill(window.WUWA.chars.jianxin, "forte_channel").triggerEvents.includes("shield"), "Jianxin Zhoutian channel should emit shield");
  resetTeam(["rover_spectro"]);
  slot = __T.state.slots[0];
  slot.skill = "burst";
  __T.state.effectCalc = { key: "lightNoise", providerIdx: 0, stacks: 0, stackMode: "action", deepen: 0 };
  expectEqual(__T.compute().effect.actionStacks, 6, "Rover: Spectro Resonance Liberation should apply 6 Spectro Frazzle stacks");
  assert(skill(window.WUWA.chars.taoqi, "forte_timed_counters_3").triggerEvents.includes("shield"), "Taoqi Timed Counters should emit shield");

  resetTeam(["danjin"]);
  slot = __T.state.slots[0];
  assert(!__T.buffStatus(slot, 0, buff(slot, "b1")).applies, "Danjin Incinerating Will amplification should require the target mark");
  slot.toggles[__T.stateChoiceKey("target_1")] = "target_1_option_1";
  assert(__T.buffStatus(slot, 0, buff(slot, "b1")).applies, "Danjin Incinerating Will amplification should apply to a marked target");

  resetTeam(["yinlin"]);
  slot = __T.state.slots[0];
  slot.skill = "skill_lightning_execution";
  assert(__T.buffStatus(slot, 0, buff(slot, "b1")).applies, "Yinlin Magnetic State Crit. Rate should follow Lightning Execution's implied state");

  const formCases = [
    ["calcharo", "state_1", "state_1_option_1", "lib_hounds_1"],
    ["encore", "state_1", "state_1_option_1", "lib_cosmos_frolicking_1"],
    ["jiyan", "state_1", "state_1_option_1", "lib_lance1"],
    ["lingyang", "status_1", "status_1_option_1", "forte_feral_gyrate_1"],
    ["rover_havoc", "state_1", "state_1_option_1", "umbra_na1"],
    ["yuanwu", "state_1", "state_1_option_1", "na1_2"],
    ["xiangliyao", "buff_1", "buff_1_option_1", "lib_pivot_1"],
    ["camellya", "state_1", "state_1_option_1", "skill_vining_waltz_1"],
  ];
  formCases.forEach(([charId, stateId, stateValue, skillId]) => {
    resetTeam([charId]);
    const slot = __T.state.slots[0];
    assert(!__T.availableSkills(slot).some((item) => item.id === skillId), `${charId}.${skillId} should stay hidden outside its form`);
    slot.toggles[__T.stateChoiceKey(stateId)] = stateValue;
    assert(__T.availableSkills(slot).some((item) => item.id === skillId), `${charId}.${skillId} should appear inside its form`);
  });

  resetTeam(["jinhsi"]);
  slot = __T.state.slots[0];
  assert(!__T.availableSkills(slot).some((item) => item.id === "loong_na1"), "Jinhsi Incarnation attacks should stay hidden in normal phase");
  assert(!__T.availableSkills(slot).some((item) => item.id === "skill_overflowing_radiance"), "Jinhsi Overflowing Radiance should require its 5-second window");
  slot.toggles[__T.stateChoiceKey("mechanic_1")] = "mechanic_1_option_1";
  assert(__T.availableSkills(slot).some((item) => item.id === "skill_overflowing_radiance"), "Jinhsi Overflowing Radiance should appear in its trigger window");
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_1";
  assert(__T.availableSkills(slot).some((item) => item.id === "loong_na1"), "Jinhsi Incarnation attacks should appear in Incarnation");
  slot.toggles[__T.stateChoiceKey("form_1")] = "form_1_option_2";
  assert(__T.availableSkills(slot).some((item) => item.id === "forte_illuminous_epiphany_stella"), "Jinhsi Illuminous Epiphany should appear in Ordination Glow");

  resetTeam(["zhezhi"]);
  slot = __T.state.slots[0];
  assert(!__T.availableSkills(slot).some((item) => item.id === "forte_stroke_genius"), "Zhezhi Stroke of Genius should require a nearby Phantasmic Imprint");
  slot.toggles[__T.stateChoiceKey("mechanic_1")] = "mechanic_1_option_1";
  assert(__T.availableSkills(slot).some((item) => item.id === "forte_stroke_genius"), "Zhezhi Stroke of Genius should appear near a Phantasmic Imprint");
  slot.skill = "forte_creations_zenith";
  slot.resources.painterDelight = 1;
  assert(__T.compute().resourceBlocked, "Zhezhi Creation's Zenith should require 2 Painter's Delight stacks");
  slot.resources.painterDelight = 2;
  assert(!__T.compute().resourceBlocked, "Zhezhi Creation's Zenith should unlock at 2 Painter's Delight stacks");

  expectEqual(skill(window.WUWA.chars.zhezhi, "k6_white_crane").formula, "119.29% × 3", "Zhezhi Sequence 6 White Crane should use the official formula");
  expectEqual(skill(window.WUWA.chars.camellya, "forte_ephemeral_2").formula, "1262.45%", "Camellya Perennial should expose Ephemeral's numeric multiplier");
  expectEqual(window.WUWA_LANGUAGES.localeData("en-US", "chars", "shorekeeper").resources[0].label, "Empirical Data", "Shorekeeper resource should use the official English name");
}

function perStackLocalizationValuesMatch() {
  const patterns = {
    "zh-CN": /每(?:1)?层[^%]{0,50}?([\d.]+)%/,
    "en-US": /\+([\d.]+)% per stack/i,
    "ja-JP": /1スタックにつき\+([\d.]+)%/,
    ko: /스택당 \+([\d.]+)%/,
  };
  const bad = [];
  Object.entries(patterns).forEach(([locale, pattern]) => {
    Object.values(window.WUWA.chars).forEach((c) => {
      const pack = window.WUWA_LANGUAGES.localeData(locale, "chars", c.id) || {};
      const groups = [[c.buffs || [], pack.buffs || [], "base"]];
      (c.chain || []).forEach((node, index) => groups.push([node.buffs || [], pack.chain?.[index]?.buffs || [], `C${node.seq}`]));
      groups.forEach(([buffs, texts, group]) => buffs.forEach((item, index) => {
        if (!item.maxStacks || item.value == null) return;
        const text = [texts[index]?.excerpt, texts[index]?.desc].filter(Boolean).join(" ");
        const match = text.match(pattern);
        if (!match) return;
        const shown = Number(match[1]);
        const expected = item.value / item.maxStacks;
        if (Math.abs(shown - expected) > 0.001) bad.push(`${locale} ${c.id}.${group}.${item.id}: ${shown} != ${expected}`);
      }));
    });
  });
  assert(!bad.length, `localized per-stack values should use per-stack amounts, not full-stack totals:\n${bad.join("\n")}`);
}

function iconAssetsUseSonataSets() {
  const assets = window.WUWA_ICON_ASSETS || {};
  assert(assets.sonatas && !assets.echoes, "icon assets should use sonata set icons, not lead echo icons");
  const stableCharacters = Object.values(window.WUWA.chars).filter((c) => !c.betaVersion);
  const missingCharacters = stableCharacters.filter((c) => !c.portrait || assets.characters?.[c.id] !== c.portrait || !fs.existsSync(path.join(root, c.portrait))).map((c) => c.id);
  assert(!missingCharacters.length, `stable character icons should be local and attached: ${missingCharacters.join(", ")}`);
  const stableWeapons = weapons.filter((weapon) => !weapon.betaVersion);
  const missingWeapons = stableWeapons.filter((weapon) => !weapon.icon || assets.weapons?.[weapon.id] !== weapon.icon || !fs.existsSync(path.join(root, weapon.icon))).map((weapon) => weapon.id);
  assert(!missingWeapons.length, `stable weapon icons should be local and attached: ${missingWeapons.join(", ")}`);
  const stableSonatas = sonatas.filter((set) => !set.betaVersion);
  const missing = stableSonatas.filter((set) => !set.icon || assets.sonatas[String(set.id)] !== set.icon).map((set) => set.name);
  assert(!missing.length, `sonata icons should attach to echo sets: ${missing.join(", ")}`);
  const leadIcons = sonatas.flatMap((set) => [].concat(set.leads || [], set.lead || []).filter((lead) => lead.icon).map((lead) => `${set.name}/${lead.echo}`));
  assert(!leadIcons.length, `lead echoes should not receive set icons: ${leadIcons.join(", ")}`);
  const targetData = window.WUWA_TARGET_DATA;
  const gameplayIcon = (buff) => {
    const ref = buff.localeRef || {};
    if (ref.kind === "whiwaItem") return assets.targetGameplay?.whiwa?.[String(ref.itemId)];
    if (ref.kind === "matrixBuff") return assets.targetGameplay?.dpmatrix?.[String(ref.buffId)];
    return "";
  };
  const gameplayWithArtwork = Object.values(targetData.gameplayBuffs).filter((buff) => ["whiwaItem", "matrixBuff"].includes(buff.localeRef?.kind));
  const missingGameplayIcons = gameplayWithArtwork.filter((buff) => {
    const icon = gameplayIcon(buff);
    return !icon || !fs.existsSync(path.join(root, icon));
  }).map((buff) => buff.id);
  assert(!missingGameplayIcons.length, `Whiwa Tokens and Matrix enhancements should have local icons: ${missingGameplayIcons.slice(0, 20).join(", ")}`);
  const targetIconPaths = [
    ...Object.values(assets.targetGameplay?.whiwa || {}),
    ...Object.values(assets.targetGameplay?.dpmatrix || {}),
  ];
  assert(!assets.targetMonsters && !assets.targetMatrix && !assets.targetGameplay?.toa, "target icon manifest should omit monster, wave, and ToA effect artwork");
  assert(targetIconPaths.length && targetIconPaths.every((icon) => icon.startsWith("assets/icons/targets/gameplay/") && !/https?:\/\//i.test(icon)), "Token and enhancement icons should use local asset paths only");
}

function resonanceChainActionCoverageRegressions() {
  const directOutroRates = [
    ["jiyan", "outro_discipline", 313.4],
    ["calcharo", "outro_shadowy_raid", 587.94],
    ["chixia", "outro_leaping_flames", 530],
    ["encore", "outro_thermal_field", 176.76],
    ["lingyang", "outro_frosty_marks", 587.94],
    ["xiangliyao", "outro_chain_rule", 237.63],
    ["carlotta", "outro_closing_remark", 794.2],
    ["phoebe", "outro_attentive_heart", 783.41],
    ["phoebe", "outro_attentive_confession", 528.41],
    ["galbrena", "outro_ashen_pursuit", 795],
    ["qiuyuan", "outro_strike_before_ready", 100, "echoSkill"],
    ["iuno", "outro_from_gloom", 100],
    ["lynae", "outro_hit_the_road", 100],
    ["luukherssen", "outro_last_light", 500],
    ["sigrika", "outro_very_moment", 795],
    ["rebecca", "outro_preem_choom", 2.5],
  ];
  directOutroRates.forEach(([charId, skillId, multiplier, damageType = "outroSkill"]) => {
    const action = skill(window.WUWA.chars[charId], skillId);
    expectEqual(action.category, "outroSkill", `${charId} direct Outro category`);
    expectEqual(action.damageType, damageType, `${charId} direct Outro damage type`);
    expectEqual(action.multiplier, multiplier, `${charId} direct Outro multiplier`);
  });
  const zaniOutro = skill(window.WUWA.chars.zani, "outro_beacon");
  expectEqual(zaniOutro.category, "outroSkill", "Zani direct Outro category");
  expectEqual(zaniOutro.damageType, "lightNoise", "Zani direct Outro damage type");
  expectEqual(zaniOutro.multiplier, 150, "Zani direct Outro multiplier");

  resetTeam(["jiyan"]);
  let slot = __T.state.slots[0];
  slot.skill = "outro_discipline";
  slot.seq = 4;
  expectEqual(__T.compute().panel.baseMult, 313.4, "Jiyan Discipline base multiplier");
  slot.seq = 5;
  expectEqual(__T.compute().panel.baseMult, 433.4, "Jiyan chain 5 Discipline multiplier");

  resetTeam(["xiangliyao"]);
  slot = __T.state.slots[0];
  slot.skill = "outro_chain_rule";
  slot.seq = 4;
  expectEqual(__T.compute().panel.baseMult, 237.63, "Xiangli Yao Chain Rule base multiplier");
  slot.seq = 5;
  expectEqual(__T.compute().panel.baseMult, 459.63, "Xiangli Yao chain 5 Chain Rule multiplier");

  resetTeam(["luukherssen"]);
  slot = __T.state.slots[0];
  slot.skill = "outro_last_light";
  slot.seq = 5;
  expectEqual(__T.compute().totals.typeBonus, 80, "Luuk Herssen chain 5 Outro DMG Bonus");

  const yinlin = window.WUWA.chars.yinlin;
  expectEqual(skill(yinlin, "c6_judgement_strike").multiplier, 419.59, "Yinlin chain 6 Judgement Strike per-trigger multiplier");
  resetTeam(["yinlin"]);
  slot = __T.state.slots[0];
  slot.seq = 6;
  slot.skill = "c6_judgement_strike";
  expectEqual(__T.compute().panel.baseMult, 1678.36, "Yinlin chain 6 four-trigger total multiplier");

  expectEqual(skill(window.WUWA.chars.carlotta, "c3_death_knell").multiplier, 1032.18, "Carlotta chain 3 Kaleidoscope Sparks multiplier");
  expectEqual(skill(window.WUWA.chars.mortefi, "c1_marcato_duet").multiplier, 63.62, "Mortefi chain 1 two-Marcato total multiplier");
  expectEqual(skill(window.WUWA.chars.mortefi, "c5_marcato_quartet").multiplier, 63.62, "Mortefi chain 5 reduced four-Marcato total multiplier");
  expectEqual(skill(window.WUWA.chars.qiuyuan, "c3_outro_sheath_fallen").multiplier, 500, "Qiuyuan chain 3 replacement Outro multiplier");
  expectEqual(skill(window.WUWA.chars.verina, "c6_coordinated_blossom").multiplier, 9.95, "Verina chain 6 coordinated attack multiplier");

  resetTeam(["phoebe"]);
  slot = __T.state.slots[0];
  slot.skill = "outro_attentive_heart";
  slot.toggles[__T.stateChoiceKey("mode_1")] = "mode_1_option_1";
  slot.seq = 1;
  expectEqual(__T.compute().panel.baseMult, 783.41, "Phoebe Absolution Outro should include its 255% multiplier increase");
  slot.seq = 2;
  __T.state.effectCalc = { key: "lightNoise", providerIdx: 0, stacks: 1, stackMode: "manual", deepen: 0 };
  expectEqual(__T.compute().totals.amplify, 120, "Phoebe chain 2 Absolution Outro amplification");

  resetTeam(["zani"]);
  slot = __T.state.slots[0];
  slot.skill = "outro_beacon";
  slot.toggles[__T.stateChoiceKey("target_1")] = "target_1_option_1";
  __T.state.effectCalc = { key: "lightNoise", providerIdx: 0, stacks: 1, stackMode: "manual", deepen: 0 };
  slot.toggles.stk_heliacal_ember = 60;
  __T.setBuffToggle(slot, 0, "b_outro_ember_amp", true);
  expectEqual(__T.compute().totals.amplify, 600, "Zani Outro should scale to 600% Light Noise amplification at 60 Ember stacks");

  resetTeam(["suisui"]);
  slot = __T.state.slots[0];
  let baseFlower = buff(slot, "b_outro_flower_atk");
  slot.seq = 0;
  assert(__T.buffStatus(slot, 0, baseFlower).gated !== "已被高链效果替换", "Suisui base Undulating Mist ATK trigger should exist at sequence 0");
  slot.seq = 1;
  assert(__T.buffStatus(slot, 0, baseFlower).gated === "已被高链效果替换", "Suisui sequence 1 should replace the base Undulating Mist trigger");
  assert(__T.buffStatus(slot, 0, buff(slot, "c1_outro_flower_atk")).gated !== "需 1 链", "Suisui sequence 1 expanded Undulating Mist trigger should be available");

  resetTeam(["hiyuki", "suisui"]);
  const hiyuki = __T.state.slots[0];
  hiyuki.seq = 6;
  hiyuki.toggles.stk_stack_group_1 = 2;
  __T.setBuffToggle(hiyuki, 0, "b_snow_rust_cd", true);
  __T.state.effectCalc = { key: "frost", providerIdx: 1, stacks: 1, stackMode: "manual", deepen: 0 };
  expectEqual(__T.compute().effect.extraRate, 488, "Hiyuki chain 6 should boost team-applied Glacio Chafe while Hiyuki is active");
  __T.state.outputIdx = 1;
  expectEqual(__T.compute().effect.extraRate, 0, "Hiyuki chain 6 team trigger should require Hiyuki to be active");
}

const checks = [
  ["index loads every character file", indexLoadsAllCharacterFiles],
  ["index loads every beta file", indexLoadsAllBetaFiles],
  ["language packs are split", languagePacksAreSplit],
  ["core data keeps display text out", coreDataDoesNotContainDisplayTextFields],
  ["state/resource tokens are language-neutral", stateAndResourceTokensAreLanguageNeutral],
  ["initial render completes", initialRenderCompletes],
  ["data-driven target selection interface", targetSelectionInterface],
  ["fixed target API samples", targetApiFixtureRegressions],
  ["target snapshot coverage", targetSnapshotCoverage],
  ["target resistance derivation", targetResistanceDerivationRegressions],
  ["gameplay Buff selection and derivation", gameplayBuffRegressions],
  ["target locales and offline runtime", targetLocalesAndOfflineRuntime],
  ["target connection details stay private", targetConnectionDetailsStayPrivate],
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
  ["localized READMEs use reviewed terminology", localizedReadmesUseReviewedTerminology],
  ["damage metric crit labels", damageMetricCritLabels],
  ["formula number formatting floors", formulaNumberFormattingFloors],
  ["formula card tooltips", formulaCardTooltips],
  ["split damage renders under main damage", splitDamageRendersUnderMainDamage],
  ["intro entry skill-driven events", introEntryIsSkillDriven],
  ["formula strip responsive css", formulaStripResponsiveCss],
  ["topbar sticks to viewport top", topbarSticksToViewportTop],
  ["beta version badges render", betaVersionBadgesRender],
  ["team card long names wrap", teamCardLongNamesWrap],
  ["team card sequence select shows chain names", teamCardSequenceSelectShowsChainNames],
  ["character picker sorts newest first", characterPickerSortsNewestFirst],
  ["v3.5 character entry regressions", v35CharacterEntryRegressions],
  ["Rover Electro entry regressions", roverElectroEntryRegressions],
  ["render preserves scroll", renderPreservesScroll],
  ["buff toggle uses partial refresh", buffToggleUsesPartialRefresh],
  ["confirmable Buff defaults and structured preconditions", confirmableBuffDefaultsAndStructuredPreconditions],
  ["weapon picker keeps string ids", weaponPickerKeepsStringIds],
  ["beta data files use versioned paths", betaDataFilesUseVersionedPaths],
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
  ["six-character audit regressions", sixCharacterAuditRegressions],
  ["v3 full audit regressions", v3FullAuditRegressions],
  ["v2 full audit regressions", v2FullAuditRegressions],
  ["v1 full audit regressions", v1FullAuditRegressions],
  ["resonance chain action coverage regressions", resonanceChainActionCoverageRegressions],
  ["per-stack localization values", perStackLocalizationValuesMatch],
  ["icon assets use sonata sets", iconAssetsUseSonataSets],
];

for (const [name, fn] of checks) {
  fn();
  console.log(`OK ${name}`);
}
