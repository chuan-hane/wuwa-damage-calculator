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
      ]
    },
    {
      "id": "yin_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 74.56,
      "formula": "37.28% × 2",
      "impliedStates": [
        "yin_vessel"
      ]
    },
    {
      "id": "yin_na3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 109.32,
      "formula": "27.33% × 4",
      "impliedStates": [
        "yin_vessel"
      ]
    },
    {
      "id": "yin_na4",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 153.16,
      "formula": "45.95% × 2 + 30.63% × 2",
      "impliedStates": [
        "yin_vessel"
      ]
    },
    {
      "id": "yang_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 39.82,
      "formula": "39.82%",
      "impliedStates": [
        "yang_font"
      ]
    },
    {
      "id": "yang_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 99.47,
      "formula": "59.68% + 39.79%",
      "impliedStates": [
        "yang_font"
      ]
    },
    {
      "id": "yang_na3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 159.1,
      "formula": "47.73% × 2 + 63.64%",
      "impliedStates": [
        "yang_font"
      ]
    },
    {
      "id": "yang_na4",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 124.24,
      "formula": "86.95% + 12.43% × 3",
      "impliedStates": [
        "yang_font"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "midAir",
      "multiplier": 92.45,
      "formula": "92.45%"
    },
    {
      "id": "yin_dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 198.8,
      "formula": "49.70% × 4",
      "impliedStates": [
        "yin_vessel"
      ]
    },
    {
      "id": "yang_dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 248.57,
      "formula": "74.57% × 2 + 99.43%",
      "impliedStates": [
        "yang_font"
      ]
    },
    {
      "id": "shadow_step",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 0,
      "formula": "30 + 25",
      "fixedDamage": 55
    },
    {
      "id": "skill_yin",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 164.04,
      "formula": "65.61% + 32.81% × 3",
      "impliedStates": [
        "yin_vessel"
      ]
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
      "requiresResource": "cleanse_of_impurity"
    },
    {
      "id": "skill_yang",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 164.04,
      "formula": "65.61% + 32.81% × 3",
      "impliedStates": [
        "yang_font"
      ]
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
      "requiresResource": "cleanse_of_impurity"
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 745.2,
      "formula": "93.15% × 8"
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
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ]
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
      }
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
      }
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
      ]
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
