"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "xiangliyao": {
        "name": "Xiangli Yao",
        "skills": [
          {
            "name": "Probe - Stage 1 DMG"
          },
          {
            "name": "Probe - Stage 2 DMG"
          },
          {
            "name": "Probe - Stage 3 DMG"
          },
          {
            "name": "Probe - Stage 4 DMG"
          },
          {
            "name": "Probe - Stage 5 DMG"
          },
          {
            "name": "Probe - HA DMG"
          },
          {
            "name": "Probe - Mid-air Attack DMG"
          },
          {
            "name": "Probe - Dodge Counter DMG"
          },
          {
            "name": "Deduction - Skill DMG"
          },
          {
            "name": "Cogitation Model - Cogitation Model DMG"
          },
          {
            "name": "Cogitation Model - Pivot - Impale Stage 1 DMG"
          },
          {
            "name": "Cogitation Model - Pivot - Impale Stage 2 DMG"
          },
          {
            "name": "Cogitation Model - Pivot - Impale Stage 3 DMG"
          },
          {
            "name": "Cogitation Model - Divergence DMG"
          },
          {
            "name": "Cogitation Model - Unfathomed DMG"
          },
          {
            "name": "Forever Seeking - Decipher DMG",
            "requiresResourceLabel": "Capacity at least 100"
          },
          {
            "name": "Forever Seeking - Law of Reigns DMG",
            "requiresResourceLabel": "Performance Capacity at least 5"
          },
          {
            "name": "Forever Seeking - Revamp DMG",
            "requiresResourceLabel": "resource_gate_3"
          },
          {
            "name": "Principle - Skill DMG"
          }
        ],
        "resources": [
          {
            "label": "Capacity"
          },
          {
            "label": "Performance Capacity"
          }
        ],
        "combatStates": [
          {
            "label": "Intuition",
            "idLabel": "Intuition",
            "inactiveLabel": "Not in Intuition",
            "entry": "Enter Intuition.",
            "effects": "Enter Intuition.",
            "options": [
              {
                "label": "Intuition",
                "valueLabel": "Intuition"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Knowing",
            "label": "Electro DMG Bonus",
            "trigger": "In Intuition",
            "excerpt": "Electro DMG Bonus +5% per stack",
            "desc": "Electro DMG Bonus +5% per stack"
          }
        ],
        "chain": [
          {
            "name": "Prodigy of Protégés",
            "desc": "Resonance Skill Law of Reigns additionally launches 6 Convolution Matrices at enemies, each dealing Resonance Liberation DMG equal to 8% of the skill's DMG Multiplier.",
            "buffs": [
              {
                "label": "Forever Seeking - Law of Reigns DMG Multiplier Increase",
                "trigger": "In Intuition",
                "excerpt": "Forever Seeking - Law of Reigns DMG Multiplier Increase +48%"
              }
            ]
          },
          {
            "name": "Traces of Predecessors",
            "desc": "Casting Resonance Skill or Resonance Liberation Cogitation Model increases Crit. DMG by 30% for 8s.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After casting Cogitation Model - Cogitation Model DMG",
                "excerpt": "Crit. DMG +30%"
              }
            ]
          },
          {
            "name": "Ruins of Ancient",
            "desc": "Casting Resonance Liberation Cogitation Model increases the DMG of the following Resonance Skill moves by 63% for 24s:\nDecipher, Deduction, Divergence, and Law of Reigns.\nThis effect can be triggered up to 5 times.",
            "buffs": [
              {
                "label": "Forever Seeking - Decipher DMG Increase",
                "trigger": "After casting Forever Seeking - Decipher DMG / Deduction - Skill DMG / Cogitation Model - Divergence DMG / Forever Seeking - Law of Reigns DMG",
                "excerpt": "Forever Seeking - Decipher DMG Increase +63%"
              }
            ]
          },
          {
            "name": "Vessel of Rebirth",
            "desc": "Casting Resonance Liberation Cogitation Model grants a 25% DMG Bonus to all team members' Resonance Liberation for 30s.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "After casting Cogitation Model - Cogitation Model DMG",
                "excerpt": "Resonance Liberation DMG Bonus +25%"
              }
            ]
          },
          {
            "name": "End of Stars",
            "desc": "The DMG Multiplier of Outro Skill Chain Rule is increased by 222%. The DMG Multiplier of Resonance Liberation Cogitation Model is increased by 100%.",
            "buffs": [
              {
                "label": "Cogitation Model - Cogitation Model DMG Multiplier Increase",
                "trigger": "In Intuition",
                "excerpt": "Cogitation Model - Cogitation Model DMG Multiplier Increase +100%"
              }
            ]
          },
          {
            "name": "Solace of the Ordinary",
            "desc": "The Hypercubes obtained from Resonance Liberation Cogitation Model are enhanced, increasing the DMG Multiplier of Resonance Skill Law of Reigns by 76%.",
            "buffs": [
              {
                "label": "Forever Seeking - Law of Reigns DMG Multiplier Increase",
                "trigger": "In Intuition",
                "excerpt": "Forever Seeking - Law of Reigns DMG Multiplier Increase +76%"
              }
            ]
          }
        ]
      }
    }
  }
});
