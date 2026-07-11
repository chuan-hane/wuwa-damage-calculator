"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "denia": {
        "name": "Denia",
        "skills": [
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Stagecraft Form Stage 1 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Stagecraft Form Stage 2 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Stagecraft Form Stage 3 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Stagecraft Form Stage 4 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Heavy Attack - Stagecraft Form DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Mid-air Attack - Stagecraft Form DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Dodge Counter - Stagecraft Form DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Breakdown Form Stage 1 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Breakdown Form Stage 2 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Breakdown Form Stage 3 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Basic Attack - Breakdown Form Stage 4 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Heavy Attack - Breakdown Form DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Mid-air Heavy Attack - Breakdown Form DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Dodge Counter - Breakdown Form DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Mid-air Attack - Breakdown Form Stage 1 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Mid-air Attack - Breakdown Form Stage 2 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Mid-air Attack - Breakdown Form Stage 3 DMG"
          },
          {
            "name": "Dreamweaver's Banquet - Mid-air Attack - Breakdown Form Stage 4 DMG"
          },
          {
            "name": "\"Flawless\" - Void Particle - Basic Attack - Breakdown Form Stage 1 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Basic Attack - Breakdown Form Stage 2 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Basic Attack - Breakdown Form Stage 3 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Basic Attack - Breakdown Form Stage 4 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Heavy Attack - Breakdown Form DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Mid-air Heavy Attack - Breakdown Form DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Dodge Counter - Breakdown Form DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Mid-air Attack - Breakdown Form Stage 1 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Mid-air Attack - Breakdown Form Stage 2 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Mid-air Attack - Breakdown Form Stage 3 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "\"Flawless\" - Void Particle - Mid-air Attack - Breakdown Form Stage 4 DMG",
            "requiresResourceLabel": "Void Particle"
          },
          {
            "name": "Bubbles and Baits - Phantom Bubble - Stagecraft Form DMG"
          },
          {
            "name": "Bubbles and Baits - Beckon - Breakdown Form DMG"
          },
          {
            "name": "Bubbles and Baits - Banish - Breakdown Form Stage 1 DMG",
            "requiresResourceLabel": "Dark Cores"
          },
          {
            "name": "Bubbles and Baits - Banish - Breakdown Form Stage 2 DMG",
            "requiresResourceLabel": "Dark Cores"
          },
          {
            "name": "Final Act - Final Act - Stagecraft Form DMG"
          },
          {
            "name": "Final Act - Final Act - Breakdown Form DMG",
            "requiresResourceLabel": "Conformal Charge full"
          },
          {
            "name": "Formal Greetings - It's Been A While! DMG"
          },
          {
            "name": "Formal Greetings - Knock Knock DMG"
          },
          {
            "name": "\"Flawless\" - Erosion Field DMG per tick"
          },
          {
            "name": "Silent Glows in a Dimlit Dream - Dark Core - Basic Attack - Stagecraft Form Stage 4 DMG",
            "requiresResourceLabel": "Dark Cores full"
          },
          {
            "name": "Silent Glows in a Dimlit Dream - Dark Core - Phantom Bubble - Stagecraft Form DMG",
            "requiresResourceLabel": "Dark Cores full"
          }
        ],
        "resources": [
          {
            "label": "Dark Cores"
          },
          {
            "label": "Void Particle"
          },
          {
            "label": "Conformal Charge"
          }
        ],
        "combatStates": [
          {
            "label": "Current form",
            "idLabel": "Form",
            "inactiveLabel": "Not in Form",
            "entry": "Basic Attack - Stagecraft Form",
            "effects": "Basic Attack - Stagecraft Form",
            "options": [
              {
                "label": "Stagecraft Form",
                "valueLabel": "Stagecraft Form"
              },
              {
                "label": "Breakdown Form",
                "valueLabel": "Breakdown Form"
              }
            ]
          },
          {
            "label": "Resonance Mode",
            "idLabel": "Resonance Mode",
            "inactiveLabel": "Not in Resonance Mode",
            "entry": "While in the Entropy Shift states, Denia obtains the following effects based on her current Resonance Mode:",
            "effects": "While in the Entropy Shift states, Denia obtains the following effects based on her current Resonance Mode:",
            "options": [
              {
                "label": "Resonance Mode - Fusion Burst",
                "valueLabel": "Resonance Mode - Fusion Burst"
              },
              {
                "label": "Resonance Mode - Tune Strain",
                "valueLabel": "Resonance Mode - Tune Strain"
              }
            ]
          },
          {
            "label": "Entropy Shift",
            "idLabel": "Entropy Shift",
            "inactiveLabel": "Not in Entropy Shift",
            "entry": "After performing this skill, obtain Entropy Shift: Breakdown Form for 12s, then switch to Breakdown Form.",
            "effects": "After performing this skill, obtain Entropy Shift: Breakdown Form for 12s, then switch to Breakdown Form.",
            "options": [
              {
                "label": "Entropy Shift: Stagecraft Form",
                "valueLabel": "Entropy Shift: Stagecraft Form"
              },
              {
                "label": "Entropy Shift: Breakdown Form",
                "valueLabel": "Entropy Shift: Breakdown Form"
              }
            ]
          },
          {
            "label": "Erosion Field",
            "idLabel": "Erosion Field",
            "inactiveLabel": "Not in Erosion Field",
            "entry": "Erosion Field",
            "effects": "Erosion Field",
            "options": [
              {
                "label": "Erosion Field",
                "valueLabel": "Erosion Field"
              }
            ]
          },
          {
            "label": "Target Tune Strain State",
            "idLabel": "Target Tune Strain State",
            "inactiveLabel": "Not in Target Tune Strain State",
            "entry": "Select the current Target Tune Strain State.",
            "effects": "Select the current Target Tune Strain State.",
            "options": [
              {
                "label": "Target Tune Strain · Shifting",
                "valueLabel": "Target Tune Strain · Shifting"
              },
              {
                "label": "Target Tune Strain · Interfered",
                "valueLabel": "Target Tune Strain · Interfered"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Resonance Liberation: Final Act",
            "label": "ATK",
            "trigger": "In Entropy Shift: Breakdown Form",
            "excerpt": "ATK +30%",
            "desc": "Final Act - Stagecraft Form"
          },
          {
            "source": "Forte Circuit: Void Particle",
            "label": "\"Flawless\" - Void Particle - Basic Attack - Breakdown Form Stage 1 DMG Multiplier Increase",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "\"Flawless\" - Void Particle - Basic Attack - Breakdown Form Stage 1 DMG Multiplier Increase +50%",
            "desc": "When Conformal Charge is full, consume all Conformal Charge and Void Particle to perform this skill."
          },
          {
            "source": "Inherent Skill: Etched Colors",
            "label": "Fusion DMG Bonus",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "Fusion DMG Bonus +30%",
            "desc": "Fusion DMG Bonus +30%"
          },
          {
            "source": "Inherent Skill: Etched Colors",
            "label": "Tune Break Boost",
            "trigger": "In Resonance Mode - Tune Strain",
            "excerpt": "Tune Break Boost +10%",
            "desc": "Tune Break Boost +10%"
          },
          {
            "source": "Inherent Skill: Etched Colors",
            "label": "Tune Break Boost",
            "trigger": "In Resonance Mode - Tune Strain",
            "excerpt": "Tune Break Boost based on Off-Tune Buildup Efficiency, cap 40%",
            "desc": "Tune Break Boost based on Off-Tune Buildup Efficiency, cap 40%"
          },
          {
            "source": "Tune Break: Shattered Hours",
            "label": "Final DMG Bonus",
            "trigger": "In Resonance Mode - Tune Strain",
            "excerpt": "Each Tune Strain - Interfered stack converts Tune Break Boost into Final DMG Bonus",
            "desc": "Each Tune Strain - Interfered stack converts Tune Break Boost into Final DMG Bonus."
          },
          {
            "source": "Outro Skill: Unfinished Lies",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "DMG Increase +60%",
            "desc": "DMG Increase +60%"
          },
          {
            "source": "Outro Skill: Unfinished Lies",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Tune Strain",
            "excerpt": "DMG Increase +15%",
            "desc": "DMG Increase +15%"
          },
          {
            "source": "Outro Skill: Unfinished Lies",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Tune Strain",
            "excerpt": "DMG Increase +25%",
            "desc": "DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "Silent Glows in a Dimlit Dream",
            "desc": "Crit. DMG is increased by 30%.\n\nWhen performing Resonance Skill Phantom Bubble - Stagecraft Form, or Resonance Skill Banish - Breakdown Form, Basic Attack - Breakdown Form Stage 3, Basic Attack - Breakdown Form Stage 4, Mid-air Attack - Breakdown Form Stage 3, and Mid-air Attack - Breakdown Form Stage 4, Denia becomes immune to interruption.\n\nWhen Denia enters combat in Stagecraft Form, she obtains the Entropy Shift: Stagecraft Form effect for 30s.\nWhen Denia enters combat in Breakdown Form, she obtains the Entropy Shift: Breakdown Form effect for 12s.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Crit. DMG +30%"
              }
            ]
          },
          {
            "name": "Tossed in the Tides of Reality",
            "desc": "When Denia is in Resonance Mode - Fusion Burst, after a Resonator in the team inflicts Fusion Burst on the target, they gain 50% Fusion DMG Bonus for 15s. After Fusion Burst is triggered on enemies near the active Resonator in the team, Denia gains 1 stacks of Degenerate Voidmatter for 15s, up to 10 stacks. Each stack of Degenerate Voidmatter causes Denia to ignore 1% of the target's Fusion RES.\nThis effect ends when Denia switches modes.\n\nWhen Denia is in Resonance Mode - Tune Strain, her Forte Circuit effect is enhanced: After a Resonator in the team inflicts Tune Strain - Shifting on the target, their Tune Break Boost is increased by 20 for 15s, and the target's Off-Tune Level is increased by 100% of the max. This effect can only be triggered once per 300s on the same target.\nThis effect ends when Denia switches forms.\n\nThe DMG Multiplier of Resonance Skill Banish - Breakdown Form is increased by 40%.",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "Fusion DMG Bonus +50%"
              },
              {
                "label": "RES Shred",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "RES Shred +1% per stack"
              },
              {
                "label": "Tune Break Boost",
                "trigger": "In Resonance Mode - Tune Strain",
                "excerpt": "Tune Break Boost +20%"
              },
              {
                "label": "Bubbles and Baits - Banish - Breakdown Form Stage 1 DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Bubbles and Baits - Banish - Breakdown Form Stage 1 DMG Multiplier Increase +40%"
              }
            ]
          },
          {
            "name": "Through Dark and Wind, the Erlking Follows",
            "desc": "The DMG Multiplier of Resonance Liberation Final Act - Breakdown Form is increased by 80%.\n\nDenia now holds up to 5 Dark Cores. While in Entropy Shift, the shortest interval at which she can obtain Dark Core is reduced to 6s.\nThe Entropy Shift: Stagecraft Form effect is enhanced and now grants 4 points of Void Particle per second.\nThe Entropy Shift: Breakdown Form effect is enhanced: Casting Resonance Liberation Final Act - Breakdown Form additionally restores 30 points of Concerto Energy.\n\nDenia's Inherent Skill Vestiges of Falsehood is enhanced:\nUpon entering combat, Dark Core and Void Particle are restored to the max. This effect can be triggered once every 12s.\n\nWhen the number of Dark Cores reaches the limit, casting Basic Attack - Stagecraft Form Stage 4 or Resonance Skill Phantom Bubble - Stagecraft Form consumes all Dark Cores and increases the DMG Multiplier of this skill by 1200%. The DMG dealt is considered Resonance Liberation DMG.",
            "buffs": [
              {
                "label": "Final Act - Final Act - Breakdown Form DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Final Act - Final Act - Breakdown Form DMG Multiplier Increase +80%"
              },
              {
                "label": "Silent Glows in a Dimlit Dream - Dark Core - Basic Attack - Stagecraft Form Stage 4 DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Silent Glows in a Dimlit Dream - Dark Core - Basic Attack - Stagecraft Form Stage 4 DMG Multiplier Increase +1200%"
              }
            ]
          },
          {
            "name": "From the Far Beyond, to the Far Beyond",
            "desc": "The attack interval of Erosion Field is reduced to 3s."
          },
          {
            "name": "If Lies Patch Up a Heart",
            "desc": "The DMG of Resonance Liberation Final Act - Stagecraft Form is increased by 100%.",
            "buffs": [
              {
                "label": "Final Act - Final Act - Stagecraft Form DMG Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Final Act - Final Act - Stagecraft Form DMG Increase +100%"
              }
            ]
          },
          {
            "name": "May You Find Your Sun in the Silence",
            "desc": "While in Entropy Shift states, gain 60% ATK increase and 60% Fusion DMG Bonus.\n\nWhile Denia is in Resonance Mode - Fusion Burst, after Erosion Field deals damage, trigger Fusion Burst on the target based on its max limit. The Fusion Burst DMG triggered gains a 200% DMG Multiplier increase against the main target and does not remove the Fusion Burst stacks on the targets hit. The effect can be triggered on the same target up to 1 time. When the target is damaged by Resonance Liberation Final Act: Breakdown Form, the effect's trigger count is reset. The trigger count can be reset for the same target once every 2s.\n\nWhile Denia is in Resonance Mode - Tune Strain, when Resonators in the team deal Tune Break DMG to Mistuned enemies in Tune Strain - Shifting, they additionally inflict 1 stack of Tune Strain - Interfered on the target. This effect can only be triggered on the same target once every 3s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Entropy Shift: Stagecraft Form",
                "excerpt": "ATK +60%"
              },
              {
                "label": "Fusion DMG Bonus",
                "trigger": "In Entropy Shift: Stagecraft Form",
                "excerpt": "Fusion DMG Bonus +60%"
              },
              {
                "label": "Fusion Burst Extra Multiplier",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "Fusion Burst Extra Multiplier +200%"
              },
              {
                "label": "Final DMG Bonus",
                "trigger": "In Resonance Mode - Tune Strain",
                "excerpt": "Final DMG Bonus +0%"
              }
            ]
          }
        ]
      }
    }
  }
});
