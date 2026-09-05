WUWA.register({
  "id": "rover_spectro",
  "aliases": [],
  "debut": 1,
  "element": "spectro",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "lightNoise"
  ],
  "signatureWeaponId": "emerald_of_genesis",
  "defaultWeaponId": "emerald_of_genesis",
  "portrait": "",
  "base": {
    "hp": 11400,
    "attack": 375,
    "defense": 1368,
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
      "id": "diminutiveSound",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.15,
      "formula": "59.15%",
      "multiplierByLevel": [29.75,32.19,34.63,38.05,40.49,43.29,47.2,51.1,55,59.15]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.05,
      "formula": "76.05%",
      "multiplierByLevel": [38.25,41.39,44.53,48.92,52.06,55.66,60.68,65.7,70.72,76.05]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.05,
      "formula": "15.21% × 5",
      "multiplierByLevel": [38.25,41.4,44.55,48.95,52.1,55.7,60.7,65.7,70.75,76.05],
      "segmentsByLevel": [[[7.65,5]],[[8.28,5]],[[8.91,5]],[[9.79,5]],[[10.42,5]],[[11.14,5]],[[12.14,5]],[[13.14,5]],[[14.15,5]],[[15.21,5]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 130.13,
      "formula": "130.13%",
      "multiplierByLevel": [65.45,70.82,76.19,83.7,89.07,95.24,103.83,112.42,121,130.13]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 96.35,
      "formula": "19.27% × 5",
      "multiplierByLevel": [48.45,52.45,56.4,62,65.95,70.5,76.9,83.25,89.6,96.35],
      "segmentsByLevel": [[[9.69,5]],[[10.49,5]],[[11.28,5]],[[12.4,5]],[[13.19,5]],[[14.1,5]],[[15.38,5]],[[16.65,5]],[[17.92,5]],[[19.27,5]]]
    },
    {
      "id": "heavy_resonance",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 76.05,
      "formula": "76.05%",
      "multiplierByLevel": [38.25,41.39,44.53,48.92,52.06,55.66,60.68,65.7,70.72,76.05]
    },
    {
      "id": "heavy_echo",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 126.75,
      "formula": "126.75%",
      "multiplierByLevel": [63.75,68.98,74.21,81.53,86.76,92.77,101.13,109.5,117.86,126.75]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%",
      "multiplierByLevel": [52.7,57.03,61.35,67.4,71.72,76.69,83.6,90.52,97.43,104.78]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 195.34,
      "formula": "195.34%",
      "multiplierByLevel": [98.25,106.31,114.37,125.65,133.7,142.97,155.86,168.75,181.64,195.34]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 236.19,
      "formula": "236.19%",
      "multiplierByLevel": [118.8,128.55,138.29,151.93,161.67,172.87,188.46,204.04,219.63,236.19]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 874.77,
      "formula": "198.81% + 675.96%",
      "multiplierByLevel": [440,476.08,512.16,562.68,598.76,640.25,697.98,755.7,813.43,874.77],
      "segmentsByLevel": [[[100,1],[340,1]],[[108.2,1],[367.88,1]],[[116.4,1],[395.76,1]],[[127.88,1],[434.8,1]],[[136.08,1],[462.68,1]],[[145.51,1],[494.74,1]],[[158.63,1],[539.35,1]],[[171.75,1],[583.95,1]],[[184.87,1],[628.56,1]],[[198.81,1],[675.96,1]]]
    },
    {
      "id": "intro",
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
      "id": "forte_spin",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 258.16,
      "formula": "129.08% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "diminutiveSound",
        "value": 50
      },
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [129.86,140.5,151.16,166.06,176.7,188.96,206,223.02,240.06,258.16],
      "segmentsByLevel": [[[64.93,2]],[[70.25,2]],[[75.58,2]],[[83.03,2]],[[88.35,2]],[[94.48,2]],[[103,2]],[[111.51,2]],[[120.03,2]],[[129.08,2]]]
    },
    {
      "id": "forte_spin_wheel",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 39.77,
      "formula": "39.77%",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "diminutiveSound",
        "value": 50
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [20,21.64,23.28,25.58,27.22,29.11,31.73,34.35,36.98,39.77]
    },
    {
      "id": "forte_echo1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 79.53,
      "formula": "79.53%",
      "requiresResource": "resource_gate_2",
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    },
    {
      "id": "forte_echo2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 159.05,
      "formula": "159.05%",
      "requiresResource": "resource_gate_2",
      "multiplierByLevel": [80,86.56,93.12,102.31,108.87,116.41,126.91,137.4,147.9,159.05]
    }
  ],
  "defaultSkillId": "burst",
  "skillEvents": [
    {
      "skills": [
        "burst"
      ],
      "event": "applySpectroFrazzle",
      "stacks": 6
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 5,
  "buffs": [
    {
      "id": "b_reticence",
      "zone": "amplify",
      "value": 60,
      "scope": "self",
      "skills": [
        "forte_echo1",
        "forte_echo2"
      ]
    },
    {
      "id": "b_silent_listener",
      "zone": "attackPercent",
      "value": 15,
      "scope": "self",
      "defaultActive": false,
      "duration": 5
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
            "skill",
            "forte_spin",
            "forte_spin_wheel"
          ],
          "triggerEvents": [
            "castResonanceSkill"
          ],
          "duration": 7
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "energyRegen",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": []
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 40,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "resShred",
          "element": "spectro",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
