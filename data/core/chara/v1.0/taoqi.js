WUWA.register({
  "id": "taoqi",
  "aliases": [],
  "debut": 1,
  "element": "havoc",
  "weaponType": 1,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "dauntless_evernight",
  "portrait": "",
  "base": {
    "hp": 8950,
    "attack": 225,
    "defense": 1564,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "defPct": 15.2,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "resolvingCaliber",
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
      "multiplier": 90.15,
      "formula": "90.15%",
      "multiplierByLevel": [45.34,49.06,52.78,57.99,61.7,65.98,71.93,77.88,83.83,90.15]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.84,
      "formula": "84.84%",
      "multiplierByLevel": [42.67,46.17,49.67,54.57,58.07,62.09,67.69,73.29,78.89,84.84]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 111.34,
      "formula": "111.34%",
      "multiplierByLevel": [56,60.6,65.19,71.62,76.21,81.49,88.84,96.18,103.53,111.34]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 270.39,
      "formula": "270.39%",
      "multiplierByLevel": [136,147.16,158.31,173.92,185.07,197.9,215.74,233.58,251.43,270.39]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 220.37,
      "formula": "220.37%",
      "multiplierByLevel": [110.84,119.93,129.02,141.75,150.84,161.29,175.83,190.37,204.91,220.37]
    },
    {
      "id": "skill_strategic_parry",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.7,
      "formula": "78.70%",
      "multiplierByLevel": [39.59,42.84,46.08,50.63,53.87,57.61,62.8,67.99,73.19,78.7]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%",
      "multiplierByLevel": [62,67.09,72.17,79.29,84.37,90.22,98.36,106.49,114.62,123.27]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 248.52,
      "formula": "248.52%",
      "multiplierByLevel": [125,135.25,145.5,159.85,170.1,181.89,198.29,214.69,231.09,248.52]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "defense",
      "multiplier": 134.92,
      "formula": "134.92%",
      "triggerEvents": [
        "shield",
        "heal"
      ],
      "multiplierByLevel": [67.86,73.43,78.99,86.78,92.35,98.75,107.65,116.55,125.46,134.92]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "defense",
      "multiplier": 449.71,
      "formula": "449.71%",
      "multiplierByLevel": [226.2,244.75,263.3,289.27,307.82,329.15,358.83,388.5,418.18,449.71]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 208.76,
      "formula": "208.76%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [105,113.61,122.22,134.28,142.89,152.79,166.57,180.34,194.12,208.76]
    },
    {
      "id": "forte_timed_counters_1",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 86.2,
      "formula": "86.20%",
      "requiresResourceAtLeast": {
        "id": "resolvingCaliber",
        "value": 1
      },
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [43.36,46.92,50.47,55.45,59,63.09,68.78,74.47,80.16,86.2]
    },
    {
      "id": "forte_timed_counters_2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 110.93,
      "formula": "110.93%",
      "requiresResourceAtLeast": {
        "id": "resolvingCaliber",
        "value": 2
      },
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [55.8,60.38,64.95,71.36,75.93,81.19,88.51,95.83,103.16,110.93]
    },
    {
      "id": "forte_timed_counters_3",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "defense",
      "multiplier": 145.41,
      "formula": "145.41%",
      "requiresResourceAtLeast": {
        "id": "resolvingCaliber",
        "value": 3
      },
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [73.14,79.14,85.14,93.53,99.53,106.43,116.02,125.62,135.22,145.41]
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "defFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 6,
  "buffs": [
    {
      "id": "b1",
      "zone": "defensePercent",
      "value": 15,
      "scope": "team",
      "defaultActive": false
    },
    {
      "id": "b2",
      "zone": "amplify",
      "damageType": "resonanceSkill",
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
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_cr",
          "zone": "critRate",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k2_cd",
          "zone": "critDamage",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": []
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "defensePercent",
          "value": 50,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_strategic_parry"
          ],
          "duration": 5
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "forte_timed_counters_1",
            "forte_timed_counters_2",
            "forte_timed_counters_3"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_basic",
          "zone": "typeBonus",
          "value": 40,
          "scope": "self",
          "damageType": "basic",
          "defaultActive": false
        },
        {
          "id": "k6_heavy",
          "zone": "typeBonus",
          "value": 40,
          "scope": "self",
          "damageType": "heavy",
          "defaultActive": false
        }
      ]
    }
  ],
  "modes": null
});
