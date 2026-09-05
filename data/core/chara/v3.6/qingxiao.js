"use strict";

WUWA.register({
  "id": "qingxiao",
  "tuneStrainCapBonus": 1,
  "aliases": [],
  "debut": 3.6,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "glint_of_clouds",
  "portrait": "",
  "base": {
    "hp": 10300,
    "attack": 462,
    "defense": 1112,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "qin_heart",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "sword_cadence",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "heart_sword_intent",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "gathered_mind",
      "min": 0,
      "max": 15,
      "maxBySeq": [
        {
          "seq": 2,
          "max": 25
        }
      ],
      "defaultValue": 1
    },
    {
      "id": "world_in_chorus",
      "min": 0,
      "max": 25,
      "defaultValue": 0
    },
    {
      "id": "exorcising_seal",
      "min": 0,
      "max": 25,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 60.26,
      "formula": "30.13% × 2",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [30.32,32.8,35.3,38.78,41.26,44.12,48.1,52.06,56.04,60.26],
      "segmentsByLevel": [[[15.16,2]],[[16.4,2]],[[17.65,2]],[[19.39,2]],[[20.63,2]],[[22.06,2]],[[24.05,2]],[[26.03,2]],[[28.02,2]],[[30.13,2]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 74.18,
      "formula": "37.09% × 2",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [37.32,40.38,43.44,47.72,50.78,54.3,59.2,64.08,68.98,74.18],
      "segmentsByLevel": [[[18.66,2]],[[20.19,2]],[[21.72,2]],[[23.86,2]],[[25.39,2]],[[27.15,2]],[[29.6,2]],[[32.04,2]],[[34.49,2]],[[37.09,2]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.44,
      "formula": "24.36% × 4",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [49,53.04,57.04,62.68,66.68,71.32,77.76,84.16,90.6,97.44],
      "segmentsByLevel": [[[12.25,4]],[[13.26,4]],[[14.26,4]],[[15.67,4]],[[16.67,4]],[[17.83,4]],[[19.44,4]],[[21.04,4]],[[22.65,4]],[[24.36,4]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 108.45,
      "formula": "86.73% + 5.43% × 4",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [54.55,59.05,63.5,69.75,74.25,79.36,86.53,93.69,100.85,108.45],
      "segmentsByLevel": [[[43.63,1],[2.73,4]],[[47.21,1],[2.96,4]],[[50.78,1],[3.18,4]],[[55.79,1],[3.49,4]],[[59.37,1],[3.72,4]],[[63.48,1],[3.97,4]],[[69.21,1],[4.33,4]],[[74.93,1],[4.69,4]],[[80.65,1],[5.05,4]],[[86.73,1],[5.43,4]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 438.41,
      "formula": "14.62% × 3 + 21.92% × 6 + 263.03%",
      "impliedStates": [
        "normal_form"
      ],
      "requiresAllResourcesAtLeast": [
        {
          "id": "qin_heart",
          "fractionOfCap": 1
        },
        {
          "id": "sword_cadence",
          "fractionOfCap": 1
        }
      ],
      "multiplierByLevel": [220.53,238.61,256.72,281.99,300.13,320.91,349.79,378.76,407.7,438.41],
      "segmentsByLevel": [[[7.35,3],[11.03,6],[132.3,1]],[[7.96,3],[11.93,6],[143.15,1]],[[8.56,3],[12.84,6],[154,1]],[[9.4,3],[14.1,6],[169.19,1]],[[10.01,3],[15.01,6],[180.04,1]],[[10.7,3],[16.05,6],[192.51,1]],[[11.66,3],[17.49,6],[209.87,1]],[[12.63,3],[18.94,6],[227.23,1]],[[13.59,3],[20.39,6],[244.59,1]],[[14.62,3],[21.92,6],[263.03,1]]]
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.48,
      "formula": "7.24% × 5 + 54.28%",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [45.5,49.24,52.98,58.22,61.95,66.23,72.21,78.19,84.12,90.48],
      "segmentsByLevel": [[[3.64,5],[27.3,1]],[[3.94,5],[29.54,1]],[[4.24,5],[31.78,1]],[[4.66,5],[34.92,1]],[[4.96,5],[37.15,1]],[[5.3,5],[39.73,1]],[[5.78,5],[43.31,1]],[[6.26,5],[46.89,1]],[[6.73,5],[50.47,1]],[[7.24,5],[54.28,1]]]
    },
    {
      "id": "air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 89.79,
      "formula": "44.89% + 22.45% × 2",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [45.16,48.87,52.56,57.75,61.47,65.71,71.64,77.56,83.48,89.79],
      "segmentsByLevel": [[[22.58,1],[11.29,2]],[[24.43,1],[12.22,2]],[[26.28,1],[13.14,2]],[[28.87,1],[14.44,2]],[[30.73,1],[15.37,2]],[[32.85,1],[16.43,2]],[[35.82,1],[17.91,2]],[[38.78,1],[19.39,2]],[[41.74,1],[20.87,2]],[[44.89,1],[22.45,2]]]
    },
    {
      "id": "air3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 139.21,
      "formula": "11.14% × 5 + 83.51%",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [70,75.75,81.49,89.56,95.31,101.87,111.08,120.24,129.45,139.21],
      "segmentsByLevel": [[[5.6,5],[42,1]],[[6.06,5],[45.45,1]],[[6.52,5],[48.89,1]],[[7.17,5],[53.71,1]],[[7.63,5],[57.16,1]],[[8.15,5],[61.12,1]],[[8.89,5],[66.63,1]],[[9.62,5],[72.14,1]],[[10.36,5],[77.65,1]],[[11.14,5],[83.51,1]]]
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%",
      "multiplierByLevel": [43.4,46.96,50.52,55.5,59.06,63.16,68.85,74.54,80.24,86.29]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 180.92,
      "formula": "45.23% × 4",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [91,98.48,105.96,116.4,123.84,132.44,144.36,156.32,168.24,180.92],
      "segmentsByLevel": [[[22.75,4]],[[24.62,4]],[[26.49,4]],[[29.1,4]],[[30.96,4]],[[33.11,4]],[[36.09,4]],[[39.08,4]],[[42.06,4]],[[45.23,4]]]
    },
    {
      "id": "skill_judgement",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 139.18,
      "formula": "20.88% × 2 + 97.42%",
      "multiplierByLevel": [70,75.76,81.5,89.53,95.26,101.86,111.05,120.24,129.43,139.18],
      "segmentsByLevel": [[[10.5,2],[49,1]],[[11.37,2],[53.02,1]],[[12.23,2],[57.04,1]],[[13.43,2],[62.67,1]],[[14.29,2],[66.68,1]],[[15.28,2],[71.3,1]],[[16.66,2],[77.73,1]],[[18.04,2],[84.16,1]],[[19.42,2],[90.59,1]],[[20.88,2],[97.42,1]]]
    },
    {
      "id": "skill_ascendant",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 94.66,
      "formula": "28.40% + 33.13% × 2",
      "impliedStates": [
        "normal_form"
      ],
      "multiplierByLevel": [47.6,51.52,55.43,60.89,64.8,69.28,75.52,81.77,88,94.66],
      "segmentsByLevel": [[[14.28,1],[16.66,2]],[[15.46,1],[18.03,2]],[[16.63,1],[19.4,2]],[[18.27,1],[21.31,2]],[[19.44,1],[22.68,2]],[[20.78,1],[24.25,2]],[[22.66,1],[26.43,2]],[[24.53,1],[28.62,2]],[[26.4,1],[30.8,2]],[[28.4,1],[33.13,2]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1670.11,
      "formula": "33.41% × 10 + 1336.01%",
      "multiplierByLevel": [840,908.91,977.81,1074.26,1143.16,1222.33,1332.5,1442.76,1552.93,1670.11],
      "segmentsByLevel": [[[16.8,10],[672,1]],[[18.18,10],[727.11,1]],[[19.56,10],[782.21,1]],[[21.49,10],[859.36,1]],[[22.87,10],[914.46,1]],[[24.45,10],[977.83,1]],[[26.65,10],[1066,1]],[[28.86,10],[1154.16,1]],[[31.06,10],[1242.33,1]],[[33.41,10],[1336.01,1]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 132.63,
      "formula": "39.79% + 46.42% × 2",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [66.72,72.2,77.66,85.32,90.8,97.09,105.83,114.6,123.34,132.63],
      "segmentsByLevel": [[[20.02,1],[23.35,2]],[[21.66,1],[25.27,2]],[[23.3,1],[27.18,2]],[[25.6,1],[29.86,2]],[[27.24,1],[31.78,2]],[[29.13,1],[33.98,2]],[[31.75,1],[37.04,2]],[[34.38,1],[40.11,2]],[[37,1],[43.17,2]],[[39.79,1],[46.42,2]]]
    },
    {
      "id": "ephemeral_na1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 89.79,
      "formula": "44.89% + 22.45% × 2",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "multiplierByLevel": [45.16,48.87,52.56,57.75,61.47,65.71,71.64,77.56,83.48,89.79],
      "segmentsByLevel": [[[22.58,1],[11.29,2]],[[24.43,1],[12.22,2]],[[26.28,1],[13.14,2]],[[28.87,1],[14.44,2]],[[30.73,1],[15.37,2]],[[32.85,1],[16.43,2]],[[35.82,1],[17.91,2]],[[38.78,1],[19.39,2]],[[41.74,1],[20.87,2]],[[44.89,1],[22.45,2]]]
    },
    {
      "id": "ephemeral_na2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 115.55,
      "formula": "23.11% × 5",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "multiplierByLevel": [58.1,62.9,67.65,74.3,79.1,84.55,92.2,99.8,107.45,115.55],
      "segmentsByLevel": [[[11.62,5]],[[12.58,5]],[[13.53,5]],[[14.86,5]],[[15.82,5]],[[16.91,5]],[[18.44,5]],[[19.96,5]],[[21.49,5]],[[23.11,5]]]
    },
    {
      "id": "ephemeral_na3",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 125.28,
      "formula": "20.88% × 3 + 31.32% × 2",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "multiplierByLevel": [63,68.21,73.37,80.59,85.75,91.68,99.96,108.24,116.5,125.28],
      "segmentsByLevel": [[[10.5,3],[15.75,2]],[[11.37,3],[17.05,2]],[[12.23,3],[18.34,2]],[[13.43,3],[20.15,2]],[[14.29,3],[21.44,2]],[[15.28,3],[22.92,2]],[[16.66,3],[24.99,2]],[[18.04,3],[27.06,2]],[[19.42,3],[29.12,2]],[[20.88,3],[31.32,2]]]
    },
    {
      "id": "ephemeral_na4",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 180.96,
      "formula": "18.10% × 4 + 108.56%",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "multiplierByLevel": [91,98.48,105.96,116.39,123.86,132.45,144.38,156.3,168.26,180.96],
      "segmentsByLevel": [[[9.1,4],[54.6,1]],[[9.85,4],[59.08,1]],[[10.6,4],[63.56,1]],[[11.64,4],[69.83,1]],[[12.39,4],[74.3,1]],[[13.25,4],[79.45,1]],[[14.44,4],[86.62,1]],[[15.63,4],[93.78,1]],[[16.83,4],[100.94,1]],[[18.1,4],[108.56,1]]]
    },
    {
      "id": "ephemeral_dodge",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 264.46,
      "formula": "26.45% × 4 + 158.66%",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "multiplierByLevel": [133,143.95,154.85,170.09,181,193.56,210.99,228.46,245.89,264.46],
      "segmentsByLevel": [[[13.3,4],[79.8,1]],[[14.4,4],[86.35,1]],[[15.49,4],[92.89,1]],[[17.01,4],[102.05,1]],[[18.1,4],[108.6,1]],[[19.36,4],[116.12,1]],[[21.1,4],[126.59,1]],[[22.85,4],[137.06,1]],[[24.59,4],[147.53,1]],[[26.45,4],[158.66,1]]]
    },
    {
      "id": "forte_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 695.9,
      "formula": "27.84% × 9 + 445.34%",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "requiresResourceFull": "heart_sword_intent",
      "multiplierByLevel": [350,378.72,407.44,447.65,476.36,509.37,555.23,601.17,647.12,695.9],
      "segmentsByLevel": [[[14,9],[224,1]],[[15.15,9],[242.37,1]],[[16.3,9],[260.74,1]],[[17.91,9],[286.46,1]],[[19.06,9],[304.82,1]],[[20.38,9],[325.95,1]],[[22.21,9],[355.34,1]],[[24.05,9],[384.72,1]],[[25.89,9],[414.11,1]],[[27.84,9],[445.34,1]]]
    },
    {
      "id": "outro",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 800,
      "formula": "800%",
      "fixedLevel": true
    },
    {
      "id": "c1_juque",
      "category": "resonanceChain",
      "damageType": "basic",
      "multiplier": 400,
      "formula": "400%",
      "fixedLevel": true,
      "seq": 1,
      "triggeredDamage": true,
      "requiresResourceAtLeast": {
        "id": "exorcising_seal",
        "value": 1
      }
    }
  ],
  "defaultSkillId": "forte_heavy",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 360234,
  "echoLead": "360234:calamity_effigy",
  "combatStates": [
    {
      "id": "combat_form",
      "kind": "form",
      "required": true,
      "defaultValue": "ephemeral_transcendence",
      "options": [
        {
          "value": "normal_form"
        },
        {
          "value": "ephemeral_transcendence"
        }
      ]
    },
    {
      "id": "target_mindlock",
      "kind": "target",
      "options": [
        {
          "value": "target_has_mindlock"
        }
      ]
    },
    {
      "id": "target_tune_strain",
      "kind": "target",
      "options": [
        {
          "value": "target_tune_shifting"
        },
        {
          "value": "target_tune_interfered",
          "formulaKind": "coherenceInterference",
          "maxStacks": 4,
          "perStackRate": 0.12,
          "perStackRateBySeq": [
            {
              "seq": 6,
              "rate": 0.144
            }
          ]
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_ephemeral_unready_mult",
      "zone": "skillMultBonus",
      "value": 100,
      "scope": "self",
      "skills": [
        "ephemeral_na1",
        "ephemeral_na2",
        "ephemeral_na3",
        "ephemeral_na4",
        "ephemeral_dodge"
      ],
      "requiresState": "ephemeral_transcendence",
      "requiresResourceBelow": {
        "id": "heart_sword_intent",
        "fractionOfCap": 1
      }
    },
    {
      "id": "b_heavens_clarity_mult",
      "zone": "skillMultBonus",
      "value": 100,
      "scope": "self",
      "skills": [
        "forte_heavy"
      ],
      "requiresState": "ephemeral_transcendence",
      "defaultActive": false
    },
    {
      "id": "b_mindlock_base",
      "zone": "amplify",
      "value": 30,
      "scope": "self",
      "skills": [
        "heavy",
        "ephemeral_na1",
        "ephemeral_na2",
        "ephemeral_na3",
        "ephemeral_na4",
        "ephemeral_dodge",
        "forte_heavy",
        "lib"
      ],
      "requiresState": "target_has_mindlock",
      "maxStacks": 15,
      "stackMax": 15,
      "stackMaxBySeq": [
        {
          "seq": 2,
          "max": 25
        }
      ],
      "defaultStacks": 0,
      "stackGroup": "mindlock"
    },
    {
      "id": "b_mindlock_first_seven",
      "zone": "amplify",
      "value": 35,
      "scope": "self",
      "skills": [
        "heavy",
        "ephemeral_na1",
        "ephemeral_na2",
        "ephemeral_na3",
        "ephemeral_na4",
        "ephemeral_dodge",
        "forte_heavy",
        "lib"
      ],
      "requiresState": "target_has_mindlock",
      "maxStacks": 7,
      "stackMax": 15,
      "stackMaxBySeq": [
        {
          "seq": 2,
          "max": 25
        }
      ],
      "stackRange": [
        1,
        7
      ],
      "defaultStacks": 0,
      "stackGroup": "mindlock"
    },
    {
      "id": "b_tune_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_tune_interfered",
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "tune_interference",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.48
      },
      "stackState": "target_tune_interfered"
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_crit_rate",
          "zone": "critRate",
          "value": 16,
          "scope": "self"
        },
        {
          "id": "k1_juque_vulnerability",
          "zone": "vulnerability",
          "value": 100,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "maxStacks": 25,
          "stackResource": "exorcising_seal",
          "duration": 2
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_heavy_mult",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "heavy"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_lib_crit_damage",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k3_world_in_chorus_mult",
          "zone": "skillMultBonus",
          "value": 75,
          "scope": "self",
          "skills": [
            "forte_heavy"
          ],
          "maxStacks": 25,
          "stackResource": "world_in_chorus"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_team_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "duration": 8
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_judgement_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "skill_judgement"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_selected_vulnerability",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "skills": [
            "heavy",
            "forte_heavy",
            "lib",
            "c1_juque"
          ]
        },
        {
          "id": "k6_juque_mindlock_taken_base",
          "zone": "amplify",
          "value": 50,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 25,
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_juque_mindlock_taken_first_seven",
          "zone": "amplify",
          "value": 35,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 7,
          "stackRange": [
            1,
            7
          ],
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_juque_mindlock_damage_base",
          "zone": "amplify",
          "value": 50,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 25,
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_juque_mindlock_damage_first_seven",
          "zone": "amplify",
          "value": 35,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 7,
          "stackRange": [
            1,
            7
          ],
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_tune_response_extra",
          "zone": "finalDmg",
          "scope": "self",
          "requiresState": "target_tune_interfered",
          "maxStacks": 4,
          "defaultStacks": 0,
          "stackGroup": "tune_interference",
          "scaleBy": {
            "stat": "breakAmp",
            "rate": 0.096
          },
          "stackState": "target_tune_interfered"
        }
      ]
    }
  ],
  "modes": null
});
