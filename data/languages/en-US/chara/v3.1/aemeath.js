"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "aemeath": {
        "name": "Aemeath",
        "skills": [
          {
            "name": "Infinity Calibration - Basic Attack - Aemeath Stage 1 DMG"
          },
          {
            "name": "Infinity Calibration - Basic Attack - Aemeath Stage 2 DMG"
          },
          {
            "name": "Infinity Calibration - Basic Attack - Aemeath Stage 3 DMG"
          },
          {
            "name": "Infinity Calibration - Basic Attack - Aemeath Stage 4 DMG"
          },
          {
            "name": "Infinity Calibration - Heavy Attack - Aemeath Charged I DMG"
          },
          {
            "name": "Infinity Calibration - Heavy Attack - Aemeath Charged II DMG"
          },
          {
            "name": "Infinity Calibration - Mid-air Attack - Aemeath DMG"
          },
          {
            "name": "Infinity Calibration - Dodge Counter - Aemeath DMG"
          },
          {
            "name": "Shared Voyage - Sync Strike: Armament Merge DMG"
          },
          {
            "name": "Shared Voyage - Sync Strike: Call of Dawn DMG"
          },
          {
            "name": "Shared Voyage - Basic Attack - Mech Stage 1 DMG"
          },
          {
            "name": "Shared Voyage - Basic Attack - Mech Stage 2 DMG"
          },
          {
            "name": "Shared Voyage - Basic Attack - Mech Stage 3 DMG"
          },
          {
            "name": "Shared Voyage - Basic Attack - Mech Stage 4 DMG"
          },
          {
            "name": "Shared Voyage - Heavy Attack - Mech Charged I DMG"
          },
          {
            "name": "Shared Voyage - Heavy Attack - Mech Charged II DMG"
          },
          {
            "name": "Shared Voyage - Mid-air Attack - Mech DMG"
          },
          {
            "name": "Shared Voyage - Dodge Counter - Mech DMG"
          },
          {
            "name": "Towards the Daybreak - Heavenfall Edict: Overdrive DMG"
          },
          {
            "name": "Towards the Daybreak - Heavenfall Edict: Finale DMG",
            "requiresResourceLabel": "Synchronization Rate at least 100 / Resonance Rate at least 100"
          },
          {
            "name": "Overture of Departure - Songs Across the Universe DMG"
          },
          {
            "name": "Overture of Departure - Debut of Meteoric Radiance DMG"
          },
          {
            "name": "To Sculpt the Silence - Seraphic Duet: Encore DMG",
            "requiresResourceLabel": "Synchronization Rate at least 100"
          },
          {
            "name": "To Sculpt the Silence - Seraphic Duet: Overture DMG",
            "requiresResourceLabel": "Synchronization Rate at least 100"
          },
          {
            "name": "To Sculpt the Silence - Tune Rupture Response - Starburst DMG"
          },
          {
            "name": "To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance)"
          }
        ],
        "resources": [
          {
            "label": "Synchronization Rate"
          },
          {
            "label": "Resonance Rate"
          }
        ],
        "combatStates": [
          {
            "label": "Current form",
            "idLabel": "Form",
            "inactiveLabel": "Not in Form",
            "entry": "Form Switch",
            "effects": "Form Switch",
            "options": [
              {
                "label": "Aemeath",
                "valueLabel": "Aemeath"
              },
              {
                "label": "Mech",
                "valueLabel": "Mech"
              }
            ]
          },
          {
            "label": "Resonance Mode",
            "idLabel": "Resonance Mode",
            "inactiveLabel": "Not in Resonance Mode",
            "entry": "In Resonance Mode - Tune Rupture, when Resonators in the team inflict Tune Rupture - Shifting or deal Tune Rupture DMG, Aemeath's Crit.",
            "effects": "In Resonance Mode - Tune Rupture, when Resonators in the team inflict Tune Rupture - Shifting or deal Tune Rupture DMG, Aemeath's Crit.",
            "options": [
              {
                "label": "Resonance Mode - Tune Rupture",
                "valueLabel": "Resonance Mode - Tune Rupture"
              },
              {
                "label": "Resonance Mode - Fusion Burst",
                "valueLabel": "Resonance Mode - Fusion Burst"
              }
            ]
          },
          {
            "label": "Seraphic Duo",
            "idLabel": "Seraphic Duo",
            "inactiveLabel": "Not in Seraphic Duo",
            "entry": "Casting this skill depletes all Synchronization Rate and Resonance Rate, dealing Fusion DMG, and ends the Heavenfall Edict: Unbound state and Seraphic Duo state.",
            "effects": "Casting this skill depletes all Synchronization Rate and Resonance Rate, dealing Fusion DMG, and ends the Heavenfall Edict: Unbound state and Seraphic Duo state.",
            "options": [
              {
                "label": "Seraphic Duo State",
                "valueLabel": "Seraphic Duo State"
              }
            ]
          },
          {
            "label": "Stardust Resonance",
            "idLabel": "Stardust Resonance",
            "inactiveLabel": "Not in Stardust Resonance",
            "entry": "- Enter Stardust Resonance for 30s.",
            "effects": "- Enter Stardust Resonance for 30s.",
            "options": [
              {
                "label": "Stardust Resonance State",
                "valueLabel": "Stardust Resonance State"
              }
            ]
          },
          {
            "label": "Heavenfall Edict: Unbound",
            "idLabel": "Heavenfall Edict: Unbound",
            "inactiveLabel": "Not in Heavenfall Edict: Unbound",
            "entry": "- Enter Heavenfall Edict: Unbound for 60s.",
            "effects": "- Enter Heavenfall Edict: Unbound for 60s.",
            "options": [
              {
                "label": "Heavenfall Edict: Unbound",
                "valueLabel": "Heavenfall Edict: Unbound"
              }
            ]
          },
          {
            "label": "Instant Response",
            "idLabel": "Instant Response",
            "inactiveLabel": "Not in Instant Response",
            "entry": "When in Instant Response, Heavy Attack - Aemeath: Charged II charges more quickly.",
            "effects": "When in Instant Response, Heavy Attack - Aemeath: Charged II charges more quickly.",
            "options": [
              {
                "label": "Instant Response State",
                "valueLabel": "Instant Response State"
              },
              {
                "label": "Instant Response · Brilliance",
                "valueLabel": "Instant Response · Brilliance"
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
            "label": "Target Tune Rupture Trace",
            "idLabel": "Target Tune Rupture Trace",
            "inactiveLabel": "Not in Target Tune Rupture Trace",
            "entry": "Select the current Target Tune Rupture Trace.",
            "effects": "Select the current Target Tune Rupture Trace.",
            "options": [
              {
                "label": "Target Tune Rupture Trace",
                "valueLabel": "Target Tune Rupture Trace"
              }
            ]
          },
          {
            "label": "Target Fusion Burst Trace",
            "idLabel": "Target Fusion Burst Trace",
            "inactiveLabel": "Not in Target Fusion Burst Trace",
            "entry": "Select the current Target Fusion Burst Trace.",
            "effects": "Select the current Target Fusion Burst Trace.",
            "options": [
              {
                "label": "Target Fusion Burst Trace",
                "valueLabel": "Target Fusion Burst Trace"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Before All Sounds",
            "label": "Infinity Calibration - Heavy Attack - Aemeath Charged I DMG Increase",
            "trigger": "In Instant Response State",
            "excerpt": "Infinity Calibration - Heavy Attack - Aemeath Charged I DMG Increase +200%",
            "desc": "Infinity Calibration - Heavy Attack - Aemeath Charged I DMG Increase +200%"
          },
          {
            "source": "Inherent Skill: Between the Stars",
            "label": "Crit. DMG",
            "trigger": "In Resonance Mode - Tune Rupture",
            "excerpt": "Crit. DMG +60% per stack",
            "desc": "Inherent Skill Between the Stars is replaced with the following effects:"
          },
          {
            "source": "Inherent Skill: Between the Stars",
            "label": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase",
            "trigger": "In Resonance Mode - Tune Rupture",
            "excerpt": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase +25%",
            "desc": "Inherent Skill Between the Stars is replaced with the following effects:"
          },
          {
            "source": "Inherent Skill: Between the Stars",
            "label": "Crit. DMG",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "Crit. DMG +60% per stack",
            "desc": "Inherent Skill Between the Stars is replaced with the following effects:"
          },
          {
            "source": "Inherent Skill: Between the Stars",
            "label": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase +25%",
            "desc": "Inherent Skill Between the Stars is replaced with the following effects:"
          },
          {
            "source": "Forte Circuit: Seraphic Duet",
            "label": "To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance) DMG Multiplier Increase",
            "trigger": "After casting To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance)",
            "excerpt": "To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance) DMG Multiplier Increase +120% per stack",
            "desc": "The next Seraphic Duet cast within 30s after casting this skill doesn't consume Rupturous Trail/Fusion Trail."
          },
          {
            "source": "Forte Circuit: Seraphic Duet",
            "label": "Fusion Burst Extra Multiplier",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "Fusion Burst Extra Multiplier +300% per stack",
            "desc": "The next Seraphic Duet cast within 30s after casting this skill doesn't consume Rupturous Trail/Fusion Trail."
          },
          {
            "source": "Forte Circuit: Stardust Resonance",
            "label": "Fusion Burst Extra Multiplier",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "Fusion Burst Extra Multiplier +200%",
            "desc": "- Enter Stardust Resonance for 30s."
          },
          {
            "source": "Outro Skill: Silent Protection",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Tune Rupture",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          },
          {
            "source": "Outro Skill: Silent Protection",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Tune Rupture",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          },
          {
            "source": "Outro Skill: Silent Protection",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          },
          {
            "source": "Outro Skill: Silent Protection",
            "label": "DMG Increase",
            "trigger": "In Resonance Mode - Fusion Burst",
            "excerpt": "DMG Increase +10%",
            "desc": "DMG Increase +10%"
          }
        ],
        "chain": [
          {
            "name": "Gilded Glimmer of the First Dawn",
            "desc": "In Instant Response, Heavy Attack - Aemeath and Heavy Attack - Mech gain 300% Crit. DMG increase and continuously pull in nearby target while charging.\n\nWhen Aemeath remains in a state that meets all of the following conditions for over 4s, she enters Instant Response - Brilliance:\n- Out of combat;\n- Not performing Heavy Attack - Aemeath, Heavy Attack - Mech, or Resonance Liberation Heavenfall Edict: Finale.\nInstant Response: Brilliance inherits all effects of Instant Response and remains active even when out of the duration of Heavenfall Edict: Unbound.\nWhen in Instant Response - Brilliance and not in Heavenfall Edict: Unbound, casting Heavy Attack - Aemeath Charged II or Heavy Attack - Mech Charged II grants 100 points of Synchronization Rate.\n\nIn Resonance Mode - Tune Rupture or Resonance Mode - Fusion Burst, when Aemeath defeats a target affected by Rupturous Trail/Fusion Trail, she enters Sealed Trail - Tune Rupture/Sealed Trail - Fusion Burst for 10s.\nWhile in Sealed Trail - Tune Rupture or Sealed Trail - Fusion Burst, Aemeath records the highest stack count of Rupturous Trail/Fusion Trail among the targets defeated.\nHer next skill that directly damages the target immediately inflicts the targets with the recorded stacks of Rupturous Trail/Fusion Trail, up to the current max limit of Rupturous Trail/Fusion Trail. This ends Sealed Trail - Tune Rupture/Sealed Trail - Fusion Burst and Aemeath cannot enter Sealed Trail - Tune Rupture or Sealed Trail - Fusion Burst for 1s.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "In Instant Response State",
                "excerpt": "Crit. DMG +300%"
              }
            ]
          },
          {
            "name": "Downy Notes of Snowfluff",
            "desc": "The DMG Multiplier of Resonance Skill Seraphic Duet: Overture is increased by 100%.\nThe DMG Multiplier of Resonance Skill Seraphic Duet: Encore is increased by 100%.\n\nWhile in Resonance Mode - Tune Rupture, when the additional instances Tune Rupture DMG triggered by Resonance Skill Seraphic Duet hit the same target, the DMG Multiplier of the Tune Rupture DMG triggered by Resonance Skill Seraphic Duet against this target is increased by 20% for 1s, stacking up to 5 times.\n\nWhile in Resonance Mode - Fusion Burst, gain the following effects:\n- In the Stardust Resonance state, the DMG Multiplier of Fusion Burst triggered by Resonance Skill Seraphic Duet is further increased to 400% against the main target of the Fusion Burst.\n- Fusion Trail now additionally increases the DMG Multiplier of Fusion Trail triggered by Resonance Skill Seraphic Duet. Each stack of Fusion Trail removed now provides a 15% DMG Multiplier increase to Fusion Burst on the main target.\n- In combat state, when a target near the active Resonator in the team is defeated, immediately trigger Fusion Burst based on the target's current stack limit of Fusion Burst.",
            "buffs": [
              {
                "label": "To Sculpt the Silence - Seraphic Duet: Overture DMG Multiplier Increase",
                "trigger": "In Target Fusion Burst Trace",
                "excerpt": "To Sculpt the Silence - Seraphic Duet: Overture DMG Multiplier Increase +100%"
              },
              {
                "label": "To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance) DMG Multiplier Increase",
                "trigger": "After casting To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance)",
                "excerpt": "To Sculpt the Silence - Seraphic Duet Bonus DMG (Per Instance) DMG Multiplier Increase +100% per stack"
              },
              {
                "label": "Fusion Burst Extra Multiplier",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "Fusion Burst Extra Multiplier +200%"
              },
              {
                "label": "Fusion Burst Extra Multiplier",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "Fusion Burst Extra Multiplier +150% per stack"
              }
            ]
          },
          {
            "name": "Fervor Sightly Burns Bright as New",
            "desc": "Resonance Liberation Heavenfall Edict: Finale's DMG Multiplier is increased by 100%.\nResonance Liberation Heavenfall Edict: Overdrive's DMG Multiplier is increased by 40%.\n\nIn Instant Response, Aemeath now inflicts Tune Rupture - Shifting or Fusion Burst on nearby targets while casting Heavy Attack - Aemeath or Heavy Attack - Mech, based on her current Resonance Mode.\n\nInherent Skill Between the Stars is replaced with the following effects:\n\n- In Resonance Mode - Tune Rupture, when Resonators in the team inflict Tune Rupture - Shifting or deal Tune Rupture DMG, Aemeath's Crit. DMG is increased by 60%, and Resonance Liberation Heavenfall Edict: Finale DMG is now Amplified by 25%.\nResonators joining the team or switching Resonance Mode resets this effect.\n\n- In Resonance Mode - Fusion Burst, when Resonators in the team inflict Fusion Burst, Aemeath's Crit. DMG is increased by 60%, and Resonance Liberation Heavenfall Edict: Finale DMG is now Amplified by 25%.\nResonators joining the team or switching Resonance Mode resets this effect.",
            "buffs": [
              {
                "label": "Towards the Daybreak - Heavenfall Edict: Finale DMG Multiplier Increase",
                "trigger": "In Target Fusion Burst Trace",
                "excerpt": "Towards the Daybreak - Heavenfall Edict: Finale DMG Multiplier Increase +100%"
              },
              {
                "label": "Towards the Daybreak - Heavenfall Edict: Overdrive DMG Multiplier Increase",
                "trigger": "In Target Fusion Burst Trace",
                "excerpt": "Towards the Daybreak - Heavenfall Edict: Overdrive DMG Multiplier Increase +40%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "In Resonance Mode - Tune Rupture",
                "excerpt": "Crit. DMG +60% per stack"
              },
              {
                "label": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase",
                "trigger": "In Resonance Mode - Tune Rupture",
                "excerpt": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase +25%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "Crit. DMG +60% per stack"
              },
              {
                "label": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase",
                "trigger": "In Resonance Mode - Fusion Burst",
                "excerpt": "Towards the Daybreak - Heavenfall Edict: Finale DMG Increase +25%"
              }
            ]
          },
          {
            "name": "Ethereal Waltz on Binary Tides",
            "desc": "When casting Intro Skill Songs Across the Universe, Intro Skill Debut of Meteoric Radiance, Resonance Skill Sync Strike and Resonance Skill Seraphic Duet, Resonators in the team gain 20% All-Attribute DMG Bonus for 30s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "After casting Overture of Departure - Songs Across the Universe DMG / Overture of Departure - Debut of Meteoric Radiance DMG / Shared Voyage - Sync Strike: Armament Merge DMG / Shared Voyage - Sync Strike: Call of Dawn DMG / To Sculpt the Silence - Seraphic Duet: Overture DMG / To Sculpt the Silence - Seraphic Duet: Encore DMG",
                "excerpt": "All-Attribute DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "Voyage to the Astral Shore",
            "desc": "When Aemeath defeats a target directly with her skills, Starflux is reset to 100%.\n\nWhen taking fatal damage, Aemeath is knocked out and turns into 2D Digital Ghost for 5s.\nIn the 2D Digital Ghost state, Aemeath grants Resonators in the team a Shield equal to 360% of her ATK for 5s. As she exits from the 2D Digital Ghost state, she revives and recovers 100% of her Max HP and 30 points of Resonance Energy. This effect can be triggered once every 10 min.\nWhen Aemeath revives, she exits the 2D Digital Ghost state and removes the Shield provided."
          },
          {
            "name": "A Zephyr-Kissed Journey to You",
            "desc": "Targets take 40% more Resonance Liberation DMG from Aemeath.\n\nWhen in Resonance Mode - Tune Rupture, Aemeath's Tune Rupture DMG can critically hit, with a fixed Crit. Rate of 80%, and fixed Crit. DMG of 275%.\n\nWhen in Resonance Mode - Fusion Burst and in combat state, Fusion Burst DMG triggered on targets near the active Resonator in the team can critically hit, with a fixed Crit. Rate of 80%, and fixed Crit. DMG of 275%.\n\nThe stacks of Rupturous Trail and Fusion Trail inflicted on the target through Forte Circuit To Sculpt the Silence is doubled.\n\nIn Resonance Mode - Tune Rupture/Resonance Mode - Fusion Burst and in combat, the max stack limit of Rupturous Trail/Fusion Trail on the targets near the active Resonator in the team is increased to 60. While casting Resonance Skill Seraphic Duet, inflict 10 stacks of Rupturous Trail/Fusion Trail on targets within range for 30s.",
            "buffs": [
              {
                "label": "Vulnerability",
                "trigger": "In Target Fusion Burst Trace",
                "excerpt": "Vulnerability +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
