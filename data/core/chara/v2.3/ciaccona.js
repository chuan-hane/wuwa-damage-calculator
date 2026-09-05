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
      "formula": "57.06%",
      "multiplierByLevel": [28.7,31.06,33.41,36.71,39.06,41.77,45.53,49.3,53.06,57.06]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 163.04,
      "formula": "48.91% + 24.46% × 2 + 65.21%",
      "multiplierByLevel": [82,88.73,95.46,104.87,111.6,119.33,130.11,140.86,151.6,163.04],
      "segmentsByLevel": [[[24.6,1],[12.3,2],[32.8,1]],[[26.62,1],[13.31,2],[35.49,1]],[[28.64,1],[14.32,2],[38.18,1]],[[31.46,1],[15.73,2],[41.95,1]],[[33.48,1],[16.74,2],[44.64,1]],[[35.8,1],[17.9,2],[47.73,1]],[[39.03,1],[19.52,2],[52.04,1]],[[42.26,1],[21.13,2],[56.34,1]],[[45.48,1],[22.74,2],[60.64,1]],[[48.91,1],[24.46,2],[65.21,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 132.08,
      "formula": "33.02% × 4",
      "multiplierByLevel": [66.44,71.88,77.32,84.96,90.4,96.68,105.4,114.08,122.8,132.08],
      "segmentsByLevel": [[[16.61,4]],[[17.97,4]],[[19.33,4]],[[21.24,4]],[[22.6,4]],[[24.17,4]],[[26.35,4]],[[28.52,4]],[[30.7,4]],[[33.02,4]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 244.56,
      "formula": "61.14% × 4",
      "triggerEvents": [
        "applyAeroErosion"
      ],
      "multiplierByLevel": [123,133.12,143.2,157.32,167.4,179,195.12,211.28,227.4,244.56],
      "segmentsByLevel": [[[30.75,4]],[[33.28,4]],[[35.8,4]],[[39.33,4]],[[41.85,4]],[[44.75,4]],[[48.78,4]],[[52.82,4]],[[56.85,4]],[[61.14,4]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 107.6,
      "formula": "107.60%",
      "multiplierByLevel": [54.12,58.56,63,69.21,73.65,78.76,85.86,92.96,100.06,107.6]
    },
    {
      "id": "aim",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 32.61,
      "formula": "32.61%",
      "multiplierByLevel": [16.4,17.75,19.09,20.98,22.32,23.87,26.02,28.17,30.32,32.61]
    },
    {
      "id": "aim_full",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 73.37,
      "formula": "73.37%",
      "multiplierByLevel": [36.9,39.93,42.96,47.19,50.22,53.7,58.54,63.38,68.22,73.37]
    },
    {
      "id": "air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 110.86,
      "formula": "55.43% × 2",
      "multiplierByLevel": [55.76,60.34,64.92,71.32,75.88,81.14,88.46,95.78,103.1,110.86],
      "segmentsByLevel": [[[27.88,2]],[[30.17,2]],[[32.46,2]],[[35.66,2]],[[37.94,2]],[[40.57,2]],[[44.23,2]],[[47.89,2]],[[51.55,2]],[[55.43,2]]]
    },
    {
      "id": "air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 97.84,
      "formula": "24.46% × 4",
      "multiplierByLevel": [49.2,53.24,57.28,62.92,66.96,71.6,78.08,84.52,90.96,97.84],
      "segmentsByLevel": [[[12.3,4]],[[13.31,4]],[[14.32,4]],[[15.73,4]],[[16.74,4]],[[17.9,4]],[[19.52,4]],[[21.13,4]],[[22.74,4]],[[24.46,4]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 228.68,
      "formula": "57.17% × 4",
      "multiplierByLevel": [115.04,124.48,133.92,147.12,156.52,167.4,182.48,197.56,212.64,228.68],
      "segmentsByLevel": [[[28.76,4]],[[31.12,4]],[[33.48,4]],[[36.78,4]],[[39.13,4]],[[41.85,4]],[[45.62,4]],[[49.39,4]],[[53.16,4]],[[57.17,4]]]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 161.56,
      "formula": "40.39% × 4",
      "triggerEvents": [
        "applyAeroErosion"
      ],
      "multiplierByLevel": [81.28,87.92,94.6,103.92,110.6,118.24,128.92,139.56,150.24,161.56],
      "segmentsByLevel": [[[20.32,4]],[[21.98,4]],[[23.65,4]],[[25.98,4]],[[27.65,4]],[[29.56,4]],[[32.23,4]],[[34.89,4]],[[37.56,4]],[[40.39,4]]]
    },
    {
      "id": "lib_improv",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1100.42,
      "formula": "1100.42%",
      "triggerEvents": [
        "shield"
      ],
      "multiplierByLevel": [553.5,598.89,644.28,707.82,753.21,805.4,878.02,950.64,1023.26,1100.42]
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
      ],
      "multiplierByLevel": [61.6,66.6,71.6,78.8,83.8,89.6,97.6,105.8,113.8,122.4],
      "segmentsByLevel": [[[3.08,20]],[[3.33,20]],[[3.58,20]],[[3.94,20]],[[4.19,20]],[[4.48,20]],[[4.88,20]],[[5.29,20]],[[5.69,20]],[[6.12,20]]]
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
      ],
      "multiplierByLevel": [61.6,66.6,71.6,78.8,83.8,89.6,97.6,105.8,113.8,122.4],
      "segmentsByLevel": [[[3.08,20]],[[3.33,20]],[[3.58,20]],[[3.94,20]],[[4.19,20]],[[4.48,20]],[[4.88,20]],[[5.29,20]],[[5.69,20]],[[6.12,20]]]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 189.11,
      "formula": "189.11%",
      "triggerEvents": [
        "applyAeroErosion"
      ],
      "multiplierByLevel": [95.12,102.92,110.72,121.64,129.44,138.41,150.89,163.37,175.85,189.11]
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
      ],
      "multiplierByLevel": [315.95,341.91,367.76,403.99,429.94,459.74,501.16,542.58,584.11,628.13],
      "segmentsByLevel": [[[15.8,10],[157.95,1]],[[17.1,10],[170.91,1]],[[18.39,10],[183.86,1]],[[20.2,10],[201.99,1]],[[21.5,10],[214.94,1]],[[22.99,10],[229.84,1]],[[25.06,10],[250.56,1]],[[27.13,10],[271.28,1]],[[29.21,10],[292.01,1]],[[31.41,10],[314.03,1]]]
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
      ],
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "lib_improv",
  "skillEvents": [
    {
      "skills": [
        "na4",
        "skill",
        "lib_tonic_green",
        "intro",
        "forte_downbeat"
      ],
      "event": "applyAeroErosion",
      "stacks": 1
    },
    {
      "skills": [
        "lib_tonic_yellow"
      ],
      "event": "applySpectroFrazzle",
      "stacks": 1
    }
  ],
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
      "duration": 30,
      "triggerOutro": true,
      "defaultActive": false
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
