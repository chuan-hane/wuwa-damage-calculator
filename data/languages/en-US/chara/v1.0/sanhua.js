"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "sanhua": {
        "name": "Sanhua",
        "skills": [
          {
            "name": "Frigid Light - Stage 1 DMG"
          },
          {
            "name": "Frigid Light - Stage 2 DMG"
          },
          {
            "name": "Frigid Light - Stage 3 DMG"
          },
          {
            "name": "Frigid Light - Stage 4 DMG"
          },
          {
            "name": "Frigid Light - Stage 5 DMG"
          },
          {
            "name": "Frigid Light - Heavy Attack DMG"
          },
          {
            "name": "Frigid Light - Mid-air Attack DMG"
          },
          {
            "name": "Frigid Light - Dodge Counter DMG"
          },
          {
            "name": "Eternal Frost - Skill DMG"
          },
          {
            "name": "Glacial Gaze - Skill DMG"
          },
          {
            "name": "Freezing Thorns - Skill DMG"
          },
          {
            "name": "Clarity of Mind - Detonate Damage"
          },
          {
            "name": "Clarity of Mind - Glacier Burst Damage"
          },
          {
            "name": "Clarity of Mind - Ice Prism Burst Damage"
          },
          {
            "name": "Clarity of Mind - Ice Thorn Burst Damage"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Condensation",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "After casting Freezing Thorns - Skill DMG",
            "excerpt": "Resonance Skill DMG Bonus +20%",
            "desc": "Resonance Skill DMG Bonus +20%"
          },
          {
            "source": "Inherent Skill: Avalanche",
            "label": "Clarity of Mind - Glacier Burst Damage DMG Multiplier Increase",
            "trigger": "After casting Frigid Light - Stage 5 DMG",
            "excerpt": "Clarity of Mind - Glacier Burst Damage DMG Multiplier Increase +20%",
            "desc": "Clarity of Mind - Glacier Burst Damage DMG Multiplier Increase +20%"
          },
          {
            "source": "Outro Skill: Silversnow",
            "label": "Basic Attack DMG Increase",
            "trigger": "Default",
            "excerpt": "Basic Attack DMG Increase +38%",
            "desc": "Basic Attack DMG Increase +38%"
          }
        ],
        "chain": [
          {
            "name": "Solitude's Embrace",
            "desc": "Basic Attack V increases Sanhua's Crit. Rate by 15% for 10s.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Frigid Light - Stage 5 DMG",
                "excerpt": "Crit. Rate +15%"
              }
            ]
          },
          {
            "name": "Snowy Clarity",
            "desc": "Heavy Attack Detonate STA cost is reduced by 10. When Sanhua casts Resonance Skill Eternal Frost, her resistance to interruption is enhanced for 10s."
          },
          {
            "name": "Anomalous Vision",
            "desc": "Sanhua's damage dealt is increased by 35% against targets with HP below 70%.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "Default",
                "excerpt": "DMG Increase +35%"
              }
            ]
          },
          {
            "name": "Blade Mastery",
            "desc": "Resonance Liberation Glacial Gaze restores 10 Resonance Energy. \r\nDMG of the next Heavy Attack Detonate within 5s is increased by 120%.",
            "buffs": [
              {
                "label": "Clarity of Mind - Detonate Damage DMG Multiplier Increase",
                "trigger": "After casting Clarity of Mind - Detonate Damage",
                "excerpt": "Clarity of Mind - Detonate Damage DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "Unraveling Fate",
            "desc": "Crit. DMG of Forte Circuit Ice Burst is increased by 100%. Ice Creations (Ice Thorn, Ice Prism, and Glacier) will explode even if they are not detonated.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "Default",
                "excerpt": "Crit. DMG +100%"
              }
            ]
          },
          {
            "name": "Daybreak Radiance",
            "desc": "After an Ice Prism or a Glacier is detonated, all team members' ATK is increased by 10% for 20s, stacking up to 2 times.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "Default",
                "excerpt": "ATK +20% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
