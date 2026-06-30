WUWA.register({
  "id": "camellya",
  "aliases": [],
  "debut": 1.4,
  "element": "havoc",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "red_spring",
  "portrait": "",
  "base": {
    "hp": 10325,
    "attack": 450,
    "defense": 1161,
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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.53,
      "formula": "62.53%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.96,
      "formula": "46.48% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 152.1,
      "formula": "50.70% × 3"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 494,
      "formula": "24.70% × 20"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 192.68,
      "formula": "48.17% × 4"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 264.42,
      "formula": "88.14% × 3"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 131.22,
      "formula": "65.61% × 2"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 298.2,
      "formula": "99.40% × 3"
    },
    {
      "id": "skill_crimson_blossom",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 227.24,
      "formula": "113.62% × 2"
    },
    {
      "id": "skill_vining_waltz_1",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 96.33,
      "formula": "96.33%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_vining_waltz_2",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 91.26,
      "formula": "45.63% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_vining_waltz_3",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 131.7,
      "formula": "21.95% × 6",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_vining_waltz_4",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 202.77,
      "formula": "67.59% × 3",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_floral_ravage",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 263.05,
      "formula": "52.61% × 5",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_vining_ronde",
      "legacyIds": [
        "a15"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 158.85,
      "formula": "52.95% × 3",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_atonement",
      "legacyIds": [
        "a16"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 226.66,
      "formula": "113.33% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_blazing_waltz",
      "legacyIds": [
        "a17"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 417.05,
      "formula": "21.95% × 19",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a18"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1202.81,
      "formula": "1202.81%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a19"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_ephemeral",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1262.45,
      "formula": "1262.45%",
      "requiresResource": "resource_gate_1",
      "triggerEvents": [
        "consumeConcerto"
      ]
    },
    {
      "id": "forte_ephemeral_2",
      "legacyIds": [
        "a21"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1262.45,
      "formula": "一日花100%",
      "seq": 6,
      "requiresResource": "resource_gate_2",
      "triggerEvents": [
        "consumeConcerto"
      ]
    },
    {
      "id": "outro",
      "legacyIds": [
        "a22"
      ],
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 329.24,
      "formula": "329.24%"
    },
    {
      "id": "outro_bloom",
      "legacyIds": [
        "a23"
      ],
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 788.26,
      "formula": "329.24% + 459.02%",
      "requiresResource": "resource_gate_3"
    }
  ],
  "defaultSkillId": "forte_ephemeral",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
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
    },
    {
      "id": "state_2",
      "options": [
        {
          "value": "state_2_option_1"
        },
        {
          "value": "state_2_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_havoc",
      "zone": "damageBonus",
      "element": "havoc",
      "value": 15,
      "scope": "self"
    },
    {
      "id": "b_basic",
      "zone": "typeBonus",
      "damageType": "basic",
      "value": 15,
      "scope": "self"
    },
    {
      "id": "b_dream_base",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "na1",
        "na2",
        "na3",
        "na4",
        "na5",
        "heavy",
        "air",
        "dodge",
        "skill_crimson_blossom",
        "skill_vining_waltz_1",
        "skill_vining_waltz_2",
        "skill_vining_waltz_3",
        "skill_vining_waltz_4",
        "skill_floral_ravage",
        "skill_vining_ronde",
        "skill_atonement",
        "skill_blazing_waltz"
      ],
      "requiresState": "state_2"
    },
    {
      "id": "b_dream_bud",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "maxStacks": 10,
      "defaultStacks": 0,
      "defaultActive": false,
      "skills": [
        "na1",
        "na2",
        "na3",
        "na4",
        "na5",
        "heavy",
        "air",
        "dodge",
        "skill_crimson_blossom",
        "skill_vining_waltz_1",
        "skill_vining_waltz_2",
        "skill_vining_waltz_3",
        "skill_vining_waltz_4",
        "skill_floral_ravage",
        "skill_vining_ronde",
        "skill_atonement",
        "skill_blazing_waltz"
      ],
      "requiresState": "state_2_option_1"
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critDamage",
          "value": 28,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 18
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "forte_ephemeral"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_burst",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k3_atk",
          "zone": "attackPercent",
          "value": 58,
          "scope": "self",
          "requiresState": "state_2"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_intro",
          "zone": "skillMultBonus",
          "value": 303,
          "scope": "self",
          "skills": [
            "intro"
          ]
        },
        {
          "id": "k5_outro",
          "zone": "skillMultBonus",
          "value": 68,
          "scope": "self",
          "skills": [
            "outro",
            "outro_bloom"
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
          "value": 150,
          "scope": "self",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "na5",
            "heavy",
            "air",
            "dodge",
            "skill_crimson_blossom",
            "skill_vining_waltz_1",
            "skill_vining_waltz_2",
            "skill_vining_waltz_3",
            "skill_vining_waltz_4",
            "skill_floral_ravage",
            "skill_vining_ronde",
            "skill_atonement",
            "skill_blazing_waltz"
          ],
          "requiresState": "state_2"
        },
        {
          "id": "k6_ever",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "na5",
            "heavy",
            "air",
            "dodge",
            "skill_crimson_blossom",
            "skill_vining_waltz_1",
            "skill_vining_waltz_2",
            "skill_vining_waltz_3",
            "skill_vining_waltz_4",
            "skill_floral_ravage",
            "skill_vining_ronde",
            "skill_atonement",
            "skill_blazing_waltz"
          ],
          "requiresState": "state_2_option_2"
        }
      ]
    }
  ],
  "modes": null
});
