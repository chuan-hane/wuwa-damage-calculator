"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "camellya": {
        "name": "Camellya",
        "resources": [{ "label": "Crimson Pistil" }],
        "skills": [
          {
            "name": "Burgeoning - Basic Attack 1 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 2 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 3 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 4 DMG"
          },
          {
            "name": "Burgeoning - Basic Attack 5 DMG"
          },
          {
            "name": "Burgeoning - Heavy Attack DMG"
          },
          {
            "name": "Burgeoning - Mid-air Attack DMG"
          },
          {
            "name": "Burgeoning - Dodge Counter DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Crimson Blossom DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 1 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 2 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 3 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Waltz 4 DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Floral Ravage DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Vining Ronde DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Atonement DMG"
          },
          {
            "name": "Valse of Bloom and Blight - Blazing Waltz DMG"
          },
          {
            "name": "Fervor Efflorescent - Skill DMG"
          },
          {
            "name": "Everblooming - Skill DMG"
          },
          {
            "name": "Vegetative Universe - Ephemeral DMG",
            "requiresResourceLabel": "resource_gate_1"
          },
          {
            "name": "Vegetative Universe - Ephemeral DMG",
            "requiresResourceLabel": "resource_gate_2"
          },
          {
            "name": "Twining - Outro Skill DMG"
          },
          {
            "name": "Twining - After Crimson Blossom DMG",
            "requiresResourceLabel": "resource_gate_3"
          }
        ],
        "combatStates": [
          {
            "label": "Blossom Mode",
            "idLabel": "Blossom Mode",
            "inactiveLabel": "Not in Blossom Mode",
            "entry": "Attack the target, dealing Havoc DMG (considered Basic Attack DMG), then enter Blossom Mode.",
            "effects": "Attack the target, dealing Havoc DMG (considered Basic Attack DMG), then enter Blossom Mode.",
            "options": [
              {
                "label": "Blossom Mode",
                "valueLabel": "Blossom Mode"
              }
            ]
          },
          {
            "label": "Budding Mode",
            "idLabel": "Budding Mode",
            "inactiveLabel": "Not in Budding Mode",
            "entry": "Camellya enters Budding Mode after casting Ephemeral.",
            "effects": "Camellya enters Budding Mode after casting Ephemeral.",
            "options": [
              {
                "label": "Budding Mode · Ephemeral",
                "valueLabel": "Budding Mode · Ephemeral"
              },
              {
                "label": "Budding Mode · Perennial",
                "valueLabel": "Budding Mode · Perennial"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Seedbed",
            "label": "Havoc DMG Bonus",
            "trigger": "In Budding Mode · Perennial",
            "excerpt": "Havoc DMG Bonus +15%",
            "desc": "Havoc DMG Bonus +15%"
          },
          {
            "source": "Inherent Skill: Epiphyte",
            "label": "Basic Attack DMG Bonus",
            "trigger": "In Budding Mode · Perennial",
            "excerpt": "Basic Attack DMG Bonus +15%",
            "desc": "Basic Attack DMG Bonus +15%"
          },
          {
            "source": "Forte Circuit: Sweet Dream",
            "label": "Burgeoning - Basic Attack 1 DMG Multiplier Increase",
            "trigger": "In Budding Mode",
            "excerpt": "Burgeoning - Basic Attack 1 DMG Multiplier Increase +50%",
            "desc": "- Sweet Dream: Increase the DMG Multiplier of Normal Attack, Basic Attack Vining Waltz, Basic Attack Blazing Waltz, Basic Attack Vining Ronde, Dodge Counter Atonement, Resonance Skill Crimson Blossom, and Resonance Skill Floral Ravage by 50%."
          },
          {
            "source": "Forte Circuit: Crimson Buds",
            "label": "Burgeoning - Basic Attack 1 DMG Multiplier Increase",
            "trigger": "After casting Burgeoning - Basic Attack 1 DMG / Burgeoning - Basic Attack 2 DMG / Burgeoning - Basic Attack 3 DMG / Burgeoning - Basic Attack 4 DMG / Burgeoning - Basic Attack 5 DMG / Burgeoning - Heavy Attack DMG / Burgeoning - Mid-air Attack DMG / Burgeoning - Dodge Counter DMG / Valse of Bloom and Blight - Crimson Blossom DMG / Valse of Bloom and Blight - Vining Waltz 1 DMG / Valse of Bloom and Blight - Vining Waltz 2 DMG / Valse of Bloom and Blight - Vining Waltz 3 DMG / Valse of Bloom and Blight - Vining Waltz 4 DMG / Valse of Bloom and Blight - Floral Ravage DMG / Valse of Bloom and Blight - Vining Ronde DMG / Valse of Bloom and Blight - Atonement DMG / Valse of Bloom and Blight - Blazing Waltz DMG",
            "excerpt": "Burgeoning - Basic Attack 1 DMG Multiplier Increase +5% per stack",
            "desc": "- Casting Ephemeral consumes all Crimson Buds."
          }
        ],
        "chain": [
          {
            "name": "Somewhere No One Travelled",
            "desc": "Casting Intro Skill Everblooming increases Camellya's Crit. DMG by 28% for 18s. This effect can be triggered once every 25s.\nImmune to interruptions while casting Ephemeral.",
            "buffs": [
              {
                "label": "Crit. DMG",
                "trigger": "After casting Everblooming - Skill DMG",
                "excerpt": "Crit. DMG +28%"
              }
            ]
          },
          {
            "name": "Calling Upon the Silent Rose",
            "desc": "The DMG Multiplier of Resonance Skill Ephemeral is increased by 120%.",
            "buffs": [
              {
                "label": "Vegetative Universe - Ephemeral DMG Multiplier Increase",
                "trigger": "In Budding Mode · Perennial",
                "excerpt": "Vegetative Universe - Ephemeral DMG Multiplier Increase +120%"
              }
            ]
          },
          {
            "name": "A Bud Adorned by Thorns",
            "desc": "The DMG Multiplier of Resonance Liberation Fervor Efflorescent is increased by 50%. When in Budding Mode, Camellya's ATK is increased by 58%.",
            "buffs": [
              {
                "label": "Fervor Efflorescent - Skill DMG Multiplier Increase",
                "trigger": "In Budding Mode · Perennial",
                "excerpt": "Fervor Efflorescent - Skill DMG Multiplier Increase +50%"
              },
              {
                "label": "ATK",
                "trigger": "In Budding Mode",
                "excerpt": "ATK +58%"
              }
            ]
          },
          {
            "name": "Roots Set Deep In Eternity",
            "desc": "Casting Everblooming gives all team members 25% Basic Attack DMG Bonus for 30s.",
            "buffs": [
              {
                "label": "Basic Attack DMG Bonus",
                "trigger": "After casting Everblooming - Skill DMG",
                "excerpt": "Basic Attack DMG Bonus +25%"
              }
            ]
          },
          {
            "name": "Infinity Held in Your Palm",
            "desc": "The DMG Multipliers of Intro Skill Everblooming is increased by 303% and Outro Skill Twining is increased by 68%.",
            "buffs": [
              {
                "label": "Everblooming - Skill DMG Multiplier Increase",
                "trigger": "In Budding Mode · Perennial",
                "excerpt": "Everblooming - Skill DMG Multiplier Increase +303%"
              },
              {
                "label": "Twining - Outro Skill DMG Multiplier Increase",
                "trigger": "In Budding Mode · Perennial",
                "excerpt": "Twining - Outro Skill DMG Multiplier Increase +68%"
              }
            ]
          },
          {
            "name": "Bloom For You Thousand Times Over",
            "desc": "The DMG Multiplier of Forte Circuit's Sweet Dream is additionally increased by 150%.\nForte Circuit Perennial: Within 15s after casting Ephemeral, if Concerto Energy is full and Perennial is not on cooldown, Resonance Skill is replaced with Perennial.\nCasting Perennial consumes 50 Concerto Energy and recovers 50 Crimson Pistils, dealing Havoc DMG equal to 100% of Ephemeral DMG, considered Basic Attack DMG. This skill can be cast once every 25s.\nCamellya enters Budding Mode after casting Perennial and removes all Crimson Buds. The bonus DMG Multiplier granted by Forte Circuit's Sweet Dream is increased to 250%.\nImmune to interruptions when casting Perennial.",
            "buffs": [
              {
                "label": "Burgeoning - Basic Attack 1 DMG Multiplier Increase",
                "trigger": "In Budding Mode",
                "excerpt": "Burgeoning - Basic Attack 1 DMG Multiplier Increase +150%"
              },
              {
                "label": "Burgeoning - Basic Attack 1 DMG Multiplier Increase",
                "trigger": "In Budding Mode · Perennial",
                "excerpt": "Burgeoning - Basic Attack 1 DMG Multiplier Increase +50%"
              }
            ]
          }
        ]
      }
    }
  }
});
