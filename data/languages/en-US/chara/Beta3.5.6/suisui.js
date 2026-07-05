"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "suisui": {
        "name": "Suisui",
        "resources": [
          { "label": "Cloud Breath" },
          { "label": "Floral Epistle" }
        ],
        "skills": [
          { "name": "Basic Attack - Zephyr Stance Stage 1 DMG" },
          { "name": "Basic Attack - Zephyr Stance Stage 2 DMG" },
          { "name": "Basic Attack - Zephyr Stance Stage 3 DMG" },
          { "name": "Basic Attack - Zephyr Stance Stage 4 DMG" },
          { "name": "Mid-air Attack - Zephyr Stance DMG" },
          { "name": "Dodge Counter - Zephyr Stance DMG" },
          { "name": "Resonance Skill - Zephyr Stance DMG" },
          { "name": "Awakening Spring DMG" },
          { "name": "Resonance Skill - Drizzle Stance DMG" },
          { "name": "Tinkling Jade DMG" },
          { "name": "Basic Attack - Drizzle Stance Stage 1 DMG" },
          { "name": "Basic Attack - Drizzle Stance Stage 2 DMG" },
          { "name": "Basic Attack - Drizzle Stance Stage 3 DMG" },
          { "name": "Basic Attack - Drizzle Stance Stage 4 DMG" },
          { "name": "Heavy Attack - Drizzle Stance DMG" },
          { "name": "Illuminating Dew DMG" },
          { "name": "Swallow's Cut DMG" }
        ],
        "combatStates": [
          {
            "label": "Form",
            "inactiveLabel": "No form confirmed",
            "entry": "Suisui starts in Zephyr Stance. Casting Awakening Spring or Intro Skill enters Drizzle Stance for 15s.",
            "options": [
              { "label": "Zephyr Stance", "valueLabel": "Zephyr Stance" },
              { "label": "Drizzle Stance", "valueLabel": "Drizzle Stance" }
            ]
          },
          {
            "label": "Ceaseless Landscape",
            "inactiveLabel": "Ceaseless Landscape inactive",
            "entry": "Casting Song of Thoroughfare creates Ceaseless Landscape for 30s.",
            "options": [
              { "label": "Active", "valueLabel": "Ceaseless Landscape" }
            ]
          },
          {
            "label": "Reflecting Shadows",
            "inactiveLabel": "Reflecting Shadows not gained",
            "entry": "Rippling Waters and Plume Step grant nearby team members Reflecting Shadows for 6s.",
            "options": [
              { "label": "Gained", "valueLabel": "Reflecting Shadows" }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Sky Over Water",
            "label": "Crit. Rate",
            "trigger": "When Awakening Spring or Intro Skill hits",
            "excerpt": "Awakening Spring and Intro Skill gain 80% Crit. Rate",
            "desc": "When Awakening Spring or Tinkling Jade hits a target, this attack gains 80% Crit. Rate and 240% Glacio DMG Bonus."
          },
          {
            "source": "Inherent Skill: Sky Over Water",
            "label": "Glacio DMG Bonus",
            "trigger": "When Awakening Spring or Intro Skill hits",
            "excerpt": "Awakening Spring and Intro Skill gain 240% Glacio DMG Bonus",
            "desc": "When Awakening Spring or Tinkling Jade hits a target, this attack gains 80% Crit. Rate and 240% Glacio DMG Bonus."
          },
          {
            "source": "Resonance Liberation: Song of Thoroughfare",
            "label": "Negative Status stack limit",
            "trigger": "Inside Ceaseless Landscape",
            "excerpt": "Inside Ceaseless Landscape, matching Negative Status stack limit +3",
            "desc": "Inside Ceaseless Landscape, when nearby Resonators inflict Light Noise, Fusion Burst, Glacio Chafe, Aero Erosion, or Electro Flare, or deal corresponding Negative Status DMG, the matching Negative Status stack limit increases by 3 for 15s."
          },
          {
            "source": "Resonance Liberation: Song of Thoroughfare",
            "label": "Havoc DEF Ignore",
            "trigger": "After consuming Havoc Bane stacks inside Ceaseless Landscape",
            "excerpt": "After consuming Havoc Bane stacks, Havoc DMG ignores 6% DEF",
            "desc": "Inside Ceaseless Landscape, after nearby team members consume Havoc Bane stacks on a target, their Havoc DMG ignores 6% DEF for 30s."
          },
          {
            "source": "Resonance Liberation: Song of Thoroughfare",
            "label": "Havoc RES Shred",
            "trigger": "After consuming Havoc Bane stacks inside Ceaseless Landscape",
            "excerpt": "After consuming Havoc Bane stacks, Havoc RES is reduced by 12%",
            "desc": "Inside Ceaseless Landscape, after nearby team members consume Havoc Bane stacks on a target, the target's Havoc RES is reduced by 12% for 30s."
          },
          {
            "source": "Outro Skill: Rippling Waters",
            "label": "All DMG Amplification",
            "trigger": "After casting Outro Skill",
            "excerpt": "Team DMG is amplified by 25%",
            "desc": "Resonators in the team deal 25% more DMG for 30s."
          },
          {
            "source": "Outro Skill: Rippling Waters",
            "label": "Final DMG Bonus",
            "trigger": "Consume at least 400 Floral Epistle and hold Reflecting Shadows",
            "excerpt": "DMG Bonus scales with Suisui's Energy Regen above 200%, cap 12%",
            "desc": "After consuming at least 400 Floral Epistle, an active Resonator inside Ceaseless Landscape who has Reflecting Shadows gains a DMG increase based on Suisui's Energy Regen above 200%, capped at 12%."
          },
          {
            "source": "Outro Skill: Rippling Waters",
            "label": "ATK",
            "trigger": "After consuming at least 600 Floral Epistle",
            "excerpt": "A Smoked-Haze holder gains ATK after consuming Negative Status stacks, cap 50%",
            "desc": "After consuming at least 600 Floral Epistle, the first Plume Step lets an active Resonator inside Ceaseless Landscape grant Smoked Haze to the next Resonator after casting Outro Skill. Smoked Haze lasts 14s. When the Smoked-Haze holder consumes Negative Status or Electro Burst stacks on a target, ATK increases based on Suisui's Energy Regen above 200%, up to 50%, for 6s."
          }
        ],
        "chain": [
          {
            "name": "Mountains Washed Into Paintings",
            "desc": "A Resonator with Smoked Haze can also trigger the ATK increase after inflicting Negative Status or dealing Negative Status DMG. The Reflecting Shadows gained from the third Plume Step lasts 100% longer. Basic Attack - Drizzle Stance, Heavy Attack - Drizzle Stance, and the enhanced plunging attack cannot be interrupted."
          },
          {
            "name": "Clouds Pour Like Molten Gold",
            "desc": "Inside Ceaseless Landscape, after nearby team members inflict Negative Status, deal corresponding Negative Status DMG, or consume Havoc Bane stacks on a target, the triggering Resonator gains 50% Crit. DMG for 30s. The effect is temporarily disabled when the active Resonator is outside Ceaseless Landscape.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After a Negative Status-related trigger inside Ceaseless Landscape",
                "excerpt": "Triggering Resonator gains 50% Crit. DMG"
              }
            ]
          },
          {
            "name": "Sparse Curtains Invite Evening Glow",
            "desc": "After casting Resonance Skill - Drizzle Stance, Basic Attack - Drizzle Stance Stage 4 can be cast. Consuming Kingfisher restores Concerto Energy and Floral Epistle."
          },
          {
            "name": "Autumn Mountains in Choir Sing",
            "desc": "Enrichment and Spring's Birth healing is increased by 50%."
          },
          {
            "name": "I Long To Ride The Eastern Wind",
            "desc": "Basic Attack - Drizzle Stance and Heavy Attack - Drizzle Stance DMG Multipliers are increased by 100%.",
            "buffs": [
              {
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Drizzle Stance Basic and Heavy Attack multipliers +100%"
              }
            ]
          },
          {
            "name": "Staying True To This Splendid Realm",
            "desc": "Tinkling Jade and Awakening Spring Crit. DMG is increased by 500%.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "Default",
                "excerpt": "Tinkling Jade and Awakening Spring Crit. DMG +500%"
              }
            ]
          }
        ]
      }
    }
  }
});
