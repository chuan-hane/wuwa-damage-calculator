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
      "formula": "41.76%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.6,
      "formula": "34.80% + 34.80%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 164.25,
      "formula": "24.64% + 24.64% + 24.64% + 24.64% + 65.69%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 116.91,
      "formula": "116.91%"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 165.61,
      "formula": "165.61%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 278.36,
      "formula": "194.84% + 27.84% × 3"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 215.52,
      "formula": "71.84% × 3"
    },
    {
      "id": "skill_hold",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 215.53,
      "formula": "32.33% + 32.33% × 3 + 86.21%"
    },
    {
      "id": "liberation",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 795.24,
      "formula": "795.24%",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "heavy",
      "multiplier": 238.62,
      "formula": "9.55% × 5 + 47.72% + 143.15%",
      "triggerEvents": [
        "introEntry"
      ]
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
      }
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
      }
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
      }
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
      }
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
      "requiresState": "status_1"
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
      "requiresState": "status_1"
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
      "requiresState": "status_1"
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
      "requiresResource": "resource_gate_2"
    },
    {
      "id": "ink_exit",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 600,
      "formula": "600%",
      "seq": 6,
      "requiresResource": "resource_gate_3"
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
      "duration": 14
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
