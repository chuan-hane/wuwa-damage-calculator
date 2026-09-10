WUWA.register({
  "id": "xiangliyao",
  "aliases": [],
  "debut": 1.2,
  "element": "electro",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": "veritys_handle",
  "portrait": "",
  "base": {
    "hp": 10625,
    "attack": 425,
    "defense": 1222,
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
      "id": "capacity",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "performanceCapacity",
      "max": 5,
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
      "multiplier": 66.22,
      "formula": "33.11% × 2",
      "multiplierByLevel": [33.3,36.04,38.78,42.6,45.32,48.46,52.84,57.2,61.58,66.22],
      "segmentsByLevel": [[[16.65,2]],[[18.02,2]],[[19.39,2]],[[21.3,2]],[[22.66,2]],[[24.23,2]],[[26.42,2]],[[28.6,2]],[[30.79,2]],[[33.11,2]]]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 99.61,
      "formula": "99.61%",
      "multiplierByLevel": [50.1,54.21,58.32,64.07,68.18,72.91,79.48,86.05,92.62,99.61]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.28,
      "formula": "39.76% × 3",
      "multiplierByLevel": [60,64.92,69.84,76.74,81.66,87.3,95.19,103.05,110.94,119.28],
      "segmentsByLevel": [[[20,3]],[[21.64,3]],[[23.28,3]],[[25.58,3]],[[27.22,3]],[[29.1,3]],[[31.73,3]],[[34.35,3]],[[36.98,3]],[[39.76,3]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.63,
      "formula": "53.05% × 2 + 26.53%",
      "multiplierByLevel": [66.7,72.18,77.65,85.3,90.78,97.08,105.83,114.58,123.33,132.63],
      "segmentsByLevel": [[[26.68,2],[13.34,1]],[[28.87,2],[14.44,1]],[[31.06,2],[15.53,1]],[[34.12,2],[17.06,1]],[[36.31,2],[18.16,1]],[[38.83,2],[19.42,1]],[[42.33,2],[21.17,1]],[[45.83,2],[22.92,1]],[[49.33,2],[24.67,1]],[[53.05,2],[26.53,1]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 198.81,
      "formula": "198.81%",
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 165.62,
      "formula": "82.81% × 2",
      "multiplierByLevel": [83.3,90.14,96.98,106.54,113.36,121.22,132.14,143.08,154,165.62],
      "segmentsByLevel": [[[41.65,2]],[[45.07,2]],[[48.49,2]],[[53.27,2]],[[56.68,2]],[[60.61,2]],[[66.07,2]],[[71.54,2]],[[77,2]],[[82.81,2]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
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
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.58,
      "formula": "238.58%",
      "multiplierByLevel": [120,129.84,139.68,153.46,163.3,174.62,190.36,206.1,221.85,238.58]
    },
    {
      "id": "skill_deduction",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
    },
    {
      "id": "lib_cogitation",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1466.06,
      "formula": "1466.06%",
      "multiplierByLevel": [737.42,797.89,858.35,943.01,1003.48,1073.02,1169.76,1266.51,1363.26,1466.06]
    },
    {
      "id": "lib_pivot_1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 119.67,
      "formula": "119.67%",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "multiplierByLevel": [60.19,65.13,70.06,76.97,81.91,87.59,95.48,103.38,111.28,119.67]
    },
    {
      "id": "lib_pivot_2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 243.68,
      "formula": "60.92% × 4",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "multiplierByLevel": [122.6,132.64,142.68,156.76,166.8,178.36,194.44,210.52,226.6,243.68],
      "segmentsByLevel": [[[30.65,4]],[[33.16,4]],[[35.67,4]],[[39.19,4]],[[41.7,4]],[[44.59,4]],[[48.61,4]],[[52.63,4]],[[56.65,4]],[[60.92,4]]]
    },
    {
      "id": "lib_pivot_3",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 266.5,
      "formula": "133.25% × 2",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "multiplierByLevel": [134.06,145.04,156.04,171.42,182.42,195.06,212.64,230.24,247.82,266.5],
      "segmentsByLevel": [[[67.03,2]],[[72.52,2]],[[78.02,2]],[[85.71,2]],[[91.21,2]],[[97.53,2]],[[106.32,2]],[[115.12,2]],[[123.91,2]],[[133.25,2]]]
    },
    {
      "id": "lib_divergence",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 495.87,
      "formula": "49.59% × 3 + 173.55% × 2",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [249.4,269.87,290.34,318.96,339.4,362.94,395.65,428.38,461.09,495.87],
      "segmentsByLevel": [[[24.94,3],[87.29,2]],[[26.99,3],[94.45,2]],[[29.04,3],[101.61,2]],[[31.9,3],[111.63,2]],[[33.94,3],[118.79,2]],[[36.3,3],[127.02,2]],[[39.57,3],[138.47,2]],[[42.84,3],[149.93,2]],[[46.11,3],[161.38,2]],[[49.59,3],[173.55,2]]]
    },
    {
      "id": "lib_unfathomed",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 388.24,
      "formula": "38.83% × 2 + 310.58%",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "multiplierByLevel": [195.28,211.29,227.3,249.73,265.74,284.15,309.77,335.38,361,388.24],
      "segmentsByLevel": [[[19.53,2],[156.22,1]],[[21.13,2],[169.03,1]],[[22.73,2],[181.84,1]],[[24.98,2],[199.77,1]],[[26.58,2],[212.58,1]],[[28.42,2],[227.31,1]],[[30.98,2],[247.81,1]],[[33.54,2],[268.3,1]],[[36.1,2],[288.8,1]],[[38.83,2],[310.58,1]]]
    },
    {
      "id": "forte_decipher",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 397.82,
      "formula": "397.82%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "capacity",
        "value": 100
      },
      "fallbackSkillId": "skill_deduction",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [200.1,216.51,232.92,255.89,272.3,291.17,317.42,343.68,369.93,397.82]
    },
    {
      "id": "forte_law",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 638.2,
      "formula": "95.73% × 4 + 255.28%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "performanceCapacity",
        "value": 5
      },
      "fallbackSkillId": "lib_divergence",
      "impliedStates": [
        "buff_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [321,347.33,373.66,410.52,436.85,467.12,509.25,551.33,593.46,638.2],
      "segmentsByLevel": [[[48.15,4],[128.4,1]],[[52.1,4],[138.93,1]],[[56.05,4],[149.46,1]],[[61.58,4],[164.2,1]],[[65.53,4],[174.73,1]],[[70.07,4],[186.84,1]],[[76.39,4],[203.69,1]],[[82.7,4],[220.53,1]],[[89.02,4],[237.38,1]],[[95.73,4],[255.28,1]]]
    },
    {
      "id": "forte_revamp",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 218.7,
      "formula": "21.87% × 4 + 65.61% × 2",
      "requiresResource": "resource_gate_3",
      "multiplierByLevel": [110,119.06,128.08,140.7,149.7,160.08,174.5,188.96,203.38,218.7],
      "segmentsByLevel": [[[11,4],[33,2]],[[11.91,4],[35.71,2]],[[12.81,4],[38.42,2]],[[14.07,4],[42.21,2]],[[14.97,4],[44.91,2]],[[16.01,4],[48.02,2]],[[17.45,4],[52.35,2]],[[18.9,4],[56.68,2]],[[20.34,4],[61.01,2]],[[21.87,4],[65.61,2]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "99.41% × 2",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.52,158.64,171.76,184.88,198.82],
      "segmentsByLevel": [[[50,2]],[[54.1,2]],[[58.2,2]],[[63.94,2]],[[68.04,2]],[[72.76,2]],[[79.32,2]],[[85.88,2]],[[92.44,2]],[[99.41,2]]]
    },
    {
      "id": "outro_chain_rule",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 237.63,
      "formula": "237.63%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_law",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 3,
  "echoLead": "3:tempest_mephis",
  "combatStates": [
    {
      "id": "buff_1",
      "kind": "form",
      "options": [
        {
          "value": "buff_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "electro",
      "value": 20,
      "scope": "self",
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "triggerStacks": 1,
      "duration": 8
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "skillMultBonus",
          "value": 48,
          "scope": "self",
          "skills": [
            "forte_law"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "lib_cogitation"
          ],
          "triggerEvents": [
            "castResonanceSkill"
          ],
          "duration": 8
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "amplify",
          "value": 63,
          "scope": "self",
          "skills": [
            "forte_decipher",
            "skill_deduction",
            "lib_divergence",
            "forte_law"
          ],
          "defaultActive": false,
          "duration": 24
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "lib_cogitation"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib_cogitation"
          ]
        },
        {
          "id": "k5_outro",
          "multAdd": 222,
          "scope": "self",
          "skills": [
            "outro_chain_rule"
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
          "value": 76,
          "scope": "self",
          "skills": [
            "forte_law"
          ]
        }
      ]
    }
  ],
  "modes": null
});
