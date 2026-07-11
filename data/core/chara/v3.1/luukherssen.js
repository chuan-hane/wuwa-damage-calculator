WUWA.register({
  "id": "luukherssen",
  "aliases": [],
  "debut": 3.1,
  "element": "spectro",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "daybreakers_spine",
  "portrait": "",
  "base": {
    "hp": 10300,
    "attack": 462,
    "defense": 1112,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "ichorFlow",
      "min": 0,
      "max": 300,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 81.12,
      "formula": "40.56% + 40.56%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 150.4,
      "formula": "60.16% + 90.24%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 150.6,
      "formula": "5.02% × 30"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 96.33,
      "formula": "96.33%"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 91.26,
      "formula": "91.26%"
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 57.46,
      "formula": "57.46%"
    },
    {
      "id": "air2_dissection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 94.09,
      "formula": "28.23% + 28.23% + 37.63%"
    },
    {
      "id": "air3_dissection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 143.1,
      "formula": "42.93% + 42.93% + 57.24%"
    },
    {
      "id": "air2_resection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.84,
      "formula": "50.42% + 50.42%"
    },
    {
      "id": "air3_resection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 149.84,
      "formula": "74.92% + 74.92%"
    },
    {
      "id": "air4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%"
    },
    {
      "id": "dodge_ground",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.8,
      "formula": "125.90% + 125.90%"
    },
    {
      "id": "dodge_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 256.87,
      "formula": "256.87%"
    },
    {
      "id": "skill_reflux",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 201.2,
      "formula": "201.20%"
    },
    {
      "id": "aureole_ring",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 221.33,
      "formula": "26.56% × 5 + 88.53%"
    },
    {
      "id": "aureole_breach",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 287.73,
      "formula": "95.91% × 3"
    },
    {
      "id": "aureole_glare",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 354.11,
      "formula": "354.11%"
    },
    {
      "id": "golden_impale",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 155.47,
      "formula": "155.47%"
    },
    {
      "id": "ichor_deposit",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 153.45,
      "formula": "153.45%",
      "requiresResource": "resource_gate_1"
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 994.09,
      "formula": "745.54% + 49.71% × 5"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 218.01,
      "formula": "72.67% × 3",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_gavel",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 306.9,
      "formula": "306.90%",
      "requiresResource": "resource_gate_2"
    },
    {
      "id": "ichor_blade",
      "category": "forteCircuit",
      "damageType": "basic",
      "element": "spectro",
      "multiplier": 0,
      "formula": "10",
      "fixedDamage": 10,
      "triggeredDamage": true,
      "requiresResource": "ichor_blade_active",
      "defaultResourceActive": false
    }
  ],
  "defaultSkillId": "forte_gavel",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 5,
  "combatStates": [
    {
      "id": "status_1",
      "kind": "status",
      "options": [
        {
          "value": "status_1_option_1"
        }
      ]
    },
    {
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1",
          "formulaKind": "coherenceInterference"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_endgame",
      "zone": "skillMultBonus",
      "value": 75,
      "scope": "self",
      "skills": [
        "lib"
      ],
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1"
    },
    {
      "id": "b_tune_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_1_option_1",
      "maxStacks": 3,
      "stackMaxBySeq": [
        {
          "seq": 6,
          "max": 5
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_2",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.36
      }
    },
    {
      "id": "b_doctor_amp",
      "zone": "amplify",
      "scope": "self",
      "requiresState": "target_1_option_1",
      "maxSeq": 1,
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.5,
        "cap": 30
      }
    },
    {
      "id": "b_doctor_atk",
      "zone": "attackPercent",
      "value": 25,
      "scope": "self",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "b_aureate_aureole",
      "zone": "skillMultBonus",
      "value": 110,
      "scope": "self",
      "requiresState": "status_1_option_1",
      "skills": [
        "aureole_ring",
        "aureole_breach",
        "aureole_glare"
      ]
    },
    {
      "id": "b_aureate_followup",
      "zone": "skillMultBonus",
      "value": 110,
      "scope": "self",
      "skills": [
        "forte_gavel",
        "ichor_deposit"
      ],
      "requiresState": "status_1_option_1",
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_air",
          "zone": "typeBonus",
          "value": 150,
          "scope": "self",
          "skills": [
            "air1",
            "air2_dissection",
            "air3_dissection",
            "air2_resection",
            "air3_resection",
            "air4",
            "forte_gavel"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_lib_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k2_doctor_amp",
          "zone": "amplify",
          "scope": "self",
          "requiresState": "target_1_option_1",
          "scaleBy": {
            "stat": "breakAmp",
            "rate": 1,
            "cap": 60
          }
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_aureole",
          "zone": "skillMultBonus",
          "value": 136,
          "scope": "self",
          "requiresState": "status_1_option_1",
          "skills": [
            "aureole_ring",
            "aureole_breach",
            "aureole_glare"
          ]
        },
        {
          "id": "k3_followup",
          "zone": "skillMultBonus",
          "value": 136,
          "scope": "self",
          "skills": [
            "forte_gavel",
            "ichor_deposit"
          ],
          "requiresState": "status_1_option_1",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_team_final",
          "zone": "finalDmg",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_intro",
          "zone": "typeBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "intro"
          ]
        },
        {
          "id": "k5_reflux",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "skill_reflux"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_tune_vuln",
          "zone": "vulnerability",
          "value": 30,
          "scope": "self",
          "skills": [
            "aureole_ring",
            "aureole_breach",
            "aureole_glare",
            "ichor_deposit",
            "forte_gavel"
          ],
          "defaultActive": false,
          "duration": 25
        },
        {
          "id": "k6_endgame_bonus",
          "zone": "typeBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "lib"
          ],
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_1"
        }
      ]
    }
  ],
  "modes": null
});
