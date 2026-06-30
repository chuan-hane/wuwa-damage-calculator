"use strict";

window.WUWA_LANGUAGES.extend("zh-CN", {
  "data": {
    "chars": {
      "rover_spectro": {
        "name": "漂泊者·衍射",
        "resources": [
          {
            "label": "尘微之声"
          }
        ],
        "skills": [
          {
            "name": "第一段"
          },
          {
            "name": "第二段"
          },
          {
            "name": "第三段"
          },
          {
            "name": "第四段"
          },
          {
            "name": "重击"
          },
          {
            "name": "鸣奏"
          },
          {
            "name": "余音"
          },
          {
            "name": "空中攻击"
          },
          {
            "name": "闪避反击"
          },
          {
            "name": "浮声千斩"
          },
          {
            "name": "回响奏鸣"
          },
          {
            "name": "震声"
          },
          {
            "name": "浮声千斩·旋音",
            "requiresResourceLabel": "50尘微之声"
          },
          {
            "name": "浮声千斩·旋音飞轮",
            "requiresResourceLabel": "50尘微之声"
          },
          {
            "name": "浮声千斩·回声一段",
            "requiresResourceLabel": "浮声千斩·旋音结束后"
          },
          {
            "name": "浮声千斩·回声二段",
            "requiresResourceLabel": "浮声千斩·旋音结束后"
          }
        ],
        "buffs": [
          {
            "source": "固有·屏息",
            "label": "浮声千斩·回声伤害加深",
            "trigger": "默认",
            "excerpt": "浮声千斩·回声造成的伤害提升60%",
            "desc": "普攻浮声千斩·回声的伤害提升60%。"
          },
          {
            "source": "固有·静聆",
            "label": "攻击",
            "trigger": "施放重击·鸣奏后",
            "excerpt": "释放重击·鸣奏后，攻击提升15%",
            "desc": "施放重击鸣奏后，漂泊者的攻击提升15%，持续5秒。"
          }
        ],
        "chain": [
          {
            "name": "始源纪行",
            "aliases": [
              "衍射主",
              "光主"
            ],
            "desc": "施放共鸣技能浮声千斩或共鸣技能浮声千斩·旋音时，漂泊者的暴击提升15%，持续7秒。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "施放浮声千斩/浮声千斩·旋音时",
                "excerpt": "释放浮声千斩或浮声千斩·旋音时，暴击提升15%"
              }
            ]
          },
          {
            "name": "微物细语",
            "desc": "漂泊者的衍射伤害加成提升20%。",
            "buffs": [
              {
                "label": "衍射伤害加成",
                "trigger": "默认",
                "excerpt": "衍射伤害加成提升20%"
              }
            ]
          },
          {
            "name": "尘声百面",
            "desc": "漂泊者的共鸣效率提升20%。",
            "buffs": [
              {
                "label": "共鸣效率",
                "trigger": "默认",
                "excerpt": "共鸣效率提升20%"
              }
            ]
          },
          {
            "name": "连音扫弦",
            "desc": "施放共鸣解放回响奏鸣时，为队伍中的角色持续回复生命值，每秒回复量相当于自身攻击的20%，持续5秒。"
          },
          {
            "name": "回声流转",
            "desc": "共鸣解放伤害加成提升40%。",
            "buffs": [
              {
                "label": "共鸣解放伤害加成",
                "trigger": "默认",
                "excerpt": "共鸣解放伤害加成提升40%"
              }
            ]
          },
          {
            "name": "长路归鸣",
            "desc": "共鸣技能浮声千斩或共鸣技能浮声千斩·旋音命中目标时，目标衍射伤害抗性降低10%，持续20秒。",
            "buffs": [
              {
                "label": "衍射减抗",
                "trigger": "浮声千斩/浮声千斩·旋音命中后",
                "excerpt": "浮声千斩或浮声千斩·旋音命中后，目标衍射抗性降低10%"
              }
            ]
          }
        ]
      }
    }
  }
});
