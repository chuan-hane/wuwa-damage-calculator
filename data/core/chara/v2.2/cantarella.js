WUWA.register({
  "id": "cantarella",
  "aliases": [],
  "debut": 2.2,
  "element": "havoc",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "whispers_of_sirens",
  "portrait": "",
  "base": {
    "hp": 11600,
    "attack": 400,
    "defense": 1099,
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
      "id": "tremor",
      "max": 3,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.76,
      "formula": "36.44% × 4"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.14,
      "formula": "72.57% × 2"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 114.36,
      "formula": "57.18% × 2"
    },
    {
      "id": "delusive_dive",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 106.1,
      "formula": "53.05% × 2"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "41.99% + 62.99%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 212.04,
      "formula": "53.01% × 4"
    },
    {
      "id": "skill_graceful",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 147.2,
      "formula": "73.60% × 2"
    },
    {
      "id": "skill_reverie",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 196.23,
      "formula": "196.23%",
      "impliedStates": [
        "蜃境"
      ]
    },
    {
      "id": "skill_jolt",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 198.81,
      "formula": "198.81%",
      "impliedStates": [
        "迷梦"
      ]
    },
    {
      "id": "lib_suffocation",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 376,
      "formula": "376.00%"
    },
    {
      "id": "lib_diffusion",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 305.34,
      "formula": "14.54% × 21"
    },
    {
      "id": "intro_ripple",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 169,
      "formula": "42.25% × 4",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "intro_tidal",
      "category": "introSkill",
      "damageType": "introSkill",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 169,
      "formula": "16.90% × 3 + 118.30%",
      "impliedStates": [
        "蜃境"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "phantom_1",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 105.99,
      "formula": "35.33% × 3",
      "impliedStates": [
        "蜃境"
      ]
    },
    {
      "id": "phantom_2",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 125.86,
      "formula": "62.93% × 2",
      "impliedStates": [
        "蜃境"
      ]
    },
    {
      "id": "phantom_3",
      "category": "forteCircuit",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 258.48,
      "formula": "64.62% × 4",
      "impliedStates": [
        "蜃境"
      ]
    },
    {
      "id": "vortex",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "41.99% + 62.99%",
      "impliedStates": [
        "蜃境"
      ]
    },
    {
      "id": "perception_drain",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1335.98,
      "formula": "667.99% × 2",
      "requiresResource": "3颤栗",
      "requiresResourceAtLeast": {
        "id": "tremor",
        "value": 3
      },
      "fallbackSkillId": "skill_reverie",
      "impliedStates": [
        "蜃境"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "shadowy_sweep",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 225.27,
      "formula": "75.09% × 3",
      "impliedStates": [
        "蜃境"
      ]
    }
  ],
  "defaultSkillId": "perception_drain",
  "echoSet": 13,
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "combatStates": [
    {
      "id": "蜃境",
      "options": [
        {
          "value": "蜃境"
        }
      ]
    },
    {
      "id": "迷梦",
      "kind": "target",
      "options": [
        {
          "value": "迷梦"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_cure",
      "zone": "healingBonus",
      "value": 20,
      "scope": "self"
    },
    {
      "id": "b_poison",
      "zone": "damageBonus",
      "element": "havoc",
      "value": 12,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerEvents": [
        "castEchoSkill"
      ],
      "triggerStacks": 1,
      "duration": 10
    },
    {
      "id": "outro_havoc",
      "zone": "amplify",
      "element": "havoc",
      "value": 20,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "outro_skill",
      "zone": "amplify",
      "damageType": "resonanceSkill",
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
          "id": "k1",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "skill_graceful",
            "skill_reverie",
            "perception_drain"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "skillMultBonus",
          "value": 245,
          "scope": "self",
          "skills": [
            "skill_jolt"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "skillMultBonus",
          "value": 370,
          "scope": "self",
          "skills": [
            "lib_suffocation"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "healingBonus",
          "value": 25,
          "scope": "self",
          "requiresState": "蜃境"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 23.81,
          "scope": "self",
          "skills": [
            "lib_diffusion"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_phantom",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "phantom_1",
            "phantom_2",
            "phantom_3"
          ]
        },
        {
          "id": "k6_def",
          "zone": "defIgnore",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "lib_suffocation"
          ],
          "duration": 10
        }
      ]
    }
  ],
  "modes": null
});
