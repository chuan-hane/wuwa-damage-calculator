WUWA.register({
  "id": "phrolova",
  "aliases": [],
  "debut": 2.5,
  "element": "havoc",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "lethean_elegy",
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
      "critRate": 8,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "notes",
      "max": 6,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 106.9,
      "formula": "53.45% × 2"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 95.43,
      "formula": "95.43%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.14,
      "formula": "32.69% × 6",
      "triggerEvents": [
        "enterReincarnation"
      ]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 159.7,
      "formula": "79.85% × 2"
    },
    {
      "id": "scarlet_coda",
      "category": "basicAttack",
      "damageType": "resonanceSkill",
      "multiplier": 660.16,
      "perStack": 82.55,
      "stackMax": 24,
      "defaultLayers": 10,
      "defaultLayersBySeq": [
        {
          "seq": 2,
          "layers": 14
        }
      ],
      "stackLabel": "余响",
      "formula": "33.01% × 2 + 12.38% × 8 + 495.10% + 82.55% × 余响",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "notes",
        "value": 6
      },
      "requiresState": "mechanic_1_option_1",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 127.24,
      "formula": "127.24%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 121.99,
      "formula": "121.99%"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 211.94,
      "formula": "105.97% × 2",
      "triggerEvents": [
        "castResonanceSkill",
        "enterReincarnation"
      ]
    },
    {
      "id": "hecate_1",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "27.84%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hecate_2",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "13.92% × 2",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hecate_strings",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hecate_winds",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 330.53,
      "formula": "99.16% + 231.37%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hecate_cadenza",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "hecate_1_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "27.84%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "hecate_2_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 27.84,
      "formula": "13.92% × 2",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "hecate_strings_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "hecate_winds_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 330.53,
      "formula": "99.16% + 231.37%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "hecate_cadenza_bg",
      "category": "resonanceLiberation",
      "damageType": "echoSkill",
      "multiplier": 347.93,
      "formula": "104.38% + 243.55%",
      "impliedStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "curtain_call",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 465.22,
      "formula": "465.22%",
      "requiresState": [
        "mode_1",
        "state_2_option_1"
      ]
    },
    {
      "id": "intro_quietus",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 201.52,
      "formula": "80.61% + 120.91%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "intro_immortality",
      "category": "introSkill",
      "damageType": "resonanceSkill",
      "multiplier": 596.43,
      "formula": "596.43%",
      "requiresResource": "resource_gate_2",
      "fallbackSkillId": "intro_quietus",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "fate_finality",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 505.01,
      "formula": "37.88% × 4 + 117.83% × 3",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "haunting_dream",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 464.07,
      "formula": "23.21% × 4 + 46.41% + 324.82%",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "k6_hecate_phantom",
      "category": "forteCircuit",
      "damageType": "echoSkill",
      "multiplier": 216.42,
      "formula": "216.42%",
      "seq": 6,
      "requiresResource": "resource_gate_3"
    }
  ],
  "defaultSkillId": "hecate_cadenza",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "echoSkillDmg"
  ],
  "echoSet": 19,
  "echoSet2": 6,
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
    },
    {
      "id": "mode_1",
      "kind": "mode",
      "options": [
        {
          "value": "mode_1_option_1"
        },
        {
          "value": "mode_1_option_2"
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
      "id": "b_aftersound",
      "zone": "critDamage",
      "value": 60,
      "scope": "self",
      "maxStacks": 24,
      "defaultStacks": 10
    },
    {
      "id": "b_aftersound_overflow",
      "zone": "critDamage",
      "value": 100,
      "scope": "self",
      "maxStacks": 100,
      "defaultStacks": 0,
      "defaultActive": false,
      "requiresBuffStacks": {
        "id": "b_aftersound",
        "stacks": 24
      }
    },
    {
      "id": "b_maestro_atk",
      "zone": "attackPercent",
      "value": 120,
      "scope": "self",
      "requiresState": "mode_1",
      "duration": 24
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
      "id": "outro_heavy",
      "zone": "amplify",
      "damageType": "heavy",
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
          "value": 80,
          "scope": "self",
          "skills": [
            "fate_finality",
            "haunting_dream"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_mult",
          "zone": "skillMultBonus",
          "value": 75,
          "scope": "self",
          "skills": [
            "scarlet_coda"
          ]
        },
        {
          "id": "k2_stack",
          "perStackBonus": 75,
          "scope": "self",
          "skills": [
            "scarlet_coda"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_echo",
          "zone": "amplify",
          "damageType": "echoSkill",
          "value": 80,
          "scope": "self"
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
          "triggerEvents": [
            "castEchoSkill"
          ],
          "duration": 30
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
          "id": "k6_hecate",
          "zone": "skillMultBonus",
          "value": 24,
          "scope": "self",
          "skills": [
            "hecate_strings",
            "hecate_winds",
            "hecate_cadenza",
            "hecate_strings_bg",
            "hecate_winds_bg",
            "hecate_cadenza_bg"
          ]
        },
        {
          "id": "k6_havoc",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 60,
          "scope": "self",
          "requiresState": "mode_1_option_1"
        },
        {
          "id": "k6_amp",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "requiresState": "mode_1_option_2"
        }
      ]
    }
  ],
  "modes": null
});
