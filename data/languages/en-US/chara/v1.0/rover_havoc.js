window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rover_havoc": {
        "name": "Rover: Havoc",
        "resources": [
          {
            "label": "暗流"
          }
        ],
        "skills": [
          {
            "name": "Tuneslayer - Stage 1 DMG"
          },
          {
            "name": "Tuneslayer - Stage 2 DMG"
          },
          {
            "name": "Tuneslayer - Stage 3 DMG"
          },
          {
            "name": "Tuneslayer - Stage 4 DMG"
          },
          {
            "name": "Tuneslayer - Stage 5 DMG"
          },
          {
            "name": "Tuneslayer - Heavy Attack DMG"
          },
          {
            "name": "Tuneslayer - Mid-air Attack DMG"
          },
          {
            "name": "Tuneslayer - Dodge Counter DMG"
          },
          {
            "name": "Wingblade - Skill DMG"
          },
          {
            "name": "Deadening Abyss - Skill DMG"
          },
          {
            "name": "Instant of Annihilation - Skill DMG"
          },
          {
            "name": "Umbra Eclipse - Devastation Damage"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 1 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 2 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 3 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 4 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Basic Attack Stage 5 DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Heavy Attack DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Thwackblade Damage"
          },
          {
            "name": "Umbra Eclipse - Umbra: Plunging Attack DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Dodge Counter DMG"
          },
          {
            "name": "Umbra Eclipse - Umbra: Lifetaker Damage"
          },
          {
            "name": "Soundweaver"
          }
        ],
        "combatStates": [
          {
            "label": "暗涌状态",
            "inactiveLabel": "未处于暗涌",
            "entry": "【暗流】充满时，长按普攻施放灭音；施放灭音后进入暗涌状态。",
            "options": [
              {
                "label": "暗涌"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·变格",
            "label": "湮灭伤害加成",
            "trigger": "处于暗涌状态时",
            "excerpt": "暗涌状态期间，湮灭伤害加成提升20%",
            "desc": "处于暗涌状态时，湮灭伤害加成提升20%。"
          }
        ],
        "chain": [
          {
            "name": "弦外知机",
            "desc": "共鸣技能伤害加成提升30%。",
            "buffs": [
              {
                "label": "共鸣技能伤害加成",
                "trigger": "默认",
                "excerpt": "共鸣技能伤害加成提升30%"
              }
            ]
          },
          {
            "name": "晦明如朔",
            "desc": "施放重击灭音进入暗涌状态时，重置共鸣技能的冷却时间。"
          },
          {
            "name": "声息涌动",
            "desc": "处于暗涌状态时，第5段普攻命中敌人时，可回复已损失生命值10%的生命值。"
          },
          {
            "name": "尘声湮灭",
            "desc": "重击灭音、共鸣解放临渊死寂命中目标时，目标的湮灭抗性降低10%，持续20秒。",
            "buffs": [
              {
                "label": "湮灭减抗",
                "trigger": "灭音/临渊死寂命中后",
                "excerpt": "灭音或临渊死寂命中后，目标湮灭抗性降低10%"
              }
            ]
          },
          {
            "name": "万物寂听",
            "desc": "处于暗涌状态时第5段普攻可额外造成一次湮灭伤害，此次伤害为第5段普攻伤害的50%。",
            "buffs": [
              {
                "label": "第5段普攻额外伤害",
                "trigger": "暗涌状态期间",
                "excerpt": "暗涌第5段普攻额外造成当前倍率50%的伤害"
              }
            ]
          },
          {
            "name": "暗涌潮升",
            "desc": "处于暗涌状态时，漂泊者的暴击提升25%。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "暗涌状态期间",
                "excerpt": "暗涌状态期间，暴击提升25%"
              }
            ]
          }
        ]
      }
    }
  }
});
