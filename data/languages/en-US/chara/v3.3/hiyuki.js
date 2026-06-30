"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "hiyuki": {
        "name": "Hiyuki",
        "resources": [
          {
            "label": "心念"
          },
          {
            "label": "淬寒·枯霜"
          },
          {
            "label": "寒意"
          }
        ],
        "skills": [
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Present Self Stage 1 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Present Self Stage 2 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Present Self Stage 3 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Heavy Attack - Frost Splinter: Present Self DMG",
            "requiresResourceLabel": "300心念"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Attack - Present Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Dodge Counter - Present Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 1 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 2 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 3 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 4 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 5 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Heavy Attack - Foreclaimed Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Heavy Attack - Bitterfrost: Foreclaimed Self DMG",
            "requiresResourceLabel": "3淬寒·枯霜"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Attack - Foreclaimed Self Stage 1 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Attack - Foreclaimed Self Stage 2 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Plunging Attack - Foreclaimed Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Dodge Counter - Foreclaimed Self DMG"
          },
          {
            "name": "Frostblight - Resonance Skill - Present Self DMG"
          },
          {
            "name": "Frostblight - Frostblight: Jade Cleave DMG"
          },
          {
            "name": "Frostblight - Frostblight: Petalfall DMG"
          },
          {
            "name": "Foreclaiming - Foreclaiming: Inward Vision DMG",
            "requiresResourceLabel": "重击·寒簇·常世身后"
          },
          {
            "name": "Foreclaiming - Foreclaiming: Blade Liberation Base DMG"
          },
          {
            "name": "Frostedge - Skill DMG"
          },
          {
            "name": "Everfrost Dominion - Basic Attack - Iai DMG",
            "requiresResourceLabel": "100寒意"
          }
        ],
        "combatStates": [
          {
            "label": "身相形态",
            "inactiveLabel": "未确认身相",
            "entry": "绯雪初始处于常世身；施放预求我身·见心后进入预求身；施放预求我身·归刃后退出预求身。",
            "options": [
              {
                "label": "常世身",
                "valueLabel": "常世身"
              },
              {
                "label": "预求身",
                "valueLabel": "预求身"
              }
            ],
            "idLabel": "身相"
          },
          {
            "label": "居合架势",
            "inactiveLabel": "未处于居合架势",
            "entry": "预求身形态下寒意不低于100点时，在指定攻击后短按闪避或长按共鸣技能进入；切换角色时提前退出。",
            "options": [
              {
                "label": "居合架势",
                "valueLabel": "居合架势"
              }
            ],
            "idLabel": "居合架势"
          }
        ],
        "buffs": [
          {
            "source": "固有·细雪",
            "label": "暴击伤害",
            "trigger": "获得雪锈后",
            "excerpt": "持有1层雪锈时，暴击伤害提升40%",
            "desc": "队伍中的角色附加【霜渐效应】或【虚湮效应】时，绯雪获得1层【雪锈】。【雪锈】最多可叠加3层，每名角色仅可通过上述方式使绯雪获得1层【雪锈】。1层【雪锈】：绯雪的暴击伤害提升40%。"
          },
          {
            "source": "固有·细雪",
            "label": "霜渐效应伤害加深",
            "trigger": "获得雪锈后",
            "excerpt": "持有1层雪锈时，霜冻/霜渐效应伤害加深30%",
            "desc": "1层【雪锈】：自身为队伍中登场角色时，一定范围内的目标受到【霜冻效应】伤害加深30%。【霜冻效应】伤害可同时视为【霜渐效应】伤害。"
          },
          {
            "source": "固有·细雪",
            "label": "霜冻效应额外倍率",
            "trigger": "雪锈达到2层后",
            "excerpt": "持有2层雪锈时，每次自身附加霜渐效应额外结算102%霜冻伤害",
            "desc": "2层【雪锈】：自身为队伍中登场角色时，每次自身附加【霜渐效应】时，额外附加一段102%异常倍率的【霜冻效应】伤害。"
          },
          {
            "source": "固有·细雪",
            "label": "霜渐效应伤害加深",
            "trigger": "雪锈达到3层后",
            "excerpt": "持有3层雪锈时，霜冻/霜渐效应伤害额外加深30%",
            "desc": "3层【雪锈】：自身为队伍中登场角色时，一定范围内的目标受到【霜冻效应】伤害额外加深30%。【霜冻效应】伤害可同时视为【霜渐效应】伤害。"
          },
          {
            "source": "延奏·挽雪照身",
            "label": "冷凝伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "除绯雪外的队友攻击霜渐目标时，冷凝伤害加深20%",
            "desc": "附近队伍中除绯雪以外的角色对拥有【霜渐效应】的敌人造成的冷凝伤害加深20%，持续20秒。"
          }
        ],
        "chain": [
          {
            "name": "不见春",
            "desc": "普攻·预求身、重击·预求身、空中攻击·预求身、闪避反击·预求身的伤害倍率提升120%。普攻·预求身第3段的攻击范围提升，且会将攻击范围内的敌人向中心进行牵引。施放普攻·预求身第4、5段期间免疫打断。施放预求我身·见心时，使下一次普攻·预求身第1段和下一次普攻·预求身第2段命中目标时获得强化，为目标附加1次【霜渐效应】。",
            "buffs": [
              {
                "label": "预求身常态攻击倍率提升",
                "trigger": "默认",
                "excerpt": "预求身普攻、重击、空中攻击、闪避反击倍率提升120%"
              }
            ]
          },
          {
            "name": "于无声处冰冷燃烧",
            "desc": "普攻·居合的伤害倍率提升125%。固有技能无常世替换为以下效果：绯雪每次脱离战斗状态或恢复意识后，处于非战斗状态达到4秒时，回复3点【锻雪·归刃】。绯雪每次脱离战斗状态或恢复意识后，处于非战斗状态达到4秒时，触发一次以下效果：·处于预求身状态时，【武霜·居合】回复3点。·重置2次霜罚·白玉切的冷却时间。·后续2次施放霜罚·白玉切或霜罚·落华期间，额外回复50点【寒意】。",
            "buffs": [
              {
                "label": "普攻·居合倍率提升",
                "trigger": "默认",
                "excerpt": "普攻·居合伤害倍率提升125%"
              }
            ]
          },
          {
            "name": "我身无我亦无穷",
            "desc": "固有技能细雪获得额外效果：当角色编入队伍或绯雪恢复意识，2秒后绯雪获得1层【雪锈】，最多通过该方式获取1层【雪锈】。重击·寒簇·常世身和重击·枯霜·预求身的伤害倍率提升160%。持有2层【雪锈】时，自身为队伍中登场角色时，每次自身附加【霜渐效应】时，额外附加的异常倍率提升488%。",
            "buffs": [
              {
                "label": "指定重击倍率提升",
                "trigger": "默认",
                "excerpt": "寒簇重击和枯霜重击伤害倍率提升160%"
              },
              {
                "label": "霜冻效应额外倍率",
                "trigger": "雪锈达到2层后",
                "excerpt": "持有2层雪锈时，额外霜冻异常倍率提升488%"
              }
            ]
          },
          {
            "name": "有如苇草浮沉",
            "desc": "施放共鸣技能·常世身、霜罚·白玉切、霜罚·落华时，使附近队伍中所有角色造成的伤害提升20%，持续30秒。每次施放霜罚·白玉切、霜罚·落华时，回复自身生命上限18%的生命值。",
            "buffs": [
              {
                "label": "全伤害加深",
                "trigger": "施放指定共鸣技能时",
                "excerpt": "释放指定共鸣技能时，全队造成伤害加深20%"
              }
            ]
          },
          {
            "name": "千祈万愿尽求我身",
            "desc": "共鸣技能·常世身、霜罚·白玉切、霜罚·落华的伤害倍率提升80%。",
            "buffs": [
              {
                "label": "指定共鸣技能倍率提升",
                "trigger": "默认",
                "excerpt": "共鸣技能·常世身、白玉切、落华倍率提升80%"
              }
            ]
          },
          {
            "name": "纵使前路永夜无终",
            "desc": "预求我身·见心、预求我身·归刃暴击伤害提升500%。持有2层【雪锈】时，“自身为队伍中登场角色时，每次自身附加【霜渐效应】时，额外附加异常倍率”改为“自身为队伍中登场角色时，每次队伍中的角色附加【霜渐效应】时，额外附加异常倍率”。持有2层【雪锈】时，绯雪的暴击伤害提升40%。持有3层【雪锈】时，队伍中登场角色一定范围内的目标受到【霜冻效应】的最终伤害提升25%。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "默认",
                "excerpt": "见心和归刃暴击伤害提升500%"
              },
              {
                "label": "暴击伤害",
                "trigger": "雪锈达到2层后",
                "excerpt": "持有2层雪锈时，暴击伤害额外提升40%"
              },
              {
                "label": "霜冻效应最终伤害提升",
                "trigger": "雪锈达到3层后",
                "excerpt": "持有3层雪锈时，目标受到霜冻效应最终伤害提升25%"
              }
            ]
          }
        ]
      }
    }
  }
});
