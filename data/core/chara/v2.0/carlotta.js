WUWA.register({
  "id": "carlotta",
  "aliases": [],
  "debut": 2,
  "element": "glacio",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "the_last_dance",
  "portrait": "",
  "base": {
    "hp": 12450,
    "attack": 462,
    "defense": 1197,
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
      "id": "moldableCrystals",
      "max": 6,
      "defaultValue": "max"
    },
    {
      "id": "substance",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 54.08,
      "formula": "54.08%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 131.83,
      "formula": "39.55% + 39.55% + 52.73%"
    },
    {
      "id": "need_a1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 65.91,
      "formula": "65.91%"
    },
    {
      "id": "need_a2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 133.51,
      "formula": "60.08% + 73.43%"
    },
    {
      "id": "need_a3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 233.25,
      "formula": "139.93% + 23.33% × 4"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 152.12,
      "formula": "22.82% × 2 + 22.82% × 2 + 60.84%"
    },
    {
      "id": "heavy_limit",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 228.18,
      "formula": "34.23% × 2 + 34.23% × 2 + 91.26%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "substance",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%"
    },
    {
      "id": "air_greet",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 239.98,
      "formula": "107.99% + 131.99%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 241.32,
      "formula": "103.77% + 137.55%"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 288.22,
      "formula": "144.11% + 144.11%",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "skill_shine",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 563.64,
      "formula": "112.73% + 112.73% + 338.18%",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 402.71,
      "formula": "402.71%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "death",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 241.64,
      "formula": "183.64% + 14.50% × 4",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "fatal",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 644.33,
      "formula": "644.33%",
      "impliedStates": [
        "status_1_option_1"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 298.23,
      "formula": "178.93% + 59.65% × 2"
    },
    {
      "id": "forte_last",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 835.36,
      "formula": "66.83% × 5 + 501.21%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "substance",
      "requiresState": "mechanic_1_option_1",
      "fallbackSkillId": "heavy"
    }
  ],
  "defaultSkillId": "forte_last",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 10,
  "echoLead": "10:sentry_construct",
  "combatStates": [
    {
      "id": "target_1",
      "kind": "target",
      "options": [
        {
          "value": "target_1_option_1"
        }
      ]
    },
    {
      "id": "status_1",
      "kind": "status",
      "options": [
        {
          "value": "status_1_option_1"
        }
      ]
    },
    {
      "id": "mechanic_1",
      "kind": "mechanic",
      "options": [
        {
          "value": "mechanic_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "dissociation",
      "zone": "defIgnore",
      "value": 18,
      "scope": "self",
      "requiresState": "target_1_option_1",
      "duration": 4
    },
    {
      "id": "revealer",
      "zone": "skillMultBonus",
      "value": 80,
      "scope": "self",
      "skills": [
        "lib",
        "death",
        "fatal"
      ],
      "requiresState": "status_1_option_1",
      "defaultActive": false
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critRate",
          "value": 12.5,
          "scope": "self",
          "requiresState": "target_1_option_1"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "skillMultBonus",
          "value": 126,
          "scope": "self",
          "skills": [
            "fatal"
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
          "value": 93,
          "scope": "self",
          "skills": [
            "skill",
            "skill_shine"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 25,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "heavy",
            "heavy_limit",
            "forte_last"
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
          "zone": "skillMultBonus",
          "value": 47,
          "scope": "self",
          "skills": [
            "forte_last"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "skillMultBonus",
          "value": 186.6,
          "scope": "self",
          "skills": [
            "death"
          ]
        }
      ]
    }
  ],
  "modes": null
});
