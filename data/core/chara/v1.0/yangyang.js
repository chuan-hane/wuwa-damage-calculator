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
      "formula": "44.73%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.64,
      "formula": "59.64%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.62,
      "formula": "46.81% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 197.86,
      "formula": "59.36% × 2 + 79.14%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 59.64,
      "formula": "19.88% × 3"
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.44,
      "formula": "92.44%"
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 106.61,
      "formula": "106.61%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 174.14,
      "formula": "87.07% × 2"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 345.31,
      "formula": "34.53% × 4 + 207.19%"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 931.66,
      "formula": "46.58% × 12 + 372.70%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 159.04,
      "formula": "79.52% × 2"
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
      "requiresResource": "3声流响",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 3
      },
      "fallbackSkillId": "heavy"
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
      "requiresResource": "3声流响",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 3
      },
      "fallbackSkillId": "air"
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
