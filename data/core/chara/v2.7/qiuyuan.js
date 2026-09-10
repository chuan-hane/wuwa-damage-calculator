WUWA.register({
  "id": "qiuyuan",
  "aliases": [],
  "debut": 2.7,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "emerald_sentence",
  "portrait": "",
  "base": {
    "hp": 12237,
    "attack": 375,
    "defense": 1197,
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
      "id": "swordGauge",
      "max": 600,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 41.76,
      "formula": "41.76%",
      "multiplierByLevel": [21,22.73,24.45,26.86,28.58,30.56,33.32,36.07,38.83,41.76]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.6,
      "formula": "34.80% + 34.80%",
      "multiplierByLevel": [35,37.88,40.74,44.76,47.64,50.94,55.54,60.12,64.72,69.6],
      "segmentsByLevel": [[[17.5,1],[17.5,1]],[[18.94,1],[18.94,1]],[[20.37,1],[20.37,1]],[[22.38,1],[22.38,1]],[[23.82,1],[23.82,1]],[[25.47,1],[25.47,1]],[[27.77,1],[27.77,1]],[[30.06,1],[30.06,1]],[[32.36,1],[32.36,1]],[[34.8,1],[34.8,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 164.25,
      "formula": "24.64% + 24.64% + 24.64% + 24.64% + 65.69%",
      "multiplierByLevel": [82.6,89.39,96.18,105.66,112.45,120.2,131.06,141.87,152.73,164.25],
      "segmentsByLevel": [[[12.39,1],[12.39,1],[12.39,1],[12.39,1],[33.04,1]],[[13.41,1],[13.41,1],[13.41,1],[13.41,1],[35.75,1]],[[14.43,1],[14.43,1],[14.43,1],[14.43,1],[38.46,1]],[[15.85,1],[15.85,1],[15.85,1],[15.85,1],[42.26,1]],[[16.87,1],[16.87,1],[16.87,1],[16.87,1],[44.97,1]],[[18.03,1],[18.03,1],[18.03,1],[18.03,1],[48.08,1]],[[19.66,1],[19.66,1],[19.66,1],[19.66,1],[52.42,1]],[[21.28,1],[21.28,1],[21.28,1],[21.28,1],[56.75,1]],[[22.91,1],[22.91,1],[22.91,1],[22.91,1],[61.09,1]],[[24.64,1],[24.64,1],[24.64,1],[24.64,1],[65.69,1]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 116.91,
      "formula": "116.91%",
      "multiplierByLevel": [58.8,63.63,68.45,75.2,80.02,85.56,93.28,100.99,108.71,116.91]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 165.61,
      "formula": "165.61%",
      "multiplierByLevel": [83.3,90.14,96.97,106.53,113.36,121.21,132.14,143.07,154,165.61]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 278.36,
      "formula": "194.84% + 27.84% × 3",
      "multiplierByLevel": [140,151.49,162.98,179.06,190.54,203.74,222.09,240.47,258.85,278.36],
      "segmentsByLevel": [[[98,1],[14,3]],[[106.04,1],[15.15,3]],[[114.08,1],[16.3,3]],[[125.33,1],[17.91,3]],[[133.36,1],[19.06,3]],[[142.6,1],[20.38,3]],[[155.46,1],[22.21,3]],[[168.32,1],[24.05,3]],[[181.18,1],[25.89,3]],[[194.84,1],[27.84,3]]]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 215.52,
      "formula": "71.84% × 3",
      "multiplierByLevel": [108.42,117.3,126.18,138.63,147.54,157.74,171.96,186.18,200.4,215.52],
      "segmentsByLevel": [[[36.14,3]],[[39.1,3]],[[42.06,3]],[[46.21,3]],[[49.18,3]],[[52.58,3]],[[57.32,3]],[[62.06,3]],[[66.8,3]],[[71.84,3]]]
    },
    {
      "id": "skill_hold",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 215.53,
      "formula": "32.33% + 32.33% × 3 + 86.21%",
      "multiplierByLevel": [108.4,117.32,126.2,138.65,147.53,157.74,171.99,186.2,200.4,215.53],
      "segmentsByLevel": [[[16.26,1],[16.26,3],[43.36,1]],[[17.6,1],[17.6,3],[46.92,1]],[[18.93,1],[18.93,3],[50.48,1]],[[20.8,1],[20.8,3],[55.45,1]],[[22.13,1],[22.13,3],[59.01,1]],[[23.66,1],[23.66,3],[63.1,1]],[[25.8,1],[25.8,3],[68.79,1]],[[27.93,1],[27.93,3],[74.48,1]],[[30.06,1],[30.06,3],[80.16,1]],[[32.33,1],[32.33,3],[86.21,1]]]
    },
    {
      "id": "liberation",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 795.24,
      "formula": "795.24%",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [400,432.8,465.6,511.52,544.32,582.04,634.52,687,739.48,795.24]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "heavy",
      "multiplier": 238.62,
      "formula": "9.55% × 5 + 47.72% + 143.15%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [120,129.88,139.7,153.48,163.34,174.65,190.4,206.13,221.88,238.62],
      "segmentsByLevel": [[[4.8,5],[24,1],[72,1]],[[5.2,5],[25.97,1],[77.91,1]],[[5.59,5],[27.94,1],[83.81,1]],[[6.14,5],[30.7,1],[92.08,1]],[[6.54,5],[32.66,1],[97.98,1]],[[6.99,5],[34.93,1],[104.77,1]],[[7.62,5],[38.08,1],[114.22,1]],[[8.25,5],[41.22,1],[123.66,1]],[[8.88,5],[44.37,1],[133.11,1]],[[9.55,5],[47.72,1],[143.15,1]]]
    },
    {
      "id": "ink1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 119.3,
      "formula": "59.65% + 59.65%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "swordGauge",
        "value": 200
      },
      "multiplierByLevel": [60,64.92,69.84,76.74,81.66,87.32,95.18,103.06,110.94,119.3],
      "segmentsByLevel": [[[30,1],[30,1]],[[32.46,1],[32.46,1]],[[34.92,1],[34.92,1]],[[38.37,1],[38.37,1]],[[40.83,1],[40.83,1]],[[43.66,1],[43.66,1]],[[47.59,1],[47.59,1]],[[51.53,1],[51.53,1]],[[55.47,1],[55.47,1]],[[59.65,1],[59.65,1]]]
    },
    {
      "id": "ink2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 185.5,
      "formula": "55.65% + 55.65% + 74.20%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "swordGauge",
        "value": 200
      },
      "multiplierByLevel": [93.3,100.97,108.63,119.33,126.97,135.77,148.03,160.26,172.5,185.5],
      "segmentsByLevel": [[[27.99,1],[27.99,1],[37.32,1]],[[30.29,1],[30.29,1],[40.39,1]],[[32.59,1],[32.59,1],[43.45,1]],[[35.8,1],[35.8,1],[47.73,1]],[[38.09,1],[38.09,1],[50.79,1]],[[40.73,1],[40.73,1],[54.31,1]],[[44.41,1],[44.41,1],[59.21,1]],[[48.08,1],[48.08,1],[64.1,1]],[[51.75,1],[51.75,1],[69,1]],[[55.65,1],[55.65,1],[74.2,1]]]
    },
    {
      "id": "ink3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 145.77,
      "formula": "14.58% + 14.58% × 4 + 72.87%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "swordGauge",
        "value": 200
      },
      "multiplierByLevel": [73.3,79.36,85.37,93.77,99.78,106.68,116.29,125.9,135.56,145.77],
      "segmentsByLevel": [[[7.33,1],[7.33,4],[36.65,1]],[[7.94,1],[7.94,4],[39.66,1]],[[8.54,1],[8.54,4],[42.67,1]],[[9.38,1],[9.38,4],[46.87,1]],[[9.98,1],[9.98,4],[49.88,1]],[[10.67,1],[10.67,4],[53.33,1]],[[11.63,1],[11.63,4],[58.14,1]],[[12.59,1],[12.59,4],[62.95,1]],[[13.56,1],[13.56,4],[67.76,1]],[[14.58,1],[14.58,4],[72.87,1]]]
    },
    {
      "id": "ink4",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 172.37,
      "formula": "172.37%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "swordGauge",
        "value": 200
      },
      "multiplierByLevel": [86.7,93.81,100.92,110.88,117.99,126.16,137.54,148.91,160.29,172.37]
    },
    {
      "id": "answer_teach",
      "legacyIds": [
        "xg"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 457.2,
      "formula": "91.44% + 91.44% + 91.44% + 91.44% + 91.44%",
      "requiresState": "status_1",
      "multiplierByLevel": [229.95,248.85,267.7,294.1,312.95,334.65,364.8,394.95,425.15,457.2],
      "segmentsByLevel": [[[45.99,1],[45.99,1],[45.99,1],[45.99,1],[45.99,1]],[[49.77,1],[49.77,1],[49.77,1],[49.77,1],[49.77,1]],[[53.54,1],[53.54,1],[53.54,1],[53.54,1],[53.54,1]],[[58.82,1],[58.82,1],[58.82,1],[58.82,1],[58.82,1]],[[62.59,1],[62.59,1],[62.59,1],[62.59,1],[62.59,1]],[[66.93,1],[66.93,1],[66.93,1],[66.93,1],[66.93,1]],[[72.96,1],[72.96,1],[72.96,1],[72.96,1],[72.96,1]],[[78.99,1],[78.99,1],[78.99,1],[78.99,1],[78.99,1]],[[85.03,1],[85.03,1],[85.03,1],[85.03,1],[85.03,1]],[[91.44,1],[91.44,1],[91.44,1],[91.44,1],[91.44,1]]]
    },
    {
      "id": "answer_save",
      "legacyIds": [
        "gg"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 209.67,
      "formula": "38.44% × 3 + 31.45% + 31.45% + 31.45%",
      "requiresState": "status_1",
      "multiplierByLevel": [105.48,114.12,122.79,134.88,143.52,153.48,167.31,181.14,194.97,209.67],
      "segmentsByLevel": [[[19.34,3],[15.82,1],[15.82,1],[15.82,1]],[[20.92,3],[17.12,1],[17.12,1],[17.12,1]],[[22.51,3],[18.42,1],[18.42,1],[18.42,1]],[[24.73,3],[20.23,1],[20.23,1],[20.23,1]],[[26.31,3],[21.53,1],[21.53,1],[21.53,1]],[[28.14,3],[23.02,1],[23.02,1],[23.02,1]],[[30.67,3],[25.1,1],[25.1,1],[25.1,1]],[[33.21,3],[27.17,1],[27.17,1],[27.17,1]],[[35.74,3],[29.25,1],[29.25,1],[29.25,1]],[[38.44,3],[31.45,1],[31.45,1],[31.45,1]]]
    },
    {
      "id": "answer_sacrifice",
      "legacyIds": [
        "zl"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 217.7,
      "formula": "217.70%",
      "requiresState": "status_1",
      "multiplierByLevel": [109.5,118.48,127.46,140.03,149.01,159.34,173.7,188.07,202.44,217.7]
    },
    {
      "id": "skill_lotuscloak",
      "legacyIds": [
        "hesuo"
      ],
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 500,
      "formula": "500%",
      "seq": 3,
      "requiresResource": "resource_gate_2",
      "fixedLevel": true
    },
    {
      "id": "ink_exit",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 600,
      "formula": "600%",
      "seq": 6,
      "requiresResource": "resource_gate_3",
      "fixedLevel": true
    },
    {
      "id": "c3_outro_sheath_fallen",
      "category": "outroSkill",
      "damageType": "echoSkill",
      "multiplier": 500,
      "formula": "500%",
      "seq": 3,
      "requiresResource": "resource_gate_2",
      "triggeredDamage": true,
      "fixedLevel": true
    },
    {
      "id": "outro_strike_before_ready",
      "category": "outroSkill",
      "damageType": "echoSkill",
      "multiplier": 100,
      "formula": "100%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "liberation",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "echoSkillDmg"
  ],
  "echoSet": 21,
  "echoSet2": 4,
  "combatStates": [
    {
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
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
    }
  ],
  "buffs": [
    {
      "id": "b_liberation_cd",
      "zone": "critDamage",
      "scope": "team",
      "defaultActive": false,
      "triggerSkills": [
        "liberation"
      ],
      "duration": 30,
      "scaleBy": {
        "stat": "critRate",
        "statBonus": -50,
        "rate": 2,
        "min": 0,
        "cap": 30,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_zhuzhao",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 30,
      "scope": "team",
      "requiresState": "buff_1_option_1",
      "duration": 30
    },
    {
      "id": "b_qiecongrong",
      "zone": "vulnerability",
      "value": 50,
      "scope": "self",
      "skills": [
        "answer_teach",
        "answer_save",
        "answer_sacrifice"
      ],
      "requiresState": "status_1_option_1",
      "duration": 10
    },
    {
      "id": "b_jinyao",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "outro",
      "zone": "amplify",
      "damageType": "echoSkill",
      "value": 50,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_echo_amp",
          "zone": "amplify",
          "damageType": "echoSkill",
          "value": 30,
          "scope": "team",
          "requiresState": "buff_1_option_1",
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_liberation",
          "multAdd": 500,
          "scope": "self",
          "skills": [
            "liberation"
          ]
        },
        {
          "id": "k3_answer",
          "multAdd": 600,
          "scope": "self",
          "skills": [
            "answer_teach",
            "answer_save",
            "answer_sacrifice"
          ],
          "requiresState": "status_1",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_def",
          "zone": "defIgnore",
          "value": 15,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_cd",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_lotuscloak"
          ],
          "duration": 6
        }
      ]
    }
  ],
  "modes": null
});
