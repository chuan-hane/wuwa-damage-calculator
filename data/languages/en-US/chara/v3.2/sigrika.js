window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "sigrika": {
        "name": "Sigrika",
        "resources": [
          {
            "label": "句点"
          },
          {
            "label": "符文·期望"
          },
          {
            "label": "符文·答问"
          }
        ],
        "skills": [
          {
            "name": "One, Two, Three - Basic Attack Stage 1 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack Stage 2 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack Stage 3 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack Stage 4 DMG"
          },
          {
            "name": "One, Two, Three - Basic Attack - Elucidated DMG"
          },
          {
            "name": "One, Two, Three - Heavy Attack DMG"
          },
          {
            "name": "One, Two, Three - Mid-air Attack DMG"
          },
          {
            "name": "One, Two, Three - Dodge Counter DMG"
          },
          {
            "name": "One, Two, Three - Mid-air Dodge Counter DMG"
          },
          {
            "name": "One, Two, Three - Dodge Counter - Decipher DMG"
          },
          {
            "name": "Royan Close Quarters Combat - BOOMY BOOM! DMG"
          },
          {
            "name": "Royan Close Quarters Combat - BIG BOOMY BOOM! DMG"
          },
          {
            "name": "Royan Close Quarters Combat - Soliskin to the Aid DMG"
          },
          {
            "name": "Where Trust Leads Me! - Skill DMG"
          },
          {
            "name": "Solsworn Etymology - Skill DMG"
          },
          {
            "name": "Within Infinity's Embrace - Heavy Attack - Schemata of Runes DMG"
          },
          {
            "name": "Within Infinity's Embrace - Runic Outburst DMG"
          },
          {
            "name": "Within Infinity's Embrace - Runic Chain Whip DMG"
          },
          {
            "name": "Within Infinity's Embrace - Runic Soliskin DMG"
          },
          {
            "name": "Within Infinity's Embrace - Forte Circuit - Learn My True Name DMG"
          }
        ],
        "combatStates": [
          {
            "label": "解读",
            "inactiveLabel": "未处于解读",
            "entry": "施放普攻第4段后进入解读状态，持续5秒；切换至其他角色时提前结束。",
            "options": [
              {
                "label": "解读"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·语义共鸣",
            "label": "气动伤害加成",
            "trigger": "队伍角色施放声骸技能后",
            "excerpt": "施放声骸技能时，每层气动伤害加成提升3%",
            "desc": "队伍中的角色施放声骸技能时，西格莉卡为自身叠加一层语义的祝福，最多叠加6层，同名声骸仅可触发一次该效果。语义的祝福每层语义的祝福使队伍中登场角色气动伤害加成提升3%，声骸技能伤害加成提升3%。"
          },
          {
            "source": "固有·语义共鸣",
            "label": "声骸技能伤害加成",
            "trigger": "队伍角色施放声骸技能后",
            "excerpt": "施放声骸技能时，每层声骸技能伤害加成提升3%",
            "desc": "队伍中的角色施放声骸技能时，西格莉卡为自身叠加一层语义的祝福，最多叠加6层，同名声骸仅可触发一次该效果。语义的祝福每层语义的祝福使队伍中登场角色气动伤害加成提升3%，声骸技能伤害加成提升3%。"
          },
          {
            "source": "固有·语义共鸣",
            "label": "气动伤害加成",
            "trigger": "语义的祝福达到6层后",
            "excerpt": "语义的祝福满6层时，气动伤害加成额外提升30%",
            "desc": "语义的祝福达到6层时，西格莉卡的气动伤害加成和声骸技能伤害加成额外提升30%。"
          },
          {
            "source": "固有·语义共鸣",
            "label": "声骸技能伤害加成",
            "trigger": "语义的祝福达到6层后",
            "excerpt": "语义的祝福满6层时，声骸技能伤害加成额外提升30%",
            "desc": "语义的祝福达到6层时，西格莉卡的气动伤害加成和声骸技能伤害加成额外提升30%。"
          },
          {
            "source": "固有·语义共鸣",
            "label": "声骸技能伤害加成",
            "trigger": "共鸣效率超过125%时",
            "excerpt": "共鸣效率超过125%时转声骸技能伤害加成，上限50%",
            "desc": "西格莉卡自身的共鸣效率大于125%时，每超过1%的共鸣效率使自身声骸技能伤害加成提升2%，上限50%。"
          },
          {
            "source": "共鸣回路·在那浩瀚中",
            "label": "符语倍率提升",
            "trigger": "消耗30点日灵能量时",
            "excerpt": "消耗30点日灵能量时，本次符语倍率提升50%",
            "desc": "消耗符文时，若日灵能量不少于30点，消耗30点日灵能量，本次符语爆破、符语链刃和符语日灵伤害倍率提升50%，并为自身叠加一层「天赋？」。"
          },
          {
            "source": "共鸣回路·在那浩瀚中",
            "label": "符语伤害加深",
            "trigger": "日灵能量少于30点时",
            "excerpt": "日灵能量少于30点时，每消耗10点本次符语伤害加深15%",
            "desc": "消耗符文时，若日灵能量少于30点，消耗全部日灵能量，每消耗10点日灵能量，使得本次符语爆破、符语链刃和符语日灵造成的伤害加深15%。"
          },
          {
            "source": "共鸣回路·在那浩瀚中",
            "label": "符语与我即语义伤害加深",
            "trigger": "拥有「天赋？」时",
            "excerpt": "「天赋？」每层使符语和我即语义伤害加深30%",
            "desc": "「天赋？」可叠加的层数上限为2层，每层可以使得西格莉卡符语爆破、符语链刃、符语日灵和共鸣回路·我即语义伤害加深30%。西格莉卡施放共鸣回路·我即语义后或切换至其他角色该效果结束。"
          }
        ],
        "chain": [
          {
            "name": "那本该闪耀的光辉",
            "desc": "普攻·明悟、闪避反击·解读、共鸣技能·大嘭嘭！和共鸣技能·日灵帮帮忙伤害倍率提升70%。西格莉卡施放普攻·明悟、共鸣技能·大嘭嘭！和共鸣技能·日灵帮帮忙期间，免疫打断。凝语层数上限改为3层，西格莉卡施放延奏技能在这一瞬间，可额外获得1层凝语。",
            "buffs": [
              {
                "label": "解读技能倍率提升",
                "trigger": "默认",
                "excerpt": "普攻·明悟、解读反击、大嘭嘭！和日灵帮帮忙倍率提升70%"
              }
            ]
          },
          {
            "name": "那深含期待的苦涩",
            "desc": "共鸣回路·我即语义伤害倍率提升120%。西格莉卡处于非战斗状态大于4秒时，获得专注，每4秒只生效1次。",
            "buffs": [
              {
                "label": "我即语义倍率提升",
                "trigger": "默认",
                "excerpt": "共鸣回路·我即语义伤害倍率提升120%"
              }
            ]
          },
          {
            "name": "逃避着，寻找着",
            "desc": "「天赋？」层数上限改为4层且西格莉卡施放共鸣回路·我即语义后或切换至其他角色时不再结束该效果。西格莉卡处于非战斗状态时，每30秒会清除全部「天赋？」层数。"
          },
          {
            "name": "失去着，收获着",
            "desc": "队伍中的角色施放声骸技能时，使队伍中的角色攻击提升20%，持续20秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "队伍角色施放声骸技能后",
                "excerpt": "施放声骸技能时，队伍攻击提升20%"
              }
            ]
          },
          {
            "name": "直到沉于影下",
            "desc": "共鸣解放如那期望般！伤害倍率提升30%。",
            "buffs": [
              {
                "label": "如那期望般！倍率提升",
                "trigger": "默认",
                "excerpt": "如那期望般！伤害倍率提升30%"
              }
            ]
          },
          {
            "name": "语义点亮，光芒升起",
            "desc": "目标受到西格莉卡的伤害提升30%。「天赋？」获得下述额外效果：·每层使得西格莉卡符语爆破、符语链刃、符语日灵和共鸣回路·我即语义造成的伤害加深15%，至多使造成的伤害加深60%。·每层使得西格莉卡符语爆破、符语链刃、符语日灵和共鸣回路·我即语义造成的伤害无视目标7.5%防御，至多使造成的伤害无视目标30%防御。",
            "buffs": [
              {
                "label": "受到伤害提升",
                "trigger": "默认",
                "excerpt": "目标受到西格莉卡的伤害提升30%"
              },
              {
                "label": "符语与我即语义伤害加深",
                "trigger": "拥有「天赋？」时",
                "excerpt": "「天赋？」每层额外使符语和我即语义伤害加深15%"
              },
              {
                "label": "防御无视",
                "trigger": "拥有「天赋？」时",
                "excerpt": "「天赋？」每层使符语和我即语义无视7.5%防御"
              }
            ]
          }
        ]
      }
    }
  }
});
