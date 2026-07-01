"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "brant": {
        "name": "Brant",
        "skills": [
          {
            "name": "Captain's Rhapsody - Stage 1 DMG"
          },
          {
            "name": "Captain's Rhapsody - Stage 2 DMG"
          },
          {
            "name": "Captain's Rhapsody - Stage 3 DMG"
          },
          {
            "name": "Captain's Rhapsody - Stage 4 DMG"
          },
          {
            "name": "Captain's Rhapsody - Heavy Attack DMG"
          },
          {
            "name": "Captain's Rhapsody - Heavy Attack - Rhapsodic Riff DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 1 DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 1: Charged Attack DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 1: Flip DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 2 DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 2: Charged Attack DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 2: Flip DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 3 DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 3: Flip DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 4 DMG"
          },
          {
            "name": "Captain's Rhapsody - Dodge Counter DMG"
          },
          {
            "name": "Captain's Rhapsody - Mid-air Attack Stage 1 Slash DMG"
          },
          {
            "name": "Anchors Aweigh! - Skill DMG"
          },
          {
            "name": "Anchors Aweigh! - Plunging Attack DMG"
          },
          {
            "name": "To the Horizon - Skill DMG"
          },
          {
            "name": "Applaud for Me! - Skill DMG"
          },
          {
            "name": "Ocean Odyssey - Returned from Ashes DMG",
            "requiresResourceLabel": "Bravo full"
          },
          {
            "name": "For Smiles and Cheers - The Course is Set! Blast DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "All the World's a Captain's Carnevale - Secondary Blast DMG",
            "requiresResourceLabel": "resource_gate_3"
          }
        ],
        "resources": [
          {
            "label": "Bravo"
          }
        ],
        "combatStates": [
          {
            "label": "Aflame State",
            "idLabel": "Aflame State",
            "inactiveLabel": "Not in Aflame State",
            "entry": "Select the current Aflame State.",
            "effects": "Select the current Aflame State.",
            "options": [
              {
                "label": "Aflame State",
                "valueLabel": "Aflame State"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Theatrical Moment",
            "label": "Flat ATK",
            "trigger": "In Aflame State",
            "excerpt": "Flat ATK based on Energy Regen, cap 1560%",
            "desc": "Meanwhile, Forte Circuit Theatrical Moment is replaced by \"My\" Moment."
          },
          {
            "source": "Resonance Liberation: \"My\" Moment",
            "label": "Flat ATK",
            "trigger": "In Aflame State",
            "excerpt": "Flat ATK based on Energy Regen, cap 1040%",
            "desc": "Meanwhile, Forte Circuit Theatrical Moment is replaced by \"My\" Moment."
          },
          {
            "source": "Inherent Skill: Trial by Fire and Tide",
            "label": "Fusion DMG Bonus",
            "trigger": "In Aflame State",
            "excerpt": "Fusion DMG Bonus +15%",
            "desc": "Fusion DMG Bonus +15%"
          },
          {
            "source": "Outro Skill: The Course is Set!",
            "label": "DMG Increase",
            "trigger": "In Aflame State",
            "excerpt": "DMG Increase +20%",
            "desc": "Brant's Outro Skill The Course is Set!"
          },
          {
            "source": "Outro Skill: The Course is Set!",
            "label": "Resonance Skill DMG Increase",
            "trigger": "In Aflame State",
            "excerpt": "Resonance Skill DMG Increase +25%",
            "desc": "Brant's Outro Skill The Course is Set!"
          }
        ],
        "chain": [
          {
            "name": "By Currents and Winds",
            "desc": "Returned from Ashes temporarily causes nearby targets to stagnate while casting. The stagnation effect is removed when Brant is switched off the field.\nAfter casting Intro Skill Applaud for Me! or each flip following Mid-air Attack, Brant's DMG dealt is increased by 20% for 5s, stacking up to 3 times.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "In Aflame State",
                "excerpt": "DMG Increase +60% per stack"
              }
            ]
          },
          {
            "name": "For Smiles and Cheers",
            "desc": "Casting Mid-air Attack and Returned from Ashes increases Brant's Crit. Rate by 30%.\nBrant's Outro Skill The Course is Set! gains a new enhancement:\nWhen Resonance Skill cast by the incoming Resonator (or nearby Resonators who activate Brant's Outro Skill) hits a target within 20s after Brant's Outro Skill, Brant blasts the hit target, dealing Fusion DMG equal to 440% of Brant's ATK (considered Basic Attack DMG). This explosion can be triggered 1 time per second, up to 2 explosions in total.\n- This effect remains active when Brant is switched off the field.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Aflame State",
                "excerpt": "Crit. Rate +30%"
              }
            ]
          },
          {
            "name": "Through Storms I Sail",
            "desc": "The DMG Multiplier of Returned from Ashes is increased by 42%.",
            "buffs": [
              {
                "label": "Ocean Odyssey - Returned from Ashes DMG Multiplier Increase",
                "trigger": "In Aflame State",
                "excerpt": "Ocean Odyssey - Returned from Ashes DMG Multiplier Increase +42%"
              }
            ]
          },
          {
            "name": "To Freedom I Sing",
            "desc": "The Shield obtained from Returned from Ashes is increased by 20%. Casting Returned from Ashes restores HP for all nearby Resonators in the team (6.60 HP for every 1% Energy Regen)."
          },
          {
            "name": "All the World's an Actor's Stage",
            "desc": "Dealing Basic Attack DMG gives Brant 15% Basic Attack DMG Bonus for 10s.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "In Aflame State",
                "excerpt": "Basic Attack DMG Bonus +15%"
              }
            ]
          },
          {
            "name": "All the World's a Captain's Carnevale",
            "desc": "Mid-air Attack's DMG Multiplier is increased by 30%. Casting Returned from Ashes causes a secondary blast, dealing Fusion DMG equal to 30% of the DMG dealt by Returned from Ashes, considered Basic Attack DMG.",
            "buffs": [
              {
                "label": "Captain's Rhapsody - Mid-air Attack Stage 1 DMG Multiplier Increase",
                "trigger": "In Aflame State",
                "excerpt": "Captain's Rhapsody - Mid-air Attack Stage 1 DMG Multiplier Increase +30%"
              }
            ]
          }
        ]
      }
    }
  }
});
