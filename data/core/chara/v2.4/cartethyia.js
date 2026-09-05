WUWA.register({
  "id": "cartethyia",
  "aliases": [],
  "debut": 2.4,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "windErosion"
  ],
  "effectBaseCaps": {
    "windErosion": 3
  },
  "signatureWeaponId": "defiers_thorn",
  "portrait": "",
  "base": {
    "hp": 14800,
    "attack": 312,
    "defense": 611,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critRate": 8,
      "hpPct": 12
    }
  },
  "resources": [
    {
      "id": "resolve",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 4.78,
      "formula": "4.78%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [2.41,2.6,2.8,3.08,3.27,3.5,3.82,4.13,4.45,4.78]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 13.13,
      "formula": "3.94% + 3.94% + 5.25%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [6.6,7.14,7.69,8.44,8.99,9.6,10.47,11.33,12.2,13.13],
      "segmentsByLevel": [[[1.98,1],[1.98,1],[2.64,1]],[[2.14,1],[2.14,1],[2.86,1]],[[2.31,1],[2.31,1],[3.07,1]],[[2.53,1],[2.53,1],[3.38,1]],[[2.7,1],[2.7,1],[3.59,1]],[[2.88,1],[2.88,1],[3.84,1]],[[3.14,1],[3.14,1],[4.19,1]],[[3.4,1],[3.4,1],[4.53,1]],[[3.66,1],[3.66,1],[4.88,1]],[[3.94,1],[3.94,1],[5.25,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 17.12,
      "formula": "4.28% + 4.28% + 4.28% + 4.28%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [8.6,9.32,10.04,11,11.72,12.52,13.64,14.8,15.92,17.12],
      "segmentsByLevel": [[[2.15,1],[2.15,1],[2.15,1],[2.15,1]],[[2.33,1],[2.33,1],[2.33,1],[2.33,1]],[[2.51,1],[2.51,1],[2.51,1],[2.51,1]],[[2.75,1],[2.75,1],[2.75,1],[2.75,1]],[[2.93,1],[2.93,1],[2.93,1],[2.93,1]],[[3.13,1],[3.13,1],[3.13,1],[3.13,1]],[[3.41,1],[3.41,1],[3.41,1],[3.41,1]],[[3.7,1],[3.7,1],[3.7,1],[3.7,1]],[[3.98,1],[3.98,1],[3.98,1],[3.98,1]],[[4.28,1],[4.28,1],[4.28,1],[4.28,1]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 15.1,
      "formula": "2.52% × 3 + 7.54%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [7.61,8.22,8.86,9.71,10.36,11.04,12.05,13.06,14.04,15.1],
      "segmentsByLevel": [[[1.27,3],[3.8,1]],[[1.37,3],[4.11,1]],[[1.48,3],[4.42,1]],[[1.62,3],[4.85,1]],[[1.73,3],[5.17,1]],[[1.84,3],[5.52,1]],[[2.01,3],[6.02,1]],[[2.18,3],[6.52,1]],[[2.34,3],[7.02,1]],[[2.52,3],[7.54,1]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 12.48,
      "formula": "2.08% × 3 + 6.24%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [6.29,6.82,7.31,8.03,8.56,9.16,9.96,10.79,11.62,12.48],
      "segmentsByLevel": [[[1.05,3],[3.14,1]],[[1.14,3],[3.4,1]],[[1.22,3],[3.65,1]],[[1.34,3],[4.01,1]],[[1.43,3],[4.27,1]],[[1.53,3],[4.57,1]],[[1.66,3],[4.98,1]],[[1.8,3],[5.39,1]],[[1.94,3],[5.8,1]],[[2.08,3],[6.24,1]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 5.65,
      "formula": "5.65%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [2.84,3.08,3.31,3.64,3.87,4.14,4.51,4.88,5.25,5.65]
    },
    {
      "id": "air_one",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 5.65,
      "formula": "5.65%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [2.84,3.08,3.31,3.64,3.87,4.14,4.51,4.88,5.25,5.65]
    },
    {
      "id": "air_two",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 9.9,
      "formula": "3.30% × 3",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [4.98,5.4,5.79,6.36,6.78,7.23,7.89,8.55,9.21,9.9],
      "segmentsByLevel": [[[1.66,3]],[[1.8,3]],[[1.93,3]],[[2.12,3]],[[2.26,3]],[[2.41,3]],[[2.63,3]],[[2.85,3]],[[3.07,3]],[[3.3,3]]]
    },
    {
      "id": "air_three",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 33.87,
      "formula": "11.29% × 3",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [17.04,18.45,19.83,21.81,23.19,24.81,27.03,29.28,31.5,33.87],
      "segmentsByLevel": [[[5.68,3]],[[6.15,3]],[[6.61,3]],[[7.27,3]],[[7.73,3]],[[8.27,3]],[[9.01,3]],[[9.76,3]],[[10.5,3]],[[11.29,3]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 27.4,
      "formula": "6.85% + 6.85% + 6.85% + 6.85%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [13.8,14.92,16.04,17.64,18.76,20.08,21.88,23.68,25.48,27.4],
      "segmentsByLevel": [[[3.45,1],[3.45,1],[3.45,1],[3.45,1]],[[3.73,1],[3.73,1],[3.73,1],[3.73,1]],[[4.01,1],[4.01,1],[4.01,1],[4.01,1]],[[4.41,1],[4.41,1],[4.41,1],[4.41,1]],[[4.69,1],[4.69,1],[4.69,1],[4.69,1]],[[5.02,1],[5.02,1],[5.02,1],[5.02,1]],[[5.47,1],[5.47,1],[5.47,1],[5.47,1]],[[5.92,1],[5.92,1],[5.92,1],[5.92,1]],[[6.37,1],[6.37,1],[6.37,1],[6.37,1]],[[6.85,1],[6.85,1],[6.85,1],[6.85,1]]]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 29.53,
      "formula": "6.89% × 3 + 8.86%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [14.87,16.08,17.31,19.02,20.23,21.64,23.57,25.54,27.47,29.53],
      "segmentsByLevel": [[[3.47,3],[4.46,1]],[[3.75,3],[4.83,1]],[[4.04,3],[5.19,1]],[[4.44,3],[5.7,1]],[[4.72,3],[6.07,1]],[[5.05,3],[6.49,1]],[[5.5,3],[7.07,1]],[[5.96,3],[7.66,1]],[[6.41,3],[8.24,1]],[[6.89,3],[8.86,1]]]
    },
    {
      "id": "lib_tideblade",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "hp",
      "multiplier": 91.84,
      "formula": "13.12% × 7",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "resolve",
        "value": 120
      },
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [46.2,49.98,53.76,59.08,62.86,67.27,73.29,79.38,85.4,91.84],
      "segmentsByLevel": [[[6.6,7]],[[7.14,7]],[[7.68,7]],[[8.44,7]],[[8.98,7]],[[9.61,7]],[[10.47,7]],[[11.34,7]],[[12.2,7]],[[13.12,7]]]
    },
    {
      "id": "intro_past",
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "hp",
      "multiplier": 12.48,
      "formula": "2.08% × 3 + 6.24%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [6.29,6.82,7.31,8.03,8.56,9.16,9.96,10.79,11.62,12.48],
      "segmentsByLevel": [[[1.05,3],[3.14,1]],[[1.14,3],[3.4,1]],[[1.22,3],[3.65,1]],[[1.34,3],[4.01,1]],[[1.43,3],[4.27,1]],[[1.53,3],[4.57,1]],[[1.66,3],[4.98,1]],[[1.8,3],[5.39,1]],[[1.94,3],[5.8,1]],[[2.08,3],[6.24,1]]]
    },
    {
      "id": "intro_future",
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "hp",
      "multiplier": 14.25,
      "formula": "4.28% + 9.97%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [7.17,7.76,8.35,9.16,9.76,10.43,11.37,12.3,13.25,14.25],
      "segmentsByLevel": [[[2.15,1],[5.02,1]],[[2.33,1],[5.43,1]],[[2.51,1],[5.84,1]],[[2.75,1],[6.41,1]],[[2.93,1],[6.83,1]],[[3.13,1],[7.3,1]],[[3.41,1],[7.96,1]],[[3.69,1],[8.61,1]],[[3.98,1],[9.27,1]],[[4.28,1],[9.97,1]]]
    },
    {
      "id": "fl_na1",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 6.49,
      "formula": "6.49%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [3.27,3.54,3.8,4.18,4.45,4.75,5.18,5.61,6.04,6.49]
    },
    {
      "id": "fl_na2",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 9.09,
      "formula": "3.63% + 1.82% + 1.82% + 1.82%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [4.59,4.95,5.34,5.84,6.2,6.65,7.24,7.84,8.44,9.09],
      "segmentsByLevel": [[[1.83,1],[0.92,1],[0.92,1],[0.92,1]],[[1.98,1],[0.99,1],[0.99,1],[0.99,1]],[[2.13,1],[1.07,1],[1.07,1],[1.07,1]],[[2.33,1],[1.17,1],[1.17,1],[1.17,1]],[[2.48,1],[1.24,1],[1.24,1],[1.24,1]],[[2.66,1],[1.33,1],[1.33,1],[1.33,1]],[[2.89,1],[1.45,1],[1.45,1],[1.45,1]],[[3.13,1],[1.57,1],[1.57,1],[1.57,1]],[[3.37,1],[1.69,1],[1.69,1],[1.69,1]],[[3.63,1],[1.82,1],[1.82,1],[1.82,1]]]
    },
    {
      "id": "fl_na3",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 10.65,
      "formula": "2.13% + 2.13% + 2.13% + 4.26%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [5.39,5.8,6.25,6.85,7.3,7.8,8.5,9.2,9.9,10.65],
      "segmentsByLevel": [[[1.08,1],[1.08,1],[1.08,1],[2.15,1]],[[1.16,1],[1.16,1],[1.16,1],[2.32,1]],[[1.25,1],[1.25,1],[1.25,1],[2.5,1]],[[1.37,1],[1.37,1],[1.37,1],[2.74,1]],[[1.46,1],[1.46,1],[1.46,1],[2.92,1]],[[1.56,1],[1.56,1],[1.56,1],[3.12,1]],[[1.7,1],[1.7,1],[1.7,1],[3.4,1]],[[1.84,1],[1.84,1],[1.84,1],[3.68,1]],[[1.98,1],[1.98,1],[1.98,1],[3.96,1]],[[2.13,1],[2.13,1],[2.13,1],[4.26,1]]]
    },
    {
      "id": "fl_na4",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 13.7,
      "formula": "2.74% × 5",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [6.9,7.45,8.05,8.85,9.4,10.05,10.95,11.85,12.75,13.7],
      "segmentsByLevel": [[[1.38,5]],[[1.49,5]],[[1.61,5]],[[1.77,5]],[[1.88,5]],[[2.01,5]],[[2.19,5]],[[2.37,5]],[[2.55,5]],[[2.74,5]]]
    },
    {
      "id": "fl_na5",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 36,
      "formula": "7.20% + 28.80%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [18.12,19.59,21.08,23.15,24.64,26.35,28.73,31.1,33.48,36],
      "segmentsByLevel": [[[3.63,1],[14.49,1]],[[3.92,1],[15.67,1]],[[4.22,1],[16.86,1]],[[4.63,1],[18.52,1]],[[4.93,1],[19.71,1]],[[5.27,1],[21.08,1]],[[5.75,1],[22.98,1]],[[6.22,1],[24.88,1]],[[6.7,1],[26.78,1]],[[7.2,1],[28.8,1]]]
    },
    {
      "id": "fl_heavy",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 14.25,
      "formula": "4.28% + 9.97%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [7.17,7.76,8.35,9.16,9.76,10.43,11.37,12.3,13.25,14.25],
      "segmentsByLevel": [[[2.15,1],[5.02,1]],[[2.33,1],[5.43,1]],[[2.51,1],[5.84,1]],[[2.75,1],[6.41,1]],[[2.93,1],[6.83,1]],[[3.13,1],[7.3,1]],[[3.41,1],[7.96,1]],[[3.69,1],[8.61,1]],[[3.98,1],[9.27,1]],[[4.28,1],[9.97,1]]]
    },
    {
      "id": "fl_heavy_plus",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 19.45,
      "formula": "7.78% × 2 + 3.89%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [9.78,10.58,11.38,12.5,13.3,14.23,15.53,16.8,18.08,19.45],
      "segmentsByLevel": [[[3.91,2],[1.96,1]],[[4.23,2],[2.12,1]],[[4.55,2],[2.28,1]],[[5,2],[2.5,1]],[[5.32,2],[2.66,1]],[[5.69,2],[2.85,1]],[[6.21,2],[3.11,1]],[[6.72,2],[3.36,1]],[[7.23,2],[3.62,1]],[[7.78,2],[3.89,1]]]
    },
    {
      "id": "fl_upper",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 9.08,
      "formula": "4.54% × 2",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [4.58,4.96,5.32,5.84,6.22,6.66,7.26,7.86,8.46,9.08],
      "segmentsByLevel": [[[2.29,2]],[[2.48,2]],[[2.66,2]],[[2.92,2]],[[3.11,2]],[[3.33,2]],[[3.63,2]],[[3.93,2]],[[4.23,2]],[[4.54,2]]]
    },
    {
      "id": "fl_air1",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 9.06,
      "formula": "2.99% + 2.99% + 3.08%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [4.55,4.94,5.3,5.82,6.21,6.63,7.22,7.82,8.42,9.06],
      "segmentsByLevel": [[[1.5,1],[1.5,1],[1.55,1]],[[1.63,1],[1.63,1],[1.68,1]],[[1.75,1],[1.75,1],[1.8,1]],[[1.92,1],[1.92,1],[1.98,1]],[[2.05,1],[2.05,1],[2.11,1]],[[2.19,1],[2.19,1],[2.25,1]],[[2.38,1],[2.38,1],[2.46,1]],[[2.58,1],[2.58,1],[2.66,1]],[[2.78,1],[2.78,1],[2.86,1]],[[2.99,1],[2.99,1],[3.08,1]]]
    },
    {
      "id": "fl_air2",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 29.55,
      "formula": "7.39% + 7.39% + 14.77%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [14.87,16.08,17.31,19,20.23,21.63,23.56,25.52,27.47,29.55],
      "segmentsByLevel": [[[3.72,1],[3.72,1],[7.43,1]],[[4.02,1],[4.02,1],[8.04,1]],[[4.33,1],[4.33,1],[8.65,1]],[[4.75,1],[4.75,1],[9.5,1]],[[5.06,1],[5.06,1],[10.11,1]],[[5.41,1],[5.41,1],[10.81,1]],[[5.89,1],[5.89,1],[11.78,1]],[[6.38,1],[6.38,1],[12.76,1]],[[6.87,1],[6.87,1],[13.73,1]],[[7.39,1],[7.39,1],[14.77,1]]]
    },
    {
      "id": "fl_air3",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 2.2,
      "formula": "2.20%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [1.11,1.2,1.29,1.42,1.51,1.61,1.76,1.9,2.05,2.2]
    },
    {
      "id": "fl_dodge",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 15.99,
      "formula": "3.20% + 3.20% + 3.20% + 6.39%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [8.05,8.7,9.35,10.29,10.95,11.7,12.75,13.8,14.85,15.99],
      "segmentsByLevel": [[[1.61,1],[1.61,1],[1.61,1],[3.22,1]],[[1.74,1],[1.74,1],[1.74,1],[3.48,1]],[[1.87,1],[1.87,1],[1.87,1],[3.74,1]],[[2.06,1],[2.06,1],[2.06,1],[4.11,1]],[[2.19,1],[2.19,1],[2.19,1],[4.38,1]],[[2.34,1],[2.34,1],[2.34,1],[4.68,1]],[[2.55,1],[2.55,1],[2.55,1],[5.1,1]],[[2.76,1],[2.76,1],[2.76,1],[5.52,1]],[[2.97,1],[2.97,1],[2.97,1],[5.94,1]],[[3.2,1],[3.2,1],[3.2,1],[6.39,1]]]
    },
    {
      "id": "fl_skill_wave",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "stat": "hp",
      "multiplier": 24.8,
      "formula": "1.86% × 4 + 17.36%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [12.49,13.53,14.53,15.97,17,18.19,19.81,21.44,23.06,24.8],
      "segmentsByLevel": [[[0.94,4],[8.73,1]],[[1.02,4],[9.45,1]],[[1.09,4],[10.17,1]],[[1.2,4],[11.17,1]],[[1.28,4],[11.88,1]],[[1.37,4],[12.71,1]],[[1.49,4],[13.85,1]],[[1.61,4],[15,1]],[[1.73,4],[16.14,1]],[[1.86,4],[17.36,1]]]
    },
    {
      "id": "fl_skill_break",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "stat": "hp",
      "multiplier": 24.81,
      "formula": "1.86% × 2 + 7.03% × 3",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [12.5,13.53,14.54,15.96,16.99,18.19,19.81,21.43,23.08,24.81],
      "segmentsByLevel": [[[0.94,2],[3.54,3]],[[1.02,2],[3.83,3]],[[1.09,2],[4.12,3]],[[1.2,2],[4.52,3]],[[1.28,2],[4.81,3]],[[1.37,2],[5.15,3]],[[1.49,2],[5.61,3]],[[1.61,2],[6.07,3]],[[1.73,2],[6.54,3]],[[1.86,2],[7.03,3]]]
    }
  ],
  "defaultSkillId": "lib_tideblade",
  "validSubs": [
    "hpFlat",
    "hpPct",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 17,
  "skillEvents": [
    {
      "skills": [
        "na4"
      ],
      "event": "applyAeroErosion",
      "stacks": 1
    },
    {
      "skills": [
        "skill",
        "intro_past"
      ],
      "event": "applyAeroErosion",
      "stacks": 2
    },
    {
      "seq": 3,
      "skills": [
        "fl_na5",
        "fl_air2",
        "fl_heavy_plus",
        "fl_skill_break"
      ],
      "event": "applyAeroErosion",
      "stacks": 2
    },
    {
      "seq": 6,
      "skills": [
        "lib_tideblade"
      ],
      "event": "applyAeroErosion",
      "stacks": "max"
    }
  ],
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
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
        },
        {
          "value": "buff_1_option_2"
        },
        {
          "value": "buff_1_option_3"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_erosion_base",
      "zone": "amplify",
      "value": 30,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 1
      }
    },
    {
      "id": "b_erosion_extra_4",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 4
      }
    },
    {
      "id": "b_erosion_extra_5",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 5
      }
    },
    {
      "id": "b_erosion_extra_6",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 6
      }
    },
    {
      "id": "b_divine_erosion",
      "zone": "amplify",
      "effect": "windErosion",
      "value": 50,
      "scope": "self",
      "requiresAllStates": [
        "form_1_option_2",
        "buff_1_option_2"
      ]
    },
    {
      "id": "b_tideblade_erosion_1",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 1
      }
    },
    {
      "id": "b_tideblade_erosion_2",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 2
      }
    },
    {
      "id": "b_tideblade_erosion_3",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 3
      }
    },
    {
      "id": "b_tideblade_erosion_4",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 4
      }
    },
    {
      "id": "b_tideblade_erosion_5",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 5
      }
    },
    {
      "id": "outro_aero",
      "zone": "amplify",
      "element": "aero",
      "value": 17.5,
      "scope": "team",
      "requiresAnyEffectStacks": {
        "stacks": 1
      },
      "duration": 20,
      "triggerOutro": true,
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_cd",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "requiresState": "form_1_option_2",
          "maxStacks": 4,
          "defaultStacks": 0,
          "stackResource": "resolve",
          "stackResourceStep": 30,
          "duration": 15
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_cap",
          "zone": "effectCapBonus",
          "effects": [
            "windErosion"
          ],
          "value": 3,
          "scope": "team",
          "requiresState": "form_1_option_2"
        },
        {
          "id": "k2_cartethyia",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "requiresState": "form_1_option_1",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "heavy",
            "dodge",
            "intro_past"
          ]
        },
        {
          "id": "k2_air",
          "zone": "skillMultBonus",
          "value": 200,
          "scope": "self",
          "requiresState": "form_1_option_1",
          "skills": [
            "air",
            "air_one",
            "air_two",
            "air_three"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_tideblade",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "requiresState": "form_1_option_2",
          "skills": [
            "lib_tideblade"
          ]
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
          "triggerEvents": [
            "applyHavocBane",
            "applySpectroFrazzle",
            "applyElectroFlare",
            "applyGlacioChafe",
            "applyAeroErosion"
          ],
          "duration": 20
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
          "id": "k6_fleur_vuln",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "requiresState": "form_1_option_2",
          "skills": [
            "intro_future",
            "fl_na1",
            "fl_na2",
            "fl_na3",
            "fl_na4",
            "fl_na5",
            "fl_heavy",
            "fl_heavy_plus",
            "fl_upper",
            "fl_air1",
            "fl_air2",
            "fl_air3",
            "fl_dodge",
            "fl_skill_wave",
            "fl_skill_break",
            "lib_tideblade"
          ]
        }
      ]
    }
  ],
  "modes": null
});
