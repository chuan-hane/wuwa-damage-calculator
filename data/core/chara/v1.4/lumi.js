WUWA.register({
  "id": "lumi",
  "aliases": [],
  "debut": 1.4,
  "element": "electro",
  "weaponType": 1,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "discord",
  "portrait": "",
  "base": {
    "hp": 8500,
    "attack": 337,
    "defense": 879,
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
      "id": "lightEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "yellow_na",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.43,
      "formula": "31.81% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [48,51.96,55.89,61.41,65.34,69.87,76.17,82.44,88.74,95.43],
      "segmentsByLevel": [[[16,3]],[[17.32,3]],[[18.63,3]],[[20.47,3]],[[21.78,3]],[[23.29,3]],[[25.39,3]],[[27.48,3]],[[29.58,3]],[[31.81,3]]]
    },
    {
      "id": "red_na1",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.66,
      "formula": "90.66%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [45.6,49.34,53.08,58.32,62.06,66.36,72.34,78.32,84.31,90.66]
    },
    {
      "id": "red_na2",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 215.36,
      "formula": "107.66% + 21.54% × 5",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [108.3,117.2,126.09,138.5,147.39,157.6,171.8,186.06,200.26,215.36],
      "segmentsByLevel": [[[54.15,1],[10.83,5]],[[58.6,1],[11.72,5]],[[63.04,1],[12.61,5]],[[69.25,1],[13.85,5]],[[73.69,1],[14.74,5]],[[78.8,1],[15.76,5]],[[85.9,1],[17.18,5]],[[93.01,1],[18.61,5]],[[100.11,1],[20.03,5]],[[107.66,1],[21.54,5]]]
    },
    {
      "id": "red_na3",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 215.32,
      "formula": "64.60% + 150.72%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [108.3,117.19,126.07,138.5,147.39,157.6,171.8,186.02,200.22,215.32],
      "segmentsByLevel": [[[32.49,1],[75.81,1]],[[35.16,1],[82.03,1]],[[37.82,1],[88.25,1]],[[41.55,1],[96.95,1]],[[44.22,1],[103.17,1]],[[47.28,1],[110.32,1]],[[51.54,1],[120.26,1]],[[55.81,1],[130.21,1]],[[60.07,1],[140.15,1]],[[64.6,1],[150.72,1]]]
    },
    {
      "id": "red_heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.22,
      "formula": "66.11% × 2",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [66.5,71.96,77.42,85.06,90.5,96.78,105.5,114.22,122.94,132.22],
      "segmentsByLevel": [[[33.25,2]],[[35.98,2]],[[38.71,2]],[[42.53,2]],[[45.25,2]],[[48.39,2]],[[52.75,2]],[[57.11,2]],[[61.47,2]],[[66.11,2]]]
    },
    {
      "id": "red_air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.33,
      "formula": "113.33%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [57,61.68,66.35,72.9,77.57,82.95,90.42,97.9,105.38,113.33]
    },
    {
      "id": "red_dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 334.6,
      "formula": "167.30% + 33.46% × 5",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [168.3,182.16,195.96,215.27,229.07,244.9,266.99,289.08,311.17,334.6],
      "segmentsByLevel": [[[84.15,1],[16.83,5]],[[91.06,1],[18.22,5]],[[97.96,1],[19.6,5]],[[107.62,1],[21.53,5]],[[114.52,1],[22.91,5]],[[122.45,1],[24.49,5]],[[133.49,1],[26.7,5]],[[144.53,1],[28.91,5]],[[155.57,1],[31.12,5]],[[167.3,1],[33.46,5]]]
    },
    {
      "id": "skill_pounce",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 181.32,
      "formula": "181.32%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [91.2,98.68,106.16,116.63,124.11,132.71,144.68,156.64,168.61,181.32]
    },
    {
      "id": "skill_rebound",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 173.76,
      "formula": "173.76%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [87.4,94.57,101.74,111.77,118.94,127.18,138.65,150.11,161.58,173.76]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 954.29,
      "formula": "954.29%",
      "multiplierByLevel": [480,519.36,558.72,613.83,653.19,698.45,761.43,824.4,887.38,954.29]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 168.99,
      "formula": "56.33% × 3",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [85.02,91.98,98.94,108.72,115.68,123.69,134.85,146.01,157.14,168.99],
      "segmentsByLevel": [[[28.34,3]],[[30.66,3]],[[32.98,3]],[[36.24,3]],[[38.56,3]],[[41.23,3]],[[44.95,3]],[[48.67,3]],[[52.38,3]],[[56.33,3]]]
    },
    {
      "id": "forte_glare",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 81.52,
      "formula": "81.52%",
      "impliedStates": [
        "mode_1_option_3"
      ],
      "multiplierByLevel": [41,44.37,47.73,52.44,55.8,59.66,65.04,70.42,75.8,81.52]
    },
    {
      "id": "red_na1_2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 120.25,
      "formula": "120.25%",
      "impliedStates": [
        "mode_1_option_4"
      ],
      "multiplierByLevel": [60.48,65.44,70.4,77.35,82.31,88.01,95.94,103.88,111.81,120.25]
    },
    {
      "id": "red_na2_2",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 276.67,
      "formula": "138.32% + 27.67% × 5",
      "impliedStates": [
        "mode_1_option_4"
      ],
      "multiplierByLevel": [139.17,150.58,161.98,177.97,189.38,202.49,220.76,238.99,257.27,276.67],
      "segmentsByLevel": [[[69.57,1],[13.92,5]],[[75.28,1],[15.06,5]],[[80.98,1],[16.2,5]],[[88.97,1],[17.8,5]],[[94.68,1],[18.94,5]],[[101.24,1],[20.25,5]],[[110.36,1],[22.08,5]],[[119.49,1],[23.9,5]],[[128.62,1],[25.73,5]],[[138.32,1],[27.67,5]]]
    },
    {
      "id": "red_na3_2",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 312.42,
      "formula": "93.73% + 218.69%",
      "impliedStates": [
        "mode_1_option_4"
      ],
      "multiplierByLevel": [157.15,170.03,182.92,200.96,213.85,228.66,249.28,269.9,290.52,312.42],
      "segmentsByLevel": [[[47.15,1],[110,1]],[[51.01,1],[119.02,1]],[[54.88,1],[128.04,1]],[[60.29,1],[140.67,1]],[[64.16,1],[149.69,1]],[[68.6,1],[160.06,1]],[[74.79,1],[174.49,1]],[[80.97,1],[188.93,1]],[[87.16,1],[203.36,1]],[[93.73,1],[218.69,1]]]
    },
    {
      "id": "red_heavy_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 176.36,
      "formula": "88.18% × 2",
      "impliedStates": [
        "mode_1_option_4"
      ],
      "multiplierByLevel": [88.7,95.98,103.26,113.44,120.72,129.08,140.72,152.36,163.98,176.36],
      "segmentsByLevel": [[[44.35,2]],[[47.99,2]],[[51.63,2]],[[56.72,2]],[[60.36,2]],[[64.54,2]],[[70.36,2]],[[76.18,2]],[[81.99,2]],[[88.18,2]]]
    },
    {
      "id": "forte_energized_pounce",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 366.62,
      "formula": "183.31% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "lightEnergy",
      "fallbackSkillId": "skill_pounce",
      "impliedStates": [
        "mode_1_option_4"
      ],
      "multiplierByLevel": [184.4,199.54,214.66,235.82,250.94,268.34,292.52,316.72,340.92,366.62],
      "segmentsByLevel": [[[92.2,2]],[[99.77,2]],[[107.33,2]],[[117.91,2]],[[125.47,2]],[[134.17,2]],[[146.26,2]],[[158.36,2]],[[170.46,2]],[[183.31,2]]]
    },
    {
      "id": "forte_energized_rebound",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 251.7,
      "formula": "251.70%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "lightEnergy",
      "fallbackSkillId": "skill_rebound",
      "impliedStates": [
        "mode_1_option_3"
      ],
      "multiplierByLevel": [126.6,136.99,147.37,161.9,172.28,184.22,200.83,217.44,234.05,251.7]
    },
    {
      "id": "forte_blinding_light",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 0,
      "perStack": 74.56,
      "stackMax": 4,
      "stackLabel": "段",
      "formula": "74.56% × 段数",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "lightEnergy",
        "value": 25
      },
      "multiplierByLevel": [0,0,0,0,0,0,0,0,0,0],
      "perStackByLevel": [37.5,40.58,43.65,47.96,51.03,54.57,59.49,64.41,69.33,74.56]
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 3,
  "combatStates": [
    {
      "id": "mode_1",
      "kind": "mode",
      "required": true,
      "defaultValue": "mode_1_option_1",
      "options": [
        {
          "value": "mode_1_option_1"
        },
        {
          "value": "mode_1_option_2"
        },
        {
          "value": "mode_1_option_3"
        },
        {
          "value": "mode_1_option_4"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "electro",
      "value": 10,
      "scope": "self",
      "requiresState": [
        "mode_1_option_2",
        "mode_1_option_4"
      ]
    },
    {
      "id": "b2",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "forte_energized_pounce",
        "forte_energized_rebound"
      ],
      "duration": 5
    },
    {
      "id": "b3",
      "zone": "amplify",
      "damageType": "resonanceSkill",
      "value": 38,
      "scope": "team",
      "duration": 10,
      "triggerOutro": true,
      "defaultActive": false
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
          "zone": "defIgnore",
          "value": 20,
          "scope": "self",
          "skills": [
            "forte_energized_pounce",
            "forte_energized_rebound"
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
          "value": 30,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 30,
          "scope": "self"
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
            "forte_blinding_light"
          ],
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
            "lib"
          ],
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
