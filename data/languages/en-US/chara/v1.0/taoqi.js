window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "taoqi": {
        "name": "Taoqi",
        "skills": [
          {
            "name": "Concealed Edge - Stage 1 DMG"
          },
          {
            "name": "Concealed Edge - Stage 2 DMG"
          },
          {
            "name": "Concealed Edge - Stage 3 DMG"
          },
          {
            "name": "Concealed Edge - Stage 4 DMG"
          },
          {
            "name": "Concealed Edge - Heavy Attack DMG"
          },
          {
            "name": "Concealed Edge - Strategic Parry Damage"
          },
          {
            "name": "Concealed Edge - Mid-air Attack DMG"
          },
          {
            "name": "Concealed Edge - Dodge Counter DMG"
          },
          {
            "name": "Fortified Defense - Skill DMG"
          },
          {
            "name": "Unmovable - Skill DMG"
          },
          {
            "name": "Defense Formation - Skill DMG"
          },
          {
            "name": "Power Shift - Timed Counters Stage 1 DMG"
          },
          {
            "name": "Power Shift - Timed Counters Stage 2 DMG"
          },
          {
            "name": "Power Shift - Timed Counters Stage 3 DMG"
          }
        ],
        "buffs": [
          {
            "source": "固有·护心",
            "label": "防御",
            "trigger": "磐岩护壁持续期间",
            "excerpt": "磐岩护壁持续期间，防御提升15%",
            "desc": "共鸣技能磐岩护壁持续期间，角色的防御提升15%。"
          },
          {
            "source": "延奏·千钧",
            "label": "共鸣技能伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色共鸣技能伤害加深38%",
            "desc": "下一位登场角色共鸣技能伤害加深38%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "怀悠然之心",
            "desc": "共鸣回路攻防转换获得的护盾量提升40%。"
          },
          {
            "name": "假泯于众人",
            "desc": "共鸣解放不动如山的暴击提升20%，暴击伤害提升20%。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "默认",
                "excerpt": "不动如山暴击提升20%"
              },
              {
                "label": "暴击伤害",
                "trigger": "默认",
                "excerpt": "不动如山暴击伤害提升20%"
              }
            ]
          },
          {
            "name": "观万物之细",
            "desc": "共鸣技能磐岩护壁的持续时间延长至30秒。"
          },
          {
            "name": "承负重之担",
            "desc": "成功触发重击后发制人时，回复桃祈25%生命值，同时防御提升50%，持续5秒，每15秒可触发1次。",
            "buffs": [
              {
                "label": "防御",
                "trigger": "触发后发制人时",
                "excerpt": "触发后发制人时，防御提升50%"
              }
            ]
          },
          {
            "name": "解市井民忧",
            "desc": "共鸣回路攻防转换的伤害提升50%，共鸣回路攻防转换命中目标时，回复20点共鸣能量。",
            "buffs": [
              {
                "label": "御反之隙倍率提升",
                "trigger": "默认",
                "excerpt": "攻防转换伤害倍率提升50%"
              }
            ]
          },
          {
            "name": "护城邦安危",
            "desc": "共鸣技能磐岩护壁获得的护盾持续期间，桃祈普攻和重击的伤害提升40%。",
            "buffs": [
              {
                "label": "普攻伤害加成",
                "trigger": "磐岩护壁护盾期间",
                "excerpt": "磐岩护壁护盾期间，普攻伤害提升40%"
              },
              {
                "label": "重击伤害加成",
                "trigger": "磐岩护壁护盾期间",
                "excerpt": "磐岩护壁护盾期间，重击伤害提升40%"
              }
            ]
          }
        ]
      }
    }
  }
});
