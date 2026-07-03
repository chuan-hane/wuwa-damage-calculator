"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "sonatas": {
      "350433": {
        "name": "Song of Feathered Trace",
        "p2": {
          "label": "Energy Regen",
          "trigger": "Default",
          "excerpt": "2-piece: Energy Regen +10%",
          "desc": "2-piece: Energy Regen +10%."
        },
        "p5": [
          {
            "label": "Crit. Rate",
            "trigger": "After inflicting Havoc Bane",
            "excerpt": "After inflicting Havoc Bane, Crit. Rate +20%",
            "desc": "Upon inflicting Havoc Bane, gain Xuanling's Feather, which grants a 20% increase in Crit. Rate and 35% increase in Heavy Attack DMG Bonus to the Resonator, lasting 15s."
          },
          {
            "label": "Heavy Attack DMG Bonus",
            "trigger": "After inflicting Havoc Bane",
            "excerpt": "After inflicting Havoc Bane, Heavy Attack DMG Bonus +35%",
            "desc": "Upon inflicting Havoc Bane, gain Xuanling's Feather, which grants a 20% increase in Crit. Rate and 35% increase in Heavy Attack DMG Bonus to the Resonator, lasting 15s."
          },
          {
            "label": "ATK",
            "trigger": "After inflicting Glacio Chafe",
            "excerpt": "After inflicting Glacio Chafe, team ATK scales with Energy Regen, cap 25%",
            "desc": "Upon inflicting Glacio Chafe, gain Chongming's Feather, which grants a 0.1% increase in ATK to Resonators in the team for every 1% of the Resonator's Energy Regen, up to 25%, lasting 10s."
          }
        ],
        "lead": {
          "echo": "Unknown",
          "buffs": [
            {
              "label": "Havoc DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Havoc DMG Bonus +12%",
              "desc": "Use Echo Skill to attack nearby enemies, dealing 109.44% Havoc DMG and summoning 4 Blades of Thousand Memories that last 15s. While Blades of Thousand Memories last, when the Resonator inflicts Havoc Bane, consume 1 Blade of Thousand Memories to deal 41.04% Havoc DMG once to the target. This effect can be triggered once every 1s. Resonators with this Echo equipped in the main slot gain 12.00% Havoc DMG and 12.00% Heavy Attack DMG. CD: 20s"
            },
            {
              "label": "Heavy Attack DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Heavy Attack DMG Bonus +12%",
              "desc": "Use Echo Skill to attack nearby enemies, dealing 109.44% Havoc DMG and summoning 4 Blades of Thousand Memories that last 15s. While Blades of Thousand Memories last, when the Resonator inflicts Havoc Bane, consume 1 Blade of Thousand Memories to deal 41.04% Havoc DMG once to the target. This effect can be triggered once every 1s. Resonators with this Echo equipped in the main slot gain 12.00% Havoc DMG and 12.00% Heavy Attack DMG. CD: 20s"
            }
          ]
        }
      }
    }
  }
});
