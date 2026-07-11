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
      "formula": "66.21%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 96.64,
      "formula": "48.32% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134.2,
      "formula": "33.55% × 4"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 232.61,
      "formula": "232.61%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 35.79,
      "formula": "35.79%"
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 80.52,
      "formula": "80.52%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 32.21,
      "formula": "32.21%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 339.97,
      "formula": "339.97%"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 254.48,
      "formula": "31.81% × 8"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1590.53,
      "formula": "954.29% + 57.84% × 11"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 196.86,
      "formula": "49.21% × 2 + 24.61% × 4"
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
      }
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
      }
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
