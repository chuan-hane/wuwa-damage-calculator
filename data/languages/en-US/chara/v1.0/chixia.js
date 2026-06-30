window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "chixia": {
        "name": "Chixia",
        "skills": [
          {
            "name": "POW POW - Stage 1 DMG"
          },
          {
            "name": "POW POW - Stage 2 DMG"
          },
          {
            "name": "POW POW - Stage 3 DMG"
          },
          {
            "name": "POW POW - Stage 4 DMG"
          },
          {
            "name": "POW POW - Heavy Attack DMG"
          },
          {
            "name": "POW POW - Full Charge Heavy Attack DMG"
          },
          {
            "name": "POW POW - Mid-air Attack DMG"
          },
          {
            "name": "POW POW - Dodge Counter DMG"
          },
          {
            "name": "Whizzing Fight Spirit - Skill DMG"
          },
          {
            "name": "Blazing Flames - Skill DMG"
          },
          {
            "name": "Grand Entrance - Skill DMG"
          },
          {
            "name": "Heroic Bullets - Thermobaric Bullets Damage"
          },
          {
            "name": "Heroic Bullets - Boom Boom Damage"
          }
        ],
        "buffs": [
          {
            "source": "固有·加麻加辣",
            "label": "攻击",
            "trigger": "咔咔压制热压弹命中后",
            "excerpt": "咔咔压制期间，每发热压弹命中使攻击提升1%",
            "desc": "共鸣技能咔咔压制持续期间，每发【热压弹】命中可使攻击提升1%，持续10秒，可叠加30层。"
          },
          {
            "source": "固有·灼热弹匣",
            "label": "轰轰伤害加成",
            "trigger": "默认",
            "excerpt": "共鸣技能轰轰伤害提升50%",
            "desc": "【热压弹】容量上限扩充10发，共鸣技能轰轰伤害提升50%。"
          }
        ],
        "chain": [
          {
            "name": "剧院的英雄戏",
            "desc": "施放共鸣技能轰轰时，必定暴击。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "释放轰轰时",
                "excerpt": "释放轰轰时，暴击补足至必定暴击"
              }
            ]
          },
          {
            "name": "跃动的火星",
            "desc": "施放共鸣解放炽烈焰火期间，每击败1个目标，回复5点共鸣能量，每次最多可回复20点。"
          },
          {
            "name": "不灭的火把",
            "desc": "共鸣解放炽烈焰火对生命值低于50%的目标，伤害提升40%。",
            "buffs": [
              {
                "label": "炽烈焰火伤害加成",
                "trigger": "目标生命低于50%时",
                "excerpt": "目标生命低于50%时，炽烈焰火伤害提升40%"
              }
            ]
          },
          {
            "name": "英雄的绝招",
            "desc": "施放共鸣解放炽烈焰火时，炽霞获得60发【热压弹】，并立即重置一次共鸣技能咻咻斗意的冷却时间。"
          },
          {
            "name": "胜利的枪弹焰火",
            "desc": "固有技能加麻加辣叠加至满层时，攻击额外提升30%。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "加麻加辣满层时",
                "excerpt": "加麻加辣满层时，攻击额外提升30%"
              }
            ]
          },
          {
            "name": "剧终的回归彩蛋",
            "desc": "触发共鸣技能轰轰后，队伍中的角色普攻伤害加成提升25%，持续15秒。",
            "buffs": [
              {
                "label": "普攻伤害加成",
                "trigger": "触发轰轰后",
                "excerpt": "触发轰轰后，普攻伤害加成提升25%"
              }
            ]
          }
        ]
      }
    }
  }
});
