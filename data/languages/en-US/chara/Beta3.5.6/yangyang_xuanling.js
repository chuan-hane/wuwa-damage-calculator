"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "yangyang_xuanling": {
        "name": "Yangyang: Xuanling",
        "resources": [
          { "label": "Melody" },
          { "label": "Azure Plume" }
        ],
        "skills": [
          { "name": "Basic Attack - Azure Sword Stance Stage 1 DMG" },
          { "name": "Basic Attack - Azure Sword Stance Stage 2 DMG" },
          { "name": "Basic Attack - Azure Sword Stance Stage 3 DMG" },
          { "name": "Basic Attack - Azure Sword Stance Stage 4 DMG" },
          { "name": "Basic Attack - Feather Sword Stance Stage 1 DMG" },
          { "name": "Basic Attack - Feather Sword Stance Stage 2 DMG" },
          { "name": "Basic Attack - Feather Sword Stance Stage 3 DMG" },
          { "name": "Basic Attack - Feather Sword Stance Stage 4 DMG" },
          { "name": "Mid-air Attack - Azure Sword Stance DMG" },
          { "name": "Mid-air Attack - Feather Sword Stance DMG" },
          { "name": "Dodge Counter - Azure Sword Stance DMG" },
          { "name": "Dodge Counter - Feather Sword Stance DMG" },
          { "name": "Sword Stance Switch: Feather DMG" },
          { "name": "Sword Stance Switch: Azure DMG" },
          { "name": "Hush of a Thousand Voices DMG" },
          { "name": "Shadow of Xuanling DMG" },
          { "name": "Skybound Feather DMG" },
          { "name": "As the Wind Wills DMG" },
          { "name": "Resonance Skill - Sword Stance Flow: Azure DMG" },
          { "name": "Resonance Skill - Sword Stance Flow: Feather DMG" },
          { "name": "Heavy Attack - Azure Sword Stance DMG" },
          { "name": "Heavy Attack - Feather Sword Stance DMG" },
          { "name": "Mid-air Attack - Feather Sword Stance: Feather Fall DMG" },
          { "name": "Basic Attack - Havoc in Bloom Stage 1 DMG" },
          { "name": "Basic Attack - Havoc in Bloom Stage 2 DMG" },
          { "name": "Basic Attack - Havoc in Bloom Stage 3 DMG" },
          { "name": "Dodge Counter - Havoc in Bloom Stage 1 DMG" },
          { "name": "Dodge Counter - Havoc in Bloom Stage 2 DMG" },
          { "name": "Dodge Counter - Havoc in Bloom Stage 3 DMG" },
          { "name": "Shadow of Xuanling: Unfaltering DMG" },
          { "name": "Shadow of Xuanling: Strung DMG" },
          { "name": "Shadow of Xuanling: Withered DMG" }
        ],
        "combatStates": [
          {
            "label": "Sword Stance",
            "inactiveLabel": "No stance confirmed",
            "entry": "Yangyang: Xuanling starts in Azure Sword Stance and can switch between Azure Sword Stance and Feather Sword Stance with Resonance Skill.",
            "options": [
              { "label": "Azure Sword Stance", "valueLabel": "Azure Sword Stance" },
              { "label": "Feather Sword Stance", "valueLabel": "Feather Sword Stance" }
            ]
          },
          {
            "label": "Hark the Wind",
            "inactiveLabel": "Not in Hark the Wind",
            "entry": "Casting Mid-air Attack - Feather Fall enters Hark the Wind for 12s.",
            "options": [
              { "label": "Active", "valueLabel": "Hark the Wind" }
            ]
          },
          {
            "label": "Voice upon Voice",
            "inactiveLabel": "Voice upon Voice not gained",
            "entry": "Casting Hush of a Thousand Voices grants Voice upon Voice. It is removed after the next Sword Stance Flow summons Shadow of Xuanling.",
            "options": [
              { "label": "Gained", "valueLabel": "Voice upon Voice" }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has 1-3 stacks of Havoc Bane",
            "excerpt": "Each of the first 3 Havoc Bane stacks amplifies Yangyang: Xuanling's DMG by 10%",
            "desc": "When the target has 1 to 3 stacks of Havoc Bane, each stack amplifies Yangyang: Xuanling's DMG dealt to it by 10%, up to 30%."
          },
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has 4-6 stacks of Havoc Bane",
            "excerpt": "Each of the 4th to 6th Havoc Bane stacks amplifies Yangyang: Xuanling's DMG by 12%",
            "desc": "When the target has 4 to 6 stacks of Havoc Bane, each of those stacks amplifies Yangyang: Xuanling's DMG dealt to it by 12%, up to 36%."
          },
          {
            "source": "Forte Circuit: The Way of Ten Thousand Voices",
            "label": "Crit. DMG",
            "trigger": "Casting Heavy Attack - Azure Sword Stance",
            "excerpt": "Heavy Attack - Azure Sword Stance Crit. DMG +160%",
            "desc": "When casting Heavy Attack - Azure Sword Stance, Yangyang: Xuanling gains Desperate Breath. If she is the active Resonator, this Heavy Attack gains 160% Crit. DMG."
          },
          {
            "source": "Forte Circuit: The Way of Ten Thousand Voices",
            "label": "Crit. DMG",
            "trigger": "Casting Heavy Attack - Feather Sword Stance",
            "excerpt": "Feather heavy attacks and Havoc in Bloom gain 160% Crit. DMG",
            "desc": "When casting Heavy Attack - Feather Sword Stance, Yangyang: Xuanling gains Flowing Gale for 15s. Heavy Attack - Feather Sword Stance, Feather Fall, Havoc in Bloom, and Dodge Counter - Havoc in Bloom gain 160% Crit. DMG."
          },
          {
            "source": "Forte Circuit: Windbound Oath",
            "label": "Crit. DMG",
            "trigger": "After the team inflicts Havoc Bane",
            "excerpt": "Each Windbound Oath stack grants 25% Crit. DMG to listed heavy attacks",
            "desc": "When nearby Resonators in the team inflict Havoc Bane, Yangyang: Xuanling gains 1 stack of Windbound Oath for 4s, up to 6 stacks. While active, each stack grants 25% Crit. DMG to listed heavy attacks, up to 150%."
          },
          {
            "source": "Outro Skill: As the Wind Wills",
            "label": "Havoc DMG Amplification",
            "trigger": "After inflicting Havoc Bane during Palace Shift",
            "excerpt": "Non-Xuanling teammates amplify Havoc DMG by 20% after inflicting Havoc Bane",
            "desc": "Resonators in the team other than Yangyang: Xuanling gain Palace Shift for 20s. During Palace Shift, after they inflict Havoc Bane on a target, their Havoc DMG is amplified by 20%. Casting this skill resets the effect."
          }
        ],
        "chain": [
          {
            "name": "At the wind's breath, the blossoms wake",
            "desc": "After Resonance Skill - Sword Stance Flow: Azure or Resonance Skill - Sword Stance Flow: Feather hits a target, Shadow of Xuanling: Unfaltering is summoned to deal Havoc DMG equal to 337.98% of Yangyang: Xuanling's ATK. This DMG is considered Heavy Attack DMG."
          },
          {
            "name": "River carries her song away",
            "desc": "Heavy Attack - Azure Sword Stance, Heavy Attack - Feather Sword Stance, Feather Fall, Havoc in Bloom, and Dodge Counter - Havoc in Bloom deal 100% more DMG.",
            "buffs": [
              {
                "label": "Listed Heavy Attack DMG Amplification",
                "trigger": "Default",
                "excerpt": "Listed heavy attacks deal 100% more DMG"
              }
            ]
          },
          {
            "name": "My grief follows you into the clouds",
            "desc": "Hush of a Thousand Voices deals 175% more DMG. After casting Intro Skill or Sword Stance Flow, the Havoc Bane stack limit on nearby targets increases by 3 for 20s.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Amplification",
                "trigger": "Default",
                "excerpt": "Hush of a Thousand Voices DMG Amplification +175%"
              },
              {
                "label": "Havoc Bane stack limit",
                "trigger": "After Intro Skill or Sword Stance Flow",
                "excerpt": "Havoc Bane stack limit +3"
              }
            ]
          },
          {
            "name": "Across the miles, a letter and my longing",
            "desc": "Casting Intro Skill, Sword Stance Switch, or Sword Stance Flow increases team ATK by 20% for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After Intro Skill or Sword Stance Skill",
                "excerpt": "Team ATK +20%"
              }
            ]
          },
          {
            "name": "Take wing. Take wing.",
            "desc": "When Yangyang: Xuanling takes fatal damage, she does not fall and restores HP equal to 50% of her Max HP."
          },
          {
            "name": "Let the azure keep its light",
            "desc": "When Yangyang: Xuanling inflicts Havoc Bane, she gains All Voices Flow. During All Voices Flow, targets take 40% more Heavy Attack DMG from Yangyang: Xuanling.",
            "buffs": [
              {
                "label": "Heavy Attack Vulnerability",
                "trigger": "After inflicting Havoc Bane",
                "excerpt": "Targets take 40% more Heavy Attack DMG from Yangyang: Xuanling"
              },
              {
                "label": "Crit. Rate",
                "trigger": "During Still as Deadwood",
                "excerpt": "Shadow of Xuanling: Withered is guaranteed to crit"
              }
            ]
          }
        ]
      }
    }
  }
});
