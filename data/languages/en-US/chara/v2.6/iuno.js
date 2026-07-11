"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "iuno": {
        "name": "Iuno",
        "skills": [
          {
            "name": "Moon Steps - Moonring - Basic Attack 1 DMG"
          },
          {
            "name": "Moon Steps - Moonring - Basic Attack 2 DMG"
          },
          {
            "name": "Moon Steps - Moonring - Basic Attack 3 DMG"
          },
          {
            "name": "Moon Steps - Mid-air Attack"
          },
          {
            "name": "Moon Steps - Moonring - Dodge Counter"
          },
          {
            "name": "Moon Steps - Moonbow - Basic Attack 1 DMG"
          },
          {
            "name": "Moon Steps - Moonbow - Basic Attack 2 DMG"
          },
          {
            "name": "Moon Steps - Moonbow - Basic Attack 3 DMG"
          },
          {
            "name": "Moon Steps - Moonbow - Dodge Counter DMG"
          },
          {
            "name": "Foresight Fugue - Pulse of Origins DMG"
          },
          {
            "name": "Foresight Fugue - Closing Refrain DMG"
          },
          {
            "name": "Foresight Fugue - Unfinished Refrain DMG"
          },
          {
            "name": "Foresight Fugue - Arc Beyond the Edge DMG"
          },
          {
            "name": "Beneath Lunar Tides - Skill DMG"
          },
          {
            "name": "Illuminated Manifestation - Skill DMG"
          },
          {
            "name": "Ebb and Flow - Flux - Moonbow DMG"
          },
          {
            "name": "Ebb and Flow - Flux - Moonring DMG"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Basic Attack 1 DMG",
            "requiresResourceLabel": "Sentience"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Basic Attack 2 DMG",
            "requiresResourceLabel": "Sentience"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Basic Attack 3 DMG",
            "requiresResourceLabel": "Sentience"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Dodge Counter DMG",
            "requiresResourceLabel": "Sentience"
          },
          {
            "name": "Ebb and Flow - Enhanced Arc Beyond the Edge DMG",
            "requiresResourceLabel": "Sentience"
          },
          {
            "name": "Ebb and Flow - Absolute Fullness DMG"
          }
        ],
        "resources": [
          {
            "label": "Sentience"
          }
        ],
        "combatStates": [
          {
            "label": "Lunar Cycle",
            "idLabel": "Lunar Cycle",
            "inactiveLabel": "Not in Lunar Cycle",
            "entry": "Enter Lunar Cycle - New Moon by casting Heavy Attack - Flux: Moonring.",
            "effects": "Enter Lunar Cycle - New Moon by casting Heavy Attack - Flux: Moonring.",
            "options": [
              {
                "label": "Lunar Cycle - Half Moon",
                "valueLabel": "Lunar Cycle - Half Moon"
              },
              {
                "label": "Lunar Cycle - New Moon",
                "valueLabel": "Lunar Cycle - New Moon"
              }
            ]
          },
          {
            "label": "Full Moon Domain",
            "idLabel": "Full Moon Domain",
            "inactiveLabel": "Not in Full Moon Domain",
            "entry": "Full Moon Domain",
            "effects": "Full Moon Domain",
            "options": [
              {
                "label": "Full Moon Domain",
                "valueLabel": "Full Moon Domain"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Outro Skill: Iuno",
            "label": "Heavy Attack DMG Increase",
            "trigger": "In Full Moon Domain",
            "excerpt": "Heavy Attack DMG Increase +50%",
            "desc": "When in this state, Iuno will attack with Moonbow."
          },
          {
            "source": "Forte Circuit: Full Moon Domain / Inherent Skill: Derivation",
            "label": "DMG Increase",
            "trigger": "In Full Moon Domain",
            "excerpt": "DMG Increase +4% per stack",
            "desc": "DMG Increase +4% per stack"
          }
        ],
        "chain": [
          {
            "name": "Wax or Wane, All Gild the Bough",
            "desc": "When Iuno is in Lunar Cycle, her ATK is increased by 40%.\nWhen Iuno is inside the Full Moon Domain, she additionally restores 1 point of Resonance Energy per second.\nResonance Skill - Arc Beyond the Edge and Heavy Attack - Absolute Fullness become immune to interruption.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Lunar Cycle",
                "excerpt": "ATK +40%"
              }
            ]
          },
          {
            "name": "Day or Night, Let This Be Eternal",
            "desc": "Resonators in the team with 10 stacks of Blessing of the Wan Light gain an additional 40% all DMG Amplification.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "In Full Moon Domain",
                "excerpt": "DMG Increase +40%"
              }
            ]
          },
          {
            "name": "I Drink Deep of Their Forgetting",
            "desc": "When Iuno is in Lunar Cycle, DMG dealt by Moonbow - Basic Attack, Resonance Skill - Arc Beyond the Edge, and Moonbow - Dodge Counter is Amplified by 65%.\nWithin a certain period after performing Moonbow - Basic Attack or Moonbow - Dodge Counter, casting Resonance Skill - Arc Beyond the Edge does not reset the cycle of Moonbow - Basic Attack.",
            "buffs": [
              {
                "label": "Moon Steps - Moonbow - Basic Attack 1 DMG Increase",
                "trigger": "In Lunar Cycle",
                "excerpt": "Moon Steps - Moonbow - Basic Attack 1 DMG Increase +65%"
              }
            ]
          },
          {
            "name": "Rainy Season Dwell in My Eyes",
            "desc": "Casting Heavy Attack - Absolute Fullness grants a Shield equal to 160% of Iuno's ATK to all Resonators in the team for 30s, which cannot be passed on to the incoming Resonator."
          },
          {
            "name": "A Thousand Futile Glimpses",
            "desc": "Iuno gains 20% Resonance Liberation DMG Bonus.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "In Full Moon Domain",
                "excerpt": "Resonance Liberation DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "I Am the Constant in the Chaos",
            "desc": "The DMG Multiplier of Heavy Attack - Absolute Fullness is increased by 1600%. Upon casting this skill, Iuno re-enters Lunar Cycle - New Moon, gains 100 points of Sentience, and resets all the cooldown of Resonance Skill - Arc Beyond the Edge.",
            "buffs": [
              {
                "label": "Ebb and Flow - Absolute Fullness DMG Multiplier Increase",
                "trigger": "In Full Moon Domain",
                "excerpt": "Ebb and Flow - Absolute Fullness DMG Multiplier Increase +1600%"
              }
            ]
          }
        ]
      }
    }
  }
});
