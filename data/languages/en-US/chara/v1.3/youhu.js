"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "youhu": {
        "name": "Youhu",
        "resources": [
          {
            "label": "霜色"
          },
          {
            "label": "吉兆"
          }
        ],
        "skills": [
          {
            "name": "Frosty Punches - Stage 1 DMG"
          },
          {
            "name": "Frosty Punches - Stage 2 DMG"
          },
          {
            "name": "Frosty Punches - Stage 3 DMG"
          },
          {
            "name": "Frosty Punches - Stage 4 DMG"
          },
          {
            "name": "Frosty Punches - Heavy Attack: Frostfall DMG",
            "requiresResourceLabel": "霜色满"
          },
          {
            "name": "Frosty Punches - Mid-air Attack DMG"
          },
          {
            "name": "Frosty Punches - Dodge Counter DMG"
          },
          {
            "name": "Scroll Divination - Skill DMG"
          },
          {
            "name": "Scroll Divination - Chime DMG"
          },
          {
            "name": "Scroll Divination - Ding DMG"
          },
          {
            "name": "Scroll Divination - Ruyi DMG"
          },
          {
            "name": "Scroll Divination - Mask DMG"
          },
          {
            "name": "Fortune's Favor - Skill DMG"
          },
          {
            "name": "Scroll of Wonders - Skill DMG"
          },
          {
            "name": "Poetic Essence - Poetic Essence Skill DMG",
            "requiresResourceLabel": "4吉兆"
          }
        ],
        "combatStates": [
          {
            "label": "吉兆组合",
            "inactiveLabel": "未确认吉兆组合",
            "entry": "诗中物根据四个吉兆的组合获得额外效果。",
            "options": [
              {
                "label": "对偶",
                "valueLabel": "吉兆组合·对偶"
              },
              {
                "label": "双关",
                "valueLabel": "吉兆组合·双关"
              },
              {
                "label": "联珠",
                "valueLabel": "吉兆组合·联珠"
              },
              {
                "label": "合说",
                "valueLabel": "吉兆组合·合说"
              }
            ],
            "idLabel": "吉兆组合"
          }
        ],
        "buffs": [
          {
            "source": "固有·珠玑",
            "label": "冷凝伤害加成",
            "trigger": "施放变奏技能时",
            "excerpt": "释放遂心匣时，冷凝伤害加成提升15%",
            "desc": "施放变奏技能遂心匣时，釉瑚的冷凝伤害加成提升15%，持续14秒。"
          },
          {
            "source": "延奏·鉴珍",
            "label": "协同攻击伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色的协同攻击伤害加深100%",
            "desc": "下一位登场角色的协同攻击伤害加深100%，效果持续28秒。"
          },
          {
            "source": "共鸣回路·诗中物",
            "label": "诗中物伤害加成",
            "trigger": "拥有一对相同吉兆时",
            "excerpt": "拥有一对相同吉兆时，诗中物伤害提升70%",
            "desc": "对偶：拥有一对相同的【吉兆】时。诗中物造成的伤害提升70%。"
          },
          {
            "source": "共鸣回路·诗中物",
            "label": "诗中物伤害加成",
            "trigger": "拥有三个或四个相同吉兆时",
            "excerpt": "联珠或合说时，诗中物伤害提升175%",
            "desc": "联珠：拥有三个相同的【吉兆】时。诗中物造成的伤害提升175%。合说：拥有四个相同的【吉兆】时，同时触发飞白、双关、联珠的效果。"
          }
        ],
        "chain": [
          {
            "name": "港边小憩",
            "desc": "施放问祯时，釉瑚有10%概率免疫伤害和受击，持续5秒，若切换至其他角色则该效果提前结束。"
          },
          {
            "name": "堂侧酣睡",
            "desc": "对偶、联珠、合说对共鸣回路诗中物的伤害提升效果额外生效一次。",
            "buffs": [
              {
                "label": "诗中物额外伤害加成",
                "trigger": "对偶额外生效时",
                "excerpt": "对偶效果额外生效一次"
              },
              {
                "label": "诗中物额外伤害加成",
                "trigger": "联珠或合说额外生效时",
                "excerpt": "联珠或合说的伤害提升效果额外生效一次"
              }
            ]
          },
          {
            "name": "火中噩魇",
            "desc": "釉瑚的攻击提升20%。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "默认",
                "excerpt": "攻击提升20%"
              }
            ]
          },
          {
            "name": "雪夜迷寐",
            "desc": "每次施放共鸣技能匣中问祯时，有20%概率不进入冷却状态。"
          },
          {
            "name": "万里浅眠",
            "desc": "施放变奏技能遂心匣时，釉瑚的暴击提升15%，持续14秒。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "释放遂心匣时",
                "excerpt": "释放遂心匣时，暴击提升15%"
              }
            ]
          },
          {
            "name": "千秋一枕",
            "desc": "施放共鸣技能奇珍赏时，获得1层霁青效果，最多可叠加4层，持续7秒，每层霁青使釉瑚的暴击伤害提升15%。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "释放奇珍赏时",
                "excerpt": "释放奇珍赏时，每层暴击伤害提升15%"
              }
            ]
          }
        ]
      }
    }
  }
});
