window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "iuno": {
        "name": "Iuno",
        "resources": [
          {
            "label": "灵性"
          }
        ],
        "skills": [
          {
            "name": "Moon Steps - Moonring - Basic Attack 1 DMG"
          },
          {
            "name": "Moon Steps - Moonring - Basic Attack 2 DMG"
          },
          {
            "name": "Moon Steps - Moonring - Basic Attack 3 DMG"
          },
          {
            "name": "Moon Steps - Mid-air Attack"
          },
          {
            "name": "Moon Steps - Moonring - Dodge Counter"
          },
          {
            "name": "Moon Steps - Moonbow - Basic Attack 1 DMG"
          },
          {
            "name": "Moon Steps - Moonbow - Basic Attack 2 DMG"
          },
          {
            "name": "Moon Steps - Moonbow - Basic Attack 3 DMG"
          },
          {
            "name": "Moon Steps - Moonbow - Dodge Counter DMG"
          },
          {
            "name": "Foresight Fugue - Pulse of Origins DMG"
          },
          {
            "name": "Foresight Fugue - Closing Refrain DMG"
          },
          {
            "name": "Foresight Fugue - Unfinished Refrain DMG"
          },
          {
            "name": "Foresight Fugue - Arc Beyond the Edge DMG"
          },
          {
            "name": "Beneath Lunar Tides - Skill DMG"
          },
          {
            "name": "Illuminated Manifestation - Skill DMG"
          },
          {
            "name": "Ebb and Flow - Flux - Moonbow DMG"
          },
          {
            "name": "Ebb and Flow - Flux - Moonring DMG"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Basic Attack 1 DMG"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Basic Attack 2 DMG"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Basic Attack 3 DMG"
          },
          {
            "name": "Ebb and Flow - Enhanced Moonbow - Dodge Counter DMG"
          },
          {
            "name": "Ebb and Flow - Enhanced Arc Beyond the Edge DMG"
          },
          {
            "name": "Ebb and Flow - Absolute Fullness DMG"
          }
        ],
        "combatStates": [
          {
            "label": "月相状态",
            "inactiveLabel": "未处于月相流转",
            "entry": "由共鸣技能·告终的喧响或共鸣解放进入，初始为弦月；重击·流变在弦月/新月间切换。",
            "options": [
              {
                "label": "弦月"
              },
              {
                "label": "新月"
              }
            ]
          },
          {
            "label": "满月领域",
            "inactiveLabel": "未处于满月领域",
            "entry": "尤诺施放变奏技能或共鸣解放可展开满月领域。",
            "options": [
              {
                "label": "满月领域"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "延奏·尤诺",
            "label": "重击伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一个登场角色重击伤害加深50%",
            "desc": "攻击目标造成100%的气动伤害，下一个登场角色重击伤害加深50%，持续14秒，若切换至其他角色则该效果提前结束。"
          },
          {
            "source": "共鸣回路·满月领域 / 固有·新衍",
            "label": "全伤害加深",
            "trigger": "满月领域中获得护盾/变奏或共鸣解放后",
            "excerpt": "获得苍白死光的祝颂时，每层全伤害加深4%",
            "desc": "处于领域中的登场角色获得护盾时，可获得一层苍白死光的祝颂，该效果每0.5秒可触发一次。苍白死光的祝颂：角色全伤害加深4%，持续10秒，可叠加10层，重复添加时刷新持续时间。若切换至其他角色则该效果提前结束。固有·新衍：尤诺施放变奏技能或共鸣解放时，自身可直接获得5层苍白死光的祝颂。"
          }
        ],
        "chain": [
          {
            "name": "圆与缺，皆替金枝镀色",
            "desc": "尤诺处于月相流转状态时，攻击提升40%。尤诺处于满月领域中时，自身每秒额外回复1点共鸣能量。共鸣技能·越限的弦引和重击·至臻的完满免疫打断。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "处于月相流转状态",
                "excerpt": "处于月相流转状态时，攻击提升40%"
              }
            ]
          },
          {
            "name": "昼或夜，且以它为永恒",
            "desc": "队伍中的角色的苍白死光的祝颂叠加至10层时，其额外获得40%全伤害加深。",
            "buffs": [
              {
                "label": "全伤害加深",
                "trigger": "苍白死光祝颂满10层",
                "excerpt": "苍白死光的祝颂满10层时，全伤害加深40%"
              }
            ]
          },
          {
            "name": "我痛饮他者的遗忘",
            "desc": "尤诺处于月相流转状态时，月弓·普攻、共鸣技能·越限的弦引、月弓·闪避反击造成的伤害加深65%。施放月弓·普攻或月弓·闪避反击后一定时间内，施放共鸣技能·越限的弦引将不会重置月弓·普攻的连段。",
            "buffs": [
              {
                "label": "月弓技能伤害加深",
                "trigger": "处于月相流转状态",
                "excerpt": "处于月相流转状态时，月弓技能伤害加深65%"
              }
            ]
          },
          {
            "name": "任雨季栖息于眼眸",
            "desc": "施放重击·至臻的完满时，队伍中的角色获得一个基于尤诺攻击160%的护盾，持续时间30秒，切换至其他角色不会继承该护盾。"
          },
          {
            "name": "万千次虚掷的注视",
            "desc": "共鸣解放伤害加成提升20%。",
            "buffs": [
              {
                "label": "共鸣解放伤害加成",
                "trigger": "默认",
                "excerpt": "共鸣解放伤害加成提升20%"
              }
            ]
          },
          {
            "name": "我所在，即为不变的独一",
            "desc": "重击·至臻的完满伤害倍率增加1600%。尤诺施放重击·至臻的完满时，会再次进入月相流转·新月状态，获得100点【灵性】并重置共鸣技能·越限的弦引的全部冷却。",
            "buffs": [
              {
                "label": "至臻的完满倍率增加",
                "trigger": "6链默认",
                "excerpt": "至臻的完满伤害倍率增加1600%",
                "desc": "重击·至臻的完满伤害倍率增加1600%（159.05% → 1759.05%）。"
              }
            ]
          }
        ]
      }
    }
  }
});
