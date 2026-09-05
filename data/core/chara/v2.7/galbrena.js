WUWA.register({
  "id": "galbrena",
  "aliases": [],
  "debut": 2.7,
  "element": "fusion",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "lux_and_umbra",
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
      "attackPct": 12,
      "critDamage": 16
    }
  },
  "resources": [
    {
      "id": "afterflame",
      "max": 40,
      "defaultValue": "max"
    },
    {
      "id": "sinflame",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "ba1",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 59.18,
      "formula": "59.18%",
      "multiplierByLevel": [29.77,32.21,34.65,38.07,40.51,43.31,47.22,51.12,55.03,59.18]
    },
    {
      "id": "ba2",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 131.53,
      "formula": "26.31% + 26.31% + 78.91%",
      "multiplierByLevel": [66.15,71.59,77,84.6,90.04,96.28,104.95,113.63,122.3,131.53],
      "segmentsByLevel": [[[13.23,1],[13.23,1],[39.69,1]],[[14.32,1],[14.32,1],[42.95,1]],[[15.4,1],[15.4,1],[46.2,1]],[[16.92,1],[16.92,1],[50.76,1]],[[18.01,1],[18.01,1],[54.02,1]],[[19.26,1],[19.26,1],[57.76,1]],[[20.99,1],[20.99,1],[62.97,1]],[[22.73,1],[22.73,1],[68.17,1]],[[24.46,1],[24.46,1],[73.38,1]],[[26.31,1],[26.31,1],[78.91,1]]]
    },
    {
      "id": "ba3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 142.98,
      "formula": "28.60% + 28.60% + 42.89% + 42.89%",
      "multiplierByLevel": [71.94,77.84,83.74,91.98,97.88,104.66,114.1,123.54,132.96,142.98],
      "segmentsByLevel": [[[14.39,1],[14.39,1],[21.58,1],[21.58,1]],[[15.57,1],[15.57,1],[23.35,1],[23.35,1]],[[16.75,1],[16.75,1],[25.12,1],[25.12,1]],[[18.4,1],[18.4,1],[27.59,1],[27.59,1]],[[19.58,1],[19.58,1],[29.36,1],[29.36,1]],[[20.93,1],[20.93,1],[31.4,1],[31.4,1]],[[22.82,1],[22.82,1],[34.23,1],[34.23,1]],[[24.71,1],[24.71,1],[37.06,1],[37.06,1]],[[26.59,1],[26.59,1],[39.89,1],[39.89,1]],[[28.6,1],[28.6,1],[42.89,1],[42.89,1]]]
    },
    {
      "id": "ba4",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 177.86,
      "formula": "177.86%",
      "multiplierByLevel": [89.46,96.8,104.14,114.41,121.74,130.18,141.92,153.65,165.39,177.86]
    },
    {
      "id": "dodge_blood",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 205.24,
      "formula": "41.05% + 41.05% + 61.57% + 61.57%",
      "multiplierByLevel": [103.24,111.7,120.18,132.04,140.5,150.24,163.78,177.3,190.86,205.24],
      "segmentsByLevel": [[[20.65,1],[20.65,1],[30.97,1],[30.97,1]],[[22.34,1],[22.34,1],[33.51,1],[33.51,1]],[[24.04,1],[24.04,1],[36.05,1],[36.05,1]],[[26.41,1],[26.41,1],[39.61,1],[39.61,1]],[[28.1,1],[28.1,1],[42.15,1],[42.15,1]],[[30.05,1],[30.05,1],[45.07,1],[45.07,1]],[[32.76,1],[32.76,1],[49.13,1],[49.13,1]],[[35.46,1],[35.46,1],[53.19,1],[53.19,1]],[[38.17,1],[38.17,1],[57.26,1],[57.26,1]],[[41.05,1],[41.05,1],[61.57,1],[61.57,1]]]
    },
    {
      "id": "air_plunge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 143.15,
      "formula": "143.15%",
      "multiplierByLevel": [72,77.91,83.81,92.08,97.98,104.77,114.22,123.66,133.11,143.15]
    },
    {
      "id": "air_fire",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 26.84,
      "formula": "26.84%",
      "multiplierByLevel": [13.5,14.61,15.72,17.27,18.38,19.65,21.42,23.19,24.96,26.84]
    },
    {
      "id": "heavy_1",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 106.6,
      "formula": "53.30% + 53.30%",
      "multiplierByLevel": [53.62,58.02,62.42,68.58,72.96,78.02,85.06,92.1,99.12,106.6],
      "segmentsByLevel": [[[26.81,1],[26.81,1]],[[29.01,1],[29.01,1]],[[31.21,1],[31.21,1]],[[34.29,1],[34.29,1]],[[36.48,1],[36.48,1]],[[39.01,1],[39.01,1]],[[42.53,1],[42.53,1]],[[46.05,1],[46.05,1]],[[49.56,1],[49.56,1]],[[53.3,1],[53.3,1]]]
    },
    {
      "id": "heavy_2",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 69.18,
      "formula": "34.59% × 2",
      "multiplierByLevel": [34.8,37.66,40.52,44.5,47.36,50.64,55.2,59.76,64.34,69.18],
      "segmentsByLevel": [[[17.4,2]],[[18.83,2]],[[20.26,2]],[[22.25,2]],[[23.68,2]],[[25.32,2]],[[27.6,2]],[[29.88,2]],[[32.17,2]],[[34.59,2]]]
    },
    {
      "id": "heavy_3",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 167.7,
      "formula": "16.77% × 3 + 117.39%",
      "multiplierByLevel": [84.37,91.28,98.19,107.88,114.79,122.76,133.84,144.88,155.96,167.7],
      "segmentsByLevel": [[[8.44,3],[59.05,1]],[[9.13,3],[63.89,1]],[[9.82,3],[68.73,1]],[[10.79,3],[75.51,1]],[[11.48,3],[80.35,1]],[[12.28,3],[85.92,1]],[[13.39,3],[93.67,1]],[[14.49,3],[101.41,1]],[[15.6,3],[109.16,1]],[[16.77,3],[117.39,1]]]
    },
    {
      "id": "skill_encroach",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 35.78,
      "formula": "10.74% + 25.04%",
      "multiplierByLevel": [18,19.48,20.95,23.02,24.49,26.19,28.55,30.92,33.27,35.78],
      "segmentsByLevel": [[[5.4,1],[12.6,1]],[[5.85,1],[13.63,1]],[[6.29,1],[14.66,1]],[[6.91,1],[16.11,1]],[[7.35,1],[17.14,1]],[[7.86,1],[18.33,1]],[[8.57,1],[19.98,1]],[[9.28,1],[21.64,1]],[[9.98,1],[23.29,1]],[[10.74,1],[25.04,1]]]
    },
    {
      "id": "skill_ascent",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 103.14,
      "formula": "51.57% + 51.57%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "sinflame",
        "value": 100
      },
      "fallbackSkillId": "skill_encroach",
      "multiplierByLevel": [51.88,56.14,60.4,66.34,70.6,75.5,82.3,89.1,95.92,103.14],
      "segmentsByLevel": [[[25.94,1],[25.94,1]],[[28.07,1],[28.07,1]],[[30.2,1],[30.2,1]],[[33.17,1],[33.17,1]],[[35.3,1],[35.3,1]],[[37.75,1],[37.75,1]],[[41.15,1],[41.15,1]],[[44.55,1],[44.55,1]],[[47.96,1],[47.96,1]],[[51.57,1],[51.57,1]]]
    },
    {
      "id": "lib_absolution",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 1109.04,
      "formula": "110.90% + 90.74% × 11",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [557.83,603.65,649.36,713.41,759.12,811.68,884.89,958.1,1031.31,1109.04],
      "segmentsByLevel": [[[55.79,1],[45.64,11]],[[60.36,1],[49.39,11]],[[64.93,1],[53.13,11]],[[71.34,1],[58.37,11]],[[75.91,1],[62.11,11]],[[81.17,1],[66.41,11]],[[88.49,1],[72.4,11]],[[95.81,1],[78.39,11]],[[103.13,1],[84.38,11]],[[110.9,1],[90.74,11]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 94.12,
      "formula": "94.12%",
      "multiplierByLevel": [47.34,51.23,55.11,60.54,64.43,68.89,75.1,81.31,87.52,94.12]
    },
    {
      "id": "seraphic_1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 58.99,
      "formula": "58.99%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [29.67,32.11,34.54,37.95,40.38,43.18,47.07,50.96,54.86,58.99]
    },
    {
      "id": "seraphic_2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 139.19,
      "formula": "27.84% + 27.84% + 83.51%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [70,75.75,81.49,89.53,95.28,101.88,111.05,120.24,129.43,139.19],
      "segmentsByLevel": [[[14,1],[14,1],[42,1]],[[15.15,1],[15.15,1],[45.45,1]],[[16.3,1],[16.3,1],[48.89,1]],[[17.91,1],[17.91,1],[53.71,1]],[[19.06,1],[19.06,1],[57.16,1]],[[20.38,1],[20.38,1],[61.12,1]],[[22.21,1],[22.21,1],[66.63,1]],[[24.05,1],[24.05,1],[72.14,1]],[[25.89,1],[25.89,1],[77.65,1]],[[27.84,1],[27.84,1],[83.51,1]]]
    },
    {
      "id": "seraphic_3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 243.17,
      "formula": "24.32% × 3 + 170.21%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [122.3,132.36,142.38,156.4,166.45,177.98,194.04,210.07,226.1,243.17],
      "segmentsByLevel": [[[12.23,3],[85.61,1]],[[13.24,3],[92.64,1]],[[14.24,3],[99.66,1]],[[15.64,3],[109.48,1]],[[16.65,3],[116.5,1]],[[17.8,3],[124.58,1]],[[19.41,3],[135.81,1]],[[21.01,3],[147.04,1]],[[22.61,3],[158.27,1]],[[24.32,3],[170.21,1]]]
    },
    {
      "id": "seraphic_4",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 181.47,
      "formula": "18.15% × 3 + 127.02%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [91.28,98.77,106.26,116.75,124.24,132.84,144.79,156.77,168.76,181.47],
      "segmentsByLevel": [[[9.13,3],[63.89,1]],[[9.88,3],[69.13,1]],[[10.63,3],[74.37,1]],[[11.68,3],[81.71,1]],[[12.43,3],[86.95,1]],[[13.29,3],[92.97,1]],[[14.48,3],[101.35,1]],[[15.68,3],[109.73,1]],[[16.88,3],[118.12,1]],[[18.15,3],[127.02,1]]]
    },
    {
      "id": "seraphic_5",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 224.27,
      "formula": "67.28% + 156.99%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [112.8,122.06,131.3,144.26,153.5,164.15,178.95,193.75,208.55,224.27],
      "segmentsByLevel": [[[33.84,1],[78.96,1]],[[36.62,1],[85.44,1]],[[39.39,1],[91.91,1]],[[43.28,1],[100.98,1]],[[46.05,1],[107.45,1]],[[49.25,1],[114.9,1]],[[53.69,1],[125.26,1]],[[58.13,1],[135.62,1]],[[62.57,1],[145.98,1]],[[67.28,1],[156.99,1]]]
    },
    {
      "id": "verdict_1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 118.44,
      "formula": "59.22% + 59.22%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [59.58,64.46,69.34,76.18,81.08,86.7,94.5,102.32,110.14,118.44],
      "segmentsByLevel": [[[29.79,1],[29.79,1]],[[32.23,1],[32.23,1]],[[34.67,1],[34.67,1]],[[38.09,1],[38.09,1]],[[40.54,1],[40.54,1]],[[43.35,1],[43.35,1]],[[47.25,1],[47.25,1]],[[51.16,1],[51.16,1]],[[55.07,1],[55.07,1]],[[59.22,1],[59.22,1]]]
    },
    {
      "id": "verdict_2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 76.7,
      "formula": "38.35% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [38.58,41.74,44.9,49.34,52.5,56.14,61.2,66.26,71.32,76.7],
      "segmentsByLevel": [[[19.29,2]],[[20.87,2]],[[22.45,2]],[[24.67,2]],[[26.25,2]],[[28.07,2]],[[30.6,2]],[[33.13,2]],[[35.66,2]],[[38.35,2]]]
    },
    {
      "id": "verdict_3",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 176.84,
      "formula": "17.69% × 3 + 123.77%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [88.96,96.25,103.55,113.76,121.05,129.44,141.09,152.77,164.44,176.84],
      "segmentsByLevel": [[[8.9,3],[62.26,1]],[[9.63,3],[67.36,1]],[[10.36,3],[72.47,1]],[[11.38,3],[79.62,1]],[[12.11,3],[84.72,1]],[[12.95,3],[90.59,1]],[[14.11,3],[98.76,1]],[[15.28,3],[106.93,1]],[[16.45,3],[115.09,1]],[[17.69,3],[123.77,1]]]
    },
    {
      "id": "dodge_purgatory",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 321,
      "formula": "32.10% × 3 + 224.70%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [161.48,174.7,187.96,206.49,219.75,234.96,256.15,277.34,298.5,321],
      "segmentsByLevel": [[[16.15,3],[113.03,1]],[[17.47,3],[122.29,1]],[[18.8,3],[131.56,1]],[[20.65,3],[144.54,1]],[[21.98,3],[153.81,1]],[[23.5,3],[164.46,1]],[[25.62,3],[179.29,1]],[[27.74,3],[194.12,1]],[[29.85,3],[208.95,1]],[[32.1,3],[224.7,1]]]
    },
    {
      "id": "hellsent_plunge",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 159.05,
      "formula": "159.05%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
    },
    {
      "id": "hellsent_fire",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 29.83,
      "formula": "29.83%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [15,16.23,17.46,19.19,20.42,21.83,23.8,25.77,27.74,29.83]
    },
    {
      "id": "skill_ravage",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 35.78,
      "formula": "10.74% + 25.04%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [18,19.48,20.95,23.02,24.49,26.19,28.55,30.92,33.27,35.78],
      "segmentsByLevel": [[[5.4,1],[12.6,1]],[[5.85,1],[13.63,1]],[[6.29,1],[14.66,1]],[[6.91,1],[16.11,1]],[[7.35,1],[17.14,1]],[[7.86,1],[18.33,1]],[[8.57,1],[19.98,1]],[[9.28,1],[21.64,1]],[[9.98,1],[23.29,1]],[[10.74,1],[25.04,1]]]
    },
    {
      "id": "outro_ashen_pursuit",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 795,
      "formula": "79.50% × 3 + 556.50%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "lib_absolution",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "echoSkillDmg"
  ],
  "echoSet": 22,
  "echoSet2": 2,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_fated_end",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false,
      "duration": 5.5
    },
    {
      "id": "b_afterflame",
      "zone": "vulnerability",
      "value": 60,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "skills": [
        "seraphic_1",
        "seraphic_2",
        "seraphic_3",
        "seraphic_4",
        "seraphic_5",
        "verdict_1",
        "verdict_2",
        "verdict_3",
        "hellsent_plunge",
        "hellsent_fire",
        "skill_ravage",
        "dodge_purgatory"
      ],
      "maxStacks": 40,
      "defaultStacks": 0,
      "stackResource": "afterflame",
      "stackGroup": "afterflame"
    },
    {
      "id": "b_inner_burning",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro",
        "seraphic_4",
        "skill_encroach",
        "skill_ascent",
        "skill_ravage"
      ],
      "duration": 4
    },
    {
      "id": "b_liberation_mult",
      "zone": "skillMultBonus",
      "value": 85,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "skills": [
        "seraphic_1",
        "seraphic_2",
        "seraphic_3",
        "seraphic_4",
        "seraphic_5",
        "verdict_1",
        "verdict_2",
        "verdict_3",
        "hellsent_plunge",
        "hellsent_fire",
        "dodge_purgatory"
      ],
      "defaultActive": false,
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_afterflame_cd",
          "zone": "critDamage",
          "value": 80,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "skills": [
            "seraphic_1",
            "seraphic_2",
            "seraphic_3",
            "seraphic_4",
            "seraphic_5",
            "verdict_1",
            "verdict_2",
            "verdict_3",
            "hellsent_plunge",
            "hellsent_fire",
            "skill_ravage",
            "dodge_purgatory"
          ],
          "maxStacks": 40,
          "defaultStacks": 0,
          "stackResource": "afterflame",
          "stackGroup": "afterflame"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_inner_burning",
          "zone": "attackPercent",
          "value": 70,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "seraphic_4",
            "skill_encroach",
            "skill_ascent",
            "skill_ravage"
          ],
          "duration": 4
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_liberation",
          "zone": "skillMultBonus",
          "value": 130,
          "scope": "self",
          "skills": [
            "lib_absolution"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_echo_team",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerEvents": [
            "castEchoSkill"
          ],
          "duration": 20
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_skill",
          "zone": "skillMultBonus",
          "value": 150,
          "scope": "self",
          "skills": [
            "skill_encroach",
            "skill_ascent",
            "skill_ravage"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_eternal_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "skills": [
            "seraphic_1",
            "seraphic_2",
            "seraphic_3",
            "seraphic_4",
            "seraphic_5",
            "verdict_1",
            "verdict_2",
            "verdict_3",
            "hellsent_plunge",
            "hellsent_fire",
            "dodge_purgatory"
          ]
        },
        {
          "id": "k6_afterflame_fusion",
          "zone": "amplify",
          "element": "fusion",
          "value": 35,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "skills": [
            "seraphic_1",
            "seraphic_2",
            "seraphic_3",
            "seraphic_4",
            "seraphic_5",
            "verdict_1",
            "verdict_2",
            "verdict_3",
            "hellsent_plunge",
            "hellsent_fire",
            "skill_ravage",
            "dodge_purgatory"
          ],
          "maxStacks": 40,
          "defaultStacks": 0,
          "stackResource": "afterflame",
          "stackGroup": "afterflame"
        }
      ]
    }
  ],
  "modes": null
});
