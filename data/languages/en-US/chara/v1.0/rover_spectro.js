"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "rover_spectro": {
        "name": "Rover: Spectro",
        "skills": [
          {
            "name": "Vibration Manifestation - Stage 1 DMG"
          },
          {
            "name": "Vibration Manifestation - Stage 2 DMG"
          },
          {
            "name": "Vibration Manifestation - Stage 3 DMG"
          },
          {
            "name": "Vibration Manifestation - Stage 4 DMG"
          },
          {
            "name": "Vibration Manifestation - Heavy Attack DMG"
          },
          {
            "name": "Vibration Manifestation - Heavy Attack - Resonance DMG"
          },
          {
            "name": "Vibration Manifestation - Heavy Attack - Aftertune DMG"
          },
          {
            "name": "Vibration Manifestation - Mid-air Attack DMG"
          },
          {
            "name": "Vibration Manifestation - Dodge Counter DMG"
          },
          {
            "name": "Resonating Slashes - Skill DMG"
          },
          {
            "name": "Echoing Orchestra - Skill DMG"
          },
          {
            "name": "Waveshock - Skill DMG"
          },
          {
            "name": "World in a Grain of Sand - Resonating Spin DMG",
            "requiresResourceLabel": "Diminutive Sound at least 50"
          },
          {
            "name": "World in a Grain of Sand - Resonating Whirl DMG",
            "requiresResourceLabel": "Diminutive Sound at least 50"
          },
          {
            "name": "World in a Grain of Sand - Resonating Echoes Stage 1 DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "World in a Grain of Sand - Resonating Echoes Stage 2 DMG",
            "requiresResourceLabel": "resource_gate_2"
          }
        ],
        "resources": [
          {
            "label": "Diminutive Sound"
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Reticence",
            "label": "World in a Grain of Sand - Resonating Echoes Stage 1 DMG Increase",
            "trigger": "Default",
            "excerpt": "World in a Grain of Sand - Resonating Echoes Stage 1 DMG Increase +60%",
            "desc": "World in a Grain of Sand - Resonating Echoes Stage 1 DMG Increase +60%"
          },
          {
            "source": "Inherent Skill: Silent Listener",
            "label": "ATK",
            "trigger": "Default",
            "excerpt": "ATK +15%",
            "desc": "ATK +15%"
          }
        ],
        "chain": [
          {
            "name": "Odyssey of Beginnings",
            "desc": "Rover's Crit. Rate is increased by 15% for 7s when casting Resonance Skill Resonating Slashes or Resonance Skill Resonating Spin.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "After casting Resonating Slashes - Skill DMG / World in a Grain of Sand - Resonating Spin DMG / World in a Grain of Sand - Resonating Whirl DMG",
                "excerpt": "Crit. Rate +15%"
              }
            ]
          },
          {
            "name": "Microcosmic Murmurs",
            "desc": "Rover's Spectro DMG Bonus is increased by 20%.",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "Default",
                "excerpt": "Spectro DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Visages of Dust",
            "desc": "Rover's Energy Regen is increased by 20%.",
            "buffs": [
              {
                "label": "Energy Regen",
                "trigger": "Default",
                "excerpt": "Energy Regen +20%"
              }
            ]
          },
          {
            "name": "Resonating Lamella",
            "desc": "When casting Resonance Liberation Echoing Resonance, Rover continuously restores HP for all team members: HP equal to 20% of Rover's ATK will be restored every second for 5s."
          },
          {
            "name": "Temporal Virtuoso",
            "desc": "Rover's Resonance Liberation DMG Bonus is increased by 40%.",
            "buffs": [
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "Default",
                "excerpt": "Resonance Liberation DMG Bonus +40%"
              }
            ]
          },
          {
            "name": "Echoes of Wanderlust",
            "desc": "Resonance Skill Resonating Slashes and Resonance Skill Resonating Spin reduces the target's Spectro RES by 10% on hit for 20s.",
            "buffs": [
              {
                "label": "RES Shred",
                "trigger": "Default",
                "excerpt": "RES Shred +10%"
              }
            ]
          }
        ]
      }
    }
  }
});
