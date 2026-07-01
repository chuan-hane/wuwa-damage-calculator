"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jinhsi": {
        "name": "Jinhsi",
        "skills": [
          {
            "name": "Slash of Breaking Dawn - Stage 1 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Stage 2 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Stage 3 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Stage 4 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Heavy Attack DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Mid-air Attack DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Dodge Counter DMG"
          },
          {
            "name": "Trailing Lights of Eons - Skill DMG"
          },
          {
            "name": "Trailing Lights of Eons - Overflowing Radiance DMG"
          },
          {
            "name": "Purge of Light - Skill DMG"
          },
          {
            "name": "Loong's Halo - Skill DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 1 DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 2 DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 3 DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 4 DMG"
          },
          {
            "name": "Luminal Synthesis - Crescent Divinity DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Heavy Attack DMG"
          },
          {
            "name": "Luminal Synthesis - Illuminous Epiphany: Solar Flare DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Dodge Counter DMG"
          },
          {
            "name": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG"
          }
        ],
        "resources": [
          {
            "label": "Incandescence"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Radiant Surge",
            "label": "Spectro DMG Bonus",
            "trigger": "Default",
            "excerpt": "Spectro DMG Bonus +20%",
            "desc": "Spectro DMG Bonus +20%"
          },
          {
            "source": "Inherent Skill: Converged Flash",
            "label": "Loong's Halo - Skill DMG Multiplier Increase",
            "trigger": "Default",
            "excerpt": "Loong's Halo - Skill DMG Multiplier Increase +50%",
            "desc": "Loong's Halo - Skill DMG Multiplier Increase +50%"
          }
        ],
        "chain": [
          {
            "name": "Abyssal Ascension",
            "desc": "When casting Basic Attack \"Incarnation - Basic Attack\" or Resonance Skill Crescent Divinity, Jinhsi gains one stack of Herald of Revival, stacking up to 4 times and lasting for 6s. When casting Resonance Skill Illuminous Epiphany, Jinhsi consumes all stacks of Herald of Revival. Each stack increases the damage of Resonance Skill Illuminous Epiphany by 20%.",
            "buffs": [
              {
                "label": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG Increase",
                "trigger": "After casting Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG",
                "excerpt": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG Increase +80% per stack"
              }
            ]
          },
          {
            "name": "Chronofrost Repose",
            "desc": "Jinhsi restores 50 Incandescence while staying out of combat for more than 4s. This effect can only be triggered 1 time(s) every 4s."
          },
          {
            "name": "Celestial Incarnate",
            "desc": "Jinhsi gains one stack of Immortal's Descendancy after casting Intro Skill Loong's Halo. Each stack of Immortal's Descendancy increases Jinhsi's ATK by 25%, stacking up to 2 time(s) and lasting for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Loong's Halo - Skill DMG",
                "excerpt": "ATK +50% per stack"
              }
            ]
          },
          {
            "name": "Benevolent Grace",
            "desc": "When Jinhsi casts Resonance Liberation Purge of Light or Resonance Skill Illuminous Epiphany, all nearby Resonators on the team gain 20% Attribute DMG Bonus for 20s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "After casting Purge of Light - Skill DMG / Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG",
                "excerpt": "All-Attribute DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Frostfire Illumination",
            "desc": "The DMG Multiplier of Resonance Liberation Purge of Light is increased by 120%.",
            "buffs": [
              {
                "label": "Purge of Light - Skill DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Purge of Light - Skill DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "Thawing Triumph",
            "desc": "The DMG Multiplier of Resonance Skill Illuminous Epiphany is increased by 45% and the additional DMG Multiplier gained by consuming Incandescence is increased by 45%.",
            "buffs": [
              {
                "label": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG Multiplier Increase +45%"
              },
              {
                "label": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG Extra Multiplier",
                "trigger": "Default",
                "excerpt": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG Extra Multiplier +45%"
              }
            ]
          }
        ]
      }
    }
  }
});
