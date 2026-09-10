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
      "formula": "50.53%",
      "multiplierByLevel": [25.42,27.5,29.59,32.51,34.59,36.99,40.32,43.66,46.99,50.53]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "50.70% + 50.70%",
      "multiplierByLevel": [51,55.2,59.38,65.22,69.42,74.22,80.92,87.6,94.3,101.4],
      "segmentsByLevel": [[[25.5,1],[25.5,1]],[[27.6,1],[27.6,1]],[[29.69,1],[29.69,1]],[[32.61,1],[32.61,1]],[[34.71,1],[34.71,1]],[[37.11,1],[37.11,1]],[[40.46,1],[40.46,1]],[[43.8,1],[43.8,1]],[[47.15,1],[47.15,1]],[[50.7,1],[50.7,1]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.34,
      "formula": "22.06% × 3 + 33.08% × 2",
      "multiplierByLevel": [66.58,72.05,77.5,85.13,90.6,96.89,105.6,114.34,123.07,132.34],
      "segmentsByLevel": [[[11.1,3],[16.64,2]],[[12.01,3],[18.01,2]],[[12.92,3],[19.37,2]],[[14.19,3],[21.28,2]],[[15.1,3],[22.65,2]],[[16.15,3],[24.22,2]],[[17.6,3],[26.4,2]],[[19.06,3],[28.58,2]],[[20.51,3],[30.77,2]],[[22.06,3],[33.08,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 140.12,
      "formula": "28.02% + 22.42% × 5",
      "multiplierByLevel": [70.5,76.25,82.06,90.13,95.93,102.56,111.81,121.06,130.31,140.12],
      "segmentsByLevel": [[[14.1,1],[11.28,5]],[[15.25,1],[12.2,5]],[[16.41,1],[13.13,5]],[[18.03,1],[14.42,5]],[[19.18,1],[15.35,5]],[[20.51,1],[16.41,5]],[[22.36,1],[17.89,5]],[[24.21,1],[19.37,5]],[[26.06,1],[20.85,5]],[[28.02,1],[22.42,5]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 197.55,
      "formula": "197.55%",
      "multiplierByLevel": [99.37,107.52,115.67,127.07,135.22,144.59,157.63,170.66,183.7,197.55]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 168.99,
      "formula": "168.99%",
      "multiplierByLevel": [85,91.97,98.94,108.7,115.67,123.69,134.84,145.99,157.14,168.99]
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 122.86,
      "formula": "122.86%",
      "multiplierByLevel": [61.8,66.87,71.93,79.03,84.1,89.92,98.03,106.14,114.25,122.86]
    },
    {
      "id": "na1_3",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 332.48,
      "formula": "33.25% + 49.87% + 41.56% × 6",
      "multiplierByLevel": [167.2,180.96,194.65,213.85,227.53,243.35,265.28,287.2,309.12,332.48],
      "segmentsByLevel": [[[16.72,1],[25.08,1],[20.9,6]],[[18.1,1],[27.14,1],[22.62,6]],[[19.47,1],[29.2,1],[24.33,6]],[[21.39,1],[32.08,1],[26.73,6]],[[22.76,1],[34.13,1],[28.44,6]],[[24.33,1],[36.5,1],[30.42,6]],[[26.53,1],[39.79,1],[33.16,6]],[[28.72,1],[43.08,1],[35.9,6]],[[30.91,1],[46.37,1],[38.64,6]],[[33.25,1],[49.87,1],[41.56,6]]]
    },
    {
      "id": "na1_4",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.95,
      "formula": "33.80% + 59.15%",
      "multiplierByLevel": [46.75,50.59,54.42,59.79,63.63,68.03,74.17,80.3,86.43,92.95],
      "segmentsByLevel": [[[17,1],[29.75,1]],[[18.4,1],[32.19,1]],[[19.79,1],[34.63,1]],[[21.74,1],[38.05,1]],[[23.14,1],[40.49,1]],[[24.74,1],[43.29,1]],[[26.97,1],[47.2,1]],[[29.2,1],[51.1,1]],[[31.43,1],[55,1]],[[33.8,1],[59.15,1]]]
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a10"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169.84,
      "formula": "84.92% + 84.92%",
      "multiplierByLevel": [85.44,92.44,99.44,109.26,116.26,124.32,135.52,146.72,157.94,169.84],
      "segmentsByLevel": [[[42.72,1],[42.72,1]],[[46.22,1],[46.22,1]],[[49.72,1],[49.72,1]],[[54.63,1],[54.63,1]],[[58.13,1],[58.13,1]],[[62.16,1],[62.16,1]],[[67.76,1],[67.76,1]],[[73.36,1],[73.36,1]],[[78.97,1],[78.97,1]],[[84.92,1],[84.92,1]]]
    },
    {
      "id": "na2_3",
      "legacyIds": [
        "a11"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 197.22,
      "formula": "32.87% × 6",
      "multiplierByLevel": [99.24,107.34,115.5,126.9,135,144.36,157.38,170.4,183.42,197.22],
      "segmentsByLevel": [[[16.54,6]],[[17.89,6]],[[19.25,6]],[[21.15,6]],[[22.5,6]],[[24.06,6]],[[26.23,6]],[[28.4,6]],[[30.57,6]],[[32.87,6]]]
    },
    {
      "id": "na2_4",
      "legacyIds": [
        "a12"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.95,
      "formula": "33.80% + 59.15%",
      "multiplierByLevel": [46.75,50.59,54.42,59.79,63.63,68.03,74.17,80.3,86.43,92.95],
      "segmentsByLevel": [[[17,1],[29.75,1]],[[18.4,1],[32.19,1]],[[19.79,1],[34.63,1]],[[21.74,1],[38.05,1]],[[23.14,1],[40.49,1]],[[24.74,1],[43.29,1]],[[26.97,1],[47.2,1]],[[29.2,1],[51.1,1]],[[31.43,1],[55,1]],[[33.8,1],[59.15,1]]]
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a13"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 169.02,
      "formula": "28.17% × 6",
      "multiplierByLevel": [85.02,91.98,98.94,108.72,115.68,123.72,134.88,146.04,157.14,169.02],
      "segmentsByLevel": [[[14.17,6]],[[15.33,6]],[[16.49,6]],[[18.12,6]],[[19.28,6]],[[20.62,6]],[[22.48,6]],[[24.34,6]],[[26.19,6]],[[28.17,6]]]
    },
    {
      "id": "na3_3",
      "legacyIds": [
        "a14"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.95,
      "formula": "33.80% + 59.15%",
      "multiplierByLevel": [46.75,50.59,54.42,59.79,63.63,68.03,74.17,80.3,86.43,92.95],
      "segmentsByLevel": [[[17,1],[29.75,1]],[[18.4,1],[32.19,1]],[[19.79,1],[34.63,1]],[[21.74,1],[38.05,1]],[[23.14,1],[40.49,1]],[[24.74,1],[43.29,1]],[[26.97,1],[47.2,1]],[[29.2,1],[51.1,1]],[[31.43,1],[55,1]],[[33.8,1],[59.15,1]]]
    },
    {
      "id": "na4_2",
      "legacyIds": [
        "a15"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 253.85,
      "formula": "101.53% + 25.39% × 3 + 76.15%",
      "multiplierByLevel": [127.69,138.17,148.65,163.28,173.77,185.79,202.55,219.29,236.05,253.85],
      "segmentsByLevel": [[[51.07,1],[12.77,3],[38.31,1]],[[55.26,1],[13.82,3],[41.45,1]],[[59.45,1],[14.87,3],[44.59,1]],[[65.31,1],[16.33,3],[48.98,1]],[[69.5,1],[17.38,3],[52.13,1]],[[74.31,1],[18.58,3],[55.74,1]],[[81.01,1],[20.26,3],[60.76,1]],[[87.71,1],[21.93,3],[65.79,1]],[[94.41,1],[23.61,3],[70.81,1]],[[101.53,1],[25.39,3],[76.15,1]]]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a16"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 228.17,
      "formula": "38.03% × 3 + 57.04% × 2",
      "multiplierByLevel": [114.77,124.18,133.61,146.76,156.17,166.99,182.04,197.11,212.16,228.17],
      "segmentsByLevel": [[[19.13,3],[28.69,2]],[[20.7,3],[31.04,2]],[[22.27,3],[33.4,2]],[[24.46,3],[36.69,2]],[[26.03,3],[39.04,2]],[[27.83,3],[41.75,2]],[[30.34,3],[45.51,2]],[[32.85,3],[49.28,2]],[[35.36,3],[53.04,2]],[[38.03,3],[57.04,2]]]
    },
    {
      "id": "na1_5",
      "legacyIds": [
        "a17"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.51,
      "formula": "28.17% × 3",
      "multiplierByLevel": [42.51,45.99,49.47,54.36,57.84,61.86,67.44,73.02,78.57,84.51],
      "segmentsByLevel": [[[14.17,3]],[[15.33,3]],[[16.49,3]],[[18.12,3]],[[19.28,3]],[[20.62,3]],[[22.48,3]],[[24.34,3]],[[26.19,3]],[[28.17,3]]]
    },
    {
      "id": "skill_anchor",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 333.92,
      "formula": "200.35% + 133.57%",
      "multiplierByLevel": [167.95,181.73,195.5,214.78,228.55,244.4,266.43,288.47,310.5,333.92],
      "segmentsByLevel": [[[100.77,1],[67.18,1]],[[109.04,1],[72.69,1]],[[117.3,1],[78.2,1]],[[128.87,1],[85.91,1]],[[137.13,1],[91.42,1]],[[146.64,1],[97.76,1]],[[159.86,1],[106.57,1]],[[173.08,1],[115.39,1]],[[186.3,1],[124.2,1]],[[200.35,1],[133.57,1]]]
    },
    {
      "id": "skill_plunge",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 680.45,
      "formula": "85.06% × 4 + 340.21%",
      "multiplierByLevel": [342.24,370.32,398.39,437.67,465.75,498,542.93,587.82,632.71,680.45],
      "segmentsByLevel": [[[42.78,4],[171.12,1]],[[46.29,4],[185.16,1]],[[49.8,4],[199.19,1]],[[54.71,4],[218.83,1]],[[58.22,4],[232.87,1]],[[62.25,4],[249,1]],[[67.87,4],[271.45,1]],[[73.48,4],[293.9,1]],[[79.09,4],[316.35,1]],[[85.06,4],[340.21,1]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 253.49,
      "formula": "202.79% + 50.70%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [127.5,137.97,148.42,163.05,173.52,185.54,202.27,218.99,235.72,253.49],
      "segmentsByLevel": [[[102,1],[25.5,1]],[[110.37,1],[27.6,1]],[[118.73,1],[29.69,1]],[[130.44,1],[32.61,1]],[[138.81,1],[34.71,1]],[[148.43,1],[37.11,1]],[[161.81,1],[40.46,1]],[[175.19,1],[43.8,1]],[[188.57,1],[47.15,1]],[[202.79,1],[50.7,1]]]
    },
    {
      "id": "forte_returned",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1888.71,
      "formula": "47.22% × 2 + 94.44% + 188.87% × 2 + 1322.09%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "applause",
      "fallbackSkillId": "skill_anchor",
      "triggerEvents": [
        "castResonanceSkill",
        "shield"
      ],
      "multiplierByLevel": [950,1027.91,1105.81,1214.9,1292.78,1382.37,1507,1631.67,1756.29,1888.71],
      "segmentsByLevel": [[[23.75,2],[47.5,1],[95,2],[665,1]],[[25.7,2],[51.4,1],[102.79,2],[719.53,1]],[[27.65,2],[55.29,1],[110.58,2],[774.06,1]],[[30.38,2],[60.75,1],[121.49,2],[850.41,1]],[[32.32,2],[64.64,1],[129.28,2],[904.94,1]],[[34.56,2],[69.12,1],[138.24,2],[967.65,1]],[[37.68,2],[75.35,1],[150.7,2],[1054.89,1]],[[40.8,2],[81.59,1],[163.17,2],[1142.14,1]],[[43.91,2],[87.82,1],[175.63,2],[1229.39,1]],[[47.22,2],[94.44,1],[188.87,2],[1322.09,1]]]
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
      "requiresResource": "resource_gate_2",
      "fixedLevel": true
    },
    {
      "id": "rekindle",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 566.61,
      "formula": "火焰归亡曲 × 30%",
      "seq": 6,
      "requiresResource": "resource_gate_3",
      "multiplierByLevel": [285,308.37,331.74,364.47,387.83,414.71,452.1,489.5,526.89,566.61],
      "segmentsByLevel": [[[7.13,2],[14.25,1],[28.5,2],[199.5,1]],[[7.71,2],[15.42,1],[30.84,2],[215.86,1]],[[8.3,2],[16.59,1],[33.17,2],[232.22,1]],[[9.11,2],[18.22,1],[36.45,2],[255.12,1]],[[9.7,2],[19.39,1],[38.78,2],[271.48,1]],[[10.37,2],[20.74,1],[41.47,2],[290.29,1]],[[11.3,2],[22.6,1],[45.21,2],[316.47,1]],[[12.24,2],[24.48,1],[48.95,2],[342.64,1]],[[13.17,2],[26.35,1],[52.69,2],[368.82,1]],[[14.17,2],[28.33,1],[56.66,2],[396.63,1]]]
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
      "requiresState": "state_1_option_1",
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
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_skill",
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
