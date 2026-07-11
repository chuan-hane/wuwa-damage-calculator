"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lupa": {
        "name": "Lupa",
        "skills": [
          {
            "name": "Flaming Star - Stage 1 DMG"
          },
          {
            "name": "Flaming Star - Stage 2 DMG"
          },
          {
            "name": "Flaming Star - Stage 3 DMG"
          },
          {
            "name": "Flaming Star - Stage 4 DMG"
          },
          {
            "name": "Flaming Star - Heavy Attack"
          },
          {
            "name": "Flaming Star - Heavy Attack - Wolf's Gnawing DMG",
            "requiresResourceLabel": "Wolflame at least 50"
          },
          {
            "name": "Flaming Star - Heavy Attack - Wolf's Claw DMG",
            "requiresResourceLabel": "Wolflame at least 50 / Wolfaith at least 1"
          },
          {
            "name": "Flaming Star - Mid-air Attack Stage 1 DMG"
          },
          {
            "name": "Flaming Star - Mid-air Attack Stage 2 DMG"
          },
          {
            "name": "Flaming Star - Mid-air Attack Stage 3 DMG"
          },
          {
            "name": "Flaming Star - Mid-air Attack - Firestrike DMG",
            "requiresResourceLabel": "Wolflame at least 50"
          },
          {
            "name": "Flaming Star - Plunging Attack DMG"
          },
          {
            "name": "Flaming Star - Basic Attack - Starfall DMG"
          },
          {
            "name": "Flaming Star - Dodge Counter DMG"
          },
          {
            "name": "Shewolf's Hunt - Skill Damage"
          },
          {
            "name": "Shewolf's Hunt - Feral Fang DMG",
            "requiresResourceLabel": "resource_gate_3"
          },
          {
            "name": "Fire-Kissed Glory - Skill Damage"
          },
          {
            "name": "Fire-Kissed Glory - Foebreaker DMG",
            "requiresResourceLabel": "resource_gate_4"
          },
          {
            "name": "Try Focusing, Eh? - Skill Damage"
          },
          {
            "name": "Try Focusing, Eh? - Nowhere to Run! DMG"
          },
          {
            "name": "Ignis Lupa - Dance With the Wolf DMG",
            "requiresResourceLabel": "Wolfaith at least 2"
          },
          {
            "name": "Ignis Lupa - Dance With the Wolf: Climax DMG",
            "requiresResourceLabel": "Wolfaith at least 2"
          },
          {
            "name": "Ignis Lupa - Dance With the Wolf: Climax DMG",
            "requiresResourceLabel": "Wolfaith at least 2"
          },
          {
            "name": "Ignis Lupa - Set the Arena Ablaze DMG",
            "requiresResourceLabel": "resource_gate_6"
          }
        ],
        "resources": [
          {
            "label": "Wolflame"
          },
          {
            "label": "Wolfaith"
          }
        ],
        "combatStates": [
          {
            "label": "Burning Matchpoint",
            "idLabel": "Burning Matchpoint",
            "inactiveLabel": "Not in Burning Matchpoint",
            "entry": "Consume all Wolflame to perform Foebreaker, dealing Fusion DMG and entering Burning Matchpoint state.",
            "effects": "Consume all Wolflame to perform Foebreaker, dealing Fusion DMG and entering Burning Matchpoint state.",
            "options": [
              {
                "label": "Burning Matchpoint",
                "valueLabel": "Burning Matchpoint"
              }
            ]
          },
          {
            "label": "Wild Hunt",
            "idLabel": "Wild Hunt",
            "inactiveLabel": "Not in Wild Hunt",
            "entry": "If Lupa's Pack Hunt reaches its cap within its duration, she enters Wild Hunt and Intro Skill Nowhere to Run!",
            "effects": "If Lupa's Pack Hunt reaches its cap within its duration, she enters Wild Hunt and Intro Skill Nowhere to Run!",
            "options": [
              {
                "label": "Wild Hunt",
                "valueLabel": "Wild Hunt"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Wildfire Banner",
            "label": "ATK",
            "trigger": "In Wild Hunt",
            "excerpt": "ATK +12%",
            "desc": "Lupa hurls her Wildfire Banner at the target, dealing Fusion DMG and restoring 15 points of Wolflame."
          },
          {
            "source": "Resonance Skill: Shewolf's Hunt",
            "label": "Shewolf's Hunt - Feral Fang DMG Multiplier Increase",
            "trigger": "After casting Shewolf's Hunt - Feral Fang DMG",
            "excerpt": "Shewolf's Hunt - Feral Fang DMG Multiplier Increase +50%",
            "desc": "- After Dodge Counter, Basic Attack Starfall, Resonance Skill Shewolf's Hunt, or Resonance Skill Feral Fang, press Normal Attack in time to cast Basic Attack Stage 2."
          },
          {
            "source": "Resonance Liberation: Pack Hunt",
            "label": "ATK",
            "trigger": "After casting Fire-Kissed Glory - Skill Damage",
            "excerpt": "ATK +6% per stack",
            "desc": "- All Resonators in the team gain Pack Hunt effect."
          },
          {
            "source": "Resonance Liberation: Pack Hunt",
            "label": "Fusion DMG Bonus",
            "trigger": "In Wild Hunt",
            "excerpt": "Fusion DMG Bonus +10%",
            "desc": "- All Resonators in the team gain Pack Hunt effect."
          },
          {
            "source": "Resonance Liberation: Pack Hunt",
            "label": "Fusion DMG Bonus",
            "trigger": "In Wild Hunt",
            "excerpt": "Fusion DMG Bonus +10%",
            "desc": "- All Resonators in the team gain Pack Hunt effect."
          },
          {
            "source": "Inherent Skill: Resonance Liberation - Glory",
            "label": "RES Shred",
            "trigger": "After casting Fire-Kissed Glory - Skill Damage",
            "excerpt": "RES Shred +3% per stack",
            "desc": "Resonance Liberation - Glory"
          },
          {
            "source": "Outro Skill: Stand by Me, Warrior",
            "label": "DMG Increase",
            "trigger": "In Wild Hunt",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Stand by Me, Warrior",
            "label": "Basic Attack DMG Increase",
            "trigger": "In Wild Hunt",
            "excerpt": "Basic Attack DMG Increase +25%",
            "desc": "Basic Attack DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "Behold the Nameless One",
            "desc": "Performing Resonance Liberation Fire-Kissed Glory recovers 10 Concerto Energy for Lupa and increases Lupa's Crit. Rate by 20% for 10s.\nGain immunity to interruption when casting Dance With the Wolf: Climax.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Fire-Kissed Glory - Skill Damage",
                "excerpt": "Crit. Rate +20%"
              }
            ]
          },
          {
            "name": "Every Ground, Her Hunting Field",
            "desc": "Performing Fire-Kissed Glory, Heavy Attack - Wolf's Gnawing, Heavy Attack - Wolf's Claw, or Mid-air Attack - Firestrike gives 20% Fusion DMG Bonus to all Resonators in the team for 30s, stacking up to 2 times.",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "After casting Fire-Kissed Glory - Skill Damage / Flaming Star - Heavy Attack - Wolf's Gnawing DMG / Flaming Star - Heavy Attack - Wolf's Claw DMG / Flaming Star - Mid-air Attack - Firestrike DMG",
                "excerpt": "Fusion DMG Bonus +20% per stack"
              }
            ]
          },
          {
            "name": "Wolflame Howls in Her Wake",
            "desc": "The DMG Multiplier of Intro Skill Nowhere to Run! increases by 100%.\n- The Pack Hunt effect of Resonance Liberation now no longer requires 3 Fusion Resonators.\n- The Glory effect of Resonance Liberation is now modified as:\nCasting Resonance Liberation Fire-Kissed Glory additionally grants Glory: Resonators in the team ignore 15% Fusion RES of targets for 35s.",
            "buffs": [
              {
                "label": "Try Focusing, Eh? - Nowhere to Run! DMG Multiplier Increase",
                "trigger": "In Wild Hunt",
                "excerpt": "Try Focusing, Eh? - Nowhere to Run! DMG Multiplier Increase +100%"
              },
              {
                "label": "Fusion DMG Bonus",
                "trigger": "In Wild Hunt",
                "excerpt": "Fusion DMG Bonus +10%"
              },
              {
                "label": "RES Shred",
                "trigger": "After casting Fire-Kissed Glory - Skill Damage",
                "excerpt": "RES Shred +15%"
              }
            ]
          },
          {
            "name": "High and Aflame Is Her Banner",
            "desc": "The DMG Multiplier of Dance With the Wolf: Climax increases by 125%.",
            "buffs": [
              {
                "label": "Ignis Lupa - Dance With the Wolf: Climax DMG Multiplier Increase",
                "trigger": "In Wild Hunt",
                "excerpt": "Ignis Lupa - Dance With the Wolf: Climax DMG Multiplier Increase +125%"
              }
            ]
          },
          {
            "name": "Embrace the Thunderous Triumph",
            "desc": "Performing Intro Skill Try Focusing, Eh? or Nowhere to Run! gives 15% Resonance Liberation DMG Bonus for 10s.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "After casting Try Focusing, Eh? - Skill Damage / Try Focusing, Eh? - Nowhere to Run! DMG",
                "excerpt": "Resonance Liberation DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "To the Brightest Flaming Star",
            "desc": "- The damage dealt by Forte Circuit Dance With the Wolf: Climax, Resonance Liberation Fire-Kissed Glory, and Intro Skill Nowhere to Run! ignores 30% of the target's DEF.\n- Resonance Skill Feral Fang restores 100 points of Wolflame on hit, triggered once per 20s.\n- Forte Circuit Dance With the Wolf is replaced with Dance With the Wolf: Climax. Dance With the Wolf: Climax can be performed when Lupa is not in Burning Matchpoint state.\n- Casting Intro Skill Nowhere to Run! no longer ends Pack Hunt and Glory.",
            "buffs": [
              {
                "label": "DEF Ignore",
                "trigger": "In Wild Hunt",
                "excerpt": "DEF Ignore +30%"
              }
            ]
          }
        ]
      }
    }
  }
});
