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
            "trigger": "At least 600 Floral Epistle consumed and first Plume Step performed",
            "excerpt": "After the first Plume Step, the next Outro grants the incoming Resonator Undulating Mist; consuming Negative Status stacks raises ATK, cap 50%",
            "desc": "After at least 600 Floral Epistle is consumed, when Suisui performs the first Plume Step, all nearby active Resonators in the team within Ceaseless Landscape gain the following effect for the duration of this Roaming Transcendent state: When they cast Outro Skill, Suisui grants the incoming Resonator Undulating Mist. When Resonators with Undulating Mist consume Negative Status or Electro Rage stacks on the target, they gain an ATK increase: For every 0.12% of Suisui's Energy Regen over 200%, the Resonator's ATK is increased by 0.1% for 6s, up to 50%. Undulating Mist lasts for 14s or until the Resonator is switched off the field. When Undulating Mist is removed, the ATK increase effect is also removed."
          }
        ],
        "chain": [
          {
            "name": "Mountains Washed Into Paintings",
            "desc": "Resonators with Undulating Mist also gain ATK increase after inflicting Negative Status or dealing Negative Status DMG.\nThe duration of Reflecting Shadows obtained through the third Plume Step is extended by 100%.\nBasic Attack - Drizzle Stance, Heavy Attack - Drizzle Stance, Plunging Attack - Illuminating Dew and Plunging Attack - Swallow's Cut are immune to interruption."
          },
          {
            "name": "Clouds Pour Like Molten Gold",
            "desc": "All nearby Resonators in the team within the Ceaseless Landscape have their Crit. DMG increased by 50% for 30s after performing the following actions:\n- Inflicting Spectro Frazzle, Fusion Burst, Glacio Chafe, Aero Erosion, and Electro Flare, or dealing the corresponding Negative Status DMG.\n- Consuming Havoc Bane stacks on the target.\nWhen the active Resonator is not in the Ceaseless Landscape, this Crit. DMG bonus effect is disabled.",
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
            "desc": "Press Normal Attack shortly after casting Resonance Skill - Drizzle Stance to cast Basic Attack - Drizzle Stance Stage 4.\n\nCasting Resonance Skill - Drizzle Stance grants Kingfisher. Switching to another Resonator ends this effect. Casting Basic Attack - Drizzle Stance Stage 4 consumes Kingfisher to restore 20 points of Concerto Energy and 350 points of Floral Epistle. Kingfisher can be consumed up to once every 25s."
          },
          {
            "name": "Autumn Mountains in Choir Sing",
            "desc": "Healing provided by Enrichment and  Spring's Birth are increased by 50%."
          },
          {
            "name": "I Long To Ride The Eastern Wind",
            "desc": "The DMG Multipliers of Basic Attack - Drizzle Stance and Heavy Attack - Drizzle Stance are increased by 100%.",
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
            "desc": "The Crit. DMG of Intro Skill - Tinkling Jade and Resonance Skill - Awakening Spring is increased by 500%.",
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
