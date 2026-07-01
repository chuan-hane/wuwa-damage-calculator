"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "taoqi": {
        "name": "Taoqi",
        "skills": [
          {
            "name": "Concealed Edge - Stage 1 DMG"
          },
          {
            "name": "Concealed Edge - Stage 2 DMG"
          },
          {
            "name": "Concealed Edge - Stage 3 DMG"
          },
          {
            "name": "Concealed Edge - Stage 4 DMG"
          },
          {
            "name": "Concealed Edge - Heavy Attack DMG"
          },
          {
            "name": "Concealed Edge - Strategic Parry Damage"
          },
          {
            "name": "Concealed Edge - Mid-air Attack DMG"
          },
          {
            "name": "Concealed Edge - Dodge Counter DMG"
          },
          {
            "name": "Fortified Defense - Skill DMG"
          },
          {
            "name": "Unmovable - Skill DMG"
          },
          {
            "name": "Defense Formation - Skill DMG"
          },
          {
            "name": "Power Shift - Timed Counters Stage 1 DMG",
            "requiresResourceLabel": "resource_gate_1"
          },
          {
            "name": "Power Shift - Timed Counters Stage 2 DMG",
            "requiresResourceLabel": "resource_gate_1"
          },
          {
            "name": "Power Shift - Timed Counters Stage 3 DMG",
            "requiresResourceLabel": "resource_gate_1"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Steadfast Protection",
            "label": "DEF",
            "trigger": "Default",
            "excerpt": "DEF +15%",
            "desc": "DEF +15%"
          },
          {
            "source": "Outro Skill: Iron Will",
            "label": "Resonance Skill DMG Increase",
            "trigger": "Default",
            "excerpt": "Resonance Skill DMG Increase +38%",
            "desc": "Resonance Skill DMG Increase +38%"
          }
        ],
        "chain": [
          {
            "name": "Essense of Tranquility",
            "desc": "Forte Circuit Power Shift's Shield is increased by 40%."
          },
          {
            "name": "Silent Strength",
            "desc": "The Crit. Rate and Crit. DMG of Resonance Liberation Unmovable is increased by 20% and 20%, respectively.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "Default",
                "excerpt": "Crit. Rate +20%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "Default",
                "excerpt": "Crit. DMG +20%"
              }
            ]
          },
          {
            "name": "Keen-eyed Observer",
            "desc": "The duration of Resonance Skill Rocksteady Shield is extended to 30s."
          },
          {
            "name": "Heavylifting Duty",
            "desc": "When Taoqi successfully triggers Heavy Attack Strategic Parry, she restores 25% HP and increases her DEF by 50% for 5s. This can be triggered once every 15s.",
            "buffs": [
              {
                "label": "DEF",
                "trigger": "After casting Concealed Edge - Strategic Parry Damage",
                "excerpt": "DEF +50%"
              }
            ]
          },
          {
            "name": "Benevolent Guardian",
            "desc": "The damage of Forte Circuit Power Shift is increased by 50%. When Forte Circuit Power Shift hits a target, restore 20 Resonance Energy.",
            "buffs": [
              {
                "label": "Power Shift - Timed Counters Stage 1 DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Power Shift - Timed Counters Stage 1 DMG Multiplier Increase +50%"
              }
            ]
          },
          {
            "name": "Defender of Peace",
            "desc": "The damage of Taoqi's Basic Attack and Heavy Attack is increased by 40% while the Shield granted by Resonance Skill Rocksteady Shield holds.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "Default",
                "excerpt": "Basic Attack DMG Bonus +40%"
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "Default",
                "excerpt": "Heavy Attack DMG Bonus +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
