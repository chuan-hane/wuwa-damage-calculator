WUWA.register({
  "id": "yangyang",
  "aliases": [],
  "debut": 1,
  "element": "aero",
  "weaponType": 2,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "overture",
  "portrait": "",
  "base": {
    "hp": 10200,
    "attack": 250,
    "defense": 1099,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "melody",
      "max": 3,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 44.73,
      "formula": "44.73%",
      "multiplierByLevel": [22.5,24.34,26.18,28.77,30.61,32.73,35.69,38.64,41.59,44.73]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.64,
      "formula": "59.64%",
      "multiplierByLevel": [30,32.46,34.92,38.36,40.82,43.65,47.58,51.52,55.46,59.64]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.62,
      "formula": "46.81% × 2",
      "multiplierByLevel": [47.1,50.96,54.82,60.22,64.08,68.52,74.7,80.88,87.06,93.62],
      "segmentsByLevel": [[[23.55,2]],[[25.48,2]],[[27.41,2]],[[30.11,2]],[[32.04,2]],[[34.26,2]],[[37.35,2]],[[40.44,2]],[[43.53,2]],[[46.81,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 197.86,
      "formula": "59.36% × 2 + 79.14%",
      "multiplierByLevel": [99.53,107.69,115.85,127.28,135.45,144.82,157.89,170.95,183.99,197.86],
      "segmentsByLevel": [[[29.86,2],[39.81,1]],[[32.31,2],[43.07,1]],[[34.76,2],[46.33,1]],[[38.19,2],[50.9,1]],[[40.64,2],[54.17,1]],[[43.45,2],[57.92,1]],[[47.37,2],[63.15,1]],[[51.29,2],[68.37,1]],[[55.2,2],[73.59,1]],[[59.36,2],[79.14,1]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 59.64,
      "formula": "19.88% × 3",
      "multiplierByLevel": [30,32.46,34.92,38.34,40.8,43.65,47.58,51.51,55.44,59.64],
      "segmentsByLevel": [[[10,3]],[[10.82,3]],[[11.64,3]],[[12.78,3]],[[13.6,3]],[[14.55,3]],[[15.86,3]],[[17.17,3]],[[18.48,3]],[[19.88,3]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.44,
      "formula": "92.44%",
      "multiplierByLevel": [46.5,50.31,54.12,59.46,63.27,67.66,73.76,79.86,85.96,92.44]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 106.61,
      "formula": "106.61%",
      "multiplierByLevel": [53.62,58.02,62.41,68.57,72.97,78.02,85.06,92.1,99.13,106.61]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 174.14,
      "formula": "87.07% × 2",
      "multiplierByLevel": [87.6,94.78,101.96,112.02,119.2,127.46,138.94,150.44,161.94,174.14],
      "segmentsByLevel": [[[43.8,2]],[[47.39,2]],[[50.98,2]],[[56.01,2]],[[59.6,2]],[[63.73,2]],[[69.47,2]],[[75.22,2]],[[80.97,2]],[[87.07,2]]]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 345.31,
      "formula": "34.53% × 4 + 207.19%",
      "multiplierByLevel": [173.7,187.92,202.15,222.11,236.34,252.73,275.52,298.31,321.11,345.31],
      "segmentsByLevel": [[[17.37,4],[104.22,1]],[[18.79,4],[112.76,1]],[[20.21,4],[121.31,1]],[[22.21,4],[133.27,1]],[[23.63,4],[141.82,1]],[[25.27,4],[151.65,1]],[[27.55,4],[165.32,1]],[[29.83,4],[178.99,1]],[[32.11,4],[192.67,1]],[[34.53,4],[207.19,1]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 931.66,
      "formula": "46.58% × 12 + 372.70%",
      "multiplierByLevel": [468.62,507.03,545.45,599.25,637.66,681.86,743.41,804.85,866.4,931.66],
      "segmentsByLevel": [[[23.43,12],[187.46,1]],[[25.35,12],[202.83,1]],[[27.27,12],[218.21,1]],[[29.96,12],[239.73,1]],[[31.88,12],[255.1,1]],[[34.09,12],[272.78,1]],[[37.17,12],[297.37,1]],[[40.24,12],[321.97,1]],[[43.32,12],[346.56,1]],[[46.58,12],[372.7,1]]]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 159.04,
      "formula": "79.52% × 2",
      "multiplierByLevel": [80,86.56,93.12,102.3,108.86,116.4,126.9,137.4,147.88,159.04],
      "segmentsByLevel": [[[40,2]],[[43.28,2]],[[46.56,2]],[[51.15,2]],[[54.43,2]],[[58.2,2]],[[63.45,2]],[[68.7,2]],[[73.94,2]],[[79.52,2]]]
    },
    {
      "id": "heavy_3",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 76.04,
      "formula": "38.02% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 3
      },
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [38.24,41.38,44.52,48.9,52.04,55.64,60.66,65.68,70.7,76.04],
      "segmentsByLevel": [[[19.12,2]],[[20.69,2]],[[22.26,2]],[[24.45,2]],[[26.02,2]],[[27.82,2]],[[30.33,2]],[[32.84,2]],[[35.35,2]],[[38.02,2]]]
    },
    {
      "id": "air_2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 362.27,
      "formula": "21.73% × 5 + 126.81% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 3
      },
      "fallbackSkillId": "air",
      "multiplierByLevel": [182.21,197.17,212.08,233.04,248,265.17,289.06,313,336.89,362.27],
      "segmentsByLevel": [[[10.93,5],[63.78,2]],[[11.83,5],[69.01,2]],[[12.72,5],[74.24,2]],[[13.98,5],[81.57,2]],[[14.88,5],[86.8,2]],[[15.91,5],[92.81,2]],[[17.34,5],[101.18,2]],[[18.78,5],[109.55,2]],[[20.21,5],[117.92,2]],[[21.73,5],[126.81,2]]]
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 4,
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "aero",
      "value": 8,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 8
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "damageBonus",
          "element": "aero",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 8
        }
      ]
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 40,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "skillMultBonus",
          "value": 95,
          "scope": "self",
          "skills": [
            "air_2"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 85,
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
          "id": "k6",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "air_2"
          ],
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
