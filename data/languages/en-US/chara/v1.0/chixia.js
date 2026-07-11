"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "chixia": {
        "name": "Chixia",
        "resources": [{ "label": "Thermobaric Bullets" }, { "label": "Thermobaric Bullets fired during DAKA DAKA!" }],
        "skills": [
          {
            "name": "POW POW - Stage 1 DMG"
          },
          {
            "name": "POW POW - Stage 2 DMG"
          },
          {
            "name": "POW POW - Stage 3 DMG"
          },
          {
            "name": "POW POW - Stage 4 DMG"
          },
          {
            "name": "POW POW - Heavy Attack DMG"
          },
          {
            "name": "POW POW - Full Charge Heavy Attack DMG"
          },
          {
            "name": "POW POW - Mid-air Attack DMG"
          },
          {
            "name": "POW POW - Dodge Counter DMG"
          },
          {
            "name": "Whizzing Fight Spirit - Skill DMG"
          },
          {
            "name": "Blazing Flames - Skill DMG"
          },
          {
            "name": "Grand Entrance - Skill DMG"
          },
          {
            "name": "Heroic Bullets - Thermobaric Bullets Damage"
          },
          {
            "name": "Heroic Bullets - Boom Boom Damage",
            "requiresResourceLabel": "30 Thermobaric Bullets fired during DAKA DAKA!"
          },
          {
            "name": "Leaping Flames"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Numbingly Spicy!",
            "label": "ATK",
            "trigger": "Default",
            "excerpt": "ATK +1% per stack",
            "desc": "When the Inherent Skill Numbingly Spicy!"
          },
          {
            "source": "Inherent Skill: Scorching Magazine",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "Default",
            "excerpt": "Resonance Skill DMG Bonus +50%",
            "desc": "Inherent Skill Scorching Magazine increases Max \"Thermobaric Bullets\" by 10."
          }
        ],
        "chain": [
          {
            "name": "No.1 Hero Play Fan",
            "desc": "Resonance Skill Boom Boom hits will always be Critical Hits.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "Default",
                "excerpt": "Crit. Rate +95%"
              }
            ]
          },
          {
            "name": "Leaping Sparkles",
            "desc": "During Resonance Liberation Blazing Flames, for every 1 target defeated, Chixia recovers 5 Resonance Energy, up to 20 each time."
          },
          {
            "name": "Eternal Flames",
            "desc": "Resonance Liberation Blazing Flames deals 40% more DMG to targets whose HP is below 50%.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "After casting Blazing Flames - Skill DMG",
                "excerpt": "Resonance Liberation DMG Bonus +40%"
              }
            ]
          },
          {
            "name": "Hero’s Ultimate Move",
            "desc": "Resonance Liberation Blazing Flames grants 60 \"Thermobaric Bullets\" and immediately resets the Cooldown of Resonance Skill Whizzing Fight Spirit."
          },
          {
            "name": "Triumphant Explosions",
            "desc": "When the Inherent Skill Numbingly Spicy! reaches max stacks, ATK is additionally increased by 30%.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "Default",
                "excerpt": "ATK +30%"
              }
            ]
          },
          {
            "name": "Easter Egg Performance",
            "desc": "Resonance Skill Boom Boom increases the Basic Attack DMG Bonus of all team members by 25% for 15s.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "After casting Heroic Bullets - Boom Boom Damage",
                "excerpt": "Basic Attack DMG Bonus +25%"
              }
            ]
          }
        ]
      }
    }
  }
});
