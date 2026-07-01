"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "zhezhi": {
        "name": "Zhezhi",
        "skills": [
          {
            "name": "Dimming Brush - Stage 1 DMG"
          },
          {
            "name": "Dimming Brush - Stage 2 DMG"
          },
          {
            "name": "Dimming Brush - Stage 3 DMG"
          },
          {
            "name": "Dimming Brush - HA DMG"
          },
          {
            "name": "Dimming Brush - Mid-air Attack DMG"
          },
          {
            "name": "Dimming Brush - Dodge Counter DMG"
          },
          {
            "name": "Manifestation - Press DMG"
          },
          {
            "name": "Manifestation - Hold DMG"
          },
          {
            "name": "Manifestation - Mid-air Press DMG"
          },
          {
            "name": "Living Canvas - Inklit Spirit DMG"
          },
          {
            "name": "Radiant Ruin - DMG"
          },
          {
            "name": "Ink and Wash - HA - Conjuration DMG"
          },
          {
            "name": "Ink and Wash - Stroke of Genius DMG"
          },
          {
            "name": "Ink and Wash - Creation's Zenith DMG"
          },
          {
            "name": "Living Canvas - Sequence 5 Extra Inklit Spirit DMG",
            "requiresResourceLabel": "resource_gate_1"
          },
          {
            "name": "Ink and Wash - Creation's Zenith DMG",
            "requiresResourceLabel": "resource_gate_2"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Calligrapher's Touch",
            "label": "ATK",
            "trigger": "After casting Ink and Wash - Stroke of Genius DMG / Ink and Wash - Creation's Zenith DMG",
            "excerpt": "ATK +18% per stack",
            "desc": "ATK +18% per stack"
          },
          {
            "source": "Forte Circuit: Ink and Wash",
            "label": "Basic Attack DMG Bonus",
            "trigger": "After casting Ink and Wash - Creation's Zenith DMG",
            "excerpt": "Basic Attack DMG Bonus +18%",
            "desc": "Basic Attack DMG Bonus +18%"
          },
          {
            "source": "Outro Skill: Carve and Draw",
            "label": "DMG Increase",
            "trigger": "Default",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Carve and Draw",
            "label": "Resonance Skill DMG Increase",
            "trigger": "Default",
            "excerpt": "Resonance Skill DMG Increase +25%",
            "desc": "Resonance Skill DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "Brushwork's Finish",
            "desc": "Casting Resonance Skill Creation's Zenith restores 15 Resonance Energy and increases Crit. Rate by 10% for 27s.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Ink and Wash - Creation's Zenith DMG",
                "excerpt": "Crit. Rate +10%"
              }
            ]
          },
          {
            "name": "Vivid Strokes",
            "desc": "Max Inklit Spirits summoned by Resonance Liberation Living Canvas increases by 6."
          },
          {
            "name": "Reflection's Grace",
            "desc": "Casting Resonance Skill Manifestation, Resonance Skill Stroke of Genius, or Resonance Skill Creation's Zenith increases ATK by 15% for 27s, stacking up to 3 time(s).",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Manifestation - Press DMG / Manifestation - Hold DMG / Manifestation - Mid-air Press DMG / Ink and Wash - Stroke of Genius DMG / Ink and Wash - Creation's Zenith DMG",
                "excerpt": "ATK +45% per stack"
              }
            ]
          },
          {
            "name": "Hue's Spectrum",
            "desc": "Casting Resonance Liberation Living Canvas increases ATK of Resonators on the team 20% for 30s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "Default",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Composition's Clue",
            "desc": "For every 3 Inklit Spirits summoned by Resonance Liberation Living Canvas, 1 extra Inklit Spirit is summoned to perform a Coordinated Attack, dealing DMG equal to 140% of Inklit Spirit's DMG, considered as Basic Attack DMG. This damage dealt will not further summon Inklit Spirit."
          },
          {
            "name": "Infinite Legacy",
            "desc": "Casting Resonance Skill Stroke of Genius or Resonance Skill Creation's Zenith summons an extra Ivory Herald to deal DMG equal to 120% of Resonance Skill Stroke of Genius's DMG, considered as Basic Attack DMG."
          }
        ]
      }
    }
  }
});
