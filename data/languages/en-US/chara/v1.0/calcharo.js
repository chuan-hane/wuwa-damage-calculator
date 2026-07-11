"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "calcharo": {
        "name": "Calcharo",
        "skills": [
          {
            "name": "Gnawing Fangs - Stage 1 DMG"
          },
          {
            "name": "Gnawing Fangs - Stage 2 DMG"
          },
          {
            "name": "Gnawing Fangs - Stage 3 DMG"
          },
          {
            "name": "Gnawing Fangs - Stage 4 DMG"
          },
          {
            "name": "Gnawing Fangs - Heavy Attack DMG"
          },
          {
            "name": "Gnawing Fangs - Mid-air Attack DMG"
          },
          {
            "name": "Gnawing Fangs - Dodge Counter DMG"
          },
          {
            "name": "Extermination Order - Extermination Order Stage 1 DMG"
          },
          {
            "name": "Extermination Order - Extermination Order Stage 2 DMG"
          },
          {
            "name": "Extermination Order - Extermination Order Stage 3 DMG"
          },
          {
            "name": "Phantom Etching - Skill DMG"
          },
          {
            "name": "Phantom Etching - \"Necessary Means\" Damage"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 1"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 2"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 3"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 4"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 5"
          },
          {
            "name": "Phantom Etching - Heavy Attack DMG"
          },
          {
            "name": "Phantom Etching - Dodge Counter DMG"
          },
          {
            "name": "Wanted Outlaw - Skill DMG"
          },
          {
            "name": "Hunting Mission - \"Mercy\" Damage",
            "requiresResourceLabel": "Cruelty at least 3"
          },
          {
            "name": "Hunting Mission - \"Death Messenger\" Damage",
            "requiresResourceLabel": "Killing Intent at least 5"
          },
          {
            "name": "The Ultimatum - Phantom Coordinated Attack DMG",
            "requiresResourceLabel": "resource_gate_3"
          },
          {
            "name": "Shadowy Raid"
          }
        ],
        "resources": [
          {
            "label": "Cruelty"
          },
          {
            "label": "Killing Intent"
          }
        ],
        "combatStates": [
          {
            "label": "Deathblade Gear",
            "idLabel": "Deathblade Gear",
            "inactiveLabel": "Not in Deathblade Gear",
            "entry": "Calcharo attacks the target, dealing Electro DMG and enters Deathblade Gear state.",
            "effects": "Calcharo attacks the target, dealing Electro DMG and enters Deathblade Gear state.",
            "options": [
              {
                "label": "Deathblade Gear",
                "valueLabel": "Deathblade Gear"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Bloodshed Awaken",
            "label": "Resonance Liberation DMG Bonus",
            "trigger": "After casting Hunting Mission - \"Mercy\" Damage",
            "excerpt": "Resonance Liberation DMG Bonus +10%",
            "desc": "Resonance Liberation DMG Bonus +10%"
          }
        ],
        "chain": [
          {
            "name": "Covert Negotiation",
            "desc": "When Resonance Skill Extermination Order hits a target, it additionally recovers 10 Resonance Energy. This can be triggered once every 20s."
          },
          {
            "name": "Zero-Sum Game",
            "desc": "After Calcharo casts Intro Skill Wanted Criminal or Intro Skill \"Necessary Means\", his Resonance Skill DMG Bonus is increased by 30% for 15s.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "After casting Wanted Outlaw - Skill DMG / Phantom Etching - \"Necessary Means\" Damage",
                "excerpt": "Resonance Skill DMG Bonus +30%"
              }
            ]
          },
          {
            "name": "Iron Fist Diplomacy",
            "desc": "During the Resonance Liberation Deathblade Gear state, Calcharo's Electro DMG Bonus is increased by 25%.",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "In Deathblade Gear",
                "excerpt": "Electro DMG Bonus +25%"
              }
            ]
          },
          {
            "name": "Dark Alliance",
            "desc": "After casting Outro Skill Shadowy Raid, Electro DMG Bonus of all team members is increased by 20% for 30s.",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "After casting Intro Skill",
                "excerpt": "Electro DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Unconventional Compact",
            "desc": "Intro Skill Wanted Criminal and Intro Skill \"Necessary Means\" deal 50% more DMG.",
            "buffs": [
              {
                "label": "Intro Skill DMG Bonus",
                "trigger": "In Deathblade Gear",
                "excerpt": "Intro Skill DMG Bonus +50%"
              }
            ]
          },
          {
            "name": "The Ultimatum",
            "desc": "When casting Resonance Liberation \"Death Messenger\", Calcharo will summon 2 Phantoms to perform Coordinated Attacks. Each Phantom deals Electro DMG equal to 100.00% of Calcharo's ATK, which is considered Resonance Liberation DMG."
          }
        ]
      }
    }
  }
});
