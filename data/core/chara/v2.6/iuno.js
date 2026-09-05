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
        "mode_1_option_1"
      ],
      "multiplierByLevel": [44.1,47.72,51.34,56.4,60.02,64.17,69.96,75.75,81.53,87.68]
    },
    {
      "id": "yh_a2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 139.58,
      "formula": "46.06% × 2 + 47.46%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [70.21,75.97,81.73,89.79,95.54,102.16,111.37,120.58,129.79,139.58],
      "segmentsByLevel": [[[23.17,2],[23.87,1]],[[25.07,2],[25.83,1]],[[26.97,2],[27.79,1]],[[29.63,2],[30.53,1]],[[31.53,2],[32.48,1]],[[33.71,2],[34.74,1]],[[36.75,2],[37.87,1]],[[39.79,2],[41,1]],[[42.83,2],[44.13,1]],[[46.06,2],[47.46,1]]]
    },
    {
      "id": "yh_a3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 266.61,
      "formula": "87.98% × 2 + 90.65%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [134.12,145.12,156.12,171.51,182.49,195.15,212.73,230.33,247.93,266.61],
      "segmentsByLevel": [[[44.26,2],[45.6,1]],[[47.89,2],[49.34,1]],[[51.52,2],[53.08,1]],[[56.6,2],[58.31,1]],[[60.22,2],[62.05,1]],[[64.4,2],[66.35,1]],[[70.2,2],[72.33,1]],[[76.01,2],[78.31,1]],[[81.82,2],[84.29,1]],[[87.98,2],[90.65,1]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 107.36,
      "formula": "53.68% × 2",
      "multiplierByLevel": [54,58.44,62.86,69.06,73.5,78.58,85.68,92.76,99.84,107.36],
      "segmentsByLevel": [[[27,2]],[[29.22,2]],[[31.43,2]],[[34.53,2]],[[36.75,2]],[[39.29,2]],[[42.84,2]],[[46.38,2]],[[49.92,2]],[[53.68,2]]]
    },
    {
      "id": "yh_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 248.73,
      "formula": "82.08% × 2 + 84.57%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [125.12,135.37,145.63,160,170.25,182.06,198.46,214.88,231.28,248.73],
      "segmentsByLevel": [[[41.29,2],[42.54,1]],[[44.67,2],[46.03,1]],[[48.06,2],[49.51,1]],[[52.8,2],[54.4,1]],[[56.18,2],[57.89,1]],[[60.08,2],[61.9,1]],[[65.49,2],[67.48,1]],[[70.91,2],[73.06,1]],[[76.32,2],[78.64,1]],[[82.08,2],[84.57,1]]]
    },
    {
      "id": "yg_a1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 126.45,
      "formula": "126.45%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [63.6,68.82,74.04,81.34,86.55,92.55,100.89,109.24,117.58,126.45]
    },
    {
      "id": "yg_a2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 167.01,
      "formula": "55.67% × 3",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [84,90.9,97.8,107.43,114.33,122.25,133.26,144.27,155.31,167.01],
      "segmentsByLevel": [[[28,3]],[[30.3,3]],[[32.6,3]],[[35.81,3]],[[38.11,3]],[[40.75,3]],[[44.42,3]],[[48.09,3]],[[51.77,3]],[[55.67,3]]]
    },
    {
      "id": "yg_a3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 334.02,
      "formula": "167.01% × 2",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [168,181.78,195.56,214.84,228.62,244.46,266.5,288.54,310.6,334.02],
      "segmentsByLevel": [[[84,2]],[[90.89,2]],[[97.78,2]],[[107.42,2]],[[114.31,2]],[[122.23,2]],[[133.25,2]],[[144.27,2]],[[155.3,2]],[[167.01,2]]]
    },
    {
      "id": "yg_dodge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 310.17,
      "formula": "103.39% × 3",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [156,168.81,181.59,199.5,212.31,227.01,247.47,267.93,288.42,310.17],
      "segmentsByLevel": [[[52,3]],[[56.27,3]],[[60.53,3]],[[66.5,3]],[[70.77,3]],[[75.67,3]],[[82.49,3]],[[89.31,3]],[[96.14,3]],[[103.39,3]]]
    },
    {
      "id": "rs_chuyin",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 261.07,
      "formula": "18.65% × 7 + 130.52%",
      "multiplierByLevel": [131.31,142.09,152.86,167.96,178.73,191.08,208.31,225.53,242.75,261.07],
      "segmentsByLevel": [[[9.38,7],[65.65,1]],[[10.15,7],[71.04,1]],[[10.92,7],[76.42,1]],[[12,7],[83.96,1]],[[12.77,7],[89.34,1]],[[13.65,7],[95.53,1]],[[14.88,7],[104.15,1]],[[16.11,7],[112.76,1]],[[17.34,7],[121.37,1]],[[18.65,7],[130.52,1]]]
    },
    {
      "id": "rs_gaozhong",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 426.46,
      "formula": "140.73% × 2 + 145.00%",
      "multiplierByLevel": [214.51,232.1,249.7,274.31,291.91,312.13,340.27,368.42,396.57,426.46],
      "segmentsByLevel": [[[70.79,2],[72.93,1]],[[76.59,2],[78.92,1]],[[82.4,2],[84.9,1]],[[90.52,2],[93.27,1]],[[96.33,2],[99.25,1]],[[103,2],[106.13,1]],[[112.29,2],[115.69,1]],[[121.58,2],[125.26,1]],[[130.87,2],[134.83,1]],[[140.73,2],[145,1]]]
    },
    {
      "id": "rs_weizhong",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 426.46,
      "formula": "140.73% × 2 + 145.00%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [214.51,232.1,249.7,274.31,291.91,312.13,340.27,368.42,396.57,426.46],
      "segmentsByLevel": [[[70.79,2],[72.93,1]],[[76.59,2],[78.92,1]],[[82.4,2],[84.9,1]],[[90.52,2],[93.27,1]],[[96.33,2],[99.25,1]],[[103,2],[106.13,1]],[[112.29,2],[115.69,1]],[[121.58,2],[125.26,1]],[[130.87,2],[134.83,1]],[[140.73,2],[145,1]]]
    },
    {
      "id": "rs_yuexian",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 439.58,
      "formula": "219.79% × 2",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [221.1,239.24,257.38,282.76,300.88,321.74,350.74,379.74,408.76,439.58],
      "segmentsByLevel": [[[110.55,2]],[[119.62,2]],[[128.69,2]],[[141.38,2]],[[150.44,2]],[[160.87,2]],[[175.37,2]],[[189.87,2]],[[204.38,2]],[[219.79,2]]]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1093.46,
      "formula": "1093.46%",
      "multiplierByLevel": [550,595.1,640.2,703.34,748.44,800.31,872.47,944.63,1016.79,1093.46]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 159.09,
      "formula": "15.91% × 7 + 47.72%",
      "multiplierByLevel": [80,86.59,93.18,102.38,108.89,116.48,126.98,137.4,147.9,159.09],
      "segmentsByLevel": [[[8,7],[24,1]],[[8.66,7],[25.97,1]],[[9.32,7],[27.94,1]],[[10.24,7],[30.7,1]],[[10.89,7],[32.66,1]],[[11.65,7],[34.93,1]],[[12.7,7],[38.08,1]],[[13.74,7],[41.22,1]],[[14.79,7],[44.37,1]],[[15.91,7],[47.72,1]]]
    },
    {
      "id": "lb_yg",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 250.51,
      "formula": "250.51%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [126,136.34,146.67,161.13,171.47,183.35,199.88,216.41,232.94,250.51]
    },
    {
      "id": "lb_yh",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 316.72,
      "formula": "79.18% × 4",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [159.32,172.4,185.44,203.72,216.8,231.8,252.72,273.6,294.52,316.72],
      "segmentsByLevel": [[[39.83,4]],[[43.1,4]],[[46.36,4]],[[50.93,4]],[[54.2,4]],[[57.95,4]],[[63.18,4]],[[68.4,4]],[[73.63,4]],[[79.18,4]]]
    },
    {
      "id": "yg_a1e",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 205.97,
      "formula": "205.97%",
      "requiresResource": "spirituality",
      "fallbackSkillId": "yg_a1",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [103.6,112.1,120.6,132.49,140.98,150.75,164.35,177.94,191.53,205.97]
    },
    {
      "id": "yg_a2e",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 286.29,
      "formula": "95.43% × 3",
      "requiresResource": "spirituality",
      "fallbackSkillId": "yg_a2",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [144,155.82,167.64,184.17,195.96,209.55,228.45,247.32,266.22,286.29],
      "segmentsByLevel": [[[48,3]],[[51.94,3]],[[55.88,3]],[[61.39,3]],[[65.32,3]],[[69.85,3]],[[76.15,3]],[[82.44,3]],[[88.74,3]],[[95.43,3]]]
    },
    {
      "id": "yg_a3e",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 532.82,
      "formula": "266.41% × 2",
      "requiresResource": "spirituality",
      "fallbackSkillId": "yg_a3",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [268,289.98,311.96,342.72,364.7,389.98,425.14,460.3,495.46,532.82],
      "segmentsByLevel": [[[134,2]],[[144.99,2]],[[155.98,2]],[[171.36,2]],[[182.35,2]],[[194.99,2]],[[212.57,2]],[[230.15,2]],[[247.73,2]],[[266.41,2]]]
    },
    {
      "id": "yg_dodgee",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 469.2,
      "formula": "156.40% × 3",
      "requiresResource": "spirituality",
      "fallbackSkillId": "yg_dodge",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [236.01,255.36,274.71,301.8,321.15,343.41,374.37,405.33,436.32,469.2],
      "segmentsByLevel": [[[78.67,3]],[[85.12,3]],[[91.57,3]],[[100.6,3]],[[107.05,3]],[[114.47,3]],[[124.79,3]],[[135.11,3]],[[145.44,3]],[[156.4,3]]]
    },
    {
      "id": "rs_yuexiane",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 638.38,
      "formula": "319.19% × 2",
      "requiresResource": "spirituality",
      "fallbackSkillId": "rs_yuexian",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [321.1,347.44,373.78,410.64,436.96,467.24,509.38,551.5,593.62,638.38],
      "segmentsByLevel": [[[160.55,2]],[[173.72,2]],[[186.89,2]],[[205.32,2]],[[218.48,2]],[[233.62,2]],[[254.69,2]],[[275.75,2]],[[296.81,2]],[[319.19,2]]]
    },
    {
      "id": "zhizhen",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 159.05,
      "formula": "159.05%",
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
    },
    {
      "id": "outro_from_gloom",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 100,
      "formula": "100%",
      "fixedLevel": true
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
      "id": "mode_1",
      "kind": "mode",
      "options": [
        {
          "value": "mode_1_option_1"
        },
        {
          "value": "mode_1_option_2"
        }
      ]
    },
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
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
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
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
          "requiresState": "field_1_option_1",
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
          "requiresState": "mode_1"
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
          "requiresState": "mode_1",
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
