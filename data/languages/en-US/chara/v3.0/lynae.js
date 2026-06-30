"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lynae": {
        "name": "Lynae",
        "resources": [
          {
            "label": "溢彩"
          },
          {
            "label": "本色"
          },
          {
            "label": "流光"
          }
        ],
        "skills": [
          {
            "name": "Chroma Drift - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Chroma Drift - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Chroma Drift - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Chroma Drift - Dodge Counter DMG"
          },
          {
            "name": "Chroma Drift - Mid-air Attack DMG"
          },
          {
            "name": "Chroma Drift - Basic Attack - Spark Collision Lv. 1 DMG",
            "requiresResourceLabel": "120点溢彩"
          },
          {
            "name": "Chroma Drift - Basic Attack - Spark Collision Lv. 2 DMG",
            "requiresResourceLabel": "120点溢彩"
          },
          {
            "name": "Chroma Drift - Basic Attack - Spark Collision Lv. 3 DMG",
            "requiresResourceLabel": "120点溢彩"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 5 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Dodge Counter"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Ground Heavy Attack DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Graffiti Blast DMG"
          },
          {
            "name": "Chroma Drift - Mid-air Attack DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Mid-air Heavy Attack DMG"
          },
          {
            "name": "Lynae-Style Palettes - Lynae-Style Palettes DMG"
          },
          {
            "name": "Lynae-Style Palettes - Additive Color DMG"
          },
          {
            "name": "Prismatic Overblast - Prismatic Overblast DMG"
          },
          {
            "name": "Prismatic Overblast - Basic Attack - To a Vivid Tomorrow! DMG",
            "requiresResourceLabel": "爆炸喷涂后"
          },
          {
            "name": "Time to Show Some Colors! - Time to Show Some Colors! DMG"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Iridescent Splash DMG",
            "requiresResourceLabel": "3点本色"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Visual Impact DMG",
            "requiresResourceLabel": "3点本色"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Polychrome Leap 1",
            "requiresResourceLabel": "1/3流光上限"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Polychrome Leap 2",
            "requiresResourceLabel": "1/3流光上限"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Polychrome Leap 3",
            "requiresResourceLabel": "1/3流光上限"
          },
          {
            "name": "Chromaticity Modeling - Tune Rupture Response - Spectral Analysis DMG"
          }
        ],
        "combatStates": [
          {
            "label": "共鸣模态",
            "inactiveLabel": "未确认共鸣模态",
            "entry": "琳奈拥有共鸣模态·震谐和共鸣模态·集谐两种形态，可在两种形态间切换。",
            "options": [
              {
                "label": "震谐",
                "valueLabel": "共鸣模态·震谐"
              },
              {
                "label": "集谐",
                "valueLabel": "共鸣模态·集谐"
              }
            ],
            "idLabel": "共鸣模态"
          },
          {
            "label": "战斗阶段",
            "inactiveLabel": "未确认战斗阶段",
            "entry": "琳奈初始处于光学取样阶段；施放普攻·灵感碰撞后进入绮彩巡游，退出绮彩巡游时清除流光和本色。",
            "options": [
              {
                "label": "光学取样",
                "valueLabel": "光学取样"
              },
              {
                "label": "绮彩巡游",
                "valueLabel": "绮彩巡游"
              }
            ],
            "idLabel": "战斗阶段"
          },
          {
            "label": "目标震谐状态",
            "inactiveLabel": "目标无震谐状态",
            "entry": "共鸣模态·震谐下，光致变染会为目标附加【震谐·偏移】；队伍对偏移目标造成谐度破坏伤害并使其进入【震谐·干涉】后，琳奈可触发震谐响应·光谱解析。",
            "options": [
              {
                "label": "震谐·偏移",
                "valueLabel": "目标震谐·偏移"
              },
              {
                "label": "震谐·干涉",
                "valueLabel": "目标震谐·干涉"
              }
            ],
            "idLabel": "目标震谐状态"
          },
          {
            "label": "目标集谐状态",
            "inactiveLabel": "目标无集谐状态",
            "entry": "共鸣模态·集谐下，光致变染会为目标附加【集谐·偏移】；队伍对偏移目标造成谐度破坏伤害后可形成【集谐·干涉】层数。",
            "options": [
              {
                "label": "集谐·偏移",
                "valueLabel": "目标集谐·偏移"
              },
              {
                "label": "集谐·干涉",
                "valueLabel": "目标集谐·干涉"
              }
            ],
            "idLabel": "目标集谐状态"
          }
        ],
        "buffs": [
          {
            "source": "固有·《自适应光学在生活中的实际应用》",
            "label": "衍射伤害加成",
            "trigger": "施放变奏技能时",
            "excerpt": "施放变奏技能时，衍射伤害加成提升25%",
            "desc": "施放变奏技能·来点儿颜色瞧瞧时，9秒内自身的衍射伤害加成提升25%。"
          },
          {
            "source": "共鸣解放·爆炸喷涂",
            "label": "最终伤害提升",
            "trigger": "施放共鸣解放时",
            "excerpt": "释放爆炸喷涂时，队伍造成的伤害提升24%",
            "desc": "施放时使附近队伍中所有角色造成的伤害提升24%，持续30秒。"
          },
          {
            "source": "共鸣回路·普攻·视觉冲击",
            "label": "谐度破坏增幅",
            "trigger": "施放普攻·视觉冲击时",
            "excerpt": "释放普攻·视觉冲击时，谐度破坏增幅提升40点",
            "desc": "普攻·视觉冲击施放时消耗3点【本色】，并使附近队伍中所有角色的谐度破坏增幅提升40点，持续30秒。"
          },
          {
            "source": "谐度破坏·光谱解析",
            "label": "最终伤害提升",
            "trigger": "响应集谐·干涉时",
            "excerpt": "响应集谐·干涉时，每层按谐度破坏增幅提升最终伤害",
            "desc": "响应【集谐·干涉】：目标每有一层【集谐·干涉】效果，琳奈自身的每点谐度破坏增幅会使自身对该目标造成的最终伤害提升0.12%。琳奈在编队中时，目标的【集谐·干涉】效果的层数上限增加1层。"
          },
          {
            "source": "延奏·有空一起兜风！",
            "label": "全伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色全伤害加深15%",
            "desc": "下一个登场的角色全伤害加深15%，共鸣解放伤害加深25%，持续14秒，若切换至其他角色则该效果提前结束。"
          },
          {
            "source": "延奏·有空一起兜风！",
            "label": "共鸣解放伤害加深",
            "trigger": "释放延奏技能后",
            "excerpt": "下一位登场角色共鸣解放伤害加深25%",
            "desc": "下一个登场的角色全伤害加深15%，共鸣解放伤害加深25%，持续14秒，若切换至其他角色则该效果提前结束。"
          }
        ],
        "chain": [
          {
            "name": "应是肆意挥洒的年华",
            "desc": "普攻·幻光折跃的伤害倍率提升120%。颜料的持续时间提升100%，每6秒将处于颜料范围内的敌人向颜料中心进行一次牵引。施放普攻·幻光折跃和普攻·视觉冲击期间免疫打断。「光学取样」阶段期间，处于非战斗状态大于2秒时，回复120点【溢彩】，每2秒触发一次。",
            "buffs": [
              {
                "label": "幻光折跃倍率提升",
                "trigger": "默认",
                "excerpt": "普攻·幻光折跃伤害倍率提升120%"
              }
            ]
          },
          {
            "name": "驶向光彩交绘的彼方",
            "desc": "全伤害加深25%。延奏技能额外获得以下效果：施放延奏技能时，使下一个登场的角色全伤害加深25%，持续14秒，若切换至其他角色则该效果提前结束。",
            "buffs": [
              {
                "label": "全伤害加深",
                "trigger": "默认",
                "excerpt": "全伤害加深25%"
              },
              {
                "label": "全伤害加深",
                "trigger": "释放延奏技能后",
                "excerpt": "释放延奏后，下一位登场角色全伤害额外加深25%"
              }
            ]
          },
          {
            "name": "为一瞬的绚烂",
            "desc": "普攻·视觉冲击和普攻·虹彩飞溅的伤害倍率提升90%。战斗状态期间，【流光】大于等于120点时，每1秒获得一层预调色，上限25层。每层预调色使加色混合的衍射伤害加成提升55%。施放加色混合期间不会获得预调色，加色混合结束时，移除所有预调色。【流光】小于120点时，每0.5秒失去一层预调色。非战斗状态期间，【流光】大于等于120点时，每0.5秒获取一层预调色，【流光】小于120点时，每1秒失去一层预调色。",
            "buffs": [
              {
                "label": "指定普攻倍率提升",
                "trigger": "默认",
                "excerpt": "普攻·视觉冲击和虹彩飞溅伤害倍率提升90%"
              },
              {
                "label": "衍射伤害加成",
                "trigger": "流光达到120点后",
                "excerpt": "流光达到120点后，每层预调色使加色混合衍射伤害加成提升55%"
              }
            ]
          },
          {
            "name": "灰影随风呼啸而去",
            "desc": "攻击提升20%。",
            "buffs": [
              {
                "label": "攻击",
                "trigger": "默认",
                "excerpt": "攻击提升20%"
              }
            ]
          },
          {
            "name": "不羁未来的映想",
            "desc": "共鸣解放·爆炸喷涂的伤害倍率提升70%。",
            "buffs": [
              {
                "label": "爆炸喷涂倍率提升",
                "trigger": "默认",
                "excerpt": "爆炸喷涂伤害倍率提升70%"
              }
            ]
          },
          {
            "name": "以「我」为名的真彩",
            "desc": "每次施放绮彩巡游·跃动集束或绮彩巡游·空中重击时，为自身叠加1层心之彩，最多叠加3层，每层心之彩使目标受到普攻·虹彩飞溅和普攻·视觉冲击的伤害提升30%。施放普攻·虹彩飞溅或普攻·视觉冲击后，移除所有心之彩。施放普攻·幻光折跃时，刷新绮彩巡游·空中重击的可施放次数。施放绮彩巡游·空中重击期间免疫打断且受到伤害降低30%。施放延奏技能·有空一起兜风！时，琳奈不会退出绮彩巡游状态。【流光】上限由120提升至360。且【流光】达到上限时，轮滑速度进一步提升。施放变奏技能时，若处于绮彩巡游状态，回复120点【流光】。",
            "buffs": [
              {
                "label": "指定普攻易伤",
                "trigger": "施放跃动集束或空中重击后",
                "excerpt": "每层心之彩使目标受到虹彩飞溅和视觉冲击伤害提升30%"
              }
            ]
          }
        ]
      }
    }
  }
});
