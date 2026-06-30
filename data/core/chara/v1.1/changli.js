WUWA.register({
  "id": "changli",
  "aliases": [],
  "debut": 1.1,
  "element": "fusion",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "blazing_brilliance",
  "portrait": "",
  "base": {
    "hp": 10387,
    "attack": 462,
    "defense": 1099,
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
      "id": "enflamement",
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
      "multiplier": 58.98,
      "formula": "29.49% × 2"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 70.98,
      "formula": "35.49% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 109.35,
      "formula": "36.45% × 3"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169.02,
      "formula": "50.70% + 29.58% × 4"
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 61.35,
      "formula": "61.35%"
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 101.74,
      "formula": "50.87% × 2"
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132,
      "formula": "44.00% × 3"
    },
    {
      "id": "na4_2",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 126.75,
      "formula": "38.03% + 22.18% × 4"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 124.24,
      "formula": "28.99% × 3 + 37.27%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a10"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 123.27,
      "formula": "123.27%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a11"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 247.92,
      "formula": "82.64% × 3"
    },
    {
      "id": "skill_true_sight_capture",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 409.4,
      "formula": "81.88% × 3 + 163.76%"
    },
    {
      "id": "skill_true_sight_conquest",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 294.73,
      "formula": "58.95% × 2 + 82.52% + 94.31%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_true_sight_charge",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 181.7,
      "formula": "72.68% + 109.02%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a15"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1212.75,
      "formula": "1212.75%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a16"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 148.34,
      "formula": "44.50% + 25.96% × 4",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_flaming_sacrifice",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 654.1,
      "formula": "39.25% × 5 + 457.85%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "enflamement",
        "value": 4
      },
      "fallbackSkillId": "heavy"
    }
  ],
  "defaultSkillId": "forte_flaming_sacrifice",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 2,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    },
    {
      "id": "state_2",
      "options": [
        {
          "value": "state_2_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_lihuo",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 20,
      "scope": "self",
      "skills": [
        "skill_true_sight_conquest",
        "skill_true_sight_charge"
      ],
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false
    },
    {
      "id": "b_sanshi_dmg",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 20,
      "scope": "self",
      "skills": [
        "forte_flaming_sacrifice",
        "lib"
      ]
    },
    {
      "id": "b_sanshi_def",
      "zone": "defIgnore",
      "value": 15,
      "scope": "self",
      "skills": [
        "forte_flaming_sacrifice",
        "lib"
      ]
    },
    {
      "id": "b_yanyu",
      "zone": "attackPercent",
      "value": 25,
      "scope": "self",
      "skills": [
        "forte_flaming_sacrifice"
      ],
      "requiresState": "state_2_option_1",
      "duration": 10
    },
    {
      "id": "b_outro_fusion",
      "zone": "amplify",
      "element": "fusion",
      "value": 20,
      "scope": "team",
      "duration": 10
    },
    {
      "id": "b_outro_burst",
      "zone": "amplify",
      "damageType": "resonanceLiberation",
      "value": 25,
      "scope": "team",
      "duration": 10
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "amplify",
          "value": 10,
          "scope": "self",
          "skills": [
            "skill_true_sight_capture",
            "skill_true_sight_conquest",
            "skill_true_sight_charge",
            "forte_flaming_sacrifice"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "critRate",
          "value": 25,
          "scope": "self",
          "defaultActive": false,
          "duration": 8
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "amplify",
          "value": 80,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_mult",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "forte_flaming_sacrifice"
          ]
        },
        {
          "id": "k5_amp",
          "zone": "amplify",
          "value": 50,
          "scope": "self",
          "skills": [
            "forte_flaming_sacrifice"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "defIgnore",
          "value": 40,
          "scope": "self",
          "skills": [
            "skill_true_sight_capture",
            "skill_true_sight_conquest",
            "skill_true_sight_charge",
            "forte_flaming_sacrifice",
            "lib"
          ]
        }
      ]
    }
  ],
  "modes": null
});
