"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rover_aero": {
        "name": "Rover: Aero",
        "skills": [
          {
            "name": "Wind Cutter - Stage 1 DMG"
          },
          {
            "name": "Wind Cutter - Stage 2 DMG"
          },
          {
            "name": "Wind Cutter - Stage 3 DMG"
          },
          {
            "name": "Wind Cutter - Stage 4 DMG"
          },
          {
            "name": "Wind Cutter - Heavy Attack DMG"
          },
          {
            "name": "Wind Cutter - Razor Wind DMG"
          },
          {
            "name": "Wind Cutter - Mid-air Attack DMG"
          },
          {
            "name": "Wind Cutter - Dodge Counter DMG"
          },
          {
            "name": "Illusion Breaker - Awakening Gale DMG"
          },
          {
            "name": "Illusion Breaker - Skyfall Severance DMG"
          },
          {
            "name": "Omega Storm - Skill DMG"
          },
          {
            "name": "Relentless Squall - Skill DMG"
          },
          {
            "name": "Cycle of Wind - Cloudburst Dance Stage 1 DMG"
          },
          {
            "name": "Cycle of Wind - Cloudburst Dance Stage 2 DMG"
          },
          {
            "name": "Cycle of Wind - Unbound Flow Stage 1 DMG",
            "requiresResourceLabel": "Windstrings at least 60"
          },
          {
            "name": "Cycle of Wind - Unbound Flow Stage 2 DMG",
            "requiresResourceLabel": "Windstrings at least 60"
          }
        ],
        "resources": [
          {
            "label": "Windstrings"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Sand in the Storm",
            "label": "ATK",
            "trigger": "After casting Relentless Squall - Skill DMG",
            "excerpt": "ATK +20%",
            "desc": "ATK +20%"
          },
          {
            "source": "Outro Skill: Storm's Echo",
            "label": " stack cap",
            "trigger": "After casting Intro Skill",
            "excerpt": " stack cap +3",
            "desc": " stack cap +3"
          }
        ],
        "chain": [
          {
            "name": "Storm Subsides in the Void",
            "desc": "Casting Mid-air Attack Cloudburst Dance enhances Rover's resistance to interruption for 3s."
          },
          {
            "name": "Glimmers Fade into the Dark",
            "desc": "Casting Resonance Skill Unbound Flow continuously restores HP for the Resonator on the field by 20% of Rover's ATK every 3s for 30s. When the Resonator on the field has an HP lower than 35%, immediately restore 10% of their lost HP. This restoration effect can be triggered once every 10s and will not be affected by any Healing Bonus."
          },
          {
            "name": "Illusions Collapse in a Grip",
            "desc": "Aero DMG Bonus is increased by 15%.",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "Default",
                "excerpt": "Aero DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "Boundaries Shatter in an Instant",
            "desc": "Casting Mid-air Attack Cloudburst Dance increases Resonance Skill DMG Bonus by 15% for 5s.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "After casting Cycle of Wind - Cloudburst Dance Stage 1 DMG / Cycle of Wind - Cloudburst Dance Stage 2 DMG",
                "excerpt": "Resonance Skill DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "Life and Death Intertwine",
            "desc": "The DMG Multiplier of Resonance Liberation Omega Storm is increased by 20%.",
            "buffs": [
              {
                "label": "Omega Storm - Skill DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Omega Storm - Skill DMG Multiplier Increase +20%"
              }
            ]
          },
          {
            "name": "All Crumble in the Wind",
            "desc": "The DMG Multiplier of Resonance Skill Unbound Flow is increased by 30%.",
            "buffs": [
              {
                "label": "Cycle of Wind - Unbound Flow Stage 1 DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Cycle of Wind - Unbound Flow Stage 1 DMG Multiplier Increase +30%"
              }
            ]
          }
        ]
      }
    }
  }
});
