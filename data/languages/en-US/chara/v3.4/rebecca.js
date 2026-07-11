"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rebecca": {
        "name": "Rebecca",
        "skills": [
          {
            "name": "Mix-'n'-Match - Basic Attack - Huntress Stage 1 DMG"
          },
          {
            "name": "Mix-'n'-Match - Basic Attack - Huntress Stage 2 DMG"
          },
          {
            "name": "Mix-'n'-Match - Basic Attack - Huntress Stage 3 DMG"
          },
          {
            "name": "Mix-'n'-Match - Heavy Attack - Huntress DMG"
          },
          {
            "name": "Mix-'n'-Match - Heavy Attack - Eat Lead!: Huntress DMG"
          },
          {
            "name": "Mix-'n'-Match - Mid-air Attack - Huntress DMG"
          },
          {
            "name": "Mix-'n'-Match - Dodge Counter - Huntress DMG"
          },
          {
            "name": "Mix-'n'-Match - Tactical Dodge - Huntress DMG"
          },
          {
            "name": "Mix-'n'-Match - Tactical Dodge - Huntress Successful Dodge DMG"
          },
          {
            "name": "Mix-'n'-Match - Basic Attack - Guts Stage 1 DMG"
          },
          {
            "name": "Mix-'n'-Match - Basic Attack - Guts Stage 2 DMG"
          },
          {
            "name": "Mix-'n'-Match - Basic Attack - Guts Stage 3 DMG"
          },
          {
            "name": "Mix-'n'-Match - Heavy Attack - Guts DMG"
          },
          {
            "name": "Mix-'n'-Match - Mid-air Attack - Guts DMG"
          },
          {
            "name": "Mix-'n'-Match - Dodge Counter - Guts DMG"
          },
          {
            "name": "Mix-'n'-Match - Tactical Dodge - Guts DMG"
          },
          {
            "name": "Mix-'n'-Match - Tactical Dodge - Guts Successful Dodge DMG"
          },
          {
            "name": "Tactical Tweaks - Resonance Skill - It's Big Boomin' Time! DMG"
          },
          {
            "name": "Tactical Tweaks - Resonance Skill - Come 'n' Get Me! DMG"
          },
          {
            "name": "Party 'til Dawn! - Mk. 31 HMG DMG"
          },
          {
            "name": "Party 'til Dawn! - Mk. 31 HMG 1st Enhancement DMG"
          },
          {
            "name": "Party 'til Dawn! - Mk. 31 HMG 2nd Enhancement DMG"
          },
          {
            "name": "Party 'til Dawn! - BOOM! Fireworks! DMG"
          },
          {
            "name": "My Turn! - Yo, It's Big Boomin' Time! DMG"
          },
          {
            "name": "My Turn! - Hey, Leadhead, Come 'n' Get Me! DMG"
          },
          {
            "name": "Gloves Are Comin' Off! - Rat-tat-tat!: Huntress DMG",
            "requiresResourceLabel": "Fervor at least 120"
          },
          {
            "name": "Gloves Are Comin' Off! - Bang-bang-bang!: Guts DMG",
            "requiresResourceLabel": "Fervor at least 120"
          },
          {
            "name": "Gloves Are Comin' Off! - Hack Response - Meltdown DMG"
          },
          {
            "name": "Maybe, Just Maybe... - Enhanced Heavy Attack Additional DMG"
          }
        ],
        "resources": [
          {
            "label": "Fervor"
          }
        ],
        "combatStates": [
          {
            "label": "Combat Mode",
            "idLabel": "Combat Mode",
            "inactiveLabel": "Not in Combat Mode",
            "entry": "Select the current Combat Mode.",
            "effects": "Select the current Combat Mode.",
            "options": [
              {
                "label": "Huntress Mode",
                "valueLabel": "Huntress Mode"
              },
              {
                "label": "Guts Mode",
                "valueLabel": "Guts Mode"
              }
            ]
          },
          {
            "label": "Why Choose?",
            "idLabel": "Why Choose?",
            "inactiveLabel": "Not in Why Choose?",
            "entry": "Select the current Why Choose?.",
            "effects": "Select the current Why Choose?.",
            "options": [
              {
                "label": "Why Choose?",
                "valueLabel": "Why Choose?"
              }
            ]
          },
          {
            "label": "Target Hack",
            "idLabel": "Target Hack",
            "inactiveLabel": "Not in Target Hack",
            "entry": "Select the current Target Hack.",
            "effects": "Select the current Target Hack.",
            "options": [
              {
                "label": "Target Hack · Interfered",
                "valueLabel": "Target Hack · Interfered"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Gloves Are Comin' Off!",
            "label": "Crit. DMG",
            "trigger": "In Huntress Mode",
            "excerpt": "Crit. DMG +30%",
            "desc": "Crit. DMG +30%"
          },
          {
            "source": "Forte Circuit: Gloves Are Comin' Off!",
            "label": "DEF Ignore",
            "trigger": "In Guts Mode",
            "excerpt": "DEF Ignore +15%",
            "desc": "DEF Ignore +15%"
          },
          {
            "source": "Inherent Skill: Tag, You're It!",
            "label": "ATK",
            "trigger": "After casting Gloves Are Comin' Off! - Rat-tat-tat!: Huntress DMG / Gloves Are Comin' Off! - Bang-bang-bang!: Guts DMG",
            "excerpt": "ATK +10% per stack",
            "desc": "ATK +10% per stack"
          },
          {
            "source": "Inherent Skill: Tag, You're It!",
            "label": "Tune Break Boost",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "Tune Break Boost +30%",
            "desc": "Tune Break Boost +30%"
          },
          {
            "source": "Inherent Skill: Left an Opening!",
            "label": "ATK",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "ATK +20%",
            "desc": "ATK +20%"
          },
          {
            "source": "Outro Skill: Preem Choom",
            "label": "DMG Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DMG Increase +15%",
            "desc": "DMG Increase +15%"
          },
          {
            "source": "Outro Skill: Preem Choom",
            "label": "Heavy Attack DMG Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "Heavy Attack DMG Increase +0.5% per stack",
            "desc": "Heavy Attack DMG Increase +0.5% per stack"
          }
        ],
        "chain": [
          {
            "name": "Try Not to Get in the Way!",
            "desc": "The DMG Multipliers of the following skills are increased by 50%:\n- Basic Attack - Huntress, Heavy Attack - Huntress, Tactical Dodge - Huntress, and Dodge Counter - Huntress\n- Basic Attack - Guts, Tactical Dodge - Guts, Dodge Counter - Guts.\nWhen A Girl Gets What She Wants! is triggered, Rebecca gains 3 additional stack of Street Smarts for 12s. Upon performing Tactical Dodge - Huntress or Tactical Dodge - Guts, if Rebecca has sufficient Street Smarts stacks, 1 stack will be consumed to restore 20 STA.\nResonance Liberation BOOM! Fireworks! is immune to interruption.",
            "buffs": [
              {
                "label": "Mix-'n'-Match - Basic Attack - Huntress Stage 1 DMG Multiplier Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Mix-'n'-Match - Basic Attack - Huntress Stage 1 DMG Multiplier Increase +50%"
              }
            ]
          },
          {
            "name": "Oh, Hey Choom!",
            "desc": "Casting Intro Skill - Yo, It's Big Boomin' Time!, Intro Skill - Hey, Leadhead, Come 'n' Get Me!, or Resonance Liberation - Party 'til Dawn! grants 20% All-Attribute DMG Bonus for all Resonators in the team for 30s.\nWhen Resonators in the team inflict Hack - Shifting, they gain 15% All DMG Amplification for 30s.\nHot Hand regenerates twice as fast when Rebecca is out of combat.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "All-Attribute DMG Bonus +20%"
              },
              {
                "label": "DMG Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "DMG Increase +15%"
              }
            ]
          },
          {
            "name": "Don't Sweat Your Six!",
            "desc": "Rebecca's Resonance Liberation - Party 'til Dawn!, and Resonance Liberation - BOOM! Fireworks! gain 60% DMG Multiplier increase.\nRebecca's Resonance Liberation - Party 'til Dawn! gains 30% more explosion range.\nCasting Intro Skill - Yo, It's Big Boomin' Time! or Intro Skill - Hey, Leadhead, Come 'n' Get Me! grants 120 points of Hot Hand.",
            "buffs": [
              {
                "label": "Party 'til Dawn! - Mk. 31 HMG DMG Multiplier Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Party 'til Dawn! - Mk. 31 HMG DMG Multiplier Increase +60%"
              }
            ]
          },
          {
            "name": "Got Ya Covered!",
            "desc": "Rebecca gains an additional 60% Stat Bonus increase from the A Girl Gets What She Wants! effect.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "In Why Choose?",
                "excerpt": "Crit. DMG +18%"
              },
              {
                "label": "DEF Ignore",
                "trigger": "In Why Choose?",
                "excerpt": "DEF Ignore +9%"
              }
            ]
          },
          {
            "name": "Dreamin' on the Edge",
            "desc": "Rebecca gains 20% Basic Attack DMG Bonus for 8s when she inflicts Hack - Shifting.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Basic Attack DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Maybe, Just Maybe...",
            "desc": "Rebecca's Basic Attack DMG Bonus from every source is increased by 40%.\nDuring Heavy Attack - Rat-tat-tat!: Huntress or Heavy Attack - Bang-bang-bang!: Guts, Rebecca deals an additional instance of Electro DMG equal to 900% of her ATK, considered Basic Attack DMG.\nRebecca recovers an additional 20 points of Hot Hand when she is casting Heavy Attack - Rat-tat-tat!: Huntress or Heavy Attack - Bang-bang-bang!: Guts.\nWhen Rebecca takes a fatal blow, she does not fall to the damage and instead restores fixed 2077 HP for 5 times immediately. This effect is triggered once every 10 min.\nWhen Rebecca stays out of combat for more than 4s, she restores 120 point of Fervor. This effect is triggered once every 4s.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus Source Increase",
                "trigger": "Default",
                "excerpt": "Basic Attack DMG Bonus from every source is increased by 40%",
                "desc": "Rebecca's Basic Attack DMG Bonus from every source is increased by 40%."
              }
            ]
          }
        ]
      }
    }
  }
});
