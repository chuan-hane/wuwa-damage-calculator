WUWA.register({
  "id": "yuanwu",
  "aliases": [],
  "debut": 1,
  "element": "electro",
  "weaponType": 4,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "amity_accord",
  "portrait": "",
  "base": {
    "hp": 8525,
    "attack": 225,
    "defense": 1637,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "defPct": 15.2,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "readiness",
      "max": 100,
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
      "multiplier": 49.11,
      "formula": "49.11%",
      "multiplierByLevel": [24.7,26.73,28.76,31.59,33.62,35.95,39.19,42.43,45.67,49.11]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.62,
      "formula": "51.81% × 2",
      "multiplierByLevel": [52.12,56.4,60.68,66.66,70.92,75.84,82.68,89.52,96.36,103.62],
      "segmentsByLevel": [[[26.06,2]],[[28.2,2]],[[30.34,2]],[[33.33,2]],[[35.46,2]],[[37.92,2]],[[41.34,2]],[[44.76,2]],[[48.18,2]],[[51.81,2]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 109.2,
      "formula": "21.84% × 2 + 32.76% × 2",
      "multiplierByLevel": [54.94,59.44,63.94,70.24,74.74,79.94,87.14,94.34,101.54,109.2],
      "segmentsByLevel": [[[10.99,2],[16.48,2]],[[11.89,2],[17.83,2]],[[12.79,2],[19.18,2]],[[14.05,2],[21.07,2]],[[14.95,2],[22.42,2]],[[15.99,2],[23.98,2]],[[17.43,2],[26.14,2]],[[18.87,2],[28.3,2]],[[20.31,2],[30.46,2]],[[21.84,2],[32.76,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.62,
      "formula": "51.81% × 2",
      "multiplierByLevel": [52.12,56.4,60.68,66.66,70.92,75.84,82.68,89.52,96.36,103.62],
      "segmentsByLevel": [[[26.06,2]],[[28.2,2]],[[30.34,2]],[[33.33,2]],[[35.46,2]],[[37.92,2]],[[41.34,2]],[[44.76,2]],[[48.18,2]],[[51.81,2]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 163.7,
      "formula": "49.11% × 2 + 65.48%",
      "multiplierByLevel": [82.34,89.1,95.86,105.3,112.06,119.83,130.63,141.43,152.23,163.7],
      "segmentsByLevel": [[[24.7,2],[32.94,1]],[[26.73,2],[35.64,1]],[[28.76,2],[38.34,1]],[[31.59,2],[42.12,1]],[[33.62,2],[44.82,1]],[[35.95,2],[47.93,1]],[[39.19,2],[52.25,1]],[[42.43,2],[56.57,1]],[[45.67,2],[60.89,1]],[[49.11,2],[65.48,1]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 159.05,
      "formula": "159.05%",
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "multiplierByLevel": [49.6,53.67,57.74,63.43,67.5,72.18,78.69,85.19,91.7,98.61]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 229.04,
      "formula": "114.52% × 2",
      "multiplierByLevel": [115.2,124.66,134.1,147.32,156.78,167.64,182.76,197.86,212.98,229.04],
      "segmentsByLevel": [[[57.6,2]],[[62.33,2]],[[67.05,2]],[[73.66,2]],[[78.39,2]],[[83.82,2]],[[91.38,2]],[[98.93,2]],[[106.49,2]],[[114.52,2]]]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 23.86,
      "formula": "23.86%",
      "multiplierByLevel": [12,12.99,13.97,15.35,16.33,17.47,19.04,20.61,22.19,23.86]
    },
    {
      "id": "skill_thunder_wedge_coordinated",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "damageTags": [
        "coordinated"
      ],
      "stat": "defense",
      "multiplier": 7.96,
      "formula": "7.96%",
      "multiplierByLevel": [4,4.33,4.66,5.12,5.45,5.83,6.35,6.87,7.4,7.96]
    },
    {
      "id": "skill_thunder_wedge_detonation",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 59.65,
      "formula": "59.65%",
      "multiplierByLevel": [30,32.46,34.92,38.37,40.83,43.66,47.59,51.53,55.47,59.65]
    },
    {
      "id": "skill_rumbling_spark",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 108.54,
      "formula": "108.54%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "readiness",
        "value": 100
      },
      "multiplierByLevel": [54.6,59.07,63.55,69.82,74.29,79.44,86.6,93.76,100.93,108.54]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "defense",
      "multiplier": 349.92,
      "formula": "174.96% × 2",
      "multiplierByLevel": [176,190.44,204.88,225.08,239.52,256.1,279.2,302.28,325.38,349.92],
      "segmentsByLevel": [[[88,2]],[[95.22,2]],[[102.44,2]],[[112.54,2]],[[119.76,2]],[[128.05,2]],[[139.6,2]],[[151.14,2]],[[162.69,2]],[[174.96,2]]]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a14"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "defense",
      "multiplier": 63.62,
      "formula": "63.62%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [32,34.63,37.25,40.93,43.55,46.57,50.77,54.96,59.16,63.62]
    },
    {
      "id": "forte_thunder_uprising",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 39.77,
      "formula": "39.77%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "readiness",
        "value": 100
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [20,21.64,23.28,25.58,27.22,29.11,31.73,34.35,36.98,39.77]
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 24.56,
      "formula": "24.56%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [12.35,13.37,14.38,15.8,16.81,17.98,19.6,21.22,22.84,24.56]
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 51.82,
      "formula": "25.91% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [26.06,28.2,30.34,33.34,35.46,37.92,41.34,44.76,48.18,51.82],
      "segmentsByLevel": [[[13.03,2]],[[14.1,2]],[[15.17,2]],[[16.67,2]],[[17.73,2]],[[18.96,2]],[[20.67,2]],[[22.38,2]],[[24.09,2]],[[25.91,2]]]
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 54.6,
      "formula": "10.92% × 2 + 16.38% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [27.48,29.74,31.98,35.14,37.38,39.98,43.58,47.18,50.78,54.6],
      "segmentsByLevel": [[[5.5,2],[8.24,2]],[[5.95,2],[8.92,2]],[[6.4,2],[9.59,2]],[[7.03,2],[10.54,2]],[[7.48,2],[11.21,2]],[[8,2],[11.99,2]],[[8.72,2],[13.07,2]],[[9.44,2],[14.15,2]],[[10.16,2],[15.23,2]],[[10.92,2],[16.38,2]]]
    },
    {
      "id": "na4_2",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 57.3,
      "formula": "11.46% × 5",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [28.85,31.2,33.55,36.9,39.25,41.95,45.75,49.5,53.3,57.3],
      "segmentsByLevel": [[[5.77,5]],[[6.24,5]],[[6.71,5]],[[7.38,5]],[[7.85,5]],[[8.39,5]],[[9.15,5]],[[9.9,5]],[[10.66,5]],[[11.46,5]]]
    },
    {
      "id": "na5_2",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 81.85,
      "formula": "16.37% × 3 + 32.74%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [41.19,44.55,47.94,52.65,56.04,59.94,65.34,70.74,76.14,81.85],
      "segmentsByLevel": [[[8.24,3],[16.47,1]],[[8.91,3],[17.82,1]],[[9.59,3],[19.17,1]],[[10.53,3],[21.06,1]],[[11.21,3],[22.41,1]],[[11.99,3],[23.97,1]],[[13.07,3],[26.13,1]],[[14.15,3],[28.29,1]],[[15.23,3],[30.45,1]],[[16.37,3],[32.74,1]]]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a21"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "stat": "defense",
      "multiplier": 31.02,
      "formula": "31.02%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [15.6,16.88,18.16,19.95,21.23,22.7,24.75,26.8,28.84,31.02]
    },
    {
      "id": "forte_thunderweaver",
      "legacyIds": [
        "a22"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 72.38,
      "formula": "31.02% + 20.68% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [36.4,39.4,42.38,46.55,49.55,52.98,57.75,62.54,67.3,72.38],
      "segmentsByLevel": [[[15.6,1],[10.4,2]],[[16.88,1],[11.26,2]],[[18.16,1],[12.11,2]],[[19.95,1],[13.3,2]],[[21.23,1],[14.16,2]],[[22.7,1],[15.14,2]],[[24.75,1],[16.5,2]],[[26.8,1],[17.87,2]],[[28.84,1],[19.23,2]],[[31.02,1],[20.68,2]]]
    },
    {
      "id": "dodge_2",
      "legacyIds": [
        "a23"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 108.17,
      "formula": "43.27% + 32.45% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [54.4,58.87,63.33,69.59,74.04,79.17,86.3,93.44,100.59,108.17],
      "segmentsByLevel": [[[21.76,1],[16.32,2]],[[23.55,1],[17.66,2]],[[25.33,1],[19,2]],[[27.83,1],[20.88,2]],[[29.62,1],[22.21,2]],[[31.67,1],[23.75,2]],[[34.52,1],[25.89,2]],[[37.38,1],[28.03,2]],[[40.23,1],[30.18,2]],[[43.27,1],[32.45,2]]]
    }
  ],
  "defaultSkillId": "lib",
  "skillEvents": [
    {
      "event": "shield",
      "skills": [
        "lib"
      ],
      "seq": 4
    }
  ],
  "validSubs": [
    "defFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 3,
  "combatStates": [
    {
      "id": "state_1",
      "kind": "form",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    },
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        },
        {
          "value": "field_1_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "skillMultBonus",
      "value": 40,
      "scope": "self",
      "skills": [
        "forte_thunder_uprising"
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
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "multAdd": 20,
          "scope": "self",
          "skills": [
            "skill_thunder_wedge_coordinated"
          ]
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
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 50,
          "scope": "self",
          "requiresState": "field_1_option_1"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "defensePercent",
          "value": 32,
          "scope": "team",
          "requiresState": "field_1_option_2",
          "duration": 3
        }
      ]
    }
  ],
  "modes": null
});
