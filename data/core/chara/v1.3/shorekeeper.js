WUWA.register({
  "id": "shorekeeper",
  "aliases": [],
  "debut": 1.3,
  "element": "spectro",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "stellar_symphony",
  "portrait": "",
  "base": {
    "hp": 16712,
    "attack": 287,
    "defense": 1099,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "hpPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "empiricalData",
      "max": 5,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 31.78,
      "formula": "31.78%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.72,
      "formula": "23.86% × 2"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.96,
      "formula": "23.32% × 3"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 72.72,
      "formula": "72.72%"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 45.81,
      "formula": "45.81%"
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 174.96,
      "formula": "87.48% × 2"
    },
    {
      "id": "skill_dim",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 31.31,
      "formula": "31.31%",
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "burst_field",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 0,
      "formula": "0%",
      "triggerEvents": [
        "heal"
      ],
      "impliedStates": [
        "星域·浅析"
      ]
    },
    {
      "id": "intro_enlightenment",
      "category": "introSkill",
      "damageType": "resonanceSkill",
      "multiplier": 226.5,
      "formula": "45.30% × 5",
      "triggerEvents": [
        "heal"
      ]
    },
    {
      "id": "intro_discernment",
      "category": "introSkill",
      "damageType": "resonanceLiberation",
      "stat": "hp",
      "multiplier": 58.92,
      "formula": "19.64% × 3",
      "triggerEvents": [
        "heal"
      ],
      "impliedStates": [
        "星域·解限"
      ]
    },
    {
      "id": "forte_butterfly",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 37.29,
      "formula": "37.29%"
    },
    {
      "id": "forte_deduction",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 94.85,
      "formula": "18.97% × 5",
      "requiresResource": "5实证数据",
      "requiresResourceAtLeast": {
        "id": "empiricalData",
        "value": 5
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "forte_evolution",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 73.96,
      "formula": "73.96%",
      "requiresResource": "5实证数据",
      "requiresResourceAtLeast": {
        "id": "empiricalData",
        "value": 5
      },
      "fallbackSkillId": "plunge"
    }
  ],
  "defaultSkillId": "intro_enlightenment",
  "validSubs": [
    "hpFlat",
    "hpPct",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 7,
  "echoLead": "7:fallacy_of_no_return",
  "combatStates": [
    {
      "id": "星域",
      "kind": "field",
      "options": [
        {
          "value": "星域·浅析"
        },
        {
          "value": "星域·深潜"
        },
        {
          "value": "星域·解限"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_er_field",
      "zone": "energyRegen",
      "value": 10,
      "scope": "self",
      "requiresState": "星域"
    },
    {
      "id": "b_field_cr",
      "zone": "critRate",
      "scope": "team",
      "requiresState": [
        "星域·深潜",
        "星域·解限"
      ],
      "scaleBy": {
        "stat": "energyRegen",
        "rate": 0.05,
        "statBonus": 10,
        "cap": 12.5
      }
    },
    {
      "id": "b_field_cd",
      "zone": "critDamage",
      "scope": "team",
      "requiresState": "星域·解限",
      "scaleBy": {
        "stat": "energyRegen",
        "rate": 0.1,
        "statBonus": 10,
        "cap": 25
      }
    },
    {
      "id": "b_discernment_crit",
      "zone": "critRate",
      "value": 100,
      "scope": "self",
      "skills": [
        "intro_discernment"
      ]
    },
    {
      "id": "b_outro",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "duration": 30
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
          "value": 40,
          "scope": "team",
          "requiresState": "星域"
        }
      ]
    },
    {
      "seq": 3,
      "buffs": []
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "healingBonus",
          "value": 70,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_dim"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": []
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_mult",
          "zone": "skillMultBonus",
          "value": 42,
          "scope": "self",
          "skills": [
            "intro_discernment"
          ]
        },
        {
          "id": "k6_cd",
          "zone": "critDamage",
          "value": 500,
          "scope": "self",
          "skills": [
            "intro_discernment"
          ]
        }
      ]
    }
  ],
  "modes": null
});
