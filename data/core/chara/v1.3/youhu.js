WUWA.register({
  "id": "youhu",
  "aliases": [],
  "debut": 1.3,
  "element": "glacio",
  "weaponType": 4,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "marcato",
  "portrait": "",
  "base": {
    "hp": 9975,
    "attack": 262,
    "defense": 1051,
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
      "id": "frost",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "auspices",
      "max": 4,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.38,
      "formula": "47.38%",
      "multiplierByLevel": [23.83,25.79,27.74,30.48,32.43,34.68,37.8,40.93,44.05,47.38]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 91.17,
      "formula": "31.91% + 59.26%",
      "multiplierByLevel": [45.86,49.62,53.39,58.65,62.4,66.73,72.74,78.76,84.77,91.17],
      "segmentsByLevel": [[[16.05,1],[29.81,1]],[[17.37,1],[32.25,1]],[[18.69,1],[34.7,1]],[[20.53,1],[38.12,1]],[[21.84,1],[40.56,1]],[[23.36,1],[43.37,1]],[[25.46,1],[47.28,1]],[[27.57,1],[51.19,1]],[[29.67,1],[55.1,1]],[[31.91,1],[59.26,1]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.58,
      "formula": "38.06% + 46.52%",
      "multiplierByLevel": [42.55,46.04,49.53,54.42,57.9,61.91,67.49,73.07,78.66,84.58],
      "segmentsByLevel": [[[19.15,1],[23.4,1]],[[20.72,1],[25.32,1]],[[22.29,1],[27.24,1]],[[24.49,1],[29.93,1]],[[26.06,1],[31.84,1]],[[27.86,1],[34.05,1]],[[30.37,1],[37.12,1]],[[32.88,1],[40.19,1]],[[35.4,1],[43.26,1]],[[38.06,1],[46.52,1]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 116.35,
      "formula": "116.35%",
      "multiplierByLevel": [58.53,63.33,68.13,74.84,79.64,85.16,92.84,100.52,108.2,116.35]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 86.7,
      "formula": "14.45% × 6",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "frost",
      "fallbackSkillId": "skill",
      "multiplierByLevel": [43.62,47.22,50.76,55.74,59.34,63.48,69.18,74.88,80.58,86.7],
      "segmentsByLevel": [[[7.27,6]],[[7.87,6]],[[8.46,6]],[[9.29,6]],[[9.89,6]],[[10.58,6]],[[11.53,6]],[[12.48,6]],[[13.43,6]],[[14.45,6]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%",
      "multiplierByLevel": [62,67.09,72.17,79.29,84.37,90.22,98.36,106.49,114.62,123.27]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 173.34,
      "formula": "28.89% × 6",
      "multiplierByLevel": [87.18,94.38,101.52,111.48,118.68,126.9,138.3,149.76,161.16,173.34],
      "segmentsByLevel": [[[14.53,6]],[[15.73,6]],[[16.92,6]],[[18.58,6]],[[19.78,6]],[[21.15,6]],[[23.05,6]],[[24.96,6]],[[26.86,6]],[[28.89,6]]]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 156.46,
      "formula": "156.46%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [78.7,85.16,91.61,100.64,107.1,114.52,124.84,135.17,145.49,156.46]
    },
    {
      "id": "skill_chime",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 293.22,
      "formula": "41.05% + 49.85% × 3 + 102.62%",
      "multiplierByLevel": [147.48,159.58,171.69,188.6,200.7,214.6,233.95,253.29,272.64,293.22],
      "segmentsByLevel": [[[20.65,1],[25.07,3],[51.62,1]],[[22.34,1],[27.13,3],[55.85,1]],[[24.04,1],[29.19,3],[60.08,1]],[[26.41,1],[32.06,3],[66.01,1]],[[28.1,1],[34.12,3],[70.24,1]],[[30.05,1],[36.48,3],[75.11,1]],[[32.76,1],[39.77,3],[81.88,1]],[[35.46,1],[43.06,3],[88.65,1]],[[38.17,1],[46.35,3],[95.42,1]],[[41.05,1],[49.85,3],[102.62,1]]]
    },
    {
      "id": "skill_ding",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 285.7,
      "formula": "28.57% × 6 + 114.28%",
      "multiplierByLevel": [143.77,155.5,167.29,183.79,195.59,209.17,227.99,246.87,265.69,285.7],
      "segmentsByLevel": [[[14.38,6],[57.49,1]],[[15.55,6],[62.2,1]],[[16.73,6],[66.91,1]],[[18.38,6],[73.51,1]],[[19.56,6],[78.23,1]],[[20.92,6],[83.65,1]],[[22.8,6],[91.19,1]],[[24.69,6],[98.73,1]],[[26.57,6],[106.27,1]],[[28.57,6],[114.28,1]]]
    },
    {
      "id": "skill_ruyi",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 304.45,
      "formula": "137.00% + 167.45%",
      "multiplierByLevel": [153.14,165.69,178.25,195.84,208.39,222.83,242.92,263.02,283.11,304.45],
      "segmentsByLevel": [[[68.91,1],[84.23,1]],[[74.56,1],[91.13,1]],[[80.21,1],[98.04,1]],[[88.13,1],[107.71,1]],[[93.78,1],[114.61,1]],[[100.27,1],[122.56,1]],[[109.31,1],[133.61,1]],[[118.36,1],[144.66,1]],[[127.4,1],[155.71,1]],[[137,1],[167.45,1]]]
    },
    {
      "id": "skill_mask",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 147.34,
      "formula": "11.46% × 9 + 44.20%",
      "multiplierByLevel": [74.16,80.22,86.27,94.76,100.9,107.86,117.62,127.28,137.04,147.34],
      "segmentsByLevel": [[[5.77,9],[22.23,1]],[[6.24,9],[24.06,1]],[[6.71,9],[25.88,1]],[[7.37,9],[28.43,1]],[[7.85,9],[30.25,1]],[[8.39,9],[32.35,1]],[[9.15,9],[35.27,1]],[[9.9,9],[38.18,1]],[[10.66,9],[41.1,1]],[[11.46,9],[44.2,1]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 327.19,
      "formula": "327.19%",
      "multiplierByLevel": [164.58,178.07,191.57,210.46,223.95,239.47,261.06,282.66,304.25,327.19]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a14"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "89.47% + 109.35%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.89,136.09,145.52,158.64,171.76,184.88,198.82],
      "segmentsByLevel": [[[45,1],[55,1]],[[48.69,1],[59.51,1]],[[52.38,1],[64.02,1]],[[57.55,1],[70.34,1]],[[61.24,1],[74.85,1]],[[65.48,1],[80.04,1]],[[71.39,1],[87.25,1]],[[77.29,1],[94.47,1]],[[83.2,1],[101.68,1]],[[89.47,1],[109.35,1]]]
    },
    {
      "id": "forte_poetic_essence",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 372.1,
      "formula": "37.21% × 10",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "auspices",
        "value": 4
      },
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [187.2,202.6,217.9,239.4,254.7,272.4,296.9,321.5,346,372.1],
      "segmentsByLevel": [[[18.72,10]],[[20.26,10]],[[21.79,10]],[[23.94,10]],[[25.47,10]],[[27.24,10]],[[29.69,10]],[[32.15,10]],[[34.6,10]],[[37.21,10]]]
    }
  ],
  "defaultSkillId": "forte_poetic_essence",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 1,
  "combatStates": [
    {
      "id": "mechanic_1",
      "kind": "mechanic",
      "options": [
        {
          "value": "mechanic_1_option_1"
        },
        {
          "value": "mechanic_1_option_2"
        },
        {
          "value": "mechanic_1_option_3"
        },
        {
          "value": "mechanic_1_option_4"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "glacio",
      "value": 15,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 14
    },
    {
      "id": "b2",
      "zone": "amplify",
      "damageType": "coordinated",
      "value": 100,
      "scope": "team",
      "duration": 28,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b3",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 70,
      "scope": "self",
      "skills": [
        "forte_poetic_essence"
      ],
      "requiresState": "mechanic_1_option_1"
    },
    {
      "id": "b4",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 175,
      "scope": "self",
      "skills": [
        "forte_poetic_essence"
      ],
      "requiresState": [
        "mechanic_1_option_3",
        "mechanic_1_option_4"
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
          "id": "k2_duo",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 70,
          "scope": "self",
          "skills": [
            "forte_poetic_essence"
          ],
          "requiresState": "mechanic_1_option_1"
        },
        {
          "id": "k2_triple",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 175,
          "scope": "self",
          "skills": [
            "forte_poetic_essence"
          ],
          "requiresState": [
            "mechanic_1_option_3",
            "mechanic_1_option_4"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 14
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "skill_chime",
            "skill_ding",
            "skill_ruyi",
            "skill_mask"
          ],
          "triggerStacks": 1,
          "duration": 7
        }
      ]
    }
  ],
  "modes": null
});
