"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "encore": {
        "name": "Encore",
        "skills": [
          {
            "name": "Wooly Attack - Stage 1 DMG"
          },
          {
            "name": "Wooly Attack - Stage 2 DMG"
          },
          {
            "name": "Wooly Attack - Stage 3 DMG"
          },
          {
            "name": "Wooly Attack - Stage 4 DMG"
          },
          {
            "name": "Wooly Attack - Woolies Damage"
          },
          {
            "name": "Wooly Attack - Heavy Attack DMG"
          },
          {
            "name": "Wooly Attack - Mid-air Attack"
          },
          {
            "name": "Wooly Attack - Dodge Counter DMG"
          },
          {
            "name": "Flaming Woolies - Flaming Woolies Damage"
          },
          {
            "name": "Flaming Woolies - Energetic Welcome Damage"
          },
          {
            "name": "Cosmos Rave - Cosmos: Frolicking Stage 1 DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos: Frolicking Stage 2 DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos: Frolicking Stage 3 DMG"
          },
          {
            "name": "Cosmos Rave - Stage 4 DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos: Heavy Attack DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos Rampage Damage"
          },
          {
            "name": "Cosmos Rave - Cosmos: Dodge Counter DMG"
          },
          {
            "name": "Woolies Helpers - Skill DMG"
          },
          {
            "name": "Black & White Woolies - Cloudy Frenzy Damage",
            "requiresResourceLabel": "Mayhem at least 100"
          },
          {
            "name": "Black & White Woolies - Cosmos Rupture Damage",
            "requiresResourceLabel": "Mayhem at least 100"
          },
          {
            "name": "Thermal Field"
          }
        ],
        "resources": [
          {
            "label": "Mayhem"
          }
        ],
        "combatStates": [
          {
            "label": "Cosmos Rave",
            "idLabel": "Cosmos Rave",
            "inactiveLabel": "Not in Cosmos Rave",
            "entry": "During Cosmos Rave, the Basic Attack is replaced with Cosmos - Frolicking, which performs up to 4 consecutive attacks, dealing Fusion DMG, considered as Basic Attack DMG.",
            "effects": "During Cosmos Rave, the Basic Attack is replaced with Cosmos - Frolicking, which performs up to 4 consecutive attacks, dealing Fusion DMG, considered as Basic Attack DMG.",
            "options": [
              {
                "label": "Cosmos Rave",
                "valueLabel": "Cosmos Rave"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Angry Cosmos",
            "label": "All-Attribute DMG Bonus",
            "trigger": "In Cosmos Rave",
            "excerpt": "All-Attribute DMG Bonus +10%",
            "desc": "All-Attribute DMG Bonus +10%"
          },
          {
            "source": "Inherent Skill: Woolies Cheer Dance",
            "label": "Fusion DMG Bonus",
            "trigger": "After casting Flaming Woolies - Flaming Woolies Damage / Cosmos Rave - Cosmos Rampage Damage",
            "excerpt": "Fusion DMG Bonus +10%",
            "desc": "Fusion DMG Bonus +10%"
          }
        ],
        "chain": [
          {
            "name": "Wooly's Fairy Tale",
            "desc": "When Basic Attack hits a target, Encore's Fusion DMG Bonus is increased by 3%, stacking up to 4 time(s) for 6s.",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "In Cosmos Rave",
                "excerpt": "Fusion DMG Bonus +3% per stack"
              }
            ]
          },
          {
            "name": "Sheep-counting Lullaby",
            "desc": "Encore additionally restores 10 Resonance Energy when casting Basic Attack Wooly Strike or Resonance Skill Energetic Welcome. This can be triggered once every 10s."
          },
          {
            "name": "Fog? The Black Shores!",
            "desc": "The DMG multiplier of Heavy Attack Cloudy Frenzy and Heavy Attack Cosmos Rupture is increased by 40%.",
            "buffs": [
              {
                "label": "Black & White Woolies - Cloudy Frenzy Damage DMG Multiplier Increase",
                "trigger": "In Cosmos Rave",
                "excerpt": "Black & White Woolies - Cloudy Frenzy Damage DMG Multiplier Increase +40%"
              }
            ]
          },
          {
            "name": "Adventure? Let's go!",
            "desc": "Heavy Attack Cosmos Rupture increases the Fusion DMG Bonus of all team members by 20% for 30s.",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "After casting Black & White Woolies - Cosmos Rupture Damage",
                "excerpt": "Fusion DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Hero Takes the Stage!",
            "desc": "Resonance Skill DMG Bonus is increased by 35%.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Cosmos Rave",
                "excerpt": "Resonance Skill DMG Bonus +35%"
              }
            ]
          },
          {
            "name": "Woolies Save the World!",
            "desc": "During Resonance Liberation Cosmos Rave, Encore gains 1 stack(s) of \"Lost Lamb\" every time she deals damage, each stack increasing her ATK by 5% for 10s, stacking up to 5 time(s).",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Cosmos Rave",
                "excerpt": "ATK +5% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
