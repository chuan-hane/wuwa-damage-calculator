WUWA.register({
  "id": "lupa",
  "aliases": [],
  "debut": 2.4,
  "element": "fusion",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "wildfire_mark",
  "portrait": "",
  "base": {
    "hp": 11912,
    "attack": 387,
    "defense": 1185,
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
      "id": "wolfFlame",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "wolfSoul",
      "max": 2,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.08,
      "formula": "22.52% + 22.52% + 45.04%",
      "multiplierByLevel": [45.32,49.04,52.75,57.95,61.67,65.95,71.88,77.83,83.76,90.08],
      "segmentsByLevel": [[[11.33,1],[11.33,1],[22.66,1]],[[12.26,1],[12.26,1],[24.52,1]],[[13.19,1],[13.19,1],[26.37,1]],[[14.49,1],[14.49,1],[28.97,1]],[[15.42,1],[15.42,1],[30.83,1]],[[16.49,1],[16.49,1],[32.97,1]],[[17.97,1],[17.97,1],[35.94,1]],[[19.46,1],[19.46,1],[38.91,1]],[[20.94,1],[20.94,1],[41.88,1]],[[22.52,1],[22.52,1],[45.04,1]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.08,
      "formula": "90.08%",
      "multiplierByLevel": [45.31,49.03,52.74,57.94,61.66,65.93,71.87,77.82,83.76,90.08]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.68,
      "formula": "78.84% + 13.14% × 6",
      "multiplierByLevel": [79.32,85.87,92.36,101.47,107.96,115.42,125.85,136.27,146.63,157.68],
      "segmentsByLevel": [[[39.66,1],[6.61,6]],[[42.91,1],[7.16,6]],[[46.16,1],[7.7,6]],[[50.71,1],[8.46,6]],[[53.96,1],[9,6]],[[57.7,1],[9.62,6]],[[62.91,1],[10.49,6]],[[68.11,1],[11.36,6]],[[73.31,1],[12.22,6]],[[78.84,1],[13.14,6]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 246.24,
      "formula": "73.87% + 73.87% + 49.25% × 2",
      "multiplierByLevel": [123.86,134.04,144.18,158.4,168.54,180.24,196.48,212.74,228.98,246.24],
      "segmentsByLevel": [[[37.16,1],[37.16,1],[24.77,2]],[[40.21,1],[40.21,1],[26.81,2]],[[43.25,1],[43.25,1],[28.84,2]],[[47.52,1],[47.52,1],[31.68,2]],[[50.56,1],[50.56,1],[33.71,2]],[[54.07,1],[54.07,1],[36.05,2]],[[58.94,1],[58.94,1],[39.3,2]],[[63.82,1],[63.82,1],[42.55,2]],[[68.69,1],[68.69,1],[45.8,2]],[[73.87,1],[73.87,1],[49.25,2]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 112.72,
      "formula": "56.36% + 56.36%",
      "multiplierByLevel": [56.7,61.36,66,72.52,77.16,82.5,89.94,97.38,104.82,112.72],
      "segmentsByLevel": [[[28.35,1],[28.35,1]],[[30.68,1],[30.68,1]],[[33,1],[33,1]],[[36.26,1],[36.26,1]],[[38.58,1],[38.58,1]],[[41.25,1],[41.25,1]],[[44.97,1],[44.97,1]],[[48.69,1],[48.69,1]],[[52.41,1],[52.41,1]],[[56.36,1],[56.36,1]]]
    },
    {
      "id": "heavy_bite",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 112.22,
      "formula": "56.11% + 56.11%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "wolfFlame",
        "value": 50
      },
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [56.44,61.08,65.7,72.18,76.82,82.14,89.54,96.94,104.36,112.22],
      "segmentsByLevel": [[[28.22,1],[28.22,1]],[[30.54,1],[30.54,1]],[[32.85,1],[32.85,1]],[[36.09,1],[36.09,1]],[[38.41,1],[38.41,1]],[[41.07,1],[41.07,1]],[[44.77,1],[44.77,1]],[[48.47,1],[48.47,1]],[[52.18,1],[52.18,1]],[[56.11,1],[56.11,1]]]
    },
    {
      "id": "heavy_claw",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 240.5,
      "formula": "72.15% + 18.04% × 4 + 96.19%",
      "requiresResource": "resource_gate_2",
      "requiresAllResourcesAtLeast": [
        {
          "id": "wolfFlame",
          "value": 50
        },
        {
          "id": "wolfSoul",
          "value": 1
        }
      ],
      "fallbackSkillId": "heavy_bite",
      "multiplierByLevel": [121,130.9,140.8,154.73,164.62,176.06,191.92,207.79,223.66,240.5],
      "segmentsByLevel": [[[36.29,1],[9.08,4],[48.39,1]],[[39.27,1],[9.82,4],[52.35,1]],[[42.24,1],[10.56,4],[56.32,1]],[[46.41,1],[11.61,4],[61.88,1]],[[49.38,1],[12.35,4],[65.84,1]],[[52.81,1],[13.21,4],[70.41,1]],[[57.57,1],[14.4,4],[76.75,1]],[[62.33,1],[15.59,4],[83.1,1]],[[67.09,1],[16.78,4],[89.45,1]],[[72.15,1],[18.04,4],[96.19,1]]]
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.73,
      "formula": "76.73%",
      "multiplierByLevel": [38.59,41.76,44.92,49.35,52.52,56.16,61.22,66.28,71.35,76.73]
    },
    {
      "id": "air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 154.47,
      "formula": "77.23% + 19.31% × 4",
      "multiplierByLevel": [77.73,84.08,90.46,99.36,105.75,113.09,123.26,133.44,143.66,154.47],
      "segmentsByLevel": [[[38.85,1],[9.72,4]],[[42.04,1],[10.51,4]],[[45.22,1],[11.31,4]],[[49.68,1],[12.42,4]],[[52.87,1],[13.22,4]],[[56.53,1],[14.14,4]],[[61.62,1],[15.41,4]],[[66.72,1],[16.68,4]],[[71.82,1],[17.96,4]],[[77.23,1],[19.31,4]]]
    },
    {
      "id": "air3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 56.96,
      "formula": "28.48% + 28.48%",
      "multiplierByLevel": [28.66,31,33.36,36.64,39,41.7,45.44,49.2,52.96,56.96],
      "segmentsByLevel": [[[14.33,1],[14.33,1]],[[15.5,1],[15.5,1]],[[16.68,1],[16.68,1]],[[18.32,1],[18.32,1]],[[19.5,1],[19.5,1]],[[20.85,1],[20.85,1]],[[22.72,1],[22.72,1]],[[24.6,1],[24.6,1]],[[26.48,1],[26.48,1]],[[28.48,1],[28.48,1]]]
    },
    {
      "id": "air_assault",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 56.96,
      "formula": "28.48% + 28.48%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "wolfFlame",
        "value": 50
      },
      "fallbackSkillId": "air3",
      "multiplierByLevel": [28.66,31,33.36,36.64,39,41.7,45.44,49.2,52.96,56.96],
      "segmentsByLevel": [[[14.33,1],[14.33,1]],[[15.5,1],[15.5,1]],[[16.68,1],[16.68,1]],[[18.32,1],[18.32,1]],[[19.5,1],[19.5,1]],[[20.85,1],[20.85,1]],[[22.72,1],[22.72,1]],[[24.6,1],[24.6,1]],[[26.48,1],[26.48,1]],[[28.48,1],[28.48,1]]]
    },
    {
      "id": "air_plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.79,
      "formula": "26.20% + 52.39% + 26.20%",
      "multiplierByLevel": [52.71,57.04,61.36,67.4,71.72,76.71,83.6,90.52,97.44,104.79],
      "segmentsByLevel": [[[13.18,1],[26.35,1],[13.18,1]],[[14.26,1],[28.52,1],[14.26,1]],[[15.34,1],[30.68,1],[15.34,1]],[[16.85,1],[33.7,1],[16.85,1]],[[17.93,1],[35.86,1],[17.93,1]],[[19.18,1],[38.35,1],[19.18,1]],[[20.9,1],[41.8,1],[20.9,1]],[[22.63,1],[45.26,1],[22.63,1]],[[24.36,1],[48.72,1],[24.36,1]],[[26.2,1],[52.39,1],[26.2,1]]]
    },
    {
      "id": "starfall",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 168.66,
      "formula": "12.65% × 4 + 118.06%",
      "multiplierByLevel": [84.87,91.82,98.76,108.5,115.45,123.45,134.6,145.71,156.86,168.66],
      "segmentsByLevel": [[[6.37,4],[59.39,1]],[[6.89,4],[64.26,1]],[[7.41,4],[69.12,1]],[[8.14,4],[75.94,1]],[[8.66,4],[80.81,1]],[[9.26,4],[86.41,1]],[[10.1,4],[94.2,1]],[[10.93,4],[101.99,1]],[[11.77,4],[109.78,1]],[[12.65,4],[118.06,1]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 273.44,
      "formula": "34.18% × 4 + 136.72%",
      "multiplierByLevel": [137.57,148.85,160.13,175.9,187.18,200.14,218.21,236.23,254.29,273.44],
      "segmentsByLevel": [[[17.2,4],[68.77,1]],[[18.61,4],[74.41,1]],[[20.02,4],[80.05,1]],[[21.99,4],[87.94,1]],[[23.4,4],[93.58,1]],[[25.02,4],[100.06,1]],[[27.28,4],[109.09,1]],[[29.53,4],[118.11,1]],[[31.79,4],[127.13,1]],[[34.18,4],[136.72,1]]]
    },
    {
      "id": "skill_hunt",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 140.77,
      "formula": "140.77%",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [70.81,76.62,82.42,90.55,96.36,103.03,112.32,121.61,130.9,140.77]
    },
    {
      "id": "skill_fang",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 313.61,
      "formula": "313.61%",
      "requiresResource": "resource_gate_3",
      "fallbackSkillId": "skill_hunt",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [157.74,170.68,183.61,201.72,214.66,229.53,250.23,270.92,291.62,313.61]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 820.44,
      "formula": "820.44%",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [412.68,446.52,480.36,527.73,561.57,600.48,654.63,708.77,762.91,820.44]
    },
    {
      "id": "break_enemy",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 304.46,
      "formula": "304.46%",
      "requiresResource": "resource_gate_4",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [153.14,165.7,178.26,195.84,208.4,222.84,242.93,263.02,283.11,304.46]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.4,
      "formula": "29.76% + 42.16% × 4",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [99.81,108,116.19,127.63,135.81,145.23,158.31,171.43,184.52,198.4],
      "segmentsByLevel": [[[14.97,1],[21.21,4]],[[16.2,1],[22.95,4]],[[17.43,1],[24.69,4]],[[19.15,1],[27.12,4]],[[20.37,1],[28.86,4]],[[21.79,1],[30.86,4]],[[23.75,1],[33.64,4]],[[25.71,1],[36.43,4]],[[27.68,1],[39.21,4]],[[29.76,1],[42.16,4]]]
    },
    {
      "id": "intro_chase",
      "category": "introSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 991.97,
      "formula": "793.57% + 49.60% × 4",
      "impliedStates": [
        "state_2_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [498.96,539.9,580.79,638.09,678.98,726.06,791.51,856.96,922.45,991.97],
      "segmentsByLevel": [[[399.16,1],[24.95,4]],[[431.9,1],[27,4]],[[464.63,1],[29.04,4]],[[510.45,1],[31.91,4]],[[543.18,1],[33.95,4]],[[580.82,1],[36.31,4]],[[633.19,1],[39.58,4]],[[685.56,1],[42.85,4]],[[737.93,1],[46.13,4]],[[793.57,1],[49.6,4]]]
    },
    {
      "id": "wolfdance",
      "category": "forteCircuit",
      "maxSeq": 5,
      "damageType": "resonanceLiberation",
      "multiplier": 560.21,
      "formula": "56.02% + 42.02% × 4 + 336.11%",
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "wolfSoul",
        "value": 2
      },
      "fallbackSkillId": "skill_hunt",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [281.8,304.9,327.99,360.36,383.45,410,447,483.96,520.91,560.21],
      "segmentsByLevel": [[[28.18,1],[21.14,4],[169.06,1]],[[30.49,1],[22.87,4],[182.93,1]],[[32.8,1],[24.6,4],[196.79,1]],[[36.04,1],[27.03,4],[216.2,1]],[[38.35,1],[28.76,4],[230.06,1]],[[41,1],[30.75,4],[246,1]],[[44.7,1],[33.53,4],[268.18,1]],[[48.4,1],[36.3,4],[290.36,1]],[[52.09,1],[39.07,4],[312.54,1]],[[56.02,1],[42.02,4],[336.11,1]]]
    },
    {
      "id": "wolfdance_primal",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 756.26,
      "formula": "75.63% + 56.72% × 4 + 453.75%",
      "maxSeq": 5,
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "wolfSoul",
        "value": 2
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "fallbackSkillId": "wolfdance",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "requiresState": "state_1_option_1",
      "multiplierByLevel": [380.39,411.59,442.78,486.47,517.67,553.53,603.42,653.33,703.26,756.26],
      "segmentsByLevel": [[[38.04,1],[28.53,4],[228.23,1]],[[41.16,1],[30.87,4],[246.95,1]],[[44.28,1],[33.21,4],[265.66,1]],[[48.65,1],[36.49,4],[291.86,1]],[[51.77,1],[38.83,4],[310.58,1]],[[55.35,1],[41.52,4],[332.1,1]],[[60.34,1],[45.26,4],[362.04,1]],[[65.34,1],[49,4],[391.99,1]],[[70.33,1],[52.75,4],[421.93,1]],[[75.63,1],[56.72,4],[453.75,1]]]
    },
    {
      "id": "wolfdance_primal_c6",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 756.26,
      "formula": "75.63% + 56.72% × 4 + 453.75%",
      "seq": 6,
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "wolfSoul",
        "value": 2
      },
      "fallbackSkillId": "skill_hunt",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [380.39,411.59,442.78,486.47,517.67,553.53,603.42,653.33,703.26,756.26],
      "segmentsByLevel": [[[38.04,1],[28.53,4],[228.23,1]],[[41.16,1],[30.87,4],[246.95,1]],[[44.28,1],[33.21,4],[265.66,1]],[[48.65,1],[36.49,4],[291.86,1]],[[51.77,1],[38.83,4],[310.58,1]],[[55.35,1],[41.52,4],[332.1,1]],[[60.34,1],[45.26,4],[362.04,1]],[[65.34,1],[49,4],[391.99,1]],[[70.33,1],[52.75,4],[421.93,1]],[[75.63,1],[56.72,4],[453.75,1]]]
    },
    {
      "id": "offfield_flame",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 211.75,
      "formula": "42.35% + 169.40%",
      "requiresResource": "resource_gate_6",
      "multiplierByLevel": [106.52,115.25,123.98,136.22,144.94,154.99,168.97,182.93,196.9,211.75],
      "segmentsByLevel": [[[21.31,1],[85.21,1]],[[23.05,1],[92.2,1]],[[24.8,1],[99.18,1]],[[27.25,1],[108.97,1]],[[28.99,1],[115.95,1]],[[31,1],[123.99,1]],[[33.8,1],[135.17,1]],[[36.59,1],[146.34,1]],[[39.38,1],[157.52,1]],[[42.35,1],[169.4,1]]]
    }
  ],
  "defaultSkillId": "wolfdance_primal",
  "defaultSkillIdBySeq": [
    {
      "seq": 6,
      "id": "wolfdance_primal_c6"
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 2,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    },
    {
      "id": "state_2",
      "options": [
        {
          "value": "state_2_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_flaming_banner",
      "zone": "attackPercent",
      "value": 12,
      "scope": "self",
      "skills": [
        "skill_fang",
        "heavy_bite",
        "heavy_claw",
        "air_assault",
        "burst",
        "wolfdance",
        "wolfdance_primal",
        "wolfdance_primal_c6"
      ],
      "duration": 8
    },
    {
      "id": "b_marked_fang",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "skill_fang"
      ],
      "defaultActive": false
    },
    {
      "id": "b_hunt_atk",
      "zone": "attackPercent",
      "value": 18,
      "scope": "team",
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "triggerSkills": [
        "burst"
      ],
      "triggerStacks": 1,
      "duration": 35
    },
    {
      "id": "b_hunt_fusion_boss",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "duration": 35
    },
    {
      "id": "b_hunt_fusion_team3",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "maxSeq": 2,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "duration": 35
    },
    {
      "id": "b_glory_res",
      "zone": "resShred",
      "element": "fusion",
      "value": 15,
      "scope": "team",
      "maxStacks": 5,
      "defaultStacks": 0,
      "defaultActive": false,
      "maxSeq": 2,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "triggerSkills": [
        "burst"
      ],
      "triggerStacksByTeamElement": {
        "element": "fusion",
        "base": 1,
        "perOther": 1,
        "bonuses": [
          {
            "min": 3,
            "stacks": 2
          }
        ]
      },
      "duration": 35
    },
    {
      "id": "b_outro_fusion",
      "zone": "amplify",
      "element": "fusion",
      "value": 20,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_basic",
      "zone": "amplify",
      "damageType": "basic",
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
          "id": "k1_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "burst"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_fusion",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 40,
          "scope": "team",
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "burst",
            "heavy_bite",
            "heavy_claw",
            "air_assault"
          ],
          "triggerStacks": 1,
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_chase_intro",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "intro_chase"
          ]
        },
        {
          "id": "k3_hunt_fusion_extra",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "clearedBySkills": [
            "intro_chase"
          ],
          "clearExemptSeq": 6,
          "duration": 35
        },
        {
          "id": "k3_glory_res",
          "zone": "resShred",
          "element": "fusion",
          "value": 15,
          "scope": "team",
          "defaultActive": false,
          "clearedBySkills": [
            "intro_chase"
          ],
          "clearExemptSeq": 6,
          "triggerSkills": [
            "burst"
          ],
          "duration": 35
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_wolfdance_primal",
          "zone": "skillMultBonus",
          "value": 125,
          "scope": "self",
          "skills": [
            "wolfdance_primal",
            "wolfdance_primal_c6"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_burst",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "intro_chase"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_def_ignore",
          "zone": "defIgnore",
          "value": 30,
          "scope": "self",
          "skills": [
            "wolfdance_primal",
            "wolfdance_primal_c6",
            "burst",
            "intro_chase"
          ]
        }
      ]
    }
  ],
  "modes": null
});
