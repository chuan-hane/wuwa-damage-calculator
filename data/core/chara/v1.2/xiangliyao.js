WUWA.register({
  "id": "xiangliyao",
  "aliases": [],
  "debut": 1.2,
  "element": "electro",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "veritys_handle",
  "portrait": "",
  "base": {
    "hp": 10625,
    "attack": 425,
    "defense": 1222,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "capacity",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "performanceCapacity",
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
      "multiplier": 66.22,
      "formula": "33.11% × 2"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 99.61,
      "formula": "99.61%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.28,
      "formula": "39.76% × 3"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.63,
      "formula": "53.05% × 2 + 26.53%"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 198.81,
      "formula": "198.81%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 165.62,
      "formula": "82.81% × 2"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.58,
      "formula": "238.58%"
    },
    {
      "id": "skill_deduction",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 198.81,
      "formula": "198.81%"
    },
    {
      "id": "lib_cogitation",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1466.06,
      "formula": "1466.06%"
    },
    {
      "id": "lib_pivot_1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 119.67,
      "formula": "119.67%",
      "impliedStates": [
        "buff_1_option_1"
      ]
    },
    {
      "id": "lib_pivot_2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 243.68,
      "formula": "60.92% × 4",
      "impliedStates": [
        "buff_1_option_1"
      ]
    },
    {
      "id": "lib_pivot_3",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 266.5,
      "formula": "133.25% × 2",
      "impliedStates": [
        "buff_1_option_1"
      ]
    },
    {
      "id": "lib_divergence",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 495.87,
      "formula": "49.59% × 3 + 173.55% × 2",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "lib_unfathomed",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 388.24,
      "formula": "38.83% × 2 + 310.58%",
      "impliedStates": [
        "buff_1_option_1"
      ]
    },
    {
      "id": "forte_decipher",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 397.82,
      "formula": "397.82%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "capacity",
        "value": 100
      },
      "fallbackSkillId": "skill_deduction",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_law",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 638.2,
      "formula": "95.73% × 4 + 255.28%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "performanceCapacity",
        "value": 5
      },
      "fallbackSkillId": "lib_divergence",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_revamp",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 218.7,
      "formula": "21.87% × 4 + 65.61% × 2",
      "requiresResource": "resource_gate_3"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "99.41% × 2",
      "triggerEvents": [
        "introEntry"
      ]
    }
  ],
  "defaultSkillId": "forte_law",
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
      "id": "buff_1",
      "kind": "form",
      "options": [
        {
          "value": "buff_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "electro",
      "value": 20,
      "scope": "self",
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "triggerStacks": 1,
      "duration": 8
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "skillMultBonus",
          "value": 48,
          "scope": "self",
          "skills": [
            "forte_law"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "lib_cogitation"
          ],
          "triggerEvents": [
            "castResonanceSkill"
          ],
          "duration": 8
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "amplify",
          "value": 63,
          "scope": "self",
          "skills": [
            "forte_decipher",
            "skill_deduction",
            "lib_divergence",
            "forte_law"
          ],
          "defaultActive": false,
          "duration": 24
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "lib_cogitation"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib_cogitation"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "skillMultBonus",
          "value": 76,
          "scope": "self",
          "skills": [
            "forte_law"
          ]
        }
      ]
    }
  ],
  "modes": null
});
