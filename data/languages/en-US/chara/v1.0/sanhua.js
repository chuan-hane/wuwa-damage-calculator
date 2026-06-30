"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "sanhua": {
        "name": "Sanhua",
        "skills": [
          {
            "name": "Frigid Light - Stage 1 DMG"
          },
          {
            "name": "Frigid Light - Stage 2 DMG"
          },
          {
            "name": "Frigid Light - Stage 3 DMG"
          },
          {
            "name": "Frigid Light - Stage 4 DMG"
          },
          {
            "name": "Frigid Light - Stage 5 DMG"
          },
          {
            "name": "Frigid Light - Heavy Attack DMG"
          },
          {
            "name": "Frigid Light - Mid-air Attack DMG"
          },
          {
            "name": "Frigid Light - Dodge Counter DMG"
          },
          {
            "name": "Eternal Frost - Skill DMG"
          },
          {
            "name": "Glacial Gaze - Skill DMG"
          },
          {
            "name": "Freezing Thorns - Skill DMG"
          },
          {
            "name": "Clarity of Mind - Detonate Damage"
          },
          {
            "name": "Clarity of Mind - Glacier Burst Damage"
          },
          {
            "name": "Clarity of Mind - Ice Prism Burst Damage"
          },
          {
            "name": "Clarity of Mind - Ice Thorn Burst Damage"
          }
        ],
        "buffs": [
          {
            "source": "固有·凝冰",
            "label": "共鸣技能伤害加成",
            "trigger": "施放变奏技能后",
            "excerpt": "释放变奏技能时，共鸣技能伤害加成提升20%",
            "desc": "施放变奏技能时，散华的共鸣技能伤害提升20%，持续8秒。"
          },
          {
            "source": "固有·瀑雪",
            "label": "冰绽倍率提升",
            "trigger": "施放第5段普攻后",
            "excerpt": "释放第5段普攻后，冰绽伤害倍率提升20%",
            "desc": "施放第5段普攻后，散华共鸣回路冰绽造成的伤害提升20%，持续8秒。"
          },
          {
            "source": "延奏·凛絜",
            "label": "普攻伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色普攻伤害加深38%",
            "desc": "下一位登场角色普攻伤害加深38%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "孤身孑然",
            "desc": "施放第5段普攻时，散华自身暴击提升15%，持续10秒。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "施放第5段普攻时",
                "excerpt": "释放第5段普攻时，暴击提升15%"
              }
            ]
          },
          {
            "name": "净雪明心",
            "desc": "重击爆裂消耗的耐力降低10点，施放共鸣技能朔雪永冻时散华抗打断能力提升，持续5秒。"
          },
          {
            "name": "目视异常",
            "desc": "散华攻击生命低于70%的目标时，造成的伤害提升35%。",
            "buffs": [
              {
                "label": "伤害加深",
                "trigger": "目标生命低于70%时",
                "excerpt": "攻击生命低于70%的目标时，伤害加深35%"
              }
            ]
          },
          {
            "name": "剑修五蕴",
            "desc": "施放共鸣解放焦瞑冻土时，回复10点共鸣能量。并且5秒内的下次重击爆裂伤害提升120%。",
            "buffs": [
              {
                "label": "爆裂倍率提升",
                "trigger": "释放焦瞑冻土后的下次爆裂",
                "excerpt": "释放焦瞑冻土后，下次爆裂伤害倍率提升120%"
              }
            ]
          },
          {
            "name": "颠覆无常",
            "desc": "共鸣回路冰绽的暴击伤害提升100%。即使没有成功引爆，【冰棘】、【冰棱】、【冰川】也会在消失时直接爆炸。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "默认",
                "excerpt": "冰绽暴击伤害提升100%"
              }
            ]
          },
          {
            "name": "曙色天光",
            "desc": "引爆【冰棱】或【冰川】后，队伍中的角色攻击提升10%，持续20秒，可叠加2层。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "引爆冰棱或冰川后",
                "excerpt": "引爆冰棱或冰川后，每层攻击提升10%"
              }
            ]
          }
        ]
      }
    }
  }
});
