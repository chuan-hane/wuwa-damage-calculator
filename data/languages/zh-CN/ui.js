"use strict";

window.WUWA_LANGUAGES.extend("zh-CN", {
  strings: {
    app: {
      title: "wuwa伤害计算器",
      subtitle: "角色面板 · 乘区去混用 · 真实前置判定"
    },
    common: {
      none: "—",
      empty: "空（不带人）",
      unselected: "未选择",
      unselectedLead: "未选择首位",
      searchCharacter: "搜索角色…",
      searchWeapon: "搜索武器…",
      weaponFallback: "武",
      emptyFallback: "空",
      signature: "专武",
      levelShort: "{value}级",
      rank: "{value}阶",
      sequence: "{value}链",
      cost: "Cost",
      custom: "自定义",
      target: "目标",
      more: "更多",
      collapse: "收起",
      reset: "重置",
      originalText: "原文",
      seconds: "秒",
      stack: "层",
      stacks: "层"
    },
    topbar: {
      githubAria: "打开 GitHub 项目主页",
      githubLabel: "GitHub",
      languageAria: "语言切换"
    },
    damageModes: {
      crit: "暴击",
      expected: "期望",
      normal: "非暴"
    },
    damageSplit: {
      damage: "分段伤害：",
      expected: "期望分段："
    },
    targets: {
      section: "玩法",
      mode: "类型",
      target: "目标",
      attribute: "目标属性",
      attributeNone: "无属性",
      cost: "目标 Cost",
      season: "期数",
      current: "当前",
      enemyLevel: "敌方等级",
      resistance: "{element}抗性%",
      fullResistance: "完整六属性抗性",
      resetAutomatic: "恢复自动目标值",
      seasonFallback: "第 {value} 期",
      floor: "{value}层",
      endlessFloor: "无尽层",
      wave: "波次 {value}",
      towerFloor: "塔区 / 层数",
      floorLabel: "层数",
      waveLabel: "波次",
      buff: "玩法 Buff",
      token: "信物",
      tokenGold: "金色信物",
      tokenPurple: "紫色信物",
      enhancement: "强化",
      buffUnselected: "未选择",
      stageEffects: "自动生效",
      buffValue: "{value}%",
      gameplayBuffSource: "玩法",
      summary: "{character} · {element} → 目标 {target} {level} · {element}抗性{resistance}%",
      updatedAt: "目标数据更新于 {date}"
    },
    hints: {
      defShred: "输入框显示并编辑当前总减防；Buff 等自动来源会实时折入。",
      defShredWithHavocBane: "输入框显示并编辑当前总减防；其中虚湮{value}%。"
    }
  }
});
