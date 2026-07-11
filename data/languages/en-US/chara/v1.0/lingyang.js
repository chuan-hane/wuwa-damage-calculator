"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lingyang": {
        "name": "Lingyang",
        "skills": [
          {
            "name": "Majestic Fists - Stage 1 DMG"
          },
          {
            "name": "Majestic Fists - Stage 2 DMG"
          },
          {
            "name": "Majestic Fists - Stage 3 DMG"
          },
          {
            "name": "Majestic Fists - Stage 4 DMG"
          },
          {
            "name": "Majestic Fists - Stage 5 DMG"
          },
          {
            "name": "Majestic Fists - Feral Roars Damage"
          },
          {
            "name": "Majestic Fists - Heavy Attack DMG"
          },
          {
            "name": "Majestic Fists - Mid-air Attack DMG"
          },
          {
            "name": "Majestic Fists - Dodge Counter DMG"
          },
          {
            "name": "Ancient Arts - Ancient Arts Damage"
          },
          {
            "name": "Ancient Arts - Furious Punches Damage"
          },
          {
            "name": "Strive: Lion's Vigor - Skill DMG"
          },
          {
            "name": "Lion Awakens - Skill DMG"
          },
          {
            "name": "Unification of Spirits - Glorious Plunge Damage",
            "requiresResourceLabel": "Lion's Spirit full"
          },
          {
            "name": "Unification of Spirits - Feral Gyrate Stage 1 DMG"
          },
          {
            "name": "Unification of Spirits - Feral Gyrate Stage 2 DMG"
          },
          {
            "name": "Unification of Spirits - Mountain Roamer Damage"
          },
          {
            "name": "Unification of Spirits - Mountain Roamer: Diligent Practice"
          },
          {
            "name": "Unification of Spirits - Stormy Kicks Damage"
          },
          {
            "name": "Unification of Spirits - Tail Strike Damage"
          },
          {
            "name": "Frosty Marks"
          }
        ],
        "resources": [
          {
            "label": "Lion's Spirit"
          }
        ],
        "combatStates": [
          {
            "label": "Striding Lion State",
            "idLabel": "Striding Lion",
            "inactiveLabel": "Not in Striding Lion",
            "entry": "Under the Forte Circuit Striding Lion state, within 3s after each Basic Attack, the next Forte Circuit Mountain Roamer will deal an additional Glacio DMG, equal to 150% of Mountain Roamer DMG, considered as Resonance Skill DMG.",
            "effects": "Under the Forte Circuit Striding Lion state, within 3s after each Basic Attack, the next Forte Circuit Mountain Roamer will deal an additional Glacio DMG, equal to 150% of Mountain Roamer DMG, considered as Resonance Skill DMG.",
            "options": [
              {
                "label": "Striding Lion",
                "valueLabel": "Striding Lion"
              }
            ]
          },
          {
            "label": "Lion's Vigor",
            "idLabel": "Lion's Vigor",
            "inactiveLabel": "Not in Lion's Vigor",
            "entry": "Attack the target, dealing Glacio DMG, and receive the blessing of Lion's Vigor.",
            "effects": "Attack the target, dealing Glacio DMG, and receive the blessing of Lion's Vigor.",
            "options": [
              {
                "label": "Lion's Vigor",
                "valueLabel": "Lion's Vigor"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Lion's Pride",
            "label": "Lion Awakens - Skill DMG Multiplier Increase",
            "trigger": "In Lion's Vigor",
            "excerpt": "Lion Awakens - Skill DMG Multiplier Increase +50%",
            "desc": "Lion Awakens - Skill DMG Multiplier Increase +50%"
          },
          {
            "source": "Resonance Liberation: Lion's Vigor",
            "label": "Glacio DMG Bonus",
            "trigger": "In Lion's Vigor",
            "excerpt": "Glacio DMG Bonus +50%",
            "desc": "Attack the target, dealing Glacio DMG, and receive the blessing of Lion's Vigor."
          }
        ],
        "chain": [
          {
            "name": "Lion of Light, Blessings Abound",
            "desc": "During Resonance Liberation Lion's Vigor, Lingyang's Anti-Interruption is enhanced."
          },
          {
            "name": "Dominant and Fierce, \nPower Unbound",
            "desc": "Intro Skill Lion Awakens additionally recovers 10 Resonance Energy for Lingyang, triggered once every 20s."
          },
          {
            "name": "Jaw-Dropping Feats, \nLoud and Wide",
            "desc": "During Resonance Liberation Lion's Vigor, Lingyang's Basic Attack DMG Bonus is increased by 20%, and Resonance Skill DMG Bonus increased by 10%.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "In Lion's Vigor",
                "excerpt": "Basic Attack DMG Bonus +20%"
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Lion's Vigor",
                "excerpt": "Resonance Skill DMG Bonus +10%"
              }
            ]
          },
          {
            "name": "Immortals Bow, \nin Reverence Flawed",
            "desc": "Outro Skill Frosty Marks increases the Glacio DMG Bonus of all team members by 20% for 30s.",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "After casting Intro Skill",
                "excerpt": "Glacio DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Seven Stars Shine, \nStepped upon High",
            "desc": "Resonance Liberation Strive: Lion's Vigor additionally deals Glacio DMG equal to 200% of Lingyang's ATK.",
            "buffs": [
              {
                "label": "Strive: Lion's Vigor - Skill DMG Multiplier Increase",
                "trigger": "In Lion's Vigor",
                "excerpt": "Strive: Lion's Vigor - Skill DMG Multiplier Increase +200%"
              }
            ]
          },
          {
            "name": "Demons Tremble, \nDivine Power Nigh",
            "desc": "In the Forte Circuit Striding Lion state, during the first 3s after every Resonance Skill Mountain Roamer, the Basic Attack DMG Bonus for Lingyang's next Basic Attack is increased by 100%.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "After casting Unification of Spirits - Feral Gyrate Stage 1 DMG / Unification of Spirits - Feral Gyrate Stage 2 DMG / Unification of Spirits - Stormy Kicks Damage",
                "excerpt": "Basic Attack DMG Bonus +100%"
              }
            ]
          }
        ]
      }
    }
  }
});
