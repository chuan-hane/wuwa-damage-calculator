"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "jingran": {
        "name": "Jingran",
        "weaponTypeName": "Broadblade",
        "resources": [
          { "label": "Qi" },
          { "label": "Fire of Life" },
          { "label": "Ghost Shroud" }
        ],
        "skills": [
          { "name": "Basic Attack - Drink Soul Stage 1 DMG" },
          { "name": "Basic Attack - Drink Soul Stage 2 DMG" },
          { "name": "Basic Attack - Drink Soul Stage 3 DMG" },
          { "name": "Basic Attack - Drink Soul Stage 4 DMG" },
          { "name": "Basic Attack - Devil's Bane Stage 1 DMG" },
          { "name": "Basic Attack - Devil's Bane Stage 2 DMG" },
          { "name": "Basic Attack - Devil's Bane Stage 3 DMG" },
          { "name": "Basic Attack - Devil's Bane Stage 4 DMG" },
          { "name": "Mid-air Attack DMG" },
          { "name": "Dodge Counter - Nether Dive DMG" },
          { "name": "Dodge Counter - Light Watch DMG" },
          { "name": "Shadow Step DMG" },
          { "name": "Encroaching Yin DMG" },
          { "name": "Resonance Skill - Netherworld Traverse DMG", "requiresResourceLabel": "Has Cleanse of Impurity" },
          { "name": "Scorching Yang DMG" },
          { "name": "Resonance Skill - Afterlife's Guide DMG", "requiresResourceLabel": "Has Cleanse of Impurity" },
          { "name": "Resonance Liberation - Burial of Thousand Souls DMG" },
          { "name": "Yinghuo - Chimei Wangliang DMG" },
          { "name": "Intro Skill - Question the Tombs DMG" },
          { "name": "Heavy Attack - Soul Raid DMG", "requiresResourceLabel": "Qi at 300" },
          { "name": "Heavy Attack - Stardome Meander DMG", "requiresResourceLabel": "Qi at 300" },
          { "name": "Rising Fortune and Ebbing Evil DMG" },
          { "name": "Parade of Thousand Souls - Chimei Wangliang DMG", "stackLabel": "Summon Count" }
        ],
        "combatStates": [
          {
            "label": "Yin-Yang State",
            "inactiveLabel": "Yin-Yang state not selected",
            "entry": "Jingran starts in Yang Font. Heavy Attack - Soul Raid switches him to Yang Font, while Heavy Attack - Stardome Meander switches him to Yin Vessel.",
            "effects": "The selected state controls the available Basic Attacks, Dodge Counter, Resonance Skills, and enhanced Heavy Attack.",
            "options": [
              { "label": "Yin Vessel", "valueLabel": "Yin Vessel State" },
              { "label": "Yang Font", "valueLabel": "Yang Font State" }
            ]
          },
          {
            "label": "Yinghuo State",
            "inactiveLabel": "Not in Yinghuo",
            "entry": "Casting Resonance Liberation - Burial of Thousand Souls enters Yinghuo for 15s.",
            "effects": "Soul Raid or Stardome Meander summons Chimei Wangliang on hit. Fire of Life is removed when Yinghuo ends.",
            "options": [
              { "label": "In Yinghuo", "valueLabel": "Yinghuo State" }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Nether to Light",
            "label": "Fusion DMG Bonus",
            "trigger": "Default",
            "excerpt": "Every 1,000 Max HP grants 1.5% Fusion DMG Bonus, up to 75%",
            "desc": "Jingran gains Fusion DMG Bonus based on Max HP: Every 1,000 Max HP grants 1.5% Fusion DMG Bonus, up to 75%."
          },
          {
            "source": "Forte Circuit: Nether to Light",
            "label": "Incoming Healing Bonus",
            "trigger": "Default",
            "excerpt": "Every 1,000 Max HP grants 6.2% Incoming Healing Bonus, up to 310%",
            "desc": "Jingran gains Incoming Healing Bonus based on Max HP: Every 1,000 Max HP grants 6.2% Incoming Healing Bonus, up to 310%."
          },
          {
            "source": "Forte Circuit: Yang Changes, Yin Unites",
            "label": "ATK",
            "trigger": "Default",
            "excerpt": "Every 1,000 Max HP grants 36 ATK, up to 1,800",
            "desc": "Jingran gains additional ATK based on Max HP: Every 1,000 Max HP grants 36 ATK, up to 1,800."
          },
          {
            "source": "Forte Circuit: Upstream Along Santu",
            "label": "DMG Multiplier Increase",
            "trigger": "While in Yinghuo with Fire of Life",
            "excerpt": "Above 25,000 Max HP, each full 1,000 adds 21.10% to Soul Raid, up to 25 steps",
            "desc": "While Jingran is in Yinghuo and Fire of Life is not 0, casting Heavy Attack - Soul Raid consumes 25 points of Fire of Life. Above 25,000 Max HP, each full 1,000 Max HP increases this attack's DMG Multiplier by 21.10%, counting up to 25,000 additional Max HP."
          },
          {
            "source": "Forte Circuit: Upstream Along Santu",
            "label": "DMG Multiplier Increase",
            "trigger": "While in Yinghuo with Fire of Life",
            "excerpt": "Above 25,000 Max HP, each full 1,000 adds 21.65% to Stardome Meander, up to 25 steps",
            "desc": "While Jingran is in Yinghuo and Fire of Life is not 0, casting Heavy Attack - Stardome Meander consumes 25 points of Fire of Life. Above 25,000 Max HP, each full 1,000 Max HP increases this attack's DMG Multiplier by 21.65%, counting up to 25,000 additional Max HP."
          },
          {
            "source": "Intro Skill: Question the Tombs",
            "label": "Fusion DMG Bonus",
            "trigger": "After converting Ghost Shroud into Fortune in Disguise",
            "excerpt": "Each stack scales with Max HP, up to 2.5% per stack and 125% at 50 stacks",
            "desc": "Fortune in Disguise has a maximum of 50 stacks. Each stack grants Fusion DMG Bonus based on Max HP: Every 1,000 Max HP grants 0.05%, up to 2.5% per stack, for 15s. Switching to another Resonator ends the effect."
          }
        ],
        "chain": [
          {
            "name": "Yin and Yang in Harmony, the Ultimate Law of Being",
            "desc": "The DMG Multipliers of Resonance Skill - Encroaching Yin, Resonance Skill - Netherworld Traverse, Resonance Skill - Scorching Yang, and Resonance Skill - Afterlife's Guide are increased by 80%.\nResonance Skill - Encroaching Yin, Resonance Skill - Netherworld Traverse, Resonance Skill - Scorching Yang, and Resonance Skill - Afterlife's Guide are now immune to interruption.",
            "buffs": [
              {
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Encroaching Yin, Netherworld Traverse, Scorching Yang, and Afterlife's Guide gain 80% DMG Multiplier Increase",
                "desc": "The DMG Multipliers of Resonance Skill - Encroaching Yin, Resonance Skill - Netherworld Traverse, Resonance Skill - Scorching Yang, and Resonance Skill - Afterlife's Guide are increased by 80%."
              }
            ]
          },
          {
            "name": "A Solitary Lantern, Across Lands Shade-Trodden",
            "desc": "The DMG Multipliers of Heavy Attack - Soul Raid and Heavy Attack - Stardome Meander are increased by 46%. While in the Yinghuo state, the DMG Multiplier increase effect via Fire of Life on Heavy Attack - Soul Raid and Heavy Attack - Stardome Meander is increased by 46%.\n\nUpon entering combat, Jingran gains the following effects, triggered once every 4s:\n- Gains 300 point of Qi.\n- Gains Netherworld's Boon.\n\nNetherworld's Boon\n\nCasting Heavy Attack - Soul Raid or Heavy Attack - Stardome Meander restores 25% of Max Resonance Energy and grants Heavy Attack - Soul Raid and Heavy Attack - Stardome Meander 180% DMG Amplification for 4s.",
            "buffs": [
              {
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Soul Raid and Stardome Meander gain 46% DMG Multiplier Increase",
                "desc": "The DMG Multipliers of Heavy Attack - Soul Raid and Heavy Attack - Stardome Meander are increased by 46%. The DMG Multiplier increase effect via Fire of Life is also increased by 46%."
              },
              {
                "label": "Heavy Attack DMG Amplification",
                "trigger": "After gaining Netherworld's Boon upon engaging in combat",
                "excerpt": "Netherworld's Boon Amplifies Soul Raid and Stardome Meander DMG by 180%",
                "desc": "Upon entering combat, gain Netherworld's Boon. Casting Heavy Attack - Soul Raid or Heavy Attack - Stardome Meander restores 25% of Max Resonance Energy and grants both attacks 180% DMG Amplification for 4s."
              }
            ]
          },
          {
            "name": "World's Course Shifts, Each to Their Rightful Paths",
            "desc": "When Jingran casts Heavy Attack - Soul Raid or Heavy Attack - Stardome Meander, gain 5 points of Ghost Shroud.\n\nWhen Jingran casts Resonance Liberation - Burial of Thousand Souls,Yang Changes, Yin Unites is replaced by Yin-Yang Everflow for 15s.\n\nYin-Yang Everflow\n\nJingran gains additional ATK based on Max HP: For every 1000 points of Jingran's Max HP, gain 50 additional ATK, up to 2500.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Resonance Liberation",
                "excerpt": "Max HP conversion additionally grants 14 ATK per 1,000 HP, up to 700 extra ATK",
                "desc": "After casting Resonance Liberation - Burial of Thousand Souls, the Max HP conversion changes from 36 ATK per 1,000 Max HP, capped at 1,800, to 50 ATK per 1,000 Max HP, capped at 2,500. This entry models the additional 14 ATK per 1,000 Max HP, capped at 700."
              }
            ]
          },
          {
            "name": "Where Reality Meets Illusion, Where Living Meet Dead",
            "desc": "When a Resonator in the team gains a Shield, all Resonators in the team gain 20% All-Attribute DMG Bonus for 30s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "After a Resonator in the team gains a Shield",
                "excerpt": "A team member gaining a Shield grants all Resonators 20% All-Attribute DMG Bonus",
                "desc": "When a Resonator in the team gains a Shield, all Resonators in the team gain 20% All-Attribute DMG Bonus for 30s."
              }
            ]
          },
          {
            "name": "Ends Return to Beginnings, Truth of Life Laid Bare",
            "desc": "When Jingran takes a fatal blow, he will not fall and will instead gain a Shield equal to 50% of Max HP for 15s. This effect can be triggered once every 10 min. This Shield will not be passed on to the incoming Resonator.",
            "buffs": []
          },
          {
            "name": "As Favors and Feuds Fade, New Stories Await",
            "desc": "Targets take 40% more Heavy Attack DMG from Jingran.\n\nThe DMG Multiplier of Chimei Wangliang is increased by 80%.\n\nUpon entering the Yinghuo state, Jingran gains the Parade of Thousand Souls effect for 15s. During this effect, if Jingran is the active Resonator in the team, upon dealing damage, Jingran summons Chimei Wangliang to attack the targets, dealing Fusion DMG, considered Heavy Attack DMG.\n\nChimei Wangliang can be summoned this way at an interval of 1s for up to 8 times. Parade of Thousand Souls ends and the available summon charges of Chimei Wangliang reset when either of the following conditions is met:\n- Cast Resonance Liberation - Burial of Thousand Souls.\n- Yinghuo ends or is removed.",
            "buffs": [
              {
                "label": "Heavy Attack DMG Taken",
                "trigger": "Default",
                "excerpt": "Targets take 40% more Heavy Attack DMG from Jingran",
                "desc": "Targets take 40% more Heavy Attack DMG from Jingran."
              },
              {
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Chimei Wangliang gains 80% DMG Multiplier Increase",
                "desc": "The DMG Multiplier of Chimei Wangliang is increased by 80%."
              }
            ]
          }
        ]
      }
    }
  }
});
