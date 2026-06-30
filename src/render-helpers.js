"use strict";

window.WUWA_RENDER_HELPERS = (() => {
  const { num, skillLevelRatio, skillMultValue } = window.WUWA_RULES;
  const L = window.WUWA_LANGUAGES;

  const fmt = (n) => Math.round(n).toLocaleString("en-US");
  const fx = (n) => n.toFixed(3);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const tnum = (v) => String(Math.round(v * 100) / 100);
  const parts = (arr, suf = "") => arr.map(([l, v]) => `${L.text(l)} ${tnum(v)}${suf}`).join(" + ");
  const sum = (arr) => arr.reduce((s, p) => s + p[1], 0);
  const nonEchoEntries = (arr) => arr.filter(([label]) => label !== "声骸");
  const nonEchoSum = (arr) => sum(nonEchoEntries(arr));
  const pct = (v) => `${tnum(v)}%`;

  const RES_HINT = { toString: () => L.t("hints.res") };
  const PROVIDER_META = {
    "技能树": { cls: "skill", get label() { return L.provider("技能树"); } },
    "共鸣链": { cls: "chain", get label() { return L.provider("共鸣链"); } },
    "武器": { cls: "weapon", get label() { return L.provider("武器"); } },
    "声骸": { cls: "echo", get label() { return L.provider("声骸"); } },
  };
  const PROVIDER_ORDER = ["技能树", "共鸣链", "武器", "声骸"];
  const DAMAGE_MODES = {
    crit: { get label() { return L.t("damageModes.crit"); }, value: (r) => r.critHit, split: "crit" },
    expected: { get label() { return L.t("damageModes.expected"); }, value: (r) => r.expected, split: "expected" },
    normal: { get label() { return L.t("damageModes.normal"); }, value: (r) => r.normal, split: "normal" },
  };

  function skillFormulaText(sk, layers = null) {
    if (!sk) return "0%";
    const text = sk.formula || `${sk.multiplier}%`;
    if (layers == null || !sk.stackLabel) return text;
    return text.replace(new RegExp(`(×\\s*)${sk.stackLabel}`, "g"), `$1${sk.stackLabel}(${layers})`);
  }
  function parseFormulaParts(sk, layers = 0) {
    if (!sk || !sk.formula || !String(sk.formula).includes("+")) return null;
    const terms = String(sk.formula).split("+").map((p) => p.trim()).filter(Boolean);
    const parsed = terms.map((term) => {
      const m = term.match(/^([\d.]+)%\s*(?:[×x*]\s*([\d.]+|[\u4e00-\u9fa5A-Za-z_]+))?$/);
      if (!m) return null;
      let count = 1;
      if (m[2]) count = Number.isFinite(num(m[2], NaN)) ? num(m[2]) : (m[2] === sk.stackLabel ? layers : NaN);
      if (!Number.isFinite(count)) return null;
      return { percent: num(m[1]), count, stack: m[2] === sk.stackLabel };
    });
    return parsed.every(Boolean) ? parsed : null;
  }
  function multiplierPartsForResult(r) {
    const parsed = parseFormulaParts(r.sk, r.layers) || [{ percent: r.sk ? r.sk.multiplier + (r.sk.perStack ? r.sk.perStack * r.layers : 0) : 0, count: 1 }];
    const lvRatio = skillLevelRatio(r.skLevel);
    const splitParts = parsed
      .map((p) => ({ percent: skillMultValue(p.percent * (p.stack ? 1 + (r.perStackBonus || 0) / 100 : 1), lvRatio), count: p.count }))
      .filter((p) => p.count > 0 && p.percent !== 0);
    if (r.multAdd) splitParts.push({ percent: r.multAdd, count: 1 });
    return splitParts.length > 1 ? splitParts : [];
  }
  function damageSplitHTML(r, kind, compact = false) {
    const splitParts = multiplierPartsForResult(r);
    if (!splitParts.length) return "";
    const critFactor = kind === "crit" ? r.cd : kind === "expected" ? r.cr * r.cd + (1 - r.cr) : 1;
    const expr = splitParts.map((part) => {
      const value = Math.floor(r.damageScalar * part.percent * critFactor);
      return `${fmt(value)}${part.count !== 1 ? ` × ${part.count}` : ""}`;
    }).join(" + ");
    const label = compact ? "" : (kind === "expected" ? L.text("期望分段：") : L.text("分段："));
    return `<div class="damage-split${compact ? " compact" : ""}">${label}${expr}</div>`;
  }

  function durationText(buff) {
    const d = num(buff.duration);
    if (d > 0) return L.isEnglish() ? `${d}s` : `持续 ${d} 秒`;
    const m = String(buff.desc || "").match(/持续\s*([\d.]+)\s*秒/);
    if (m) return L.isEnglish() ? `${parseFloat(m[1])}s` : `持续 ${parseFloat(m[1])} 秒`;
    return buff.skills ? L.text("当前技能有效") : L.text("一直有效");
  }
  function shortDuration(buff) {
    const d = durationText(buff);
    if (d === "一直有效" || d === "Always active") return L.text("常驻");
    if (d === "当前技能有效" || d === "Current skill") return L.text("技能内");
    return d;
  }
  function buffSourceTitle(buff) {
    return L.sourceTitle(String(buff.source || "").replace(/^链(\d+)·/, "$1链·"));
  }
  function escapeRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function trimBuffTail(text) {
    return String(text || "")
      .replace(/，?效果?持续[\d.]+秒.*$/, "")
      .replace(/，?持续[\d.]+秒.*$/, "")
      .replace(/，?可叠加.*$/, "")
      .replace(/，?每[\d.]+秒.*$/, "")
      .replace(/，?若切换至其他角色.*$/, "")
      .replace(/，?重复触发时.*$/, "")
      .replace(/，?同名效果之间.*$/, "")
      .trim();
  }
  function triggerExcerpt(text) {
    const m = String(text || "").match(/^(.{1,60}?)(时|后)[，,]/) || String(text || "").match(/^(.{1,60}?)(时|后)/);
    if (!m) return "";
    const raw = m[1];
    const suffix = m[2];
    const actions = [
      [/普攻/, "普攻"],
      [/重击/, "重击"],
      [/空中攻击/, "空中攻击"],
      [/闪避反击/, "闪避反击"],
      [/共鸣技能/, "共鸣技能"],
      [/共鸣解放/, "共鸣解放"],
      [/变奏技能|变奏入场/, "变奏技能"],
      [/延奏技能|释放延奏/, "延奏技能"],
      [/声骸技能/, "声骸技能"],
      [/谐度破坏技/, "谐度破坏技"],
    ].filter(([re]) => re.test(raw)).map(([, label]) => label);
    if (actions.length) return L.isEnglish()
      ? `${[...new Set(actions)].map((label) => L.text(label)).join(" / ")} ${suffix === "后" ? "after" : "when"}`
      : `释放${[...new Set(actions)].join("、")}${suffix}`;
    const out = raw.replace(/施放|使用/g, "释放").replace(/造成(.+?)伤害/g, "释放$1").replace(/或/g, "、") + suffix;
    return L.text(out);
  }
  function effectExcerpt(text, buff) {
    let effect = String(text || "")
      .replace(/^.{1,60}?(?:时|后)[，,]?/, "")
      .replace(/^自身获得【[^】]+】，?使/, "")
      .replace(/^获得【[^】]+】，?使/, "")
      .replace(/^使(?:自身|队伍中的角色|附近队伍中所有角色|下一位登场角色)?/, "")
      .replace(/^(?:自身|队伍中的角色|附近队伍中所有角色|下一位登场角色|当前角色)/, "")
      .replace(/提高/g, "提升")
      .trim();
    const label = escapeRe(buff.label || "");
    if (label) {
      const exact = effect.match(new RegExp(`${label}[^，,。；;]*?(?:[\\d.]+%|$)`));
      if (exact) effect = exact[0];
    }
    const semantic = effect.match(/[^，,。；;]*(?:提升|增加|加深|无视|降低|减少)[^，,。；;]*?(?:[\d.]+%|$)/);
    if (semantic && (!label || !effect.includes(buff.label))) effect = semantic[0];
    return trimBuffTail(effect.replace(/^(?:自身|队伍中的角色|附近队伍中所有角色|下一位登场角色|当前角色)/, "").trim());
  }
  function buffExcerpt(buff) {
    const source = buffSourceTitle(buff);
    if (buff.excerpt) {
      const excerpt = L.text(buff.excerpt);
      return source ? `${source}${L.isEnglish() ? ": " : "："}${excerpt}` : excerpt;
    }
    let text = String(buff.desc || "").replace(/\s+/g, " ").trim();
    if (!text) return source;
    text = text.replace(/^首位·[^：:]+[：:]/, "").trim();
    const sentences = text.split(/[。；;]/).map((s) => s.trim()).filter(Boolean);
    let chosen = sentences.find((s) => s.includes(buff.label));
    if (!chosen) chosen = sentences.find((s) => /提升|增加|加深|无视|减少|降低|获得/.test(s));
    chosen = chosen || sentences[0] || text;
    chosen = trimBuffTail(chosen);
    const trigger = triggerExcerpt(chosen);
    const effect = effectExcerpt(chosen, buff) || chosen;
    const excerpt = [trigger, effect].filter(Boolean).join("，");
    const localized = L.text(excerpt);
    return source ? `${source}${L.isEnglish() ? ": " : "："}${localized}` : localized;
  }
  function buffOriginalText(buff) {
    const source = buffSourceTitle(buff);
    const text = String(buff.desc || "").replace(/\s+/g, " ").trim();
    if (!text) return buffExcerpt(buff);
    const localized = L.text(text);
    return source ? `${source}${L.isEnglish() ? ": " : "："}${localized}` : localized;
  }

  return {
    fmt, fx, esc, tnum, parts, sum, nonEchoEntries, nonEchoSum, pct,
    RES_HINT, PROVIDER_META, PROVIDER_ORDER, DAMAGE_MODES,
    skillFormulaText, parseFormulaParts, multiplierPartsForResult, damageSplitHTML,
    durationText, shortDuration, buffSourceTitle, buffExcerpt, buffOriginalText,
  };
})();
