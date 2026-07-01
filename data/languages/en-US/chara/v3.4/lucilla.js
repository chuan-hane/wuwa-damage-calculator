"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lucilla": {
        "name": "Lucilla",
        "skills": [
          {
            "name": "Snapshot - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Snapshot - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Snapshot - Basic Attack Stage 3 - Unremarkable DMG"
          },
          {
            "name": "Snapshot - Basic Attack Stage 3 - Commendable DMG"
          },
          {
            "name": "Snapshot - Mid-air Attack DMG"
          },
          {
            "name": "Snapshot - Dodge Counter DMG"
          },
          {
            "name": "Phantom Frame - Phantom Frame DMG"
          },
          {
            "name": "Phantom Frame - Compensate DMG"
          },
          {
            "name": "Phantom Frame - Spotlight DMG"
          },
          {
            "name": "Phantom Frame - Spotlight DMG"
          },
          {
            "name": "Clear As Day - Clear As Day DMG",
            "requiresResourceLabel": "Photo at least 3"
          },
          {
            "name": "Clear As Day - Clear As Day DMG",
            "requiresResourceLabel": "Photo at least 3"
          },
          {
            "name": "Clear As Day - Basic Attack - Tracing Forms Stage 1 DMG"
          },
          {
            "name": "Clear As Day - Basic Attack - Tracing Forms Stage 2 DMG"
          },
          {
            "name": "Clear As Day - Basic Attack - Tracing Forms Stage 3 DMG"
          },
          {
            "name": "Clear As Day - Letting It Go DMG"
          },
          {
            "name": "Clear As Day - Letting It Go DMG"
          },
          {
            "name": "Clear As Day - Mid-air Attack - Reminiscence DMG"
          },
          {
            "name": "Clear As Day - Dodge Counter - Reminiscence DMG"
          },
          {
            "name": "Clip It - Clip It DMG"
          },
          {
            "name": "Clip It - Clip It: Hard Cut DMG"
          },
          {
            "name": "Memory Palace - Oblivion DMG",
            "requiresResourceLabel": "Photo at least 1"
          },
          {
            "name": "Memory Palace - Oblivion DMG",
            "requiresResourceLabel": "Photo at least 1"
          }
        ],
        "resources": [
          {
            "label": "Photo"
          }
        ],
        "combatStates": [
          {
            "label": "Resonance Mode",
            "idLabel": "Resonance Mode",
            "inactiveLabel": "Not in Resonance Mode",
            "entry": "While casting Spotlight, Lucilla additionally restores 20 points of Concerto Energy, and inflicts 1 extra stacks of Glacio Chafe onto the target if she is in Resonance Mode - Glacio Chafe.",
            "effects": "While casting Spotlight, Lucilla additionally restores 20 points of Concerto Energy, and inflicts 1 extra stacks of Glacio Chafe onto the target if she is in Resonance Mode - Glacio Chafe.",
            "options": [
              {
                "label": "Resonance Mode - Glacio Chafe",
                "valueLabel": "Resonance Mode - Glacio Chafe"
              },
              {
                "label": "Resonance Mode - Echo",
                "valueLabel": "Resonance Mode - Echo"
              }
            ]
          },
          {
            "label": "Reminiscence",
            "idLabel": "Reminiscence",
            "inactiveLabel": "Not in Reminiscence",
            "entry": "Deal Glacio DMG and enter Reminiscence:",
            "effects": "Deal Glacio DMG and enter Reminiscence:",
            "options": [
              {
                "label": "Reminiscence",
                "valueLabel": "Reminiscence"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Slow Motion",
            "label": "RES Shred",
            "trigger": "After casting Phantom Frame - Spotlight DMG",
            "excerpt": "RES Shred +8%",
            "desc": "RES Shred +8%"
          },
          {
            "source": "Inherent Skill: Slow Motion",
            "label": "Echo Skill DMG Bonus",
            "trigger": "After casting Phantom Frame - Spotlight DMG",
            "excerpt": "Echo Skill DMG Bonus +25%",
            "desc": "Echo Skill DMG Bonus +25%"
          },
          {
            "source": "Resonance Liberation: Clear As Day",
            "label": "Basic Attack DMG Bonus",
            "trigger": "After casting Clear As Day - Clear As Day DMG",
            "excerpt": "Basic Attack DMG Bonus +30%",
            "desc": "Clear As Day consumes no Resonance Energy."
          },
          {
            "source": "Resonance Liberation: Clear As Day",
            "label": "Echo Skill DMG Bonus",
            "trigger": "After casting Clear As Day - Clear As Day DMG",
            "excerpt": "Echo Skill DMG Bonus +30%",
            "desc": "Clear As Day consumes no Resonance Energy."
          },
          {
            "source": "Forte Circuit: Zoom",
            "label": "Crit. DMG",
            "trigger": "After casting Clear As Day - Clear As Day DMG / Memory Palace - Oblivion DMG",
            "excerpt": "Crit. DMG +40% per stack",
            "desc": "Film Roll can now be stacked up to 10 stacks, and Zoom up to 4 stacks."
          },
          {
            "source": "Outro Skill: Montage",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Glacio Chafe",
            "excerpt": "DMG Increase +60%",
            "desc": "DMG Increase +60%"
          },
          {
            "source": "Outro Skill: Montage",
            "label": "Echo Skill DMG Increase",
            "trigger": "In Resonance Mode - Echo",
            "excerpt": "Echo Skill DMG Increase +50%",
            "desc": "Echo Skill DMG Increase +50%"
          }
        ],
        "chain": [
          {
            "name": "Distant Noon",
            "desc": "While casting Resonance Skill - Phantom Frame to deploy Focus Ring, the first time landing the cursor within Perfect Focus will immediately expand Perfect Focus to fill up Focus Ring.\nLucilla's Crit. Rate increases by 20% for 10s when Resonance Skill - Spotlight is cast.\nLucilla is immune to interruptions while casting Resonance Skill - Phantom Frame and Basic Attack - Tracing Forms Stage 3.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Phantom Frame - Spotlight DMG / Phantom Frame - Spotlight DMG",
                "excerpt": "Crit. Rate +20%"
              }
            ]
          },
          {
            "name": "Slumbering Moonlight",
            "desc": "While casting Resonance Liberation - Clear As Day, Lucilla grants the following enhancements based on her Resonance Mode:\n- When in Resonance Mode - Glacio Chafe, Glacio Chafe DMG against targets within a certain range around the active Resonator is Amplified by 80%.\n- When in Resonance Mode - Echo, grant 40% Echo Skill DMG Amplification to Resonators in the team.\nThese enhancements last as long as Reminiscence is active and remain effective for 30s after Reminiscence ends.\nThese effects end when Lucilla switches Resonance Modes.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "After casting Clear As Day - Clear As Day DMG",
                "excerpt": "DMG Increase +80%"
              },
              {
                "label": "Echo Skill DMG Bonus",
                "trigger": "After casting Clear As Day - Clear As Day DMG",
                "excerpt": "Echo Skill DMG Bonus +40%"
              }
            ]
          },
          {
            "name": "Days Fade Unheard",
            "desc": "The DMG Multiplier of Letting It Go is increased by 100%.",
            "buffs": [
              {
                "label": "Clear As Day - Letting It Go DMG Multiplier Increase",
                "trigger": "In Reminiscence",
                "excerpt": "Clear As Day - Letting It Go DMG Multiplier Increase +100%"
              }
            ]
          },
          {
            "name": "The Past Fades Into Silence",
            "desc": "Oblivion pulls in nearby targets on hit. While casting Oblivion, Lucilla's ATK is increased by 10% for 6s, stacking up 3 times. All stacks are removed when the duration ends.\nWhile casting Basic Attack - Tracing Forms Stage 3, Lucilla takes 30% less DMG.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Memory Palace - Oblivion DMG / Memory Palace - Oblivion DMG",
                "excerpt": "ATK +30% per stack"
              }
            ]
          },
          {
            "name": "Time is Like a Stream",
            "desc": "The DMG Multiplier of Oblivion is increased by 50%.",
            "buffs": [
              {
                "label": "Memory Palace - Oblivion DMG Multiplier Increase",
                "trigger": "In Reminiscence",
                "excerpt": "Memory Palace - Oblivion DMG Multiplier Increase +50%"
              }
            ]
          },
          {
            "name": "Gazing In the Mist of Time",
            "desc": "When in Reminiscence, each time Lucilla consumes Photo, she gains 1 stacks of Remembrance, stacking up to 3 times. Each stack of Remembrance increases Letting It Go's DMG dealt to the target by 200%, up to 600%. Casting Letting It Go removes all stacks of Remembrance.\nLucilla gains Longing if she has defeated a target while in Reminiscence: Upon ending Reminiscence while not in combat, consume Longing to restore 150 points of Trace.",
            "buffs": [
              {
                "label": "Clear As Day - Letting It Go DMG Increase",
                "trigger": "After casting Memory Palace - Oblivion DMG / Memory Palace - Oblivion DMG",
                "excerpt": "Clear As Day - Letting It Go DMG Increase +600% per stack"
              }
            ]
          }
        ]
      }
    }
  }
});
