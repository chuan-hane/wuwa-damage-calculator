window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "ciaccona": {
        "name": "Ciaccona",
        "resources": [
          {
            "label": "音律"
          }
        ],
        "skills": [
          {
            "name": "Quadruple Time Steps - Stage 1 DMG"
          },
          {
            "name": "Quadruple Time Steps - Stage 2 DMG"
          },
          {
            "name": "Quadruple Time Steps - Stage 3 DMG"
          },
          {
            "name": "Quadruple Time Steps - Stage 4 DMG"
          },
          {
            "name": "Quadruple Time Steps - Heavy Attack DMG"
          },
          {
            "name": "Quadruple Time Steps - Aimed Shot DMG"
          },
          {
            "name": "Quadruple Time Steps - Fully Charged Aimed Shot DMG"
          },
          {
            "name": "Quadruple Time Steps - Mid-air Attack Stage 1 DMG"
          },
          {
            "name": "Quadruple Time Steps - Mid-air Attack Stage 2 DMG"
          },
          {
            "name": "Quadruple Time Steps - Dodge Counter DMG"
          },
          {
            "name": "Harmonic Allegro - Skill DMG"
          },
          {
            "name": "Singer's Triple Cadenza - Improvised Symphonic Poem Skill DMG"
          },
          {
            "name": "Singer's Triple Cadenza - Symphonic Poem: Tonic DMG"
          },
          {
            "name": "Singer's Triple Cadenza - Symphonic Poem: Tonic DMG"
          },
          {
            "name": "Roaming with the Wind - Skill DMG"
          },
          {
            "name": "Symphony of Wind and Verse - Quadruple Downbeat DMG"
          },
          {
            "name": "Unending Cadence - Solo Concert Coordinated DMG"
          }
        ],
        "combatStates": [
          {
            "label": "音律独奏",
            "inactiveLabel": "未处于音律独奏",
            "entry": "普攻第4段结束后进入；普攻第4段或音律独奏被打断时，合奏音影可代替夏空完成或继续该状态。",
            "options": [
              {
                "label": "音律独奏"
              }
            ]
          },
          {
            "label": "演绎状态",
            "inactiveLabel": "未处于演绎状态",
            "entry": "施放共鸣解放歌者的三重华彩后进入；切换角色不会结束，再次施放共鸣解放或切回夏空可提前结束。",
            "options": [
              {
                "label": "演绎状态"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "音律独奏",
            "label": "气动伤害加成",
            "trigger": "进入音律独奏时",
            "excerpt": "进入音律独奏时，队伍气动伤害加成提升24%",
            "desc": "夏空或合奏音影在进入音律独奏状态时能够以自身为中心，使附近队伍中所有角色的气动伤害加成提升24%，该效果不可叠加。演绎状态下的合奏音影可触发音律独奏的气动伤害加成提升效果。"
          },
          {
            "source": "固有·黎那汐塔之风",
            "label": "四拍重奏伤害加深",
            "trigger": "默认",
            "excerpt": "重击·四拍重奏造成的伤害提升30%",
            "desc": "重击·四拍重奏造成的伤害提升30%。"
          },
          {
            "source": "延奏·和声引风",
            "label": "风蚀效应伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "登场角色周围目标受到风蚀效应伤害加深100%",
            "desc": "队伍中登场角色周围的目标受到【风蚀效应】的伤害加深100%，持续30秒。"
          }
        ],
        "chain": [
          {
            "name": "故风的吟游序曲",
            "desc": "施放共鸣技能谐律速奏时，夏空获得免疫打断的效果，持续3秒；施放普攻时，夏空的攻击提升35%，持续10秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "施放普攻时",
                "excerpt": "释放普攻时，攻击提升35%"
              }
            ]
          },
          {
            "name": "四季的连奏之音",
            "desc": "共鸣解放歌者的三重华彩持续期间队伍中的角色气动伤害加成提升40%。",
            "buffs": [
              {
                "label": "气动伤害加成",
                "trigger": "歌者的三重华彩持续期间",
                "excerpt": "演绎状态期间，队伍气动伤害加成提升40%"
              }
            ]
          },
          {
            "name": "星烁此时的即兴演奏",
            "desc": "施放普攻第4段时可额外获得1格【音律】；共鸣技能谐律速奏可使用次数增加1次。"
          },
          {
            "name": "托卡塔与赋格",
            "desc": "夏空重击四拍重奏造成伤害时无视敌人45%的防御； 夏空造成共鸣解放伤害时无视敌人45%的防御。",
            "buffs": [
              {
                "label": "防御无视",
                "trigger": "四拍重奏造成伤害时",
                "excerpt": "重击·四拍重奏无视目标45%防御"
              },
              {
                "label": "防御无视",
                "trigger": "造成共鸣解放伤害时",
                "excerpt": "共鸣解放伤害无视目标45%防御"
              }
            ]
          },
          {
            "name": "献予长夏的永恒叙诗",
            "desc": "夏空共鸣解放伤害加成提升40%； 夏空共鸣解放歌者的三重华彩附近范围内的角色受到的伤害降低30%。",
            "buffs": [
              {
                "label": "共鸣解放伤害加成",
                "trigger": "默认",
                "excerpt": "共鸣解放伤害加成提升40%"
              }
            ]
          },
          {
            "name": "终曲未终",
            "desc": "夏空或合奏音影在进入音律独奏状态时可以对周围目标造成220%的气动伤害，该伤害视为共鸣解放伤害。"
          }
        ]
      }
    }
  }
});
