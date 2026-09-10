WUWA.register({
  "id": "danjin",
  "aliases": [],
  "debut": 1,
  "element": "havoc",
  "weaponType": 2,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "commando_of_conviction",
  "portrait": "",
  "base": {
    "hp": 9437,
    "attack": 262,
    "defense": 1148,
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
      "id": "rubyBlossom",
      "max": 120,
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
      "multiplier": 57.26,
      "formula": "57.26%",
      "multiplierByLevel": [28.8,31.17,33.53,36.83,39.2,41.91,45.69,49.47,53.25,57.26]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 58.85,
      "formula": "58.85%",
      "multiplierByLevel": [29.6,32.03,34.46,37.86,40.28,43.08,46.96,50.84,54.73,58.85]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%",
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 111.36,
      "formula": "37.12% × 3",
      "multiplierByLevel": [56.01,60.6,65.19,71.64,76.23,81.51,88.86,96.18,103.53,111.36],
      "segmentsByLevel": [[[18.67,3]],[[20.2,3]],[[21.73,3]],[[23.88,3]],[[25.41,3]],[[27.17,3]],[[29.62,3]],[[32.06,3]],[[34.51,3]],[[37.12,3]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "multiplierByLevel": [49.6,53.67,57.74,63.43,67.5,72.18,78.69,85.19,91.7,98.61]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 190.86,
      "formula": "63.62% × 3",
      "multiplierByLevel": [96,103.89,111.75,122.79,130.65,139.71,152.31,164.88,177.48,190.86],
      "segmentsByLevel": [[[32,3]],[[34.63,3]],[[37.25,3]],[[40.93,3]],[[43.55,3]],[[46.57,3]],[[50.77,3]],[[54.96,3]],[[59.16,3]],[[63.62,3]]]
    },
    {
      "id": "skill_carmine_gleam",
      "legacyIds": [
        "a7"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 76.36,
      "formula": "38.18% × 2",
      "multiplierByLevel": [38.4,41.56,44.7,49.12,52.26,55.88,60.92,65.96,71,76.36],
      "segmentsByLevel": [[[19.2,2]],[[20.78,2]],[[22.35,2]],[[24.56,2]],[[26.13,2]],[[27.94,2]],[[30.46,2]],[[32.98,2]],[[35.5,2]],[[38.18,2]]]
    },
    {
      "id": "skill_crimson_erosion_1",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 128.84,
      "formula": "64.42% × 2",
      "multiplierByLevel": [64.8,70.12,75.44,82.88,88.18,94.3,102.8,111.3,119.8,128.84],
      "segmentsByLevel": [[[32.4,2]],[[35.06,2]],[[37.72,2]],[[41.44,2]],[[44.09,2]],[[47.15,2]],[[51.4,2]],[[55.65,2]],[[59.9,2]],[[64.42,2]]]
    },
    {
      "id": "skill_crimson_erosion_2",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 119.3,
      "formula": "59.65% × 2",
      "multiplierByLevel": [60,64.92,69.84,76.74,81.66,87.32,95.18,103.06,110.94,119.3],
      "segmentsByLevel": [[[30,2]],[[32.46,2]],[[34.92,2]],[[38.37,2]],[[40.83,2]],[[43.66,2]],[[47.59,2]],[[51.53,2]],[[55.47,2]],[[59.65,2]]]
    },
    {
      "id": "skill_sanguine_pulse_1",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 112.14,
      "formula": "56.07% × 2",
      "multiplierByLevel": [56.4,61.04,65.66,72.14,76.76,82.08,89.48,96.88,104.28,112.14],
      "segmentsByLevel": [[[28.2,2]],[[30.52,2]],[[32.83,2]],[[36.07,2]],[[38.38,2]],[[41.04,2]],[[44.74,2]],[[48.44,2]],[[52.14,2]],[[56.07,2]]]
    },
    {
      "id": "skill_sanguine_pulse_2",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 128.85,
      "formula": "42.95% × 3",
      "multiplierByLevel": [64.8,70.14,75.45,82.89,88.2,94.32,102.81,111.3,119.82,128.85],
      "segmentsByLevel": [[[21.6,3]],[[23.38,3]],[[25.15,3]],[[27.63,3]],[[29.4,3]],[[31.44,3]],[[34.27,3]],[[37.1,3]],[[39.94,3]],[[42.95,3]]]
    },
    {
      "id": "skill_sanguine_pulse_3",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 193.26,
      "formula": "64.42% × 3",
      "multiplierByLevel": [97.2,105.18,113.16,124.32,132.27,141.45,154.2,166.95,179.7,193.26],
      "segmentsByLevel": [[[32.4,3]],[[35.06,3]],[[37.72,3]],[[41.44,3]],[[44.09,3]],[[47.15,3]],[[51.4,3]],[[55.65,3]],[[59.9,3]],[[64.42,3]]]
    },
    {
      "id": "lib_consecutive",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 392.72,
      "formula": "49.09% × 8",
      "multiplierByLevel": [197.52,213.76,229.92,252.64,268.8,287.44,313.36,339.28,365.12,392.72],
      "segmentsByLevel": [[[24.69,8]],[[26.72,8]],[[28.74,8]],[[31.58,8]],[[33.6,8]],[[35.93,8]],[[39.17,8]],[[42.41,8]],[[45.64,8]],[[49.09,8]]]
    },
    {
      "id": "lib_scarlet_burst",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 392.65,
      "formula": "392.65%",
      "multiplierByLevel": [197.5,213.7,229.89,252.57,268.76,287.39,313.3,339.21,365.12,392.65]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a15"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.84,
      "formula": "49.71% × 4",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.52,158.64,171.76,184.88,198.84],
      "segmentsByLevel": [[[25,4]],[[27.05,4]],[[29.1,4]],[[31.97,4]],[[34.02,4]],[[36.38,4]],[[39.66,4]],[[42.94,4]],[[46.22,4]],[[49.71,4]]]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 417.55,
      "formula": "59.65% × 7",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "rubyBlossom",
        "value": 60
      },
      "fallbackSkillId": "heavy",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [210,227.22,244.44,268.59,285.81,305.62,333.13,360.71,388.29,417.55],
      "segmentsByLevel": [[[30,7]],[[32.46,7]],[[34.92,7]],[[38.37,7]],[[40.83,7]],[[43.66,7]],[[47.59,7]],[[51.53,7]],[[55.47,7]],[[59.65,7]]]
    },
    {
      "id": "heavy_3",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 178.93,
      "formula": "178.93%",
      "requiresResource": "resource_gate_2",
      "multiplierByLevel": [90,97.38,104.76,115.1,122.48,130.96,142.77,154.58,166.39,178.93]
    },
    {
      "id": "heavy_4",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 1002.05,
      "formula": "143.15% × 7",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "rubyBlossom",
        "value": 120
      },
      "fallbackSkillId": "heavy_2",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [504,545.37,586.67,644.56,685.86,733.39,799.54,865.62,931.77,1002.05],
      "segmentsByLevel": [[[72,7]],[[77.91,7]],[[83.81,7]],[[92.08,7]],[[97.98,7]],[[104.77,7]],[[114.22,7]],[[123.66,7]],[[133.11,7]],[[143.15,7]]]
    },
    {
      "id": "heavy_5",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 429.43,
      "formula": "429.43%",
      "requiresResource": "resource_gate_4",
      "fallbackSkillId": "heavy_3",
      "multiplierByLevel": [216,233.72,251.43,276.23,293.94,314.31,342.65,370.98,399.32,429.43]
    }
  ],
  "defaultSkillId": "heavy_4",
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
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "requiresState": "target_1_option_1"
    },
    {
      "id": "b2",
      "zone": "typeBonus",
      "damageType": "heavy",
      "value": 30,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "skill_sanguine_pulse_3"
      ],
      "duration": 5
    },
    {
      "id": "b3",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "skills": [
        "skill_crimson_erosion_1",
        "skill_crimson_erosion_2"
      ],
      "defaultActive": false
    },
    {
      "id": "b4",
      "zone": "amplify",
      "element": "havoc",
      "value": 23,
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
          "zone": "attackPercent",
          "value": 30,
          "scope": "self",
          "maxStacks": 6,
          "defaultStacks": 0,
          "defaultActive": false,
          "requiresState": "target_1_option_1",
          "duration": 6
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "amplify",
          "value": 20,
          "scope": "self",
          "requiresState": "target_1_option_1"
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 30,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "heavy_2",
            "heavy_3",
            "heavy_4",
            "heavy_5"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5a",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 15,
          "scope": "self"
        },
        {
          "id": "k5b",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 15,
          "scope": "self",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "heavy_2",
            "heavy_3",
            "heavy_4",
            "heavy_5"
          ],
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
