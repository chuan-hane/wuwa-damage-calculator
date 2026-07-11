"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "sigrika": {
        "name": "Sigrika",
        "skills": [
          {
            "name": "One, Two, Three - Basic Attack Stage 1 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack Stage 2 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack Stage 3 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack Stage 4 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack - Elucidated DMG"
          },
          {
            "name": "One, Two, Three - Heavy Attack DMG"
          },
          {
            "name": "One, Two, Three - Mid-air Attack DMG"
          },
          {
            "name": "One, Two, Three - Dodge Counter DMG"
          },
          {
            "name": "One, Two, Three - Mid-air Dodge Counter DMG"
          },
          {
            "name": "One, Two, Three - Dodge Counter - Decipher DMG"
          },
          {
            "name": "Royan Close Quarters Combat - BOOMY BOOM! DMG"
          },
          {
            "name": "Royan Close Quarters Combat - BIG BOOMY BOOM! DMG"
          },
          {
            "name": "Royan Close Quarters Combat - Soliskin to the Aid DMG",
            "requiresResourceLabel": "Full Stop at least 50"
          },
          {
            "name": "Where Trust Leads Me! - Skill DMG"
          },
          {
            "name": "Solsworn Etymology - Skill DMG"
          },
          {
            "name": "Within Infinity's Embrace - Heavy Attack - Schemata of Runes DMG",
            "requiresResourceLabel": "Rune: Trust+Rune: Answer at least 2"
          },
          {
            "name": "Within Infinity's Embrace - Runic Outburst DMG",
            "requiresResourceLabel": "Rune: Trust at least 1 / Rune: Answer at least 1"
          },
          {
            "name": "Within Infinity's Embrace - Runic Chain Whip DMG",
            "requiresResourceLabel": "Rune: Trust at least 2"
          },
          {
            "name": "Within Infinity's Embrace - Runic Soliskin DMG",
            "requiresResourceLabel": "Rune: Answer at least 2"
          },
          {
            "name": "Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG",
            "requiresResourceLabel": "Full Stop full"
          }
        ],
        "resources": [
          {
            "label": "Full Stop"
          },
          {
            "label": "Soliskin Vitality"
          },
          {
            "label": "Rune: Trust"
          },
          {
            "label": "Rune: Answer"
          }
        ],
        "combatStates": [
          {
            "label": "Decipher",
            "idLabel": "Decipher",
            "inactiveLabel": "Not in Decipher",
            "entry": "Enter the Decipher state for 5s after casting Basic Attack Stage 4.",
            "effects": "Enter the Decipher state for 5s after casting Basic Attack Stage 4.",
            "options": [
              {
                "label": "Decipher",
                "valueLabel": "Decipher"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: True Names Aligned",
            "label": "Aero DMG Bonus",
            "trigger": "In Decipher",
            "excerpt": "Aero DMG Bonus +3% per stack",
            "desc": "Aero DMG Bonus +3% per stack"
          },
          {
            "source": "Inherent Skill: True Names Aligned",
            "label": "Echo Skill DMG Bonus",
            "trigger": "In Decipher",
            "excerpt": "Echo Skill DMG Bonus +3% per stack",
            "desc": "Echo Skill DMG Bonus +3% per stack"
          },
          {
            "source": "Inherent Skill: True Names Aligned",
            "label": "Aero DMG Bonus",
            "trigger": "In Decipher",
            "excerpt": "Aero DMG Bonus +30%",
            "desc": "Aero DMG Bonus +30%"
          },
          {
            "source": "Inherent Skill: True Names Aligned",
            "label": "Echo Skill DMG Bonus",
            "trigger": "In Decipher",
            "excerpt": "Echo Skill DMG Bonus +30%",
            "desc": "Echo Skill DMG Bonus +30%"
          },
          {
            "source": "Inherent Skill: True Names Aligned",
            "label": "Echo Skill DMG Bonus",
            "trigger": "In Decipher",
            "excerpt": "Echo Skill DMG Bonus based on Energy Regen, cap 50%",
            "desc": "Echo Skill DMG Bonus based on Energy Regen, cap 50%"
          },
          {
            "source": "Forte Circuit: Within Infinity's Embrace",
            "label": "Within Infinity's Embrace - Runic Outburst DMG Multiplier Increase",
            "trigger": "After casting Within Infinity's Embrace - Runic Outburst DMG / Within Infinity's Embrace - Runic Chain Whip DMG / Within Infinity's Embrace - Runic Soliskin DMG",
            "excerpt": "Within Infinity's Embrace - Runic Outburst DMG Multiplier Increase +50%",
            "desc": "Within Infinity's Embrace - Runic Outburst DMG Multiplier Increase +50%"
          },
          {
            "source": "Forte Circuit: Within Infinity's Embrace",
            "label": "Within Infinity's Embrace - Runic Outburst DMG Increase",
            "trigger": "After casting Within Infinity's Embrace - Runic Outburst DMG / Within Infinity's Embrace - Runic Chain Whip DMG / Within Infinity's Embrace - Runic Soliskin DMG",
            "excerpt": "Within Infinity's Embrace - Runic Outburst DMG Increase +15% per stack",
            "desc": "Within Infinity's Embrace - Runic Outburst DMG Increase +15% per stack"
          },
          {
            "source": "Forte Circuit: Within Infinity's Embrace",
            "label": "Within Infinity's Embrace - Runic Outburst DMG Increase",
            "trigger": "After casting Within Infinity's Embrace - Runic Outburst DMG / Within Infinity's Embrace - Runic Chain Whip DMG / Within Infinity's Embrace - Runic Soliskin DMG / Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG",
            "excerpt": "Within Infinity's Embrace - Runic Outburst DMG Increase +30% per stack",
            "desc": "Within Infinity's Embrace - Runic Outburst DMG Increase +30% per stack"
          }
        ],
        "chain": [
          {
            "name": "The Gleam Meant for Radiance",
            "desc": "The DMG Multipliers of Basic Attack - Elucidated, Dodge Counter - Decipher, Resonance Skill - BIG BOOMY BOOM!, and Resonance Skill - Soliskin to the Aid are increased by 70%.\nSigrika becomes immune to interruptions while casting Basic Attack - Elucidated, Resonance Skill - BIG BOOMY BOOM!, and Resonance Skill - Soliskin to the Aid.\nEncapsulated now stacks up to 3 times. After casting Outro Skill In This Very Moment, Sigrika obtains 1 additional stacks.",
            "buffs": [
              {
                "label": "One, Two, Three - Basic Attack - Elucidated DMG Multiplier Increase",
                "trigger": "In Decipher",
                "excerpt": "One, Two, Three - Basic Attack - Elucidated DMG Multiplier Increase +70%"
              }
            ]
          },
          {
            "name": "The Bitterness Steeped in Hope",
            "desc": "The DMG Multiplier of Forte Circuit - Learn My True Name is increased by 120%.\nWhen not in combat for over 4s, Sigrika gains Divergent. This effect is active for up to 1 time every 4s.",
            "buffs": [
              {
                "label": "Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG Multiplier Increase",
                "trigger": "In Decipher",
                "excerpt": "Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "I Flee, Yet I Seek",
            "desc": "Innate Gift? now stacks up to 4 times and is no longer removed after Sigrika casts Forte Circuit - Learn My True Name or is switched off the field.\nWhen not in combat, all Innate Gift? stacks are removed every 30s."
          },
          {
            "name": "I Lose, Yet I Gain",
            "desc": "When a Resonator in the team casts Echo Skill, all Resonators in the team gain an 20% ATK increase for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Decipher",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Until Submerged by the Dark",
            "desc": "The DMG Multiplier of Resonance Liberation Where Trust Leads Me! is increased by 30%.",
            "buffs": [
              {
                "label": "Where Trust Leads Me! - Skill DMG Multiplier Increase",
                "trigger": "In Decipher",
                "excerpt": "Where Trust Leads Me! - Skill DMG Multiplier Increase +30%"
              }
            ]
          },
          {
            "name": "True Names Resurfaced, Rising in Light",
            "desc": "Targets take 30% more DMG from Sigrika.\nInnate Gift? gains following effects:\n- Each stack additionally grants Runic Outburst, Runic Chain Whip, Runic Soliskin, and Forte Circuit - Learn My True Name 15% DMG Amplification, up to 60%.\n- Each stack causes Runic Outburst, Runic Chain Whip, Runic Soliskin, and Forte Circuit - Learn My True Name to ignore 7.5% of the target's DEF when dealing damage, up to 30%.",
            "buffs": [
              {
                "label": "Vulnerability",
                "trigger": "In Decipher",
                "excerpt": "Vulnerability +30%"
              },
              {
                "label": "Within Infinity's Embrace - Runic Outburst DMG Increase",
                "trigger": "After casting Within Infinity's Embrace - Runic Outburst DMG / Within Infinity's Embrace - Runic Chain Whip DMG / Within Infinity's Embrace - Runic Soliskin DMG / Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG",
                "excerpt": "Within Infinity's Embrace - Runic Outburst DMG Increase +15% per stack"
              },
              {
                "label": "DEF Ignore",
                "trigger": "After casting Within Infinity's Embrace - Runic Outburst DMG / Within Infinity's Embrace - Runic Chain Whip DMG / Within Infinity's Embrace - Runic Soliskin DMG / Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG",
                "excerpt": "DEF Ignore +7.5% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
