"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jiyan": {
        "name": "Jiyan",
        "skills": [
          {
            "name": "Lone Lance - Stage 1 DMG"
          },
          {
            "name": "Lone Lance - Stage 2 DMG"
          },
          {
            "name": "Lone Lance - Stage 3 DMG"
          },
          {
            "name": "Lone Lance - Stage 4 DMG"
          },
          {
            "name": "Lone Lance - Stage 5 DMG"
          },
          {
            "name": "Lone Lance - Heavy Attack DMG"
          },
          {
            "name": "Lone Lance - Windborne Strike Damage"
          },
          {
            "name": "Lone Lance - Abyssal Slash Damage"
          },
          {
            "name": "Lone Lance - Mid-air Attack DMG"
          },
          {
            "name": "Lone Lance - Banner Of Triumph Damage"
          },
          {
            "name": "Lone Lance - Mid-air Attack Follow-Up DMG"
          },
          {
            "name": "Lone Lance - Dodge Counter DMG"
          },
          {
            "name": "Windqueller - Skill DMG"
          },
          {
            "name": "Emerald Storm - Prelude - Lance of Qingloong Stage 1 DMG"
          },
          {
            "name": "Emerald Storm - Prelude - Lance Of Qingloong Stage 2 DMG"
          },
          {
            "name": "Emerald Storm - Prelude - Lance Of Qingloong Stage 3 DMG"
          },
          {
            "name": "Tactical Strike - Skill DMG"
          },
          {
            "name": "Qingloong at War - Emerald Storm: Finale Damage",
            "requiresResourceLabel": "Resolve at least 30"
          },
          {
            "name": "Discipline"
          }
        ],
        "resources": [
          {
            "label": "Resolve"
          }
        ],
        "combatStates": [
          {
            "label": "Qingloong Mode",
            "idLabel": "Qingloong Mode",
            "inactiveLabel": "Not in Qingloong Mode",
            "entry": "After releasing Emerald Storm - Prelude, Jiyan enters Qingloong Mode.",
            "effects": "After releasing Emerald Storm - Prelude, Jiyan enters Qingloong Mode.",
            "options": [
              {
                "label": "Qingloong Mode",
                "valueLabel": "Qingloong Mode"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Heavenly Balance",
            "label": "ATK",
            "trigger": "After casting Tactical Strike - Skill DMG",
            "excerpt": "ATK +10%",
            "desc": "ATK +10%"
          },
          {
            "source": "Inherent Skill: Tempest Taming",
            "label": "Crit. DMG",
            "trigger": "In Qingloong Mode",
            "excerpt": "Crit. DMG +12%",
            "desc": "Crit. DMG +12%"
          },
          {
            "source": "Forte Circuit: Qingloong at War",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "After casting Windqueller - Skill DMG",
            "excerpt": "Resonance Skill DMG Bonus +20%",
            "desc": "Resonance Skill DMG Bonus +20%"
          }
        ],
        "chain": [
          {
            "name": "Benevolence",
            "desc": "Resonance Skill Windqueller can be used 1 more time.\n\nWhen casting Resonance Skill Windqueller, the Resolve cost is decreased by 15."
          },
          {
            "name": "Versatility",
            "desc": "After casting Intro Skill Tactical Strike, Jiyan gains 30 Resolve and his ATK is increased by 28% for 15s. This can be triggered once every 15s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Tactical Strike - Skill DMG",
                "excerpt": "ATK +28%"
              }
            ]
          },
          {
            "name": "Spectation",
            "desc": "When casting Resonance Skill Windqueller, Resonance Liberation Emerald Storm: Prelude, Resonance Skill Emerald Storm: Finale or Intro Skill Tactical Strike, Jiyan's Crit. Rate is increased by 16% and Crit. DMG is increased by 32% for 8s.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Windqueller - Skill DMG / Qingloong at War - Emerald Storm: Finale Damage / Tactical Strike - Skill DMG",
                "excerpt": "Crit. Rate +16%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "After casting Windqueller - Skill DMG / Qingloong at War - Emerald Storm: Finale Damage / Tactical Strike - Skill DMG",
                "excerpt": "Crit. DMG +32%"
              }
            ]
          },
          {
            "name": "Prudence",
            "desc": "When casting Resonance Liberation Emerald Storm: Prelude or Resonance Liberation Emerald Storm: Finale, the Heavy Attack DMG Bonus of all team members is increased by 25% for 30s.",
            "buffs": [
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "After casting Qingloong at War - Emerald Storm: Finale Damage",
                "excerpt": "Heavy Attack DMG Bonus +25%"
              }
            ]
          },
          {
            "name": "Resolution",
            "desc": "Outro Skill Discipline gains an additional DMG Multiplier of 120%.\nWhen Jiyan's attacks hit a target, his ATK is increased by 3% for 8s, stacking up to 15 times; this effect is immediately maxed after he casts Intro Skill Tactical Strike.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Tactical Strike - Skill DMG",
                "excerpt": "ATK +3% per stack"
              },
              {
                "label": "Discipline DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Discipline DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "Fortitude",
            "desc": "Every time Heavy Attack, Intro Skill Tactical Strike or Resonance Skill Windqueller is used, Jiyan gains 1 stack(s) of \"Momentum\", stacking up to 2 times.\r\nResonance Liberation Emerald Storm: Finale will consume all \"Momentum\", and each stack consumed increases the DMG multiplier of Resonance Liberation Emerald Storm: Finale by 120%.",
            "buffs": [
              {
                "label": "Qingloong at War - Emerald Storm: Finale Damage DMG Multiplier Increase",
                "trigger": "After casting Qingloong at War - Emerald Storm: Finale Damage",
                "excerpt": "Qingloong at War - Emerald Storm: Finale Damage DMG Multiplier Increase +120%"
              },
              {
                "label": "Qingloong at War - Emerald Storm: Finale Damage DMG Multiplier Increase",
                "trigger": "After casting Qingloong at War - Emerald Storm: Finale Damage",
                "excerpt": "Qingloong at War - Emerald Storm: Finale Damage DMG Multiplier Increase +120%"
              }
            ]
          }
        ]
      }
    }
  }
});
