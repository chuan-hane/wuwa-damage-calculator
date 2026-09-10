"use strict";

WUWA.register({
  "id": "suisui",
  "aliases": [],
  "debut": 3.5,
  "element": "glacio",
  "weaponType": 5,
  "quality": 5,
  "effectTypes": [
    "frost"
  ],
  "signatureWeaponId": "firstlights_herald",
  "portrait": "",
  "base": {
    "hp": 16712,
    "attack": 287,
    "defense": 1099,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "hpPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "cloud_breath",
      "max": 120,
      "defaultValue": "max"
    },
    {
      "id": "floral_epistle",
      "max": 600,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 63.15,
      "formula": "63.15%",
      "impliedStates": [
        "form_zephyr"
      ],
      "multiplierByLevel": [31.76,34.37,36.97,40.62,43.22,46.22,50.39,54.55,58.72,63.15]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 122,
      "formula": "61.00% + 61.00%",
      "impliedStates": [
        "form_zephyr"
      ],
      "multiplierByLevel": [61.36,66.4,71.44,78.48,83.5,89.3,97.34,105.4,113.44,122],
      "segmentsByLevel": [[[30.68,1],[30.68,1]],[[33.2,1],[33.2,1]],[[35.72,1],[35.72,1]],[[39.24,1],[39.24,1]],[[41.75,1],[41.75,1]],[[44.65,1],[44.65,1]],[[48.67,1],[48.67,1]],[[52.7,1],[52.7,1]],[[56.72,1],[56.72,1]],[[61,1],[61,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 139.34,
      "formula": "41.80% + 41.80% + 55.74%",
      "impliedStates": [
        "form_zephyr"
      ],
      "multiplierByLevel": [70.1,75.84,81.59,89.63,95.37,101.99,111.19,120.37,129.57,139.34],
      "segmentsByLevel": [[[21.03,1],[21.03,1],[28.04,1]],[[22.75,1],[22.75,1],[30.34,1]],[[24.48,1],[24.48,1],[32.63,1]],[[26.89,1],[26.89,1],[35.85,1]],[[28.61,1],[28.61,1],[38.15,1]],[[30.6,1],[30.6,1],[40.79,1]],[[33.36,1],[33.36,1],[44.47,1]],[[36.11,1],[36.11,1],[48.15,1]],[[38.87,1],[38.87,1],[51.83,1]],[[41.8,1],[41.8,1],[55.74,1]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 159.08,
      "formula": "79.53% + 15.91% × 5",
      "impliedStates": [
        "form_zephyr"
      ],
      "multiplierByLevel": [80,86.58,93.16,102.36,108.89,116.46,126.96,137.4,147.9,159.08],
      "segmentsByLevel": [[[40,1],[8,5]],[[43.28,1],[8.66,5]],[[46.56,1],[9.32,5]],[[51.16,1],[10.24,5]],[[54.44,1],[10.89,5]],[[58.21,1],[11.65,5]],[[63.46,1],[12.7,5]],[[68.7,1],[13.74,5]],[[73.95,1],[14.79,5]],[[79.53,1],[15.91,5]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 70.72,
      "formula": "70.72%",
      "impliedStates": [
        "form_zephyr"
      ],
      "multiplierByLevel": [35.57,38.49,41.41,45.49,48.41,51.76,56.43,61.09,65.76,70.72]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 170.67,
      "formula": "51.20% + 51.20% + 68.27%",
      "impliedStates": [
        "form_zephyr"
      ],
      "multiplierByLevel": [85.86,92.9,99.93,109.79,116.83,124.93,136.19,147.44,158.7,170.67],
      "segmentsByLevel": [[[25.76,1],[25.76,1],[34.34,1]],[[27.87,1],[27.87,1],[37.16,1]],[[29.98,1],[29.98,1],[39.97,1]],[[32.94,1],[32.94,1],[43.91,1]],[[35.05,1],[35.05,1],[46.73,1]],[[37.48,1],[37.48,1],[49.97,1]],[[40.86,1],[40.86,1],[54.47,1]],[[44.23,1],[44.23,1],[58.98,1]],[[47.61,1],[47.61,1],[63.48,1]],[[51.2,1],[51.2,1],[68.27,1]]]
    },
    {
      "id": "skill_zephyr",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 143.16,
      "formula": "23.86% × 6",
      "impliedStates": [
        "form_zephyr"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [72,77.94,83.82,92.1,97.98,104.82,114.24,123.66,133.14,143.16],
      "segmentsByLevel": [[[12,6]],[[12.99,6]],[[13.97,6]],[[15.35,6]],[[16.33,6]],[[17.47,6]],[[19.04,6]],[[20.61,6]],[[22.19,6]],[[23.86,6]]]
    },
    {
      "id": "skill_awakening",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "stat": "hp",
      "multiplier": 28.63,
      "formula": "28.63%",
      "requiresResourceFull": "cloud_breath",
      "requiresState": [
        "form_zephyr"
      ],
      "fallbackSkillId": "skill_zephyr",
      "triggerEvents": [
        "castResonanceSkill",
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [14.4,15.59,16.77,18.42,19.6,20.96,22.85,24.74,26.63,28.63]
    },
    {
      "id": "skill_drizzle",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 143.16,
      "formula": "11.93% × 6 + 71.58%",
      "impliedStates": [
        "form_drizzle"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [72,77.96,83.85,92.12,98.01,104.83,114.23,123.69,133.16,143.16],
      "segmentsByLevel": [[[6,6],[36,1]],[[6.5,6],[38.96,1]],[[6.99,6],[41.91,1]],[[7.68,6],[46.04,1]],[[8.17,6],[48.99,1]],[[8.74,6],[52.39,1]],[[9.52,6],[57.11,1]],[[10.31,6],[61.83,1]],[[11.1,6],[66.56,1]],[[11.93,6],[71.58,1]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "hp",
      "multiplier": 28.63,
      "formula": "28.63%",
      "triggerEvents": [
        "introEntry",
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [14.4,15.59,16.77,18.42,19.6,20.96,22.85,24.74,26.63,28.63]
    },
    {
      "id": "drizzle_na1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 78.28,
      "formula": "19.57% × 2 + 19.57% × 2",
      "impliedStates": [
        "form_drizzle"
      ],
      "multiplierByLevel": [39.36,42.6,45.84,50.36,53.6,57.28,62.44,67.64,72.8,78.28],
      "segmentsByLevel": [[[9.84,2],[9.84,2]],[[10.65,2],[10.65,2]],[[11.46,2],[11.46,2]],[[12.59,2],[12.59,2]],[[13.4,2],[13.4,2]],[[14.32,2],[14.32,2]],[[15.61,2],[15.61,2]],[[16.91,2],[16.91,2]],[[18.2,2],[18.2,2]],[[19.57,2],[19.57,2]]]
    },
    {
      "id": "drizzle_na2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 159.07,
      "formula": "31.81% + 15.91% × 2 + 15.91% × 2 + 31.81% + 31.81%",
      "impliedStates": [
        "form_drizzle"
      ],
      "multiplierByLevel": [80,86.6,93.17,102.37,108.9,116.47,126.97,137.4,147.9,159.07],
      "segmentsByLevel": [[[16,1],[8,2],[8,2],[16,1],[16,1]],[[17.32,1],[8.66,2],[8.66,2],[17.32,1],[17.32,1]],[[18.63,1],[9.32,2],[9.32,2],[18.63,1],[18.63,1]],[[20.47,1],[10.24,2],[10.24,2],[20.47,1],[20.47,1]],[[21.78,1],[10.89,2],[10.89,2],[21.78,1],[21.78,1]],[[23.29,1],[11.65,2],[11.65,2],[23.29,1],[23.29,1]],[[25.39,1],[12.7,2],[12.7,2],[25.39,1],[25.39,1]],[[27.48,1],[13.74,2],[13.74,2],[27.48,1],[27.48,1]],[[29.58,1],[14.79,2],[14.79,2],[29.58,1],[29.58,1]],[[31.81,1],[15.91,2],[15.91,2],[31.81,1],[31.81,1]]]
    },
    {
      "id": "drizzle_na3",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 165.12,
      "formula": "13.76% × 3 + 13.76% × 3 + 13.76% × 3 + 13.76% × 3",
      "impliedStates": [
        "form_drizzle"
      ],
      "multiplierByLevel": [83.04,89.88,96.72,106.2,113.04,120.84,131.76,142.68,153.6,165.12],
      "segmentsByLevel": [[[6.92,3],[6.92,3],[6.92,3],[6.92,3]],[[7.49,3],[7.49,3],[7.49,3],[7.49,3]],[[8.06,3],[8.06,3],[8.06,3],[8.06,3]],[[8.85,3],[8.85,3],[8.85,3],[8.85,3]],[[9.42,3],[9.42,3],[9.42,3],[9.42,3]],[[10.07,3],[10.07,3],[10.07,3],[10.07,3]],[[10.98,3],[10.98,3],[10.98,3],[10.98,3]],[[11.89,3],[11.89,3],[11.89,3],[11.89,3]],[[12.8,3],[12.8,3],[12.8,3],[12.8,3]],[[13.76,3],[13.76,3],[13.76,3],[13.76,3]]]
    },
    {
      "id": "drizzle_na4",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 159.05,
      "formula": "159.05%",
      "impliedStates": [
        "form_drizzle"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ],
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
    },
    {
      "id": "drizzle_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 238.59,
      "formula": "11.93% × 10 + 119.29%",
      "impliedStates": [
        "form_drizzle"
      ],
      "multiplierByLevel": [120,129.92,139.74,153.53,163.35,174.71,190.38,206.15,221.93,238.59],
      "segmentsByLevel": [[[6,10],[60,1]],[[6.5,10],[64.92,1]],[[6.99,10],[69.84,1]],[[7.68,10],[76.73,1]],[[8.17,10],[81.65,1]],[[8.74,10],[87.31,1]],[[9.52,10],[95.18,1]],[[10.31,10],[103.05,1]],[[11.1,10],[110.93,1]],[[11.93,10],[119.29,1]]]
    },
    {
      "id": "illuminating_dew",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "104.98%",
      "impliedStates": [
        "form_drizzle"
      ],
      "multiplierByLevel": [52.8,57.13,61.46,67.53,71.86,76.83,83.76,90.69,97.62,104.98]
    },
    {
      "id": "swallow_cut",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 107.65,
      "formula": "107.65%",
      "impliedStates": [
        "form_drizzle"
      ],
      "multiplierByLevel": [54.15,58.59,63.03,69.24,73.68,78.79,85.89,93,100.1,107.65]
    }
  ],
  "defaultSkillId": "skill_awakening",
  "skillEvents": [
    {
      "skills": [
        "skill_awakening",
        "intro",
        "drizzle_na4"
      ],
      "event": "applyGlacioChafe",
      "stacks": 1
    }
  ],
  "combatStates": [
    {
      "id": "form",
      "kind": "form",
      "required": true,
      "defaultValue": "form_zephyr",
      "options": [
        {
          "value": "form_zephyr"
        },
        {
          "value": "form_drizzle"
        }
      ]
    },
    {
      "id": "ceaseless_landscape",
      "kind": "field",
      "options": [
        {
          "value": "ceaseless_landscape_active"
        }
      ]
    },
    {
      "id": "reflecting_shadows",
      "kind": "status",
      "options": [
        {
          "value": "reflecting_shadows_active"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_spring_crit",
      "zone": "critRate",
      "value": 80,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "skill_awakening",
        "intro"
      ],
      "skills": [
        "skill_awakening",
        "intro"
      ]
    },
    {
      "id": "b_spring_glacio",
      "zone": "damageBonus",
      "element": "glacio",
      "value": 240,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "skill_awakening",
        "intro"
      ],
      "skills": [
        "skill_awakening",
        "intro"
      ]
    },
    {
      "id": "b_landscape_effect_cap",
      "zone": "effectCapBonus",
      "effects": [
        "lightNoise",
        "fusion",
        "frost",
        "windErosion",
        "electro"
      ],
      "value": 3,
      "scope": "team",
      "requiresState": "ceaseless_landscape_active",
      "defaultActive": false,
      "duration": 15
    },
    {
      "id": "b_landscape_havoc_def_ignore",
      "zone": "defIgnore",
      "element": "havoc",
      "value": 6,
      "scope": "team",
      "requiresState": "ceaseless_landscape_active",
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_landscape_havoc_res",
      "zone": "resShred",
      "element": "havoc",
      "value": 12,
      "scope": "team",
      "requiresState": "ceaseless_landscape_active",
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_outro_all_amp",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 30
    },
    {
      "id": "b_outro_reflecting_final",
      "zone": "finalDmg",
      "scope": "team",
      "requiresAllStates": [
        "ceaseless_landscape_active",
        "reflecting_shadows_active"
      ],
      "defaultActive": false,
      "triggerOutro": true,
      "requiresResourceAtLeast": {
        "id": "floral_epistle",
        "value": 400
      },
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -200,
        "rate": 0.2,
        "min": 0,
        "cap": 12
      }
    },
    {
      "id": "b_outro_flower_atk",
      "maxSeq": 0,
      "zone": "attackPercent",
      "scope": "team",
      "requiresState": "ceaseless_landscape_active",
      "defaultActive": false,
      "triggerOutro": true,
      "requiresResourceAtLeast": {
        "id": "floral_epistle",
        "value": 600
      },
      "duration": 6,
      "scaleBy": {
        "stat": "energyRegen",
        "statBonus": -200,
        "rate": 0.8333333333333334,
        "min": 0,
        "cap": 50
      }
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "c1_outro_flower_atk",
          "zone": "attackPercent",
          "scope": "team",
          "requiresState": "ceaseless_landscape_active",
          "defaultActive": false,
          "triggerOutro": true,
          "requiresResourceAtLeast": {
            "id": "floral_epistle",
            "value": 600
          },
          "duration": 6,
          "scaleBy": {
            "stat": "energyRegen",
            "statBonus": -200,
            "rate": 0.8333333333333334,
            "min": 0,
            "cap": 50
          }
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "c2_effect_cd",
          "zone": "critDamage",
          "value": 50,
          "scope": "team",
          "requiresState": "ceaseless_landscape_active",
          "defaultActive": false,
          "duration": 30
        }
      ]
    },
    {
      "seq": 3
    },
    {
      "seq": 4
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "c5_drizzle_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "drizzle_na1",
            "drizzle_na2",
            "drizzle_na3",
            "drizzle_na4",
            "drizzle_heavy"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "c6_awake_intro_cd",
          "zone": "critDamage",
          "value": 500,
          "scope": "self",
          "skills": [
            "intro",
            "skill_awakening"
          ]
        }
      ]
    }
  ],
  "validSubs": [
    "hpFlat",
    "energyRegen",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 350433,
  "echoLead": "350433:thousand_puppet_pavilion",
  "modes": null
});
