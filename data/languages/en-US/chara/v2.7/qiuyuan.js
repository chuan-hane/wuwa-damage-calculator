"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "qiuyuan": {
        "name": "Qiuyuan",
        "skills": [
          {
            "name": "Inkwash - Stage 1 DMG"
          },
          {
            "name": "Inkwash - Stage 2 DMG"
          },
          {
            "name": "Inkwash - Stage 3 DMG"
          },
          {
            "name": "Inkwash - Mid-air Attack DMG"
          },
          {
            "name": "Inkwash - Heavy Attack DMG"
          },
          {
            "name": "Inkwash - Dodge Counter DMG"
          },
          {
            "name": "Through the Groves - Skill DMG"
          },
          {
            "name": "Through the Groves - Undaunted Wayfarer DMG"
          },
          {
            "name": "Sundering Strike - Skill DMG"
          },
          {
            "name": "Attack the Must-Defend - Skill Damage"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: Inkwash Stage 1 DMG",
            "requiresResourceLabel": "Swordster's Soliloquy at least 200"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: Inkwash Stage 2 DMG",
            "requiresResourceLabel": "Swordster's Soliloquy at least 200"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: Inkwash Stage 3 DMG",
            "requiresResourceLabel": "Swordster's Soliloquy at least 200"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: Inkwash Stage 4 DMG",
            "requiresResourceLabel": "Swordster's Soliloquy at least 200"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: To Teach DMG"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: To Save DMG"
          },
          {
            "name": "Verdant Edge - Thus Spoke the Blade: To Sacrifice DMG"
          },
          {
            "name": "Through the Groves - Lotuscloak Emerges",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Verdant Edge - Exit Drunken Ink State DMG",
            "requiresResourceLabel": "resource_gate_3"
          }
        ],
        "resources": [
          {
            "label": "Swordster's Soliloquy"
          }
        ],
        "combatStates": [
          {
            "label": "Bamboo's Shade",
            "idLabel": "Bamboo's Shade",
            "inactiveLabel": "Not in Bamboo's Shade",
            "entry": "Bamboo's Shade",
            "effects": "Bamboo's Shade",
            "options": [
              {
                "label": "Bamboo's Shade",
                "valueLabel": "Bamboo's Shade"
              }
            ]
          },
          {
            "label": "Inksplash of Mind State",
            "idLabel": "Inksplash of Mind",
            "inactiveLabel": "Not in Inksplash of Mind",
            "entry": "Qiuyuan obtains Quietude Within for 10s upon entering the Inksplash of Mind state.",
            "effects": "Qiuyuan obtains Quietude Within for 10s upon entering the Inksplash of Mind state.",
            "options": [
              {
                "label": "Inksplash of Mind · Quietude Within",
                "valueLabel": "Inksplash of Mind · Quietude Within"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Resonance Liberation: Sundering Strike",
            "label": "Crit. DMG",
            "trigger": "After casting Sundering Strike - Skill DMG",
            "excerpt": "Crit. DMG based on Crit. Rate, cap 30%",
            "desc": "The DMG Multiplier of Resonance Liberation Sundering Strike is increased by 500%."
          },
          {
            "source": "Forte Circuit: Bamboo's Shade",
            "label": "Echo Skill DMG Bonus",
            "trigger": "In Bamboo's Shade",
            "excerpt": "Echo Skill DMG Bonus +30%",
            "desc": "Bamboo's Shade"
          },
          {
            "source": "Inherent Skill: Quietude Within",
            "label": "Vulnerability",
            "trigger": "In Inksplash of Mind · Quietude Within",
            "excerpt": "Vulnerability +50%",
            "desc": "Qiuyuan obtains Quietude Within for 10s upon entering the Inksplash of Mind state."
          },
          {
            "source": "Inherent Skill: Drink Away Woes Age-Old",
            "label": "ATK",
            "trigger": "In Inksplash of Mind · Quietude Within",
            "excerpt": "ATK +10%",
            "desc": "ATK +10%"
          },
          {
            "source": "Outro Skill: Strike Before Ready",
            "label": "Echo Skill DMG Increase",
            "trigger": "In Inksplash of Mind · Quietude Within",
            "excerpt": "Echo Skill DMG Increase +50%",
            "desc": "Echo Skill DMG Increase +50%"
          }
        ],
        "chain": [
          {
            "name": "Sword Sheathed, Mind Unclouded",
            "desc": "Thus Spoke the Blade: To Teach, Thus Spoke the Blade: To Save, and Thus Spoke the Blade: To Sacrifice can no longer be interrupted.\nQiuyuan gains 20% Crit. Rate increase.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Inksplash of Mind · Quietude Within",
                "excerpt": "Crit. Rate +20%"
              }
            ]
          },
          {
            "name": "O Blade, I, Who Teach No More",
            "desc": "Bamboo's Shade now grants an additional 30% Echo Skill DMG Amplification to all nearby Resonators in the team.",
            "buffs": [
              {
                "label": "Echo Skill DMG Increase",
                "trigger": "In Bamboo's Shade",
                "excerpt": "Echo Skill DMG Increase +30%"
              }
            ]
          },
          {
            "name": "O Blade, I, Who Save No More",
            "desc": "The DMG Multiplier of Resonance Liberation Sundering Strike is increased by 500%.\nIf Concerto Energy is full when not in the Inksplash of Mind state, Qiuyuan's Resonance Skill is replaced with Resonance Skill Straw Cape in Drizzly Rain, available once every 20s.\nUpon casting Straw Cape in Drizzly Rain, the Quietude Within effect immediately ends and 60 Concerto Energy is consumed to deal Aero DMG equal to 500% of Qiuyuan's ATK, considered Echo Skill DMG, and restore 400 points of Swordster's Soliloquy. The next Basic Attack is replaced with Thus Spoke the Blade: Inkwash Stage 3.\nUpon casting Straw Cape in Drizzly Rain, Qiuyuan cannot gain the Quietude Within effect the next time he enters Inksplash of Mind. Thus Spoke the Blade: To Teach, Thus Spoke the Blade: To Save, and Thus Spoke the Blade: To Sacrifice gain 600% DMG Multiplier increase and additionally restore 30 point of Concerto Energy on hit.\nWhen not in Co-op mode, upon casting Straw Cape in Drizzly Rain, the next Outro Skill is replaced with Outro Skill Sheath Fallen, New Shoots Revealed, which deals Aero DMG equal to 500% of Qiuyuan's ATK, considered Echo Skill DMG.",
            "buffs": [
              {
                "label": "Sundering Strike - Skill DMG Multiplier Increase",
                "trigger": "In Inksplash of Mind · Quietude Within",
                "excerpt": "Sundering Strike - Skill DMG Multiplier Increase +500%"
              },
              {
                "label": "Verdant Edge - Thus Spoke the Blade: To Teach DMG Multiplier Increase",
                "trigger": "After casting Verdant Edge - Thus Spoke the Blade: To Teach DMG / Verdant Edge - Thus Spoke the Blade: To Save DMG / Verdant Edge - Thus Spoke the Blade: To Sacrifice DMG",
                "excerpt": "Verdant Edge - Thus Spoke the Blade: To Teach DMG Multiplier Increase +600%"
              }
            ]
          },
          {
            "name": "O Blade, I, Who Sacrifice No More",
            "desc": "ATK is increased by 20%.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Inksplash of Mind · Quietude Within",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "O Blade, I, Who Await to be Wielded",
            "desc": "Qiuyuan now ignores 15% of the target's DEF when dealing damage.",
            "buffs": [
              {
                "label": "DEF Ignore",
                "trigger": "In Inksplash of Mind · Quietude Within",
                "excerpt": "DEF Ignore +15%"
              }
            ]
          },
          {
            "name": "Thus I Heard, Thus I Saw, Thus I Spoke",
            "desc": "Casting Heavy Attack Thus Spoke the Blade: To Sacrifice stagnates nearby targets for 5s or until the targets are damaged or until Qiuyuan is switched off the field. This effect is not available in the Co-op Mode.\nWhen Qiuyuan is the active Resonator in the team, upon exiting Inksplash of Mind, he deals Aero DMG equal to 600% of his ATK to all targets within range, considered Echo Skill DMG.\nCasting Resonance Skill Straw Cape in Drizzly Rain increases Qiuyuan's Crit. DMG by 100% for 6s. Switching to another Resonator ends this effect early.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After casting Through the Groves - Lotuscloak Emerges",
                "excerpt": "Crit. DMG +100%"
              }
            ]
          }
        ]
      }
    }
  }
});
