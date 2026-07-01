"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "cantarella": {
        "name": "Cantarella",
        "skills": [
          {
            "name": "Illusion Collapse - Stage 1 DMG"
          },
          {
            "name": "Illusion Collapse - Stage 2 DMG"
          },
          {
            "name": "Illusion Collapse - Stage 3 DMG"
          },
          {
            "name": "Illusion Collapse - Heavy Attack DMG"
          },
          {
            "name": "Illusion Collapse - Delusive Dive DMG"
          },
          {
            "name": "Illusion Collapse - Mid-air Attack DMG"
          },
          {
            "name": "Illusion Collapse - Dodge Counter DMG"
          },
          {
            "name": "Dance with Shadows - Graceful Step DMG"
          },
          {
            "name": "Dance with Shadows - Flickering Reverie DMG"
          },
          {
            "name": "Dance with Shadows - Jolt DMG"
          },
          {
            "name": "Beneath the Sea - Flowing Suffocation DMG"
          },
          {
            "name": "Beneath the Sea - Diffusion DMG"
          },
          {
            "name": "Cruise - Ripple DMG"
          },
          {
            "name": "Cruise - Tidal Surge DMG"
          },
          {
            "name": "Between Illusion and Reality - Phantom Sting Stage 1 DMG"
          },
          {
            "name": "Between Illusion and Reality - Phantom Sting Stage 2 DMG"
          },
          {
            "name": "Between Illusion and Reality - Phantom Sting Stage 3 DMG"
          },
          {
            "name": "Between Illusion and Reality - Abysmal Vortex DMG"
          },
          {
            "name": "Between Illusion and Reality - Perception Drain DMG",
            "requiresResourceLabel": "Shiver at least 3"
          },
          {
            "name": "Between Illusion and Reality - Shadowy Sweep DMG"
          }
        ],
        "resources": [
          {
            "label": "Shiver"
          }
        ],
        "combatStates": [
          {
            "label": "Mirage",
            "idLabel": "Mirage",
            "inactiveLabel": "Not in Mirage",
            "entry": "When Cantarella has Trance, Heavy Attack becomes Delusive Dive, dealing Havoc DMG to the target, and then Cantarella enters Mirage.",
            "effects": "When Cantarella has Trance, Heavy Attack becomes Delusive Dive, dealing Havoc DMG to the target, and then Cantarella enters Mirage.",
            "options": [
              {
                "label": "Mirage",
                "valueLabel": "Mirage"
              }
            ]
          },
          {
            "label": "Target Hazy Dream",
            "idLabel": "Hazy Dream",
            "inactiveLabel": "Not in Hazy Dream",
            "entry": "Attack the target, dealing Havoc DMG, and send them into Hazy Dream.",
            "effects": "Attack the target, dealing Havoc DMG, and send them into Hazy Dream.",
            "options": [
              {
                "label": "Hazy Dream",
                "valueLabel": "Hazy Dream"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: \"Cure\"",
            "label": "Healing Bonus",
            "trigger": "In Hazy Dream",
            "excerpt": "Healing Bonus +20%",
            "desc": "Healing Bonus +20%"
          },
          {
            "source": "Inherent Skill: \"Poison\"",
            "label": "Havoc DMG Bonus",
            "trigger": "After casting Echo Skill",
            "excerpt": "Havoc DMG Bonus +12% per stack",
            "desc": "Havoc DMG Bonus +12% per stack"
          },
          {
            "source": "Outro Skill: Gentle Tentacles",
            "label": "DMG Increase",
            "trigger": "In Hazy Dream",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Gentle Tentacles",
            "label": "Resonance Skill DMG Increase",
            "trigger": "In Hazy Dream",
            "excerpt": "Resonance Skill DMG Increase +25%",
            "desc": "Resonance Skill DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "Embrace the Endless Waves",
            "desc": "Casting Resonance Skill recovers 1 points of Trance. The DMG Multiplier of Resonance Skill Graceful Step, Resonance Skill Flickering Reverie, and Forte Circuit Perception Drain is increased by 50%. Immune to interruptions while casting Perception Drain.",
            "buffs": [
              {
                "label": "Dance with Shadows - Graceful Step DMG Multiplier Increase",
                "trigger": "In Hazy Dream",
                "excerpt": "Dance with Shadows - Graceful Step DMG Multiplier Increase +50%"
              }
            ]
          },
          {
            "name": "Surrender to the Illusive Reverie",
            "desc": "Resonance Liberation Flowing Suffocation now sends the target into Hazy Dream. The DMG Multiplier of Jolt triggered by Cantarella is increased by 245%.",
            "buffs": [
              {
                "label": "Dance with Shadows - Jolt DMG Multiplier Increase",
                "trigger": "In Hazy Dream",
                "excerpt": "Dance with Shadows - Jolt DMG Multiplier Increase +245%"
              }
            ]
          },
          {
            "name": "Gaze into the Abyss",
            "desc": "The DMG Multiplier of Resonance Liberation Flowing Suffocation is increased by 370%. After casting Resonance Liberation Flowing Suffocation, enter into Mirage. If already in Mirage, casting Resonance Liberation Flowing Suffocation does not activate the Mirage state again.",
            "buffs": [
              {
                "label": "Beneath the Sea - Flowing Suffocation DMG Multiplier Increase",
                "trigger": "In Hazy Dream",
                "excerpt": "Beneath the Sea - Flowing Suffocation DMG Multiplier Increase +370%"
              }
            ]
          },
          {
            "name": "Behold Your Own Soul",
            "desc": "When in Mirage, Healing Bonus is increased by 25%.",
            "buffs": [
              {
                "label": "Healing Bonus",
                "trigger": "In Mirage",
                "excerpt": "Healing Bonus +25%"
              }
            ]
          },
          {
            "name": "Rest in Your Reflection",
            "desc": "The maximum number of Dreamweavers Cantarella can summon through Resonance Liberation Diffusion is increased by 5.",
            "buffs": [
              {
                "label": "Beneath the Sea - Diffusion DMG Multiplier Increase",
                "trigger": "In Hazy Dream",
                "excerpt": "Beneath the Sea - Diffusion DMG Multiplier Increase +23.81%"
              }
            ]
          },
          {
            "name": "Fall, Fall... and Fall Deeper into the Dream",
            "desc": "Increase the DMG Multiplier of Basic Attack Phantom Sting by 80%. Casting Resonance Liberation Flowing Suffocation makes Cantarella's DMG ignore 30% of the target's DEF for 10s.\nFor the first 1.2s of Hazy Dream, when the target takes an instance of DMG that does not inflict Hazy Dream, Jolt will not be triggered on the target.",
            "buffs": [
              {
                "label": "Between Illusion and Reality - Phantom Sting Stage 1 DMG Multiplier Increase",
                "trigger": "In Hazy Dream",
                "excerpt": "Between Illusion and Reality - Phantom Sting Stage 1 DMG Multiplier Increase +80%"
              },
              {
                "label": "DEF Ignore",
                "trigger": "After casting Beneath the Sea - Flowing Suffocation DMG",
                "excerpt": "DEF Ignore +30%"
              }
            ]
          }
        ]
      }
    }
  }
});
