"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "luukherssen": {
        "name": "Luuk Herssen",
        "skills": [
          {
            "name": "Such is Light - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Such is Light - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Such is Light - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Such is Light - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Such is Light - Heavy Attack DMG"
          },
          {
            "name": "Such is Light - Mid-air Attack Stage 1 DMG"
          },
          {
            "name": "Such is Light - Mid-air Attack Stage 2 Scythe: Dissection DMG"
          },
          {
            "name": "Such is Light - Mid-air Attack Stage 3 Scythe: Dissection DMG"
          },
          {
            "name": "Such is Light - Mid-air Attack Stage 2 Scythe: Resction DMG"
          },
          {
            "name": "Such is Light - Mid-air Attack Stage 3 Scythe: Resction DMG"
          },
          {
            "name": "Such is Light - Mid-air Attack Stage 4 DMG"
          },
          {
            "name": "Such is Light - Ground Dodge Counter DMG"
          },
          {
            "name": "Such is Light - Mid-air Dodge Counter DMG"
          },
          {
            "name": "Reunion of All the Fallen - Golden Reflux DMG"
          },
          {
            "name": "Reunion of All the Fallen - Aureole of Execution: Ring DMG"
          },
          {
            "name": "Reunion of All the Fallen - Aureole of Execution: Breach DMG"
          },
          {
            "name": "Reunion of All the Fallen - Aureole of Execution: Glare DMG"
          },
          {
            "name": "Reunion of All the Fallen - Basic Attack - Golden Impale DMG"
          },
          {
            "name": "Reunion of All the Fallen - Ichor Deposit DMG",
            "requiresResourceLabel": "resource_gate_1"
          },
          {
            "name": "Rewritten in Winter's Margins - Skill DMG"
          },
          {
            "name": "Before Injection of Dawn - Skill DMG"
          },
          {
            "name": "Spark from the Frost - Gavel of Earthshaker DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Spark from the Frost - Ichor Blade DMG (per 0.15s)",
            "requiresResourceLabel": "Ichor Blade active"
          },
          {
            "name": "Bow to the Last Light"
          }
        ],
        "resources": [
          {
            "label": "Ichor Flow"
          }
        ],
        "combatStates": [
          {
            "label": "Aureate Judge State",
            "idLabel": "Aureate Judge",
            "inactiveLabel": "Not in Aureate Judge",
            "entry": "Aureate Judge",
            "effects": "Aureate Judge",
            "options": [
              {
                "label": "Aureate Judge",
                "valueLabel": "Aureate Judge"
              }
            ]
          },
          {
            "label": "Target Tune Strain · Interfered",
            "idLabel": "Target Tune Strain · Interfered",
            "inactiveLabel": "Not in Target Tune Strain · Interfered",
            "entry": "Select the current Target Tune Strain · Interfered.",
            "effects": "Select the current Target Tune Strain · Interfered.",
            "options": [
              {
                "label": "Target Tune Strain · Interfered",
                "valueLabel": "Target Tune Strain · Interfered"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Resonance Skill: Endnotes on the Endgame",
            "label": "Rewritten in Winter's Margins - Skill DMG Multiplier Increase",
            "trigger": "After casting Rewritten in Winter's Margins - Skill DMG",
            "excerpt": "Rewritten in Winter's Margins - Skill DMG Multiplier Increase +25% per stack",
            "desc": "Casting any form of Aureole of Execution grants 1 stacks of Endnotes on the Endgame and switches Aureole of Execution to the next form in sequence."
          },
          {
            "source": "Tune Break: Silent Debate of Light",
            "label": "Final DMG Bonus",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "Each Tune Strain - Interfered stack converts Tune Break Boost into Final DMG Bonus",
            "desc": "Each Tune Strain - Interfered stack converts Tune Break Boost into Final DMG Bonus."
          },
          {
            "source": "Inherent Skill: Uncaused Diagnosis",
            "label": "DMG Increase",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "DMG Increase based on Tune Break Boost, cap 30%",
            "desc": "Inherent Skill Uncaused Diagnosis is enhanced:"
          },
          {
            "source": "Inherent Skill: Uncaused Diagnosis",
            "label": "ATK",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "ATK +25%",
            "desc": "Inherent Skill Uncaused Diagnosis is enhanced:"
          },
          {
            "source": "Forte Circuit: Aureate Judge",
            "label": "Reunion of All the Fallen - Aureole of Execution: Ring DMG Multiplier Increase",
            "trigger": "In Aureate Judge",
            "excerpt": "Reunion of All the Fallen - Aureole of Execution: Ring DMG Multiplier Increase +110%",
            "desc": "Aureate Judge"
          },
          {
            "source": "Forte Circuit: Aureate Judge",
            "label": "Spark from the Frost - Gavel of Earthshaker DMG Multiplier Increase",
            "trigger": "After casting Spark from the Frost - Gavel of Earthshaker DMG / Reunion of All the Fallen - Ichor Deposit DMG",
            "excerpt": "Spark from the Frost - Gavel of Earthshaker DMG Multiplier Increase +110%",
            "desc": "Aureate Judge"
          }
        ],
        "chain": [
          {
            "name": "Gold Kindled in Ash",
            "desc": "Luuk Herssen gains 150% Mid-air Attack DMG Bonus.\nThe max stack limit of Dawnlit Keep is increased by 1.\nWhen in the Aureate Judge state, casting Resonance Skill Aureole of Execution grants 1 stacks of Dawnlit Keep.",
            "buffs": [
              {
                "label": "DMG Bonus",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "DMG Bonus +150%"
              }
            ]
          },
          {
            "name": "Avalanche Roaring in Eyes",
            "desc": "The DMG Multiplier of Resonance Liberation Rewritten in Winter's Margins is increased by 60%. This DMG Multiplier increase effect is stackable with that of Endnotes on the Endgame.\nInherent Skill Uncaused Diagnosis is enhanced:\nWhen Luuk Herssen deals damage to targets inflicted with Tune Strain - Interfered, every 10 points of Tune Break Boost he has now Amplify this instance of damage by 10%. This effect now increases the DMG Amplification up to 60% instead of 30%.",
            "buffs": [
              {
                "label": "Rewritten in Winter's Margins - Skill DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Rewritten in Winter's Margins - Skill DMG Multiplier Increase +60%"
              },
              {
                "label": "DMG Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "DMG Increase based on Tune Break Boost, cap 60%"
              }
            ]
          },
          {
            "name": "Spine Tempered by Golden Rain",
            "desc": "The DMG Multipliers of all forms of Resonance Skill Aureole of Execution are increased by 136% in the Aureate Judge state. Casting Aureole of Execution: Glare increases the DMG Multipliers of the next Mid-Attack - Gavel of Earthshaker and Ichor Deposit by 136%.\nInherent Skill Pulses Under the Snow is enhanced:\nPerpetuating Daytime now stacks up to 4 times.",
            "buffs": [
              {
                "label": "Reunion of All the Fallen - Aureole of Execution: Ring DMG Multiplier Increase",
                "trigger": "In Aureate Judge",
                "excerpt": "Reunion of All the Fallen - Aureole of Execution: Ring DMG Multiplier Increase +136%"
              },
              {
                "label": "Spark from the Frost - Gavel of Earthshaker DMG Multiplier Increase",
                "trigger": "After casting Spark from the Frost - Gavel of Earthshaker DMG / Reunion of All the Fallen - Ichor Deposit DMG",
                "excerpt": "Spark from the Frost - Gavel of Earthshaker DMG Multiplier Increase +136%"
              }
            ]
          },
          {
            "name": "Pulse Thrumming Under Rime",
            "desc": "After a Resonator in the team deals Tune Break DMG, all Resonators in the team deal 20% more DMG for 20s. This effect is unstackable.",
            "buffs": [
              {
                "label": "Final DMG Bonus",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Final DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Through the Stillness of Snowstorm",
            "desc": "Intro Skill Before Injection of Dawn and Outro Skill Bow to the Last Light gain 80% DMG Bonus.\nResonance Skill Golden Reflux has its DMG Multiplier increased by 50% and Cooldown reduced by 2s, and gains 1 more charge.",
            "buffs": [
              {
                "label": "DMG Bonus",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "DMG Bonus +80%"
              },
              {
                "label": "Reunion of All the Fallen - Golden Reflux DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Reunion of All the Fallen - Golden Reflux DMG Multiplier Increase +50%"
              },
              {
                "label": "Bow to the Last Light DMG Bonus",
                "trigger": "Default",
                "excerpt": "Bow to the Last Light DMG Bonus +80%"
              }
            ]
          },
          {
            "name": "Dawn Unfurling over Frostlands",
            "desc": "When nearby Resonators in the team deal Tune Break DMG, all forms of Resonance Skill Aureole of Execution, Ichor Deposit, and Mid-air Attack - Gavel of Earthshaker deal 30% more DMG to the target for 25s.\nEach stack of Endnotes on the Endgame additionally grants Resonance Liberation Rewritten in Winter's Margins 40% DMG Bonus, up to 120%.\nWhen Luuk Herssen deals damage to targets inflicted with Tune Strain - Interfered, the stack count of Tune Strain - Interfered on the target is increased by 2. This effect ignores the max stack limit.",
            "buffs": [
              {
                "label": "Vulnerability",
                "trigger": "After casting Reunion of All the Fallen - Aureole of Execution: Ring DMG / Reunion of All the Fallen - Aureole of Execution: Breach DMG / Reunion of All the Fallen - Aureole of Execution: Glare DMG / Reunion of All the Fallen - Ichor Deposit DMG / Spark from the Frost - Gavel of Earthshaker DMG",
                "excerpt": "Vulnerability +30%"
              },
              {
                "label": "DMG Bonus",
                "trigger": "After casting Rewritten in Winter's Margins - Skill DMG",
                "excerpt": "DMG Bonus +40% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
