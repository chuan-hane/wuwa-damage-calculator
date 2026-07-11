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
      "formula": "65.48%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.57,
      "formula": "78.57%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 91.7,
      "formula": "13.10% × 7"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.57,
      "formula": "78.57%"
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
      ]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.89,
      "formula": "78.89%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 178.65,
      "formula": "178.65%"
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
      ]
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
      ]
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
      ]
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
      "duration": 6
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
