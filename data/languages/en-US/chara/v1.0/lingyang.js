window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lingyang": {
        "name": "Lingyang",
        "resources": [
          {
            "label": "狮魂"
          }
        ],
        "skills": [
          {
            "name": "Majestic Fists - Stage 1 DMG"
          },
          {
            "name": "Majestic Fists - Stage 2 DMG"
          },
          {
            "name": "Majestic Fists - Stage 3 DMG"
          },
          {
            "name": "Majestic Fists - Stage 4 DMG"
          },
          {
            "name": "Majestic Fists - Stage 5 DMG"
          },
          {
            "name": "Majestic Fists - Feral Roars Damage"
          },
          {
            "name": "Majestic Fists - Heavy Attack DMG"
          },
          {
            "name": "Majestic Fists - Mid-air Attack DMG"
          },
          {
            "name": "Majestic Fists - Dodge Counter DMG"
          },
          {
            "name": "Ancient Arts - Ancient Arts Damage"
          },
          {
            "name": "Ancient Arts - Furious Punches Damage"
          },
          {
            "name": "Strive: Lion's Vigor - Skill DMG"
          },
          {
            "name": "Lion Awakens - Skill DMG"
          },
          {
            "name": "Unification of Spirits - Glorious Plunge Damage"
          },
          {
            "name": "Unification of Spirits - Feral Gyrate Stage 1 DMG"
          },
          {
            "name": "Unification of Spirits - Feral Gyrate Stage 2 DMG"
          },
          {
            "name": "Unification of Spirits - Mountain Roamer Damage"
          },
          {
            "name": "Unification of Spirits - Mountain Roamer: Diligent Practice"
          },
          {
            "name": "Unification of Spirits - Stormy Kicks Damage"
          },
          {
            "name": "Unification of Spirits - Tail Strike Damage"
          }
        ],
        "combatStates": [
          {
            "label": "行狮状态",
            "inactiveLabel": "未处于行狮状态",
            "entry": "满狮魂施放重击·起势·纵地金光后进入行狮状态；施放变奏技能或共鸣解放后若满狮魂，短按普攻也可进入。",
            "options": [
              {
                "label": "行狮"
              }
            ]
          },
          {
            "label": "狮子奋迅",
            "inactiveLabel": "未处于狮子奋迅",
            "entry": "施放共鸣解放奋进·狮子奋迅，俱足万行后进入。",
            "options": [
              {
                "label": "狮子奋迅"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·狮班免掠，逢场避让",
            "label": "出洞·睡狮蛰醒倍率提升",
            "trigger": "默认",
            "excerpt": "出洞·睡狮蛰醒伤害倍率提升50%",
            "desc": "变奏技能出洞·睡狮蛰醒的伤害提升50%。"
          },
          {
            "source": "共鸣解放·狮子奋迅",
            "label": "冷凝伤害加成",
            "trigger": "狮子奋迅期间",
            "excerpt": "处于狮子奋迅期间，冷凝伤害加成提升50%",
            "desc": "狮子奋迅状态期间：凌阳的冷凝伤害加成提升50%。"
          }
        ],
        "chain": [
          {
            "name": "醒狮开光，如意吉祥",
            "desc": "共鸣解放狮子奋迅持续期间提升凌阳的抗打断能力。"
          },
          {
            "name": "威风凛凛，四方张狂",
            "desc": "施放变奏技能出洞·睡狮蛰醒时，凌阳额外回复10点共鸣能量，每20秒可触发1次。"
          },
          {
            "name": "瞠目顾盼，其声昂昂",
            "desc": "共鸣解放狮子奋迅持续期间，凌阳的普攻伤害加成提升20%，共鸣技能伤害加成提升10%。",
            "buffs": [
              {
                "label": "普攻伤害加成",
                "trigger": "狮子奋迅期间",
                "excerpt": "处于狮子奋迅期间，普攻伤害加成提升20%"
              },
              {
                "label": "共鸣技能伤害加成",
                "trigger": "狮子奋迅期间",
                "excerpt": "处于狮子奋迅期间，共鸣技能伤害加成提升10%"
              }
            ]
          },
          {
            "name": "一跳三叫，众仙折腰",
            "desc": "凌阳施放延奏技能留痕·踏雪点星时，队伍中的角色冷凝伤害加成提升20%，持续30秒。",
            "buffs": [
              {
                "label": "冷凝伤害加成",
                "trigger": "释放延奏技能后",
                "excerpt": "释放延奏技能后，队伍中的角色冷凝伤害加成提升20%"
              }
            ]
          },
          {
            "name": "蹑罡踏斗，七星悬朗",
            "desc": "施放共鸣解放奋进·狮子奋迅，俱足万行时，将额外造成凌阳200%攻击的冷凝伤害。",
            "buffs": [
              {
                "label": "共鸣解放倍率增加",
                "trigger": "施放共鸣解放时",
                "excerpt": "释放共鸣解放时，额外造成200%攻击的冷凝伤害"
              }
            ]
          },
          {
            "name": "神功盖世，百鬼震惶",
            "desc": "处于共鸣回路行狮状态时，凌阳每次施放共鸣技能飞身式·翻山越涧后3秒内，下1次普攻的普攻伤害加成提升100%。",
            "buffs": [
              {
                "label": "普攻伤害加成",
                "trigger": "施放飞身式后的下次普攻",
                "excerpt": "释放飞身式后3秒内，下次行狮普攻伤害加成提升100%"
              }
            ]
          }
        ]
      }
    }
  }
});
