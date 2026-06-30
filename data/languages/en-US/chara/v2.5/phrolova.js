window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "phrolova": {
        "name": "Phrolova",
        "resources": [
          {
            "label": "乐声"
          }
        ],
        "skills": [
          {
            "name": "Movement of Life and Death - Stage 1 DMG"
          },
          {
            "name": "Movement of Life and Death - Stage 2 DMG"
          },
          {
            "name": "Movement of Life and Death - Stage 3 DMG"
          },
          {
            "name": "Movement of Life and Death - Heavy Attack DMG"
          },
          {
            "name": "Movement of Life and Death - Scarlet Coda DMG"
          },
          {
            "name": "Movement of Life and Death - Mid-air Attack DMG"
          },
          {
            "name": "Movement of Life and Death - Dodge Counter DMG"
          },
          {
            "name": "Whispers in a Fleeting Dream - Skill DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack - Hecate Stage 1 DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack - Hecate Stage 2 DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Strings DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Winds DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Cadenza DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack: Hecate Stage 1 DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Basic Attack: Hecate Stage 2 DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack: Hecate Strings DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack - Hecate: Winds DMG"
          },
          {
            "name": "Waltz of Forsaken Depths - Enhanced Attack: Hecate Cadenza DMG (Background)"
          },
          {
            "name": "Waltz of Forsaken Depths - Curtain Call DMG"
          },
          {
            "name": "Suite of Quietus - Suite of Quietus DMG"
          },
          {
            "name": "Suite of Quietus - Suite of Immortality DMG"
          },
          {
            "name": "Rhapsody of a New World - Movement of Fate and Finality DMG"
          },
          {
            "name": "Rhapsody of a New World - Murmurs in a Haunting Dream DMG"
          },
          {
            "name": "A Night to Depart From Eternal Rest - Apparition of Beyond - Hecate DMG"
          }
        ],
        "combatStates": [
          {
            "label": "重世状态",
            "inactiveLabel": "未处于重世状态",
            "entry": "施放普攻第3段或共鸣技能稍纵即逝的梦呓后进入。",
            "options": [
              {
                "label": "重世"
              }
            ]
          },
          {
            "label": "定音状态",
            "inactiveLabel": "未处于定音状态",
            "entry": "施放谱曲终末后获得。",
            "options": [
              {
                "label": "定音"
              }
            ]
          },
          {
            "label": "指挥状态",
            "inactiveLabel": "未处于指挥状态",
            "entry": "处于定音状态时施放往日深渊的圆舞曲进入，持续24秒。",
            "options": [
              {
                "label": "指挥·登场"
              },
              {
                "label": "指挥·后台"
              }
            ]
          },
          {
            "label": "谱曲激活",
            "inactiveLabel": "未激活谱曲",
            "entry": "拥有6枚乐声并激活谱曲时，重击替换为谱曲终末。",
            "options": [
              {
                "label": "谱曲激活"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·八重奏",
            "label": "暴击伤害",
            "trigger": "进入战斗状态后",
            "excerpt": "进入战斗获得10层余响，每层暴击伤害提升2.5%",
            "desc": "进入战斗状态获得10层余响。每拥有1层余响，暴击伤害提升2.5%。余响上限为24层。"
          },
          {
            "source": "固有·八重奏",
            "label": "暴击伤害",
            "trigger": "余响满层后溢出",
            "excerpt": "余响满层后，每溢出1层暴击伤害提升1%",
            "desc": "余响层数达上限时，再次获得余响，每溢出1层余响，弗洛洛暴击伤害提升1%，最多通过该方式提升100%，余响层数清除时，同时清除该方式提供的暴击伤害提升效果。"
          },
          {
            "source": "共鸣解放·往日深渊的圆舞曲",
            "label": "攻击",
            "trigger": "进入指挥状态后",
            "excerpt": "处于指挥状态时，攻击提升120%",
            "desc": "施放往日深渊的圆舞曲后进入指挥状态，持续24秒。指挥状态攻击提升120%。"
          },
          {
            "source": "延奏·未完成的曲目",
            "label": "湮灭伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色湮灭伤害加深20%",
            "desc": "下一位登场角色湮灭伤害加深20%，重击伤害加深25%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          },
          {
            "source": "延奏·未完成的曲目",
            "label": "重击伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色重击伤害加深25%",
            "desc": "下一位登场角色湮灭伤害加深20%，重击伤害加深25%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "钥匙，通往冥界的奥秘",
            "desc": "亡与死的乐章伤害倍率提升80%。永不消逝的梦呓伤害倍率提升80%。弗洛洛不处于指挥状态且不处于战斗状态4秒后，若【乐声】少于2枚，获得【乐声·彩乐】，直至【乐声】不少于2枚。",
            "buffs": [
              {
                "label": "重世技能倍率提升",
                "trigger": "默认",
                "excerpt": "亡与死的乐章、永不消逝的梦呓伤害倍率提升80%"
              }
            ]
          },
          {
            "name": "绳索，重生更新的纽带",
            "desc": "谱曲终末伤害倍率提升75%，余响对谱曲终末的倍率增加效果提升75%。施放谱曲终末时可获得14层余响。",
            "buffs": [
              {
                "label": "谱曲终末倍率提升",
                "trigger": "默认",
                "excerpt": "谱曲终末伤害倍率提升75%"
              },
              {
                "label": "余响倍率提升",
                "trigger": "默认",
                "excerpt": "余响对谱曲终末的倍率增加效果提升75%"
              }
            ]
          },
          {
            "name": "匕首，消弭妄想的力量",
            "desc": "声骸技能伤害加深80%。施放谱曲终末期间，所有【乐声】将依次转化为【乐声·彩乐】。被强化攻击·彩乐·赫卡忒命中的目标，攻击降低20%，持续15秒。",
            "buffs": [
              {
                "label": "声骸技能伤害加深",
                "trigger": "默认",
                "excerpt": "声骸技能伤害加深80%"
              }
            ]
          },
          {
            "name": "火炬，新径启行的引导",
            "desc": "施放声骸技能时，队伍中的角色全属性伤害加成提升20%，持续30秒。",
            "buffs": [
              {
                "label": "全属性伤害加成",
                "trigger": "施放声骸技能时",
                "excerpt": "释放声骸技能时，全属性伤害加成提升20%"
              }
            ]
          },
          {
            "name": "岔路，穿越生命的要地",
            "desc": "进入指挥状态时，生成领域停滞周围的目标，领域持续4秒。结束指挥状态或切换至其他角色时，将提前清除停滞效果。处于指挥状态时，受到伤害降低30%。"
          },
          {
            "name": "深夜，走出安息与终结",
            "desc": "强化攻击·赫卡忒伤害倍率提升24%。施放亡与死的乐章、永不消逝的梦呓期间，将召唤赫卡忒施放1次重世幻象·赫卡忒，造成弗洛洛攻击216.42%的湮灭伤害，命中目标时获得8层余响。本次伤害为声骸技能伤害。处于指挥状态时，若弗洛洛不为队伍中登场角色，目标受到赫卡忒和弗洛洛的伤害提升40%。处于指挥状态时，若弗洛洛为队伍中登场角色，湮灭伤害加成提升60%。",
            "buffs": [
              {
                "label": "强化攻击·赫卡忒倍率提升",
                "trigger": "默认",
                "excerpt": "强化攻击·赫卡忒伤害倍率提升24%"
              },
              {
                "label": "湮灭伤害加成",
                "trigger": "指挥状态中登场作战时",
                "excerpt": "指挥状态中弗洛洛登场时，湮灭伤害加成提升60%"
              },
              {
                "label": "受到伤害提升",
                "trigger": "指挥状态中后台作战时",
                "excerpt": "指挥状态中弗洛洛后台时，目标受到赫卡忒和弗洛洛伤害提升40%"
              }
            ]
          }
        ]
      }
    }
  }
});
