window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "zani": {
        "name": "Zani",
        "resources": [
          {
            "label": "焰光"
          },
          {
            "label": "冗余动能"
          }
        ],
        "skills": [
          {
            "name": "Routine Negotiation - Stage 1 DMG"
          },
          {
            "name": "Routine Negotiation - Stage 2 DMG"
          },
          {
            "name": "Routine Negotiation - Stage 3 DMG"
          },
          {
            "name": "Routine Negotiation - Stage 4 DMG"
          },
          {
            "name": "Routine Negotiation - Breakthrough DMG"
          },
          {
            "name": "Routine Negotiation - Heavy Attack DMG"
          },
          {
            "name": "Routine Negotiation - Plunging Attack DMG"
          },
          {
            "name": "Routine Negotiation - Dodge Counter DMG"
          },
          {
            "name": "Restless Watch - Standard Defense Protocol DMG"
          },
          {
            "name": "Restless Watch - Pinpoint Strike DMG"
          },
          {
            "name": "Restless Watch - Targeted Action DMG"
          },
          {
            "name": "Restless Watch - Forcible Riposte DMG"
          },
          {
            "name": "Between Dawn and Dusk - Rekindle DMG"
          },
          {
            "name": "Between Dawn and Dusk - The Last Stand DMG"
          },
          {
            "name": "Immediate Execution - Skill DMG"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Daybreak DMG"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Dawning DMG"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Nightfall DMG"
          },
          {
            "name": "There Will Be A Light - Heavy Slash - Lightsmash DMG"
          }
        ],
        "combatStates": [
          {
            "label": "灼焰形态",
            "inactiveLabel": "未处于灼焰形态",
            "entry": "施放共鸣解放重燃后进入，持续20秒；焰光低于30点或进入8秒后可施放终绝将至之刻，施放后退出。",
            "options": [
              {
                "label": "灼焰形态"
              }
            ]
          },
          {
            "label": "斩棘状态",
            "inactiveLabel": "未处于斩棘状态",
            "entry": "施放集中压制或破袭反击时进入，持续14秒。",
            "options": [
              {
                "label": "斩棘"
              }
            ]
          },
          {
            "label": "目标烈阳余烬",
            "inactiveLabel": "目标无烈阳余烬",
            "entry": "赞妮在队伍中，附近队伍角色为目标附加光噪效应时，会立刻结算并转化为同层烈阳余烬；集中压制或破袭反击命中时附加1层。",
            "options": [
              {
                "label": "有烈阳余烬"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "共鸣解放·灼焰形态",
            "label": "普攻倍率提升",
            "trigger": "处于灼焰形态时",
            "excerpt": "灼焰形态期间，普攻伤害倍率提升25%",
            "desc": "灼焰形态期间，普攻倍率提升25%。"
          },
          {
            "source": "固有·快速响应",
            "label": "衍射伤害加成",
            "trigger": "施放变奏技能时",
            "excerpt": "施放即刻执行时，衍射伤害加成提升12%",
            "desc": "施放变奏技能即刻执行时，衍射伤害加成提升12%，持续14秒。"
          },
          {
            "source": "共鸣技能·斩棘",
            "label": "光噪效应伤害加深",
            "trigger": "处于斩棘状态时",
            "excerpt": "斩棘期间，直接造成的光噪效应伤害加深20%",
            "desc": "斩棘：自身直接造成的【光噪效应】伤害加深20%。"
          },
          {
            "source": "共鸣技能·斩棘",
            "label": "光噪效应伤害加深",
            "trigger": "处于斩棘状态时",
            "excerpt": "斩棘期间，独立光噪效应伤害加深20%",
            "desc": "斩棘：自身直接造成的【光噪效应】伤害加深20%。"
          },
          {
            "source": "延奏·来日道标",
            "label": "衍射伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "其他角色攻击烈阳余烬目标时，衍射伤害加深20%",
            "desc": "队伍中除赞妮以外的角色对拥有【烈阳余烬】的目标造成的衍射伤害加深20%，持续20秒。"
          }
        ],
        "chain": [
          {
            "name": "当清晨闹钟响起时",
            "desc": "施放集中压制或破袭反击时，衍射伤害加成提升50%，持续14秒。重斩·终夜免疫打断。",
            "buffs": [
              {
                "label": "衍射伤害加成",
                "trigger": "施放集中压制或破袭反击时",
                "excerpt": "施放集中压制或破袭反击时，衍射伤害加成提升50%"
              }
            ]
          },
          {
            "name": "冷面包配饮料",
            "desc": "暴击提升20%。集中压制、破袭反击倍率提升80%。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "默认",
                "excerpt": "暴击提升20%"
              },
              {
                "label": "集中压制/破袭反击倍率提升",
                "trigger": "默认",
                "excerpt": "集中压制、破袭反击伤害倍率提升80%"
              }
            ]
          },
          {
            "name": "日复一日的通勤",
            "desc": "处于灼焰形态时每消耗1点【焰光】，本次共鸣解放终绝将至之刻最后一段伤害倍率增加8%，最多增加1200%。",
            "buffs": [
              {
                "label": "终绝将至之刻倍率增加",
                "trigger": "灼焰形态中消耗焰光后",
                "excerpt": "消耗焰光后，终绝将至之刻最后一段倍率最多增加1200%"
              }
            ]
          },
          {
            "name": "高效节能主义者",
            "desc": "施放变奏技能即刻执行时，队伍中的角色攻击提升20%，持续30秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "施放变奏技能时",
                "excerpt": "施放即刻执行时，队伍攻击提升20%"
              }
            ]
          },
          {
            "name": "一切需求按时完成",
            "desc": "共鸣解放重燃倍率提升120%。",
            "buffs": [
              {
                "label": "重燃倍率提升",
                "trigger": "默认",
                "excerpt": "重燃伤害倍率提升120%"
              }
            ]
          },
          {
            "name": "当务之急？下班！",
            "desc": "重斩·破晓、重斩·将明、重斩·终夜、重斩·闪裂倍率提升40%。重斩·终夜命中时消耗的每点【焰光】额外增加倍率提升40%。处于灼焰形态时获得以下效果：·【焰光】低于70点时立即回复70点，灼焰形态期间可触发1次。·进入灼焰形态 后8秒内受到致死伤害时不会倒下，最少保留1点生命值。",
            "buffs": [
              {
                "label": "重斩倍率提升",
                "trigger": "默认",
                "excerpt": "重斩系列伤害倍率提升40%"
              },
              {
                "label": "焰光倍率提升",
                "trigger": "默认",
                "excerpt": "重斩·终夜消耗焰光带来的倍率增加效果提升40%"
              }
            ]
          }
        ]
      }
    }
  }
});
