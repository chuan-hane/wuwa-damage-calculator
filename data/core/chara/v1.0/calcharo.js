WUWA.register({
  "id": "calcharo",
  "aliases": [],
  "debut": 1,
  "element": "electro",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "lustrous_razor",
  "portrait": "",
  "base": {
    "hp": 10500,
    "attack": 437,
    "defense": 1185,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "critDamage": 16
    }
  },
  "resources": [
    {
      "id": "cruelty",
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "killingIntent",
      "max": 5,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 91.46,
      "formula": "45.73% × 2"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 99.41,
      "formula": "99.41%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 212.95,
      "formula": "85.18% + 42.59% × 3"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 265.03,
      "formula": "79.51% × 2 + 106.01%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 206.8,
      "formula": "41.36% × 5"
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 284.91,
      "formula": "66.48% × 3 + 85.47%"
    },
    {
      "id": "skill_extermination_order_1",
      "legacyIds": [
        "s1"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 171.9,
      "formula": "51.57% × 2 + 68.76%"
    },
    {
      "id": "skill_extermination_order_2",
      "legacyIds": [
        "s2"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 257.86,
      "formula": "77.36% × 2 + 103.14%"
    },
    {
      "id": "skill_extermination_order_3",
      "legacyIds": [
        "s3"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 429.74,
      "formula": "214.87% × 2"
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 596.43,
      "formula": "596.43%"
    },
    {
      "id": "lib_necessary",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 397.62,
      "formula": "198.81% × 2",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "lib_hounds_1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 88.07,
      "formula": "88.07%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_hounds_2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 176.14,
      "formula": "35.23% × 2 + 52.84% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_hounds_3",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 163.84,
      "formula": "163.84%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_hounds_4",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 208.92,
      "formula": "34.82% × 6",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_hounds_5",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 300.38,
      "formula": "150.19% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_heavy",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 310.15,
      "formula": "62.03% × 5",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_dodge",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 341.94,
      "formula": "56.99% × 6",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.84,
      "formula": "39.77% × 2 + 59.65% × 2",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_mercy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 391.1,
      "formula": "39.11% × 8 + 78.22%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "cruelty",
        "value": 3
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "forte_death_messenger",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 977.69,
      "formula": "97.77% × 8 + 195.53%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "killingIntent",
        "value": 5
      },
      "fallbackSkillId": "lib_hounds_5",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "k6_hunting_shadow",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 200,
      "formula": "100.00% × 2",
      "seq": 6,
      "requiresResource": "resource_gate_3",
      "impliedStates": [
        "state_1_option_1"
      ]
    }
  ],
  "defaultSkillId": "forte_death_messenger",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 3,
  "echoLead": "3:tempest_mephis",
  "combatStates": [
    {
      "id": "state_1",
      "kind": "form",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "typeBonus",
      "damageType": "resonanceLiberation",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "forte_mercy"
      ],
      "duration": 15
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "lib_necessary"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "damageBonus",
          "element": "electro",
          "value": 25,
          "scope": "self",
          "requiresState": "state_1_option_1"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "element": "electro",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "typeBonus",
          "damageType": "introSkill",
          "value": 50,
          "scope": "self",
          "skills": [
            "intro",
            "lib_necessary"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": []
    }
  ],
  "modes": null
});
