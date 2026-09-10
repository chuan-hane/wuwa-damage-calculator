WUWA.register({
  "id": "phrolova",
  "aliases": [],
  "debut": 2.5,
  "element": "havoc",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "lethean_elegy",
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
      "id": "notes",
      "max": 6,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 106.9,
      "formula": "53.45% × 2",
      "multiplierByLevel": [53.76,58.18,62.58,68.76,73.16,78.24,85.28,92.34,99.4,106.9],
      "segmentsByLevel": [[[26.88,2]],[[29.09,2]],[[31.29,2]],[[34.38,2]],[[36.58,2]],[[39.12,2]],[[42.64,2]],[[46.17,2]],[[49.7,2]],[[53.45,2]]]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.43,
      "formula": "95.43%",
      "multiplierByLevel": [48,51.94,55.88,61.39,65.32,69.85,76.15,82.44,88.74,95.43]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.14,
      "formula": "32.69% × 6",
      "triggerEvents": [
        "enterReincarnation"
      ],
      "multiplierByLevel": [98.64,106.74,114.84,126.18,134.28,143.58,156.48,169.44,182.4,196.14],
      "segmentsByLevel": [[[16.44,6]],[[17.79,6]],[[19.14,6]],[[21.03,6]],[[22.38,6]],[[23.93,6]],[[26.08,6]],[[28.24,6]],[[30.4,6]],[[32.69,6]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 159.7,
      "formula": "79.85% × 2",
      "multiplierByLevel": [80.32,86.92,93.5,102.72,109.3,116.88,127.42,137.96,148.5,159.7],
      "segmentsByLevel": [[[40.16,2]],[[43.46,2]],[[46.75,2]],[[51.36,2]],[[54.65,2]],[[58.44,2]],[[63.71,2]],[[68.98,2]],[[74.25,2]],[[79.85,2]]]
    },
    {
      "id": "scarlet_coda",
      "category": "basicAttack",
      "damageType": "resonanceSkill",
      "multiplier": 660.16,
      "perStack": 82.55,
      "stackMax": 24,
      "defaultLayers": 10,
      "defaultLayersBySeq": [
        {
          "seq": 2,
          "layers": 14
        }
      ],
      "stackLabel": "余响",
      "formula": "33.01% × 2 + 12.38% × 8 + 495.10% + 82.55% × 余响",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "notes",
        "value": 6
      },
      "requiresState": "mechanic_1_option_1",
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [332.09,359.32,386.54,424.7,451.93,483.17,526.76,570.35,613.87,660.16],
      "segmentsByLevel": [[[16.61,2],[6.23,8],[249.03,1]],[[17.97,2],[6.74,8],[269.46,1]],[[19.33,2],[7.25,8],[289.88,1]],[[21.24,2],[7.97,8],[318.46,1]],[[22.6,2],[8.48,8],[338.89,1]],[[24.16,2],[9.06,8],[362.37,1]],[[26.34,2],[9.88,8],[395.04,1]],[[28.52,2],[10.7,8],[427.71,1]],[[30.7,2],[11.51,8],[460.39,1]],[[33.01,2],[12.38,8],[495.1,1]]],
      "perStackByLevel": [41.53,44.9,48.36,53.13,56.5,60.38,65.88,71.32,76.75,82.55]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 127.24,
      "formula": "127.24%",
      "multiplierByLevel": [64,69.25,74.5,81.85,87.1,93.13,101.53,109.92,118.32,127.24]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 121.99,
      "formula": "121.99%",
      "multiplierByLevel": [61.36,66.4,71.43,78.47,83.5,89.29,97.34,105.39,113.44,121.99]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 211.94,
      "formula": "105.97% × 2",
      "triggerEvents": [
        "castResonanceSkill",
        "enterReincarnation"
      ],
      "multiplierByLevel": [106.6,115.36,124.1,136.34,145.08,155.12,169.1,183.1,197.08,211.94],
      "segmentsByLevel": [[[53.3,2]],[[57.68,2]],[[62.05,2]],[[68.17,2]],[[72.54,2]],[[77.56,2]],[[84.55,2]],[[91.55,2]],[[98.54,2]],[[105.97,2]]]
    },
    {
      "id": "hecate_1",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "27.84%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [14,15.15,16.3,17.91,19.06,20.38,22.21,24.05,25.89,27.84]
    },
    {
      "id": "hecate_2",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "13.92% × 2",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [14,15.16,16.3,17.92,19.06,20.38,22.22,24.06,25.9,27.84],
      "segmentsByLevel": [[[7,2]],[[7.58,2]],[[8.15,2]],[[8.96,2]],[[9.53,2]],[[10.19,2]],[[11.11,2]],[[12.03,2]],[[12.95,2]],[[13.92,2]]]
    },
    {
      "id": "hecate_strings",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [175,189.36,203.7,223.8,238.15,254.65,277.62,300.57,323.53,347.93],
      "segmentsByLevel": [[[52.5,1],[122.5,1]],[[56.81,1],[132.55,1]],[[61.11,1],[142.59,1]],[[67.14,1],[156.66,1]],[[71.45,1],[166.7,1]],[[76.4,1],[178.25,1]],[[83.29,1],[194.33,1]],[[90.17,1],[210.4,1]],[[97.06,1],[226.47,1]],[[104.38,1],[243.55,1]]]
    },
    {
      "id": "hecate_winds",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 330.53,
      "formula": "99.16% + 231.37%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [166.26,179.89,193.53,212.62,226.24,241.92,263.73,285.55,307.36,330.53],
      "segmentsByLevel": [[[49.88,1],[116.38,1]],[[53.97,1],[125.92,1]],[[58.06,1],[135.47,1]],[[63.79,1],[148.83,1]],[[67.87,1],[158.37,1]],[[72.58,1],[169.34,1]],[[79.12,1],[184.61,1]],[[85.67,1],[199.88,1]],[[92.21,1],[215.15,1]],[[99.16,1],[231.37,1]]]
    },
    {
      "id": "hecate_cadenza",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [175,189.36,203.7,223.8,238.15,254.65,277.62,300.57,323.53,347.93],
      "segmentsByLevel": [[[52.5,1],[122.5,1]],[[56.81,1],[132.55,1]],[[61.11,1],[142.59,1]],[[67.14,1],[156.66,1]],[[71.45,1],[166.7,1]],[[76.4,1],[178.25,1]],[[83.29,1],[194.33,1]],[[90.17,1],[210.4,1]],[[97.06,1],[226.47,1]],[[104.38,1],[243.55,1]]]
    },
    {
      "id": "hecate_1_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "27.84%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [14,15.15,16.3,17.91,19.06,20.38,22.21,24.05,25.89,27.84]
    },
    {
      "id": "hecate_2_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "13.92% × 2",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [14,15.16,16.3,17.92,19.06,20.38,22.22,24.06,25.9,27.84],
      "segmentsByLevel": [[[7,2]],[[7.58,2]],[[8.15,2]],[[8.96,2]],[[9.53,2]],[[10.19,2]],[[11.11,2]],[[12.03,2]],[[12.95,2]],[[13.92,2]]]
    },
    {
      "id": "hecate_strings_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [175,189.36,203.7,223.8,238.15,254.65,277.62,300.57,323.53,347.93],
      "segmentsByLevel": [[[52.5,1],[122.5,1]],[[56.81,1],[132.55,1]],[[61.11,1],[142.59,1]],[[67.14,1],[156.66,1]],[[71.45,1],[166.7,1]],[[76.4,1],[178.25,1]],[[83.29,1],[194.33,1]],[[90.17,1],[210.4,1]],[[97.06,1],[226.47,1]],[[104.38,1],[243.55,1]]]
    },
    {
      "id": "hecate_winds_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 330.53,
      "formula": "99.16% + 231.37%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [166.26,179.89,193.53,212.62,226.24,241.92,263.73,285.55,307.36,330.53],
      "segmentsByLevel": [[[49.88,1],[116.38,1]],[[53.97,1],[125.92,1]],[[58.06,1],[135.47,1]],[[63.79,1],[148.83,1]],[[67.87,1],[158.37,1]],[[72.58,1],[169.34,1]],[[79.12,1],[184.61,1]],[[85.67,1],[199.88,1]],[[92.21,1],[215.15,1]],[[99.16,1],[231.37,1]]]
    },
    {
      "id": "hecate_cadenza_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [175,189.36,203.7,223.8,238.15,254.65,277.62,300.57,323.53,347.93],
      "segmentsByLevel": [[[52.5,1],[122.5,1]],[[56.81,1],[132.55,1]],[[61.11,1],[142.59,1]],[[67.14,1],[156.66,1]],[[71.45,1],[166.7,1]],[[76.4,1],[178.25,1]],[[83.29,1],[194.33,1]],[[90.17,1],[210.4,1]],[[97.06,1],[226.47,1]],[[104.38,1],[243.55,1]]]
    },
    {
      "id": "curtain_call",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 465.22,
      "formula": "465.22%",
      "requiresState": [
        "mode_1",
        "state_2_option_1"
      ],
      "multiplierByLevel": [234,253.19,272.38,299.24,318.43,340.5,371.2,401.9,432.6,465.22]
    },
    {
      "id": "intro_quietus",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 201.52,
      "formula": "80.61% + 120.91%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [101.37,109.68,117.99,129.63,137.94,147.5,160.8,174.1,187.4,201.52],
      "segmentsByLevel": [[[40.55,1],[60.82,1]],[[43.87,1],[65.81,1]],[[47.2,1],[70.79,1]],[[51.85,1],[77.78,1]],[[55.18,1],[82.76,1]],[[59,1],[88.5,1]],[[64.32,1],[96.48,1]],[[69.64,1],[104.46,1]],[[74.96,1],[112.44,1]],[[80.61,1],[120.91,1]]]
    },
    {
      "id": "intro_immortality",
      "category": "introSkill",
      "damageType": "resonanceSkill",
      "multiplier": 596.43,
      "formula": "596.43%",
      "requiresResource": "resource_gate_2",
      "fallbackSkillId": "intro_quietus",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [300,324.6,349.2,383.64,408.24,436.53,475.89,515.25,554.61,596.43]
    },
    {
      "id": "fate_finality",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 505.01,
      "formula": "37.88% × 4 + 117.83% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [254.01,274.87,295.69,324.88,345.7,369.6,402.94,436.28,469.59,505.01],
      "segmentsByLevel": [[[19.05,4],[59.27,3]],[[20.62,4],[64.13,3]],[[22.18,4],[68.99,3]],[[24.37,4],[75.8,3]],[[25.93,4],[80.66,3]],[[27.72,4],[86.24,3]],[[30.22,4],[94.02,3]],[[32.72,4],[101.8,3]],[[35.22,4],[109.57,3]],[[37.88,4],[117.83,3]]]
    },
    {
      "id": "haunting_dream",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 464.07,
      "formula": "23.21% × 4 + 46.41% + 324.82%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [233.4,252.56,271.71,298.51,317.66,339.67,370.28,400.9,431.52,464.07],
      "segmentsByLevel": [[[11.67,4],[23.34,1],[163.38,1]],[[12.63,4],[25.26,1],[176.78,1]],[[13.59,4],[27.17,1],[190.18,1]],[[14.93,4],[29.85,1],[208.94,1]],[[15.89,4],[31.77,1],[222.33,1]],[[16.99,4],[33.97,1],[237.74,1]],[[18.52,4],[37.03,1],[259.17,1]],[[20.05,4],[40.09,1],[280.61,1]],[[21.58,4],[43.15,1],[302.05,1]],[[23.21,4],[46.41,1],[324.82,1]]]
    },
    {
      "id": "k6_hecate_phantom",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 216.42,
      "formula": "216.42%",
      "seq": 6,
      "requiresResource": "resource_gate_3",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "hecate_cadenza",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "echoSkillDmg"
  ],
  "echoSet": 19,
  "echoSet2": 6,
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
      "id": "state_2",
      "options": [
        {
          "value": "state_2_option_1"
        }
      ]
    },
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
      "id": "mechanic_1",
      "kind": "mechanic",
      "options": [
        {
          "value": "mechanic_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_aftersound",
      "zone": "critDamage",
      "value": 60,
      "scope": "self",
      "maxStacks": 24,
      "defaultStacks": 10
    },
    {
      "id": "b_aftersound_overflow",
      "zone": "critDamage",
      "value": 100,
      "scope": "self",
      "maxStacks": 100,
      "defaultStacks": 0,
      "defaultActive": false,
      "requiresBuffStacks": {
        "id": "b_aftersound",
        "stacks": 24
      }
    },
    {
      "id": "b_maestro_atk",
      "zone": "attackPercent",
      "value": 120,
      "scope": "self",
      "requiresState": "mode_1",
      "duration": 24
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
      "id": "outro_heavy",
      "zone": "amplify",
      "damageType": "heavy",
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
          "value": 80,
          "scope": "self",
          "skills": [
            "fate_finality",
            "haunting_dream"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_mult",
          "zone": "skillMultBonus",
          "value": 75,
          "scope": "self",
          "skills": [
            "scarlet_coda"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_echo",
          "zone": "amplify",
          "damageType": "echoSkill",
          "value": 80,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerEvents": [
            "castEchoSkill"
          ],
          "duration": 30
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
          "id": "k6_hecate",
          "zone": "skillMultBonus",
          "value": 24,
          "scope": "self",
          "skills": [
            "hecate_strings",
            "hecate_winds",
            "hecate_cadenza",
            "hecate_strings_bg",
            "hecate_winds_bg",
            "hecate_cadenza_bg"
          ]
        },
        {
          "id": "k6_havoc",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 60,
          "scope": "self",
          "requiresState": "mode_1_option_1"
        },
        {
          "id": "k6_amp",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "requiresState": "mode_1_option_2"
        }
      ]
    }
  ],
  "modes": null
});
