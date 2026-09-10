WUWA.register({
  "id": "carlotta",
  "aliases": [],
  "debut": 2,
  "element": "glacio",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "the_last_dance",
  "portrait": "",
  "base": {
    "hp": 12450,
    "attack": 462,
    "defense": 1197,
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
      "id": "moldableCrystals",
      "max": 6,
      "defaultValue": "max"
    },
    {
      "id": "substance",
      "max": 120,
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
      "multiplier": 54.08,
      "formula": "54.08%",
      "multiplierByLevel": [27.2,29.44,31.67,34.79,37.02,39.58,43.15,46.72,50.29,54.08]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 131.83,
      "formula": "39.55% + 39.55% + 52.73%",
      "multiplierByLevel": [66.3,71.76,77.19,84.8,90.23,96.49,105.19,113.89,122.59,131.83],
      "segmentsByLevel": [[[19.89,1],[19.89,1],[26.52,1]],[[21.53,1],[21.53,1],[28.7,1]],[[23.16,1],[23.16,1],[30.87,1]],[[25.44,1],[25.44,1],[33.92,1]],[[27.07,1],[27.07,1],[36.09,1]],[[28.95,1],[28.95,1],[38.59,1]],[[31.56,1],[31.56,1],[42.07,1]],[[34.17,1],[34.17,1],[45.55,1]],[[36.78,1],[36.78,1],[49.03,1]],[[39.55,1],[39.55,1],[52.73,1]]]
    },
    {
      "id": "need_a1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 65.91,
      "formula": "65.91%",
      "multiplierByLevel": [33.15,35.87,38.59,42.4,45.12,48.24,52.59,56.94,61.29,65.91]
    },
    {
      "id": "need_a2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 133.51,
      "formula": "60.08% + 73.43%",
      "multiplierByLevel": [67.16,72.67,78.17,85.88,91.38,97.72,106.53,115.34,124.15,133.51],
      "segmentsByLevel": [[[30.22,1],[36.94,1]],[[32.7,1],[39.97,1]],[[35.18,1],[42.99,1]],[[38.65,1],[47.23,1]],[[41.12,1],[50.26,1]],[[43.97,1],[53.75,1]],[[47.94,1],[58.59,1]],[[51.9,1],[63.44,1]],[[55.87,1],[68.28,1]],[[60.08,1],[73.43,1]]]
    },
    {
      "id": "need_a3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 233.25,
      "formula": "139.93% + 23.33% × 4",
      "multiplierByLevel": [117.3,126.96,136.57,150.05,159.66,170.69,186.09,201.48,216.88,233.25],
      "segmentsByLevel": [[[70.38,1],[11.73,4]],[[76.16,1],[12.7,4]],[[81.93,1],[13.66,4]],[[90.01,1],[15.01,4]],[[95.78,1],[15.97,4]],[[102.41,1],[17.07,4]],[[111.65,1],[18.61,4]],[[120.88,1],[20.15,4]],[[130.12,1],[21.69,4]],[[139.93,1],[23.33,4]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 152.12,
      "formula": "22.82% × 2 + 22.82% × 2 + 60.84%",
      "multiplierByLevel": [76.52,82.79,89.06,97.86,104.13,111.33,121.39,131.4,141.46,152.12],
      "segmentsByLevel": [[[11.48,2],[11.48,2],[30.6,1]],[[12.42,2],[12.42,2],[33.11,1]],[[13.36,2],[13.36,2],[35.62,1]],[[14.68,2],[14.68,2],[39.14,1]],[[15.62,2],[15.62,2],[41.65,1]],[[16.7,2],[16.7,2],[44.53,1]],[[18.21,2],[18.21,2],[48.55,1]],[[19.71,2],[19.71,2],[52.56,1]],[[21.22,2],[21.22,2],[56.58,1]],[[22.82,2],[22.82,2],[60.84,1]]]
    },
    {
      "id": "heavy_limit",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 228.18,
      "formula": "34.23% × 2 + 34.23% × 2 + 91.26%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "substance",
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [114.78,124.19,133.59,146.78,156.19,166.99,182.06,197.12,212.18,228.18],
      "segmentsByLevel": [[[17.22,2],[17.22,2],[45.9,1]],[[18.63,2],[18.63,2],[49.67,1]],[[20.04,2],[20.04,2],[53.43,1]],[[22.02,2],[22.02,2],[58.7,1]],[[23.43,2],[23.43,2],[62.47,1]],[[25.05,2],[25.05,2],[66.79,1]],[[27.31,2],[27.31,2],[72.82,1]],[[29.57,2],[29.57,2],[78.84,1]],[[31.83,2],[31.83,2],[84.86,1]],[[34.23,2],[34.23,2],[91.26,1]]]
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
      "id": "air_greet",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 239.98,
      "formula": "107.99% + 131.99%",
      "multiplierByLevel": [120.71,130.6,140.51,154.36,164.26,175.64,191.47,207.31,223.15,239.98],
      "segmentsByLevel": [[[54.32,1],[66.39,1]],[[58.77,1],[71.83,1]],[[63.23,1],[77.28,1]],[[69.46,1],[84.9,1]],[[73.92,1],[90.34,1]],[[79.04,1],[96.6,1]],[[86.16,1],[105.31,1]],[[93.29,1],[114.02,1]],[[100.42,1],[122.73,1]],[[107.99,1],[131.99,1]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 241.32,
      "formula": "103.77% + 137.55%",
      "multiplierByLevel": [121.39,131.34,141.3,155.23,165.18,176.63,192.56,208.48,224.4,241.32],
      "segmentsByLevel": [[[52.2,1],[69.19,1]],[[56.48,1],[74.86,1]],[[60.76,1],[80.54,1]],[[66.75,1],[88.48,1]],[[71.03,1],[94.15,1]],[[75.95,1],[100.68,1]],[[82.8,1],[109.76,1]],[[89.65,1],[118.83,1]],[[96.49,1],[127.91,1]],[[103.77,1],[137.55,1]]]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 288.22,
      "formula": "144.11% + 144.11%",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [144.98,156.86,168.74,185.38,197.28,210.94,229.96,248.98,268,288.22],
      "segmentsByLevel": [[[72.49,1],[72.49,1]],[[78.43,1],[78.43,1]],[[84.37,1],[84.37,1]],[[92.69,1],[92.69,1]],[[98.64,1],[98.64,1]],[[105.47,1],[105.47,1]],[[114.98,1],[114.98,1]],[[124.49,1],[124.49,1]],[[134,1],[134,1]],[[144.11,1],[144.11,1]]]
    },
    {
      "id": "skill_shine",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 563.64,
      "formula": "112.73% + 112.73% + 338.18%",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [283.5,306.75,330,362.55,385.8,412.54,449.73,486.93,524.13,563.64],
      "segmentsByLevel": [[[56.7,1],[56.7,1],[170.1,1]],[[61.35,1],[61.35,1],[184.05,1]],[[66,1],[66,1],[198,1]],[[72.51,1],[72.51,1],[217.53,1]],[[77.16,1],[77.16,1],[231.48,1]],[[82.51,1],[82.51,1],[247.52,1]],[[89.95,1],[89.95,1],[269.83,1]],[[97.39,1],[97.39,1],[292.15,1]],[[104.83,1],[104.83,1],[314.47,1]],[[112.73,1],[112.73,1],[338.18,1]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 402.71,
      "formula": "402.71%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [202.56,219.17,235.78,259.03,275.64,294.74,321.32,347.89,374.47,402.71]
    },
    {
      "id": "death",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 241.64,
      "formula": "183.64% + 14.50% × 4",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [121.57,131.5,141.48,155.44,165.42,176.89,192.8,208.76,224.72,241.64],
      "segmentsByLevel": [[[92.37,1],[7.3,4]],[[99.94,1],[7.89,4]],[[107.52,1],[8.49,4]],[[118.12,1],[9.33,4]],[[125.7,1],[9.93,4]],[[134.41,1],[10.62,4]],[[146.52,1],[11.57,4]],[[158.64,1],[12.53,4]],[[170.76,1],[13.49,4]],[[183.64,1],[14.5,4]]]
    },
    {
      "id": "fatal",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 644.33,
      "formula": "644.33%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [324.09,350.67,377.24,414.45,441.03,471.59,514.11,556.63,599.15,644.33]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 298.23,
      "formula": "178.93% + 59.65% × 2",
      "multiplierByLevel": [150,162.3,174.6,191.84,204.14,218.28,237.95,257.64,277.33,298.23],
      "segmentsByLevel": [[[90,1],[30,2]],[[97.38,1],[32.46,2]],[[104.76,1],[34.92,2]],[[115.1,1],[38.37,2]],[[122.48,1],[40.83,2]],[[130.96,1],[43.66,2]],[[142.77,1],[47.59,2]],[[154.58,1],[51.53,2]],[[166.39,1],[55.47,2]],[[178.93,1],[59.65,2]]]
    },
    {
      "id": "forte_last",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 835.36,
      "formula": "66.83% × 5 + 501.21%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "substance",
      "requiresState": "mechanic_1_option_1",
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [420.21,454.68,489.1,537.34,571.82,611.44,666.57,721.69,776.82,835.36],
      "segmentsByLevel": [[[33.62,5],[252.11,1]],[[36.38,5],[272.78,1]],[[39.13,5],[293.45,1]],[[42.99,5],[322.39,1]],[[45.75,5],[343.07,1]],[[48.92,5],[366.84,1]],[[53.33,5],[399.92,1]],[[57.74,5],[432.99,1]],[[62.15,5],[466.07,1]],[[66.83,5],[501.21,1]]]
    },
    {
      "id": "c3_death_knell",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 1032.18,
      "formula": "1032.18%",
      "seq": 3,
      "triggeredDamage": true,
      "fixedLevel": true
    },
    {
      "id": "outro_closing_remark",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 794.2,
      "formula": "794.20%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_last",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 10,
  "echoLead": "10:sentry_construct",
  "combatStates": [
    {
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        }
      ]
    },
    {
      "id": "status_1",
      "kind": "status",
      "options": [
        {
          "value": "status_1_option_1"
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
      "id": "dissociation",
      "zone": "defIgnore",
      "value": 18,
      "scope": "self",
      "requiresState": "target_1_option_1",
      "duration": 4
    },
    {
      "id": "revealer",
      "zone": "skillMultBonus",
      "value": 80,
      "scope": "self",
      "skills": [
        "lib",
        "death",
        "fatal"
      ],
      "requiresState": "status_1_option_1",
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critRate",
          "value": 12.5,
          "scope": "self",
          "requiresState": "target_1_option_1"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "skillMultBonus",
          "value": 126,
          "scope": "self",
          "skills": [
            "fatal"
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
          "value": 93,
          "scope": "self",
          "skills": [
            "skill",
            "skill_shine"
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
          "damageType": "resonanceSkill",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "heavy",
            "heavy_limit",
            "forte_last"
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
          "value": 47,
          "scope": "self",
          "skills": [
            "forte_last"
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
          "value": 186.6,
          "scope": "self",
          "skills": [
            "death"
          ]
        }
      ]
    }
  ],
  "modes": null
});
