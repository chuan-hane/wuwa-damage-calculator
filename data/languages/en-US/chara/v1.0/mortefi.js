"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "mortefi": {
        "name": "Mortefi",
        "resources": [
          {
            "label": "怒气值"
          }
        ],
        "skills": [
          {
            "name": "Impromptu Show - Stage 1 DMG"
          },
          {
            "name": "Impromptu Show - Stage 2 DMG"
          },
          {
            "name": "Impromptu Show - Stage 3 DMG"
          },
          {
            "name": "Impromptu Show - Stage 4 DMG"
          },
          {
            "name": "Impromptu Show - Mid-air Attack Total DMG"
          },
          {
            "name": "Impromptu Show - Aimed Shot Damage"
          },
          {
            "name": "Impromptu Show - Fully Charged Aimed Shot Damage"
          },
          {
            "name": "Impromptu Show - Dodge Counter DMG"
          },
          {
            "name": "Passionate Variation - Skill DMG"
          },
          {
            "name": "Violent Finale - Violent Finale Damage"
          },
          {
            "name": "Violent Finale - Marcato Damage"
          },
          {
            "name": "Dissonance - Skill DMG"
          },
          {
            "name": "Fury Fugue - Fury Fugue Damage",
            "requiresResourceLabel": "100怒气值"
          }
        ],
        "buffs": [
          {
            "source": "固有·密接和应",
            "label": "怒火赋格倍率提升",
            "trigger": "释放激昂变奏后",
            "excerpt": "释放激昂变奏后，怒火赋格伤害倍率提升25%",
            "desc": "施放共鸣技能激昂变奏后8秒内，共鸣技能怒火赋格的伤害提升25%。"
          },
          {
            "source": "固有·节奏自由",
            "label": "加强音倍率提升",
            "trigger": "浮翼狂想期间加强音命中后",
            "excerpt": "浮翼狂想期间，每层加强音伤害倍率提升1.5%",
            "desc": "共鸣解放浮翼狂想持续期间，每次共鸣解放加强音命中后，都会使下次的共鸣解放加强音伤害提升1.5%，每0.35秒可触发1次，上限50层。共鸣解放浮翼狂想结束后重置效果层数。"
          },
          {
            "source": "延奏·怒意移调",
            "label": "重击伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色重击伤害加深38%",
            "desc": "下一位登场角色重击伤害加深38%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "孤独的练习曲",
            "desc": "共鸣解放浮翼狂想持续期间，队伍中登场角色施放共鸣技能时，莫特斐会进行协同攻击，打出2发共鸣解放加强音，造成热熔伤害。"
          },
          {
            "name": "虚伪的赞美诗",
            "desc": "使用声骸技能后，额外回复10点共鸣能量，每20秒可触发1次。"
          },
          {
            "name": "预热的宣叙调",
            "desc": "共鸣解放浮翼狂想持续期间，共鸣解放加强音的暴击伤害提升30%。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "浮翼狂想期间",
                "excerpt": "浮翼狂想期间，加强音暴击伤害提升30%"
              }
            ]
          },
          {
            "name": "宣泄的华尔兹",
            "desc": "共鸣解放浮翼狂想的持续时间延长7秒。"
          },
          {
            "name": "葬送的四重奏",
            "desc": "共鸣技能激昂变奏和共鸣技能怒火赋格命中目标时，进行协同攻击，打出4发共鸣解放加强音，造成热熔伤害，此次共鸣解放加强音伤害降低50%。"
          },
          {
            "name": "盛怒的无言歌",
            "desc": "施放共鸣解放暴烈终曲时，队伍中的角色攻击提升20%，持续20秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "释放暴烈终曲时",
                "excerpt": "释放暴烈终曲时，攻击提升20%"
              }
            ]
          }
        ]
      }
    }
  }
});
