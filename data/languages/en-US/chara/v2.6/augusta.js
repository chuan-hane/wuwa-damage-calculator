"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "augusta": {
        "name": "Augusta",
        "skills": [
          {
            "name": "Hunter's Path - Stage 1 DMG"
          },
          {
            "name": "Hunter's Path - Stage 2 DMG"
          },
          {
            "name": "Hunter's Path - Stage 3 DMG"
          },
          {
            "name": "Hunter's Path - Stage 4 DMG"
          },
          {
            "name": "Hunter's Path - Heavy Attack: Steelclash DMG"
          },
          {
            "name": "Hunter's Path - Mid-air Attack DMG"
          },
          {
            "name": "Hunter's Path - Dodge Counter DMG"
          },
          {
            "name": "Hunter's Path - Mid-air Dodge Counter DMG"
          },
          {
            "name": "Hunter's Path - Heavy Attack - Thunderoar: Backstep DMG",
            "requiresResourceLabel": "Prowess full"
          },
          {
            "name": "Hunter's Path - Heavy Attack - Thunderoar: Spinslash DMG",
            "requiresResourceLabel": "Prowess full"
          },
          {
            "name": "Hunter's Path - Heavy Attack - Thunderoar: Uppercut DMG",
            "requiresResourceLabel": "Prowess full"
          },
          {
            "name": "Hunter's Path - Heavy Attack: Steelclash DMG",
            "requiresResourceLabel": "Prowess full"
          },
          {
            "name": "Hunter's Path - Dodge Counter - Thunderoar: Backstep DMG",
            "requiresResourceLabel": "Ascendancy full"
          },
          {
            "name": "Warrior's Blade - Skill DMG"
          },
          {
            "name": "Sunward Conquest - Resonance Liberation - Sword of Eternal Oath DMG"
          },
          {
            "name": "Sunward Conquest - Sublime is the Sun - Sunborne DMG",
            "requiresResourceLabel": "Majesty at least 2"
          },
          {
            "name": "Sunward Conquest - Sublime is the Sun - Everbright Protector DMG",
            "requiresResourceLabel": "Majesty at least 2"
          },
          {
            "name": "Stride of Goldenflare - Skill DMG"
          },
          {
            "name": "Call Me By the Sun - Resonance Skill - Undying Sunlight: Strike DMG",
            "requiresResourceLabel": "Ascendancy full"
          },
          {
            "name": "Call Me By the Sun - Resonance Skill - Undying Sunlight: Leap DMG",
            "requiresResourceLabel": "Ascendancy full"
          },
          {
            "name": "Call Me By the Sun - Resonance Skill - Undying Sunlight: Plunge DMG",
            "requiresResourceLabel": "Ascendancy full"
          },
          {
            "name": "Call Me By the Sun - Mid-air Dodge Counter: Undying Sunlight Strike DMG",
            "requiresResourceLabel": "Ascendancy full"
          },
          {
            "name": "Engraved in Radiant Light - Thunder Rage DMG"
          }
        ],
        "resources": [
          {
            "label": "Prowess"
          },
          {
            "label": "Ascendancy"
          },
          {
            "label": "Majesty"
          }
        ],
        "combatStates": [
          {
            "label": "Sworn Allegiance",
            "idLabel": "Sworn Allegiance",
            "inactiveLabel": "Not in Sworn Allegiance",
            "entry": "- When casting Resonance Liberation - Sublime is the Sun, Augusta generates the Ruler's Realm and enters the Sworn Allegiance state for 7s.",
            "effects": "- When casting Resonance Liberation - Sublime is the Sun, Augusta generates the Ruler's Realm and enters the Sworn Allegiance state for 7s.",
            "options": [
              {
                "label": "Sworn Allegiance",
                "valueLabel": "Sworn Allegiance"
              }
            ]
          },
          {
            "label": "Intro Skill",
            "idLabel": "Intro Skill",
            "inactiveLabel": "Not in Intro Skill",
            "entry": "- Prowess is fully restored when casting Intro Skill - Stride of Goldenflare.",
            "effects": "- Prowess is fully restored when casting Intro Skill - Stride of Goldenflare.",
            "options": [
              {
                "label": "Intro Skill",
                "valueLabel": "Intro Skill"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Crown of Wills",
            "label": "Electro DMG Bonus",
            "trigger": "In Intro Skill",
            "excerpt": "Electro DMG Bonus +15% per stack",
            "desc": "Casting Sublime is the Sun - Everbright Protector ends the Sworn Allegiance state and consumes all stacks of Crown of Wills later."
          },
          {
            "source": "Outro Skill: Battlesong of the Unyielding",
            "label": "DMG Increase",
            "trigger": "In Intro Skill",
            "excerpt": "DMG Increase +15%",
            "desc": "- 1 stack of Majesty is obtained when other Resonators in the team cast Outro Skill under the effect of Augusta's Outro Skill - Battlesong of the Unyielding."
          }
        ],
        "chain": [
          {
            "name": "Stained in Scorched Earth",
            "desc": "- Each stack of Crown of Wills additionally increases Augusta's Crit. DMG by 15%.\n- The max stack of Crown of Wills is increased to 2.\n- Casting Intro Skill - Stride of Goldenflare now grants 1 stacks of Crown of Wills.\n- Resonance Skill - Undying Sunlight: Strike, Resonance Skill - Undying Sunlight: Leap, and Resonance Skill - Undying Sunlight: Plunge are now immune to interruption.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After casting Stride of Goldenflare - Skill DMG",
                "excerpt": "Crit. DMG +15% per stack"
              },
              {
                "label": "Electro DMG Bonus",
                "trigger": "After casting Stride of Goldenflare - Skill DMG",
                "excerpt": "Electro DMG Bonus +15% per stack"
              }
            ]
          },
          {
            "name": "Cleansed in Crimson War",
            "desc": "- Crown of Wills provides additional effects: Each stack increases Augusta's Crit. Rate by 20%.\n- For every 1% of Crit. Rate over 100%, Augusta gains 2% Crit. DMG increase, up to 100%.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Stride of Goldenflare - Skill DMG",
                "excerpt": "Crit. Rate +20% per stack"
              },
              {
                "label": "Crit. DMG",
                "trigger": "In Intro Skill",
                "excerpt": "Crit. DMG based on Crit. Rate, cap 100%"
              }
            ]
          },
          {
            "name": "Forged in Rot and Ruin",
            "desc": "The following skills have their DMG Multiplier increased by 25%:\n- Heavy Attack - Thunderoar: Backstep, Dodge Counter - Thunderoar: Backstep, Heavy Attack - Thunderoar: Spinslash, Heavy Attack - Thunderoar: Uppercut.\n- Resonance Skill - Undying Sunlight: Plunge.\n- Resonance Liberation - Sublime is the Sun: Sunborne, Resonance Liberation - Sublime is the Sun: Everbright Protector.",
            "buffs": [
              {
                "label": "Hunter's Path - Heavy Attack - Thunderoar: Backstep DMG Multiplier Increase",
                "trigger": "In Intro Skill",
                "excerpt": "Hunter's Path - Heavy Attack - Thunderoar: Backstep DMG Multiplier Increase +25%"
              }
            ]
          },
          {
            "name": "Ascent in Sun and Glory",
            "desc": "Casting Intro Skill - Stride of Goldenflare increases the ATK of all Resonators in the team by 20% for 30s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Stride of Goldenflare - Skill DMG",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Unshaken in Wrathful Tides",
            "desc": "The Shield provided by Inherent Skill - Glory's Favor is increased by 50%."
          },
          {
            "name": "Engraved in Radiant Light",
            "desc": "- Augusta can now hold up to 4 stacks of Crown of Wills.\n- For every 1% of Crit. Rate over 150%, Augusta gains 2% Crit. DMG increase, up to 50%.\n- When Augusta performs Heavy Attack - Thunderoar: Spinslash or Heavy Attack - Thunderoar: Uppercut, she obtains 2 stack of Crown of Wills. Augusta can only obtain 2 stacks of Crown of Wills every 1s via Engraved in Radiant Light.\n- While casting Heavy Attack - Thunderoar: Spinslash or Heavy Attack - Thunderoar: Uppercut, Thunder Rage is triggered at the spot, dealing two instances of Electro DMG, with each instance equal to 100% of Augusta's ATK, considered as Heavy Attack DMG.",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "After casting Hunter's Path - Heavy Attack - Thunderoar: Spinslash DMG / Hunter's Path - Heavy Attack - Thunderoar: Uppercut DMG",
                "excerpt": "Electro DMG Bonus +15% per stack"
              },
              {
                "label": "Crit. DMG",
                "trigger": "After casting Hunter's Path - Heavy Attack - Thunderoar: Spinslash DMG / Hunter's Path - Heavy Attack - Thunderoar: Uppercut DMG",
                "excerpt": "Crit. DMG +15% per stack"
              },
              {
                "label": "Crit. Rate",
                "trigger": "After casting Hunter's Path - Heavy Attack - Thunderoar: Spinslash DMG / Hunter's Path - Heavy Attack - Thunderoar: Uppercut DMG",
                "excerpt": "Crit. Rate +20% per stack"
              },
              {
                "label": "Crit. DMG",
                "trigger": "In Intro Skill",
                "excerpt": "Crit. DMG based on Crit. Rate, cap 50%"
              }
            ]
          }
        ]
      }
    }
  }
});
