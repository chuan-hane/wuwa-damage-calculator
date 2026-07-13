"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  strings: {
    app: {
      title: "Wuthering Waves Damage Calculator",
      subtitle: "Resonator stats · Separate multipliers · Real combat prerequisites"
    },
    common: {
      none: "-",
      empty: "Empty",
      unselected: "Not selected",
      unselectedLead: "No Lead Echo",
      searchCharacter: "Search Resonators...",
      searchWeapon: "Search weapons...",
      weaponFallback: "W",
      emptyFallback: "-",
      signature: "Signature",
      levelShort: "Lv. {value}",
      rank: "Rank {value}",
      sequence: "RC{value}",
      cost: "Cost",
      custom: "Custom",
      target: "Target",
      more: "More",
      collapse: "Collapse",
      reset: "Reset",
      originalText: "Original",
      seconds: "s",
      stack: "stack",
      stacks: "stacks"
    },
    topbar: {
      githubAria: "Open GitHub repository",
      githubLabel: "GitHub",
      languageAria: "Language"
    },
    damageModes: {
      crit: "Crit Hit",
      expected: "Expected",
      normal: "Non-Crit"
    },
    damageSplit: {
      damage: "Split DMG: ",
      expected: "Expected split: "
    },
    hints: {
      res: {
        aria: "Attribute RES reference. Base RES applies to all attributes. Matching RES is the attribute RES corresponding to the target's own attribute. If a mode explicitly states that a certain attribute's RES is increased, add the stated amount to that attribute's RES.",
        intro: "Target Attribute RES reference (current test results)",
        definition: "Base RES applies to all attributes; Matching RES is the attribute RES corresponding to the target's own attribute.",
        headers: { mode: "Mode", base: "Base RES", matching: "Matching RES" },
        modes: {
          openWorld: "Open World",
          tacticalHologram: "Tactical Hologram",
          towerOfAdversity: "Tower of Adversity",
          endstateMatrix: "Endstate Matrix",
          whimperingWastesEndless: "Whimpering Wastes · Endless",
          whimperingWastesHigh: "Whimpering Wastes · Floors 9–11"
        },
        note: "If a mode explicitly states that a certain attribute's RES is increased, add the stated amount to that attribute's RES. For example, if Whimpering Wastes states “Aero RES increased by 20%” and you deal Aero DMG, Base RES becomes “20% + 20% = 40%,” while Matching RES becomes “50% + 20% = 70%.”",
        source: "Enter the current target's value manually."
      },
      defShred: "This input shows and edits total DEF Shred. Auto sources such as Buffs are included in real time.",
      defShredWithHavocBane: "This input shows and edits total DEF Shred, including {value}% from Havoc Bane."
    }
  }
});
