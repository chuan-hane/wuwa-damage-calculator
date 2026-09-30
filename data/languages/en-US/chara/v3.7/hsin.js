"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "hsin": {
        "name": "Hsin",
        "weaponTypeName": "Rectifier",
        "resources": [
          {
            "label": "Answering Heart"
          },
          {
            "label": "Illumining Heart"
          },
          {
            "label": "Resolution of Wishes"
          },
          {
            "label": "Law of Heaven"
          },
          {
            "label": "Source Intent"
          },
          {
            "label": "Edict"
          },
          {
            "label": "Heart of Thunder"
          },
          {
            "label": "Thunderglow"
          },
          {
            "label": "Electro Flare applications remaining"
          },
          {
            "label": "Unison Boon"
          }
        ],
        "skills": [
          {
            "name": "Basic Attack - Answering Form Stage 1 DMG"
          },
          {
            "name": "Basic Attack - Answering Form Stage 2 DMG"
          },
          {
            "name": "Basic Attack - Answering Form Stage 3 DMG"
          },
          {
            "name": "Basic Attack - Answering Form Stage 4 DMG"
          },
          {
            "name": "Heavy Attack - Answering Form: Reign at Ease DMG"
          },
          {
            "name": "Mid-air Attack - Answering Form: Reign at Ease DMG"
          },
          {
            "name": "Heavy Attack - Answering Form DMG"
          },
          {
            "name": "Mid-air Attack - Answering Form DMG"
          },
          {
            "name": "Dodge Counter - Answering Form DMG"
          },
          {
            "name": "Basic Attack - Illumining Form Stage 1 DMG"
          },
          {
            "name": "Basic Attack - Illumining Form: Modular Heartlock DMG"
          },
          {
            "name": "Basic Attack - Illumining Form Stage 2 DMG"
          },
          {
            "name": "Basic Attack - Illumining Form Stage 3 DMG"
          },
          {
            "name": "Heavy Attack - Illumining Form DMG"
          },
          {
            "name": "Upward Cut - Illumining Form DMG"
          },
          {
            "name": "Mid-air Attack - Illumining Form DMG"
          },
          {
            "name": "Dodge Counter - Illumining Form DMG"
          },
          {
            "name": "Basic Attack - Illumining Form: Pillars Aligned Stage 1 DMG"
          },
          {
            "name": "Basic Attack - Illumining Form: Pillars Aligned Stage 2 DMG"
          },
          {
            "name": "Basic Attack - Illumining Form: Pillars Aligned Stage 3 DMG"
          },
          {
            "name": "Basic Attack - Illumining Form: Pillars Aligned Stage 4 DMG"
          },
          {
            "name": "Dodge Counter - Illumining Form: Pillars Aligned DMG"
          },
          {
            "name": "Resonance Skill - Answering Form DMG"
          },
          {
            "name": "Resonance Skill - Illumining Form DMG"
          },
          {
            "name": "Pillars Across Heaven DMG",
            "requiresResourceLabel": "Illumining enhanced Heavy Attack completed and Resonance Energy full (125)"
          },
          {
            "name": "Soaring Pillar DMG",
            "requiresResourceLabel": "At least 1 stack of Edict"
          },
          {
            "name": "Intro Skill - Answering Form DMG in Resonance Mode - Electro Flare"
          },
          {
            "name": "Intro Skill - Answering Form DMG in Resonance Mode - Unison"
          },
          {
            "name": "Intro Skill - Answering Form: Manifold Unison DMG",
            "requiresResourceLabel": "This cast triggers Unison Response, or Source Intent is held"
          },
          {
            "name": "Intro Skill - Illumining Form DMG in Resonance Mode - Electro Flare"
          },
          {
            "name": "Intro Skill - Illumining Form DMG in Resonance Mode - Unison"
          },
          {
            "name": "Intro Skill - Illumining Form: Manifold Unison DMG",
            "requiresResourceLabel": "This cast triggers Unison Response, or Source Intent is held"
          },
          {
            "name": "Resonance Skill - Illumining Form: Pillars Aligned DMG",
            "requiresResourceLabel": "Illumining Heart at 300"
          },
          {
            "name": "Heavy Attack - Answering Form: Realm Wanderer DMG",
            "requiresResourceLabel": "Answering Heart at 100"
          },
          {
            "name": "Heavy Attack - Answering Form: Realm Protector DMG",
            "requiresResourceLabel": "Answering Heart at 100 and Resolution of Wishes available"
          },
          {
            "name": "Heavy Attack - Illumining Form: Beholding All Horizons DMG",
            "requiresResourceLabel": "Illumining Heart consumed to 0 during Mechanism Dominion"
          },
          {
            "name": "Heavy Attack - Illumining Form: Stilling All Horizons DMG",
            "requiresResourceLabel": "Illumining Heart consumed to 0 during Mechanism Dominion and Law of Heaven available"
          },
          {
            "name": "Herself a Thousand Lanterns"
          }
        ],
        "skillEvents": [
          { "requiresResourceLabel": "This cast triggers Unison Response" },
          {},
          {},
          {},
          {}
        ],
        "combatStates": [
          {
            "label": "Resonance Mode",
            "inactiveLabel": "Resonance Mode not selected",
            "entry": "Hsin can trigger Unison Response in Resonance Mode - Unison. Switching Resonance Mode removes Source Intent, Heart of Thunder, and the corresponding effects.",
            "effects": "Manifold Unison is available through this cast's Unison Response or held Source Intent. Electro Flare uses the target's current stacks.",
            "options": [
              {
                "label": "Resonance Mode - Unison",
                "valueLabel": "Resonance Mode - Unison"
              },
              {
                "label": "Resonance Mode - Electro Flare",
                "valueLabel": "Resonance Mode - Electro Flare"
              }
            ]
          },
          {
            "label": "Forms Born of Heart",
            "inactiveLabel": "Combat form not selected",
            "entry": "Formshift switches Hsin to Illumining Form. Pillars Across Heaven returns Her to Answering Form. Heart Manifest allows Invoked Form: Answering and Invoked Form: Illumining.",
            "effects": "The current form determines Basic Attacks, Heavy Attacks, Resonance Skills, and Intro Skills.",
            "options": [
              {
                "label": "Answering Form",
                "valueLabel": "Answering Form"
              },
              {
                "label": "Illumining Form",
                "valueLabel": "Illumining Form"
              }
            ]
          },
          {
            "label": "Mechanism Dominion",
            "inactiveLabel": "Not in Mechanism Dominion",
            "entry": "Casting Resonance Skill - Illumining Form: Pillars Aligned enters Mechanism Dominion for 13s. Illumining Form Intro Skills also enter this state in Unison mode.",
            "effects": "Replaces Illumining Form Basic Attacks and Dodge Counter. At 0 Illumining Heart, Beholding All Horizons or Stilling All Horizons ends the state and unlocks Pillars Across Heaven.",
            "options": [
              {
                "label": "In Mechanism Dominion",
                "valueLabel": "In Mechanism Dominion"
              }
            ]
          },
          {
            "label": "Heart Manifest",
            "inactiveLabel": "Not in Heart Manifest",
            "entry": "Casting Formshift enters Heart Manifest for 45s and grants 21 stacks of Edict. In Electro Flare mode, it also inflicts 5 Electro Flare stacks on nearby targets.",
            "effects": "In Electro Flare mode, targets within range with 0 Electro Flare gain 1 stack. At 10 Thunderglow, Hsin can also inflict Fleeting Thunder.",
            "options": [
              {
                "label": "In Heart Manifest",
                "valueLabel": "In Heart Manifest"
              }
            ]
          },
          {
            "label": "Fleeting Thunder",
            "inactiveLabel": "Target has no Fleeting Thunder",
            "entry": "In Electro Flare mode, Heart Manifest and 10 Thunderglow allow Hsin to inflict Fleeting Thunder on targets within range.",
            "effects": "Inflicting Fleeting Thunder or increasing the target's Electro Flare cap fills it to the current cap, up to 16 stacks. Leaving range, ending Heart Manifest, or changing mode removes it.",
            "options": [
              {
                "label": "Target has Fleeting Thunder",
                "valueLabel": "Target has Fleeting Thunder"
              }
            ]
          },
          {
            "label": "Nearby combat target",
            "inactiveLabel": "Target outside combat range",
            "entry": "Hsin is in combat and the target is within the designated range around Her.",
            "effects": "In Electro Flare mode, Sequence 6 allows Electro Flare on targets within range to Crit, fixed at 80% Crit. Rate and 230% Crit. DMG.",
            "options": [
              {
                "label": "Target within Hsin's combat range",
                "valueLabel": "Target within Hsin's combat range"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Tides of Succession",
            "label": "ATK Increase",
            "trigger": "Cast either Manifold Unison Intro in Unison mode",
            "excerpt": "50% ATK for 8s",
            "desc": "In Unison mode, casting Intro Skill - Answering Form: Manifold Unison or Intro Skill - Illumining Form: Manifold Unison increases Hsin's ATK by 50% for 8s. Switching Resonator or mode ends it."
          },
          {
            "source": "Inherent Skill: Tides of Succession",
            "label": "Electro DMG Bonus",
            "trigger": "Team Resonators have inflicted Electro Flare",
            "excerpt": "25% per Resonator, up to 2 stacks",
            "desc": "In Electro Flare mode, each team Resonator can grant Hsin 25% Electro DMG Bonus once after inflicting Electro Flare, up to 2 stacks. Adding a Resonator or changing mode resets it."
          },
          {
            "source": "Inherent Skill: Tides of Succession",
            "label": "Electro DMG Bonus",
            "trigger": "Same-team Rover: Electro has cast Thunderous Fury",
            "excerpt": "Hsin and Rover: Electro gain 20% for 30s",
            "desc": "In Electro Flare mode with Rover: Electro in the same team, casting Intro Skill - Thunderous Fury grants Hsin and Rover: Electro 20% Electro DMG Bonus for 30s."
          },
          {
            "source": "Forte Circuit: Forms Turn, Heart Abides",
            "label": "Total DMG Increase",
            "trigger": "Existing Unison Boon stacks",
            "excerpt": "Each Unison Boon increases total DMG by 3%",
            "desc": "Only Resonators who can trigger Unison Response gain this effect. Each stack increases their total DMG by 3%. The base cap is 2, increased by Hsin's inherent skill by 1 and Sequence 6 by another 1. This hit uses stacks held before it."
          },
          {
            "source": "Forte Circuit: Forms Turn, Heart Abides",
            "label": "Triggered Electro Flare",
            "trigger": "Last stage of Heartward by Moon in Electro Flare mode",
            "excerpt": "35% × Heart of Thunder × current Electro Flare multiplier",
            "desc": "The last stage of Resonance Skill - Heartward by Moon triggers one Electro Flare hit, with multiplier equal to 35% × current Heart of Thunder stacks × the Electro Flare multiplier for the target's current stacks."
          },
          {
            "source": "Forte Circuit: Forms Turn, Heart Abides",
            "label": "Electro Flare DMG Multiplier",
            "trigger": "Last stage of Heartward by Moon in Electro Flare mode",
            "excerpt": "Each Heart of Thunder stack contributes 35% of the effect multiplier",
            "desc": "The last stage of Resonance Skill - Heartward by Moon triggers Electro Flare using current Heart of Thunder, up to 100 stacks. Some time after casting, all remaining Heart of Thunder is consumed."
          },
          {
            "source": "Outro Skill: Herself a Thousand Lanterns",
            "label": "All DMG Amplification",
            "trigger": "Unison-mode Outro consumed Nightglow; recipient has Shared Light",
            "excerpt": "Other Resonators with Shared Light gain 20% for 30s",
            "desc": "In Unison mode, other Resonators gain Shared Light when they gain Unison. After Hsin's Outro consumes Nightglow, those with Shared Light gain 20% All DMG Amplification for 30s. Changing mode ends it."
          },
          {
            "source": "Outro Skill: Herself a Thousand Lanterns",
            "label": "Electro DMG Amplification",
            "trigger": "Electro Flare-mode Outro consumed Nightglow",
            "excerpt": "Other Resonators gain 20% for 20s",
            "desc": "In Electro Flare mode, Hsin's Outro consumes Nightglow and grants other Resonators in the team 20% Electro DMG Amplification for 20s. Changing mode ends it."
          }
        ],
        "chain": [
          {
            "name": "A Boat to Cross the Rising Tide",
            "desc": "Casting Resonance Liberation - Formshift grants Hsin 2 stacks of Radiance Ward, stacking up to 2 times. Switching to Answering Form clears all stacks. When Hsin takes DMG from an enemy target's attack, 1 stack of Radiance Ward can be consumed to make Her immune to interruption and reduce DMG taken by 60% for 1s. This effect can be triggered once every 1s.\n\nWhile in Resonance Mode - Unison:\nThe DMG Multipliers of Intro Skill - Answering Form: Manifold Unison and Intro Skill - Illumining Form: Manifold Unison are increased by 15%, and each stack of Unison Boon additionally increases the DMG Multipliers of Intro Skill - Answering Form: Manifold Unison and Intro Skill - Illumining Form: Manifold Unison by 10%, up to a total of 4 stacks.\n\nWhile in Resonance Mode - Electro Flare:\nWhen Hsin enters combat, if Heart of Thunder is below 50 stacks, it is increased to 50 stacks, triggered once every 12s.\nThe DMG Multiplier of the Electro Flare DMG triggered by Resonance Skill - Heartward by Moon is increased to 42% x (the number of Heart of Thunder stacks on Hsin) x (the Electro Flare DMG Multiplier corresponding to the target's current Electro Flare stacks).",
            "buffs": [
              {
                "source": "Resonance Chain 1: A Boat to Cross the Rising Tide",
                "label": "Manifold Unison Multiplier Increase",
                "trigger": "Cast either Manifold Unison Intro in Unison mode",
                "excerpt": "Both Manifold Unison Intro multipliers increase by 15%",
                "desc": "Both Manifold Unison Intro multipliers increase by 15%"
              },
              {
                "source": "Resonance Chain 1: A Boat to Cross the Rising Tide",
                "label": "Unison Boon Multiplier Increase",
                "trigger": "Cast either Manifold Unison Intro in Unison mode",
                "excerpt": "Each existing Unison Boon adds 10%, up to 4 stacks",
                "desc": "Each existing Unison Boon adds 10%, up to 4 stacks"
              },
              {
                "source": "Resonance Chain 1: A Boat to Cross the Rising Tide",
                "label": "Electro Flare DMG Multiplier",
                "trigger": "Last stage of Heartward by Moon in Electro Flare mode",
                "excerpt": "Coefficient becomes 42% × Heart of Thunder × current effect multiplier",
                "desc": "Coefficient becomes 42% × Heart of Thunder × current effect multiplier"
              }
            ]
          },
          {
            "name": "To Wake Is to Wonder What I Am",
            "desc": "The DMG Multipliers of Heavy Attack - Answering Form: Realm Wanderer and Heavy Attack - Answering Form: Realm Protector are increased by 60%.\nThe DMG Multipliers of Heavy Attack - Illumining Form: Beholding All Horizons and Heavy Attack - Illumining Form: Stilling All Horizons are increased by 60%.\n\nWhen Hsin enters combat, reset the Cooldowns for Hsin to gain Resolution of Wishes and Law of Heaven, and restore 100 additional points of Answering Heart. This effect can be triggered once every 12s.",
            "buffs": [
              {
                "source": "Resonance Chain 2: To Wake Is to Wonder What I Am",
                "label": "Enhanced Heavy Attack Multiplier Increase",
                "trigger": "Cast Realm Wanderer, Realm Protector, Beholding All Horizons, or Stilling All Horizons",
                "excerpt": "All four enhanced Heavy Attack multipliers increase by 60%",
                "desc": "All four enhanced Heavy Attack multipliers increase by 60%"
              }
            ]
          },
          {
            "name": "A Dream of Return Among the Hills",
            "desc": "The DMG Multiplier of Resonance Liberation - Pillars Across Heaven is increased by 70%.\n\nWhile in Resonance Mode - Unison:\nThe Crit. DMG of Resonance Liberation - Pillars Across Heaven is increased by 20%, and each stack of Unison Boon additionally increases its Crit. DMG by 15%, up to a total of 4 stacks.\n\nWhile in Resonance Mode - Electro Flare:\nWhen the last stage of Resonance Liberation - Pillars Across Heaven hits a target inflicted with Electro Flare, it triggers 1 instance of Electro Flare DMG, with its DMG Multiplier equal to 1500% times the Electro Flare DMG Multiplier corresponding to the current Electro Flare stacks on the target.",
            "buffs": [
              {
                "source": "Resonance Chain 3: A Dream of Return Among the Hills",
                "label": "Pillars Across Heaven Multiplier Increase",
                "trigger": "Cast Pillars Across Heaven",
                "excerpt": "Pillars Across Heaven multiplier increases by 70%",
                "desc": "Pillars Across Heaven multiplier increases by 70%"
              },
              {
                "source": "Resonance Chain 3: A Dream of Return Among the Hills",
                "label": "Pillars Across Heaven Crit. DMG",
                "trigger": "Cast Pillars Across Heaven in Unison mode",
                "excerpt": "Pillars Across Heaven Crit. DMG increases by 20%",
                "desc": "Pillars Across Heaven Crit. DMG increases by 20%"
              },
              {
                "source": "Resonance Chain 3: A Dream of Return Among the Hills",
                "label": "Unison Boon Crit. DMG",
                "trigger": "Cast Pillars Across Heaven in Unison mode",
                "excerpt": "Each existing Unison Boon adds 15%, up to 4 stacks",
                "desc": "Each existing Unison Boon adds 15%, up to 4 stacks"
              },
              {
                "source": "Resonance Chain 3: A Dream of Return Among the Hills",
                "label": "Triggered Electro Flare",
                "trigger": "Last Pillars Across Heaven stage hits a target with Electro Flare in Electro Flare mode",
                "excerpt": "Triggers one Electro Flare hit at 1500% of the current effect multiplier",
                "desc": "Triggers one Electro Flare hit at 1500% of the current effect multiplier"
              }
            ]
          },
          {
            "name": "A River of Lanterns, a River of Wishes",
            "desc": "All Resonators in the team gain 20% All-Attribute DMG Bonus for 30s when a Resonator in the team triggers any of the following actions:\n- Inflict Electro Flare or Electro Rage on a target.\n- Gain Unison while not having the effect.\n- Trigger Unison Response.",
            "buffs": [
              {
                "source": "Resonance Chain 4: A River of Lanterns, a River of Wishes",
                "label": "All-Attribute DMG Bonus",
                "trigger": "Electro Flare or Rage inflicted, Unison gained while absent, or Unison Response completed",
                "excerpt": "Team gains 20% All-Attribute DMG Bonus for 30s",
                "desc": "Team gains 20% All-Attribute DMG Bonus for 30s"
              }
            ]
          },
          {
            "name": "Forms Turn as the Heart Wills",
            "desc": "While in Illumining Form, DMG taken by Hsin is reduced by 20%.\nWhen Hsin takes a fatal blow, She will not be knocked out, but instead restores 100% of Max HP and becomes immune to DMG and interruption for 1s. This effect can be triggered once every 10 minute.",
            "buffs": []
          },
          {
            "name": "The Moon Owes Its Light to the Living",
            "desc": "Targets take 40% more Resonance Skill DMG from Hsin.\n\nResonance Skill DMG dealt by Hsin ignores 20% of the target's DEF.\n\nWhile in Resonance Mode - Unison:\nThe maximum stacks of the Unison Boon effect on Resonators in the team are additionally increased by 1. When a Resonator in the team triggers Unison Response, all Resonators in the team additionally gain 1 stack of Unison Boon for 30s. This effect does not stack.\n\nWhile in Resonance Mode - Electro Flare:\nWhile in combat, Electro Flare DMG taken by targets within a certain range around Hsin can be Critical, with Crit. Rate fixed at 80% and Crit. DMG fixed at 230%.",
            "buffs": [
              {
                "source": "Resonance Chain 6: The Moon Owes Its Light to the Living",
                "label": "Resonance Skill Vulnerability",
                "trigger": "Hsin deals Resonance Skill DMG",
                "excerpt": "Targets take 40% more Resonance Skill DMG from Hsin",
                "desc": "Targets take 40% more Resonance Skill DMG from Hsin"
              },
              {
                "source": "Resonance Chain 6: The Moon Owes Its Light to the Living",
                "label": "Resonance Skill DEF Ignore",
                "trigger": "Hsin deals Resonance Skill DMG",
                "excerpt": "Ignores 20% of the target's DEF",
                "desc": "Ignores 20% of the target's DEF"
              },
              {
                "source": "Resonance Chain 6: The Moon Owes Its Light to the Living",
                "label": "Fixed Electro Flare Crit",
                "trigger": "Electro Flare mode; combat target within Hsin's designated range",
                "excerpt": "Electro Flare Crit. Rate fixed at 80% and Crit. DMG fixed at 230%",
                "desc": "Electro Flare Crit. Rate fixed at 80% and Crit. DMG fixed at 230%"
              }
            ]
          }
        ]
      }
    }
  }
});
