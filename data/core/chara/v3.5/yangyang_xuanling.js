"use strict";

WUWA.register({
  "id": "yangyang_xuanling",
  "aliases": [],
  "debut": 3.5,
  "element": "havoc",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "havocBane"
  ],
  "signatureWeaponId": "azure_oath",
  "portrait": "",
  "base": {
    "hp": 11025,
    "attack": 425,
    "defense": 1148,
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
      "id": "melody",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "azure_plume",
      "max": 2,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "azure_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.72,
      "formula": "47.72%",
      "impliedStates": [
        "sword_stance_azure"
      ]
    },
    {
      "id": "azure_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.69,
      "formula": "20.14% + 20.14% + 60.41%",
      "impliedStates": [
        "sword_stance_azure"
      ]
    },
    {
      "id": "azure_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.69,
      "formula": "30.21% + 70.48%",
      "impliedStates": [
        "sword_stance_azure"
      ]
    },
    {
      "id": "azure_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 185.63,
      "formula": "18.57% + 18.57% + 148.49%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ]
    },
    {
      "id": "feather_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.54,
      "formula": "39.77% + 39.77%",
      "impliedStates": [
        "sword_stance_feather"
      ]
    },
    {
      "id": "feather_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.68,
      "formula": "33.56% × 3",
      "impliedStates": [
        "sword_stance_feather"
      ]
    },
    {
      "id": "feather_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 74.29,
      "formula": "14.86% + 7.43% × 3 + 37.14%",
      "impliedStates": [
        "sword_stance_feather"
      ]
    },
    {
      "id": "feather_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.59,
      "formula": "71.58% + 71.58% + 95.43%",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ]
    },
    {
      "id": "azure_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "impliedStates": [
        "sword_stance_azure"
      ]
    },
    {
      "id": "feather_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "impliedStates": [
        "sword_stance_feather"
      ]
    },
    {
      "id": "azure_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.13,
      "formula": "39.23% + 39.23% + 117.67%",
      "impliedStates": [
        "sword_stance_azure"
      ]
    },
    {
      "id": "feather_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.11,
      "formula": "65.37% × 3",
      "impliedStates": [
        "sword_stance_feather"
      ]
    },
    {
      "id": "switch_feather",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 100.68,
      "formula": "33.56% × 3",
      "requiresState": "sword_stance_azure",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 1
      },
      "fallbackSkillId": "flow_feather",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "switch_azure",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 116.6,
      "formula": "69.95% + 15.55% × 3",
      "requiresState": "sword_stance_feather",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 1
      },
      "fallbackSkillId": "flow_azure",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 1988.1,
      "formula": "1988.10%",
      "triggerEvents": [
        "castResonanceLiberation",
        "applyHavocBane"
      ]
    },
    {
      "id": "lib_shadow",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%",
      "requiresState": "voice_upon_voice_active"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 116.59,
      "formula": "116.59%",
      "triggerEvents": [
        "introEntry",
        "applyHavocBane"
      ]
    },
    {
      "id": "outro",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 300,
      "formula": "300.00%"
    },
    {
      "id": "flow_azure",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 116.6,
      "formula": "69.95% + 15.55% × 3",
      "requiresState": "sword_stance_feather",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "flow_feather",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 100.68,
      "formula": "33.56% × 3",
      "requiresState": "sword_stance_azure",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "azure_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 450.53,
      "formula": "135.16% + 135.16% + 180.21%",
      "requiresResourceFull": "azure_plume",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ]
    },
    {
      "id": "feather_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 217.05,
      "formula": "21.71% + 195.34%",
      "requiresResourceFull": "azure_plume",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ]
    },
    {
      "id": "feather_fall",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 110.97,
      "formula": "14.80% × 3 + 66.57%",
      "requiresResourceFull": "azure_plume",
      "impliedStates": [
        "sword_stance_feather",
        "hark_the_wind_active"
      ]
    },
    {
      "id": "bloom_na1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 119.37,
      "formula": "39.79% × 3",
      "requiresState": "hark_the_wind_active"
    },
    {
      "id": "bloom_na2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 223.13,
      "formula": "89.25% + 66.94% + 66.94%",
      "requiresState": "hark_the_wind_active"
    },
    {
      "id": "bloom_na3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 399.59,
      "formula": "23.98% × 5 + 279.69%",
      "requiresState": "hark_the_wind_active"
    },
    {
      "id": "bloom_dodge1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 119.37,
      "formula": "39.79% × 3",
      "requiresState": "hark_the_wind_active"
    },
    {
      "id": "bloom_dodge2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 223.13,
      "formula": "89.25% + 66.94% + 66.94%",
      "requiresState": "hark_the_wind_active"
    },
    {
      "id": "bloom_dodge3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 399.59,
      "formula": "23.98% × 5 + 279.69%",
      "requiresState": "hark_the_wind_active"
    },
    {
      "id": "c1_shadow",
      "seq": 1,
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%"
    },
    {
      "id": "c2_shadow",
      "seq": 2,
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%"
    },
    {
      "id": "c6_shadow",
      "seq": 6,
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%"
    }
  ],
  "defaultSkillId": "azure_heavy",
  "combatStates": [
    {
      "id": "sword_stance",
      "kind": "mode",
      "required": true,
      "defaultValue": "sword_stance_azure",
      "options": [
        {
          "value": "sword_stance_azure"
        },
        {
          "value": "sword_stance_feather"
        }
      ]
    },
    {
      "id": "hark_the_wind",
      "kind": "status",
      "options": [
        {
          "value": "hark_the_wind_active"
        }
      ]
    },
    {
      "id": "voice_upon_voice",
      "kind": "status",
      "options": [
        {
          "value": "voice_upon_voice_active"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_unbroken_vow_stack_1",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 1
      }
    },
    {
      "id": "b_unbroken_vow_stack_2",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 2
      }
    },
    {
      "id": "b_unbroken_vow_stack_3",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 3
      }
    },
    {
      "id": "b_unbroken_vow_stack_4",
      "zone": "amplify",
      "value": 12,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 4
      }
    },
    {
      "id": "b_unbroken_vow_stack_5",
      "zone": "amplify",
      "value": 12,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 5
      }
    },
    {
      "id": "b_unbroken_vow_stack_6",
      "zone": "amplify",
      "value": 12,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 6
      }
    },
    {
      "id": "b_desperate_breath_azure",
      "zone": "critDamage",
      "value": 160,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "azure_heavy"
      ],
      "skills": [
        "azure_heavy"
      ]
    },
    {
      "id": "b_desperate_breath_feather",
      "zone": "critDamage",
      "value": 160,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "feather_heavy"
      ],
      "skills": [
        "feather_heavy",
        "feather_fall",
        "bloom_na1",
        "bloom_na2",
        "bloom_na3",
        "bloom_dodge1",
        "bloom_dodge2",
        "bloom_dodge3"
      ],
      "duration": 15
    },
    {
      "id": "b_windbound_heavy_cd",
      "zone": "critDamage",
      "value": 150,
      "scope": "self",
      "maxStacks": 6,
      "defaultStacks": 0,
      "defaultActive": false,
      "skills": [
        "azure_heavy",
        "feather_heavy",
        "feather_fall",
        "bloom_na1",
        "bloom_na2",
        "bloom_na3",
        "bloom_dodge1",
        "bloom_dodge2",
        "bloom_dodge3"
      ],
      "duration": 4
    },
    {
      "id": "b_outro_havoc_amp",
      "zone": "amplify",
      "element": "havoc",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 1
      },
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "c2_heavy_amp",
          "zone": "amplify",
          "value": 100,
          "scope": "self",
          "skills": [
            "azure_heavy",
            "feather_heavy",
            "feather_fall",
            "bloom_na1",
            "bloom_na2",
            "bloom_na3",
            "bloom_dodge1",
            "bloom_dodge2",
            "bloom_dodge3"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "c3_lib_amp",
          "zone": "amplify",
          "value": 175,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "c3_havoc_cap",
          "zone": "effectCapBonus",
          "effects": [
            "havocBane"
          ],
          "value": 3,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "flow_azure",
            "flow_feather"
          ],
          "duration": 20
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "c4_team_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "switch_azure",
            "switch_feather",
            "flow_azure",
            "flow_feather"
          ],
          "duration": 20
        }
      ]
    },
    {
      "seq": 5
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "c6_heavy_amp",
          "zone": "vulnerability",
          "damageType": "heavy",
          "value": 40,
          "scope": "self",
          "defaultActive": false,
          "duration": 30
        },
        {
          "id": "c6_shadow_crit",
          "zone": "critRate",
          "value": 95,
          "scope": "self",
          "skills": [
            "c6_shadow"
          ]
        }
      ]
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 350433,
  "echoLead": "350433:thousand_puppet_pavilion",
  "modes": null
});
