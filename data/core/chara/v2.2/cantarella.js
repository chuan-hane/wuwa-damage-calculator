WUWA.register({
  "id": "cantarella",
  "aliases": [],
  "debut": 2.2,
  "element": "havoc",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "whispers_of_sirens",
  "portrait": "",
  "base": {
    "hp": 11600,
    "attack": 400,
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
      "id": "tremor",
      "max": 3,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%",
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.76,
      "formula": "36.44% × 4",
      "multiplierByLevel": [73.32,79.32,85.36,93.76,99.76,106.68,116.28,125.92,135.52,145.76],
      "segmentsByLevel": [[[18.33,4]],[[19.83,4]],[[21.34,4]],[[23.44,4]],[[24.94,4]],[[26.67,4]],[[29.07,4]],[[31.48,4]],[[33.88,4]],[[36.44,4]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.14,
      "formula": "72.57% × 2",
      "multiplierByLevel": [73,79,84.98,93.36,99.34,106.24,115.8,125.38,134.96,145.14],
      "segmentsByLevel": [[[36.5,2]],[[39.5,2]],[[42.49,2]],[[46.68,2]],[[49.67,2]],[[53.12,2]],[[57.9,2]],[[62.69,2]],[[67.48,2]],[[72.57,2]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 114.36,
      "formula": "57.18% × 2",
      "multiplierByLevel": [57.52,62.24,66.96,73.56,78.28,83.7,91.26,98.8,106.34,114.36],
      "segmentsByLevel": [[[28.76,2]],[[31.12,2]],[[33.48,2]],[[36.78,2]],[[39.14,2]],[[41.85,2]],[[45.63,2]],[[49.4,2]],[[53.17,2]],[[57.18,2]]]
    },
    {
      "id": "delusive_dive",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 106.1,
      "formula": "53.05% × 2",
      "multiplierByLevel": [53.36,57.74,62.12,68.24,72.62,77.66,84.66,91.66,98.66,106.1],
      "segmentsByLevel": [[[26.68,2]],[[28.87,2]],[[31.06,2]],[[34.12,2]],[[36.31,2]],[[38.83,2]],[[42.33,2]],[[45.83,2]],[[49.33,2]],[[53.05,2]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "41.99% + 62.99%",
      "multiplierByLevel": [52.8,57.14,61.47,67.53,71.87,76.84,83.77,90.7,97.62,104.98],
      "segmentsByLevel": [[[21.12,1],[31.68,1]],[[22.86,1],[34.28,1]],[[24.59,1],[36.88,1]],[[27.01,1],[40.52,1]],[[28.75,1],[43.12,1]],[[30.74,1],[46.1,1]],[[33.51,1],[50.26,1]],[[36.28,1],[54.42,1]],[[39.05,1],[58.57,1]],[[41.99,1],[62.99,1]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 212.04,
      "formula": "53.01% × 4",
      "multiplierByLevel": [106.64,115.4,124.16,136.4,145.12,155.2,169.2,183.16,197.16,212.04],
      "segmentsByLevel": [[[26.66,4]],[[28.85,4]],[[31.04,4]],[[34.1,4]],[[36.28,4]],[[38.8,4]],[[42.3,4]],[[45.79,4]],[[49.29,4]],[[53.01,4]]]
    },
    {
      "id": "skill_graceful",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 147.2,
      "formula": "73.60% × 2",
      "multiplierByLevel": [74.04,80.12,86.2,94.7,100.76,107.74,117.46,127.18,136.88,147.2],
      "segmentsByLevel": [[[37.02,2]],[[40.06,2]],[[43.1,2]],[[47.35,2]],[[50.38,2]],[[53.87,2]],[[58.73,2]],[[63.59,2]],[[68.44,2]],[[73.6,2]]]
    },
    {
      "id": "skill_reverie",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 196.23,
      "formula": "196.23%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [98.7,106.8,114.89,126.22,134.32,143.62,156.57,169.52,182.47,196.23]
    },
    {
      "id": "skill_jolt",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 198.81,
      "formula": "198.81%",
      "impliedStates": [
        "target_1_option_1"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
    },
    {
      "id": "lib_suffocation",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 376,
      "formula": "376.00%",
      "multiplierByLevel": [189.13,204.64,220.15,241.86,257.37,275.2,300.01,324.83,349.64,376]
    },
    {
      "id": "lib_diffusion",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 305.34,
      "formula": "14.54% × 21",
      "multiplierByLevel": [153.51,166.11,178.71,196.35,208.95,223.44,243.6,263.76,283.92,305.34],
      "segmentsByLevel": [[[7.31,21]],[[7.91,21]],[[8.51,21]],[[9.35,21]],[[9.95,21]],[[10.64,21]],[[11.6,21]],[[12.56,21]],[[13.52,21]],[[14.54,21]]]
    },
    {
      "id": "intro_ripple",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 169,
      "formula": "42.25% × 4",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [85,92,98.96,108.72,115.68,123.72,134.84,146,157.16,169],
      "segmentsByLevel": [[[21.25,4]],[[23,4]],[[24.74,4]],[[27.18,4]],[[28.92,4]],[[30.93,4]],[[33.71,4]],[[36.5,4]],[[39.29,4]],[[42.25,4]]]
    },
    {
      "id": "intro_tidal",
      "category": "introSkill",
      "damageType": "introSkill",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 169,
      "formula": "16.90% × 3 + 118.30%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [85,91.98,98.96,108.7,115.68,123.69,134.86,146,157.16,169],
      "segmentsByLevel": [[[8.5,3],[59.5,1]],[[9.2,3],[64.38,1]],[[9.9,3],[69.26,1]],[[10.87,3],[76.09,1]],[[11.57,3],[80.97,1]],[[12.37,3],[86.58,1]],[[13.49,3],[94.39,1]],[[14.6,3],[102.2,1]],[[15.72,3],[110,1]],[[16.9,3],[118.3,1]]]
    },
    {
      "id": "phantom_1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 105.99,
      "formula": "35.33% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [53.31,57.69,62.07,68.19,72.54,77.58,84.57,91.56,98.55,105.99],
      "segmentsByLevel": [[[17.77,3]],[[19.23,3]],[[20.69,3]],[[22.73,3]],[[24.18,3]],[[25.86,3]],[[28.19,3]],[[30.52,3]],[[32.85,3]],[[35.33,3]]]
    },
    {
      "id": "phantom_2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 125.86,
      "formula": "62.93% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [63.3,68.5,73.7,80.96,86.14,92.12,100.42,108.72,117.04,125.86],
      "segmentsByLevel": [[[31.65,2]],[[34.25,2]],[[36.85,2]],[[40.48,2]],[[43.07,2]],[[46.06,2]],[[50.21,2]],[[54.36,2]],[[58.52,2]],[[62.93,2]]]
    },
    {
      "id": "phantom_3",
      "category": "forteCircuit",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 258.48,
      "formula": "64.62% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [130,140.68,151.32,166.28,176.92,189.2,206.24,223.28,240.36,258.48],
      "segmentsByLevel": [[[32.5,4]],[[35.17,4]],[[37.83,4]],[[41.57,4]],[[44.23,4]],[[47.3,4]],[[51.56,4]],[[55.82,4]],[[60.09,4]],[[64.62,4]]]
    },
    {
      "id": "vortex",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "41.99% + 62.99%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [52.8,57.14,61.47,67.53,71.87,76.84,83.77,90.7,97.62,104.98],
      "segmentsByLevel": [[[21.12,1],[31.68,1]],[[22.86,1],[34.28,1]],[[24.59,1],[36.88,1]],[[27.01,1],[40.52,1]],[[28.75,1],[43.12,1]],[[30.74,1],[46.1,1]],[[33.51,1],[50.26,1]],[[36.28,1],[54.42,1]],[[39.05,1],[58.57,1]],[[41.99,1],[62.99,1]]]
    },
    {
      "id": "perception_drain",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1335.98,
      "formula": "667.99% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "tremor",
        "value": 3
      },
      "fallbackSkillId": "skill_reverie",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [672,727.1,782.2,859.34,914.44,977.82,1065.98,1154.14,1242.3,1335.98],
      "segmentsByLevel": [[[336,2]],[[363.55,2]],[[391.1,2]],[[429.67,2]],[[457.22,2]],[[488.91,2]],[[532.99,2]],[[577.07,2]],[[621.15,2]],[[667.99,2]]]
    },
    {
      "id": "shadowy_sweep",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 225.27,
      "formula": "75.09% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [113.31,122.61,131.91,144.9,154.2,164.88,179.73,194.61,209.46,225.27],
      "segmentsByLevel": [[[37.77,3]],[[40.87,3]],[[43.97,3]],[[48.3,3]],[[51.4,3]],[[54.96,3]],[[59.91,3]],[[64.87,3]],[[69.82,3]],[[75.09,3]]]
    }
  ],
  "defaultSkillId": "perception_drain",
  "echoSet": 13,
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
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
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_cure",
      "zone": "healingBonus",
      "value": 20,
      "scope": "self"
    },
    {
      "id": "b_poison",
      "zone": "damageBonus",
      "element": "havoc",
      "value": 12,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerEvents": [
        "castEchoSkill"
      ],
      "triggerStacks": 1,
      "duration": 10
    },
    {
      "id": "outro_havoc",
      "zone": "amplify",
      "element": "havoc",
      "value": 20,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "outro_skill",
      "zone": "amplify",
      "damageType": "resonanceSkill",
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
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "skill_graceful",
            "skill_reverie",
            "perception_drain"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "skillMultBonus",
          "value": 245,
          "scope": "self",
          "skills": [
            "skill_jolt"
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
          "value": 370,
          "scope": "self",
          "skills": [
            "lib_suffocation"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "healingBonus",
          "value": 25,
          "scope": "self",
          "requiresState": "state_1_option_1"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 23.81,
          "scope": "self",
          "skills": [
            "lib_diffusion"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_phantom",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "phantom_1",
            "phantom_2",
            "phantom_3"
          ]
        },
        {
          "id": "k6_def",
          "zone": "defIgnore",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "lib_suffocation"
          ],
          "duration": 10
        }
      ]
    }
  ],
  "modes": null
});
