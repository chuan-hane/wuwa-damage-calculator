"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "verina": {
        "name": "Verina",
        "skills": [
          {
            "name": "Cultivation - Stage 1 DMG"
          },
          {
            "name": "Cultivation - Stage 2 DMG"
          },
          {
            "name": "Cultivation - Stage 3 DMG"
          },
          {
            "name": "Cultivation - Stage 4 DMG"
          },
          {
            "name": "Cultivation - Stage 5 DMG"
          },
          {
            "name": "Cultivation - Heavy Attack DMG"
          },
          {
            "name": "Cultivation - Mid-air Attack Stage 1 DMG"
          },
          {
            "name": "Cultivation - Mid-air Attack Stage 2 DMG"
          },
          {
            "name": "Cultivation - Mid-air Attack Stage 3 DMG"
          },
          {
            "name": "Cultivation - Mid-air Heavy Attack DMG"
          },
          {
            "name": "Cultivation - Dodge Counter DMG"
          },
          {
            "name": "Botany Experiment - Skill DMG"
          },
          {
            "name": "Arboreal Flourish - Skill DMG"
          },
          {
            "name": "Arboreal Flourish - Coordinated Attack DMG"
          },
          {
            "name": "Verdant Growth - Skill DMG"
          },
          {
            "name": "Starflower Blooms - Heavy Attack: Starflower Blooms Damage",
            "requiresResourceLabel": "Photosynthesis Energy"
          },
          {
            "name": "Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 1 DMG",
            "requiresResourceLabel": "Photosynthesis Energy"
          },
          {
            "name": "Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 2 DMG",
            "requiresResourceLabel": "Photosynthesis Energy"
          },
          {
            "name": "Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 3 DMG",
            "requiresResourceLabel": "Photosynthesis Energy"
          }
        ],
        "resources": [
          {
            "label": "Photosynthesis Energy"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Gift of Nature",
            "label": "ATK",
            "trigger": "After casting Starflower Blooms - Heavy Attack: Starflower Blooms Damage / Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 1 DMG / Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 2 DMG / Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 3 DMG / Arboreal Flourish - Skill DMG",
            "excerpt": "ATK +20%",
            "desc": "ATK +20%"
          },
          {
            "source": "Outro Skill: Blossom",
            "label": "DMG Increase",
            "trigger": "Default",
            "excerpt": "DMG Increase +15%",
            "desc": "When Verina casts Heavy Attack Starflower Blooms, Mid-air Attack Starflower Blooms, Resonance Liberation Arboreal Flourish or Outro Skill Blossom, all team members' ATK are increased by 20% for 20s."
          }
        ],
        "chain": [
          {
            "name": "Moment of Emergence",
            "desc": "Outro Skill Blossom grants the next character a continuous Healing effect, recovering HP by 20% of Verina's ATK every 5s for 30s."
          },
          {
            "name": "Sprouting Reflections",
            "desc": "Resonance Skill Botany Experiment additionally grants 1 [Photosynthesis Energy] and 10 Concerto Energy."
          },
          {
            "name": "The Choice to Flourish",
            "desc": "Healing of Resonance Liberation's Photosynthesis Mark is increased by 12%."
          },
          {
            "name": "Blossoming Embrace",
            "desc": "Heavy Attack Starflower Blooms, Mid-Air Attack Starflower Blooms, Resonance Liberation Arboreal Flourish and Outro Skill Blossom increases the Spectro DMG Bonus of all team members by 15% for 24s.",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "After casting Starflower Blooms - Heavy Attack: Starflower Blooms Damage / Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 1 DMG / Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 2 DMG / Starflower Blooms - Mid-air Attack: Starflower Blooms Stage 3 DMG / Arboreal Flourish - Skill DMG",
                "excerpt": "Spectro DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "Miraculous Blooms",
            "desc": "When Verina heals a team member with HP less than 50%, her Healing is increased by 20%."
          },
          {
            "name": "Joyous Harvest",
            "desc": "Heavy Attack Starflower Blooms and Mid-air Attack Starflower Blooms deal 20% more DMG. They will trigger Coordinated Attack 1 time and heal all characters nearby. The damage of this Coordinated Attack and the Healing are equal to those of the Resonance Liberation's Photosynthesis Mark.",
            "buffs": [
              {
                "label": "Starflower Blooms - Heavy Attack: Starflower Blooms Damage DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Starflower Blooms - Heavy Attack: Starflower Blooms Damage DMG Multiplier Increase +20%"
              }
            ]
          }
        ]
      }
    }
  }
});
