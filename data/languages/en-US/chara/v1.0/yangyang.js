"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "yangyang": {
        "name": "Yangyang",
        "skills": [
          {
            "name": "Feather as Blade - Stage 1 DMG"
          },
          {
            "name": "Feather as Blade - Stage 2 DMG"
          },
          {
            "name": "Feather as Blade - Stage 3 DMG"
          },
          {
            "name": "Feather as Blade - Stage 4 DMG"
          },
          {
            "name": "Feather as Blade - Heavy Attack DMG"
          },
          {
            "name": "Feather as Blade - Mid-air Attack DMG"
          },
          {
            "name": "Feather as Blade - Zephyr Song Damage"
          },
          {
            "name": "Feather as Blade - Dodge Counter DMG"
          },
          {
            "name": "Zephyr Domain - Skill DMG"
          },
          {
            "name": "Wind Spirals - Skill DMG"
          },
          {
            "name": "Cerulean Song - Skill DMG"
          },
          {
            "name": "Echoing Feathers - Stormy Strike Damage",
            "requiresResourceLabel": "Melodies at least 3"
          },
          {
            "name": "Echoing Feathers - Feather Release Damage",
            "requiresResourceLabel": "Melodies at least 3"
          }
        ],
        "resources": [
          {
            "label": "Melodies"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Lazuline Mercy",
            "label": "Aero DMG Bonus",
            "trigger": "After casting Cerulean Song - Skill DMG",
            "excerpt": "Aero DMG Bonus +8%",
            "desc": "Aero DMG Bonus +8%"
          }
        ],
        "chain": [
          {
            "name": "Sapphire Skies, \nSoaring Sparrows",
            "desc": "Intro Skill Cerulean Song increases Yangyang's Aero DMG Bonus by an additional 15% for 8s.",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "After casting Cerulean Song - Skill DMG",
                "excerpt": "Aero DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "Nesting Twigs, \nin Beaks They Harrow",
            "desc": "Heavy Attack recovers an additional 10 Resonance Energy for Yangyang when it hits a target, which can be triggered 1 time every 20s."
          },
          {
            "name": "Nature Sings in Symphony",
            "desc": "Resonance Skill DMG Bonus is increased by 40%. The Wind Field's pulling effect on surrounding targets is enhanced, and the pulling range is expanded by 33%.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "Default",
                "excerpt": "Resonance Skill DMG Bonus +40%"
              }
            ]
          },
          {
            "name": "Close Your Eyes and Listen in",
            "desc": "Mid-air Attack Feather Release's damage is increased by 95%.",
            "buffs": [
              {
                "label": "Echoing Feathers - Feather Release Damage DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Echoing Feathers - Feather Release Damage DMG Multiplier Increase +95%"
              }
            ]
          },
          {
            "name": "Winds Whisper in Harmony",
            "desc": "Resonance Liberation Wind Spirals's damage is increased by 85%.",
            "buffs": [
              {
                "label": "Wind Spirals - Skill DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Wind Spirals - Skill DMG Multiplier Increase +85%"
              }
            ]
          },
          {
            "name": "A Tribute to Life's Sweet Hymn",
            "desc": "After casting Mid-air Attack Feather Release, the ATK of all team members is increased by 20% for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Echoing Feathers - Feather Release Damage",
                "excerpt": "ATK +20%"
              }
            ]
          }
        ]
      }
    }
  }
});
