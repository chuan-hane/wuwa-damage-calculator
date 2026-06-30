window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "encore": {
        "name": "Encore",
        "resources": [
          {
            "label": "失序值"
          }
        ],
        "skills": [
          {
            "name": "Wooly Attack - Stage 1 DMG"
          },
          {
            "name": "Wooly Attack - Stage 2 DMG"
          },
          {
            "name": "Wooly Attack - Stage 3 DMG"
          },
          {
            "name": "Wooly Attack - Stage 4 DMG"
          },
          {
            "name": "Wooly Attack - Woolies Damage"
          },
          {
            "name": "Wooly Attack - Heavy Attack DMG"
          },
          {
            "name": "Wooly Attack - Mid-air Attack"
          },
          {
            "name": "Wooly Attack - Dodge Counter DMG"
          },
          {
            "name": "Flaming Woolies - Flaming Woolies Damage"
          },
          {
            "name": "Flaming Woolies - Energetic Welcome Damage"
          },
          {
            "name": "Cosmos Rave - Cosmos: Frolicking Stage 1 DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos: Frolicking Stage 2 DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos: Frolicking Stage 3 DMG"
          },
          {
            "name": "Cosmos Rave - Stage 4 DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos: Heavy Attack DMG"
          },
          {
            "name": "Cosmos Rave - Cosmos Rampage Damage"
          },
          {
            "name": "Cosmos Rave - Cosmos: Dodge Counter DMG"
          },
          {
            "name": "Woolies Helpers - Skill DMG"
          },
          {
            "name": "Black & White Woolies - Cloudy Frenzy Damage"
          },
          {
            "name": "Black & White Woolies - Cosmos Rupture Damage"
          }
        ],
        "combatStates": [
          {
            "label": "黑咩大暴走",
            "inactiveLabel": "未处于黑咩大暴走",
            "entry": "施放共鸣解放黑咩大暴走后，安可进入黑咩大暴走状态。",
            "options": [
              {
                "label": "处于黑咩大暴走"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·生气的黑咩",
            "label": "全伤害加成",
            "trigger": "黑咩大暴走期间生命高于70%时",
            "excerpt": "黑咩大暴走期间生命高于70%时，伤害加成提升10%",
            "desc": "共鸣解放黑咩大暴走期间，安可的生命高于70%时，伤害提升10%。"
          },
          {
            "source": "固有·咩咩加油歌",
            "label": "热熔伤害加成",
            "trigger": "施放热力羊咩/黑咩·狂热后",
            "excerpt": "释放热力羊咩或黑咩·狂热时，热熔伤害加成提升10%",
            "desc": "施放共鸣技能热力羊咩或共鸣技能黑咩·狂热时，安可的热熔伤害加成提升10%，效果持续10秒。"
          }
        ],
        "chain": [
          {
            "name": "羊咩的童话书",
            "desc": "普攻命中目标时，热熔伤害加成额外提升3%，可叠加4层，持续6秒。",
            "buffs": [
              {
                "label": "热熔伤害加成",
                "trigger": "普攻命中后",
                "excerpt": "普攻命中后，每层热熔伤害加成提升3%"
              }
            ]
          },
          {
            "name": "数羊安眠曲",
            "desc": "施放普攻咩咩或共鸣技能热情欢迎式时，额外回复10点共鸣能量，每10秒可触发1次。"
          },
          {
            "name": "迷雾？黑海岸！",
            "desc": "重击白咩·失控之炎、重击黑咩·暴走之炎的伤害倍率提升40%。",
            "buffs": [
              {
                "label": "失控/暴走之炎倍率提升",
                "trigger": "默认",
                "excerpt": "失控之炎和暴走之炎伤害倍率提升40%"
              }
            ]
          },
          {
            "name": "冒险？好有趣！",
            "desc": "施放重击黑咩·暴走之炎时，队伍中的角色热熔伤害加成提升20%，效果持续30秒。",
            "buffs": [
              {
                "label": "热熔伤害加成",
                "trigger": "释放重击·黑咩·暴走之炎时",
                "excerpt": "释放重击·黑咩·暴走之炎时，热熔伤害加成提升20%"
              }
            ]
          },
          {
            "name": "聚光灯，勇士登场！",
            "desc": "共鸣技能伤害加成提升35%。",
            "buffs": [
              {
                "label": "共鸣技能伤害加成",
                "trigger": "默认",
                "excerpt": "共鸣技能伤害加成提升35%"
              }
            ]
          },
          {
            "name": "羊咩，拯救世界！",
            "desc": "共鸣解放黑咩大暴走期间，每次造成伤害为自身叠加1层【迷失羔羊】，每层使攻击提升5%，效果持续10秒，最多可以叠加5层。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "黑咩大暴走期间造成伤害后",
                "excerpt": "黑咩大暴走期间造成伤害后，每层攻击提升5%"
              }
            ]
          }
        ]
      }
    }
  }
});
