"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "cartethyia": {
        "name": "Cartethyia",
        "resources": [
          {
            "label": "决意"
          }
        ],
        "skills": [
          {
            "name": "Sword to Carve My Forms - Stage 1 DMG"
          },
          {
            "name": "Sword to Carve My Forms - Stage 2 DMG"
          },
          {
            "name": "Sword to Carve My Forms - Stage 3 DMG"
          },
          {
            "name": "Sword to Carve My Forms - Stage 4 DMG"
          },
          {
            "name": "Sword to Carve My Forms - Heavy Attack DMG"
          },
          {
            "name": "Sword to Carve My Forms - Mid-air Attack 1 Sword Shadow Recalled"
          },
          {
            "name": "Sword to Carve My Forms - Mid-air Attack 1 Sword Shadow Recalled"
          },
          {
            "name": "Sword to Carve My Forms - Mid-air Attack 2 Sword Shadows Recalled"
          },
          {
            "name": "Sword to Carve My Forms - Mid-air Attack 3 Sword Shadows Recalled"
          },
          {
            "name": "Sword to Carve My Forms - Dodge Counter DMG"
          },
          {
            "name": "Sword to Bear Their Names - Skill DMG"
          },
          {
            "name": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG",
            "requiresResourceLabel": "120决意"
          },
          {
            "name": "Sword to Mark Tide's Trace - Sword to Mark Tide's Trace DMG"
          },
          {
            "name": "Sword to Mark Tide's Trace - Sword to Call for Freedom DMG"
          },
          {
            "name": "Tempest - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Tempest - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Tempest - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Tempest - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Tempest - Basic Attack Stage 5 DMG"
          },
          {
            "name": "Tempest - Heavy Attack DMG"
          },
          {
            "name": "Tempest - Enhanced Heavy Attack DMG"
          },
          {
            "name": "Tempest - Upward Cut DMG"
          },
          {
            "name": "Tempest - Mid-air Attack 1 DMG"
          },
          {
            "name": "Tempest - Mid-air Attack 2 DMG"
          },
          {
            "name": "Tempest - Mid-air Attack 3 DMG"
          },
          {
            "name": "Tempest - Dodge Counter DMG"
          },
          {
            "name": "Tempest - Sword to Answer Waves' Call DMG"
          },
          {
            "name": "Tempest - May Tempest Break the Tides DMG"
          }
        ],
        "combatStates": [
          {
            "label": "当前形态",
            "entry": "施放共鸣解放·听骑士从心祈愿后，卡提希娅化身芙露德莉斯并进入显化，持续12秒；决意满120点时可施放看潮怒风哮之刃。",
            "options": [
              {
                "label": "卡提希娅",
                "valueLabel": "卡提希娅"
              },
              {
                "label": "芙露德莉斯",
                "valueLabel": "芙露德莉斯"
              }
            ],
            "idLabel": "形态"
          },
          {
            "label": "权柄",
            "inactiveLabel": "未持有权柄",
            "entry": "卡提希娅施放空中攻击后回收场上的剑之影，根据回收的剑之影种类获得人权之心、神权之意、异权之力。",
            "options": [
              {
                "label": "人权之心",
                "valueLabel": "人权之心"
              },
              {
                "label": "神权之意",
                "valueLabel": "神权之意"
              },
              {
                "label": "异权之力",
                "valueLabel": "异权之力"
              }
            ],
            "idLabel": "权柄"
          }
        ],
        "buffs": [
          {
            "source": "固有·以风刻痕留蚀",
            "label": "伤害加深",
            "trigger": "目标拥有风蚀效应时",
            "excerpt": "目标有1层以上风蚀效应时，伤害加深30%",
            "desc": "当目标拥有1到3层【风蚀效应】时，【卡提希娅】与【芙露德莉斯】对其造成的伤害提升30%。"
          },
          {
            "source": "固有·以风刻痕留蚀",
            "label": "伤害加深",
            "trigger": "目标风蚀效应达到4层时",
            "excerpt": "目标4层风蚀效应时，额外伤害加深10%",
            "desc": "当目标拥有3层以上【风蚀效应】时，每层【风蚀效应】使【卡提希娅】与【芙露德莉斯】对其造成的伤害额外提升10%，该效果最多可叠加3层。"
          },
          {
            "source": "固有·以风刻痕留蚀",
            "label": "伤害加深",
            "trigger": "目标风蚀效应达到5层时",
            "excerpt": "目标5层风蚀效应时，额外伤害加深10%",
            "desc": "当目标拥有3层以上【风蚀效应】时，每层【风蚀效应】使【卡提希娅】与【芙露德莉斯】对其造成的伤害额外提升10%，该效果最多可叠加3层。"
          },
          {
            "source": "固有·以风刻痕留蚀",
            "label": "伤害加深",
            "trigger": "目标风蚀效应达到6层时",
            "excerpt": "目标6层以上风蚀效应时，额外伤害加深10%",
            "desc": "当目标拥有3层以上【风蚀效应】时，每层【风蚀效应】使【卡提希娅】与【芙露德莉斯】对其造成的伤害额外提升10%，该效果最多可叠加3层。"
          },
          {
            "source": "共鸣解放·神权之意",
            "label": "风蚀效应伤害加深",
            "trigger": "芙露德莉斯形态且拥有神权之意时",
            "excerpt": "芙露德莉斯形态且拥有神权之意时，目标受到风蚀效应伤害加深50%",
            "desc": "当【芙露德莉斯】拥有【神权之意】和【显化】状态时，【芙露德莉斯】自身一定范围内，目标【风蚀效应】触发的间隔减少50%，并使目标受到的【风蚀效应】伤害加深50%。"
          },
          {
            "source": "共鸣解放·看潮怒风哮之刃",
            "label": "看潮怒风哮之刃伤害加深",
            "trigger": "目标拥有1层风蚀效应时",
            "excerpt": "看潮怒风哮之刃命中风蚀目标时，每层伤害加深20%",
            "desc": "造成伤害时目标每拥有1层【风蚀效应】，对目标造成的伤害加深20%，至多5层，命中后会清空目标拥有的【风蚀效应】。"
          },
          {
            "source": "共鸣解放·看潮怒风哮之刃",
            "label": "看潮怒风哮之刃伤害加深",
            "trigger": "目标拥有2层风蚀效应时",
            "excerpt": "看潮怒风哮之刃命中2层风蚀目标时，额外伤害加深20%",
            "desc": "造成伤害时目标每拥有1层【风蚀效应】，对目标造成的伤害加深20%，至多5层，命中后会清空目标拥有的【风蚀效应】。"
          },
          {
            "source": "共鸣解放·看潮怒风哮之刃",
            "label": "看潮怒风哮之刃伤害加深",
            "trigger": "目标拥有3层风蚀效应时",
            "excerpt": "看潮怒风哮之刃命中3层风蚀目标时，额外伤害加深20%",
            "desc": "造成伤害时目标每拥有1层【风蚀效应】，对目标造成的伤害加深20%，至多5层，命中后会清空目标拥有的【风蚀效应】。"
          },
          {
            "source": "共鸣解放·看潮怒风哮之刃",
            "label": "看潮怒风哮之刃伤害加深",
            "trigger": "目标拥有4层风蚀效应时",
            "excerpt": "看潮怒风哮之刃命中4层风蚀目标时，额外伤害加深20%",
            "desc": "造成伤害时目标每拥有1层【风蚀效应】，对目标造成的伤害加深20%，至多5层，命中后会清空目标拥有的【风蚀效应】。"
          },
          {
            "source": "共鸣解放·看潮怒风哮之刃",
            "label": "看潮怒风哮之刃伤害加深",
            "trigger": "目标拥有5层风蚀效应时",
            "excerpt": "看潮怒风哮之刃命中5层以上风蚀目标时，额外伤害加深20%",
            "desc": "造成伤害时目标每拥有1层【风蚀效应】，对目标造成的伤害加深20%，至多5层，命中后会清空目标拥有的【风蚀效应】。"
          },
          {
            "source": "延奏·听风潮为你祝颂",
            "label": "气动伤害加深",
            "trigger": "释放延奏技能后且目标拥有异常效应",
            "excerpt": "登场角色攻击异常效应目标时，气动伤害加深17.5%",
            "desc": "队伍中除【卡提希娅】、【芙露德莉斯】以外的登场角色对拥有【异常效应】的目标造成的气动伤害加深17.5%，持续20秒。"
          }
        ],
        "chain": [
          {
            "name": "因命运戴上冠冕",
            "desc": "【卡提希娅】、【芙露德莉斯】自身技能直接造成的伤害击败被附加【风蚀效应】状态的目标后，获得【集意】状态，持续10秒。 【集意】状态下保留击败目标被附加【风蚀效应】的最高层数，自身下一次技能直接造成的伤害立即为命中目标附加该层数，最高可叠加至当前目标的【风蚀效应】层数上限，同时清除【集意】状态，清除【集意】状态后进入冷却时间1秒。 【芙露德莉斯】每积攒【决意】达到30、60、90、120时，【芙露德莉斯】的暴击伤害提升25%，持续15秒，最多可叠加4层，每次叠加时不刷新持续时间，施放共鸣解放·看潮怒风哮之刃后会清除该暴击伤害提升效果。",
            "buffs": [
              {
                "label": "暴击伤害",
                "trigger": "芙露德莉斯决意达到阈值时",
                "excerpt": "决意达到30/60/90/120时，每层暴击伤害提升25%"
              }
            ]
          },
          {
            "name": "听风潮斩断利刃",
            "desc": "施放共鸣解放·听骑士从心祈愿后，使自身一定范围内的目标【风蚀效应】层数上限提升3层，自身技能下一次直接造成伤害后，对自身一定范围内的目标附加3层【风蚀效应】，并立刻结算1次目标身上的【风蚀效应】效果，此次结算不消耗【风蚀效应】层数。【卡提希娅】普攻、重击、闪避反击、变奏技能倍率提升50%，空中攻击倍率提升200%。施放空中攻击·卡提希娅后，每回收1种【剑之影】使共鸣技能·卡提希娅的冷却时间减少1秒。",
            "buffs": [
              {
                "label": "风蚀效应层数上限",
                "effects": [
                  "windErosion"
                ],
                "trigger": "施放听骑士从心祈愿后",
                "excerpt": "释放听骑士从心祈愿后，目标风蚀效应层数上限提升3层"
              },
              {
                "label": "卡提希娅技能倍率提升",
                "trigger": "默认",
                "excerpt": "卡提希娅普攻、重击、闪避反击、变奏技能伤害倍率提升50%"
              },
              {
                "label": "空中攻击倍率提升",
                "trigger": "默认",
                "excerpt": "空中攻击伤害倍率提升200%"
              }
            ]
          },
          {
            "name": "以自身束悬高塔",
            "desc": "【芙露德莉斯】的普攻·芙露德莉斯第5段，空中攻击·芙露德莉斯第2段，强化重击·芙露德莉斯，共鸣技能·凭风斩浪破敌会为命中目标附加2层【风蚀效应】。共鸣解放·看潮怒风哮之刃的伤害倍率提升100%。",
            "buffs": [
              {
                "label": "看潮怒风哮之刃倍率提升",
                "trigger": "默认",
                "excerpt": "看潮怒风哮之刃伤害倍率提升100%"
              }
            ]
          },
          {
            "name": "为拯救舍弃其身",
            "desc": "队伍中的角色为目标附加【虚湮效应】、【聚爆效应】、【光噪效应】、【电磁效应】、【霜渐效应】、【风蚀效应】后，使队伍中所有角色全属性伤害加成提升20%，持续20秒。",
            "buffs": [
              {
                "label": "全属性伤害加成",
                "trigger": "附加异常效应后",
                "excerpt": "队伍角色附加异常效应后，全属性伤害加成提升20%"
              }
            ]
          },
          {
            "name": "将烈风重塑希望",
            "desc": "【卡提希娅】或【芙露德莉斯】受到致命伤害时，此次伤害不会使【卡提希娅】或【芙露德莉斯】倒下，并获得【卡提希娅】20%生命上限的护盾，持续10秒，该效果每10分钟可触发1次。施放共鸣解放·听骑士从心祈愿消耗的自身生命值降至生命上限的25%。"
          },
          {
            "name": "尽一线挣扎自由",
            "desc": "施放共鸣解放·看潮怒风哮之刃对命中的目标附加【风蚀效应】至层数上限，且施放共鸣解放·看潮怒风哮之刃命中目标后，不再清空目标拥有的【风蚀效应】。 施放变奏技能·此剑，为潮水的过去、变奏技能·此剑，为自由的未来、共鸣解放·听骑士从心祈愿、共鸣解放·看潮怒风哮之刃后，30秒内，队伍中的角色对【风蚀效应】层数到达上限的目标再次附加【风蚀效应】时，立即结算一次【风蚀效应】。目标受到【芙露德莉斯】的伤害提升40%。",
            "buffs": [
              {
                "label": "芙露德莉斯伤害易伤",
                "trigger": "目标受到芙露德莉斯伤害时",
                "excerpt": "目标受到芙露德莉斯伤害提升40%"
              }
            ]
          }
        ]
      }
    }
  }
});
