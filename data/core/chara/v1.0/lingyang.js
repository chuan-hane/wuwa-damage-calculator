WUWA.register({
  "id": "lingyang",
  "aliases": [],
  "debut": 1,
  "element": "glacio",
  "weaponType": 4,
  "quality": 5,
  "signatureWeaponId": null,
  "defaultWeaponId": "abyss_surges",
  "portrait": "",
  "base": {
    "hp": 10387,
    "attack": 437,
    "defense": 1209,
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
      "id": "lionSpirit",
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
      "multiplier": 59.65,
      "formula": "59.65%",
      "multiplierByLevel": [30,32.46,34.92,38.37,40.83,43.66,47.59,51.53,55.47,59.65]
    },
    {
      "id": "na2",
      "legacyIds": [
        "a2"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%",
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.21,63.46,68.7,73.95,79.53]
    },
    {
      "id": "na3",
      "legacyIds": [
        "a3"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.74,
      "formula": "72.87% × 2",
      "multiplierByLevel": [73.3,79.32,85.34,93.74,99.76,106.66,116.28,125.9,135.52,145.74],
      "segmentsByLevel": [[[36.65,2]],[[39.66,2]],[[42.67,2]],[[46.87,2]],[[49.88,2]],[[53.33,2]],[[58.14,2]],[[62.95,2]],[[67.76,2]],[[72.87,2]]]
    },
    {
      "id": "na4",
      "legacyIds": [
        "a4"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 145.77,
      "formula": "20.41% × 5 + 43.72%",
      "multiplierByLevel": [73.34,79.35,85.35,93.78,99.78,106.7,116.29,125.92,135.56,145.77],
      "segmentsByLevel": [[[10.27,5],[21.99,1]],[[11.11,5],[23.8,1]],[[11.95,5],[25.6,1]],[[13.13,5],[28.13,1]],[[13.97,5],[29.93,1]],[[14.94,5],[32,1]],[[16.28,5],[34.89,1]],[[17.63,5],[37.77,1]],[[18.98,5],[40.66,1]],[[20.41,5],[43.72,1]]]
    },
    {
      "id": "na5",
      "legacyIds": [
        "a5"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 152.49,
      "formula": "152.49%",
      "multiplierByLevel": [76.7,82.99,89.28,98.09,104.38,111.61,121.67,131.74,141.8,152.49]
    },
    {
      "id": "skill_feral_roars",
      "legacyIds": [
        "a6"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 159.06,
      "formula": "79.53% × 2",
      "multiplierByLevel": [80,86.56,93.12,102.32,108.88,116.42,126.92,137.4,147.9,159.06],
      "segmentsByLevel": [[[40,2]],[[43.28,2]],[[46.56,2]],[[51.16,2]],[[54.44,2]],[[58.21,2]],[[63.46,2]],[[68.7,2]],[[73.95,2]],[[79.53,2]]]
    },
    {
      "id": "heavy",
      "legacyIds": [
        "a7"
      ],
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 145.73,
      "formula": "145.73%",
      "multiplierByLevel": [73.3,79.32,85.33,93.74,99.75,106.66,116.28,125.9,135.51,145.73]
    },
    {
      "id": "air",
      "legacyIds": [
        "a8"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 123.27,
      "formula": "123.27%",
      "multiplierByLevel": [62,67.09,72.17,79.29,84.37,90.22,98.36,106.49,114.62,123.27]
    },
    {
      "id": "dodge",
      "legacyIds": [
        "a9"
      ],
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 252.1,
      "formula": "126.05% × 2",
      "multiplierByLevel": [126.8,137.2,147.6,162.16,172.56,184.52,201.16,217.78,234.42,252.1],
      "segmentsByLevel": [[[63.4,2]],[[68.6,2]],[[73.8,2]],[[81.08,2]],[[86.28,2]],[[92.26,2]],[[100.58,2]],[[108.89,2]],[[117.21,2]],[[126.05,2]]]
    },
    {
      "id": "skill_ancient_arts",
      "legacyIds": [
        "a10"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 132.61,
      "formula": "132.61%",
      "multiplierByLevel": [66.7,72.17,77.64,85.3,90.77,97.06,105.81,114.56,123.31,132.61]
    },
    {
      "id": "skill_furious_punches",
      "legacyIds": [
        "a11"
      ],
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 152.5,
      "formula": "76.25% × 2",
      "multiplierByLevel": [76.7,83,89.28,98.1,104.38,111.62,121.68,131.74,141.8,152.5],
      "segmentsByLevel": [[[38.35,2]],[[41.5,2]],[[44.64,2]],[[49.05,2]],[[52.19,2]],[[55.81,2]],[[60.84,2]],[[65.87,2]],[[70.9,2]],[[76.25,2]]]
    },
    {
      "id": "lib",
      "legacyIds": [
        "a12"
      ],
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%",
      "multiplierByLevel": [200,216.4,232.8,255.76,272.16,291.02,317.26,343.5,369.74,397.62]
    },
    {
      "id": "intro",
      "legacyIds": [
        "a13"
      ],
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "99.41% × 2",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [100,108.2,116.4,127.88,136.08,145.52,158.64,171.76,184.88,198.82],
      "segmentsByLevel": [[[50,2]],[[54.1,2]],[[58.2,2]],[[63.94,2]],[[68.04,2]],[[72.76,2]],[[79.32,2]],[[85.88,2]],[[92.44,2]],[[99.41,2]]]
    },
    {
      "id": "forte_glorious_plunge",
      "legacyIds": [
        "a14"
      ],
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 172.37,
      "formula": "172.37%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "lionSpirit",
      "fallbackSkillId": "heavy",
      "multiplierByLevel": [86.7,93.81,100.92,110.88,117.99,126.16,137.54,148.91,160.29,172.37]
    },
    {
      "id": "forte_feral_gyrate_1",
      "legacyIds": [
        "a15"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 290.27,
      "formula": "87.08% × 2 + 116.11%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [146,157.99,169.96,186.73,198.7,212.46,231.6,250.77,269.93,290.27],
      "segmentsByLevel": [[[43.8,2],[58.4,1]],[[47.4,2],[63.19,1]],[[50.99,2],[67.98,1]],[[56.02,2],[74.69,1]],[[59.61,2],[79.48,1]],[[63.74,2],[84.98,1]],[[69.48,2],[92.64,1]],[[75.23,2],[100.31,1]],[[80.98,2],[107.97,1]],[[87.08,2],[116.11,1]]]
    },
    {
      "id": "forte_feral_gyrate_2",
      "legacyIds": [
        "a16"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 190.62,
      "formula": "31.77% × 6",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [95.88,103.74,111.6,122.64,130.5,139.56,152.1,164.7,177.3,190.62],
      "segmentsByLevel": [[[15.98,6]],[[17.29,6]],[[18.6,6]],[[20.44,6]],[[21.75,6]],[[23.26,6]],[[25.35,6]],[[27.45,6]],[[29.55,6]],[[31.77,6]]]
    },
    {
      "id": "forte_mountain_roamer",
      "legacyIds": [
        "a17"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 165.76,
      "formula": "82.88% × 2",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [83.38,90.22,97.06,106.62,113.46,121.32,132.26,143.2,154.14,165.76],
      "segmentsByLevel": [[[41.69,2]],[[45.11,2]],[[48.53,2]],[[53.31,2]],[[56.73,2]],[[60.66,2]],[[66.13,2]],[[71.6,2]],[[77.07,2]],[[82.88,2]]]
    },
    {
      "id": "forte_mountain_roamer_practice",
      "legacyIds": [
        "a18"
      ],
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 248.64,
      "formula": "82.88% × 2 × 150%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [125.07,135.33,145.59,159.93,170.19,181.98,198.39,214.8,231.21,248.64],
      "segmentsByLevel": [[[62.54,2]],[[67.66,2]],[[72.8,2]],[[79.97,2]],[[85.1,2]],[[90.99,2]],[[99.2,2]],[[107.4,2]],[[115.6,2]],[[124.32,2]]]
    },
    {
      "id": "forte_stormy_kicks",
      "legacyIds": [
        "a19"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 480.39,
      "formula": "36.03% × 8 + 192.15%",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [241.69,261.46,281.31,309.04,328.89,351.6,383.32,415.04,446.76,480.39],
      "segmentsByLevel": [[[18.13,8],[96.65,1]],[[19.61,8],[104.58,1]],[[21.1,8],[112.51,1]],[[23.18,8],[123.6,1]],[[24.67,8],[131.53,1]],[[26.37,8],[140.64,1]],[[28.75,8],[153.32,1]],[[31.13,8],[166,1]],[[33.51,8],[178.68,1]],[[36.03,8],[192.15,1]]]
    },
    {
      "id": "forte_tail_strike",
      "legacyIds": [
        "a20"
      ],
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 349.92,
      "formula": "174.96% × 2",
      "impliedStates": [
        "status_1_option_1"
      ],
      "multiplierByLevel": [176,190.44,204.88,225.08,239.52,256.1,279.2,302.28,325.38,349.92],
      "segmentsByLevel": [[[88,2]],[[95.22,2]],[[102.44,2]],[[112.54,2]],[[119.76,2]],[[128.05,2]],[[139.6,2]],[[151.14,2]],[[162.69,2]],[[174.96,2]]]
    },
    {
      "id": "outro_frosty_marks",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 587.94,
      "formula": "587.94%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_stormy_kicks",
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
      "id": "status_1",
      "kind": "form",
      "options": [
        {
          "value": "status_1_option_1"
        }
      ]
    },
    {
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b1",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "intro"
      ]
    },
    {
      "id": "b2",
      "zone": "damageBonus",
      "element": "glacio",
      "value": 50,
      "scope": "self",
      "requiresState": "buff_1_option_1"
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
          "id": "k3a",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 20,
          "scope": "self",
          "requiresState": "buff_1_option_1"
        },
        {
          "id": "k3b",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 10,
          "scope": "self",
          "requiresState": "buff_1_option_1"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4",
          "zone": "damageBonus",
          "element": "glacio",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5",
          "multAdd": 200,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "typeBonus",
          "damageType": "basic",
          "value": 100,
          "scope": "self",
          "requiresState": "status_1_option_1",
          "skills": [
            "forte_feral_gyrate_1",
            "forte_feral_gyrate_2",
            "forte_stormy_kicks"
          ],
          "defaultActive": false
        }
      ]
    }
  ],
  "modes": null
});
