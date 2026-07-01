"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "galbrena": {
        "name": "Galbrena",
        "skills": [
          {
            "name": "Slayer's Trigger - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Slayer's Trigger - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Slayer's Trigger - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Slayer's Trigger - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Slayer's Trigger - Dodge Counter - Blood for Blood DMG"
          },
          {
            "name": "Slayer's Trigger - Mid-air Attack - Ashfall Barrage Plunging Attack DMG"
          },
          {
            "name": "Slayer's Trigger - Mid-air Attack - Ashfall Barrage Sustained Fire DMG"
          },
          {
            "name": "Slayer's Trigger - Heavy Attack - Volley of Death Stage 1 DMG"
          },
          {
            "name": "Slayer's Trigger - Heavy Attack - Volley of Death Stage 2 DMG"
          },
          {
            "name": "Slayer's Trigger - Heavy Attack - Volley of Death Stage 3 DMG"
          },
          {
            "name": "Edge Transcended - Resonance Skill - Encroach DMG"
          },
          {
            "name": "Edge Transcended - Resonance Skill - Ascent of Malice DMG",
            "requiresResourceLabel": "Sinflame at least 100"
          },
          {
            "name": "Hellfire Absolution - Resonance Liberation - Hellfire Absolution DMG"
          },
          {
            "name": "Hellflare Overload - Intro Skill - Hellflare Overload DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 2 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 3 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 5 DMG"
          },
          {
            "name": "Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 1 DMG"
          },
          {
            "name": "Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 2 DMG"
          },
          {
            "name": "Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 3 DMG"
          },
          {
            "name": "Beyond Threshold - Dodge Counter - Purgatory Scourge"
          },
          {
            "name": "Beyond Threshold - Mid-air Attack - Hellsent Barrage Plunging Attack DMG"
          },
          {
            "name": "Beyond Threshold - Mid-air Attack - Hellsent Barrage Sustained Fire DMG"
          },
          {
            "name": "Beyond Threshold - Resonance Skill - Ravage DMG"
          }
        ],
        "resources": [
          {
            "label": "Sinflame"
          }
        ],
        "combatStates": [
          {
            "label": "Demon Hypostasis",
            "idLabel": "Demon Hypostasis",
            "inactiveLabel": "Not in Demon Hypostasis",
            "entry": "- Galbrena enters Demon Hypostasis.",
            "effects": "- Galbrena enters Demon Hypostasis.",
            "options": [
              {
                "label": "Demon Hypostasis",
                "valueLabel": "Demon Hypostasis"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Oathbound Hunt",
            "label": "DMG Increase",
            "trigger": "In Demon Hypostasis",
            "excerpt": "DMG Increase +20% per stack",
            "desc": "DMG Increase +20% per stack"
          },
          {
            "source": "Forte Circuit: Demon Hypostasis",
            "label": "Vulnerability",
            "trigger": "After casting Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 2 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 3 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 5 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 1 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 2 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 3 DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Plunging Attack DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Sustained Fire DMG / Beyond Threshold - Resonance Skill - Ravage DMG / Beyond Threshold - Dodge Counter - Purgatory Scourge",
            "excerpt": "Vulnerability +60% per stack",
            "desc": "- Galbrena enters Demon Hypostasis."
          },
          {
            "source": "Forte Circuit: Burning Drive",
            "label": "ATK",
            "trigger": "After casting Hellflare Overload - Intro Skill - Hellflare Overload DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG / Edge Transcended - Resonance Skill - Encroach DMG / Edge Transcended - Resonance Skill - Ascent of Malice DMG / Beyond Threshold - Resonance Skill - Ravage DMG",
            "excerpt": "ATK +20%",
            "desc": "Burning Drive"
          },
          {
            "source": "Resonance Liberation: Hellfire Absolution",
            "label": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Multiplier Increase",
            "trigger": "After casting Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 2 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 3 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 5 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 1 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 2 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 3 DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Plunging Attack DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Sustained Fire DMG / Beyond Threshold - Dodge Counter - Purgatory Scourge",
            "excerpt": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Multiplier Increase +85%",
            "desc": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Multiplier Increase +85%"
          }
        ],
        "chain": [
          {
            "name": "Heart of Defiance Ever Ablaze",
            "desc": "When casting Resonance Skill - Ascent of Malice, each point of Afterflame additionally grants 2% Crit. DMG to Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Resonance Skill - Ravage, and Dodge Counter - Purgatory Scourge, up to 80%. This effect is removed upon exiting Demon Hypostasis.\nWhile in Demon Hypostasis, Basic Attack - Seraphic Execution Stage 5, Heavy Attack - Flamewing Verdict Stage 3, and Mid-air Attack - Hellsent Barrage are immune to interruption.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After casting Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 2 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 3 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 5 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 1 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 2 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 3 DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Plunging Attack DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Sustained Fire DMG / Beyond Threshold - Resonance Skill - Ravage DMG / Beyond Threshold - Dodge Counter - Purgatory Scourge",
                "excerpt": "Crit. DMG +80% per stack"
              }
            ]
          },
          {
            "name": "Hellbound Dive of Fire and Abyss",
            "desc": "Burning Drive grants 350% more ATK Bonus.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Hellflare Overload - Intro Skill - Hellflare Overload DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG / Edge Transcended - Resonance Skill - Encroach DMG / Edge Transcended - Resonance Skill - Ascent of Malice DMG / Beyond Threshold - Resonance Skill - Ravage DMG",
                "excerpt": "ATK +70%"
              }
            ]
          },
          {
            "name": "Hunter’s Blood Oath Rekindled",
            "desc": "Resonance Liberation DMG Multiplier is increased by 130%.",
            "buffs": [
              {
                "label": "Hellfire Absolution - Resonance Liberation - Hellfire Absolution DMG Multiplier Increase",
                "trigger": "In Demon Hypostasis",
                "excerpt": "Hellfire Absolution - Resonance Liberation - Hellfire Absolution DMG Multiplier Increase +130%"
              }
            ]
          },
          {
            "name": "Carry Forth This Fading Spark",
            "desc": "When Resonators in the team cast Echo Skill, all Resonators in the team gain 20% all-Attribute DMG Bonus for 20s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "After casting Echo Skill",
                "excerpt": "All-Attribute DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Though Light Fades, Torment Consumes",
            "desc": "The DMG Multipliers of Resonance Skill - Encroach, Resonance Skill - Ascent of Malice, and Resonance Skill - Ravage are increased by 150%.",
            "buffs": [
              {
                "label": "Edge Transcended - Resonance Skill - Encroach DMG Multiplier Increase",
                "trigger": "In Demon Hypostasis",
                "excerpt": "Edge Transcended - Resonance Skill - Encroach DMG Multiplier Increase +150%"
              }
            ]
          },
          {
            "name": "I Remain Who I am, Eternal My Flame",
            "desc": "Demon Hypostasis becomes Eternal Hypostasis. Eternal Hypostasis retains all effects of Demon Hypostasis.\nAdditionally, Eternal Hypostasis lasts, the DMG Multipliers of Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, and Dodge Counter -Purgatory Scourge are additionally increased by 60%.\n\nWhen casting Resonance Skill - Ascent of Malice, for every 1 point of Afterflame consumed, Galbrena's Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Resonance Skill - Ravage, and Dodge Counter -Purgatory Scourge gain 0.875% Fusion DMG Amplification, up to 35%, which is removed upon exiting Eternal Hypostasis.",
            "buffs": [
              {
                "label": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Multiplier Increase",
                "trigger": "In Demon Hypostasis",
                "excerpt": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Multiplier Increase +60%"
              },
              {
                "label": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Increase",
                "trigger": "After casting Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 2 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 3 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG / Beyond Threshold - Basic Attack - Seraphic Execution Stage 5 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 1 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 2 DMG / Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 3 DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Plunging Attack DMG / Beyond Threshold - Mid-air Attack - Hellsent Barrage Sustained Fire DMG / Beyond Threshold - Resonance Skill - Ravage DMG / Beyond Threshold - Dodge Counter - Purgatory Scourge",
                "excerpt": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG Increase +35% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
