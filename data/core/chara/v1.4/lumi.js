WUWA.register({
  "id": "lumi",
  "aliases": [],
  "debut": 1.4,
  "element": "electro",
  "weaponType": 1,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "discord",
  "portrait": "",
  "base": {
    "hp": 8500,
    "attack": 337,
    "defense": 879,
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
      "id": "lightEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "yellow_na",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.43,
      "formula": "31.81% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "red_na1",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.66,
      "formula": "90.66%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "red_na2",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 215.36,
      "formula": "107.66% + 21.54% × 5",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "red_na3",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 215.32,
      "formula": "64.60% + 150.72%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "red_heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.22,
      "formula": "66.11% × 2",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "red_air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.33,
      "formula": "113.33%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "red_dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 334.6,
      "formula": "167.30% + 33.46% × 5",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "skill_pounce",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 181.32,
      "formula": "181.32%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "skill_rebound",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 173.76,
      "formula": "173.76%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 954.29,
      "formula": "954.29%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 168.99,
      "formula": "56.33% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_glare",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 81.52,
      "formula": "81.52%",
      "impliedStates": [
        "mode_1_option_3"
      ]
    },
    {
      "id": "red_na1_2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 120.25,
      "formula": "120.25%",
      "impliedStates": [
        "mode_1_option_4"
      ]
    },
    {
      "id": "red_na2_2",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 276.67,
      "formula": "138.32% + 27.67% × 5",
      "impliedStates": [
        "mode_1_option_4"
      ]
    },
    {
      "id": "red_na3_2",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 312.42,
      "formula": "93.73% + 218.69%",
      "impliedStates": [
        "mode_1_option_4"
      ]
    },
    {
      "id": "red_heavy_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 176.36,
      "formula": "88.18% × 2",
      "impliedStates": [
        "mode_1_option_4"
      ]
    },
    {
      "id": "forte_energized_pounce",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 366.62,
      "formula": "183.31% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "lightEnergy",
      "fallbackSkillId": "skill_pounce",
      "impliedStates": [
        "mode_1_option_4"
      ]
    },
    {
      "id": "forte_energized_rebound",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 251.7,
      "formula": "251.70%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "lightEnergy",
      "fallbackSkillId": "skill_rebound",
      "impliedStates": [
        "mode_1_option_3"
      ]
    },
    {
      "id": "forte_blinding_light",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 0,
      "perStack": 74.56,
      "stackMax": 4,
      "stackLabel": "段",
      "formula": "74.56% × 段数",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "lightEnergy",
        "value": 25
      }
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 3,
  "combatStates": [
    {
      "id": "mode_1",
      "kind": "mode",
      "required": true,
      "defaultValue": "mode_1_option_1",
      "options": [
        {
          "value": "mode_1_option_1"
        },
        {
          "value": "mode_1_option_2"
        },
        {
          "value": "mode_1_option_3"
        },
        {
          "value": "mode_1_option_4"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "electro",
      "value": 10,
      "scope": "self",
      "requiresState": [
        "mode_1_option_2",
        "mode_1_option_4"
      ]
    },
    {
      "id": "b2",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "forte_energized_pounce",
        "forte_energized_rebound"
      ],
      "duration": 5
    },
    {
      "id": "b3",
      "zone": "amplify",
      "damageType": "resonanceSkill",
      "value": 38,
      "scope": "team",
      "duration": 10
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
          "zone": "defIgnore",
          "value": 20,
          "scope": "self",
          "skills": [
            "forte_energized_pounce",
            "forte_energized_rebound"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "skillMultBonus",
          "value": 30,
          "scope": "self",
          "skills": [
            "lib"
          ]
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
          "value": 30,
          "scope": "self"
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
            "forte_blinding_light"
          ],
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
            "lib"
          ],
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
