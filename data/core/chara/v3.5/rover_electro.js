WUWA.register({
  "id": "rover_electro",
  "aliases": [],
  "debut": 3.5,
  "element": "electro",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "electro"
  ],
  "signatureWeaponId": null,
  "defaultWeaponId": "emerald_of_genesis",
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
      "id": "electric_surge",
      "min": 0,
      "max": 120,
      "defaultValue": "max"
    },
    {
      "id": "thunder_rage",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "concerto_energy",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 51.08,
      "formula": "51.08%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 65,
      "formula": "26.00% + 39.00%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 92.89,
      "formula": "13.27% × 7"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 182.04,
      "formula": "72.82% + 109.22%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 104.94,
      "formula": "104.94%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 148.5,
      "formula": "74.25% × 2"
    },
    {
      "id": "counter",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 55.95,
      "formula": "55.95%"
    },
    {
      "id": "counter_crumble",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 59.43,
      "formula": "59.43%"
    },
    {
      "id": "havoc_air1",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 32.43,
      "formula": "32.43%"
    },
    {
      "id": "havoc_air2",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 37.16,
      "formula": "37.16%"
    },
    {
      "id": "havoc_air3",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 113.76,
      "formula": "37.54% × 2 + 38.68%"
    },
    {
      "id": "air_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 188.44,
      "formula": "188.44%"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 200.4,
      "formula": "100.20% × 2",
      "requiresState": "normal_resonance"
    },
    {
      "id": "skill_repel",
      "category": "resonanceSkill",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 140.29,
      "formula": "56.12% + 84.17%",
      "requiresState": "normal_resonance"
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "element": "electro",
      "multiplier": 1192.86,
      "formula": "1192.86%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "element": "electro",
      "multiplier": 167.03,
      "formula": "33.41% × 2 + 100.21%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "overload_tap",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 1412.58,
      "formula": "80.72% × 7 + 423.77% × 2",
      "requiresState": "normal_resonance",
      "requiresResourceFull": "electric_surge",
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "overload_hold",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 1412.58,
      "formula": "80.72% × 7 + 423.77% × 2",
      "requiresState": "normal_resonance",
      "requiresAllResourcesAtLeast": [
        {
          "id": "electric_surge",
          "fractionOfCap": 1
        },
        {
          "id": "concerto_energy",
          "value": 60
        }
      ],
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill",
        "consumeConcerto"
      ]
    },
    {
      "id": "thrum_aero_plunge",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 282.48,
      "formula": "282.48%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_aero_air1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 84.61,
      "formula": "84.61%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill",
        "heal"
      ]
    },
    {
      "id": "thrum_aero_air2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 97.41,
      "formula": "97.41%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill",
        "heal"
      ]
    },
    {
      "id": "thrum_aero",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 158.09,
      "formula": "158.09%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_spectro2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "spectro",
      "multiplier": 163.53,
      "formula": "49.06% × 2 + 65.41%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_spectro3",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "spectro",
      "multiplier": 255.14,
      "formula": "102.06% + 153.08%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_havoc1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 149.76,
      "formula": "14.98% × 3 + 104.82%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_havoc2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 138.3,
      "formula": "13.83% × 4 + 82.98%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_havoc3",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 208.38,
      "formula": "62.51% × 2 + 20.84% × 4",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_havoc_air1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 50.63,
      "formula": "50.63%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_havoc_air2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 63.82,
      "formula": "63.82%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_havoc_air3",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 277.3,
      "formula": "91.51% × 2 + 94.28%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thrum_spectro1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "spectro",
      "multiplier": 99.12,
      "formula": "99.12%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "thunder_bane",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 0,
      "perStack": 39.77,
      "stackMax": 6,
      "defaultLayers": 1,
      "stackLabel": "thunder_bane_trigger_count",
      "formula": "39.77% × n",
      "triggeredDamage": true,
      "requiresAllStates": [
        "apex_resonance",
        "thrum_hit"
      ],
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      }
    },
    {
      "id": "thrum_silencing_blade",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 470.68,
      "formula": "47.07% × 5 + 235.33%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    }
  ],
  "defaultSkillId": "overload_hold",
  "skillEvents": [
    {
      "skills": [
        "overload_tap",
        "overload_hold"
      ],
      "event": "applyElectroFlare",
      "stacks": 10
    },
    {
      "seq": 2,
      "skills": [
        "lib"
      ],
      "event": "applyElectroFlare",
      "stacks": 5
    }
  ],
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
      "id": "resonance_mode",
      "kind": "mode",
      "required": true,
      "defaultValue": "normal_resonance",
      "options": [
        {
          "value": "normal_resonance"
        },
        {
          "value": "apex_resonance"
        }
      ]
    },
    {
      "id": "thunder_bane_trigger",
      "kind": "mechanic",
      "requiresState": "apex_resonance",
      "options": [
        {
          "value": "thrum_hit"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_overload_team_atk",
      "zone": "attackPercent",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "b_regression_skill_bonus",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "b_outro_all_amp",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "requiresAnyEffectStacks": {
        "stacks": 1
      },
      "duration": 14
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
          "id": "k3_overload",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "overload_tap",
            "overload_hold"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_lib",
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
      "seq": 5,
      "buffs": [
        {
          "id": "k5_crit_damage",
          "zone": "critDamage",
          "value": 20,
          "scope": "self",
          "requiresState": "apex_resonance"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_thrum",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "thrum_aero_plunge",
            "thrum_aero_air1",
            "thrum_aero_air2",
            "thrum_aero",
            "thrum_spectro2",
            "thrum_spectro3",
            "thrum_havoc1",
            "thrum_havoc2",
            "thrum_havoc3",
            "thrum_havoc_air1",
            "thrum_havoc_air2",
            "thrum_havoc_air3",
            "thrum_spectro1",
            "thunder_bane",
            "thrum_silencing_blade"
          ]
        }
      ]
    }
  ],
  "modes": null
});
