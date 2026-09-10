WUWA.register({
  "id": "jinhsi",
  "aliases": [],
  "debut": 1.1,
  "element": "spectro",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "ages_of_harvest",
  "portrait": "",
  "resources": [
    {
      "id": "incandescence",
      "min": 0,
      "max": 50,
      "defaultValue": "max"
    }
  ],
  "base": {
    "hp": 10825,
    "attack": 412,
    "defense": 1258,
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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 66.47,
      "formula": "66.47%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [33.43,36.18,38.92,42.75,45.5,48.65,53.03,57.42,61.81,66.47]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.49,
      "formula": "38.99% + 19.50% × 3",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [49.04,53.05,57.09,62.7,66.74,71.35,77.79,84.2,90.65,97.49],
      "segmentsByLevel": [[[19.61,1],[9.81,3]],[[21.22,1],[10.61,3]],[[22.83,1],[11.42,3]],[[25.08,1],[12.54,3]],[[26.69,1],[13.35,3]],[[28.54,1],[14.27,3]],[[31.11,1],[15.56,3]],[[33.68,1],[16.84,3]],[[36.26,1],[18.13,3]],[[38.99,1],[19.5,3]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 106.49,
      "formula": "10.65% × 7 + 31.94%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [53.59,57.99,62.38,68.5,72.89,77.98,84.99,91.99,99,106.49],
      "segmentsByLevel": [[[5.36,7],[16.07,1]],[[5.8,7],[17.39,1]],[[6.24,7],[18.7,1]],[[6.85,7],[20.55,1]],[[7.29,7],[21.86,1]],[[7.8,7],[23.38,1]],[[8.5,7],[25.49,1]],[[9.2,7],[27.59,1]],[[9.9,7],[29.7,1]],[[10.65,7],[31.94,1]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.72,
      "formula": "63.09% + 94.63%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [79.34,85.85,92.35,101.45,107.97,115.44,125.85,136.25,146.67,157.72],
      "segmentsByLevel": [[[31.74,1],[47.6,1]],[[34.34,1],[51.51,1]],[[36.94,1],[55.41,1]],[[40.58,1],[60.87,1]],[[43.19,1],[64.78,1]],[[46.18,1],[69.26,1]],[[50.34,1],[75.51,1]],[[54.5,1],[81.75,1]],[[58.67,1],[88,1]],[[63.09,1],[94.63,1]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 238.6,
      "formula": "23.86% × 5 + 35.79% + 83.51%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [120,129.88,139.7,153.48,163.31,174.67,190.39,206.11,221.88,238.6],
      "segmentsByLevel": [[[12,5],[18,1],[42,1]],[[12.99,5],[19.48,1],[45.45,1]],[[13.97,5],[20.96,1],[48.89,1]],[[15.35,5],[23.02,1],[53.71,1]],[[16.33,5],[24.5,1],[57.16,1]],[[17.47,5],[26.2,1],[61.12,1]],[[19.04,5],[28.56,1],[66.63,1]],[[20.61,5],[30.92,1],[72.14,1]],[[22.19,5],[33.28,1],[77.65,1]],[[23.86,5],[35.79,1],[83.51,1]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.28,
      "formula": "12.33% + 24.66% + 86.29%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [62,67.09,72.18,79.29,84.38,90.24,98.37,106.49,114.64,123.28],
      "segmentsByLevel": [[[6.2,1],[12.4,1],[43.4,1]],[[6.71,1],[13.42,1],[46.96,1]],[[7.22,1],[14.44,1],[50.52,1]],[[7.93,1],[15.86,1],[55.5,1]],[[8.44,1],[16.88,1],[59.06,1]],[[9.03,1],[18.05,1],[63.16,1]],[[9.84,1],[19.68,1],[68.85,1]],[[10.65,1],[21.3,1],[74.54,1]],[[11.47,1],[22.93,1],[80.24,1]],[[12.33,1],[24.66,1],[86.29,1]]]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 146.78,
      "formula": "14.68% × 7 + 44.02%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [73.8,79.89,85.9,94.4,100.48,107.4,117.09,126.79,136.48,146.78],
      "segmentsByLevel": [[[7.38,7],[22.14,1]],[[7.99,7],[23.96,1]],[[8.59,7],[25.77,1]],[[9.44,7],[28.32,1]],[[10.05,7],[30.13,1]],[[10.74,7],[32.22,1]],[[11.71,7],[35.12,1]],[[12.68,7],[38.03,1]],[[13.65,7],[40.93,1]],[[14.68,7],[44.02,1]]]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 155.68,
      "formula": "19.46% × 4 + 77.84%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [78.31,84.77,91.18,100.15,106.56,113.97,124.23,134.53,144.78,155.68],
      "segmentsByLevel": [[[9.79,4],[39.15,1]],[[10.6,4],[42.37,1]],[[11.4,4],[45.58,1]],[[12.52,4],[50.07,1]],[[13.32,4],[53.28,1]],[[14.25,4],[56.97,1]],[[15.53,4],[62.11,1]],[[16.82,4],[67.25,1]],[[18.1,4],[72.38,1]],[[19.46,4],[77.84,1]]]
    },
    {
      "id": "skill_overflowing_radiance",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 197.29,
      "formula": "9.87% × 4 + 29.59% × 4 + 39.45%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "requiresState": "mechanic_1_option_1",
      "multiplierByLevel": [99.2,107.39,115.54,126.9,135,144.39,157.4,170.4,183.4,197.29],
      "segmentsByLevel": [[[4.96,4],[14.88,4],[19.84,1]],[[5.37,4],[16.11,4],[21.47,1]],[[5.78,4],[17.33,4],[23.1,1]],[[6.35,4],[19.03,4],[25.38,1]],[[6.75,4],[20.25,4],[27,1]],[[7.22,4],[21.66,4],[28.87,1]],[[7.87,4],[23.61,4],[31.48,1]],[[8.52,4],[25.56,4],[34.08,1]],[[9.17,4],[27.51,4],[36.68,1]],[[9.87,4],[29.59,4],[39.45,1]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1666.03,
      "formula": "499.81% + 1166.22%",
      "multiplierByLevel": [838,906.73,975.44,1071.65,1140.36,1219.39,1329.33,1439.27,1549.22,1666.03],
      "segmentsByLevel": [[[251.4,1],[586.6,1]],[[272.02,1],[634.71,1]],[[292.63,1],[682.81,1]],[[321.5,1],[750.15,1]],[[342.11,1],[798.25,1]],[[365.82,1],[853.57,1]],[[398.8,1],[930.53,1]],[[431.78,1],[1007.49,1]],[[464.77,1],[1084.45,1]],[[499.81,1],[1166.22,1]]]
    },
    {
      "id": "loong_intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 159.05,
      "formula": "159.05%",
      "impliedStates": [
        "form_1_option_0"
      ],
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
    },
    {
      "id": "loong_na1",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 88.62,
      "formula": "88.62%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [44.58,48.23,51.89,57,60.66,64.86,70.71,76.56,82.41,88.62]
    },
    {
      "id": "loong_na2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 129.95,
      "formula": "77.97% + 25.99% + 25.99%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [65.38,70.74,76.09,83.6,88.95,95.13,103.7,112.28,120.85,129.95],
      "segmentsByLevel": [[[39.22,1],[13.08,1],[13.08,1]],[[42.44,1],[14.15,1],[14.15,1]],[[45.65,1],[15.22,1],[15.22,1]],[[50.16,1],[16.72,1],[16.72,1]],[[53.37,1],[17.79,1],[17.79,1]],[[57.07,1],[19.03,1],[19.03,1]],[[62.22,1],[20.74,1],[20.74,1]],[[67.36,1],[22.46,1],[22.46,1]],[[72.51,1],[24.17,1],[24.17,1]],[[77.97,1],[25.99,1],[25.99,1]]]
    },
    {
      "id": "loong_na3",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 165.74,
      "formula": "99.44% + 66.30%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [83.37,90.2,97.05,106.62,113.45,121.32,132.25,143.19,154.12,165.74],
      "segmentsByLevel": [[[50.02,1],[33.35,1]],[[54.12,1],[36.08,1]],[[58.23,1],[38.82,1]],[[63.97,1],[42.65,1]],[[68.07,1],[45.38,1]],[[72.79,1],[48.53,1]],[[79.35,1],[52.9,1]],[[85.91,1],[57.28,1]],[[92.47,1],[61.65,1]],[[99.44,1],[66.3,1]]]
    },
    {
      "id": "loong_na4",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 186.69,
      "formula": "18.67% × 6 + 74.67%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [93.9,101.6,109.3,120.09,127.79,136.67,148.98,161.29,173.6,186.69],
      "segmentsByLevel": [[[9.39,6],[37.56,1]],[[10.16,6],[40.64,1]],[[10.93,6],[43.72,1]],[[12.01,6],[48.03,1]],[[12.78,6],[51.11,1]],[[13.67,6],[54.65,1]],[[14.9,6],[59.58,1]],[[16.13,6],[64.51,1]],[[17.36,6],[69.44,1]],[[18.67,6],[74.67,1]]]
    },
    {
      "id": "crescent_forte_crescent_divinity",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 503.8,
      "formula": "100.76% + 75.57% × 2 + 251.90%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [253.4,274.19,294.98,324.06,344.85,368.74,401.99,435.24,468.48,503.8],
      "segmentsByLevel": [[[50.68,1],[38.01,2],[126.7,1]],[[54.84,1],[41.13,2],[137.09,1]],[[59,1],[44.25,2],[147.48,1]],[[64.81,1],[48.61,2],[162.03,1]],[[68.97,1],[51.73,2],[172.42,1]],[[73.75,1],[55.31,2],[184.37,1]],[[80.4,1],[60.3,2],[200.99,1]],[[87.05,1],[65.29,2],[217.61,1]],[[93.7,1],[70.27,2],[234.24,1]],[[100.76,1],[75.57,2],[251.9,1]]]
    },
    {
      "id": "loong_heavy",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 159.06,
      "formula": "47.72% + 111.34%",
      "requiresState": [
        "form_1_option_1",
        "form_1_option_2"
      ],
      "multiplierByLevel": [80,86.57,93.13,102.32,108.87,116.42,126.92,137.4,147.9,159.06],
      "segmentsByLevel": [[[24,1],[56,1]],[[25.97,1],[60.6,1]],[[27.94,1],[65.19,1]],[[30.7,1],[71.62,1]],[[32.66,1],[76.21,1]],[[34.93,1],[81.49,1]],[[38.08,1],[88.84,1]],[[41.22,1],[96.18,1]],[[44.37,1],[103.53,1]],[[47.72,1],[111.34,1]]]
    },
    {
      "id": "forte_illuminous_epiphany_solar",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 119.34,
      "formula": "19.89% × 6",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [60,64.92,69.84,76.74,81.66,87.36,95.22,103.08,110.94,119.34],
      "segmentsByLevel": [[[10,6]],[[10.82,6]],[[11.64,6]],[[12.79,6]],[[13.61,6]],[[14.56,6]],[[15.87,6]],[[17.18,6]],[[18.49,6]],[[19.89,6]]]
    },
    {
      "id": "loong_dodge",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 219.44,
      "formula": "43.89% + 32.92% × 2 + 109.71%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [110.39,119.44,128.48,141.14,150.2,160.6,175.1,189.57,204.05,219.44],
      "segmentsByLevel": [[[22.08,1],[16.56,2],[55.19,1]],[[23.89,1],[17.92,2],[59.71,1]],[[25.7,1],[19.27,2],[64.24,1]],[[28.23,1],[21.17,2],[70.57,1]],[[30.04,1],[22.53,2],[75.1,1]],[[32.12,1],[24.09,2],[80.3,1]],[[35.02,1],[26.27,2],[87.54,1]],[[37.91,1],[28.44,2],[94.78,1]],[[40.81,1],[30.61,2],[102.02,1]],[[43.89,1],[32.92,2],[109.71,1]]]
    },
    {
      "id": "forte_illuminous_epiphany_stella",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 347.92,
      "perStack": 44.54,
      "stackResource": "incandescence",
      "stackLabel": "韶光",
      "formula": "347.92% + 44.54% × 韶光",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [175,189.35,203.7,223.79,238.14,254.65,277.61,300.57,323.53,347.92],
      "perStackByLevel": [22.4,24.24,26.08,28.65,30.49,32.6,35.54,38.48,41.42,44.54]
    }
  ],
  "defaultSkillId": "forte_illuminous_epiphany_stella",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 5,
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "required": true,
      "defaultValue": "form_1_option_0",
      "options": [
        { "value": "form_1_option_0" },
        { "value": "form_1_option_1" },
        { "value": "form_1_option_2" }
      ]
    },
    {
      "id": "mechanic_1",
      "kind": "mechanic",
      "options": [
        { "value": "mechanic_1_option_1" }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 20,
      "scope": "self"
    },
    {
      "id": "b2",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "loong_intro"
      ]
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "amplify",
          "value": 80,
          "scope": "self",
          "skills": [
            "forte_illuminous_epiphany_stella"
          ],
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false
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
          "zone": "attackPercent",
          "value": 50,
          "scope": "self",
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "loong_intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 1
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
          "triggerSkills": [
            "lib",
            "forte_illuminous_epiphany_stella"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_mult",
          "zone": "skillMultBonus",
          "value": 45,
          "scope": "self",
          "skills": [
            "forte_illuminous_epiphany_stella",
            "forte_illuminous_epiphany_solar"
          ]
        }
      ]
    }
  ],
  "modes": null
});
