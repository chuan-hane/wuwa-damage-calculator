WUWA.register({
  "id": "rebecca",
  "aliases": [],
  "debut": 3.4,
  "element": "electro",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "skull_thrasher",
  "portrait": "",
  "base": {
    "hp": 11600,
    "attack": 400,
    "defense": 1173,
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
      "id": "fervor",
      "min": 0,
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "hunt_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.52,
      "formula": "36.76% + 36.76%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.65,
      "formula": "19.13% × 4 + 19.13%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 109.85,
      "formula": "109.85%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 33.8,
      "formula": "16.90% + 16.90%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_eat_lead",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 121.68,
      "formula": "60.84% + 60.84%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 136.04,
      "formula": "136.04%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 211.24,
      "formula": "211.24%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_tactical",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.5,
      "formula": "16.90% × 4 + 16.90%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hunt_tactical_success",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.71,
      "formula": "148.71%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "guts_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.38,
      "formula": "61.69% + 61.69%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.5,
      "formula": "84.50%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 225.11,
      "formula": "33.77% + 33.77% + 157.57%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 202.79,
      "formula": "202.79%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 258.56,
      "formula": "258.56%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_tactical",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "101.40%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "guts_tactical_success",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.71,
      "formula": "148.71%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "skill_big_boom",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 236.6,
      "formula": "23.66% + 23.66% + 23.66% + 23.66% + 35.49% + 35.49% + 35.49% + 35.49%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "skill_catch_me",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 236.6,
      "formula": "23.66% + 4.74% + 23.66% + 23.66% + 137.22% + 11.83% + 11.83%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "hmg",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 24.3,
      "formula": "24.30%"
    },
    {
      "id": "hmg_p1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 48.6,
      "formula": "48.60%"
    },
    {
      "id": "hmg_p2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 72.9,
      "formula": "72.90%"
    },
    {
      "id": "big_fireworks",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 636.2,
      "formula": "63.62% + 572.58%"
    },
    {
      "id": "intro_big_boom",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 270.4,
      "formula": "27.04% + 27.04% + 27.04% + 27.04% + 27.04% + 27.04% + 40.56% + 67.60%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "intro_catch_me",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 202.8,
      "formula": "10.14% + 30.42% + 40.56% + 40.56% + 40.56% + 40.56%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "fervor_hunt",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 397.66,
      "formula": "19.89% + 19.89% + 19.89% + 318.10% + 19.89%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "fervor",
        "value": 120
      },
      "fallbackSkillId": "hunt_heavy",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "fervor_guts",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 278.34,
      "formula": "278.34%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "fervor",
        "value": 120
      },
      "fallbackSkillId": "guts_heavy",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "hack_meltdown",
      "category": "forteCircuit",
      "damageType": "hackDmg",
      "multiplier": 2358.89,
      "formula": "2358.89%",
      "requiresState": "target_1_option_1"
    },
    {
      "id": "c6_extra_hit",
      "seq": 6,
      "category": "resonanceChain",
      "damageType": "basic",
      "multiplier": 900,
      "formula": "900%",
      "triggeredDamage": true,
      "requiresResourceAtLeast": {
        "id": "fervor",
        "value": 120
      }
    },
    {
      "id": "outro_preem_choom",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 2.5,
      "formula": "2.5% / hit"
    }
  ],
  "defaultSkillId": "big_fireworks",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoCombo": "split122",
  "echoSet": 24,
  "echoSet2": 3,
  "echoSet3": 8,
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
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_mode_hunt",
      "zone": "critDamage",
      "value": 30,
      "scope": "self",
      "requiresState": [
        "mode_1_option_1",
        "buff_1_option_1"
      ]
    },
    {
      "id": "b_mode_guts",
      "zone": "defIgnore",
      "value": 15,
      "scope": "self",
      "requiresState": [
        "mode_1_option_2",
        "buff_1_option_1"
      ]
    },
    {
      "id": "b_tag_you_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerSkills": [
        "fervor_hunt",
        "fervor_guts"
      ],
      "triggerStacks": 1,
      "duration": 12
    },
    {
      "id": "b_hack_break_amp",
      "zone": "breakAmp",
      "value": 30,
      "scope": "team",
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_liberation_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "duration": 30
    },
    {
      "id": "b_outro_all",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b_outro_heavy",
      "zone": "amplify",
      "damageType": "heavy",
      "value": 35,
      "scope": "team",
      "maxStacks": 70,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "duration": 14
    },
    {
      "id": "b_outro_lucy_mult",
      "zone": "skillMultBonus",
      "value": 250,
      "scope": "self",
      "skills": [
        "outro_preem_choom"
      ],
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_basic_mult",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "hunt_na1",
            "hunt_na2",
            "hunt_na3",
            "hunt_heavy",
            "hunt_tactical",
            "hunt_tactical_success",
            "hunt_dodge",
            "guts_na1",
            "guts_na2",
            "guts_na3",
            "guts_tactical",
            "guts_tactical_success",
            "guts_dodge"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_all_bonus",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerEvents": [
            "introEntry",
            "castResonanceLiberation"
          ],
          "duration": 30
        },
        {
          "id": "k2_hack_amp",
          "zone": "amplify",
          "value": 15,
          "scope": "team",
          "defaultActive": false,
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_liberation_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": [
            "hmg",
            "hmg_p1",
            "hmg_p2",
            "big_fireworks"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_mode_cd",
          "zone": "critDamage",
          "value": 18,
          "scope": "self",
          "requiresState": "buff_1_option_1"
        },
        {
          "id": "k4_mode_def",
          "zone": "defIgnore",
          "value": 9,
          "scope": "self",
          "requiresState": "buff_1_option_1"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_basic_bonus",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "duration": 8
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_basic_bonus_scale",
          "zone": "typeBonusScale",
          "damageType": "basic",
          "value": 40,
          "scope": "self"
        }
      ]
    }
  ],
  "modes": null
});
