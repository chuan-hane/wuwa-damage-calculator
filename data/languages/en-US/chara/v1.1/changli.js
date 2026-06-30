window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "changli": {
        "name": "Changli",
        "resources": [
          {
            "label": "离火"
          }
        ],
        "skills": [
          {
            "name": "Blazing Enlightment - Basic Attack 1 DMG"
          },
          {
            "name": "Blazing Enlightment - Basic Attack 2 DMG"
          },
          {
            "name": "Blazing Enlightment - Basic Attack 3 DMG"
          },
          {
            "name": "Blazing Enlightment - Basic Attack 4 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 1 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 2 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 3 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 4 DMG"
          },
          {
            "name": "Blazing Enlightment - Heavy Attack"
          },
          {
            "name": "Blazing Enlightment - Mid-air Heavy Attack"
          },
          {
            "name": "Blazing Enlightment - Dodge Counter"
          },
          {
            "name": "Tripartite Flames - True Sight: Capture DMG"
          },
          {
            "name": "Tripartite Flames - True Sight: Conquest DMG"
          },
          {
            "name": "Tripartite Flames - True Sight: Charge DMG"
          },
          {
            "name": "Radiance of Fealty - Skill DMG"
          },
          {
            "name": "Obedience of Rules - Skill DMG"
          },
          {
            "name": "Flaming Sacrifice - Flaming Sacrifice DMG"
          }
        ],
        "combatStates": [
          {
            "label": "心眼状态",
            "inactiveLabel": "未处于心眼",
            "entry": "地面/空中普攻第4段、共鸣技能心眼·劫、变奏技能天道持枢可进入心眼状态，持续12秒。",
            "options": [
              {
                "label": "心眼"
              }
            ]
          },
          {
            "label": "焰羽状态",
            "inactiveLabel": "未处于焰羽",
            "entry": "施放共鸣解放离火照丹心后进入焰羽状态，持续10秒。",
            "options": [
              {
                "label": "焰羽"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·潜谋",
            "label": "热熔伤害加成",
            "trigger": "施放心眼征/冲时按离火层数",
            "excerpt": "心眼征/冲按已有离火层数提升热熔伤害加成",
            "desc": "施放普攻心眼·征或普攻心眼·冲时，每拥有1层【离火】，长离的热熔伤害加成提升5%。"
          },
          {
            "source": "固有·散势",
            "label": "热熔伤害加成",
            "trigger": "施放焚身以火或离火照丹心时",
            "excerpt": "焚身以火或离火照丹心热熔伤害加成提升20%",
            "desc": "施放重击焚身以火或共鸣解放离火照丹心时，长离的热熔伤害加成提升20%，攻击造成伤害时忽视目标15%防御。"
          },
          {
            "source": "固有·散势",
            "label": "防御无视",
            "trigger": "施放焚身以火或离火照丹心时",
            "excerpt": "焚身以火或离火照丹心忽视目标15%防御",
            "desc": "施放重击焚身以火或共鸣解放离火照丹心时，长离的热熔伤害加成提升20%，攻击造成伤害时忽视目标15%防御。"
          },
          {
            "source": "共鸣解放·焰羽",
            "label": "攻击",
            "trigger": "焰羽状态下施放焚身以火",
            "excerpt": "焰羽期间施放焚身以火时攻击提升25%",
            "desc": "焰羽：10秒内施放重击焚身以火时攻击提升25%，施放后效果提前结束。"
          },
          {
            "source": "延奏·奇正相生",
            "label": "热熔伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色热熔伤害加深20%",
            "desc": "下一位登场角色热熔伤害加深20%，共鸣解放伤害加深25%，效果持续10秒，若切换至其他角色则该效果提前结束。"
          },
          {
            "source": "延奏·奇正相生",
            "label": "共鸣解放伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色共鸣解放伤害加深25%",
            "desc": "下一位登场角色热熔伤害加深20%，共鸣解放伤害加深25%，效果持续10秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "隐我所思",
            "desc": "施放共鸣技能赫羽三相或重击焚身以火时，长离的抗打断能力提升，且造成的伤害提升10%。",
            "buffs": [
              {
                "label": "伤害加深",
                "trigger": "施放赫羽三相或焚身以火时",
                "excerpt": "赫羽三相或焚身以火造成的伤害提升10%"
              }
            ]
          },
          {
            "name": "循我所望",
            "desc": "获得【离火】时，长离的暴击提升25%，持续8秒。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "获得离火后",
                "excerpt": "获得离火后，暴击提升25%"
              }
            ]
          },
          {
            "name": "据我所闻",
            "desc": "共鸣解放离火照丹心造成的伤害提升80%。",
            "buffs": [
              {
                "label": "离火照丹心伤害加深",
                "trigger": "默认",
                "excerpt": "离火照丹心造成的伤害提升80%"
              }
            ]
          },
          {
            "name": "饰我所言",
            "desc": "施放变奏技能后，队伍中的角色攻击提升20%，持续30秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "释放变奏技能后",
                "excerpt": "释放变奏技能后，队伍攻击提升20%"
              }
            ]
          },
          {
            "name": "舍我所得",
            "desc": "重击焚身以火倍率提升50%，造成的伤害提升50%。",
            "buffs": [
              {
                "label": "焚身以火倍率提升",
                "trigger": "默认",
                "excerpt": "焚身以火伤害倍率提升50%"
              },
              {
                "label": "焚身以火伤害加深",
                "trigger": "默认",
                "excerpt": "焚身以火造成的伤害提升50%"
              }
            ]
          },
          {
            "name": "成我所谋",
            "desc": "共鸣技能赫羽三相、重击焚身以火和共鸣解放离火照丹心攻击造成伤害时额外忽视目标40%防御。",
            "buffs": [
              {
                "label": "防御无视",
                "trigger": "默认",
                "excerpt": "赫羽三相、焚身以火、离火照丹心额外忽视40%防御"
              }
            ]
          }
        ]
      }
    }
  }
});
