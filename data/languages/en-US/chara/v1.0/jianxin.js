"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jianxin": {
        "name": "Jianxin",
        "skills": [
          {
            "name": "Fengyiquan - Stage 1 DMG"
          },
          {
            "name": "Fengyiquan - Stage 2 DMG"
          },
          {
            "name": "Fengyiquan - Stage 3 DMG"
          },
          {
            "name": "Fengyiquan - Stage 4 DMG"
          },
          {
            "name": "Fengyiquan - Heavy Attack DMG"
          },
          {
            "name": "Fengyiquan - Mid-air Attack DMG"
          },
          {
            "name": "Fengyiquan - Dodge Counter DMG"
          },
          {
            "name": "Calming Air - Chi Counter Damage"
          },
          {
            "name": "Calming Air - Chi Parry Damage"
          },
          {
            "name": "Primordial Chi Spiral - Pushing Punch Damage",
            "requiresResourceLabel": "Chi at least 120"
          },
          {
            "name": "Primordial Chi Spiral - Zhoutian Progress Continuous Damage",
            "requiresResourceLabel": "Chi at least 120"
          },
          {
            "name": "Primordial Chi Spiral - Minor Zhoutian Shock Damage",
            "requiresResourceLabel": "Chi at least 120"
          },
          {
            "name": "Primordial Chi Spiral - Major Zhoutian: Inner Shock Damage",
            "requiresResourceLabel": "Chi at least 120"
          },
          {
            "name": "Primordial Chi Spiral - Major Zhoutian: Outer Shock Damage",
            "requiresResourceLabel": "Chi at least 120"
          },
          {
            "name": "Primordial Chi Spiral - Yielding Pull Damage",
            "requiresResourceLabel": "Chi at least 120"
          },
          {
            "name": "Purification Force Field - Resonance Liberation Continuous Damage"
          },
          {
            "name": "Purification Force Field - Resonance Liberation Explosion Damage"
          },
          {
            "name": "Calming Air - Special Chi Counter Damage",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Essence of Tao - Skill DMG"
          }
        ],
        "resources": [
          {
            "label": "Chi"
          }
        ],
        "combatStates": [
          {
            "label": "Zhoutian Progress",
            "idLabel": "Zhoutian Progress",
            "inactiveLabel": "Not in Zhoutian Progress",
            "entry": "When \"Chi\" reaches max stacks, hold Basic Attack to cast Primordial Chi Spiral and start Zhoutian Progress.",
            "effects": "When \"Chi\" reaches max stacks, hold Basic Attack to cast Primordial Chi Spiral and start Zhoutian Progress.",
            "options": [
              {
                "label": "Zhoutian Progress · Before Minor Zhoutian",
                "valueLabel": "Zhoutian Progress · Before Minor Zhoutian"
              },
              {
                "label": "Zhoutian Progress · Minor Zhoutian",
                "valueLabel": "Zhoutian Progress · Minor Zhoutian"
              },
              {
                "label": "Zhoutian Progress · Major Zhoutian · Inner",
                "valueLabel": "Zhoutian Progress · Major Zhoutian · Inner"
              },
              {
                "label": "Zhoutian Progress · Major Zhoutian · Outer",
                "valueLabel": "Zhoutian Progress · Major Zhoutian · Outer"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Formless Release",
            "label": "Resonance Liberation DMG Bonus",
            "trigger": "In Zhoutian Progress · Major Zhoutian · Outer",
            "excerpt": "Resonance Liberation DMG Bonus +20%",
            "desc": "Resonance Liberation DMG Bonus +20%"
          },
          {
            "source": "Outro Skill: Transcendence",
            "label": "Resonance Liberation DMG Increase",
            "trigger": "In Zhoutian Progress · Major Zhoutian · Outer",
            "excerpt": "Resonance Liberation DMG Increase +38%",
            "desc": "Resonance Liberation DMG Increase +38%"
          }
        ],
        "chain": [
          {
            "name": "Verdant Branchlet",
            "desc": "After casting Intro Skill Essence of Tao, Jianxin gains 100% extra Chi from Basic Attacks for 10s."
          },
          {
            "name": "Tao Seeker's Journey",
            "desc": "Resonance Skill Calming Air can be used 1 more time."
          },
          {
            "name": "Principles of Wuwei",
            "desc": "After staying in the Parry Stance of Resonance Skill Calming Air for 2.5s, Resonance Skill Chi Counter becomes immediately available."
          },
          {
            "name": "Multitide Reflection",
            "desc": "When performing Forte Circuit Heavy Attack: Primordial Chi Spiral, Jianxin's Resonance Liberation Purification Force Field DMG is increased by 80% for 14s.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "After casting Purification Force Field - Resonance Liberation Continuous Damage / Purification Force Field - Resonance Liberation Explosion Damage",
                "excerpt": "Resonance Liberation DMG Bonus +80%"
              }
            ]
          },
          {
            "name": "Mirroring Introspection",
            "desc": "The range of Resonance Liberation Purification Force Field is increased by 33%."
          },
          {
            "name": "Truth from Within",
            "desc": "During Forte Circuit Heavy Attack: Primordial Qi Spiral, if Jianxin performs Pushing Punch, enhanced Resonance Skill Special Chi Counter can be used 1 time(s) in 5s. Special Chi Counter: Deals Aero DMG equal to 556.67% of Jianxin's ATK, considered as Heavy Attack DMG. Obtain a Zhoutian Progress 4 Shield (Benefits from Inherent Skill Reflection's bonus effect.)"
          }
        ]
      }
    }
  }
});
