WUWA.register({
  "id": "youhu",
  "aliases": [],
  "debut": 1.3,
  "element": "glacio",
  "weaponType": 4,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "marcato",
  "portrait": "",
  "base": {
    "hp": 9975,
    "attack": 262,
    "defense": 1051,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "frost",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "auspices",
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
      "multiplier": 47.38,
      "formula": "47.38%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 91.17,
      "formula": "31.91% + 59.26%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.58,
      "formula": "38.06% + 46.52%"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 116.35,
      "formula": "116.35%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 86.7,
      "formula": "14.45% × 6",
      "requiresResource": "霜色满",
      "requiresResourceFull": "frost",
      "fallbackSkillId": "skill"
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 173.34,
      "formula": "28.89% × 6"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 156.46,
      "formula": "156.46%",
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "skill_chime",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 293.22,
      "formula": "41.05% + 49.85% × 3 + 102.62%"
    },
    {
      "id": "skill_ding",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 285.7,
      "formula": "28.57% × 6 + 114.28%"
    },
    {
      "id": "skill_ruyi",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 304.45,
      "formula": "137.00% + 167.45%"
    },
    {
      "id": "skill_mask",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 147.34,
      "formula": "11.46% × 9 + 44.20%"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 327.19,
      "formula": "327.19%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a14"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "89.47% + 109.35%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_poetic_essence",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 372.1,
      "formula": "37.21% × 10",
      "requiresResource": "4吉兆",
      "requiresResourceAtLeast": {
        "id": "auspices",
        "value": 4
      },
      "triggerEvents": [
        "heal"
      ]
    }
  ],
  "defaultSkillId": "forte_poetic_essence",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 1,
  "combatStates": [
    {
      "id": "吉兆组合",
      "kind": "mechanic",
      "options": [
        {
          "value": "吉兆组合·对偶"
        },
        {
          "value": "吉兆组合·双关"
        },
        {
          "value": "吉兆组合·联珠"
        },
        {
          "value": "吉兆组合·合说"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "glacio",
      "value": 15,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 14
    },
    {
      "id": "b2",
      "zone": "amplify",
      "damageType": "coordinated",
      "value": 100,
      "scope": "team",
      "duration": 28
    },
    {
      "id": "b3",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 70,
      "scope": "self",
      "skills": [
        "forte_poetic_essence"
      ],
      "requiresState": "吉兆组合·对偶"
    },
    {
      "id": "b4",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 175,
      "scope": "self",
      "skills": [
        "forte_poetic_essence"
      ],
      "requiresState": [
        "吉兆组合·联珠",
        "吉兆组合·合说"
      ]
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
          "id": "k2_duo",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 70,
          "scope": "self",
          "skills": [
            "forte_poetic_essence"
          ],
          "requiresState": "吉兆组合·对偶"
        },
        {
          "id": "k2_triple",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 175,
          "scope": "self",
          "skills": [
            "forte_poetic_essence"
          ],
          "requiresState": [
            "吉兆组合·联珠",
            "吉兆组合·合说"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self"
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
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 14
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "skill_chime",
            "skill_ding",
            "skill_ruyi",
            "skill_mask"
          ],
          "triggerStacks": 1,
          "duration": 7
        }
      ]
    }
  ],
  "modes": null
});
