"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "sonatas": {
      "1": {
        "name": "Freezing Frost",
        "p2": {
          "label": "Glacio DMG Bonus",
          "trigger": "Default",
          "excerpt": "Glacio DMG Bonus +10%",
          "desc": "Glacio DMG + 10%."
        },
        "p5": {
          "label": "Glacio DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Glacio DMG Bonus +30% per stack",
          "desc": "Glacio DMG + 10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s."
        },
        "lead": {
          "echo": "Lampylumen Myriad",
          "buffs": [
            {
              "label": "Glacio DMG Bonus",
              "trigger": "After hit",
              "excerpt": "Glacio DMG Bonus +12% per stack",
              "desc": "Transform into Lampylumen Myriad. Perform up to 3 consecutive attacks.\n\nUnleash a freezing shock by performing consecutive forward strikes, with the initial two strikes inflicting 200.16% and 200.16% Glacio DMG respectively, and the final strike dealing 266.88% Glacio DMG. Enemies will be frozen on hit.\n\nEach shock increases the current character's Glacio DMG by 4.00% and Resonance Skill DMG dealt by 4.00% for 15s, stacking up to 3 times\n\nCD: 20s"
            },
            {
              "label": "Resonance Skill DMG Bonus",
              "trigger": "After hit",
              "excerpt": "Resonance Skill DMG Bonus +12% per stack",
              "desc": "Transform into Lampylumen Myriad. Perform up to 3 consecutive attacks.\n\nUnleash a freezing shock by performing consecutive forward strikes, with the initial two strikes inflicting 200.16% and 200.16% Glacio DMG respectively, and the final strike dealing 266.88% Glacio DMG. Enemies will be frozen on hit.\n\nEach shock increases the current character's Glacio DMG by 4.00% and Resonance Skill DMG dealt by 4.00% for 15s, stacking up to 3 times\n\nCD: 20s"
            }
          ]
        }
      },
      "2": {
        "name": "Molten Rift",
        "p2": {
          "label": "Fusion DMG Bonus",
          "trigger": "Default",
          "excerpt": "Fusion DMG Bonus +10%",
          "desc": "Fusion DMG + 10%."
        },
        "p5": {
          "label": "Fusion DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Fusion DMG Bonus +30%",
          "desc": "Fusion DMG + 30% for 15s after releasing Resonance Skill."
        },
        "leads": [
          {
            "echo": "Inferno Rider",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Fusion DMG Bonus +12%",
                "desc": "Transform into the Inferno Rider to launch up to 3 consecutive slashes in a row, each slash dealing 242.40%, 282.80%, and 282.80% Fusion DMG respectively.\n\nAfter the final hit, increase the current Resonator's Fusion DMG by 12.00% and Basic Attack DMG by 12.00% for 15s.\n\nLong press the Echo Skill to transform into the Inferno Rider and enter Riding Mode. When exiting Riding Mode, deal 282.80% Fusion DMG to enemies in front.\n\nCD: 20s"
              },
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Basic Attack DMG Bonus +12%",
                "desc": "Transform into the Inferno Rider to launch up to 3 consecutive slashes in a row, each slash dealing 242.40%, 282.80%, and 282.80% Fusion DMG respectively.\n\nAfter the final hit, increase the current Resonator's Fusion DMG by 12.00% and Basic Attack DMG by 12.00% for 15s.\n\nLong press the Echo Skill to transform into the Inferno Rider and enter Riding Mode. When exiting Riding Mode, deal 282.80% Fusion DMG to enemies in front.\n\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Nightmare: Inferno Rider",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Fusion DMG Bonus +12%",
                "desc": "Transform into Nightmare: Inferno Rider and jump to attack enemies in front, dealing 405.00% Fusion DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Fusion DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nHold Echo Skill to transform into Nightmare: Inferno Rider and enter Riding Mode. When exiting Riding Mode, deal 283.50% Fusion DMG to enemies in front.\nCD: 25s."
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Skill DMG Bonus +12%",
                "desc": "Transform into Nightmare: Inferno Rider and jump to attack enemies in front, dealing 405.00% Fusion DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Fusion DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nHold Echo Skill to transform into Nightmare: Inferno Rider and enter Riding Mode. When exiting Riding Mode, deal 283.50% Fusion DMG to enemies in front.\nCD: 25s."
              }
            ]
          }
        ]
      },
      "3": {
        "name": "Void Thunder",
        "p2": {
          "label": "Electro DMG Bonus",
          "trigger": "Default",
          "excerpt": "Electro DMG Bonus +10%",
          "desc": "Electro DMG + 10%."
        },
        "p5": {
          "label": "Electro DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Electro DMG Bonus +30% per stack",
          "desc": "Electro DMG + 15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s."
        },
        "leads": [
          {
            "echo": "Thundering Mephis",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Electro DMG Bonus +12%",
                "desc": "Transform into Thundering Mephis, engaging in a rapid assault of up to 6 strikes. The first 5 strikes deal 132.61% Electro DMG each, while the final strike inflicts 189.44% Electro DMG, with an additional 31.57% Electro DMG from the thunder.\n\nAfter the final hit, increase the current character's Electro DMG by 12.00% and Resonance Liberation DMG by 12.00% for 15s.\n\nCD: 20s"
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Transform into Thundering Mephis, engaging in a rapid assault of up to 6 strikes. The first 5 strikes deal 132.61% Electro DMG each, while the final strike inflicts 189.44% Electro DMG, with an additional 31.57% Electro DMG from the thunder.\n\nAfter the final hit, increase the current character's Electro DMG by 12.00% and Resonance Liberation DMG by 12.00% for 15s.\n\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Tempest Mephis",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Electro DMG Bonus +12%",
                "desc": "Summon Hecate to control the target for 6s and restore 60 Concerto Energy for all nearby Resonators in the team during this time.\nCD: 40s"
              },
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Resonance Liberation DMG Bonus +12%",
                "desc": "Summon Hecate to control the target for 6s and restore 60 Concerto Energy for all nearby Resonators in the team during this time.\nCD: 40s"
              }
            ]
          },
          {
            "echo": "Nightmare: Thundering Mephis",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Electro DMG Bonus +12%",
                "desc": "Transform into Nightmare: Thundering Mephis and attack enemies in front, dealing 405.00% Electro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Electro DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Liberation DMG Bonus +12%",
                "desc": "Transform into Nightmare: Thundering Mephis and attack enemies in front, dealing 405.00% Electro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Electro DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 25s."
              }
            ]
          },
          {
            "echo": "Nightmare: Tempest Mephis",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Electro DMG Bonus +12%",
                "desc": "Transform into Nightmare: Tempest Mephis and attack surrounding enemies, dealing 405.00% Electro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Electro DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Skill DMG Bonus +12%",
                "desc": "Transform into Nightmare: Tempest Mephis and attack surrounding enemies, dealing 405.00% Electro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Electro DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nCD: 25s."
              }
            ]
          }
        ]
      },
      "4": {
        "name": "Sierra Gale",
        "p2": {
          "label": "Aero DMG Bonus",
          "trigger": "Default",
          "excerpt": "Aero DMG Bonus +10%",
          "desc": "Aero DMG + 10%."
        },
        "p5": {
          "label": "Aero DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Aero DMG Bonus +30%",
          "desc": "Aero DMG + 30% for 15s after releasing Intro Skill."
        },
        "leads": [
          {
            "echo": "Feilian Beringal",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Aero DMG Bonus +12%",
                "desc": "Transform into Feilian Beringal to perform a powerful kick. If the kick lands on an enemy, immediately perform a follow-up strike. The kick deals 231.84% Aero DMG, and the follow-up strike deals 283.36% Aero DMG.\n\nAfter the follow-up strike hits, the current character's Aero DMG increases by 12.00%, and the Heavy Attack DMG increases by 12.00% for 15s\n\nCD: 20s"
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Transform into Feilian Beringal to perform a powerful kick. If the kick lands on an enemy, immediately perform a follow-up strike. The kick deals 231.84% Aero DMG, and the follow-up strike deals 283.36% Aero DMG.\n\nAfter the follow-up strike hits, the current character's Aero DMG increases by 12.00%, and the Heavy Attack DMG increases by 12.00% for 15s\n\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Nightmare: Feilian Beringal",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +12%",
                "desc": "Summon a Nightmare: Feilian Beringal to attack enemies, dealing 164.16% Aero DMG. The remaining Whirlwind Beam will continuously attack surrounding enemies up to 5 times, each dealing 21.89% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Summon a Nightmare: Feilian Beringal to attack enemies, dealing 164.16% Aero DMG. The remaining Whirlwind Beam will continuously attack surrounding enemies up to 5 times, each dealing 21.89% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
              }
            ]
          }
        ]
      },
      "5": {
        "name": "Celestial Light",
        "p2": {
          "label": "Spectro DMG Bonus",
          "trigger": "Default",
          "excerpt": "Spectro DMG Bonus +10%",
          "desc": "Spectro DMG + 10%."
        },
        "p5": {
          "label": "Spectro DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Spectro DMG Bonus +30%",
          "desc": "Spectro DMG + 30% for 15s after releasing Intro Skill."
        },
        "leads": [
          {
            "echo": "Mourning Aix",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Spectro DMG Bonus +12%",
                "desc": "Transform into Mourning Aix and perform 2 consecutive claw attacks, each attack dealing 157.44% and 236.16% Spectro DMG respectively.\n\nAfter the transformation, increase current character's Spectro DMG by 12.00% and Resonance Liberation DMG by 12.00% for 15s\n\nCD: 20s"
              },
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Resonance Liberation DMG Bonus +12%",
                "desc": "Transform into Mourning Aix and perform 2 consecutive claw attacks, each attack dealing 157.44% and 236.16% Spectro DMG respectively.\n\nAfter the transformation, increase current character's Spectro DMG by 12.00% and Resonance Liberation DMG by 12.00% for 15s\n\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Jué",
            "buffs": [
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Resonance Skill DMG Bonus +16%",
                "desc": "Transform into Chop Chop for 5s, dealing 70.09% Fusion DMG. Dealing DMG to enemies resets the duration of Echo Transformation, with a maximum of 20s, and inflicts 3 stack of Panic on the target. This effect can be triggered once per second on each target. The Echo Transformation duration will not be reset when the Resonator is not on the field.\nWhen the target receives 100 stacks of Panic, deplete the target's Vibration Strength by 100.00% of the Max Vibration Strength and Immobilize the target. The DMG taken by the target when Immobilized is guaranteed to be Crit. DMG, and their DMG RES for all Attributes is reduced by 40.00%. Triggering this effect removes all stacks of Panic.\nThe target will not gain new stacks of Panic when Immobilized.\nCD: 40s"
              }
            ]
          }
        ]
      },
      "6": {
        "name": "Havoc Eclipse",
        "p2": {
          "label": "Havoc DMG Bonus",
          "trigger": "Default",
          "excerpt": "Havoc DMG Bonus +10%",
          "desc": "Havoc DMG + 10%."
        },
        "p5": {
          "label": "Havoc DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Havoc DMG Bonus +30% per stack",
          "desc": "Havoc DMG + 7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s."
        },
        "leads": [
          {
            "echo": "Crownless",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Havoc DMG Bonus +12%",
                "desc": "Transform into Crownless and perform up to 4 consecutive attacks. The first 2 attacks deal 134.08% Havoc DMG each, the 3rd attack deals 100.56% Havoc DMG 2 times, and the 4th attack deals 67.04% Havoc DMG 3 times.\n\nAfter the transformation, increase current character's Havoc DMG by 12.00% and Resonance Skill DMG by 12.00% for 15s.\n\nCD: 20s"
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Resonance Skill DMG Bonus +12%",
                "desc": "Transform into Crownless and perform up to 4 consecutive attacks. The first 2 attacks deal 134.08% Havoc DMG each, the 3rd attack deals 100.56% Havoc DMG 2 times, and the 4th attack deals 67.04% Havoc DMG 3 times.\n\nAfter the transformation, increase current character's Havoc DMG by 12.00% and Resonance Skill DMG by 12.00% for 15s.\n\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Nightmare: Crownless",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Havoc DMG Bonus +12%",
                "desc": "Transform into Nightmare: Crownless and attack enemies in front, dealing 264.60% Havoc DMG. The Resonator with this Echo equipped in their main slot gains 12.00% Havoc DMG Bonus and 12.00% Basic Attack DMG Bonus.\nThis skill has 3 initial charges, replenished once every 12s, max 3 charges. When Nightmare: Crownless hits a target, DMG dealt by this skill is increased by 20.00%. This effect lasts for 2s and does not stack.\nCD: 12s."
              },
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Basic Attack DMG Bonus +12%",
                "desc": "Transform into Nightmare: Crownless and attack enemies in front, dealing 264.60% Havoc DMG. The Resonator with this Echo equipped in their main slot gains 12.00% Havoc DMG Bonus and 12.00% Basic Attack DMG Bonus.\nThis skill has 3 initial charges, replenished once every 12s, max 3 charges. When Nightmare: Crownless hits a target, DMG dealt by this skill is increased by 20.00%. This effect lasts for 2s and does not stack.\nCD: 12s."
              }
            ]
          }
        ]
      },
      "7": {
        "name": "Rejuvenating Glow",
        "p2": {
          "label": "Healing Bonus",
          "trigger": "Default",
          "excerpt": "Healing Bonus +10%",
          "desc": "Healing Bonus + 10%."
        },
        "p5": {
          "label": "ATK",
          "trigger": "After casting",
          "excerpt": "ATK +15%",
          "desc": "Increases the ATK of all party members by 15% for 30s upon healing allies."
        },
        "leads": [
          {
            "echo": "Bell-Borne Geochelone",
            "buffs": [
              {
                "label": "Final DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Final DMG Bonus +10%",
                "desc": "Activate the protection of Bell-Borne Geochelone. Deal Glacio DMG based on 145.92% of the current character's DEF to nearby enemies, and obtain a Bell-Borne Shield that lasts for 15s\n\nThe Bell-Borne Shield provides 50.00% DMG Reduction and 10.00% DMG Boost for the current team members, and disappears after the current character is hit for 3 times.\n\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Fallacy of No Return",
            "buffs": [
              {
                "label": "Energy Regen",
                "trigger": "After hit",
                "excerpt": "Energy Regen +10%",
                "desc": "Activate the Echo Skill to summon a fraction of the Fallacy of No Return's power and deal a blast to the surrounding area, inflicting Spectro DMG equal to 15.86% of max HP, after which the Resonator gains 10% bonus Energy Regen and all team members 10% bonus ATK for 20s.\nHold Echo Skill to unleash a series of flurry assaults at the cost of STA, each dealing Spectro DMG equal to 1.58% of max HP; Release to end the assail in a powerful blow, dealing Spectro DMG equal to 19.82% of max HP.\nCD: 20s"
              },
              {
                "label": "ATK",
                "trigger": "After hit",
                "excerpt": "ATK +10%",
                "desc": "Activate the Echo Skill to summon a fraction of the Fallacy of No Return's power and deal a blast to the surrounding area, inflicting Spectro DMG equal to 15.86% of max HP, after which the Resonator gains 10% bonus Energy Regen and all team members 10% bonus ATK for 20s.\nHold Echo Skill to unleash a series of flurry assaults at the cost of STA, each dealing Spectro DMG equal to 1.58% of max HP; Release to end the assail in a powerful blow, dealing Spectro DMG equal to 19.82% of max HP.\nCD: 20s"
              }
            ]
          }
        ]
      },
      "8": {
        "name": "Lingering Tunes",
        "p2": {
          "label": "ATK",
          "trigger": "Default",
          "excerpt": "ATK +10%",
          "desc": "ATK +10%"
        },
        "lead": {
          "echo": "Mech Abomination",
          "buffs": [
            {
              "label": "ATK",
              "trigger": "After hit",
              "excerpt": "ATK +12%",
              "desc": "Strike enemies in front, dealing 48.64% Electro DMG, and summon Mech Waste to attack. Mech Waste deals 320.00% Electro DMG on hit and explodes after a while, dealing 160.00% Electro DMG.\n\nAfter casting this Echo Skill, increase the current character's ATK by 12.00% for 15s.\nDamage dealt by Mech Waste equals to the Resonator's Outro Skill DMG.\n\nCD: 20s"
            }
          ]
        }
      },
      "10": {
        "name": "Frosty Resolve",
        "p2": {
          "label": "Resonance Skill DMG Bonus",
          "trigger": "Default",
          "excerpt": "Resonance Skill DMG Bonus +12%",
          "desc": "Resonance Skill DMG + 12%"
        },
        "p5": [
          {
            "label": "Glacio DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Glacio DMG Bonus +22.5%",
            "desc": "Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increases Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times."
          },
          {
            "label": "Resonance Skill DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Resonance Skill DMG Bonus +36% per stack",
            "desc": "Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increases Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times."
          }
        ],
        "leads": [
          {
            "echo": "Sentry Construct",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Glacio DMG Bonus +12%",
                "desc": "Transform into Sentry Construct and attack enemies in front, dealing 405.00% Glacio DMG. Each time the Resonator with this Echo casts Resonance Liberation, it charges the Strike Capacitor.\nOnce Strike Capacitor is at max level, the Echo Skill cooldown will be reset. Use Echo Skill to transform into Sentry Construct and dive into enemies from the air, dealing 405.00% Glacio DMG and freezing the target.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Glacio DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Skill DMG Bonus +12%",
                "desc": "Transform into Sentry Construct and attack enemies in front, dealing 405.00% Glacio DMG. Each time the Resonator with this Echo casts Resonance Liberation, it charges the Strike Capacitor.\nOnce Strike Capacitor is at max level, the Echo Skill cooldown will be reset. Use Echo Skill to transform into Sentry Construct and dive into enemies from the air, dealing 405.00% Glacio DMG and freezing the target.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Glacio DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nCD: 25s."
              }
            ]
          },
          {
            "echo": "Nightmare: Lampylumen Myriad",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Glacio DMG Bonus +12%",
                "desc": "Summon Nightmare: Lampylumen Myriad and attack surrounding enemies, dealing 273.60% Glacio DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Glacio DMG Bonus and deals 30.00% more Coordinated Attack DMG.\nCD: 20s."
              },
              {
                "label": "Coordinated Attack Bonus",
                "trigger": "Enabled",
                "excerpt": "Coordinated Attack Bonus +30%",
                "desc": "Summon Nightmare: Lampylumen Myriad and attack surrounding enemies, dealing 273.60% Glacio DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Glacio DMG Bonus and deals 30.00% more Coordinated Attack DMG.\nCD: 20s."
              }
            ]
          }
        ]
      },
      "11": {
        "name": "Eternal Radiance",
        "p2": {
          "label": "Spectro DMG Bonus",
          "trigger": "Default",
          "excerpt": "Spectro DMG Bonus +10%",
          "desc": "Spectro DMG + 10%"
        },
        "p5": [
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +20%",
            "desc": "Inflicting Spectro Frazzle on enemies increases Crit. Rate by 20% for 15s. Attacking enemies inflicted with 10 stacks of Spectro Frazzle grants 15% Spectro DMG Bonus for 15s."
          },
          {
            "label": "Spectro DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Spectro DMG Bonus +15%",
            "desc": "Inflicting Spectro Frazzle on enemies increases Crit. Rate by 20% for 15s. Attacking enemies inflicted with 10 stacks of Spectro Frazzle grants 15% Spectro DMG Bonus for 15s."
          }
        ],
        "leads": [
          {
            "echo": "Nightmare: Mourning Aix",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Spectro DMG Bonus +12%",
                "desc": "Summon a Nightmare: Mourning Aix to attack surrounding enemies, dealing 273.60% Spectro DMG. DMG dealt to enemies inflicted by Spectro Frazzle is increased by 100.00%.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Spectro DMG Bonus.\nCD: 20s."
              }
            ]
          },
          {
            "echo": "Capitaneus",
            "buffs": [
              {
                "label": "Spectro DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Spectro DMG Bonus +12%",
                "desc": "Summon a Capitaneus to jump up and smash enemies, dealing 118.80% Spectro DMG. This attack generates 4 extra Merciless Judgements, each dealing 59.40% Spectro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Spectro DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Summon a Capitaneus to jump up and smash enemies, dealing 118.80% Spectro DMG. This attack generates 4 extra Merciless Judgements, each dealing 59.40% Spectro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Spectro DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
              }
            ]
          }
        ]
      },
      "12": {
        "name": "Tidebreaking Courage",
        "p2": {
          "label": "Energy Regen",
          "trigger": "Default",
          "excerpt": "Energy Regen +10%",
          "desc": "Energy Regen + 10%"
        },
        "p5": [
          {
            "label": "ATK",
            "trigger": "Default",
            "excerpt": "ATK +15%",
            "desc": "Increase the Resonator's ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator."
          },
          {
            "label": "All-Attribute DMG Bonus",
            "trigger": "Default",
            "excerpt": "All-Attribute DMG Bonus +30%",
            "desc": "Increase the Resonator's ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator."
          }
        ],
        "leads": [
          {
            "echo": "Dragon of Dirge",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Fusion DMG Bonus +12%",
                "desc": "Transform into Dragon of Dirge and summon a Grief Rift lasting for 5s. Periodically deal 36.81% Fusion DMG to enemies within the area of effect.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Fusion DMG Bonus and 12.00% Basic Attack DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Basic Attack DMG Bonus +12%",
                "desc": "Transform into Dragon of Dirge and summon a Grief Rift lasting for 5s. Periodically deal 36.81% Fusion DMG to enemies within the area of effect.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Fusion DMG Bonus and 12.00% Basic Attack DMG Bonus.\nCD: 25s."
              }
            ]
          },
          {
            "echo": "Dreamless",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Basic Attack DMG Bonus +125% per stack",
                "desc": "Summon Dragon of Dirge to generate a Grief Rift that lasts for 10s, regularly dealing 65.29% Fusion DMG to enemies within the Grief Rift.\nDealing DMG to enemies with this Echo Skill grants a 5.00% Basic and Heavy Attack Bonus to all nearby Resonators in the team, triggered once every second, stacking up to 25 times.\nCD: 35s"
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "After hit",
                "excerpt": "Heavy Attack DMG Bonus +125% per stack",
                "desc": "Summon Dragon of Dirge to generate a Grief Rift that lasts for 10s, regularly dealing 65.29% Fusion DMG to enemies within the Grief Rift.\nDealing DMG to enemies with this Echo Skill grants a 5.00% Basic and Heavy Attack Bonus to all nearby Resonators in the team, triggered once every second, stacking up to 25 times.\nCD: 35s"
              }
            ]
          }
        ]
      },
      "13": {
        "name": "Midnight Veil",
        "p2": {
          "label": "Havoc DMG Bonus",
          "trigger": "Default",
          "excerpt": "Havoc DMG Bonus +10%",
          "desc": "Havoc DMG + 10%"
        },
        "p5": {
          "label": "Havoc DMG Bonus",
          "trigger": "After casting",
          "excerpt": "Havoc DMG Bonus +15%",
          "desc": "When Outro Skill is triggered, deal additional 480% Havoc DMG to surrounding enemies, considered Outro Skill DMG, and grant the incoming Resonator 15% Havoc DMG Bonus for 15s."
        },
        "leads": [
          {
            "echo": "Lorelei",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Havoc DMG Bonus +12%",
                "desc": "Transform into Lorelei and attack surrounding enemies, dealing 405.00% Havoc DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Havoc DMG Bonus and 12.00% Basic Attack DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Basic Attack DMG Bonus +12%",
                "desc": "Transform into Lorelei and attack surrounding enemies, dealing 405.00% Havoc DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Havoc DMG Bonus and 12.00% Basic Attack DMG Bonus.\nCD: 25s."
              }
            ]
          },
          {
            "echo": "Nightmare: Impermanence Heron",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Havoc DMG Bonus +12%",
                "desc": "Transform into Nightmare: Impermanence Heron and deliver up to 10 consecutive strikes to surrounding enemies, each dealing 40.50% Havoc DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Havoc DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Transform into Nightmare: Impermanence Heron and deliver up to 10 consecutive strikes to surrounding enemies, each dealing 40.50% Havoc DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Havoc DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 25s."
              }
            ]
          }
        ]
      },
      "14": {
        "name": "Gusts of Welkin",
        "p2": {
          "label": "Aero DMG Bonus",
          "trigger": "Default",
          "excerpt": "Aero DMG Bonus +10%",
          "desc": "Aero DMG + 10%"
        },
        "p5": [
          {
            "label": "Aero DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Aero DMG Bonus +15%",
            "desc": "Inflicting Aero Erosion upon enemies increases Aero DMG for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s."
          },
          {
            "label": "Aero DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Aero DMG Bonus +15%",
            "desc": "Inflicting Aero Erosion upon enemies increases Aero DMG for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s."
          }
        ],
        "leads": [
          {
            "echo": "Reminiscence: Fleurdelys",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +10%",
                "desc": "Summon Windcleaver and attack the target, dealing 27.36% Aero DMG 8 times and 136.80% Aero DMG once.\nThe Resonator with this Echo equipped in the main slot gains 10.00% Aero DMG Bonus. When Resonator: Aero or Cartethyia equips this Echo, they gain 10.00% more Aero DMG Bonus.\nCD: 20s."
              },
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +10%",
                "desc": "Summon Windcleaver and attack the target, dealing 27.36% Aero DMG 8 times and 136.80% Aero DMG once.\nThe Resonator with this Echo equipped in the main slot gains 10.00% Aero DMG Bonus. When Resonator: Aero or Cartethyia equips this Echo, they gain 10.00% more Aero DMG Bonus.\nCD: 20s."
              }
            ]
          },
          {
            "echo": "Nightmare: Kelpie",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Glacio DMG Bonus +12%",
                "desc": "Transform into Nightmare: Kelpie to attack nearby targets, dealing 405.00% Glacio DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Glacio DMG Bonus and 12.00% Aero DMG Bonus. Switching out the Resonator with Outro Skill summons Nightmare: Kelpie to deal 405.00% Aero DMG.\nCD: 25s"
              },
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +12%",
                "desc": "Transform into Nightmare: Kelpie to attack nearby targets, dealing 405.00% Glacio DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Glacio DMG Bonus and 12.00% Aero DMG Bonus. Switching out the Resonator with Outro Skill summons Nightmare: Kelpie to deal 405.00% Aero DMG.\nCD: 25s"
              }
            ]
          }
        ]
      },
      "15": {
        "name": "Empyrean Anthem",
        "p2": {
          "label": "Energy Regen",
          "trigger": "Default",
          "excerpt": "Energy Regen +10%",
          "desc": "Energy Regen + 10%"
        },
        "p5": [
          {
            "label": "Coordinated Attack Bonus",
            "trigger": "Default",
            "excerpt": "Coordinated Attack Bonus +80%",
            "desc": "Increase the Resonator's Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator's ATK by 20% for 4s."
          },
          {
            "label": "ATK",
            "trigger": "After casting",
            "excerpt": "ATK +20%",
            "desc": "Increase the Resonator's Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator's ATK by 20% for 4s."
          }
        ],
        "leads": [
          {
            "echo": "Hecate",
            "buffs": [
              {
                "label": "Coordinated Attack Bonus",
                "trigger": "Enabled",
                "excerpt": "Coordinated Attack Bonus +40%",
                "desc": "Summon 3 twirling Crescent Servants around you. Crescent Servants attack enemies with their spinning blades, dealing 45.59% Havoc DMG. Triggering a Counterattack with the Echo attacks resets the Crescent Servants' duration.\nThe Resonator with this Echo equipped in the main slot has their Coordinated Attack DMG increased by 40.00%.\nCD: 20s."
              }
            ]
          },
          {
            "echo": "Nightmare: Tempest Mephis",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Electro DMG Bonus +12%",
                "desc": "Transform into Nightmare: Tempest Mephis and attack surrounding enemies, dealing 405.00% Electro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Electro DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nCD: 25s."
              },
              {
                "label": "Resonance Skill DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Skill DMG Bonus +12%",
                "desc": "Transform into Nightmare: Tempest Mephis and attack surrounding enemies, dealing 405.00% Electro DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Electro DMG Bonus and 12.00% Resonance Skill DMG Bonus.\nCD: 25s."
              }
            ]
          },
          {
            "echo": "Nightmare: Lampylumen Myriad",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Glacio DMG Bonus +12%",
                "desc": "Summon Nightmare: Lampylumen Myriad and attack surrounding enemies, dealing 273.60% Glacio DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Glacio DMG Bonus and deals 30.00% more Coordinated Attack DMG.\nCD: 20s."
              },
              {
                "label": "Coordinated Attack Bonus",
                "trigger": "Enabled",
                "excerpt": "Coordinated Attack Bonus +30%",
                "desc": "Summon Nightmare: Lampylumen Myriad and attack surrounding enemies, dealing 273.60% Glacio DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Glacio DMG Bonus and deals 30.00% more Coordinated Attack DMG.\nCD: 20s."
              }
            ]
          }
        ]
      },
      "16": {
        "name": "Moonlit Clouds",
        "p2": {
          "label": "Energy Regen",
          "trigger": "Default",
          "excerpt": "Energy Regen +10%",
          "desc": "Energy Regen + 10%."
        },
        "p5": {
          "label": "ATK",
          "trigger": "After casting",
          "excerpt": "ATK +22.5%",
          "desc": "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        "lead": {
          "echo": "Impermanence Heron",
          "buffs": [
            {
              "label": "Final DMG Bonus",
              "trigger": "After hit",
              "excerpt": "Final DMG Bonus +12%",
              "desc": "Transform into Impermanence Heron to fly up and smack down, dealing 310.56% Havoc DMG.\n\nLong press to stay as Impermanence Heron and continuously spit flames, each attack dealing 55.73% Havoc DMG.\n\nOnce the initial attack lands on any enemy, the current character regains 10 Resonance Energy. If the current character uses their Outro Skill within the next 15s, the next character's damage dealt will be boosted by 12% for 15s.\n\nCD: 20s"
            }
          ]
        }
      },
      "17": {
        "name": "Windward Pilgrimage",
        "p2": {
          "label": "Aero DMG Bonus",
          "trigger": "Default",
          "excerpt": "Aero DMG Bonus +10%",
          "desc": "Aero DMG + 10%"
        },
        "p5": [
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +10%",
            "desc": "Hitting a target with Aero Erosion increases Crit. Rate by 10% and grants 30% Aero DMG Bonus, lasting for 10s."
          },
          {
            "label": "Aero DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Aero DMG Bonus +30%",
            "desc": "Hitting a target with Aero Erosion increases Crit. Rate by 10% and grants 30% Aero DMG Bonus, lasting for 10s."
          }
        ],
        "leads": [
          {
            "echo": "Reminiscence: Fleurdelys",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +10%",
                "desc": "Summon Windcleaver and attack the target, dealing 27.36% Aero DMG 8 times and 136.80% Aero DMG once.\nThe Resonator with this Echo equipped in the main slot gains 10.00% Aero DMG Bonus. When Resonator: Aero or Cartethyia equips this Echo, they gain 10.00% more Aero DMG Bonus.\nCD: 20s."
              },
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +10%",
                "desc": "Summon Windcleaver and attack the target, dealing 27.36% Aero DMG 8 times and 136.80% Aero DMG once.\nThe Resonator with this Echo equipped in the main slot gains 10.00% Aero DMG Bonus. When Resonator: Aero or Cartethyia equips this Echo, they gain 10.00% more Aero DMG Bonus.\nCD: 20s."
              }
            ]
          },
          {
            "echo": "Nightmare: Kelpie",
            "buffs": [
              {
                "label": "Glacio DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Glacio DMG Bonus +12%",
                "desc": "Transform into Nightmare: Kelpie to attack nearby targets, dealing 405.00% Glacio DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Glacio DMG Bonus and 12.00% Aero DMG Bonus. Switching out the Resonator with Outro Skill summons Nightmare: Kelpie to deal 405.00% Aero DMG.\nCD: 25s"
              },
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +12%",
                "desc": "Transform into Nightmare: Kelpie to attack nearby targets, dealing 405.00% Glacio DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Glacio DMG Bonus and 12.00% Aero DMG Bonus. Switching out the Resonator with Outro Skill summons Nightmare: Kelpie to deal 405.00% Aero DMG.\nCD: 25s"
              }
            ]
          }
        ]
      },
      "18": {
        "name": "Flaming Clawprint",
        "p2": {
          "label": "Fusion DMG Bonus",
          "trigger": "Default",
          "excerpt": "Fusion DMG Bonus +10%",
          "desc": "Fusion DMG + 10%"
        },
        "p5": [
          {
            "label": "Fusion DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Fusion DMG Bonus +15%",
            "desc": "Casting Resonance Liberation grants all Resonators in the team 15% Fusion DMG Bonus and the caster 20% Resonance Liberation DMG Bonus, lasting for 35s."
          },
          {
            "label": "Resonance Liberation DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Resonance Liberation DMG Bonus +20%",
            "desc": "Casting Resonance Liberation grants all Resonators in the team 15% Fusion DMG Bonus and the caster 20% Resonance Liberation DMG Bonus, lasting for 35s."
          }
        ],
        "leads": [
          {
            "echo": "Lioness of Glory",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Fusion DMG Bonus +12%",
                "desc": "Summon the Halberd of Glory to crush an area, dealing 82.08% Fusion DMG to nearby targets, and then blast off after a short delay, dealing 191.52% Fusion DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Fusion DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 20s"
              },
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Liberation DMG Bonus +12%",
                "desc": "Summon the Halberd of Glory to crush an area, dealing 82.08% Fusion DMG to nearby targets, and then blast off after a short delay, dealing 191.52% Fusion DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Fusion DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 20s"
              }
            ]
          }
        ]
      },
      "19": {
        "name": "Dream of the Lost",
        "p3": [
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +20%",
            "desc": "Holding 0 Resonance Energy increases Crit. Rate by 20% and grants 35% Echo Skill DMG Bonus."
          },
          {
            "label": "Echo Skill DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Echo Skill DMG Bonus +35%",
            "desc": "Echo Skill DMG Bonus +35%"
          }
        ],
        "leads": [
          {
            "echo": "Nightmare: Hecate",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Havoc DMG Bonus +12%",
                "desc": "Transform into Nightmare: Hecate. Leap up and smash down, dealing 3 stages of damage, each dealing Havoc DMG equal to 152.39% of her ATK.\nThe Resonator with the Echo equipped in the main slot gains 12.00% Havoc DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 25s"
              },
              {
                "label": "Echo Skill DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Echo Skill DMG Bonus +20%",
                "desc": "Transform into Nightmare: Hecate. Leap up and smash down, dealing 3 stages of damage, each dealing Havoc DMG equal to 152.39% of her ATK.\nThe Resonator with the Echo equipped in the main slot gains 12.00% Havoc DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 25s"
              }
            ]
          },
          {
            "echo": "Reminiscence: Fenrico",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +12%",
                "desc": "Summon the Talons of Decree to attack nearby enemies, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Summon the Talons of Decree to attack nearby enemies, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
              }
            ]
          }
        ]
      },
      "20": {
        "name": "Crown of Valor",
        "p3": [
          {
            "label": "ATK",
            "trigger": "After casting",
            "excerpt": "ATK +30% per stack",
            "desc": "Upon gaining a Shield, increase the Resonator's ATK by 6% and Crit. DMG by 4% for 4s. This effect can be triggered once every 0.5s and stacks up to 5 times."
          },
          {
            "label": "Crit. DMG",
            "trigger": "After casting",
            "excerpt": "Crit. DMG +20% per stack",
            "desc": "Crit. DMG +20% per stack"
          }
        ],
        "leads": [
          {
            "echo": "The False Sovereign",
            "buffs": [
              {
                "label": "Electro DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Electro DMG Bonus +12%",
                "desc": "Transform into the False Sovereign and dash forward in a spinning strike, dealing 55.35% Electro DMG 4 times.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Electro DMG Bonus and 12.00% Heavy Attack DMG Bonus. Upon casting Intro Skill, the False Sovereign is also summoned to deal 405.00% Electro DMG.\nStart with 2 charges. Gain 1 charge every 8s, up to 2 charges.\nCD: 8s"
              },
              {
                "label": "Heavy Attack DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Heavy Attack DMG Bonus +12%",
                "desc": "Transform into the False Sovereign and dash forward in a spinning strike, dealing 55.35% Electro DMG 4 times.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Electro DMG Bonus and 12.00% Heavy Attack DMG Bonus. Upon casting Intro Skill, the False Sovereign is also summoned to deal 405.00% Electro DMG.\nStart with 2 charges. Gain 1 charge every 8s, up to 2 charges.\nCD: 8s"
              }
            ]
          },
          {
            "echo": "Lady of the Sea",
            "buffs": [
              {
                "label": "Aero DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Aero DMG Bonus +12%",
                "desc": "Summon a Tidestorm to deal 13.68% Aero DMG ten times and 164.16% Aero DMG one time to enemies.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Aero DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 20s"
              },
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Liberation DMG Bonus +12%",
                "desc": "Summon a Tidestorm to deal 13.68% Aero DMG ten times and 164.16% Aero DMG one time to enemies.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Aero DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 20s"
              }
            ]
          }
        ]
      },
      "21": {
        "name": "Law of Harmony",
        "p3": [
          {
            "label": "Heavy Attack DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Heavy Attack DMG Bonus +30%",
            "desc": "Casting Echo Skill grants 30% Heavy Attack DMG Bonus to the caster for 4s.\nAdditionally, all Resonators in the team gain 4% Echo Skill DMG Bonus for 30s, stacking up to 4 times. Echoes of the same name can only trigger this effect once. The record of Echo triggering this effect is cleared along with this effect. At 4 stacks, casting Echo Skill again resets the duration of this effect."
          },
          {
            "label": "Echo Skill DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Echo Skill DMG Bonus +16% per stack",
            "desc": "Echo Skill DMG Bonus +16% per stack"
          }
        ],
        "lead": {
          "echo": "Reminiscence: Fenrico",
          "buffs": [
            {
              "label": "Aero DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Aero DMG Bonus +12%",
              "desc": "Summon the Talons of Decree to attack nearby enemies, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
            },
            {
              "label": "Heavy Attack DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Heavy Attack DMG Bonus +12%",
              "desc": "Summon the Talons of Decree to attack nearby enemies, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 12.00% Heavy Attack DMG Bonus.\nCD: 20s."
            }
          ]
        }
      },
      "22": {
        "name": "Flamewing's Shadow",
        "p3": [
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +20%",
            "desc": "Dealing Echo Skill DMG increases Heavy Attack Crit. Rate by 20% for 6s. Dealing Heavy Attack DMG increases Echo Skill Crit. Rate by 20% for 6s. While both effects are active, gain 16% Fusion DMG Bonus."
          },
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +20%",
            "desc": "Crit. Rate +20%"
          },
          {
            "label": "Fusion DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Fusion DMG Bonus +16%",
            "desc": "Fusion DMG Bonus +16%"
          }
        ],
        "leads": [
          {
            "echo": "Corrosaurus",
            "buffs": [
              {
                "label": "Fusion DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Fusion DMG Bonus +12%",
                "desc": "Summon a Corrosaurus to attack enemies, dealing 273.60% Fusion DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Fusion DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 20s"
              },
              {
                "label": "Echo Skill DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Echo Skill DMG Bonus +20%",
                "desc": "Summon a Corrosaurus to attack enemies, dealing 273.60% Fusion DMG.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Fusion DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 20s"
              }
            ]
          },
          {
            "echo": "Reminiscence: Threnodian - Leviathan",
            "buffs": [
              {
                "label": "Havoc DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Havoc DMG Bonus +12%",
                "desc": "Summon a Collapsing Horizon, dealing two instances of 131.04% Havoc DMG to the nearby enemies and obtaining the Core of Collapse for 15s.\n\nWhile it lasts, Core of Collapse deals 24.57% Havoc DMG when the active Resonator in the team deals damage. This effect can be triggered once every 0.5s, up to 8 time. Enemies with Havoc Bane take 100% more DMG from this effect.\n\nThe Resonator with this Echo equipped in the main slot gains 12.00% Havoc DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\n\nCD: 25s"
              },
              {
                "label": "Resonance Liberation DMG Bonus",
                "trigger": "Enabled",
                "excerpt": "Resonance Liberation DMG Bonus +12%",
                "desc": "Summon a Collapsing Horizon, dealing two instances of 131.04% Havoc DMG to the nearby enemies and obtaining the Core of Collapse for 15s.\n\nWhile it lasts, Core of Collapse deals 24.57% Havoc DMG when the active Resonator in the team deals damage. This effect can be triggered once every 0.5s, up to 8 time. Enemies with Havoc Bane take 100% more DMG from this effect.\n\nThe Resonator with this Echo equipped in the main slot gains 12.00% Havoc DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\n\nCD: 25s"
              }
            ]
          }
        ]
      },
      "23": {
        "name": "Thread of Severed Fate",
        "p3": [
          {
            "label": "ATK",
            "trigger": "After casting",
            "excerpt": "ATK +20%",
            "desc": "Inflicting Havoc Bane increases the Resonator's ATK by 20% and grants 30% Resonance Liberation DMG Bonus for 5s."
          },
          {
            "label": "Resonance Liberation DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Resonance Liberation DMG Bonus +30%",
            "desc": "Resonance Liberation DMG Bonus +30%"
          }
        ],
        "lead": {
          "echo": "Reminiscence: Threnodian - Leviathan",
          "buffs": [
            {
              "label": "Havoc DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Havoc DMG Bonus +12%",
              "desc": "Summon a Collapsing Horizon, dealing two instances of 131.04% Havoc DMG to the nearby enemies and obtaining the Core of Collapse for 15s.\n\nWhile it lasts, Core of Collapse deals 24.57% Havoc DMG when the active Resonator in the team deals damage. This effect can be triggered once every 0.5s, up to 8 time. Enemies with Havoc Bane take 100% more DMG from this effect.\n\nThe Resonator with this Echo equipped in the main slot gains 12.00% Havoc DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\n\nCD: 25s"
            },
            {
              "label": "Resonance Liberation DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Resonance Liberation DMG Bonus +12%",
              "desc": "Summon a Collapsing Horizon, dealing two instances of 131.04% Havoc DMG to the nearby enemies and obtaining the Core of Collapse for 15s.\n\nWhile it lasts, Core of Collapse deals 24.57% Havoc DMG when the active Resonator in the team deals damage. This effect can be triggered once every 0.5s, up to 8 time. Enemies with Havoc Bane take 100% more DMG from this effect.\n\nThe Resonator with this Echo equipped in the main slot gains 12.00% Havoc DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\n\nCD: 25s"
            }
          ]
        }
      },
      "24": {
        "name": "Shadow of Shattered Dreams",
        "lead": {
          "echo": "Reminiscence - Nightmare: Adam Smasher",
          "buffs": [
            {
              "label": "Crit. Rate",
              "trigger": "Enabled",
              "excerpt": "Crit. Rate +15%",
              "desc": "Cast Echo Skill to deal 16 instances of Physical DMG equal to 10.26% of ATK to enemies within range.\nWhen Lucy or Rebecca has this Echo equipped in the main slot, their Crit. Rate is increased by 15% and they unlock special Echo Skills.\n\nIf equipped by Lucy:\n- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} the Echo Skill button to deal Spectro DMG equal to 273.60% of ATK to nearby enemies.\n- Hold the Echo Skill button to deal Spectro DMG equal to 273.60% of ATK to nearby enemies and enter a special moving state, increasing Lucy's movement speed while slowing nearby enemies.\n\nIf equipped by Rebecca:\n- Cast Echo Skill to fire missiles, dealing 16 instances of Electro DMG equal to 17.10% of ATK to enemies.\nCD: 20s"
            }
          ]
        }
      },
      "25": {
        "name": "Pact of Neonlight Leap",
        "p2": {
          "label": "Spectro DMG Bonus",
          "trigger": "Default",
          "excerpt": "Spectro DMG Bonus +10%",
          "desc": "Spectro DMG + 10%"
        },
        "p5": [
          {
            "label": "ATK",
            "trigger": "After casting",
            "excerpt": "ATK +15%",
            "desc": "Casting Outro Skill increases the ATK of the incoming Resonator who casts Intro Skill by 15%. Each point of Tune Break Boost the incoming Resonator has additionally increases their ATK by 0.3%, up to 15%. This effect lasts for 15s, or until the Resonator is switched out."
          },
          {
            "label": "ATK",
            "trigger": "After casting",
            "excerpt": "ATK based on Tune Break Boost, cap 15%",
            "desc": "Casting Outro Skill increases the ATK of the incoming Resonator who casts Intro Skill by 15%. Each point of Tune Break Boost the incoming Resonator has additionally increases their ATK by 0.3%, up to 15%. This effect lasts for 15s, or until the Resonator is switched out."
          }
        ],
        "lead": {
          "echo": "Hyvatia",
          "buffs": [
            {
              "label": "All-Attribute DMG Bonus",
              "trigger": "After hit",
              "excerpt": "All-Attribute DMG Bonus +10%",
              "desc": "Summon Hyvatia to fire lasers at enemies from mid-air, dealing 27.36% Spectro DMG 10 times.\n\nCasting Outro Skill within 15s after summoning Hyvatia grants 10.00% All-Attribute DMG Bonus to the next Resonator using Intro Skill for 15s.\n\nCD: 20s."
            }
          ]
        }
      },
      "26": {
        "name": "Rite of Gilded Revelation",
        "p2": {
          "label": "Spectro DMG Bonus",
          "trigger": "Default",
          "excerpt": "Spectro DMG Bonus +10%",
          "desc": "Spectro DMG + 10%"
        },
        "p5": [
          {
            "label": "Spectro DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Spectro DMG Bonus +30% per stack",
            "desc": "Dealing Basic Attack DMG increases Spectro DMG by 10% for 5s, stacking up to 3 times. With 3 stacks, casting Resonance Liberation grants 40% Basic Attack DMG Bonus."
          },
          {
            "label": "Basic Attack DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Basic Attack DMG Bonus +40%",
            "desc": "Dealing Basic Attack DMG increases Spectro DMG by 10% for 5s, stacking up to 3 times. With 3 stacks, casting Resonance Liberation grants 40% Basic Attack DMG Bonus."
          }
        ],
        "lead": {
          "echo": "Hyvatia",
          "buffs": [
            {
              "label": "All-Attribute DMG Bonus",
              "trigger": "After hit",
              "excerpt": "All-Attribute DMG Bonus +10%",
              "desc": "Summon Hyvatia to fire lasers at enemies from mid-air, dealing 27.36% Spectro DMG 10 times.\n\nCasting Outro Skill within 15s after summoning Hyvatia grants 10.00% All-Attribute DMG Bonus to the next Resonator using Intro Skill for 15s.\n\nCD: 20s."
            }
          ]
        }
      },
      "27": {
        "name": "Trailblazing Star",
        "p2": {
          "label": "Fusion DMG Bonus",
          "trigger": "Default",
          "excerpt": "Fusion DMG Bonus +10%",
          "desc": "Fusion DMG + 10%"
        },
        "p5": [
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +20%",
            "desc": "Inflicting Fusion Burst or Tune Rupture - Shifting increases the Resonator's Crit. Rate by 20% and grants 20% Fusion DMG Bonus for 8s."
          },
          {
            "label": "Fusion DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Fusion DMG Bonus +20%",
            "desc": "Inflicting Fusion Burst or Tune Rupture - Shifting increases the Resonator's Crit. Rate by 20% and grants 20% Fusion DMG Bonus for 8s."
          }
        ],
        "lead": {
          "echo": "Sigillum",
          "buffs": [
            {
              "label": "Resonance Liberation DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Resonance Liberation DMG Bonus +25%",
              "desc": "Summon Sigillum to unleash two attacks, dealing 68.40% and 205.20% Fusion DMG respectively.\nWhen equipped in the main slot by Aemeath, it grants 25.00% Resonance Liberation DMG Bonus.\nCD: 20s"
            }
          ]
        }
      },
      "28": {
        "name": "Chromatic Foam",
        "p2": {
          "label": "Fusion DMG Bonus",
          "trigger": "Default",
          "excerpt": "Fusion DMG Bonus +10%",
          "desc": "Fusion DMG + 10%"
        },
        "p5": [
          {
            "label": "Fusion DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Fusion DMG Bonus +10%",
            "desc": "When the Resonator inflicts Fusion Burst on the enemies, they gain the following effects: Gain 10% Fusion DMG Bonus for 15 s. While this effect is active, casting an Outro Skill grants the incoming Resonator 25% Fusion DMG Bonus for 15s."
          },
          {
            "label": "Fusion DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Fusion DMG Bonus +25%",
            "desc": "When the Resonator inflicts Fusion Burst on the enemies, they gain the following effects: Gain 10% Fusion DMG Bonus for 15 s. While this effect is active, casting an Outro Skill grants the incoming Resonator 25% Fusion DMG Bonus for 15s."
          }
        ],
        "lead": {
          "echo": "Reactor Husk",
          "buffs": [
            {
              "label": "Energy Regen",
              "trigger": "Enabled",
              "excerpt": "Energy Regen +10%",
              "desc": "Transform into a Reactor Husk, jumping into the air and unleashing a heavy slash that deals 351.00% Fusion DMG to enemies.\n\nThe Resonator with this Echo equipped in their main slot gain 10.00% Energy Regen.\n\n CD: 20s."
            }
          ]
        }
      },
      "29": {
        "name": "Sound of True Name",
        "p2": {
          "label": "Aero DMG Bonus",
          "trigger": "Default",
          "excerpt": "Aero DMG Bonus +10%",
          "desc": "Aero DMG + 10%"
        },
        "p5": [
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +20%",
            "desc": "Dealing Echo Skill DMG to enemies increases the Resonator's Echo Skill Crit. Rate by 20%, and grants 15% Aero DMG Bonus for 5s."
          },
          {
            "label": "Aero DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Aero DMG Bonus +15%",
            "desc": "Dealing Echo Skill DMG to enemies increases the Resonator's Echo Skill Crit. Rate by 20%, and grants 15% Aero DMG Bonus for 5s."
          }
        ],
        "lead": {
          "echo": "Nameless Explorer",
          "buffs": [
            {
              "label": "Aero DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Aero DMG Bonus +12%",
              "desc": "Summon Nameless Explorer to attack enemies along its path, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 20s."
            },
            {
              "label": "Echo Skill DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Echo Skill DMG Bonus +20%",
              "desc": "Summon Nameless Explorer to attack enemies along its path, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 20s."
            }
          ]
        }
      },
      "30": {
        "name": "Wishes of Quiet Snowfall",
        "p2": {
          "label": "Glacio DMG Bonus",
          "trigger": "Default",
          "excerpt": "Glacio DMG Bonus +10%",
          "desc": "Glacio DMG + 10%"
        },
        "p5": [
          {
            "label": "Glacio DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Glacio DMG Bonus +10%",
            "desc": "Inflicting Glacio Chafe on enemies increases Glacio DMG dealt by 10% for 15s. The Resonator gains the Snowfall effect for 15s, which can be triggered once every 25s. While Snowfall is active:\n- Dealing Resonance Liberation DMG removes Snowfall and increases the Resonator's Crit. Rate by 25% for 6s. While the effect is active, dealing Resonance Liberation DMG extends its duration by 4s, triggered once every 0.5s, up to 6 times.\n- Casting Outro Skill removes Snowfall and grants 25% Glacio DMG Bonus to the incoming Resonator for 15s.\nWhen Snowfall is removed, only one of the effects above can be triggered."
          },
          {
            "label": "Crit. Rate",
            "trigger": "After casting",
            "excerpt": "Crit. Rate +25%",
            "desc": "Inflicting Glacio Chafe on enemies increases Glacio DMG dealt by 10% for 15s. The Resonator gains the Snowfall effect for 15s, which can be triggered once every 25s. While Snowfall is active:\n- Dealing Resonance Liberation DMG removes Snowfall and increases the Resonator's Crit. Rate by 25% for 6s. While the effect is active, dealing Resonance Liberation DMG extends its duration by 4s, triggered once every 0.5s, up to 6 times.\n- Casting Outro Skill removes Snowfall and grants 25% Glacio DMG Bonus to the incoming Resonator for 15s.\nWhen Snowfall is removed, only one of the effects above can be triggered."
          },
          {
            "label": "Glacio DMG Bonus",
            "trigger": "After casting",
            "excerpt": "Glacio DMG Bonus +25%",
            "desc": "Inflicting Glacio Chafe on enemies increases Glacio DMG dealt by 10% for 15s. The Resonator gains the Snowfall effect for 15s, which can be triggered once every 25s. While Snowfall is active:\n- Dealing Resonance Liberation DMG removes Snowfall and increases the Resonator's Crit. Rate by 25% for 6s. While the effect is active, dealing Resonance Liberation DMG extends its duration by 4s, triggered once every 0.5s, up to 6 times.\n- Casting Outro Skill removes Snowfall and grants 25% Glacio DMG Bonus to the incoming Resonator for 15s.\nWhen Snowfall is removed, only one of the effects above can be triggered."
          }
        ],
        "lead": {
          "echo": "Reminiscence: Threnodian - Voidborne Construct",
          "buffs": [
            {
              "label": "Glacio DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Glacio DMG Bonus +12%",
              "desc": "Summon Aleph-1's Creation to deal 21.88% Glacio DMG 5 times and 164.16% Glacio DMG 1 time to enemies.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Glacio DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 20s"
            },
            {
              "label": "Resonance Liberation DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Resonance Liberation DMG Bonus +12%",
              "desc": "Summon Aleph-1's Creation to deal 21.88% Glacio DMG 5 times and 164.16% Glacio DMG 1 time to enemies.\nThe Resonator with this Echo equipped in the main slot gains 12.00% Glacio DMG Bonus and 12.00% Resonance Liberation DMG Bonus.\nCD: 20s"
            }
          ]
        }
      },
      "31": {
        "name": "Reel of Spliced Memories",
        "p2": {
          "label": "ATK",
          "trigger": "Default",
          "excerpt": "ATK +10%",
          "desc": "ATK + 10%"
        },
        "p5": {
          "label": "Tune Break Boost",
          "trigger": "After casting",
          "excerpt": "Tune Break Boost +20%",
          "desc": "Inflicting Tune Rupture - Shifting or Tune Strain - Shifting on enemies increases the Tune Break Boost of Resonators in the team by 20 for 30s. Effects of the same name do not stack."
        },
        "lead": {
          "echo": "Nameless Explorer",
          "buffs": [
            {
              "label": "Aero DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Aero DMG Bonus +12%",
              "desc": "Summon Nameless Explorer to attack enemies along its path, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 20s."
            },
            {
              "label": "Echo Skill DMG Bonus",
              "trigger": "Enabled",
              "excerpt": "Echo Skill DMG Bonus +20%",
              "desc": "Summon Nameless Explorer to attack enemies along its path, dealing 273.60% Aero DMG.\nThe Resonator with this Echo equipped in their main slot gains 12.00% Aero DMG Bonus and 20.00% Echo Skill DMG Bonus.\nCD: 20s."
            }
          ]
        }
      },
      "33": {
        "name": "Halo of Starry Radiance",
        "p2": {
          "label": "Healing Bonus",
          "trigger": "Default",
          "excerpt": "Healing Bonus +10%",
          "desc": "Healing Bonus + 10%."
        },
        "p5": {
          "label": "ATK",
          "trigger": "After casting",
          "excerpt": "ATK based on Off-Tune Buildup Efficiency, cap 25%",
          "desc": "When healing a Resonator in the team, every 1% of Off-Tune Buildup Rate grants a 0.2% ATK increase to all Resonators in the team for 4s, up to 25%. Effects of the same name cannot be stacked."
        },
        "lead": {
          "echo": "Reactor Husk",
          "buffs": [
            {
              "label": "Energy Regen",
              "trigger": "Enabled",
              "excerpt": "Energy Regen +10%",
              "desc": "Transform into a Reactor Husk, jumping into the air and unleashing a heavy slash that deals 351.00% Fusion DMG to enemies.\n\nThe Resonator with this Echo equipped in their main slot gain 10.00% Energy Regen.\n\n CD: 20s."
            }
          ]
        }
      }
    }
  }
});
