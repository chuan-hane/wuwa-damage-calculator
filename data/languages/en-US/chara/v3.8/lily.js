"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lily": {
        "name": "Lily",
        "weaponTypeName": "Pistols",
        "resources": [
          {
            "label": "Dream Perfume"
          },
          {
            "label": "Dreambell Chime"
          }
        ],
        "skills": [
          {
            "name": "Mend and Cleanse - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Mend and Cleanse - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Mend and Cleanse - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Mend and Cleanse - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Mend and Cleanse - Plunging Attack DMG"
          },
          {
            "name": "Mend and Cleanse - Dodge Counter DMG"
          },
          {
            "name": "Dream Blend - Resonance Skill - Nightmare Blend DMG"
          },
          {
            "name": "Dream Blend - Resonance Skill - Reverie Blend DMG"
          },
          {
            "name": "Into the Dream Cradle - Dreambind Continuous DMG"
          },
          {
            "name": "Dreamland of Flowers - Heavy Attack - Woven Fairytale DMG"
          },
          {
            "name": "Dreamland of Flowers - Heavy Attack - Woven Phantasm DMG"
          },
          {
            "name": "Dreamland of Flowers - Heavy Attack - Fairytale's Finale DMG"
          },
          {
            "name": "Dreamland of Flowers - Heavy Attack - Phantasm's End DMG"
          },
          {
            "name": "Blooming Dream - Intro Skill - First Bloom DMG"
          },
          {
            "name": "Blooming Dream - Intro Skill - Eternal Bloom DMG",
            "requiresResourceLabel": "Next Intro Skill after casting Resonance Liberation"
          }
        ],
        "combatStates": [
          {
            "label": "Heavy Attack variant",
            "entry": "Lily starts with Woven Fairytale and switches between Heavy Attack variants after casting Resonance Skill.",
            "options": [
              {
                "label": "Heavy Attack - Woven Fairytale"
              },
              {
                "label": "Heavy Attack - Woven Phantasm"
              }
            ]
          },
          {
            "label": "Combat phase",
            "entry": "The finisher triggers when the Woven Heavy Attack ends. At 300 Dreambell Chime, it can also trigger early. Casting Resonance Liberation enters Slumberland.",
            "effects": "Moving during Slumberland makes Dreambind attack continuously. Switching Resonators stops those attacks.",
            "options": [
              {
                "label": "Normal"
              },
              {
                "label": "Woven Heavy Attack ended"
              },
              {
                "label": "Slumberland"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Blooming Dream / Dreamland of Flowers",
            "label": "Crit. Rate",
            "trigger": "When casting a Woven Heavy Attack finisher or Intro Skill - Eternal Bloom",
            "excerpt": "Gain 0.5% Crit. Rate for every 1% Energy Regen above 100%, up to 80%",
            "desc": "For every 1% of Lily's Energy Regen exceeding 100%, this skill gains 0.5% Crit. Rate, up to 80%, and 1% Crit. DMG, up to 160%."
          },
          {
            "source": "Blooming Dream / Dreamland of Flowers",
            "label": "Crit. DMG",
            "trigger": "When casting a Woven Heavy Attack finisher or Intro Skill - Eternal Bloom",
            "excerpt": "Gain 1% Crit. DMG for every 1% Energy Regen above 100%, up to 160%",
            "desc": "For every 1% of Lily's Energy Regen exceeding 100%, this skill gains 0.5% Crit. Rate, up to 80%, and 1% Crit. DMG, up to 160%."
          },
          {
            "source": "Into the Dream Cradle · Dream Aroma",
            "label": "ATK",
            "trigger": "An ally casts an Intro Skill during Cradle Lullaby",
            "excerpt": "Dream Aroma raises team ATK by up to 7% per stack, up to 28% at four stacks",
            "desc": "Cradle Lullaby\n\nLasts for 25s. While this effect is active, each Intro Skill cast by a Resonator in the team other than Lily grants 1 stack of Dream Aroma. Cradle Lullaby is removed when Lily is the incoming Resonator.\n\nDream Aroma\n\nStacks up to 4 times. Each stack increases the ATK of all Resonators in the team by 0.1% for every 1% of Lily's Energy Regen exceeding 190%, up to 7%. This effect is removed when Lily is the incoming Resonator or when Cradle Lullaby ends."
          },
          {
            "source": "Dreamland of Flowers · Silvered Dream",
            "label": "ATK",
            "trigger": "Casting Outro Skill and consuming Sillage",
            "excerpt": "For the active Resonator who can trigger Unison Response, Unison Boon raises ATK by up to 7% per stack, up to 28% at four stacks",
            "desc": "Lasts for 30s.\nWhen the Resonator with this effect is the active Resonator and can trigger Unison Response, each stack of Unison Boon on the team increases their ATK by 0.1% for every 1% of Lily's Energy Regen exceeding 190%, up to 7%, counting up to 4 stacks of Unison Boon.\nThe active Resonator's Echo Skill DMG gains more Crit. Rate and Crit. DMG. For every 0.7% of Lily's Energy Regen exceeding 190%, the Crit. Rate of Echo Skill DMG is increased by 0.1%, up to 10%, and the Crit. DMG of Echo Skill DMG is increased by 0.2%, up to 20%.\nAll Resonators in the team gain increased resistance to interruption."
          },
          {
            "source": "Dreamland of Flowers · Silvered Dream",
            "label": "Echo Skill Crit. Rate",
            "trigger": "Casting Outro Skill and consuming Sillage",
            "excerpt": "Lily’s Energy Regen raises the active Resonator’s Echo Skill Crit. Rate by up to 10%",
            "desc": "Lasts for 30s.\nWhen the Resonator with this effect is the active Resonator and can trigger Unison Response, each stack of Unison Boon on the team increases their ATK by 0.1% for every 1% of Lily's Energy Regen exceeding 190%, up to 7%, counting up to 4 stacks of Unison Boon.\nThe active Resonator's Echo Skill DMG gains more Crit. Rate and Crit. DMG. For every 0.7% of Lily's Energy Regen exceeding 190%, the Crit. Rate of Echo Skill DMG is increased by 0.1%, up to 10%, and the Crit. DMG of Echo Skill DMG is increased by 0.2%, up to 20%.\nAll Resonators in the team gain increased resistance to interruption."
          },
          {
            "source": "Dreamland of Flowers · Silvered Dream",
            "label": "Echo Skill Crit. DMG",
            "trigger": "Casting Outro Skill and consuming Sillage",
            "excerpt": "Lily’s Energy Regen raises the active Resonator’s Echo Skill Crit. DMG by up to 20%",
            "desc": "Lasts for 30s.\nWhen the Resonator with this effect is the active Resonator and can trigger Unison Response, each stack of Unison Boon on the team increases their ATK by 0.1% for every 1% of Lily's Energy Regen exceeding 190%, up to 7%, counting up to 4 stacks of Unison Boon.\nThe active Resonator's Echo Skill DMG gains more Crit. Rate and Crit. DMG. For every 0.7% of Lily's Energy Regen exceeding 190%, the Crit. Rate of Echo Skill DMG is increased by 0.1%, up to 10%, and the Crit. DMG of Echo Skill DMG is increased by 0.2%, up to 20%.\nAll Resonators in the team gain increased resistance to interruption."
          },
          {
            "source": "Blooming Fragrance",
            "label": "All DMG Amplification",
            "trigger": "After casting Outro Skill",
            "excerpt": "All Resonators in the team gain 25% All DMG Amplification",
            "desc": "Resonators in the team gain 25% All DMG Amplification for 30s."
          }
        ],
        "chain": [
          {
            "name": "Look, White Flowers from the Ruins of Dreams",
            "desc": "Lily is immune to interruption while casting Heavy Attack - Woven Fairytale, Heavy Attack - Woven Phantasm, Heavy Attack - Fairytale's Finale, or Heavy Attack - Phantasm's End.\nWhile Cradle Lullaby is active, each Intro Skill cast by a Resonator in the team other than Lily now grants 2 stacks of Dream Aroma."
          },
          {
            "name": "Listen, a Requiem from the Dream Cradle",
            "desc": "While Cradle Lullaby is active, when a Resonator in the team other than Lily casts an Intro Skill, each stack of Dream Aroma additionally increases Crit. Rate by 2% and Crit. DMG by 6%.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "An ally casts an Intro Skill during Cradle Lullaby",
                "excerpt": "Gain 2% additional Crit. Rate per Dream Aroma stack, up to four stacks"
              },
              {
                "label": "Crit. DMG",
                "trigger": "An ally casts an Intro Skill during Cradle Lullaby",
                "excerpt": "Gain 6% additional Crit. DMG per Dream Aroma stack, up to four stacks"
              }
            ]
          },
          {
            "name": "May Your Soul Wander No More",
            "desc": "Lily additionally gains 170 points of Dream Perfume upon entering combat, triggered once every 12s. After Lily casts Intro Skill - Eternal Bloom, she additionally gains 170 points of Dream Perfume.\nCasting Resonance Liberation - Into the Dream Cradle additionally restores 10 points of Concerto Energy.\nDealing DMG with Heavy Attack - Fairytale's Finale or Heavy Attack - Phantasm's End additionally restores 10 points of Resonance Energy.\nDuring Heavy Attack - Woven Fairytale or Heavy Attack - Woven Phantasm, Lily gains Dreambell Chime faster."
          },
          {
            "name": "May Your Past Sink into Silence",
            "desc": "Slumberland's healing is increased by 30%."
          },
          {
            "name": "May You Find Peace in Endless Light",
            "desc": "While Lily is in Slumberland, the pull-in effect range is increased by 50% when a Resonator in the team other than Lily casts Intro Skill."
          },
          {
            "name": "May My Reverie Never End",
            "desc": "The Spectro DMG dealt by Heavy Attack - Fairytale's Finale and Heavy Attack - Phantasm's End is increased by 100%.\nThe Spectro DMG dealt by Intro Skill - Eternal Bloom is increased by 700%.",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "When casting a Woven Heavy Attack finisher",
                "excerpt": "Fairytale’s Finale and Phantasm’s End deal 100% more Spectro DMG"
              },
              {
                "label": "Spectro DMG Bonus",
                "trigger": "When casting Intro Skill - Eternal Bloom",
                "excerpt": "Eternal Bloom deals 700% more Spectro DMG"
              }
            ]
          }
        ]
      }
    }
  }
});
