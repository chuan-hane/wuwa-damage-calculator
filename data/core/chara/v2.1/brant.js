WUWA.register({
  "id": "brant",
  "aliases": [],
  "debut": 2.1,
  "element": "fusion",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "unflickering_valor",
  "portrait": "",
  "base": {
    "hp": 11675,
    "attack": 375,
    "defense": 1307,
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
      "id": "applause",
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
      "multiplier": 50.53,
      "formula": "50.53%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "50.70% + 50.70%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.34,
      "formula": "22.06% × 3 + 33.08% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 140.12,
      "formula": "28.02% + 22.42% × 5"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 197.55,
      "formula": "197.55%"
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 168.99,
      "formula": "168.99%"
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 122.86,
      "formula": "122.86%"
    },
    {
      "id": "na1_3",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 332.48,
      "formula": "33.25% + 49.87% + 41.56% × 6"
    },
    {
      "id": "na1_4",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.95,
      "formula": "33.80% + 59.15%"
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a10"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169.84,
      "formula": "84.92% + 84.92%"
    },
    {
      "id": "na2_3",
      "legacyIds": [
        "a11"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 197.22,
      "formula": "32.87% × 6"
    },
    {
      "id": "na2_4",
      "legacyIds": [
        "a12"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.95,
      "formula": "33.80% + 59.15%"
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a13"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169.02,
      "formula": "28.17% × 6"
    },
    {
      "id": "na3_3",
      "legacyIds": [
        "a14"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.95,
      "formula": "33.80% + 59.15%"
    },
    {
      "id": "na4_2",
      "legacyIds": [
        "a15"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 253.85,
      "formula": "101.53% + 25.39% × 3 + 76.15%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a16"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 228.17,
      "formula": "38.03% × 3 + 57.04% × 2"
    },
    {
      "id": "na1_5",
      "legacyIds": [
        "a17"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.51,
      "formula": "28.17% × 3"
    },
    {
      "id": "skill_anchor",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 333.92,
      "formula": "200.35% + 133.57%"
    },
    {
      "id": "skill_plunge",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%"
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 680.45,
      "formula": "85.06% × 4 + 340.21%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 253.49,
      "formula": "202.79% + 50.70%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_returned",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1888.71,
      "formula": "47.22% × 2 + 94.44% + 188.87% × 2 + 1322.09%",
      "requiresResource": "喝彩充满",
      "requiresResourceFull": "applause",
      "fallbackSkillId": "skill_anchor",
      "triggerEvents": [
        "castResonanceSkill",
        "shield"
      ]
    },
    {
      "id": "outro_blast",
      "category": "outroSkill",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 440,
      "formula": "440.00%",
      "seq": 2,
      "requiresResource": "2链延奏额外效果"
    },
    {
      "id": "rekindle",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 566.61,
      "formula": "火焰归亡曲 × 30%",
      "seq": 6,
      "requiresResource": "施放火焰归亡曲后"
    }
  ],
  "defaultSkillId": "forte_returned",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "elem",
    "basicDmg"
  ],
  "echoSet": 12,
  "combatStates": [
    {
      "id": "燃焰状态",
      "options": [
        {
          "value": "燃焰状态"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_theatrical_atk",
      "zone": "attackFlat",
      "scope": "self",
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -150,
        "rate": 12,
        "min": 0,
        "cap": 1560
      }
    },
    {
      "id": "b_aflame_atk",
      "zone": "attackFlat",
      "scope": "self",
      "requiresState": "燃焰状态",
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -150,
        "rate": 8,
        "min": 0,
        "cap": 1040
      }
    },
    {
      "id": "b_fusion",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 15,
      "scope": "self"
    },
    {
      "id": "b_outro_fusion",
      "zone": "amplify",
      "element": "fusion",
      "value": 20,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b_outro_skill",
      "zone": "amplify",
      "damageType": "resonanceSkill",
      "value": 25,
      "scope": "team",
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "amplify",
          "value": 60,
          "scope": "self",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 5
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "critRate",
          "value": 30,
          "scope": "self",
          "skills": [
            "na1_2",
            "na1_3",
            "na1_4",
            "na2_2",
            "na2_3",
            "na2_4",
            "na3_2",
            "na3_3",
            "na4_2",
            "na1_5",
            "forte_returned"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "skillMultBonus",
          "value": 42,
          "scope": "self",
          "skills": [
            "forte_returned"
          ]
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
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "duration": 10
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "skillMultBonus",
          "value": 30,
          "scope": "self",
          "skills": [
            "na1_2",
            "na1_3",
            "na1_4",
            "na2_2",
            "na2_3",
            "na2_4",
            "na3_2",
            "na3_3",
            "na4_2",
            "na1_5"
          ]
        }
      ]
    }
  ],
  "modes": null
});
