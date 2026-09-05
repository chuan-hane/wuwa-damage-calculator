WUWA.register({
  "id": "yinlin",
  "aliases": [],
  "debut": 1,
  "element": "electro",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "stringmaster",
  "portrait": "",
  "base": {
    "hp": 11000,
    "attack": 400,
    "defense": 1283,
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
      "id": "judgmentPoints",
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
      "multiplier": 28.81,
      "formula": "28.81%",
      "multiplierByLevel": [14.49,15.68,16.87,18.53,19.72,21.09,22.99,24.89,26.79,28.81]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.64,
      "formula": "33.82% × 2",
      "multiplierByLevel": [34.02,36.82,39.6,43.52,46.3,49.52,53.98,58.44,62.9,67.64],
      "segmentsByLevel": [[[17.01,2]],[[18.41,2]],[[19.8,2]],[[21.76,2]],[[23.15,2]],[[24.76,2]],[[26.99,2]],[[29.22,2]],[[31.45,2]],[[33.82,2]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.93,
      "formula": "13.99% × 7",
      "multiplierByLevel": [49.28,53.34,57.33,63,67.06,71.68,78.12,84.63,91.07,97.93],
      "segmentsByLevel": [[[7.04,7]],[[7.62,7]],[[8.19,7]],[[9,7]],[[9.58,7]],[[10.24,7]],[[11.16,7]],[[12.09,7]],[[13.01,7]],[[13.99,7]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 75.16,
      "formula": "75.16%",
      "multiplierByLevel": [37.8,40.9,44,48.34,51.44,55.01,59.97,64.93,69.89,75.16]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 59.66,
      "formula": "29.83% × 2",
      "multiplierByLevel": [30,32.46,34.92,38.38,40.84,43.66,47.6,51.54,55.48,59.66],
      "segmentsByLevel": [[[15,2]],[[16.23,2]],[[17.46,2]],[[19.19,2]],[[20.42,2]],[[21.83,2]],[[23.8,2]],[[25.77,2]],[[27.74,2]],[[29.83,2]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%",
      "multiplierByLevel": [62,67.09,72.17,79.29,84.37,90.22,98.36,106.49,114.62,123.27]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169.54,
      "formula": "24.22% × 7",
      "multiplierByLevel": [85.26,92.26,99.26,109.06,116.06,124.04,135.24,146.44,157.64,169.54],
      "segmentsByLevel": [[[12.18,7]],[[13.18,7]],[[14.18,7]],[[15.58,7]],[[16.58,7]],[[17.72,7]],[[19.32,7]],[[20.92,7]],[[22.52,7]],[[24.22,7]]]
    },
    {
      "id": "skill_magnetic_roar",
      "legacyIds": [
        "s1"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 178.95,
      "formula": "59.65% × 3",
      "multiplierByLevel": [90,97.38,104.76,115.11,122.49,130.98,142.77,154.59,166.41,178.95],
      "segmentsByLevel": [[[30,3]],[[32.46,3]],[[34.92,3]],[[38.37,3]],[[40.83,3]],[[43.66,3]],[[47.59,3]],[[51.53,3]],[[55.47,3]],[[59.65,3]]]
    },
    {
      "id": "skill_lightning_execution",
      "legacyIds": [
        "s2"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 357.88,
      "formula": "89.47% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [180,194.76,209.52,230.2,244.96,261.92,285.56,309.16,332.8,357.88],
      "segmentsByLevel": [[[45,4]],[[48.69,4]],[[52.38,4]],[[57.55,4]],[[61.24,4]],[[65.48,4]],[[71.39,4]],[[77.29,4]],[[83.2,4]],[[89.47,4]]]
    },
    {
      "id": "skill_electromagnetic_blast",
      "legacyIds": [
        "s3"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 19.89,
      "formula": "19.89%",
      "impliedStates": [
        "state_1_option_1",
        "target_1_option_1"
      ],
      "multiplierByLevel": [10,10.82,11.64,12.79,13.61,14.56,15.87,17.18,18.49,19.89]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 815.92,
      "formula": "116.56% × 7",
      "multiplierByLevel": [410.41,444.08,477.75,524.86,558.53,597.24,651.07,704.9,758.73,815.92],
      "segmentsByLevel": [[[58.63,7]],[[63.44,7]],[[68.25,7]],[[74.98,7]],[[79.79,7]],[[85.32,7]],[[93.01,7]],[[100.7,7]],[[108.39,7]],[[116.56,7]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 143.2,
      "formula": "14.32% × 10",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [72,78,83.9,92.1,98,104.8,114.3,123.7,133.2,143.2],
      "segmentsByLevel": [[[7.2,10]],[[7.8,10]],[[8.39,10]],[[9.21,10]],[[9.8,10]],[[10.48,10]],[[11.43,10]],[[12.37,10]],[[13.32,10]],[[14.32,10]]]
    },
    {
      "id": "forte_phantom",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "178.93% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "judgmentPoints",
        "value": 100
      },
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [180,194.76,209.52,230.2,244.96,261.92,285.54,309.16,332.78,357.86],
      "segmentsByLevel": [[[90,2]],[[97.38,2]],[[104.76,2]],[[115.1,2]],[[122.48,2]],[[130.96,2]],[[142.77,2]],[[154.58,2]],[[166.39,2]],[[178.93,2]]]
    },
    {
      "id": "forte_judgment",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 78.64,
      "formula": "78.64%",
      "impliedStates": [
        "target_1_option_2"
      ],
      "multiplierByLevel": [39.56,42.8,46.05,50.59,53.83,57.56,62.75,67.94,73.13,78.64]
    },
    {
      "id": "c6_judgement_strike",
      "category": "resonanceChain",
      "damageType": "resonanceSkill",
      "multiplier": 419.59,
      "perStack": 419.59,
      "stackMax": 3,
      "formula": "419.59% × 1~4",
      "seq": 6,
      "requiresResource": "c6_liberation_window",
      "triggeredDamage": true,
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_judgment",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 3,
  "echoLead": "3:tempest_mephis",
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
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        },
        {
          "value": "target_1_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "critRate",
      "value": 15,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "duration": 5
    },
    {
      "id": "b2",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "skills": [
        "skill_lightning_execution"
      ],
      "requiresState": "target_1_option_1"
    },
    {
      "id": "b3",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "duration": 4
    },
    {
      "id": "b4",
      "zone": "amplify",
      "element": "electro",
      "value": 20,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b5",
      "zone": "amplify",
      "damageType": "resonanceLiberation",
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
      "buffs": [
        {
          "id": "k1",
          "zone": "amplify",
          "value": 70,
          "scope": "self",
          "skills": [
            "skill_magnetic_roar",
            "skill_lightning_execution"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "skillMultBonus",
          "value": 55,
          "scope": "self",
          "skills": [
            "forte_judgment"
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
          "duration": 12
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "amplify",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib"
          ],
          "requiresState": [
            "target_1_option_1",
            "target_1_option_2"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": []
    }
  ],
  "modes": null
});
