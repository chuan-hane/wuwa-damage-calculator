WUWA.register({
  "id": "lucilla",
  "aliases": [],
  "debut": 3.4,
  "element": "glacio",
  "weaponType": 5,
  "quality": 5,
  "effectTypes": [
    "frost"
  ],
  "effectTypeRequiresState": {
    "frost": "mode_1_option_1"
  },
  "signatureWeaponId": "freeze_frame",
  "portrait": "",
  "base": {
    "hp": 12237,
    "attack": 375,
    "defense": 1197,
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
      "id": "photo",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "trace",
      "min": 0,
      "max": 150,
      "defaultValue": "max"
    },
    {
      "id": "filmRoll",
      "min": 0,
      "max": 4,
      "maxBySeq": [
        {
          "seq": 2,
          "max": 10
        }
      ],
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.29,
      "formula": "59.29%",
      "multiplierByLevel": [29.82,32.27,34.72,38.14,40.58,43.4,47.31,51.22,55.13,59.29]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.23,
      "formula": "26.89% + 40.34%",
      "multiplierByLevel": [33.82,36.59,39.37,43.25,46.02,49.2,53.64,58.08,62.52,67.23],
      "segmentsByLevel": [[[13.53,1],[20.29,1]],[[14.64,1],[21.95,1]],[[15.75,1],[23.62,1]],[[17.3,1],[25.95,1]],[[18.41,1],[27.61,1]],[[19.68,1],[29.52,1]],[[21.46,1],[32.18,1]],[[23.23,1],[34.85,1]],[[25.01,1],[37.51,1]],[[26.89,1],[40.34,1]]]
    },
    {
      "id": "na3_unremarkable",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 159.55,
      "formula": "159.55%",
      "multiplierByLevel": [80.25,86.83,93.41,102.63,109.21,116.77,127.3,137.83,148.36,159.55]
    },
    {
      "id": "na3_commendable",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 235.27,
      "formula": "235.27%",
      "multiplierByLevel": [118.34,128.04,137.75,151.33,161.04,172.19,187.72,203.25,218.77,235.27]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%",
      "multiplierByLevel": [43.4,46.96,50.52,55.5,59.06,63.16,68.85,74.54,80.24,86.29]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 150.73,
      "formula": "67.83% + 82.90%",
      "multiplierByLevel": [75.82,82.04,88.25,96.96,103.17,110.33,120.27,130.22,140.16,150.73],
      "segmentsByLevel": [[[34.12,1],[41.7,1]],[[36.92,1],[45.12,1]],[[39.71,1],[48.54,1]],[[43.63,1],[53.33,1]],[[46.43,1],[56.74,1]],[[49.65,1],[60.68,1]],[[54.12,1],[66.15,1]],[[58.6,1],[71.62,1]],[[63.07,1],[77.09,1]],[[67.83,1],[82.9,1]]]
    },
    {
      "id": "skill_frame",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 39.78,
      "formula": "13.26% × 3",
      "multiplierByLevel": [20.01,21.66,23.28,25.59,27.24,29.13,31.74,34.35,36.99,39.78],
      "segmentsByLevel": [[[6.67,3]],[[7.22,3]],[[7.76,3]],[[8.53,3]],[[9.08,3]],[[9.71,3]],[[10.58,3]],[[11.45,3]],[[12.33,3]],[[13.26,3]]]
    },
    {
      "id": "skill_compensate",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 249.07,
      "formula": "249.07%",
      "multiplierByLevel": [125.28,135.56,145.83,160.21,170.49,182.3,198.74,215.17,231.61,249.07]
    },
    {
      "id": "spotlight_frost",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 548.98,
      "formula": "82.35% + 82.35% + 274.48% + 109.80%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [276.13,298.79,321.44,353.13,375.77,401.8,438.04,474.25,510.48,548.98],
      "segmentsByLevel": [[[41.42,1],[41.42,1],[138.06,1],[55.23,1]],[[44.82,1],[44.82,1],[149.39,1],[59.76,1]],[[48.22,1],[48.22,1],[160.71,1],[64.29,1]],[[52.97,1],[52.97,1],[176.56,1],[70.63,1]],[[56.37,1],[56.37,1],[187.88,1],[75.15,1]],[[60.27,1],[60.27,1],[200.9,1],[80.36,1]],[[65.71,1],[65.71,1],[219.01,1],[87.61,1]],[[71.14,1],[71.14,1],[237.12,1],[94.85,1]],[[76.57,1],[76.57,1],[255.24,1],[102.1,1]],[[82.35,1],[82.35,1],[274.48,1],[109.8,1]]]
    },
    {
      "id": "spotlight_echo",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 548.98,
      "formula": "82.35% + 82.35% + 274.48% + 109.80%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [276.13,298.79,321.44,353.13,375.77,401.8,438.04,474.25,510.48,548.98],
      "segmentsByLevel": [[[41.42,1],[41.42,1],[138.06,1],[55.23,1]],[[44.82,1],[44.82,1],[149.39,1],[59.76,1]],[[48.22,1],[48.22,1],[160.71,1],[64.29,1]],[[52.97,1],[52.97,1],[176.56,1],[70.63,1]],[[56.37,1],[56.37,1],[187.88,1],[75.15,1]],[[60.27,1],[60.27,1],[200.9,1],[80.36,1]],[[65.71,1],[65.71,1],[219.01,1],[87.61,1]],[[71.14,1],[71.14,1],[237.12,1],[94.85,1]],[[76.57,1],[76.57,1],[255.24,1],[102.1,1]],[[82.35,1],[82.35,1],[274.48,1],[109.8,1]]]
    },
    {
      "id": "clear_as_day_frost",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 142.74,
      "formula": "142.74%",
      "requiresResource": "photo",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 3
      },
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [71.8,77.69,83.57,91.82,97.7,104.47,113.89,123.31,132.73,142.74]
    },
    {
      "id": "clear_as_day_echo",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 142.74,
      "formula": "142.74%",
      "requiresResource": "photo",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 3
      },
      "impliedStates": [
        "mode_1_option_2"
      ],
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [71.8,77.69,83.57,91.82,97.7,104.47,113.89,123.31,132.73,142.74]
    },
    {
      "id": "memory_na1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 76.59,
      "formula": "30.64% + 45.95%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [38.53,41.69,44.85,49.27,52.43,56.07,61.12,66.17,71.22,76.59],
      "segmentsByLevel": [[[15.41,1],[23.12,1]],[[16.68,1],[25.01,1]],[[17.94,1],[26.91,1]],[[19.71,1],[29.56,1]],[[20.97,1],[31.46,1]],[[22.43,1],[33.64,1]],[[24.45,1],[36.67,1]],[[26.47,1],[39.7,1]],[[28.49,1],[42.73,1]],[[30.64,1],[45.95,1]]]
    },
    {
      "id": "memory_na2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 149.42,
      "formula": "59.77% + 89.65%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [75.15,81.32,87.48,96.12,102.27,109.37,119.22,129.08,138.94,149.42],
      "segmentsByLevel": [[[30.06,1],[45.09,1]],[[32.53,1],[48.79,1]],[[34.99,1],[52.49,1]],[[38.45,1],[57.67,1]],[[40.91,1],[61.36,1]],[[43.75,1],[65.62,1]],[[47.69,1],[71.53,1]],[[51.63,1],[77.45,1]],[[55.58,1],[83.36,1]],[[59.77,1],[89.65,1]]]
    },
    {
      "id": "memory_na3",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 416.96,
      "formula": "52.12% × 8",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [209.76,226.96,244.16,268.24,285.36,305.2,332.72,360.16,387.68,416.96],
      "segmentsByLevel": [[[26.22,8]],[[28.37,8]],[[30.52,8]],[[33.53,8]],[[35.67,8]],[[38.15,8]],[[41.59,8]],[[45.02,8]],[[48.46,8]],[[52.12,8]]]
    },
    {
      "id": "letting_go_frost",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 848.07,
      "formula": "84.81% × 3 + 593.64%",
      "impliedStates": [
        "status_1_option_1",
        "mode_1_option_1"
      ],
      "multiplierByLevel": [426.58,461.56,496.55,545.49,580.48,620.7,676.67,732.65,788.59,848.07],
      "segmentsByLevel": [[[42.66,3],[298.6,1]],[[46.16,3],[323.08,1]],[[49.66,3],[347.57,1]],[[54.55,3],[381.84,1]],[[58.05,3],[406.33,1]],[[62.07,3],[434.49,1]],[[67.67,3],[473.66,1]],[[73.27,3],[512.84,1]],[[78.86,3],[552.01,1]],[[84.81,3],[593.64,1]]]
    },
    {
      "id": "letting_go_echo",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 848.07,
      "formula": "84.81% × 3 + 593.64%",
      "impliedStates": [
        "status_1_option_1",
        "mode_1_option_2"
      ],
      "multiplierByLevel": [426.58,461.56,496.55,545.49,580.48,620.7,676.67,732.65,788.59,848.07],
      "segmentsByLevel": [[[42.66,3],[298.6,1]],[[46.16,3],[323.08,1]],[[49.66,3],[347.57,1]],[[54.55,3],[381.84,1]],[[58.05,3],[406.33,1]],[[62.07,3],[434.49,1]],[[67.67,3],[473.66,1]],[[73.27,3],[512.84,1]],[[78.86,3],[552.01,1]],[[84.81,3],[593.64,1]]]
    },
    {
      "id": "memory_air",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 110.94,
      "formula": "110.94%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [55.8,60.38,64.96,71.36,75.94,81.2,88.52,95.84,103.16,110.94]
    },
    {
      "id": "memory_dodge",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 256.77,
      "formula": "115.55% + 141.22%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [129.16,139.75,150.34,165.17,175.76,187.93,204.88,221.82,238.77,256.77],
      "segmentsByLevel": [[[58.12,1],[71.04,1]],[[62.89,1],[76.86,1]],[[67.65,1],[82.69,1]],[[74.33,1],[90.84,1]],[[79.09,1],[96.67,1]],[[84.57,1],[103.36,1]],[[92.2,1],[112.68,1]],[[99.82,1],[122,1]],[[107.45,1],[131.32,1]],[[115.55,1],[141.22,1]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 97.42,
      "formula": "97.42%",
      "triggerEvents": [
        "introEntry",
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [49,53.02,57.04,62.67,66.68,71.3,77.73,84.16,90.59,97.42]
    },
    {
      "id": "intro_hard_cut",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 149.41,
      "formula": "149.41%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [75.15,81.32,87.48,96.11,102.27,109.36,119.22,129.08,138.93,149.41]
    },
    {
      "id": "oblivion_frost",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 285.48,
      "formula": "285.48%",
      "requiresResource": "photo",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 1
      },
      "impliedStates": [
        "status_1_option_1",
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [143.59,155.37,167.14,183.63,195.4,208.94,227.78,246.62,265.46,285.48]
    },
    {
      "id": "oblivion_echo",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 285.48,
      "formula": "285.48%",
      "requiresResource": "photo",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 1
      },
      "impliedStates": [
        "status_1_option_1",
        "mode_1_option_2"
      ],
      "multiplierByLevel": [143.59,155.37,167.14,183.63,195.4,208.94,227.78,246.62,265.46,285.48]
    }
  ],
  "defaultSkillId": "letting_go_frost",
  "skillEvents": [
    {
      "skills": [
        "spotlight_frost",
        "intro",
        "intro_hard_cut",
        "oblivion_frost"
      ],
      "event": "applyGlacioChafe",
      "stacks": 1
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 30,
  "echoLead": "30:reminiscence_threnodian_voidborne_construct",
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
      "id": "status_1",
      "kind": "status",
      "options": [
        {
          "value": "status_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_slow_res",
      "zone": "resShred",
      "element": "glacio",
      "value": 8,
      "scope": "team",
      "requiresState": "mode_1_option_1",
      "defaultActive": false,
      "triggerSkills": [
        "spotlight_frost"
      ],
      "duration": 30
    },
    {
      "id": "b_slow_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 25,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "defaultActive": false,
      "triggerSkills": [
        "spotlight_echo"
      ],
      "duration": 30
    },
    {
      "id": "b_clear_basic",
      "zone": "typeBonus",
      "damageType": "basic",
      "value": 30,
      "scope": "self",
      "requiresState": "mode_1_option_1",
      "defaultActive": false,
      "triggerSkills": [
        "clear_as_day_frost"
      ],
      "duration": 10
    },
    {
      "id": "b_clear_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 30,
      "scope": "self",
      "requiresState": "mode_1_option_2",
      "defaultActive": false,
      "triggerSkills": [
        "clear_as_day_echo"
      ],
      "duration": 10
    },
    {
      "id": "b_zoom",
      "zone": "critDamage",
      "damageType": "echoSkill",
      "value": 40,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "maxStacks": 4,
      "stackMax": 1,
      "stackMaxBySeq": [
        {
          "seq": 2,
          "max": 4
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "triggerSkills": [
        "clear_as_day_echo",
        "oblivion_echo"
      ],
      "triggerStacks": 1,
      "duration": 30
    },
    {
      "id": "outro_frost",
      "zone": "amplify",
      "effect": "frost",
      "value": 60,
      "scope": "team",
      "requiresState": "mode_1_option_1",
      "duration": 30,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "outro_echo",
      "zone": "amplify",
      "damageType": "echoSkill",
      "value": 50,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "spotlight_frost",
            "spotlight_echo"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_frost",
          "zone": "amplify",
          "effect": "frost",
          "value": 80,
          "scope": "team",
          "requiresState": "mode_1_option_1",
          "defaultActive": false,
          "triggerSkills": [
            "clear_as_day_frost"
          ],
          "duration": 30
        },
        {
          "id": "k2_echo",
          "zone": "typeBonus",
          "damageType": "echoSkill",
          "value": 40,
          "scope": "team",
          "requiresState": "mode_1_option_2",
          "defaultActive": false,
          "triggerSkills": [
            "clear_as_day_echo"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_letting_go",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "letting_go_frost",
            "letting_go_echo"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 30,
          "scope": "self",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "oblivion_frost",
            "oblivion_echo"
          ],
          "triggerStacks": 1,
          "duration": 6
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_oblivion",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "oblivion_frost",
            "oblivion_echo"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_memory",
          "zone": "amplify",
          "value": 600,
          "scope": "self",
          "skills": [
            "letting_go_frost",
            "letting_go_echo"
          ],
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_2",
          "triggerSkills": [
            "oblivion_frost",
            "oblivion_echo"
          ],
          "triggerStacks": 1
        }
      ]
    }
  ],
  "modes": null
});
