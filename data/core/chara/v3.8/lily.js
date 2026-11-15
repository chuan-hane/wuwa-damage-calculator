"use strict";

WUWA.register({
  "id": "lily",
  "aliases": [],
  "debut": 3.8,
  "element": "spectro",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "lullaby",
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
      "id": "dream_perfume",
      "min": 0,
      "max": 300,
      "defaultValue": 0
    },
    {
      "id": "dreambell_chime",
      "min": 0,
      "max": 300,
      "defaultValue": 0
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 63.62,
      "formula": "63.62%",
      "multiplierByLevel": [32,34.63,37.25,40.93,43.55,46.57,50.77,54.96,59.16,63.62],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 116.6,
      "formula": "29.15% + 29.15% × 3",
      "multiplierByLevel": [58.64,63.48,68.28,75,79.8,85.36,93.04,100.72,108.44,116.6],
      "segmentsByLevel": [[[14.66,1],[14.66,3]],[[15.87,1],[15.87,3]],[[17.07,1],[17.07,3]],[[18.75,1],[18.75,3]],[[19.95,1],[19.95,3]],[[21.34,1],[21.34,3]],[[23.26,1],[23.26,3]],[[25.18,1],[25.18,3]],[[27.11,1],[27.11,3]],[[29.15,1],[29.15,3]]],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.43,
      "formula": "95.43%",
      "multiplierByLevel": [48,51.94,55.88,61.39,65.32,69.85,76.15,82.44,88.74,95.43],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 153.8,
      "formula": "38.45% × 3 + 38.45%",
      "multiplierByLevel": [77.36,83.72,90.08,98.96,105.28,112.6,122.72,132.88,143.04,153.8],
      "segmentsByLevel": [[[19.34,3],[19.34,1]],[[20.93,3],[20.93,1]],[[22.52,3],[22.52,1]],[[24.74,3],[24.74,1]],[[26.32,3],[26.32,1]],[[28.15,3],[28.15,1]],[[30.68,3],[30.68,1]],[[33.22,3],[33.22,1]],[[35.76,3],[35.76,1]],[[38.45,3],[38.45,1]]],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 114.52,
      "formula": "114.52%",
      "multiplierByLevel": [57.6,62.33,67.05,73.66,78.39,83.82,91.38,98.93,106.49,114.52],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.58,
      "formula": "238.58%",
      "multiplierByLevel": [120,129.84,139.68,153.46,163.3,174.62,190.36,206.1,221.85,238.58],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "skill_nightmare",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 159.05,
      "formula": "159.05%",
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05],
      "impliedStates": ["normal_phase","woven_fairytale"]
    },
    {
      "id": "skill_reverie",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 159.05,
      "formula": "159.05%",
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05],
      "impliedStates": ["normal_phase","woven_phantasm"]
    },
    {
      "id": "lib_dreambind",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 19.89,
      "formula": "19.89%",
      "multiplierByLevel": [10,10.82,11.64,12.79,13.61,14.56,15.87,17.18,18.49,19.89],
      "impliedStates": ["slumberland"],
      "triggeredDamage": true
    },
    {
      "id": "forte_fairytale",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 497.2,
      "formula": "24.86% + 24.86% × 19",
      "multiplierByLevel": [250,270.6,291,319.8,340.2,363.8,396.6,429.4,462.2,497.2],
      "segmentsByLevel": [[[12.5,1],[12.5,19]],[[13.53,1],[13.53,19]],[[14.55,1],[14.55,19]],[[15.99,1],[15.99,19]],[[17.01,1],[17.01,19]],[[18.19,1],[18.19,19]],[[19.83,1],[19.83,19]],[[21.47,1],[21.47,19]],[[23.11,1],[23.11,19]],[[24.86,1],[24.86,19]]],
      "impliedStates": ["normal_phase","woven_fairytale"],
      "requiresResourceFull": "dream_perfume"
    },
    {
      "id": "forte_phantasm",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 497.03,
      "formula": "21.61% × 23",
      "multiplierByLevel": [250.01,270.71,291.18,319.7,340.4,363.86,396.75,429.41,462.3,497.03],
      "segmentsByLevel": [[[10.87,23]],[[11.77,23]],[[12.66,23]],[[13.9,23]],[[14.8,23]],[[15.82,23]],[[17.25,23]],[[18.67,23]],[[20.1,23]],[[21.61,23]]],
      "impliedStates": ["normal_phase","woven_phantasm"],
      "requiresResourceFull": "dream_perfume"
    },
    {
      "id": "forte_finale",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 35.79,
      "formula": "35.79%",
      "multiplierByLevel": [18,19.48,20.96,23.02,24.5,26.2,28.56,30.92,33.28,35.79],
      "stat": "hp",
      "impliedStates": ["woven_fairytale"],
      "excludesState": ["slumberland"],
      "requiresResourceAtLeast": {
        "id": "dreambell_chime",
        "value": 300,
        "alternateStates": ["woven_heavy_completed"]
      }
    },
    {
      "id": "forte_end",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 35.79,
      "formula": "35.79%",
      "multiplierByLevel": [18,19.48,20.96,23.02,24.5,26.2,28.56,30.92,33.28,35.79],
      "stat": "hp",
      "impliedStates": ["woven_phantasm"],
      "excludesState": ["slumberland"],
      "requiresResourceAtLeast": {
        "id": "dreambell_chime",
        "value": 300,
        "alternateStates": ["woven_heavy_completed"]
      }
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 217.44,
      "formula": "54.36% + 54.36% × 3",
      "multiplierByLevel": [109.36,118.36,127.32,139.88,148.84,159.16,173.48,187.84,202.2,217.44],
      "segmentsByLevel": [[[27.34,1],[27.34,3]],[[29.59,1],[29.59,3]],[[31.83,1],[31.83,3]],[[34.97,1],[34.97,3]],[[37.21,1],[37.21,3]],[[39.79,1],[39.79,3]],[[43.37,1],[43.37,3]],[[46.96,1],[46.96,3]],[[50.55,1],[50.55,3]],[[54.36,1],[54.36,3]]],
      "impliedStates": ["normal_phase"]
    },
    {
      "id": "intro_eternal",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 36.1,
      "formula": "36.10%",
      "multiplierByLevel": [18.16,19.65,21.14,23.22,24.71,26.42,28.8,31.18,33.57,36.1],
      "stat": "hp",
      "impliedStates": ["normal_phase"],
      "requiresResource": "eternal_bloom_ready",
      "defaultResourceActive": false,
      "fallbackSkillId": "intro"
    }
  ],
  "defaultSkillId": "skill_nightmare",
  "echoSet": 360238,
  "echoLead": "360238:formrender",
  "alternateEchoSets": [7],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "combatStates": [
    {
      "id": "heavy_attack_variant",
      "kind": "mode",
      "required": true,
      "defaultValue": "woven_fairytale",
      "options": [
        {
          "value": "woven_fairytale"
        },
        {
          "value": "woven_phantasm"
        }
      ]
    },
    {
      "id": "combat_phase",
      "kind": "phase",
      "required": true,
      "defaultValue": "normal_phase",
      "options": [
        {
          "value": "normal_phase"
        },
        {
          "value": "woven_heavy_completed"
        },
        {
          "value": "slumberland"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_er_crit_rate",
      "zone": "critRate",
      "scope": "self",
      "skills": ["forte_finale","forte_end","intro_eternal"],
      "scaleBy": {
        "stat": "energyRegen",
        "threshold": 100,
        "rate": 0.5,
        "cap": 80,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_er_crit_damage",
      "zone": "critDamage",
      "scope": "self",
      "skills": ["forte_finale","forte_end","intro_eternal"],
      "scaleBy": {
        "stat": "energyRegen",
        "threshold": 100,
        "rate": 1,
        "cap": 160,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_dream_aroma_atk",
      "zone": "attackPercent",
      "scope": "team",
      "duration": 25,
      "requiresSourceActive": false,
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "dream_aroma",
      "stackStepBySeq": [{ "seq": 1, "step": 2 }],
      "defaultActive": false,
      "scaleBy": {
        "stat": "energyRegen",
        "threshold": 190,
        "rate": 0.4,
        "cap": 28,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_silvered_dream_atk",
      "zone": "attackPercent",
      "scope": "team",
      "duration": 30,
      "triggerOutro": true,
      "confirmGroup": "silvered_dream",
      "defaultActive": false,
      "maxStacks": 4,
      "stackResource": "unison_boon",
      "stackResourceTarget": "team",
      "requiresUnisonResponder": true,
      "requiresResourceAtLeast": {
        "id": "unison_boon",
        "target": "team",
        "value": 1
      },
      "scaleBy": {
        "stat": "energyRegen",
        "threshold": 190,
        "rate": 0.4,
        "cap": 28,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_silvered_dream_cr",
      "zone": "critRate",
      "damageType": "echoSkill",
      "scope": "team",
      "duration": 30,
      "triggerOutro": true,
      "confirmGroup": "silvered_dream",
      "defaultActive": false,
      "scaleBy": {
        "stat": "energyRegen",
        "threshold": 190,
        "rate": 0.14285714285714285,
        "cap": 10,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_silvered_dream_cd",
      "zone": "critDamage",
      "damageType": "echoSkill",
      "scope": "team",
      "duration": 30,
      "triggerOutro": true,
      "confirmGroup": "silvered_dream",
      "defaultActive": false,
      "scaleBy": {
        "stat": "energyRegen",
        "threshold": 190,
        "rate": 0.2857142857142857,
        "cap": 20,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_outro_amp",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "duration": 30,
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
          "id": "k2_dream_aroma_cr",
          "zone": "critRate",
          "value": 8,
          "scope": "team",
          "duration": 25,
          "requiresSourceActive": false,
          "maxStacks": 4,
          "defaultStacks": 0,
          "stackGroup": "dream_aroma",
          "requiresBuffStacks": {
            "id": "b_dream_aroma_atk",
            "stacks": 1
          }
        },
        {
          "id": "k2_dream_aroma_cd",
          "zone": "critDamage",
          "value": 24,
          "scope": "team",
          "duration": 25,
          "requiresSourceActive": false,
          "maxStacks": 4,
          "defaultStacks": 0,
          "stackGroup": "dream_aroma",
          "requiresBuffStacks": {
            "id": "b_dream_aroma_atk",
            "stacks": 1
          }
        }
      ]
    },
    {
      "seq": 3,
      "buffs": []
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_finisher_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 100,
          "scope": "self",
          "skills": ["forte_finale","forte_end"]
        },
        {
          "id": "k6_eternal_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 700,
          "scope": "self",
          "skills": ["intro_eternal"]
        }
      ]
    }
  ],
  "modes": null
});
