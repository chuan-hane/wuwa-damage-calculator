"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "lucy": {
        "name": "Lucy",
        "skills": [
          {
            "name": "Locked Thread - Basic Attack Stage 1 DMG"
          },
          {
            "name": "Locked Thread - Basic Attack Stage 2 DMG"
          },
          {
            "name": "Locked Thread - Basic Attack Stage 3 DMG"
          },
          {
            "name": "Locked Thread - Basic Attack Stage 4 DMG"
          },
          {
            "name": "Locked Thread - Heavy Attack 1 DMG"
          },
          {
            "name": "Locked Thread - Heavy Attack 2 DMG"
          },
          {
            "name": "Locked Thread - Plunging Attack DMG"
          },
          {
            "name": "Locked Thread - Dodge Counter DMG"
          },
          {
            "name": "Locked Thread - Mid-air Attack - Algorithm Compaction DMG"
          },
          {
            "name": "Locked Thread - Dodge Counter - Algorithm Compaction DMG"
          },
          {
            "name": "Locked Thread - Basic Attack - Thread Shredding Stage 1 DMG"
          },
          {
            "name": "Locked Thread - Basic Attack - Thread Shredding Stage 2 DMG"
          },
          {
            "name": "Locked Thread - Basic Attack - Thread Shredding Stage 3 DMG"
          },
          {
            "name": "Locked Thread - Basic Attack - Thread Shredding Stage 4 DMG"
          },
          {
            "name": "Locked Thread - Heavy Attack - Single Threading DMG"
          },
          {
            "name": "Locked Thread - Heavy Attack - Dual Threading DMG",
            "requiresResourceLabel": "Root Access at least 100"
          },
          {
            "name": "Locked Thread - Heavy Attack - Multithreading DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Locked Thread - Heavy Attack: Multithreading DMG (SQL)",
            "requiresResourceLabel": "SQL"
          },
          {
            "name": "Protocol Breach - Resonance Skill - Payload Charge DMG"
          },
          {
            "name": "Protocol Breach - Resonance Skill - Payload Follow-Up Attack DMG"
          },
          {
            "name": "Protocol Breach - Resonance Skill - Pulse Interference DMG"
          },
          {
            "name": "Protocol Breach - Sequence 2 Pulse Interference Extra DMG"
          },
          {
            "name": "Protocol Breach - Resonance Skill - Deadlock DMG",
            "requiresResourceLabel": "TCP at least 100"
          },
          {
            "name": "Netrunner - Resonance Liberation - Netrunner: Override DMG"
          },
          {
            "name": "Netrunner - Spoofing Program: Ping DMG"
          },
          {
            "name": "Netrunner - Spoofing Program: Synapse Burnout DMG"
          },
          {
            "name": "Netrunner - Spoofing Program: Cripple Movement DMG"
          },
          {
            "name": "Netrunner - Resonance Liberation - Old Net Deep Dive: Override DMG",
            "requiresResourceLabel": "resource_gate_4"
          },
          {
            "name": "Outdated Hallucination - Intro Skill - Outdated Hallucination DMG"
          },
          {
            "name": "Depths of Blackwall - Hack Response - Data Crash DMG"
          }
        ],
        "resources": [
          {
            "label": "Root Access"
          },
          {
            "label": "TCP"
          }
        ],
        "combatStates": [
          {
            "label": "Algorithm Compression State",
            "idLabel": "Algorithm Compaction",
            "inactiveLabel": "Not in Algorithm Compaction",
            "entry": "When in Algorithm Compaction, Lucy's Basic Attack is replaced with Basic Attack - Thread Shredding.",
            "effects": "When in Algorithm Compaction, Lucy's Basic Attack is replaced with Basic Attack - Thread Shredding.",
            "options": [
              {
                "label": "Algorithm Compaction",
                "valueLabel": "Algorithm Compaction"
              }
            ]
          },
          {
            "label": "Target Hack State",
            "idLabel": "Hack Target State",
            "inactiveLabel": "Not in Hack Target State",
            "entry": "Select the current Hack Target State.",
            "effects": "Select the current Hack Target State.",
            "options": [
              {
                "label": "Target Hack · Shifting",
                "valueLabel": "Target Hack · Shifting"
              },
              {
                "label": "Target Hack · Interfered",
                "valueLabel": "Target Hack · Interfered"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Forte Circuit: Algorithm Compaction",
            "label": "Spectro DMG Bonus",
            "trigger": "In Algorithm Compaction",
            "excerpt": "Spectro DMG Bonus +65%",
            "desc": "When in Algorithm Compaction, Lucy's Basic Attack is replaced with Basic Attack - Thread Shredding."
          },
          {
            "source": "Resonance Liberation: Spoofing Program",
            "label": "Vulnerability",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "Vulnerability +5%",
            "desc": "While the Protocol Interface is active, choose up to 7 different Spoofing Program effects, each requiring different RAM costs."
          },
          {
            "source": "Resonance Liberation: Spoofing Program: Cyberware Malfunction",
            "label": "DEF Shred",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DEF Shred +5%",
            "desc": "Spoofing Program: Cyberware Malfunction"
          },
          {
            "source": "Inherent Skill: Function Cracking",
            "label": "DMG Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DMG Increase +20% per stack",
            "desc": "DMG Increase +20% per stack"
          },
          {
            "source": "Inherent Skill: Function Cracking",
            "label": "DMG Multiplier Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DMG Multiplier Increase +20% per stack",
            "desc": "DMG Multiplier Increase +20% per stack"
          },
          {
            "source": "Inherent Skill: Function Cracking",
            "label": "DMG Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DMG Increase +5%",
            "desc": "DMG Increase +5%"
          },
          {
            "source": "Inherent Skill: Function Cracking",
            "label": "DMG Multiplier Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DMG Multiplier Increase +5%",
            "desc": "DMG Multiplier Increase +5%"
          },
          {
            "source": "Outro Skill: Countermeasure Program",
            "label": "Basic Attack DMG Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "Basic Attack DMG Increase +25%",
            "desc": "Grants all Resonators in the team Countermeasure Program for 25s."
          },
          {
            "source": "Outro Skill: Countermeasure Program",
            "label": "DMG Increase",
            "trigger": "In Target Hack · Interfered",
            "excerpt": "DMG Increase +20%",
            "desc": "Grants all Resonators in the team Countermeasure Program for 25s."
          }
        ],
        "chain": [
          {
            "name": "The Moon, a Ticket, and a Dream",
            "desc": "Lucy is now immune to interruptions during Resonance Skill - Payload, Resonance Skill - Pulse Inteference, Heavy Attack - Dual Threading, and Heavy Attack - Multi-Threading\nCasting Intro Skill - Outdated Hallucination increases ATK by 20% for 14s.\nWhen a Resonator in the team defeats a target affected by Spoofing Program with direct damage, Lucy records the effect triggered and activates the corresponding Quick Action on that Resonator for 6s. The record expires when Lucy is knocked out.\nQuick Action: When activated, inflict the recorded Spoofing Program effects on targets within a certain distance from the active Resonator in the team, effective once only on each target.\nThe following Spoofing Program effects can be recorded: Spoofing Program: Cyberware Malfunction, Spoofing Program: Breach Protocol, Spoofing Program: Cripple Movement, Spoofing Program: Weapon Glitch, and Spoofing Program: Cyberpsychosis. When applying Spoofing Program effects via Quick Action, only the continuous status effects are applied.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Outdated Hallucination - Intro Skill - Outdated Hallucination DMG",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "The Blackwall, the Past, the Escape",
            "desc": "While casting Resonance Liberation - Netrunner and Resonance Liberation - Old Net Deep Dive, Lucy's starting RAM is increased to 32.\nAfter casting Resonance Skill - Pulse Interference, deal 1 additional instance of Spectro DMG equal to 450% of Lucy's ATK, considered Heavy Attack DMG.\nWhen this instance of damage hits the target, apply all of the following Spoofing Program effects: Spoofing Program: Cyberware Malfunction,\nSpoofing Program: Breach Protocol, Spoofing Program: Cripple Movement, Spoofing Program: Weapon Glitch, and Spoofing Program: Cyberpsychosis. Only the continuous status effects are applied.\nForte Circuit - Depths of Blackwall is enhanced: When casting Heavy Attack - Multi-threading, if Lucy has SQL, the DMG Multiplier increase is raised from 270% to 560%.",
            "buffs": [
              {
                "label": "Locked Thread - Heavy Attack: Multithreading DMG (SQL) DMG Multiplier Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Locked Thread - Heavy Attack: Multithreading DMG (SQL) DMG Multiplier Increase +290%"
              }
            ]
          },
          {
            "name": "Cyberpunk",
            "desc": "The DMG Multiplier of Override from Resonance Liberation - Netrunner and Resonance Liberation - Old Net Deep Dive is increased by 50%, and its Crit. DMG is increased by 100%.\nThe DMG Multiplier of Spoofing Program: Cripple Movement is increased by 65%.\nThe DMG Multiplier of Hack Response - Data Crash is increased by 65%.",
            "buffs": [
              {
                "label": "Netrunner - Resonance Liberation - Netrunner: Override DMG Multiplier Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Netrunner - Resonance Liberation - Netrunner: Override DMG Multiplier Increase +50%"
              },
              {
                "label": "Crit. DMG",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Crit. DMG +100%"
              },
              {
                "label": "Netrunner - Spoofing Program: Cripple Movement DMG Multiplier Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Netrunner - Spoofing Program: Cripple Movement DMG Multiplier Increase +65%"
              },
              {
                "label": "Depths of Blackwall - Hack Response - Data Crash DMG Multiplier Increase",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "Depths of Blackwall - Hack Response - Data Crash DMG Multiplier Increase +65%"
              }
            ]
          },
          {
            "name": "No Living Legends in Night City",
            "desc": "When Resonators in the team inflict Hack - Shifting, Resonators in the team gain 20% All-Attribute DMG Bonus for 20s.",
            "buffs": [
              {
                "label": "All-Attribute DMG Bonus",
                "trigger": "In Target Hack · Interfered",
                "excerpt": "All-Attribute DMG Bonus +20%"
              }
            ]
          },
          {
            "name": "A Broken Path to Hell",
            "desc": "The stack limit of Optical Illusion obtainable via Inherent Skill - Ghost Cyberware is increased to 2.\nInherent Skill - Ghost Cyberware is now enhanced: When Lucy's HP falls below 50%, she immediately gains 1 stacks of Optical Illusion upon being hit. This effect has a Cooldown of 180s. When Optical Illusion is triggered, Lucy gains a Shield equal to 150% of ATK for 10s."
          },
          {
            "name": "I Really Want to Stay At Your House",
            "desc": "Targets with Hack - Shifting or in the Hack - Interfered state take 40% increased Heavy Attack DMG from Lucy.\nTargets with Hack - Shifting or in the Hack - Interfered state take 60% increased Hack DMG from Lucy.\nThe Stagnation triggered by Hack Response - Data Crash now lasts for 1.5s.",
            "buffs": [
              {
                "label": "Vulnerability",
                "trigger": "In Target Hack · Shifting",
                "excerpt": "Vulnerability +40%"
              },
              {
                "label": "Vulnerability",
                "trigger": "In Target Hack · Shifting",
                "excerpt": "Vulnerability +60%"
              }
            ]
          }
        ]
      }
    }
  }
});
