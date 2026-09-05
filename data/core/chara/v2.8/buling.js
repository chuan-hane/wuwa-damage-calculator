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
      "formula": "20.73% × 2",
      "multiplierByLevel": [20.86,22.56,24.28,26.68,28.38,30.34,33.08,35.82,38.56,41.46],
      "segmentsByLevel": [[[10.43,2]],[[11.28,2]],[[12.14,2]],[[13.34,2]],[[14.19,2]],[[15.17,2]],[[16.54,2]],[[17.91,2]],[[19.28,2]],[[20.73,2]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 66.9,
      "formula": "33.45% × 2",
      "multiplierByLevel": [33.66,36.42,39.18,43.04,45.8,48.98,53.38,57.8,62.22,66.9],
      "segmentsByLevel": [[[16.83,2]],[[18.21,2]],[[19.59,2]],[[21.52,2]],[[22.9,2]],[[24.49,2]],[[26.69,2]],[[28.9,2]],[[31.11,2]],[[33.45,2]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.02,
      "formula": "23.51% × 2",
      "multiplierByLevel": [23.66,25.6,27.54,30.26,32.2,34.42,37.52,40.62,43.74,47.02],
      "segmentsByLevel": [[[11.83,2]],[[12.8,2]],[[13.77,2]],[[15.13,2]],[[16.1,2]],[[17.21,2]],[[18.76,2]],[[20.31,2]],[[21.87,2]],[[23.51,2]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.64,
      "formula": "93.64%",
      "multiplierByLevel": [47.1,50.97,54.83,60.24,64.1,68.54,74.72,80.9,87.08,93.64]
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
      ],
      "multiplierByLevel": [90,97.38,104.76,115.1,122.48,130.96,142.77,154.58,166.39,178.93]
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
      ],
      "multiplierByLevel": [45,48.69,52.38,57.55,61.24,65.48,71.39,77.29,83.2,89.47]
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%",
      "multiplierByLevel": [37.2,40.26,43.31,47.58,50.63,54.13,59.02,63.9,68.78,73.96]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.02,
      "formula": "23.51% × 2",
      "multiplierByLevel": [23.66,25.6,27.54,30.26,32.2,34.42,37.52,40.62,43.74,47.02],
      "segmentsByLevel": [[[11.83,2]],[[12.8,2]],[[13.77,2]],[[15.13,2]],[[16.1,2]],[[17.21,2]],[[18.76,2]],[[20.31,2]],[[21.87,2]],[[23.51,2]]]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 58.4,
      "formula": "58.40%",
      "multiplierByLevel": [29.37,31.78,34.19,37.56,39.97,42.74,46.59,50.45,54.3,58.4]
    },
    {
      "id": "skill_pull_tick",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 58.4,
      "formula": "5.84% × 10",
      "multiplierByLevel": [29.4,31.8,34.2,37.6,40,42.8,46.6,50.5,54.3,58.4],
      "segmentsByLevel": [[[2.94,10]],[[3.18,10]],[[3.42,10]],[[3.76,10]],[[4,10]],[[4.28,10]],[[4.66,10]],[[5.05,10]],[[5.43,10]],[[5.84,10]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 357.86,
      "formula": "357.86%",
      "multiplierByLevel": [180,194.76,209.52,230.19,244.95,261.92,285.54,309.15,332.77,357.86]
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
      ],
      "multiplierByLevel": [65.94,71.35,76.76,84.33,89.74,95.95,104.61,113.26,121.91,131.1]
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
      "fallbackSkillId": "lib",
      "multiplierByLevel": [270,292.14,314.28,345.28,367.42,392.88,428.31,463.73,499.15,536.79]
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
      ],
      "multiplierByLevel": [10,10.82,11.64,12.79,13.61,14.56,15.87,17.18,18.49,19.89]
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
      "duration": 30,
      "triggerOutro": true,
      "defaultActive": false
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
