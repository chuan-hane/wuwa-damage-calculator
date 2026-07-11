WUWA.register({
  "id": "chisa",
  "aliases": [],
  "debut": 2.8,
  "element": "havoc",
  "weaponType": 1,
  "quality": 5,
  "effectTypes": [
    "havocBane"
  ],
  "signatureWeaponId": "kumokiri",
  "portrait": "",
  "resources": [
    {
      "id": "resource_1",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "lifethreadJetstream",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "base": {
    "hp": 10775,
    "attack": 437,
    "defense": 1136,
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
  "echoSet": 23,
  "echoSet2": 6,
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 33.42,
      "formula": "16.71% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.45,
      "formula": "9.55% + 19.09% + 66.81%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "chain_clamp",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 149.06,
      "formula": "29.81% + 14.91% + 104.34%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "chain_clamp_extra",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 47.78,
      "formula": "47.78%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "withdraw",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.65,
      "formula": "10.15% × 2 + 47.35%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "pierce",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 151.1,
      "formula": "15.11% × 4 + 90.66%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 71.58,
      "formula": "35.79% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "crack_slice",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 89.48,
      "formula": "44.74% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "falling_end",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.3,
      "formula": "11.93% + 23.86% × 2 + 59.65%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "dodge_counter",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.59,
      "formula": "23.86% + 47.72% + 167.01%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "eye_close",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 178.93,
      "formula": "178.93%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "skill_eye",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 35.79,
      "formula": "35.79%",
      "impliedStates": [
        "mode_1_option_0"
      ]
    },
    {
      "id": "skill_cycle",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 139.6,
      "formula": "17.45% × 8",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "resource_1",
      "fallbackSkillId": "skill_eye"
    },
    {
      "id": "skill_cycle_hold",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 119.36,
      "formula": "7.46% × 16",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "resource_1",
      "fallbackSkillId": "skill_eye"
    },
    {
      "id": "lib_return",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 954.29,
      "formula": "954.29%",
      "triggerEvents": [
        "castResonanceLiberation",
        "heal"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 95.43,
      "formula": "95.43%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "sawring_1",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 68.94,
      "formula": "11.49% × 6",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_2",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 85.12,
      "formula": "10.64% × 8",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_2_hold",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 106.4,
      "formula": "10.64% × 10",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_2_break",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 10.74,
      "formula": "3.58% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_3",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 127.84,
      "formula": "15.98% × 8",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_3_hold",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 95.88,
      "formula": "15.98% × 6",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_3_fall",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 10.74,
      "formula": "3.58% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_dodge",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 85.12,
      "formula": "10.64% × 8",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_dodge_hold",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 106.4,
      "formula": "10.64% × 10",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "sawring_end",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 257.67,
      "formula": "51.54% + 206.13% + 2.59% × 锯环残响",
      "perStack": 2.59,
      "stackResource": "resource_1",
      "stackLabel": "resource_1",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "shield"
      ]
    },
    {
      "id": "c1_fixed_havoc",
      "seq": 1,
      "category": "resonanceChain",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 0,
      "formula": "61803",
      "fixedDamage": 61803,
      "fixedDamageHpFloorPct": 61.8,
      "requiresState": [
        "target_1_option_1",
        "target_1_option_2"
      ],
      "requiresResource": "c1_fixed_damage_available",
      "defaultResourceActive": false,
      "triggeredDamage": true
    }
  ],
  "defaultSkillId": "sawring_end",
  "skillEvents": [
    {
      "event": "applyHavocBane",
      "stacks": 1,
      "requiresState": "target_1_option_1"
    }
  ],
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
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
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
      "id": "b_outro_effect_cap",
      "zone": "effectCapBonus",
      "value": 3,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 15
    },
    {
      "id": "b_thread_def",
      "zone": "defIgnore",
      "value": 18,
      "scope": "team",
      "defaultActive": false
    },
    {
      "id": "b_return_mult",
      "zone": "skillMultBonus",
      "value": 120,
      "scope": "self",
      "requiresState": "buff_1_option_1",
      "skills": [
        "sawring_1",
        "sawring_2",
        "sawring_2_hold",
        "sawring_2_break",
        "sawring_3",
        "sawring_3_hold",
        "sawring_3_fall",
        "sawring_dodge",
        "sawring_dodge_hold",
        "sawring_end"
      ]
    },
    {
      "id": "b_terminal_havoc",
      "zone": "damageBonus",
      "element": "havoc",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro",
        "lib_return"
      ],
      "triggerEvents": [
        "introEntry",
        "castResonanceLiberation"
      ],
      "duration": 12
    },
    {
      "id": "b_terminal_heal",
      "zone": "healingBonus",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro",
        "lib_return"
      ],
      "triggerEvents": [
        "introEntry",
        "castResonanceLiberation"
      ],
      "duration": 12
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "c1_atk",
          "zone": "attackPercent",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "duration": 15
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "c2_res",
          "zone": "resShred",
          "element": "havoc",
          "value": 10,
          "scope": "self"
        },
        {
          "id": "c2_dmg",
          "zone": "damageBonus",
          "value": 50,
          "scope": "team",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "c3_mult",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "sawring_1",
            "sawring_2",
            "sawring_2_hold",
            "sawring_2_break",
            "sawring_3",
            "sawring_3_hold",
            "sawring_3_fall",
            "sawring_dodge",
            "sawring_dodge_hold",
            "sawring_end"
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
          "id": "c5_lib",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib_return"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "c6_effect_amp",
          "zone": "amplify",
          "effect": "all",
          "value": 30,
          "scope": "team",
          "requiresState": "target_1_option_2"
        },
        {
          "id": "c6_chisa_amp",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "requiresState": "target_1_option_2"
        }
      ]
    }
  ],
  "modes": null
});
