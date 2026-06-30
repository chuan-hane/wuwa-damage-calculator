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
      "formula": "69.46%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 133.18,
      "formula": "26.64% × 2 + 79.90%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 167,
      "formula": "41.75% × 4"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.4,
      "formula": "113.40%"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 126.07,
      "formula": "126.07%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 244.95,
      "formula": "40.83% × 2 + 163.29%"
    },
    {
      "id": "skill_chi",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 334.6,
      "formula": "334.60%"
    },
    {
      "id": "skill_down",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 258.73,
      "formula": "258.73%"
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
      ]
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
      }
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      "id": "lib_tick",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 29.83,
      "formula": "29.83%"
    },
    {
      "id": "lib_burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 636.2,
      "formula": "636.20%"
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
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 169,
      "formula": "33.80% × 3 + 67.60%",
      "triggerEvents": [
        "introEntry"
      ]
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
      "duration": 14
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
