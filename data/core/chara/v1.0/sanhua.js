WUWA.register({
  "id": "sanhua",
  "aliases": [],
  "debut": 1,
  "element": "glacio",
  "weaponType": 2,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "overture",
  "portrait": "",
  "base": {
    "hp": 10062,
    "attack": 275,
    "defense": 941,
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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 48.71,
      "formula": "48.71%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.76,
      "formula": "73.76%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.32,
      "formula": "21.58% × 4"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.34,
      "formula": "39.67% × 2"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 233.81,
      "formula": "233.81%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 111.35,
      "formula": "22.27% × 5"
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.29,
      "formula": "86.29%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 167.01,
      "formula": "167.01%"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 359.85,
      "formula": "359.85%"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 809.48,
      "formula": "809.48%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 139.17,
      "formula": "139.17%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_detonate",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 372.58,
      "formula": "186.29% × 2"
    },
    {
      "id": "forte_glacier_burst",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 139.17,
      "formula": "139.17%"
    },
    {
      "id": "forte_ice_prism_burst",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "forte_ice_thorn_burst",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 59.65,
      "formula": "59.65%"
    }
  ],
  "defaultSkillId": "forte_detonate",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 1,
  "buffs": [
    {
      "id": "b1",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "duration": 8
    },
    {
      "id": "b2",
      "zone": "skillMultBonus",
      "value": 20,
      "scope": "self",
      "skills": [
        "forte_glacier_burst",
        "forte_ice_prism_burst",
        "forte_ice_thorn_burst"
      ],
      "defaultActive": false,
      "triggerSkills": [
        "na5"
      ],
      "duration": 8
    },
    {
      "id": "b3",
      "zone": "amplify",
      "damageType": "basic",
      "value": 38,
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
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "na5"
          ],
          "duration": 10
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
          "zone": "amplify",
          "value": 35,
          "scope": "self",
          "defaultActive": false
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "forte_detonate"
          ],
          "defaultActive": false,
          "duration": 5
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "skills": [
            "forte_glacier_burst",
            "forte_ice_prism_burst",
            "forte_ice_thorn_burst"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "maxStacks": 2,
          "defaultStacks": 0,
          "defaultActive": false,
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
