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
      sequence: "チェーン{value}",
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
    damageSplit: {
      damage: "分割ダメージ：",
      expected: "期待値分割："
    },
    hints: {
      res: {
        aria: "属性耐性の参考表。基礎耐性は全属性に適用されます。対応耐性は対象自身の属性に対応する属性耐性です。コンテンツに特定属性の耐性上昇が明記されている場合、その属性耐性に記載値を加算します。",
        intro: "対象の属性耐性の参考値（現時点の検証結果）",
        definition: "基礎耐性は全属性に適用され、対応耐性は対象自身の属性に対応する属性耐性です。",
        headers: { mode: "コンテンツ", base: "基礎耐性", matching: "対応耐性" },
        modes: {
          openWorld: "Open World",
          tacticalHologram: "Tactical Hologram",
          towerOfAdversity: "Tower of Adversity",
          endstateMatrix: "Endstate Matrix",
          whimperingWastesEndless: "Whimpering Wastes · Endless",
          whimperingWastesHigh: "Whimpering Wastes · 9–11層"
        },
        note: "コンテンツに特定属性の耐性上昇が明記されている場合、その属性耐性に記載値を加算します。例：Whimpering Wastesに「気動属性耐性20%上昇」と記載されている状態で気動属性攻撃を行う場合、基礎耐性は「20% + 20% = 40%」、対応耐性は「50% + 20% = 70%」です。",
        source: "現在の対象に合わせて入力してください。"
      },
      defShred: "この入力欄は防御力ダウン合計を表示・編集します。バフなどの自動ソースもリアルタイムで含まれます。",
      defShredWithHavocBane: "この入力欄は虚滅効果による{value}%を含む防御力ダウン合計を表示・編集します。"
    }
  }
});
