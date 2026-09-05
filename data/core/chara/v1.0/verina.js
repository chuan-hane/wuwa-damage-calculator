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
      "id": "photosynthesisEnergy",
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
      "formula": "37.86%",
      "multiplierByLevel": [19.04,20.61,22.17,24.35,25.91,27.71,30.21,32.7,35.2,37.86]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 51.16,
      "formula": "51.16%",
      "multiplierByLevel": [25.73,27.84,29.95,32.91,35.02,37.44,40.82,44.19,47.57,51.16]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 51.16,
      "formula": "25.58% × 2",
      "multiplierByLevel": [25.74,27.84,29.96,32.92,35.02,37.44,40.82,44.2,47.58,51.16],
      "segmentsByLevel": [[[12.87,2]],[[13.92,2]],[[14.98,2]],[[16.46,2]],[[17.51,2]],[[18.72,2]],[[20.41,2]],[[22.1,2]],[[23.79,2]],[[25.58,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 67.32,
      "formula": "67.32%",
      "multiplierByLevel": [33.86,36.64,39.42,43.3,46.08,49.27,53.72,58.16,62.6,67.32]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 71.62,
      "formula": "71.62%",
      "multiplierByLevel": [36.03,38.98,41.93,46.07,49.02,52.42,57.14,61.87,66.6,71.62]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 99.41,
      "formula": "99.41%",
      "multiplierByLevel": [50,54.1,58.2,63.94,68.04,72.76,79.32,85.88,92.44,99.41]
    },
    {
      "id": "na1_2",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 56.37,
      "formula": "56.37%",
      "multiplierByLevel": [28.35,30.68,33,36.26,38.58,41.26,44.98,48.7,52.42,56.37]
    },
    {
      "id": "na2_2",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 53.19,
      "formula": "53.19%",
      "multiplierByLevel": [26.75,28.95,31.14,34.21,36.41,38.93,42.44,45.95,49.46,53.19]
    },
    {
      "id": "na3_2",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.26,
      "formula": "25.42% × 3",
      "multiplierByLevel": [38.37,41.52,44.64,49.05,52.2,55.83,60.84,65.88,70.92,76.26],
      "segmentsByLevel": [[[12.79,3]],[[13.84,3]],[[14.88,3]],[[16.35,3]],[[17.4,3]],[[18.61,3]],[[20.28,3]],[[21.96,3]],[[23.64,3]],[[25.42,3]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a10"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 61.64,
      "formula": "61.64%",
      "multiplierByLevel": [31,33.55,36.09,39.65,42.19,45.11,49.18,53.25,57.31,61.64]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a11"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 129.23,
      "formula": "129.23%",
      "multiplierByLevel": [65,70.33,75.66,83.13,88.46,94.59,103.11,111.64,120.17,129.23]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 178.95,
      "formula": "35.79% × 3 + 71.58%",
      "multiplierByLevel": [90,97.4,104.79,115.1,122.49,130.99,142.79,154.59,166.4,178.95],
      "segmentsByLevel": [[[18,3],[36,1]],[[19.48,3],[38.96,1]],[[20.96,3],[41.91,1]],[[23.02,3],[46.04,1]],[[24.5,3],[48.99,1]],[[26.2,3],[52.39,1]],[[28.56,3],[57.11,1]],[[30.92,3],[61.83,1]],[[33.28,3],[66.56,1]],[[35.79,3],[71.58,1]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a13"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
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
      "formula": "9.95%",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [5,5.41,5.82,6.4,6.81,7.28,7.94,8.59,9.25,9.95]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a15"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 99.41,
      "formula": "99.41%",
      "multiplierByLevel": [50,54.1,58.2,63.94,68.04,72.76,79.32,85.88,92.44,99.41]
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
      "requiresResource": "photosynthesisEnergy",
      "fallbackSkillId": "heavy",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [81.67,88.37,95.07,104.45,111.14,118.84,129.55,140.27,150.99,162.37],
      "segmentsByLevel": [[[32.67,1],[49,1]],[[35.35,1],[53.02,1]],[[38.03,1],[57.04,1]],[[41.78,1],[62.67,1]],[[44.46,1],[66.68,1]],[[47.54,1],[71.3,1]],[[51.82,1],[77.73,1]],[[56.11,1],[84.16,1]],[[60.4,1],[90.59,1]],[[64.95,1],[97.42,1]]]
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
      "requiresResource": "photosynthesisEnergy",
      "fallbackSkillId": "na1_2",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [34.02,36.81,39.6,43.51,46.3,49.51,53.97,58.43,62.9,67.64]
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
      "requiresResource": "photosynthesisEnergy",
      "fallbackSkillId": "na2_2",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [32.1,34.74,37.37,41.05,43.69,46.71,50.93,55.14,59.35,63.82]
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
      "requiresResource": "photosynthesisEnergy",
      "fallbackSkillId": "na3_2",
      "triggerEvents": [
        "heal"
      ],
      "multiplierByLevel": [46.02,49.8,53.58,58.86,62.64,66.99,73.02,79.05,85.08,91.5],
      "segmentsByLevel": [[[15.34,3]],[[16.6,3]],[[17.86,3]],[[19.62,3]],[[20.88,3]],[[22.33,3]],[[24.34,3]],[[26.35,3]],[[28.36,3]],[[30.5,3]]]
    },
    {
      "id": "c6_coordinated_blossom",
      "category": "resonanceChain",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 9.95,
      "formula": "9.95%",
      "seq": 6,
      "triggeredDamage": true,
      "triggerEvents": [
        "heal"
      ],
      "levelCategory": "resonanceLiberation",
      "multiplierByLevel": [5,5.41,5.82,6.4,6.81,7.28,7.94,8.59,9.25,9.95]
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
      "duration": 30,
      "triggerOutro": true,
      "defaultActive": false
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
