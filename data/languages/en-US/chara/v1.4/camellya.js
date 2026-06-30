"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "camellya": {
        "name": "Camellya",
        "skills": [
          {
            "name": "Burgeoning - Basic Attack 1 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 2 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 3 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 4 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 5 DMG"
          },
          {
            "name": "Burgeoning - Heavy Attack DMG"
          },
          {
            "name": "Burgeoning - Mid-air Attack DMG"
          },
          {
            "name": "Burgeoning - Dodge Counter DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Crimson Blossom DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 1 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 2 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 3 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 4 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Floral Ravage DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Ronde DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Atonement DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Blazing Waltz DMG"
          },
          {
            "name": "Fervor Efflorescent - Skill DMG"
          },
          {
            "name": "Everblooming - Skill DMG"
          },
          {
            "name": "Vegetative Universe - Ephemeral DMG",
            "requiresResourceLabel": "协奏能量满且一日花可用"
          },
          {
            "name": "Vegetative Universe - Ephemeral DMG",
            "requiresResourceLabel": "一日花后15秒内协奏能量满且永生花未冷却"
          },
          {
            "name": "Twining - Outro Skill DMG"
          },
          {
            "name": "Twining - After Crimson Blossom DMG",
            "requiresResourceLabel": "一日花后"
          }
        ],
        "combatStates": [
          {
            "label": "盛绽状态",
            "inactiveLabel": "未处于盛绽",
            "entry": "施放共鸣技能红椿盛绽后进入盛绽状态；施放黯蕊猎心、控物或旋舞等动作会退出。",
            "options": [
              {
                "label": "盛绽",
                "valueLabel": "盛绽状态"
              }
            ],
            "idLabel": "盛绽状态"
          },
          {
            "label": "含苞状态",
            "inactiveLabel": "未处于含苞",
            "entry": "施放共鸣回路一日花或6链永生花后进入含苞状态，持续15秒。",
            "options": [
              {
                "label": "一日花后",
                "valueLabel": "含苞状态·一日花"
              },
              {
                "label": "永生花后",
                "valueLabel": "含苞状态·永生花"
              }
            ],
            "idLabel": "含苞状态"
          }
        ],
        "buffs": [
          {
            "source": "固有·温床",
            "label": "湮灭伤害加成",
            "trigger": "默认",
            "excerpt": "湮灭伤害加成提升15%",
            "desc": "湮灭伤害加成提升15%，重击修枝伤害视为普攻伤害。"
          },
          {
            "source": "固有·侵占",
            "label": "普攻伤害加成",
            "trigger": "默认",
            "excerpt": "普攻伤害加成提升15%",
            "desc": "普攻伤害加成提升15%，普攻和普攻蔓舞、普攻烬华蔓舞的抗打断能力提升。"
          },
          {
            "source": "共鸣回路·酣梦",
            "label": "酣梦倍率提升",
            "trigger": "含苞状态期间",
            "excerpt": "含苞期间，指定攻击伤害倍率提升50%",
            "desc": "酣梦：常态攻击、普攻蔓舞、普攻烬华蔓舞、普攻旋舞、闪避反击偿赎、共鸣技能红椿盛绽、共鸣技能黯蕊猎心的伤害倍率提升50%。"
          },
          {
            "source": "共鸣回路·红椿·蕾",
            "label": "酣梦倍率提升",
            "trigger": "施放一日花时清除红椿·蕾",
            "excerpt": "每层红椿·蕾使酣梦倍率提升额外+5%",
            "desc": "施放一日花时，清除所有红椿·蕾，每层红椿·蕾使酣梦的伤害倍率提升效果额外提升5%，最多可额外提升50%。"
          }
        ],
        "chain": [
          {
            "name": "在无人知晓的秘密小径",
            "desc": "施放变奏技能八千春秋时，暴击伤害提升28%，持续18秒，每25秒可触发1次。共鸣回路一日花免疫打断。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "施放八千春秋时",
                "excerpt": "释放八千春秋时，暴击伤害提升28%"
              }
            ]
          },
          {
            "name": "呼唤那沉默之花的芬芳",
            "desc": "共鸣回路一日花伤害倍率提升120%。",
            "buffs": [
              {
                "label": "一日花倍率提升",
                "trigger": "默认",
                "excerpt": "一日花伤害倍率提升120%"
              }
            ]
          },
          {
            "name": "一根荆棘胜过千颗花种",
            "desc": "共鸣解放芳华绽烬伤害倍率提升50%；含苞状态期间，椿的攻击提升58%。",
            "buffs": [
              {
                "label": "芳华绽烬倍率提升",
                "trigger": "默认",
                "excerpt": "芳华绽烬伤害倍率提升50%"
              },
              {
                "label": "攻击",
                "trigger": "含苞状态期间",
                "excerpt": "含苞状态期间，攻击提升58%"
              }
            ]
          },
          {
            "name": "它的根茎持续到永恒中",
            "desc": "施放变奏技能八千春秋后，队伍中的角色普攻伤害加成提升25%，持续30秒。",
            "buffs": [
              {
                "label": "普攻伤害加成",
                "trigger": "施放八千春秋后",
                "excerpt": "释放八千春秋后，队伍普攻伤害加成提升25%"
              }
            ]
          },
          {
            "name": "将那无限置于你的手掌",
            "desc": "变奏技能八千春秋伤害倍率提升303%。延奏技能缠绕伤害倍率提升68%。",
            "buffs": [
              {
                "label": "八千春秋倍率提升",
                "trigger": "默认",
                "excerpt": "八千春秋伤害倍率提升303%"
              },
              {
                "label": "缠绕倍率提升",
                "trigger": "默认",
                "excerpt": "缠绕伤害倍率提升68%"
              }
            ]
          },
          {
            "name": "为你的千千万万次盛放",
            "desc": "共鸣回路酣梦的伤害倍率提升效果额外提升150%；共鸣回路永生花：施放共鸣回路一日花后15秒内，协奏能量充满时，若永生花不处于冷却状态，共鸣技能替换为永生花。施放永生花时，消耗50点协奏值，回复50点【红椿·蕊】，造成共鸣回路一日花100%的湮灭伤害，此次伤害为普攻伤害，每25秒可施放1次。施放永生花后，进入含苞状态，清除所有红椿·蕾，并将共鸣回路酣梦的伤害倍率提升效果提升至250%。共鸣回路永生花免疫打断。",
            "buffs": [
              {
                "label": "酣梦倍率提升",
                "trigger": "含苞状态期间",
                "excerpt": "6链使酣梦倍率提升效果额外提升150%"
              },
              {
                "label": "永生花酣梦倍率提升",
                "trigger": "施放永生花后",
                "excerpt": "永生花后，酣梦倍率提升效果补足至250%"
              }
            ]
          }
        ]
      }
    }
  }
});
