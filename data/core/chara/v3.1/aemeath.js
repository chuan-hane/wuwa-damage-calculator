WUWA.register({
  "id": "aemeath",
  "aliases": [],
  "debut": 3.1,
  "element": "fusion",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "fusion"
  ],
  "effectTypeRequiresState": {
    "fusion": "共鸣模态·聚爆"
  },
  "signatureWeaponId": "everbright_polestar",
  "portrait": "",
  "base": {
    "hp": 11025,
    "attack": 425,
    "defense": 1148,
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
      "id": "syncRate",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "resonanceRate",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "aemeath_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 46.35,
      "formula": "46.35%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.46,
      "formula": "13.89% + 20.84% + 34.73%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.15,
      "formula": "9.32% × 3 + 18.63% + 46.56%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134.59,
      "formula": "6.73% × 5 + 100.94%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_heavy1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 92.83,
      "formula": "18.57% + 74.26%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_heavy2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 232,
      "formula": "11.60% × 4 + 185.60%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "aemeath_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 260.15,
      "formula": "26.02% × 3 + 52.03% + 130.06%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "sync_armament_merge",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 134.59,
      "formula": "26.92% + 40.38% + 67.29%",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "sync_call_dawn",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 163.27,
      "formula": "16.33% × 3 + 114.28%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_na1",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 69.6,
      "formula": "23.20% × 3",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_na2",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 92.83,
      "formula": "18.57% + 74.26%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_na3",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 116.53,
      "formula": "3.89% × 6 + 81.54% + 11.65%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_na4",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 134.59,
      "formula": "40.38% + 94.21%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_heavy1",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 92.83,
      "formula": "92.83%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_heavy2",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 232,
      "formula": "232.00%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_air",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 86.31,
      "formula": "73.35% + 4.32% × 3",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "mech_dodge",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 283.49,
      "formula": "9.45% × 6 + 198.44% + 28.35%",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "lib_overdrive",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1004.02,
      "formula": "200.80% + 267.74% × 3",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "lib_finale",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1789.29,
      "formula": "1789.29%",
      "requiresResource": "同步率与共鸣率满",
      "requiresAllResourcesAtLeast": [
        {
          "id": "syncRate",
          "value": 100
        },
        {
          "id": "resonanceRate",
          "value": 100
        }
      ],
      "requiresState": "星辉破界而来·于此释放",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "intro_songs",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 134.58,
      "formula": "13.46% × 2 + 107.66%",
      "impliedStates": [
        "爱弥斯"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "intro_meteoric",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 163.25,
      "formula": "65.30% + 97.95%",
      "impliedStates": [
        "机兵"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "duet_encore",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 357.9,
      "formula": "17.90% × 4 + 35.79% × 3 + 178.93%",
      "requiresResource": "100同步率",
      "requiresResourceAtLeast": {
        "id": "syncRate",
        "value": 100
      },
      "requiresState": "光翼共奏之时状态",
      "impliedStates": [
        "机兵"
      ]
    },
    {
      "id": "duet_overture",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 357.95,
      "formula": "17.90% + 14.92% × 6 + 23.86% × 3 + 59.65% × 3",
      "requiresResource": "100同步率",
      "requiresResourceAtLeast": {
        "id": "syncRate",
        "value": 100
      },
      "requiresState": "光翼共奏之时状态",
      "impliedStates": [
        "爱弥斯"
      ]
    },
    {
      "id": "tune_starburst",
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 596.43,
      "formula": "596.43%",
      "requiresState": "目标震谐·干涉",
      "requiresAllStates": [
        "共鸣模态·震谐"
      ]
    },
    {
      "id": "duet_tune_bonus",
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 109.35,
      "formula": "109.35%",
      "requiresAllStates": [
        "共鸣模态·震谐",
        "目标震谐轨迹"
      ]
    }
  ],
  "defaultSkillId": "lib_overdrive",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 27,
  "echoLead": "27:sigillum",
  "combatStates": [
    {
      "id": "形态",
      "kind": "form",
      "required": true,
      "defaultValue": "爱弥斯",
      "options": [
        {
          "value": "爱弥斯"
        },
        {
          "value": "机兵"
        }
      ]
    },
    {
      "id": "共鸣模态",
      "kind": "mode",
      "required": true,
      "defaultValue": "共鸣模态·震谐",
      "options": [
        {
          "value": "共鸣模态·震谐"
        },
        {
          "value": "共鸣模态·聚爆"
        }
      ]
    },
    {
      "id": "光翼共奏之时",
      "kind": "status",
      "options": [
        {
          "value": "光翼共奏之时状态"
        }
      ]
    },
    {
      "id": "星屑共振",
      "kind": "status",
      "options": [
        {
          "value": "星屑共振状态"
        }
      ]
    },
    {
      "id": "星辉破界而来·于此释放",
      "kind": "status",
      "options": [
        {
          "value": "星辉破界而来·于此释放"
        }
      ]
    },
    {
      "id": "即刻响应",
      "kind": "status",
      "options": [
        {
          "value": "即刻响应状态"
        },
        {
          "value": "即刻响应·辉芒状态"
        }
      ]
    },
    {
      "id": "目标震谐状态",
      "kind": "target",
      "requiresState": "共鸣模态·震谐",
      "options": [
        {
          "value": "目标震谐·偏移"
        },
        {
          "value": "目标震谐·干涉"
        }
      ]
    },
    {
      "id": "目标震谐轨迹",
      "kind": "target",
      "requiresState": "共鸣模态·震谐",
      "options": [
        {
          "value": "目标震谐轨迹"
        }
      ]
    },
    {
      "id": "目标聚爆轨迹",
      "kind": "target",
      "requiresState": "共鸣模态·聚爆",
      "options": [
        {
          "value": "目标聚爆轨迹"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_instant_heavy_amp",
      "zone": "amplify",
      "value": 200,
      "scope": "self",
      "skills": [
        "aemeath_heavy1",
        "aemeath_heavy2",
        "mech_heavy1",
        "mech_heavy2"
      ],
      "requiresState": [
        "即刻响应状态",
        "即刻响应·辉芒状态"
      ]
    },
    {
      "id": "b_between_tune_cd",
      "zone": "critDamage",
      "value": 60,
      "scope": "self",
      "maxSeq": 2,
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "星与星之间·震谐",
      "requiresState": "共鸣模态·震谐"
    },
    {
      "id": "b_between_tune_final",
      "zone": "amplify",
      "value": 25,
      "scope": "self",
      "maxSeq": 2,
      "skills": [
        "lib_finale"
      ],
      "requiresState": "共鸣模态·震谐",
      "requiresBuffStacks": {
        "id": "b_between_tune_cd",
        "stacks": 3
      }
    },
    {
      "id": "b_between_fusion_cd",
      "zone": "critDamage",
      "value": 60,
      "scope": "self",
      "maxSeq": 2,
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "星与星之间·聚爆",
      "requiresState": "共鸣模态·聚爆"
    },
    {
      "id": "b_between_fusion_final",
      "zone": "amplify",
      "value": 25,
      "scope": "self",
      "maxSeq": 2,
      "skills": [
        "lib_finale"
      ],
      "requiresState": "共鸣模态·聚爆",
      "requiresBuffStacks": {
        "id": "b_between_fusion_cd",
        "stacks": 2
      }
    },
    {
      "id": "b_duet_tune_trail",
      "zone": "skillMultBonus",
      "value": 120,
      "scope": "self",
      "skills": [
        "duet_tune_bonus"
      ],
      "maxStacks": 30,
      "stackMaxBySeq": [
        {
          "seq": 6,
          "max": 60
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "震谐轨迹",
      "requiresAllStates": [
        "共鸣模态·震谐",
        "目标震谐轨迹"
      ]
    },
    {
      "id": "b_fusion_trail_extra",
      "zone": "effectExtraRate",
      "effect": "fusion",
      "value": 300,
      "scope": "self",
      "maxStacks": 30,
      "stackMaxBySeq": [
        {
          "seq": 6,
          "max": 60
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "聚爆轨迹",
      "requiresAllStates": [
        "共鸣模态·聚爆",
        "目标聚爆轨迹"
      ]
    },
    {
      "id": "b_stardust_fusion_extra",
      "zone": "effectExtraRate",
      "effect": "fusion",
      "value": 200,
      "scope": "self",
      "requiresAllStates": [
        "共鸣模态·聚爆",
        "星屑共振状态"
      ]
    },
    {
      "id": "b_outro_tune_base",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "requiresState": "共鸣模态·震谐",
      "duration": 20
    },
    {
      "id": "b_outro_tune_shift",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "requiresState": "共鸣模态·震谐",
      "duration": 20
    },
    {
      "id": "b_outro_fusion_base",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "requiresState": "共鸣模态·聚爆",
      "duration": 20
    },
    {
      "id": "b_outro_fusion_burst",
      "zone": "amplify",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "requiresState": "共鸣模态·聚爆",
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_heavy_cd",
          "zone": "critDamage",
          "value": 300,
          "scope": "self",
          "skills": [
            "aemeath_heavy1",
            "aemeath_heavy2",
            "mech_heavy1",
            "mech_heavy2"
          ],
          "requiresState": [
            "即刻响应状态",
            "即刻响应·辉芒状态"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_duet_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "duet_overture",
            "duet_encore"
          ]
        },
        {
          "id": "k2_tune_bonus",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "duet_tune_bonus"
          ],
          "maxStacks": 5,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "光翼共奏追加震谐命中",
          "requiresAllStates": [
            "共鸣模态·震谐",
            "目标震谐轨迹"
          ]
        },
        {
          "id": "k2_stardust_fusion_extra",
          "zone": "effectExtraRate",
          "effect": "fusion",
          "value": 200,
          "scope": "self",
          "requiresAllStates": [
            "共鸣模态·聚爆",
            "星屑共振状态"
          ]
        },
        {
          "id": "k2_fusion_trail_extra",
          "zone": "effectExtraRate",
          "effect": "fusion",
          "value": 150,
          "scope": "self",
          "maxStacks": 30,
          "stackMaxBySeq": [
            {
              "seq": 6,
              "max": 60
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "聚爆轨迹",
          "requiresAllStates": [
            "共鸣模态·聚爆",
            "目标聚爆轨迹"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_finale_mult",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "lib_finale"
          ]
        },
        {
          "id": "k3_overdrive_mult",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "lib_overdrive"
          ]
        },
        {
          "id": "k3_between_tune_cd",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "maxStacks": 1,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "星与星之间·三链·震谐",
          "requiresState": "共鸣模态·震谐"
        },
        {
          "id": "k3_between_tune_final",
          "zone": "amplify",
          "value": 25,
          "scope": "self",
          "skills": [
            "lib_finale"
          ],
          "requiresState": "共鸣模态·震谐",
          "requiresBuffStacks": {
            "id": "k3_between_tune_cd",
            "stacks": 1
          }
        },
        {
          "id": "k3_between_fusion_cd",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "maxStacks": 1,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "星与星之间·三链·聚爆",
          "requiresState": "共鸣模态·聚爆"
        },
        {
          "id": "k3_between_fusion_final",
          "zone": "amplify",
          "value": 25,
          "scope": "self",
          "skills": [
            "lib_finale"
          ],
          "requiresState": "共鸣模态·聚爆",
          "requiresBuffStacks": {
            "id": "k3_between_fusion_cd",
            "stacks": 1
          }
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_all",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro_songs",
            "intro_meteoric",
            "sync_armament_merge",
            "sync_call_dawn",
            "duet_overture",
            "duet_encore"
          ],
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
          "id": "k6_burst_vuln",
          "zone": "vulnerability",
          "damageType": "resonanceLiberation",
          "value": 40,
          "scope": "self"
        }
      ]
    }
  ],
  "modes": null
});
