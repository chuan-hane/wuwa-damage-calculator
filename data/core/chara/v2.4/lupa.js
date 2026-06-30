WUWA.register({
  "id": "lupa",
  "aliases": [],
  "debut": 2.4,
  "element": "fusion",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "wildfire_mark",
  "portrait": "",
  "base": {
    "hp": 11912,
    "attack": 387,
    "defense": 1185,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "wolfFlame",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "wolfSoul",
      "max": 2,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.08,
      "formula": "22.52% + 22.52% + 45.04%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 90.08,
      "formula": "90.08%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.68,
      "formula": "78.84% + 13.14% × 6"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 246.24,
      "formula": "73.87% + 73.87% + 49.25% × 2"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 112.72,
      "formula": "56.36% + 56.36%"
    },
    {
      "id": "heavy_bite",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 112.22,
      "formula": "56.11% + 56.11%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "wolfFlame",
        "value": 50
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "heavy_claw",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 240.5,
      "formula": "72.15% + 18.04% × 4 + 96.19%",
      "requiresResource": "resource_gate_2",
      "requiresAllResourcesAtLeast": [
        {
          "id": "wolfFlame",
          "value": 50
        },
        {
          "id": "wolfSoul",
          "value": 1
        }
      ],
      "fallbackSkillId": "heavy_bite"
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.73,
      "formula": "76.73%"
    },
    {
      "id": "air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 154.47,
      "formula": "77.23% + 19.31% × 4"
    },
    {
      "id": "air3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 56.96,
      "formula": "28.48% + 28.48%"
    },
    {
      "id": "air_assault",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 56.96,
      "formula": "28.48% + 28.48%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "wolfFlame",
        "value": 50
      },
      "fallbackSkillId": "air3"
    },
    {
      "id": "air_plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.79,
      "formula": "26.20% + 52.39% + 26.20%"
    },
    {
      "id": "starfall",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 168.66,
      "formula": "12.65% × 4 + 118.06%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 273.44,
      "formula": "34.18% × 4 + 136.72%"
    },
    {
      "id": "skill_hunt",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 140.77,
      "formula": "140.77%",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "skill_fang",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 313.61,
      "formula": "313.61%",
      "requiresResource": "resource_gate_3",
      "fallbackSkillId": "skill_hunt",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 820.44,
      "formula": "820.44%",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "break_enemy",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 304.46,
      "formula": "304.46%",
      "requiresResource": "resource_gate_4",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.4,
      "formula": "29.76% + 42.16% × 4",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "intro_chase",
      "category": "introSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 991.97,
      "formula": "793.57% + 49.60% × 4",
      "impliedStates": [
        "state_2_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "wolfdance",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 560.21,
      "formula": "56.02% + 42.02% × 4 + 336.11%",
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "wolfSoul",
        "value": 2
      },
      "fallbackSkillId": "skill_hunt",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "wolfdance_primal",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 756.26,
      "formula": "75.63% + 56.72% × 4 + 453.75%",
      "maxSeq": 5,
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "wolfSoul",
        "value": 2
      },
      "impliedStates": [
        "state_1_option_1"
      ],
      "fallbackSkillId": "wolfdance",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "wolfdance_primal_c6",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 756.26,
      "formula": "75.63% + 56.72% × 4 + 453.75%",
      "seq": 6,
      "requiresResource": "resource_gate_5",
      "requiresResourceAtLeast": {
        "id": "wolfSoul",
        "value": 2
      },
      "fallbackSkillId": "skill_hunt",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "offfield_flame",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 211.75,
      "formula": "42.35% + 169.40%",
      "requiresResource": "resource_gate_6"
    }
  ],
  "defaultSkillId": "wolfdance_primal",
  "defaultSkillIdBySeq": [
    {
      "seq": 6,
      "id": "wolfdance_primal_c6"
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 2,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    },
    {
      "id": "state_2",
      "options": [
        {
          "value": "state_2_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_flaming_banner",
      "zone": "attackPercent",
      "value": 12,
      "scope": "self",
      "skills": [
        "skill_fang",
        "heavy_bite",
        "heavy_claw",
        "air_assault",
        "burst",
        "wolfdance",
        "wolfdance_primal",
        "wolfdance_primal_c6"
      ],
      "duration": 8
    },
    {
      "id": "b_marked_fang",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "skill_fang"
      ],
      "defaultActive": false
    },
    {
      "id": "b_hunt_atk",
      "zone": "attackPercent",
      "value": 18,
      "scope": "team",
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "triggerSkills": [
        "burst"
      ],
      "triggerStacks": 1,
      "duration": 35
    },
    {
      "id": "b_hunt_fusion_boss",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "duration": 35
    },
    {
      "id": "b_hunt_fusion_team3",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "maxSeq": 2,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "duration": 35
    },
    {
      "id": "b_glory_res",
      "zone": "resShred",
      "element": "fusion",
      "value": 15,
      "scope": "team",
      "maxStacks": 5,
      "defaultStacks": 0,
      "defaultActive": false,
      "maxSeq": 2,
      "clearedBySkills": [
        "intro_chase"
      ],
      "clearExemptSeq": 6,
      "triggerSkills": [
        "burst"
      ],
      "triggerStacksByTeamElement": {
        "element": "fusion",
        "base": 1,
        "perOther": 1,
        "bonuses": [
          {
            "min": 3,
            "stacks": 2
          }
        ]
      },
      "duration": 35
    },
    {
      "id": "b_outro_fusion",
      "zone": "amplify",
      "element": "fusion",
      "value": 20,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b_outro_basic",
      "zone": "amplify",
      "damageType": "basic",
      "value": 25,
      "scope": "team",
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "burst"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_fusion",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 40,
          "scope": "team",
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "burst",
            "heavy_bite",
            "heavy_claw",
            "air_assault"
          ],
          "triggerStacks": 1,
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_chase_intro",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "skills": [
            "intro_chase"
          ]
        },
        {
          "id": "k3_hunt_fusion_extra",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "clearedBySkills": [
            "intro_chase"
          ],
          "clearExemptSeq": 6,
          "duration": 35
        },
        {
          "id": "k3_glory_res",
          "zone": "resShred",
          "element": "fusion",
          "value": 15,
          "scope": "team",
          "defaultActive": false,
          "clearedBySkills": [
            "intro_chase"
          ],
          "clearExemptSeq": 6,
          "triggerSkills": [
            "burst"
          ],
          "duration": 35
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_wolfdance_primal",
          "zone": "skillMultBonus",
          "value": 125,
          "scope": "self",
          "skills": [
            "wolfdance_primal",
            "wolfdance_primal_c6"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_burst",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "intro_chase"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_def_ignore",
          "zone": "defIgnore",
          "value": 30,
          "scope": "self",
          "skills": [
            "wolfdance_primal",
            "wolfdance_primal_c6",
            "burst",
            "intro_chase"
          ]
        }
      ]
    }
  ],
  "modes": null
});
