WUWA.register({
  "id": "hiyuki",
  "aliases": [],
  "debut": 3.3,
  "element": "glacio",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "frost"
  ],
  "signatureWeaponId": "frostburn",
  "portrait": "",
  "base": {
    "hp": 10300,
    "attack": 462,
    "defense": 1112,
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
      "id": "mind",
      "min": 0,
      "max": 300,
      "defaultValue": "max"
    },
    {
      "id": "bitterfrost",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "chill",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "frosthardenIai",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "snowforgedBlade",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "present_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 75.44,
      "formula": "37.72% + 37.72%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "present_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.25,
      "formula": "90.25%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "present_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 122.97,
      "formula": "4.92% × 5 + 98.37%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "present_heavy_frost_splinter",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 317.23,
      "formula": "79.31% × 2 + 158.61%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "mind",
        "value": 300
      }
    },
    {
      "id": "present_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 128.18,
      "formula": "128.18%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "present_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 173.75,
      "formula": "173.75%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "fore_na1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 49.27,
      "formula": "49.27%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_na2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 80.04,
      "formula": "40.02% + 40.02%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_na3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 167.72,
      "formula": "25.16% × 4 + 67.08%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_na4",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 149.65,
      "formula": "29.93% + 29.93% + 29.93% + 29.93% + 29.93%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_na5",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 121.64,
      "formula": "12.17% + 109.47%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_heavy",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 107.16,
      "formula": "107.16%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_heavy_bitterfrost",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 616.33,
      "formula": "15.41% × 8 + 493.05%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "bitterfrost",
        "value": 3
      },
      "fallbackSkillId": "fore_heavy"
    },
    {
      "id": "fore_air1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 96.09,
      "formula": "28.83% + 28.83% + 38.43%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_air2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 104.36,
      "formula": "26.09% + 26.09% + 26.09% + 26.09%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_plunge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 111.6,
      "formula": "111.60%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fore_dodge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 163.54,
      "formula": "81.77% + 81.77%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "skill_present",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 195.98,
      "formula": "24.50% × 4 + 97.98%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "skill_jade_cleave",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 264.04,
      "formula": "66.01% × 4",
      "impliedStates": [
        "form_1_option_2"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "skill_petalfall",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 320.1,
      "formula": "64.02% × 4 + 64.02%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "lib_inward",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "requiresResource": "resource_gate_3"
    },
    {
      "id": "lib_blade",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 994.05,
      "perStack": 795.24,
      "stackMax": 3,
      "stackResource": "snowforgedBlade",
      "stackLabel": "锻雪·归刃",
      "formula": "198.81% + 795.24% + 795.24% × 锻雪·归刃",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 156.15,
      "formula": "156.15%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_iai",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 473.06,
      "formula": "283.82% + 47.31% × 4",
      "impliedStates": [
        "form_1_option_2",
        "mechanic_1_option_1"
      ],
      "requiresResource": "resource_gate_4",
      "requiresResourceAtLeast": {
        "id": "chill",
        "value": 100
      }
    }
  ],
  "defaultSkillId": "lib_blade",
  "skillEvents": [
    {
      "skills": [
        "present_na3",
        "present_heavy_frost_splinter",
        "fore_na3",
        "fore_na4",
        "fore_na5",
        "fore_heavy_bitterfrost",
        "fore_air2",
        "fore_plunge",
        "intro"
      ],
      "event": "applyGlacioChafe",
      "stacks": 1
    },
    {
      "skills": [
        "lib_inward"
      ],
      "event": "applyGlacioChafe",
      "stacks": 4
    },
    {
      "skills": [
        "forte_iai"
      ],
      "event": "applyGlacioChafe",
      "stacks": 3,
      "requiresResourceAtLeast": {
        "id": "frosthardenIai",
        "value": 1
      }
    },
    {
      "seq": 1,
      "skills": [
        "fore_na1",
        "fore_na2"
      ],
      "event": "applyGlacioChafe",
      "stacks": 1,
      "requiresState": "c1_inward_enhanced"
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 30,
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "required": true,
      "defaultValue": "form_1_option_2",
      "options": [
        {
          "value": "form_1_option_1"
        },
        {
          "value": "form_1_option_2"
        }
      ]
    },
    {
      "id": "mechanic_1",
      "kind": "mechanic",
      "options": [
        {
          "value": "mechanic_1_option_1"
        }
      ]
    },
    {
      "id": "c1_inward_enhancement",
      "kind": "buff",
      "seq": 1,
      "options": [
        {
          "value": "c1_inward_enhanced"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_snow_rust_cd",
      "zone": "critDamage",
      "value": 40,
      "scope": "self",
      "maxStacks": 1,
      "stackMax": 3,
      "stackGroup": "stack_group_1",
      "stackRange": [
        1,
        1
      ],
      "defaultStacks": 0,
      "defaultActive": false
    },
    {
      "id": "b_snow_rust_frost_amp_1",
      "zone": "amplify",
      "effect": "frost",
      "value": 30,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_snow_rust_cd",
        "stacks": 1
      }
    },
    {
      "id": "b_snow_rust_frost_extra",
      "zone": "effectExtraRate",
      "effect": "frost",
      "value": 102,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_snow_rust_cd",
        "stacks": 2
      }
    },
    {
      "id": "b_snow_rust_frost_amp_3",
      "zone": "amplify",
      "effect": "frost",
      "value": 30,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_snow_rust_cd",
        "stacks": 3
      }
    },
    {
      "id": "b_outro_glacio",
      "zone": "amplify",
      "element": "glacio",
      "value": 20,
      "scope": "team",
      "requiresEffectStacks": {
        "effect": "frost",
        "stacks": 1
      },
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_foreclaimed_mult",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "fore_na1",
            "fore_na2",
            "fore_na3",
            "fore_na4",
            "fore_na5",
            "fore_heavy",
            "fore_air1",
            "fore_air2",
            "fore_plunge",
            "fore_dodge"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_iai_mult",
          "zone": "skillMultBonus",
          "value": 125,
          "scope": "self",
          "skills": [
            "forte_iai"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_heavy_mult",
          "zone": "skillMultBonus",
          "value": 160,
          "scope": "self",
          "skills": [
            "present_heavy_frost_splinter",
            "fore_heavy_bitterfrost"
          ]
        },
        {
          "id": "k3_snow_rust_frost_extra",
          "zone": "effectExtraRate",
          "effect": "frost",
          "value": 488,
          "scope": "self",
          "requiresBuffStacks": {
            "id": "b_snow_rust_cd",
            "stacks": 2
          }
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_team_amp",
          "zone": "amplify",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "skill_present",
            "skill_jade_cleave",
            "skill_petalfall"
          ],
          "triggerEvents": [
            "castResonanceSkill"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_skill_mult",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "skill_present",
            "skill_jade_cleave",
            "skill_petalfall"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_liberation_cd",
          "zone": "critDamage",
          "value": 500,
          "scope": "self",
          "skills": [
            "lib_inward",
            "lib_blade"
          ]
        },
        {
          "id": "k6_snow_rust_cd",
          "zone": "critDamage",
          "value": 40,
          "scope": "self",
          "requiresBuffStacks": {
            "id": "b_snow_rust_cd",
            "stacks": 2
          }
        },
        {
          "id": "k6_snow_rust_frost_final",
          "zone": "finalDmg",
          "effect": "frost",
          "value": 25,
          "scope": "team",
          "requiresBuffStacks": {
            "id": "b_snow_rust_cd",
            "stacks": 3
          }
        }
      ]
    }
  ],
  "modes": null
});
