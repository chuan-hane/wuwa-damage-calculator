window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "galbrena": {
        "name": "Galbrena",
        "resources": [
          {
            "label": "罪火"
          }
        ],
        "skills": [
          {
            "name": "Slayer's Trigger - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Slayer's Trigger - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Slayer's Trigger - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Slayer's Trigger - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Slayer's Trigger - Dodge Counter - Blood for Blood DMG"
          },
          {
            "name": "Slayer's Trigger - Mid-air Attack - Ashfall Barrage Plunging Attack DMG"
          },
          {
            "name": "Slayer's Trigger - Mid-air Attack - Ashfall Barrage Sustained Fire DMG"
          },
          {
            "name": "Slayer's Trigger - Heavy Attack - Volley of Death Stage 1 DMG"
          },
          {
            "name": "Slayer's Trigger - Heavy Attack - Volley of Death Stage 2 DMG"
          },
          {
            "name": "Slayer's Trigger - Heavy Attack - Volley of Death Stage 3 DMG"
          },
          {
            "name": "Edge Transcended - Resonance Skill - Encroach DMG"
          },
          {
            "name": "Edge Transcended - Resonance Skill - Ascent of Malice DMG"
          },
          {
            "name": "Hellfire Absolution - Resonance Liberation - Hellfire Absolution DMG"
          },
          {
            "name": "Hellflare Overload - Intro Skill - Hellflare Overload DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 1 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 2 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 3 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 4 DMG"
          },
          {
            "name": "Beyond Threshold - Basic Attack - Seraphic Execution Stage 5 DMG"
          },
          {
            "name": "Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 1 DMG"
          },
          {
            "name": "Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 2 DMG"
          },
          {
            "name": "Beyond Threshold - Heavy Attack - Flamewing Verdict Stage 3 DMG"
          },
          {
            "name": "Beyond Threshold - Dodge Counter - Purgatory Scourge"
          },
          {
            "name": "Beyond Threshold - Mid-air Attack - Hellsent Barrage Plunging Attack DMG"
          },
          {
            "name": "Beyond Threshold - Mid-air Attack - Hellsent Barrage Sustained Fire DMG"
          },
          {
            "name": "Beyond Threshold - Resonance Skill - Ravage DMG"
          }
        ],
        "combatStates": [
          {
            "label": "位格状态",
            "inactiveLabel": "阈限状态",
            "entry": "嘉贝莉娜初始处于阈限状态；罪火达到100点时施放共鸣技能·恶翼扬升进入恶魔位格，并将罪火转化为净炼火。",
            "options": [
              {
                "label": "恶魔/永恒"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "固有·誓猎",
            "label": "全伤害加深",
            "trigger": "命中叠加死运既定后",
            "excerpt": "死运既定每层全伤害加深5%，满层20%",
            "desc": "嘉贝莉娜的变奏技能、普攻、普攻·炽天猎杀、闪避反击、重击·燧发杀戮、重击·炼羽裁决、空中攻击、地狱穿行、共鸣技能·迫近、共鸣技能·恶翼扬升、共鸣技能·掠袭、共鸣解放命中目标时，会为目标叠加一层死运既定，每层使嘉贝莉娜的常态攻击、共鸣技能、共鸣回路、共鸣解放、变奏技能、延奏技能造成的伤害加深5%，可叠加4层，持续5.5秒。同种类型的技能，对同一目标5秒内只能叠加一次。共鸣技能·迫近、共鸣技能·掠袭共享技能类型。"
          },
          {
            "source": "共鸣回路·恶魔位格",
            "label": "位格技能伤害提升",
            "trigger": "恶魔位格期间按余火层数",
            "excerpt": "恶魔位格中，每点余火使目标受到位格技能伤害提升1.5%",
            "desc": "恶魔位格期间，每点【余火】会使目标受到嘉贝莉娜的普攻·炽天猎杀、重击·炼羽裁决、空中攻击·火狱暴雨、共鸣技能·掠袭、闪避反击·罪业当涤伤害提升1.5%，至多提升至60%，退出恶魔位格时移除。"
          },
          {
            "source": "共鸣回路·内燃烧",
            "label": "攻击",
            "trigger": "施放指定技能后",
            "excerpt": "施放变奏、迫近/恶翼扬升/掠袭或炽天猎杀第四段时，攻击提升20%",
            "desc": "施放变奏技能、地狱穿行、普攻·炽天猎杀第4段、共鸣技能·迫近、共鸣技能·恶翼扬升、共鸣技能·掠袭时，嘉贝莉娜的攻击提升20%，抗打断能力提升，持续4秒。"
          },
          {
            "source": "共鸣解放·炼净",
            "label": "位格技能倍率提升",
            "trigger": "施放共鸣解放后",
            "excerpt": "释放炼净后，恶魔位格普攻/重击/空中/闪反倍率提升85%",
            "desc": "攻击目标，造成热熔伤害，此次伤害为声骸技能伤害，并使恶魔位格期间，普攻·炽天猎杀、重击·炼羽裁决、空中攻击·火狱暴雨、闪避反击·罪业当涤的伤害倍率提升85%，持续14秒。"
          }
        ],
        "chain": [
          {
            "name": "不熄抵牾抗争之心",
            "desc": "嘉贝莉娜施放共鸣技能·恶翼扬升时，每点【余火】额外为普攻·炽天猎杀、重击·炼羽裁决、空中攻击·火狱暴雨、共鸣技能·掠袭、闪避反击·罪业当涤提升2%暴击伤害，至多提升80%暴击伤害，退出恶魔位格时移除。恶魔位格期间，普攻·炽天猎杀第5段、重击·炼羽裁决第3段、空中攻击·火狱暴雨免疫打断。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "施放恶翼扬升后按余火层数",
                "excerpt": "恶翼扬升后，每点余火为位格技能暴击伤害提升2%"
              }
            ]
          },
          {
            "name": "行过烈狱与幽暗冥途",
            "desc": "内燃烧提供的攻击加成提升350%。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "内燃烧触发时",
                "excerpt": "内燃烧触发时，攻击额外提升70%（合计90%）",
                "desc": "内燃烧提供的攻击加成提升350%（基础20%提高至90%，本条记录额外70%）。"
              }
            ]
          },
          {
            "name": "再燃血狩死猎之誓",
            "desc": "共鸣解放的伤害倍率提升130%。",
            "buffs": [
              {
                "label": "共鸣解放·炼净倍率提升",
                "trigger": "默认",
                "excerpt": "共鸣解放·炼净伤害倍率提升130%"
              }
            ]
          },
          {
            "name": "承负无薪孤惧苦火",
            "desc": "队伍中的角色施放声骸技能时，使队伍中所有角色全属性伤害加成提升20%，持续20秒。",
            "buffs": [
              {
                "label": "全属性伤害加成",
                "trigger": "队伍角色施放声骸技能时",
                "excerpt": "队伍角色释放声骸技能时，全属性伤害加成提升20%"
              }
            ]
          },
          {
            "name": "纵使光明远去，厄难焚身",
            "desc": "共鸣技能·迫近，共鸣技能·恶翼扬升，共鸣技能·掠袭的伤害倍率提升150%。",
            "buffs": [
              {
                "label": "共鸣技能倍率提升",
                "trigger": "默认",
                "excerpt": "迫近、恶翼扬升、掠袭伤害倍率提升150%"
              }
            ]
          },
          {
            "name": "我仍炽耀不移，自有永有",
            "desc": "恶魔位格升级为永恒位格，永恒位格保留恶魔位格全部原有效果。永恒位格期间普攻·炽天猎杀、重击·炼羽裁决、空中攻击·火狱暴雨、闪避反击·罪业当涤的伤害倍率提升60%。嘉贝莉娜施放共鸣技能·恶翼扬升时，每点【余火】额外为普攻·炽天猎杀、重击·炼羽裁决、空中攻击·火狱暴雨、共鸣技能·掠袭、闪避反击·罪业当涤提升0.875%热熔伤害加深，至多提升35%热熔伤害加深，退出永恒位格时移除。",
            "buffs": [
              {
                "label": "位格技能倍率提升",
                "trigger": "永恒位格期间",
                "excerpt": "永恒位格中，普攻/重击/空中/闪反倍率提升60%"
              },
              {
                "label": "热熔伤害加深",
                "trigger": "恶翼扬升后按余火层数",
                "excerpt": "永恒位格中，每点余火使位格技能热熔伤害加深0.875%"
              }
            ]
          }
        ]
      }
    }
  }
});
