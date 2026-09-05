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
      "formula": "52.97%",
      "multiplierByLevel": [26.64,28.83,31.01,34.07,36.26,38.77,42.26,45.76,49.25,52.97]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.68,
      "formula": "50.34% + 50.34%",
      "multiplierByLevel": [50.64,54.8,58.96,64.76,68.92,73.7,80.34,86.98,93.62,100.68],
      "segmentsByLevel": [[[25.32,1],[25.32,1]],[[27.4,1],[27.4,1]],[[29.48,1],[29.48,1]],[[32.38,1],[32.38,1]],[[34.46,1],[34.46,1]],[[36.85,1],[36.85,1]],[[40.17,1],[40.17,1]],[[43.49,1],[43.49,1]],[[46.81,1],[46.81,1]],[[50.34,1],[50.34,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 111.36,
      "formula": "33.41% + 33.41% + 44.54%",
      "multiplierByLevel": [56,60.6,65.2,71.63,76.23,81.5,88.84,96.2,103.54,111.36],
      "segmentsByLevel": [[[16.8,1],[16.8,1],[22.4,1]],[[18.18,1],[18.18,1],[24.24,1]],[[19.56,1],[19.56,1],[26.08,1]],[[21.49,1],[21.49,1],[28.65,1]],[[22.87,1],[22.87,1],[30.49,1]],[[24.45,1],[24.45,1],[32.6,1]],[[26.65,1],[26.65,1],[35.54,1]],[[28.86,1],[28.86,1],[38.48,1]],[[31.06,1],[31.06,1],[41.42,1]],[[33.41,1],[33.41,1],[44.54,1]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 206.79,
      "formula": "41.36% + 51.70% + 51.70% + 62.03%",
      "multiplierByLevel": [104,112.55,121.08,133,141.55,151.35,165,178.64,192.28,206.79],
      "segmentsByLevel": [[[20.8,1],[26,1],[26,1],[31.2,1]],[[22.51,1],[28.14,1],[28.14,1],[33.76,1]],[[24.22,1],[30.27,1],[30.27,1],[36.32,1]],[[26.6,1],[33.25,1],[33.25,1],[39.9,1]],[[28.31,1],[35.39,1],[35.39,1],[42.46,1]],[[30.27,1],[37.84,1],[37.84,1],[45.4,1]],[[33,1],[41.25,1],[41.25,1],[49.5,1]],[[35.73,1],[44.66,1],[44.66,1],[53.59,1]],[[38.46,1],[48.07,1],[48.07,1],[57.68,1]],[[41.36,1],[51.7,1],[51.7,1],[62.03,1]]]
    },
    {
      "id": "enlightened_basic",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 307.79,
      "formula": "61.56% × 3 + 123.11%",
      "requiresState": "state_1_option_1",
      "multiplierByLevel": [154.8,167.5,180.2,197.99,210.69,225.25,245.59,265.89,286.2,307.79],
      "segmentsByLevel": [[[30.96,3],[61.92,1]],[[33.5,3],[67,1]],[[36.04,3],[72.08,1]],[[39.6,3],[79.19,1]],[[42.14,3],[84.27,1]],[[45.05,3],[90.1,1]],[[49.12,3],[98.23,1]],[[53.18,3],[106.35,1]],[[57.24,3],[114.48,1]],[[61.56,3],[123.11,1]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 116.28,
      "formula": "58.14% × 2",
      "multiplierByLevel": [58.48,63.28,68.08,74.8,79.58,85.1,92.78,100.44,108.12,116.28],
      "segmentsByLevel": [[[29.24,2]],[[31.64,2]],[[34.04,2]],[[37.4,2]],[[39.79,2]],[[42.55,2]],[[46.39,2]],[[50.22,2]],[[54.06,2]],[[58.14,2]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 219.7,
      "formula": "65.91% + 65.91% + 87.88%",
      "multiplierByLevel": [110.5,119.57,128.63,141.33,150.39,160.8,175.3,189.8,204.3,219.7],
      "segmentsByLevel": [[[33.15,1],[33.15,1],[44.2,1]],[[35.87,1],[35.87,1],[47.83,1]],[[38.59,1],[38.59,1],[51.45,1]],[[42.4,1],[42.4,1],[56.53,1]],[[45.12,1],[45.12,1],[60.15,1]],[[48.24,1],[48.24,1],[64.32,1]],[[52.59,1],[52.59,1],[70.12,1]],[[56.94,1],[56.94,1],[75.92,1]],[[61.29,1],[61.29,1],[81.72,1]],[[65.91,1],[65.91,1],[87.88,1]]]
    },
    {
      "id": "air_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 206.17,
      "formula": "206.17%",
      "multiplierByLevel": [103.7,112.21,120.71,132.62,141.12,150.9,164.5,178.11,191.72,206.17]
    },
    {
      "id": "decipher_dodge",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 307.79,
      "formula": "61.56% × 3 + 123.11%",
      "requiresState": "state_1_option_1",
      "multiplierByLevel": [154.8,167.5,180.2,197.99,210.69,225.25,245.59,265.89,286.2,307.79],
      "segmentsByLevel": [[[30.96,3],[61.92,1]],[[33.5,3],[67,1]],[[36.04,3],[72.08,1]],[[39.6,3],[79.19,1]],[[42.14,3],[84.27,1]],[[45.05,3],[90.1,1]],[[49.12,3],[98.23,1]],[[53.18,3],[106.35,1]],[[57.24,3],[114.48,1]],[[61.56,3],[123.11,1]]]
    },
    {
      "id": "skill_boom",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 143.15,
      "formula": "28.63% + 28.63% + 28.63% + 57.26%",
      "multiplierByLevel": [72,77.94,83.84,92.09,98,104.79,114.24,123.69,133.14,143.15],
      "segmentsByLevel": [[[14.4,1],[14.4,1],[14.4,1],[28.8,1]],[[15.59,1],[15.59,1],[15.59,1],[31.17,1]],[[16.77,1],[16.77,1],[16.77,1],[33.53,1]],[[18.42,1],[18.42,1],[18.42,1],[36.83,1]],[[19.6,1],[19.6,1],[19.6,1],[39.2,1]],[[20.96,1],[20.96,1],[20.96,1],[41.91,1]],[[22.85,1],[22.85,1],[22.85,1],[45.69,1]],[[24.74,1],[24.74,1],[24.74,1],[49.47,1]],[[26.63,1],[26.63,1],[26.63,1],[53.25,1]],[[28.63,1],[28.63,1],[28.63,1],[57.26,1]]]
    },
    {
      "id": "skill_big_boom",
      "category": "resonanceSkill",
      "damageType": "echoSkill",
      "multiplier": 288.09,
      "formula": "28.81% × 4 + 172.85%",
      "requiresState": "state_1_option_1",
      "multiplierByLevel": [144.9,156.79,168.68,185.3,197.19,210.87,229.88,248.88,267.89,288.09],
      "segmentsByLevel": [[[14.49,4],[86.94,1]],[[15.68,4],[94.07,1]],[[16.87,4],[101.2,1]],[[18.53,4],[111.18,1]],[[19.72,4],[118.31,1]],[[21.09,4],[126.51,1]],[[22.99,4],[137.92,1]],[[24.89,4],[149.32,1]],[[26.79,4],[160.73,1]],[[28.81,4],[172.85,1]]]
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
      "fallbackSkillId": "skill_big_boom",
      "multiplierByLevel": [139.97,151.45,162.94,178.98,190.47,203.66,222.04,240.38,258.75,278.26],
      "segmentsByLevel": [[[14,3],[97.97,1]],[[15.15,3],[106,1]],[[16.3,3],[114.04,1]],[[17.9,3],[125.28,1]],[[19.05,3],[133.32,1]],[[20.37,3],[142.55,1]],[[22.21,3],[155.41,1]],[[24.04,3],[168.26,1]],[[25.88,3],[181.11,1]],[[27.83,3],[194.77,1]]]
    },
    {
      "id": "liberation",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 861.43,
      "formula": "861.43%",
      "multiplierByLevel": [433.29,468.82,504.35,554.1,589.63,630.49,687.33,744.18,801.03,861.43]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 163.42,
      "formula": "163.42%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [82.2,88.94,95.68,105.12,111.86,119.61,130.39,141.17,151.96,163.42]
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
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [66.65,72.12,77.59,85.24,90.7,96.99,105.73,114.48,123.22,132.51]
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
      "multiplierByLevel": [295.94,320.2,344.48,378.45,402.71,430.63,469.44,508.27,547.09,588.34],
      "segmentsByLevel": [[[59.19,1],[103.58,1],[133.17,1]],[[64.04,1],[112.07,1],[144.09,1]],[[68.9,1],[120.57,1],[155.01,1]],[[75.69,1],[132.46,1],[170.3,1]],[[80.54,1],[140.95,1],[181.22,1]],[[86.13,1],[150.72,1],[193.78,1]],[[93.89,1],[164.3,1],[211.25,1]],[[101.66,1],[177.89,1],[228.72,1]],[[109.42,1],[191.48,1],[246.19,1]],[[117.67,1],[205.92,1],[264.75,1]]]
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
      "multiplierByLevel": [199.99,216.38,232.8,255.74,272.13,290.98,317.21,343.44,369.67,397.58],
      "segmentsByLevel": [[[25,4],[33.33,3]],[[27.05,4],[36.06,3]],[[29.1,4],[38.8,3]],[[31.97,4],[42.62,3]],[[34.02,4],[45.35,3]],[[36.37,4],[48.5,3]],[[39.65,4],[52.87,3]],[[42.93,4],[57.24,3]],[[46.21,4],[61.61,3]],[[49.7,4],[66.26,3]]]
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
      "multiplierByLevel": [199.99,216.39,232.79,255.72,272.12,290.99,317.2,343.46,369.67,397.54],
      "segmentsByLevel": [[[20,1],[30,4],[59.99,1]],[[21.64,1],[32.46,4],[64.91,1]],[[23.28,1],[34.92,4],[69.83,1]],[[25.57,1],[38.36,4],[76.71,1]],[[27.21,1],[40.82,4],[81.63,1]],[[29.1,1],[43.65,4],[87.29,1]],[[31.72,1],[47.58,4],[95.16,1]],[[34.35,1],[51.52,4],[103.03,1]],[[36.97,1],[55.45,4],[110.9,1]],[[39.76,1],[59.63,4],[119.26,1]]]
    },
    {
      "id": "true_name",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 1211.48,
      "formula": "302.87% + 908.61%",
      "requiresResource": "resource_gate_6",
      "requiresResourceFull": "period",
      "multiplierByLevel": [609.38,659.34,709.31,779.26,829.23,886.7,966.64,1046.59,1126.54,1211.48],
      "segmentsByLevel": [[[152.35,1],[457.03,1]],[[164.84,1],[494.5,1]],[[177.33,1],[531.98,1]],[[194.82,1],[584.44,1]],[[207.31,1],[621.92,1]],[[221.68,1],[665.02,1]],[[241.66,1],[724.98,1]],[[261.65,1],[784.94,1]],[[281.64,1],[844.9,1]],[[302.87,1],[908.61,1]]]
    },
    {
      "id": "outro_very_moment",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 795,
      "formula": "795%",
      "fixedLevel": true
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
