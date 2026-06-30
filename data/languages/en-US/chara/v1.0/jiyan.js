"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jiyan": {
        "name": "Jiyan",
        "resources": [
          {
            "label": "破阵值"
          }
        ],
        "skills": [
          {
            "name": "Lone Lance - Stage 1 DMG"
          },
          {
            "name": "Lone Lance - Stage 2 DMG"
          },
          {
            "name": "Lone Lance - Stage 3 DMG"
          },
          {
            "name": "Lone Lance - Stage 4 DMG"
          },
          {
            "name": "Lone Lance - Stage 5 DMG"
          },
          {
            "name": "Lone Lance - Heavy Attack DMG"
          },
          {
            "name": "Lone Lance - Windborne Strike Damage"
          },
          {
            "name": "Lone Lance - Abyssal Slash Damage"
          },
          {
            "name": "Lone Lance - Mid-air Attack DMG"
          },
          {
            "name": "Lone Lance - Banner Of Triumph Damage"
          },
          {
            "name": "Lone Lance - Mid-air Attack Follow-Up DMG"
          },
          {
            "name": "Lone Lance - Dodge Counter DMG"
          },
          {
            "name": "Windqueller - Skill DMG"
          },
          {
            "name": "Emerald Storm - Prelude - Lance of Qingloong Stage 1 DMG"
          },
          {
            "name": "Emerald Storm - Prelude - Lance Of Qingloong Stage 2 DMG"
          },
          {
            "name": "Emerald Storm - Prelude - Lance Of Qingloong Stage 3 DMG"
          },
          {
            "name": "Tactical Strike - Skill DMG"
          },
          {
            "name": "Qingloong at War - Emerald Storm: Finale Damage",
            "requiresResourceLabel": "30破阵值"
          }
        ],
        "combatStates": [
          {
            "label": "破阵状态",
            "inactiveLabel": "未处于破阵状态",
            "entry": "施放共鸣解放「苍躣八荒·谋定」后进入，持续10秒；若有30点以上破阵值，会先消耗30点施放「苍躣八荒·后动」。",
            "options": [
              {
                "label": "破阵状态",
                "valueLabel": "破阵状态"
              }
            ],
            "idLabel": "破阵状态"
          }
        ],
        "buffs": [
          {
            "source": "固有·垂天平澜",
            "label": "攻击",
            "trigger": "施放变奏技能后",
            "excerpt": "释放攻其不备后，攻击提升10%",
            "desc": "施放变奏技能攻其不备后，忌炎的攻击提升10%，持续15秒。"
          },
          {
            "source": "固有·蕴风集流",
            "label": "暴击伤害",
            "trigger": "攻击命中后",
            "excerpt": "攻击命中后，暴击伤害提升12%",
            "desc": "忌炎的攻击命中目标时，暴击伤害提升12%，持续8秒。"
          },
          {
            "source": "共鸣回路·苍龙破阵",
            "label": "枪扫风定伤害加成",
            "trigger": "消耗破阵值或处于破阵状态时",
            "excerpt": "消耗30点破阵值或处于破阵状态时，枪扫风定伤害提升20%",
            "desc": "施放共鸣技能枪扫风定时，若【破阵值】不低于30点，则消耗30点【破阵值】，使此次共鸣技能枪扫风定伤害提升20%。处于破阵状态时，共鸣技能枪扫风定伤害提升20%，且不再消耗【破阵值】。"
          }
        ],
        "chain": [
          {
            "name": "济世",
            "desc": "共鸣技能枪扫风定可使用次数增加1次。施放共鸣技能枪扫风定时，消耗的【破阵值】减少15点。"
          },
          {
            "name": "通变",
            "desc": "施放变奏技能攻其不备后，忌炎积攒30点【破阵值】，忌炎的攻击提升28%，持续15秒，每15秒可触发1次。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "施放变奏技能后",
                "excerpt": "释放攻其不备后，攻击提升28%"
              }
            ]
          },
          {
            "name": "观势",
            "desc": "施放共鸣技能枪扫风定、共鸣解放苍躣八荒·谋定、共鸣解放苍躣八荒·后动或变奏技能攻其不备时，忌炎的暴击提升16%、暴击伤害提升32%，持续8秒。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "施放指定技能后",
                "excerpt": "释放指定技能后，暴击提升16%"
              },
              {
                "label": "暴击伤害",
                "trigger": "施放指定技能后",
                "excerpt": "释放指定技能后，暴击伤害提升32%"
              }
            ]
          },
          {
            "name": "奇正",
            "desc": "施放共鸣解放苍躣八荒·谋定或共鸣解放苍躣八荒·后动时，队伍中的角色重击伤害加成提升25%，效果持续30秒。",
            "buffs": [
              {
                "label": "重击伤害加成",
                "trigger": "施放指定共鸣解放后",
                "excerpt": "释放苍躣八荒后，队伍中角色重击伤害加成提升25%"
              }
            ]
          },
          {
            "name": "明断",
            "desc": "延奏技能克己伤害倍率增加120%。攻击命中目标时，忌炎的攻击提升3%，效果持续8秒，可叠加15层；施放变奏技能攻其不备后叠加至满层。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "攻击命中或施放变奏技能后",
                "excerpt": "攻击命中每层攻击提升3%；释放攻其不备后直接满15层"
              }
            ]
          },
          {
            "name": "移山",
            "desc": "每次使用重击、变奏技能攻其不备或共鸣技能枪扫风定时，获得1层【锐意之势】，最多可叠加2层。施放共鸣解放苍躣八荒·后动会消耗所有【锐意之势】，每层【锐意之势】使共鸣解放苍躣八荒·后动的伤害倍率提升120%。",
            "buffs": [
              {
                "label": "苍躣八荒·后动倍率增加",
                "trigger": "消耗1层锐意之势时",
                "excerpt": "消耗第1层锐意之势时，苍躣八荒·后动倍率增加120%"
              },
              {
                "label": "苍躣八荒·后动倍率增加",
                "trigger": "消耗2层锐意之势时",
                "excerpt": "消耗第2层锐意之势时，苍躣八荒·后动倍率再增加120%"
              }
            ]
          }
        ]
      }
    }
  }
});
