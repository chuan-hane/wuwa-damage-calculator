WUWA.register({
  "id": "mornye",
  "tuneStrainCapBonus": 1,
  "aliases": [],
  "debut": 3,
  "element": "fusion",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "starfield_calibrator",
  "portrait": "",
  "base": {
    "hp": 15375,
    "attack": 287,
    "defense": 1356,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "defPct": 15.2,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "staticMassEnergy",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "relativeKineticEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 55.69,
      "formula": "22.27% + 16.71% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [28,30.3,32.6,35.83,38.13,40.76,44.43,48.1,51.77,55.69],
      "segmentsByLevel": [[[11.2,1],[8.4,2]],[[12.12,1],[9.09,2]],[[13.04,1],[9.78,2]],[[14.33,1],[10.75,2]],[[15.25,1],[11.44,2]],[[16.3,1],[12.23,2]],[[17.77,1],[13.33,2]],[[19.24,1],[14.43,2]],[[20.71,1],[15.53,2]],[[22.27,1],[16.71,2]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.32,
      "formula": "23.86% + 23.86% + 17.90% × 4",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [60,64.94,69.86,76.74,81.66,87.34,95.2,103.06,110.94,119.32],
      "segmentsByLevel": [[[12,1],[12,1],[9,4]],[[12.99,1],[12.99,1],[9.74,4]],[[13.97,1],[13.97,1],[10.48,4]],[[15.35,1],[15.35,1],[11.51,4]],[[16.33,1],[16.33,1],[12.25,4]],[[17.47,1],[17.47,1],[13.1,4]],[[19.04,1],[19.04,1],[14.28,4]],[[20.61,1],[20.61,1],[15.46,4]],[[22.19,1],[22.19,1],[16.64,4]],[[23.86,1],[23.86,1],[17.9,4]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.4,
      "formula": "41.36% + 10.34% × 6",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [52,56.29,60.58,66.5,70.79,75.69,82.5,89.37,96.18,103.4],
      "segmentsByLevel": [[[20.8,1],[5.2,6]],[[22.51,1],[5.63,6]],[[24.22,1],[6.06,6]],[[26.6,1],[6.65,6]],[[28.31,1],[7.08,6]],[[30.27,1],[7.57,6]],[[33,1],[8.25,6]],[[35.73,1],[8.94,6]],[[38.46,1],[9.62,6]],[[41.36,1],[10.34,6]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 135.2,
      "formula": "135.20%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [68,73.58,79.16,86.96,92.54,98.95,107.87,116.79,125.72,135.2]
    },
    {
      "id": "wide_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 55.68,
      "formula": "13.92% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [28,30.32,32.6,35.84,38.12,40.76,44.44,48.12,51.8,55.68],
      "segmentsByLevel": [[[7,4]],[[7.58,4]],[[8.15,4]],[[8.96,4]],[[9.53,4]],[[10.19,4]],[[11.11,4]],[[12.03,4]],[[12.95,4]],[[13.92,4]]]
    },
    {
      "id": "wide_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.4,
      "formula": "25.85% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [52,56.28,60.56,66.52,70.8,75.68,82.52,89.32,96.16,103.4],
      "segmentsByLevel": [[[13,4]],[[14.07,4]],[[15.14,4]],[[16.63,4]],[[17.7,4]],[[18.92,4]],[[20.63,4]],[[22.33,4]],[[24.04,4]],[[25.85,4]]]
    },
    {
      "id": "wide_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.42,
      "formula": "9.31% × 4 + 33.09% × 2",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [52,56.3,60.54,66.52,70.78,75.68,82.52,89.32,96.18,103.42],
      "segmentsByLevel": [[[4.68,4],[16.64,2]],[[5.07,4],[18.01,2]],[[5.45,4],[19.37,2]],[[5.99,4],[21.28,2]],[[6.37,4],[22.65,2]],[[6.81,4],[24.22,2]],[[7.43,4],[26.4,2]],[[8.04,4],[28.58,2]],[[8.66,4],[30.77,2]],[[9.31,4],[33.09,2]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 37,
      "formula": "11.10% + 11.10% + 14.80%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [18.6,20.14,21.67,23.8,25.33,27.07,29.53,31.96,34.4,37],
      "segmentsByLevel": [[[5.58,1],[5.58,1],[7.44,1]],[[6.04,1],[6.04,1],[8.06,1]],[[6.5,1],[6.5,1],[8.67,1]],[[7.14,1],[7.14,1],[9.52,1]],[[7.6,1],[7.6,1],[10.13,1]],[[8.12,1],[8.12,1],[10.83,1]],[[8.86,1],[8.86,1],[11.81,1]],[[9.59,1],[9.59,1],[12.78,1]],[[10.32,1],[10.32,1],[13.76,1]],[[11.1,1],[11.1,1],[14.8,1]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [49.6,53.67,57.74,63.43,67.5,72.18,78.69,85.19,91.7,98.61]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 162.23,
      "formula": "162.23%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [81.6,88.3,94.99,104.36,111.05,118.74,129.45,140.15,150.86,162.23]
    },
    {
      "id": "wide_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.4,
      "formula": "25.85% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [52,56.28,60.56,66.52,70.8,75.68,82.52,89.32,96.16,103.4],
      "segmentsByLevel": [[[13,4]],[[14.07,4]],[[15.14,4]],[[16.63,4]],[[17.7,4]],[[18.92,4]],[[20.63,4]],[[22.33,4]],[[24.04,4]],[[25.85,4]]]
    },
    {
      "id": "skill_counter",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 179.73,
      "formula": "179.73%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [90.4,97.82,105.23,115.61,123.02,131.55,143.41,155.27,167.13,179.73]
    },
    {
      "id": "skill_array",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 159.08,
      "formula": "39.77% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [80,86.56,93.12,102.32,108.88,116.44,126.92,137.4,147.92,159.08],
      "segmentsByLevel": [[[20,4]],[[21.64,4]],[[23.28,4]],[[25.58,4]],[[27.22,4]],[[29.11,4]],[[31.73,4]],[[34.35,4]],[[36.98,4]],[[39.77,4]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "defense",
      "multiplier": 522.33,
      "formula": "522.33%",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [262.73,284.27,305.82,335.98,357.52,382.3,416.77,451.24,485.7,522.33]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 202.79,
      "formula": "202.79%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [102,110.37,118.73,130.44,138.81,148.43,161.81,175.19,188.57,202.79]
    },
    {
      "id": "field",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 198.85,
      "formula": "39.77% × 5",
      "impliedStates": [
        "field_1_option_1"
      ],
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.9,136.1,145.55,158.65,171.75,184.9,198.85],
      "segmentsByLevel": [[[20,5]],[[21.64,5]],[[23.28,5]],[[25.58,5]],[[27.22,5]],[[29.11,5]],[[31.73,5]],[[34.35,5]],[[36.98,5]],[[39.77,5]]]
    },
    {
      "id": "mass_shift",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 143.16,
      "formula": "44.14% + 99.02%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "staticMassEnergy",
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [72.01,77.91,83.81,92.08,97.99,104.77,114.23,123.67,133.11,143.16],
      "segmentsByLevel": [[[22.2,1],[49.81,1]],[[24.02,1],[53.89,1]],[[25.84,1],[57.97,1]],[[28.39,1],[63.69,1]],[[30.21,1],[67.78,1]],[[32.3,1],[72.47,1]],[[35.22,1],[79.01,1]],[[38.13,1],[85.54,1]],[[41.04,1],[92.07,1]],[[44.14,1],[99.02,1]]]
    },
    {
      "id": "inversion",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 258.46,
      "formula": "258.46%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "relativeKineticEnergy",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "applyObservationMark"
      ],
      "multiplierByLevel": [130,140.66,151.32,166.25,176.91,189.17,206.22,223.28,240.34,258.46]
    },
    {
      "id": "rupture_beam",
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 298.22,
      "formula": "298.22%",
      "requiresState": "target_2_option_1",
      "multiplierByLevel": [150,162.3,174.6,191.82,204.12,218.27,237.95,257.63,277.31,298.22]
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "defFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 33,
  "echoLead": "33:reactor_husk",
  "combatStates": [
    {
      "id": "mode_1",
      "kind": "mode",
      "required": true,
      "defaultValue": "mode_1_option_0",
      "options": [
        {
          "value": "mode_1_option_0"
        },
        {
          "value": "mode_1_option_1"
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
    },
    {
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        }
      ]
    },
    {
      "id": "target_2",
      "kind": "target",
      "options": [
        {
          "value": "target_2_option_1"
        },
        {
          "value": "target_2_option_2",
          "formulaKind": "coherenceInterference",
          "maxStacks": 4,
          "perStackRate": 0.12
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_er",
      "zone": "energyRegen",
      "value": 10,
      "scope": "self"
    },
    {
      "id": "b_lib_cr",
      "zone": "critRate",
      "value": 0,
      "scope": "self",
      "skills": [
        "lib"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -100,
        "rate": 0.5,
        "min": 0,
        "cap": 80,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_lib_cd",
      "zone": "critDamage",
      "value": 0,
      "scope": "self",
      "skills": [
        "lib"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -100,
        "rate": 1,
        "min": 0,
        "cap": 160,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_field_discord",
      "zone": "discordEff",
      "value": 50,
      "scope": "team",
      "requiresState": [
        "field_1_option_1",
        "field_1_option_2"
      ]
    },
    {
      "id": "b_strong_def",
      "zone": "defensePercent",
      "value": 20,
      "scope": "team",
      "requiresState": "field_1_option_2"
    },
    {
      "id": "b_interference_amp_base",
      "zone": "vulnerability",
      "value": 0,
      "scope": "team",
      "maxSeq": 0,
      "requiresState": [
        "target_2_option_1",
        "target_2_option_2"
      ],
      "requiresAllStates": [
        "target_1_option_1"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -100,
        "rate": 0.25,
        "min": 0,
        "cap": 40,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_tune_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_2_option_2",
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "stack_group_1",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.48
      },
      "stackState": "target_2_option_2"
    },
    {
      "id": "b_outro",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "triggerOutro": true,
      "defaultActive": false,
      "duration": 30
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_amp",
          "zone": "vulnerability",
          "value": 0,
          "scope": "team",
          "requiresState": "target_1_option_1",
          "scaleBy": {
            "stat": "energyRegen",
            "statBonus": -100,
            "rate": 0.25,
            "min": 0,
            "cap": 40,
            "includeActiveBuffs": true
          }
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_cd",
          "zone": "critDamage",
          "value": 0,
          "scope": "team",
          "requiresState": "target_1_option_1",
          "scaleBy": {
            "stat": "energyRegen",
            "statBonus": -100,
            "rate": 0.2,
            "min": 0,
            "cap": 32,
            "includeActiveBuffs": true
          }
        },
        {
          "id": "k2_discord",
          "zone": "discordEff",
          "value": 20,
          "scope": "team",
          "requiresState": [
            "field_1_option_1",
            "field_1_option_2"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": []
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k5_beam",
          "zone": "skillMultBonus",
          "value": 160,
          "scope": "self",
          "skills": [
            "rupture_beam"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_lib",
          "zone": "amplify",
          "value": 400,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    }
  ],
  "modes": null
});
