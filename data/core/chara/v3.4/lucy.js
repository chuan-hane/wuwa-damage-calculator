WUWA.register({
  "id": "lucy",
  "aliases": [],
  "debut": 3.4,
  "element": "spectro",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "spectral_trigger",
  "portrait": "",
  "base": {
    "hp": 11025,
    "attack": 425,
    "defense": 1148,
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
      "id": "rootAccess",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "protocol",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 121.49,
      "formula": "12.15% × 6 + 48.59%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 60.76,
      "formula": "20.66% + 20.05% × 2"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 120.2,
      "formula": "36.06% + 36.06% + 48.08%"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 155.09,
      "formula": "31.02% + 15.51% × 3 + 38.77% + 38.77%"
    },
    {
      "id": "heavy1",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 73.67,
      "formula": "22.10% + 22.10% + 29.47%"
    },
    {
      "id": "heavy2",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 284.32,
      "formula": "56.86% × 2 + 18.96% × 3 + 56.86% + 56.86%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 116.32,
      "formula": "58.16% + 58.16%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 197.73,
      "formula": "59.32% + 79.09% + 59.32%"
    },
    {
      "id": "air_algo",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 125.26,
      "formula": "62.63% + 62.63%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "dodge_algo",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 194.85,
      "formula": "38.97% + 38.97% + 38.97% + 38.97% + 38.97%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "thread1",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 77.96,
      "formula": "19.49% + 19.49% + 19.49% + 19.49%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "thread2",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 111.35,
      "formula": "22.27% + 22.27% + 22.27% + 22.27% + 22.27%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "thread3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 140.6,
      "formula": "28.12% + 28.12% + 28.12% + 28.12% + 28.12%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "thread4",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 125.3,
      "formula": "25.06% + 25.06% + 25.06% + 25.06% + 25.06%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "heavy_single_thread",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 116.95,
      "formula": "23.39% + 23.39% + 23.39% + 23.39% + 23.39%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "heavy_double_thread",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 167.05,
      "formula": "33.41% + 33.41% + 33.41% + 33.41% + 33.41%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "rootAccess",
        "value": 100
      },
      "fallbackSkillId": "heavy_single_thread"
    },
    {
      "id": "heavy_multithread",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 238.6,
      "formula": "59.65% + 59.65% × 3",
      "impliedStates": [
        "status_1_option_1"
      ],
      "requiresResource": "resource_gate_2",
      "fallbackSkillId": "heavy_double_thread"
    },
    {
      "id": "heavy_multithread_sql",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 508.6,
      "formula": "59.65% + 59.65% × 3 + 270%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "requiresResource": "SQL",
      "fallbackSkillId": "heavy_multithread"
    },
    {
      "id": "skill_payload_dash",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 30.08,
      "formula": "20.05% + 10.03%"
    },
    {
      "id": "skill_payload_follow",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 70.17,
      "formula": "40.09% + 10.03% + 20.05%"
    },
    {
      "id": "skill_pulse",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 308.6,
      "formula": "30.86% × 2 + 61.72% × 3 + 61.72%"
    },
    {
      "id": "skill_pulse_c2",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 450,
      "formula": "450%",
      "seq": 2
    },
    {
      "id": "skill_deadlock",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 258.47,
      "formula": "51.70% + 206.77%",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "protocol",
        "value": 100,
        "alternateStates": [
          "status_1_option_1"
        ]
      },
      "fallbackSkillId": "skill_payload_dash"
    },
    {
      "id": "burst_overwrite",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 894.65,
      "formula": "894.65%"
    },
    {
      "id": "burst_cluster",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "burst_synapse",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "burst_motor",
      "category": "resonanceLiberation",
      "damageType": "hackDmg",
      "multiplier": 911.83,
      "formula": "911.83%"
    },
    {
      "id": "burst_darknet",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 1789.29,
      "formula": "1789.29%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "requiresResource": "resource_gate_4",
      "fallbackSkillId": "burst_overwrite"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 138.28,
      "formula": "69.14% + 69.14%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "break_data",
      "category": "forteCircuit",
      "damageType": "hackDmg",
      "multiplier": 1367.75,
      "formula": "1094.19% + 68.39% × 4",
      "requiresState": "target_1_option_2"
    }
  ],
  "defaultSkillId": "heavy_multithread_sql",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoCombo": "split122",
  "echoSet": 24,
  "echoSet2": 5,
  "echoSet3": 8,
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
      "id": "b_algo_spectro",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 65,
      "scope": "self",
      "requiresState": "status_1_option_1",
      "duration": 8
    },
    {
      "id": "b_program_vuln",
      "zone": "vulnerability",
      "value": 5,
      "scope": "team",
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_program_def",
      "zone": "defShred",
      "value": 5,
      "scope": "team",
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_backdoor_amp",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "duration": 120
    },
    {
      "id": "b_backdoor_hack",
      "zone": "skillMultBonus",
      "damageType": "hackDmg",
      "value": 20,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "duration": 120
    },
    {
      "id": "b_backdoor_amp_full",
      "zone": "amplify",
      "value": 5,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_backdoor_amp",
        "stacks": 2
      },
      "duration": 120
    },
    {
      "id": "b_backdoor_hack_full",
      "zone": "skillMultBonus",
      "damageType": "hackDmg",
      "value": 5,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_backdoor_hack",
        "stacks": 2
      },
      "duration": 120
    },
    {
      "id": "b_outro_basic",
      "zone": "amplify",
      "damageType": "basic",
      "value": 25,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b_outro_offset",
      "zone": "amplify",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "duration": 25
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_intro_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 14
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_sql_multadd",
          "multAdd": 290,
          "scope": "self",
          "skills": [
            "heavy_multithread_sql"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_overwrite_mult",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "burst_overwrite",
            "burst_darknet"
          ]
        },
        {
          "id": "k3_overwrite_cd",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "skills": [
            "burst_overwrite",
            "burst_darknet"
          ]
        },
        {
          "id": "k3_motor_mult",
          "zone": "skillMultBonus",
          "value": 65,
          "scope": "self",
          "skills": [
            "burst_motor"
          ]
        },
        {
          "id": "k3_break_mult",
          "zone": "skillMultBonus",
          "value": 65,
          "scope": "self",
          "skills": [
            "break_data"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_team_bonus",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_heavy_vuln",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "damageType": "heavy",
          "requiresState": [
            "target_1_option_1",
            "target_1_option_2"
          ]
        },
        {
          "id": "k6_hack_vuln",
          "zone": "vulnerability",
          "value": 60,
          "scope": "self",
          "damageType": "hackDmg",
          "requiresState": [
            "target_1_option_1",
            "target_1_option_2"
          ]
        }
      ]
    }
  ],
  "modes": null
});
