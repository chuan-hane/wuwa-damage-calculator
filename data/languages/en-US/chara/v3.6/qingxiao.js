"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "qingxiao": {
        "name": "Qingxiao",
        "weaponTypeName": "Sword",
        "resources": [
          { "label": "Qin Heart" },
          { "label": "Sword Cadence" },
          { "label": "Heart Sword Intent" },
          { "label": "Gathered Mind" },
          { "label": "World in Chorus" },
          { "label": "Exorcising Seal" }
        ],
        "skills": [
          { "name": "Basic Attack - Stringblade Stage 1 DMG" },
          { "name": "Basic Attack - Stringblade Stage 2 DMG" },
          { "name": "Basic Attack - Stringblade Stage 3 DMG" },
          { "name": "Basic Attack - Stringblade Stage 4 DMG" },
          { "name": "Heavy Attack - Stringblade DMG", "requiresResourceLabel": "Qin Heart and Sword Cadence are full" },
          { "name": "Mid-air Attack - Stringblade Stage 1 DMG" },
          { "name": "Mid-air Attack - Stringblade Stage 2 DMG" },
          { "name": "Mid-air Attack - Stringblade Stage 3 DMG" },
          { "name": "Plunging Attack DMG" },
          { "name": "Dodge Counter - Stringblade DMG" },
          { "name": "Severing Note: Judgement DMG" },
          { "name": "Severing Note: Ascendant DMG" },
          { "name": "Resonance Liberation - Billows Beneath Heaven DMG" },
          { "name": "Intro Skill - Tonality Shift DMG" },
          { "name": "Basic Attack - Ephemeral Transcendence Stage 1 DMG" },
          { "name": "Basic Attack - Ephemeral Transcendence Stage 2 DMG" },
          { "name": "Basic Attack - Ephemeral Transcendence Stage 3 DMG" },
          { "name": "Basic Attack - Ephemeral Transcendence Stage 4 DMG" },
          { "name": "Dodge Counter - Ephemeral Transcendence DMG" },
          { "name": "Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence DMG", "requiresResourceLabel": "Heart Sword Intent is full" },
          { "name": "Lingering Song - Outro Skill DMG" },
          { "name": "Sequence 1 - Juque Perdition DMG", "requiresResourceLabel": "Has Exorcising Seal" }
        ],
        "combatStates": [
          {
            "label": "Qingxiao Form",
            "inactiveLabel": "Form not selected",
            "entry": "Cast Heavy Attack - Stringblade with full Qin Heart and Sword Cadence to enter Ephemeral Transcendence after the attack. Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence ends the form.",
            "effects": "The selected form controls which Basic Attacks, Dodge Counter, and enhanced Heavy Attack are available.",
            "options": [
              { "label": "Normal", "valueLabel": "Normal Form" },
              { "label": "Ephemeral Transcendence", "valueLabel": "Ephemeral Transcendence" }
            ]
          },
          {
            "label": "Target Mindlock",
            "idLabel": "Mindlock",
            "inactiveLabel": "Target has no Mindlock",
            "entry": "Gathered Mind, Heavy Attack - Stringblade, and inflicting Tune Strain - Interfered can apply Mindlock to the target.",
            "effects": "Each Mindlock stack increases Qingxiao's specified skill DMG. Sequence 2 raises the stack limit to 25.",
            "options": [
              { "label": "Has Mindlock", "valueLabel": "Target Mindlock" }
            ]
          },
          {
            "label": "Target Tune Strain",
            "idLabel": "Target Tune Strain",
            "inactiveLabel": "Target has no Tune Strain",
            "entry": "Qingxiao inflicts Tune Strain - Shifting when dealing damage. Tune Break DMG against the shifted target can inflict Tune Strain - Interfered.",
            "effects": "When responding to Tune Strain - Interfered, each stack converts Qingxiao's Tune Break Boost into Final DMG Bonus.",
            "options": [
              { "label": "Tune Strain - Shifting", "valueLabel": "Target Tune Strain - Shifting" },
              { "label": "Tune Strain - Interfered", "valueLabel": "Target Tune Strain - Interfered" }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Formless Heart Sword",
            "label": "DMG Multiplier Increase",
            "trigger": "Before Heaven's Reckoning is unlocked",
            "excerpt": "Ephemeral Transcendence Basic Attacks and Dodge Counter gain 100% DMG Multiplier Increase before Heaven's Reckoning is unlocked",
            "desc": "Before Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence is unlocked, Basic Attack - Ephemeral Transcendence and Dodge Counter - Ephemeral Transcendence gain a 100% DMG Multiplier increase."
          },
          {
            "source": "Forte Circuit: Heaven's Clarity",
            "label": "DMG Multiplier Increase",
            "trigger": "After casting Heavy Attack - Stringblade with Heaven's Clarity",
            "excerpt": "The next Heaven's Reckoning: Ephemeral Transcendence gains 100% DMG Multiplier Increase",
            "desc": "Upon entering combat or casting Resonance Liberation - Billows Beneath Heaven, gain Heaven's Clarity. Casting Heavy Attack - Stringblade applies 3 stacks of Mindlock to nearby targets and increases the DMG Multiplier of the next Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence by 100%. Switching to another Resonator ends the DMG Multiplier increase. Casting Heaven's Reckoning removes Heaven's Clarity."
          },
          {
            "source": "Inherent Skill: To Know, To Banish",
            "label": "DMG Amplification",
            "trigger": "Target has Mindlock",
            "excerpt": "Each Mindlock stack Amplifies specified skill DMG by 2%",
            "desc": "Heavy Attack - Stringblade, Basic Attack - Ephemeral Transcendence, Dodge Counter - Ephemeral Transcendence, Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence, and Resonance Liberation - Billows Beneath Heaven deal 2% more DMG per Mindlock stack on the target, with an additional 5% per stack for the first 7 stacks."
          },
          {
            "source": "Inherent Skill: To Know, To Banish",
            "label": "DMG Amplification",
            "trigger": "Target has the first 7 Mindlock stacks",
            "excerpt": "Each of the first 7 Mindlock stacks additionally Amplifies specified skill DMG by 5%",
            "desc": "Heavy Attack - Stringblade, Basic Attack - Ephemeral Transcendence, Dodge Counter - Ephemeral Transcendence, Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence, and Resonance Liberation - Billows Beneath Heaven deal 2% more DMG per Mindlock stack on the target, with an additional 5% per stack for the first 7 stacks."
          },
          {
            "source": "Tune Break: Draw and Sunder",
            "label": "Final DMG Bonus",
            "trigger": "Responding to Tune Strain - Interfered",
            "excerpt": "Each Tune Strain - Interfered stack converts Tune Break Boost into Final DMG Bonus",
            "desc": "For each Tune Strain - Interfered stack on the target, every point of Qingxiao's Tune Break Boost increases the total DMG she deals to that target by 0.12%. While Qingxiao is in the team, the target's Tune Strain - Interfered max stack limit is increased by 1."
          }
        ],
        "chain": [
          {
            "name": "Like Clouds That Meet and Drift Apart",
            "desc": "Crit. Rate is increased by 16%.\n\nThe max stack limit of Swordlight Ward is increased to 2. Casting Heavy Attack - Stringblade additionally grants 1 stacks of Swordlight Ward.\n\nUpon entering combat, gain 25 stack of Exorcising Seal.\nAfter Basic Attack - Stringblade, Mid-air Attack - Stringblade, or Basic Attack - Ephemeral Transcendence deals damage, if Qingxiao has Exorcising Seal, remove Exorcising Seal and trigger Juque Perdition, dealing Aero DMG equal to 400% of Qingxiao's ATK, considered Basic Attack DMG. This effect can be triggered up to once per second. For each stack of Exorcising Seal removed, the target takes 4% more DMG from Juque Perdition for 2s.\nExorcising Seal stacks up to 25 times.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "Default",
                "excerpt": "Crit. Rate +16%"
              },
              {
                "label": "Juque Perdition DMG Taken",
                "trigger": "When Exorcising Seal is removed",
                "excerpt": "Each removed Exorcising Seal stack increases Juque Perdition DMG taken by 4%, up to 100% at 25 stacks"
              }
            ]
          },
          {
            "name": "Like Petals That Fall Without a Sound",
            "desc": "The DMG Multiplier of Heavy Attack - Stringblade is increased by 40%.\n\nAfter entering combat, the max stack limit of Mindlock on nearby enemies is increased to 25.\nThe max stack limit of Gathered Mind from Inherent Skill - Sea of Thought, World of Dust is increased to 25.\n\nHeaven's Clarity is enhanced:\nCasting Heavy Attack - Stringblade now inflicts 6 stack of Mindlock on nearby targets.",
            "buffs": [
              {
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Heavy Attack - Stringblade DMG Multiplier +40%"
              }
            ]
          },
          {
            "name": "Dreams Fade, Sword Abides",
            "desc": "The Crit. DMG of Resonance Liberation - Billows Beneath Heaven is increased by 100%.\n\nDuring Heavy Attack - Stringblade, gain World in Chorus stacks equal to the highest Mindlock stack count present among nearby enemies.\nWorld in Chorus: Each stack increases the DMG Multiplier of Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence by 3%. World in Chorus is removed after casting Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence.\n\nThe Gathered Mind effect of Inherent Skill - Sea of Thought, World of Dust now inflicts 2 stacks of Tune Strain - Interfered.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "Default",
                "excerpt": "Billows Beneath Heaven Crit. DMG +100%"
              },
              {
                "label": "DMG Multiplier Increase",
                "trigger": "After gaining World in Chorus",
                "excerpt": "Each World in Chorus stack increases Heaven's Reckoning DMG Multiplier by 3%, up to 75%"
              }
            ]
          },
          {
            "name": "Wherever the Road Leads, Side by Side",
            "desc": "After a Resonator in the team inflicts Tune Strain - Shifting, their ATK is increased by 20% for 8s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After inflicting Tune Strain - Shifting",
                "excerpt": "The Resonator inflicting Tune Strain - Shifting gains 20% ATK"
              }
            ]
          },
          {
            "name": "Cold Steel That Longs to Warm the Snow",
            "desc": "The DMG Multiplier of Resonance Skill - Severing Note: Judgement is increased by 100%.\n\nWhile moving in Sword Flight, Flight Qi cost is reduced by 30%.",
            "buffs": [
              {
                "label": "DMG Multiplier Increase",
                "trigger": "Default",
                "excerpt": "Severing Note: Judgement DMG Multiplier +100%"
              }
            ]
          },
          {
            "name": "Cleanse This Tarnished Age, Till All Runs Clear",
            "desc": "Targets take 40% more DMG from Qingxiao's Heavy Attack - Stringblade, Heavy Attack - Heaven's Reckoning: Ephemeral Transcendence, Resonance Liberation - Billows Beneath Heaven, and Juque Perdition.\n\nDuring Heavy Attack - Stringblade, gain Exorcising Seal stacks equal to the highest Mindlock stack count present among nearby enemies.\n\nFor each stack of Mindlock on the target, the DMG of Juque Perdition taken by the target is Amplified by 2%. The first 7 stack additionally grant 5% DMG Amplification.\n\nWhen Inherent Skill - To Know, To Banish is unlocked, the DMG of Juque Perdition on targets with Mindlock is increased by 2% for each stack of Mindlock. The first 7 stacks additionally grant 5% DMG increase.\n\nThe effect of Qingxiao's response to Tune Strain - Interfered is increased by 20%.",
            "buffs": [
              {
                "label": "DMG Taken",
                "trigger": "Default",
                "excerpt": "Targets take 40% more DMG from the specified Heavy Attacks, Resonance Liberation, and Juque Perdition"
              },
              {
                "label": "Juque Perdition DMG Taken",
                "trigger": "Target has Mindlock",
                "excerpt": "Each Mindlock stack Amplifies Juque Perdition DMG taken by 2%"
              },
              {
                "label": "Juque Perdition DMG Taken",
                "trigger": "Target has the first 7 Mindlock stacks",
                "excerpt": "Each of the first 7 Mindlock stacks additionally Amplifies Juque Perdition DMG taken by 5%"
              },
              {
                "label": "Juque Perdition DMG Amplification",
                "trigger": "Target has Mindlock",
                "excerpt": "Each Mindlock stack Amplifies Juque Perdition DMG by 2%"
              },
              {
                "label": "Juque Perdition DMG Amplification",
                "trigger": "Target has the first 7 Mindlock stacks",
                "excerpt": "Each of the first 7 Mindlock stacks additionally Amplifies Juque Perdition DMG by 5%"
              },
              {
                "label": "Final DMG Bonus",
                "trigger": "Responding to Tune Strain - Interfered",
                "excerpt": "Tune Strain - Interfered response buff effect is increased by 20%"
              }
            ]
          }
        ]
      }
    }
  }
});
