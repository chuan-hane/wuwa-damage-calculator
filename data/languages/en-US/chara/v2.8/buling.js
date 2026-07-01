"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "buling": {
        "name": "Buling",
        "skills": [
          {
            "name": "Hexagram Calls, Lightning Falls - Stage 1 DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Stage 2 DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Stage 3 DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Stage 4 DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Heavy Attack - Mountain Over Thunder DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Heavy Attack - Thunder Over Mountain DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Mid-air Attack DMG"
          },
          {
            "name": "Hexagram Calls, Lightning Falls - Dodge Counter DMG"
          },
          {
            "name": "In Shadow Thunder Stirs - Thunder Talisman DMG"
          },
          {
            "name": "In Shadow Thunder Stirs - Pull-in Effect Continuous DMG"
          },
          {
            "name": "Flashing Thunder Spell - Flashing Thunder Spell DMG"
          },
          {
            "name": "Summon and Smite - Skill DMG"
          },
          {
            "name": "Thunder Begets Life - Flashing Thunder Spell - Harmony DMG",
            "requiresResourceLabel": "Minor Yin at least 1 / Minor Yang at least 1"
          },
          {
            "name": "Thunder Begets Life - Five Thunders Spell Array Continuous DMG",
            "requiresResourceLabel": "resource_gate_2"
          }
        ],
        "resources": [
          {
            "label": "Minor Yin"
          },
          {
            "label": "Minor Yang"
          }
        ],
        "combatStates": [
          {
            "label": "Thunder Spell State",
            "idLabel": "Thunder Spell",
            "inactiveLabel": "Not in Thunder Spell",
            "entry": "When Buling obtains Minor Yin and Minor Yang, she enters the Yin-Yang Balance state, replacing her Resonance Liberation - Flashing Thunder Spell with Resonance Liberation - Flashing Thunder Spell: Harmony.",
            "effects": "When Buling obtains Minor Yin and Minor Yang, she enters the Yin-Yang Balance state, replacing her Resonance Liberation - Flashing Thunder Spell with Resonance Liberation - Flashing Thunder Spell: Harmony.",
            "options": [
              {
                "label": "Thunder Spell · Primordial Qi",
                "valueLabel": "Thunder Spell · Primordial Qi"
              },
              {
                "label": "Thunder Spell · Yin and Yang",
                "valueLabel": "Thunder Spell · Yin and Yang"
              },
              {
                "label": "Thunder Spell - Heaven, Earth, Mind",
                "valueLabel": "Thunder Spell - Heaven, Earth, Mind"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Time Arrives, Evil Declines",
            "label": "Healing Bonus",
            "trigger": "In Thunder Spell - Heaven, Earth, Mind",
            "excerpt": "Healing Bonus +25%",
            "desc": "Healing Bonus +25%"
          },
          {
            "source": "Forte Circuit: Thunder Begets Life",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "In Thunder Spell · Yin and Yang",
            "excerpt": "Resonance Skill DMG Bonus +10%",
            "desc": "Resonance Skill DMG Bonus +10%"
          },
          {
            "source": "Forte Circuit: Thunder Begets Life",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "In Thunder Spell - Heaven, Earth, Mind",
            "excerpt": "Resonance Skill DMG Bonus +25%",
            "desc": "Resonance Skill DMG Bonus +25%"
          },
          {
            "source": "Outro Skill: Exorcism Spell",
            "label": "DMG Increase",
            "trigger": "In Thunder Spell - Heaven, Earth, Mind",
            "excerpt": "DMG Increase +15%",
            "desc": "DMG Increase +15%"
          }
        ],
        "chain": [
          {
            "name": "Exorcist Gadgets, Lend Me Your Power",
            "desc": "The Crit. Rate of Resonance Liberation - Flashing Thunder Spell: Harmony is increased by 20% upon dealing damage.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Thunder Spell - Heaven, Earth, Mind",
                "excerpt": "Crit. Rate +20%"
              }
            ]
          },
          {
            "name": "Talisman Burns, Spirits Turn",
            "desc": "Buling restores 25 points of Resonance Energy when she enters the Yin-Yang Balance state. This effect is triggered once every 24s."
          },
          {
            "name": "Summoner of Spirits, Seeker of Fate",
            "desc": "While Five Thunders Spell Array lasts, whenever the HP of Resonators in the team drops below 50%, immediately restore their HP by 350+150% of Buling's ATK. This effect can be triggered once every 24s."
          },
          {
            "name": "Wanderer of Solaris, Blessed by Fortune",
            "desc": "Buling gains 20% Healing Bonus.",
            "buffs": [
              {
                "label": "Healing Bonus",
                "trigger": "In Thunder Spell - Heaven, Earth, Mind",
                "excerpt": "Healing Bonus +20%"
              }
            ]
          },
          {
            "name": "Forum Ban? New Account!",
            "desc": "Five Thunders Spell Array instantly inflicts another 6 stacks of Electro Flare on all targets within its range upon generation."
          },
          {
            "name": "\"Almighty Forum Lord of Thunder Spell\"",
            "desc": "The Thunder Spell - Heaven, Earth, Mind state now grants 50% Resonance Skill DMG Bonus to the active Resonator in the team.",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "In Thunder Spell - Heaven, Earth, Mind",
                "excerpt": "Resonance Skill DMG Bonus +25%"
              }
            ]
          }
        ]
      }
    }
  }
});
