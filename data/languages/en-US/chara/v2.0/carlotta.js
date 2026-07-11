"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "carlotta": {
        "name": "Carlotta",
        "skills": [
          {
            "name": "Silent Execution - Basic Attack Stage 1"
          },
          {
            "name": "Silent Execution - Basic Attack Stage 2"
          },
          {
            "name": "Silent Execution - Necessary Measures Stage 1 DMG"
          },
          {
            "name": "Silent Execution - Necessary Measures Stage 2 DMG"
          },
          {
            "name": "Silent Execution - Necessary Measures Stage 3 DMG"
          },
          {
            "name": "Silent Execution - Heavy Attack DMG"
          },
          {
            "name": "Silent Execution - Containment Tactics DMG",
            "requiresResourceLabel": "Substance full"
          },
          {
            "name": "Silent Execution - Mid-air Attack DMG"
          },
          {
            "name": "Silent Execution - Customary Greetings DMG"
          },
          {
            "name": "Silent Execution - Dodge Counter DMG"
          },
          {
            "name": "Art of Violence - Skill DMG"
          },
          {
            "name": "Art of Violence - Chromatic Splendor DMG"
          },
          {
            "name": "Era of New Wave - Skill DMG"
          },
          {
            "name": "Era of New Wave - Death Knell DMG"
          },
          {
            "name": "Era of New Wave - Fatal Finale DMG"
          },
          {
            "name": "Wintertime Aria - Skill DMG"
          },
          {
            "name": "Lethal Repertoire - Imminent Oblivion DMG",
            "requiresResourceLabel": "Substance full"
          }
        ],
        "resources": [
          {
            "label": "Moldable Crystals"
          },
          {
            "label": "Substance"
          }
        ],
        "combatStates": [
          {
            "label": "Target State",
            "idLabel": "Deconstruction",
            "inactiveLabel": "Not in Deconstruction",
            "entry": "Deal Glacio DMG to all targets in an area (considered Resonance Skill DMG) and inflict Deconstruction on targets hit, then activate Twilight Tango.",
            "effects": "Deal Glacio DMG to all targets in an area (considered Resonance Skill DMG) and inflict Deconstruction on targets hit, then activate Twilight Tango.",
            "options": [
              {
                "label": "Deconstruction",
                "valueLabel": "Deconstruction"
              }
            ]
          },
          {
            "label": "Twilight Tango State",
            "idLabel": "Twilight Tango",
            "inactiveLabel": "Not in Twilight Tango",
            "entry": "Deal Glacio DMG to all targets in an area (considered Resonance Skill DMG) and inflict Deconstruction on targets hit, then activate Twilight Tango.",
            "effects": "Deal Glacio DMG to all targets in an area (considered Resonance Skill DMG) and inflict Deconstruction on targets hit, then activate Twilight Tango.",
            "options": [
              {
                "label": "Twilight Tango",
                "valueLabel": "Twilight Tango"
              }
            ]
          },
          {
            "label": "Tinted Crystal",
            "idLabel": "Tinted Crystal Active",
            "inactiveLabel": "Not in Tinted Crystal Active",
            "entry": "Select the current Tinted Crystal Active.",
            "effects": "Select the current Tinted Crystal Active.",
            "options": [
              {
                "label": "Tinted Crystal Active",
                "valueLabel": "Tinted Crystal Active"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Resonance Liberation: Deconstruction / Inherent Skill: Ars Gratia Artis",
            "label": "DEF Ignore",
            "trigger": "In Deconstruction",
            "excerpt": "DEF Ignore +18%",
            "desc": "DEF Ignore +18%"
          },
          {
            "source": "Forte Circuit: Final Bow",
            "label": "Era of New Wave - Skill DMG Multiplier Increase",
            "trigger": "After casting Era of New Wave - Skill DMG / Era of New Wave - Death Knell DMG / Era of New Wave - Fatal Finale DMG",
            "excerpt": "Era of New Wave - Skill DMG Multiplier Increase +80%",
            "desc": "Final Bow"
          }
        ],
        "chain": [
          {
            "name": "Beauty Blazes Brightest Before It Fades",
            "desc": "When Carlotta deals DMG to a target inflicted with Deconstruction, the Crit. Rate of this instance of DMG is increased by 12.5%. When Resonance Skill Chromatic Splendor hits a target inflicted with Dispersion, Carlotta additionally restores 30 points of Substance.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Deconstruction",
                "excerpt": "Crit. Rate +12.5%"
              }
            ]
          },
          {
            "name": "Fallen Petals Give Life to New Blooms",
            "desc": "The DMG Multiplier of Resonance Liberation Fatal Finale is increased by 126%.",
            "buffs": [
              {
                "label": "Era of New Wave - Fatal Finale DMG Multiplier Increase",
                "trigger": "In Tinted Crystal Active",
                "excerpt": "Era of New Wave - Fatal Finale DMG Multiplier Increase +126%"
              }
            ]
          },
          {
            "name": "Adelante, Cortado, Spinning in Grace",
            "desc": "Enable Outro Skill Kaleidoscope Sparks: Deal 1 additional strike at the end of Outro Skill Closing Remark, dealing Glacio DMG equal to 1032.18% of Carlotta's ATK. The DMG Multiplier of Resonance Skill Art of Violence and Resonance Skill Chromatic Splendor is increased by 93%.",
            "buffs": [
              {
                "label": "Art of Violence - Skill DMG Multiplier Increase",
                "trigger": "In Tinted Crystal Active",
                "excerpt": "Art of Violence - Skill DMG Multiplier Increase +93%"
              }
            ]
          },
          {
            "name": "Yesterday's Raindrops Make Finest Wine",
            "desc": "Casting Heavy Attack, Heavy Attack Containment Tactics, and Heavy Attack Imminent Oblivion grants all Resonators in the team 25% Resonance Skill DMG Bonus for 30s.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "After casting Silent Execution - Heavy Attack DMG / Silent Execution - Containment Tactics DMG / Lethal Repertoire - Imminent Oblivion DMG",
                "excerpt": "Resonance Skill DMG Bonus +25%"
              }
            ]
          },
          {
            "name": "Toast to Past, Today, and Every Day to Come",
            "desc": "The DMG Multiplier of Heavy Attack Imminent Oblivion is increased by 47%.",
            "buffs": [
              {
                "label": "Lethal Repertoire - Imminent Oblivion DMG Multiplier Increase",
                "trigger": "In Tinted Crystal Active",
                "excerpt": "Lethal Repertoire - Imminent Oblivion DMG Multiplier Increase +47%"
              }
            ]
          },
          {
            "name": "As the Curtain Falls, I Remain What I Am",
            "desc": "Shots of Resonance Liberation Death Knell deal higher DMG and shoot out double the number of crystal shards, representing a total increase of 186.6% in the DMG Multiplier of Resonance Liberation Death Knell.\nShots of Resonance Liberation Death Knell inflict Scattering on targets when hit, during which the target is immobilized. This effect is removed after 1.5s or when the target receives DMG.",
            "buffs": [
              {
                "label": "Era of New Wave - Death Knell DMG Multiplier Increase",
                "trigger": "In Tinted Crystal Active",
                "excerpt": "Era of New Wave - Death Knell DMG Multiplier Increase +186.6%"
              }
            ]
          }
        ]
      }
    }
  }
});
