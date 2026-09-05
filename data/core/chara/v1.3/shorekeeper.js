WUWA.register({
  "id": "shorekeeper",
  "aliases": [],
  "debut": 1.3,
  "element": "spectro",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "stellar_symphony",
  "portrait": "",
  "base": {
    "hp": 16712,
    "attack": 287,
    "defense": 1099,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "hpPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "empiricalData",
      "max": 5,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 31.78,
      "formula": "31.78%",
      "multiplierByLevel": [15.99,17.3,18.61,20.45,21.76,23.26,25.36,27.46,29.55,31.78]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.72,
      "formula": "23.86% × 2",
      "multiplierByLevel": [24,25.98,27.94,30.7,32.66,34.94,38.08,41.22,44.38,47.72],
      "segmentsByLevel": [[[12,2]],[[12.99,2]],[[13.97,2]],[[15.35,2]],[[16.33,2]],[[17.47,2]],[[19.04,2]],[[20.61,2]],[[22.19,2]],[[23.86,2]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.96,
      "formula": "23.32% × 3",
      "multiplierByLevel": [35.19,38.07,40.98,45,47.88,51.21,55.83,60.45,65.07,69.96],
      "segmentsByLevel": [[[11.73,3]],[[12.69,3]],[[13.66,3]],[[15,3]],[[15.96,3]],[[17.07,3]],[[18.61,3]],[[20.15,3]],[[21.69,3]],[[23.32,3]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 72.72,
      "formula": "72.72%",
      "multiplierByLevel": [36.58,39.58,42.58,46.78,49.78,53.23,58.03,62.82,67.62,72.72]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 45.81,
      "formula": "45.81%",
      "multiplierByLevel": [23.04,24.93,26.82,29.47,31.36,33.53,36.55,39.58,42.6,45.81]
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%",
      "multiplierByLevel": [37.2,40.26,43.31,47.58,50.63,54.13,59.02,63.9,68.78,73.96]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 174.96,
      "formula": "87.48% × 2",
      "multiplierByLevel": [88,95.22,102.44,112.54,119.76,128.06,139.6,151.14,162.7,174.96],
      "segmentsByLevel": [[[44,2]],[[47.61,2]],[[51.22,2]],[[56.27,2]],[[59.88,2]],[[64.03,2]],[[69.8,2]],[[75.57,2]],[[81.35,2]],[[87.48,2]]]
    },
    {
      "id": "skill_dim",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 31.31,
      "formula": "31.31%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [15.75,17.04,18.33,20.14,21.43,22.91,24.98,27.05,29.11,31.31]
    },
    {
      "id": "burst_field",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 0,
      "formula": "0%",
      "triggerEvents": [
        "heal"
      ],
      "impliedStates": [
        "field_1_option_1"
      ],
      "fixedLevel": true
    },
    {
      "id": "intro_enlightenment",
      "category": "introSkill",
      "damageType": "resonanceSkill",
      "multiplier": 226.5,
      "formula": "45.30% × 5",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [113.95,123.3,132.65,145.7,155.05,165.8,180.75,195.7,210.65,226.5],
      "segmentsByLevel": [[[22.79,5]],[[24.66,5]],[[26.53,5]],[[29.14,5]],[[31.01,5]],[[33.16,5]],[[36.15,5]],[[39.14,5]],[[42.13,5]],[[45.3,5]]]
    },
    {
      "id": "intro_discernment",
      "category": "introSkill",
      "damageType": "resonanceLiberation",
      "stat": "hp",
      "multiplier": 58.92,
      "formula": "19.64% × 3",
      "triggerEvents": [
        "heal"
      ],
      "impliedStates": [
        "field_1_option_3"
      ],
      "multiplierByLevel": [29.64,32.07,34.5,37.92,40.35,43.14,47.01,50.91,54.78,58.92],
      "segmentsByLevel": [[[9.88,3]],[[10.69,3]],[[11.5,3]],[[12.64,3]],[[13.45,3]],[[14.38,3]],[[15.67,3]],[[16.97,3]],[[18.26,3]],[[19.64,3]]]
    },
    {
      "id": "forte_butterfly",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 37.29,
      "formula": "37.29%",
      "multiplierByLevel": [18.76,20.29,21.83,23.99,25.52,27.29,29.75,32.21,34.67,37.29]
    },
    {
      "id": "forte_deduction",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 94.85,
      "formula": "18.97% × 5",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "empiricalData",
        "value": 5
      },
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [47.7,51.65,55.55,61,64.95,69.45,75.7,81.95,88.2,94.85],
      "segmentsByLevel": [[[9.54,5]],[[10.33,5]],[[11.11,5]],[[12.2,5]],[[12.99,5]],[[13.89,5]],[[15.14,5]],[[16.39,5]],[[17.64,5]],[[18.97,5]]]
    },
    {
      "id": "forte_evolution",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "empiricalData",
        "value": 5
      },
      "fallbackSkillId": "plunge",
      "multiplierByLevel": [37.2,40.26,43.31,47.58,50.63,54.13,59.02,63.9,68.78,73.96]
    }
  ],
  "defaultSkillId": "intro_enlightenment",
  "validSubs": [
    "hpFlat",
    "hpPct",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 7,
  "echoLead": "7:fallacy_of_no_return",
  "combatStates": [
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        },
        {
          "value": "field_1_option_2"
        },
        {
          "value": "field_1_option_3"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_er_field",
      "zone": "energyRegen",
      "value": 10,
      "scope": "self",
      "requiresState": "field_1"
    },
    {
      "id": "b_field_cr",
      "zone": "critRate",
      "scope": "team",
      "requiresState": [
        "field_1_option_2",
        "field_1_option_3"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "rate": 0.05,
        "statBonus": 10,
        "cap": 12.5
      }
    },
    {
      "id": "b_field_cd",
      "zone": "critDamage",
      "scope": "team",
      "requiresState": "field_1_option_3",
      "scaleBy": {
        "stat": "energyRegen",
        "rate": 0.1,
        "statBonus": 10,
        "cap": 25
      }
    },
    {
      "id": "b_discernment_crit",
      "zone": "critRate",
      "value": 100,
      "scope": "self",
      "skills": [
        "intro_discernment"
      ]
    },
    {
      "id": "b_outro",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 30,
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
          "id": "k2",
          "zone": "attackPercent",
          "value": 40,
          "scope": "team",
          "requiresState": "field_1"
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
          "zone": "healingBonus",
          "value": 70,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_dim"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_mult",
          "zone": "skillMultBonus",
          "value": 42,
          "scope": "self",
          "skills": [
            "intro_discernment"
          ]
        },
        {
          "id": "k6_cd",
          "zone": "critDamage",
          "value": 500,
          "scope": "self",
          "skills": [
            "intro_discernment"
          ]
        }
      ]
    }
  ],
  "modes": null
});
