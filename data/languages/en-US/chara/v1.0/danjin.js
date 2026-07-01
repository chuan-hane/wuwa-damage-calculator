"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "danjin": {
        "name": "Danjin",
        "skills": [
          {
            "name": "Execution - Stage 1 DMG"
          },
          {
            "name": "Execution - Stage 2 DMG"
          },
          {
            "name": "Execution - Stage 3 DMG"
          },
          {
            "name": "Execution - Heavy Attack DMG"
          },
          {
            "name": "Execution - Mid-air Attack DMG"
          },
          {
            "name": "Execution - Dodge Counter DMG"
          },
          {
            "name": "Crimson Fragment - Carmine Gleam Damage"
          },
          {
            "name": "Crimson Fragment - Crimson Erosion Stage 1 DMG"
          },
          {
            "name": "Crimson Fragment - Crimson Erosion Stage 2 DMG"
          },
          {
            "name": "Crimson Fragment - Sanguine Pulse Stage 1 DMG"
          },
          {
            "name": "Crimson Fragment - Sanguine Pulse Stage 2 DMG"
          },
          {
            "name": "Crimson Fragment - Sanguine Pulse Stage 3 DMG"
          },
          {
            "name": "Crimson Bloom - Consecutive Attack DMG"
          },
          {
            "name": "Crimson Bloom - Scarlet Burst Damage"
          },
          {
            "name": "Vindication - Skill DMG"
          },
          {
            "name": "Serene Vigil - Chaoscleave Damage",
            "requiresResourceLabel": "Ruby Blossom at least 60"
          },
          {
            "name": "Serene Vigil - Scatterbloom Damage",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Serene Vigil - Full Energy Chaoscleave Damage",
            "requiresResourceLabel": "Ruby Blossom at least 120"
          },
          {
            "name": "Serene Vigil - Full Energy Scatterbloom Damage",
            "requiresResourceLabel": "resource_gate_4"
          }
        ],
        "resources": [
          {
            "label": "Ruby Blossom"
          }
        ],
        "buffs": [
          {
            "source": "Resonance Skill: Incinerating Will",
            "label": "DMG Increase",
            "trigger": "Default",
            "excerpt": "DMG Increase +20%",
            "desc": "When Crimson Erosion 2 hits a target, apply Incinerating Will to it."
          },
          {
            "source": "Inherent Skill: Overflow",
            "label": "Heavy Attack DMG Bonus",
            "trigger": "After casting Crimson Fragment - Sanguine Pulse Stage 3 DMG",
            "excerpt": "Heavy Attack DMG Bonus +30%",
            "desc": "Heavy Attack DMG Bonus +30%"
          },
          {
            "source": "Inherent Skill: Crimson Light",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "After casting Crimson Fragment - Crimson Erosion Stage 1 DMG / Crimson Fragment - Crimson Erosion Stage 2 DMG",
            "excerpt": "Resonance Skill DMG Bonus +20%",
            "desc": "Resonance Skill DMG Bonus +20%"
          },
          {
            "source": "Outro Skill: Duality",
            "label": "DMG Increase",
            "trigger": "Default",
            "excerpt": "DMG Increase +23%",
            "desc": "DMG Increase +23%"
          }
        ],
        "chain": [
          {
            "name": "Crimson Heart of Justice",
            "desc": "When Danjin attacks a target with Resonance Skill's Incinerating Will, her ATK is increased by 5% for 6s, stacking up to 6 times. Danjin loses 1 stacks of this effect each time she takes damage.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "Default",
                "excerpt": "ATK +30% per stack"
              }
            ]
          },
          {
            "name": "Dusted Mirror",
            "desc": "When Danjin attacks a target with Resonance Skill's Incinerating Will, her damage dealt is increased by 20%.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "Default",
                "excerpt": "DMG Increase +20%"
              }
            ]
          },
          {
            "name": "Fleeting Blossom",
            "desc": "Resonance Liberation DMG Bonus is increased by 30%.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "Default",
                "excerpt": "Resonance Liberation DMG Bonus +30%"
              }
            ]
          },
          {
            "name": "Solitary Carnation",
            "desc": "When Danjin has more than 60 \"Ruby Blossom\", her Crit. Rate is increased by 15%.\nThis effect lasts until the end of Heavy Attack: Scatterbloom even after all \"Ruby Blossom\" is consumed when casting Heavy Attack: Chaoscleave.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Serene Vigil - Chaoscleave Damage / Serene Vigil - Scatterbloom Damage / Serene Vigil - Full Energy Chaoscleave Damage / Serene Vigil - Full Energy Scatterbloom Damage",
                "excerpt": "Crit. Rate +15%"
              }
            ]
          },
          {
            "name": "Reigning Blade",
            "desc": "Danjin's Havoc DMG Bonus is increased by 15%, and further increased by another 15% when her HP is lower than 60%.",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Default",
                "excerpt": "Havoc DMG Bonus +15%"
              },
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Default",
                "excerpt": "Havoc DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "Bloodied Jade",
            "desc": "Heavy Attack Chaoscleave increases the ATK of all team members by 20% for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Serene Vigil - Chaoscleave Damage / Serene Vigil - Scatterbloom Damage / Serene Vigil - Full Energy Chaoscleave Damage / Serene Vigil - Full Energy Scatterbloom Damage",
                "excerpt": "ATK +20%"
              }
            ]
          }
        ]
      }
    }
  }
});
