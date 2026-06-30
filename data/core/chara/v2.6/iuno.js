WUWA.register({
  "id": "iuno",
  "aliases": [],
  "debut": 2.6,
  "element": "aero",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "moongazers_sigil",
  "portrait": "",
  "base": {
    "hp": 10525,
    "attack": 450,
    "defense": 1124,
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
      "id": "spirituality",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "yh_a1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 87.68,
      "formula": "87.68%",
      "impliedStates": [
        "月相流转·弦月"
      ]
    },
    {
      "id": "yh_a2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 139.58,
      "formula": "46.06% × 2 + 47.46%",
      "impliedStates": [
        "月相流转·弦月"
      ]
    },
    {
      "id": "yh_a3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 266.61,
      "formula": "87.98% × 2 + 90.65%",
      "impliedStates": [
        "月相流转·弦月"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 107.36,
      "formula": "53.68% × 2"
    },
    {
      "id": "yh_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 248.73,
      "formula": "82.08% × 2 + 84.57%",
      "impliedStates": [
        "月相流转·弦月"
      ]
    },
    {
      "id": "yg_a1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 126.45,
      "formula": "126.45%",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_a2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 167.01,
      "formula": "55.67% × 3",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_a3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 334.02,
      "formula": "167.01% × 2",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_dodge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 310.17,
      "formula": "103.39% × 3",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "rs_chuyin",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 261.07,
      "formula": "18.65% × 7 + 130.52%"
    },
    {
      "id": "rs_gaozhong",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 426.46,
      "formula": "140.73% × 2 + 145.00%"
    },
    {
      "id": "rs_weizhong",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 426.46,
      "formula": "140.73% × 2 + 145.00%",
      "impliedStates": [
        "月相流转·弦月"
      ]
    },
    {
      "id": "rs_yuexian",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 439.58,
      "formula": "219.79% × 2",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1093.46,
      "formula": "1093.46%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 159.09,
      "formula": "15.91% × 7 + 47.72%"
    },
    {
      "id": "lb_yg",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 250.51,
      "formula": "250.51%",
      "impliedStates": [
        "月相流转·弦月"
      ]
    },
    {
      "id": "lb_yh",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 316.72,
      "formula": "79.18% × 4",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_a1e",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 205.97,
      "formula": "205.97%",
      "requiresResource": "灵性",
      "fallbackSkillId": "yg_a1",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_a2e",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 286.29,
      "formula": "95.43% × 3",
      "requiresResource": "灵性",
      "fallbackSkillId": "yg_a2",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_a3e",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 532.82,
      "formula": "266.41% × 2",
      "requiresResource": "灵性",
      "fallbackSkillId": "yg_a3",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "yg_dodgee",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 469.2,
      "formula": "156.40% × 3",
      "requiresResource": "灵性",
      "fallbackSkillId": "yg_dodge",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "rs_yuexiane",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 638.38,
      "formula": "319.19% × 2",
      "requiresResource": "灵性",
      "fallbackSkillId": "rs_yuexian",
      "impliedStates": [
        "月相流转·新月"
      ]
    },
    {
      "id": "zhizhen",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 159.05,
      "formula": "159.05%"
    }
  ],
  "defaultSkillId": "rs_yuexiane",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 20,
  "echoSet2": 4,
  "skillEvents": [
    "shield"
  ],
  "combatStates": [
    {
      "id": "月相流转",
      "kind": "mode",
      "options": [
        {
          "value": "月相流转·弦月"
        },
        {
          "value": "月相流转·新月"
        }
      ]
    },
    {
      "id": "满月领域",
      "kind": "field",
      "options": [
        {
          "value": "满月领域"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "amplify",
      "damageType": "heavy",
      "value": 50,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b2",
      "zone": "amplify",
      "value": 40,
      "scope": "team",
      "maxStacks": 10,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerRules": [
        {
          "skills": [
            "intro",
            "burst"
          ],
          "events": [
            "introEntry"
          ],
          "stacks": 5
        },
        {
          "events": [
            "shield"
          ],
          "requiresState": "满月领域",
          "stacks": 1
        }
      ],
      "duration": 10
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "attackPercent",
          "value": 40,
          "scope": "self",
          "requiresState": "月相流转"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "amplify",
          "value": 40,
          "scope": "team",
          "requiresBuffStacks": {
            "id": "b2",
            "stacks": 10
          }
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "amplify",
          "value": 65,
          "scope": "self",
          "requiresState": "月相流转",
          "skills": [
            "yg_a1",
            "yg_a2",
            "yg_a3",
            "yg_a1e",
            "yg_a2e",
            "yg_a3e",
            "yg_dodge",
            "yg_dodgee",
            "rs_yuexian",
            "rs_yuexiane"
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
          "damageType": "resonanceLiberation",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "multAdd": 1600,
          "scope": "self",
          "skills": [
            "zhizhen"
          ]
        }
      ]
    }
  ],
  "modes": null
});
