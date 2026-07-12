"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { REVIEWED_CHAIN_NUMERIC_COVERAGE, REVIEWED_SKILL_NUMERIC_COVERAGE } = require("./character-numeric-coverage.js");

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
const CHARACTERS_ONLY = process.argv.includes("--characters-only");
const usedReviewedChainCoverage = new Set();
const usedReviewedSkillCoverage = new Set();

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
    .replace(/orAero/g, "or Aero")
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
      attrs.push({
        id: attr.attributeId,
        skillId: skill.SkillId,
        skillName: skill.SkillName,
        attributeName: attr.attributeName,
        fullName: `${skill.SkillName} - ${attr.attributeName}`,
        values: attr.values,
      });
    }
  }
  return attrs;
}

function formulaTotal(value) {
  const normalized = String(value || "")
    .replace(/[×x]/gi, "*")
    .replace(/%/g, "")
    .replace(/\s+/g, "");
  if (!normalized || !/^[\d.+*/()-]+$/.test(normalized)) return null;
  const sum = normalized.split("+").reduce((total, term) => {
    const factors = term.split("*").map(Number);
    if (factors.some((factor) => !Number.isFinite(factor))) return NaN;
    return total + factors.reduce((product, factor) => product * factor, 1);
  }, 0);
  return Number.isFinite(sum) ? Math.round(sum * 10000) / 10000 : null;
}

function level10FormulaTotal(attr) {
  return formulaTotal(asList(attr?.values)[9]);
}

function positiveDamageRate(rate) {
  return asList(rate).some((value) => {
    const parts = String(value || "").match(/\d+(?:\.\d+)?/g) || [];
    return parts.some((part) => Number(part) > 0);
  });
}

function officialDirectOutroSkills(apiChar) {
  return (apiChar.Skills || []).filter((skill) => {
    if (skill.SkillType !== "Outro Skill") return false;
    if ((skill.DamageList || []).some((item) => positiveDamageRate(item.RateLv))) return true;
    const desc = cleanHtml(skill.SkillDescribe);
    const rateBeforeDmg = /\b(?:deal|deals|dealing)\b[^.]{0,60}\d+(?:\.\d+)?%\s+(?:(?:Fusion|Glacio|Electro|Aero|Spectro|Havoc)\s+)?DMG\b/i;
    const rateAfterDmg = /\b(?:deal|deals|dealing|suffering)\b[^.]{0,160}\bDMG\b[^.]{0,60}\bequal to\b[^.]{0,40}\d+(?:\.\d+)?%/i;
    return rateBeforeDmg.test(desc) || rateAfterDmg.test(desc);
  });
}

function officialActionNameMatches(localName, officialName) {
  const local = normName(localName);
  const official = normName(officialName);
  if (!local || !official) return false;
  return local === official || local.startsWith(official);
}

function numericMechanicClauses(value) {
  return cleanHtml(value)
    .split(/\n+|(?<=[.!?;])\s+/)
    .map((clause) => clause.trim())
    .filter((clause) => /\d/.test(clause))
    .filter((clause) => /DMG|damage|multiplier|ATK|DEF|HP|Crit\.|CRIT|RES|stack|Energy|Concerto| Forte|duration|second|time|restore|heal|shield|increase|decrease|Amplif|Bonus/i.test(clause));
}

function calculatorRelevantSkillClauses(value) {
  return numericMechanicClauses(value).filter((clause) => {
    if (/damage taken|DMG taken|takes? (?:DMG|\d+(?:\.\d+)?% less DMG)|DMG Reduction|shield|heal|Healing|Flight STA|Energy Regen Multiplier/i.test(clause)) return false;
    if (/DMG Multiplier|DMG Bonus|DMG Amplif|DMG dealt|damage dealt|DMG taken by the target|ignore[^.]*DEF|\bRES\b[^.]*reduc|(?:increase|additional)[^.]*\bATK\b|\bATK\b[^.]*(?:increase|additional)|Crit\./i.test(clause)) return true;
    if (/(?:deal|deals|dealing)[^.]*\d+(?:\.\d+)?(?:%| points?)[^.]*\bDMG\b|\bDMG\b[^.]*equal to[^.]*\d+(?:\.\d+)?%/i.test(clause)) return true;
    return /(?:apply|applies|inflict|inflicts|raise)[^.]*\d+[^.]*(?:Aero Erosion|Spectro Frazzle|Glacio Chafe|Electro Flare|Havoc Bane|Fusion Burst|Tune Strain)/i.test(clause);
  });
}

function collectNumericValues(value, key = "", out = []) {
  if (key === "seq") return out;
  if (typeof value === "number" && Number.isFinite(value)) out.push(value);
  else if (typeof value === "string" && key === "formula") {
    (value.match(/\d+(?:\.\d+)?/g) || []).forEach((part) => out.push(Number(part)));
  } else if (Array.isArray(value)) value.forEach((item) => collectNumericValues(item, key, out));
  else if (value && typeof value === "object") Object.entries(value).forEach(([childKey, child]) => collectNumericValues(child, childKey, out));
  return out;
}

function coverageFromEntries(entries) {
  const numbers = entries.flatMap((entry) => collectNumericValues(entry.value));
  entries.forEach((entry) => {
    const value = Number(entry.value?.value);
    const maxStacks = Number(entry.value?.maxStacks);
    if (Number.isFinite(value) && Number.isFinite(maxStacks) && maxStacks > 0) numbers.push(value / maxStacks);
  });
  return { refs: entries.map((entry) => entry.ref), numbers };
}

function chainStructuredCoverage(char, seq) {
  const entries = [];
  const node = (char.chain || []).find((item) => Number(item.seq) === Number(seq));
  (node?.buffs || []).forEach((buff) => entries.push({ ref: `buff:${buff.id}`, value: buff }));
  (char.skills || []).filter((skill) => Number(skill.seq) === Number(seq)).forEach((skill) => entries.push({ ref: `skill:${skill.id}`, value: skill }));
  (char.skillEvents || []).filter((event) => Number(event.seq) === Number(seq)).forEach((event, idx) => entries.push({ ref: `event:${event.event || idx}`, value: event }));
  (char.resources || []).forEach((resource) => {
    asList(resource.maxBySeq).filter((rule) => Number(rule.seq) === Number(seq)).forEach((rule) => entries.push({ ref: `resource:${resource.id}`, value: rule }));
  });
  const buffs = [...(char.buffs || []), ...(char.chain || []).flatMap((item) => item.buffs || [])];
  buffs.forEach((buff) => {
    asList(buff.stackMaxBySeq || buff.stackGroupMaxBySeq).filter((rule) => Number(rule.seq) === Number(seq)).forEach((rule) => entries.push({ ref: `stack:${buff.id}`, value: rule }));
  });
  return coverageFromEntries(entries);
}

function officialSkillStructuredCoverage(char, enPack, official, skillMatches) {
  const entries = [];
  const actionIds = new Set();
  const officialDescription = cleanHtml(official.SkillDescribe);
  (char.skills || []).forEach((skill, idx) => {
    const matchedByAttribute = skillMatches[idx]?.attr?.skillId === official.SkillId;
    const matchedByAction = officialActionNameMatches(enPack?.skills?.[idx]?.name, official.SkillName);
    if (!matchedByAttribute && !matchedByAction) return;
    entries.push({ ref: `skill:${skill.id}`, value: skill });
    actionIds.add(skill.id);
  });
  (char.buffs || []).forEach((buff, idx) => {
    const source = enPack?.buffs?.[idx]?.source;
    const desc = cleanHtml(enPack?.buffs?.[idx]?.desc);
    const sourceMatches = normName(source).includes(normName(official.SkillName));
    const descriptionMatches = desc.length >= 12 && (officialDescription.includes(desc) || desc.includes(officialDescription));
    if (!sourceMatches && !descriptionMatches) return;
    entries.push({ ref: `buff:${buff.id}`, value: buff });
  });
  (char.skillEvents || []).forEach((event, idx) => {
    if (!asList(event.skills).some((skillId) => actionIds.has(skillId))) return;
    entries.push({ ref: `event:${event.event || idx}`, value: event });
  });
  (char.resources || []).forEach((resource, idx) => {
    const label = enPack?.resources?.[idx]?.label;
    if (!label || !officialDescription.includes(label)) return;
    entries.push({ ref: `resource:${resource.id}`, value: resource });
  });
  (char.combatStates || []).forEach((state, idx) => {
    const localized = enPack?.combatStates?.[idx];
    const stateText = cleanHtml([localized?.entry, localized?.effects].filter(Boolean).join("\n"));
    if (stateText.length < 12 || (!officialDescription.includes(stateText) && !stateText.includes(officialDescription))) return;
    entries.push({ ref: `state:${state.id}`, value: state });
  });
  return coverageFromEntries(entries);
}

function clausePercentages(clause) {
  return [...String(clause).matchAll(/(\d+(?:\.\d+)?)%/g)].map((match) => Number(match[1]));
}

function clauseExactMechanicNumbers(clause) {
  const values = [];
  const patterns = [
    /(?:deal|deals|dealing)[^.]*?(\d+(?:\.\d+)?)\s*(?:points?|pt)\b[^.]*\bDMG\b/gi,
    /(?:apply|applies|inflict|inflicts|raise)[^.]*?(\d+(?:\.\d+)?)\s*(?:stacks?|times?)\b/gi,
  ];
  patterns.forEach((pattern) => {
    for (const match of String(clause).matchAll(pattern)) values.push(Number(match[1]));
  });
  return values;
}

function percentageCovered(percentages, localNumbers) {
  return percentages.every((value) => {
    if (localNumbers.some((candidate) => Math.abs(candidate - value) <= 0.02)) return true;
    return percentages.some((other) => other !== value && localNumbers.some((candidate) => Math.abs(candidate - Math.abs(value - other)) <= 0.02));
  });
}

function descriptionHash(value) {
  return crypto.createHash("sha256").update(cleanHtml(value)).digest("hex").slice(0, 12);
}

function expectedZoneGroup(clause) {
  if (/Crit\. Rate[^.]{0,80}(?:increase|increased)|increase[^.]{0,80}Crit\. Rate/i.test(clause)) return ["critRate", "fixedCrit"];
  if (/Crit\. DMG[^.]{0,80}(?:increase|increased)|increase[^.]{0,80}Crit\. DMG/i.test(clause)) return ["critDamage", "fixedCrit"];
  if (/\bATK\b[^.]{0,80}(?:increase|increased)|increase[^.]{0,80}\bATK\b/i.test(clause)) return ["attackPercent"];
  if (/DMG Bonus/i.test(clause)) return ["damageBonus", "typeBonus", "typeBonusScale"];
  if (/DMG Amplif|Amplif[^.]{0,80}DMG/i.test(clause)) return ["amplify"];
  if (/DMG taken[^.]{0,80}increase|increase[^.]{0,80}DMG taken/i.test(clause)) return ["vulnerability", "finalDmg"];
  if (/ignore[^.]{0,80}DEF/i.test(clause)) return ["defIgnore"];
  if (/\bRES\b[^.]{0,80}(?:reduced|ignore)|(?:reduce|ignore)[^.]{0,80}\bRES\b/i.test(clause)) return ["resShred"];
  if (/DMG Multiplier[^.]{0,100}(?:increase|increased)/i.test(clause)) return ["skillMultBonus", "multAdd", "skill"];
  return [];
}

function chainZoneCoverage(char, seq) {
  const node = (char.chain || []).find((item) => Number(item.seq) === Number(seq));
  const zones = (node?.buffs || []).flatMap((buff) => [buff.zone, buff.multAdd != null ? "multAdd" : null]).filter(Boolean);
  if ((char.skills || []).some((skill) => Number(skill.seq) === Number(seq))) zones.push("skill");
  return zones;
}

function characterRefExists(char, ref) {
  const [kind, id] = String(ref).split(":");
  if (kind === "buff") return [...(char.buffs || []), ...(char.chain || []).flatMap((node) => node.buffs || [])].some((buff) => buff.id === id);
  if (kind === "skill") return (char.skills || []).some((skill) => skill.id === id);
  if (kind === "event") return (char.skillEvents || []).some((event) => event.event === id);
  if (kind === "resource") return (char.resources || []).some((resource) => resource.id === id);
  if (kind === "state") return (char.combatStates || []).some((state) => state.id === id || (state.options || []).some((option) => option.value === id));
  return false;
}

function reviewedChainCoverageReady(char, id, seq, description, refs, bad, stats) {
  const key = `${id}:${seq}`;
  const review = REVIEWED_CHAIN_NUMERIC_COVERAGE[key];
  if (!review) return false;
  usedReviewedChainCoverage.add(key);
  const hash = descriptionHash(description);
  if (review.hash !== hash) {
    bad.push(`character ${id}.chain${seq}: reviewed numeric coverage is stale (${review.hash} != ${hash})`);
    return true;
  }
  if (!review.reason || !Array.isArray(review.refs)) {
    bad.push(`character ${id}.chain${seq}: reviewed numeric coverage needs reason and refs[]`);
    return true;
  }
  const missingRefs = review.refs.filter((ref) => !characterRefExists(char, ref));
  if (missingRefs.length) bad.push(`character ${id}.chain${seq}: reviewed refs missing ${missingRefs.join(",")}`);
  stats.reviewedChainNodes += 1;
  return true;
}

function reviewedSkillCoverageReady(char, id, skillId, description, bad, stats) {
  const key = `${id}:${skillId}`;
  const review = REVIEWED_SKILL_NUMERIC_COVERAGE[key];
  if (!review) return false;
  usedReviewedSkillCoverage.add(key);
  const hash = descriptionHash(description);
  if (review.hash !== hash) {
    bad.push(`character ${id}.skill${skillId}: reviewed numeric coverage is stale (${review.hash} != ${hash})`);
    return true;
  }
  if (!review.reason || !Array.isArray(review.refs) || !review.refs.length) {
    bad.push(`character ${id}.skill${skillId}: reviewed numeric coverage needs reason and non-empty refs[]`);
    return true;
  }
  const missingRefs = review.refs.filter((ref) => !characterRefExists(char, ref));
  if (missingRefs.length) bad.push(`character ${id}.skill${skillId}: reviewed refs missing ${missingRefs.join(",")}`);
  stats.reviewedSkillDescriptions += 1;
  return true;
}

function uniqueNameIndex(items, field) {
  const grouped = new Map();
  items.forEach((item) => {
    const key = normName(item[field]);
    if (!key) return;
    grouped.set(key, [...(grouped.get(key) || []), item]);
  });
  return new Map([...grouped].map(([key, values]) => [key, values.length === 1 ? values[0] : null]));
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
  for (const file of jsFilesUnder(path.join(root, "data/core/beta")).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
    require(file);
  }
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
  const officialCharIds = window.WUWA.order.filter((id) => !window.WUWA.chars[id]?.betaVersion);
  stats.skippedBetaCharacters = window.WUWA.order.length - officialCharIds.length;
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
  for (const id of officialCharIds) {
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
  await mapConcurrent(officialCharIds, FETCH_CONCURRENCY, async (id) => {
    const apiId = charApiIds.get(id);
    const enDetail = await charDetail("en", apiId);
    const enSkillAttrs = apiSkillAttributes(enDetail);
    const enFullAttrs = uniqueNameIndex(enSkillAttrs, "fullName");
    const enAttributeAttrs = uniqueNameIndex(enSkillAttrs, "attributeName");
    const enPack = window.WUWA_LANGUAGES.localeData("en-US", "chars", id);
    const skillMatches = (window.WUWA.chars[id].skills || []).map((sk, idx) => {
      const localName = normName(enPack?.skills?.[idx]?.name);
      const fullMatch = enFullAttrs.get(localName);
      const attr = fullMatch || enAttributeAttrs.get(localName);
      return attr ? { attr, field: fullMatch ? "fullName" : "attributeName" } : null;
    });
    const matchedSkills = skillMatches.filter(Boolean).length;
    stats.matchedSkillEntries += matchedSkills;
    if (!matchedSkills) bad.push(`character ${id}: no local skill names matched official English attributes`);
    skillMatches.forEach((match, idx) => {
      if (!match) return;
      const officialTotal = level10FormulaTotal(match.attr);
      if (officialTotal == null) return;
      const sk = window.WUWA.chars[id].skills[idx];
      const candidates = [Number(sk.multiplier), formulaTotal(sk.formula)];
      if (sk.perStack != null) candidates.push(Number(sk.perStack));
      if (sk.perStack != null && sk.stackMax != null) candidates.push(Number(sk.multiplier) + Number(sk.perStack) * Number(sk.stackMax));
      const matched = candidates.some((candidate) => Number.isFinite(candidate) && Math.abs(candidate - officialTotal) <= 0.02);
      if (!matched) bad.push(`character ${id}.${sk.id}: multiplier ${sk.multiplier} formula ${sk.formula} != official ${asList(match.attr.values)[9]}`);
      else stats.matchedMultiplierEntries += 1;
    });
    (enDetail.Skills || []).forEach((official) => {
      const clauses = calculatorRelevantSkillClauses(official.SkillDescribe);
      if (!clauses.length) return;
      stats.numericSkillClauses += clauses.length;
      const coverage = officialSkillStructuredCoverage(window.WUWA.chars[id], enPack, official, skillMatches);
      const issues = [];
      if (!coverage.refs.length) issues.push("no structured refs");
      clauses.forEach((clause) => {
        const percentages = clausePercentages(clause);
        if (percentages.length && !percentageCovered(percentages, coverage.numbers)) issues.push(`unmatched ${percentages.join("/")}%`);
        else if (percentages.length) stats.matchedSkillPercentageClauses += 1;
        const exactNumbers = clauseExactMechanicNumbers(clause);
        if (exactNumbers.some((value) => !coverage.numbers.some((candidate) => Math.abs(candidate - value) <= 0.02))) {
          issues.push(`unmatched exact ${exactNumbers.join("/")}`);
        }
      });
      if (issues.length && !reviewedSkillCoverageReady(window.WUWA.chars[id], id, official.SkillId, official.SkillDescribe, bad, stats)) {
        bad.push(`character ${id}.skill${official.SkillId}: review=${descriptionHash(official.SkillDescribe)} refs=${coverage.refs.join(",") || "none"} issues=${[...new Set(issues)].join(";")} :: ${clauses.join(" | ")}`);
      }
      else stats.structuredSkillDescriptions += 1;
    });
    const directOutroMatches = officialDirectOutroSkills(enDetail).map((official) => {
      const index = (window.WUWA.chars[id].skills || []).findIndex((sk, idx) => (
        sk.category === "outroSkill" && officialActionNameMatches(enPack?.skills?.[idx]?.name, official.SkillName)
      ));
      if (index < 0) bad.push(`character ${id}: missing direct Outro action ${official.SkillName}`);
      else stats.directOutroEntries += 1;
      return { skillId: official.SkillId, index };
    });
    (enDetail.ResonantChain || []).forEach((official, idx) => {
      const parsedSeq = Number(official.NodeIndex);
      const seq = Number.isFinite(parsedSeq) ? parsedSeq : idx + 1;
      const clauses = numericMechanicClauses(official.AttributesDescription);
      if (!clauses.length) return;
      stats.numericChainClauses += clauses.length;
      const coverage = chainStructuredCoverage(window.WUWA.chars[id], seq);
      const zones = chainZoneCoverage(window.WUWA.chars[id], seq);
      const issues = [];
      if (!coverage.refs.length) issues.push("no structured refs");
      else stats.structuredChainNodes += 1;
      clauses.forEach((clause) => {
        const percentages = clausePercentages(clause);
        if (percentages.length && !percentageCovered(percentages, coverage.numbers)) {
          issues.push(`unmatched ${percentages.join("/")}%`);
        } else if (percentages.length) stats.matchedChainPercentageClauses += 1;
        const expectedZones = expectedZoneGroup(clause);
        if (expectedZones.length && !expectedZones.some((zone) => zones.includes(zone))) issues.push(`zone ${expectedZones.join("/")}`);
      });
      if (!issues.length) return;
      if (reviewedChainCoverageReady(window.WUWA.chars[id], id, seq, official.AttributesDescription, coverage.refs, bad, stats)) return;
      bad.push(`character ${id}.chain${seq}: review=${descriptionHash(official.AttributesDescription)} refs=${coverage.refs.join(",") || "none"} issues=${[...new Set(issues)].join(";")} :: ${clauses.join(" | ")}`);
    });
    for (const { code, api } of TARGET_LANGS) {
      const pack = window.WUWA_LANGUAGES.localeData(code, "chars", id);
      const detail = await charDetail(api, apiId);
      if (pack?.name !== detail.Name?.Content) bad.push(`${code}.char.${id}.name: ${pack?.name} != ${detail.Name?.Content}`);
      const targetAttrs = new Map(apiSkillAttributes(detail).map((attr) => [attr.id, attr]));
      const targetSkills = new Map((detail.Skills || []).map((skill) => [skill.SkillId, skill]));
      (window.WUWA.chars[id].skills || []).forEach((sk, idx) => {
        const match = skillMatches[idx];
        const official = match ? targetAttrs.get(match.attr.id)?.[match.field] : null;
        if (!official) {
          stats.derivedSkillEntries += 1;
          if (!pack?.skills?.[idx]?.name) bad.push(`${code}.char.${id}.${sk.id}: missing derived skill name`);
          return;
        }
        if (pack?.skills?.[idx]?.name !== official) bad.push(`${code}.char.${id}.${sk.id}: ${pack?.skills?.[idx]?.name} != ${official}`);
      });
      directOutroMatches.forEach((match) => {
        if (match.index < 0) return;
        const official = targetSkills.get(match.skillId)?.SkillName || "";
        if (!officialActionNameMatches(pack?.skills?.[match.index]?.name, official)) bad.push(`${code}.char.${id}.directOutro: ${pack?.skills?.[match.index]?.name} != ${official}`);
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
    if (done % 10 === 0 || done === officialCharIds.length) console.error(`Audited characters ${done}/${officialCharIds.length}`);
  });
  Object.keys(REVIEWED_CHAIN_NUMERIC_COVERAGE)
    .filter((key) => !usedReviewedChainCoverage.has(key))
    .forEach((key) => bad.push(`character ${key}: reviewed numeric coverage is no longer needed`));
  Object.keys(REVIEWED_SKILL_NUMERIC_COVERAGE)
    .filter((key) => !usedReviewedSkillCoverage.has(key))
    .forEach((key) => bad.push(`character ${key}: reviewed skill numeric coverage is no longer needed`));
}

async function auditWeapons(bad, stats) {
  console.error("Auditing official weapon names and descriptions...");
  const officialWeapons = window.WUWA_DATA.weapons.filter((weapon) => !weapon.betaVersion);
  stats.skippedBetaWeapons = window.WUWA_DATA.weapons.length - officialWeapons.length;
  const enWeapons = (await getJson(`${API_BASE}/en/weapon`)).weapons;
  const weaponByName = new Map(enWeapons.map((weapon) => [normName(weapon.Name), weapon]));
  let done = 0;
  await mapConcurrent(officialWeapons, FETCH_CONCURRENCY, async (weapon) => {
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
    if (done % 20 === 0 || done === officialWeapons.length) console.error(`Audited weapons ${done}/${officialWeapons.length}`);
  });
}

async function auditSonatas(bad, stats) {
  console.error("Auditing official sonata and lead echo names...");
  const officialSonatas = window.WUWA_SONATAS.filter((set) => !set.betaVersion);
  stats.skippedBetaSonatas = window.WUWA_SONATAS.length - officialSonatas.length;
  const enEchoList = (await getJson(`${API_BASE}/en/echo`)).Echo;
  const echoLists = { "en-US": enEchoList };
  for (const { code, api } of TARGET_LANGS) {
    if (!echoLists[code]) echoLists[code] = (await getJson(`${API_BASE}/${api}/echo`)).Echo;
  }
  const echoByEnSlug = new Map(enEchoList.map((echo) => [slug(echo.Name), echo]));
  for (const { code } of TARGET_LANGS) {
    const targetById = new Map(echoLists[code].map((echo) => [echo.Id, echo]));
    for (const set of officialSonatas) {
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
  const stats = { matchedSkillEntries: 0, matchedMultiplierEntries: 0, derivedSkillEntries: 0, directOutroEntries: 0, numericSkillClauses: 0, matchedSkillPercentageClauses: 0, structuredSkillDescriptions: 0, reviewedSkillDescriptions: 0, numericChainClauses: 0, matchedChainPercentageClauses: 0, structuredChainNodes: 0, reviewedChainNodes: 0, skippedBetaCharacters: 0, skippedBetaWeapons: 0, skippedBetaSonatas: 0 };
  await auditCharacters(bad, stats);
  if (!CHARACTERS_ONLY) {
    await auditWeapons(bad, stats);
    await auditSonatas(bad, stats);
  }
  if (bad.length) {
    console.error(`OFFICIAL_AUDIT_FAIL ${bad.length}`);
    console.error(bad.slice(0, 120).join("\n"));
    process.exit(1);
  }
  const equipmentStats = CHARACTERS_ONLY ? "" : ` weapons=${window.WUWA_DATA.weapons.length - stats.skippedBetaWeapons}/${window.WUWA_DATA.weapons.length} sonatas=${window.WUWA_SONATAS.length - stats.skippedBetaSonatas}/${window.WUWA_SONATAS.length}`;
  console.log(`OFFICIAL_AUDIT_OK chars=${window.WUWA.order.length - stats.skippedBetaCharacters}/${window.WUWA.order.length}${equipmentStats} skippedBeta=${stats.skippedBetaCharacters + stats.skippedBetaWeapons + stats.skippedBetaSonatas} matchedSkillEntries=${stats.matchedSkillEntries} matchedMultiplierEntries=${stats.matchedMultiplierEntries} derivedSkillEntries=${stats.derivedSkillEntries} directOutroEntries=${stats.directOutroEntries} numericSkillClauses=${stats.numericSkillClauses} matchedSkillPercentageClauses=${stats.matchedSkillPercentageClauses} structuredSkillDescriptions=${stats.structuredSkillDescriptions} reviewedSkillDescriptions=${stats.reviewedSkillDescriptions} numericChainClauses=${stats.numericChainClauses} matchedChainPercentageClauses=${stats.matchedChainPercentageClauses} structuredChainNodes=${stats.structuredChainNodes} reviewedChainNodes=${stats.reviewedChainNodes} langs=${TARGET_LANGS.map((item) => item.code).join(",")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
