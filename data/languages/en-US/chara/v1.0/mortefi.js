"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "mortefi": {
        "name": "Mortefi",
        "skills": [
          {
            "name": "Impromptu Show - Stage 1 DMG"
          },
          {
            "name": "Impromptu Show - Stage 2 DMG"
          },
          {
            "name": "Impromptu Show - Stage 3 DMG"
          },
          {
            "name": "Impromptu Show - Stage 4 DMG"
          },
          {
            "name": "Impromptu Show - Mid-air Attack Total DMG"
          },
          {
            "name": "Impromptu Show - Aimed Shot Damage"
          },
          {
            "name": "Impromptu Show - Fully Charged Aimed Shot Damage"
          },
          {
            "name": "Impromptu Show - Dodge Counter DMG"
          },
          {
            "name": "Passionate Variation - Skill DMG"
          },
          {
            "name": "Violent Finale - Violent Finale Damage"
          },
          {
            "name": "Violent Finale - Marcato Damage"
          },
          {
            "name": "Dissonance - Skill DMG"
          },
          {
            "name": "Fury Fugue - Fury Fugue Damage",
            "requiresResourceLabel": "Annoyance at least 100"
          }
        ],
        "resources": [
          {
            "label": "Annoyance"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Harmonic Control",
            "label": "Fury Fugue - Fury Fugue Damage DMG Multiplier Increase",
            "trigger": "After casting Passionate Variation - Skill DMG",
            "excerpt": "Fury Fugue - Fury Fugue Damage DMG Multiplier Increase +25%",
            "desc": "Fury Fugue - Fury Fugue Damage DMG Multiplier Increase +25%"
          },
          {
            "source": "Inherent Skill: Rhythmic Vibrato",
            "label": "Violent Finale - Marcato Damage DMG Multiplier Increase",
            "trigger": "After casting Violent Finale - Marcato Damage",
            "excerpt": "Violent Finale - Marcato Damage DMG Multiplier Increase +1.5% per stack",
            "desc": "Violent Finale - Marcato Damage DMG Multiplier Increase +1.5% per stack"
          },
          {
            "source": "Outro Skill: Rage Transposition",
            "label": "Heavy Attack DMG Increase",
            "trigger": "Default",
            "excerpt": "Heavy Attack DMG Increase +38%",
            "desc": "Heavy Attack DMG Increase +38%"
          }
        ],
        "chain": [
          {
            "name": "Solitary Etude",
            "desc": "During Resonance Liberation Burning Rhapsody, Mortefi launches Coordinated Attacks when the on-field character performs their Resonance Skills, firing 2 Resonance Liberation's Marcato hits, dealing Fusion DMG."
          },
          {
            "name": "Hypocritical Hymn",
            "desc": "After using the Echo Skill, Mortefi restores an additional 10 Resonance Energy. This can be triggered once every 20 second."
          },
          {
            "name": "Flaming Recitativo",
            "desc": "During Resonance Liberation Burning Rhapsody, the Crit. DMG of Resonance Liberation's Marcato is increased by 30%.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "Default",
                "excerpt": "Crit. DMG +30%"
              }
            ]
          },
          {
            "name": "Cathartic Waltz",
            "desc": "The duration of Resonance Liberation Burning Rhapsody is extended by 7s."
          },
          {
            "name": "Funerary Quartet",
            "desc": "When Resonance Skill Passionate Variation or Resonance Skill Fury Fugue hits a target, Coordinated Attacks will be triggered to fire 4 Resonance Liberation's Marcato hit(s), dealing Fusion Damage. DMG of Resonance Liberation's Marcato fired in this way is reduced by 50%."
          },
          {
            "name": "Apoplectic Instrumental",
            "desc": "When Resonance Liberation Violent Finale is cast, ATK of all team members is increased by 20% for 20s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Violent Finale - Violent Finale Damage",
                "excerpt": "ATK +20%"
              }
            ]
          }
        ]
      }
    }
  }
});
