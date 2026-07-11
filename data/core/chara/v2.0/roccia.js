WUWA.register({
  "id": "roccia",
  "aliases": [],
  "debut": 2,
  "element": "havoc",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "tragicomedy",
  "portrait": "",
  "base": {
    "hp": 12250,
    "attack": 375,
    "defense": 1197,
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
      "id": "imagination",
      "max": 300,
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
      "multiplier": 73.18,
      "formula": "73.18%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 114.42,
      "formula": "38.14% × 3"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169,
      "formula": "33.80% × 2 + 101.40%"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 208.38,
      "formula": "104.19% × 2"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 168.99,
      "formula": "168.99%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 206.7,
      "formula": "68.90% × 3"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 491.76,
      "formula": "61.47% × 8"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 835.02,
      "formula": "278.34% × 3"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 168.99,
      "formula": "168.99%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_1",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 322.08,
      "formula": "322.08%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "imagination",
        "value": 100
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 339.97,
      "formula": "339.97%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "imagination",
        "value": 100
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_3",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "357.86%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "imagination",
        "value": 100
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_3_2",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "357.86%",
      "seq": 6,
      "requiresResource": "resource_gate_2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    }
  ],
  "defaultSkillId": "forte_1",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 6,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_actor_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "heavy"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "duration": 12
    },
    {
      "id": "b_lib_atk",
      "zone": "attackFlat",
      "scope": "team",
      "defaultActive": false,
      "triggerSkills": [
        "lib"
      ],
      "duration": 30,
      "scaleBy": {
        "stat": "critRate",
        "statBonus": -50,
        "rate": 10,
        "min": 0,
        "cap": 200
      }
    },
    {
      "id": "b_outro_havoc",
      "zone": "amplify",
      "element": "havoc",
      "value": 20,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b_outro_basic",
      "zone": "amplify",
      "damageType": "basic",
      "value": 25,
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
      "buffs": [
        {
          "id": "k2_stack",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 30,
          "scope": "team",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "forte_1",
            "forte_2",
            "forte_3"
          ],
          "triggerStacks": 1,
          "duration": 30
        },
        {
          "id": "k2_full",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 10,
          "scope": "team",
          "requiresBuffStacks": {
            "id": "k2_stack",
            "stacks": 3
          },
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_cr",
          "zone": "critRate",
          "value": 10,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        },
        {
          "id": "k3_cd",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": [
            "forte_1",
            "forte_2",
            "forte_3",
            "forte_3_2"
          ],
          "defaultActive": false,
          "triggerSkills": [
            "skill"
          ],
          "duration": 12
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k5_heavy",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "heavy",
            "forte_1",
            "forte_2",
            "forte_3",
            "forte_3_2"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "defIgnore",
          "value": 60,
          "scope": "self",
          "skills": [
            "forte_1",
            "forte_2",
            "forte_3"
          ],
          "defaultActive": false,
          "triggerSkills": [
            "lib"
          ],
          "duration": 12
        }
      ]
    }
  ],
  "modes": null
});
