"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "ciaccona": {
        "name": "Ciaccona",
        "skills": [
          {
            "name": "Quadruple Time Steps - Stage 1 DMG"
          },
          {
            "name": "Quadruple Time Steps - Stage 2 DMG"
          },
          {
            "name": "Quadruple Time Steps - Stage 3 DMG"
          },
          {
            "name": "Quadruple Time Steps - Stage 4 DMG"
          },
          {
            "name": "Quadruple Time Steps - Heavy Attack DMG"
          },
          {
            "name": "Quadruple Time Steps - Aimed Shot DMG"
          },
          {
            "name": "Quadruple Time Steps - Fully Charged Aimed Shot DMG"
          },
          {
            "name": "Quadruple Time Steps - Mid-air Attack Stage 1 DMG"
          },
          {
            "name": "Quadruple Time Steps - Mid-air Attack Stage 2 DMG"
          },
          {
            "name": "Quadruple Time Steps - Dodge Counter DMG"
          },
          {
            "name": "Harmonic Allegro - Skill DMG"
          },
          {
            "name": "Singer's Triple Cadenza - Improvised Symphonic Poem Skill DMG"
          },
          {
            "name": "Singer's Triple Cadenza - Symphonic Poem: Tonic DMG"
          },
          {
            "name": "Singer's Triple Cadenza - Symphonic Poem: Tonic DMG"
          },
          {
            "name": "Roaming with the Wind - Skill DMG"
          },
          {
            "name": "Symphony of Wind and Verse - Quadruple Downbeat DMG",
            "requiresResourceLabel": "Musical Essence at least 3"
          },
          {
            "name": "Unending Cadence - Solo Concert Coordinated DMG"
          }
        ],
        "resources": [
          {
            "label": "Musical Essence"
          }
        ],
        "combatStates": [
          {
            "label": "Ensemble Sylph",
            "idLabel": "Ensemble Sylph",
            "inactiveLabel": "Not in Ensemble Sylph",
            "entry": "If Ciaccona's Basic Attack Stage 4 or Solo Concert ends early (proactively or being interrupted), an Ensemble Sylph is generated.",
            "effects": "If Ciaccona's Basic Attack Stage 4 or Solo Concert ends early (proactively or being interrupted), an Ensemble Sylph is generated.",
            "options": [
              {
                "label": "Ensemble Sylph",
                "valueLabel": "Ensemble Sylph"
              }
            ]
          },
          {
            "label": "Recital",
            "idLabel": "Recital",
            "inactiveLabel": "Not in Recital",
            "entry": "Ciaccona and Ensemble Sylphs perform an Improvised Symphonic Poem together, dealing Aero DMG once to the nearby targets and entering Recital.",
            "effects": "Ciaccona and Ensemble Sylphs perform an Improvised Symphonic Poem together, dealing Aero DMG once to the nearby targets and entering Recital.",
            "options": [
              {
                "label": "Recital",
                "valueLabel": "Recital"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Ensemble Sylph",
            "label": "Aero DMG Bonus",
            "trigger": "In Ensemble Sylph",
            "excerpt": "Aero DMG Bonus +24%",
            "desc": "If Ciaccona's Basic Attack Stage 4 or Solo Concert ends early (proactively or being interrupted), an Ensemble Sylph is generated."
          },
          {
            "source": "Inherent Skill: Winds of Rinascita",
            "label": "Symphony of Wind and Verse - Quadruple Downbeat DMG Increase",
            "trigger": "In Recital",
            "excerpt": "Symphony of Wind and Verse - Quadruple Downbeat DMG Increase +30%",
            "desc": "Symphony of Wind and Verse - Quadruple Downbeat DMG Increase +30%"
          },
          {
            "source": "Outro Skill: Windcalling Tune",
            "label": "DMG Increase",
            "trigger": "In Recital",
            "excerpt": "DMG Increase +100%",
            "desc": "DMG Increase +100%"
          }
        ],
        "chain": [
          {
            "name": "Where Wind Sings",
            "desc": "Casting Resonance Skill Harmonic Allegro grants Ciaccona immunity to interruption for 3s. Casting Basic Attack increases Ciaccona's ATK by 35% for 10s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Recital",
                "excerpt": "ATK +35%"
              }
            ]
          },
          {
            "name": "Song of the Four Seasons",
            "desc": "During Resonance Liberation Singer's Triple Cadenza, Resonators in the team gain 40% Aero DMG Bonus.",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "In Recital",
                "excerpt": "Aero DMG Bonus +40%"
              }
            ]
          },
          {
            "name": "Starlit Improv",
            "desc": "Casting Basic Attack Stage 4 additionally grants 1 segments of Musical Essence. Resonance Skill Harmonic Allegro gains 1 more charge."
          },
          {
            "name": "Toccata and Fugue",
            "desc": "Ciaccona ignores 45% of the targets' DEF when dealing damage with Heavy Attack Quadruple Downbeat;\nCiaccona ignores 45% of the targets' DEF when dealing Resonance Liberation DMG.",
            "buffs": [
              {
                "label": "DEF Ignore",
                "trigger": "In Recital",
                "excerpt": "DEF Ignore +45%"
              },
              {
                "label": "DEF Ignore",
                "trigger": "In Recital",
                "excerpt": "DEF Ignore +45%"
              }
            ]
          },
          {
            "name": "Eternal Idyll to Lasting Summer",
            "desc": "Gain 40% Resonance Liberation DMG Bonus;\nDMG taken by Resonators within and around the range of Resonance Liberation Singer's Triple Cadenza is reduced by 30%.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "In Recital",
                "excerpt": "Resonance Liberation DMG Bonus +40%"
              }
            ]
          },
          {
            "name": "Unending Cadence",
            "desc": "When in Solo Concert, Ciaccona or Ensemble Sylph deals Aero DMG equal to 220% of Ciaccona's ATK to nearby targets, considered Resonance Liberation DMG."
          }
        ]
      }
    }
  }
});
