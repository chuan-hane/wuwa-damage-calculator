WUWA.register({
  "id": "denia",
  "aliases": [],
  "debut": 3.3,
  "element": "fusion",
  "weaponType": 5,
  "quality": 5,
  "effectTypes": [
    "fusion"
  ],
  "effectTypeRequiresState": {
    "fusion": "共鸣模态·聚爆"
  },
  "signatureWeaponId": "forged_dwarf_star",
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
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "darkCore",
      "min": 0,
      "max": 3,
      "maxBySeq": [
        {
          "seq": 3,
          "max": 5
        }
      ],
      "defaultValue": "max"
    },
    {
      "id": "voidParticle",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "symmorphEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "sc_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 32.69,
      "formula": "32.69%",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "sc_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 60.36,
      "formula": "30.18% × 2",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "sc_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.47,
      "formula": "25.49% × 3",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "sc_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 128,
      "formula": "128.00%",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "sc_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 161.52,
      "formula": "80.76% × 2",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "sc_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.97,
      "formula": "29.59% + 44.38%",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "sc_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.05,
      "formula": "49.35% × 3",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "bd_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 36.51,
      "formula": "36.51%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.39,
      "formula": "62.39%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 137.06,
      "formula": "137.06%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_air_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 73.97,
      "formula": "29.59% + 44.38%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 108.08,
      "formula": "108.08%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 36.51,
      "formula": "36.51%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_air3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.39,
      "formula": "62.39%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_air4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_na1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 36.51,
      "formula": "36.51%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_na1",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_na2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_na2",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_na3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 62.39,
      "formula": "62.39%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_na3",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_na4",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_na4",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_heavy",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 137.06,
      "formula": "137.06%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_heavy",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_air_heavy",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 73.97,
      "formula": "29.59% + 44.38%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_air_heavy",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_dodge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 108.08,
      "formula": "108.08%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_dodge",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_air1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 36.51,
      "formula": "36.51%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_air1",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_air2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_air2",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_air3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 62.39,
      "formula": "62.39%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_air3",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "void_bd_air4",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "requiresResource": "虚质粒子",
      "fallbackSkillId": "bd_air4",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "sc_skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 104.51,
      "formula": "17.42% × 3 + 52.25%",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "bd_skill_beckon",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 103.7,
      "formula": "31.10% + 14.52% × 5",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_banish1",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 104.04,
      "formula": "34.68% × 3",
      "requiresResource": "黯核",
      "fallbackSkillId": "bd_skill_beckon",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "bd_banish2",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 112.01,
      "perStack": 150,
      "stackResource": "darkCore",
      "stackLabel": "黯核",
      "formula": "112.01% + 150% × 黯核",
      "requiresResource": "黯核",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "sc_lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "bd_lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 795.24,
      "formula": "198.81% × 4",
      "requiresResource": "共形能量充满",
      "requiresResourceFull": "symmorphEnergy",
      "impliedStates": [
        "幻灭之形"
      ]
    },
    {
      "id": "sc_intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 104.62,
      "formula": "104.62%",
      "impliedStates": [
        "布景之形"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "bd_intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 155.22,
      "formula": "51.74% × 3",
      "impliedStates": [
        "幻灭之形"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "erosion_field",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 136.33,
      "formula": "136.33%",
      "impliedStates": [
        "蚀域"
      ]
    },
    {
      "id": "c3_sc_na4_dark_core",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 128,
      "formula": "128.00% + 1200%",
      "seq": 3,
      "requiresResource": "黯核达到上限",
      "requiresResourceFull": "darkCore",
      "fallbackSkillId": "sc_na4",
      "impliedStates": [
        "布景之形"
      ]
    },
    {
      "id": "c3_sc_skill_dark_core",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 104.51,
      "formula": "17.42% × 3 + 52.25% + 1200%",
      "seq": 3,
      "requiresResource": "黯核达到上限",
      "requiresResourceFull": "darkCore",
      "fallbackSkillId": "sc_skill",
      "impliedStates": [
        "布景之形"
      ]
    }
  ],
  "defaultSkillId": "bd_lib",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 28,
  "combatStates": [
    {
      "id": "形态",
      "kind": "form",
      "required": true,
      "defaultValue": "幻灭之形",
      "options": [
        {
          "value": "布景之形"
        },
        {
          "value": "幻灭之形"
        }
      ]
    },
    {
      "id": "共鸣模态",
      "kind": "mode",
      "required": true,
      "defaultValue": "共鸣模态·聚爆",
      "options": [
        {
          "value": "共鸣模态·聚爆"
        },
        {
          "value": "共鸣模态·集谐"
        }
      ]
    },
    {
      "id": "熵变强化",
      "kind": "buff",
      "options": [
        {
          "value": "熵变强化·布景之形"
        },
        {
          "value": "熵变强化·幻灭之形"
        }
      ]
    },
    {
      "id": "蚀域",
      "kind": "field",
      "options": [
        {
          "value": "蚀域"
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
      "id": "b_entropy_atk",
      "zone": "attackPercent",
      "value": 30,
      "scope": "self",
      "requiresState": "熵变强化·幻灭之形"
    },
    {
      "id": "b_void_particle_mult",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "void_bd_na1",
        "void_bd_na2",
        "void_bd_na3",
        "void_bd_na4",
        "void_bd_heavy",
        "void_bd_air_heavy",
        "void_bd_dodge",
        "void_bd_air1",
        "void_bd_air2",
        "void_bd_air3",
        "void_bd_air4"
      ]
    },
    {
      "id": "b_etched_fusion",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 30,
      "scope": "team",
      "requiresState": [
        "熵变强化·布景之形",
        "熵变强化·幻灭之形"
      ],
      "requiresAllStates": [
        "共鸣模态·聚爆"
      ]
    },
    {
      "id": "b_etched_tune_base",
      "zone": "breakAmp",
      "value": 10,
      "scope": "team",
      "requiresState": [
        "熵变强化·布景之形",
        "熵变强化·幻灭之形"
      ],
      "requiresAllStates": [
        "共鸣模态·集谐"
      ]
    },
    {
      "id": "b_etched_tune_scale",
      "zone": "breakAmp",
      "scope": "team",
      "requiresState": [
        "熵变强化·布景之形",
        "熵变强化·幻灭之形"
      ],
      "requiresAllStates": [
        "共鸣模态·集谐"
      ],
      "scaleBy": {
        "stat": "discordEff",
        "target": "output",
        "statBonus": -100,
        "rate": 0.8,
        "min": 0,
        "cap": 40
      }
    },
    {
      "id": "b_tune_response",
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
      "id": "b_outro_fusion",
      "zone": "amplify",
      "effect": "fusion",
      "value": 60,
      "scope": "team",
      "requiresState": "共鸣模态·聚爆",
      "duration": 30
    },
    {
      "id": "b_outro_tune_all",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "requiresState": "共鸣模态·集谐",
      "duration": 16
    },
    {
      "id": "b_outro_tune_extra",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "requiresState": "共鸣模态·集谐",
      "defaultActive": false,
      "duration": 16
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_cd",
          "zone": "critDamage",
          "value": 30,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_fusion_bonus",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 50,
          "scope": "team",
          "requiresState": "共鸣模态·聚爆",
          "defaultActive": false,
          "duration": 15
        },
        {
          "id": "k2_res",
          "zone": "resShred",
          "element": "fusion",
          "value": 10,
          "scope": "self",
          "requiresState": "共鸣模态·聚爆",
          "maxStacks": 10,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "简并虚质",
          "duration": 15
        },
        {
          "id": "k2_break",
          "zone": "breakAmp",
          "value": 20,
          "scope": "team",
          "requiresState": "共鸣模态·集谐",
          "defaultActive": false,
          "duration": 15
        },
        {
          "id": "k2_banish",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "bd_banish1",
            "bd_banish2"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_bd_lib",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "bd_lib"
          ]
        },
        {
          "id": "k3_dark_core",
          "multAdd": 1200,
          "scope": "self",
          "skills": [
            "c3_sc_na4_dark_core",
            "c3_sc_skill_dark_core"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_sc_lib",
          "zone": "amplify",
          "value": 100,
          "scope": "self",
          "skills": [
            "sc_lib"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_atk",
          "zone": "attackPercent",
          "value": 60,
          "scope": "self",
          "requiresState": [
            "熵变强化·布景之形",
            "熵变强化·幻灭之形"
          ]
        },
        {
          "id": "k6_fusion",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 60,
          "scope": "self",
          "requiresState": [
            "熵变强化·布景之形",
            "熵变强化·幻灭之形"
          ]
        },
        {
          "id": "k6_fusion_extra",
          "zone": "effectExtraRate",
          "effect": "fusion",
          "value": 200,
          "scope": "self",
          "requiresState": "共鸣模态·聚爆",
          "defaultActive": false
        },
        {
          "id": "k6_tune_extra_stack",
          "zone": "finalDmg",
          "scope": "self",
          "requiresState": "目标集谐·干涉",
          "requiresAllStates": [
            "共鸣模态·集谐"
          ],
          "defaultActive": false,
          "scaleBy": {
            "stat": "breakAmp",
            "rate": 0.12
          }
        }
      ]
    }
  ],
  "modes": null
});
