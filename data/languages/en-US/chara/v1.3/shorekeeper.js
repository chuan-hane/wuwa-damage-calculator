window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "shorekeeper": {
        "name": "Shorekeeper",
        "resources": [
          {
            "label": "实证数据"
          }
        ],
        "skills": [
          {
            "name": "Origin Calculus - Stage 1 DMG"
          },
          {
            "name": "Origin Calculus - Stage 2 DMG"
          },
          {
            "name": "Origin Calculus - Stage 3 DMG"
          },
          {
            "name": "Origin Calculus - Stage 4 DMG"
          },
          {
            "name": "Origin Calculus - Heavy Attack DMG"
          },
          {
            "name": "Origin Calculus - Plunging Attack DMG"
          },
          {
            "name": "Origin Calculus - Dodge Counter DMG"
          },
          {
            "name": "Chaos Theory - Dim Star Butterfly DMG"
          },
          {
            "name": "End Loop - Stellarealm"
          },
          {
            "name": "Proof of Existence - Enlightenment DMG"
          },
          {
            "name": "Proof of Existence - Discernment DMG"
          },
          {
            "name": "Astral Chord - Flare Star Butterfly DMG"
          },
          {
            "name": "Astral Chord - Illation DMG"
          },
          {
            "name": "Astral Chord - Transmutation DMG"
          }
        ],
        "combatStates": [
          {
            "label": "星域",
            "inactiveLabel": "未展开星域",
            "entry": "由共鸣解放终末回环展开浅析星域；浅析期间附近队伍角色使用变奏进入深潜，深潜期间再次使用变奏进入解限。",
            "options": [
              {
                "label": "浅析"
              },
              {
                "label": "深潜"
              },
              {
                "label": "解限"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·自我引力",
            "label": "共鸣效率",
            "trigger": "处于星域范围内",
            "excerpt": "处于星域范围内时，共鸣效率提升10%",
            "desc": "队伍中登场角色处于星域生效范围内时，守岸人共鸣效率提升10%。"
          },
          {
            "source": "共鸣解放·终末回环",
            "label": "暴击",
            "trigger": "深潜/解限星域中",
            "excerpt": "深潜/解限星域中，按共鸣效率提升暴击，上限12.5%",
            "desc": "深潜星域生效范围内附近队伍中所有角色暴击提升：守岸人自身每0.2%共鸣效率计算为0.01%暴击提升，上限12.5%。"
          },
          {
            "source": "共鸣解放·终末回环",
            "label": "暴击伤害",
            "trigger": "解限星域中",
            "excerpt": "解限星域中，按共鸣效率提升暴击伤害，上限25%",
            "desc": "解限星域生效范围内附近队伍中所有角色暴击伤害提升：守岸人自身每0.1%共鸣效率计算为0.01%暴击伤害提升，上限25%。"
          },
          {
            "source": "变奏技能·洞悉",
            "label": "必定暴击",
            "trigger": "施放洞悉时",
            "excerpt": "释放洞悉时，必定暴击",
            "desc": "解限星域持续期间，守岸人的变奏技能启迪替换为洞悉。洞悉造成衍射伤害，此次伤害为共鸣解放伤害，并且必定暴击。"
          },
          {
            "source": "延奏·双联合相",
            "label": "全伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "队伍中的角色全伤害加深15%",
            "desc": "队伍中的角色全伤害加深15%，最多持续30秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "不语者假想",
            "desc": "共鸣解放终末回环展开的星域获得加强：·治疗和增益效果生效范围增加150%。·持续时间增加10秒。·施放变奏技能洞悉后不再结束星域。"
          },
          {
            "name": "夜幕的赠予与拒绝",
            "desc": "浅析星域新增额外效果：附近队伍中的角色攻击提升40%。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "星域中",
                "excerpt": "星域中，攻击提升40%",
                "desc": "浅析星域新增额外效果：附近队伍中的角色攻击提升40%。深潜/解限星域继承浅析星域效果。"
              }
            ]
          },
          {
            "name": "无限正将我等待",
            "desc": "施放共鸣解放终末回环时，守岸人额外回复20点协奏能量，每25秒可触发1次。"
          },
          {
            "name": "万物寂静满溢",
            "desc": "施放共鸣技能混沌理论时，治疗效果加成提升70%。",
            "buffs": [
              {
                "label": "治疗效果加成",
                "trigger": "施放混沌理论时",
                "excerpt": "释放混沌理论时，治疗效果加成提升70%",
                "desc": "施放共鸣技能混沌理论时，治疗效果加成提升70%。"
              }
            ]
          },
          {
            "name": "来自缄默的回声",
            "desc": "普攻第三段牵引范围增加50%，共鸣回路演绎牵引范围增加30%。"
          },
          {
            "name": "我所驶向的新世界",
            "desc": "变奏技能洞悉伤害倍率提升42%。施放变奏技能洞悉时，守岸人的暴击伤害提升500%。",
            "buffs": [
              {
                "label": "洞悉倍率提升",
                "trigger": "施放洞悉时",
                "excerpt": "洞悉伤害倍率提升42%"
              },
              {
                "label": "暴击伤害",
                "trigger": "施放洞悉时",
                "excerpt": "释放洞悉时，暴击伤害提升500%"
              }
            ]
          }
        ]
      }
    }
  }
});
