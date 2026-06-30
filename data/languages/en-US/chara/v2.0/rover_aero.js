window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rover_aero": {
        "name": "Rover: Aero",
        "resources": [
          {
            "label": "弦风息"
          }
        ],
        "skills": [
          {
            "name": "Wind Cutter - Stage 1 DMG"
          },
          {
            "name": "Wind Cutter - Stage 2 DMG"
          },
          {
            "name": "Wind Cutter - Stage 3 DMG"
          },
          {
            "name": "Wind Cutter - Stage 4 DMG"
          },
          {
            "name": "Wind Cutter - Heavy Attack DMG"
          },
          {
            "name": "Wind Cutter - Razor Wind DMG"
          },
          {
            "name": "Wind Cutter - Mid-air Attack DMG"
          },
          {
            "name": "Wind Cutter - Dodge Counter DMG"
          },
          {
            "name": "Illusion Breaker - Awakening Gale DMG"
          },
          {
            "name": "Illusion Breaker - Skyfall Severance DMG"
          },
          {
            "name": "Omega Storm - Skill DMG"
          },
          {
            "name": "Relentless Squall - Skill DMG"
          },
          {
            "name": "Cycle of Wind - Cloudburst Dance Stage 1 DMG"
          },
          {
            "name": "Cycle of Wind - Cloudburst Dance Stage 2 DMG"
          },
          {
            "name": "Cycle of Wind - Unbound Flow Stage 1 DMG"
          },
          {
            "name": "Cycle of Wind - Unbound Flow Stage 2 DMG"
          }
        ],
        "buffs": [
          {
            "source": "固有·空渡浮尘",
            "label": "攻击",
            "trigger": "施放变奏技能后",
            "excerpt": "释放狂岚未尽时，攻击提升20%",
            "desc": "施放变奏技能狂岚未尽时，攻击提升20%，持续10秒。"
          },
          {
            "source": "延奏·流风回响",
            "label": "风蚀效应层数上限",
            "effects": [
              "windErosion"
            ],
            "trigger": "释放延奏技能后且攻击命中后",
            "excerpt": "释放延奏后，攻击命中使目标风蚀上限提升3层",
            "desc": "附近队伍中所有角色获得蚀境象，持续30秒。蚀境象状态下：攻击命中后，使目标【风蚀效应】层数上限增加3层，持续10秒。该效果无法叠加。"
          }
        ],
        "chain": [
          {
            "name": "风止息于无明界",
            "desc": "施放空中攻击抃风儛润时，获得抗打断提升效果，持续3秒。"
          },
          {
            "name": "流光乍隐于长夜",
            "desc": "施放共鸣技能缥缈无相时，队伍中登场角色获得持续回复生命效果，每3秒回复漂泊者20%攻击的生命值，持续30秒。期间登场角色生命值低于35%时，立即回复登场角色已损失生命值10%的生命值，该效果每10秒可触发1次，且不受治疗效果加成影响。"
          },
          {
            "name": "虚相陷落于掌中",
            "desc": "气动伤害加成提升15%。",
            "buffs": [
              {
                "label": "气动伤害加成",
                "trigger": "默认",
                "excerpt": "气动伤害加成提升15%"
              }
            ]
          },
          {
            "name": "界限崩折于刹那",
            "desc": "施放空中攻击抃风儛润时，共鸣技能伤害加成提升15%，持续5秒。",
            "buffs": [
              {
                "label": "共鸣技能伤害加成",
                "trigger": "施放抃风儛润时",
                "excerpt": "释放抃风儛润时，共鸣技能伤害加成提升15%"
              }
            ]
          },
          {
            "name": "生灭交错于来路",
            "desc": "共鸣解放万象归墟伤害倍率提升20%。",
            "buffs": [
              {
                "label": "万象归墟倍率提升",
                "trigger": "默认",
                "excerpt": "万象归墟伤害倍率提升20%"
              }
            ]
          },
          {
            "name": "万象崩落于风间",
            "desc": "共鸣技能缥缈无相伤害倍率提升30%。",
            "buffs": [
              {
                "label": "缥缈无相倍率提升",
                "trigger": "默认",
                "excerpt": "缥缈无相伤害倍率提升30%"
              }
            ]
          }
        ]
      }
    }
  }
});
