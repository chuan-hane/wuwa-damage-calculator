WUWA.register({
  "id": "chixia",
  "aliases": [],
  "debut": 1,
  "element": "fusion",
  "weaponType": 3,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "undying_flame",
  "portrait": "",
  "base": {
    "hp": 9087,
    "attack": 300,
    "defense": 953,
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
      "id": "thermobaricBullets",
      "max": 70,
      "defaultValue": "max"
    },
    {
      "id": "dakaDakaShots",
      "max": 30,
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
      "multiplier": 66.21,
      "formula": "66.21%",
      "multiplierByLevel": [33.3,36.04,38.77,42.59,45.32,48.46,52.83,57.2,61.57,66.21]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 96.64,
      "formula": "48.32% × 2",
      "multiplierByLevel": [48.6,52.6,56.58,62.16,66.14,70.72,77.1,83.48,89.86,96.64],
      "segmentsByLevel": [[[24.3,2]],[[26.3,2]],[[28.29,2]],[[31.08,2]],[[33.07,2]],[[35.36,2]],[[38.55,2]],[[41.74,2]],[[44.93,2]],[[48.32,2]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134.2,
      "formula": "33.55% × 4",
      "multiplierByLevel": [67.52,73.04,78.6,86.32,91.88,98.24,107.08,115.96,124.8,134.2],
      "segmentsByLevel": [[[16.88,4]],[[18.26,4]],[[19.65,4]],[[21.58,4]],[[22.97,4]],[[24.56,4]],[[26.77,4]],[[28.99,4]],[[31.2,4]],[[33.55,4]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 232.61,
      "formula": "232.61%",
      "multiplierByLevel": [117,126.6,136.19,149.62,159.22,170.25,185.6,200.95,216.3,232.61]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 35.79,
      "formula": "35.79%",
      "multiplierByLevel": [18,19.48,20.96,23.02,24.5,26.2,28.56,30.92,33.28,35.79]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 80.52,
      "formula": "80.52%",
      "multiplierByLevel": [40.5,43.83,47.15,51.8,55.12,58.94,64.25,69.56,74.88,80.52]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 32.21,
      "formula": "32.21%",
      "multiplierByLevel": [16.2,17.53,18.86,20.72,22.05,23.58,25.7,27.83,29.95,32.21]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 339.97,
      "formula": "339.97%",
      "multiplierByLevel": [171,185.03,199.05,218.68,232.7,248.83,271.26,293.7,316.13,339.97]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 254.48,
      "formula": "31.81% × 8",
      "multiplierByLevel": [128,138.56,149.04,163.76,174.24,186.32,203.12,219.84,236.64,254.48],
      "segmentsByLevel": [[[16,8]],[[17.32,8]],[[18.63,8]],[[20.47,8]],[[21.78,8]],[[23.29,8]],[[25.39,8]],[[27.48,8]],[[29.58,8]],[[31.81,8]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1590.53,
      "formula": "954.29% + 57.84% × 11",
      "multiplierByLevel": [800.1,865.64,931.29,1023.14,1088.68,1164.19,1269.08,1374.07,1479.07,1590.53],
      "segmentsByLevel": [[[480,1],[29.1,11]],[[519.36,1],[31.48,11]],[[558.72,1],[33.87,11]],[[613.83,1],[37.21,11]],[[653.19,1],[39.59,11]],[[698.45,1],[42.34,11]],[[761.43,1],[46.15,11]],[[824.4,1],[49.97,11]],[[887.38,1],[53.79,11]],[[954.29,1],[57.84,11]]]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 196.86,
      "formula": "49.21% × 2 + 24.61% × 4",
      "multiplierByLevel": [99.02,107.12,115.26,126.64,134.72,144.08,157.1,170.06,183.04,196.86],
      "segmentsByLevel": [[[24.75,2],[12.38,4]],[[26.78,2],[13.39,4]],[[28.81,2],[14.41,4]],[[31.66,2],[15.83,4]],[[33.68,2],[16.84,4]],[[36.02,2],[18.01,4]],[[39.27,2],[19.64,4]],[[42.51,2],[21.26,4]],[[45.76,2],[22.88,4]],[[49.21,2],[24.61,4]]]
    },
    {
      "id": "forte_thermobaric_bullets",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 19.89,
      "formula": "19.89%",
      "requiresResourceAtLeast": {
        "id": "thermobaricBullets",
        "value": 1
      },
      "multiplierByLevel": [10,10.82,11.64,12.79,13.61,14.56,15.87,17.18,18.49,19.89]
    },
    {
      "id": "forte_boom_boom",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 437.39,
      "formula": "437.39%",
      "requiresResourceAtLeast": {
        "id": "dakaDakaShots",
        "value": 30
      },
      "multiplierByLevel": [220,238.04,256.08,281.34,299.38,320.13,348.99,377.85,406.72,437.39]
    },
    {
      "id": "outro_leaping_flames",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 530,
      "formula": "530%",
      "fixedLevel": true
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
  "echoSet": 2,
  "buffs": [
    {
      "id": "b1",
      "zone": "attackPercent",
      "value": 30,
      "scope": "self",
      "maxStacks": 30,
      "defaultStacks": 0,
      "stackResource": "dakaDakaShots",
      "duration": 10
    },
    {
      "id": "b2",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 50,
      "scope": "self",
      "skills": [
        "forte_boom_boom"
      ]
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critRate",
          "value": 95,
          "scope": "self",
          "skills": [
            "forte_boom_boom"
          ]
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
          "damageType": "resonanceLiberation",
          "value": 40,
          "scope": "self",
          "skills": [
            "lib"
          ],
          "defaultActive": false
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
          "id": "k5",
          "zone": "attackPercent",
          "value": 30,
          "scope": "self",
          "requiresBuffStacks": {
            "id": "b1",
            "stacks": 30
          }
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "forte_boom_boom"
          ],
          "duration": 15
        }
      ]
    }
  ],
  "modes": null
});
