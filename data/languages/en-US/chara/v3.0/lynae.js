"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lynae": {
        "name": "Lynae",
        "skills": [
          {
            "name": "Chroma Drift - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Chroma Drift - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Chroma Drift - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Chroma Drift - Dodge Counter DMG"
          },
          {
            "name": "Chroma Drift - Mid-air Attack DMG"
          },
          {
            "name": "Chroma Drift - Basic Attack - Spark Collision Lv. 1 DMG",
            "requiresResourceLabel": "Overflow at least 120"
          },
          {
            "name": "Chroma Drift - Basic Attack - Spark Collision Lv. 2 DMG",
            "requiresResourceLabel": "Overflow at least 120"
          },
          {
            "name": "Chroma Drift - Basic Attack - Spark Collision Lv. 3 DMG",
            "requiresResourceLabel": "Overflow at least 120"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Basic Attack Stage 5 DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Dodge Counter"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Ground Heavy Attack DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Graffiti Blast DMG"
          },
          {
            "name": "Chroma Drift - Mid-air Attack DMG"
          },
          {
            "name": "Chroma Drift - Kaleidoscopic Parade - Mid-air Heavy Attack DMG"
          },
          {
            "name": "Lynae-Style Palettes - Lynae-Style Palettes DMG"
          },
          {
            "name": "Lynae-Style Palettes - Additive Color DMG"
          },
          {
            "name": "Prismatic Overblast - Prismatic Overblast DMG"
          },
          {
            "name": "Prismatic Overblast - Basic Attack - To a Vivid Tomorrow! DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Time to Show Some Colors! - Time to Show Some Colors! DMG"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Iridescent Splash DMG",
            "requiresResourceLabel": "True Color at least 3"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Visual Impact DMG",
            "requiresResourceLabel": "True Color at least 3"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Polychrome Leap 1",
            "requiresResourceLabel": "Lumiflow at least 33.33"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Polychrome Leap 2",
            "requiresResourceLabel": "Lumiflow at least 33.33"
          },
          {
            "name": "Chromaticity Modeling - Basic Attack - Polychrome Leap 3",
            "requiresResourceLabel": "Lumiflow at least 33.33"
          },
          {
            "name": "Chromaticity Modeling - Tune Rupture Response - Spectral Analysis DMG"
          }
        ],
        "resources": [
          {
            "label": "Overflow"
          },
          {
            "label": "True Color"
          },
          {
            "label": "Lumiflow"
          }
        ],
        "combatStates": [
          {
            "label": "Resonance Mode",
            "idLabel": "Resonance Mode",
            "inactiveLabel": "Not in Resonance Mode",
            "entry": "When Spray Paint is on the ground, switching to another Resonance Mode doesn't affect the Photochromic Flux effects inflicted by the Spray Paint.",
            "effects": "When Spray Paint is on the ground, switching to another Resonance Mode doesn't affect the Photochromic Flux effects inflicted by the Spray Paint.",
            "options": [
              {
                "label": "Resonance Mode - Tune Rupture",
                "valueLabel": "Resonance Mode - Tune Rupture"
              },
              {
                "label": "Resonance Mode - Tune Strain",
                "valueLabel": "Resonance Mode - Tune Strain"
              }
            ]
          },
          {
            "label": "Combat Phase",
            "idLabel": "Combat Phase",
            "inactiveLabel": "Not in Combat Phase",
            "entry": "Select the current Combat Phase.",
            "effects": "Select the current Combat Phase.",
            "options": [
              {
                "label": "Optical Sampling",
                "valueLabel": "Optical Sampling"
              },
              {
                "label": "Kaleidoscopic Parade",
                "valueLabel": "Kaleidoscopic Parade"
              }
            ]
          },
          {
            "label": "Target Tune Rupture State",
            "idLabel": "Target Tune Rupture State",
            "inactiveLabel": "Not in Target Tune Rupture State",
            "entry": "Select the current Target Tune Rupture State.",
            "effects": "Select the current Target Tune Rupture State.",
            "options": [
              {
                "label": "Target Tune Rupture · Shifting",
                "valueLabel": "Target Tune Rupture · Shifting"
              },
              {
                "label": "Target Tune Rupture · Interfered",
                "valueLabel": "Target Tune Rupture · Interfered"
              }
            ]
          },
          {
            "label": "Target Tune Strain State",
            "idLabel": "Target Tune Strain State",
            "inactiveLabel": "Not in Target Tune Strain State",
            "entry": "Select the current Target Tune Strain State.",
            "effects": "Select the current Target Tune Strain State.",
            "options": [
              {
                "label": "Target Tune Strain · Shifting",
                "valueLabel": "Target Tune Strain · Shifting"
              },
              {
                "label": "Target Tune Strain · Interfered",
                "valueLabel": "Target Tune Strain · Interfered"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: \"Adaptive Optics: Everyday Applications\"",
            "label": "Spectro DMG Bonus",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "Spectro DMG Bonus +25%",
            "desc": "Spectro DMG Bonus +25%"
          },
          {
            "source": "Resonance Liberation: Prismatic Overblast",
            "label": "Final DMG Bonus",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "Final DMG Bonus +24%",
            "desc": "Press Normal Attack within a certain time after casting Resonance Liberation - Prismatic Overblast to cast Basic Attack - To a Vivid Tomorrow!, dealing Spectro DMG."
          },
          {
            "source": "Forte Circuit: Normal Attack · Visual Impact",
            "label": "Tune Break Boost",
            "trigger": "After casting Chromaticity Modeling - Basic Attack - Visual Impact DMG",
            "excerpt": "Tune Break Boost +40%",
            "desc": "Tune Break Boost +40%"
          },
          {
            "source": "Tune Break: Spectral Analysis",
            "label": "Final DMG Bonus",
            "trigger": "In Resonance Mode - Tune Strain",
            "excerpt": "Final DMG Bonus +0% per stack",
            "desc": "Tune Rupture Response - Spectral Analysis"
          },
          {
            "source": "Outro Skill: Let's Hit the Road!",
            "label": "DMG Increase",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "DMG Increase +15%",
            "desc": "Lynae now stays in Kaleidoscopic Parade after casting Outro Skill - Let's Hit the Road!."
          },
          {
            "source": "Outro Skill: Let's Hit the Road!",
            "label": "Resonance Liberation DMG Increase",
            "trigger": "In Target Tune Strain · Interfered",
            "excerpt": "Resonance Liberation DMG Increase +25%",
            "desc": "Lynae now stays in Kaleidoscopic Parade after casting Outro Skill - Let's Hit the Road!."
          }
        ],
        "chain": [
          {
            "name": "Days to be Painted Like a Canvas",
            "desc": "The DMG Multiplier of Basic Attack - Polychrome Leap is increased by 120%.\nThe duration of Spray Paint is increased by 100%. Targets within the range of Spray Paint are pulled in towards the center every 6s.\nLynae is now immune to interruptions during Basic Attack - Polychrome Leap and Basic Attack - Visual Impact.\nDuring Optical Sampling Stage, after staying in a non-combat state for 2s, restore 120 points of Overflow every 2s.",
            "buffs": [
              {
                "label": "Chromaticity Modeling - Basic Attack - Polychrome Leap 1 DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Chromaticity Modeling - Basic Attack - Polychrome Leap 1 DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "Into Lights' Vanishing Point",
            "desc": "Gain 25% All DMG Amplification.\nOutro Skill gains the following effect:\nCasting Outro Skill now additionally grants the incoming Resonator 25% All DMG Amplification for 14s or until the Resonator is switched out.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "DMG Increase +25%"
              },
              {
                "label": "DMG Increase",
                "trigger": "After casting Intro Skill",
                "excerpt": "DMG Increase +25%"
              }
            ]
          },
          {
            "name": "For One Brilliant Moment",
            "desc": "The DMG Multiplier of Basic Attack - Visual Impact and Basic Attack - Iridescent Splash is increased by 90%.\nWhile Lynae is in combat, when Lumiflow is at least 120 points, gain 1 stack of Premixed Hue every 1s, up to 25 stacks. Each stack of Premixed Hue increases the Spectro DMG Bonus of Additive Color by 55%. No Premixed Hue is gained while casting Additive Color. When Additive Color ends, remove all stacks of Premixed Hue. Lynae loses a stack of Premixed Hue every 0.5s when Lumiflow is below 120 points.\nWhile Lynae is out of combat, with at least 120 points of Lumiflow, gain 1 stack of Premixed Hue every 0.5s; when Lumiflow is below 120 points, lose 1 stack of Premixed Hue every 1s.",
            "buffs": [
              {
                "label": "Chromaticity Modeling - Basic Attack - Visual Impact DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Chromaticity Modeling - Basic Attack - Visual Impact DMG Multiplier Increase +90%"
              },
              {
                "label": "Spectro DMG Bonus",
                "trigger": "After casting Lynae-Style Palettes - Additive Color DMG",
                "excerpt": "Spectro DMG Bonus +1375% per stack"
              }
            ]
          },
          {
            "name": "Shadows of a Wind Racer",
            "desc": "ATK is increased by 20%.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Visions of a Future Unbound",
            "desc": "The DMG Multiplier of Resonance Liberation - Prismatic Overblast is increased by 70%.",
            "buffs": [
              {
                "label": "Prismatic Overblast - Prismatic Overblast DMG Multiplier Increase",
                "trigger": "In Target Tune Strain · Interfered",
                "excerpt": "Prismatic Overblast - Prismatic Overblast DMG Multiplier Increase +70%"
              }
            ]
          },
          {
            "name": "Painted in My True Color",
            "desc": "Each time Kaleidoscopic Parade - Graffiti Blast or Kaleidoscopic Parade - Mid-air Heavy Attack is cast, Lynae gains 1 stack of Color of Soul, up to 3 stacks. Each stack of Color of Soul increases the DMG the target takes from Basic Attack - Iridescent Splash and Basic Attack - Visual Impact by 30%. After casting Basic Attack - Iridescent Splash or Basic Attack - Visual Impact, all stacks of Color of Soul are removed.\nCasting Basic Attack - Polychrome Leap resets the charges of Kaleidoscopic Parade - Mid-air Heavy Attack.\nLynae is immune to interruptions, and DMG taken is reduced by 30% during Kaleidoscopic Parade - Mid-air Heavy Attack.\nLynae now stays in Kaleidoscopic Parade after casting Outro Skill - Let's Hit the Road!.\nThe Lumiflow upper limit is increased from 120 to 360. At the max limit, Lynae's roller skating speed further increases.\nIf Intro Skill is cast during Kaleidoscopic Parade, restore 120 points of Lumiflow.",
            "buffs": [
              {
                "label": "Vulnerability",
                "trigger": "After casting Chromaticity Modeling - Basic Attack - Iridescent Splash DMG / Chromaticity Modeling - Basic Attack - Visual Impact DMG",
                "excerpt": "Vulnerability +90% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
