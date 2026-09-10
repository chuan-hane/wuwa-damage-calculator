WUWA.register({
  "id": "baizhi",
  "aliases": [],
  "debut": 1,
  "element": "glacio",
  "weaponType": 5,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "variation",
  "portrait": "",
  "base": {
    "hp": 12812,
    "attack": 212,
    "defense": 1002,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "hpPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "concentration",
      "max": 4,
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
      "multiplier": 65.48,
      "formula": "65.48%",
      "multiplierByLevel": [32.94,35.64,38.34,42.12,44.82,47.93,52.25,56.57,60.89,65.48]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.57,
      "formula": "78.57%",
      "multiplierByLevel": [39.52,42.76,46.01,50.54,53.78,57.51,62.69,67.88,73.06,78.57]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 91.7,
      "formula": "13.10% × 7",
      "multiplierByLevel": [46.13,49.91,53.69,59.01,62.79,67.13,73.15,79.24,85.26,91.7],
      "segmentsByLevel": [[[6.59,7]],[[7.13,7]],[[7.67,7]],[[8.43,7]],[[8.97,7]],[[9.59,7]],[[10.45,7]],[[11.32,7]],[[12.18,7]],[[13.1,7]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.57,
      "formula": "78.57%",
      "multiplierByLevel": [39.52,42.76,46.01,50.54,53.78,57.51,62.69,67.88,73.06,78.57]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 48.86,
      "formula": "48.86%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [24.58,26.6,28.61,31.43,33.45,35.77,38.99,42.21,45.44,48.86]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.89,
      "formula": "78.89%",
      "multiplierByLevel": [39.68,42.94,46.19,50.75,54,57.74,62.95,68.16,73.36,78.89]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 178.65,
      "formula": "178.65%",
      "multiplierByLevel": [89.86,97.23,104.6,114.91,122.28,130.75,142.54,154.33,166.12,178.65]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "hp",
      "multiplier": 15.94,
      "formula": "15.94%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [8.02,8.68,9.34,10.26,10.91,11.67,12.72,13.77,14.82,15.94]
    },
    {
      "id": "lib_remnant_entities",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "hp",
      "multiplier": 4.07,
      "formula": "4.07%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [2.05,2.22,2.39,2.62,2.79,2.98,3.25,3.52,3.79,4.07]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a10"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 79.53,
      "formula": "79.53%",
      "triggerEvents": [
        "introEntry",
        "heal"
      ],
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    }
  ],
  "defaultSkillId": "skill",
  "validSubs": [
    "hpFlat",
    "hpPct",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 7,
  "buffs": [
    {
      "id": "b1",
      "zone": "attackPercent",
      "value": 15,
      "scope": "team",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "b2",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 6,
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
          "id": "k2_glacio",
          "zone": "damageBonus",
          "element": "glacio",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "requiresResourceAtLeast": {
            "id": "concentration",
            "value": 4
          },
          "duration": 12
        },
        {
          "id": "k2_heal",
          "zone": "healingBonus",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "requiresResourceAtLeast": {
            "id": "concentration",
            "value": 4
          },
          "duration": 12
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "hpPercent",
          "value": 12,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "multAdd": 1.2,
          "scope": "self",
          "skills": [
            "lib_remnant_entities"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "damageBonus",
          "element": "glacio",
          "value": 12,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
