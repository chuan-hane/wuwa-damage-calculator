"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "youhu": {
        "name": "Youhu",
        "skills": [
          {
            "name": "Frosty Punches - Stage 1 DMG"
          },
          {
            "name": "Frosty Punches - Stage 2 DMG"
          },
          {
            "name": "Frosty Punches - Stage 3 DMG"
          },
          {
            "name": "Frosty Punches - Stage 4 DMG"
          },
          {
            "name": "Frosty Punches - Heavy Attack: Frostfall DMG",
            "requiresResourceLabel": "Frost full"
          },
          {
            "name": "Frosty Punches - Mid-air Attack DMG"
          },
          {
            "name": "Frosty Punches - Dodge Counter DMG"
          },
          {
            "name": "Scroll Divination - Skill DMG"
          },
          {
            "name": "Scroll Divination - Chime DMG"
          },
          {
            "name": "Scroll Divination - Ding DMG"
          },
          {
            "name": "Scroll Divination - Ruyi DMG"
          },
          {
            "name": "Scroll Divination - Mask DMG"
          },
          {
            "name": "Fortune's Favor - Skill DMG"
          },
          {
            "name": "Scroll of Wonders - Skill DMG"
          },
          {
            "name": "Poetic Essence - Poetic Essence Skill DMG",
            "requiresResourceLabel": "Auspice at least 4"
          }
        ],
        "resources": [
          {
            "label": "Frost"
          },
          {
            "label": "Auspice"
          }
        ],
        "combatStates": [
          {
            "label": "Auspice Combination",
            "idLabel": "Auspice Combination",
            "inactiveLabel": "Not in Auspice Combination",
            "entry": "Select the current Auspice Combination.",
            "effects": "Select the current Auspice Combination.",
            "options": [
              {
                "label": "Auspice Combination · Antithesis",
                "valueLabel": "Auspice Combination · Antithesis"
              },
              {
                "label": "Auspice Combination · Double Pun",
                "valueLabel": "Auspice Combination · Double Pun"
              },
              {
                "label": "Auspice Combination · Triplet",
                "valueLabel": "Auspice Combination · Triplet"
              },
              {
                "label": "Auspice Combination · Perfect Rhyme",
                "valueLabel": "Auspice Combination · Perfect Rhyme"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Rare Find",
            "label": "Glacio DMG Bonus",
            "trigger": "After casting Scroll of Wonders - Skill DMG",
            "excerpt": "Glacio DMG Bonus +15%",
            "desc": "Glacio DMG Bonus +15%"
          },
          {
            "source": "Outro Skill: Timeless Classics",
            "label": "Coordinated Attack DMG Increase",
            "trigger": "In Auspice Combination · Perfect Rhyme",
            "excerpt": "Coordinated Attack DMG Increase +100%",
            "desc": "Coordinated Attack DMG Increase +100%"
          },
          {
            "source": "Forte Circuit: Poetic Essence",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "In Auspice Combination · Antithesis",
            "excerpt": "Resonance Skill DMG Bonus +70%",
            "desc": "At four Auspices, hold the Normal Attack button to release Poetic Essence, dealing Glacio DMG, considered as Resonance Skill DMG, while restoring HP for all nearby party members."
          },
          {
            "source": "Forte Circuit: Poetic Essence",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "In Auspice Combination · Triplet",
            "excerpt": "Resonance Skill DMG Bonus +175%",
            "desc": "At four Auspices, hold the Normal Attack button to release Poetic Essence, dealing Glacio DMG, considered as Resonance Skill DMG, while restoring HP for all nearby party members."
          }
        ],
        "chain": [
          {
            "name": "Waterside Respite",
            "desc": "Youhu has a 10% chance to gain immunity to damage and interruption after casting Lucky Draw. This effect lasts for 5s or until she is switched out."
          },
          {
            "name": "Sunroom Siesta",
            "desc": "The DMG bonus of Antithesis, Triplet and Perfect Rhyme on Poetic Essence is doubled.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Auspice Combination · Antithesis",
                "excerpt": "Resonance Skill DMG Bonus +70%"
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Auspice Combination · Triplet",
                "excerpt": "Resonance Skill DMG Bonus +175%"
              }
            ]
          },
          {
            "name": "Restless Sleep",
            "desc": "Youhu's ATK is increased by 20%.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Auspice Combination · Perfect Rhyme",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Frosted Lullaby",
            "desc": "Every time Resonance Skill Scroll Divination is cast, there is a 20% chance that the skill will not enter Cooldown."
          },
          {
            "name": "Dreamland Meander",
            "desc": "When Intro Skill Scroll of Wonders is cast, Youhu's Crit. Rate is increased by 15% for 14s.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Scroll of Wonders - Skill DMG",
                "excerpt": "Crit. Rate +15%"
              }
            ]
          },
          {
            "name": "Slumber Evermore",
            "desc": "When casting Resonance Skill Antique Appraisal, gain 1 stack of Sky Blue, stackable up to 4 times, lasting for 7s. Each stack increases Youhu's Crit. DMG by 15%.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After casting Scroll Divination - Chime DMG / Scroll Divination - Ding DMG / Scroll Divination - Ruyi DMG / Scroll Divination - Mask DMG",
                "excerpt": "Crit. DMG +60% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
