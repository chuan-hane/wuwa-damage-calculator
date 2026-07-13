"use strict";

window.WUWA_LANGUAGES.extend("ko", {
  "strings": {
    "app": {
      "title": "명조 피해 계산기",
      "subtitle": "공명자 스탯 · 독립 곱연산 · 실제 전투 조건 판정"
    },
    "common": {
      "none": "-",
      "empty": "비어 있음",
      "unselected": "선택 안 됨",
      "unselectedLead": "메인 에코 없음",
      "searchCharacter": "공명자 검색...",
      "searchWeapon": "무기 검색...",
      "weaponFallback": "무",
      "emptyFallback": "-",
      "signature": "전용",
      "levelShort": "Lv. {value}",
      "rank": "랭크 {value}",
      "sequence": "체인{value}",
      "cost": "Cost",
      "custom": "사용자 지정",
      "target": "목표",
      "more": "더보기",
      "collapse": "접기",
      "reset": "초기화",
      "originalText": "원문",
      "seconds": "초",
      "stack": "스택",
      "stacks": "스택"
    },
    "topbar": {
      "githubAria": "GitHub 저장소 열기",
      "githubLabel": "GitHub",
      "languageAria": "언어"
    },
    "damageModes": {
      "crit": "크리티컬",
      "expected": "기댓값",
      "normal": "비크리티컬"
    },
    "damageSplit": {
      "damage": "분할 피해: ",
      "expected": "기댓값 분할: "
    },
    "hints": {
      "res": {
        "aria": "속성 내성 참고표. 기본 내성은 모든 속성에 적용됩니다. 대응 내성은 대상 고유 속성에 대응하는 속성 내성입니다. 콘텐츠에 특정 속성 내성 증가가 명시되어 있으면 해당 속성 내성에 표기된 수치를 추가합니다.",
        "intro": "대상 속성 내성 참고값(현재 테스트 결과)",
        "definition": "기본 내성은 모든 속성에 적용되며, 대응 내성은 대상 고유 속성에 대응하는 속성 내성입니다.",
        "headers": { "mode": "콘텐츠", "base": "기본 내성", "matching": "대응 내성" },
        "modes": {
          "openWorld": "Open World",
          "tacticalHologram": "Tactical Hologram",
          "towerOfAdversity": "Tower of Adversity",
          "endstateMatrix": "Endstate Matrix",
          "whimperingWastesEndless": "Whimpering Wastes · Endless",
          "whimperingWastesHigh": "Whimpering Wastes · 9–11층"
        },
        "note": "콘텐츠에 특정 속성 내성 증가가 명시되어 있으면 해당 속성 내성에 표기된 수치를 추가합니다. 예: Whimpering Wastes에 ‘기류 속성 내성 20% 증가’가 표시된 상태에서 기류 속성 공격을 사용하면 기본 내성은 ‘20% + 20% = 40%’, 대응 내성은 ‘50% + 20% = 70%’입니다.",
        "source": "현재 대상에 맞춰 직접 입력하세요."
      },
      "defShred": "이 입력값은 총 방어 감소를 표시하고 수정합니다. 버프 같은 자동 출처가 실시간으로 포함됩니다.",
      "defShredWithHavocBane": "이 입력값은 인멸 재앙의 {value}%를 포함한 총 방어 감소를 표시하고 수정합니다."
    }
  }
});
