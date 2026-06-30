window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "roccia": {
        "name": "Roccia",
        "resources": [
          {
            "label": "想象力"
          }
        ],
        "skills": [
          {
            "name": "Pero, Easy - Stage 1 DMG"
          },
          {
            "name": "Pero, Easy - Stage 2 DMG"
          },
          {
            "name": "Pero, Easy - Stage 3 DMG"
          },
          {
            "name": "Pero, Easy - Stage 4 DMG"
          },
          {
            "name": "Pero, Easy - Heavy Attack DMG"
          },
          {
            "name": "Pero, Easy - Mid-air Attack DMG"
          },
          {
            "name": "Pero, Easy - Dodge Counter DMG"
          },
          {
            "name": "Acrobatic Trick - Skill DMG"
          },
          {
            "name": "Commedia Improvviso! - Skill DMG"
          },
          {
            "name": "Pero, Help - Skill DMG"
          },
          {
            "name": "A Prop Master Prepares - Stage 1 DMG"
          },
          {
            "name": "A Prop Master Prepares - Stage 2 DMG"
          },
          {
            "name": "A Prop Master Prepares - Stage 3 DMG"
          },
          {
            "name": "A Prop Master Prepares - Stage 3 DMG"
          }
        ],
        "combatStates": [
          {
            "label": "飞跃幻想",
            "inactiveLabel": "未处于飞跃幻想",
            "entry": "施放共鸣技能高难度设计，或重击命中且想象力至少100点时进入飞跃幻想；第1/2段幻想照进现实落地后若想象力大于100点可再次进入。",
            "options": [
              {
                "label": "飞跃幻想"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·沉浸式演出",
            "label": "攻击",
            "trigger": "施放共鸣技能或重击时",
            "excerpt": "释放共鸣技能或重击时，攻击提升20%",
            "desc": "施放共鸣技能或重击时，洛可可攻击提升20%，持续12秒。"
          },
          {
            "source": "共鸣解放·即兴喜剧，开场",
            "label": "固定攻击",
            "trigger": "施放即兴喜剧，开场时",
            "excerpt": "暴击超过50%时，队伍固定攻击提升，上限200",
            "desc": "洛可可暴击高于50%时，每多出0.1%暴击，施放该技能时，使队伍中的角色攻击提升1点，持续30秒。最高可提升200点。"
          },
          {
            "source": "延奏·掌声鼓励",
            "label": "湮灭伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色湮灭伤害加深20%",
            "desc": "下一位登场角色湮灭伤害加深20%，普攻伤害加深25%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          },
          {
            "source": "延奏·掌声鼓励",
            "label": "普攻伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色普攻伤害加深25%",
            "desc": "下一位登场角色湮灭伤害加深20%，普攻伤害加深25%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "沉闷的灰暗涌进船舱",
            "desc": "施放共鸣技能高难度设计时，额外回复100点【想象力】与10点协奏能量。普攻幻想照进现实免疫打断。"
          },
          {
            "name": "海萤石闪烁着微弱光芒",
            "desc": "施放普攻幻想照进现实时，队伍中的角色湮灭伤害加成提升10%，可叠加3层，持续30秒。满层时，队伍中的角色湮灭伤害加成额外提升10%，持续30秒。",
            "buffs": [
              {
                "label": "湮灭伤害加成",
                "trigger": "施放幻想照进现实时",
                "excerpt": "幻想照进现实时，每层湮灭伤害加成提升10%"
              },
              {
                "label": "湮灭伤害加成",
                "trigger": "海萤石满3层时",
                "excerpt": "海萤石满层时，湮灭伤害加成额外提升10%"
              }
            ]
          },
          {
            "name": "用心观察，以手丈量",
            "desc": "施放变奏技能佩洛，来帮忙时，洛可可暴击提升10%，暴击伤害提升30%，持续15秒。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "施放佩洛，来帮忙时",
                "excerpt": "释放佩洛来帮忙时，暴击提升10%"
              },
              {
                "label": "暴击伤害",
                "trigger": "施放佩洛，来帮忙时",
                "excerpt": "释放佩洛来帮忙时，暴击伤害提升30%"
              }
            ]
          },
          {
            "name": "千万“奇藏”于箱中汇聚",
            "desc": "施放共鸣技能高难度设计时，普攻幻想照进现实伤害倍率提升60%，持续12秒。",
            "buffs": [
              {
                "label": "幻想照进现实倍率提升",
                "trigger": "施放高难度设计后",
                "excerpt": "释放高难度设计后，幻想照进现实倍率提升60%"
              }
            ]
          },
          {
            "name": "重建乐土，在舞台上",
            "desc": "共鸣解放即兴喜剧，开场伤害倍率提升20%，重击伤害倍率提升80%。",
            "buffs": [
              {
                "label": "即兴喜剧倍率提升",
                "trigger": "默认",
                "excerpt": "即兴喜剧，开场伤害倍率提升20%"
              },
              {
                "label": "重击倍率提升",
                "trigger": "默认",
                "excerpt": "重击伤害倍率提升80%"
              }
            ]
          },
          {
            "name": "飞吧，乘着金色的翅膀",
            "desc": "施放共鸣解放即兴喜剧，开场时，获得如下效果，12秒内：·普攻幻想照进现实攻击目标时，无视对方60%的防御。·普攻幻想照进现实第3段落地后，会将洛可可送上空中，进入飞跃幻想状态，此时短按普攻，将会施放普攻构筑现实，普攻构筑现实免疫打断，造成普攻幻想照进现实第3段100%的伤害，此次伤害为重击伤害。·普攻构筑现实落地后，会将洛可可送上空中，进入飞跃幻想状态。普攻构筑现实需要在处于飞跃幻想状态时才可施放。",
            "buffs": [
              {
                "label": "防御无视",
                "trigger": "释放即兴喜剧，开场后",
                "excerpt": "解放后12秒内，幻想照进现实无视60%防御"
              }
            ]
          }
        ]
      }
    }
  }
});
