WUWA.register({
  "id": "roccia",
  "aliases": [],
  "debut": 2,
  "element": "havoc",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "tragicomedy",
  "portrait": "",
  "base": {
    "hp": 12250,
    "attack": 375,
    "defense": 1197,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "imagination",
      "max": 300,
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
      "multiplier": 73.18,
      "formula": "73.18%",
      "multiplierByLevel": [36.81,39.83,42.85,47.07,50.09,53.56,58.39,63.22,68.05,73.18]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 114.42,
      "formula": "38.14% × 3",
      "multiplierByLevel": [57.57,62.28,66.99,73.59,78.33,83.76,91.29,98.85,106.41,114.42],
      "segmentsByLevel": [[[19.19,3]],[[20.76,3]],[[22.33,3]],[[24.53,3]],[[26.11,3]],[[27.92,3]],[[30.43,3]],[[32.95,3]],[[35.47,3]],[[38.14,3]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169,
      "formula": "33.80% × 2 + 101.40%",
      "multiplierByLevel": [85,91.99,98.95,108.7,115.69,123.7,134.85,146,157.15,169],
      "segmentsByLevel": [[[17,2],[51,1]],[[18.4,2],[55.19,1]],[[19.79,2],[59.37,1]],[[21.74,2],[65.22,1]],[[23.14,2],[69.41,1]],[[24.74,2],[74.22,1]],[[26.97,2],[80.91,1]],[[29.2,2],[87.6,1]],[[31.43,2],[94.29,1]],[[33.8,2],[101.4,1]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 208.38,
      "formula": "104.19% × 2",
      "multiplierByLevel": [104.82,113.4,122,134.04,142.62,152.52,166.26,180.02,193.76,208.38],
      "segmentsByLevel": [[[52.41,2]],[[56.7,2]],[[61,2]],[[67.02,2]],[[71.31,2]],[[76.26,2]],[[83.13,2]],[[90.01,2]],[[96.88,2]],[[104.19,2]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 168.99,
      "formula": "168.99%",
      "multiplierByLevel": [85,91.97,98.94,108.7,115.67,123.69,134.84,145.99,157.14,168.99]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 206.7,
      "formula": "68.90% × 3",
      "multiplierByLevel": [103.98,112.5,121.02,132.96,141.48,151.29,164.91,178.56,192.21,206.7],
      "segmentsByLevel": [[[34.66,3]],[[37.5,3]],[[40.34,3]],[[44.32,3]],[[47.16,3]],[[50.43,3]],[[54.97,3]],[[59.52,3]],[[64.07,3]],[[68.9,3]]]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 491.76,
      "formula": "61.47% × 8",
      "multiplierByLevel": [247.36,267.68,287.92,316.32,336.56,359.92,392.4,424.8,457.28,491.76],
      "segmentsByLevel": [[[30.92,8]],[[33.46,8]],[[35.99,8]],[[39.54,8]],[[42.07,8]],[[44.99,8]],[[49.05,8]],[[53.1,8]],[[57.16,8]],[[61.47,8]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 835.02,
      "formula": "278.34% × 3",
      "multiplierByLevel": [420,454.44,488.88,537.12,571.56,611.16,666.27,721.35,776.46,835.02],
      "segmentsByLevel": [[[140,3]],[[151.48,3]],[[162.96,3]],[[179.04,3]],[[190.52,3]],[[203.72,3]],[[222.09,3]],[[240.45,3]],[[258.82,3]],[[278.34,3]]]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 168.99,
      "formula": "168.99%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [85,91.97,98.94,108.7,115.67,123.69,134.84,145.99,157.14,168.99]
    },
    {
      "id": "forte_1",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 322.08,
      "formula": "322.08%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "imagination",
        "value": 100
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [162,175.29,188.57,207.17,220.45,235.73,256.99,278.24,299.49,322.08]
    },
    {
      "id": "forte_2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 339.97,
      "formula": "339.97%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "imagination",
        "value": 100
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [171,185.03,199.05,218.68,232.7,248.83,271.26,293.7,316.13,339.97]
    },
    {
      "id": "forte_3",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "357.86%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "imagination",
        "value": 100
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [180,194.76,209.52,230.19,244.95,261.92,285.54,309.15,332.77,357.86]
    },
    {
      "id": "forte_3_2",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "357.86%",
      "seq": 6,
      "requiresResource": "resource_gate_2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [180,194.76,209.52,230.19,244.95,261.92,285.54,309.15,332.77,357.86]
    },
    {
      "id": "magic_box",
      "category": "echoSkill",
      "damageType": "echoSkill",
      "element": "havoc",
      "multiplier": 0,
      "formula": "100",
      "fixedDamage": 100,
      "requiresResource": "magic_box_ready",
      "defaultResourceActive": false,
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_1",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 6,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_actor_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "heavy"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "duration": 12
    },
    {
      "id": "b_lib_atk",
      "zone": "attackFlat",
      "scope": "team",
      "defaultActive": false,
      "triggerSkills": [
        "lib"
      ],
      "duration": 30,
      "scaleBy": {
        "stat": "critRate",
        "statBonus": -50,
        "rate": 10,
        "min": 0,
        "cap": 200
      }
    },
    {
      "id": "b_outro_havoc",
      "zone": "amplify",
      "element": "havoc",
      "value": 20,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_basic",
      "zone": "amplify",
      "damageType": "basic",
      "value": 25,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
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
          "id": "k2_stack",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 30,
          "scope": "team",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "forte_1",
            "forte_2",
            "forte_3"
          ],
          "triggerStacks": 1,
          "duration": 30
        },
        {
          "id": "k2_full",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 10,
          "scope": "team",
          "requiresBuffStacks": {
            "id": "k2_stack",
            "stacks": 3
          },
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_cr",
          "zone": "critRate",
          "value": 10,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        },
        {
          "id": "k3_cd",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": [
            "forte_1",
            "forte_2",
            "forte_3",
            "forte_3_2"
          ],
          "defaultActive": false,
          "triggerSkills": [
            "skill"
          ],
          "duration": 12
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k5_heavy",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "heavy",
            "forte_1",
            "forte_2",
            "forte_3",
            "forte_3_2"
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
          "value": 60,
          "scope": "self",
          "skills": [
            "forte_1",
            "forte_2",
            "forte_3"
          ],
          "defaultActive": false,
          "triggerSkills": [
            "lib"
          ],
          "duration": 12
        }
      ]
    }
  ],
  "modes": null
});
