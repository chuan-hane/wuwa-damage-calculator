WUWA.register({
  "id": "sigrika",
  "aliases": [],
  "debut": 3.2,
  "element": "aero",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "solsworn_ciphers",
  "portrait": "",
  "base": {
    "hp": 10775,
    "attack": 437,
    "defense": 1136,
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
      "id": "period",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "soliskinVitality",
      "min": 0,
      "max": 60,
      "defaultValue": "max"
    },
    {
      "id": "hopeRune",
      "min": 0,
      "max": 2,
      "group": "sigrikaRune",
      "groupMax": 2,
      "groupMaxByResource": [
        {
          "id": "period",
          "min": 50,
          "max": 4
        }
      ]
    },
    {
      "id": "answerRune",
      "min": 0,
      "max": 2,
      "group": "sigrikaRune",
      "groupMax": 2,
      "groupMaxByResource": [
        {
          "id": "period",
          "min": 50,
          "max": 4
        }
      ]
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 52.97,
      "formula": "52.97%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.68,
      "formula": "50.34% + 50.34%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 111.36,
      "formula": "33.41% + 33.41% + 44.54%"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 206.79,
      "formula": "41.36% + 51.70% + 51.70% + 62.03%"
    },
    {
      "id": "enlightened_basic",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 307.79,
      "formula": "61.56% × 3 + 123.11%",
      "requiresState": "state_1_option_1"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 116.28,
      "formula": "58.14% × 2"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 219.7,
      "formula": "65.91% + 65.91% + 87.88%"
    },
    {
      "id": "air_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 206.17,
      "formula": "206.17%"
    },
    {
      "id": "decipher_dodge",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 307.79,
      "formula": "61.56% × 3 + 123.11%",
      "requiresState": "state_1_option_1"
    },
    {
      "id": "skill_boom",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 143.15,
      "formula": "28.63% + 28.63% + 28.63% + 57.26%"
    },
    {
      "id": "skill_big_boom",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 288.09,
      "formula": "28.81% × 4 + 172.85%",
      "requiresState": "state_1_option_1"
    },
    {
      "id": "skill_soliskin",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 278.26,
      "formula": "27.83% × 3 + 194.77%",
      "requiresState": "state_1_option_1",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "period",
        "value": 50
      },
      "fallbackSkillId": "skill_big_boom"
    },
    {
      "id": "liberation",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 861.43,
      "formula": "861.43%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 163.42,
      "formula": "163.42%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "rune_source",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 132.51,
      "formula": "132.51%",
      "requiresResource": "resource_gate_2",
      "requiresResourceSumAtLeast": {
        "ids": [
          "hopeRune",
          "answerRune"
        ],
        "value": 2
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "rune_outburst",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 588.34,
      "formula": "117.67% + 205.92% + 264.75%",
      "requiresResource": "resource_gate_3",
      "requiresAllResourcesAtLeast": [
        {
          "id": "hopeRune",
          "value": 1
        },
        {
          "id": "answerRune",
          "value": 1
        }
      ],
      "fallbackSkillId": "rune_source"
    },
    {
      "id": "rune_chain",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 397.58,
      "formula": "49.70% × 4 + 66.26% × 3",
      "requiresResource": "resource_gate_4",
      "requiresResourceAtLeast": {
        "id": "hopeRune",
        "value": 2
      },
      "fallbackSkillId": "rune_source"
    },
    {
      "id": "rune_soliskin",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 397.54,
      "formula": "39.76% + 59.63% × 4 + 119.26%",
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "answerRune",
        "value": 2
      },
      "fallbackSkillId": "rune_source"
    },
    {
      "id": "true_name",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 1211.48,
      "formula": "302.87% + 908.61%",
      "requiresResource": "resource_gate_6",
      "requiresResourceFull": "period"
    },
    {
      "id": "outro_very_moment",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 795,
      "formula": "795%"
    }
  ],
  "defaultSkillId": "true_name",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "echoSkillDmg"
  ],
  "echoSet": 29,
  "combatStates": [
    {
      "id": "state_1",
      "kind": "status",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_blessing_aero",
      "zone": "damageBonus",
      "element": "aero",
      "value": 18,
      "scope": "team",
      "maxStacks": 6,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "sigrika_blessing"
    },
    {
      "id": "b_blessing_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 18,
      "scope": "team",
      "maxStacks": 6,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "sigrika_blessing"
    },
    {
      "id": "b_blessing_full_aero",
      "zone": "damageBonus",
      "element": "aero",
      "value": 30,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_blessing_aero",
        "stacks": 6
      }
    },
    {
      "id": "b_blessing_full_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 30,
      "scope": "self",
      "requiresBuffStacks": {
        "id": "b_blessing_echo",
        "stacks": 6
      }
    },
    {
      "id": "b_er_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "scope": "self",
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -125,
        "rate": 2,
        "min": 0,
        "cap": 50
      },
      "requiresSourceStat": {
        "stat": "energyRegen",
        "min": 125
      }
    },
    {
      "id": "b_soliskin_mult",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "rune_outburst",
        "rune_chain",
        "rune_soliskin"
      ],
      "requiresResourceAtLeast": {
        "id": "soliskinVitality",
        "value": 30
      }
    },
    {
      "id": "b_soliskin_amp",
      "zone": "amplify",
      "value": 30,
      "scope": "self",
      "skills": [
        "rune_outburst",
        "rune_chain",
        "rune_soliskin"
      ],
      "requiresResourceAtLeast": {
        "id": "soliskinVitality",
        "value": 10
      },
      "requiresResourceBelow": {
        "id": "soliskinVitality",
        "value": 30
      },
      "stackResource": "soliskinVitality",
      "stackResourceStep": 10,
      "maxStacks": 2,
      "defaultStacks": 0
    },
    {
      "id": "b_innate_gift",
      "zone": "amplify",
      "value": 60,
      "scope": "self",
      "skills": [
        "rune_outburst",
        "rune_chain",
        "rune_soliskin",
        "true_name"
      ],
      "maxStacks": 2,
      "stackMaxBySeq": [
        {
          "seq": 3,
          "max": 4
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "sigrika_innate_gift"
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_mult",
          "zone": "skillMultBonus",
          "value": 70,
          "scope": "self",
          "skills": [
            "enlightened_basic",
            "decipher_dodge",
            "skill_big_boom",
            "skill_soliskin"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_true_name",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "true_name"
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
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_liberation",
          "zone": "skillMultBonus",
          "value": 30,
          "scope": "self",
          "skills": [
            "liberation"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_vuln",
          "zone": "vulnerability",
          "value": 30,
          "scope": "self"
        },
        {
          "id": "k6_gift_amp",
          "zone": "amplify",
          "value": 60,
          "scope": "self",
          "skills": [
            "rune_outburst",
            "rune_chain",
            "rune_soliskin",
            "true_name"
          ],
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "sigrika_innate_gift"
        },
        {
          "id": "k6_gift_def",
          "zone": "defIgnore",
          "value": 30,
          "scope": "self",
          "skills": [
            "rune_outburst",
            "rune_chain",
            "rune_soliskin",
            "true_name"
          ],
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "sigrika_innate_gift"
        }
      ]
    }
  ],
  "modes": null
});
