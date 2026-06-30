"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "xiangliyao": {
        "name": "Xiangli Yao",
        "resources": [
          {
            "label": "演算效能"
          },
          {
            "label": "超算效能"
          }
        ],
        "skills": [
          {
            "name": "Probe - Stage 1 DMG"
          },
          {
            "name": "Probe - Stage 2 DMG"
          },
          {
            "name": "Probe - Stage 3 DMG"
          },
          {
            "name": "Probe - Stage 4 DMG"
          },
          {
            "name": "Probe - Stage 5 DMG"
          },
          {
            "name": "Probe - HA DMG"
          },
          {
            "name": "Probe - Mid-air Attack DMG"
          },
          {
            "name": "Probe - Dodge Counter DMG"
          },
          {
            "name": "Deduction - Skill DMG"
          },
          {
            "name": "Cogitation Model - Cogitation Model DMG"
          },
          {
            "name": "Cogitation Model - Pivot - Impale Stage 1 DMG"
          },
          {
            "name": "Cogitation Model - Pivot - Impale Stage 2 DMG"
          },
          {
            "name": "Cogitation Model - Pivot - Impale Stage 3 DMG"
          },
          {
            "name": "Cogitation Model - Divergence DMG"
          },
          {
            "name": "Cogitation Model - Unfathomed DMG"
          },
          {
            "name": "Forever Seeking - Decipher DMG",
            "requiresResourceLabel": "100演算效能"
          },
          {
            "name": "Forever Seeking - Law of Reigns DMG",
            "requiresResourceLabel": "5超算效能"
          },
          {
            "name": "Forever Seeking - Revamp DMG",
            "requiresResourceLabel": "应刃或一相万殊后"
          },
          {
            "name": "Principle - Skill DMG"
          }
        ],
        "combatStates": [
          {
            "label": "洞见",
            "inactiveLabel": "未处于洞见",
            "entry": "施放共鸣解放思维矩阵后进入，持续24秒；获得3个幻方，施放万方法则会消耗1个幻方，幻方耗尽时结束。",
            "options": [
              {
                "label": "洞见",
                "valueLabel": "洞见"
              }
            ],
            "idLabel": "洞见"
          }
        ],
        "buffs": [
          {
            "source": "固有·睿知",
            "label": "导电伤害加成",
            "trigger": "施放共鸣技能后",
            "excerpt": "施放共鸣技能后，每层导电伤害加成提升5%",
            "desc": "施放共鸣技能时，导电伤害加成提升5%，持续8秒，可叠加4层。"
          }
        ],
        "chain": [
          {
            "name": "卓异的门生",
            "desc": "施放共鸣技能万方法则时，额外生成6个衍构模体攻击目标，伤害倍率为共鸣技能万方法则的8%，此次伤害为共鸣解放伤害。",
            "buffs": [
              {
                "label": "万方法则追加伤害",
                "trigger": "施放万方法则时",
                "excerpt": "释放万方法则时，追加6个衍构模体，合计约万方法则倍率48%",
                "desc": "施放共鸣技能万方法则时，额外生成6个衍构模体攻击目标，伤害倍率为共鸣技能万方法则的8%，此次伤害为共鸣解放伤害。"
              }
            ]
          },
          {
            "name": "前人的行迹",
            "desc": "施放共鸣技能或共鸣解放思维矩阵时，自身暴击伤害提升30%，持续8秒。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "施放共鸣技能/思维矩阵后",
                "excerpt": "施放共鸣技能或思维矩阵后，暴击伤害提升30%",
                "desc": "施放共鸣技能或共鸣解放思维矩阵时，自身暴击伤害提升30%，持续8秒。"
              }
            ]
          },
          {
            "name": "邃古的遗墟",
            "desc": "施放共鸣解放思维矩阵后，获得效果：共鸣技能应刃、共鸣技能基本推衍、共鸣技能一相万殊或共鸣技能万方法则伤害提升63%，持续24秒，该效果最多可触发5次。",
            "buffs": [
              {
                "label": "指定共鸣技能伤害提升",
                "trigger": "施放思维矩阵后",
                "excerpt": "释放思维矩阵后，应刃等共鸣技能伤害提升63%",
                "desc": "施放共鸣解放思维矩阵后，获得效果：共鸣技能应刃、共鸣技能基本推衍、共鸣技能一相万殊或共鸣技能万方法则伤害提升63%，持续24秒，该效果最多可触发5次。"
              }
            ]
          },
          {
            "name": "再塑的躯骸",
            "desc": "施放共鸣解放思维矩阵时，队伍中的角色共鸣解放伤害加成提升25%，持续30秒。",
            "buffs": [
              {
                "label": "共鸣解放伤害加成",
                "trigger": "施放思维矩阵后",
                "excerpt": "释放思维矩阵后，队伍中的角色共鸣解放伤害加成提升25%",
                "desc": "施放共鸣解放思维矩阵时，队伍中的角色共鸣解放伤害加成提升25%，持续30秒。"
              }
            ]
          },
          {
            "name": "群星的止境",
            "desc": "延奏技能链式伤害倍率增加222%，共鸣解放思维矩阵伤害倍率提升100%。",
            "buffs": [
              {
                "label": "思维矩阵倍率提升",
                "trigger": "默认",
                "excerpt": "思维矩阵伤害倍率提升100%",
                "desc": "延奏技能链式伤害倍率增加222%，共鸣解放思维矩阵伤害倍率提升100%。"
              }
            ]
          },
          {
            "name": "坊市的烟火",
            "desc": "强化施放共鸣解放思维矩阵时获得的幻方，使共鸣技能万方法则伤害倍率提升76%。",
            "buffs": [
              {
                "label": "万方法则倍率提升",
                "trigger": "默认",
                "excerpt": "万方法则伤害倍率提升76%",
                "desc": "强化施放共鸣解放思维矩阵时获得的幻方，使共鸣技能万方法则伤害倍率提升76%。"
              }
            ]
          }
        ]
      }
    }
  }
});
