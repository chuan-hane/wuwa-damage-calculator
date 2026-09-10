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
      "formula": "56.67%",
      "multiplierByLevel": [28.5,30.84,33.18,36.45,38.79,41.48,45.21,48.95,52.69,56.67]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.34,
      "formula": "56.67% × 2",
      "multiplierByLevel": [57,61.68,66.36,72.9,77.58,82.96,90.42,97.9,105.38,113.34],
      "segmentsByLevel": [[[28.5,2]],[[30.84,2]],[[33.18,2]],[[36.45,2]],[[38.79,2]],[[41.48,2]],[[45.21,2]],[[48.95,2]],[[52.69,2]],[[56.67,2]]]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 85,
      "formula": "85.00%",
      "multiplierByLevel": [42.75,46.26,49.77,54.67,58.18,62.21,67.82,73.43,79.04,85]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 120.9,
      "formula": "40.30% × 3",
      "multiplierByLevel": [60.81,65.79,70.8,77.76,82.74,88.5,96.45,104.43,112.41,120.9],
      "segmentsByLevel": [[[20.27,3]],[[21.93,3]],[[23.6,3]],[[25.92,3]],[[27.58,3]],[[29.5,3]],[[32.15,3]],[[34.81,3]],[[37.47,3]],[[40.3,3]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 188.88,
      "formula": "94.44% × 2",
      "multiplierByLevel": [95,102.8,110.58,121.5,129.28,138.24,150.7,163.18,175.64,188.88],
      "segmentsByLevel": [[[47.5,2]],[[51.4,2]],[[55.29,2]],[[60.75,2]],[[64.64,2]],[[69.12,2]],[[75.35,2]],[[81.59,2]],[[87.82,2]],[[94.44,2]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 95.43,
      "formula": "95.43%",
      "multiplierByLevel": [48,51.94,55.88,61.39,65.32,69.85,76.15,82.44,88.74,95.43]
    },
    {
      "id": "air",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 117.1,
      "formula": "117.10%",
      "multiplierByLevel": [58.9,63.73,68.56,75.33,80.16,85.71,93.44,101.17,108.89,117.1]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 179.43,
      "formula": "179.43%",
      "multiplierByLevel": [90.25,97.66,105.06,115.42,122.82,131.33,143.17,155.01,166.85,179.43]
    },
    {
      "id": "skill",
      "legacyIds": [
        "a9"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 572.58,
      "formula": "286.29% × 2",
      "multiplierByLevel": [288,311.62,335.24,368.3,391.92,419.08,456.86,494.64,532.44,572.58],
      "segmentsByLevel": [[[144,2]],[[155.81,2]],[[167.62,2]],[[184.15,2]],[[195.96,2]],[[209.54,2]],[[228.43,2]],[[247.32,2]],[[266.22,2]],[[286.29,2]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1520.9,
      "formula": "1520.90%",
      "multiplierByLevel": [765,827.73,890.46,978.29,1041.02,1113.16,1213.52,1313.89,1414.26,1520.9]
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
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.51,158.63,171.75,184.87,198.81]
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
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [114.75,124.16,133.57,146.75,156.16,166.98,182.03,197.09,212.14,228.14]
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
      ],
      "multiplierByLevel": [28.35,30.68,33,36.26,38.58,41.26,44.98,48.7,52.42,56.37]
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
      ],
      "multiplierByLevel": [47.25,51.13,55,60.43,64.3,68.76,74.96,81.16,87.36,93.94]
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
      ],
      "multiplierByLevel": [78.3,84.73,91.15,100.14,106.56,113.94,124.21,134.49,144.76,155.67]
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
      ],
      "multiplierByLevel": [112.07,121.25,130.44,143.32,152.5,163.07,177.77,192.47,207.17,222.78],
      "segmentsByLevel": [[[18.68,3],[56.03,1]],[[20.21,3],[60.62,1]],[[21.74,3],[65.22,1]],[[23.89,3],[71.65,1]],[[25.42,3],[76.24,1]],[[27.18,3],[81.53,1]],[[29.63,3],[88.88,1]],[[32.08,3],[96.23,1]],[[34.53,3],[103.58,1]],[[37.13,3],[111.39,1]]]
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
      ],
      "multiplierByLevel": [114.78,124.16,133.59,146.78,156.16,167.01,182.06,197.11,212.15,228.15],
      "segmentsByLevel": [[[14.35,4],[57.38,1]],[[15.52,4],[62.08,1]],[[16.7,4],[66.79,1]],[[18.35,4],[73.38,1]],[[19.52,4],[78.08,1]],[[20.88,4],[83.49,1]],[[22.76,4],[91.02,1]],[[24.64,4],[98.55,1]],[[26.52,4],[106.07,1]],[[28.52,4],[114.07,1]]]
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
      ],
      "multiplierByLevel": [64.8,70.12,75.43,82.87,88.18,94.3,102.8,111.3,119.8,128.83]
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
      ],
      "multiplierByLevel": [83.7,90.57,97.43,107.06,113.93,121.81,132.81,143.77,154.77,166.45],
      "segmentsByLevel": [[[63.7,1],[5,4]],[[68.93,1],[5.41,4]],[[74.15,1],[5.82,4]],[[81.46,1],[6.4,4]],[[86.69,1],[6.81,4]],[[92.69,1],[7.28,4]],[[101.05,1],[7.94,4]],[[109.41,1],[8.59,4]],[[117.77,1],[9.25,4]],[[126.65,1],[9.95,4]]]
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
      ],
      "multiplierByLevel": [62,67.09,72.17,79.29,84.37,90.22,98.36,106.49,114.62,123.27]
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
      ],
      "multiplierByLevel": [159.3,172.37,185.43,203.72,216.78,231.8,252.7,273.6,294.5,316.71]
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
      ],
      "multiplierByLevel": [298,322.44,346.88,381.12,405.56,433.64,472.76,511.84,550.94,592.5],
      "segmentsByLevel": [[[139,2],[5,4]],[[150.4,2],[5.41,4]],[[161.8,2],[5.82,4]],[[177.76,2],[6.4,4]],[[189.16,2],[6.81,4]],[[202.26,2],[7.28,4]],[[220.5,2],[7.94,4]],[[238.74,2],[8.59,4]],[[256.97,2],[9.25,4]],[[276.35,2],[9.95,4]]]
    },
    {
      "id": "outro",
      "legacyIds": [
        "a23"
      ],
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 143.3,
      "formula": "143.30%（每2秒，持续6秒）",
      "fixedLevel": true
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
