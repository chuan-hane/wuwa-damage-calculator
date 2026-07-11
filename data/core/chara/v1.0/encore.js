WUWA.register({
  "id": "encore",
  "aliases": [],
  "debut": 1,
  "element": "fusion",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "cosmic_ripples",
  "portrait": "",
  "base": {
    "hp": 10512,
    "attack": 425,
    "defense": 1246,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "mayhem",
      "max": 100,
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
      "multiplier": 55.66,
      "formula": "55.66%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 66.2,
      "formula": "66.20%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.6,
      "formula": "66.30% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 153.08,
      "formula": "38.27% × 4"
    },
    {
      "id": "skill_woolies",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.57,
      "formula": "238.57%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 187.08,
      "formula": "187.08%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.26,
      "formula": "123.26%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 251.88,
      "formula": "125.94% × 2"
    },
    {
      "id": "skill_flaming_woolies",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 612.88,
      "formula": "76.61% × 8"
    },
    {
      "id": "skill_energetic_welcome",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 339.16,
      "formula": "339.16%"
    },
    {
      "id": "lib_cosmos_frolicking_1",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 180.36,
      "formula": "90.18% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_cosmos_frolicking_2",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 169.2,
      "formula": "56.40% × 3",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_cosmos_frolicking_3",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 263.96,
      "formula": "65.99% × 4",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_4",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 582.03,
      "formula": "194.01% × 3",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a15"
      ],
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 217.58,
      "formula": "217.58%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "lib_cosmos_rampage",
      "legacyIds": [
        "a16"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 253.28,
      "formula": "63.32% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "dodge_2",
      "legacyIds": [
        "a17"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "multiplier": 263.96,
      "formula": "65.99% × 4",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a18"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "heavy_3",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 334,
      "formula": "334.00%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "mayhem",
        "value": 100
      },
      "fallbackSkillId": "heavy"
    },
    {
      "id": "heavy_4",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 773.73,
      "formula": "46.42% × 6 + 495.21%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "mayhem",
        "value": 100
      },
      "fallbackSkillId": "heavy_2",
      "impliedStates": [
        "state_1_option_1"
      ]
    }
  ],
  "defaultSkillId": "heavy_4",
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
      "zone": "damageBonus",
      "value": 10,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "defaultActive": false
    },
    {
      "id": "b2",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "skill_flaming_woolies",
        "lib_cosmos_rampage"
      ],
      "duration": 10
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 12,
          "scope": "self",
          "maxStacks": 4,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 6
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
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "heavy_3",
            "heavy_4"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "heavy_4"
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
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 35,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "attackPercent",
          "value": 25,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "maxStacks": 5,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 10
        }
      ]
    }
  ],
  "modes": null
});
