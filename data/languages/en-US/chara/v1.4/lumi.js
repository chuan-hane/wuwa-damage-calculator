"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lumi": {
        "name": "Lumi",
        "skills": [
          {
            "name": "Navigation Support - Yellow Light: Basic Attack DMG"
          },
          {
            "name": "Navigation Support - Red Light: Basic Attack 1 DMG"
          },
          {
            "name": "Navigation Support - Red Light: Basic Attack 2 DMG"
          },
          {
            "name": "Navigation Support - Red Light: Basic Attack 3 DMG"
          },
          {
            "name": "Navigation Support - Red Light: Heavy Attack DMG"
          },
          {
            "name": "Navigation Support - Red Light: Plunging Attack DMG"
          },
          {
            "name": "Navigation Support - Red Light: Dodge Counter DMG"
          },
          {
            "name": "Searchlight Service - Pounce DMG"
          },
          {
            "name": "Searchlight Service - Rebound DMG"
          },
          {
            "name": "Squeakie Express - Skill DMG"
          },
          {
            "name": "Special Delivery - Skill DMG"
          },
          {
            "name": "Signal Light - Glare DMG"
          },
          {
            "name": "Signal Light - Red Spotlight: Basic Attack 1 DMG"
          },
          {
            "name": "Signal Light - Red Spotlight: Basic Attack 2 DMG"
          },
          {
            "name": "Signal Light - Red Spotlight: Basic Attack 3 DMG"
          },
          {
            "name": "Signal Light - Red Spotlight: Heavy Attack DMG"
          },
          {
            "name": "Signal Light - Energized Pounce DMG",
            "requiresResourceLabel": "Spark full"
          },
          {
            "name": "Signal Light - Energized Rebound DMG",
            "requiresResourceLabel": "Spark full"
          },
          {
            "name": "Signal Light - Single Laser Beam DMG",
            "requiresResourceLabel": "Spark at least 25"
          }
        ],
        "resources": [
          {
            "label": "Light Energy"
          }
        ],
        "combatStates": [
          {
            "label": "Traffic Light Mode",
            "idLabel": "Traffic Light Mode",
            "inactiveLabel": "Not in Traffic Light Mode",
            "entry": "Select the current Traffic Light Mode.",
            "effects": "Select the current Traffic Light Mode.",
            "options": [
              {
                "label": "Yellow Light Mode",
                "valueLabel": "Yellow Light Mode"
              },
              {
                "label": "Red Light Mode",
                "valueLabel": "Red Light Mode"
              },
              {
                "label": "Yellow Spotlight Mode",
                "valueLabel": "Yellow Spotlight Mode"
              },
              {
                "label": "Red Spotlight Mode",
                "valueLabel": "Red Spotlight Mode"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Pathfinding",
            "label": "Electro DMG Bonus",
            "trigger": "In Red Light Mode",
            "excerpt": "Electro DMG Bonus +10%",
            "desc": "Electro DMG Bonus +10%"
          },
          {
            "source": "Inherent Skill: Expediting",
            "label": "ATK",
            "trigger": "After casting Signal Light - Energized Pounce DMG / Signal Light - Energized Rebound DMG",
            "excerpt": "ATK +10%",
            "desc": "ATK +10%"
          },
          {
            "source": "Outro Skill: Escorting",
            "label": "Resonance Skill DMG Increase",
            "trigger": "In Red Spotlight Mode",
            "excerpt": "Resonance Skill DMG Increase +38%",
            "desc": "Resonance Skill DMG Increase +38%"
          }
        ],
        "chain": [
          {
            "name": "Parcel To Be Delivered",
            "desc": "After casting Energized Rebound, additionally recovers 60 STA within 3s."
          },
          {
            "name": "Lollo Logistics, Ready to Help",
            "desc": "Energized Pounce and Energized Rebound ignore 20% of the target's DEF.",
            "buffs": [
              {
                "label": "DEF Ignore",
                "trigger": "In Red Spotlight Mode",
                "excerpt": "DEF Ignore +20%"
              }
            ]
          },
          {
            "name": "Priority Parcel In Transit",
            "desc": "The DMG of Resonance Liberation Squeakie Express is increased by 30%.",
            "buffs": [
              {
                "label": "Squeakie Express - Skill DMG Multiplier Increase",
                "trigger": "In Red Spotlight Mode",
                "excerpt": "Squeakie Express - Skill DMG Multiplier Increase +30%"
              }
            ]
          },
          {
            "name": "Captain Lumi, At Your Service",
            "desc": "Gain 30% Basic Attack DMG Bonus.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "In Red Spotlight Mode",
                "excerpt": "Basic Attack DMG Bonus +30%"
              }
            ]
          },
          {
            "name": "Parcel Collected On Time",
            "desc": "When Spark is fully recovered, Laser DMG Multiplier is increased by 100%.",
            "buffs": [
              {
                "label": "Signal Light - Single Laser Beam DMG Multiplier Increase",
                "trigger": "After casting Signal Light - Single Laser Beam DMG",
                "excerpt": "Signal Light - Single Laser Beam DMG Multiplier Increase +100%"
              }
            ]
          },
          {
            "name": "Give Me A Five-star Rating",
            "desc": "Casting Resonance Liberation Squeakie Express increases all team members' ATK by 20% for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Squeakie Express - Skill DMG",
                "excerpt": "ATK +20%"
              }
            ]
          }
        ]
      }
    }
  }
});
