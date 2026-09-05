WUWA.register({
  "id": "camellya",
  "aliases": [],
  "debut": 1.4,
  "element": "havoc",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "red_spring",
  "portrait": "",
  "base": {
    "hp": 10325,
    "attack": 450,
    "defense": 1161,
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
      "id": "crimsonPistil",
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
      "multiplier": 62.53,
      "formula": "62.53%",
      "multiplierByLevel": [31.45,34.03,36.61,40.22,42.8,45.77,49.89,54.02,58.15,62.53]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.96,
      "formula": "46.48% × 2",
      "multiplierByLevel": [46.76,50.6,54.42,59.8,63.62,68.04,74.16,80.3,86.44,92.96],
      "segmentsByLevel": [[[23.38,2]],[[25.3,2]],[[27.21,2]],[[29.9,2]],[[31.81,2]],[[34.02,2]],[[37.08,2]],[[40.15,2]],[[43.22,2]],[[46.48,2]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 152.1,
      "formula": "50.70% × 3",
      "multiplierByLevel": [76.5,82.77,89.04,97.83,104.1,111.33,121.35,131.4,141.42,152.1],
      "segmentsByLevel": [[[25.5,3]],[[27.59,3]],[[29.68,3]],[[32.61,3]],[[34.7,3]],[[37.11,3]],[[40.45,3]],[[43.8,3]],[[47.14,3]],[[50.7,3]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 494,
      "formula": "24.70% × 20",
      "multiplierByLevel": [248.4,268.8,289.2,317.8,338.2,361.6,394.2,426.8,459.4,494],
      "segmentsByLevel": [[[12.42,20]],[[13.44,20]],[[14.46,20]],[[15.89,20]],[[16.91,20]],[[18.08,20]],[[19.71,20]],[[21.34,20]],[[22.97,20]],[[24.7,20]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 192.68,
      "formula": "48.17% × 4",
      "multiplierByLevel": [96.92,104.88,112.8,123.92,131.88,141,153.72,166.44,179.16,192.68],
      "segmentsByLevel": [[[24.23,4]],[[26.22,4]],[[28.2,4]],[[30.98,4]],[[32.97,4]],[[35.25,4]],[[38.43,4]],[[41.61,4]],[[44.79,4]],[[48.17,4]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 264.42,
      "formula": "88.14% × 3",
      "multiplierByLevel": [132.99,143.91,154.8,170.07,180.99,193.53,210.96,228.42,245.88,264.42],
      "segmentsByLevel": [[[44.33,3]],[[47.97,3]],[[51.6,3]],[[56.69,3]],[[60.33,3]],[[64.51,3]],[[70.32,3]],[[76.14,3]],[[81.96,3]],[[88.14,3]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 131.22,
      "formula": "65.61% × 2",
      "multiplierByLevel": [66,71.42,76.84,84.42,89.82,96.04,104.7,113.36,122.02,131.22],
      "segmentsByLevel": [[[33,2]],[[35.71,2]],[[38.42,2]],[[42.21,2]],[[44.91,2]],[[48.02,2]],[[52.35,2]],[[56.68,2]],[[61.01,2]],[[65.61,2]]]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 298.2,
      "formula": "99.40% × 3",
      "multiplierByLevel": [150,162.3,174.6,191.82,204.12,218.25,237.93,257.61,277.29,298.2],
      "segmentsByLevel": [[[50,3]],[[54.1,3]],[[58.2,3]],[[63.94,3]],[[68.04,3]],[[72.75,3]],[[79.31,3]],[[85.87,3]],[[92.43,3]],[[99.4,3]]]
    },
    {
      "id": "skill_crimson_blossom",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 227.24,
      "formula": "113.62% × 2",
      "multiplierByLevel": [114.3,123.68,133.06,146.18,155.54,166.32,181.32,196.32,211.32,227.24],
      "segmentsByLevel": [[[57.15,2]],[[61.84,2]],[[66.53,2]],[[73.09,2]],[[77.77,2]],[[83.16,2]],[[90.66,2]],[[98.16,2]],[[105.66,2]],[[113.62,2]]]
    },
    {
      "id": "skill_vining_waltz_1",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 96.33,
      "formula": "96.33%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [48.45,52.43,56.4,61.96,65.94,70.5,76.86,83.22,89.57,96.33]
    },
    {
      "id": "skill_vining_waltz_2",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 91.26,
      "formula": "45.63% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [45.9,49.68,53.44,58.7,62.48,66.8,72.82,78.84,84.86,91.26],
      "segmentsByLevel": [[[22.95,2]],[[24.84,2]],[[26.72,2]],[[29.35,2]],[[31.24,2]],[[33.4,2]],[[36.41,2]],[[39.42,2]],[[42.43,2]],[[45.63,2]]]
    },
    {
      "id": "skill_vining_waltz_3",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 131.7,
      "formula": "21.95% × 6",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [66.24,71.7,77.16,84.72,90.18,96.42,105.12,113.82,122.46,131.7],
      "segmentsByLevel": [[[11.04,6]],[[11.95,6]],[[12.86,6]],[[14.12,6]],[[15.03,6]],[[16.07,6]],[[17.52,6]],[[18.97,6]],[[20.41,6]],[[21.95,6]]]
    },
    {
      "id": "skill_vining_waltz_4",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 202.77,
      "formula": "67.59% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [102,110.37,118.74,130.44,138.81,148.41,161.79,175.17,188.55,202.77],
      "segmentsByLevel": [[[34,3]],[[36.79,3]],[[39.58,3]],[[43.48,3]],[[46.27,3]],[[49.47,3]],[[53.93,3]],[[58.39,3]],[[62.85,3]],[[67.59,3]]]
    },
    {
      "id": "skill_floral_ravage",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 263.05,
      "formula": "52.61% × 5",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [132.3,143.15,154,169.2,180.05,192.55,209.9,227.25,244.6,263.05],
      "segmentsByLevel": [[[26.46,5]],[[28.63,5]],[[30.8,5]],[[33.84,5]],[[36.01,5]],[[38.51,5]],[[41.98,5]],[[45.45,5]],[[48.92,5]],[[52.61,5]]]
    },
    {
      "id": "skill_vining_ronde",
      "legacyIds": [
        "a15"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 158.85,
      "formula": "52.95% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [79.92,86.46,93,102.18,108.72,116.28,126.75,137.22,147.72,158.85],
      "segmentsByLevel": [[[26.64,3]],[[28.82,3]],[[31,3]],[[34.06,3]],[[36.24,3]],[[38.76,3]],[[42.25,3]],[[45.74,3]],[[49.24,3]],[[52.95,3]]]
    },
    {
      "id": "skill_atonement",
      "legacyIds": [
        "a16"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 226.66,
      "formula": "113.33% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [114,123.36,132.7,145.8,155.14,165.9,180.84,195.8,210.76,226.66],
      "segmentsByLevel": [[[57,2]],[[61.68,2]],[[66.35,2]],[[72.9,2]],[[77.57,2]],[[82.95,2]],[[90.42,2]],[[97.9,2]],[[105.38,2]],[[113.33,2]]]
    },
    {
      "id": "skill_blazing_waltz",
      "legacyIds": [
        "a17"
      ],
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 417.05,
      "formula": "21.95% × 19",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [209.76,227.05,244.34,268.28,285.57,305.33,332.88,360.43,387.79,417.05],
      "segmentsByLevel": [[[11.04,19]],[[11.95,19]],[[12.86,19]],[[14.12,19]],[[15.03,19]],[[16.07,19]],[[17.52,19]],[[18.97,19]],[[20.41,19]],[[21.95,19]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a18"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1202.81,
      "formula": "1202.81%",
      "multiplierByLevel": [605,654.61,704.22,773.68,823.29,880.34,959.72,1039.09,1118.47,1202.81]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a19"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
    },
    {
      "id": "forte_ephemeral",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1262.45,
      "formula": "1262.45%",
      "requiresResource": "resource_gate_1",
      "triggerEvents": [
        "consumeConcerto"
      ],
      "multiplierByLevel": [635,687.07,739.14,812.04,864.11,923.99,1007.31,1090.62,1173.93,1262.45]
    },
    {
      "id": "forte_ephemeral_2",
      "legacyIds": [
        "a21"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1262.45,
      "formula": "1262.45%",
      "seq": 6,
      "requiresResource": "resource_gate_2",
      "triggerEvents": [
        "consumeConcerto"
      ],
      "multiplierByLevel": [635,687.07,739.14,812.04,864.11,923.99,1007.31,1090.62,1173.93,1262.45]
    },
    {
      "id": "outro",
      "legacyIds": [
        "a22"
      ],
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 329.24,
      "formula": "329.24%",
      "fixedLevel": true
    },
    {
      "id": "outro_bloom",
      "legacyIds": [
        "a23"
      ],
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 788.26,
      "formula": "329.24% + 459.02%",
      "requiresResource": "resource_gate_3",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_ephemeral",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 6,
  "combatStates": [
    {
      "id": "state_1",
      "kind": "form",
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
        },
        {
          "value": "state_2_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_havoc",
      "zone": "damageBonus",
      "element": "havoc",
      "value": 15,
      "scope": "self"
    },
    {
      "id": "b_basic",
      "zone": "typeBonus",
      "damageType": "basic",
      "value": 15,
      "scope": "self"
    },
    {
      "id": "b_dream_base",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "na1",
        "na2",
        "na3",
        "na4",
        "na5",
        "heavy",
        "air",
        "dodge",
        "skill_crimson_blossom",
        "skill_vining_waltz_1",
        "skill_vining_waltz_2",
        "skill_vining_waltz_3",
        "skill_vining_waltz_4",
        "skill_floral_ravage",
        "skill_vining_ronde",
        "skill_atonement",
        "skill_blazing_waltz"
      ],
      "requiresState": "state_2"
    },
    {
      "id": "b_dream_bud",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "maxStacks": 10,
      "defaultStacks": 0,
      "defaultActive": false,
      "skills": [
        "na1",
        "na2",
        "na3",
        "na4",
        "na5",
        "heavy",
        "air",
        "dodge",
        "skill_crimson_blossom",
        "skill_vining_waltz_1",
        "skill_vining_waltz_2",
        "skill_vining_waltz_3",
        "skill_vining_waltz_4",
        "skill_floral_ravage",
        "skill_vining_ronde",
        "skill_atonement",
        "skill_blazing_waltz"
      ],
      "requiresState": "state_2_option_1"
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critDamage",
          "value": 28,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 18
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "forte_ephemeral"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_burst",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "k3_atk",
          "zone": "attackPercent",
          "value": 58,
          "scope": "self",
          "requiresState": "state_2"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 25,
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
          "id": "k5_intro",
          "zone": "skillMultBonus",
          "value": 303,
          "scope": "self",
          "skills": [
            "intro"
          ]
        },
        {
          "id": "k5_outro",
          "zone": "skillMultBonus",
          "value": 68,
          "scope": "self",
          "skills": [
            "outro",
            "outro_bloom"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "skillMultBonus",
          "value": 150,
          "scope": "self",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "na5",
            "heavy",
            "air",
            "dodge",
            "skill_crimson_blossom",
            "skill_vining_waltz_1",
            "skill_vining_waltz_2",
            "skill_vining_waltz_3",
            "skill_vining_waltz_4",
            "skill_floral_ravage",
            "skill_vining_ronde",
            "skill_atonement",
            "skill_blazing_waltz"
          ],
          "requiresState": "state_2"
        },
        {
          "id": "k6_ever",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "na5",
            "heavy",
            "air",
            "dodge",
            "skill_crimson_blossom",
            "skill_vining_waltz_1",
            "skill_vining_waltz_2",
            "skill_vining_waltz_3",
            "skill_vining_waltz_4",
            "skill_floral_ravage",
            "skill_vining_ronde",
            "skill_atonement",
            "skill_blazing_waltz"
          ],
          "requiresState": "state_2_option_2"
        }
      ]
    }
  ],
  "modes": null
});
