"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "yuanwu": {
        "name": "Yuanwu",
        "skills": [
          {
            "name": "Leihuangquan - Stage 1 DMG"
          },
          {
            "name": "Leihuangquan - Stage 2 DMG"
          },
          {
            "name": "Leihuangquan - Stage 3 DMG"
          },
          {
            "name": "Leihuangquan - Stage 4 DMG"
          },
          {
            "name": "Leihuangquan - Stage 5 DMG"
          },
          {
            "name": "Leihuangquan - Heavy Attack DMG"
          },
          {
            "name": "Leihuangquan - Mid-air Attack DMG"
          },
          {
            "name": "Leihuangquan - Dodge Counter DMG"
          },
          {
            "name": "Leihuang Master - Skill DMG"
          },
          {
            "name": "Leihuang Master - Thunder Wedge Coordinated Attack DMG"
          },
          {
            "name": "Leihuang Master - Thunder Wedge Detonation Damage"
          },
          {
            "name": "Leihuang Master - Rumbling Spark Damage",
            "requiresResourceLabel": "Readiness at least 100"
          },
          {
            "name": "Blazing Might - Skill DMG"
          },
          {
            "name": "Thunder Bombardment - Skill DMG"
          },
          {
            "name": "Unassuming Blade - Thunder Uprising Damage",
            "requiresResourceLabel": "Readiness at least 100"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 1 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 2 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 3 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 4 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 5 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Heavy Attack DMG"
          },
          {
            "name": "Unassuming Blade - Thunderweaver Damage"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Dodge Counter DMG"
          }
        ],
        "resources": [
          {
            "label": "Readiness"
          }
        ],
        "combatStates": [
          {
            "label": "Lightning Infused",
            "idLabel": "Lightning Infused",
            "inactiveLabel": "Not in Lightning Infused",
            "entry": "Awaken the power of thunder and provide Forte Circuit Lightning Infused status to all characters on a nearby team for 10s, then perform a powerful blow that deals Electro DMG.",
            "effects": "Awaken the power of thunder and provide Forte Circuit Lightning Infused status to all characters on a nearby team for 10s, then perform a powerful blow that deals Electro DMG.",
            "options": [
              {
                "label": "Lightning Infused",
                "valueLabel": "Lightning Infused"
              }
            ]
          },
          {
            "label": "Thunder Wedge",
            "idLabel": "Thunder Wedge Active",
            "inactiveLabel": "Not in Thunder Wedge Active",
            "entry": "Select the current Thunder Wedge Active.",
            "effects": "Select the current Thunder Wedge Active.",
            "options": [
              {
                "label": "Thunder Wedge Active",
                "valueLabel": "Thunder Wedge Active"
              },
              {
                "label": "Thunder Wedge Active · Thunder Field Range",
                "valueLabel": "Thunder Wedge Active · Thunder Field Range"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Thunderous Determination",
            "label": "Unassuming Blade - Thunder Uprising Damage DMG Multiplier Increase",
            "trigger": "In Thunder Wedge Active · Thunder Field Range",
            "excerpt": "Unassuming Blade - Thunder Uprising Damage DMG Multiplier Increase +40%",
            "desc": "Unassuming Blade - Thunder Uprising Damage DMG Multiplier Increase +40%"
          }
        ],
        "chain": [
          {
            "name": "Steaming Cup of Justice",
            "desc": "When Yuanwu is in Forte Circuit's Lightning Infused state, his Basic Attack Speed is increased by 20%, and his Heavy Attack Speed is increased by 20%."
          },
          {
            "name": "Fierce Heart, Serene Mind",
            "desc": "Intro Skill Thunder Bombardment additionally recovers 15 Resonance Energy for Yuanwu."
          },
          {
            "name": "Upholder of Integrity",
            "desc": "When the Coordinated Attacks of Resonance Skill's Thunder Wedge hits a target, the damage is additionally increased by 20% of Yuanwu's DEF.",
            "buffs": [
              {
                "label": "Leihuang Master - Thunder Wedge Coordinated Attack DMG Multiplier Increase",
                "trigger": "In Thunder Wedge Active · Thunder Field Range",
                "excerpt": "Leihuang Master - Thunder Wedge Coordinated Attack DMG Multiplier Increase +20%"
              }
            ]
          },
          {
            "name": "Retributive Knuckles",
            "desc": "When casting Resonance Liberation Blazing Might, the on-field character will gain a Shield equal to 200% of Yuanwu's DEF for 10s."
          },
          {
            "name": "Neighborhood Protector",
            "desc": "When Resonance Skill Thunder Wedge is on the field, Yuanwu's Resonance Liberation DMG Bonus is increased by 50%.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "In Thunder Wedge Active",
                "excerpt": "Resonance Liberation DMG Bonus +50%"
              }
            ]
          },
          {
            "name": "Defender of All Realms",
            "desc": "All team members nearby within the range of Resonance Skill Thunder Wedge will gain a 32% DEF increase, lasting 3s.",
            "buffs": [
              {
                "label": "DEF",
                "trigger": "In Thunder Wedge Active · Thunder Field Range",
                "excerpt": "DEF +32%"
              }
            ]
          }
        ]
      }
    }
  }
});
