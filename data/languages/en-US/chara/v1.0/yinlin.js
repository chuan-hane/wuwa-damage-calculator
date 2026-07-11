"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "yinlin": {
        "name": "Yinlin",
        "skills": [
          {
            "name": "Zapstring's Dance - Stage 1 DMG"
          },
          {
            "name": "Zapstring's Dance - Stage 2 DMG"
          },
          {
            "name": "Zapstring's Dance - Stage 3 DMG"
          },
          {
            "name": "Zapstring's Dance - Stage 4 DMG"
          },
          {
            "name": "Zapstring's Dance - Heavy Attack DMG"
          },
          {
            "name": "Zapstring's Dance - Mid-air Attack DMG"
          },
          {
            "name": "Zapstring's Dance - Dodge Counter DMG"
          },
          {
            "name": "Magnetic Roar - Magnetic Roar Damage"
          },
          {
            "name": "Magnetic Roar - Lightning Execution Damage"
          },
          {
            "name": "Magnetic Roar - Electromagnetic Blast Damage"
          },
          {
            "name": "Thundering Wrath - Skill DMG"
          },
          {
            "name": "Raging Storm - Skill DMG"
          },
          {
            "name": "Chameleon Cipher - Chameleon Cipher Damage",
            "requiresResourceLabel": "Judgement Point(s) at least 100"
          },
          {
            "name": "Chameleon Cipher - Judgment Strike Damage"
          },
          {
            "name": "Judgement Strike - Up to 4 Triggers",
            "stackLabel": "Additional Triggers",
            "requiresResourceLabel": "Within 30s after casting Thundering Wrath"
          }
        ],
        "resources": [
          {
            "label": "Judgement Point(s)"
          }
        ],
        "combatStates": [
          {
            "label": "Execution Mode",
            "idLabel": "Execution Mode",
            "inactiveLabel": "Not in Execution Mode",
            "entry": "The puppet \"Zapstring\" deals Electro DMG to the target, and puts Yinlin in Resonance Skill Execution Mode.",
            "effects": "The puppet \"Zapstring\" deals Electro DMG to the target, and puts Yinlin in Resonance Skill Execution Mode.",
            "options": [
              {
                "label": "Execution Mode",
                "valueLabel": "Execution Mode"
              }
            ]
          },
          {
            "label": "Target Mark",
            "idLabel": "Target Mark",
            "inactiveLabel": "Not in Target Mark",
            "entry": "Select the current Target Mark.",
            "effects": "Select the current Target Mark.",
            "options": [
              {
                "label": "Target Mark · Sinner's Mark",
                "valueLabel": "Target Mark · Sinner's Mark"
              },
              {
                "label": "Target Mark · Punishment Mark",
                "valueLabel": "Target Mark · Punishment Mark"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Pain Immersion",
            "label": "Crit. Rate",
            "trigger": "In Target Mark · Punishment Mark",
            "excerpt": "Crit. Rate +15%",
            "desc": "Crit. Rate +15%"
          },
          {
            "source": "Inherent Skill: Deadly Focus",
            "label": "Magnetic Roar - Lightning Execution Damage DMG Increase",
            "trigger": "In Target Mark · Sinner's Mark",
            "excerpt": "Magnetic Roar - Lightning Execution Damage DMG Increase +10%",
            "desc": "Magnetic Roar - Lightning Execution Damage DMG Increase +10%"
          },
          {
            "source": "Inherent Skill: Deadly Focus",
            "label": "ATK",
            "trigger": "In Target Mark · Punishment Mark",
            "excerpt": "ATK +10%",
            "desc": "ATK +10%"
          },
          {
            "source": "Outro Skill: Strategist",
            "label": "DMG Increase",
            "trigger": "In Target Mark · Punishment Mark",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Strategist",
            "label": "Resonance Liberation DMG Increase",
            "trigger": "In Target Mark · Punishment Mark",
            "excerpt": "Resonance Liberation DMG Increase +25%",
            "desc": "Resonance Liberation DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "Morality's Crossroads",
            "desc": "Resonance Skill Magnetic Roar and Lightning Execution deal 70% more DMG.",
            "buffs": [
              {
                "label": "Magnetic Roar - Magnetic Roar Damage DMG Increase",
                "trigger": "In Target Mark · Punishment Mark",
                "excerpt": "Magnetic Roar - Magnetic Roar Damage DMG Increase +70%"
              }
            ]
          },
          {
            "name": "Ensnarled by Rapport",
            "desc": "Resonance Skill Electromagnetic Blast recovers an additional 5 Judgement Point(s) and 5 Resonance Energy on hit."
          },
          {
            "name": "Unyielding Verdict",
            "desc": "Forte Circuit Judgment Strike's DMG multiplier is increased by 55%.",
            "buffs": [
              {
                "label": "Chameleon Cipher - Judgment Strike Damage DMG Multiplier Increase",
                "trigger": "In Target Mark · Punishment Mark",
                "excerpt": "Chameleon Cipher - Judgment Strike Damage DMG Multiplier Increase +55%"
              }
            ]
          },
          {
            "name": "Steadfast Conviction",
            "desc": "When Forte Circuit Judgment Strike hits a target, the ATK of all team members is increased by 20% for 12s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Target Mark · Punishment Mark",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Resounding Will",
            "desc": "Resonance Liberation Thundering Wrath deals 100% extra DMG to targets with Forte Circuit's Sinner's Mark or Punishment Mark.",
            "buffs": [
              {
                "label": "Thundering Wrath - Skill DMG Increase",
                "trigger": "In Target Mark · Sinner's Mark",
                "excerpt": "Thundering Wrath - Skill DMG Increase +100%"
              }
            ]
          },
          {
            "name": "Pursuit of Justice",
            "desc": "In the first 30s after casting Resonance Liberation Thundering Wrath, when Yinlin's Basic Attack hits a target, Furious Thunder will be triggered, dealing Electro DMG equal to 419.59% of Yinlin's ATK. Every Basic Attack hit can trigger Furious Thunder 1 time, up to 4 times. This is considered Resonance Skill DMG."
          }
        ]
      }
    }
  }
});
