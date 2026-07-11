"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "phrolova": {
        "name": "Phrolova",
        "skills": [
          {
            "name": "Movement of Life and Death - Stage 1 DMG"
          },
          {
            "name": "Movement of Life and Death - Stage 2 DMG"
          },
          {
            "name": "Movement of Life and Death - Stage 3 DMG"
          },
          {
            "name": "Movement of Life and Death - Heavy Attack DMG"
          },
          {
            "name": "Movement of Life and Death - Scarlet Coda DMG",
            "requiresResourceLabel": "Volatile Notes at least 6"
          },
          {
            "name": "Movement of Life and Death - Mid-air Attack DMG"
          },
          {
            "name": "Movement of Life and Death - Dodge Counter DMG"
          },
          {
            "name": "Whispers in a Fleeting Dream - Skill DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack - Hecate Stage 1 DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack - Hecate Stage 2 DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Strings DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Winds DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Cadenza DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack: Hecate Stage 1 DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack: Hecate Stage 2 DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack: Hecate Strings DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Winds DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack: Hecate Cadenza DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Curtain Call DMG"
          },
          {
            "name": "Suite of Quietus - Suite of Quietus DMG"
          },
          {
            "name": "Suite of Quietus - Suite of Immortality DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Rhapsody of a New World - Movement of Fate and Finality DMG"
          },
          {
            "name": "Rhapsody of a New World - Murmurs in a Haunting Dream DMG"
          },
          {
            "name": "A Night to Depart From Eternal Rest - Apparition of Beyond - Hecate DMG",
            "requiresResourceLabel": "resource_gate_3"
          }
        ],
        "resources": [
          {
            "label": "Volatile Notes"
          }
        ],
        "combatStates": [
          {
            "label": "Reincarnate State",
            "idLabel": "Reincarnate State",
            "inactiveLabel": "Not in Reincarnate State",
            "entry": "Select the current Reincarnate State.",
            "effects": "Select the current Reincarnate State.",
            "options": [
              {
                "label": "Reincarnate State",
                "valueLabel": "Reincarnate State"
              }
            ]
          },
          {
            "label": "Cadenza State",
            "idLabel": "Cadenza State",
            "inactiveLabel": "Not in Cadenza State",
            "entry": "Select the current Cadenza State.",
            "effects": "Select the current Cadenza State.",
            "options": [
              {
                "label": "Cadenza State",
                "valueLabel": "Cadenza State"
              }
            ]
          },
          {
            "label": "Maestro",
            "idLabel": "Maestro",
            "inactiveLabel": "Not in Maestro",
            "entry": "Casting this skill ends the Resolving Chord state, and Phrolova enters the Maestro state for 24s.",
            "effects": "Casting this skill ends the Resolving Chord state, and Phrolova enters the Maestro state for 24s.",
            "options": [
              {
                "label": "Maestro · Active",
                "valueLabel": "Maestro · Active"
              },
              {
                "label": "Maestro · Off-field",
                "valueLabel": "Maestro · Off-field"
              }
            ]
          },
          {
            "label": "Composition Active",
            "idLabel": "Composition Active",
            "inactiveLabel": "Not in Composition Active",
            "entry": "Select the current Composition Active.",
            "effects": "Select the current Composition Active.",
            "options": [
              {
                "label": "Composition Active",
                "valueLabel": "Composition Active"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Octet",
            "label": "Crit. DMG",
            "trigger": "In Composition Active",
            "excerpt": "Crit. DMG +2.5% per stack",
            "desc": "Crit. DMG +2.5% per stack"
          },
          {
            "source": "Inherent Skill: Octet",
            "label": "Crit. DMG",
            "trigger": "In Composition Active",
            "excerpt": "Crit. DMG +1% per stack",
            "desc": "Crit. DMG +1% per stack"
          },
          {
            "source": "Resonance Liberation: Waltz of Forsaken Depths",
            "label": "ATK",
            "trigger": "In Maestro",
            "excerpt": "ATK +120%",
            "desc": "Waltz of Forsaken Depths"
          },
          {
            "source": "Outro Skill: Unfinished Piece",
            "label": "DMG Increase",
            "trigger": "In Composition Active",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Unfinished Piece",
            "label": "Heavy Attack DMG Increase",
            "trigger": "In Composition Active",
            "excerpt": "Heavy Attack DMG Increase +25%",
            "desc": "Heavy Attack DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "A Key to Netherworld's Secrets",
            "desc": "The DMG Multiplier of Movement of Fate and Finality is increased by 80%.\nThe DMG Multiplier of Murmurs in a Haunting Dream is increased by 80%.\nIf Phrolova has less than 2 Volatile Notes when she is not in the Maestro state and stays out of combat for 4s, she gains Volatile Note - Cadenza until she has at least 2 Volatile Notes.",
            "buffs": [
              {
                "label": "Rhapsody of a New World - Movement of Fate and Finality DMG Multiplier Increase",
                "trigger": "In Composition Active",
                "excerpt": "Rhapsody of a New World - Movement of Fate and Finality DMG Multiplier Increase +80%"
              }
            ]
          },
          {
            "name": "A Rope Tied to a Life Beyond",
            "desc": "The DMG Multiplier of Scarlet Coda is increased by 75%. Aftersound now additionally increases the DMG Multiplier of Scarlet Coda by 75%.\nCasting Scarlet Coda grants 14 stacks of Aftersound.",
            "buffs": [
              {
                "label": "Movement of Life and Death - Scarlet Coda DMG Multiplier Increase",
                "trigger": "In Composition Active",
                "excerpt": "Movement of Life and Death - Scarlet Coda DMG Multiplier Increase +75%"
              },
              {
                "label": "Movement of Life and Death - Scarlet Coda DMG Extra Multiplier",
                "trigger": "In Composition Active",
                "excerpt": "Movement of Life and Death - Scarlet Coda DMG Extra Multiplier +75%"
              }
            ]
          },
          {
            "name": "A Dagger to Cut Clean Obsessions",
            "desc": "Echo Skill DMG is Amplified by 80%.\nCasting Scarlet Coda will convert all Volatile Notes to Volatile Notes - Cadenza in turn. Targets hit by Enhanced Attack - Hecate: Cadenza will have their ATK reduced by 20% for 15s.",
            "buffs": [
              {
                "label": "Echo Skill DMG Increase",
                "trigger": "In Composition Active",
                "excerpt": "Echo Skill DMG Increase +80%"
              }
            ]
          },
          {
            "name": "A Torch Illuminating the Path",
            "desc": "Casting Echo Skill grants 20% Attribute DMG Bonus for all Resonators in the team for 30s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "After casting Echo Skill",
                "excerpt": "All-Attribute DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "A Forked Road in Fate's Heartland",
            "desc": "Upon entering the Maestro state, generate a field to Stagnate the nearby targets, which lasts for 4s. Leaving the Maestro state or switching to other Resonators removes the Stagnation effect early.\nDamage taken during the Maestro state is reduced by 30%."
          },
          {
            "name": "A Night to Depart From Eternal Rest",
            "desc": "The DMG Multiplier of Enhanced Attack - Hecate is increased by 24%.\n\nDuring Movement of Fate and Finality and Murmurs in a Haunting Dream, command Hecate to cast 1 Apparition of Beyond - Hecate, dealing Havoc DMG equal to 216.42% of Phrolova's ATK (considered Echo Skill DMG) and granting 8 stacks of Aftersound on hit.\n\nIf Phrolova is not the active Resonator during the Maestro state, targets take 40% more DMG from Hecate and Phrolova. If Phrolova is the active Resonator during the Maestro state, gain 60% Havoc DMG Bonus.",
            "buffs": [
              {
                "label": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Strings DMG Multiplier Increase",
                "trigger": "In Composition Active",
                "excerpt": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Strings DMG Multiplier Increase +24%"
              },
              {
                "label": "Havoc DMG Bonus",
                "trigger": "In Maestro · Active",
                "excerpt": "Havoc DMG Bonus +60%"
              },
              {
                "label": "Vulnerability",
                "trigger": "In Maestro · Off-field",
                "excerpt": "Vulnerability +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
