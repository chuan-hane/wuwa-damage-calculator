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
      "formula": "31.81%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 53.02,
      "formula": "26.51% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.44,
      "formula": "47.72% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.74,
      "formula": "50.37% × 2"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 179.73,
      "formula": "179.73%"
    },
    {
      "id": "aim",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 35.79,
      "formula": "35.79%"
    },
    {
      "id": "aim_full",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 80.52,
      "formula": "80.52%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.65,
      "formula": "59.65%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 214.12,
      "formula": "214.12%"
    },
    {
      "id": "skill_mist_bullet",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 357.9,
      "formula": "59.65% × 6"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a12"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "66.27% × 3"
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
        "迷雾潜行"
      ],
      "formula": "59.65% × 雾滴"
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
      "id": "雾气",
      "kind": "field",
      "options": [
        {
          "value": "雾气"
        }
      ]
    },
    {
      "id": "虚实之门",
      "kind": "field",
      "options": [
        {
          "value": "虚实之门"
        }
      ]
    },
    {
      "id": "迷雾潜行",
      "kind": "buff",
      "options": [
        {
          "value": "迷雾潜行"
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
      "requiresState": "虚实之门",
      "duration": 10
    },
    {
      "id": "b3",
      "zone": "amplify",
      "element": "aero",
      "value": 23,
      "scope": "team",
      "duration": 14
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
          "requiresState": "雾气"
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
          "requiresState": "迷雾潜行",
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
          "requiresState": "虚实之门"
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
          "requiresState": "虚实之门"
        }
      ]
    }
  ],
  "modes": null
});
