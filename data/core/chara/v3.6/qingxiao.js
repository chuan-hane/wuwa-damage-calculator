"use strict";

WUWA.register({
  "id": "qingxiao",
  "aliases": [],
  "debut": 3.6,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "glint_of_clouds",
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
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "qin_heart",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "sword_cadence",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "heart_sword_intent",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "gathered_mind",
      "min": 0,
      "max": 15,
      "maxBySeq": [
        {
          "seq": 2,
          "max": 25
        }
      ],
      "defaultValue": 1
    },
    {
      "id": "world_in_chorus",
      "min": 0,
      "max": 25,
      "defaultValue": 0
    },
    {
      "id": "exorcising_seal",
      "min": 0,
      "max": 25,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 60.26,
      "formula": "30.13% × 2",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 74.18,
      "formula": "37.09% × 2",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.44,
      "formula": "24.36% × 4",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 108.45,
      "formula": "86.73% + 5.43% × 4",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 438.41,
      "formula": "14.62% × 3 + 21.92% × 6 + 263.03%",
      "impliedStates": [
        "normal_form"
      ],
      "requiresAllResourcesAtLeast": [
        {
          "id": "qin_heart",
          "fractionOfCap": 1
        },
        {
          "id": "sword_cadence",
          "fractionOfCap": 1
        }
      ]
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "midAir",
      "multiplier": 90.48,
      "formula": "7.24% × 5 + 54.28%",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "air2",
      "category": "basicAttack",
      "damageType": "midAir",
      "multiplier": 89.79,
      "formula": "44.89% + 22.45% × 2",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "air3",
      "category": "basicAttack",
      "damageType": "midAir",
      "multiplier": 139.21,
      "formula": "11.14% × 5 + 83.51%",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "midAir",
      "multiplier": 86.29,
      "formula": "86.29%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "dodgeCounter",
      "multiplier": 180.92,
      "formula": "45.23% × 4",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "skill_judgement",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 139.18,
      "formula": "20.88% × 2 + 97.42%"
    },
    {
      "id": "skill_ascendant",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 94.66,
      "formula": "28.40% + 33.13% × 2",
      "impliedStates": [
        "normal_form"
      ]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1670.11,
      "formula": "33.41% × 10 + 1336.01%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 132.63,
      "formula": "39.79% + 46.42% × 2",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "ephemeral_na1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 89.79,
      "formula": "44.89% + 22.45% × 2",
      "impliedStates": [
        "ephemeral_transcendence"
      ]
    },
    {
      "id": "ephemeral_na2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 115.55,
      "formula": "23.11% × 5",
      "impliedStates": [
        "ephemeral_transcendence"
      ]
    },
    {
      "id": "ephemeral_na3",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 125.28,
      "formula": "20.88% × 3 + 31.32% × 2",
      "impliedStates": [
        "ephemeral_transcendence"
      ]
    },
    {
      "id": "ephemeral_na4",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 180.96,
      "formula": "18.10% × 4 + 108.56%",
      "impliedStates": [
        "ephemeral_transcendence"
      ]
    },
    {
      "id": "ephemeral_dodge",
      "category": "forteCircuit",
      "damageType": "dodgeCounter",
      "multiplier": 264.46,
      "formula": "26.45% × 4 + 158.66%",
      "impliedStates": [
        "ephemeral_transcendence"
      ]
    },
    {
      "id": "forte_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 695.9,
      "formula": "27.84% × 9 + 445.34%",
      "impliedStates": [
        "ephemeral_transcendence"
      ],
      "requiresResourceFull": "heart_sword_intent"
    },
    {
      "id": "outro",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 800,
      "formula": "800%",
      "fixedLevel": true
    },
    {
      "id": "c1_juque",
      "category": "resonanceChain",
      "damageType": "basic",
      "multiplier": 400,
      "formula": "400%",
      "fixedLevel": true,
      "seq": 1,
      "triggeredDamage": true,
      "requiresResourceAtLeast": {
        "id": "exorcising_seal",
        "value": 1
      }
    }
  ],
  "defaultSkillId": "forte_heavy",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 360234,
  "echoLead": "360234:calamity_effigy",
  "combatStates": [
    {
      "id": "combat_form",
      "kind": "form",
      "required": true,
      "defaultValue": "ephemeral_transcendence",
      "options": [
        {
          "value": "normal_form"
        },
        {
          "value": "ephemeral_transcendence"
        }
      ]
    },
    {
      "id": "target_mindlock",
      "kind": "target",
      "options": [
        {
          "value": "target_has_mindlock"
        }
      ]
    },
    {
      "id": "target_tune_strain",
      "kind": "target",
      "options": [
        {
          "value": "target_tune_shifting"
        },
        {
          "value": "target_tune_interfered",
          "formulaKind": "coherenceInterference",
          "maxStacks": 4,
          "perStackRate": 0.12,
          "perStackRateBySeq": [
            {
              "seq": 6,
              "rate": 0.144
            }
          ]
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_ephemeral_unready_mult",
      "zone": "skillMultBonus",
      "value": 100,
      "scope": "self",
      "skills": [
        "ephemeral_na1",
        "ephemeral_na2",
        "ephemeral_na3",
        "ephemeral_na4",
        "ephemeral_dodge"
      ],
      "requiresState": "ephemeral_transcendence",
      "requiresResourceBelow": {
        "id": "heart_sword_intent",
        "fractionOfCap": 1
      }
    },
    {
      "id": "b_heavens_clarity_mult",
      "zone": "skillMultBonus",
      "value": 100,
      "scope": "self",
      "skills": [
        "forte_heavy"
      ],
      "requiresState": "ephemeral_transcendence",
      "defaultActive": false
    },
    {
      "id": "b_mindlock_base",
      "zone": "amplify",
      "value": 30,
      "scope": "self",
      "skills": [
        "heavy",
        "ephemeral_na1",
        "ephemeral_na2",
        "ephemeral_na3",
        "ephemeral_na4",
        "ephemeral_dodge",
        "forte_heavy",
        "lib"
      ],
      "requiresState": "target_has_mindlock",
      "maxStacks": 15,
      "stackMax": 15,
      "stackMaxBySeq": [
        {
          "seq": 2,
          "max": 25
        }
      ],
      "defaultStacks": 0,
      "stackGroup": "mindlock"
    },
    {
      "id": "b_mindlock_first_seven",
      "zone": "amplify",
      "value": 35,
      "scope": "self",
      "skills": [
        "heavy",
        "ephemeral_na1",
        "ephemeral_na2",
        "ephemeral_na3",
        "ephemeral_na4",
        "ephemeral_dodge",
        "forte_heavy",
        "lib"
      ],
      "requiresState": "target_has_mindlock",
      "maxStacks": 7,
      "stackMax": 15,
      "stackMaxBySeq": [
        {
          "seq": 2,
          "max": 25
        }
      ],
      "stackRange": [
        1,
        7
      ],
      "defaultStacks": 0,
      "stackGroup": "mindlock"
    },
    {
      "id": "b_tune_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_tune_interfered",
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "tune_interference",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.48
      }
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_crit_rate",
          "zone": "critRate",
          "value": 16,
          "scope": "self"
        },
        {
          "id": "k1_juque_vulnerability",
          "zone": "vulnerability",
          "value": 100,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "maxStacks": 25,
          "stackResource": "exorcising_seal",
          "duration": 2
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_heavy_mult",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "heavy"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_lib_crit_damage",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k3_world_in_chorus_mult",
          "zone": "skillMultBonus",
          "value": 75,
          "scope": "self",
          "skills": [
            "forte_heavy"
          ],
          "maxStacks": 25,
          "stackResource": "world_in_chorus"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_team_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "duration": 8
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_judgement_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "skill_judgement"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_selected_vulnerability",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "skills": [
            "heavy",
            "forte_heavy",
            "lib",
            "c1_juque"
          ]
        },
        {
          "id": "k6_juque_mindlock_taken_base",
          "zone": "amplify",
          "value": 50,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 25,
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_juque_mindlock_taken_first_seven",
          "zone": "amplify",
          "value": 35,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 7,
          "stackRange": [
            1,
            7
          ],
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_juque_mindlock_damage_base",
          "zone": "amplify",
          "value": 50,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 25,
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_juque_mindlock_damage_first_seven",
          "zone": "amplify",
          "value": 35,
          "scope": "self",
          "skills": [
            "c1_juque"
          ],
          "requiresState": "target_has_mindlock",
          "maxStacks": 7,
          "stackRange": [
            1,
            7
          ],
          "defaultStacks": 0,
          "stackGroup": "mindlock"
        },
        {
          "id": "k6_tune_response_extra",
          "zone": "finalDmg",
          "scope": "self",
          "requiresState": "target_tune_interfered",
          "maxStacks": 4,
          "defaultStacks": 0,
          "stackGroup": "tune_interference",
          "scaleBy": {
            "stat": "breakAmp",
            "rate": 0.096
          }
        }
      ]
    }
  ],
  "modes": null
});
