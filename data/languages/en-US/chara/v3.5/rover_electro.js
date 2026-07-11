"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rover_electro": {
        "name": "Rover: Electro",
        "resources": [
          { "label": "Electric Surge" },
          { "label": "Thunder Rage" },
          { "label": "Concerto Energy" }
        ],
        "skills": [
          { "name": "Deterrence - Basic Attack Stage 1 DMG" },
          { "name": "Deterrence - Basic Attack Stage 2 DMG" },
          { "name": "Deterrence - Basic Attack Stage 3 DMG" },
          { "name": "Deterrence - Basic Attack Stage 4 DMG" },
          { "name": "Deterrence - Mid-air Attack DMG" },
          { "name": "Deterrence - Dodge Counter DMG" },
          { "name": "Deterrence - Basic Attack - Riposte Strike DMG" },
          { "name": "Deterrence - Basic Attack - Riposte Strike: Crumble DMG" },
          { "name": "Deterrence - Mid-air Attack - Havoc Stage 1 DMG" },
          { "name": "Deterrence - Mid-air Attack - Havoc Stage 2 DMG" },
          { "name": "Deterrence - Mid-air Attack - Havoc Stage 3 DMG" },
          { "name": "Deterrence - Mid-air Dodge Counter DMG" },
          { "name": "Thunderclap - Skill DMG" },
          { "name": "Thunderclap - Basic Attack - Repel DMG" },
          { "name": "Ultimate Tactics - Skill DMG" },
          { "name": "Thunderous Fury - Skill DMG" },
          { "name": "Myriad Omens' Mandate - Overshock DMG (Tap)" },
          { "name": "Myriad Omens' Mandate - Overshock DMG (Hold)" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Aero Plunging Attack DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Aero Mid-air Attack Stage 1 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Aero Mid-air Attack Stage 2 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Aero DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Spectro Stage 2 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Spectro Stage 3 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Havoc Stage 1 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Havoc Stage 2 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Havoc Stage 3 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Havoc Mid-air Attack Stage 1 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Havoc Mid-air Attack Stage 2 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Havoc Mid-air Attack Stage 3 DMG" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Spectro Stage 1 DMG" },
          { "name": "Myriad Omens' Mandate - Thunder Bane DMG", "stackLabel": "Thunder Bane Triggers" },
          { "name": "Myriad Omens' Mandate - Thrum of All Sounds: Silencing Blade DMG" }
        ],
        "combatStates": [
          {
            "label": "Resonance State",
            "inactiveLabel": "No Resonance State confirmed",
            "entry": "Hold Resonance Skill to cast Overshock, consume 60 Concerto Energy, clear all Electric Surge, and enter Apex Resonance. Casting Outro Skill ends the state and clears all Thunder Rage.",
            "effects": "Apex Resonance unlocks Resonance Skill Thrum of All Sounds and consumes 10% of the Thunder Rage limit per second while in combat.",
            "options": [
              { "label": "Normal", "valueLabel": "Normal" },
              { "label": "Apex Resonance", "valueLabel": "Apex Resonance" }
            ]
          },
          {
            "label": "Thunder Bane Trigger",
            "inactiveLabel": "No Thrum of All Sounds hit confirmed",
            "entry": "Thunder Bane is triggered each time Thrum of All Sounds hits the target.",
            "effects": "After confirming a hit, set the trigger count on the Thunder Bane damage entry to the number of hits being settled.",
            "options": [
              { "label": "Thrum hit confirmed", "valueLabel": "Thrum hit confirmed" }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Myriad Omens' Mandate",
            "label": "ATK",
            "trigger": "After tapping Overshock",
            "excerpt": "After tap-cast Overshock deals DMG, team ATK increases by 10%",
            "desc": "If Resonance Skill Overshock is cast by pressing the button, clear all Electric Surge to grant Resonators in the team 10% ATK Bonus for 20s."
          },
          {
            "source": "Inherent Skill: Regression",
            "label": "Resonance Skill DMG Bonus",
            "trigger": "After holding Overshock",
            "excerpt": "After hold-casting Overshock, Resonance Skill DMG Bonus increases by 20%",
            "desc": "When Resonance Skill Overshock is cast by holding down the button, gain 20% Resonance Skill DMG Bonus for 20s. Switching to another Resonator ends this effect."
          },
          {
            "source": "Outro Skill: Rumbling Thunders",
            "label": "All DMG Amplification",
            "trigger": "After Outro Skill and the incoming Resonator inflicts a Negative Status",
            "excerpt": "After inflicting a Negative Status, the incoming Resonator gains 25% All DMG Amplification",
            "desc": "The incoming Resonator gains Electro Core for 20s or until the Resonator is switched out. After Resonators with Electro Core inflict Negative Statuses, their Electro Core is consumed, and they gain 25% All DMG Amplification for 14s. Switching to another Resonator ends the effect."
          }
        ],
        "chain": [
          {
            "name": "Celestial Ingenuity",
            "desc": "While casting Normal Attack and Resonance Skill Thrum of All Sounds, gain increased resistance to interruption for 0.5s."
          },
          {
            "name": "Thousandfold Artifice",
            "desc": "Inflict 5 stacks of Electro Flare on the targets hit after Resonance Liberation Ultimate Tactics deals damage."
          },
          {
            "name": "Alchemy of Wonders",
            "desc": "The DMG Multiplier of Resonance Skill Overshock is increased by 20%.",
            "buffs": [
              {
                "label": "Overshock DMG Multiplier",
                "trigger": "Default",
                "excerpt": "Overshock DMG Multiplier +20%"
              }
            ]
          },
          {
            "name": "Earthquaking Rumble",
            "desc": "The DMG Multiplier of Resonance Liberation Ultimate Tactics is increased by 20%.",
            "buffs": [
              {
                "label": "Ultimate Tactics DMG Multiplier",
                "trigger": "Default",
                "excerpt": "Ultimate Tactics DMG Multiplier +20%"
              }
            ]
          },
          {
            "name": "Principle of Change",
            "desc": "Crit. DMG is increased by 20% while in Apex Resonance.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "While in Apex Resonance",
                "excerpt": "Crit. DMG +20% while in Apex Resonance"
              }
            ]
          },
          {
            "name": "Mind's Depths in a Casket",
            "desc": "The DMG Multiplier of Resonance Skill Thrum of All Sounds and Thunder Bane is increased by 20%.",
            "buffs": [
              {
                "label": "Thrum of All Sounds and Thunder Bane DMG Multiplier",
                "trigger": "Default",
                "excerpt": "Thrum of All Sounds and Thunder Bane DMG Multiplier +20%"
              }
            ]
          }
        ]
      }
    }
  }
});
