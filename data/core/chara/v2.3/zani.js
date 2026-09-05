WUWA.register({
  "id": "zani",
  "aliases": [],
  "debut": 2.3,
  "element": "spectro",
  "weaponType": 4,
  "quality": 5,
  "effectTypes": [
    "lightNoise"
  ],
  "signatureWeaponId": "blazing_justice",
  "portrait": "",
  "resources": [
    {
      "id": "blaze",
      "min": 0,
      "max": 100,
      "maxByState": [
        {
          "state": "form_1_option_1",
          "max": 150
        }
      ],
      "defaultValue": "max"
    },
    {
      "id": "redundantKineticEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
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
  "echoSet": 11,
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 58.85,
      "formula": "58.85%",
      "multiplierByLevel": [29.6,32.03,34.46,37.86,40.28,43.08,46.96,50.84,54.73,58.85]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%",
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 127.26,
      "formula": "42.42% × 3",
      "multiplierByLevel": [64.02,69.27,74.52,81.87,87.12,93.15,101.55,109.92,118.32,127.26],
      "segmentsByLevel": [[[21.34,3]],[[23.09,3]],[[24.84,3]],[[27.29,3]],[[29.04,3]],[[31.05,3]],[[33.85,3]],[[36.64,3]],[[39.44,3]],[[42.42,3]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 270.4,
      "formula": "67.60% × 4",
      "multiplierByLevel": [136,147.16,158.32,173.92,185.08,197.92,215.76,233.6,251.44,270.4],
      "segmentsByLevel": [[[34,4]],[[36.79,4]],[[39.58,4]],[[43.48,4]],[[46.27,4]],[[49.48,4]],[[53.94,4]],[[58.4,4]],[[62.86,4]],[[67.6,4]]]
    },
    {
      "id": "breakthrough",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 184.56,
      "formula": "61.50% + 17.58% × 7",
      "multiplierByLevel": [92.82,100.46,108.04,118.73,126.31,135.11,147.21,159.39,171.57,184.56],
      "segmentsByLevel": [[[30.94,1],[8.84,7]],[[33.47,1],[9.57,7]],[[36.01,1],[10.29,7]],[[39.56,1],[11.31,7]],[[42.1,1],[12.03,7]],[[45.02,1],[12.87,7]],[[49.07,1],[14.02,7]],[[53.13,1],[15.18,7]],[[57.19,1],[16.34,7]],[[61.5,1],[17.58,7]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 164.32,
      "formula": "41.08% × 4",
      "multiplierByLevel": [82.64,89.44,96.2,105.72,112.48,120.28,131.12,141.96,152.8,164.32],
      "segmentsByLevel": [[[20.66,4]],[[22.36,4]],[[24.05,4]],[[26.43,4]],[[28.12,4]],[[30.07,4]],[[32.78,4]],[[35.49,4]],[[38.2,4]],[[41.08,4]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "104.98%",
      "multiplierByLevel": [52.8,57.13,61.46,67.53,71.86,76.83,83.76,90.69,97.62,104.98]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 222.69,
      "formula": "74.23% × 3",
      "multiplierByLevel": [112.02,121.2,130.38,143.25,152.43,162.99,177.69,192.36,207.06,222.69],
      "segmentsByLevel": [[[37.34,3]],[[40.4,3]],[[43.46,3]],[[47.75,3]],[[50.81,3]],[[54.33,3]],[[59.23,3]],[[64.12,3]],[[69.02,3]],[[74.23,3]]]
    },
    {
      "id": "skill_standard",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 63.94,
      "formula": "63.94%",
      "multiplierByLevel": [32.16,34.8,37.44,41.13,43.77,46.8,51.02,55.24,59.46,63.94]
    },
    {
      "id": "skill_counter",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 182.99,
      "formula": "61.00% + 121.99%",
      "multiplierByLevel": [92.04,99.6,107.15,117.71,125.25,133.94,146.01,158.09,170.16,182.99],
      "segmentsByLevel": [[[30.68,1],[61.36,1]],[[33.2,1],[66.4,1]],[[35.72,1],[71.43,1]],[[39.24,1],[78.47,1]],[[41.75,1],[83.5,1]],[[44.65,1],[89.29,1]],[[48.67,1],[97.34,1]],[[52.7,1],[105.39,1]],[[56.72,1],[113.44,1]],[[61,1],[121.99,1]]]
    },
    {
      "id": "skill_targeted",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 287.29,
      "formula": "86.19% + 28.73% + 172.37%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "redundantKineticEnergy",
      "fallbackSkillId": "skill_standard",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [144.5,156.36,168.2,184.8,196.66,210.27,229.24,248.19,267.16,287.29],
      "segmentsByLevel": [[[43.35,1],[14.45,1],[86.7,1]],[[46.91,1],[15.64,1],[93.81,1]],[[50.46,1],[16.82,1],[100.92,1]],[[55.44,1],[18.48,1],[110.88,1]],[[59,1],[19.67,1],[117.99,1]],[[63.08,1],[21.03,1],[126.16,1]],[[68.77,1],[22.93,1],[137.54,1]],[[74.46,1],[24.82,1],[148.91,1]],[[80.15,1],[26.72,1],[160.29,1]],[[86.19,1],[28.73,1],[172.37,1]]]
    },
    {
      "id": "skill_riposte",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 287.29,
      "formula": "86.19% + 28.73% + 172.37%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "redundantKineticEnergy",
      "fallbackSkillId": "skill_counter",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [144.5,156.36,168.2,184.8,196.66,210.27,229.24,248.19,267.16,287.29],
      "segmentsByLevel": [[[43.35,1],[14.45,1],[86.7,1]],[[46.91,1],[15.64,1],[93.81,1]],[[50.46,1],[16.82,1],[100.92,1]],[[55.44,1],[18.48,1],[110.88,1]],[[59,1],[19.67,1],[117.99,1]],[[63.08,1],[21.03,1],[126.16,1]],[[68.77,1],[22.93,1],[137.54,1]],[[74.46,1],[24.82,1],[148.91,1]],[[80.15,1],[26.72,1],[160.29,1]],[[86.19,1],[28.73,1],[172.37,1]]]
    },
    {
      "id": "lib_rekindle",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 318.52,
      "formula": "318.52%",
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [160.22,173.35,186.49,204.88,218.02,233.13,254.15,275.17,296.19,318.52]
    },
    {
      "id": "lib_last",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1274.08,
      "formula": "191.12% + 1082.96%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "multiplierByLevel": [640.86,693.4,745.96,819.52,872.07,932.51,1016.59,1100.66,1184.75,1274.08],
      "segmentsByLevel": [[[96.13,1],[544.73,1]],[[104.01,1],[589.39,1]],[[111.9,1],[634.06,1]],[[122.93,1],[696.59,1]],[[130.81,1],[741.26,1]],[[139.88,1],[792.63,1]],[[152.49,1],[864.1,1]],[[165.1,1],[935.56,1]],[[177.72,1],[1007.03,1]],[[191.12,1],[1082.96,1]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 202,
      "formula": "24.24% × 5 + 80.80%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [101.64,109.98,118.31,129.98,138.31,147.89,161.22,174.5,187.84,202],
      "segmentsByLevel": [[[12.2,5],[40.64,1]],[[13.2,5],[43.98,1]],[[14.2,5],[47.31,1]],[[15.6,5],[51.98,1]],[[16.6,5],[55.31,1]],[[17.75,5],[59.14,1]],[[19.35,5],[64.47,1]],[[20.94,5],[69.8,1]],[[22.54,5],[75.14,1]],[[24.24,5],[80.8,1]]]
    },
    {
      "id": "forte_daybreak",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 198.81,
      "formula": "198.81%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "blaze",
        "value": 30
      },
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
    },
    {
      "id": "forte_dawning",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 424.07,
      "formula": "424.07%",
      "requiresResource": "resource_gate_3",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [213.3,230.8,248.29,272.77,290.26,310.38,338.36,366.35,394.33,424.07]
    },
    {
      "id": "forte_nightfall",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 397.63,
      "perStack": 9.95,
      "stackResource": "blaze",
      "stackMax": 40,
      "stackLabel": "blaze",
      "formula": "135.20% + 262.43% + 9.95% × 焰光",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [200,216.41,232.81,255.77,272.17,291.03,317.27,343.5,369.75,397.63],
      "segmentsByLevel": [[[68,1],[132,1]],[[73.58,1],[142.83,1]],[[79.16,1],[153.65,1]],[[86.96,1],[168.81,1]],[[92.54,1],[179.63,1]],[[98.95,1],[192.08,1]],[[107.87,1],[209.4,1]],[[116.79,1],[226.71,1]],[[125.72,1],[244.03,1]],[[135.2,1],[262.43,1]]],
      "perStackByLevel": [5,5.41,5.82,6.4,6.81,7.28,7.94,8.59,9.25,9.95]
    },
    {
      "id": "forte_lightsmash",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 424.07,
      "formula": "424.07%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "blaze",
        "value": 30
      },
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ],
      "multiplierByLevel": [213.3,230.8,248.29,272.77,290.26,310.38,338.36,366.35,394.33,424.07]
    },
    {
      "id": "outro_beacon",
      "category": "outroSkill",
      "damageType": "lightNoise",
      "multiplier": 150,
      "formula": "150%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_nightfall",
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "options": [
        {
          "value": "form_1_option_1"
        }
      ]
    },
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
      "id": "b_inferno_basic_mult",
      "zone": "skillMultBonus",
      "value": 25,
      "scope": "self",
      "damageType": "basic",
      "requiresState": "form_1_option_1",
      "duration": 20
    },
    {
      "id": "b_quick_spectro",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 12,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 14
    },
    {
      "id": "b_sunburst_tag_amp",
      "zone": "amplify",
      "damageType": "lightNoise",
      "value": 20,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "duration": 14
    },
    {
      "id": "b_sunburst_effect_amp",
      "zone": "amplify",
      "effect": "lightNoise",
      "value": 20,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "duration": 14
    },
    {
      "id": "b_outro_spectro_amp",
      "zone": "amplify",
      "element": "spectro",
      "value": 20,
      "scope": "team",
      "requiresState": "target_1_option_1",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 20
    },
    {
      "id": "b_outro_ember_amp",
      "zone": "amplify",
      "damageType": "lightNoise",
      "value": 600,
      "scope": "self",
      "skills": [
        "outro_beacon"
      ],
      "requiresState": "target_1_option_1",
      "maxStacks": 60,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "heliacal_ember",
      "triggerOutro": true
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 50,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_targeted",
            "skill_riposte"
          ],
          "duration": 14
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self"
        },
        {
          "id": "k2_skill",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "skill_targeted",
            "skill_riposte"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_last",
          "multAddByResource": {
            "id": "blaze",
            "rate": 8,
            "cap": 1200
          },
          "scope": "self",
          "skills": [
            "lib_last"
          ],
          "requiresState": "form_1_option_1"
        }
      ]
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
          "id": "k5_rekindle",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "lib_rekindle"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_slash",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "forte_daybreak",
            "forte_dawning",
            "forte_nightfall",
            "forte_lightsmash"
          ]
        }
      ]
    }
  ],
  "modes": null
});
