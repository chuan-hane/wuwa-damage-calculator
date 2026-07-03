"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "weapons": {
      "azure_oath": {
        "name": "Azure Oath",
        "typeName": "Sword",
        "resonanceName": "Unbending",
        "description": "Grants 12%/15%/18%/21%/24% All-Attribute DMG Bonus. Upon inflicting Havoc Bane, the wielder gains 36%/45%/54%/63%/72% Heavy Attack DMG Amplification and their Heavy Attack DMG ignores 12%/15%/18%/21%/24% of the target's DEF, lasting for 8/8/8/8/8s.",
        "effects": [
          {
            "label": "All-Attribute DMG Bonus",
            "excerpt": "All-Attribute DMG Bonus +12%",
            "conditionText": "Grants 12%/15%/18%/21%/24% All-Attribute DMG Bonus."
          },
          {
            "label": "Heavy Attack DMG Amplification",
            "excerpt": "After inflicting Havoc Bane, Heavy Attack DMG Amplification +36%",
            "conditionText": "Upon inflicting Havoc Bane, the wielder gains 36%/45%/54%/63%/72% Heavy Attack DMG Amplification for 8s."
          },
          {
            "label": "Heavy Attack DEF Ignore",
            "excerpt": "After inflicting Havoc Bane, Heavy Attack ignores 12% DEF",
            "conditionText": "Upon inflicting Havoc Bane, Heavy Attack DMG ignores 12%/15%/18%/21%/24% of the target's DEF for 8s."
          }
        ]
      },
      "firstlights_herald": {
        "name": "Firstlight's Herald",
        "typeName": "Rectifier",
        "resonanceName": "Spring Wreath",
        "description": "Increases Max HP by 12%/15%/18%/21%/24%. Casting Resonance Liberation restores 8/10/12/14/16 points of Concerto Energy, triggered once every 20s. Inflicting Glacio Chafe grants Snow Taint for 6s. Applying healing grants Ripples for 6s. If the wielder has done both while on the field, the next Outro Skill grants both effects for 6s. When the wielder has both Snow Taint and Ripples, the ATK of all nearby Resonators in the team is increased by 20%/25%/30%/35%/40%. Effects of the same name do not stack.",
        "effects": [
          {
            "label": "HP",
            "excerpt": "HP +12%",
            "conditionText": "Increases Max HP by 12%/15%/18%/21%/24%."
          },
          {
            "label": "ATK",
            "excerpt": "With Snow Taint and Ripples, team ATK +20%",
            "conditionText": "When the wielder has both Snow Taint and Ripples, nearby team members' ATK is increased by 20%/25%/30%/35%/40%."
          }
        ]
      }
    }
  }
});
