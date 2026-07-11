WUWA.register({
  "id": "galbrena",
  "aliases": [],
  "debut": 2.7,
  "element": "fusion",
  "weaponType": 3,
  "quality": 5,
  "signatureWeaponId": "lux_and_umbra",
  "portrait": "",
  "base": {
    "hp": 10300,
    "attack": 462,
    "defense": 1112,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "critDamage": 16
    }
  },
  "resources": [
    {
      "id": "afterflame",
      "max": 40,
      "defaultValue": "max"
    },
    {
      "id": "sinflame",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "ba1",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 59.18,
      "formula": "59.18%"
    },
    {
      "id": "ba2",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 131.53,
      "formula": "26.31% + 26.31% + 78.91%"
    },
    {
      "id": "ba3",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 142.98,
      "formula": "28.60% + 28.60% + 42.89% + 42.89%"
    },
    {
      "id": "ba4",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 177.86,
      "formula": "177.86%"
    },
    {
      "id": "dodge_blood",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 205.24,
      "formula": "41.05% + 41.05% + 61.57% + 61.57%"
    },
    {
      "id": "air_plunge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 143.15,
      "formula": "143.15%"
    },
    {
      "id": "air_fire",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 26.84,
      "formula": "26.84%"
    },
    {
      "id": "heavy_1",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 106.6,
      "formula": "53.30% + 53.30%"
    },
    {
      "id": "heavy_2",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 69.18,
      "formula": "34.59% × 2"
    },
    {
      "id": "heavy_3",
      "category": "basicAttack",
      "damageType": "echoSkill",
      "multiplier": 167.7,
      "formula": "16.77% × 3 + 117.39%"
    },
    {
      "id": "skill_encroach",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 35.78,
      "formula": "10.74% + 25.04%"
    },
    {
      "id": "skill_ascent",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 103.14,
      "formula": "51.57% + 51.57%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "sinflame",
        "value": 100
      },
      "fallbackSkillId": "skill_encroach"
    },
    {
      "id": "lib_absolution",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 1109.04,
      "formula": "110.90% + 90.74% × 11",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 94.12,
      "formula": "94.12%"
    },
    {
      "id": "seraphic_1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 58.99,
      "formula": "58.99%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "seraphic_2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 139.19,
      "formula": "27.84% + 27.84% + 83.51%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "seraphic_3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 243.17,
      "formula": "24.32% × 3 + 170.21%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "seraphic_4",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 181.47,
      "formula": "18.15% × 3 + 127.02%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "seraphic_5",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 224.27,
      "formula": "67.28% + 156.99%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "verdict_1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 118.44,
      "formula": "59.22% + 59.22%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "verdict_2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 76.7,
      "formula": "38.35% × 2",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "verdict_3",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 176.84,
      "formula": "17.69% × 3 + 123.77%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "dodge_purgatory",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 321,
      "formula": "32.10% × 3 + 224.70%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "hellsent_plunge",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 159.05,
      "formula": "159.05%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "hellsent_fire",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 29.83,
      "formula": "29.83%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "skill_ravage",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 35.78,
      "formula": "10.74% + 25.04%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "outro_ashen_pursuit",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 795,
      "formula": "79.50% × 3 + 556.50%"
    }
  ],
  "defaultSkillId": "lib_absolution",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "echoSkillDmg"
  ],
  "echoSet": 22,
  "echoSet2": 2,
  "combatStates": [
    {
      "id": "state_1",
      "options": [
        {
          "value": "state_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_fated_end",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false,
      "duration": 5.5
    },
    {
      "id": "b_afterflame",
      "zone": "vulnerability",
      "value": 60,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "skills": [
        "seraphic_1",
        "seraphic_2",
        "seraphic_3",
        "seraphic_4",
        "seraphic_5",
        "verdict_1",
        "verdict_2",
        "verdict_3",
        "hellsent_plunge",
        "hellsent_fire",
        "skill_ravage",
        "dodge_purgatory"
      ],
      "maxStacks": 40,
      "defaultStacks": 0,
      "stackResource": "afterflame",
      "stackGroup": "afterflame"
    },
    {
      "id": "b_inner_burning",
      "zone": "attackPercent",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro",
        "seraphic_4",
        "skill_encroach",
        "skill_ascent",
        "skill_ravage"
      ],
      "duration": 4
    },
    {
      "id": "b_liberation_mult",
      "zone": "skillMultBonus",
      "value": 85,
      "scope": "self",
      "requiresState": "state_1_option_1",
      "skills": [
        "seraphic_1",
        "seraphic_2",
        "seraphic_3",
        "seraphic_4",
        "seraphic_5",
        "verdict_1",
        "verdict_2",
        "verdict_3",
        "hellsent_plunge",
        "hellsent_fire",
        "dodge_purgatory"
      ],
      "defaultActive": false,
      "duration": 14
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_afterflame_cd",
          "zone": "critDamage",
          "value": 80,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "skills": [
            "seraphic_1",
            "seraphic_2",
            "seraphic_3",
            "seraphic_4",
            "seraphic_5",
            "verdict_1",
            "verdict_2",
            "verdict_3",
            "hellsent_plunge",
            "hellsent_fire",
            "skill_ravage",
            "dodge_purgatory"
          ],
          "maxStacks": 40,
          "defaultStacks": 0,
          "stackResource": "afterflame",
          "stackGroup": "afterflame"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_inner_burning",
          "zone": "attackPercent",
          "value": 70,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "seraphic_4",
            "skill_encroach",
            "skill_ascent",
            "skill_ravage"
          ],
          "duration": 4
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_liberation",
          "zone": "skillMultBonus",
          "value": 130,
          "scope": "self",
          "skills": [
            "lib_absolution"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_echo_team",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerEvents": [
            "castEchoSkill"
          ],
          "duration": 20
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_skill",
          "zone": "skillMultBonus",
          "value": 150,
          "scope": "self",
          "skills": [
            "skill_encroach",
            "skill_ascent",
            "skill_ravage"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_eternal_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "skills": [
            "seraphic_1",
            "seraphic_2",
            "seraphic_3",
            "seraphic_4",
            "seraphic_5",
            "verdict_1",
            "verdict_2",
            "verdict_3",
            "hellsent_plunge",
            "hellsent_fire",
            "dodge_purgatory"
          ]
        },
        {
          "id": "k6_afterflame_fusion",
          "zone": "amplify",
          "element": "fusion",
          "value": 35,
          "scope": "self",
          "requiresState": "state_1_option_1",
          "skills": [
            "seraphic_1",
            "seraphic_2",
            "seraphic_3",
            "seraphic_4",
            "seraphic_5",
            "verdict_1",
            "verdict_2",
            "verdict_3",
            "hellsent_plunge",
            "hellsent_fire",
            "skill_ravage",
            "dodge_purgatory"
          ],
          "maxStacks": 40,
          "defaultStacks": 0,
          "stackResource": "afterflame",
          "stackGroup": "afterflame"
        }
      ]
    }
  ],
  "modes": null
});
