WUWA.register({
  "id": "aemeath",
  "aliases": [],
  "debut": 3.1,
  "element": "fusion",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "fusion"
  ],
  "effectTypeRequiresState": {
    "fusion": "mode_1_option_2"
  },
  "signatureWeaponId": "everbright_polestar",
  "portrait": "",
  "base": {
    "hp": 11025,
    "attack": 425,
    "defense": 1148,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "syncRate",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "resonanceRate",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "aemeath_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 46.35,
      "formula": "46.35%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [23.31,25.23,27.14,29.81,31.73,33.92,36.98,40.04,43.1,46.35]
    },
    {
      "id": "aemeath_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.46,
      "formula": "13.89% + 20.84% + 34.73%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [34.94,37.8,40.67,44.69,47.54,50.84,55.43,60,64.59,69.46],
      "segmentsByLevel": [[[6.99,1],[10.48,1],[17.47,1]],[[7.56,1],[11.34,1],[18.9,1]],[[8.14,1],[12.2,1],[20.33,1]],[[8.94,1],[13.41,1],[22.34,1]],[[9.51,1],[14.26,1],[23.77,1]],[[10.17,1],[15.25,1],[25.42,1]],[[11.09,1],[16.63,1],[27.71,1]],[[12,1],[18,1],[30,1]],[[12.92,1],[19.38,1],[32.29,1]],[[13.89,1],[20.84,1],[34.73,1]]]
    },
    {
      "id": "aemeath_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.15,
      "formula": "9.32% × 3 + 18.63% + 46.56%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [46.86,50.69,54.55,59.9,63.76,68.17,74.3,80.46,86.59,93.15],
      "segmentsByLevel": [[[4.69,3],[9.37,1],[23.42,1]],[[5.07,3],[10.14,1],[25.34,1]],[[5.46,3],[10.91,1],[27.26,1]],[[5.99,3],[11.98,1],[29.95,1]],[[6.38,3],[12.75,1],[31.87,1]],[[6.82,3],[13.63,1],[34.08,1]],[[7.43,3],[14.86,1],[37.15,1]],[[8.05,3],[16.09,1],[40.22,1]],[[8.66,3],[17.32,1],[43.29,1]],[[9.32,3],[18.63,1],[46.56,1]]]
    },
    {
      "id": "aemeath_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134.59,
      "formula": "6.73% × 5 + 100.94%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [67.72,73.29,78.8,86.58,92.14,98.53,107.39,116.3,125.16,134.59],
      "segmentsByLevel": [[[3.39,5],[50.77,1]],[[3.67,5],[54.94,1]],[[3.94,5],[59.1,1]],[[4.33,5],[64.93,1]],[[4.61,5],[69.09,1]],[[4.93,5],[73.88,1]],[[5.37,5],[80.54,1]],[[5.82,5],[87.2,1]],[[6.26,5],[93.86,1]],[[6.73,5],[100.94,1]]]
    },
    {
      "id": "aemeath_heavy1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 92.83,
      "formula": "18.57% + 74.26%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [46.7,50.53,54.35,59.72,63.54,67.95,74.08,80.2,86.33,92.83],
      "segmentsByLevel": [[[9.34,1],[37.36,1]],[[10.11,1],[40.42,1]],[[10.87,1],[43.48,1]],[[11.95,1],[47.77,1]],[[12.71,1],[50.83,1]],[[13.59,1],[54.36,1]],[[14.82,1],[59.26,1]],[[16.04,1],[64.16,1]],[[17.27,1],[69.06,1]],[[18.57,1],[74.26,1]]]
    },
    {
      "id": "aemeath_heavy2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 232,
      "formula": "11.60% × 4 + 185.60%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [116.72,126.29,135.87,149.26,158.8,169.8,185.13,200.46,215.74,232],
      "segmentsByLevel": [[[5.84,4],[93.36,1]],[[6.32,4],[101.01,1]],[[6.8,4],[108.67,1]],[[7.47,4],[119.38,1]],[[7.94,4],[127.04,1]],[[8.49,4],[135.84,1]],[[9.26,4],[148.09,1]],[[10.03,4],[160.34,1]],[[10.79,4],[172.58,1]],[[11.6,4],[185.6,1]]]
    },
    {
      "id": "aemeath_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [43.4,46.96,50.52,55.5,59.06,63.16,68.85,74.54,80.24,86.29]
    },
    {
      "id": "aemeath_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 260.15,
      "formula": "26.02% × 3 + 52.03% + 130.06%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [130.86,141.58,152.3,167.35,178.06,190.39,207.56,224.75,241.89,260.15],
      "segmentsByLevel": [[[13.09,3],[26.17,1],[65.42,1]],[[14.16,3],[28.32,1],[70.78,1]],[[15.23,3],[30.46,1],[76.15,1]],[[16.74,3],[33.47,1],[83.66,1]],[[17.81,3],[35.61,1],[89.02,1]],[[19.04,3],[38.08,1],[95.19,1]],[[20.76,3],[41.51,1],[103.77,1]],[[22.48,3],[44.95,1],[112.36,1]],[[24.19,3],[48.38,1],[120.94,1]],[[26.02,3],[52.03,1],[130.06,1]]]
    },
    {
      "id": "sync_armament_merge",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 134.59,
      "formula": "26.92% + 40.38% + 67.29%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [67.7,73.26,78.8,86.58,92.13,98.5,107.39,116.27,125.15,134.59],
      "segmentsByLevel": [[[13.54,1],[20.31,1],[33.85,1]],[[14.65,1],[21.98,1],[36.63,1]],[[15.76,1],[23.64,1],[39.4,1]],[[17.32,1],[25.97,1],[43.29,1]],[[18.43,1],[27.64,1],[46.06,1]],[[19.7,1],[29.55,1],[49.25,1]],[[21.48,1],[32.22,1],[53.69,1]],[[23.26,1],[34.88,1],[58.13,1]],[[25.03,1],[37.55,1],[62.57,1]],[[26.92,1],[40.38,1],[67.29,1]]]
    },
    {
      "id": "sync_call_dawn",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 163.27,
      "formula": "16.33% × 3 + 114.28%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [82.14,88.87,95.59,105.04,111.76,119.49,130.27,141.05,151.8,163.27],
      "segmentsByLevel": [[[8.22,3],[57.48,1]],[[8.89,3],[62.2,1]],[[9.56,3],[66.91,1]],[[10.51,3],[73.51,1]],[[11.18,3],[78.22,1]],[[11.95,3],[83.64,1]],[[13.03,3],[91.18,1]],[[14.11,3],[98.72,1]],[[15.18,3],[106.26,1]],[[16.33,3],[114.28,1]]]
    },
    {
      "id": "mech_na1",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 69.6,
      "formula": "23.20% × 3",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [35.01,37.89,40.74,44.76,47.64,50.94,55.53,60.12,64.71,69.6],
      "segmentsByLevel": [[[11.67,3]],[[12.63,3]],[[13.58,3]],[[14.92,3]],[[15.88,3]],[[16.98,3]],[[18.51,3]],[[20.04,3]],[[21.57,3]],[[23.2,3]]]
    },
    {
      "id": "mech_na2",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 92.83,
      "formula": "18.57% + 74.26%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [46.7,50.53,54.35,59.72,63.54,67.95,74.08,80.2,86.33,92.83],
      "segmentsByLevel": [[[9.34,1],[37.36,1]],[[10.11,1],[40.42,1]],[[10.87,1],[43.48,1]],[[11.95,1],[47.77,1]],[[12.71,1],[50.83,1]],[[13.59,1],[54.36,1]],[[14.82,1],[59.26,1]],[[16.04,1],[64.16,1]],[[17.27,1],[69.06,1]],[[18.57,1],[74.26,1]]]
    },
    {
      "id": "mech_na3",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 116.53,
      "formula": "3.89% × 6 + 81.54% + 11.65%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [58.64,63.44,68.24,74.95,79.76,85.31,92.96,100.67,108.39,116.53],
      "segmentsByLevel": [[[1.96,6],[41.02,1],[5.86,1]],[[2.12,6],[44.38,1],[6.34,1]],[[2.28,6],[47.74,1],[6.82,1]],[[2.5,6],[52.45,1],[7.5,1]],[[2.66,6],[55.82,1],[7.98,1]],[[2.85,6],[59.68,1],[8.53,1]],[[3.1,6],[65.06,1],[9.3,1]],[[3.36,6],[70.44,1],[10.07,1]],[[3.62,6],[75.83,1],[10.84,1]],[[3.89,6],[81.54,1],[11.65,1]]]
    },
    {
      "id": "mech_na4",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 134.59,
      "formula": "40.38% + 94.21%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [67.7,73.25,78.8,86.57,92.12,98.5,107.39,116.27,125.15,134.59],
      "segmentsByLevel": [[[20.31,1],[47.39,1]],[[21.98,1],[51.27,1]],[[23.64,1],[55.16,1]],[[25.97,1],[60.6,1]],[[27.64,1],[64.48,1]],[[29.55,1],[68.95,1]],[[32.22,1],[75.17,1]],[[34.88,1],[81.39,1]],[[37.55,1],[87.6,1]],[[40.38,1],[94.21,1]]]
    },
    {
      "id": "mech_heavy1",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 92.83,
      "formula": "92.83%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [46.69,50.52,54.35,59.71,63.54,67.94,74.07,80.2,86.32,92.83]
    },
    {
      "id": "mech_heavy2",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 232,
      "formula": "232.00%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [116.69,126.26,135.83,149.23,158.8,169.8,185.11,200.42,215.73,232]
    },
    {
      "id": "mech_air",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 86.31,
      "formula": "73.35% + 4.32% × 3",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [43.4,46.97,50.53,55.52,59.08,63.16,68.87,74.55,80.26,86.31],
      "segmentsByLevel": [[[36.89,1],[2.17,3]],[[39.92,1],[2.35,3]],[[42.94,1],[2.53,3]],[[47.18,1],[2.78,3]],[[50.2,1],[2.96,3]],[[53.68,1],[3.16,3]],[[58.52,1],[3.45,3]],[[63.36,1],[3.73,3]],[[68.2,1],[4.02,3]],[[73.35,1],[4.32,3]]]
    },
    {
      "id": "mech_dodge",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 283.49,
      "formula": "9.45% × 6 + 198.44% + 28.35%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [142.64,154.33,166.03,182.37,194.06,207.51,226.2,244.94,263.64,283.49],
      "segmentsByLevel": [[[4.76,6],[99.82,1],[14.26,1]],[[5.15,6],[108,1],[15.43,1]],[[5.54,6],[116.19,1],[16.6,1]],[[6.08,6],[127.65,1],[18.24,1]],[[6.47,6],[135.83,1],[19.41,1]],[[6.92,6],[145.24,1],[20.75,1]],[[7.54,6],[158.34,1],[22.62,1]],[[8.17,6],[171.43,1],[24.49,1]],[[8.79,6],[184.53,1],[26.37,1]],[[9.45,6],[198.44,1],[28.35,1]]]
    },
    {
      "id": "lib_overdrive",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1004.02,
      "formula": "200.80% + 267.74% × 3",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [505.01,546.42,587.85,645.82,687.23,734.85,801.11,867.34,933.6,1004.02],
      "segmentsByLevel": [[[101,1],[134.67,3]],[[109.29,1],[145.71,3]],[[117.57,1],[156.76,3]],[[129.16,1],[172.22,3]],[[137.45,1],[183.26,3]],[[146.97,1],[195.96,3]],[[160.22,1],[213.63,3]],[[173.47,1],[231.29,3]],[[186.72,1],[248.96,3]],[[200.8,1],[267.74,3]]]
    },
    {
      "id": "lib_finale",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1789.29,
      "formula": "1789.29%",
      "requiresResource": "resource_gate_1",
      "requiresAllResourcesAtLeast": [
        {
          "id": "syncRate",
          "value": 100
        },
        {
          "id": "resonanceRate",
          "value": 100
        }
      ],
      "requiresState": "status_3_option_1",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [900,973.8,1047.6,1150.92,1224.72,1309.59,1427.67,1545.75,1663.83,1789.29]
    },
    {
      "id": "intro_songs",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 134.58,
      "formula": "13.46% × 2 + 107.66%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [67.7,73.26,78.8,86.57,92.14,98.5,107.39,116.27,125.16,134.58],
      "segmentsByLevel": [[[6.77,2],[54.16,1]],[[7.33,2],[58.6,1]],[[7.88,2],[63.04,1]],[[8.66,2],[69.25,1]],[[9.22,2],[73.7,1]],[[9.85,2],[78.8,1]],[[10.74,2],[85.91,1]],[[11.63,2],[93.01,1]],[[12.52,2],[100.12,1]],[[13.46,2],[107.66,1]]]
    },
    {
      "id": "intro_meteoric",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 163.25,
      "formula": "65.30% + 97.95%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [82.12,88.85,95.59,105.02,111.75,119.49,130.27,141.03,151.8,163.25],
      "segmentsByLevel": [[[32.85,1],[49.27,1]],[[35.54,1],[53.31,1]],[[38.24,1],[57.35,1]],[[42.01,1],[63.01,1]],[[44.7,1],[67.05,1]],[[47.8,1],[71.69,1]],[[52.11,1],[78.16,1]],[[56.41,1],[84.62,1]],[[60.72,1],[91.08,1]],[[65.3,1],[97.95,1]]]
    },
    {
      "id": "duet_encore",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 357.9,
      "formula": "17.90% × 4 + 35.79% × 3 + 178.93%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "syncRate",
        "value": 100
      },
      "requiresState": "status_1_option_1",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [180,194.78,209.56,230.2,244.98,261.96,285.57,309.18,332.79,357.9],
      "segmentsByLevel": [[[9,4],[18,3],[90,1]],[[9.74,4],[19.48,3],[97.38,1]],[[10.48,4],[20.96,3],[104.76,1]],[[11.51,4],[23.02,3],[115.1,1]],[[12.25,4],[24.5,3],[122.48,1]],[[13.1,4],[26.2,3],[130.96,1]],[[14.28,4],[28.56,3],[142.77,1]],[[15.46,4],[30.92,3],[154.58,1]],[[16.64,4],[33.28,3],[166.39,1]],[[17.9,4],[35.79,3],[178.93,1]]]
    },
    {
      "id": "duet_overture",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 357.95,
      "formula": "17.90% + 14.92% × 6 + 23.86% × 3 + 59.65% × 3",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "syncRate",
        "value": 100
      },
      "requiresState": "status_1_option_1",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [180,194.81,209.53,230.27,244.99,262.01,285.57,309.22,332.84,357.95],
      "segmentsByLevel": [[[9,1],[7.5,6],[12,3],[30,3]],[[9.74,1],[8.12,6],[12.99,3],[32.46,3]],[[10.48,1],[8.73,6],[13.97,3],[34.92,3]],[[11.51,1],[9.6,6],[15.35,3],[38.37,3]],[[12.25,1],[10.21,6],[16.33,3],[40.83,3]],[[13.1,1],[10.92,6],[17.47,3],[43.66,3]],[[14.28,1],[11.9,6],[19.04,3],[47.59,3]],[[15.46,1],[12.89,6],[20.61,3],[51.53,3]],[[16.64,1],[13.87,6],[22.19,3],[55.47,3]],[[17.9,1],[14.92,6],[23.86,3],[59.65,3]]]
    },
    {
      "id": "tune_starburst",
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 596.43,
      "formula": "596.43%",
      "requiresState": "target_1_option_2",
      "requiresAllStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [300,324.6,349.2,383.64,408.24,436.53,475.89,515.25,554.61,596.43]
    },
    {
      "id": "duet_tune_bonus",
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 109.35,
      "formula": "109.35%",
      "requiresAllStates": [
        "mode_1_option_1",
        "target_2_option_1"
      ],
      "multiplierByLevel": [55,59.51,64.02,70.34,74.85,80.04,87.25,94.47,101.68,109.35]
    }
  ],
  "defaultSkillId": "lib_overdrive",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 27,
  "echoLead": "27:sigillum",
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "required": true,
      "defaultValue": "form_1_option_1",
      "options": [
        {
          "value": "form_1_option_1"
        },
        {
          "value": "form_1_option_2"
        }
      ]
    },
    {
      "id": "mode_1",
      "kind": "mode",
      "required": true,
      "defaultValue": "mode_1_option_1",
      "options": [
        {
          "value": "mode_1_option_1"
        },
        {
          "value": "mode_1_option_2"
        }
      ]
    },
    {
      "id": "status_1",
      "kind": "status",
      "options": [
        {
          "value": "status_1_option_1"
        }
      ]
    },
    {
      "id": "status_2",
      "kind": "status",
      "options": [
        {
          "value": "status_2_option_1"
        }
      ]
    },
    {
      "id": "status_3",
      "kind": "status",
      "options": [
        {
          "value": "status_3_option_1"
        }
      ]
    },
    {
      "id": "status_4",
      "kind": "status",
      "options": [
        {
          "value": "status_4_option_1"
        },
        {
          "value": "status_4_option_2"
        }
      ]
    },
    {
      "id": "target_1",
      "kind": "target",
      "requiresState": "mode_1_option_1",
      "options": [
        {
          "value": "target_1_option_1"
        },
        {
          "value": "target_1_option_2"
        }
      ]
    },
    {
      "id": "target_2",
      "kind": "target",
      "requiresState": "mode_1_option_1",
      "options": [
        {
          "value": "target_2_option_1"
        }
      ]
    },
    {
      "id": "target_3",
      "kind": "target",
      "requiresState": "mode_1_option_2",
      "options": [
        {
          "value": "target_3_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_instant_heavy_amp",
      "zone": "amplify",
      "value": 200,
      "scope": "self",
      "skills": [
        "aemeath_heavy1",
        "aemeath_heavy2",
        "mech_heavy1",
        "mech_heavy2"
      ],
      "requiresState": [
        "status_4_option_1",
        "status_4_option_2"
      ]
    },
    {
      "id": "b_between_tune_cd",
      "zone": "critDamage",
      "value": 60,
      "scope": "self",
      "maxSeq": 2,
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "requiresState": "mode_1_option_1"
    },
    {
      "id": "b_between_tune_final",
      "zone": "amplify",
      "value": 25,
      "scope": "self",
      "maxSeq": 2,
      "skills": [
        "lib_finale"
      ],
      "requiresState": "mode_1_option_1",
      "requiresBuffStacks": {
        "id": "b_between_tune_cd",
        "stacks": 3
      }
    },
    {
      "id": "b_between_fusion_cd",
      "zone": "critDamage",
      "value": 60,
      "scope": "self",
      "maxSeq": 2,
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_2",
      "requiresState": "mode_1_option_2"
    },
    {
      "id": "b_between_fusion_final",
      "zone": "amplify",
      "value": 25,
      "scope": "self",
      "maxSeq": 2,
      "skills": [
        "lib_finale"
      ],
      "requiresState": "mode_1_option_2",
      "requiresBuffStacks": {
        "id": "b_between_fusion_cd",
        "stacks": 2
      }
    },
    {
      "id": "b_duet_tune_trail",
      "zone": "skillMultBonus",
      "value": 120,
      "scope": "self",
      "skills": [
        "duet_tune_bonus"
      ],
      "maxStacks": 30,
      "stackMaxBySeq": [
        {
          "seq": 6,
          "max": 60
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_3",
      "triggerSkills": [
        "duet_tune_bonus"
      ],
      "triggerStacksBySeq": [
        {
          "seq": 6,
          "stacks": 10
        }
      ],
      "requiresAllStates": [
        "mode_1_option_1",
        "target_2_option_1"
      ]
    },
    {
      "id": "b_fusion_trail_extra",
      "zone": "skillMultBonus",
      "effect": "fusion",
      "value": 300,
      "scope": "self",
      "maxStacks": 30,
      "stackMaxBySeq": [
        {
          "seq": 6,
          "max": 60
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_4",
      "skills": [
        "duet_overture",
        "duet_encore"
      ],
      "triggerSkills": [
        "duet_overture",
        "duet_encore"
      ],
      "triggerStacksBySeq": [
        {
          "seq": 6,
          "stacks": 10
        }
      ],
      "requiresAllStates": [
        "mode_1_option_2",
        "target_3_option_1"
      ]
    },
    {
      "id": "b_stardust_fusion_extra",
      "zone": "skillMultBonus",
      "effect": "fusion",
      "value": 200,
      "scope": "self",
      "skills": [
        "duet_overture",
        "duet_encore"
      ],
      "requiresAllStates": [
        "mode_1_option_2",
        "status_2_option_1"
      ]
    },
    {
      "id": "b_outro_tune_base",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "requiresState": "mode_1_option_1",
      "duration": 20,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_tune_shift",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "requiresState": "mode_1_option_1",
      "duration": 20,
      "triggerOutro": true
    },
    {
      "id": "b_outro_fusion_base",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "duration": 20,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_fusion_burst",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "requiresState": "mode_1_option_2",
      "duration": 20,
      "triggerOutro": true
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_heavy_cd",
          "zone": "critDamage",
          "value": 300,
          "scope": "self",
          "skills": [
            "aemeath_heavy1",
            "aemeath_heavy2",
            "mech_heavy1",
            "mech_heavy2"
          ],
          "requiresState": [
            "status_4_option_1",
            "status_4_option_2"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_duet_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "duet_overture",
            "duet_encore"
          ]
        },
        {
          "id": "k2_tune_bonus",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "duet_tune_bonus"
          ],
          "maxStacks": 5,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_5",
          "requiresAllStates": [
            "mode_1_option_1",
            "target_2_option_1"
          ]
        },
        {
          "id": "k2_stardust_fusion_extra",
          "zone": "skillMultBonus",
          "effect": "fusion",
          "value": 200,
          "scope": "self",
          "skills": [
            "duet_overture",
            "duet_encore"
          ],
          "requiresAllStates": [
            "mode_1_option_2",
            "status_2_option_1"
          ]
        },
        {
          "id": "k2_fusion_trail_extra",
          "zone": "skillMultBonus",
          "effect": "fusion",
          "value": 150,
          "scope": "self",
          "maxStacks": 30,
          "stackMaxBySeq": [
            {
              "seq": 6,
              "max": 60
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_4",
          "skills": [
            "duet_overture",
            "duet_encore"
          ],
          "requiresAllStates": [
            "mode_1_option_2",
            "target_3_option_1"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_finale_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib_finale"
          ]
        },
        {
          "id": "k3_overdrive_mult",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "lib_overdrive"
          ]
        },
        {
          "id": "k3_between_tune_cd",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "maxStacks": 1,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_6",
          "requiresState": "mode_1_option_1"
        },
        {
          "id": "k3_between_tune_final",
          "zone": "amplify",
          "value": 25,
          "scope": "self",
          "skills": [
            "lib_finale"
          ],
          "requiresState": "mode_1_option_1",
          "requiresBuffStacks": {
            "id": "k3_between_tune_cd",
            "stacks": 1
          }
        },
        {
          "id": "k3_between_fusion_cd",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "maxStacks": 1,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_7",
          "requiresState": "mode_1_option_2"
        },
        {
          "id": "k3_between_fusion_final",
          "zone": "amplify",
          "value": 25,
          "scope": "self",
          "skills": [
            "lib_finale"
          ],
          "requiresState": "mode_1_option_2",
          "requiresBuffStacks": {
            "id": "k3_between_fusion_cd",
            "stacks": 1
          }
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_all",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro_songs",
            "intro_meteoric",
            "sync_armament_merge",
            "sync_call_dawn",
            "duet_overture",
            "duet_encore"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_burst_vuln",
          "zone": "vulnerability",
          "damageType": "resonanceLiberation",
          "value": 40,
          "scope": "self"
        },
        {
          "id": "k6_tune_fixed_crit",
          "zone": "fixedCrit",
          "damageType": [
            "tuneRupture",
            "tuneRuptureDmg"
          ],
          "critRate": 80,
          "critDamage": 275,
          "scope": "self",
          "requiresState": "mode_1_option_1"
        },
        {
          "id": "k6_fusion_fixed_crit",
          "zone": "fixedCrit",
          "effect": "fusion",
          "critRate": 80,
          "critDamage": 275,
          "scope": "self",
          "requiresState": "mode_1_option_2"
        }
      ]
    }
  ],
  "modes": null
});
