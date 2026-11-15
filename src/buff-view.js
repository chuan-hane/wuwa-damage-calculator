"use strict";

window.WUWA_BUFF_VIEW = (() => {
  function create({ state, ch, slotBuffs, buffStatus, buffValue, buffStackCount, buffStackStep, scaleByInfo }) {
    const { FORMULA_MULTIPLY_ZONES, num, buffToggleKey } = window.WUWA_RULES;
    const {
      esc, tnum, PROVIDER_META, PROVIDER_ORDER,
      shortDuration, buffExcerpt, buffOriginalText,
    } = window.WUWA_RENDER_HELPERS;
    const L = window.WUWA_LANGUAGES;
    const asList = (v) => Array.isArray(v) ? v : (v ? [v] : []);

    function buffStackStorageKey(buff) {
      return "stk_" + (buff.stackGroup || buff.id);
    }

    function buffStackCap(slot, buff) {
      let cap = buff.stackMax ?? buff.groupMax ?? buff.maxStacks ?? 0;
      asList(buff.stackMaxBySeq || buff.stackGroupMaxBySeq).forEach((rule) => {
        if (num(slot.seq) >= num(rule.seq)) cap = rule.max ?? rule.stacks ?? rule.value;
      });
      return Math.max(0, Math.round(num(cap)));
    }

    function buffStackRangeText(buff) {
      if (buff.stackStart == null && buff.stackEnd == null && !buff.stackRange) return L.text("每层");
      const range = asList(buff.stackRange);
      const start = Math.max(1, Math.round(num(buff.stackStart ?? range[0] ?? 1)));
      const end = Math.max(start, Math.round(num(buff.stackEnd ?? range[1] ?? buff.maxStacks)));
      if (L.isEnglish()) return start === end ? `Stack ${start} each` : `Stacks ${start}-${end} each`;
      if (L.isKorean()) return start === end ? `${start}번째 스택마다` : `${start}-${end}번째 스택마다`;
      return start === end ? `第 ${start} 层每层` : `第 ${start}-${end} 层每层`;
    }

    function scaleCapText(slot, buff) {
      if (!buff.scaleBy && !buff.multAddByStat) return "";
      const info = scaleByInfo(slot, buff);
      if (!info || info.cap == null) return "";
      const unit = buff.zone === "attackFlat" ? "" : "%";
      if (L.isKorean()) return ` (상한 ${tnum(info.cap)}${unit})`;
      return L.isEnglish() ? ` (cap ${tnum(info.cap)}${unit})` : `（上限${tnum(info.cap)}${unit}）`;
    }

    function fullStackValue(slot, buff) {
      if (!buff.scaleBy && !buff.multAddByStat) return num(buff.value);
      const info = scaleByInfo(slot, buff);
      if (!info) return 0;
      let value = info.raw;
      if (info.min != null) value = Math.max(value, info.min);
      if (info.cap != null) value = Math.min(value, info.cap);
      return value;
    }

    function buffFormulaText(slot, buff, idx) {
      if (buff.multScaleAdd) return `+${tnum(num(buff.multScaleAdd))}%${L.text("当前倍率")}`;
      if (buff.multScaleAddByResource) return `+${tnum(buffValue(slot, buff, idx))}%${L.text("当前倍率")}`;
      if (buff.zone === "fixedCrit") return `CR ${tnum(num(buff.critRate))}% · CD ${tnum(num(buff.critDamage))}%`;
      if (buff.zone === "typeBonusScale") return `×${tnum(1 + num(buff.value) / 100)}`;
      const v = tnum(buff.multAdd ? num(buff.multAdd) : buffValue(slot, buff, idx));
      const cap = scaleCapText(slot, buff);
      if (buff.zone === "effectCapBonus") return `+${v} ${L.stackUnit()}`;
      if (buff.zone === "resShred" || buff.zone === "resIgnore" || buff.zone === "defShred" || buff.zone === "defIgnore") return `-${v}%${cap}`;
      if (buff.zone === "attackFlat") return `+${v}${cap}`;
      if (buff.multAdd || !FORMULA_MULTIPLY_ZONES.has(buff.zone)) return `+${v}%${cap}`;
      return `×(1+${v}%)${cap}`;
    }

    function buffStackControl(slot, idx, buff, gated) {
      const cur = buffStackCount(slot, buff, idx);
      const stackCap = buffStackCap(slot, buff);
      const step = buffStackStep(slot, buff);
      const attrs = `data-act="stack" data-slot="${idx}" data-buff="${esc(buff.id)}" data-stack-key="${esc(buffStackStorageKey(buff))}" ${gated ? "disabled" : ""}`;
      let control = `<input type="number" min="0" max="${stackCap}" ${attrs} value="${cur}" />`;
      if (step > 1) {
        const options = Array.from({ length: Math.floor(stackCap / step) + 1 }, (_, i) => {
          const value = i * step;
          return `<option value="${value}" ${value === cur ? "selected" : ""}>${value}</option>`;
        }).join("");
        control = `<select ${attrs} aria-label="${esc(L.text("当前"))}">${options}</select>`;
      }
      const perStackValue = fullStackValue(slot, buff) / buff.maxStacks;
      return `<div class="b-stack">${esc(buffStackRangeText(buff))} ${tnum(perStackValue)}${buff.zone === "attackFlat" ? "" : "%"} · ${L.text("最高")} ${L.stackText(stackCap)} · ${L.text("当前")} ${control} ${L.stackUnit(cur)}</div>`;
    }

    function buffRow({ slot, idx, buff, st }, showStackControl, canConfirm) {
      const checked = st.toggleOn ? "checked" : "";
      const statusClass = st.gated ? "blocked" : st.precondition ? (st.toggleOn ? "manual on" : "manual") : "auto";
      const statusText = st.gated ? "" : st.precondition ? (st.toggleOn ? L.text("已确认") : L.text("需确认触发条件")) : "";
      const dynamicValue = buff.maxStacks || buff.scaleBy || buff.multAddByStat || buff.multScaleAddByResource;
      const val = dynamicValue
        ? `<b class="b-val" id="bval_${idx}_${esc(buff.id)}">${esc(buffFormulaText(slot, buff, idx))}</b>`
        : `<b class="b-val">${esc(buffFormulaText(slot, buff, idx))}</b>`;
      const stackRow = buff.maxStacks && !buff.stackResource && !buff.stackState && showStackControl
        ? buffStackControl(slot, idx, buff, st.gated)
        : "";
      const control = canConfirm
        ? `<input type="checkbox" data-act="toggle" data-slot="${idx}" data-buff="${buff.id}" ${checked} aria-label="${esc(L.buffLabel(buff))}${esc(L.text("前置已满足"))}" />`
        : `<input type="checkbox" ${st.applies ? "checked" : ""} disabled aria-label="${esc(st.gated ? L.text(st.gated) : statusText || L.text("自动应用"))}" />`;
      const tag = canConfirm ? "label" : "div";
      const detailText = state.showDesc ? buffOriginalText(buff) : buffExcerpt(buff);
      const sub = (detailText ? esc(detailText) : "") + (st.gated ? ` <span class="b-gate">✗ ${esc(L.text(st.gated))}</span>` : "");
      return `<${tag} class="buff ${statusClass} ${st.applies ? "" : "off"}">
    <span class="b-bar" aria-hidden="true"></span>
    ${control}
    <span class="b-main">
      <span class="b-head">
        <span class="b-label">${esc(L.buffLabel(buff))}</span>
        ${val}
        ${buff.pieceTag ? `<span class="b-piece">${esc(L.pieceTag(buff.pieceTag))}</span>` : ""}
        <span class="b-dur">${esc(shortDuration(buff))}</span>
        ${statusText ? `<span class="b-state">${esc(statusText)}</span>` : ""}
      </span>
      <span class="b-sub">${sub}</span>
      ${stackRow}
    </span>
  </${tag}>`;
    }

    function combatBuffs(slot) {
      return slotBuffs(slot).filter((b) => (
        b.id !== "w_sec"
        && !(b.seq && slot.seq < b.seq)
        && !(b.maxSeq != null && slot.seq > b.maxSeq)
      ));
    }

    function autoResolutionHTML() {
      const summary = { applied: 0, variable: 0, blocked: 0 };
      const pending = new Set();
      state.slots.forEach((slot, idx) => {
        if (!slot.char) return;
        combatBuffs(slot).forEach((buff) => {
          const st = buffStatus(slot, idx, buff);
          if (st.gated) { summary.blocked += 1; return; }
          if (buff.maxStacks || buff.scaleBy || buff.multAddByStat || buff.multScaleAddByResource) summary.variable += 1;
          if (st.precondition && !st.toggleOn) pending.add(`${idx}:${buffToggleKey(buff)}`);
          else if (st.applies) summary.applied += 1;
        });
      });
      return `<div class="auto-resolve">
    <div class="auto-title"><span>${esc(L.text("本次释放自动结算"))}</span><small>${esc(L.text("按当前技能、队伍、链数、资源、状态自动判定"))}</small></div>
    <div class="auto-stats">
      <span><b>${summary.applied}</b> ${esc(L.text("自动应用"))}</span>
      <span><b>${pending.size}</b> ${esc(L.text("需前置确认"))}</span>
      <span><b>${summary.variable}</b> ${esc(L.text("可变数值"))}</span>
      <span><b>${summary.blocked}</b> ${esc(L.text("不满足门槛"))}</span>
    </div>
  </div>`;
    }

    function settlementBuffGroups(predicate) {
      const zones = {};
      state.slots.forEach((slot, idx) => {
        if (!slot.char) return;
        combatBuffs(slot).forEach((buff) => {
          const st = buffStatus(slot, idx, buff);
          if (!predicate(st, buff, slot, idx)) return;
          const prov = buff.provider || "其他";
          (zones[prov] = zones[prov] || []).push({ slot, idx, buff, st });
        });
      });
      const order = [...PROVIDER_ORDER.filter((p) => zones[p]), ...Object.keys(zones).filter((p) => !PROVIDER_ORDER.includes(p))];
      const shownStackGroups = new Set();
      const shownConfirmGroups = new Set();
      return order.map((prov) => {
        const meta = PROVIDER_META[prov] || { cls: "other", label: L.provider(prov) };
        const byChar = {}, charOrder = [];
        zones[prov].forEach((e) => { if (!byChar[e.idx]) { byChar[e.idx] = []; charOrder.push(e.idx); } byChar[e.idx].push(e); });
        const showChar = charOrder.length > 1 || charOrder.some((k) => k !== state.outputIdx);
        const body = charOrder.map((k) => {
          const list = byChar[k], c = ch(list[0].slot.char);
          const head = showChar ? `<div class="buff-char">${esc(L.charName(c))}</div>` : "";
          return head + list.map((e) => {
            const group = e.buff.stackGroup;
            const groupKey = group ? `${e.idx}:${group}` : null;
            const showStackControl = !groupKey || !shownStackGroups.has(groupKey);
            if (groupKey) shownStackGroups.add(groupKey);
            const confirmGroup = e.buff.confirmGroup;
            const confirmKey = confirmGroup ? `${e.idx}:${confirmGroup}` : null;
            const canConfirm = e.st.precondition && !e.st.gated && (!confirmKey || !shownConfirmGroups.has(confirmKey));
            if (canConfirm && confirmKey) shownConfirmGroups.add(confirmKey);
            return buffRow(e, showStackControl, canConfirm);
          }).join("");
        }).join("");
        return `<div class="buff-zone buff-zone--${meta.cls}">
      <div class="buff-zone-h"><span class="buff-zone-dot" aria-hidden="true"></span><span class="buff-zone-name">${esc(meta.label)}</span></div>
      <div class="buff-zone-body">${body}</div>
    </div>`;
      }).join("");
    }

    function settlementBuffRowsHTML() {
      const active = settlementBuffGroups((st) => !st.gated);
      const blockedCount = state.slots.reduce((n, slot, idx) => {
        if (!slot.char) return n;
        return n + combatBuffs(slot).filter((buff) => buffStatus(slot, idx, buff).gated).length;
      }, 0);
      const blocked = blockedCount
        ? `<details class="buff-fold"><summary>${esc(L.text("未自动应用的 Buff"))} (${blockedCount})<span>${esc(L.text("不满足当前技能 / 队伍 / 延奏 / 状态门槛"))}</span></summary><div class="buffs">${settlementBuffGroups((st) => !!st.gated)}</div></details>`
        : "";
      return `${active || `<div class="hint">${esc(L.text("当前攻击没有可自动应用或需确认触发条件的 Buff。"))}</div>`}${blocked}`;
    }

    function stackFeedsBuffRequirement(slot, buffId) {
      const buffs = combatBuffs(slot);
      const source = buffs.find((buff) => buff.id === buffId);
      return buffs.some((buff) => {
        const reqId = buff.requiresBuffStacks && buff.requiresBuffStacks.id;
        if (!reqId) return false;
        if (reqId === buffId) return true;
        const required = buffs.find((item) => item.id === reqId);
        return !!source?.stackGroup && required?.stackGroup === source.stackGroup;
      });
    }

    function resetBuffStage() {
      for (const slot of state.slots) {
        if (!slot.char) continue;
        for (const buff of combatBuffs(slot)) {
          delete slot.toggles[buffToggleKey(buff)];
          delete slot.toggles["stk_" + buff.id];
          if (buff.stackGroup) delete slot.toggles[buffStackStorageKey(buff)];
        }
      }
    }

    return { buffFormulaText, combatBuffs, autoResolutionHTML, settlementBuffRowsHTML, stackFeedsBuffRequirement, resetBuffStage };
  }

  return { create };
})();
