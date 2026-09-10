WUWA.register({
  "id": "luukherssen",
  "tuneStrainCapBonus": 1,
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
      "formula": "40.56% + 40.56%",
      "multiplierByLevel": [40.8,44.16,47.5,52.18,55.54,59.38,64.74,70.08,75.44,81.12],
      "segmentsByLevel": [[[20.4,1],[20.4,1]],[[22.08,1],[22.08,1]],[[23.75,1],[23.75,1]],[[26.09,1],[26.09,1]],[[27.77,1],[27.77,1]],[[29.69,1],[29.69,1]],[[32.37,1],[32.37,1]],[[35.04,1],[35.04,1]],[[37.72,1],[37.72,1]],[[40.56,1],[40.56,1]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 150.4,
      "formula": "60.16% + 90.24%",
      "multiplierByLevel": [75.65,81.87,88.07,96.75,102.95,110.09,120.02,129.94,139.87,150.4],
      "segmentsByLevel": [[[30.26,1],[45.39,1]],[[32.75,1],[49.12,1]],[[35.23,1],[52.84,1]],[[38.7,1],[58.05,1]],[[41.18,1],[61.77,1]],[[44.04,1],[66.05,1]],[[48.01,1],[72.01,1]],[[51.98,1],[77.96,1]],[[55.95,1],[83.92,1]],[[60.16,1],[90.24,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 150.6,
      "formula": "5.02% × 30",
      "multiplierByLevel": [75.9,81.9,88.2,96.9,103.2,110.1,120.3,130.2,140.1,150.6],
      "segmentsByLevel": [[[2.53,30]],[[2.73,30]],[[2.94,30]],[[3.23,30]],[[3.44,30]],[[3.67,30]],[[4.01,30]],[[4.34,30]],[[4.67,30]],[[5.02,30]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 96.33,
      "formula": "96.33%",
      "multiplierByLevel": [48.45,52.43,56.4,61.96,65.94,70.5,76.86,83.22,89.57,96.33]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 91.26,
      "formula": "91.26%",
      "multiplierByLevel": [45.9,49.67,53.43,58.7,62.47,66.79,72.82,78.84,84.86,91.26]
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 57.46,
      "formula": "57.46%",
      "multiplierByLevel": [28.9,31.27,33.64,36.96,39.33,42.06,45.85,49.64,53.43,57.46]
    },
    {
      "id": "air2_dissection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 94.09,
      "formula": "28.23% + 28.23% + 37.63%",
      "multiplierByLevel": [47.33,51.2,55.1,60.53,64.4,68.87,75.07,81.27,87.49,94.09],
      "segmentsByLevel": [[[14.2,1],[14.2,1],[18.93,1]],[[15.36,1],[15.36,1],[20.48,1]],[[16.53,1],[16.53,1],[22.04,1]],[[18.16,1],[18.16,1],[24.21,1]],[[19.32,1],[19.32,1],[25.76,1]],[[20.66,1],[20.66,1],[27.55,1]],[[22.52,1],[22.52,1],[30.03,1]],[[24.38,1],[24.38,1],[32.51,1]],[[26.25,1],[26.25,1],[34.99,1]],[[28.23,1],[28.23,1],[37.63,1]]]
    },
    {
      "id": "air3_dissection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 143.1,
      "formula": "42.93% + 42.93% + 57.24%",
      "multiplierByLevel": [71.97,77.89,83.79,92.04,97.94,104.73,114.17,123.63,133.06,143.1],
      "segmentsByLevel": [[[21.59,1],[21.59,1],[28.79,1]],[[23.37,1],[23.37,1],[31.15,1]],[[25.14,1],[25.14,1],[33.51,1]],[[27.61,1],[27.61,1],[36.82,1]],[[29.38,1],[29.38,1],[39.18,1]],[[31.42,1],[31.42,1],[41.89,1]],[[34.25,1],[34.25,1],[45.67,1]],[[37.09,1],[37.09,1],[49.45,1]],[[39.92,1],[39.92,1],[53.22,1]],[[42.93,1],[42.93,1],[57.24,1]]]
    },
    {
      "id": "air2_resection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.84,
      "formula": "50.42% + 50.42%",
      "multiplierByLevel": [50.72,54.88,59.04,64.86,69.02,73.8,80.46,87.12,93.76,100.84],
      "segmentsByLevel": [[[25.36,1],[25.36,1]],[[27.44,1],[27.44,1]],[[29.52,1],[29.52,1]],[[32.43,1],[32.43,1]],[[34.51,1],[34.51,1]],[[36.9,1],[36.9,1]],[[40.23,1],[40.23,1]],[[43.56,1],[43.56,1]],[[46.88,1],[46.88,1]],[[50.42,1],[50.42,1]]]
    },
    {
      "id": "air3_resection",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 149.84,
      "formula": "74.92% + 74.92%",
      "multiplierByLevel": [75.38,81.56,87.74,96.38,102.56,109.68,119.56,129.46,139.34,149.84],
      "segmentsByLevel": [[[37.69,1],[37.69,1]],[[40.78,1],[40.78,1]],[[43.87,1],[43.87,1]],[[48.19,1],[48.19,1]],[[51.28,1],[51.28,1]],[[54.84,1],[54.84,1]],[[59.78,1],[59.78,1]],[[64.73,1],[64.73,1]],[[69.67,1],[69.67,1]],[[74.92,1],[74.92,1]]]
    },
    {
      "id": "air4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "dodge_ground",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.8,
      "formula": "125.90% + 125.90%",
      "multiplierByLevel": [126.66,137.04,147.44,161.98,172.36,184.3,200.92,217.54,234.14,251.8],
      "segmentsByLevel": [[[63.33,1],[63.33,1]],[[68.52,1],[68.52,1]],[[73.72,1],[73.72,1]],[[80.99,1],[80.99,1]],[[86.18,1],[86.18,1]],[[92.15,1],[92.15,1]],[[100.46,1],[100.46,1]],[[108.77,1],[108.77,1]],[[117.07,1],[117.07,1]],[[125.9,1],[125.9,1]]]
    },
    {
      "id": "dodge_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 256.87,
      "formula": "256.87%",
      "multiplierByLevel": [129.2,139.8,150.39,165.23,175.82,188,204.95,221.91,238.86,256.87]
    },
    {
      "id": "skill_reflux",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 201.2,
      "formula": "201.20%",
      "multiplierByLevel": [101.2,109.5,117.8,129.42,137.72,147.26,160.54,173.82,187.09,201.2]
    },
    {
      "id": "aureole_ring",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 221.33,
      "formula": "26.56% × 5 + 88.53%",
      "multiplierByLevel": [111.33,120.48,129.59,142.4,151.5,162,176.64,191.23,205.82,221.33],
      "segmentsByLevel": [[[13.36,5],[44.53,1]],[[14.46,5],[48.18,1]],[[15.55,5],[51.84,1]],[[17.09,5],[56.95,1]],[[18.18,5],[60.6,1]],[[19.44,5],[64.8,1]],[[21.2,5],[70.64,1]],[[22.95,5],[76.48,1]],[[24.7,5],[82.32,1]],[[26.56,5],[88.53,1]]]
    },
    {
      "id": "aureole_breach",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 287.73,
      "formula": "95.91% × 3",
      "multiplierByLevel": [144.72,156.6,168.45,185.07,196.95,210.6,229.59,248.55,267.54,287.73],
      "segmentsByLevel": [[[48.24,3]],[[52.2,3]],[[56.15,3]],[[61.69,3]],[[65.65,3]],[[70.2,3]],[[76.53,3]],[[82.85,3]],[[89.18,3]],[[95.91,3]]]
    },
    {
      "id": "aureole_glare",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 354.11,
      "formula": "354.11%",
      "multiplierByLevel": [178.12,192.72,207.33,227.77,242.38,259.18,282.54,305.91,329.28,354.11]
    },
    {
      "id": "golden_impale",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 155.47,
      "formula": "155.47%",
      "multiplierByLevel": [78.2,84.62,91.03,100.01,106.42,113.79,124.05,134.31,144.57,155.47]
    },
    {
      "id": "ichor_deposit",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 153.45,
      "formula": "153.45%",
      "requiresResource": "resource_gate_1",
      "multiplierByLevel": [77.19,83.52,89.84,98.71,105.03,112.31,122.44,132.56,142.69,153.45]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 994.09,
      "formula": "745.54% + 49.71% × 5",
      "multiplierByLevel": [500,541,582,639.4,680.4,727.57,793.17,858.77,924.37,994.09],
      "segmentsByLevel": [[[375,1],[25,5]],[[405.75,1],[27.05,5]],[[436.5,1],[29.1,5]],[[479.55,1],[31.97,5]],[[510.3,1],[34.02,5]],[[545.67,1],[36.38,5]],[[594.87,1],[39.66,5]],[[644.07,1],[42.94,5]],[[693.27,1],[46.22,5]],[[745.54,1],[49.71,5]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 218.01,
      "formula": "72.67% × 3",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [109.65,118.65,127.65,140.25,149.22,159.57,173.94,188.34,202.71,218.01],
      "segmentsByLevel": [[[36.55,3]],[[39.55,3]],[[42.55,3]],[[46.75,3]],[[49.74,3]],[[53.19,3]],[[57.98,3]],[[62.78,3]],[[67.57,3]],[[72.67,3]]]
    },
    {
      "id": "forte_gavel",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 306.9,
      "formula": "306.90%",
      "requiresResource": "resource_gate_2",
      "multiplierByLevel": [154.37,167.03,179.68,197.41,210.06,224.62,244.87,265.12,285.38,306.9]
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
      "defaultResourceActive": false,
      "fixedLevel": true
    },
    {
      "id": "outro_last_light",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 500,
      "formula": "500%",
      "fixedLevel": true
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
          "formulaKind": "coherenceInterference",
          "maxStacks": 4,
          "perStackRate": 0.12,
          "bonusStacksBySeq": [
            {
              "seq": 6,
              "stacks": 2
            }
          ]
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
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "stack_group_2",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.48
      },
      "stackState": "target_1_option_1"
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
        },
        {
          "id": "k5_outro",
          "zone": "typeBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "outro_last_light"
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
