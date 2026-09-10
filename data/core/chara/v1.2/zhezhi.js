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
  "resources": [
    {
      "id": "afflatus",
      "max": 90,
      "defaultValue": "max"
    },
    {
      "id": "painterDelight",
      "max": 2,
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
      "multiplier": 83.52,
      "formula": "41.76% × 2",
      "multiplierByLevel": [42,45.46,48.9,53.72,57.16,61.12,66.64,72.14,77.66,83.52],
      "segmentsByLevel": [[[21,2]],[[22.73,2]],[[24.45,2]],[[26.86,2]],[[28.58,2]],[[30.56,2]],[[33.32,2]],[[36.07,2]],[[38.83,2]],[[41.76,2]]]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 102.75,
      "formula": "20.55% × 5",
      "multiplierByLevel": [51.7,55.9,60.15,66.1,70.3,75.2,81.95,88.75,95.55,102.75],
      "segmentsByLevel": [[[10.34,5]],[[11.18,5]],[[12.03,5]],[[13.22,5]],[[14.06,5]],[[15.04,5]],[[16.39,5]],[[17.75,5]],[[19.11,5]],[[20.55,5]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 133.61,
      "formula": "133.61%",
      "multiplierByLevel": [67.2,72.72,78.23,85.94,91.45,97.79,106.6,115.42,124.24,133.61]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 112.72,
      "formula": "112.72%",
      "multiplierByLevel": [56.7,61.35,66,72.51,77.16,82.5,89.94,97.38,104.82,112.72]
    },
    {
      "id": "air",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 229.53,
      "formula": "24.95% × 5 + 104.78%",
      "multiplierByLevel": [115.45,124.93,134.4,147.65,157.12,167.99,183.15,198.27,213.43,229.53],
      "segmentsByLevel": [[[12.55,5],[52.7,1]],[[13.58,5],[57.03,1]],[[14.61,5],[61.35,1]],[[16.05,5],[67.4,1]],[[17.08,5],[71.72,1]],[[18.26,5],[76.69,1]],[[19.91,5],[83.6,1]],[[21.55,5],[90.52,1]],[[23.2,5],[97.43,1]],[[24.95,5],[104.78,1]]]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.35,
      "formula": "29.07% × 5",
      "multiplierByLevel": [73.1,79.1,85.1,93.5,99.5,106.4,116,125.55,135.15,145.35],
      "segmentsByLevel": [[[14.62,5]],[[15.82,5]],[[17.02,5]],[[18.7,5]],[[19.9,5]],[[21.28,5]],[[23.2,5]],[[25.11,5]],[[27.03,5]],[[29.07,5]]]
    },
    {
      "id": "skill_press",
      "legacyIds": [
        "a7"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 295.26,
      "formula": "98.42% × 3",
      "multiplierByLevel": [148.5,160.68,172.86,189.93,202.08,216.09,235.59,255.06,274.56,295.26],
      "segmentsByLevel": [[[49.5,3]],[[53.56,3]],[[57.62,3]],[[63.31,3]],[[67.36,3]],[[72.03,3]],[[78.53,3]],[[85.02,3]],[[91.52,3]],[[98.42,3]]]
    },
    {
      "id": "skill_hold",
      "legacyIds": [
        "a8"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 295.26,
      "formula": "98.42% × 3",
      "multiplierByLevel": [148.5,160.68,172.86,189.93,202.08,216.09,235.59,255.06,274.56,295.26],
      "segmentsByLevel": [[[49.5,3]],[[53.56,3]],[[57.62,3]],[[63.31,3]],[[67.36,3]],[[72.03,3]],[[78.53,3]],[[85.02,3]],[[91.52,3]],[[98.42,3]]]
    },
    {
      "id": "air_2",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 295.26,
      "formula": "98.42% × 3",
      "multiplierByLevel": [148.5,160.68,172.86,189.93,202.08,216.09,235.59,255.06,274.56,295.26],
      "segmentsByLevel": [[[49.5,3]],[[53.56,3]],[[57.62,3]],[[63.31,3]],[[67.36,3]],[[72.03,3]],[[78.53,3]],[[85.02,3]],[[91.52,3]],[[98.42,3]]]
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
      "formula": "65.21%",
      "multiplierByLevel": [32.8,35.49,38.18,41.95,44.64,47.73,52.04,56.34,60.64,65.21]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a11"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 258.48,
      "formula": "86.16% × 3",
      "multiplierByLevel": [130.02,140.67,151.32,166.26,176.91,189.18,206.22,223.29,240.36,258.48],
      "segmentsByLevel": [[[43.34,3]],[[46.89,3]],[[50.44,3]],[[55.42,3]],[[58.97,3]],[[63.06,3]],[[68.74,3]],[[74.43,3]],[[80.12,3]],[[86.16,3]]]
    },
    {
      "id": "heavy_2",
      "legacyIds": [
        "a12"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 249.03,
      "formula": "83.01% × 3",
      "multiplierByLevel": [125.25,135.54,145.8,160.17,170.46,182.28,198.69,215.13,231.57,249.03],
      "segmentsByLevel": [[[41.75,3]],[[45.18,3]],[[48.6,3]],[[53.39,3]],[[56.82,3]],[[60.76,3]],[[66.23,3]],[[71.71,3]],[[77.19,3]],[[83.01,3]]]
    },
    {
      "id": "forte_stroke_genius",
      "legacyIds": [
        "a13"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 298.22,
      "formula": "298.22%",
      "requiresState": "mechanic_1_option_1",
      "multiplierByLevel": [150,162.3,174.6,191.82,204.12,218.27,237.95,257.63,277.31,298.22]
    },
    {
      "id": "forte_creations_zenith",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 357.87,
      "formula": "119.29% × 3",
      "requiresState": "mechanic_1_option_1",
      "requiresResourceFull": "painterDelight",
      "multiplierByLevel": [180,194.76,209.52,230.19,244.95,261.93,285.54,309.15,332.79,357.87],
      "segmentsByLevel": [[[60,3]],[[64.92,3]],[[69.84,3]],[[76.73,3]],[[81.65,3]],[[87.31,3]],[[95.18,3]],[[103.05,3]],[[110.93,3]],[[119.29,3]]]
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
      "requiresResource": "resource_gate_1",
      "multiplierByLevel": [45.92,49.69,53.45,58.73,62.5,66.82,72.86,78.88,84.9,91.29]
    },
    {
      "id": "k6_white_crane",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 357.87,
      "formula": "119.29% × 3",
      "seq": 6,
      "requiresResource": "resource_gate_2",
      "multiplierByLevel": [180,194.76,209.52,230.19,244.95,261.93,285.54,309.15,332.79,357.87],
      "segmentsByLevel": [[[60,3]],[[64.92,3]],[[69.84,3]],[[76.73,3]],[[81.65,3]],[[87.31,3]],[[95.18,3]],[[103.05,3]],[[110.93,3]],[[119.29,3]]]
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
  "combatStates": [
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
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
    },
    {
      "id": "b4",
      "zone": "amplify",
      "damageType": "resonanceSkill",
      "value": 25,
      "scope": "team",
      "duration": 14,
      "triggerOutro": true,
      "defaultActive": false
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
