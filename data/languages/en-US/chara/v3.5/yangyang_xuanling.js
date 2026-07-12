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
          { "name": "Shadow of Xuanling: Strung Notes DMG" },
          { "name": "Shadow of Xuanling: Still as Withered Wood DMG", "requiresResourceLabel": "Still as Withered Wood triggered" },
          { "name": "Wraith of Sound DMG", "requiresResourceLabel": "Sword Stance Flow reset the Basic Attack cycle" }
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
          },
          {
            "label": "One with the Wind",
            "inactiveLabel": "One with the Wind not gained",
            "entry": "Gained at 6 Windbound stacks. Casting Sword Stance Flow: Azure or Sword Stance Flow: Feather makes Feather Release: Xuanling apply 6 Havoc Bane stacks, then removes this state.",
            "options": [
              { "label": "Gained", "valueLabel": "One with the Wind" }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has at least 1 stack of Havoc Bane",
            "excerpt": "At 1+ Havoc Bane stacks, the 1st stack amplifies Yangyang: Xuanling's DMG by 10%",
            "desc": "When a target has 1 to 3 stacks of Havoc Bane, each stack of Havoc Bane Amplifies the DMG from Yangyang: Xuanling by 10%, up to 30%."
          },
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has at least 2 stacks of Havoc Bane",
            "excerpt": "At 2+ Havoc Bane stacks, the 2nd stack amplifies Yangyang: Xuanling's DMG by 10%",
            "desc": "When a target has 1 to 3 stacks of Havoc Bane, each stack of Havoc Bane Amplifies the DMG from Yangyang: Xuanling by 10%, up to 30%."
          },
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has at least 3 stacks of Havoc Bane",
            "excerpt": "At 3+ Havoc Bane stacks, the 3rd stack amplifies Yangyang: Xuanling's DMG by 10%",
            "desc": "When a target has 1 to 3 stacks of Havoc Bane, each stack of Havoc Bane Amplifies the DMG from Yangyang: Xuanling by 10%, up to 30%."
          },
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has at least 4 stacks of Havoc Bane",
            "excerpt": "At 4+ Havoc Bane stacks, the 4th stack amplifies Yangyang: Xuanling's DMG by 12%",
            "desc": "When a target has 4 to 6 stacks of Havoc Bane, each stack of Havoc Bane Amplifies the DMG from Yangyang: Xuanling by 12%, up to 36%."
          },
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has at least 5 stacks of Havoc Bane",
            "excerpt": "At 5+ Havoc Bane stacks, the 5th stack amplifies Yangyang: Xuanling's DMG by 12%",
            "desc": "When a target has 4 to 6 stacks of Havoc Bane, each stack of Havoc Bane Amplifies the DMG from Yangyang: Xuanling by 12%, up to 36%."
          },
          {
            "source": "Inherent Skill: Unbroken Vow",
            "label": "DMG Amplification",
            "trigger": "Target has at least 6 stacks of Havoc Bane",
            "excerpt": "At 6 Havoc Bane stacks, the 6th stack amplifies Yangyang: Xuanling's DMG by 12%",
            "desc": "When a target has 4 to 6 stacks of Havoc Bane, each stack of Havoc Bane Amplifies the DMG from Yangyang: Xuanling by 12%, up to 36%."
          },
          {
            "source": "Forte Circuit: The Way of Ten Thousand Voices",
            "label": "Crit. DMG",
            "trigger": "Cast Heavy Attack - Azure Sword Stance when Bated Breath is off Cooldown",
            "excerpt": "When ready, Heavy Attack - Azure Sword Stance gains 160% Crit. DMG",
            "desc": "When casting Heavy Attack - Azure Sword Stance, Yangyang: Xuanling gains Bated Breath. If she is the active Resonator, this Heavy Attack gains 160% Crit. DMG. Bated Breath can be gained once every 25s and is removed when Heavy Attack - Azure Sword Stance ends."
          },
          {
            "source": "Forte Circuit: The Way of Ten Thousand Voices",
            "label": "Crit. DMG",
            "trigger": "Cast Heavy Attack - Feather Sword Stance when Streaming Storm is off Cooldown",
            "excerpt": "When ready, Feather heavy attacks and Havoc in Bloom gain 160% Crit. DMG",
            "desc": "When casting Heavy Attack - Feather Sword Stance, Yangyang: Xuanling gains Streaming Storm for 15s. Heavy Attack - Feather Sword Stance, Feather Fall, Havoc in Bloom, and Dodge Counter - Havoc in Bloom gain 160% Crit. DMG. Streaming Storm can be gained once every 25s."
          },
          {
            "source": "Forte Circuit: Feathered Oath",
            "label": "Crit. DMG",
            "trigger": "After the team inflicts Havoc Bane",
            "excerpt": "Each Feathered Oath stack grants 25% Crit. DMG to listed heavy attacks",
            "desc": "When nearby Resonators in the team inflict Havoc Bane, Yangyang: Xuanling gains 1 stack of Feathered Oath for 4s, up to 6 stacks. While active, each stack grants 25% Crit. DMG to listed heavy attacks, up to 150%."
          },
          {
            "source": "Outro Skill: As the Wind Wills",
            "label": "Havoc DMG Amplification",
            "trigger": "After inflicting Havoc Bane during Tonal Switch",
            "excerpt": "Non-Xuanling teammates amplify Havoc DMG by 20% after inflicting Havoc Bane",
            "desc": "Resonators in the team other than Yangyang: Xuanling gain Tonal Switch for 20s. During Tonal Switch, after they inflict Havoc Bane on a target, their Havoc DMG is amplified by 20%. Casting this skill resets the effect."
          }
        ],
        "chain": [
          {
            "name": "At the Wind's Breath, the Blossoms Wake",
            "desc": "Casting Resonance Skill - Sword Stance Flow: Azure or Resonance Skill - Sword Stance Flow: Feather summons a Shadow of Xuanling: Unfaltering to attack the target, dealing Havoc DMG equal to 337.98% of Yangyang: Xuanling's ATK. This DMG is considered Heavy Attack DMG.\nCasting Resonance Skill - Sword Stance Flow: Azure or Resonance Skill - Sword Stance Flow: Feather Stagnates nearby enemies.\n\nHeavy Attack - Azure Sword Stance, Basic Attack - Havoc in Bloom and Dodge Counter - Havoc in Bloom are immune to interruption."
          },
          {
            "name": "River Carries Her Song Away",
            "desc": "The DMG dealt by Heavy Attack - Azure Sword Stance, Heavy Attack - Feather Sword Stance, Mid-air Attack - Feather Fall,  Basic Attack - Havoc in Bloom, and Dodge Counter - Havoc in Bloom is increased by 100%.\n\nEvery time Yangyang: Xuanling remains out of combat for more than 4s after she leaves the combat state or revives, she gains the following effects once:\n- Gain Strung Notes, up to 1 stack. Casting Basic Attack - Azure Sword Stance or Basic Attack - Feather Sword Stance summons Shadow of Xuanling: Strung Notes to attack the target, dealing Havoc DMG equal to 337.98% of Yangyang: Xuanling's ATK, considered Heavy Attack DMG. Strung Notes is removed after Shadow of Xuanling: Strung Notes is summoned.\n- Restore 2 points of Azure Plume.\n- Reset the Cooldown of gaining Bated Breath and Streaming Storm.",
            "buffs": [
              {
                "label": "Listed Heavy Attack DMG Amplification",
                "trigger": "Default",
                "excerpt": "Listed heavy attacks deal 100% more DMG"
              }
            ]
          },
          {
            "name": "My Grief Follows You into the Clouds",
            "desc": "The DMG dealt via Resonance Liberation Hush of a Thousand Voices is Amplified by 175%.\n\nAfter casting Intro Skill - Skybound Feather, Resonance Skill - Sword Stance Flow: Azure, or Resonance Skill - Sword Stance Flow: Feather, increase the maximum Havoc Bane stacks on targets within a certain range by 3, lasting 20s. This effect does not stack.\n\nBasic Attack - Azure Sword Stance Stage 4, Basic Attack - Feather Sword Stance Stage 4, Heavy Attack - Azure Sword Stance, and Heavy Attack - Feather Sword Stance inflict 1 additional stack of Havoc Bane on the target.",
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
            "name": "Across the Miles, a Letter and My Longing",
            "desc": "When casting Intro Skill - Skybound Feather, Resonance Skill - Sword Stance Switch: Azure, Resonance Skill - Sword Stance Switch: Feather, Resonance Skill - Sword Stance Flow: Azure, or Resonance Skill - Sword Stance Flow: Feather, the ATK of Resonators in the team is increased by 20% for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After Intro Skill or Sword Stance Skill",
                "excerpt": "Team ATK +20%"
              }
            ]
          },
          {
            "name": "Take Wing. Take Wing.",
            "desc": "When Yangyang: Xuanling takes a fatal blow, she will not be downed, but instead recover HP equal to 50% of her Max HP while becoming immune to DMG and interruption for 3s. This effect can be triggered once every 10 min."
          },
          {
            "name": "Let the Azure Keep Its Light",
            "desc": "After Yangyang: Xuanling inflicts Havoc Bane on a target, gain Voice Flux for 30s. While Voice Flux is active, the Heavy Attack DMG from Yangyang: Xuanling is increased by 40%.\n\nCasting Resonance Skill - Sword Stance Flow: Azure or Resonance Skill - Sword Stance Flow: Feather grants Still as Withered Wood for 30s. While Still as Withered Wood is active, if Yangyang: Xuanling is on the field, then after nearby Resonators in the team inflict Glacio Chafe, Fusion Burst, Electro Flare, Aero Erosion, Spectro Frazzle, or Havoc Bane, Yangyang: Xuanling summons Shadow of Xuanling: Still as Withered Wood to attack the target, dealing Havoc DMG equal to 337.98% of Yangyang: Xuanling's ATK. The DMG of Shadow of Xuanling: Still as Withered Wood is considered Heavy Attack DMG and is guaranteed to be a critical hit.\n\nShadow of Xuanling: Still as Withered Wood can be summoned once every 1s, and Still as Withered Wood expires after it is summoned 5 times. When Still as Withered Wood expires or is removed, reset the available summon charges of Shadow of Xuanling: Still as Withered Wood. Still as Withered Wood has a Cooldown of 25s.",
            "buffs": [
              {
                "label": "Heavy Attack Vulnerability",
                "trigger": "After inflicting Havoc Bane",
                "excerpt": "Targets take 40% more Heavy Attack DMG from Yangyang: Xuanling"
              },
              {
                "label": "Crit. Rate",
                "trigger": "During Still as Withered Wood",
                "excerpt": "Shadow of Xuanling: Still as Withered Wood is guaranteed to crit"
              }
            ]
          }
        ]
      }
    }
  }
});
