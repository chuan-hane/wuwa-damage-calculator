WUWA.register({
  "id": "calcharo",
  "aliases": [],
  "debut": 1,
  "element": "electro",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "lustrous_razor",
  "portrait": "",
  "base": {
    "hp": 10500,
    "attack": 437,
    "defense": 1185,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "critDamage": 16
    }
  },
  "resources": [
    {
      "id": "cruelty",
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "killingIntent",
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
      "multiplier": 91.46,
      "formula": "45.73% × 2",
      "multiplierByLevel": [46,49.78,53.56,58.84,62.6,66.94,72.98,79.02,85.06,91.46],
      "segmentsByLevel": [[[23,2]],[[24.89,2]],[[26.78,2]],[[29.42,2]],[[31.3,2]],[[33.47,2]],[[36.49,2]],[[39.51,2]],[[42.53,2]],[[45.73,2]]]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 99.41,
      "formula": "99.41%",
      "multiplierByLevel": [50,54.1,58.2,63.94,68.04,72.76,79.32,85.88,92.44,99.41]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 212.95,
      "formula": "85.18% + 42.59% × 3",
      "multiplierByLevel": [107.1,115.9,124.69,136.99,145.75,155.85,169.9,183.95,198,212.95],
      "segmentsByLevel": [[[42.84,1],[21.42,3]],[[46.36,1],[23.18,3]],[[49.87,1],[24.94,3]],[[54.79,1],[27.4,3]],[[58.3,1],[29.15,3]],[[62.34,1],[31.17,3]],[[67.96,1],[33.98,3]],[[73.58,1],[36.79,3]],[[79.2,1],[39.6,3]],[[85.18,1],[42.59,3]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 265.03,
      "formula": "79.51% × 2 + 106.01%",
      "multiplierByLevel": [133.3,144.24,155.17,170.47,181.4,193.97,211.47,228.96,246.44,265.03],
      "segmentsByLevel": [[[39.99,2],[53.32,1]],[[43.27,2],[57.7,1]],[[46.55,2],[62.07,1]],[[51.14,2],[68.19,1]],[[54.42,2],[72.56,1]],[[58.19,2],[77.59,1]],[[63.44,2],[84.59,1]],[[68.69,2],[91.58,1]],[[73.93,2],[98.58,1]],[[79.51,2],[106.01,1]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 206.8,
      "formula": "41.36% × 5",
      "multiplierByLevel": [104,112.55,121.1,133,141.55,151.35,165,178.65,192.3,206.8],
      "segmentsByLevel": [[[20.8,5]],[[22.51,5]],[[24.22,5]],[[26.6,5]],[[28.31,5]],[[30.27,5]],[[33,5]],[[35.73,5]],[[38.46,5]],[[41.36,5]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
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
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 284.91,
      "formula": "66.48% × 3 + 85.47%",
      "multiplierByLevel": [143.31,155.06,166.84,183.26,195.04,208.54,227.35,246.13,264.94,284.91],
      "segmentsByLevel": [[[33.44,3],[42.99,1]],[[36.18,3],[46.52,1]],[[38.93,3],[50.05,1]],[[42.76,3],[54.98,1]],[[45.51,3],[58.51,1]],[[48.66,3],[62.56,1]],[[53.05,3],[68.2,1]],[[57.43,3],[73.84,1]],[[61.82,3],[79.48,1]],[[66.48,3],[85.47,1]]]
    },
    {
      "id": "skill_extermination_order_1",
      "legacyIds": [
        "s1"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 171.9,
      "formula": "51.57% × 2 + 68.76%",
      "multiplierByLevel": [86.47,93.56,100.66,110.57,117.67,125.83,137.17,148.5,159.86,171.9],
      "segmentsByLevel": [[[25.94,2],[34.59,1]],[[28.07,2],[37.42,1]],[[30.2,2],[40.26,1]],[[33.17,2],[44.23,1]],[[35.3,2],[47.07,1]],[[37.75,2],[50.33,1]],[[41.15,2],[54.87,1]],[[44.55,2],[59.4,1]],[[47.96,2],[63.94,1]],[[51.57,2],[68.76,1]]]
    },
    {
      "id": "skill_extermination_order_2",
      "legacyIds": [
        "s2"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 257.86,
      "formula": "77.36% × 2 + 103.14%",
      "multiplierByLevel": [129.7,140.33,150.97,165.86,176.5,188.73,205.74,222.76,239.77,257.86],
      "segmentsByLevel": [[[38.91,2],[51.88,1]],[[42.1,2],[56.13,1]],[[45.29,2],[60.39,1]],[[49.76,2],[66.34,1]],[[52.95,2],[70.6,1]],[[56.62,2],[75.49,1]],[[61.72,2],[82.3,1]],[[66.83,2],[89.1,1]],[[71.93,2],[95.91,1]],[[77.36,2],[103.14,1]]]
    },
    {
      "id": "skill_extermination_order_3",
      "legacyIds": [
        "s3"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 429.74,
      "formula": "214.87% × 2",
      "multiplierByLevel": [216.16,233.88,251.6,276.42,294.14,314.52,342.88,371.24,399.6,429.74],
      "segmentsByLevel": [[[108.08,2]],[[116.94,2]],[[125.8,2]],[[138.21,2]],[[147.07,2]],[[157.26,2]],[[171.44,2]],[[185.62,2]],[[199.8,2]],[[214.87,2]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 596.43,
      "formula": "596.43%",
      "multiplierByLevel": [300,324.6,349.2,383.64,408.24,436.53,475.89,515.25,554.61,596.43]
    },
    {
      "id": "lib_necessary",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 397.62,
      "formula": "198.81% × 2",
      "triggerEvents": [
        "introEntry"
      ],
      "levelCategory": "resonanceLiberation",
      "multiplierByLevel": [200,216.4,232.8,255.76,272.16,291.02,317.26,343.5,369.74,397.62],
      "segmentsByLevel": [[[100,2]],[[108.2,2]],[[116.4,2]],[[127.88,2]],[[136.08,2]],[[145.51,2]],[[158.63,2]],[[171.75,2]],[[184.87,2]],[[198.81,2]]]
    },
    {
      "id": "lib_hounds_1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 88.07,
      "formula": "88.07%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [44.3,47.93,51.56,56.65,60.28,64.46,70.27,76.08,81.89,88.07]
    },
    {
      "id": "lib_hounds_2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 176.14,
      "formula": "35.23% × 2 + 52.84% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [88.6,95.88,103.14,113.3,120.56,128.94,140.54,152.16,163.8,176.14],
      "segmentsByLevel": [[[17.72,2],[26.58,2]],[[19.18,2],[28.76,2]],[[20.63,2],[30.94,2]],[[22.66,2],[33.99,2]],[[24.11,2],[36.17,2]],[[25.79,2],[38.68,2]],[[28.11,2],[42.16,2]],[[30.43,2],[45.65,2]],[[32.76,2],[49.14,2]],[[35.23,2],[52.84,2]]]
    },
    {
      "id": "lib_hounds_3",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 163.84,
      "formula": "163.84%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [82.41,89.17,95.93,105.39,112.14,119.92,130.73,141.54,152.35,163.84]
    },
    {
      "id": "lib_hounds_4",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 208.92,
      "formula": "34.82% × 6",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [105.12,113.7,122.34,134.4,142.98,152.94,166.68,180.48,194.28,208.92],
      "segmentsByLevel": [[[17.52,6]],[[18.95,6]],[[20.39,6]],[[22.4,6]],[[23.83,6]],[[25.49,6]],[[27.78,6]],[[30.08,6]],[[32.38,6]],[[34.82,6]]]
    },
    {
      "id": "lib_hounds_5",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 300.38,
      "formula": "150.19% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [151.08,163.48,175.86,193.22,205.6,219.84,239.66,259.48,279.32,300.38],
      "segmentsByLevel": [[[75.54,2]],[[81.74,2]],[[87.93,2]],[[96.61,2]],[[102.8,2]],[[109.92,2]],[[119.83,2]],[[129.74,2]],[[139.66,2]],[[150.19,2]]]
    },
    {
      "id": "lib_heavy",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 310.15,
      "formula": "62.03% × 5",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [156,168.8,181.6,199.5,212.3,227,247.5,267.95,288.4,310.15],
      "segmentsByLevel": [[[31.2,5]],[[33.76,5]],[[36.32,5]],[[39.9,5]],[[42.46,5]],[[45.4,5]],[[49.5,5]],[[53.59,5]],[[57.68,5]],[[62.03,5]]]
    },
    {
      "id": "lib_dodge",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 341.94,
      "formula": "56.99% × 6",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [172.02,186.12,200.22,219.96,234.06,250.32,272.88,295.44,318,341.94],
      "segmentsByLevel": [[[28.67,6]],[[31.02,6]],[[33.37,6]],[[36.66,6]],[[39.01,6]],[[41.72,6]],[[45.48,6]],[[49.24,6]],[[53,6]],[[56.99,6]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.84,
      "formula": "39.77% × 2 + 59.65% × 2",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.9,136.1,145.54,158.64,171.76,184.9,198.84],
      "segmentsByLevel": [[[20,2],[30,2]],[[21.64,2],[32.46,2]],[[23.28,2],[34.92,2]],[[25.58,2],[38.37,2]],[[27.22,2],[40.83,2]],[[29.11,2],[43.66,2]],[[31.73,2],[47.59,2]],[[34.35,2],[51.53,2]],[[36.98,2],[55.47,2]],[[39.77,2],[59.65,2]]]
    },
    {
      "id": "forte_mercy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 391.1,
      "formula": "39.11% × 8 + 78.22%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "cruelty",
        "value": 3
      },
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [196.7,212.89,229,251.59,267.7,286.29,312.09,337.89,363.69,391.1],
      "segmentsByLevel": [[[19.67,8],[39.34,1]],[[21.29,8],[42.57,1]],[[22.9,8],[45.8,1]],[[25.16,8],[50.31,1]],[[26.77,8],[53.54,1]],[[28.63,8],[57.25,1]],[[31.21,8],[62.41,1]],[[33.79,8],[67.57,1]],[[36.37,8],[72.73,1]],[[39.11,8],[78.22,1]]]
    },
    {
      "id": "forte_death_messenger",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 977.69,
      "formula": "97.77% × 8 + 195.53%",
      "requiresResource": "resource_gate_2",
      "requiresResourceAtLeast": {
        "id": "killingIntent",
        "value": 5
      },
      "fallbackSkillId": "lib_hounds_5",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [491.79,532.1,572.4,628.89,669.2,715.59,780.1,844.6,909.1,977.69],
      "segmentsByLevel": [[[49.18,8],[98.35,1]],[[53.21,8],[106.42,1]],[[57.24,8],[114.48,1]],[[62.89,8],[125.77,1]],[[66.92,8],[133.84,1]],[[71.56,8],[143.11,1]],[[78.01,8],[156.02,1]],[[84.46,8],[168.92,1]],[[90.91,8],[181.82,1]],[[97.77,8],[195.53,1]]]
    },
    {
      "id": "k6_hunting_shadow",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 200,
      "formula": "100.00% × 2",
      "seq": 6,
      "requiresResource": "resource_gate_3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "fixedLevel": true
    },
    {
      "id": "outro_shadowy_raid",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 587.94,
      "formula": "195.98% + 391.96%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_death_messenger",
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
      "id": "state_1",
      "kind": "form",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "typeBonus",
      "damageType": "resonanceLiberation",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "forte_mercy"
      ],
      "duration": 15
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
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "lib_necessary"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "damageBonus",
          "element": "electro",
          "value": 25,
          "scope": "self",
          "requiresState": "state_1_option_1"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "element": "electro",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "typeBonus",
          "damageType": "introSkill",
          "value": 50,
          "scope": "self",
          "skills": [
            "intro",
            "lib_necessary"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": []
    }
  ],
  "modes": null
});
