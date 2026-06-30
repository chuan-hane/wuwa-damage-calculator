WUWA.register({
  "id": "yuanwu",
  "aliases": [],
  "debut": 1,
  "element": "electro",
  "weaponType": 4,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "amity_accord",
  "portrait": "",
  "base": {
    "hp": 8525,
    "attack": 225,
    "defense": 1637,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "defPct": 15.2,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "readiness",
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
      "multiplier": 49.11,
      "formula": "49.11%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.62,
      "formula": "51.81% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 109.2,
      "formula": "21.84% × 2 + 32.76% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.62,
      "formula": "51.81% × 2"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 163.7,
      "formula": "49.11% × 2 + 65.48%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 159.05,
      "formula": "159.05%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 229.04,
      "formula": "114.52% × 2"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 23.86,
      "formula": "23.86%"
    },
    {
      "id": "skill_thunder_wedge_coordinated",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "damageTags": [
        "coordinated"
      ],
      "stat": "defense",
      "multiplier": 7.96,
      "formula": "7.96%"
    },
    {
      "id": "skill_thunder_wedge_detonation",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 59.65,
      "formula": "59.65%"
    },
    {
      "id": "skill_rumbling_spark",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 108.54,
      "formula": "108.54%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "readiness",
        "value": 100
      }
    },
    {
      "id": "lib",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "defense",
      "multiplier": 349.92,
      "formula": "174.96% × 2"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a14"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "defense",
      "multiplier": 63.62,
      "formula": "63.62%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_thunder_uprising",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 39.77,
      "formula": "39.77%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "readiness",
        "value": 100
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 24.56,
      "formula": "24.56%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 51.82,
      "formula": "25.91% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 54.6,
      "formula": "10.92% × 2 + 16.38% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "na4_2",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 57.3,
      "formula": "11.46% × 5",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "na5_2",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 81.85,
      "formula": "16.37% × 3 + 32.74%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a21"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "stat": "defense",
      "multiplier": 31.02,
      "formula": "31.02%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "forte_thunderweaver",
      "legacyIds": [
        "a22"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 72.38,
      "formula": "31.02% + 20.68% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "dodge_2",
      "legacyIds": [
        "a23"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 108.17,
      "formula": "43.27% + 32.45% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    }
  ],
  "defaultSkillId": "lib",
  "skillEvents": [
    {
      "event": "shield",
      "skills": [
        "lib"
      ],
      "seq": 4
    }
  ],
  "validSubs": [
    "defFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 3,
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
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        },
        {
          "value": "field_1_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "skillMultBonus",
      "value": 40,
      "scope": "self",
      "skills": [
        "forte_thunder_uprising"
      ]
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
      "buffs": [
        {
          "id": "k3",
          "multAdd": 20,
          "scope": "self",
          "skills": [
            "skill_thunder_wedge_coordinated"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 50,
          "scope": "self",
          "requiresState": "field_1_option_1"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "defensePercent",
          "value": 32,
          "scope": "team",
          "requiresState": "field_1_option_2",
          "duration": 3
        }
      ]
    }
  ],
  "modes": null
});
