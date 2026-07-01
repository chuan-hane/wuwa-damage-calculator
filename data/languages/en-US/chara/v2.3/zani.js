"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "zani": {
        "name": "Zani",
        "skills": [
          {
            "name": "Routine Negotiation - Stage 1 DMG"
          },
          {
            "name": "Routine Negotiation - Stage 2 DMG"
          },
          {
            "name": "Routine Negotiation - Stage 3 DMG"
          },
          {
            "name": "Routine Negotiation - Stage 4 DMG"
          },
          {
            "name": "Routine Negotiation - Breakthrough DMG"
          },
          {
            "name": "Routine Negotiation - Heavy Attack DMG"
          },
          {
            "name": "Routine Negotiation - Plunging Attack DMG"
          },
          {
            "name": "Routine Negotiation - Dodge Counter DMG"
          },
          {
            "name": "Restless Watch - Standard Defense Protocol DMG"
          },
          {
            "name": "Restless Watch - Pinpoint Strike DMG"
          },
          {
            "name": "Restless Watch - Targeted Action DMG",
            "requiresResourceLabel": "Redundant Kinetic Energy full"
          },
          {
            "name": "Restless Watch - Forcible Riposte DMG",
            "requiresResourceLabel": "Redundant Kinetic Energy full"
          },
          {
            "name": "Between Dawn and Dusk - Rekindle DMG"
          },
          {
            "name": "Between Dawn and Dusk - The Last Stand DMG"
          },
          {
            "name": "Immediate Execution - Skill DMG"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Daybreak DMG",
            "requiresResourceLabel": "Blazes at least 30"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Dawning DMG",
            "requiresResourceLabel": "resource_gate_3"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Nightfall DMG"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Lightsmash DMG",
            "requiresResourceLabel": "Blazes at least 30"
          }
        ],
        "resources": [
          {
            "label": "Blazes"
          },
          {
            "label": "Redundant Kinetic Energy"
          }
        ],
        "combatStates": [
          {
            "label": "Inferno Mode",
            "idLabel": "Inferno Mode",
            "inactiveLabel": "Not in Inferno Mode",
            "entry": "When Zani is not in Inferno Mode and has full Redundant Energy, her Resonance Skill is replaced with Resonance Skill Crisis Response Protocol.",
            "effects": "When Zani is not in Inferno Mode and has full Redundant Energy, her Resonance Skill is replaced with Resonance Skill Crisis Response Protocol.",
            "options": [
              {
                "label": "Inferno Mode",
                "valueLabel": "Inferno Mode"
              }
            ]
          },
          {
            "label": "Sunburst State",
            "idLabel": "Sunburst State",
            "inactiveLabel": "Not in Sunburst State",
            "entry": "Select the current Sunburst State.",
            "effects": "Select the current Sunburst State.",
            "options": [
              {
                "label": "Sunburst State",
                "valueLabel": "Sunburst State"
              }
            ]
          },
          {
            "label": "Target Blazing Ember",
            "idLabel": "Blazing Ember",
            "inactiveLabel": "Not in Blazing Ember",
            "entry": "Select the current Blazing Ember.",
            "effects": "Select the current Blazing Ember.",
            "options": [
              {
                "label": "Blazing Ember",
                "valueLabel": "Blazing Ember"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Resonance Liberation: Inferno Mode",
            "label": "DMG Multiplier Increase",
            "trigger": "In Inferno Mode",
            "excerpt": "DMG Multiplier Increase +25%",
            "desc": "When Zani is not in Inferno Mode and has full Redundant Energy, her Resonance Skill is replaced with Resonance Skill Crisis Response Protocol."
          },
          {
            "source": "Inherent Skill: Quick Response",
            "label": "Spectro DMG Bonus",
            "trigger": "After casting Immediate Execution - Skill DMG",
            "excerpt": "Spectro DMG Bonus +12%",
            "desc": "Spectro DMG Bonus +12%"
          },
          {
            "source": "Resonance Skill: Sunburst",
            "label": "Spectro Frazzle DMG Increase",
            "trigger": "In Sunburst State",
            "excerpt": "Spectro Frazzle DMG Increase +20%",
            "desc": "Casting Targeted Action or Forcible Riposte sends Zani into Sunburst mode and inflicts a stack of Heliacal Ember upon the target on hit."
          },
          {
            "source": "Resonance Skill: Sunburst",
            "label": "DMG Increase",
            "trigger": "In Sunburst State",
            "excerpt": "DMG Increase +20%",
            "desc": "Casting Targeted Action or Forcible Riposte sends Zani into Sunburst mode and inflicts a stack of Heliacal Ember upon the target on hit."
          },
          {
            "source": "Outro Skill: Beacon For the Future",
            "label": "DMG Increase",
            "trigger": "In Blazing Ember",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          }
        ],
        "chain": [
          {
            "name": "When the Alarm Clock Rings",
            "desc": "Casting Targeted Action or Forcible Riposte gives a 50% Spectro DMG Bonus for 14s.\nResonance Skill Heavy Slash - Nightfall can't be interrupted.",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "After casting Restless Watch - Targeted Action DMG / Restless Watch - Forcible Riposte DMG",
                "excerpt": "Spectro DMG Bonus +50%"
              }
            ]
          },
          {
            "name": "Stale Bread With Energy Drink",
            "desc": "Crit. Rate is increased by 20%.\nThe DMG Multiplier of Targeted Action and Forcible Riposte is increased by 80%.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Blazing Ember",
                "excerpt": "Crit. Rate +20%"
              },
              {
                "label": "Restless Watch - Targeted Action DMG Multiplier Increase",
                "trigger": "In Blazing Ember",
                "excerpt": "Restless Watch - Targeted Action DMG Multiplier Increase +80%"
              }
            ]
          },
          {
            "name": "Each Day A New Commute",
            "desc": "When in Inferno Mode, every 1 Blazes consumed increases the last stage DMG Multiplier of the subsequent Resonance Liberation The Last Stand by 8%, maxed at 1200%.",
            "buffs": [
              {
                "label": "Between Dawn and Dusk - The Last Stand DMG Multiplier Increase",
                "trigger": "After casting Between Dawn and Dusk - The Last Stand DMG",
                "excerpt": "Between Dawn and Dusk - The Last Stand DMG Multiplier Increase +1200%"
              }
            ]
          },
          {
            "name": "More Efficiency, Less Drama",
            "desc": "When Intro Skill Immediate Execution is cast, the ATK of all Resonators in the team is increased by 20% for 30s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Immediate Execution - Skill DMG",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Delivered In Full On Time",
            "desc": "The DMG Multiplier of Resonance Liberation Rekindle is increased by 120%.",
            "buffs": [
              {
                "label": "Between Dawn and Dusk - Rekindle DMG Multiplier Increase",
                "trigger": "In Blazing Ember",
                "excerpt": "Between Dawn and Dusk - Rekindle DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "First Things First? Clock Out!",
            "desc": "The DMG Multipliers of Heavy Slash - Daybreak, Heavy Slash- Dawning, Heavy Slash - Nightfall, and Heavy Slash - Lightsmash are increased by 40%. Every Blaze consumed increases the DMG Multiplier of Heavy Slash - Nightfall by 40% on hit.\nGain following effects when in Inferno Mode:\n- When Blaze is lower than 70, restore 70 Blazes immediately. This effect is triggered once in Inferno Mode.\n- Within 8s after entering Inferno Mode, Zani will remain standing with at least 1 HP if hit by a fatal blow.",
            "buffs": [
              {
                "label": "There Will Be A Light - Heavy Slash - Daybreak DMG Multiplier Increase",
                "trigger": "In Blazing Ember",
                "excerpt": "There Will Be A Light - Heavy Slash - Daybreak DMG Multiplier Increase +40%"
              },
              {
                "label": "There Will Be A Light - Heavy Slash - Nightfall DMG Extra Multiplier",
                "trigger": "In Blazing Ember",
                "excerpt": "There Will Be A Light - Heavy Slash - Nightfall DMG Extra Multiplier +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
