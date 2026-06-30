WUWA.register({
  "id": "lingyang",
  "aliases": [],
  "debut": 1,
  "element": "glacio",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "abyss_surges",
  "portrait": "",
  "base": {
    "hp": 10387,
    "attack": 437,
    "defense": 1209,
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
      "id": "lionSpirit",
      "max": 100,
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
      "multiplier": 59.65,
      "formula": "59.65%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.74,
      "formula": "72.87% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.77,
      "formula": "20.41% × 5 + 43.72%"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 152.49,
      "formula": "152.49%"
    },
    {
      "id": "skill_feral_roars",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 159.06,
      "formula": "79.53% × 2"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 145.73,
      "formula": "145.73%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 252.1,
      "formula": "126.05% × 2"
    },
    {
      "id": "skill_ancient_arts",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 132.61,
      "formula": "132.61%"
    },
    {
      "id": "skill_furious_punches",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 152.5,
      "formula": "76.25% × 2"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a13"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "99.41% × 2",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_glorious_plunge",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 172.37,
      "formula": "172.37%",
      "requiresResource": "狮魂满",
      "requiresResourceFull": "lionSpirit",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "forte_feral_gyrate_1",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 290.27,
      "formula": "87.08% × 2 + 116.11%",
      "impliedStates": [
        "行狮"
      ]
    },
    {
      "id": "forte_feral_gyrate_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 190.62,
      "formula": "31.77% × 6",
      "impliedStates": [
        "行狮"
      ]
    },
    {
      "id": "forte_mountain_roamer",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 165.76,
      "formula": "82.88% × 2",
      "impliedStates": [
        "行狮"
      ]
    },
    {
      "id": "forte_mountain_roamer_practice",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 248.64,
      "formula": "82.88% × 2 × 150%",
      "impliedStates": [
        "行狮"
      ]
    },
    {
      "id": "forte_stormy_kicks",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 480.39,
      "formula": "36.03% × 8 + 192.15%",
      "impliedStates": [
        "行狮"
      ]
    },
    {
      "id": "forte_tail_strike",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 349.92,
      "formula": "174.96% × 2",
      "impliedStates": [
        "行狮"
      ]
    }
  ],
  "defaultSkillId": "forte_stormy_kicks",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 1,
  "combatStates": [
    {
      "id": "行狮",
      "kind": "status",
      "options": [
        {
          "value": "行狮"
        }
      ]
    },
    {
      "id": "狮子奋迅",
      "kind": "buff",
      "options": [
        {
          "value": "狮子奋迅"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "intro"
      ]
    },
    {
      "id": "b2",
      "zone": "damageBonus",
      "element": "glacio",
      "value": 50,
      "scope": "self",
      "requiresState": "狮子奋迅"
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3a",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 20,
          "scope": "self",
          "requiresState": "狮子奋迅"
        },
        {
          "id": "k3b",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 10,
          "scope": "self",
          "requiresState": "狮子奋迅"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "element": "glacio",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "multAdd": 200,
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
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 100,
          "scope": "self",
          "requiresState": "行狮",
          "skills": [
            "forte_feral_gyrate_1",
            "forte_feral_gyrate_2",
            "forte_stormy_kicks"
          ],
          "defaultActive": false
        }
      ]
    }
  ],
  "modes": null
});
