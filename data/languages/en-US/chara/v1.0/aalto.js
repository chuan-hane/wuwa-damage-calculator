"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "aalto": {
        "name": "Aalto",
        "skills": [
          {
            "name": "Half Truths - Stage 1 DMG"
          },
          {
            "name": "Half Truths - Stage 2 DMG"
          },
          {
            "name": "Half Truths - Stage 3 DMG"
          },
          {
            "name": "Half Truths - Stage 4 DMG"
          },
          {
            "name": "Half Truths - Stage 5 DMG"
          },
          {
            "name": "Half Truths - Aimed Shot Damage"
          },
          {
            "name": "Half Truths - Fully Charged Aimed Shot Damage"
          },
          {
            "name": "Half Truths - Mid-air Attack"
          },
          {
            "name": "Half Truths - Dodge Counter DMG"
          },
          {
            "name": "Shift Trick - Mist Bullet Damage (Total)"
          },
          {
            "name": "Flower in the Mist - Skill DMG"
          },
          {
            "name": "Feint Shot - Skill DMG"
          },
          {
            "name": "Misty Cover - Mist Bullet DMG"
          }
        ],
        "resources": [
          {
            "label": "Mist Drops"
          }
        ],
        "combatStates": [
          {
            "label": "Mist",
            "idLabel": "Mist",
            "inactiveLabel": "Not in Mist",
            "entry": "Basic Attack 4 will spread the Mist forward, which lasts for 1.5s.",
            "effects": "Basic Attack 4 will spread the Mist forward, which lasts for 1.5s.",
            "options": [
              {
                "label": "Mist",
                "valueLabel": "Mist"
              }
            ]
          },
          {
            "label": "Gate of Quandary",
            "idLabel": "Gate of Quandary",
            "inactiveLabel": "Not in Gate of Quandary",
            "entry": "Generate a Gate of Quandary in front, dealing Aero DMG.",
            "effects": "Generate a Gate of Quandary in front, dealing Aero DMG.",
            "options": [
              {
                "label": "Gate of Quandary",
                "valueLabel": "Gate of Quandary"
              }
            ]
          },
          {
            "label": "Mistcloak Dash",
            "idLabel": "Mistcloak Dash",
            "inactiveLabel": "Not in Mistcloak Dash",
            "entry": "Aalto will continuously recover STA when he is in the Forte Circuit Mistcloak Dash state.",
            "effects": "Aalto will continuously recover STA when he is in the Forte Circuit Mistcloak Dash state.",
            "options": [
              {
                "label": "Mistcloak Dash",
                "valueLabel": "Mistcloak Dash"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Perfect Performance",
            "label": "Crit. Rate",
            "trigger": "In Mistcloak Dash",
            "excerpt": "Crit. Rate +95%",
            "desc": "Crit. Rate +95%"
          },
          {
            "source": "Resonance Liberation: Flower in the Mist",
            "label": "ATK",
            "trigger": "In Gate of Quandary",
            "excerpt": "ATK +10%",
            "desc": "Resonance Liberation Flower in the Mist now additionally increases Crit."
          },
          {
            "source": "Outro Skill: Dissolving Mist",
            "label": "DMG Increase",
            "trigger": "In Mistcloak Dash",
            "excerpt": "DMG Increase +23%",
            "desc": "DMG Increase +23%"
          }
        ],
        "chain": [
          {
            "name": "Trickster's Opening Show",
            "desc": "The cooldown of Resonance Skill Shift Trick is reduced by 4s."
          },
          {
            "name": "Mistweaver's Debut",
            "desc": "\"Mist Avatar\" inherits 100% more HP from Aalto. When Aalto attacks targets taunted by the \"Mist Avatar(s)\", his ATK is increased by 15%.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Mistcloak Dash",
                "excerpt": "ATK +15%"
              }
            ]
          },
          {
            "name": "Hazey Transition",
            "desc": "When Aalto's Basic Attack or Mid-air Attack passes through the Mist, 2 more bullets will be generated, dealing 50% of the DMG of Basic Attack or Mid-air Attack.",
            "buffs": [
              {
                "label": "Half Truths - Stage 1 DMG Extra Multiplier",
                "trigger": "In Mist",
                "excerpt": "Half Truths - Stage 1 DMG Extra Multiplier +50%"
              }
            ]
          },
          {
            "name": "Blake Bloom for Finale",
            "desc": "The damage of Resonance Skill Mist Bullets is increased by 30%; Aalto receives 30% less DMG in his Forte Circuit Mistcloak Dash state.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Mistcloak Dash",
                "excerpt": "Resonance Skill DMG Bonus +30%"
              }
            ]
          },
          {
            "name": "Applause of the Lost",
            "desc": "In the Forte Circuit Mistcloak Dash state, Aalto's Aero DMG Bonus is increased by 25% for 6s.",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "In Mistcloak Dash",
                "excerpt": "Aero DMG Bonus +25%"
              }
            ]
          },
          {
            "name": "Broker's Secrets",
            "desc": "Resonance Liberation Flower in the Mist now additionally increases Crit. Rate by 8%. When Aalto's Heavy Attack passes through the Gate of Quandary, the damage dealt is additionally increased by 50%.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Gate of Quandary",
                "excerpt": "Crit. Rate +8%"
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "In Gate of Quandary",
                "excerpt": "Heavy Attack DMG Bonus +50%"
              }
            ]
          }
        ]
      }
    }
  }
});
