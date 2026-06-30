WUWA.register({
  "id": "lucilla",
  "aliases": [],
  "debut": 3.4,
  "element": "glacio",
  "weaponType": 5,
  "quality": 5,
  "effectTypes": [
    "frost"
  ],
  "effectTypeRequiresState": {
    "frost": "共鸣模态·霜渐"
  },
  "signatureWeaponId": "freeze_frame",
  "portrait": "",
  "base": {
    "hp": 12237,
    "attack": 375,
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
      "id": "photo",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.29,
      "formula": "59.29%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.23,
      "formula": "26.89% + 40.34%"
    },
    {
      "id": "na3_unremarkable",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 159.55,
      "formula": "159.55%"
    },
    {
      "id": "na3_commendable",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 235.27,
      "formula": "235.27%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 150.73,
      "formula": "67.83% + 82.90%"
    },
    {
      "id": "skill_frame",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 39.78,
      "formula": "13.26% × 3"
    },
    {
      "id": "skill_compensate",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 249.07,
      "formula": "249.07%"
    },
    {
      "id": "spotlight_frost",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 548.98,
      "formula": "82.35% + 82.35% + 274.48% + 109.80%",
      "impliedStates": [
        "共鸣模态·霜渐"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ]
    },
    {
      "id": "spotlight_echo",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 548.98,
      "formula": "82.35% + 82.35% + 274.48% + 109.80%",
      "impliedStates": [
        "共鸣模态·声骸"
      ]
    },
    {
      "id": "clear_as_day_frost",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 142.74,
      "formula": "142.74%",
      "requiresResource": "3张照片",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 3
      },
      "impliedStates": [
        "共鸣模态·霜渐"
      ],
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "clear_as_day_echo",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 142.74,
      "formula": "142.74%",
      "requiresResource": "3张照片",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 3
      },
      "impliedStates": [
        "共鸣模态·声骸"
      ],
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "memory_na1",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 76.59,
      "formula": "30.64% + 45.95%",
      "impliedStates": [
        "追忆状态"
      ]
    },
    {
      "id": "memory_na2",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 149.42,
      "formula": "59.77% + 89.65%",
      "impliedStates": [
        "追忆状态"
      ]
    },
    {
      "id": "memory_na3",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 416.96,
      "formula": "52.12% × 8",
      "impliedStates": [
        "追忆状态"
      ]
    },
    {
      "id": "letting_go_frost",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 848.07,
      "formula": "84.81% × 3 + 593.64%",
      "impliedStates": [
        "追忆状态",
        "共鸣模态·霜渐"
      ]
    },
    {
      "id": "letting_go_echo",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 848.07,
      "formula": "84.81% × 3 + 593.64%",
      "impliedStates": [
        "追忆状态",
        "共鸣模态·声骸"
      ]
    },
    {
      "id": "memory_air",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 110.94,
      "formula": "110.94%",
      "impliedStates": [
        "追忆状态"
      ]
    },
    {
      "id": "memory_dodge",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 256.77,
      "formula": "115.55% + 141.22%",
      "impliedStates": [
        "追忆状态"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 97.42,
      "formula": "97.42%",
      "triggerEvents": [
        "introEntry",
        "applyGlacioChafe"
      ]
    },
    {
      "id": "intro_hard_cut",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 149.41,
      "formula": "149.41%",
      "impliedStates": [
        "追忆状态"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ]
    },
    {
      "id": "oblivion_frost",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 285.48,
      "formula": "285.48%",
      "requiresResource": "照片",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 1
      },
      "impliedStates": [
        "追忆状态",
        "共鸣模态·霜渐"
      ],
      "triggerEvents": [
        "applyGlacioChafe"
      ]
    },
    {
      "id": "oblivion_echo",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 285.48,
      "formula": "285.48%",
      "requiresResource": "照片",
      "requiresResourceAtLeast": {
        "id": "photo",
        "value": 1
      },
      "impliedStates": [
        "追忆状态",
        "共鸣模态·声骸"
      ]
    }
  ],
  "defaultSkillId": "letting_go_frost",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 30,
  "echoLead": "30:reminiscence_threnodian_voidborne_construct",
  "combatStates": [
    {
      "id": "共鸣模态",
      "kind": "mode",
      "required": true,
      "defaultValue": "共鸣模态·霜渐",
      "options": [
        {
          "value": "共鸣模态·霜渐"
        },
        {
          "value": "共鸣模态·声骸"
        }
      ]
    },
    {
      "id": "追忆状态",
      "kind": "status",
      "options": [
        {
          "value": "追忆状态"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_slow_res",
      "zone": "resShred",
      "element": "glacio",
      "value": 8,
      "scope": "team",
      "requiresState": "共鸣模态·霜渐",
      "defaultActive": false,
      "triggerSkills": [
        "spotlight_frost"
      ],
      "duration": 30
    },
    {
      "id": "b_slow_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 25,
      "scope": "team",
      "requiresState": "共鸣模态·声骸",
      "defaultActive": false,
      "triggerSkills": [
        "spotlight_echo"
      ],
      "duration": 30
    },
    {
      "id": "b_clear_basic",
      "zone": "typeBonus",
      "damageType": "basic",
      "value": 30,
      "scope": "self",
      "requiresState": "共鸣模态·霜渐",
      "defaultActive": false,
      "triggerSkills": [
        "clear_as_day_frost"
      ],
      "duration": 10
    },
    {
      "id": "b_clear_echo",
      "zone": "typeBonus",
      "damageType": "echoSkill",
      "value": 30,
      "scope": "self",
      "requiresState": "共鸣模态·声骸",
      "defaultActive": false,
      "triggerSkills": [
        "clear_as_day_echo"
      ],
      "duration": 10
    },
    {
      "id": "b_zoom",
      "zone": "critDamage",
      "damageType": "echoSkill",
      "value": 40,
      "scope": "team",
      "requiresState": "共鸣模态·声骸",
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "变焦",
      "triggerSkills": [
        "clear_as_day_echo",
        "oblivion_echo"
      ],
      "triggerStacks": 1,
      "duration": 30
    },
    {
      "id": "outro_frost",
      "zone": "amplify",
      "effect": "frost",
      "value": 60,
      "scope": "team",
      "requiresState": "共鸣模态·霜渐",
      "duration": 30
    },
    {
      "id": "outro_echo",
      "zone": "amplify",
      "damageType": "echoSkill",
      "value": 50,
      "scope": "team",
      "requiresState": "共鸣模态·声骸",
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "spotlight_frost",
            "spotlight_echo"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_frost",
          "zone": "amplify",
          "effect": "frost",
          "value": 80,
          "scope": "team",
          "requiresState": "共鸣模态·霜渐",
          "defaultActive": false,
          "triggerSkills": [
            "clear_as_day_frost"
          ],
          "duration": 30
        },
        {
          "id": "k2_echo",
          "zone": "typeBonus",
          "damageType": "echoSkill",
          "value": 40,
          "scope": "team",
          "requiresState": "共鸣模态·声骸",
          "defaultActive": false,
          "triggerSkills": [
            "clear_as_day_echo"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_letting_go",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "letting_go_frost",
            "letting_go_echo"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 30,
          "scope": "self",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "oblivion_frost",
            "oblivion_echo"
          ],
          "triggerStacks": 1,
          "duration": 6
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_oblivion",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "oblivion_frost",
            "oblivion_echo"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_memory",
          "zone": "amplify",
          "value": 600,
          "scope": "self",
          "skills": [
            "letting_go_frost",
            "letting_go_echo"
          ],
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "铭记",
          "triggerSkills": [
            "oblivion_frost",
            "oblivion_echo"
          ],
          "triggerStacks": 1
        }
      ]
    }
  ],
  "modes": null
});
