"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jinhsi": {
        "name": "Jinhsi",
        "resources": [
          {
            "label": "韶光"
          }
        ],
        "skills": [
          {
            "name": "Slash of Breaking Dawn - Stage 1 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Stage 2 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Stage 3 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Stage 4 DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Heavy Attack DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Mid-air Attack DMG"
          },
          {
            "name": "Slash of Breaking Dawn - Dodge Counter DMG"
          },
          {
            "name": "Trailing Lights of Eons - Skill DMG"
          },
          {
            "name": "Trailing Lights of Eons - Overflowing Radiance DMG"
          },
          {
            "name": "Purge of Light - Skill DMG"
          },
          {
            "name": "Loong's Halo - Skill DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 1 DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 2 DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 3 DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Basic Attack 4 DMG"
          },
          {
            "name": "Luminal Synthesis - Crescent Divinity DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Heavy Attack DMG"
          },
          {
            "name": "Luminal Synthesis - Illuminous Epiphany: Solar Flare DMG"
          },
          {
            "name": "Luminal Synthesis - Incarnation - Dodge Counter DMG"
          },
          {
            "name": "Luminal Synthesis - Illuminous Epiphany: Stella Glamor DMG"
          }
        ],
        "buffs": [
          {
            "source": "固有·沐光",
            "label": "衍射伤害加成",
            "trigger": "默认",
            "excerpt": "衍射伤害加成提升20%",
            "desc": "今汐的衍射伤害加成提升20%。"
          },
          {
            "source": "固有·凝神",
            "label": "蟠龙清辉倍率提升",
            "trigger": "默认",
            "excerpt": "蟠龙清辉伤害倍率提升50%",
            "desc": "变奏技能蟠龙清辉伤害倍率提升50%。"
          }
        ],
        "chain": [
          {
            "name": "沉海洄天溯",
            "desc": "今汐施放普攻凌霄·普攻、共鸣技能逐天取月时，获得一层惊蛰效果，可叠加4层，持续6秒。施放共鸣技能惊龙破空时，消耗惊蛰效果的所有层数，每消耗一层，共鸣技能惊龙破空造成的伤害提升20%。",
            "buffs": [
              {
                "label": "惊龙破空伤害加深",
                "trigger": "叠惊蛰后",
                "excerpt": "惊龙破空消耗惊蛰时，每层伤害加深20%"
              }
            ]
          },
          {
            "name": "绒雪凝屏息",
            "desc": "今汐处于非战斗状态大于4秒时，回复50点【韶光】，每4秒只生效1次。"
          },
          {
            "name": "天定神子身",
            "desc": "今汐施放变奏技能蟠龙清辉后，获得一层谪仙效果，每层使攻击提升25%，可叠加2层，效果持续20秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "施放变奏技能后",
                "excerpt": "释放蟠龙清辉后，每层攻击提升25%"
              }
            ]
          },
          {
            "name": "自甘佑凡尘",
            "desc": "今汐施放共鸣解放移岁诛邪或共鸣技能惊龙破空时，附近队伍中所有角色全属性伤害加成提升20%，持续20秒。",
            "buffs": [
              {
                "label": "全属性伤害加成",
                "trigger": "施放共鸣解放/惊龙破空后",
                "excerpt": "释放移岁诛邪或惊龙破空时，全属性伤害加成提升20%"
              }
            ]
          },
          {
            "name": "流光化霜雪",
            "desc": "共鸣解放移岁诛邪伤害倍率提升 120%。",
            "buffs": [
              {
                "label": "移岁诛邪倍率提升",
                "trigger": "默认",
                "excerpt": "移岁诛邪伤害倍率提升120%"
              }
            ]
          },
          {
            "name": "寒尽又逢春",
            "desc": "共鸣技能惊龙破空伤害倍率提升45%，消耗【韶光】时带来的倍率增加效果额外提升45%。",
            "buffs": [
              {
                "label": "惊龙破空倍率提升",
                "trigger": "默认",
                "excerpt": "惊龙破空伤害倍率提升45%"
              },
              {
                "label": "韶光倍率提升",
                "trigger": "默认",
                "excerpt": "韶光带来的倍率增加效果额外提升45%"
              }
            ]
          }
        ]
      }
    }
  }
});
