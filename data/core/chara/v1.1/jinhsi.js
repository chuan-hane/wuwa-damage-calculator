WUWA.register({
  "id": "jinhsi",
  "aliases": [],
  "debut": 1.1,
  "element": "spectro",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "ages_of_harvest",
  "portrait": "",
  "resources": [
    {
      "id": "incandescence",
      "min": 0,
      "max": 50,
      "defaultValue": "max"
    }
  ],
  "base": {
    "hp": 10825,
    "attack": 412,
    "defense": 1258,
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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 66.47,
      "formula": "66.47%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.49,
      "formula": "38.99% + 19.50% × 3",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 106.49,
      "formula": "10.65% × 7 + 31.94%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.72,
      "formula": "63.09% + 94.63%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 238.6,
      "formula": "23.86% × 5 + 35.79% + 83.51%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "air",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.28,
      "formula": "12.33% + 24.66% + 86.29%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 146.78,
      "formula": "14.68% × 7 + 44.02%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 155.68,
      "formula": "19.46% × 4 + 77.84%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "skill_overflowing_radiance",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 197.29,
      "formula": "9.87% × 4 + 29.59% × 4 + 39.45%",
      "impliedStates": ["form_1_option_0"],
      "requiresState": "mechanic_1_option_1"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1666.03,
      "formula": "499.81% + 1166.22%"
    },
    {
      "id": "loong_intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 159.05,
      "formula": "159.05%",
      "impliedStates": ["form_1_option_0"]
    },
    {
      "id": "loong_na1",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 88.62,
      "formula": "88.62%",
      "impliedStates": ["form_1_option_1"]
    },
    {
      "id": "loong_na2",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 129.95,
      "formula": "77.97% + 25.99% + 25.99%",
      "impliedStates": ["form_1_option_1"]
    },
    {
      "id": "loong_na3",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 165.74,
      "formula": "99.44% + 66.30%",
      "impliedStates": ["form_1_option_1"]
    },
    {
      "id": "loong_na4",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 186.69,
      "formula": "18.67% × 6 + 74.67%",
      "impliedStates": ["form_1_option_1"]
    },
    {
      "id": "crescent_forte_crescent_divinity",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 503.8,
      "formula": "100.76% + 75.57% × 2 + 251.90%",
      "impliedStates": ["form_1_option_1"]
    },
    {
      "id": "loong_heavy",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 159.06,
      "formula": "47.72% + 111.34%",
      "requiresState": ["form_1_option_1", "form_1_option_2"]
    },
    {
      "id": "forte_illuminous_epiphany_solar",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 119.34,
      "formula": "19.89% × 6",
      "impliedStates": ["form_1_option_2"]
    },
    {
      "id": "loong_dodge",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 219.44,
      "formula": "43.89% + 32.92% × 2 + 109.71%",
      "impliedStates": ["form_1_option_1"]
    },
    {
      "id": "forte_illuminous_epiphany_stella",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 347.92,
      "perStack": 44.54,
      "stackResource": "incandescence",
      "stackLabel": "韶光",
      "formula": "347.92% + 44.54% × 韶光",
      "impliedStates": ["form_1_option_2"]
    }
  ],
  "defaultSkillId": "forte_illuminous_epiphany_stella",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 5,
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "required": true,
      "defaultValue": "form_1_option_0",
      "options": [
        { "value": "form_1_option_0" },
        { "value": "form_1_option_1" },
        { "value": "form_1_option_2" }
      ]
    },
    {
      "id": "mechanic_1",
      "kind": "mechanic",
      "options": [
        { "value": "mechanic_1_option_1" }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 20,
      "scope": "self"
    },
    {
      "id": "b2",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "loong_intro"
      ]
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "amplify",
          "value": 80,
          "scope": "self",
          "skills": [
            "forte_illuminous_epiphany_stella"
          ],
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 2,
      "buffs": []
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "attackPercent",
          "value": 50,
          "scope": "self",
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "loong_intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 1
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "lib",
            "forte_illuminous_epiphany_stella"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "skillMultBonus",
          "value": 120,
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
          "id": "k6_mult",
          "zone": "skillMultBonus",
          "value": 45,
          "scope": "self",
          "skills": [
            "forte_illuminous_epiphany_stella"
          ]
        },
        {
          "id": "k6_stack",
          "perStackBonus": 45,
          "scope": "self",
          "skills": [
            "forte_illuminous_epiphany_stella"
          ]
        }
      ]
    }
  ],
  "modes": null
});
