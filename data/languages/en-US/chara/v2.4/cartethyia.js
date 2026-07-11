"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "cartethyia": {
        "name": "Cartethyia",
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
            "requiresResourceLabel": "Conviction at least 120"
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
        "resources": [
          {
            "label": "Conviction"
          }
        ],
        "combatStates": [
          {
            "label": "Current form",
            "idLabel": "Form",
            "inactiveLabel": "Not in Form",
            "entry": "Select the current Form.",
            "effects": "Select the current Form.",
            "options": [
              {
                "label": "Cartethyia",
                "valueLabel": "Cartethyia"
              },
              {
                "label": "Fleurdelys",
                "valueLabel": "Fleurdelys"
              }
            ]
          },
          {
            "label": "Conviction",
            "idLabel": "Conviction",
            "inactiveLabel": "Not in Conviction",
            "entry": "Entering Manifest clears all Conviction.",
            "effects": "Entering Manifest clears all Conviction.",
            "options": [
              {
                "label": "Heart of Virtue",
                "valueLabel": "Heart of Virtue"
              },
              {
                "label": "Mandate of Divinity",
                "valueLabel": "Mandate of Divinity"
              },
              {
                "label": "Power of Discord",
                "valueLabel": "Power of Discord"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Wind's Indelible Imprint",
            "label": "DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "DMG Increase +30%",
            "desc": "DMG Increase +30%"
          },
          {
            "source": "Inherent Skill: Wind's Indelible Imprint",
            "label": "DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          },
          {
            "source": "Inherent Skill: Wind's Indelible Imprint",
            "label": "DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          },
          {
            "source": "Inherent Skill: Wind's Indelible Imprint",
            "label": "DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          },
          {
            "source": "Resonance Liberation: Mandate of Divinity",
            "label": "DMG Increase",
            "trigger": "In Fleurdelys",
            "excerpt": "DMG Increase +50%",
            "desc": "Based on the types and number of Sword Shadows recalled, perform different forms of Plunging Attack and obtain the corresponding Heart of Virtue, Mandate of Divinity, and Power of Discord."
          },
          {
            "source": "Resonance Liberation: Blade of Howling Squall",
            "label": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase +20%",
            "desc": "When Conviction reaches 120 points, press Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall."
          },
          {
            "source": "Resonance Liberation: Blade of Howling Squall",
            "label": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase +20%",
            "desc": "When Conviction reaches 120 points, press Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall."
          },
          {
            "source": "Resonance Liberation: Blade of Howling Squall",
            "label": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase +20%",
            "desc": "When Conviction reaches 120 points, press Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall."
          },
          {
            "source": "Resonance Liberation: Blade of Howling Squall",
            "label": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase +20%",
            "desc": "When Conviction reaches 120 points, press Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall."
          },
          {
            "source": "Resonance Liberation: Blade of Howling Squall",
            "label": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Increase +20%",
            "desc": "When Conviction reaches 120 points, press Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall."
          },
          {
            "source": "Outro Skill: Wind's Divine Blessing",
            "label": "DMG Increase",
            "trigger": "In Power of Discord",
            "excerpt": "DMG Increase +17.5%",
            "desc": "DMG Increase +17.5%"
          }
        ],
        "chain": [
          {
            "name": "Crown Destined by Fate",
            "desc": "Gain Zeal that lasts for 10s when Cartethyia's or Fleurdelys's attacks directly damage and defeat targets inflicted with Aero Erosion.\nIn the Zeal state, upon defeating enemies, the next move that directly damages targets raises the Aero Erosion stacks on the targets to the highest count among the targets defeated. This will not exceed the current max Aero Erosion stack limit. Zeal is removed afterward and enters a 1s cooldown.\nWhen Fleurdelys's Conviction hits 30/60/90/120, Fleurdelys's Crit. DMG is increased by 25% for 15s, up to 4 stacks. The duration of this effect does not reset upon gaining new stacks. After casting Resonance Liberation - Blade of Howling Squall, the increased Crit. DMG is removed.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "In Fleurdelys",
                "excerpt": "Crit. DMG +25% per stack"
              }
            ]
          },
          {
            "name": "Blade Broken by Tempest",
            "desc": "Casting Resonance Liberation - A Knight's Heartfelt Prayers increases the max stack limit of Aero Erosion on targets within a certain range by 3 stacks. The next attack that directly damages the target inflicts 3 stack of Aero Erosion on all targets within a certain range and immediately triggers the Aero Erosion DMG on the targets hit once without consuming the Aero Erosion stacks.\nThe DMG Multipliers of Cartethyia's Basic Attack, Heavy Attack, Dodge Counter, and Intro Skill are increased by 50% and the DMG Multiplier of her Mid-air Attack is increased by 200%.\nAfter casting Mid-air Attack - Cartethyia, every 1 type of Sword Shadow recalled reduces the cooldown of Resonance Skill - Cartethyia by 1s.",
            "buffs": [
              {
                "label": " stack cap",
                "trigger": "In Fleurdelys",
                "excerpt": " stack cap +3"
              },
              {
                "label": "Sword to Carve My Forms - Stage 1 DMG Multiplier Increase",
                "trigger": "In Cartethyia",
                "excerpt": "Sword to Carve My Forms - Stage 1 DMG Multiplier Increase +50%"
              },
              {
                "label": "Sword to Carve My Forms - Mid-air Attack 1 Sword Shadow Recalled DMG Multiplier Increase",
                "trigger": "In Cartethyia",
                "excerpt": "Sword to Carve My Forms - Mid-air Attack 1 Sword Shadow Recalled DMG Multiplier Increase +200%"
              }
            ]
          },
          {
            "name": "Prisoner Hanged in the Tower",
            "desc": "Basic Attack - Fleurdelys Stage 5, Mid-air Attack - Fleurdelys Stage 2, Enhanced Heavy Attack - Fleurdelys, and Resonance Skill - May Tempest Break the Tides now inflict 2 stacks of Aero Erosion on the targets hit.\nThe DMG Multiplier of Resonance Liberation - Blade of Howling Squall is increased by 100%.",
            "buffs": [
              {
                "label": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Multiplier Increase",
                "trigger": "In Fleurdelys",
                "excerpt": "A Knight's Heartfelt Prayers - Blade of Howling Squall DMG Multiplier Increase +100%"
              }
            ]
          },
          {
            "name": "Sacrifice Made for Salvation",
            "desc": "After Resonators in the team inflict Havoc Bane, Fusion Burst, Spectro Frazzle, Electro Flare, Glacio Chafe, or Aero Erosion, all Resonators in the team gain 20% DMG Bonus for all Attributes for 20s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "In Power of Discord",
                "excerpt": "All-Attribute DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Hope Reshaped in Storms",
            "desc": "When Cartethyia or Fleurdelys takes a fatal blow, they will not be downed by this instance of damage, but instead gain a Shield equal to 20% of Cartethyia's Max HP for 10s. This effect can be triggered once every 10 min.\nThe HP cost for casting Resonance Liberation - A Knight's Heartfelt Prayers is reduced to 25% of Max HP."
          },
          {
            "name": "Freedom Found in Storm's Wake",
            "desc": "After casting Resonance Liberation - Blade of Howling Squall, raise the Aero Erosion stacks on the target hit to max. Casting Resonance Liberation - Blade of Howling Squall no longer removes the Aero Erosion stacks on the target.\nWithin 30s after casting Intro Skill - Sword to Mark Tide's Trace, Intro Skill - Sword to Call for Freedom, Resonance Liberation - A Knight's Heartfelt Prayers, and Resonance Liberation - Blade of Howling Squall, when any Resonator in the team inflicts Aero Erosion on the targets with max stacks of Aero Erosion, immediately trigger the Aero Erosion DMG once.\nThe targets take 40% more DMG from Fleurdelys.",
            "buffs": [
              {
                "label": "Vulnerability",
                "trigger": "In Fleurdelys",
                "excerpt": "Vulnerability +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
