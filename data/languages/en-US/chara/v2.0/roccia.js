"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "roccia": {
        "name": "Roccia",
        "skills": [
          {
            "name": "Pero, Easy - Stage 1 DMG"
          },
          {
            "name": "Pero, Easy - Stage 2 DMG"
          },
          {
            "name": "Pero, Easy - Stage 3 DMG"
          },
          {
            "name": "Pero, Easy - Stage 4 DMG"
          },
          {
            "name": "Pero, Easy - Heavy Attack DMG"
          },
          {
            "name": "Pero, Easy - Mid-air Attack DMG"
          },
          {
            "name": "Pero, Easy - Dodge Counter DMG"
          },
          {
            "name": "Acrobatic Trick - Skill DMG"
          },
          {
            "name": "Commedia Improvviso! - Skill DMG"
          },
          {
            "name": "Pero, Help - Skill DMG"
          },
          {
            "name": "A Prop Master Prepares - Stage 1 DMG",
            "requiresResourceLabel": "Imagination at least 100"
          },
          {
            "name": "A Prop Master Prepares - Stage 2 DMG",
            "requiresResourceLabel": "Imagination at least 100"
          },
          {
            "name": "A Prop Master Prepares - Stage 3 DMG",
            "requiresResourceLabel": "Imagination at least 100"
          },
          {
            "name": "Reality Recreation",
            "requiresResourceLabel": "Within 12s after Resonance Liberation"
          },
          {
            "name": "Super Attractive Magic Box - Magic Box DMG",
            "requiresResourceLabel": "Magic Box available after Outro Skill"
          }
        ],
        "resources": [
          {
            "label": "Imagination"
          }
        ],
        "combatStates": [
          {
            "label": "Beyond Imagination",
            "idLabel": "Beyond Imagination State",
            "inactiveLabel": "Not in Beyond Imagination State",
            "entry": "Select the current Beyond Imagination State.",
            "effects": "Select the current Beyond Imagination State.",
            "options": [
              {
                "label": "Beyond Imagination State",
                "valueLabel": "Beyond Imagination State"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Immersive Performance",
            "label": "ATK",
            "trigger": "After casting Pero, Easy - Heavy Attack DMG",
            "excerpt": "ATK +20%",
            "desc": "ATK +20%"
          },
          {
            "source": "Resonance Liberation: Commedia Improvviso!",
            "label": "Flat ATK",
            "trigger": "After casting Commedia Improvviso! - Skill DMG",
            "excerpt": "Flat ATK based on Crit. Rate above 50%, cap 200 points",
            "desc": "For every 0.1% of Roccia's Crit. Rate over 50%, this skill increases the ATK of all Resonators in the team by 1 point for 30s, up to 200 points."
          },
          {
            "source": "Outro Skill: Applause, Please!",
            "label": "DMG Increase",
            "trigger": "In Beyond Imagination State",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Applause, Please!",
            "label": "Basic Attack DMG Increase",
            "trigger": "In Beyond Imagination State",
            "excerpt": "Basic Attack DMG Increase +25%",
            "desc": "Basic Attack DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "When Shadows Engulf the Hull",
            "desc": "Casting Resonance Skill Acrobatic Trick grants 100 additional Imagination and 10 Concerto Energy.\nImmune to interruptions when casting Basic Attack Real Fantasy"
          },
          {
            "name": "When the Luceanite Gleams",
            "desc": "Casting Basic Attack Real Fantasy grants all Resonators in the team 10% Havoc DMG Bonus for 30s, stacking up to 3 time. Upon reaching the max stacks, it grants all Resonators in the team 10% additional Havoc DMG Bonus for 30s.",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "After casting A Prop Master Prepares - Stage 1 DMG / A Prop Master Prepares - Stage 2 DMG / A Prop Master Prepares - Stage 3 DMG",
                "excerpt": "Havoc DMG Bonus +10% per stack"
              },
              {
                "label": "Havoc DMG Bonus",
                "trigger": "In Beyond Imagination State",
                "excerpt": "Havoc DMG Bonus +10%"
              }
            ]
          },
          {
            "name": "When the Heart Sees and Hands Feel",
            "desc": "Casting Intro Skill Pero, Help increases Roccia's Crit. Rate by 10% and Crit. DMG by 30% for 15s.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Pero, Help - Skill DMG",
                "excerpt": "Crit. Rate +10%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "After casting Pero, Help - Skill DMG",
                "excerpt": "Crit. DMG +30%"
              }
            ]
          },
          {
            "name": "When Wonders Gather in the Box",
            "desc": "Casting Resonance Skill Acrobatic Trick increases Basic Attack Real Fantasy's DMG Multiplier by 60% for 12s.",
            "buffs": [
              {
                "label": "A Prop Master Prepares - Stage 1 DMG Multiplier Increase",
                "trigger": "After casting Acrobatic Trick - Skill DMG",
                "excerpt": "A Prop Master Prepares - Stage 1 DMG Multiplier Increase +60%"
              }
            ]
          },
          {
            "name": "When Dreams Are Reborn on Stage",
            "desc": "Increase Resonance Liberation Commedia Improvviso!'s DMG Multiplier by 20% and Heavy Attack's DMG Multiplier by 80%.",
            "buffs": [
              {
                "label": "Commedia Improvviso! - Skill DMG Multiplier Increase",
                "trigger": "In Beyond Imagination State",
                "excerpt": "Commedia Improvviso! - Skill DMG Multiplier Increase +20%"
              },
              {
                "label": "Pero, Easy - Heavy Attack DMG Multiplier Increase",
                "trigger": "In Beyond Imagination State",
                "excerpt": "Pero, Easy - Heavy Attack DMG Multiplier Increase +80%"
              }
            ]
          },
          {
            "name": "When the Golden Wings Fly",
            "desc": "Casting Resonance Liberation Commedia Improvviso! grants the following effects for 12s:\n- Basic Attack Real Fantasy ignores enemies' DEF by 60%.\n- When Roccia lands after performing Basic Attack Real Fantasy Stage 3, she is launched into mid-air, activating Beyond Imagination. In this state, Basic Attack becomes Basic Attack Reality Recreation, dealing DMG equal to 100% of Basic Attack Real Fantasy Stage 3 DMG, considered Heavy Attack DMG. Roccia is immune to interruptions while casting Basic Attack Reality Recreation.\n- When Roccia lands after performing Basic Attack Reality Recreation, she is launched into mid-air, activating Beyond Imagination. Basic Attack Reality Recreation is only available in the Beyond Imagination state.",
            "buffs": [
              {
                "label": "DEF Ignore",
                "trigger": "After casting Commedia Improvviso! - Skill DMG",
                "excerpt": "DEF Ignore +60%"
              }
            ]
          }
        ]
      }
    }
  }
});
