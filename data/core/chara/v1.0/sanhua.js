WUWA.register({
  "id": "sanhua",
  "aliases": [],
  "debut": 1,
  "element": "glacio",
  "weaponType": 2,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "overture",
  "portrait": "",
  "base": {
    "hp": 10062,
    "attack": 275,
    "defense": 941,
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
      "multiplier": 48.71,
      "formula": "48.71%",
      "multiplierByLevel": [24.5,26.51,28.52,31.34,33.34,35.65,38.87,42.08,45.3,48.71]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.76,
      "formula": "73.76%",
      "multiplierByLevel": [37.1,40.15,43.19,47.45,50.49,53.99,58.86,63.72,68.59,73.76]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.32,
      "formula": "21.58% × 4",
      "multiplierByLevel": [43.4,46.96,50.52,55.52,59.08,63.16,68.88,74.56,80.24,86.32],
      "segmentsByLevel": [[[10.85,4]],[[11.74,4]],[[12.63,4]],[[13.88,4]],[[14.77,4]],[[15.79,4]],[[17.22,4]],[[18.64,4]],[[20.06,4]],[[21.58,4]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.34,
      "formula": "39.67% × 2",
      "multiplierByLevel": [39.9,43.18,46.46,51.04,54.3,58.06,63.3,68.54,73.78,79.34],
      "segmentsByLevel": [[[19.95,2]],[[21.59,2]],[[23.23,2]],[[25.52,2]],[[27.15,2]],[[29.03,2]],[[31.65,2]],[[34.27,2]],[[36.89,2]],[[39.67,2]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 233.81,
      "formula": "233.81%",
      "multiplierByLevel": [117.6,127.25,136.89,150.39,160.04,171.12,186.55,201.98,217.41,233.81]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 111.35,
      "formula": "22.27% × 5",
      "multiplierByLevel": [56,60.6,65.2,71.65,76.25,81.5,88.85,96.2,103.55,111.35],
      "segmentsByLevel": [[[11.2,5]],[[12.12,5]],[[13.04,5]],[[14.33,5]],[[15.25,5]],[[16.3,5]],[[17.77,5]],[[19.24,5]],[[20.71,5]],[[22.27,5]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%",
      "multiplierByLevel": [43.4,46.96,50.52,55.5,59.06,63.16,68.85,74.54,80.24,86.29]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 167.01,
      "formula": "167.01%",
      "multiplierByLevel": [84,90.89,97.78,107.42,114.31,122.23,133.25,144.27,155.3,167.01]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 359.85,
      "formula": "359.85%",
      "multiplierByLevel": [181,195.85,210.69,231.47,246.31,263.38,287.13,310.87,334.62,359.85]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 809.48,
      "formula": "809.48%",
      "multiplierByLevel": [407.16,440.55,473.94,520.68,554.07,592.46,645.88,699.3,752.72,809.48]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 139.17,
      "formula": "139.17%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [70,75.74,81.48,89.52,95.26,101.86,111.05,120.23,129.41,139.17]
    },
    {
      "id": "forte_detonate",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 372.58,
      "formula": "186.29% × 2",
      "multiplierByLevel": [187.4,202.78,218.14,239.66,255.02,272.7,297.28,321.86,346.46,372.58],
      "segmentsByLevel": [[[93.7,2]],[[101.39,2]],[[109.07,2]],[[119.83,2]],[[127.51,2]],[[136.35,2]],[[148.64,2]],[[160.93,2]],[[173.23,2]],[[186.29,2]]]
    },
    {
      "id": "forte_glacier_burst",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 139.17,
      "formula": "139.17%",
      "multiplierByLevel": [70,75.74,81.48,89.52,95.26,101.86,111.05,120.23,129.41,139.17]
    },
    {
      "id": "forte_ice_prism_burst",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 79.53,
      "formula": "79.53%",
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    },
    {
      "id": "forte_ice_thorn_burst",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 59.65,
      "formula": "59.65%",
      "multiplierByLevel": [30,32.46,34.92,38.37,40.83,43.66,47.59,51.53,55.47,59.65]
    }
  ],
  "defaultSkillId": "forte_detonate",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 1,
  "buffs": [
    {
      "id": "b1",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 8
    },
    {
      "id": "b2",
      "zone": "skillMultBonus",
      "value": 20,
      "scope": "self",
      "skills": [
        "forte_glacier_burst",
        "forte_ice_prism_burst",
        "forte_ice_thorn_burst"
      ],
      "defaultActive": false,
      "triggerSkills": [
        "na5"
      ],
      "duration": 8
    },
    {
      "id": "b3",
      "zone": "amplify",
      "damageType": "basic",
      "value": 38,
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
          "id": "k1",
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "na5"
          ],
          "duration": 10
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
          "zone": "amplify",
          "value": 35,
          "scope": "self",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "forte_detonate"
          ],
          "defaultActive": false,
          "duration": 5
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "skills": [
            "forte_glacier_burst",
            "forte_ice_prism_burst",
            "forte_ice_thorn_burst"
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
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
