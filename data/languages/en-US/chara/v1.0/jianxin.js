"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jianxin": {
        "name": "Jianxin",
        "resources": [
          {
            "label": "气"
          }
        ],
        "skills": [
          {
            "name": "Fengyiquan - Stage 1 DMG"
          },
          {
            "name": "Fengyiquan - Stage 2 DMG"
          },
          {
            "name": "Fengyiquan - Stage 3 DMG"
          },
          {
            "name": "Fengyiquan - Stage 4 DMG"
          },
          {
            "name": "Fengyiquan - Heavy Attack DMG"
          },
          {
            "name": "Fengyiquan - Mid-air Attack DMG"
          },
          {
            "name": "Fengyiquan - Dodge Counter DMG"
          },
          {
            "name": "Calming Air - Chi Counter Damage"
          },
          {
            "name": "Calming Air - Chi Parry Damage"
          },
          {
            "name": "Primordial Chi Spiral - Pushing Punch Damage",
            "requiresResourceLabel": "120气"
          },
          {
            "name": "Primordial Chi Spiral - Zhoutian Progress Continuous Damage",
            "requiresResourceLabel": "120气"
          },
          {
            "name": "Primordial Chi Spiral - Minor Zhoutian Shock Damage",
            "requiresResourceLabel": "120气"
          },
          {
            "name": "Primordial Chi Spiral - Major Zhoutian: Inner Shock Damage",
            "requiresResourceLabel": "120气"
          },
          {
            "name": "Primordial Chi Spiral - Major Zhoutian: Outer Shock Damage",
            "requiresResourceLabel": "120气"
          },
          {
            "name": "Primordial Chi Spiral - Yielding Pull Damage",
            "requiresResourceLabel": "120气"
          },
          {
            "name": "Purification Force Field - Resonance Liberation Continuous Damage"
          },
          {
            "name": "Purification Force Field - Resonance Liberation Explosion Damage"
          },
          {
            "name": "Calming Air - Special Chi Counter Damage",
            "requiresResourceLabel": "特殊行气反击"
          },
          {
            "name": "Essence of Tao - Skill DMG"
          }
        ],
        "combatStates": [
          {
            "label": "混元气旋周天",
            "inactiveLabel": "未处于运气状态",
            "entry": "气达到上限后长按普攻进入，期间持续消耗气；松开普攻或气耗尽时结束。",
            "options": [
              {
                "label": "未达小周天",
                "valueLabel": "运气状态·未达小周天"
              },
              {
                "label": "小周天",
                "valueLabel": "运气状态·小周天"
              },
              {
                "label": "大周天·内",
                "valueLabel": "运气状态·大周天·内"
              },
              {
                "label": "大周天·外",
                "valueLabel": "运气状态·大周天·外"
              }
            ],
            "idLabel": "运气状态"
          }
        ],
        "buffs": [
          {
            "source": "固有·形释无极",
            "label": "涤净力场伤害加成",
            "trigger": "默认",
            "excerpt": "涤净力场伤害提升20%",
            "desc": "共鸣解放涤净力场伤害提升20%。"
          },
          {
            "source": "延奏·化境",
            "label": "共鸣解放伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色共鸣解放伤害加深38%",
            "desc": "下一位登场角色（或附近队伍中激活延奏技能的角色）共鸣解放伤害加深38%，效果持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "林间青枝",
            "desc": "施放变奏技能掌息之要后，普攻获得的气额外增加100%，持续10秒。"
          },
          {
            "name": "道者稚徒",
            "desc": "共鸣技能静气循行的使用次数额外增加1次。"
          },
          {
            "name": "无心无为",
            "desc": "共鸣技能静气循行进入架势姿态持续2.5秒后，可以直接打出共鸣技能行气反击。"
          },
          {
            "name": "十问之思",
            "desc": "施放共鸣回路重击·混元气旋时，鉴心共鸣解放涤净力场伤害提升80%，持续14秒。",
            "buffs": [
              {
                "label": "涤净力场伤害加成",
                "trigger": "施放重击·混元气旋后",
                "excerpt": "释放混元气旋后，涤净力场伤害提升80%"
              }
            ]
          },
          {
            "name": "经世自鉴",
            "desc": "共鸣解放涤净力场范围增加33%。"
          },
          {
            "name": "向己而生",
            "desc": "共鸣回路重击·混元气旋期间施展冲拳，获得强化共鸣技能特殊行气反击，5秒内可施放1次。特殊行气反击：造成鉴心556.67%攻击的气动伤害，此次伤害为重击伤害，同时获得达到大周天·外阶段的护盾（受固有技能覆映吾身的加成影响）。"
          }
        ]
      }
    }
  }
});
