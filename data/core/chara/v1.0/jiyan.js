WUWA.register({
  "id": "jiyan",
  "aliases": [],
  "debut": 1,
  "element": "aero",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "verdant_summit",
  "portrait": "",
  "base": {
    "hp": 10487,
    "attack": 437,
    "defense": 1185,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "resolve",
      "max": 60,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.16,
      "formula": "73.16%",
      "multiplierByLevel": [36.8,39.81,42.83,47.05,50.07,53.54,58.37,63.2,68.03,73.16]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 43.73,
      "formula": "43.73%",
      "multiplierByLevel": [22,23.8,25.6,28.13,29.93,32.01,34.89,37.78,40.67,43.73]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 181.9,
      "formula": "36.38% × 5",
      "multiplierByLevel": [91.5,99,106.5,117,124.5,133.1,145.1,157.15,169.15,181.9],
      "segmentsByLevel": [[[18.3,5]],[[19.8,5]],[[21.3,5]],[[23.4,5]],[[24.9,5]],[[26.62,5]],[[29.02,5]],[[31.43,5]],[[33.83,5]],[[36.38,5]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.4,
      "formula": "66.20% × 2",
      "multiplierByLevel": [66.6,72.06,77.52,85.16,90.62,96.9,105.64,114.38,123.12,132.4],
      "segmentsByLevel": [[[33.3,2]],[[36.03,2]],[[38.76,2]],[[42.58,2]],[[45.31,2]],[[48.45,2]],[[52.82,2]],[[57.19,2]],[[61.56,2]],[[66.2,2]]]
    },
    {
      "id": "na5",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 472.1,
      "formula": "23.60% × 7 + 153.45% × 2",
      "multiplierByLevel": [237.45,256.9,276.42,303.66,323.11,345.51,376.69,407.85,439.03,472.1],
      "segmentsByLevel": [[[11.87,7],[77.18,2]],[[12.84,7],[83.51,2]],[[13.82,7],[89.84,2]],[[15.18,7],[98.7,2]],[[16.15,7],[105.03,2]],[[17.27,7],[112.31,2]],[[18.83,7],[122.44,2]],[[20.39,7],[132.56,2]],[[21.95,7],[142.69,2]],[[23.6,7],[153.45,2]]]
    },
    {
      "id": "ha",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 133.2,
      "formula": "22.20% × 6",
      "multiplierByLevel": [66.96,72.48,77.94,85.62,91.14,97.44,106.26,115.02,123.84,133.2],
      "segmentsByLevel": [[[11.16,6]],[[12.08,6]],[[12.99,6]],[[14.27,6]],[[15.19,6]],[[16.24,6]],[[17.71,6]],[[19.17,6]],[[20.64,6]],[[22.2,6]]]
    },
    {
      "id": "ha_windborne",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 105.96,
      "formula": "105.96%",
      "multiplierByLevel": [53.3,57.67,62.04,68.16,72.53,77.55,84.54,91.54,98.53,105.96]
    },
    {
      "id": "ha_abyssal",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 81.71,
      "formula": "81.71%",
      "multiplierByLevel": [41.1,44.47,47.84,52.55,55.92,59.8,65.19,70.58,75.98,81.71]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.26,
      "formula": "123.26%",
      "multiplierByLevel": [62,67.08,72.16,79.28,84.36,90.21,98.35,106.48,114.61,123.26]
    },
    {
      "id": "air_banner",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.52,
      "formula": "79.52%",
      "multiplierByLevel": [40,43.28,46.56,51.15,54.43,58.2,63.45,68.7,73.94,79.52]
    },
    {
      "id": "air_follow",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 155.66,
      "formula": "155.66%",
      "multiplierByLevel": [78.3,84.72,91.14,100.13,106.55,113.93,124.2,134.48,144.75,155.66]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.68,
      "formula": "125.84% × 2",
      "multiplierByLevel": [126.6,136.98,147.36,161.88,172.26,184.2,200.82,217.42,234.04,251.68],
      "segmentsByLevel": [[[63.3,2]],[[68.49,2]],[[73.68,2]],[[80.94,2]],[[86.13,2]],[[92.1,2]],[[100.41,2]],[[108.71,2]],[[117.02,2]],[[125.84,2]]]
    },
    {
      "id": "skill_windqueller",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 425.44,
      "formula": "106.36% × 4",
      "multiplierByLevel": [214,231.52,249.08,273.64,291.2,311.36,339.44,367.52,395.6,425.44],
      "segmentsByLevel": [[[53.5,4]],[[57.88,4]],[[62.27,4]],[[68.41,4]],[[72.8,4]],[[77.84,4]],[[84.86,4]],[[91.88,4]],[[98.9,4]],[[106.36,4]]]
    },
    {
      "id": "lib_lance1",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 524.16,
      "formula": "65.52% × 8",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [263.6,285.28,306.88,337.12,358.72,383.6,418.24,452.8,487.44,524.16],
      "segmentsByLevel": [[[32.95,8]],[[35.66,8]],[[38.36,8]],[[42.14,8]],[[44.84,8]],[[47.95,8]],[[52.28,8]],[[56.6,8]],[[60.93,8]],[[65.52,8]]]
    },
    {
      "id": "lib_lance2",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 492.4,
      "formula": "61.55% × 8",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [247.68,267.92,288.24,316.72,337.04,360.4,392.88,425.36,457.84,492.4],
      "segmentsByLevel": [[[30.96,8]],[[33.49,8]],[[36.03,8]],[[39.59,8]],[[42.13,8]],[[45.05,8]],[[49.11,8]],[[53.17,8]],[[57.23,8]],[[61.55,8]]]
    },
    {
      "id": "lib_lance3",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 534.08,
      "formula": "66.76% × 8",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [268.64,290.64,312.64,343.52,365.52,390.88,426.16,461.36,496.64,534.08],
      "segmentsByLevel": [[[33.58,8]],[[36.33,8]],[[39.08,8]],[[42.94,8]],[[45.69,8]],[[48.86,8]],[[53.27,8]],[[57.67,8]],[[62.08,8]],[[66.76,8]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
    },
    {
      "id": "forte_finale",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 714.55,
      "formula": "142.91% × 2 + 428.73%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "resolve",
        "value": 30
      },
      "multiplierByLevel": [359.4,388.87,418.35,459.61,489.07,522.96,570.12,617.27,664.42,714.55],
      "segmentsByLevel": [[[71.88,2],[215.64,1]],[[77.77,2],[233.33,1]],[[83.67,2],[251.01,1]],[[91.92,2],[275.77,1]],[[97.81,2],[293.45,1]],[[104.59,2],[313.78,1]],[[114.02,2],[342.08,1]],[[123.45,2],[370.37,1]],[[132.88,2],[398.66,1]],[[142.91,2],[428.73,1]]]
    },
    {
      "id": "outro_discipline",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 313.4,
      "formula": "313.40%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "lib_lance3",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 4,
  "combatStates": [
    {
      "id": "state_1",
      "kind": "form",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 15
    },
    {
      "id": "b2",
      "zone": "critDamage",
      "value": 12,
      "scope": "self",
      "defaultActive": false,
      "duration": 8
    },
    {
      "id": "b3",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "skills": [
        "skill_windqueller"
      ],
      "defaultActive": false,
      "triggerRules": [
        {
          "skills": [
            "skill_windqueller"
          ],
          "requiresState": "state_1_option_1"
        }
      ]
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "attackPercent",
          "value": 28,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_cr",
          "zone": "critRate",
          "value": 16,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_windqueller",
            "forte_finale",
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 8
        },
        {
          "id": "k3_cd",
          "zone": "critDamage",
          "value": 32,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_windqueller",
            "forte_finale",
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 8
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "value": 25,
          "scope": "team",
          "damageType": "heavy",
          "defaultActive": false,
          "triggerSkills": [
            "forte_finale"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "attackPercent",
          "value": 45,
          "scope": "self",
          "maxStacks": 15,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 15,
          "duration": 8
        },
        {
          "id": "k5_outro",
          "multAdd": 120,
          "scope": "self",
          "skills": [
            "outro_discipline"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_momentum",
          "zone": "skillMultBonus",
          "value": 240,
          "scope": "self",
          "skills": [
            "forte_finale"
          ],
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false
        }
      ]
    }
  ],
  "modes": null
});
