WUWA.register({
  "id": "zhezhi",
  "aliases": [],
  "debut": 1.2,
  "element": "glacio",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "rime_draped_sprouts",
  "portrait": "",
  "base": {
    "hp": 12250,
    "attack": 375,
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
  "skills": [
    {
      "id": "na1",
      "legacyIds": [
        "a1"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 83.52,
      "formula": "41.76% × 2"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 102.75,
      "formula": "20.55% × 5"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 133.61,
      "formula": "133.61%"
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 112.72,
      "formula": "112.72%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 229.53,
      "formula": "24.95% × 5 + 104.78%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.35,
      "formula": "29.07% × 5"
    },
    {
      "id": "skill_press",
      "legacyIds": [
        "a7"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 295.26,
      "formula": "98.42% × 3"
    },
    {
      "id": "skill_hold",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 295.26,
      "formula": "98.42% × 3"
    },
    {
      "id": "air_2",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 295.26,
      "formula": "98.42% × 3"
    },
    {
      "id": "lib_inklit_spirit",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 65.21,
      "formula": "65.21%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 258.48,
      "formula": "86.16% × 3"
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 249.03,
      "formula": "83.01% × 3"
    },
    {
      "id": "forte_stroke_genius",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 298.22,
      "formula": "298.22%"
    },
    {
      "id": "forte_creations_zenith",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 357.87,
      "formula": "119.29% × 3"
    },
    {
      "id": "k5_extra_mohe",
      "category": "resonanceLiberation",
      "damageType": "basic",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 91.29,
      "formula": "65.21% × 140%",
      "seq": 5,
      "requiresResource": "resource_gate_1"
    },
    {
      "id": "k6_white_crane",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 357.86,
      "formula": "298.22% × 120%",
      "seq": 6,
      "requiresResource": "resource_gate_2"
    }
  ],
  "defaultSkillId": "forte_creations_zenith",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "echoSet": 1,
  "buffs": [
    {
      "id": "b1",
      "zone": "attackPercent",
      "value": 18,
      "scope": "self",
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerSkills": [
        "forte_stroke_genius",
        "forte_creations_zenith"
      ],
      "triggerStacks": 1,
      "duration": 27
    },
    {
      "id": "b2",
      "zone": "typeBonus",
      "damageType": "basic",
      "value": 18,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "forte_creations_zenith"
      ],
      "duration": 27
    },
    {
      "id": "b3",
      "zone": "amplify",
      "element": "glacio",
      "value": 20,
      "scope": "team",
      "duration": 14
    },
    {
      "id": "b4",
      "zone": "amplify",
      "damageType": "resonanceSkill",
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
          "zone": "critRate",
          "value": 10,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "forte_creations_zenith"
          ],
          "duration": 27
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
          "value": 45,
          "scope": "self",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "skill_press",
            "skill_hold",
            "air_2",
            "forte_stroke_genius",
            "forte_creations_zenith"
          ],
          "triggerStacks": 1,
          "duration": 27
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
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
      "buffs": []
    }
  ],
  "modes": null
});
