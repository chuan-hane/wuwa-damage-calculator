### [ZH](README.md) | EN | [KO](README.ko.md) | [JA](README.ja.md)

# Wuthering Waves Damage Calculator

> An independent Wuthering Waves damage calculator. It is a static frontend page: open it in a browser and use it directly, with no build step and no backend.

Live site: [GitHub Pages](https://chuan-hane.github.io/wuwa-damage-calculator/) / [Cloudflare Workers](https://wuwa-damage-calculator.chuan-hane.workers.dev)

**Core focus**: This project models Wuthering Waves combat resolution around the current hit: Resonator panel stats, weapons, Echoes, Resonance Chains, and teammate buffs all feed into the checks, and the calculator resolves the bonuses that actually apply to the selected skill.

---

## Features

- **Resonator stat panel wiring**: base ATK/HP/DEF, Crit. Rate, Crit. DMG, fixed Skill Tree bonuses, and weapon stats come from structured data. Echo stats can be entered from the in-game aggregate Echo stat panel, or automatically summed in detailed Echo mode.
- **Real prerequisite checks**: buffs are not enabled just because the Resonator owns them. A buff only applies automatically when the current skill, state, resource, stack count, team position, Outro Skill, trigger action, and other prerequisites are satisfied.
- **Automatic Buff resolution**: buffs that the current hit can use are shown in the calculation area by provider. Confirmable prerequisites can be toggled manually, while unmet buffs are folded into the inactive section.
- **Branch isolation**: dual-mode, form-based, or phase-based Resonators follow the current selection. Skills, buffs, and Off-Tune/Effect-related entries only show the active branch plus shared entries.
- **Independent Effect calculation**: the Effect area can choose the Effect provider. ATK-scaling Effects use the provider's panel ATK; Havoc Bane is handled as DEF reduction and feeds into the normal damage DEF coefficient.
- **Variable buff values**: stack-based buffs are supported, as are buffs that scale from the provider's own stats, such as The Shorekeeper converting her own Energy Regen into team Crit. Rate and Crit. DMG.
- **Strict multiplier separation**: DMG Bonus, DMG Amplification, DMG Multiplier Increase, direct multiplier additions, Crit, DEF, RES, and Final DMG Bonus are calculated separately.
- **Multi-hit skill display**: skill multipliers and damage can be shown as `xxx + xxx × N`. Final damage and multi-hit damage are displayed with floor rounding.
- **Equipment system**: all 5-star and 4-star weapons support Syntonization Rank 1-5 and weapon effects. Resonance Chains support 0-6. Echoes use each Resonator's default Sonata setup, including 5-piece, 3+2, 1+2+2, lead Echo, and Sonata/individual Echo effects.
- **Detailed Echo mode**: team cards can enable detailed Echo mode. Once enabled, Echo stat inputs in the Resonator panel become read-only and are summed live from the separate Echo Details card, including main stat, substat roll, Sonata, and lead Echo effects.

## Calculation Model

### Panel

ATK, HP, and DEF are first calculated as panel stats, then used for damage:

```text
ATK = (Resonator ATK + weapon ATK) × (1 + total ATK%) + flat Echo ATK
HP  = Resonator HP × (1 + total HP%) + flat Echo HP
DEF = Resonator DEF × (1 + total DEF%) + flat Echo DEF
```

ATK%, HP%, and DEF% include fixed Skill Tree bonuses, weapons, buffs, and Echo percentage stats. Flat Echo values are added outside the percentage multiplication.

Echo stats can be entered in two ways:

- Normal mode: enter aggregate Echo stat gains in the ECHO rows of the Resonator panel. Empty values are treated as 0.
- Detailed Echo mode: once enabled from the team card, ECHO rows in the Resonator panel become read-only. Echo Details becomes a separate card for the current Resonator. The first Echo selects a lead Echo with a built-in Cost, such as `Mourning Aix - 4C`; the other Echoes select Cost, valid main stat, and substat roll values. Total Cost is capped at 12.

### Damage

```text
Final damage =
  stat base × skill multiplier
  × (1 + DMG Bonus zone)
  × (1 + DMG Amplification zone)
  × DMG Reduction / Vulnerability zone
  × DEF coefficient
  × RES coefficient
  × (1 + Final DMG Bonus)
```

### Effect DMG

```text
Class A flat-value Effect DMG =
  base value by stack count
  × (1 + Effect DMG Amplification)
  × DEF coefficient
  × RES coefficient

Class B ATK-scaling Effect DMG =
  Effect provider ATK × stack multiplier
  × (1 + Effect DMG Amplification)
  × DEF coefficient
  × RES coefficient
```

Effect DMG does not benefit from Crit. Rate, Crit. DMG, Attribute DMG Bonus, Type DMG Bonus, normal DMG Amplification, or Final DMG Bonus. Havoc Bane is not standalone damage; it reduces DEF based on stack count and is included in the normal damage DEF coefficient when selected.

### Off-Tune System

The Off-Tune system selects a Tune base value by target Cost: `1C=716`, `3C=2149`, `4C=10027`.

```text
Tune Break DMG =
  Tune base value × 1600%
  × (1 + Tune Break Boost)
  × DEF coefficient
  × DMG Reduction / Vulnerability zone
  × (1 + Final DMG Bonus)
  × 0.8

Hack DMG / Tune Rupture DMG =
  Tune base value × Hack multiplier / Tune Rupture multiplier
  × (1 + Tune Break Boost)
  × DEF coefficient
  × RES coefficient
  × DMG Reduction / Vulnerability zone
  × (1 + Final DMG Bonus)

Tune Strain - Interfered benefit =
  stacks × Tune Break Boost × 0.12%
```

Rounding rules:

- Base ATK/HP/DEF values for Resonators and weapons are entered as the integer values shown in game.
- Displayed panel ATK/HP/DEF values are floored.
- Damage calculation uses the pre-display, non-floored panel ATK/HP/DEF values.
- Skill multipliers after skill-level scaling keep two decimal places.
- Damage zones are multiplied continuously without intermediate rounding.
- Final displayed damage values use `Math.floor`.

Example:

```text
Base values (Resonator + weapon): 412 + 587 = 999
Final ATK panel with ATK bonuses: (412 + 587) × (1 + 12% + 88.1%) + 440 = 2438.999
Displayed in-game value after flooring: floor(2438.999) = 2438

Damage uses 2438.999, and final damage is floored:
floor(2438.999 × 0.4865 × 1.964 × 0.5107526882 × 0.9 × 2.588) = floor(2772.38405782) = 2772
Notes: own Resonator Lv. 90 | enemy Lv. 83 | enemy RES 10% | DMG Bonus 96.4% | Crit. DMG 258.8% | skill multiplier 48.65%
```

This rounding model is not official and may still differ from the game.

## Data Notes

- In normal mode, Echo stat input uses aggregate Echo stat gains. Main stats and substats are already summed and are not decomposed again by the calculator.
- In detailed Echo mode, Echo Details decomposes main stats and substats by in-game roll values and sums them live into the Resonator panel. Main stats are limited to valid stats for the selected Cost, and substats can only use fixed roll values.
- Echo mixed setups follow each Resonator's default configuration and do not provide free Sonata editing. For 3+2 and 1+2+2 setups, the lead Echo can come from any included Sonata set, with the Resonator's matching element preferred by default.
- Buff damage zones and real prerequisites must be entered from structured skill text. Uncertain prerequisites are not applied automatically by default.
- Beta Resonators, weapons, 4C lead Echoes, and Sonata sets display a `BetaX.Y.Z` marker on the page. The marker only identifies the data source version and does not change calculation rules.
- Echo data currently includes 4C Echoes and selected 3C Echoes, such as Capitaneus from Eternal Radiance.

---

*Personal project. Not an official tool.*
