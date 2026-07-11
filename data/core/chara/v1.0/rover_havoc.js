WUWA.register({
  "id": "rover_havoc",
  "aliases": [],
  "debut": 1,
  "element": "havoc",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "emerald_of_genesis",
  "defaultWeaponId": "emerald_of_genesis",
  "portrait": "",
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
      "attackPct": 12,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "umbra",
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
      "multiplier": 56.67,
      "formula": "56.67%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.34,
      "formula": "56.67% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 85,
      "formula": "85.00%"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 120.9,
      "formula": "40.30% × 3"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 188.88,
      "formula": "94.44% × 2"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 95.43,
      "formula": "95.43%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 117.1,
      "formula": "117.10%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 179.43,
      "formula": "179.43%"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 572.58,
      "formula": "286.29% × 2"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1520.9,
      "formula": "1520.90%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
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
      "id": "umbra_forte_devastation",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 228.14,
      "formula": "228.14%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "umbra",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "umbra_na1",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 56.37,
      "formula": "56.37%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_na2",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 93.94,
      "formula": "93.94%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_na3",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 155.67,
      "formula": "155.67%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_na4",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 222.78,
      "formula": "37.13% × 3 + 111.39%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_na5",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 228.15,
      "formula": "28.52% × 4 + 114.07%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_heavy",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 128.83,
      "formula": "128.83%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_forte_umbra_thwackblade",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 166.45,
      "formula": "126.65% + 9.95% × 4",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_air",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_dodge",
      "legacyIds": [
        "a21"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 316.71,
      "formula": "316.71%",
      "impliedStates": [
        "state_1_option_1"
      ]
    },
    {
      "id": "umbra_forte_umbra_lifetaker",
      "legacyIds": [
        "a22"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 592.5,
      "formula": "276.35% × 2 + 9.95% × 4",
      "impliedStates": [
        "state_1_option_1"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "outro",
      "legacyIds": [
        "a23"
      ],
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 143.3,
      "formula": "143.30%（每2秒，持续6秒）"
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 6,
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
      "element": "havoc",
      "value": 20,
      "scope": "self",
      "requiresState": "state_1_option_1"
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 30,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": []
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
          "zone": "resShred",
          "element": "havoc",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "multScaleAdd": 50,
          "scope": "self",
          "skills": [
            "umbra_na5"
          ],
          "requiresState": "state_1_option_1"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "critRate",
          "value": 25,
          "scope": "self",
          "requiresState": "state_1_option_1"
        }
      ]
    }
  ],
  "modes": null
});
