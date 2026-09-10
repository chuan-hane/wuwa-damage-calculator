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
      "id": "annoyance",
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
      "formula": "48.30%",
      "multiplierByLevel": [24.29,26.29,28.28,31.07,33.06,35.35,38.54,41.72,44.91,48.3]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 81.56,
      "formula": "40.78% × 2",
      "multiplierByLevel": [41.02,44.4,47.76,52.46,55.84,59.7,65.08,70.46,75.84,81.56],
      "segmentsByLevel": [[[20.51,2]],[[22.2,2]],[[23.88,2]],[[26.23,2]],[[27.92,2]],[[29.85,2]],[[32.54,2]],[[35.23,2]],[[37.92,2]],[[40.78,2]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 107.3,
      "formula": "107.30%",
      "multiplierByLevel": [53.97,58.4,62.83,69.02,73.45,78.54,85.62,92.7,99.78,107.3]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 211.01,
      "formula": "21.02% × 4 + 126.93%",
      "multiplierByLevel": [106.12,114.84,123.55,135.72,144.44,154.46,168.35,182.29,196.23,211.01],
      "segmentsByLevel": [[[10.57,4],[63.84,1]],[[11.44,4],[69.08,1]],[[12.31,4],[74.31,1]],[[13.52,4],[81.64,1]],[[14.39,4],[86.88,1]],[[15.39,4],[92.9,1]],[[16.77,4],[101.27,1]],[[18.16,4],[109.65,1]],[[19.55,4],[118.03,1]],[[21.02,4],[126.93,1]]]
    },
    {
      "id": "air",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 46.5,
      "formula": "23.25% × 2",
      "multiplierByLevel": [23.38,25.3,27.22,29.9,31.82,34.04,37.1,40.16,43.24,46.5],
      "segmentsByLevel": [[[11.69,2]],[[12.65,2]],[[13.61,2]],[[14.95,2]],[[15.91,2]],[[17.02,2]],[[18.55,2]],[[20.08,2]],[[21.62,2]],[[23.25,2]]]
    },
    {
      "id": "aim",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 97.7,
      "formula": "97.70%",
      "multiplierByLevel": [49.14,53.17,57.2,62.85,66.87,71.51,77.96,84.4,90.85,97.7]
    },
    {
      "id": "aim_full",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 167.01,
      "formula": "167.01%",
      "multiplierByLevel": [84,90.89,97.78,107.42,114.31,122.23,133.25,144.27,155.3,167.01]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 194.98,
      "formula": "194.98%",
      "multiplierByLevel": [98.07,106.12,114.16,125.42,133.46,142.71,155.57,168.44,181.31,194.98]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 208.76,
      "formula": "208.76%",
      "multiplierByLevel": [105,113.61,122.22,134.28,142.89,152.79,166.57,180.34,194.12,208.76]
    },
    {
      "id": "lib_violent_finale",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 159.05,
      "formula": "159.05%",
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
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
      "formula": "31.81%",
      "multiplierByLevel": [16,17.32,18.63,20.47,21.78,23.29,25.39,27.48,29.58,31.81]
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
      ],
      "multiplierByLevel": [85,91.97,98.94,108.7,115.67,123.69,134.84,145.99,157.14,168.99]
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
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "annoyance",
        "value": 100
      },
      "fallbackSkillId": "skill",
      "multiplierByLevel": [164,177.45,190.9,209.73,223.18,238.64,260.16,281.67,303.19,326.05]
    },
    {
      "id": "c1_marcato_duet",
      "category": "resonanceChain",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 63.62,
      "formula": "31.81% × 2",
      "seq": 1,
      "requiresResource": "burning_rhapsody_active",
      "triggeredDamage": true,
      "levelCategory": "resonanceLiberation",
      "multiplierByLevel": [32,34.64,37.26,40.94,43.56,46.58,50.78,54.96,59.16,63.62],
      "segmentsByLevel": [[[16,2]],[[17.32,2]],[[18.63,2]],[[20.47,2]],[[21.78,2]],[[23.29,2]],[[25.39,2]],[[27.48,2]],[[29.58,2]],[[31.81,2]]]
    },
    {
      "id": "c5_marcato_quartet",
      "category": "resonanceChain",
      "damageType": "resonanceLiberation",
      "damageTags": [
        "coordinated"
      ],
      "multiplier": 63.62,
      "formula": "31.81% × 50% × 4",
      "seq": 5,
      "triggeredDamage": true,
      "levelCategory": "resonanceLiberation",
      "multiplierByLevel": [32,34.64,37.26,40.94,43.56,46.58,50.78,54.96,59.16,63.62],
      "segmentsByLevel": [[[8,4]],[[8.66,4]],[[9.315,4]],[[10.235,4]],[[10.89,4]],[[11.645,4]],[[12.695,4]],[[13.74,4]],[[14.79,4]],[[15.905,4]]]
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
      "duration": 14,
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
