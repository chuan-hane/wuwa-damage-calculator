"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "hiyuki": {
        "name": "Hiyuki",
        "skills": [
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Present Self Stage 1 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Present Self Stage 2 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Present Self Stage 3 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Heavy Attack - Frost Splinter: Present Self DMG",
            "requiresResourceLabel": "Dedication at least 300"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Attack - Present Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Dodge Counter - Present Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 1 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 2 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 3 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 4 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 5 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Heavy Attack - Foreclaimed Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Heavy Attack - Bitterfrost: Foreclaimed Self DMG",
            "requiresResourceLabel": "Whiteout Bitterfrost at least 3"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Attack - Foreclaimed Self Stage 1 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Attack - Foreclaimed Self Stage 2 DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Mid-air Plunging Attack - Foreclaimed Self DMG"
          },
          {
            "name": "Flaming Sakura Blade Art - Dodge Counter - Foreclaimed Self DMG"
          },
          {
            "name": "Frostblight - Resonance Skill - Present Self DMG"
          },
          {
            "name": "Frostblight - Frostblight: Jade Cleave DMG"
          },
          {
            "name": "Frostblight - Frostblight: Petalfall DMG"
          },
          {
            "name": "Foreclaiming - Foreclaiming: Inward Vision DMG",
            "requiresResourceLabel": "resource_gate_3"
          },
          {
            "name": "Foreclaiming - Foreclaiming: Blade Liberation Base DMG"
          },
          {
            "name": "Frostedge - Skill DMG"
          },
          {
            "name": "Everfrost Dominion - Basic Attack - Iai DMG",
            "requiresResourceLabel": "Frostheart at least 100"
          }
        ],
        "resources": [
          {
            "label": "Dedication"
          },
          {
            "label": "Whiteout Bitterfrost"
          },
          {
            "label": "Frostheart"
          }
        ],
        "combatStates": [
          {
            "label": "Self Form",
            "idLabel": "Self",
            "inactiveLabel": "Not in Self",
            "entry": "Basic Attack - Present Self",
            "effects": "Basic Attack - Present Self",
            "options": [
              {
                "label": "Present Self",
                "valueLabel": "Present Self"
              },
              {
                "label": "Foreclaimed Self",
                "valueLabel": "Foreclaimed Self"
              }
            ]
          },
          {
            "label": "Iai Stance",
            "idLabel": "Iai Stance",
            "inactiveLabel": "Not in Iai Stance",
            "entry": "Iai Stance",
            "effects": "Iai Stance",
            "options": [
              {
                "label": "Iai Stance",
                "valueLabel": "Iai Stance"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Fine Snow",
            "label": "Crit. DMG",
            "trigger": "In Iai Stance",
            "excerpt": "Crit. DMG +40% per stack",
            "desc": "Inherent Skill Fine Snow gains the following effect:"
          },
          {
            "source": "Inherent Skill: Fine Snow",
            "label": "DMG Increase",
            "trigger": "In Iai Stance",
            "excerpt": "DMG Increase +30%",
            "desc": "Inherent Skill Fine Snow gains the following effect:"
          },
          {
            "source": "Inherent Skill: Fine Snow",
            "label": "Glacio Chafe Extra Multiplier",
            "trigger": "In Iai Stance",
            "excerpt": "Glacio Chafe Extra Multiplier +102%",
            "desc": "Inherent Skill Fine Snow gains the following effect:"
          },
          {
            "source": "Inherent Skill: Fine Snow",
            "label": "DMG Increase",
            "trigger": "In Iai Stance",
            "excerpt": "DMG Increase +30%",
            "desc": "Inherent Skill Fine Snow gains the following effect:"
          },
          {
            "source": "Outro Skill: Snowlight Blessing",
            "label": "DMG Increase",
            "trigger": "In Iai Stance",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          }
        ],
        "chain": [
          {
            "name": "Springless",
            "desc": "The DMG Multipliers of Basic Attack - Foreclaimed Self, Heavy Attack - Foreclaimed Self, Mid-air Attack - Foreclaimed Self, and Dodge Counter - Foreclaimed Self are increased by 120%.\n\nBasic Attack - Foreclaimed Self Stage 3 now has an increased range and pulls enemies within range toward the center. Hiyuki is immune to interruptions while casting Basic Attack - Foreclaimed Self Stage 4 & 5.\n\nCasting Foreclaiming: Inward Vision enhances the next Basic Attack - Foreclaimed Self Stage 1 & 2, which now inflict Glacio Chafe 1 time on hit.",
            "buffs": [
              {
                "label": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 1 DMG Multiplier Increase",
                "trigger": "In Iai Stance",
                "excerpt": "Flaming Sakura Blade Art - Basic Attack - Foreclaimed Self Stage 1 DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "To Burn Cold in Silence",
            "desc": "Basic Attack - Iai's DMG Multiplier is increased by 125%.\n\nInherent Skill Ephemeral Realm's effect becomes the following one:\nOnce Hiyuki leaves the combat state or recovers from being knocked out, after staying out of combat for 4s, restore 3 point of Snowforged Blade.\n\nOnce Hiyuki leaves the combat state or recovers from being knocked out, after staying out of combat for 4s, the following effects are triggered once:\n- While in Foreclaimed Self, restore 3 point points of Frostharden Iai.\n- Reset the Cooldown of 2 charges of Frostblight: Jade Cleave.\n- Restore an additional 50 points of Frostheart for the next 2 cast of Frostblight: Jade Cleave or Frostblight: Petalfall.",
            "buffs": [
              {
                "label": "Everfrost Dominion - Basic Attack - Iai DMG Multiplier Increase",
                "trigger": "In Iai Stance",
                "excerpt": "Everfrost Dominion - Basic Attack - Iai DMG Multiplier Increase +125%"
              }
            ]
          },
          {
            "name": "No Self, No Bound",
            "desc": "Inherent Skill Fine Snow gains the following effect:\n2s after a Resonator joins the team or Hiyuki is revived, Hiyuki gains 1 stack of Snow Rust. Hiyuki can obtain up to 1 stack of Snow Rust in this way.\n\nThe DMG Multipliers of Heavy Attack - Frost Splinter: Present Self and Heavy Attack - Bitterfrost: Foreclaimed Self are increased by 160%.\n\nAt 2 stacks of Snow Rust, while Hiyuki is the active Resonator in the team, the DMG Multiplier of the additionally applied Glacio Bite DMG each time she inflicts Glacio Chafe is increased by 488%.",
            "buffs": [
              {
                "label": "Flaming Sakura Blade Art - Heavy Attack - Frost Splinter: Present Self DMG Multiplier Increase",
                "trigger": "In Iai Stance",
                "excerpt": "Flaming Sakura Blade Art - Heavy Attack - Frost Splinter: Present Self DMG Multiplier Increase +160%"
              },
              {
                "label": "Glacio Chafe Extra Multiplier",
                "trigger": "In Iai Stance",
                "excerpt": "Glacio Chafe Extra Multiplier +488%"
              }
            ]
          },
          {
            "name": "Like Reeds on Tides",
            "desc": "Casting Resonance Skill - Present Self, Frostblight: Jade Cleave, or Frostblight: Petalfall increases the DMG dealt by all nearby Resonators in the team by 20% for 30s.\n\nRestore 18% of Max HP while casting Frostblight: Jade Cleave or Frostblight: Petalfall.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "After casting Frostblight - Resonance Skill - Present Self DMG / Frostblight - Frostblight: Jade Cleave DMG / Frostblight - Frostblight: Petalfall DMG",
                "excerpt": "DMG Increase +20%"
              }
            ]
          },
          {
            "name": "Vessel of Thousand Wishes",
            "desc": "The DMG Multipliers of Resonance Skill - Present Self, Frostblight: Jade Cleave, and Frostblight: Petalfall are increased by 80%.",
            "buffs": [
              {
                "label": "Frostblight - Resonance Skill - Present Self DMG Multiplier Increase",
                "trigger": "In Iai Stance",
                "excerpt": "Frostblight - Resonance Skill - Present Self DMG Multiplier Increase +80%"
              }
            ]
          },
          {
            "name": "Into a Night Without End",
            "desc": "The Crit. DMG of Foreclaiming: Inward Vision and Foreclaiming: Blade Liberation is increased by 500%.\n\nAt 2 stacks of Snow Rust, the effect \"While Hiyuki is the active Resonator in the team, each time she applies Glacio Chafe, she additionally deals an instance of Glacio Bite DMG with a fixed DMG Multiplier\" changes to \"While Hiyuki is the active Resonator in the team, each time a Resonator in the team applies Glacio Chafe, she additionally deals an instance of Glacio Bite DMG with a fixed DMG Multiplier.\"\nAt 2 stacks of Snow Rust, Hiyuki's Crit. DMG is increased by 40%.\nAt 3 stacks of Snow Rust, the total Glacio Bite DMG taken by targets within a certain range of the active Resonator in the team is increased by 25%.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "In Iai Stance",
                "excerpt": "Crit. DMG +500%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "In Iai Stance",
                "excerpt": "Crit. DMG +40%"
              },
              {
                "label": "Final DMG Bonus",
                "trigger": "In Iai Stance",
                "excerpt": "Final DMG Bonus +25%"
              }
            ]
          }
        ]
      }
    }
  }
});
