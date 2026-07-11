"use strict";

window.WUWA_LANGUAGES.extend("en-US", {
  "data": {
    "chars": {
      "changli": {
        "name": "Changli",
        "skills": [
          {
            "name": "Blazing Enlightment - Basic Attack 1 DMG"
          },
          {
            "name": "Blazing Enlightment - Basic Attack 2 DMG"
          },
          {
            "name": "Blazing Enlightment - Basic Attack 3 DMG"
          },
          {
            "name": "Blazing Enlightment - Basic Attack 4 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 1 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 2 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 3 DMG"
          },
          {
            "name": "Blazing Enlightment - Mid-air Attack 4 DMG"
          },
          {
            "name": "Blazing Enlightment - Heavy Attack"
          },
          {
            "name": "Blazing Enlightment - Mid-air Heavy Attack"
          },
          {
            "name": "Blazing Enlightment - Dodge Counter"
          },
          {
            "name": "Tripartite Flames - True Sight: Capture DMG"
          },
          {
            "name": "Tripartite Flames - True Sight: Conquest DMG"
          },
          {
            "name": "Tripartite Flames - True Sight: Charge DMG"
          },
          {
            "name": "Radiance of Fealty - Skill DMG"
          },
          {
            "name": "Obedience of Rules - Skill DMG"
          },
          {
            "name": "Flaming Sacrifice - Flaming Sacrifice DMG",
            "requiresResourceLabel": "Enflamement at least 4"
          }
        ],
        "resources": [
          {
            "label": "Enflamement"
          }
        ],
        "combatStates": [
          {
            "label": "True Sight State",
            "idLabel": "True Sight State",
            "inactiveLabel": "Not in True Sight State",
            "entry": "Select the current True Sight State.",
            "effects": "Select the current True Sight State.",
            "options": [
              {
                "label": "True Sight State",
                "valueLabel": "True Sight State"
              }
            ]
          },
          {
            "label": "Fiery Feather",
            "idLabel": "Fiery Feather",
            "inactiveLabel": "Not in Fiery Feather",
            "entry": "Deal Fusion DMG to nearby targets, obtaining 4 stacks of Enflamement, and entering Fiery Feather.",
            "effects": "Deal Fusion DMG to nearby targets, obtaining 4 stacks of Enflamement, and entering Fiery Feather.",
            "options": [
              {
                "label": "Fiery Feather",
                "valueLabel": "Fiery Feather"
              }
            ]
          }
        ],
        "buffs": [
          {
            "source": "Inherent Skill: Secret Strategist",
            "label": "Fusion DMG Bonus",
            "trigger": "After casting Tripartite Flames - True Sight: Conquest DMG / Tripartite Flames - True Sight: Charge DMG",
            "excerpt": "Fusion DMG Bonus +5% per stack",
            "desc": "Fusion DMG Bonus +5% per stack"
          },
          {
            "source": "Inherent Skill: Sweeping Force",
            "label": "Fusion DMG Bonus",
            "trigger": "In Fiery Feather",
            "excerpt": "Fusion DMG Bonus +20%",
            "desc": "Fusion DMG Bonus +20%"
          },
          {
            "source": "Inherent Skill: Sweeping Force",
            "label": "DEF Ignore",
            "trigger": "In Fiery Feather",
            "excerpt": "DEF Ignore +15%",
            "desc": "DEF Ignore +15%"
          },
          {
            "source": "Resonance Liberation: Fiery Feather",
            "label": "ATK",
            "trigger": "In Fiery Feather",
            "excerpt": "ATK +25%",
            "desc": "Deal Fusion DMG to nearby targets, obtaining 4 stacks of Enflamement, and entering Fiery Feather."
          },
          {
            "source": "Outro Skill: Strategy of Duality",
            "label": "DMG Increase",
            "trigger": "In Fiery Feather",
            "excerpt": "DMG Increase +20%",
            "desc": "DMG Increase +20%"
          },
          {
            "source": "Outro Skill: Strategy of Duality",
            "label": "Resonance Liberation DMG Increase",
            "trigger": "In Fiery Feather",
            "excerpt": "Resonance Liberation DMG Increase +25%",
            "desc": "Resonance Liberation DMG Increase +25%"
          }
        ],
        "chain": [
          {
            "name": "Hidden Thoughts",
            "desc": "Resonance Skill Tripartite Flames and Heavy Attack Flaming Sacrifice increase Changli's DMG dealt by 10% and resistance to interruption.",
            "buffs": [
              {
                "label": "Tripartite Flames - True Sight: Capture DMG Increase",
                "trigger": "In Fiery Feather",
                "excerpt": "Tripartite Flames - True Sight: Capture DMG Increase +10%"
              }
            ]
          },
          {
            "name": "Pursuit of Desires",
            "desc": "Enflamement increases Changli's Crit. Rate by 25% for 8s.",
            "buffs": [
              {
                "label": "Crit. Rate",
                "trigger": "In Fiery Feather",
                "excerpt": "Crit. Rate +25%"
              }
            ]
          },
          {
            "name": "Learned Secrets",
            "desc": "Resonance Liberation Radiance of Fealty DMG is increased by 80%.",
            "buffs": [
              {
                "label": "Radiance of Fealty - Skill DMG Increase",
                "trigger": "In Fiery Feather",
                "excerpt": "Radiance of Fealty - Skill DMG Increase +80%"
              }
            ]
          },
          {
            "name": "Polished Words",
            "desc": "After Intro Skill is cast, all team members' ATK is increased by 20% for 30s.",
            "buffs": [
              {
                "label": "ATK",
                "trigger": "After casting Obedience of Rules - Skill DMG",
                "excerpt": "ATK +20%"
              }
            ]
          },
          {
            "name": "Sacrificed Gains",
            "desc": "Heavy Attack Flaming Sacrifice's Multiplier is increased by 50% and its DMG dealt is increased by 50%.",
            "buffs": [
              {
                "label": "Flaming Sacrifice - Flaming Sacrifice DMG Multiplier Increase",
                "trigger": "In Fiery Feather",
                "excerpt": "Flaming Sacrifice - Flaming Sacrifice DMG Multiplier Increase +50%"
              },
              {
                "label": "Flaming Sacrifice - Flaming Sacrifice DMG Increase",
                "trigger": "In Fiery Feather",
                "excerpt": "Flaming Sacrifice - Flaming Sacrifice DMG Increase +50%"
              }
            ]
          },
          {
            "name": "Realized Plans",
            "desc": "Resonance Skill Tripartite Flames, Heavy Attack Flaming Sacrifice, and Resonance Liberation Radiance of Fealty ignore an additional 40% of the target's DEF when dealing damage.",
            "buffs": [
              {
                "label": "DEF Ignore",
                "trigger": "In Fiery Feather",
                "excerpt": "DEF Ignore +40%"
              }
            ]
          }
        ]
      }
    }
  }
});
