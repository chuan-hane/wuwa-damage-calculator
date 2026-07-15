"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const iconDataFile = path.join(root, "data", "icons.js");
const reportFile = path.join(root, "assets", "icons", "missing-icons.json");
const targetDataFile = path.join(root, "data", "core", "targets.js");
const targetApiBase = String(process.env.WUWA_TARGET_API_BASE || "").replace(/\/+$/, "");

const elementFileNames = {
  none: "physical",
  glacio: "glacio",
  fusion: "fusion",
  electro: "electro",
  aero: "aero",
  spectro: "spectro",
  havoc: "havoc",
};

function jsFilesUnder(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsFilesUnder(full);
    if (!entry.isFile() || !entry.name.endsWith(".js")) return [];
    return [full];
  });
}

function loadProjectData(targetDataOverride = null) {
  global.window = {};
  global.WUWA = window.WUWA = {
    chars: {},
    order: [],
    register(c) {
      this.chars[c.id] = c;
      this.order.push(c.id);
    },
  };
  require(path.join(root, "data", "core", "weapons.js"));
  require(path.join(root, "data", "core", "sonatas.js"));
  jsFilesUnder(path.join(root, "data", "core", "chara")).sort().forEach((file) => require(file));
  if (targetDataOverride) window.WUWA_TARGET_DATA = targetDataOverride;
  else require(targetDataFile);
  require(path.join(root, "src", "languages.js"));
  languageFiles("zh-CN").forEach((file) => require(file));
  languageFiles("en-US").forEach((file) => require(file));
  window.WUWA_LANGUAGES.set("en-US");
  window.WUWA_LANGUAGES.applyData(window.WUWA, window.WUWA_DATA, window.WUWA_SONATAS);
  return {
    chars: Object.values(window.WUWA.chars),
    weapons: window.WUWA_DATA.weapons || [],
    sonatas: window.WUWA_SONATAS || [],
    targetData: window.WUWA_TARGET_DATA,
  };
}

function languageFiles(lang) {
  const dir = path.join(root, "data", "languages", lang);
  const order = ["base.js", "ui.js", "terms.js", "mechanics.js"];
  const known = order.filter((file) => fs.existsSync(path.join(dir, file))).map((file) => path.join(dir, file));
  const rest = jsFilesUnder(dir)
    .filter((file) => !known.includes(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return [...known, ...rest];
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function safeFileName(name) {
  return String(name)
    .trim()
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, "_");
}

function assetPath(kind, fileName) {
  return `assets/icons/${kind}/${fileName}.webp`;
}

function sonataAssetPath(set) {
  return `assets/icons/sonatas/${sonataFileName(set)}.webp`;
}

function sonataKey(set) {
  return String(set.id);
}

function sonataFileName(set) {
  return englishSlug(set.name || set.id) || safeFileName(set.id);
}

function englishSlug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function weaponFileName(weapon, index) {
  return englishSlug(weapon.name) || `weapon_${String(index + 1).padStart(3, "0")}`;
}

function collectLocalIcons(icons, missing, kind, items, makePath, makeKey, makeName) {
  items.forEach((item, index) => {
    const rel = makePath(item, index);
    if (fs.existsSync(path.join(root, rel))) {
      icons[kind][makeKey(item, index)] = rel;
      return;
    }
    missing.push({ kind, key: makeKey(item, index), name: makeName(item, index), expectedPath: rel });
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function targetGameplayAssetPath(mode, sourceId) {
  return `assets/icons/targets/gameplay/${mode}_${sourceId}.webp`;
}

function gameplayAssetRef(definition) {
  const ref = definition?.localeRef || {};
  if (ref.kind === "whiwaItem") return { mode: "whiwa", sourceId: Number(ref.itemId) };
  if (ref.kind === "matrixBuff") return { mode: "dpmatrix", sourceId: Number(ref.buffId) };
  return null;
}

function collectTargetLocalIcons(icons, missing, targetData) {
  Object.values(targetData?.gameplayBuffs || {}).forEach((definition) => {
    const ref = gameplayAssetRef(definition);
    if (!ref) return;
    const key = String(ref.sourceId);
    const rel = targetGameplayAssetPath(ref.mode, ref.sourceId);
    if (fs.existsSync(path.join(root, rel))) icons.targetGameplay[ref.mode][key] = rel;
    else missing.push({ kind: `targetGameplay.${ref.mode}`, key, expectedPath: rel });
  });
}

function iconFileContent(icons) {
  return `window.WUWA_ICON_ASSETS = ${JSON.stringify(icons, null, 2)};\n\n` +
`(function applyWuwaIconAssets() {\n` +
`  const assets = window.WUWA_ICON_ASSETS || {};\n` +
`  const chars = window.WUWA && window.WUWA.chars ? window.WUWA.chars : {};\n` +
`  Object.entries(assets.characters || {}).forEach(([id, icon]) => {\n` +
`    if (chars[id]) chars[id].portrait = icon;\n` +
`  });\n` +
`  const weapons = (window.WUWA_DATA && window.WUWA_DATA.weapons) || [];\n` +
`  Object.entries(assets.weapons || {}).forEach(([id, icon]) => {\n` +
`    const weapon = weapons.find((item) => item.id === id || item.name === id);\n` +
`    if (weapon) weapon.icon = icon;\n` +
`  });\n` +
`  const sonatas = window.WUWA_SONATAS || [];\n` +
`  Object.entries(assets.sonatas || {}).forEach(([id, icon]) => {\n` +
`    const set = sonatas.find((item) => String(item.id) === id || item.name === id);\n` +
`    if (set) set.icon = icon;\n` +
`  });\n` +
`})();\n`;
}

function buildIconSnapshotFromData({ chars, weapons, sonatas, targetData }, generatedAt = new Date().toISOString()) {
  const icons = {
    characters: {}, weapons: {}, sonatas: {}, elements: {},
    targetGameplay: { whiwa: {}, dpmatrix: {} },
  };
  const missing = [];
  const elements = Object.keys(elementFileNames).map((name) => ({ name }));

  collectLocalIcons(icons, missing, "characters", chars, (c) => assetPath("characters", c.id), (c) => c.id, (c) => c.name);
  collectLocalIcons(icons, missing, "weapons", weapons, (w, index) => assetPath("weapons", weaponFileName(w, index)), (w) => w.id || w.name, (w) => w.name);
  collectLocalIcons(icons, missing, "sonatas", sonatas, sonataAssetPath, sonataKey, (set) => set.name);
  collectLocalIcons(icons, missing, "elements", elements, (item) => assetPath("elements", elementFileNames[item.name]), (item) => item.name, (item) => item.name);
  collectTargetLocalIcons(icons, missing, targetData);
  return {
    icons,
    missing,
    files: {
      "data/icons.js": iconFileContent(icons),
      "assets/icons/missing-icons.json": JSON.stringify({ generatedAt, missing }, null, 2),
    },
  };
}

function buildIconSnapshot(targetDataOverride = null, generatedAt = new Date().toISOString()) {
  return buildIconSnapshotFromData(loadProjectData(targetDataOverride), generatedAt);
}

function writeIconData(snapshot) {
  fs.writeFileSync(iconDataFile, snapshot.files["data/icons.js"]);
  mkdirp(path.dirname(reportFile));
  fs.writeFileSync(reportFile, snapshot.files["assets/icons/missing-icons.json"]);
}

function targetEndpoint(route) {
  return `${targetApiBase}/zh-Hans${route}`;
}

async function fetchJson(url, label, attempt = 1) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      headers: { accept: "application/json", "user-agent": "wuwa-damage-calculator-icon-sync/1.0" },
      signal: controller.signal,
    });
    assert(response.ok, `${label}: request failed`);
    return await response.json();
  } catch (error) {
    if (attempt >= 4) throw new Error(`${label}: request failed`);
    await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    return fetchJson(url, label, attempt + 1);
  } finally {
    clearTimeout(timeout);
  }
}

async function concurrentMap(values, limit, mapper) {
  const output = new Array(values.length);
  let cursor = 0;
  async function worker() {
    const index = cursor++;
    if (index >= values.length) return;
    output[index] = await mapper(values[index], index);
    return worker();
  }
  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, () => worker()));
  return output;
}

async function fetchTargetPayloads(targetData) {
  assert(targetApiBase, "Set WUWA_TARGET_API_BASE before syncing target icons.");
  const seasonIds = asArray(targetData?.modes?.dpmatrix?.seasons).map((season) => String(season.id));
  const matrixEntries = await concurrentMap(seasonIds, 4, async (seasonId) => [seasonId, await fetchJson(targetEndpoint(`/dpmatrix/${seasonId}`), `dpmatrix ${seasonId}`)]);
  const itemIds = Array.from(new Set(Object.values(targetData?.gameplayBuffs || {})
    .map(gameplayAssetRef)
    .filter((ref) => ref?.mode === "whiwa")
    .map((ref) => ref.sourceId)));
  const itemEntries = await concurrentMap(itemIds, 4, async (itemId) => [itemId, await fetchJson(targetEndpoint(`/item/${itemId}`), `item ${itemId}`)]);
  return { detailsByMode: { dpmatrix: new Map(matrixEntries) }, itemDetails: new Map(itemEntries) };
}

function matrixBuffs(payload) {
  return asArray(payload?.Levels).flatMap((level) => asArray(level.NewTowerBuffs));
}

function gameplayIconSources(detailsByMode, itemDetails) {
  const sources = { whiwa: new Map(), dpmatrix: new Map() };
  itemDetails.forEach((item, itemId) => sources.whiwa.set(String(itemId), item.Icon));
  detailsByMode.dpmatrix.forEach((payload) => matrixBuffs(payload).forEach((buff) => {
    const key = String(buff.Id);
    if (!sources.dpmatrix.has(key)) sources.dpmatrix.set(key, buff.Icon);
    else assert(sources.dpmatrix.get(key) === buff.Icon, `conflicting dpmatrix icon ${key}`);
  }));
  return sources;
}

function registerRemoteAsset(assets, relative, source) {
  assert(typeof source === "string" && source, `missing icon source ${relative}`);
  const parsed = new URL(source);
  assert(parsed.protocol === "https:" && parsed.pathname.endsWith(".webp"), `invalid icon source ${relative}`);
  const existing = assets.get(relative);
  assert(!existing || existing === source, `conflicting icon source ${relative}`);
  assets.set(relative, source);
}

function buildTargetIconPlan(targetData, payloads) {
  const assets = new Map();
  const gameplaySources = gameplayIconSources(payloads.detailsByMode, payloads.itemDetails);
  Object.values(targetData?.gameplayBuffs || {}).forEach((definition) => {
    const ref = gameplayAssetRef(definition);
    if (!ref) return;
    const relative = targetGameplayAssetPath(ref.mode, ref.sourceId);
    registerRemoteAsset(assets, relative, gameplaySources[ref.mode].get(String(ref.sourceId)));
  });
  const origins = new Set(Array.from(assets.values(), (source) => new URL(source).origin));
  assert(origins.size === 1, "target icons must use one asset origin");
  return Array.from(assets, ([relative, source]) => ({ relative, source }));
}

function isWebp(bytes) {
  return bytes.length > 12 && bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
}

async function fetchIcon(asset, attempt = 1) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(asset.source, {
      headers: { accept: "image/webp", "user-agent": "wuwa-damage-calculator-icon-sync/1.0" },
      signal: controller.signal,
    });
    assert(response.ok, `icon ${asset.relative}: request failed`);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert(bytes.length > 0 && bytes.length <= 5 * 1024 * 1024 && isWebp(bytes), `icon ${asset.relative}: invalid image`);
    return bytes;
  } catch (error) {
    if (attempt >= 4) throw new Error(`icon ${asset.relative}: request failed`);
    await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    return fetchIcon(asset, attempt + 1);
  } finally {
    clearTimeout(timeout);
  }
}

async function downloadTargetIcons(plan) {
  const staged = [];
  const errors = [];
  let cursor = 0;
  async function worker() {
    const index = cursor++;
    if (index >= plan.length) return;
    const asset = plan[index];
    const destination = path.join(root, asset.relative);
    const temp = `${destination}.tmp-${process.pid}`;
    try {
      const bytes = await fetchIcon(asset);
      mkdirp(path.dirname(destination));
      fs.writeFileSync(temp, bytes);
      staged.push([temp, destination]);
    } catch (error) {
      errors.push(error);
    }
    return worker();
  }
  await Promise.all(Array.from({ length: Math.min(6, plan.length) }, () => worker()));
  if (errors.length) {
    staged.forEach(([temp]) => { if (fs.existsSync(temp)) fs.unlinkSync(temp); });
    throw errors[0];
  }
  staged.forEach(([temp, destination]) => fs.renameSync(temp, destination));
}

async function synchronizeTargetIcons(targetData, payloads = null) {
  const resolvedPayloads = payloads || await fetchTargetPayloads(targetData);
  const plan = buildTargetIconPlan(targetData, resolvedPayloads);
  await downloadTargetIcons(plan);
  return plan.length;
}

function buildIconFiles(targetData, generatedAt) {
  const snapshot = buildIconSnapshot(targetData, generatedAt);
  assert(!snapshot.missing.length, `local icon snapshot is incomplete (${snapshot.missing.length})`);
  return snapshot.files;
}

async function main() {
  const initial = loadProjectData();
  let downloaded = 0;
  if (process.argv.includes("--targets")) downloaded = await synchronizeTargetIcons(initial.targetData);
  const snapshot = buildIconSnapshotFromData(initial);
  writeIconData(snapshot);
  const linked = Object.values(snapshot.icons).reduce((sum, group) => {
    if (!group || typeof group !== "object") return sum;
    return sum + Object.values(group).reduce((count, value) => count + (value && typeof value === "object" ? Object.keys(value).length : 1), 0);
  }, 0);
  console.log(`Local icon sync: linked ${linked} icons; downloaded ${downloaded}; missing ${snapshot.missing.length}.`);
  if (snapshot.missing.length) console.log(`Missing report: ${path.relative(root, reportFile)}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = {
  buildIconFiles,
  buildIconSnapshot,
  buildTargetIconPlan,
  synchronizeTargetIcons,
};
