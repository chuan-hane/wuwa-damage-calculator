WUWA.register({
  "id": "ciaccona",
  "aliases": [],
  "debut": 2.3,
  "element": "aero",
  "weaponType": 3,
  "quality": 5,
  "effectTypes": [
    "windErosion",
    "lightNoise"
  ],
  "signatureWeaponId": "woodland_aria",
  "portrait": "",
  "base": {
    "hp": 12237,
    "attack": 375,
    "defense": 1197,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "rhythm",
      "max": 3,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 57.06,
      "formula": "57.06%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 163.04,
      "formula": "48.91% + 24.46% × 2 + 65.21%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.08,
      "formula": "33.02% × 4"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 244.56,
      "formula": "61.14% × 4",
      "triggerEvents": [
        "applyAeroErosion"
      ]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 107.6,
      "formula": "107.60%"
    },
    {
      "id": "aim",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 32.61,
      "formula": "32.61%"
    },
    {
      "id": "aim_full",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 73.37,
      "formula": "73.37%"
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 110.86,
      "formula": "55.43% × 2"
    },
    {
      "id": "air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.84,
      "formula": "24.46% × 4"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 228.68,
      "formula": "57.17% × 4"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 161.56,
      "formula": "40.39% × 4",
      "triggerEvents": [
        "applyAeroErosion"
      ]
    },
    {
      "id": "lib_improv",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1100.42,
      "formula": "1100.42%",
      "triggerEvents": [
        "shield"
      ]
    },
    {
      "id": "lib_tonic_green",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 122.4,
      "formula": "6.12% × 20",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "applyAeroErosion"
      ]
    },
    {
      "id": "lib_tonic_yellow",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 122.4,
      "formula": "6.12% × 20",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "applySpectroFrazzle"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 189.11,
      "formula": "189.11%",
      "triggerEvents": [
        "applyAeroErosion"
      ]
    },
    {
      "id": "forte_downbeat",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 628.13,
      "formula": "31.41% × 10 + 314.03%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "rhythm",
        "value": 3
      },
      "fallbackSkillId": "heavy",
      "triggerEvents": [
        "applyAeroErosion"
      ]
    },
    {
      "id": "c6_solo",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 220,
      "formula": "220%",
      "seq": 6,
      "impliedStates": [
        "status_1_option_1"
      ]
    }
  ],
  "defaultSkillId": "lib_improv",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 14,
  "combatStates": [
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
      "id": "b_solo_aero",
      "zone": "damageBonus",
      "element": "aero",
      "value": 24,
      "scope": "team",
      "requiresState": "status_1_option_1"
    },
    {
      "id": "b_downbeat_amp",
      "zone": "amplify",
      "value": 30,
      "scope": "self",
      "skills": [
        "forte_downbeat"
      ]
    },
    {
      "id": "b_outro_wind",
      "zone": "amplify",
      "effect": "windErosion",
      "value": 100,
      "scope": "team",
      "duration": 30
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_atk",
          "zone": "attackPercent",
          "value": 35,
          "scope": "self",
          "defaultActive": false,
          "triggerDamageTypes": [
            "basic"
          ],
          "duration": 10
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_aero",
          "zone": "damageBonus",
          "element": "aero",
          "value": 40,
          "scope": "team",
          "requiresState": "state_1_option_1"
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
          "id": "k4_downbeat_def",
          "zone": "defIgnore",
          "value": 45,
          "scope": "self",
          "skills": [
            "forte_downbeat"
          ]
        },
        {
          "id": "k4_burst_def",
          "zone": "defIgnore",
          "value": 45,
          "scope": "self",
          "damageType": "resonanceLiberation"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_burst",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 40,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": []
    }
  ],
  "modes": null
});
