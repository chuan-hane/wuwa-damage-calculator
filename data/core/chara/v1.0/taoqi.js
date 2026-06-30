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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.15,
      "formula": "90.15%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.84,
      "formula": "84.84%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 111.34,
      "formula": "111.34%"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 270.39,
      "formula": "270.39%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 220.37,
      "formula": "220.37%"
    },
    {
      "id": "skill_strategic_parry",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 78.7,
      "formula": "78.70%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 248.52,
      "formula": "248.52%"
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
        "shield"
      ]
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
      "formula": "449.71%"
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
      ]
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
      "requiresResource": "刚柔化势"
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
      "requiresResource": "刚柔化势"
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
      "requiresResource": "刚柔化势"
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
