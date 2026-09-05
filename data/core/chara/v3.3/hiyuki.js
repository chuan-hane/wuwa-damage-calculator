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
      ],
      "multiplierByLevel": [37.94,41.06,44.18,48.52,51.64,55.22,60.2,65.18,70.14,75.44],
      "segmentsByLevel": [[[18.97,1],[18.97,1]],[[20.53,1],[20.53,1]],[[22.09,1],[22.09,1]],[[24.26,1],[24.26,1]],[[25.82,1],[25.82,1]],[[27.61,1],[27.61,1]],[[30.1,1],[30.1,1]],[[32.59,1],[32.59,1]],[[35.07,1],[35.07,1]],[[37.72,1],[37.72,1]]]
    },
    {
      "id": "present_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.25,
      "formula": "90.25%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [45.4,49.12,52.84,58.06,61.78,66.06,72.02,77.97,83.93,90.25]
    },
    {
      "id": "present_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 122.97,
      "formula": "4.92% × 5 + 98.37%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [61.88,66.94,72,79.12,84.18,90,98.14,106.23,114.37,122.97],
      "segmentsByLevel": [[[2.48,5],[49.48,1]],[[2.68,5],[53.54,1]],[[2.88,5],[57.6,1]],[[3.17,5],[63.27,1]],[[3.37,5],[67.33,1]],[[3.6,5],[72,1]],[[3.93,5],[78.49,1]],[[4.25,5],[84.98,1]],[[4.58,5],[91.47,1]],[[4.92,5],[98.37,1]]]
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
      },
      "multiplierByLevel": [159.56,172.64,185.72,204.04,217.12,232.19,253.11,274.04,294.99,317.23],
      "segmentsByLevel": [[[39.89,2],[79.78,1]],[[43.16,2],[86.32,1]],[[46.43,2],[92.86,1]],[[51.01,2],[102.02,1]],[[54.28,2],[108.56,1]],[[58.05,2],[116.09,1]],[[63.28,2],[126.55,1]],[[68.51,2],[137.02,1]],[[73.75,2],[147.49,1]],[[79.31,2],[158.61,1]]]
    },
    {
      "id": "present_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 128.18,
      "formula": "128.18%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [64.47,69.76,75.05,82.45,87.74,93.82,102.27,110.73,119.19,128.18]
    },
    {
      "id": "present_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 173.75,
      "formula": "173.75%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [87.4,94.57,101.73,111.77,118.93,127.17,138.64,150.11,161.57,173.75]
    },
    {
      "id": "fore_na1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 49.27,
      "formula": "49.27%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [24.78,26.82,28.85,31.69,33.73,36.06,39.31,42.56,45.82,49.27]
    },
    {
      "id": "fore_na2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 80.04,
      "formula": "40.02% + 40.02%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [40.26,43.56,46.86,51.48,54.78,58.58,63.86,69.14,74.42,80.04],
      "segmentsByLevel": [[[20.13,1],[20.13,1]],[[21.78,1],[21.78,1]],[[23.43,1],[23.43,1]],[[25.74,1],[25.74,1]],[[27.39,1],[27.39,1]],[[29.29,1],[29.29,1]],[[31.93,1],[31.93,1]],[[34.57,1],[34.57,1]],[[37.21,1],[37.21,1]],[[40.02,1],[40.02,1]]]
    },
    {
      "id": "fore_na3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 167.72,
      "formula": "25.16% × 4 + 67.08%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [84.38,91.31,98.2,107.91,114.8,122.78,133.85,144.91,155.98,167.72],
      "segmentsByLevel": [[[12.66,4],[33.74,1]],[[13.7,4],[36.51,1]],[[14.73,4],[39.28,1]],[[16.19,4],[43.15,1]],[[17.22,4],[45.92,1]],[[18.42,4],[49.1,1]],[[20.08,4],[53.53,1]],[[21.74,4],[57.95,1]],[[23.4,4],[62.38,1]],[[25.16,4],[67.08,1]]]
    },
    {
      "id": "fore_na4",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 149.65,
      "formula": "29.93% + 29.93% + 29.93% + 29.93% + 29.93%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [75.25,81.45,87.6,96.25,102.45,109.5,119.4,129.25,139.15,149.65],
      "segmentsByLevel": [[[15.05,1],[15.05,1],[15.05,1],[15.05,1],[15.05,1]],[[16.29,1],[16.29,1],[16.29,1],[16.29,1],[16.29,1]],[[17.52,1],[17.52,1],[17.52,1],[17.52,1],[17.52,1]],[[19.25,1],[19.25,1],[19.25,1],[19.25,1],[19.25,1]],[[20.49,1],[20.49,1],[20.49,1],[20.49,1],[20.49,1]],[[21.9,1],[21.9,1],[21.9,1],[21.9,1],[21.9,1]],[[23.88,1],[23.88,1],[23.88,1],[23.88,1],[23.88,1]],[[25.85,1],[25.85,1],[25.85,1],[25.85,1],[25.85,1]],[[27.83,1],[27.83,1],[27.83,1],[27.83,1],[27.83,1]],[[29.93,1],[29.93,1],[29.93,1],[29.93,1],[29.93,1]]]
    },
    {
      "id": "fore_na5",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 121.64,
      "formula": "12.17% + 109.47%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [61.19,66.2,71.23,78.25,83.26,89.04,97.06,105.08,113.12,121.64],
      "segmentsByLevel": [[[6.12,1],[55.07,1]],[[6.62,1],[59.58,1]],[[7.13,1],[64.1,1]],[[7.83,1],[70.42,1]],[[8.33,1],[74.93,1]],[[8.91,1],[80.13,1]],[[9.71,1],[87.35,1]],[[10.51,1],[94.57,1]],[[11.32,1],[101.8,1]],[[12.17,1],[109.47,1]]]
    },
    {
      "id": "fore_heavy",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 107.16,
      "formula": "107.16%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [53.9,58.32,62.74,68.93,73.35,78.43,85.51,92.58,99.65,107.16]
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
      "fallbackSkillId": "fore_heavy",
      "multiplierByLevel": [310,335.46,360.92,396.51,421.88,451.11,491.81,532.5,573.12,616.33],
      "segmentsByLevel": [[[7.75,8],[248,1]],[[8.39,8],[268.34,1]],[[9.03,8],[288.68,1]],[[9.92,8],[317.15,1]],[[10.55,8],[337.48,1]],[[11.28,8],[360.87,1]],[[12.3,8],[393.41,1]],[[13.32,8],[425.94,1]],[[14.33,8],[458.48,1]],[[15.41,8],[493.05,1]]]
    },
    {
      "id": "fore_air1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 96.09,
      "formula": "28.83% + 28.83% + 38.43%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [48.33,52.3,56.26,61.8,65.77,70.33,76.67,83,89.34,96.09],
      "segmentsByLevel": [[[14.5,1],[14.5,1],[19.33,1]],[[15.69,1],[15.69,1],[20.92,1]],[[16.88,1],[16.88,1],[22.5,1]],[[18.54,1],[18.54,1],[24.72,1]],[[19.73,1],[19.73,1],[26.31,1]],[[21.1,1],[21.1,1],[28.13,1]],[[23,1],[23,1],[30.67,1]],[[24.9,1],[24.9,1],[33.2,1]],[[26.8,1],[26.8,1],[35.74,1]],[[28.83,1],[28.83,1],[38.43,1]]]
    },
    {
      "id": "fore_air2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 104.36,
      "formula": "26.09% + 26.09% + 26.09% + 26.09%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [52.48,56.8,61.12,67.12,71.44,76.4,83.28,90.16,97.04,104.36],
      "segmentsByLevel": [[[13.12,1],[13.12,1],[13.12,1],[13.12,1]],[[14.2,1],[14.2,1],[14.2,1],[14.2,1]],[[15.28,1],[15.28,1],[15.28,1],[15.28,1]],[[16.78,1],[16.78,1],[16.78,1],[16.78,1]],[[17.86,1],[17.86,1],[17.86,1],[17.86,1]],[[19.1,1],[19.1,1],[19.1,1],[19.1,1]],[[20.82,1],[20.82,1],[20.82,1],[20.82,1]],[[22.54,1],[22.54,1],[22.54,1],[22.54,1]],[[24.26,1],[24.26,1],[24.26,1],[24.26,1]],[[26.09,1],[26.09,1],[26.09,1],[26.09,1]]]
    },
    {
      "id": "fore_plunge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 111.6,
      "formula": "111.60%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [56.14,60.74,65.34,71.79,76.39,81.68,89.05,96.41,103.78,111.6]
    },
    {
      "id": "fore_dodge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 163.54,
      "formula": "81.77% + 81.77%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [82.26,89,95.74,105.2,111.94,119.7,130.48,141.28,152.06,163.54],
      "segmentsByLevel": [[[41.13,1],[41.13,1]],[[44.5,1],[44.5,1]],[[47.87,1],[47.87,1]],[[52.6,1],[52.6,1]],[[55.97,1],[55.97,1]],[[59.85,1],[59.85,1]],[[65.24,1],[65.24,1]],[[70.64,1],[70.64,1]],[[76.03,1],[76.03,1]],[[81.77,1],[81.77,1]]]
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
      ],
      "multiplierByLevel": [98.56,106.69,114.77,126.06,134.15,143.43,156.38,169.28,182.23,195.98],
      "segmentsByLevel": [[[12.32,4],[49.28,1]],[[13.34,4],[53.33,1]],[[14.35,4],[57.37,1]],[[15.76,4],[63.02,1]],[[16.77,4],[67.07,1]],[[17.93,4],[71.71,1]],[[19.55,4],[78.18,1]],[[21.16,4],[84.64,1]],[[22.78,4],[91.11,1]],[[24.5,4],[97.98,1]]]
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
      ],
      "multiplierByLevel": [132.8,143.72,154.6,169.84,180.72,193.24,210.68,228.12,245.52,264.04],
      "segmentsByLevel": [[[33.2,4]],[[35.93,4]],[[38.65,4]],[[42.46,4]],[[45.18,4]],[[48.31,4]],[[52.67,4]],[[57.03,4]],[[61.38,4]],[[66.01,4]]]
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
      ],
      "multiplierByLevel": [161,174.25,187.45,205.9,219.1,234.3,255.4,276.55,297.65,320.1],
      "segmentsByLevel": [[[32.2,4],[32.2,1]],[[34.85,4],[34.85,1]],[[37.49,4],[37.49,1]],[[41.18,4],[41.18,1]],[[43.82,4],[43.82,1]],[[46.86,4],[46.86,1]],[[51.08,4],[51.08,1]],[[55.31,4],[55.31,1]],[[59.53,4],[59.53,1]],[[64.02,4],[64.02,1]]]
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
      "requiresResource": "resource_gate_3",
      "multiplierByLevel": [200,216.4,232.8,255.76,272.16,291.02,317.26,343.5,369.74,397.62]
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
      ],
      "multiplierByLevel": [500,541,582,639.4,680.4,727.55,793.15,858.75,924.35,994.05],
      "segmentsByLevel": [[[100,1],[400,1]],[[108.2,1],[432.8,1]],[[116.4,1],[465.6,1]],[[127.88,1],[511.52,1]],[[136.08,1],[544.32,1]],[[145.51,1],[582.04,1]],[[158.63,1],[634.52,1]],[[171.75,1],[687,1]],[[184.87,1],[739.48,1]],[[198.81,1],[795.24,1]]],
      "perStackByLevel": [400,432.8,465.6,511.52,544.32,582.04,634.52,687,739.48,795.24]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 156.15,
      "formula": "156.15%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [78.54,84.99,91.43,100.44,106.88,114.29,124.59,134.9,145.2,156.15]
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
      },
      "multiplierByLevel": [237.96,257.47,276.98,304.28,323.79,346.25,377.46,408.67,439.88,473.06],
      "segmentsByLevel": [[[142.76,1],[23.8,4]],[[154.47,1],[25.75,4]],[[166.18,1],[27.7,4]],[[182.56,1],[30.43,4]],[[194.27,1],[32.38,4]],[[207.73,1],[34.63,4]],[[226.46,1],[37.75,4]],[[245.19,1],[40.87,4]],[[263.92,1],[43.99,4]],[[283.82,1],[47.31,4]]]
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
      "duration": 20,
      "triggerOutro": true,
      "defaultActive": false
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
          "maxSeq": 5,
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
        },
        {
          "id": "k6_snow_rust_frost_extra",
          "zone": "effectExtraRate",
          "effect": "frost",
          "value": 488,
          "scope": "team",
          "requiresActiveChar": "hiyuki",
          "requiresBuffStacks": {
            "id": "b_snow_rust_cd",
            "stacks": 2
          }
        }
      ]
    }
  ],
  "modes": null
});
