WUWA.register({
  "id": "buling",
  "aliases": [],
  "debut": 2.8,
  "element": "electro",
  "weaponType": 5,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "variation",
  "effectTypes": [
    "electro"
  ],
  "portrait": "",
  "base": {
    "hp": 10625,
    "attack": 225,
    "defense": 1258,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "trigramMountain",
      "max": 4,
      "group": "bulingTrigram",
      "groupMax": 4,
      "defaultValue": "max"
    },
    {
      "id": "trigramThunder",
      "max": 4,
      "group": "bulingTrigram",
      "groupMax": 4,
      "defaultValue": 0
    },
    {
      "id": "shaoyin",
      "max": 1,
      "defaultValue": "max"
    },
    {
      "id": "shaoyang",
      "max": 1,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 41.46,
      "formula": "20.73% × 2"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 66.9,
      "formula": "33.45% × 2"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.02,
      "formula": "23.51% × 2"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.64,
      "formula": "93.64%"
    },
    {
      "id": "heavy_yi",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 178.93,
      "formula": "178.93%",
      "requiresAllResourcesAtLeast": [
        {
          "id": "trigramMountain",
          "value": 1
        },
        {
          "id": "trigramThunder",
          "value": 1
        }
      ],
      "triggerEvents": [
        "gainLesserYang"
      ]
    },
    {
      "id": "heavy_xiaoguo",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 89.47,
      "formula": "89.47%",
      "requiresAllResourcesAtLeast": [
        {
          "id": "trigramMountain",
          "value": 1
        },
        {
          "id": "trigramThunder",
          "value": 1
        }
      ],
      "triggerEvents": [
        "gainLesserYang"
      ]
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.02,
      "formula": "23.51% × 2"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 58.4,
      "formula": "58.40%"
    },
    {
      "id": "skill_pull_tick",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 58.4,
      "formula": "5.84% × 10"
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 357.86,
      "formula": "357.86%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 131.1,
      "formula": "131.10%",
      "triggerEvents": [
        "introEntry",
        "applyElectroFlare",
        "heal"
      ]
    },
    {
      "id": "forte_lib",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 536.79,
      "formula": "536.79%",
      "requiresResource": "resource_gate_1",
      "requiresAllResourcesAtLeast": [
        {
          "id": "shaoyin",
          "value": 1
        },
        {
          "id": "shaoyang",
          "value": 1
        }
      ],
      "fallbackSkillId": "lib"
    },
    {
      "id": "field_tick",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 19.89,
      "formula": "19.89%",
      "requiresState": [
        "field_1_option_1",
        "field_1_option_2",
        "field_1_option_3"
      ],
      "triggerEvents": [
        "applyElectroFlare"
      ]
    }
  ],
  "defaultSkillId": "forte_lib",
  "skillEvents": [
    {
      "skills": [
        "intro"
      ],
      "event": "applyElectroFlare",
      "stacks": 4
    },
    {
      "skills": [
        "field_tick"
      ],
      "event": "applyElectroFlare",
      "stacks": 2
    },
    {
      "seq": 5,
      "skills": [
        "forte_lib"
      ],
      "event": "applyElectroFlare",
      "stacks": 6
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 7,
  "echoLead": "7:fallacy_of_no_return",
  "combatStates": [
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        },
        {
          "value": "field_1_option_2"
        },
        {
          "value": "field_1_option_3"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_heal_low_hp",
      "zone": "healingBonus",
      "value": 25,
      "scope": "self",
      "defaultActive": false
    },
    {
      "id": "b_leifa_liangyi",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 10,
      "scope": "team",
      "requiresState": "field_1_option_2"
    },
    {
      "id": "b_leifa_sancai",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 25,
      "scope": "team",
      "requiresState": "field_1_option_3"
    },
    {
      "id": "b_outro",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 30
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critRate",
          "value": 20,
          "scope": "self",
          "skills": [
            "forte_lib"
          ]
        }
      ]
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
          "zone": "healingBonus",
          "value": 20,
          "scope": "self"
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
          "id": "k6",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 25,
          "scope": "team",
          "requiresState": "field_1_option_3"
        }
      ]
    }
  ],
  "modes": null
});
