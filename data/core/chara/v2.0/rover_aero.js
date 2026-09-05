WUWA.register({
  "id": "rover_aero",
  "aliases": [],
  "debut": 2,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "bloodpacts_pledge",
  "defaultWeaponId": "bloodpacts_pledge",
  "portrait": "",
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
      "attackPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "windstrings",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 35.31,
      "formula": "35.31%",
      "multiplierByLevel": [17.76,19.22,20.68,22.72,24.17,25.85,28.18,30.51,32.84,35.31]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.1,
      "formula": "43.05% × 2",
      "multiplierByLevel": [43.32,46.86,50.42,55.38,58.94,63.02,68.7,74.38,80.06,86.1],
      "segmentsByLevel": [[[21.66,2]],[[23.43,2]],[[25.21,2]],[[27.69,2]],[[29.47,2]],[[31.51,2]],[[34.35,2]],[[37.19,2]],[[40.03,2]],[[43.05,2]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.8,
      "formula": "55.05% + 1.99% × 25",
      "multiplierByLevel": [52.69,57.21,61.48,67.41,71.93,76.79,83.67,90.56,97.44,104.8],
      "segmentsByLevel": [[[27.69,1],[1,25]],[[29.96,1],[1.09,25]],[[32.23,1],[1.17,25]],[[35.41,1],[1.28,25]],[[37.68,1],[1.37,25]],[[40.29,1],[1.46,25]],[[43.92,1],[1.59,25]],[[47.56,1],[1.72,25]],[[51.19,1],[1.85,25]],[[55.05,1],[1.99,25]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.72,
      "formula": "76.72%",
      "multiplierByLevel": [38.59,41.76,44.92,49.35,52.51,56.15,61.21,66.28,71.34,76.72]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 53.73,
      "formula": "17.91% × 3",
      "multiplierByLevel": [27.03,29.25,31.47,34.56,36.78,39.33,42.87,46.44,49.98,53.73],
      "segmentsByLevel": [[[9.01,3]],[[9.75,3]],[[10.49,3]],[[11.52,3]],[[12.26,3]],[[13.11,3]],[[14.29,3]],[[15.48,3]],[[16.66,3]],[[17.91,3]]]
    },
    {
      "id": "heavy_choke",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 80.83,
      "formula": "36.37% + 44.46%",
      "multiplierByLevel": [40.66,44,47.33,52,55.33,59.16,64.49,69.82,75.16,80.83],
      "segmentsByLevel": [[[18.3,1],[22.36,1]],[[19.8,1],[24.2,1]],[[21.3,1],[26.03,1]],[[23.4,1],[28.6,1]],[[24.9,1],[30.43,1]],[[26.62,1],[32.54,1]],[[29.02,1],[35.47,1]],[[31.42,1],[38.4,1]],[[33.82,1],[41.34,1]],[[36.37,1],[44.46,1]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 140.76,
      "formula": "140.76%",
      "multiplierByLevel": [70.8,76.61,82.42,90.54,96.35,103.03,112.32,121.6,130.89,140.76]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 175.18,
      "formula": "125.43% + 1.99% × 25",
      "multiplierByLevel": [88.09,95.52,102.69,112.68,120.1,128.3,139.83,151.36,162.88,175.18],
      "segmentsByLevel": [[[63.09,1],[1,25]],[[68.27,1],[1.09,25]],[[73.44,1],[1.17,25]],[[80.68,1],[1.28,25]],[[85.85,1],[1.37,25]],[[91.8,1],[1.46,25]],[[100.08,1],[1.59,25]],[[108.36,1],[1.72,25]],[[116.63,1],[1.85,25]],[[125.43,1],[1.99,25]]]
    },
    {
      "id": "skill_gale",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 166.1,
      "formula": "66.44% + 99.66%",
      "multiplierByLevel": [83.55,90.4,97.25,106.85,113.7,121.57,132.54,143.5,154.45,166.1],
      "segmentsByLevel": [[[33.42,1],[50.13,1]],[[36.16,1],[54.24,1]],[[38.9,1],[58.35,1]],[[42.74,1],[64.11,1]],[[45.48,1],[68.22,1]],[[48.63,1],[72.94,1]],[[53.02,1],[79.52,1]],[[57.4,1],[86.1,1]],[[61.78,1],[92.67,1]],[[66.44,1],[99.66,1]]]
    },
    {
      "id": "skill_sever",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 175.26,
      "formula": "23.37% × 3 + 105.15%",
      "triggerEvents": [
        "applyAeroErosion"
      ],
      "multiplierByLevel": [88.17,95.39,102.64,112.73,119.97,128.29,139.85,151.41,162.97,175.26],
      "segmentsByLevel": [[[11.76,3],[52.89,1]],[[12.72,3],[57.23,1]],[[13.69,3],[61.57,1]],[[15.03,3],[67.64,1]],[[16,3],[71.97,1]],[[17.11,3],[76.96,1]],[[18.65,3],[83.9,1]],[[20.19,3],[90.84,1]],[[21.73,3],[97.78,1]],[[23.37,3],[105.15,1]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 536.79,
      "formula": "536.79%",
      "multiplierByLevel": [270,292.14,314.28,345.28,367.42,392.88,428.31,463.73,499.15,536.79]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "79.53% + 119.29%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.89,136.09,145.52,158.64,171.75,184.88,198.82],
      "segmentsByLevel": [[[40,1],[60,1]],[[43.28,1],[64.92,1]],[[46.56,1],[69.84,1]],[[51.16,1],[76.73,1]],[[54.44,1],[81.65,1]],[[58.21,1],[87.31,1]],[[63.46,1],[95.18,1]],[[68.7,1],[103.05,1]],[[73.95,1],[110.93,1]],[[79.53,1],[119.29,1]]]
    },
    {
      "id": "forte_cloud_1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 128.8,
      "formula": "128.80%",
      "multiplierByLevel": [64.79,70.1,75.41,82.85,88.16,94.27,102.77,111.27,119.77,128.8]
    },
    {
      "id": "forte_cloud_2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 141.47,
      "formula": "141.47%",
      "multiplierByLevel": [71.16,76.99,82.83,91,96.83,103.54,112.88,122.21,131.55,141.47]
    },
    {
      "id": "forte_misty_1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 171.5,
      "formula": "34.30% × 5",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "windstrings",
        "value": 60
      },
      "fallbackSkillId": "skill_gale",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [86.3,93.35,100.45,110.35,117.4,125.55,136.85,148.15,159.5,171.5],
      "segmentsByLevel": [[[17.26,5]],[[18.67,5]],[[20.09,5]],[[22.07,5]],[[23.48,5]],[[25.11,5]],[[27.37,5]],[[29.63,5]],[[31.9,5]],[[34.3,5]]]
    },
    {
      "id": "forte_misty_2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 723.03,
      "formula": "723.03%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "windstrings",
        "value": 60
      },
      "fallbackSkillId": "skill_gale",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [363.68,393.5,423.32,465.07,494.9,529.19,576.9,624.62,672.33,723.03]
    }
  ],
  "defaultSkillId": "forte_misty_2",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 14,
  "buffs": [
    {
      "id": "b_intro_atk",
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
      "duration": 10
    },
    {
      "id": "b_outro_cap",
      "zone": "effectCapBonus",
      "effects": [
        "windErosion"
      ],
      "value": 3,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 10
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_aero",
          "zone": "damageBonus",
          "element": "aero",
          "value": 15,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_skill",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "forte_cloud_1",
            "forte_cloud_2"
          ],
          "duration": 5
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_misty",
          "zone": "skillMultBonus",
          "value": 30,
          "scope": "self",
          "skills": [
            "forte_misty_1",
            "forte_misty_2"
          ]
        }
      ]
    }
  ],
  "modes": null
});
