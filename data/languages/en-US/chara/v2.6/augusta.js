"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "augusta": {
        "name": "Augusta",
        "resources": [
          {
            "label": "战势"
          },
          {
            "label": "权炳"
          },
          {
            "label": "威慑"
          }
        ],
        "skills": [
          {
            "name": "Hunter's Path - Stage 1 DMG"
          },
          {
            "name": "Hunter's Path - Stage 2 DMG"
          },
          {
            "name": "Hunter's Path - Stage 3 DMG"
          },
          {
            "name": "Hunter's Path - Stage 4 DMG"
          },
          {
            "name": "Hunter's Path - Heavy Attack: Steelclash DMG"
          },
          {
            "name": "Hunter's Path - Mid-air Attack DMG"
          },
          {
            "name": "Hunter's Path - Dodge Counter DMG"
          },
          {
            "name": "Hunter's Path - Mid-air Dodge Counter DMG"
          },
          {
            "name": "Hunter's Path - Heavy Attack - Thunderoar: Backstep DMG",
            "requiresResourceLabel": "战势满"
          },
          {
            "name": "Hunter's Path - Heavy Attack - Thunderoar: Spinslash DMG",
            "requiresResourceLabel": "战势满"
          },
          {
            "name": "Hunter's Path - Heavy Attack - Thunderoar: Uppercut DMG",
            "requiresResourceLabel": "战势满"
          },
          {
            "name": "Hunter's Path - Heavy Attack: Steelclash DMG",
            "requiresResourceLabel": "战势满"
          },
          {
            "name": "Hunter's Path - Dodge Counter - Thunderoar: Backstep DMG",
            "requiresResourceLabel": "权炳满"
          },
          {
            "name": "Warrior's Blade - Skill DMG"
          },
          {
            "name": "Sunward Conquest - Resonance Liberation - Sword of Eternal Oath DMG"
          },
          {
            "name": "Sunward Conquest - Sublime is the Sun - Sunborne DMG",
            "requiresResourceLabel": "2威慑"
          },
          {
            "name": "Sunward Conquest - Sublime is the Sun - Everbright Protector DMG",
            "requiresResourceLabel": "2威慑"
          },
          {
            "name": "Stride of Goldenflare - Skill DMG"
          },
          {
            "name": "Call Me By the Sun - Resonance Skill - Undying Sunlight: Strike DMG",
            "requiresResourceLabel": "权炳满"
          },
          {
            "name": "Call Me By the Sun - Resonance Skill - Undying Sunlight: Leap DMG",
            "requiresResourceLabel": "权炳满"
          },
          {
            "name": "Call Me By the Sun - Resonance Skill - Undying Sunlight: Plunge DMG",
            "requiresResourceLabel": "权炳满"
          },
          {
            "name": "Call Me By the Sun - Mid-air Dodge Counter: Undying Sunlight Strike DMG",
            "requiresResourceLabel": "权炳满"
          },
          {
            "name": "Engraved in Radiant Light - Thunder Rage DMG"
          }
        ],
        "combatStates": [
          {
            "label": "俯首之刻",
            "inactiveLabel": "未处于俯首之刻",
            "entry": "存在2层威慑时，长按共鸣解放可施放赫日威临并进入俯首之刻，持续7秒；期间仅能施放赫日威临·烈阳、赫日威临·不朽者之肃、闪避和空中攻击。",
            "options": [
              {
                "label": "俯首之刻",
                "valueLabel": "俯首之刻"
              }
            ],
            "idLabel": "俯首之刻"
          },
          {
            "label": "王之界域",
            "inactiveLabel": "未处于王之界域",
            "entry": "施放共鸣解放·赫日威临时展开，持续30秒。",
            "options": [
              {
                "label": "王之界域",
                "valueLabel": "王之界域"
              }
            ],
            "idLabel": "王之界域"
          }
        ],
        "buffs": [
          {
            "source": "共鸣回路·以众愿为冕",
            "label": "导电伤害加成",
            "trigger": "拥有以众愿为冕时",
            "excerpt": "以众愿为冕每层导电伤害加成提升15%",
            "desc": "以众愿为冕：每层使导电伤害加成提升15%，上限为1层；可由延奏技能、炽盛决意和共鸣链效果获得。共鸣解放·赫日威临·不朽者之肃结束时，清除自身全部的【以众愿为冕】。"
          },
          {
            "source": "延奏·不屈的战歌",
            "label": "全伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色全伤害加深15%",
            "desc": "下一位登场角色获得如下效果，持续14秒，若切换至其他角色则如下效果提前结束：全伤害加深15%。"
          }
        ],
        "chain": [
          {
            "name": "于焦壤中蒙垢",
            "desc": "·【以众愿为冕】每层使暴击伤害额外提升15%。·【以众愿为冕】上限提高至2层。·奥古斯塔施放变奏技能·灼金的巡行时，也可以获得1层【以众愿为冕】。·共鸣技能·不败恒阳·迅击、共鸣技能·不败恒阳·跃空、共鸣技能·不败恒阳·落袭免疫打断。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "拥有以众愿为冕时",
                "excerpt": "以众愿为冕每层暴击伤害额外提升15%"
              },
              {
                "label": "导电伤害加成",
                "trigger": "以众愿为冕达到第2层时",
                "excerpt": "1链解锁第2层以众愿为冕，导电伤害加成可额外提升15%"
              }
            ]
          },
          {
            "name": "于血戮中涤尘",
            "desc": "·【以众愿为冕】获得额外效果：每层使暴击提升20%。·奥古斯塔暴击高于100%时，每多出1%暴击，奥古斯塔暴击伤害提升2%，最高可提升100%暴击伤害。",
            "buffs": [
              {
                "label": "暴击",
                "trigger": "拥有以众愿为冕时",
                "excerpt": "以众愿为冕每层暴击提升20%"
              },
              {
                "label": "暴击伤害",
                "trigger": "暴击高于100%时",
                "excerpt": "暴击超过100%时转暴击伤害，上限100%",
                "desc": "奥古斯塔暴击高于100%时，每多出1%暴击，奥古斯塔暴击伤害提升2%，最高可提升100%暴击伤害。"
              }
            ]
          },
          {
            "name": "于朽腐中砺骨",
            "desc": "以下技能的伤害倍率提升25%：·重击·烁雷·后撤、闪避反击·烁雷·后撤、重击·烁雷·旋切、重击·烁雷·升拳。·共鸣技能·不败恒阳·落袭。·共鸣解放·赫日威临·烈阳、共鸣解放·赫日威临·不朽者之肃。",
            "buffs": [
              {
                "label": "烁雷与赫日威临倍率提升",
                "trigger": "默认",
                "excerpt": "烁雷、落袭和赫日威临相关技能伤害倍率提升25%"
              }
            ]
          },
          {
            "name": "于荣辉中孤行",
            "desc": "施放变奏技能·灼金的巡行时，队伍中的角色的攻击提升20%，持续30秒。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "施放变奏技能时",
                "excerpt": "释放灼金的巡行时，攻击提升20%"
              }
            ]
          },
          {
            "name": "于怒潮中卓立",
            "desc": "固有技能·荣誉的加护获得护盾量提升50%。"
          },
          {
            "name": "于耀光中刻名",
            "desc": "·【以众愿为冕】的上限提升至4层。·奥古斯塔暴击高于150%时，每多出1%暴击，奥古斯塔暴击伤害提升2%，最高可提升50%暴击伤害。·奥古斯塔施放重击·烁雷·旋切、重击·烁雷·升拳时，可以获得2层【以众愿为冕】，每1秒仅可通过于耀光中刻名的效果获得2层【以众愿为冕】。·施放重击·烁雷·旋切、重击·烁雷·升拳过程中，会在原地额外引发【怒霆】，造成两次奥古斯塔攻击100%的导电伤害，此次伤害为重击伤害。",
            "buffs": [
              {
                "label": "导电伤害加成",
                "trigger": "以众愿为冕达到第3-4层时",
                "excerpt": "6链解锁第3-4层以众愿为冕，导电伤害加成可额外提升30%"
              },
              {
                "label": "暴击伤害",
                "trigger": "以众愿为冕达到第3-4层时",
                "excerpt": "第3-4层以众愿为冕每层暴击伤害额外提升15%"
              },
              {
                "label": "暴击",
                "trigger": "以众愿为冕达到第3-4层时",
                "excerpt": "第3-4层以众愿为冕每层暴击提升20%"
              },
              {
                "label": "暴击伤害",
                "trigger": "暴击高于150%时",
                "excerpt": "暴击超过150%时额外转暴击伤害，上限50%",
                "desc": "奥古斯塔暴击高于150%时，每多出1%暴击，奥古斯塔暴击伤害提升2%，最高可提升50%暴击伤害。"
              }
            ]
          }
        ]
      }
    }
  }
});
