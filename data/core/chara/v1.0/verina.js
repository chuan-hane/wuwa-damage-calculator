WUWA.register({
  "id": "verina",
  "aliases": [],
  "debut": 1,
  "element": "spectro",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "cosmic_ripples",
  "portrait": "",
  "base": {
    "hp": 14237,
    "attack": 337,
    "defense": 1099,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "healingBonus": 12
    }
  },
  "resources": [
    {
      "id": "photosynthesis",
      "max": 4,
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
      "multiplier": 37.86,
      "formula": "37.86%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 51.16,
      "formula": "51.16%"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 51.16,
      "formula": "25.58% × 2"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.32,
      "formula": "67.32%"
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 71.62,
      "formula": "71.62%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 99.41,
      "formula": "99.41%"
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 56.37,
      "formula": "56.37%"
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 53.19,
      "formula": "53.19%"
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.26,
      "formula": "25.42% × 3"
    },
    {
      "id": "air",
      "legacyIds": [
        "a10"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 61.64,
      "formula": "61.64%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a11"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 129.23,
      "formula": "129.23%"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 178.95,
      "formula": "35.79% × 3 + 71.58%"
    },
    {
      "id": "lib",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 198.81,
      "formula": "198.81%"
    },
    {
      "id": "lib_coordinated",
      "legacyIds": [
        "a14"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 9.95,
      "formula": "9.95%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a15"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 99.41,
      "formula": "99.41%"
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 162.37,
      "formula": "64.95% + 97.42%",
      "requiresResource": "光合能量",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "air1",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 67.64,
      "formula": "67.64%",
      "requiresResource": "光合能量",
      "fallbackSkillId": "na1_2"
    },
    {
      "id": "air2",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 63.82,
      "formula": "63.82%",
      "requiresResource": "光合能量",
      "fallbackSkillId": "na2_2"
    },
    {
      "id": "air3",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 91.5,
      "formula": "30.50% × 3",
      "requiresResource": "光合能量",
      "fallbackSkillId": "na3_2"
    }
  ],
  "defaultSkillId": "lib",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "energyRegen",
    "heal"
  ],
  "echoSet": 7,
  "buffs": [
    {
      "id": "b1",
      "zone": "attackPercent",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "triggerSkills": [
        "heavy_2",
        "air1",
        "air2",
        "air3",
        "lib"
      ],
      "duration": 20
    },
    {
      "id": "b2",
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
          "zone": "damageBonus",
          "element": "spectro",
          "value": 15,
          "scope": "team",
          "defaultActive": false,
          "duration": 24,
          "triggerSkills": [
            "heavy_2",
            "air1",
            "air2",
            "air3",
            "lib"
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
          "id": "k6",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "heavy_2",
            "air1",
            "air2",
            "air3"
          ]
        }
      ]
    }
  ],
  "modes": null
});
