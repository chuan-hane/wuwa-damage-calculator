WUWA.register({
  "id": "yinlin",
  "aliases": [],
  "debut": 1,
  "element": "electro",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "stringmaster",
  "portrait": "",
  "base": {
    "hp": 11000,
    "attack": 400,
    "defense": 1283,
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
      "id": "judgment",
      "max": 100,
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
      "multiplier": 28.81,
      "formula": "28.81%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.64,
      "formula": "33.82% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.93,
      "formula": "13.99% × 7"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 75.16,
      "formula": "75.16%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 59.66,
      "formula": "29.83% × 2"
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
      "multiplier": 169.54,
      "formula": "24.22% × 7"
    },
    {
      "id": "skill_magnetic_roar",
      "legacyIds": [
        "s1"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 178.95,
      "formula": "59.65% × 3"
    },
    {
      "id": "skill_lightning_execution",
      "legacyIds": [
        "s2"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 357.88,
      "formula": "89.47% × 4",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_electromagnetic_blast",
      "legacyIds": [
        "s3"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 19.89,
      "formula": "19.89%",
      "impliedStates": [
        "state_1_option_1",
        "target_1_option_1"
      ]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 815.92,
      "formula": "116.56% × 7"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 143.2,
      "formula": "14.32% × 10",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_phantom",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "178.93% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "judgment",
        "value": 100
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "forte_judgment",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 78.64,
      "formula": "78.64%",
      "impliedStates": [
        "target_1_option_2"
      ]
    }
  ],
  "defaultSkillId": "forte_judgment",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 3,
  "echoLead": "3:tempest_mephis",
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    },
    {
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        },
        {
          "value": "target_1_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "critRate",
      "value": 15,
      "scope": "self",
      "defaultActive": false,
      "duration": 5
    },
    {
      "id": "b2",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "skills": [
        "skill_lightning_execution"
      ],
      "requiresState": "target_1_option_1"
    },
    {
      "id": "b3",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "duration": 4
    },
    {
      "id": "b4",
      "zone": "amplify",
      "element": "electro",
      "value": 20,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b5",
      "zone": "amplify",
      "damageType": "resonanceLiberation",
      "value": 25,
      "scope": "team",
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "amplify",
          "value": 70,
          "scope": "self",
          "skills": [
            "skill_magnetic_roar",
            "skill_lightning_execution"
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
      "buffs": [
        {
          "id": "k3",
          "zone": "skillMultBonus",
          "value": 55,
          "scope": "self",
          "skills": [
            "forte_judgment"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "duration": 12
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "amplify",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib"
          ],
          "requiresState": [
            "target_1_option_1",
            "target_1_option_2"
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
