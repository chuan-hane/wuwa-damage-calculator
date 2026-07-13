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
    hints: {
      res: {
        aria: "属性抗性参考表。基础抗性为全属性抗性，对应抗性为目标自身属性的对应属性抗性。大世界基础抗性10%对应抗性40%，全息基础抗性10%对应抗性80%，深塔基础抗性20%对应抗性60%，矩阵基础抗性20%对应抗性40%，海墟无尽和9至11层基础抗性20%对应抗性50%。若玩法明确标注某种属性抗性提高，则该属性的抗性需要额外提高对应数值。",
        intro: "目标属性抗性参考（当前测试结果）",
        definition: "基础抗性为全属性抗性；对应抗性为目标自身属性的对应属性抗性。",
        headers: { mode: "玩法", base: "基础抗性", matching: "对应抗性" },
        modes: {
          openWorld: "大世界",
          tacticalHologram: "全息",
          towerOfAdversity: "深塔",
          endstateMatrix: "矩阵",
          whimperingWastesEndless: "海墟·无尽",
          whimperingWastesHigh: "海墟·9–11层"
        },
        note: "若玩法明确标注某种属性抗性提高，则该属性的抗性需要额外提高对应数值。如海墟标注“气动属性抗性提高20%”，此时使用气动属性攻击，则基础抗性为“20% + 20% = 40%”，对应抗性为“50% + 20% = 70%”。",
        source: "请按当前目标手动填写。"
      },
      defShred: "输入框显示并编辑当前总减防；Buff 等自动来源会实时折入。",
      defShredWithHavocBane: "输入框显示并编辑当前总减防；其中虚湮{value}%。"
    }
  }
});
