WUWA.register({
  "id": "jiyan",
  "aliases": [],
  "debut": 1,
  "element": "aero",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "verdant_summit",
  "portrait": "",
  "base": {
    "hp": 10487,
    "attack": 437,
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
      "id": "resolve",
      "max": 60,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.16,
      "formula": "73.16%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 43.73,
      "formula": "43.73%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 181.9,
      "formula": "36.38% × 5"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.4,
      "formula": "66.20% × 2"
    },
    {
      "id": "na5",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 472.1,
      "formula": "23.60% × 7 + 153.45% × 2"
    },
    {
      "id": "ha",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 133.2,
      "formula": "22.20% × 6"
    },
    {
      "id": "ha_windborne",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 105.96,
      "formula": "105.96%"
    },
    {
      "id": "ha_abyssal",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 81.71,
      "formula": "81.71%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.26,
      "formula": "123.26%"
    },
    {
      "id": "air_banner",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.52,
      "formula": "79.52%"
    },
    {
      "id": "air_follow",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 155.66,
      "formula": "155.66%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.68,
      "formula": "125.84% × 2"
    },
    {
      "id": "skill_windqueller",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 425.44,
      "formula": "106.36% × 4"
    },
    {
      "id": "lib_lance1",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 524.16,
      "formula": "65.52% × 8",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_lance2",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 492.4,
      "formula": "61.55% × 8",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_lance3",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 534.08,
      "formula": "66.76% × 8",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_finale",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 714.55,
      "formula": "142.91% × 2 + 428.73%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "resolve",
        "value": 30
      }
    },
    {
      "id": "outro_discipline",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 313.4,
      "formula": "313.40%"
    }
  ],
  "defaultSkillId": "lib_lance3",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 4,
  "combatStates": [
    {
      "id": "state_1",
      "kind": "form",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "attackPercent",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 15
    },
    {
      "id": "b2",
      "zone": "critDamage",
      "value": 12,
      "scope": "self",
      "defaultActive": false,
      "duration": 8
    },
    {
      "id": "b3",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "skills": [
        "skill_windqueller"
      ],
      "defaultActive": false,
      "triggerRules": [
        {
          "skills": [
            "skill_windqueller"
          ],
          "requiresState": "state_1_option_1"
        }
      ]
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "attackPercent",
          "value": 28,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_cr",
          "zone": "critRate",
          "value": 16,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_windqueller",
            "forte_finale",
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 8
        },
        {
          "id": "k3_cd",
          "zone": "critDamage",
          "value": 32,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_windqueller",
            "forte_finale",
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 8
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "value": 25,
          "scope": "team",
          "damageType": "heavy",
          "defaultActive": false,
          "triggerSkills": [
            "forte_finale"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "attackPercent",
          "value": 45,
          "scope": "self",
          "maxStacks": 15,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 15,
          "duration": 8
        },
        {
          "id": "k5_outro",
          "multAdd": 120,
          "scope": "self",
          "skills": [
            "outro_discipline"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_1",
          "multAdd": 120,
          "scope": "self",
          "skills": [
            "forte_finale"
          ],
          "defaultActive": false
        },
        {
          "id": "k6_2",
          "multAdd": 120,
          "scope": "self",
          "skills": [
            "forte_finale"
          ],
          "defaultActive": false
        }
      ]
    }
  ],
  "modes": null
});
