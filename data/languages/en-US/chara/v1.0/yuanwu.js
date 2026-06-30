window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "yuanwu": {
        "name": "Yuanwu",
        "resources": [
          {
            "label": "锋芒"
          }
        ],
        "skills": [
          {
            "name": "Leihuangquan - Stage 1 DMG"
          },
          {
            "name": "Leihuangquan - Stage 2 DMG"
          },
          {
            "name": "Leihuangquan - Stage 3 DMG"
          },
          {
            "name": "Leihuangquan - Stage 4 DMG"
          },
          {
            "name": "Leihuangquan - Stage 5 DMG"
          },
          {
            "name": "Leihuangquan - Heavy Attack DMG"
          },
          {
            "name": "Leihuangquan - Mid-air Attack DMG"
          },
          {
            "name": "Leihuangquan - Dodge Counter DMG"
          },
          {
            "name": "Leihuang Master - Skill DMG"
          },
          {
            "name": "Leihuang Master - Thunder Wedge Coordinated Attack DMG"
          },
          {
            "name": "Leihuang Master - Thunder Wedge Detonation Damage"
          },
          {
            "name": "Leihuang Master - Rumbling Spark Damage"
          },
          {
            "name": "Blazing Might - Skill DMG"
          },
          {
            "name": "Thunder Bombardment - Skill DMG"
          },
          {
            "name": "Unassuming Blade - Thunder Uprising Damage"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 1 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 2 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 3 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 4 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Basic Attack Stage 5 DMG"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Heavy Attack DMG"
          },
          {
            "name": "Unassuming Blade - Thunderweaver Damage"
          },
          {
            "name": "Unassuming Blade - Lightning Infused Dodge Counter DMG"
          }
        ],
        "combatStates": [
          {
            "label": "雷厉风行",
            "inactiveLabel": "未处于雷厉风行",
            "entry": "锋芒充满后施放万壑雷，或施放共鸣解放寂土重明，会进入雷厉风行状态。",
            "options": [
              {
                "label": "处于雷厉风行"
              }
            ]
          },
          {
            "label": "雷之楔",
            "inactiveLabel": "雷之楔未在场",
            "entry": "施放共鸣技能雷之楔后，雷之楔在场并形成雷池。",
            "options": [
              {
                "label": "雷之楔在场"
              },
              {
                "label": "处于雷池范围"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·决电",
            "label": "掀雷倍率提升",
            "trigger": "默认",
            "excerpt": "掀雷伤害倍率提升40%",
            "desc": "共鸣技能掀雷的伤害倍率获得提升40%，并且削减怪物共振度的能力提升。"
          }
        ],
        "chain": [
          {
            "name": "点一盏清茗",
            "desc": "渊武处在共鸣回路雷厉风行状态时，自身的普攻攻速提升20%，重击攻速提升20%。"
          },
          {
            "name": "敛狂戾之心",
            "desc": "施放变奏技能轰雷时，渊武额外回复15点共鸣能量。"
          },
          {
            "name": "正周身之气",
            "desc": "共鸣技能雷之楔的协同攻击命中目标时，基于渊武20%防御额外提升伤害。",
            "buffs": [
              {
                "label": "雷之楔协同攻击倍率增加",
                "trigger": "默认",
                "excerpt": "雷之楔协同攻击额外增加20%防御倍率"
              }
            ]
          },
          {
            "name": "挥刚猛之拳",
            "desc": "施放共鸣解放寂土重明时，队伍中在场角色获得渊武自身200%防御的护盾，持续10秒。"
          },
          {
            "name": "顾一方天地",
            "desc": "共鸣技能雷之楔在场时，渊武的共鸣解放伤害加成提升50%。",
            "buffs": [
              {
                "label": "共鸣解放伤害加成",
                "trigger": "雷之楔在场时",
                "excerpt": "雷之楔在场时，共鸣解放伤害加成提升50%"
              }
            ]
          },
          {
            "name": "保八方平安",
            "desc": "处在共鸣技能雷之楔范围内的附近队伍中所有角色将持续获得效果：防御提升32%，该效果持续时间3秒。",
            "buffs": [
              {
                "label": "防御",
                "trigger": "处于雷池范围内",
                "excerpt": "处于雷池范围内，防御提升32%"
              }
            ]
          }
        ]
      }
    }
  }
});
