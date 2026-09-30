"use strict";

window.WUWA_EQUIPMENT = (() => {
  const WEAPONS = (window.WUWA_DATA && window.WUWA_DATA.weapons) || [];
  const SONATAS = window.WUWA_SONATAS || [];
  const { ZONE_LABEL, SEC_ZONE, ELEMENTS, TYPES, STAT_DEF, num, zeros } = window.WUWA_RULES;
  const L = window.WUWA_LANGUAGES;

  const asList = (v) => Array.isArray(v) ? v : (v ? [v] : []);
  const son = (id) => SONATAS.find((s) => s.id === id) || null;
  const wp = (id) => WEAPONS.find((w) => w.id === id);
  const ECHO_COSTS = [1, 3, 4];
  const ECHO_FIXED_MAIN = {
    1: { key: "hpFlat", label: "固定生命", value: 2280 },
    3: { key: "atkFlat", label: "固定攻击", value: 100 },
    4: { key: "atkFlat", label: "固定攻击", value: 150 },
  };
  const ECHO_MAIN_VALUES = {
    1: { attackPct: 18, hpPct: 18, defPct: 22.8 },
    3: { attackPct: 30, hpPct: 30, defPct: 38, energyRegen: 32 },
    4: { critRate: 22, critDamage: 44, heal: 26, attackPct: 33, hpPct: 33, defPct: 41.8 },
  };
  const ECHO_SUB_VALUES = {
    atkFlat: [30, 40, 50, 60],
    hpFlat: [320, 360, 390, 430, 470, 510, 540, 580],
    defFlat: [40, 50, 60, 70],
    attackPct: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    hpPct: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    defPct: [8.1, 9, 10, 10.9, 11.8, 12.8, 13.8, 14.7],
    critRate: [6.3, 6.9, 7.5, 8.1, 8.7, 9.3, 9.9, 10.5],
    critDamage: [12.6, 13.8, 15, 16.2, 17.4, 18.6, 19.8, 21],
    energyRegen: [6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4],
    basicDmg: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    heavyDmg: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    skillDmg: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
    burstDmg: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6],
  };

  function statLabel(key, c = null) {
    if (!key) return L.t("common.unselected");
    if (String(key).startsWith("elem:")) return L.damageBonusLabel(L.element(key.slice(5)));
    if (key === "elem") return L.damageBonusLabel(c?.element ? L.element(c.element) : L.text("属性"));
    return L.stat(STAT_DEF[key]?.label || key);
  }

  function characterDamageElements(c) {
    if (!c) return [];
    const used = new Set([c.element, ...asList(c.skills).map((skill) => skill.element)].filter((element) => ELEMENTS.includes(element)));
    return [c.element, ...ELEMENTS.filter((element) => element !== c.element && used.has(element))].filter((element, idx, list) => element && list.indexOf(element) === idx);
  }

  function echoMainOptions(cost, c) {
    const values = ECHO_MAIN_VALUES[cost] || ECHO_MAIN_VALUES[1];
    const out = Object.keys(values).map((key) => ({ key, label: statLabel(key, c), value: values[key] }));
    if (cost !== 3) return out;
    const elements = characterDamageElements(c).map((element) => ({ key: `elem:${element}`, label: statLabel(`elem:${element}`, c), value: 30 }));
    return [...elements, ...out];
  }

  function echoSubOptions(c) {
    return Object.keys(ECHO_SUB_VALUES).map((key) => ({ key, label: statLabel(key, c), values: ECHO_SUB_VALUES[key] }));
  }

  function echoSubValues(key) {
    return ECHO_SUB_VALUES[key] || [];
  }

  function echoFixedMain(cost) {
    return ECHO_FIXED_MAIN[cost] || ECHO_FIXED_MAIN[1];
  }

  function leadEchoCost(lead) {
    const cost = num(lead?.cost, 4);
    return ECHO_COSTS.includes(cost) ? cost : 4;
  }

  function defaultMainKey(cost, c) {
    if (cost === 4) return "critRate";
    if (cost === 3 && c?.element) return `elem:${c.element}`;
    return "attackPct";
  }

  function normalizedMainKey(cost, currentKey, c) {
    const options = echoMainOptions(cost, c);
    if (options.some((opt) => opt.key === currentKey)) return currentKey;
    const preferred = defaultMainKey(cost, c);
    return options.some((opt) => opt.key === preferred) ? preferred : (options[0]?.key || "");
  }

  function echoSetIds(e) {
    if (!e) return [];
    if (e.detailMode && e.detail?.echoes) return e.detail.echoes.map((item) => item.set).filter(Boolean);
    const ids = [e.primary];
    if (e.combo === "split32") ids.push(e.secondary);
    if (e.combo === "split122") ids.push(e.secondary, e.tertiary);
    return ids.filter(Boolean);
  }

  function leadChoicesForEcho(e) {
    if (!e) return [];
    const ids = e.detailMode ? [e.detail?.echoes?.[0]?.set] : [e.primary];
    const detailCost = e.detailMode ? num(e.detail?.echoes?.[0]?.cost) : 0;
    if (!e.detailMode && e.combo === "split32") ids.push(e.secondary);
    const uniqueIds = ids.filter((id, i, arr) => id && arr.indexOf(id) === i);
    return uniqueIds
      .map((id) => son(id))
      .filter(Boolean)
      .flatMap((set) => {
        const special = [...asList(set.leads), ...asList(set.lead)];
        return special.map((lead, i) => ({
          set,
          lead,
          cost: leadEchoCost(lead),
          key: `${set.id}:${lead.id || lead.echo || i}`,
        })).filter((choice) => !detailCost || choice.cost === detailCost);
      });
  }

  function syncEchoLead(e, preferredElement = null) {
    const choices = leadChoicesForEcho(e);
    if (!choices.length) { e.lead = null; return e; }
    const preferred = preferredElement && choices.find((choice) => (choice.lead.buffs || []).some((b) => b.element === preferredElement));
    if (!choices.some((choice) => choice.key === e.lead || choice.set.id === e.lead)) e.lead = (preferred || choices[0]).key;
    else if (typeof e.lead !== "string") e.lead = choices.find((choice) => choice.set.id === e.lead).key;
    return e;
  }

  function defaultDetailSets(e) {
    if (!e) return [];
    if (e.combo === "split32") return [e.primary, e.primary, e.primary, e.secondary, e.secondary];
    if (e.combo === "split122") return [e.primary, e.secondary, e.secondary, e.tertiary, e.tertiary];
    return [e.primary, e.primary, e.primary, e.primary, e.primary];
  }

  function normalizeDetailedEcho(item, fallbackSet, cost, c) {
    const next = item || {};
    next.set = next.set || fallbackSet || (SONATAS[0] && SONATAS[0].id) || null;
    next.cost = ECHO_COSTS.includes(num(next.cost)) ? num(next.cost) : cost;
    next.main = normalizedMainKey(next.cost, next.main, c);
    const usedSubs = new Set();
    next.subs = Array.from({ length: 5 }, (_, i) => {
      const prev = (next.subs || [])[i] || {};
      const prevKey = echoSubValues(prev.key).length ? prev.key : "";
      const key = prevKey && !usedSubs.has(prevKey) ? prevKey : "";
      if (key) usedSubs.add(key);
      const values = echoSubValues(key);
      const value = values.includes(num(prev.value)) ? num(prev.value) : (values[0] || 0);
      return { key, value };
    });
    return next;
  }

  function ensureEchoDetail(slot, c) {
    const e = slot?.echo;
    if (!e) return null;
    const sets = defaultDetailSets(e);
    const costs = [4, 3, 3, 1, 1];
    e.detail = e.detail || {};
    e.detail.echoes = Array.from({ length: 5 }, (_, i) => normalizeDetailedEcho((e.detail.echoes || [])[i], sets[i], costs[i], c));
    syncEchoLead(e);
    return e.detail;
  }

  function addEchoField(fields, key, value) {
    const v = num(value);
    if (!key || !v) return;
    fields[key] = num(fields[key]) + v;
  }

  function echoDetailFields(slot, c) {
    if (!slot?.echo?.detailMode || !c) return null;
    const detail = ensureEchoDetail(slot, c);
    const fields = {};
    (detail?.echoes || []).forEach((item) => {
      const main = echoMainOptions(item.cost, c).find((opt) => opt.key === item.main);
      if (main) addEchoField(fields, main.key, main.value);
      const fixed = echoFixedMain(item.cost);
      addEchoField(fields, fixed.key, fixed.value);
      (item.subs || []).forEach((sub) => addEchoField(fields, sub.key, sub.value));
    });
    return fields;
  }

  function echoFieldValues(slot, c) {
    return echoDetailFields(slot, c) || slot?.echo?.fields || {};
  }

  function echoDetailSummary(slot, c) {
    const detail = ensureEchoDetail(slot, c);
    let totalCost = 0;
    (detail?.echoes || []).forEach((item) => {
      totalCost += num(item.cost);
    });
    return { totalCost, fields: echoDetailFields(slot, c) || {} };
  }

  function defaultEchoForChar(c) {
    const primary = (c && c.echoSet) ?? (SONATAS[0] && SONATAS[0].id) ?? null;
    const secondary = (c && c.echoSet2) ?? null;
    const tertiary = (c && c.echoSet3) ?? null;
    return syncEchoLead({
      combo: (c && c.echoCombo) || (tertiary ? "split122" : (secondary ? "split32" : "single5")),
      primary,
      secondary,
      tertiary,
      lead: c && c.echoLead ? c.echoLead : null,
      fields: c ? { atkFlat: 1000, critRate: 40, critDamage: 120 } : {},
    }, c && c.element);
  }

  function descForRank(text, rank) {
    const r = Math.min(Math.max(rank || 1, 1), 5);
    return (text || "").replace(/[\d.]+%?(?:\/[\d.]+%?){4}/g, (g) => g.split("/")[r - 1] || g);
  }

  function rankValuesForEffect(e) {
    if (!Array.isArray(e.rankValues)) return [num(e.value)];
    return e.rankValues.map(num);
  }

  function weaponStackRequirement(req) {
    if (!req || !req.id) return req || null;
    const id = String(req.id);
    return { ...req, id: id.startsWith("w_") ? id : "w_" + id };
  }

  function sonataStackRequirement(prefix, req) {
    if (!req || !req.id) return req || null;
    const id = String(req.id);
    return { ...req, id: id.startsWith("son_") ? id : `${prefix}_${id}` };
  }

  function weaponBuffs(weaponId, rank) {
    const w = wp(weaponId);
    if (!w) return [];
    const r = Math.min(Math.max(rank || 1, 1), 5);
    const out = [];
    const secZone = SEC_ZONE[w.secondaryStat];
    if (secZone) {
      const secondaryLabel = L.stat(w.secondaryStat);
      out.push({ id: "w_sec", source: w.name, label: `${secondaryLabel}${L.paren(L.text("武器副词条"))}`, zone: secZone, value: num(w.secondary90), scope: "self", duration: null, desc: `武器副词条：${secondaryLabel} ${w.secondary90}（不随谐振阶变化）。` });
    }
    (w.effects || []).forEach((e) => {
      if (!ZONE_LABEL[e.zone]) return;
      const ranks = rankValuesForEffect(e);
      const triggerEvents = asList(e.triggerEvents);
      out.push({ exclusiveGroup: e.exclusiveGroup, nonStackingKey: e.nonStackingKey, requiresSourceActive: e.requiresSourceActive, id: "w_" + e.id, source: `${w.name} ${L.t("common.rank", { value: r })}`, label: e.label, zone: e.zone, value: ranks[Math.min(r - 1, ranks.length - 1)], damageType: e.damageType || null, element: e.element || null, effect: e.effect || null, scope: e.scope || "self", duration: e.duration ?? null, durationAtMaxStacks: e.durationAtMaxStacks || null, maxStacks: e.maxStacks || null, defaultStacks: e.defaultStacks ?? null, defaultActive: e.defaultActive, trigger: e.trigger || null, triggerEvents, triggerSkills: e.triggerSkills || null, triggerDamageTypes: e.triggerDamageTypes || null, triggerStacks: e.triggerStacks ?? null, triggerOutro: e.triggerOutro || null, requiresBuffStacks: weaponStackRequirement(e.requiresBuffStacks), requiresEffectStacks: e.requiresEffectStacks || null, requiresAnyEffectStacks: e.requiresAnyEffectStacks || null, excerpt: e.excerpt ? descForRank(e.excerpt, r) : null, desc: descForRank(e.conditionText || w.description, r) });
    });
    return out;
  }

  const PIECE_TAG = { p1: "1件套效果", p2: "2件套效果", p3: "3件套效果", p5: "5件套效果" };
  function sonataBuffs(slot) {
    const e = slot.echo;
    if (!e) return [];
    syncEchoLead(e);
    const out = [];
    const pushPiece = (set, kind) => {
      const eff = set && set[kind];
      if (!eff) return;
      const arr = Array.isArray(eff) ? eff : eff.buffs ? eff.buffs : [eff];
      arr.forEach((b, i) => out.push({ ...b, id: `son_${set.id}_${b.id || kind + "_" + i}`, source: set.name, pieceTag: PIECE_TAG[kind], scope: b.scope || "self", requiresBuffStacks: sonataStackRequirement(`son_${set.id}`, b.requiresBuffStacks) }));
    };
    if (e.detailMode) {
      const counts = {};
      echoSetIds(e).forEach((id) => { counts[id] = (counts[id] || 0) + 1; });
      Object.entries(counts).forEach(([id, count]) => {
        const set = son(num(id));
        if (count >= 5) { pushPiece(set, "p2"); pushPiece(set, "p5"); }
        else if (count >= 3 && set?.p3) pushPiece(set, "p3");
        else if (count >= 2) pushPiece(set, "p2");
        else pushPiece(set, "p1");
      });
    } else if (e.combo === "split32") { pushPiece(son(e.primary), "p3"); pushPiece(son(e.secondary), "p2"); }
    else if (e.combo === "split122") { pushPiece(son(e.primary), "p1"); pushPiece(son(e.secondary), "p2"); pushPiece(son(e.tertiary), "p2"); }
    else { pushPiece(son(e.primary), "p2"); pushPiece(son(e.primary), "p5"); }
    const choice = leadChoicesForEcho(e).find((item) => item.key === e.lead);
    if (choice) choice.lead.buffs.forEach((b) => out.push({ ...b, id: `son_${choice.key}_${b.id}`, source: choice.lead.echo, pieceTag: "首位单体效果", scope: b.scope || "self", requiresBuffStacks: sonataStackRequirement(`son_${choice.key}`, b.requiresBuffStacks) }));
    return out;
  }

  function echoStats(slot, c) {
    const out = { ...zeros(), flatAtk: 0, flatHp: 0, flatDef: 0, energyRegen: 0, healingBonus: 0, discordEff: 0, elem: {}, type: {} };
    ELEMENTS.forEach((el) => (out.elem[el] = 0));
    TYPES.forEach((t) => (out.type[t] = 0));
    const e = slot.echo;
    if (!e || !c) return out;
    const charElem = c.element;
    Object.entries(echoFieldValues(slot, c)).forEach(([k, val]) => {
      const v = num(val);
      if (!v) return;
      if (k.startsWith("elem:")) { addKnown(out.elem, k.slice(5), v); return; }
      const def = STAT_DEF[k];
      if (!def) return;
      if (def.elem) { addKnown(out.elem, charElem, v); return; }
      if (def.flat) { out[def.flat] += v; return; }
      if (def.zone === "typeBonus") { addKnown(out.type, def.type, v); return; }
      if (def.zone === "breakAmp") return;
      out[def.zone] += v;
    });
    return out;
  }

  function addKnown(target, key, value) {
    if (target[key] !== undefined) target[key] += value;
  }

  return {
    WEAPONS, SONATAS, son, wp, defaultEchoForChar, leadChoicesForEcho, syncEchoLead,
    weaponBuffs, sonataBuffs, echoStats,
    ECHO_COSTS, echoMainOptions, echoSubOptions, echoSubValues, echoFixedMain,
    ensureEchoDetail, echoDetailFields, echoFieldValues, echoDetailSummary, statLabel,
  };
})();
