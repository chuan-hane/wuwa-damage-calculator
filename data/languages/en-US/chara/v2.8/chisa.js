"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "chisa": {
        "name": "Chisa",
        "skills": [
          {
            "name": "Reign of Silence - Stage 1 DMG"
          },
          {
            "name": "Reign of Silence - Stage 2 DMG"
          },
          {
            "name": "Reign of Silence - Death Snip DMG"
          },
          {
            "name": "Reign of Silence - Death Snip Additional DMG"
          },
          {
            "name": "Reign of Silence - Thread Withdrawn DMG"
          },
          {
            "name": "Reign of Silence - Rending Lunge DMG"
          },
          {
            "name": "Reign of Silence - Heavy Attack DMG"
          },
          {
            "name": "Reign of Silence - Mid-air Attack DMG"
          },
          {
            "name": "Reign of Silence - Severed Facet DMG"
          },
          {
            "name": "Reign of Silence - Hanging Finality DMG"
          },
          {
            "name": "Reign of Silence - Dodge Counter DMG"
          },
          {
            "name": "Reign of Silence - Eye of Unraveling - Retraction DMG"
          },
          {
            "name": "Fractured Composition - Eye of Unraveling DMG"
          },
          {
            "name": "Fractured Composition - Serrated Loop DMG",
            "requiresResourceLabel": "Ring of Chainsaw full"
          },
          {
            "name": "Fractured Composition - Serrated Loop Hold DMG",
            "requiresResourceLabel": "Ring of Chainsaw full"
          },
          {
            "name": "Moment of Nihility - Skill DMG"
          },
          {
            "name": "Reverberance - Return - Skill DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 1 DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 2 DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 2 Hold DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 2: Discordance DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 3 DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 3 Hold DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 3: Falltone DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Chainsaw Mode - Dodge Counter DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Chainsaw Mode - Dodge Counter Hold DMG"
          },
          {
            "name": "Sight of Unraveling - Oblivion - Sawring - Eradication DMG"
          }
        ],
        "resources": [
          {
            "label": "Ring of Chainsaw"
          }
        ],
        "combatStates": [
          {
            "label": "Chainsaw Mode",
            "idLabel": "Chainsaw Mode",
            "inactiveLabel": "Not in Chainsaw Mode",
            "entry": "This skill cannot be cast while in Chainsaw Mode.",
            "effects": "This skill cannot be cast while in Chainsaw Mode.",
            "options": [
              {
                "label": "Chainsaw Mode",
                "valueLabel": "Chainsaw Mode"
              }
            ]
          },
          {
            "label": "Woven Myriad - Convergence",
            "idLabel": "Woven Myriad - Convergence",
            "inactiveLabel": "Not in Woven Myriad - Convergence",
            "entry": "Casting this skill sends Chisa into Woven Myriad - Convergence for 15s.",
            "effects": "Casting this skill sends Chisa into Woven Myriad - Convergence for 15s.",
            "options": [
              {
                "label": "Woven Myriad - Convergence",
                "valueLabel": "Woven Myriad - Convergence"
              }
            ]
          },
          {
            "label": "Target Void Entanglement",
            "idLabel": "Unseen Snare",
            "inactiveLabel": "Not in Unseen Snare",
            "entry": "When a Resonator in the team defeats a target marked by Unseen Snare, the Cooldown of Chisa's Resonance Skill Eye of Unraveling is reset, triggered up to once every 3s.",
            "effects": "When a Resonator in the team defeats a target marked by Unseen Snare, the Cooldown of Chisa's Resonance Skill Eye of Unraveling is reset, triggered up to once every 3s.",
            "options": [
              {
                "label": "Unseen Snare",
                "valueLabel": "Unseen Snare"
              },
              {
                "label": "Unseen Snare - Finality",
                "valueLabel": "Unseen Snare - Finality"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Outro Skill: Unraveling - Law Zero",
            "label": " stack cap",
            "trigger": "After casting Intro Skill",
            "excerpt": " stack cap +3",
            "desc": " stack cap +3"
          },
          {
            "source": "Forte Circuit: Thread of Bane",
            "label": "DEF Ignore",
            "trigger": "In Unseen Snare - Finality",
            "excerpt": "DEF Ignore +18%",
            "desc": "When Resonators in the team with Thread of Bane defeat a target marked by Unseen Snare, Chisa gains Sight of Unraveling, lasting 3s."
          },
          {
            "source": "Resonance Liberation: Woven Myriad - Convergence",
            "label": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 1 DMG Multiplier Increase",
            "trigger": "In Woven Myriad - Convergence",
            "excerpt": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 1 DMG Multiplier Increase +120%",
            "desc": "Casting this skill sends Chisa into Woven Myriad - Convergence for 15s."
          },
          {
            "source": "Inherent Skill: All Ends Here",
            "label": "Havoc DMG Bonus",
            "trigger": "After casting Reverberance - Return - Skill DMG / Moment of Nihility - Skill DMG",
            "excerpt": "Havoc DMG Bonus +20%",
            "desc": "Havoc DMG Bonus +20%"
          },
          {
            "source": "Inherent Skill: All Ends Here",
            "label": "Healing Bonus",
            "trigger": "After casting Reverberance - Return - Skill DMG / Moment of Nihility - Skill DMG",
            "excerpt": "Healing Bonus +20%",
            "desc": "Healing Bonus +20%"
          }
        ],
        "chain": [
          {
            "name": "Wandering Through the Desolate Corridors",
            "desc": "Chisa is immune to interruption during Sawring - Blitz, Sawring - Eradication, and Chainsaw Mode - Dodge Counter\n\nInflicting Unseen Snare grants the following additional effects:\n- Chisa's ATK is increased by 30% for 15s.\n- Deal fixed 61803 points of Havoc DMG. The target's HP can be reduced to 61.80% at most and each target can take this damage only once. This instance of damage is considered Basic Attack DMG that does not bear any effect from damage bonuses.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "ATK +30%"
              }
            ]
          },
          {
            "name": "Into the Web of Endless Bonds",
            "desc": "Ignore 10% of the target's Havoc RES when dealing damage.\nNearby Resonators in the team with Thread of Bane gain 50% All-Attribute DMG Bonus.",
            "buffs": [
              {
                "label": "RES Shred",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "RES Shred +10%"
              },
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "All-Attribute DMG Bonus +50%"
              }
            ]
          },
          {
            "name": "Across the Confusion of the Long Night",
            "desc": "The DMG Multipliers of Sawring - Blitz, Chainsaw Mode - Dodge Counter and Sawring - Eradication are increased by 120%. This effect is mutually stackable with that of Woven Myriad - Convergence.\nThe bonus DMG Multiplier for Sawring - Eradication granted by Sawring- Blitz and Chainsaw Mode - Dodge Counter when Ring of Chainsaw is consumed is increased by 120%. This effect is mutually stackable with that of Woven Myriad - Convergence.\nThe Vibration Strength Reduction Rate of Sawring - Blitz, Chainsaw Mode - Dodge Counter and Sawring - Eradication is increased by 50%.",
            "buffs": [
              {
                "label": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 1 DMG Multiplier Increase",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "Sight of Unraveling - Oblivion - Sawring - Blitz Stage 1 DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "Severing the Endless Cycle of Tragic Fate",
            "desc": "The effect of Unseen Snare becomes:\nWhen targets marked by Unseen Snare take direct damage from Resonators, Chisa inflicts 1 stacks of Havoc Bane on them. This effect is triggered up to once every 1s."
          },
          {
            "name": "Thousands of Lights to Guide the Way Home",
            "desc": "Resonance Liberation Moment of Nihility gains 100% DMG Bonus.\nLifethread - Glide costs 50% less Lifethread - Jetstream.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "Resonance Liberation DMG Bonus +100%"
              }
            ]
          },
          {
            "name": "Thus, Hope is Rekindled with the Rising Dawn",
            "desc": "When Chisa takes a fatal blow during Sawring - Blitz, Sawring - Eradication, and Chainsaw Mode - Dodge Counter, she will remain standing with at least 1 HP.\n\nUnseen Snare becomes Unseen Snare - Finality, which has the following effects:\n- Unseen Snare - Finality has all the effects of Unseen Snare.\n- Targets affected by Unseen Snare - Finality takes 30% Amplified DMG from Negative Statuses.\n- Targets affected by Unseen Snare - Finality takes 40% increased DMG from Chisa.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "DMG Increase +30%"
              },
              {
                "label": "Vulnerability",
                "trigger": "In Unseen Snare - Finality",
                "excerpt": "Vulnerability +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
