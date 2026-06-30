WUWA.register({
  "id": "mortefi",
  "aliases": [],
  "debut": 1,
  "element": "fusion",
  "weaponType": 3,
  "quality": 4,
  "signatureWeaponId": null,
  "defaultWeaponId": "cadenza",
  "portrait": "",
  "base": {
    "hp": 10025,
    "attack": 250,
    "defense": 1136,
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
      "id": "anger",
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
      "multiplier": 48.3,
      "formula": "48.30%"
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 81.56,
      "formula": "40.78% × 2"
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 107.3,
      "formula": "107.30%"
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 211.01,
      "formula": "21.02% × 4 + 126.93%"
    },
    {
      "id": "air",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 46.5,
      "formula": "23.25% × 2"
    },
    {
      "id": "aim",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 97.7,
      "formula": "97.70%"
    },
    {
      "id": "aim_full",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 167.01,
      "formula": "167.01%"
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 194.98,
      "formula": "194.98%"
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 208.76,
      "formula": "208.76%"
    },
    {
      "id": "lib_violent_finale",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 159.05,
      "formula": "159.05%"
    },
    {
      "id": "lib_marcato",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 31.81,
      "formula": "31.81%"
    },
    {
      "id": "intro",
      "legacyIds": [
        "a12"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 168.99,
      "formula": "168.99%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_fury_fugue",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 326.05,
      "formula": "326.05%",
      "requiresResource": "100怒气值",
      "requiresResourceAtLeast": {
        "id": "anger",
        "value": 100
      },
      "fallbackSkillId": "skill"
    }
  ],
  "defaultSkillId": "lib_marcato",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 2,
  "buffs": [
    {
      "id": "b1",
      "zone": "skillMultBonus",
      "value": 25,
      "scope": "self",
      "skills": [
        "forte_fury_fugue"
      ],
      "defaultActive": false,
      "triggerSkills": [
        "skill"
      ],
      "duration": 8
    },
    {
      "id": "b2",
      "zone": "skillMultBonus",
      "value": 75,
      "scope": "self",
      "skills": [
        "lib_marcato"
      ],
      "maxStacks": 50,
      "defaultStacks": 0,
      "defaultActive": false
    },
    {
      "id": "b3",
      "zone": "amplify",
      "damageType": "heavy",
      "value": 38,
      "scope": "team",
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
          "id": "k3",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "skills": [
            "lib_marcato"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": []
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
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "lib_violent_finale"
          ],
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
