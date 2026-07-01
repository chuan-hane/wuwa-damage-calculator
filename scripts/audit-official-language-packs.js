"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const API_BASE = "https://api-v2.encore.moe/api";
const TARGET_LANGS = [
  { code: "en-US", api: "en" },
  { code: "ko", api: "ko" },
  { code: "ja-JP", api: "ja" },
];
const FETCH_TIMEOUT_MS = 20000;
const FETCH_RETRIES = 2;
const FETCH_CONCURRENCY = 10;

function jsFilesUnder(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsFilesUnder(full);
    return entry.isFile() && entry.name.endsWith(".js") ? [full] : [];
  });
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

function normName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[：:]/g, ":")
    .replace(/\s*[—–-]\s*/g, " - ")
    .replace(/\s+/g, " ")
    .trim();
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

function asList(value) {
  return Array.isArray(value) ? value : (value ? [value] : []);
}

function apiSkillAttributes(apiChar) {
  const attrs = [];
  for (const skill of apiChar.Skills || []) {
    for (const attr of Object.values(skill.SkillAttributes || {})) {
      attrs.push({ id: attr.attributeId, fullName: `${skill.SkillName} - ${attr.attributeName}` });
    }
  }
  return attrs;
}

const fetchCache = new Map();
async function getJson(url) {
  if (fetchCache.has(url)) return fetchCache.get(url);
  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      const json = await response.json();
      fetchCache.set(url, json);
      return json;
    } catch (error) {
      if (attempt === FETCH_RETRIES) throw new Error(`${url}: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error(`Failed to fetch ${url}`);
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

function loadRepoData() {
  global.window = {};
  global.WUWA = window.WUWA = {
    chars: {},
    order: [],
    register(c) {
      this.chars[c.id] = c;
      this.order.push(c.id);
    },
  };
  require(path.join(root, "data/core/weapons.js"));
  require(path.join(root, "data/core/sonatas.js"));
  for (const file of jsFilesUnder(path.join(root, "data/core/chara")).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
    require(file);
  }
  require(path.join(root, "src/languages.js"));
  const langs = [...new Set(["zh-CN", ...TARGET_LANGS.map((item) => item.code)])];
  for (const lang of langs) {
    const dir = path.join(root, "data/languages", lang);
    const order = ["base.js", "ui.js", "terms.js", "mechanics.js"].map((file) => path.join(dir, file)).filter(fs.existsSync);
    const rest = jsFilesUnder(dir).filter((file) => !order.includes(file)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    for (const file of [...order, ...rest]) require(file);
  }
}

async function auditCharacters(bad, stats) {
  console.error("Auditing official character names, skill names, and chain text...");
  const roleList = (await getJson(`${API_BASE}/en/character`)).roleList;
  const roleCandidates = new Map();
  roleList.forEach((role) => {
    const key = normName(role.Name);
    roleCandidates.set(key, [...(roleCandidates.get(key) || []), role]);
  });
  async function charDetail(api, id) {
    return getJson(`${API_BASE}/${api}/character/${id}`);
  }
  const charApiIds = new Map();
  for (const id of window.WUWA.order) {
    const enPack = window.WUWA_LANGUAGES.localeData("en-US", "chars", id);
    const candidates = roleCandidates.get(normName(enPack?.name)) || [];
    if (!candidates.length) {
      bad.push(`character ${id}: no official English candidate for ${enPack?.name}`);
      continue;
    }
    let best = candidates[0], bestScore = -1;
    for (const candidate of candidates) {
      const detail = await charDetail("en", candidate.Id);
      const score = apiSkillAttributes(detail).length;
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
    charApiIds.set(id, best.Id);
  }
  let done = 0;
  await mapConcurrent(window.WUWA.order, FETCH_CONCURRENCY, async (id) => {
    const apiId = charApiIds.get(id);
    const enDetail = await charDetail("en", apiId);
    const enAttrs = new Map(apiSkillAttributes(enDetail).map((attr) => [normName(attr.fullName), attr]));
    for (const { code, api } of TARGET_LANGS) {
      const pack = window.WUWA_LANGUAGES.localeData(code, "chars", id);
      const detail = await charDetail(api, apiId);
      if (pack?.name !== detail.Name?.Content) bad.push(`${code}.char.${id}.name: ${pack?.name} != ${detail.Name?.Content}`);
      const targetAttrs = new Map(apiSkillAttributes(detail).map((attr) => [attr.id, attr]));
      const enPack = window.WUWA_LANGUAGES.localeData("en-US", "chars", id);
      (window.WUWA.chars[id].skills || []).forEach((sk, idx) => {
        const enAttr = enAttrs.get(normName(enPack?.skills?.[idx]?.name));
        const official = enAttr ? targetAttrs.get(enAttr.id)?.fullName : null;
        if (!official) {
          stats.derivedSkillEntries += 1;
          if (!pack?.skills?.[idx]?.name) bad.push(`${code}.char.${id}.${sk.id}: missing derived skill name`);
          return;
        }
        if (pack?.skills?.[idx]?.name !== official) bad.push(`${code}.char.${id}.${sk.id}: ${pack?.skills?.[idx]?.name} != ${official}`);
      });
      const targetChains = new Map((detail.ResonantChain || []).map((node) => [node.NodeIndex, node]));
      (window.WUWA.chars[id].chain || []).forEach((node, idx) => {
        const official = targetChains.get(node.seq || idx + 1) || detail.ResonantChain?.[idx];
        const local = pack?.chain?.[idx];
        if (local?.name !== (official?.NodeName || "")) bad.push(`${code}.char.${id}.chain${idx + 1}.name`);
        if (cleanHtml(local?.desc) !== cleanHtml(official?.AttributesDescription || "")) bad.push(`${code}.char.${id}.chain${idx + 1}.desc`);
      });
    }
    done += 1;
    if (done % 10 === 0 || done === window.WUWA.order.length) console.error(`Audited characters ${done}/${window.WUWA.order.length}`);
  });
}

async function auditWeapons(bad) {
  console.error("Auditing official weapon names and descriptions...");
  const enWeapons = (await getJson(`${API_BASE}/en/weapon`)).weapons;
  const weaponByName = new Map(enWeapons.map((weapon) => [normName(weapon.Name), weapon]));
  let done = 0;
  await mapConcurrent(window.WUWA_DATA.weapons, FETCH_CONCURRENCY, async (weapon) => {
    const enPack = window.WUWA_LANGUAGES.localeData("en-US", "weapons", weapon.id);
    const apiWeapon = weaponByName.get(normName(enPack?.name));
    if (!apiWeapon) {
      bad.push(`weapon ${weapon.id}: no official English match for ${enPack?.name}`);
      return;
    }
    for (const { code, api } of TARGET_LANGS) {
      const detail = await getJson(`${API_BASE}/${api}/weapon/${apiWeapon.Id}`);
      const pack = window.WUWA_LANGUAGES.localeData(code, "weapons", weapon.id);
      if (pack?.name !== detail.WeaponName) bad.push(`${code}.weapon.${weapon.id}.name`);
      if (pack?.typeName !== detail.WeaponTypeName) bad.push(`${code}.weapon.${weapon.id}.typeName`);
      if (pack?.resonanceName !== detail.ResonName) bad.push(`${code}.weapon.${weapon.id}.resonanceName`);
      if (cleanHtml(pack?.description) !== cleanHtml(detail.Desc)) bad.push(`${code}.weapon.${weapon.id}.description`);
    }
    done += 1;
    if (done % 20 === 0 || done === window.WUWA_DATA.weapons.length) console.error(`Audited weapons ${done}/${window.WUWA_DATA.weapons.length}`);
  });
}

async function auditSonatas(bad) {
  console.error("Auditing official sonata and lead echo names...");
  const enEchoList = (await getJson(`${API_BASE}/en/echo`)).Echo;
  const echoLists = { "en-US": enEchoList };
  for (const { code, api } of TARGET_LANGS) {
    if (!echoLists[code]) echoLists[code] = (await getJson(`${API_BASE}/${api}/echo`)).Echo;
  }
  const echoByEnSlug = new Map(enEchoList.map((echo) => [slug(echo.Name), echo]));
  for (const { code } of TARGET_LANGS) {
    const targetById = new Map(echoLists[code].map((echo) => [echo.Id, echo]));
    for (const set of window.WUWA_SONATAS) {
      const enPack = window.WUWA_LANGUAGES.localeData("en-US", "sonatas", set.id) || {};
      const sampleEcho = enEchoList.find((echo) => (echo.FetterGroups || []).some((group) => normName(group.Name) === normName(enPack.name)))
        || enEchoList.find((echo) => (echo.FetterGroups || []).some((group) => String(group.Id) === String(set.id)));
      if (!sampleEcho) {
        bad.push(`sonata ${set.id}: no official echo sample`);
        continue;
      }
      const enGroup = (sampleEcho.FetterGroups || []).find((group) => normName(group.Name) === normName(enPack.name))
        || (sampleEcho.FetterGroups || []).find((group) => String(group.Id) === String(set.id));
      const targetSample = targetById.get(sampleEcho.Id);
      const targetGroup = (targetSample?.FetterGroups || []).find((group) => String(group.Id) === String(enGroup?.Id));
      const pack = window.WUWA_LANGUAGES.localeData(code, "sonatas", set.id);
      if (pack?.name !== (targetGroup?.Name || "")) bad.push(`${code}.sonata.${set.id}.name: ${pack?.name} != ${targetGroup?.Name}`);
      const leads = asList(set.leads || set.lead);
      const targetLeads = asList(pack?.leads || pack?.lead);
      leads.forEach((lead, idx) => {
        const enLead = asList(enPack.leads || enPack.lead)[idx];
        const enEcho = echoByEnSlug.get(slug(enLead?.echo || lead.id)) || echoByEnSlug.get(slug(lead.id));
        const targetEcho = enEcho ? targetById.get(enEcho.Id) : null;
        if (targetLeads[idx]?.echo !== (targetEcho?.Name || lead.id)) bad.push(`${code}.sonata.${set.id}.lead${idx}: ${targetLeads[idx]?.echo} != ${targetEcho?.Name}`);
      });
    }
  }
}

async function main() {
  loadRepoData();
  const bad = [];
  const stats = { derivedSkillEntries: 0 };
  await auditCharacters(bad, stats);
  await auditWeapons(bad);
  await auditSonatas(bad);
  if (bad.length) {
    console.error(`OFFICIAL_AUDIT_FAIL ${bad.length}`);
    console.error(bad.slice(0, 120).join("\n"));
    process.exit(1);
  }
  console.log(`OFFICIAL_AUDIT_OK chars=${window.WUWA.order.length} weapons=${window.WUWA_DATA.weapons.length} sonatas=${window.WUWA_SONATAS.length} derivedSkillEntries=${stats.derivedSkillEntries} langs=${TARGET_LANGS.map((item) => item.code).join(",")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
