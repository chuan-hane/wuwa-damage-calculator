"use strict";

window.WUWA_LANGUAGES.extend("ja-JP", {
  strings: {
    app: {
      title: "鳴潮 / Wuthering Waves Damage Calculator",
      subtitle: "共鳴者ステータス・独立乗区・実戦条件判定"
    },
    common: {
      none: "-",
      empty: "空き",
      unselected: "未選択",
      unselectedLead: "メイン音骸なし",
      searchCharacter: "共鳴者を検索...",
      searchWeapon: "武器を検索...",
      weaponFallback: "武",
      emptyFallback: "-",
      signature: "モチーフ",
      levelShort: "Lv.{value}",
      rank: "ランク{value}",
      sequence: "共鳴チェーン{value}",
      cost: "Cost",
      custom: "カスタム",
      target: "目標",
      more: "もっと見る",
      collapse: "折りたたむ",
      reset: "リセット",
      originalText: "原文",
      seconds: "秒",
      stack: "スタック",
      stacks: "スタック"
    },
    topbar: {
      githubAria: "GitHub リポジトリを開く",
      githubLabel: "GitHub",
      languageAria: "言語"
    },
    damageModes: {
      crit: "クリティカル",
      expected: "期待値",
      normal: "非クリティカル"
    },
    hints: {
      res: "フィールド上の敵は通常、全属性に10%の基礎耐性を持ちます。特定属性耐性が明記されている敵は、その属性にさらに30%耐性を加算します。",
      defShred: "この入力欄は防御力ダウン合計を表示・編集します。バフなどの自動ソースもリアルタイムで含まれます。",
      defShredWithHavocBane: "この入力欄は虚滅効果による{value}%を含む防御力ダウン合計を表示・編集します。"
    }
  }
});
