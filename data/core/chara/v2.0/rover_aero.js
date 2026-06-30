WUWA.register({
  "id": "rover_aero",
  "aliases": [],
  "debut": 2,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "bloodpacts_pledge",
  "defaultWeaponId": "bloodpacts_pledge",
  "portrait": "",
  "base": {
    "hp": 10775,
    "attack": 437,
    "defense": 1136,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "windstrings",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 35.31,
      "formula": "35.31%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.1,
      "formula": "43.05% × 2"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.8,
      "formula": "55.05% + 1.99% × 25"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.72,
      "formula": "76.72%"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 53.73,
      "formula": "17.91% × 3"
    },
    {
      "id": "heavy_choke",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 80.83,
      "formula": "36.37% + 44.46%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 140.76,
      "formula": "140.76%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 175.18,
      "formula": "125.43% + 1.99% × 25"
    },
    {
      "id": "skill_gale",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 166.1,
      "formula": "66.44% + 99.66%"
    },
    {
      "id": "skill_sever",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 175.26,
      "formula": "23.37% × 3 + 105.15%"
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 536.79,
      "formula": "536.79%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "79.53% + 119.29%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_cloud_1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 128.8,
      "formula": "128.80%"
    },
    {
      "id": "forte_cloud_2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 141.47,
      "formula": "141.47%"
    },
    {
      "id": "forte_misty_1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 171.5,
      "formula": "34.30% × 5",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "windstrings",
        "value": 60
      },
      "fallbackSkillId": "skill_gale",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_misty_2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 723.03,
      "formula": "723.03%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "windstrings",
        "value": 60
      },
      "fallbackSkillId": "skill_gale",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    }
  ],
  "defaultSkillId": "forte_misty_2",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 14,
  "buffs": [
    {
      "id": "b_intro_atk",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 10
    },
    {
      "id": "b_outro_cap",
      "zone": "effectCapBonus",
      "value": 3,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 10
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": []
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_aero",
          "zone": "damageBonus",
          "element": "aero",
          "value": 15,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_skill",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "forte_cloud_1",
            "forte_cloud_2"
          ],
          "duration": 5
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_misty",
          "zone": "skillMultBonus",
          "value": 30,
          "scope": "self",
          "skills": [
            "forte_misty_1",
            "forte_misty_2"
          ]
        }
      ]
    }
  ],
  "modes": null
});
