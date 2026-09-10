WUWA.register({
  "id": "encore",
  "aliases": [],
  "debut": 1,
  "element": "fusion",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "cosmic_ripples",
  "portrait": "",
  "base": {
    "hp": 10512,
    "attack": 425,
    "defense": 1246,
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
      "id": "mayhem",
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
      "multiplier": 55.66,
      "formula": "55.66%",
      "multiplierByLevel": [28,30.29,32.59,35.8,38.1,40.74,44.41,48.09,51.76,55.66]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 66.2,
      "formula": "66.20%",
      "multiplierByLevel": [33.3,36.03,38.76,42.58,45.31,48.45,52.82,57.19,61.56,66.2]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.6,
      "formula": "66.30% × 2",
      "multiplierByLevel": [66.7,72.16,77.62,85.28,90.76,97.04,105.8,114.54,123.3,132.6],
      "segmentsByLevel": [[[33.35,2]],[[36.08,2]],[[38.81,2]],[[42.64,2]],[[45.38,2]],[[48.52,2]],[[52.9,2]],[[57.27,2]],[[61.65,2]],[[66.3,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 153.08,
      "formula": "38.27% × 4",
      "multiplierByLevel": [77,83.28,89.6,98.44,104.76,112.04,122.12,132.24,142.32,153.08],
      "segmentsByLevel": [[[19.25,4]],[[20.82,4]],[[22.4,4]],[[24.61,4]],[[26.19,4]],[[28.01,4]],[[30.53,4]],[[33.06,4]],[[35.58,4]],[[38.27,4]]]
    },
    {
      "id": "skill_woolies",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.57,
      "formula": "238.57%",
      "multiplierByLevel": [120,129.84,139.67,153.45,163.29,174.61,190.35,206.1,221.84,238.57]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 187.08,
      "formula": "187.08%",
      "multiplierByLevel": [94.1,101.81,109.53,120.33,128.05,136.92,149.27,161.61,173.96,187.08]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.26,
      "formula": "123.26%",
      "multiplierByLevel": [62,67.08,72.16,79.28,84.36,90.21,98.35,106.48,114.61,123.26]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.88,
      "formula": "125.94% × 2",
      "multiplierByLevel": [126.68,137.08,147.46,162.02,172.4,184.36,200.98,217.6,234.22,251.88],
      "segmentsByLevel": [[[63.34,2]],[[68.54,2]],[[73.73,2]],[[81.01,2]],[[86.2,2]],[[92.18,2]],[[100.49,2]],[[108.8,2]],[[117.11,2]],[[125.94,2]]]
    },
    {
      "id": "skill_flaming_woolies",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 612.88,
      "formula": "76.61% × 8",
      "multiplierByLevel": [308.24,333.52,358.8,394.24,419.52,448.56,489.04,529.44,569.92,612.88],
      "segmentsByLevel": [[[38.53,8]],[[41.69,8]],[[44.85,8]],[[49.28,8]],[[52.44,8]],[[56.07,8]],[[61.13,8]],[[66.18,8]],[[71.24,8]],[[76.61,8]]]
    },
    {
      "id": "skill_energetic_welcome",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 339.16,
      "formula": "339.16%",
      "multiplierByLevel": [170.6,184.58,198.57,218.16,232.15,248.24,270.62,293,315.38,339.16]
    },
    {
      "id": "lib_cosmos_frolicking_1",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 180.36,
      "formula": "90.18% × 2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [90.72,98.16,105.6,116.02,123.46,132.02,143.92,155.82,167.72,180.36],
      "segmentsByLevel": [[[45.36,2]],[[49.08,2]],[[52.8,2]],[[58.01,2]],[[61.73,2]],[[66.01,2]],[[71.96,2]],[[77.91,2]],[[83.86,2]],[[90.18,2]]]
    },
    {
      "id": "lib_cosmos_frolicking_2",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 169.2,
      "formula": "56.40% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [85.11,92.1,99.06,108.84,115.83,123.84,135,146.16,157.35,169.2],
      "segmentsByLevel": [[[28.37,3]],[[30.7,3]],[[33.02,3]],[[36.28,3]],[[38.61,3]],[[41.28,3]],[[45,3]],[[48.72,3]],[[52.45,3]],[[56.4,3]]]
    },
    {
      "id": "lib_cosmos_frolicking_3",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 263.96,
      "formula": "65.99% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [132.76,143.68,154.56,169.8,180.68,193.2,210.6,228.04,245.44,263.96],
      "segmentsByLevel": [[[33.19,4]],[[35.92,4]],[[38.64,4]],[[42.45,4]],[[45.17,4]],[[48.3,4]],[[52.65,4]],[[57.01,4]],[[61.36,4]],[[65.99,4]]]
    },
    {
      "id": "lib_4",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 582.03,
      "formula": "194.01% × 3",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [292.77,316.77,340.77,374.37,398.37,426,464.4,502.8,541.2,582.03],
      "segmentsByLevel": [[[97.59,3]],[[105.59,3]],[[113.59,3]],[[124.79,3]],[[132.79,3]],[[142,3]],[[154.8,3]],[[167.6,3]],[[180.4,3]],[[194.01,3]]]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a15"
      ],
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 217.58,
      "formula": "217.58%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [109.44,118.42,127.39,139.96,148.93,159.25,173.61,187.97,202.32,217.58]
    },
    {
      "id": "lib_cosmos_rampage",
      "legacyIds": [
        "a16"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 253.28,
      "formula": "63.32% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [127.4,137.84,148.28,162.88,173.36,185.36,202.08,218.8,235.52,253.28],
      "segmentsByLevel": [[[31.85,4]],[[34.46,4]],[[37.07,4]],[[40.72,4]],[[43.34,4]],[[46.34,4]],[[50.52,4]],[[54.7,4]],[[58.88,4]],[[63.32,4]]]
    },
    {
      "id": "dodge_2",
      "legacyIds": [
        "a17"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 263.96,
      "formula": "65.99% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [132.76,143.68,154.56,169.8,180.68,193.2,210.6,228.04,245.44,263.96],
      "segmentsByLevel": [[[33.19,4]],[[35.92,4]],[[38.64,4]],[[42.45,4]],[[45.17,4]],[[48.3,4]],[[52.65,4]],[[57.01,4]],[[61.36,4]],[[65.99,4]]]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a18"
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
      "id": "heavy_3",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 334,
      "formula": "334.00%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "mayhem",
        "value": 100
      },
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [168,181.77,195.55,214.83,228.61,244.45,266.49,288.53,310.58,334]
    },
    {
      "id": "heavy_4",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 773.73,
      "formula": "46.42% × 6 + 495.21%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "mayhem",
        "value": 100
      },
      "fallbackSkillId": "heavy_2",
      "impliedStates": [
        "state_1_option_1"
      ],
      "multiplierByLevel": [389.18,421.07,453.01,497.69,529.57,566.26,617.36,668.4,719.5,773.73],
      "segmentsByLevel": [[[23.35,6],[249.08,1]],[[25.26,6],[269.51,1]],[[27.18,6],[289.93,1]],[[29.86,6],[318.53,1]],[[31.77,6],[338.95,1]],[[33.97,6],[362.44,1]],[[37.04,6],[395.12,1]],[[40.1,6],[427.8,1]],[[43.17,6],[460.48,1]],[[46.42,6],[495.21,1]]]
    },
    {
      "id": "outro_thermal_field",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 176.76,
      "formula": "176.76% / 1.5s",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "heavy_4",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 2,
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
      "zone": "damageBonus",
      "value": 10,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "defaultActive": false
    },
    {
      "id": "b2",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "skill_flaming_woolies",
        "lib_cosmos_rampage"
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
          "zone": "damageBonus",
          "element": "fusion",
          "value": 12,
          "scope": "self",
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 6
        }
      ]
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "heavy_3",
            "heavy_4"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "heavy_4"
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
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 35,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "attackPercent",
          "value": 25,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "maxStacks": 5,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 10
        }
      ]
    }
  ],
  "modes": null
});
