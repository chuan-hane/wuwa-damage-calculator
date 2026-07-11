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
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 122,
      "formula": "61.00% + 61.00%",
      "impliedStates": [
        "form_zephyr"
      ]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 139.34,
      "formula": "41.80% + 41.80% + 55.74%",
      "impliedStates": [
        "form_zephyr"
      ]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 159.08,
      "formula": "79.53% + 15.91% × 5",
      "impliedStates": [
        "form_zephyr"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 70.72,
      "formula": "70.72%",
      "impliedStates": [
        "form_zephyr"
      ]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 170.67,
      "formula": "51.20% + 51.20% + 68.27%",
      "impliedStates": [
        "form_zephyr"
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      "id": "drizzle_na1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 78.28,
      "formula": "19.57% × 2 + 19.57% × 2",
      "impliedStates": [
        "form_drizzle"
      ]
    },
    {
      "id": "drizzle_na2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 159.07,
      "formula": "31.81% + 15.91% × 2 + 15.91% × 2 + 31.81% + 31.81%",
      "impliedStates": [
        "form_drizzle"
      ]
    },
    {
      "id": "drizzle_na3",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 165.12,
      "formula": "13.76% × 3 + 13.76% × 3 + 13.76% × 3 + 13.76% × 3",
      "impliedStates": [
        "form_drizzle"
      ]
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
      ]
    },
    {
      "id": "drizzle_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 238.59,
      "formula": "11.93% × 10 + 119.29%",
      "impliedStates": [
        "form_drizzle"
      ]
    },
    {
      "id": "illuminating_dew",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "104.98%",
      "impliedStates": [
        "form_drizzle"
      ]
    },
    {
      "id": "swallow_cut",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 107.65,
      "formula": "107.65%",
      "impliedStates": [
        "form_drizzle"
      ]
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
