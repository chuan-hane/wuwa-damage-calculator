"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "suoming": {
        "name": "Suoming",
        "aliases": [],
        "weaponTypeName": "Sword",
        "resources": [
          {"label":"Delusion"},
          {"label":"Unison Boon"}
        ],
        "skills": [
          {"name":"Furled Canopy - Basic Attack Stage 1 DMG"},
          {"name":"Furled Canopy - Basic Attack Stage 2 DMG"},
          {"name":"Furled Canopy - Basic Attack Stage 3 DMG"},
          {"name":"Furled Canopy - Basic Attack - Unfurled Canopy Stage 1 DMG"},
          {"name":"Furled Canopy - Basic Attack - Unfurled Canopy Stage 2 DMG"},
          {"name":"Furled Canopy - Basic Attack - Unfurled Canopy Stage 3 DMG"},
          {"name":"Furled Canopy - Basic Attack - Unfurled Canopy Stage 4 DMG"},
          {"name":"Furled Canopy - Dodge Counter DMG"},
          {"name":"Furled Canopy - Dodge Counter - Unfurled Canopy DMG"},
          {"name":"Furled Canopy - Plunging Attack DMG"},
          {"name":"Furled Canopy - Basic Attack - Unfurled Canopy: Whirling Thunder Stage 1 DMG"},
          {"name":"Furled Canopy - Basic Attack - Unfurled Canopy: Whirling Thunder Stage 2 DMG"},
          {"name":"Furled Canopy: Rift Cleaver - Resonance Skill - Furled Canopy: Rift Cleaver DMG"},
          {"name":"Furled Canopy: Rift Cleaver - Resonance Skill - Unfurled Canopy: Crimson Gleam DMG"},
          {"name":"Umbral Canopy: Miasma Lock - Resonance Liberation - Umbral Canopy: Miasma Lock DMG"},
          {"name":"Umbral Canopy: Miasma Lock - Resonance Liberation - Blight Rain, Miasmic Thunder DMG"},
          {"name":"Furled Canopy: Flash Rift - Intro Skill - Furled Canopy: Flash Rift DMG"},
          {"name":"Furled Canopy: Flash Rift - Intro Skill - Unfurled Canopy: Thunder Rending DMG"},
          {"name":"Furled Canopy: Flash Rift - Intro Skill - Furled Canopy: Sealed Delusion (Unison) DMG","requiresResourceLabel":"Unison Response"},
          {"name":"Furled Canopy: Flash Rift - Intro Skill - Unfurled Canopy: Whirling Thunder (Unison) DMG","requiresResourceLabel":"Unison Response"},
          {"name":"Bound Obsession, Forged Mind - Resonance Skill - Furled Canopy: Sealed Delusion DMG","requiresResourceLabel":"800 points of Delusion"},
          {"name":"Bound Obsession, Forged Mind - Resonance Skill - Unfurled Canopy: Unforsaken Mind DMG","requiresResourceLabel":"800 points of Delusion"},
          {"name":"Bound Obsession, Forged Mind - Basic Attack - Umbral Canopy: Engraved Heart DMG"},
          {"name":"Bound Obsession, Forged Mind - Basic Attack - Umbral Canopy: Engraved Heart DMG (Hold)"}
        ],
        "skillEvents": [
          {},
          {"requiresResourceLabel":"Unison Response"}
        ],
        "combatStates": [
          {
            "label": "Awakened Mind / Deep Mind / Calamity Mind",
            "inactiveLabel": "Mind phase not selected",
            "entry": "Start in Awakened Mind. Resonance Skill - Furled Canopy: Sealed Delusion or an Awakened Mind Intro Skill enters Deep Mind. Casting Engraved Heart after Unforsaken Mind enters Calamity Mind; the skill ends in Awakened Mind.",
            "effects": "Deep Mind replaces Basic Attack, Dodge Counter, and Intro Skill and unlocks Resonance Liberation. Calamity Mind only allows Engraved Heart. Resonance Liberation and both Deep Mind Intro Skills grant 200 Delusion; Delusion caps at 800.",
            "options": [
              {"label":"Awakened Mind","valueLabel":"Awakened Mind"},
              {"label":"Deep Mind","valueLabel":"Deep Mind"},
              {"label":"Calamity Mind","valueLabel":"Calamity Mind"}
            ]
          },
          {
            "label": "Blight Rain, Miasmic Thunder",
            "inactiveLabel": "Blight Rain, Miasmic Thunder inactive",
            "entry": "Cast Outro Skill while holding Unison to activate Blight Rain, Miasmic Thunder.",
            "effects": "An active Resonator's damage summons Thunder Crest Coordinated Attacks, at most once per second and six times in total, for 8s.",
            "options": [
              {"label":"Blight Rain, Miasmic Thunder active","valueLabel":"Blight Rain, Miasmic Thunder"}
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill - Rain-Soaked Covenant",
            "label": "Electro DMG Bonus",
            "trigger": "Casting an Intro Skill",
            "excerpt": "Casting any of the four Intro Skills grants 50% Electro DMG Bonus",
            "desc": "Casting Intro Skill - Furled Canopy: Flash Rift, Intro Skill - Unfurled Canopy: Thunder Rending, Intro Skill - Furled Canopy: Sealed Delusion (Unison), or Intro Skill - Unfurled Canopy: Whirling Thunder (Unison) grants 50% Electro DMG Bonus for 15s. Switching to another Resonator ends this effect early.\n- When Suoming casts Intro Skill - Furled Canopy: Sealed Delusion (Unison) or Intro Skill - Unfurled Canopy: Whirling Thunder (Unison), she additionally gains 10 points of Concerto Energy, triggered only once every 25s."
          },
          {
            "source": "Inherent Skill - Sunken Seal, Forged Lock",
            "label": "Crit. DMG",
            "trigger": "Cast Furled Canopy: Rift Cleaver with Unison and without Aligned Seals",
            "excerpt": "Seal Master grants 100% Crit. DMG",
            "desc": "When Suoming has Unison, casting Resonance Skill - Furled Canopy: Rift Cleaver removes Unison and the Unison Boon on her, consumes 20 points of Concerto Energy, and clears all Delusion, granting the Seal Master effect: the DMG Multipliers of Basic Attack - Unfurled Canopy and Basic Attack - Unfurled Canopy: Whirling Thunder are increased by 100%, each stage of both skills restores 5 additional points of Concerto Energy on hit, and Suoming's Crit. DMG is increased by 100%. This effect lasts for 12s or until the Resonator is switched out.\n- Gaining Unison ends this effect early.\n- Gaining the Aligned Seals effect ends this effect early.\n- The Seal Master effect cannot be gained while the Aligned Seals effect is active.\n- While the Seal Master effect is active, press or hold Normal Attack shortly after casting Basic Attack - Unfurled Canopy Stage 4 to chain into Basic Attack - Unfurled Canopy Stage 2."
          },
          {
            "source": "Inherent Skill - Sunken Seal, Forged Lock",
            "label": "DMG Multiplier Increase",
            "trigger": "While having Seal Master",
            "requiresBuffStacks": {"label":"Seal Master"},
            "excerpt": "Seal Master increases Unfurled Canopy and Whirling Thunder multipliers by 100%",
            "desc": "When Suoming has Unison, casting Resonance Skill - Furled Canopy: Rift Cleaver removes Unison and the Unison Boon on her, consumes 20 points of Concerto Energy, and clears all Delusion, granting the Seal Master effect: the DMG Multipliers of Basic Attack - Unfurled Canopy and Basic Attack - Unfurled Canopy: Whirling Thunder are increased by 100%, each stage of both skills restores 5 additional points of Concerto Energy on hit, and Suoming's Crit. DMG is increased by 100%. This effect lasts for 12s or until the Resonator is switched out.\n- Gaining Unison ends this effect early.\n- Gaining the Aligned Seals effect ends this effect early.\n- The Seal Master effect cannot be gained while the Aligned Seals effect is active.\n- While the Seal Master effect is active, press or hold Normal Attack shortly after casting Basic Attack - Unfurled Canopy Stage 4 to chain into Basic Attack - Unfurled Canopy Stage 2."
          },
          {
            "source": "Forte Circuit - Bound Obsession, Forged Mind",
            "label": "Final DMG Bonus",
            "trigger": "While having Unison Boon",
            "excerpt": "Each Unison Boon stack grants 3% Final DMG Bonus to Suoming",
            "desc": "Unison Boon\n\nOnly the Resonators who can trigger Unison Response can gain this effect. Each stack of Unison Boon increases the total DMG dealt by Resonators in the team who can trigger Unison Response by 3%, up to 2 stacks."
          },
          {
            "source": "Inherent Skill - Sunken Seal, Forged Lock",
            "label": "Electro DMG Bonus",
            "trigger": "Cast Outro Skill within the 8s action window with Aligned Seals",
            "excerpt": "An Outro Skill meeting Aligned Seals conditions grants the incoming Resonator 30% Electro DMG Bonus",
            "desc": "When Suoming has Unison and casts Outro Skill, she gains the Aligned Seals effect for 30s.\nWithin 8s after Suoming casts Resonance Liberation or Basic Attack - Umbral Canopy: Engraved Heart, if she gains or has Aligned Seals, her Outro Skill grants the incoming Resonator 30% Electro DMG Bonus, plus an additional 20% for each stack of Unison Boon they have, up to 40%. This effect lasts for 8s or until the Resonator is switched out."
          },
          {
            "source": "Inherent Skill - Sunken Seal, Forged Lock",
            "label": "Electro DMG Bonus",
            "trigger": "Cast Outro Skill within the 8s action window with Aligned Seals",
            "excerpt": "Each Unison Boon stack on the incoming Resonator grants 20% more Electro DMG Bonus, up to 40%",
            "desc": "When Suoming has Unison and casts Outro Skill, she gains the Aligned Seals effect for 30s.\nWithin 8s after Suoming casts Resonance Liberation or Basic Attack - Umbral Canopy: Engraved Heart, if she gains or has Aligned Seals, her Outro Skill grants the incoming Resonator 30% Electro DMG Bonus, plus an additional 20% for each stack of Unison Boon they have, up to 40%. This effect lasts for 8s or until the Resonator is switched out."
          },
          {
            "source": "Outro Skill - Canopy Rumble",
            "label": "Electro DMG Amplification",
            "trigger": "After casting Outro Skill",
            "excerpt": "The incoming Resonator gains 20% Electro DMG Amplification",
            "desc": "The incoming Resonator gains 20% Electro DMG Amplification for 8s or until the Resonator is switched out. While having Unison Boon, they also gain 25% Resonance Skill DMG Amplification."
          },
          {
            "source": "Outro Skill - Canopy Rumble",
            "label": "Resonance Skill DMG Amplification",
            "trigger": "After casting Outro Skill while the incoming Resonator has Unison Boon",
            "excerpt": "The incoming Resonator gains 25% Resonance Skill DMG Amplification while having Unison Boon",
            "desc": "The incoming Resonator gains 20% Electro DMG Amplification for 8s or until the Resonator is switched out. While having Unison Boon, they also gain 25% Resonance Skill DMG Amplification."
          }
        ],
        "chain": [
          {
            "name": "Into the Blight Rain",
            "desc": "Resonance Skill - Unfurled Canopy: Unforsaken Mind is immune to interruption.\nThe DMG Multipliers of Intro Skill - Furled Canopy: Flash Rift, Intro Skill - Unfurled Canopy: Thunder Rending, Intro Skill - Furled Canopy: Sealed Delusion (Unison), and Intro Skill - Unfurled Canopy: Whirling Thunder (Unison) are increased by 60%.",
            "buffs": [
              {
                "source": "Resonance Chain - Into the Blight Rain",
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "All four Intro Skill multipliers increase by 60%",
                "desc": "Resonance Skill - Unfurled Canopy: Unforsaken Mind is immune to interruption.\nThe DMG Multipliers of Intro Skill - Furled Canopy: Flash Rift, Intro Skill - Unfurled Canopy: Thunder Rending, Intro Skill - Furled Canopy: Sealed Delusion (Unison), and Intro Skill - Unfurled Canopy: Whirling Thunder (Unison) are increased by 60%."
              }
            ]
          },
          {
            "name": "Breaking Thunder, Slaying Evil",
            "desc": "Crit. DMG is increased by 40%.\nCasting Outro Skill increases the incoming Resonator's Crit. DMG by 10%, plus an additional 6% for each stack of Unison Boon they have, up to 24%. This effect lasts for 30s or until the Resonator is switched out.",
            "buffs": [
              {
                "source": "Resonance Chain - Breaking Thunder, Slaying Evil",
                "label": "Crit. DMG",
                "trigger": "Default",
                "excerpt": "Suoming gains 40% Crit. DMG",
                "desc": "Crit. DMG is increased by 40%."
              },
              {
                "source": "Resonance Chain - Breaking Thunder, Slaying Evil",
                "label": "Crit. DMG",
                "trigger": "After casting Outro Skill",
                "excerpt": "The incoming Resonator gains 10% Crit. DMG",
                "desc": "Casting Outro Skill increases the incoming Resonator's Crit. DMG by 10%, plus an additional 6% for each stack of Unison Boon they have, up to 24%. This effect lasts for 30s or until the Resonator is switched out."
              },
              {
                "source": "Resonance Chain - Breaking Thunder, Slaying Evil",
                "label": "Crit. DMG",
                "trigger": "After casting Outro Skill",
                "excerpt": "Each Unison Boon stack grants the incoming Resonator 6% more Crit. DMG, up to 24%",
                "desc": "Casting Outro Skill increases the incoming Resonator's Crit. DMG by 10%, plus an additional 6% for each stack of Unison Boon they have, up to 24%. This effect lasts for 30s or until the Resonator is switched out."
              }
            ]
          },
          {
            "name": "Lone Canopy, Solitary Road",
            "desc": "Casting Intro Skill - Furled Canopy: Flash Rift or Intro Skill - Unfurled Canopy: Thunder Rending grants 1 stacks of Unison Boon for 30s. This effect can be triggered once every 25s.\n- If Suoming has already granted Unison Boon and it is still in effect, gaining it again only resets its duration.\n\nCasting Resonance Liberation grants Suoming 30% Basic Attack DMG Amplification for 25s.",
            "buffs": [
              {
                "source": "Resonance Chain - Lone Canopy, Solitary Road",
                "label": "Basic Attack DMG Amplification",
                "trigger": "After casting Resonance Liberation",
                "excerpt": "Casting Resonance Liberation grants 30% Basic Attack DMG Amplification",
                "desc": "Casting Resonance Liberation grants Suoming 30% Basic Attack DMG Amplification for 25s."
              }
            ]
          },
          {
            "name": "Covenant Borne Upon the Heart",
            "desc": "Suoming's ATK is increased by 20%.",
            "buffs": [
              {
                "source": "Resonance Chain - Covenant Borne Upon the Heart",
                "label": "ATK",
                "trigger": "Default",
                "excerpt": "Suoming gains 20% ATK",
                "desc": "Suoming's ATK is increased by 20%."
              }
            ]
          },
          {
            "name": "Seal Deep, Never Forgotten",
            "desc": "The DMG Multiplier of Resonance Liberation - Umbral Canopy: Miasma Lock is increased by 40%.",
            "buffs": [
              {
                "source": "Resonance Chain - Seal Deep, Never Forgotten",
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Umbral Canopy: Miasma Lock multiplier increases by 40%",
                "desc": "The DMG Multiplier of Resonance Liberation - Umbral Canopy: Miasma Lock is increased by 40%."
              }
            ]
          },
          {
            "name": "Nine Shadows at Her Side",
            "desc": "The effect of each stack of Unison Boon on all Resonators in the team is increased by 50%, up to 4 stacks of Unison Boon.\nThe DMG Multiplier of Basic Attack - Umbral Canopy: Engraved Heart is increased by 50%.\nWhen Suoming has Seal Master, her Crit. DMG is further increased by 200%.",
            "buffs": [
              {
                "source": "Resonance Chain - Nine Shadows at Her Side",
                "label": "Final DMG Bonus",
                "trigger": "While a Resonator has Unison Boon",
                "excerpt": "Each Unison Boon stack adds 1.5% Final DMG Bonus, up to four stacks",
                "desc": "The effect of each stack of Unison Boon on all Resonators in the team is increased by 50%, up to 4 stacks of Unison Boon."
              },
              {
                "source": "Resonance Chain - Nine Shadows at Her Side",
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Engraved Heart and its hold damage multipliers increase by 50%",
                "desc": "The DMG Multiplier of Basic Attack - Umbral Canopy: Engraved Heart is increased by 50%."
              },
              {
                "source": "Resonance Chain - Nine Shadows at Her Side",
                "label": "Crit. DMG",
                "trigger": "While having Seal Master",
                "requiresBuffStacks": {"label":"Seal Master"},
                "excerpt": "Seal Master grants an additional 200% Crit. DMG",
                "desc": "When Suoming has Seal Master, her Crit. DMG is further increased by 200%."
              }
            ]
          }
        ]
      }
    }
  }
});
