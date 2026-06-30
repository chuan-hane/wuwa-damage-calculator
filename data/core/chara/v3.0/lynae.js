WUWA.register({
  "id": "lynae",
  "aliases": [],
  "debut": 3,
  "element": "spectro",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "spectrum_blaster",
  "portrait": "",
  "base": {
    "hp": 12237,
    "attack": 375,
    "defense": 1197,
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
      "id": "iridescence",
      "min": 0,
      "max": 120,
      "defaultValue": "max"
    },
    {
      "id": "trueColor",
      "min": 0,
      "max": 3,
      "defaultValue": "max"
    },
    {
      "id": "luminousFlux",
      "min": 0,
      "max": 120,
      "maxBySeq": [
        {
          "seq": 6,
          "max": 360
        }
      ],
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.19,
      "formula": "86.19%",
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.17,
      "formula": "52.39% + 52.39% + 52.39%",
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.37,
      "formula": "123.37%",
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 239.97,
      "formula": "239.97%",
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 143.65,
      "formula": "14.37% + 129.28%",
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "spark_collision_1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 111.12,
      "formula": "55.56% × 2",
      "requiresResource": "120点溢彩",
      "requiresResourceAtLeast": {
        "id": "iridescence",
        "value": 120
      },
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "spark_collision_2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 333.34,
      "formula": "166.67% × 2",
      "requiresResource": "120点溢彩",
      "requiresResourceAtLeast": {
        "id": "iridescence",
        "value": 120
      },
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "spark_collision_3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 555.56,
      "formula": "277.78% × 2",
      "requiresResource": "120点溢彩",
      "requiresResourceAtLeast": {
        "id": "iridescence",
        "value": 120
      },
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "kaleidoscopic_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 82.81,
      "formula": "82.81%",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 77.74,
      "formula": "38.87% × 2",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.25,
      "formula": "37.75% × 3",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.74,
      "formula": "29.75% × 2 + 44.62% + 44.62%",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_na5",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.81,
      "formula": "75.54% + 15.11% × 5 + 100.72%",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 184.2,
      "formula": "184.20%",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_ground_heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.41,
      "formula": "17.63% × 7",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_graffiti_blast",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 143.65,
      "formula": "14.37% + 129.28%",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "kaleidoscopic_air_heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 243.39,
      "formula": "34.77% × 7",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "lynae_style_palettes",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 278.63,
      "formula": "139.31% + 46.44% × 3",
      "impliedStates": [
        "光学取样"
      ]
    },
    {
      "id": "additive_color",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 232.62,
      "formula": "116.31% × 2",
      "impliedStates": [
        "绮彩巡游"
      ]
    },
    {
      "id": "prismatic_overblast",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 874.8,
      "formula": "87.48% × 10",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "to_a_vivid_tomorrow",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 201.06,
      "formula": "8.38% × 12 + 10.05% × 10",
      "requiresResource": "爆炸喷涂后"
    },
    {
      "id": "time_to_show_some_colors",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 224.8,
      "formula": "22.48% × 10",
      "triggerEvents": [
        "introEntry",
        "applyPhotochromicFlux"
      ]
    },
    {
      "id": "iridescent_splash",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 304.18,
      "formula": "304.18%",
      "requiresResource": "3点本色",
      "requiresResourceAtLeast": {
        "id": "trueColor",
        "value": 3
      },
      "impliedStates": [
        "绮彩巡游"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ]
    },
    {
      "id": "visual_impact",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1216.72,
      "formula": "1216.72%",
      "requiresResource": "3点本色",
      "requiresResourceAtLeast": {
        "id": "trueColor",
        "value": 3
      },
      "impliedStates": [
        "绮彩巡游"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ]
    },
    {
      "id": "polychrome_leap_1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "33.80% × 3",
      "requiresResource": "1/3流光上限",
      "requiresResourceAtLeast": {
        "id": "luminousFlux",
        "fractionOfCap": 0.3333333333333333
      },
      "impliedStates": [
        "绮彩巡游"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ]
    },
    {
      "id": "polychrome_leap_2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 101.4,
      "formula": "16.90% × 6",
      "requiresResource": "1/3流光上限",
      "requiresResourceAtLeast": {
        "id": "luminousFlux",
        "fractionOfCap": 0.3333333333333333
      },
      "impliedStates": [
        "绮彩巡游"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ]
    },
    {
      "id": "polychrome_leap_3",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 104.8,
      "formula": "13.10% × 8",
      "requiresResource": "1/3流光上限",
      "requiresResourceAtLeast": {
        "id": "luminousFlux",
        "fractionOfCap": 0.3333333333333333
      },
      "impliedStates": [
        "绮彩巡游"
      ],
      "triggerEvents": [
        "applyPhotochromicFlux"
      ]
    },
    {
      "id": "tune_rupture_response_spectral",
      "legacyIds": [
        "tune_rupture_response_spectral_analysis"
      ],
      "category": "forteCircuit",
      "damageType": "tuneRupture",
      "damageTags": [
        "tuneRuptureDmg"
      ],
      "multiplier": 1880.75,
      "formula": "1880.75%",
      "requiresState": "目标震谐·干涉",
      "requiresAllStates": [
        "共鸣模态·震谐"
      ]
    }
  ],
  "defaultSkillId": "prismatic_overblast",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 25,
  "echoLead": "25:hyvatia",
  "combatStates": [
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
          "value": "共鸣模态·集谐"
        }
      ]
    },
    {
      "id": "战斗阶段",
      "kind": "phase",
      "required": true,
      "defaultValue": "光学取样",
      "options": [
        {
          "value": "光学取样"
        },
        {
          "value": "绮彩巡游"
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
      "id": "目标集谐状态",
      "kind": "target",
      "requiresState": "共鸣模态·集谐",
      "options": [
        {
          "value": "目标集谐·偏移"
        },
        {
          "value": "目标集谐·干涉"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_intro_spectro",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 25,
      "scope": "self",
      "defaultActive": false,
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 9
    },
    {
      "id": "b_liberation_final",
      "zone": "finalDmg",
      "value": 24,
      "scope": "team",
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceLiberation"
      ],
      "duration": 30
    },
    {
      "id": "b_visual_break",
      "zone": "breakAmp",
      "value": 40,
      "scope": "team",
      "defaultActive": false,
      "triggerSkills": [
        "visual_impact"
      ],
      "duration": 30
    },
    {
      "id": "b_tune_strain_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "目标集谐·干涉",
      "requiresAllStates": [
        "共鸣模态·集谐"
      ],
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "stackGroup": "集谐·干涉",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.36
      }
    },
    {
      "id": "b_outro_all",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b_outro_burst",
      "zone": "amplify",
      "damageType": "resonanceLiberation",
      "value": 25,
      "scope": "team",
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_leap",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "polychrome_leap_1",
            "polychrome_leap_2",
            "polychrome_leap_3"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_self_amp",
          "zone": "amplify",
          "value": 25,
          "scope": "self"
        },
        {
          "id": "k2_outro_amp",
          "zone": "amplify",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 14
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_visual_mult",
          "zone": "skillMultBonus",
          "value": 90,
          "scope": "self",
          "skills": [
            "visual_impact",
            "iridescent_splash"
          ]
        },
        {
          "id": "k3_mix_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 1375,
          "scope": "self",
          "skills": [
            "additive_color"
          ],
          "maxStacks": 25,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "预调色"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 70,
          "scope": "self",
          "skills": [
            "prismatic_overblast"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_true_color",
          "zone": "vulnerability",
          "value": 90,
          "scope": "self",
          "skills": [
            "iridescent_splash",
            "visual_impact"
          ],
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "心之彩"
        }
      ]
    }
  ],
  "modes": null
});
