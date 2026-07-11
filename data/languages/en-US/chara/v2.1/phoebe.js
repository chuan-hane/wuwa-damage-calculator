"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "phoebe": {
        "name": "Phoebe",
        "skills": [
          {
            "name": "O Come Divine Light - Stage 1 DMG"
          },
          {
            "name": "O Come Divine Light - Stage 2 DMG"
          },
          {
            "name": "O Come Divine Light - Stage 3 DMG"
          },
          {
            "name": "O Come Divine Light - Heavy Attack DMG"
          },
          {
            "name": "O Come Divine Light - Mid-air Attack DMG"
          },
          {
            "name": "O Come Divine Light - Dodge Counter DMG"
          },
          {
            "name": "O Come Divine Light - Chamuel's Star: Dodge Counter DMG"
          },
          {
            "name": "To Where Light Shines - Skill DMG"
          },
          {
            "name": "To Where Light Shines - Ring of Mirrors: Refracted Holy Light DMG"
          },
          {
            "name": "To Where Light Shines - Chamuel's Star: Stage 1 DMG"
          },
          {
            "name": "To Where Light Shines - Chamuel's Star: Stage 2 DMG"
          },
          {
            "name": "To Where Light Shines - Chamuel's Star: Stage 3 DMG"
          },
          {
            "name": "Dawn of Enlightenment - Skill DMG"
          },
          {
            "name": "Dawn of Enlightenment - Skill DMG"
          },
          {
            "name": "Dawn of Enlightenment - Skill DMG"
          },
          {
            "name": "Golden Grace - Skill DMG"
          },
          {
            "name": "Radiant Invocation - Heavy Attack: Starflash DMG",
            "requiresResourceLabel": "Solace"
          },
          {
            "name": "Radiant Invocation - Heavy Attack: Starflash DMG",
            "requiresResourceLabel": "Solace"
          },
          {
            "name": "Radiant Invocation - Absolution Litany DMG",
            "requiresResourceLabel": "Prayer full"
          },
          {
            "name": "Radiant Invocation - Utter Confession DMG",
            "requiresResourceLabel": "Prayer full"
          },
          {
            "name": "Radiant Invocation - Heavy Attack: Starflash DMG"
          },
          {
            "name": "Radiant Invocation - Heavy Attack: Starflash DMG"
          },
          {
            "name": "Attentive Heart"
          },
          {
            "name": "Attentive Heart - Confession"
          }
        ],
        "resources": [
          {
            "label": "Solace"
          },
          {
            "label": "Prayer"
          }
        ],
        "combatStates": [
          {
            "label": "Absolution/Confession State",
            "idLabel": "Absolution/Confession State",
            "inactiveLabel": "Not in Absolution/Confession State",
            "entry": "Select the current Absolution/Confession State.",
            "effects": "Select the current Absolution/Confession State.",
            "options": [
              {
                "label": "Absolution State",
                "valueLabel": "Absolution State"
              },
              {
                "label": "Confession State",
                "valueLabel": "Confession State"
              }
            ]
          },
          {
            "label": "Ring of Mirrors Position",
            "idLabel": "Ring of Mirrors",
            "inactiveLabel": "Not in Ring of Mirrors",
            "entry": "- When Phoebe is inside the Ring of Mirrors, Dodge Counter becomes Chamuel's Star: Dodge Counter.",
            "effects": "- When Phoebe is inside the Ring of Mirrors, Dodge Counter becomes Chamuel's Star: Dodge Counter.",
            "options": [
              {
                "label": "Ring of Mirrors · Outside the Ring",
                "valueLabel": "Ring of Mirrors · Outside the Ring"
              },
              {
                "label": "Ring of Mirrors · Inside the Ring",
                "valueLabel": "Ring of Mirrors · Inside the Ring"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Revelation",
            "label": "Spectro DMG Bonus",
            "trigger": "In Absolution State",
            "excerpt": "Spectro DMG Bonus +12%",
            "desc": "Spectro DMG Bonus +12%"
          },
          {
            "source": "Resonance Liberation: Dawn of Enlightenment",
            "label": "Dawn of Enlightenment - Skill DMG Multiplier Increase",
            "trigger": "In Absolution State",
            "excerpt": "Dawn of Enlightenment - Skill DMG Multiplier Increase +255%",
            "desc": "When in Absolution, Resonance Liberation Dawn of Enlightenment now increases DMG Multiplier by 480% instead of 255%."
          },
          {
            "source": "Forte Circuit: Heavy Attack: Starflash",
            "label": "Radiant Invocation - Heavy Attack: Starflash DMG Increase",
            "trigger": "After casting Radiant Invocation - Heavy Attack: Starflash DMG / Radiant Invocation - Heavy Attack: Starflash DMG",
            "excerpt": "Radiant Invocation - Heavy Attack: Starflash DMG Increase +256%",
            "desc": "Heavy Attack: Starflash"
          },
          {
            "source": "Outro Skill: Attentive Heart",
            "label": "RES Shred",
            "trigger": "In Confession State",
            "excerpt": "RES Shred +10%",
            "desc": "RES Shred +10%"
          },
          {
            "source": "Outro Skill: Attentive Heart",
            "label": "DMG Increase",
            "trigger": "In Confession State",
            "excerpt": "DMG Increase +100%",
            "desc": "DMG Increase +100%"
          }
        ],
        "chain": [
          {
            "name": "Warm Light and Bedside Wishes",
            "desc": "When in Absolution, Resonance Liberation Dawn of Enlightenment now increases DMG Multiplier by 480% instead of 255%.\nWhen in Confession, Resonance Liberation Dawn of Enlightenment increases DMG Multiplier by 90% and applies Spectro Frazzle to the targets with the maximum stack the targets can receive.",
            "buffs": [
              {
                "label": "Dawn of Enlightenment - Skill DMG Multiplier Increase",
                "trigger": "In Absolution State",
                "excerpt": "Dawn of Enlightenment - Skill DMG Multiplier Increase +225%"
              },
              {
                "label": "Dawn of Enlightenment - Skill DMG Multiplier Increase",
                "trigger": "In Confession State",
                "excerpt": "Dawn of Enlightenment - Skill DMG Multiplier Increase +90%"
              }
            ]
          },
          {
            "name": "A Boat Adrift in Tears",
            "desc": "When in Absolution, DMG dealt by Outro Skills to targets with Spectro Frazzle is Amplified by 120%.\nWhen in Confession, Silent Prayer grants 120% more DMG Amplification for Spectro Frazzle.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "After casting Intro Skill",
                "excerpt": "DMG Increase +120%"
              },
              {
                "label": "Attentive Heart DMG Amplification",
                "trigger": "In Absolution against Spectro Frazzle",
                "excerpt": "Attentive Heart DMG Amplification +120%"
              }
            ]
          },
          {
            "name": "Daisy Wreaths and Dreams",
            "desc": "When in Absolution, the DMG Multiplier of Heavy Attack Starflash is increased by 91%.\nWhen in Confession, the DMG Multiplier of Heavy Attack Starflash is increased by 249%.",
            "buffs": [
              {
                "label": "Radiant Invocation - Heavy Attack: Starflash DMG Multiplier Increase",
                "trigger": "In Absolution State",
                "excerpt": "Radiant Invocation - Heavy Attack: Starflash DMG Multiplier Increase +91%"
              },
              {
                "label": "Radiant Invocation - Heavy Attack: Starflash DMG Multiplier Increase",
                "trigger": "In Confession State",
                "excerpt": "Radiant Invocation - Heavy Attack: Starflash DMG Multiplier Increase +249%"
              }
            ]
          },
          {
            "name": "Ringing Bells on Wings Aloft",
            "desc": "When Basic Attack, Basic Attack Chamuel's Star, Dodge Counter, or Chamuel's Star: Dodge Counter hits, the target's Spectro RES is reduced by 10% for 30s.",
            "buffs": [
              {
                "label": "RES Shred",
                "trigger": "In Ring of Mirrors · Inside the Ring",
                "excerpt": "RES Shred +10%"
              }
            ]
          },
          {
            "name": "Prayer to the Distant Light",
            "desc": "Casting Intro Skill Golden Grace increases Phoebe's Spectro DMG Bonus by 12% for 15s.",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "After casting Golden Grace - Skill DMG",
                "excerpt": "Spectro DMG Bonus +12%"
              }
            ]
          },
          {
            "name": "Whispering Chirps in Silence",
            "desc": "Targets entering the Ring of Mirrors are stagnated for an additional 2s. The stagnation effect affects all targets entering the Ring of Mirrors and can be applied to 12 targets max for each Ring of Mirrors. Each target will only be affected by this effect once.\nWhen in Absolution or Confession, summoning a Ring of Mirrors with Resonance Skill increases Phoebe's ATK by 10% for 20s, and triggers an extra Heavy Attack Starflash at the Ring of Mirrors' location. This Heavy Attack Starflash does not consume Divine Voice and is not considered as casting a Heavy Attack.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Absolution State",
                "excerpt": "ATK +10%"
              }
            ]
          }
        ]
      }
    }
  }
});
