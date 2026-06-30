"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const iconDataFile = path.join(root, "data", "icons.js");
const reportFile = path.join(root, "assets", "icons", "missing-icons.json");

const elementFileNames = {
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

function loadProjectData() {
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
  require(path.join(root, "src", "languages.js"));
  languageFiles("zh-CN").forEach((file) => require(file));
  languageFiles("en-US").forEach((file) => require(file));
  window.WUWA_LANGUAGES.set("en-US");
  window.WUWA_LANGUAGES.applyData(window.WUWA, window.WUWA_DATA, window.WUWA_SONATAS);
  return {
    chars: Object.values(window.WUWA.chars),
    weapons: window.WUWA_DATA.weapons || [],
    sonatas: window.WUWA_SONATAS || [],
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

function writeIconData(icons, missing) {
  const body = `window.WUWA_ICON_ASSETS = ${JSON.stringify(icons, null, 2)};\n\n` +
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
  fs.writeFileSync(iconDataFile, body);
  mkdirp(path.dirname(reportFile));
  fs.writeFileSync(reportFile, JSON.stringify({ generatedAt: new Date().toISOString(), missing }, null, 2));
}

function main() {
  const { chars, weapons, sonatas } = loadProjectData();
  const icons = { characters: {}, weapons: {}, sonatas: {}, elements: {} };
  const missing = [];
  const elements = Object.keys(elementFileNames).map((name) => ({ name }));

  collectLocalIcons(icons, missing, "characters", chars, (c) => assetPath("characters", c.id), (c) => c.id, (c) => c.name);
  collectLocalIcons(icons, missing, "weapons", weapons, (w, index) => assetPath("weapons", weaponFileName(w, index)), (w) => w.id || w.name, (w) => w.name);
  collectLocalIcons(icons, missing, "sonatas", sonatas, sonataAssetPath, sonataKey, (set) => set.name);
  collectLocalIcons(icons, missing, "elements", elements, (item) => assetPath("elements", elementFileNames[item.name]), (item) => item.name, (item) => item.name);

  writeIconData(icons, missing);
  console.log(`Local icon sync: linked ${Object.values(icons).reduce((sum, group) => sum + Object.keys(group).length, 0)} icons; missing ${missing.length}.`);
  if (missing.length) console.log(`Missing report: ${path.relative(root, reportFile)}`);
}

main();
