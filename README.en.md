### [ZH](README.md) | EN | [KO](README.ko.md) | [JA](README.ja-JP.md)

# Wuthering Waves Damage Calculator

> An independent Wuthering Waves damage calculator. It is a static frontend page: open it in a browser and use it directly, with no build step and no backend.

Live site: [wuwa-damage-calculator.chuan-hane.workers.dev](https://wuwa-damage-calculator.chuan-hane.workers.dev)

This project is aims to model real in-game damage resolution as closely as possible: base Resonator stats, fixed Stat Bonus nodes, weapons, Echoes, Resonance Chains, and buffs are stored as structured data. The calculation view then determines what the current hit can benefit from based on the selected skill, team, chain level, Outro Skill state, resources, combat states, and other prerequisites.

---

## Features

- **Resonator stat panel wiring**: base ATK/HP/DEF, Crit. Rate, Crit. DMG, fixed Stat Bonus nodes, and weapon stats come from structured data. Echo stats can be entered from the in-game aggregate Echo stat panel, or automatically summed in detailed Echo mode.
- **Real prerequisite checks**: buffs are not enabled just because the Resonator owns them. A buff only applies automatically when the current skill, state, resource, stack count, team position, Outro Skill, trigger action, and other prerequisites are satisfied.
- **Automatic buff resolution**: buffs that the current hit can use are shown in the calculation area by provider. Confirmable prerequisites can be toggled manually, while unmet buffs are folded into the inactive section.
- **Branch isolation**: dual-mode, form-based, or phase-based Resonators follow the current selection. Skills, buffs, and Off-Tune/Effect entries only show the active branch plus shared entries.
- **Independent Effect calculation**: the Effect area can choose the Effect provider. ATK-scaling Effects use the provider's panel ATK; Havoc Bane is handled as DEF reduction and feeds into the normal damage DEF coefficient.
- **Variable buff values**: stack-based buffs are supported, as are buffs that scale from the provider's own stats, such as The Shorekeeper converting her own Energy Regen into team Crit. Rate and Crit. DMG.
- **Strict damage-zone separation**: DMG Bonus, DMG Amplification, skill multiplier increase, direct multiplier addition, Crit, DEF, RES, and final DMG increase are calculated separately.
- **Multi-hit skill display**: skill multipliers and damage can be shown as `xxx + xxx x N`. Final damage and multi-hit damage are displayed with floor rounding.
- **Equipment system**: all 5-star and 4-star weapons support Syntonization Rank 1-5 and weapon effects. Resonance Chains support 0-6. Echoes use each Resonator's default Sonata setup, including 5-piece, 3+2, 1+2+2, lead Echo, and Sonata/individual Echo effects.
- **Detailed Echo mode**: team cards can enable detailed Echo mode. Once enabled, Echo stat inputs in the Resonator panel become read-only and are summed live from the separate Echo Details card, including main stat, substat roll, Sonata, and lead Echo effects.

## Calculation Model

### Panel

ATK, HP, and DEF are first calculated as panel stats, then used for damage:

```text
ATK = (Resonator ATK + weapon ATK) x (1 + total ATK%) + flat Echo ATK
HP  = Resonator HP x (1 + total HP%) + flat Echo HP
DEF = Resonator DEF x (1 + total DEF%) + flat Echo DEF
```

ATK%, HP%, and DEF% include fixed Stat Bonus nodes, weapons, buffs, and Echo percentage stats. Flat Echo values are added outside the percentage multiplication.

Echo stats can be entered in two ways:

- Normal mode: enter aggregate Echo stat gains in the ECHO rows of the Resonator panel. Empty values are treated as 0.
- Detailed Echo mode: once enabled from the team card, ECHO rows in the Resonator panel become read-only. Echo Details becomes a separate card for the current Resonator. The first Echo selects a lead Echo with a built-in Cost, such as `Mourning Aix - 4C`; the other Echoes select Cost, valid main stat, and substat roll values. Total Cost is capped at 12.

### Damage

```text
Final damage =
  stat base x skill multiplier
  x (1 + DMG Bonus zone)
  x (1 + DMG Amplification zone)
  x damage reduction / damage taken zone
  x DEF coefficient
  x RES coefficient
  x (1 + final DMG increase)
```

### Effect DMG

```text
Class A flat-value Effect DMG =
  base value by stack count
  x (1 + Effect DMG Amplification)
  x DEF coefficient
  x RES coefficient

Class B ATK-scaling Effect DMG =
  Effect provider ATK x stack multiplier
  x (1 + Effect DMG Amplification)
  x DEF coefficient
  x RES coefficient
```

Effect DMG does not benefit from Crit. Rate, Crit. DMG, Attribute DMG Bonus, Type DMG Bonus, normal DMG Amplification, or final DMG increase. Havoc Bane is not standalone damage; it reduces DEF by stack count and is included in the normal damage DEF coefficient when selected.

### Off-Tune System

The Off-Tune system selects a Tune base value by target Cost: `1C=716`, `3C=2149`, `4C=10027`.

```text
Tune Break DMG =
  Tune base value x 1600%
  x (1 + Tune Break Boost)
  x DEF coefficient
  x damage reduction / damage taken zone
  x (1 + final DMG increase)
  x 0.8

Hack DMG / Tune Rupture DMG =
  Tune base value x Hack multiplier / Tune Rupture multiplier
  x (1 + Tune Break Boost)
  x DEF coefficient
  x RES coefficient
  x damage reduction / damage taken zone
  x (1 + final DMG increase)

Tune Strain - Interfered benefit =
  stacks x Tune Break Boost x 0.12%
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
Final ATK panel with ATK bonuses: (412 + 587) x (1 + 12% + 88.1%) + 440 = 2438.999
Displayed in-game value after flooring: floor(2438.999) = 2438

Damage uses 2438.999, and final damage is floored:
floor(2438.999 x 0.4865 x 1.964 x 0.5107526882 x 0.9 x 2.588) = floor(2772.38405782) = 2772
Notes: own Resonator Lv. 90 | enemy Lv. 83 | enemy RES 10% | DMG Bonus 96.4% | Crit. DMG 258.8% | skill multiplier 48.65%
```

This rounding model is not official and may still differ from the game.

## Data Notes

- In normal mode, Echo stat input uses aggregate Echo stat gains. Main stats and substats are already summed and are not decomposed again by the calculator.
- In detailed Echo mode, Echo Details decomposes main stats and substats by in-game roll values and sums them live into the Resonator panel. Main stats are limited to valid stats for the selected Cost, and substats can only use fixed roll values.
- Echo mixed setups follow each Resonator's default configuration and do not provide free Sonata editing. For 3+2 and 1+2+2 setups, the lead Echo can come from any included Sonata set, with the Resonator's matching element preferred by default.
- Buff damage zones and real prerequisites must be entered from structured skill text. Uncertain prerequisites are not applied automatically by default.
- Echo data currently includes 4C Echoes and selected 3C Echoes, such as Capitaneus from Eternal Radiance.

---

*Personal project. Not an official tool.*
