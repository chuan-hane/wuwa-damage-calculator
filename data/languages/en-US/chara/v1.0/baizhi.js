"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "baizhi": {
        "name": "Baizhi",
        "skills": [
          {
            "name": "Destined Promise - Stage 1 DMG"
          },
          {
            "name": "Destined Promise - Stage 2 DMG"
          },
          {
            "name": "Destined Promise - Stage 3 DMG"
          },
          {
            "name": "Destined Promise - Stage 4 DMG"
          },
          {
            "name": "Destined Promise - Heavy Attack DMG"
          },
          {
            "name": "Destined Promise - Mid-air Attack DMG"
          },
          {
            "name": "Destined Promise - Dodge Counter DMG"
          },
          {
            "name": "Emergency Plan - Skill DMG"
          },
          {
            "name": "Momentary Union - Remnant Entities Damage"
          },
          {
            "name": "Overflowing Frost - Skill DMG"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Harmonic Range",
            "label": "ATK",
            "trigger": "Default",
            "excerpt": "ATK +15%",
            "desc": "ATK +15%"
          },
          {
            "source": "Outro Skill: Rejuvinating Flow",
            "label": "DMG Increase",
            "trigger": "Default",
            "excerpt": "DMG Increase +15%",
            "desc": "DMG Increase +15%"
          }
        ],
        "chain": [
          {
            "name": "Complex Simplicity",
            "desc": "Resonance Skill Emergency Plan additionally restores 2.5 Resonance Energy for every 1 Concentration consumed."
          },
          {
            "name": "Silent Tundra",
            "desc": "Resonance Skill Emergency Plan increases Baizhi's Glacio DMG Bonus by 15% and her Healing by 15% if she has 4 Concentration. These effects last for 12s.",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Default",
                "excerpt": "Glacio DMG Bonus +15%"
              },
              {
                "label": "Healing Bonus",
                "trigger": "Default",
                "excerpt": "Healing Bonus +15%"
              }
            ]
          },
          {
            "name": "Veritas Lux Mea",
            "desc": "Intro Skill Overflowing Frost increases Baizhi's Max HP by 12% for 10s.",
            "buffs": [
              {
                "label": "HP",
                "trigger": "After casting Overflowing Frost - Skill DMG",
                "excerpt": "HP +12%"
              }
            ]
          },
          {
            "name": "Eternal Verity",
            "desc": "Upon casting Resonance Liberation Momentary Union, Resonance Liberation Remnant Entities gains the following enhancements:\n\n-Remnant Entities can be performed 2 more time(s);\n\n-Healing multiplier of Remnant Entities is increased by 20%;\n\n-Remnant Entities deals additional Glacio DMG equal to 1.20% of Baizhi's Max HP.",
            "buffs": [
              {
                "label": "Momentary Union - Remnant Entities Damage DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Momentary Union - Remnant Entities Damage DMG Multiplier Increase +1.2%"
              }
            ]
          },
          {
            "name": "A Wish Answered",
            "desc": "If a team member is knocked out when Baizhi is alive on the team, immediately revive them and restore 100% of their Max HP. This effect can be triggered once every 10 minute(s)."
          },
          {
            "name": "Seeker's Devotion",
            "desc": "When Euphonia is picked up, increase the Glacio DMG Bonus of all characters nearby by 12% for 20s.",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Default",
                "excerpt": "Glacio DMG Bonus +12%"
              }
            ]
          }
        ]
      }
    }
  }
});
