WUWA.register({
  "id": "lynae",
  "tuneStrainCapBonus": 1,
  "aliases": [],
  "debut": 3,
  "element": "spectro",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "spectrum_blaster",
  "portrait": "",
  "base": {
    "hp": 12237,
    "attack": 375,
    "defense": 1197,
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
      "id": "iridescence",
      "min": 0,
      "max": 120,
      "defaultValue": "max"
    },
    {
      "id": "trueColor",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "luminousFlux",
      "min": 0,
      "max": 120,
      "maxBySeq": [
        {
          "seq": 6,
          "max": 360
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
      "multiplier": 86.19,
      "formula": "86.19%",
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [43.35,46.91,50.46,55.44,59,63.08,68.77,74.46,80.15,86.19]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.17,
      "formula": "52.39% + 52.39% + 52.39%",
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [79.05,85.56,92.04,101.1,107.58,115.05,125.4,135.78,146.16,157.17],
      "segmentsByLevel": [[[26.35,1],[26.35,1],[26.35,1]],[[28.52,1],[28.52,1],[28.52,1]],[[30.68,1],[30.68,1],[30.68,1]],[[33.7,1],[33.7,1],[33.7,1]],[[35.86,1],[35.86,1],[35.86,1]],[[38.35,1],[38.35,1],[38.35,1]],[[41.8,1],[41.8,1],[41.8,1]],[[45.26,1],[45.26,1],[45.26,1]],[[48.72,1],[48.72,1],[48.72,1]],[[52.39,1],[52.39,1],[52.39,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.37,
      "formula": "123.37%",
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [62.05,67.14,72.23,79.35,84.44,90.29,98.43,106.58,114.72,123.37]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 239.97,
      "formula": "239.97%",
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [120.7,130.6,140.5,154.36,164.25,175.64,191.47,207.31,223.14,239.97]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 143.65,
      "formula": "14.37% + 129.28%",
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [72.26,78.18,84.1,92.4,98.33,105.14,114.62,124.1,133.58,143.65],
      "segmentsByLevel": [[[7.23,1],[65.03,1]],[[7.82,1],[70.36,1]],[[8.41,1],[75.69,1]],[[9.24,1],[83.16,1]],[[9.84,1],[88.49,1]],[[10.52,1],[94.62,1]],[[11.47,1],[103.15,1]],[[12.41,1],[111.69,1]],[[13.36,1],[120.22,1]],[[14.37,1],[129.28,1]]]
    },
    {
      "id": "spark_collision_1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 111.12,
      "formula": "55.56% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "iridescence",
        "value": 120
      },
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [55.9,60.48,65.06,71.48,76.06,81.34,88.66,96,103.32,111.12],
      "segmentsByLevel": [[[27.95,2]],[[30.24,2]],[[32.53,2]],[[35.74,2]],[[38.03,2]],[[40.67,2]],[[44.33,2]],[[48,2]],[[51.66,2]],[[55.56,2]]]
    },
    {
      "id": "spark_collision_2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 333.34,
      "formula": "166.67% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "iridescence",
        "value": 120
      },
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [167.68,181.42,195.16,214.42,228.16,243.98,265.98,287.98,309.96,333.34],
      "segmentsByLevel": [[[83.84,2]],[[90.71,2]],[[97.58,2]],[[107.21,2]],[[114.08,2]],[[121.99,2]],[[132.99,2]],[[143.99,2]],[[154.98,2]],[[166.67,2]]]
    },
    {
      "id": "spark_collision_3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 555.56,
      "formula": "277.78% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "iridescence",
        "value": 120
      },
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [279.44,302.36,325.28,357.36,380.26,406.62,443.28,479.94,516.6,555.56],
      "segmentsByLevel": [[[139.72,2]],[[151.18,2]],[[162.64,2]],[[178.68,2]],[[190.13,2]],[[203.31,2]],[[221.64,2]],[[239.97,2]],[[258.3,2]],[[277.78,2]]]
    },
    {
      "id": "kaleidoscopic_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 82.81,
      "formula": "82.81%",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [41.65,45.07,48.49,53.27,56.68,60.61,66.07,71.54,77,82.81]
    },
    {
      "id": "kaleidoscopic_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 77.74,
      "formula": "38.87% × 2",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [39.1,42.32,45.52,50.02,53.22,56.9,62.04,67.16,72.3,77.74],
      "segmentsByLevel": [[[19.55,2]],[[21.16,2]],[[22.76,2]],[[25.01,2]],[[26.61,2]],[[28.45,2]],[[31.02,2]],[[33.58,2]],[[36.15,2]],[[38.87,2]]]
    },
    {
      "id": "kaleidoscopic_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.25,
      "formula": "37.75% × 3",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [56.97,61.62,66.3,72.84,77.52,82.89,90.36,97.83,105.3,113.25],
      "segmentsByLevel": [[[18.99,3]],[[20.54,3]],[[22.1,3]],[[24.28,3]],[[25.84,3]],[[27.63,3]],[[30.12,3]],[[32.61,3]],[[35.1,3]],[[37.75,3]]]
    },
    {
      "id": "kaleidoscopic_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.74,
      "formula": "29.75% × 2 + 44.62% + 44.62%",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [74.8,80.96,87.1,95.68,101.8,108.86,118.68,128.5,138.3,148.74],
      "segmentsByLevel": [[[14.96,2],[22.44,1],[22.44,1]],[[16.19,2],[24.29,1],[24.29,1]],[[17.42,2],[26.13,1],[26.13,1]],[[19.14,2],[28.7,1],[28.7,1]],[[20.36,2],[30.54,1],[30.54,1]],[[21.77,2],[32.66,1],[32.66,1]],[[23.74,2],[35.6,1],[35.6,1]],[[25.7,2],[38.55,1],[38.55,1]],[[27.66,2],[41.49,1],[41.49,1]],[[29.75,2],[44.62,1],[44.62,1]]]
    },
    {
      "id": "kaleidoscopic_na5",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.81,
      "formula": "75.54% + 15.11% × 5 + 100.72%",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [126.66,137.09,147.45,161.98,172.4,184.31,200.95,217.57,234.16,251.81],
      "segmentsByLevel": [[[38,1],[7.6,5],[50.66,1]],[[41.12,1],[8.23,5],[54.82,1]],[[44.23,1],[8.85,5],[58.97,1]],[[48.59,1],[9.72,5],[64.79,1]],[[51.71,1],[10.35,5],[68.94,1]],[[55.29,1],[11.06,5],[73.72,1]],[[60.28,1],[12.06,5],[80.37,1]],[[65.26,1],[13.06,5],[87.01,1]],[[70.25,1],[14.05,5],[93.66,1]],[[75.54,1],[15.11,5],[100.72,1]]]
    },
    {
      "id": "kaleidoscopic_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 184.2,
      "formula": "184.20%",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [92.65,100.25,107.85,118.49,126.08,134.82,146.98,159.13,171.29,184.2]
    },
    {
      "id": "kaleidoscopic_ground_heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.41,
      "formula": "17.63% × 7",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [62.09,67.2,72.24,79.38,84.49,90.3,98.49,106.61,114.73,123.41],
      "segmentsByLevel": [[[8.87,7]],[[9.6,7]],[[10.32,7]],[[11.34,7]],[[12.07,7]],[[12.9,7]],[[14.07,7]],[[15.23,7]],[[16.39,7]],[[17.63,7]]]
    },
    {
      "id": "kaleidoscopic_graffiti_blast",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "kaleidoscopic_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 143.65,
      "formula": "14.37% + 129.28%",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [72.26,78.18,84.1,92.4,98.33,105.14,114.62,124.1,133.58,143.65],
      "segmentsByLevel": [[[7.23,1],[65.03,1]],[[7.82,1],[70.36,1]],[[8.41,1],[75.69,1]],[[9.24,1],[83.16,1]],[[9.84,1],[88.49,1]],[[10.52,1],[94.62,1]],[[11.47,1],[103.15,1]],[[12.41,1],[111.69,1]],[[13.36,1],[120.22,1]],[[14.37,1],[129.28,1]]]
    },
    {
      "id": "kaleidoscopic_air_heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 243.39,
      "formula": "34.77% × 7",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [122.43,132.44,142.52,156.59,166.6,178.15,194.18,210.28,226.31,243.39],
      "segmentsByLevel": [[[17.49,7]],[[18.92,7]],[[20.36,7]],[[22.37,7]],[[23.8,7]],[[25.45,7]],[[27.74,7]],[[30.04,7]],[[32.33,7]],[[34.77,7]]]
    },
    {
      "id": "lynae_style_palettes",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 278.63,
      "formula": "139.31% + 46.44% × 3",
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [140.16,151.66,163.14,179.22,190.73,203.94,222.34,240.71,259.12,278.63],
      "segmentsByLevel": [[[70.08,1],[23.36,3]],[[75.82,1],[25.28,3]],[[81.57,1],[27.19,3]],[[89.61,1],[29.87,3]],[[95.36,1],[31.79,3]],[[101.97,1],[33.99,3]],[[111.16,1],[37.06,3]],[[120.35,1],[40.12,3]],[[129.55,1],[43.19,3]],[[139.31,1],[46.44,3]]]
    },
    {
      "id": "additive_color",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 232.62,
      "formula": "116.31% × 2",
      "impliedStates": [
        "phase_1_option_2"
      ],
      "multiplierByLevel": [117,126.6,136.2,149.62,159.22,170.26,185.6,200.96,216.3,232.62],
      "segmentsByLevel": [[[58.5,2]],[[63.3,2]],[[68.1,2]],[[74.81,2]],[[79.61,2]],[[85.13,2]],[[92.8,2]],[[100.48,2]],[[108.15,2]],[[116.31,2]]]
    },
    {
      "id": "prismatic_overblast",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 874.8,
      "formula": "87.48% × 10",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [440,476.1,512.2,562.7,598.8,640.3,698,755.7,813.5,874.8],
      "segmentsByLevel": [[[44,10]],[[47.61,10]],[[51.22,10]],[[56.27,10]],[[59.88,10]],[[64.03,10]],[[69.8,10]],[[75.57,10]],[[81.35,10]],[[87.48,10]]]
    },
    {
      "id": "to_a_vivid_tomorrow",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 201.06,
      "formula": "8.38% × 12 + 10.05% × 10",
      "requiresResource": "resource_gate_2",
      "multiplierByLevel": [101.24,109.42,117.82,129.38,137.56,147.16,160.36,173.68,186.98,201.06],
      "segmentsByLevel": [[[4.22,12],[5.06,10]],[[4.56,12],[5.47,10]],[[4.91,12],[5.89,10]],[[5.39,12],[6.47,10]],[[5.73,12],[6.88,10]],[[6.13,12],[7.36,10]],[[6.68,12],[8.02,10]],[[7.24,12],[8.68,10]],[[7.79,12],[9.35,10]],[[8.38,12],[10.05,10]]]
    },
    {
      "id": "time_to_show_some_colors",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 224.8,
      "formula": "22.48% × 10",
      "triggerEvents": [
        "introEntry",
        "applyPhotochromicFlux"
      ],
      "multiplierByLevel": [113.1,122.4,131.6,144.6,153.9,164.5,179.4,194.2,209,224.8],
      "segmentsByLevel": [[[11.31,10]],[[12.24,10]],[[13.16,10]],[[14.46,10]],[[15.39,10]],[[16.45,10]],[[17.94,10]],[[19.42,10]],[[20.9,10]],[[22.48,10]]]
    },
    {
      "id": "iridescent_splash",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 304.18,
      "formula": "304.18%",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "trueColor",
        "value": 3
      },
      "impliedStates": [
        "phase_1_option_2"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ],
      "multiplierByLevel": [153,165.55,178.1,195.66,208.21,222.64,242.71,262.78,282.86,304.18]
    },
    {
      "id": "visual_impact",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1216.72,
      "formula": "1216.72%",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "trueColor",
        "value": 3
      },
      "impliedStates": [
        "phase_1_option_2"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ],
      "multiplierByLevel": [612,662.19,712.37,782.63,832.81,890.53,970.82,1051.11,1131.41,1216.72]
    },
    {
      "id": "polychrome_leap_1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "33.80% × 3",
      "requiresResource": "resource_gate_4",
      "requiresResourceAtLeast": {
        "id": "luminousFlux",
        "fractionOfCap": 0.3333333333333333
      },
      "impliedStates": [
        "phase_1_option_2"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ],
      "multiplierByLevel": [51,55.2,59.37,65.22,69.42,74.22,80.91,87.6,94.29,101.4],
      "segmentsByLevel": [[[17,3]],[[18.4,3]],[[19.79,3]],[[21.74,3]],[[23.14,3]],[[24.74,3]],[[26.97,3]],[[29.2,3]],[[31.43,3]],[[33.8,3]]]
    },
    {
      "id": "polychrome_leap_2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "16.90% × 6",
      "requiresResource": "resource_gate_4",
      "requiresResourceAtLeast": {
        "id": "luminousFlux",
        "fractionOfCap": 0.3333333333333333
      },
      "impliedStates": [
        "phase_1_option_2"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ],
      "multiplierByLevel": [51,55.2,59.4,65.22,69.42,74.22,80.94,87.6,94.32,101.4],
      "segmentsByLevel": [[[8.5,6]],[[9.2,6]],[[9.9,6]],[[10.87,6]],[[11.57,6]],[[12.37,6]],[[13.49,6]],[[14.6,6]],[[15.72,6]],[[16.9,6]]]
    },
    {
      "id": "polychrome_leap_3",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 104.8,
      "formula": "13.10% × 8",
      "requiresResource": "resource_gate_4",
      "requiresResourceAtLeast": {
        "id": "luminousFlux",
        "fractionOfCap": 0.3333333333333333
      },
      "impliedStates": [
        "phase_1_option_2"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ],
      "multiplierByLevel": [52.72,57.04,61.36,67.44,71.76,76.72,83.6,90.56,97.44,104.8],
      "segmentsByLevel": [[[6.59,8]],[[7.13,8]],[[7.67,8]],[[8.43,8]],[[8.97,8]],[[9.59,8]],[[10.45,8]],[[11.32,8]],[[12.18,8]],[[13.1,8]]]
    },
    {
      "id": "tune_rupture_response_spectral",
      "legacyIds": [
        "tune_rupture_response_spectral_analysis"
      ],
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 1880.75,
      "formula": "1880.75%",
      "requiresState": "target_1_option_2",
      "requiresAllStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [946,1023.58,1101.15,1209.75,1287.32,1376.53,1500.64,1624.76,1748.88,1880.75]
    },
    {
      "id": "outro_hit_the_road",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 100,
      "formula": "100%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "prismatic_overblast",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 25,
  "echoLead": "25:hyvatia",
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
      "id": "phase_1",
      "kind": "phase",
      "required": true,
      "defaultValue": "phase_1_option_1",
      "options": [
        {
          "value": "phase_1_option_1"
        },
        {
          "value": "phase_1_option_2"
        }
      ]
    },
    {
      "id": "target_1",
      "kind": "target",
      "requiresState": "mode_1_option_1",
      "options": [
        {
          "value": "target_1_option_1"
        },
        {
          "value": "target_1_option_2"
        }
      ]
    },
    {
      "id": "target_2",
      "kind": "target",
      "requiresState": "mode_1_option_2",
      "options": [
        {
          "value": "target_2_option_1"
        },
        {
          "value": "target_2_option_2",
          "formulaKind": "coherenceInterference",
          "maxStacks": 4,
          "perStackRate": 0.12
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_intro_spectro",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 25,
      "scope": "self",
      "defaultActive": false,
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 9
    },
    {
      "id": "b_liberation_final",
      "zone": "finalDmg",
      "value": 24,
      "scope": "team",
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "duration": 30
    },
    {
      "id": "b_visual_break",
      "zone": "breakAmp",
      "value": 40,
      "scope": "team",
      "defaultActive": false,
      "triggerSkills": [
        "visual_impact"
      ],
      "duration": 30
    },
    {
      "id": "b_tune_strain_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_2_option_2",
      "requiresAllStates": [
        "mode_1_option_2"
      ],
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "stack_group_1",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.48
      },
      "stackState": "target_2_option_2"
    },
    {
      "id": "b_outro_all",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_burst",
      "zone": "amplify",
      "damageType": "resonanceLiberation",
      "value": 25,
      "scope": "team",
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
          "id": "k1_leap",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "polychrome_leap_1",
            "polychrome_leap_2",
            "polychrome_leap_3"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_self_amp",
          "zone": "amplify",
          "value": 25,
          "scope": "self"
        },
        {
          "id": "k2_outro_amp",
          "zone": "amplify",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 14
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_visual_mult",
          "zone": "skillMultBonus",
          "value": 90,
          "scope": "self",
          "skills": [
            "visual_impact",
            "iridescent_splash"
          ]
        },
        {
          "id": "k3_mix_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 1375,
          "scope": "self",
          "skills": [
            "additive_color"
          ],
          "maxStacks": 25,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_2"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 70,
          "scope": "self",
          "skills": [
            "prismatic_overblast"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_true_color",
          "zone": "vulnerability",
          "value": 90,
          "scope": "self",
          "skills": [
            "iridescent_splash",
            "visual_impact"
          ],
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_3"
        }
      ]
    }
  ],
  "modes": null
});
