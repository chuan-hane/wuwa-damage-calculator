"use strict";

WUWA.register({
  "id": "jingran",
  "aliases": [],
  "debut": 3.6,
  "element": "fusion",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "thousandfold_deliverance",
  "portrait": "",
  "resources": [
    {
      "id": "qi",
      "min": 0,
      "max": 300,
      "defaultValue": "max"
    },
    {
      "id": "fire_of_life",
      "min": 0,
      "max": 100,
      "defaultValue": 0
    },
    {
      "id": "ghost_shroud",
      "min": 0,
      "max": 50,
      "defaultValue": 25
    }
  ],
  "base": {
    "hp": 15375,
    "attack": 312,
    "defense": 0,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critRate": 8,
      "hpPct": 12
    }
  },
  "fixedStats": {
    "defense": 0
  },
  "skills": [
    {
      "id": "yin_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 44.74,
      "formula": "44.74%",
      "impliedStates": [
        "yin_vessel"
      ],
      "multiplierByLevel": [22.5,24.35,26.19,28.78,30.62,32.74,35.7,38.65,41.6,44.74]
    },
    {
      "id": "yin_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 74.56,
      "formula": "37.28% × 2",
      "impliedStates": [
        "yin_vessel"
      ],
      "multiplierByLevel": [37.5,40.58,43.66,47.96,51.04,54.58,59.5,64.42,69.34,74.56],
      "segmentsByLevel": [[[18.75,1],[18.75,1]],[[20.29,1],[20.29,1]],[[21.83,1],[21.83,1]],[[23.98,1],[23.98,1]],[[25.52,1],[25.52,1]],[[27.29,1],[27.29,1]],[[29.75,1],[29.75,1]],[[32.21,1],[32.21,1]],[[34.67,1],[34.67,1]],[[37.28,1],[37.28,1]]]
    },
    {
      "id": "yin_na3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 109.32,
      "formula": "27.33% × 4",
      "impliedStates": [
        "yin_vessel"
      ],
      "multiplierByLevel": [55,59.52,64,70.32,74.84,80,87.24,94.44,101.64,109.32],
      "segmentsByLevel": [[[13.75,4]],[[14.88,4]],[[16,4]],[[17.58,4]],[[18.71,4]],[[20,4]],[[21.81,4]],[[23.61,4]],[[25.41,4]],[[27.33,4]]]
    },
    {
      "id": "yin_na4",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 153.16,
      "formula": "45.95% × 2 + 30.63% × 2",
      "impliedStates": [
        "yin_vessel"
      ],
      "multiplierByLevel": [77.04,83.36,89.68,98.5,104.84,112.1,122.2,132.3,142.4,153.16],
      "segmentsByLevel": [[[23.11,1],[23.11,1],[15.41,1],[15.41,1]],[[25.01,1],[25.01,1],[16.67,1],[16.67,1]],[[26.9,1],[26.9,1],[17.94,1],[17.94,1]],[[29.55,1],[29.55,1],[19.7,1],[19.7,1]],[[31.45,1],[31.45,1],[20.97,1],[20.97,1]],[[33.63,1],[33.63,1],[22.42,1],[22.42,1]],[[36.66,1],[36.66,1],[24.44,1],[24.44,1]],[[39.69,1],[39.69,1],[26.46,1],[26.46,1]],[[42.72,1],[42.72,1],[28.48,1],[28.48,1]],[[45.95,1],[45.95,1],[30.63,1],[30.63,1]]]
    },
    {
      "id": "yang_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 39.82,
      "formula": "39.82%",
      "impliedStates": [
        "yang_font"
      ],
      "multiplierByLevel": [20.03,21.67,23.31,25.61,27.26,29.14,31.77,34.4,37.03,39.82]
    },
    {
      "id": "yang_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 99.47,
      "formula": "59.68% + 39.79%",
      "impliedStates": [
        "yang_font"
      ],
      "multiplierByLevel": [50.03,54.14,58.24,63.98,68.08,72.8,79.37,85.93,92.49,99.47],
      "segmentsByLevel": [[[30.02,1],[20.01,1]],[[32.48,1],[21.66,1]],[[34.94,1],[23.3,1]],[[38.39,1],[25.59,1]],[[40.85,1],[27.23,1]],[[43.68,1],[29.12,1]],[[47.62,1],[31.75,1]],[[51.56,1],[34.37,1]],[[55.49,1],[37,1]],[[59.68,1],[39.79,1]]]
    },
    {
      "id": "yang_na3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 159.1,
      "formula": "47.73% × 2 + 63.64%",
      "impliedStates": [
        "yang_font"
      ],
      "multiplierByLevel": [80.03,86.6,93.16,102.36,108.9,116.46,126.96,137.46,147.96,159.1],
      "segmentsByLevel": [[[24.01,1],[24.01,1],[32.01,1]],[[25.98,1],[25.98,1],[34.64,1]],[[27.95,1],[27.95,1],[37.26,1]],[[30.71,1],[30.71,1],[40.94,1]],[[32.67,1],[32.67,1],[43.56,1]],[[34.94,1],[34.94,1],[46.58,1]],[[38.09,1],[38.09,1],[50.78,1]],[[41.24,1],[41.24,1],[54.98,1]],[[44.39,1],[44.39,1],[59.18,1]],[[47.73,1],[47.73,1],[63.64,1]]]
    },
    {
      "id": "yang_na4",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 124.24,
      "formula": "86.95% + 12.43% × 3",
      "impliedStates": [
        "yang_font"
      ],
      "multiplierByLevel": [62.49,67.6,72.75,79.9,85.05,90.94,99.14,107.34,115.5,124.24],
      "segmentsByLevel": [[[43.74,1],[6.25,3]],[[47.32,1],[6.76,3]],[[50.91,1],[7.28,3]],[[55.93,1],[7.99,3]],[[59.52,1],[8.51,3]],[[63.64,1],[9.1,3]],[[69.38,1],[9.92,3]],[[75.12,1],[10.74,3]],[[80.85,1],[11.55,3]],[[86.95,1],[12.43,3]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.45,
      "formula": "92.45%",
      "multiplierByLevel": [46.5,50.32,54.13,59.47,63.28,67.67,73.77,79.87,85.97,92.45]
    },
    {
      "id": "yin_dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 198.8,
      "formula": "49.70% × 4",
      "impliedStates": [
        "yin_vessel"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.48,158.6,171.72,184.84,198.8],
      "segmentsByLevel": [[[25,4]],[[27.05,4]],[[29.1,4]],[[31.97,4]],[[34.02,4]],[[36.37,4]],[[39.65,4]],[[42.93,4]],[[46.21,4]],[[49.7,4]]]
    },
    {
      "id": "yang_dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 248.57,
      "formula": "74.57% × 2 + 99.43%",
      "impliedStates": [
        "yang_font"
      ],
      "multiplierByLevel": [125.03,135.3,145.54,159.9,170.16,181.93,198.34,214.74,231.16,248.57],
      "segmentsByLevel": [[[37.51,1],[37.51,1],[50.01,1]],[[40.59,1],[40.59,1],[54.12,1]],[[43.66,1],[43.66,1],[58.22,1]],[[47.97,1],[47.97,1],[63.96,1]],[[51.05,1],[51.05,1],[68.06,1]],[[54.58,1],[54.58,1],[72.77,1]],[[59.5,1],[59.5,1],[79.34,1]],[[64.42,1],[64.42,1],[85.9,1]],[[69.35,1],[69.35,1],[92.46,1]],[[74.57,1],[74.57,1],[99.43,1]]]
    },
    {
      "id": "shadow_step",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 0,
      "formula": "30 + 25",
      "fixedDamage": 55,
      "fixedLevel": true
    },
    {
      "id": "skill_yin",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 164.04,
      "formula": "65.61% + 32.81% × 3",
      "impliedStates": [
        "yin_vessel"
      ],
      "multiplierByLevel": [82.5,89.29,96.05,105.54,112.29,120.05,130.89,141.7,152.54,164.04],
      "segmentsByLevel": [[[33,1],[16.5,3]],[[35.71,1],[17.86,3]],[[38.42,1],[19.21,3]],[[42.21,1],[21.11,3]],[[44.91,1],[22.46,3]],[[48.02,1],[24.01,3]],[[52.35,1],[26.18,3]],[[56.68,1],[28.34,3]],[[61.01,1],[30.51,3]],[[65.61,1],[32.81,3]]]
    },
    {
      "id": "skill_yin_followup",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 258.47,
      "formula": "51.69% + 25.85% × 2 + 38.77% × 4",
      "impliedStates": [
        "yin_vessel"
      ],
      "requiresResource": "cleanse_of_impurity",
      "multiplierByLevel": [130,140.67,151.32,166.27,176.92,189.15,206.2,223.27,240.32,258.47],
      "segmentsByLevel": [[[26,1],[13,2],[19.5,4]],[[28.13,1],[14.07,2],[21.1,4]],[[30.26,1],[15.13,2],[22.7,4]],[[33.25,1],[16.63,2],[24.94,4]],[[35.38,1],[17.69,2],[26.54,4]],[[37.83,1],[18.92,2],[28.37,4]],[[41.24,1],[20.62,2],[30.93,4]],[[44.65,1],[22.33,2],[33.49,4]],[[48.06,1],[24.03,2],[36.05,4]],[[51.69,1],[25.85,2],[38.77,4]]]
    },
    {
      "id": "skill_yang",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 164.04,
      "formula": "65.61% + 32.81% × 3",
      "impliedStates": [
        "yang_font"
      ],
      "multiplierByLevel": [82.5,89.29,96.05,105.54,112.29,120.05,130.89,141.7,152.54,164.04],
      "segmentsByLevel": [[[33,1],[16.5,3]],[[35.71,1],[17.86,3]],[[38.42,1],[19.21,3]],[[42.21,1],[21.11,3]],[[44.91,1],[22.46,3]],[[48.02,1],[24.01,3]],[[52.35,1],[26.18,3]],[[56.68,1],[28.34,3]],[[61.01,1],[30.51,3]],[[65.61,1],[32.81,3]]]
    },
    {
      "id": "skill_yang_followup",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 263.48,
      "formula": "65.87% × 2 + 131.74%",
      "impliedStates": [
        "yang_font"
      ],
      "requiresResource": "cleanse_of_impurity",
      "multiplierByLevel": [132.55,143.4,154.27,169.48,180.36,192.84,210.24,227.63,245,263.48],
      "segmentsByLevel": [[[33.14,1],[33.14,1],[66.27,1]],[[35.85,1],[35.85,1],[71.7,1]],[[38.57,1],[38.57,1],[77.13,1]],[[42.37,1],[42.37,1],[84.74,1]],[[45.09,1],[45.09,1],[90.18,1]],[[48.21,1],[48.21,1],[96.42,1]],[[52.56,1],[52.56,1],[105.12,1]],[[56.91,1],[56.91,1],[113.81,1]],[[61.25,1],[61.25,1],[122.5,1]],[[65.87,1],[65.87,1],[131.74,1]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 745.2,
      "formula": "93.15% × 8",
      "multiplierByLevel": [374.88,405.6,436.32,479.36,510.08,545.44,594.64,643.76,692.96,745.2],
      "segmentsByLevel": [[[46.86,8]],[[50.7,8]],[[54.54,8]],[[59.92,8]],[[63.76,8]],[[68.18,8]],[[74.33,8]],[[80.47,8]],[[86.62,8]],[[93.15,8]]]
    },
    {
      "id": "lib_chimei",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 83.51,
      "formula": "83.51%",
      "triggeredDamage": true,
      "impliedStates": [
        "yinghuo_active"
      ],
      "multiplierByLevel": [42,45.45,48.89,53.71,57.16,61.12,66.63,72.14,77.65,83.51]
    },
    {
      "id": "intro",
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
      "id": "forte_soul_raid",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 234.29,
      "formula": "16.40% × 2 + 21.09% × 3 + 138.22%",
      "impliedStates": [
        "yin_vessel"
      ],
      "requiresResourceAtLeast": {
        "id": "qi",
        "value": 300
      },
      "multiplierByLevel": [117.86,127.53,137.2,150.72,160.39,171.5,186.96,202.41,217.86,234.29],
      "segmentsByLevel": [[[8.25,2],[10.61,3],[69.53,1]],[[8.93,2],[11.48,3],[75.23,1]],[[9.61,2],[12.35,3],[80.93,1]],[[10.55,2],[13.57,3],[88.91,1]],[[11.23,2],[14.44,3],[94.61,1]],[[12.01,2],[15.44,3],[101.16,1]],[[13.09,2],[16.83,3],[110.29,1]],[[14.17,2],[18.22,3],[119.41,1]],[[15.25,2],[19.61,3],[128.53,1]],[[16.4,2],[21.09,3],[138.22,1]]]
    },
    {
      "id": "forte_stardome",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 240.38,
      "formula": "24.04% × 2 + 48.08% + 144.22%",
      "impliedStates": [
        "yang_font"
      ],
      "requiresResourceAtLeast": {
        "id": "qi",
        "value": 300
      },
      "multiplierByLevel": [120.9,130.84,140.75,154.64,164.55,175.95,191.8,207.66,223.54,240.38],
      "segmentsByLevel": [[[12.09,1],[12.09,1],[24.18,1],[72.54,1]],[[13.09,1],[13.09,1],[26.17,1],[78.49,1]],[[14.08,1],[14.08,1],[28.15,1],[84.44,1]],[[15.47,1],[15.47,1],[30.93,1],[92.77,1]],[[16.46,1],[16.46,1],[32.91,1],[98.72,1]],[[17.6,1],[17.6,1],[35.19,1],[105.56,1]],[[19.18,1],[19.18,1],[38.36,1],[115.08,1]],[[20.77,1],[20.77,1],[41.53,1],[124.59,1]],[[22.36,1],[22.36,1],[44.71,1],[134.11,1]],[[24.04,1],[24.04,1],[48.08,1],[144.22,1]]]
    },
    {
      "id": "outro",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 795,
      "formula": "795%",
      "fixedLevel": true
    },
    {
      "id": "c6_chimei",
      "category": "resonanceChain",
      "levelCategory": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 0,
      "perStack": 83.51,
      "stackMax": 8,
      "defaultLayers": 1,
      "formula": "83.51% × n",
      "seq": 6,
      "triggeredDamage": true,
      "impliedStates": [
        "yinghuo_active"
      ],
      "perStackByLevel": [42,45.45,48.89,53.71,57.16,61.12,66.63,72.14,77.65,83.51],
      "multiplierByLevel": [0,0,0,0,0,0,0,0,0,0]
    }
  ],
  "defaultSkillId": "forte_stardome",
  "validSubs": [
    "hpFlat",
    "hpPct",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 360235,
  "echoLead": "360235:myriad_snare_rustfire_chassis",
  "combatStates": [
    {
      "id": "duality_mode",
      "kind": "mode",
      "required": true,
      "defaultValue": "yang_font",
      "options": [
        {
          "value": "yin_vessel"
        },
        {
          "value": "yang_font"
        }
      ]
    },
    {
      "id": "yinghuo_state",
      "kind": "status",
      "options": [
        {
          "value": "yinghuo_active"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_hp_fusion",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 75,
      "scope": "self",
      "scaleBy": {
        "stat": "hp",
        "rate": 0.0015,
        "cap": 75,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_hp_healing",
      "zone": "healingReceived",
      "value": 310,
      "scope": "self",
      "scaleBy": {
        "stat": "hp",
        "rate": 0.0062,
        "cap": 310,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_hp_attack",
      "zone": "attackFlat",
      "value": 1800,
      "scope": "self",
      "scaleBy": {
        "stat": "hp",
        "rate": 0.036,
        "cap": 1800,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_fire_of_life_soul_raid_mult",
      "multAddByStat": {
        "stat": "hp",
        "threshold": 25000,
        "step": 1000,
        "perStep": 21.1,
        "perStepByLevel": [
          10.64,
          11.51,
          12.39,
          13.6,
          14.46,
          15.41,
          16.85,
          18.22,
          19.64,
          21.1
        ],
        "levelCategory": "forteCircuit",
        "maxSteps": 25,
        "includeActiveBuffs": true
      },
      "scope": "self",
      "skills": [
        "forte_soul_raid"
      ],
      "requiresState": "yinghuo_active",
      "requiresResourceAtLeast": {
        "id": "fire_of_life",
        "value": 1
      }
    },
    {
      "id": "b_fire_of_life_stardome_mult",
      "multAddByStat": {
        "stat": "hp",
        "threshold": 25000,
        "step": 1000,
        "perStep": 21.65,
        "perStepByLevel": [
          10.89,
          11.79,
          12.68,
          13.94,
          14.84,
          15.85,
          17.28,
          18.7,
          20.14,
          21.65
        ],
        "levelCategory": "forteCircuit",
        "maxSteps": 25,
        "includeActiveBuffs": true
      },
      "scope": "self",
      "skills": [
        "forte_stardome"
      ],
      "requiresState": "yinghuo_active",
      "requiresResourceAtLeast": {
        "id": "fire_of_life",
        "value": 1
      }
    },
    {
      "id": "b_fortune_in_disguise",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 125,
      "scope": "self",
      "maxStacks": 50,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "fortune_in_disguise",
      "scaleBy": {
        "stat": "hp",
        "rate": 0.0025,
        "cap": 125,
        "includeActiveBuffs": true
      },
      "duration": 15
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_skill_mult",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "skill_yin",
            "skill_yin_followup",
            "skill_yang",
            "skill_yang_followup"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_heavy_mult",
          "zone": "skillMultBonus",
          "value": 46,
          "scope": "self",
          "skills": [
            "forte_soul_raid",
            "forte_stardome"
          ]
        },
        {
          "id": "k2_netherworld_boon",
          "zone": "amplify",
          "value": 180,
          "scope": "self",
          "skills": [
            "forte_soul_raid",
            "forte_stardome"
          ],
          "defaultActive": false,
          "duration": 4
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_hp_attack_extra",
          "zone": "attackFlat",
          "value": 700,
          "scope": "self",
          "defaultActive": false,
          "duration": 15,
          "scaleBy": {
            "stat": "hp",
            "rate": 0.014,
            "cap": 700,
            "includeActiveBuffs": true
          }
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_team_damage",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
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
          "id": "k6_heavy_vulnerability",
          "zone": "vulnerability",
          "damageType": "heavy",
          "value": 40,
          "scope": "self"
        },
        {
          "id": "k6_chimei_mult",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "lib_chimei",
            "c6_chimei"
          ]
        }
      ]
    }
  ],
  "modes": null
});
