"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rover_havoc": {
        "name": "Rover: Havoc",
        "skills": [
          {
            "name": "Tuneslayer - Stage 1 DMG"
          },
          {
            "name": "Tuneslayer - Stage 2 DMG"
          },
          {
            "name": "Tuneslayer - Stage 3 DMG"
          },
          {
            "name": "Tuneslayer - Stage 4 DMG"
          },
          {
            "name": "Tuneslayer - Stage 5 DMG"
          },
          {
            "name": "Tuneslayer - Heavy Attack DMG"
          },
          {
            "name": "Tuneslayer - Mid-air Attack DMG"
          },
          {
            "name": "Tuneslayer - Dodge Counter DMG"
          },
          {
            "name": "Wingblade - Skill DMG"
          },
          {
            "name": "Deadening Abyss - Skill DMG"
          },
          {
            "name": "Instant of Annihilation - Skill DMG"
          },
          {
            "name": "Umbra Eclipse - Devastation Damage",
            "requiresResourceLabel": "Umbra full"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 1 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 2 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 3 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 4 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 5 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Heavy Attack DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Thwackblade Damage"
          },
          {
            "name": "Umbra Eclipse - Umbra: Plunging Attack DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Dodge Counter DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Lifetaker Damage"
          },
          {
            "name": "Soundweaver"
          }
        ],
        "resources": [
          {
            "label": "Umbra"
          }
        ],
        "combatStates": [
          {
            "label": "Dark Surge",
            "idLabel": "Dark Surge",
            "inactiveLabel": "Not in Dark Surge",
            "entry": "In the Dark Surge state, gain 20% Havoc DMG Bonus.",
            "effects": "In the Dark Surge state, gain 20% Havoc DMG Bonus.",
            "options": [
              {
                "label": "Dark Surge",
                "valueLabel": "Dark Surge"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Metamorph",
            "label": "Havoc DMG Bonus",
            "trigger": "In Dark Surge",
            "excerpt": "Havoc DMG Bonus +20%",
            "desc": "Havoc DMG Bonus +20%"
          }
        ],
        "chain": [
          {
            "name": "Cryptic Insight",
            "desc": "Resonance Skill DMG Bonus is increased by 30%.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Dark Surge",
                "excerpt": "Resonance Skill DMG Bonus +30%"
              }
            ]
          },
          {
            "name": "Waning Crescent",
            "desc": "Reset Resonance Skill's Cooldown when Rover enters the Dark Surge state by casting Heavy Attack Devastation."
          },
          {
            "name": "Surging Resonance",
            "desc": "In the Dark Surge state, Basic Attack 5 restores HP equal to 10% of total HP lost on hit."
          },
          {
            "name": "Annihilated Silence",
            "desc": "Heavy Attack Devastation and Resonance Liberation Deadening Abyss reduces enemy's Havoc RES by 10% for 20s on hit.",
            "buffs": [
              {
                "label": "RES Shred",
                "trigger": "In Dark Surge",
                "excerpt": "RES Shred +10%"
              }
            ]
          },
          {
            "name": "Aeon Symphony",
            "desc": "In the Dark Surge state, Basic Attack 5 deals an additional Havoc DMG equal to 50% of Basic Attack 5 DMG.",
            "buffs": [
              {
                "label": "Umbra Eclipse - Umbra: Basic Attack Stage 5 DMG Extra Multiplier",
                "trigger": "In Dark Surge",
                "excerpt": "Umbra Eclipse - Umbra: Basic Attack Stage 5 DMG Extra Multiplier +50%"
              }
            ]
          },
          {
            "name": "Ebbing Undercurrent",
            "desc": "In the Dark Surge state, Rover's Crit. Rate is increased by 25%.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Dark Surge",
                "excerpt": "Crit. Rate +25%"
              }
            ]
          }
        ]
      }
    }
  }
});
