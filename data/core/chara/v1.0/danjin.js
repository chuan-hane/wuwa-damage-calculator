WUWA.register({
  "id": "danjin",
  "aliases": [],
  "debut": 1,
  "element": "havoc",
  "weaponType": 2,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "commando_of_conviction",
  "portrait": "",
  "base": {
    "hp": 9437,
    "attack": 262,
    "defense": 1148,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "rubyBlossom",
      "max": 120,
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
      "multiplier": 57.26,
      "formula": "57.26%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 58.85,
      "formula": "58.85%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 111.36,
      "formula": "37.12% × 3"
    },
    {
      "id": "air",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 190.86,
      "formula": "63.62% × 3"
    },
    {
      "id": "skill_carmine_gleam",
      "legacyIds": [
        "a7"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 76.36,
      "formula": "38.18% × 2"
    },
    {
      "id": "skill_crimson_erosion_1",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 128.84,
      "formula": "64.42% × 2"
    },
    {
      "id": "skill_crimson_erosion_2",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 119.3,
      "formula": "59.65% × 2"
    },
    {
      "id": "skill_sanguine_pulse_1",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 112.14,
      "formula": "56.07% × 2"
    },
    {
      "id": "skill_sanguine_pulse_2",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 128.85,
      "formula": "42.95% × 3"
    },
    {
      "id": "skill_sanguine_pulse_3",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 193.26,
      "formula": "64.42% × 3"
    },
    {
      "id": "lib_consecutive",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 392.72,
      "formula": "49.09% × 8"
    },
    {
      "id": "lib_scarlet_burst",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 392.65,
      "formula": "392.65%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a15"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.84,
      "formula": "49.71% × 4",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 417.55,
      "formula": "59.65% × 7",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "rubyBlossom",
        "value": 60
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "heavy_3",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 178.93,
      "formula": "178.93%",
      "requiresResource": "resource_gate_2"
    },
    {
      "id": "heavy_4",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 1002.05,
      "formula": "143.15% × 7",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "rubyBlossom",
        "value": 120
      },
      "fallbackSkillId": "heavy_2"
    },
    {
      "id": "heavy_5",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 429.43,
      "formula": "429.43%",
      "requiresResource": "resource_gate_4",
      "fallbackSkillId": "heavy_3"
    }
  ],
  "defaultSkillId": "heavy_4",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 6,
  "buffs": [
    {
      "id": "b1",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "defaultActive": false
    },
    {
      "id": "b2",
      "zone": "typeBonus",
      "damageType": "heavy",
      "value": 30,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "skill_sanguine_pulse_3"
      ],
      "duration": 5
    },
    {
      "id": "b3",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "skills": [
        "skill_crimson_erosion_1",
        "skill_crimson_erosion_2"
      ],
      "defaultActive": false
    },
    {
      "id": "b4",
      "zone": "amplify",
      "element": "havoc",
      "value": 23,
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
          "zone": "attackPercent",
          "value": 30,
          "scope": "self",
          "maxStacks": 6,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 6
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "amplify",
          "value": 20,
          "scope": "self",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 30,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "heavy_2",
            "heavy_3",
            "heavy_4",
            "heavy_5"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5a",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 15,
          "scope": "self"
        },
        {
          "id": "k5b",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 15,
          "scope": "self",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "heavy_2",
            "heavy_3",
            "heavy_4",
            "heavy_5"
          ],
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
