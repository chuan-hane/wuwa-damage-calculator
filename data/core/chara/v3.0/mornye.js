WUWA.register({
  "id": "mornye",
  "aliases": [],
  "debut": 3,
  "element": "fusion",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "starfield_calibrator",
  "portrait": "",
  "base": {
    "hp": 15375,
    "attack": 287,
    "defense": 1356,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "defPct": 15.2,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "staticMassEnergy",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "relativeKineticEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 55.69,
      "formula": "22.27% + 16.71% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.32,
      "formula": "23.86% + 23.86% + 17.90% × 4",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.4,
      "formula": "41.36% + 10.34% × 6",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 135.2,
      "formula": "135.20%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "wide_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 55.68,
      "formula": "13.92% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "wide_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.4,
      "formula": "25.85% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "wide_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.42,
      "formula": "9.31% × 4 + 33.09% × 2",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 37,
      "formula": "11.10% + 11.10% + 14.80%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 162.23,
      "formula": "162.23%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "wide_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 103.4,
      "formula": "25.85% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "skill_counter",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 179.73,
      "formula": "179.73%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "skill_array",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 159.08,
      "formula": "39.77% × 4",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "defense",
      "multiplier": 522.33,
      "formula": "522.33%",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 202.79,
      "formula": "202.79%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "field",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 198.85,
      "formula": "39.77% × 5",
      "impliedStates": [
        "field_1_option_1"
      ],
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "mass_shift",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 143.16,
      "formula": "44.14% + 99.02%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "staticMassEnergy",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "inversion",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 258.46,
      "formula": "258.46%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "relativeKineticEnergy",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "applyObservationMark"
      ]
    },
    {
      "id": "rupture_beam",
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 298.22,
      "formula": "298.22%",
      "requiresState": "target_2_option_1"
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "defFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 33,
  "echoLead": "33:reactor_husk",
  "combatStates": [
    {
      "id": "mode_1",
      "kind": "mode",
      "required": true,
      "defaultValue": "mode_1_option_0",
      "options": [
        {
          "value": "mode_1_option_0"
        },
        {
          "value": "mode_1_option_1"
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
    },
    {
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        }
      ]
    },
    {
      "id": "target_2",
      "kind": "target",
      "options": [
        {
          "value": "target_2_option_1"
        },
        {
          "value": "target_2_option_2",
          "formulaKind": "coherenceInterference"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_er",
      "zone": "energyRegen",
      "value": 10,
      "scope": "self"
    },
    {
      "id": "b_lib_cr",
      "zone": "critRate",
      "value": 0,
      "scope": "self",
      "skills": [
        "lib"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -100,
        "rate": 0.5,
        "min": 0,
        "cap": 80,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_lib_cd",
      "zone": "critDamage",
      "value": 0,
      "scope": "self",
      "skills": [
        "lib"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -100,
        "rate": 1,
        "min": 0,
        "cap": 160,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_field_discord",
      "zone": "discordEff",
      "value": 50,
      "scope": "team",
      "requiresState": "field_1_option_1"
    },
    {
      "id": "b_strong_def",
      "zone": "defensePercent",
      "value": 20,
      "scope": "team",
      "requiresState": "field_1_option_2"
    },
    {
      "id": "b_interference_amp_base",
      "zone": "vulnerability",
      "value": 0,
      "scope": "team",
      "maxSeq": 0,
      "requiresState": [
        "target_2_option_1",
        "target_2_option_2"
      ],
      "requiresAllStates": [
        "target_1_option_1"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -100,
        "rate": 0.25,
        "min": 0,
        "cap": 40,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_tune_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_2_option_2",
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.36
      }
    },
    {
      "id": "b_outro",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "duration": 30
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_amp",
          "zone": "vulnerability",
          "value": 0,
          "scope": "team",
          "requiresState": "target_1_option_1",
          "scaleBy": {
            "stat": "energyRegen",
            "statBonus": -100,
            "rate": 0.25,
            "min": 0,
            "cap": 40,
            "includeActiveBuffs": true
          }
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_cd",
          "zone": "critDamage",
          "value": 0,
          "scope": "team",
          "requiresState": "target_1_option_1",
          "scaleBy": {
            "stat": "energyRegen",
            "statBonus": -100,
            "rate": 0.2,
            "min": 0,
            "cap": 32,
            "includeActiveBuffs": true
          }
        },
        {
          "id": "k2_discord",
          "zone": "discordEff",
          "value": 20,
          "scope": "team",
          "requiresState": "field_1_option_1"
        }
      ]
    },
    {
      "seq": 3,
      "buffs": []
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k5_beam",
          "zone": "skillMultBonus",
          "value": 160,
          "scope": "self",
          "skills": [
            "rupture_beam"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_lib",
          "zone": "amplify",
          "value": 400,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    }
  ],
  "modes": null
});
