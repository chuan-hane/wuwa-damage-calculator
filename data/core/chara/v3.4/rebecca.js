WUWA.register({
  "id": "rebecca",
  "aliases": [],
  "debut": 3.4,
  "element": "electro",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "skull_thrasher",
  "portrait": "",
  "base": {
    "hp": 11600,
    "attack": 400,
    "defense": 1173,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "fervor",
      "min": 0,
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "hunt_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.52,
      "formula": "36.76% + 36.76%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [36.98,40.02,43.04,47.3,50.32,53.82,58.66,63.52,68.36,73.52],
      "segmentsByLevel": [[[18.49,1],[18.49,1]],[[20.01,1],[20.01,1]],[[21.52,1],[21.52,1]],[[23.65,1],[23.65,1]],[[25.16,1],[25.16,1]],[[26.91,1],[26.91,1]],[[29.33,1],[29.33,1]],[[31.76,1],[31.76,1]],[[34.18,1],[34.18,1]],[[36.76,1],[36.76,1]]]
    },
    {
      "id": "hunt_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.65,
      "formula": "19.13% × 4 + 19.13%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [48.15,52.1,56.05,61.55,65.5,70.05,76.35,82.65,88.95,95.65],
      "segmentsByLevel": [[[9.63,4],[9.63,1]],[[10.42,4],[10.42,1]],[[11.21,4],[11.21,1]],[[12.31,4],[12.31,1]],[[13.1,4],[13.1,1]],[[14.01,4],[14.01,1]],[[15.27,4],[15.27,1]],[[16.53,4],[16.53,1]],[[17.79,4],[17.79,1]],[[19.13,4],[19.13,1]]]
    },
    {
      "id": "hunt_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 109.85,
      "formula": "109.85%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [55.25,59.79,64.32,70.66,75.19,80.4,87.65,94.9,102.15,109.85]
    },
    {
      "id": "hunt_heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 33.8,
      "formula": "16.90% + 16.90%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [17,18.4,19.8,21.74,23.14,24.74,26.98,29.2,31.44,33.8],
      "segmentsByLevel": [[[8.5,1],[8.5,1]],[[9.2,1],[9.2,1]],[[9.9,1],[9.9,1]],[[10.87,1],[10.87,1]],[[11.57,1],[11.57,1]],[[12.37,1],[12.37,1]],[[13.49,1],[13.49,1]],[[14.6,1],[14.6,1]],[[15.72,1],[15.72,1]],[[16.9,1],[16.9,1]]]
    },
    {
      "id": "hunt_eat_lead",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 121.68,
      "formula": "60.84% + 60.84%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [61.2,66.22,71.24,78.28,83.3,89.06,97.1,105.12,113.16,121.68],
      "segmentsByLevel": [[[30.6,1],[30.6,1]],[[33.11,1],[33.11,1]],[[35.62,1],[35.62,1]],[[39.14,1],[39.14,1]],[[41.65,1],[41.65,1]],[[44.53,1],[44.53,1]],[[48.55,1],[48.55,1]],[[52.56,1],[52.56,1]],[[56.58,1],[56.58,1]],[[60.84,1],[60.84,1]]]
    },
    {
      "id": "hunt_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 136.04,
      "formula": "136.04%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [68.43,74.04,79.65,87.51,93.12,99.57,108.55,117.52,126.5,136.04]
    },
    {
      "id": "hunt_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 211.24,
      "formula": "211.24%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [106.25,114.97,123.68,135.88,144.59,154.61,168.55,182.49,196.43,211.24]
    },
    {
      "id": "hunt_tactical",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.5,
      "formula": "16.90% × 4 + 16.90%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [42.5,46,49.5,54.35,57.85,61.85,67.45,73,78.6,84.5],
      "segmentsByLevel": [[[8.5,4],[8.5,1]],[[9.2,4],[9.2,1]],[[9.9,4],[9.9,1]],[[10.87,4],[10.87,1]],[[11.57,4],[11.57,1]],[[12.37,4],[12.37,1]],[[13.49,4],[13.49,1]],[[14.6,4],[14.6,1]],[[15.72,4],[15.72,1]],[[16.9,4],[16.9,1]]]
    },
    {
      "id": "hunt_tactical_success",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.71,
      "formula": "148.71%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [74.8,80.94,87.07,95.66,101.79,108.85,118.66,128.47,138.29,148.71]
    },
    {
      "id": "guts_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.38,
      "formula": "61.69% + 61.69%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [62.06,67.14,72.24,79.36,84.44,90.3,98.44,106.58,114.72,123.38],
      "segmentsByLevel": [[[31.03,1],[31.03,1]],[[33.57,1],[33.57,1]],[[36.12,1],[36.12,1]],[[39.68,1],[39.68,1]],[[42.22,1],[42.22,1]],[[45.15,1],[45.15,1]],[[49.22,1],[49.22,1]],[[53.29,1],[53.29,1]],[[57.36,1],[57.36,1]],[[61.69,1],[61.69,1]]]
    },
    {
      "id": "guts_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.5,
      "formula": "84.50%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [42.5,45.99,49.47,54.35,57.84,61.85,67.42,73,78.57,84.5]
    },
    {
      "id": "guts_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 225.11,
      "formula": "33.77% + 33.77% + 157.57%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [113.24,122.52,131.8,144.8,154.09,164.77,179.63,194.46,209.32,225.11],
      "segmentsByLevel": [[[16.99,1],[16.99,1],[79.26,1]],[[18.38,1],[18.38,1],[85.76,1]],[[19.77,1],[19.77,1],[92.26,1]],[[21.72,1],[21.72,1],[101.36,1]],[[23.12,1],[23.12,1],[107.85,1]],[[24.72,1],[24.72,1],[115.33,1]],[[26.95,1],[26.95,1],[125.73,1]],[[29.17,1],[29.17,1],[136.12,1]],[[31.4,1],[31.4,1],[146.52,1]],[[33.77,1],[33.77,1],[157.57,1]]]
    },
    {
      "id": "guts_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 202.79,
      "formula": "202.79%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [102,110.37,118.73,130.44,138.81,148.43,161.81,175.19,188.57,202.79]
    },
    {
      "id": "guts_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "guts_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 258.56,
      "formula": "258.56%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [130.05,140.72,151.38,166.31,176.98,189.24,206.3,223.37,240.43,258.56]
    },
    {
      "id": "guts_tactical",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "101.40%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [51,55.19,59.37,65.22,69.41,74.22,80.91,87.6,94.29,101.4]
    },
    {
      "id": "guts_tactical_success",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.71,
      "formula": "148.71%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [74.8,80.94,87.07,95.66,101.79,108.85,118.66,128.47,138.29,148.71]
    },
    {
      "id": "skill_big_boom",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 236.6,
      "formula": "23.66% + 23.66% + 23.66% + 23.66% + 35.49% + 35.49% + 35.49% + 35.49%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [119,128.8,138.56,152.2,162,173.2,188.8,204.4,220,236.6],
      "segmentsByLevel": [[[11.9,1],[11.9,1],[11.9,1],[11.9,1],[17.85,1],[17.85,1],[17.85,1],[17.85,1]],[[12.88,1],[12.88,1],[12.88,1],[12.88,1],[19.32,1],[19.32,1],[19.32,1],[19.32,1]],[[13.86,1],[13.86,1],[13.86,1],[13.86,1],[20.78,1],[20.78,1],[20.78,1],[20.78,1]],[[15.22,1],[15.22,1],[15.22,1],[15.22,1],[22.83,1],[22.83,1],[22.83,1],[22.83,1]],[[16.2,1],[16.2,1],[16.2,1],[16.2,1],[24.3,1],[24.3,1],[24.3,1],[24.3,1]],[[17.32,1],[17.32,1],[17.32,1],[17.32,1],[25.98,1],[25.98,1],[25.98,1],[25.98,1]],[[18.88,1],[18.88,1],[18.88,1],[18.88,1],[28.32,1],[28.32,1],[28.32,1],[28.32,1]],[[20.44,1],[20.44,1],[20.44,1],[20.44,1],[30.66,1],[30.66,1],[30.66,1],[30.66,1]],[[22,1],[22,1],[22,1],[22,1],[33,1],[33,1],[33,1],[33,1]],[[23.66,1],[23.66,1],[23.66,1],[23.66,1],[35.49,1],[35.49,1],[35.49,1],[35.49,1]]]
    },
    {
      "id": "skill_catch_me",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 236.6,
      "formula": "23.66% + 4.74% + 23.66% + 23.66% + 137.22% + 11.83% + 11.83%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [119,128.78,138.56,152.2,161.97,173.19,188.79,204.4,220,236.6],
      "segmentsByLevel": [[[11.9,1],[2.38,1],[11.9,1],[11.9,1],[69.02,1],[5.95,1],[5.95,1]],[[12.88,1],[2.58,1],[12.88,1],[12.88,1],[74.68,1],[6.44,1],[6.44,1]],[[13.86,1],[2.78,1],[13.86,1],[13.86,1],[80.34,1],[6.93,1],[6.93,1]],[[15.22,1],[3.05,1],[15.22,1],[15.22,1],[88.27,1],[7.61,1],[7.61,1]],[[16.2,1],[3.24,1],[16.2,1],[16.2,1],[93.93,1],[8.1,1],[8.1,1]],[[17.32,1],[3.47,1],[17.32,1],[17.32,1],[100.44,1],[8.66,1],[8.66,1]],[[18.88,1],[3.78,1],[18.88,1],[18.88,1],[109.49,1],[9.44,1],[9.44,1]],[[20.44,1],[4.09,1],[20.44,1],[20.44,1],[118.55,1],[10.22,1],[10.22,1]],[[22,1],[4.4,1],[22,1],[22,1],[127.6,1],[11,1],[11,1]],[[23.66,1],[4.74,1],[23.66,1],[23.66,1],[137.22,1],[11.83,1],[11.83,1]]]
    },
    {
      "id": "hmg",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 24.3,
      "formula": "24.30%",
      "multiplierByLevel": [12.23,13.23,14.23,15.63,16.64,17.79,19.39,21,22.6,24.3]
    },
    {
      "id": "hmg_p1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 48.6,
      "formula": "48.60%",
      "multiplierByLevel": [24.45,26.45,28.46,31.26,33.27,35.57,38.78,41.99,45.2,48.6]
    },
    {
      "id": "hmg_p2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 72.9,
      "formula": "72.90%",
      "multiplierByLevel": [36.67,39.68,42.68,46.89,49.9,53.36,58.17,62.98,67.79,72.9]
    },
    {
      "id": "big_fireworks",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 636.2,
      "formula": "63.62% + 572.58%",
      "multiplierByLevel": [320,346.25,372.49,409.23,435.47,465.64,507.63,549.6,591.59,636.2],
      "segmentsByLevel": [[[32,1],[288,1]],[[34.63,1],[311.62,1]],[[37.25,1],[335.24,1]],[[40.93,1],[368.3,1]],[[43.55,1],[391.92,1]],[[46.57,1],[419.07,1]],[[50.77,1],[456.86,1]],[[54.96,1],[494.64,1]],[[59.16,1],[532.43,1]],[[63.62,1],[572.58,1]]]
    },
    {
      "id": "intro_big_boom",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 270.4,
      "formula": "27.04% + 27.04% + 27.04% + 27.04% + 27.04% + 27.04% + 40.56% + 67.60%",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [136,147.19,158.37,173.97,185.1,197.91,215.79,233.6,251.48,270.4],
      "segmentsByLevel": [[[13.6,1],[13.6,1],[13.6,1],[13.6,1],[13.6,1],[13.6,1],[20.4,1],[34,1]],[[14.72,1],[14.72,1],[14.72,1],[14.72,1],[14.72,1],[14.72,1],[22.08,1],[36.79,1]],[[15.84,1],[15.84,1],[15.84,1],[15.84,1],[15.84,1],[15.84,1],[23.75,1],[39.58,1]],[[17.4,1],[17.4,1],[17.4,1],[17.4,1],[17.4,1],[17.4,1],[26.09,1],[43.48,1]],[[18.51,1],[18.51,1],[18.51,1],[18.51,1],[18.51,1],[18.51,1],[27.77,1],[46.27,1]],[[19.79,1],[19.79,1],[19.79,1],[19.79,1],[19.79,1],[19.79,1],[29.69,1],[49.48,1]],[[21.58,1],[21.58,1],[21.58,1],[21.58,1],[21.58,1],[21.58,1],[32.37,1],[53.94,1]],[[23.36,1],[23.36,1],[23.36,1],[23.36,1],[23.36,1],[23.36,1],[35.04,1],[58.4,1]],[[25.15,1],[25.15,1],[25.15,1],[25.15,1],[25.15,1],[25.15,1],[37.72,1],[62.86,1]],[[27.04,1],[27.04,1],[27.04,1],[27.04,1],[27.04,1],[27.04,1],[40.56,1],[67.6,1]]]
    },
    {
      "id": "intro_catch_me",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 202.8,
      "formula": "10.14% + 30.42% + 40.56% + 40.56% + 40.56% + 40.56%",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [102,110.4,118.75,130.46,138.86,148.46,161.86,175.2,188.6,202.8],
      "segmentsByLevel": [[[5.1,1],[15.3,1],[20.4,1],[20.4,1],[20.4,1],[20.4,1]],[[5.52,1],[16.56,1],[22.08,1],[22.08,1],[22.08,1],[22.08,1]],[[5.94,1],[17.81,1],[23.75,1],[23.75,1],[23.75,1],[23.75,1]],[[6.53,1],[19.57,1],[26.09,1],[26.09,1],[26.09,1],[26.09,1]],[[6.95,1],[20.83,1],[27.77,1],[27.77,1],[27.77,1],[27.77,1]],[[7.43,1],[22.27,1],[29.69,1],[29.69,1],[29.69,1],[29.69,1]],[[8.1,1],[24.28,1],[32.37,1],[32.37,1],[32.37,1],[32.37,1]],[[8.76,1],[26.28,1],[35.04,1],[35.04,1],[35.04,1],[35.04,1]],[[9.43,1],[28.29,1],[37.72,1],[37.72,1],[37.72,1],[37.72,1]],[[10.14,1],[30.42,1],[40.56,1],[40.56,1],[40.56,1],[40.56,1]]]
    },
    {
      "id": "fervor_hunt",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 397.66,
      "formula": "19.89% + 19.89% + 19.89% + 318.10% + 19.89%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "fervor",
        "value": 120
      },
      "fallbackSkillId": "hunt_heavy",
      "impliedStates": [
        "mode_1_option_1"
      ],
      "multiplierByLevel": [200,216.4,232.8,255.77,272.17,291.06,317.29,343.52,369.76,397.66],
      "segmentsByLevel": [[[10,1],[10,1],[10,1],[160,1],[10,1]],[[10.82,1],[10.82,1],[10.82,1],[173.12,1],[10.82,1]],[[11.64,1],[11.64,1],[11.64,1],[186.24,1],[11.64,1]],[[12.79,1],[12.79,1],[12.79,1],[204.61,1],[12.79,1]],[[13.61,1],[13.61,1],[13.61,1],[217.73,1],[13.61,1]],[[14.56,1],[14.56,1],[14.56,1],[232.82,1],[14.56,1]],[[15.87,1],[15.87,1],[15.87,1],[253.81,1],[15.87,1]],[[17.18,1],[17.18,1],[17.18,1],[274.8,1],[17.18,1]],[[18.49,1],[18.49,1],[18.49,1],[295.8,1],[18.49,1]],[[19.89,1],[19.89,1],[19.89,1],[318.1,1],[19.89,1]]]
    },
    {
      "id": "fervor_guts",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 278.34,
      "formula": "278.34%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "fervor",
        "value": 120
      },
      "fallbackSkillId": "guts_heavy",
      "impliedStates": [
        "mode_1_option_2"
      ],
      "multiplierByLevel": [140,151.48,162.96,179.04,190.52,203.72,222.09,240.45,258.82,278.34]
    },
    {
      "id": "hack_meltdown",
      "category": "forteCircuit",
      "damageType": "hackDmg",
      "multiplier": 2358.89,
      "formula": "2358.89%",
      "requiresState": "target_1_option_1",
      "multiplierByLevel": [1186.5,1283.8,1381.09,1517.3,1614.59,1726.48,1882.15,2037.82,2193.49,2358.89]
    },
    {
      "id": "c6_extra_hit",
      "seq": 6,
      "category": "resonanceChain",
      "damageType": "basic",
      "multiplier": 900,
      "formula": "900%",
      "triggeredDamage": true,
      "requiresResourceAtLeast": {
        "id": "fervor",
        "value": 120
      },
      "fixedLevel": true
    },
    {
      "id": "outro_preem_choom",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 2.5,
      "formula": "2.5% / hit",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "big_fireworks",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoCombo": "split122",
  "echoSet": 24,
  "echoSet2": 3,
  "echoSet3": 8,
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
        }
      ]
    },
    {
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
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
      "id": "b_mode_hunt",
      "zone": "critDamage",
      "value": 30,
      "scope": "self",
      "requiresState": [
        "mode_1_option_1",
        "buff_1_option_1"
      ]
    },
    {
      "id": "b_mode_guts",
      "zone": "defIgnore",
      "value": 15,
      "scope": "self",
      "requiresState": [
        "mode_1_option_2",
        "buff_1_option_1"
      ]
    },
    {
      "id": "b_tag_you_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerSkills": [
        "fervor_hunt",
        "fervor_guts"
      ],
      "triggerStacks": 1,
      "duration": 12
    },
    {
      "id": "b_hack_break_amp",
      "zone": "breakAmp",
      "value": 30,
      "scope": "team",
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_liberation_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "duration": 30
    },
    {
      "id": "b_outro_all",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b_outro_heavy",
      "zone": "amplify",
      "damageType": "heavy",
      "value": 35,
      "scope": "team",
      "maxStacks": 70,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "stack_group_1",
      "duration": 14,
      "triggerOutro": true
    },
    {
      "id": "b_outro_lucy_mult",
      "zone": "skillMultBonus",
      "value": 250,
      "scope": "self",
      "skills": [
        "outro_preem_choom"
      ],
      "defaultActive": false,
      "triggerOutro": true
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_basic_mult",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "hunt_na1",
            "hunt_na2",
            "hunt_na3",
            "hunt_heavy",
            "hunt_tactical",
            "hunt_tactical_success",
            "hunt_dodge",
            "guts_na1",
            "guts_na2",
            "guts_na3",
            "guts_tactical",
            "guts_tactical_success",
            "guts_dodge"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_all_bonus",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerEvents": [
            "introEntry",
            "castResonanceLiberation"
          ],
          "duration": 30
        },
        {
          "id": "k2_hack_amp",
          "zone": "amplify",
          "value": 15,
          "scope": "team",
          "defaultActive": false,
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_liberation_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": [
            "hmg",
            "hmg_p1",
            "hmg_p2",
            "big_fireworks"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_mode_cd",
          "zone": "critDamage",
          "value": 18,
          "scope": "self",
          "requiresState": "buff_1_option_1"
        },
        {
          "id": "k4_mode_def",
          "zone": "defIgnore",
          "value": 9,
          "scope": "self",
          "requiresState": "buff_1_option_1"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_basic_bonus",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "duration": 8
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_basic_bonus_scale",
          "zone": "typeBonusScale",
          "damageType": "basic",
          "value": 40,
          "scope": "self"
        }
      ]
    }
  ],
  "modes": null
});
