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
      ],
      "multiplierByLevel": [16.8,18.18,19.56,21.5,22.88,24.46,26.66,28.86,31.06,33.42],
      "segmentsByLevel": [[[8.4,2]],[[9.09,2]],[[9.78,2]],[[10.75,2]],[[11.44,2]],[[12.23,2]],[[13.33,2]],[[14.43,2]],[[15.53,2]],[[16.71,2]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.45,
      "formula": "9.55% + 19.09% + 66.81%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [48,51.95,55.89,61.39,65.34,69.86,76.15,82.45,88.75,95.45],
      "segmentsByLevel": [[[4.8,1],[9.6,1],[33.6,1]],[[5.2,1],[10.39,1],[36.36,1]],[[5.59,1],[11.18,1],[39.12,1]],[[6.14,1],[12.28,1],[42.97,1]],[[6.54,1],[13.07,1],[45.73,1]],[[6.99,1],[13.97,1],[48.9,1]],[[7.62,1],[15.23,1],[53.3,1]],[[8.25,1],[16.49,1],[57.71,1]],[[8.88,1],[17.75,1],[62.12,1]],[[9.55,1],[19.09,1],[66.81,1]]]
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
      ],
      "multiplierByLevel": [74.98,81.14,87.28,95.89,102.04,109.1,118.94,128.78,138.6,149.06],
      "segmentsByLevel": [[[15,1],[7.5,1],[52.48,1]],[[16.23,1],[8.12,1],[56.79,1]],[[17.46,1],[8.73,1],[61.09,1]],[[19.18,1],[9.59,1],[67.12,1]],[[20.41,1],[10.21,1],[71.42,1]],[[21.82,1],[10.91,1],[76.37,1]],[[23.79,1],[11.9,1],[83.25,1]],[[25.76,1],[12.88,1],[90.14,1]],[[27.72,1],[13.86,1],[97.02,1]],[[29.81,1],[14.91,1],[104.34,1]]]
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
      ],
      "multiplierByLevel": [24.03,26.01,27.98,30.73,32.71,34.97,38.12,41.28,44.43,47.78]
    },
    {
      "id": "withdraw",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.65,
      "formula": "10.15% × 2 + 47.35%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [34.04,36.83,39.6,43.52,46.31,49.52,53.98,58.45,62.91,67.65],
      "segmentsByLevel": [[[5.11,2],[23.82,1]],[[5.53,2],[25.77,1]],[[5.94,2],[27.72,1]],[[6.53,2],[30.46,1]],[[6.95,2],[32.41,1]],[[7.43,2],[34.66,1]],[[8.1,2],[37.78,1]],[[8.77,2],[40.91,1]],[[9.44,2],[44.03,1]],[[10.15,2],[47.35,1]]]
    },
    {
      "id": "pierce",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 151.1,
      "formula": "15.11% × 4 + 90.66%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [76.05,82.27,88.48,97.2,103.46,110.6,120.58,130.57,140.55,151.1],
      "segmentsByLevel": [[[7.61,4],[45.61,1]],[[8.23,4],[49.35,1]],[[8.85,4],[53.08,1]],[[9.72,4],[58.32,1]],[[10.35,4],[62.06,1]],[[11.06,4],[66.36,1]],[[12.06,4],[72.34,1]],[[13.06,4],[78.33,1]],[[14.06,4],[84.31,1]],[[15.11,4],[90.66,1]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 71.58,
      "formula": "35.79% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [36,38.96,41.92,46.04,49,52.4,57.12,61.84,66.56,71.58],
      "segmentsByLevel": [[[18,2]],[[19.48,2]],[[20.96,2]],[[23.02,2]],[[24.5,2]],[[26.2,2]],[[28.56,2]],[[30.92,2]],[[33.28,2]],[[35.79,2]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [37.2,40.26,43.31,47.58,50.63,54.13,59.02,63.9,68.78,73.96]
    },
    {
      "id": "crack_slice",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 89.48,
      "formula": "44.74% × 2",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [45,48.7,52.38,57.56,61.24,65.48,71.4,77.3,83.2,89.48],
      "segmentsByLevel": [[[22.5,2]],[[24.35,2]],[[26.19,2]],[[28.78,2]],[[30.62,2]],[[32.74,2]],[[35.7,2]],[[38.65,2]],[[41.6,2]],[[44.74,2]]]
    },
    {
      "id": "falling_end",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.3,
      "formula": "11.93% + 23.86% × 2 + 59.65%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [60,64.94,69.85,76.75,81.66,87.34,95.19,103.06,110.95,119.3],
      "segmentsByLevel": [[[6,1],[12,2],[30,1]],[[6.5,1],[12.99,2],[32.46,1]],[[6.99,1],[13.97,2],[34.92,1]],[[7.68,1],[15.35,2],[38.37,1]],[[8.17,1],[16.33,2],[40.83,1]],[[8.74,1],[17.47,2],[43.66,1]],[[9.52,1],[19.04,2],[47.59,1]],[[10.31,1],[20.61,2],[51.53,1]],[[11.1,1],[22.19,2],[55.47,1]],[[11.93,1],[23.86,2],[59.65,1]]]
    },
    {
      "id": "dodge_counter",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.59,
      "formula": "23.86% + 47.72% + 167.01%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [120,129.85,139.69,153.47,163.3,174.63,190.37,206.1,221.86,238.59],
      "segmentsByLevel": [[[12,1],[24,1],[84,1]],[[12.99,1],[25.97,1],[90.89,1]],[[13.97,1],[27.94,1],[97.78,1]],[[15.35,1],[30.7,1],[107.42,1]],[[16.33,1],[32.66,1],[114.31,1]],[[17.47,1],[34.93,1],[122.23,1]],[[19.04,1],[38.08,1],[133.25,1]],[[20.61,1],[41.22,1],[144.27,1]],[[22.19,1],[44.37,1],[155.3,1]],[[23.86,1],[47.72,1],[167.01,1]]]
    },
    {
      "id": "eye_close",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 178.93,
      "formula": "178.93%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [90,97.38,104.76,115.1,122.48,130.96,142.77,154.58,166.39,178.93]
    },
    {
      "id": "skill_eye",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 35.79,
      "formula": "35.79%",
      "impliedStates": [
        "mode_1_option_0"
      ],
      "multiplierByLevel": [18,19.48,20.96,23.02,24.5,26.2,28.56,30.92,33.28,35.79]
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
      "fallbackSkillId": "skill_eye",
      "multiplierByLevel": [70.24,76,81.76,89.76,95.52,102.16,111.36,120.56,129.76,139.6],
      "segmentsByLevel": [[[8.78,8]],[[9.5,8]],[[10.22,8]],[[11.22,8]],[[11.94,8]],[[12.77,8]],[[13.92,8]],[[15.07,8]],[[16.22,8]],[[17.45,8]]]
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
      "fallbackSkillId": "skill_eye",
      "multiplierByLevel": [60.16,64.96,69.92,76.8,81.76,87.36,95.36,103.2,111.04,119.36],
      "segmentsByLevel": [[[3.76,16]],[[4.06,16]],[[4.37,16]],[[4.8,16]],[[5.11,16]],[[5.46,16]],[[5.96,16]],[[6.45,16]],[[6.94,16]],[[7.46,16]]]
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
      ],
      "multiplierByLevel": [480,519.36,558.72,613.83,653.19,698.45,761.43,824.4,887.38,954.29]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 95.43,
      "formula": "95.43%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [48,51.94,55.88,61.39,65.32,69.85,76.15,82.44,88.74,95.43]
    },
    {
      "id": "sawring_1",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 68.94,
      "formula": "11.49% × 6",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [34.68,37.5,40.38,44.34,47.16,50.46,55.02,59.52,64.08,68.94],
      "segmentsByLevel": [[[5.78,6]],[[6.25,6]],[[6.73,6]],[[7.39,6]],[[7.86,6]],[[8.41,6]],[[9.17,6]],[[9.92,6]],[[10.68,6]],[[11.49,6]]]
    },
    {
      "id": "sawring_2",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 85.12,
      "formula": "10.64% × 8",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [42.8,46.32,49.84,54.8,58.32,62.32,67.92,73.52,79.2,85.12],
      "segmentsByLevel": [[[5.35,8]],[[5.79,8]],[[6.23,8]],[[6.85,8]],[[7.29,8]],[[7.79,8]],[[8.49,8]],[[9.19,8]],[[9.9,8]],[[10.64,8]]]
    },
    {
      "id": "sawring_2_hold",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 106.4,
      "formula": "10.64% × 10",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [53.5,57.9,62.3,68.5,72.9,77.9,84.9,91.9,99,106.4],
      "segmentsByLevel": [[[5.35,10]],[[5.79,10]],[[6.23,10]],[[6.85,10]],[[7.29,10]],[[7.79,10]],[[8.49,10]],[[9.19,10]],[[9.9,10]],[[10.64,10]]]
    },
    {
      "id": "sawring_2_break",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 10.74,
      "formula": "3.58% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [5.4,5.85,6.3,6.93,7.35,7.86,8.58,9.3,9.99,10.74],
      "segmentsByLevel": [[[1.8,3]],[[1.95,3]],[[2.1,3]],[[2.31,3]],[[2.45,3]],[[2.62,3]],[[2.86,3]],[[3.1,3]],[[3.33,3]],[[3.58,3]]]
    },
    {
      "id": "sawring_3",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 127.84,
      "formula": "15.98% × 8",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [64.32,69.6,74.88,82.24,87.52,93.6,102,110.48,118.88,127.84],
      "segmentsByLevel": [[[8.04,8]],[[8.7,8]],[[9.36,8]],[[10.28,8]],[[10.94,8]],[[11.7,8]],[[12.75,8]],[[13.81,8]],[[14.86,8]],[[15.98,8]]]
    },
    {
      "id": "sawring_3_hold",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 95.88,
      "formula": "15.98% × 6",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [48.24,52.2,56.16,61.68,65.64,70.2,76.5,82.86,89.16,95.88],
      "segmentsByLevel": [[[8.04,6]],[[8.7,6]],[[9.36,6]],[[10.28,6]],[[10.94,6]],[[11.7,6]],[[12.75,6]],[[13.81,6]],[[14.86,6]],[[15.98,6]]]
    },
    {
      "id": "sawring_3_fall",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 10.74,
      "formula": "3.58% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [5.4,5.85,6.3,6.93,7.35,7.86,8.58,9.3,9.99,10.74],
      "segmentsByLevel": [[[1.8,3]],[[1.95,3]],[[2.1,3]],[[2.31,3]],[[2.45,3]],[[2.62,3]],[[2.86,3]],[[3.1,3]],[[3.33,3]],[[3.58,3]]]
    },
    {
      "id": "sawring_dodge",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 85.12,
      "formula": "10.64% × 8",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [42.8,46.32,49.84,54.8,58.32,62.32,67.92,73.52,79.2,85.12],
      "segmentsByLevel": [[[5.35,8]],[[5.79,8]],[[6.23,8]],[[6.85,8]],[[7.29,8]],[[7.79,8]],[[8.49,8]],[[9.19,8]],[[9.9,8]],[[10.64,8]]]
    },
    {
      "id": "sawring_dodge_hold",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 106.4,
      "formula": "10.64% × 10",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [53.5,57.9,62.3,68.5,72.9,77.9,84.9,91.9,99,106.4],
      "segmentsByLevel": [[[5.35,10]],[[5.79,10]],[[6.23,10]],[[6.85,10]],[[7.29,10]],[[7.79,10]],[[8.49,10]],[[9.19,10]],[[9.9,10]],[[10.64,10]]]
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
      ],
      "multiplierByLevel": [129.6,140.24,150.87,165.74,176.37,188.59,205.59,222.6,239.6,257.67],
      "segmentsByLevel": [[[25.92,1],[103.68,1]],[[28.05,1],[112.19,1]],[[30.18,1],[120.69,1]],[[33.15,1],[132.59,1]],[[35.28,1],[141.09,1]],[[37.72,1],[150.87,1]],[[41.12,1],[164.47,1]],[[44.52,1],[178.08,1]],[[47.92,1],[191.68,1]],[[51.54,1],[206.13,1]]],
      "perStackByLevel": [1.3,1.42,1.52,1.67,1.78,1.89,2.07,2.24,2.4,2.59]
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
      "triggeredDamage": true,
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "sawring_end",
  "skillEvents": [
    {
      "seq": 4,
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
