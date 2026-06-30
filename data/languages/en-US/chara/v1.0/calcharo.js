window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "calcharo": {
        "name": "Calcharo",
        "resources": [
          {
            "label": "残忍"
          },
          {
            "label": "杀意"
          }
        ],
        "skills": [
          {
            "name": "Gnawing Fangs - Stage 1 DMG"
          },
          {
            "name": "Gnawing Fangs - Stage 2 DMG"
          },
          {
            "name": "Gnawing Fangs - Stage 3 DMG"
          },
          {
            "name": "Gnawing Fangs - Stage 4 DMG"
          },
          {
            "name": "Gnawing Fangs - Heavy Attack DMG"
          },
          {
            "name": "Gnawing Fangs - Mid-air Attack DMG"
          },
          {
            "name": "Gnawing Fangs - Dodge Counter DMG"
          },
          {
            "name": "Extermination Order - Extermination Order Stage 1 DMG"
          },
          {
            "name": "Extermination Order - Extermination Order Stage 2 DMG"
          },
          {
            "name": "Extermination Order - Extermination Order Stage 3 DMG"
          },
          {
            "name": "Phantom Etching - Skill DMG"
          },
          {
            "name": "Phantom Etching - \"Necessary Means\" Damage"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 1"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 2"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 3"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 4"
          },
          {
            "name": "Phantom Etching - Hounds Roar Stage 5"
          },
          {
            "name": "Phantom Etching - Heavy Attack DMG"
          },
          {
            "name": "Phantom Etching - Dodge Counter DMG"
          },
          {
            "name": "Wanted Outlaw - Skill DMG"
          },
          {
            "name": "Hunting Mission - \"Mercy\" Damage"
          },
          {
            "name": "Hunting Mission - \"Death Messenger\" Damage"
          },
          {
            "name": "The Ultimatum - Phantom Coordinated Attack DMG"
          }
        ],
        "combatStates": [
          {
            "label": "杀戮武装",
            "inactiveLabel": "未处于杀戮武装",
            "entry": "施放共鸣解放幻影蚀刻后进入，持续11秒；状态结束后，下次变奏技能替换为必要的手段。",
            "options": [
              {
                "label": "杀戮武装"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·喋血觉悟",
            "label": "共鸣解放伤害加成",
            "trigger": "施放重击·仁慈后",
            "excerpt": "释放重击·仁慈后，共鸣解放伤害加成提升10%",
            "desc": "施放重击「仁慈」时，卡卡罗的共鸣解放伤害加成提升10%，持续15秒。"
          }
        ],
        "chain": [
          {
            "name": "隐秘谈判",
            "desc": "共鸣技能灭杀指令命中目标时，额外回复10点共鸣能量，每20秒可触发1次。"
          },
          {
            "name": "零和博弈",
            "desc": "施放变奏技能全境通缉或变奏技能「必要的手段」后，共鸣技能伤害加成提升30%，持续15秒。",
            "buffs": [
              {
                "label": "共鸣技能伤害加成",
                "trigger": "施放变奏技能后",
                "excerpt": "释放全境通缉或必要的手段后，共鸣技能伤害加成提升30%"
              }
            ]
          },
          {
            "name": "铁腕外交",
            "desc": "共鸣解放杀戮武装状态持续期间，卡卡罗的导电伤害加成提升25%。",
            "buffs": [
              {
                "label": "导电伤害加成",
                "trigger": "处于杀戮武装时",
                "excerpt": "杀戮武装期间，导电伤害加成提升25%"
              }
            ]
          },
          {
            "name": "集群威胁",
            "desc": "施放延奏技能掠影奇袭时，队伍中的角色导电伤害加成提升20%，持续30秒。",
            "buffs": [
              {
                "label": "导电伤害加成",
                "trigger": "释放延奏技能后",
                "excerpt": "释放延奏技能后，队伍中的角色导电伤害加成提升20%"
              }
            ]
          },
          {
            "name": "替代协议",
            "desc": "变奏技能全境通缉及变奏技能「必要的手段」的伤害提升50%。",
            "buffs": [
              {
                "label": "变奏技能伤害加成",
                "trigger": "默认",
                "excerpt": "全境通缉和必要的手段伤害加成提升50%"
              }
            ]
          },
          {
            "name": "最后通牒",
            "desc": "施放重击「死告」时，卡卡罗将会召唤2个猎杀影进行协同攻击，每个猎杀影可造成卡卡罗100.00%攻击的导电伤害，此次伤害为共鸣解放伤害。"
          }
        ]
      }
    }
  }
});
