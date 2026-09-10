WUWA.register({
  "id": "aalto",
  "aliases": [],
  "debut": 1,
  "element": "aero",
  "weaponType": 3,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "cadenza",
  "portrait": "",
  "resources": [
    {
      "id": "mistDrops",
      "min": 0,
      "max": 6,
      "defaultValue": "max"
    }
  ],
  "base": {
    "hp": 9850,
    "attack": 262,
    "defense": 1075,
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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 31.81,
      "formula": "31.81%",
      "multiplierByLevel": [16,17.32,18.63,20.47,21.78,23.29,25.39,27.48,29.58,31.81]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 53.02,
      "formula": "26.51% × 2",
      "multiplierByLevel": [26.67,28.86,31.04,34.11,36.29,38.81,42.31,45.8,49.3,53.02]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.44,
      "formula": "47.72% × 2",
      "multiplierByLevel": [48,51.94,55.88,61.4,65.32,69.86,76.16,82.44,88.74,95.44],
      "segmentsByLevel": [[[24,2]],[[25.97,2]],[[27.94,2]],[[30.7,2]],[[32.66,2]],[[34.93,2]],[[38.08,2]],[[41.22,2]],[[44.37,2]],[[47.72,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.74,
      "formula": "50.37% × 2",
      "multiplierByLevel": [50.68,54.84,58.98,64.8,68.96,73.74,80.38,87.02,93.68,100.74],
      "segmentsByLevel": [[[25.34,2]],[[27.42,2]],[[29.49,2]],[[32.4,2]],[[34.48,2]],[[36.87,2]],[[40.19,2]],[[43.51,2]],[[46.84,2]],[[50.37,2]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 179.73,
      "formula": "179.73%",
      "multiplierByLevel": [90.4,97.82,105.23,115.61,123.02,131.55,143.41,155.27,167.13,179.73]
    },
    {
      "id": "aim",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 35.79,
      "formula": "35.79%",
      "multiplierByLevel": [18,19.48,20.96,23.02,24.5,26.2,28.56,30.92,33.28,35.79]
    },
    {
      "id": "aim_full",
      "legacyIds": [
        "a7"
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
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.65,
      "formula": "59.65%",
      "multiplierByLevel": [30,32.46,34.92,38.37,40.83,43.66,47.59,51.53,55.47,59.65]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 214.12,
      "formula": "214.12%",
      "multiplierByLevel": [107.7,116.54,125.37,137.73,146.56,156.72,170.85,184.98,199.11,214.12]
    },
    {
      "id": "skill_mist_bullet",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 357.9,
      "formula": "59.65% × 6",
      "multiplierByLevel": [180,194.76,209.52,230.22,244.98,261.96,285.54,309.18,332.82,357.9],
      "segmentsByLevel": [[[30,6]],[[32.46,6]],[[34.92,6]],[[38.37,6]],[[40.83,6]],[[43.66,6]],[[47.59,6]],[[51.53,6]],[[55.47,6]],[[59.65,6]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%",
      "multiplierByLevel": [200,216.4,232.8,255.76,272.16,291.02,317.26,343.5,369.74,397.62]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a12"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "66.27% × 3",
      "multiplierByLevel": [100.02,108.21,116.4,127.89,136.08,145.53,158.64,171.75,184.89,198.81],
      "segmentsByLevel": [[[33.34,3]],[[36.07,3]],[[38.8,3]],[[42.63,3]],[[45.36,3]],[[48.51,3]],[[52.88,3]],[[57.25,3]],[[61.63,3]],[[66.27,3]]]
    },
    {
      "id": "forte_mist_bullet",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 0,
      "perStack": 59.65,
      "stackResource": "mistDrops",
      "stackLabel": "雾滴",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "formula": "59.65% × 雾滴",
      "multiplierByLevel": [0,0,0,0,0,0,0,0,0,0],
      "perStackByLevel": [30,32.46,34.92,38.37,40.83,43.66,47.59,51.53,55.47,59.65]
    }
  ],
  "defaultSkillId": "skill_mist_bullet",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 4,
  "combatStates": [
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        }
      ]
    },
    {
      "id": "field_2",
      "kind": "field",
      "options": [
        {
          "value": "field_2_option_1"
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
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "critRate",
      "value": 95,
      "scope": "self",
      "damageType": "heavy",
      "defaultActive": false
    },
    {
      "id": "b2",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "requiresState": "field_2_option_1",
      "duration": 10
    },
    {
      "id": "b3",
      "zone": "amplify",
      "element": "aero",
      "value": 23,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "attackPercent",
          "value": 15,
          "scope": "self",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "multScaleAdd": 50,
          "scope": "self",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "na5",
            "air"
          ],
          "requiresState": "field_1_option_1"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 30,
          "scope": "self",
          "skills": [
            "skill_mist_bullet",
            "forte_mist_bullet"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "damageBonus",
          "element": "aero",
          "value": 25,
          "scope": "self",
          "requiresState": "buff_1_option_1",
          "duration": 6
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6a",
          "zone": "critRate",
          "value": 8,
          "scope": "self",
          "requiresState": "field_2_option_1"
        },
        {
          "id": "k6b",
          "zone": "typeBonus",
          "damageType": "heavy",
          "value": 50,
          "scope": "self",
          "skills": [
            "aim",
            "aim_full"
          ],
          "requiresState": "field_2_option_1"
        }
      ]
    }
  ],
  "modes": null
});
