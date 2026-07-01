"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "mornye": {
        "name": "Mornye",
        "skills": [
          {
            "name": "Ground State Calibration - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Ground State Calibration - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Ground State Calibration - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Ground State Calibration - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Ground State Calibration - Basic Attack - Wide Field Observation Mode Stage 1 DMG"
          },
          {
            "name": "Ground State Calibration - Basic Attack - Wide Field Observation Mode Stage 2 DMG"
          },
          {
            "name": "Ground State Calibration - Basic Attack - Wide Field Observation Mode Stage 3 DMG"
          },
          {
            "name": "Ground State Calibration - Heavy Attack DMG"
          },
          {
            "name": "Ground State Calibration - Mid-air Attack DMG"
          },
          {
            "name": "Ground State Calibration - Dodge Counter DMG"
          },
          {
            "name": "Ground State Calibration - Dodge Counter - Wide Field Observation Mode DMG"
          },
          {
            "name": "Resolution - Optimal Solution DMG"
          },
          {
            "name": "Resolution - Distributed Array DMG"
          },
          {
            "name": "Critical Protocol - Skill DMG"
          },
          {
            "name": "Convergence - Skill DMG"
          },
          {
            "name": "Mass-Energy Equivalence - Syntony Field DMG"
          },
          {
            "name": "Mass-Energy Equivalence - Heavy Attack - Geopotential Shift DMG",
            "requiresResourceLabel": "Rest Mass Energy full"
          },
          {
            "name": "Mass-Energy Equivalence - Heavy Attack - Inversion DMG",
            "requiresResourceLabel": "Relative Kinetic Energy full"
          },
          {
            "name": "Mass-Energy Equivalence - Tune Rupture Response - Particle Jet DMG"
          }
        ],
        "resources": [
          {
            "label": "Rest Mass Energy"
          },
          {
            "label": "Relative Kinetic Energy"
          }
        ],
        "combatStates": [
          {
            "label": "Wide Field Observation Mode",
            "idLabel": "Wide Field Observation Mode",
            "inactiveLabel": "Not in Wide Field Observation Mode",
            "entry": "Basic Attack - Wide Field Observation Mode",
            "effects": "Basic Attack - Wide Field Observation Mode",
            "options": [
              {
                "label": "Wide Field Observation Mode",
                "valueLabel": "Wide Field Observation Mode"
              }
            ]
          },
          {
            "label": "Syntony Field",
            "idLabel": "Syntony Field",
            "inactiveLabel": "Not in Syntony Field",
            "entry": "When casting this skill, if a Syntony Field is present, remove it and generate a High Syntony Field.",
            "effects": "When casting this skill, if a Syntony Field is present, remove it and generate a High Syntony Field.",
            "options": [
              {
                "label": "Syntony Field",
                "valueLabel": "Syntony Field"
              },
              {
                "label": "Syntony Field · High Syntony Field",
                "valueLabel": "Syntony Field · High Syntony Field"
              }
            ]
          },
          {
            "label": "Target Interfered Marker",
            "idLabel": "Interfered Marker",
            "inactiveLabel": "Not in Interfered Marker",
            "entry": "When a Resonator in the team deals Tune Break DMG to a target inflicted with Observation Marker, Mornye inflicts an Interfered Marker on the target for 8s.",
            "effects": "When a Resonator in the team deals Tune Break DMG to a target inflicted with Observation Marker, Mornye inflicts an Interfered Marker on the target for 8s.",
            "options": [
              {
                "label": "Interfered Marker",
                "valueLabel": "Interfered Marker"
              }
            ]
          },
          {
            "label": "Target Off-Tune Interference",
            "idLabel": "Off-Tune Interference",
            "inactiveLabel": "Not in Off-Tune Interference",
            "entry": "Select the current Off-Tune Interference.",
            "effects": "Select the current Off-Tune Interference.",
            "options": [
              {
                "label": "Off-Tune Interference · Tune Rupture",
                "valueLabel": "Off-Tune Interference · Tune Rupture"
              },
              {
                "label": "Off-Tune Interference · Tune Strain",
                "valueLabel": "Off-Tune Interference · Tune Strain"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Blueprint",
            "label": "Energy Regen",
            "trigger": "In Off-Tune Interference · Tune Strain",
            "excerpt": "Energy Regen +10%",
            "desc": "Energy Regen +10%"
          },
          {
            "source": "Resonance Liberation: Critical Protocol",
            "label": "Crit. Rate",
            "trigger": "In Off-Tune Interference · Tune Strain",
            "excerpt": "Crit. Rate based on Energy Regen, cap 80%",
            "desc": "The DMG Multiplier of Resonance Liberation - Critical Protocol is increased by 40%."
          },
          {
            "source": "Resonance Liberation: Critical Protocol",
            "label": "Crit. DMG",
            "trigger": "In Off-Tune Interference · Tune Strain",
            "excerpt": "Crit. DMG based on Energy Regen, cap 160%",
            "desc": "The DMG Multiplier of Resonance Liberation - Critical Protocol is increased by 40%."
          },
          {
            "source": "Forte Circuit: Syntony Field",
            "label": "Off-Tune Buildup Efficiency",
            "trigger": "In Syntony Field",
            "excerpt": "Off-Tune Buildup Efficiency +50%",
            "desc": "When casting this skill, if a Syntony Field is present, remove it and generate a High Syntony Field."
          },
          {
            "source": "Resonance Liberation: High Syntony Field",
            "label": "DEF",
            "trigger": "In Syntony Field · High Syntony Field",
            "excerpt": "DEF +20%",
            "desc": "When casting this skill, if a Syntony Field is present, remove it and generate a High Syntony Field."
          },
          {
            "source": "Forte Circuit: Interfered Marker",
            "label": "Vulnerability",
            "trigger": "In Interfered Marker",
            "excerpt": "Vulnerability based on Energy Regen, cap 40%",
            "desc": "When a Resonator in the team deals Tune Break DMG to a target inflicted with Observation Marker, Mornye inflicts an Interfered Marker on the target for 8s."
          },
          {
            "source": "Tune Break: Decoupling",
            "label": "Final DMG Bonus",
            "trigger": "In Off-Tune Interference · Tune Strain",
            "excerpt": "Final DMG Bonus +0% per stack",
            "desc": "Final DMG Bonus +0% per stack"
          },
          {
            "source": "Outro Skill: Recursion",
            "label": "DMG Increase",
            "trigger": "In Off-Tune Interference · Tune Strain",
            "excerpt": "DMG Increase +25%",
            "desc": "DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "The Silent Observer",
            "desc": "Basic Attack – Wide Field Observation Mode becomes immune to interruption.\nThe duration of Interfered Marker is extended by 150%. Interfered Marker now grants DMG increase even when the target is not affected by Tune Rupture - Interfered or Tune Strain - Interfered. When Mornye applies Observation Marker on a target, she also inflicts Interfered Marker.",
            "buffs": [
              {
                "label": "DMG Increase",
                "trigger": "In Interfered Marker",
                "excerpt": "DMG Increase based on Energy Regen, cap 40%"
              }
            ]
          },
          {
            "name": "Morning Star of Entropy",
            "desc": "All nearby Resonators in the team gain Crit. DMG increase against targets with Interfered Marker: Every 1% of Mornye's Energy Regen over 100% grants 0.2% Crit. DMG increase, up to 32%.\nSyntony Field and High Syntony Field further increase the Off-Tune Buildup Rate of all nearby Resonators in the team by 20%.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "In Interfered Marker",
                "excerpt": "Crit. DMG based on Energy Regen, cap 32%"
              },
              {
                "label": "Off-Tune Buildup Efficiency",
                "trigger": "In Syntony Field",
                "excerpt": "Off-Tune Buildup Efficiency +20%"
              }
            ]
          },
          {
            "name": "Blueprint of Recursion",
            "desc": "Casting Resonance Skill - Distributed Array additionally restores 25 points of Concerto Energy and 100 Relative Momentum, triggered once every 25s."
          },
          {
            "name": "Latent Variables of the Cosmos",
            "desc": "The healing of High Syntony Field is increased by 30%."
          },
          {
            "name": "Time Dilation Effect",
            "desc": "The DMG Multiplier of Resonance Liberation - Critical Protocol is increased by 40%.\nThe DMG Multiplier of Tune Rupture Response - Particle Jet is increased by 160%.",
            "buffs": [
              {
                "label": "Critical Protocol - Skill DMG Multiplier Increase",
                "trigger": "In Off-Tune Interference · Tune Strain",
                "excerpt": "Critical Protocol - Skill DMG Multiplier Increase +40%"
              },
              {
                "label": "Mass-Energy Equivalence - Tune Rupture Response - Particle Jet DMG Multiplier Increase",
                "trigger": "In Off-Tune Interference · Tune Strain",
                "excerpt": "Mass-Energy Equivalence - Tune Rupture Response - Particle Jet DMG Multiplier Increase +160%"
              }
            ]
          },
          {
            "name": "To the Far Shores of the Stars",
            "desc": "Resonance Liberation - Critical Protocol deals 400% more DMG. If Mornye has not engaged in combat for over 4s, she restores Resonance Energy equal to 10% of her Max Resonance Energy every 0.2s.",
            "buffs": [
              {
                "label": "Critical Protocol - Skill DMG Increase",
                "trigger": "In Off-Tune Interference · Tune Strain",
                "excerpt": "Critical Protocol - Skill DMG Increase +400%"
              }
            ]
          }
        ]
      }
    }
  }
});
