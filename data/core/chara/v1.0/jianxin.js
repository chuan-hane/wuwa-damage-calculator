WUWA.register({
  "id": "jianxin",
  "aliases": [],
  "debut": 1,
  "element": "aero",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "abyss_surges",
  "portrait": "",
  "base": {
    "hp": 14112,
    "attack": 337,
    "defense": 1124,
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
      "id": "chi",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.46,
      "formula": "69.46%",
      "multiplierByLevel": [34.94,37.8,40.67,44.68,47.54,50.84,55.42,60.01,64.59,69.46]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 133.18,
      "formula": "26.64% × 2 + 79.90%",
      "multiplierByLevel": [66.99,72.49,77.98,85.68,91.15,97.48,106.28,115.05,123.84,133.18],
      "segmentsByLevel": [[[13.4,2],[40.19,1]],[[14.5,2],[43.49,1]],[[15.6,2],[46.78,1]],[[17.14,2],[51.4,1]],[[18.23,2],[54.69,1]],[[19.5,2],[58.48,1]],[[21.26,2],[63.76,1]],[[23.01,2],[69.03,1]],[[24.77,2],[74.3,1]],[[26.64,2],[79.9,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 167,
      "formula": "41.75% × 4",
      "multiplierByLevel": [84,90.88,97.76,107.4,114.28,122.2,133.24,144.24,155.28,167],
      "segmentsByLevel": [[[21,4]],[[22.72,4]],[[24.44,4]],[[26.85,4]],[[28.57,4]],[[30.55,4]],[[33.31,4]],[[36.06,4]],[[38.82,4]],[[41.75,4]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.4,
      "formula": "113.40%",
      "multiplierByLevel": [57.04,61.72,66.39,72.94,77.62,83,90.48,97.96,105.45,113.4]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 126.07,
      "formula": "126.07%",
      "multiplierByLevel": [63.41,68.61,73.81,81.09,86.29,92.27,100.59,108.91,117.23,126.07]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%",
      "multiplierByLevel": [62,67.09,72.17,79.29,84.37,90.22,98.36,106.49,114.62,123.27]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 244.95,
      "formula": "40.83% × 2 + 163.29%",
      "multiplierByLevel": [123.22,133.31,143.43,157.56,167.67,179.28,195.45,211.61,227.76,244.95],
      "segmentsByLevel": [[[20.54,2],[82.14,1]],[[22.22,2],[88.87,1]],[[23.91,2],[95.61,1]],[[26.26,2],[105.04,1]],[[27.95,2],[111.77,1]],[[29.88,2],[119.52,1]],[[32.58,2],[130.29,1]],[[35.27,2],[141.07,1]],[[37.96,2],[151.84,1]],[[40.83,2],[163.29,1]]]
    },
    {
      "id": "skill_chi",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 334.6,
      "formula": "334.60%",
      "multiplierByLevel": [168.3,182.11,195.91,215.23,229.03,244.9,266.98,289.06,311.14,334.6]
    },
    {
      "id": "skill_down",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 258.73,
      "formula": "258.73%",
      "multiplierByLevel": [130.14,140.81,151.48,166.42,177.09,189.36,206.44,223.51,240.59,258.73]
    },
    {
      "id": "forte_punch",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 248.52,
      "formula": "248.52%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "chi",
        "value": 120
      },
      "fallbackSkillId": "heavy",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [125,135.25,145.5,159.85,170.1,181.89,198.29,214.69,231.09,248.52]
    },
    {
      "id": "forte_channel",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 24.86,
      "formula": "24.86%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "chi",
        "value": 120
      },
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [12.5,13.53,14.55,15.99,17.01,18.19,19.83,21.47,23.11,24.86]
    },
    {
      "id": "forte_small",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 139.17,
      "formula": "139.17%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "chi",
        "value": 120
      },
      "impliedStates": [
        "state_1_option_2"
      ],
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [70,75.74,81.48,89.52,95.26,101.86,111.05,120.23,129.41,139.17]
    },
    {
      "id": "forte_inner",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 377.74,
      "formula": "377.74%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "chi",
        "value": 120
      },
      "impliedStates": [
        "state_1_option_3"
      ],
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [190,205.58,221.16,242.98,258.56,276.47,301.4,326.33,351.26,377.74]
    },
    {
      "id": "forte_outer",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 516.91,
      "formula": "516.91%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "chi",
        "value": 120
      },
      "impliedStates": [
        "state_1_option_4"
      ],
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [260,281.32,302.64,332.49,353.81,378.33,412.44,446.55,480.67,516.91]
    },
    {
      "id": "forte_push",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 218.7,
      "formula": "218.70%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "chi",
        "value": 120
      },
      "fallbackSkillId": "heavy",
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [110,119.02,128.04,140.67,149.69,160.07,174.5,188.93,203.36,218.7]
    },
    {
      "id": "lib_tick",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 29.83,
      "formula": "29.83%",
      "multiplierByLevel": [15,16.23,17.46,19.19,20.42,21.83,23.8,25.77,27.74,29.83]
    },
    {
      "id": "lib_burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 636.2,
      "formula": "636.20%",
      "multiplierByLevel": [320,346.24,372.48,409.22,435.46,465.64,507.62,549.6,591.59,636.2]
    },
    {
      "id": "skill_special_chi",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 556.67,
      "formula": "556.67%",
      "seq": 6,
      "requiresResource": "resource_gate_2",
      "fallbackSkillId": "skill_chi",
      "triggerEvents": [
        "shield"
      ],
      "fixedLevel": true
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 169,
      "formula": "33.80% × 3 + 67.60%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [85,91.99,98.95,108.7,115.69,123.7,134.85,146,157.15,169],
      "segmentsByLevel": [[[17,3],[34,1]],[[18.4,3],[36.79,1]],[[19.79,3],[39.58,1]],[[21.74,3],[43.48,1]],[[23.14,3],[46.27,1]],[[24.74,3],[49.48,1]],[[26.97,3],[53.94,1]],[[29.2,3],[58.4,1]],[[31.43,3],[62.86,1]],[[33.8,3],[67.6,1]]]
    }
  ],
  "defaultSkillId": "lib_burst",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 7,
  "echoLead": "7:bell_borne_geochelone",
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        },
        {
          "value": "state_1_option_2"
        },
        {
          "value": "state_1_option_3"
        },
        {
          "value": "state_1_option_4"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "typeBonus",
      "damageType": "resonanceLiberation",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tick",
        "lib_burst"
      ]
    },
    {
      "id": "b2",
      "zone": "amplify",
      "damageType": "resonanceLiberation",
      "value": 38,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
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
      "buffs": []
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 80,
          "scope": "self",
          "skills": [
            "lib_tick",
            "lib_burst"
          ],
          "defaultActive": false,
          "duration": 14
        }
      ]
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": []
    }
  ],
  "modes": null
});
