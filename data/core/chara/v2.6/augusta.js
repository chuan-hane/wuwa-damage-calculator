WUWA.register({
  "id": "augusta",
  "aliases": [],
  "debut": 2.6,
  "element": "electro",
  "weaponType": 1,
  "quality": 5,
  "signatureWeaponId": "thunderflare_dominion",
  "portrait": "",
  "base": {
    "hp": 10300,
    "attack": 462,
    "defense": 1112,
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
      "id": "battleMomentum",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "authority",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "deterrence",
      "max": 2,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 57.46,
      "formula": "57.46%",
      "multiplierByLevel": [28.9,31.27,33.64,36.96,39.33,42.06,45.85,49.64,53.43,57.46]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134,
      "formula": "67.00% × 2",
      "multiplierByLevel": [67.4,72.94,78.46,86.2,91.72,98.08,106.92,115.76,124.62,134],
      "segmentsByLevel": [[[33.7,2]],[[36.47,2]],[[39.23,2]],[[43.1,2]],[[45.86,2]],[[49.04,2]],[[53.46,2]],[[57.88,2]],[[62.31,2]],[[67,2]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.83,
      "formula": "65.61% × 3",
      "multiplierByLevel": [99,107.13,115.26,126.63,134.73,144.06,157.05,170.04,183.03,196.83],
      "segmentsByLevel": [[[33,3]],[[35.71,3]],[[38.42,3]],[[42.21,3]],[[44.91,3]],[[48.02,3]],[[52.35,3]],[[56.68,3]],[[61.01,3]],[[65.61,3]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 193.89,
      "formula": "64.63% × 3",
      "multiplierByLevel": [97.53,105.54,113.52,124.71,132.72,141.9,154.71,167.49,180.3,193.89],
      "segmentsByLevel": [[[32.51,3]],[[35.18,3]],[[37.84,3]],[[41.57,3]],[[44.24,3]],[[47.3,3]],[[51.57,3]],[[55.83,3]],[[60.1,3]],[[64.63,3]]]
    },
    {
      "id": "heavy_iron",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 139.17,
      "formula": "46.39% × 3",
      "multiplierByLevel": [70.02,75.75,81.48,89.52,95.28,101.88,111.06,120.24,129.42,139.17],
      "segmentsByLevel": [[[23.34,3]],[[25.25,3]],[[27.16,3]],[[29.84,3]],[[31.76,3]],[[33.96,3]],[[37.02,3]],[[40.08,3]],[[43.14,3]],[[46.39,3]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.3,
      "formula": "59.65% × 2",
      "multiplierByLevel": [60,64.92,69.84,76.74,81.66,87.32,95.18,103.06,110.94,119.3],
      "segmentsByLevel": [[[30,2]],[[32.46,2]],[[34.92,2]],[[38.37,2]],[[40.83,2]],[[43.66,2]],[[47.59,2]],[[51.53,2]],[[55.47,2]],[[59.65,2]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134,
      "formula": "67.00% × 2",
      "multiplierByLevel": [67.4,72.94,78.46,86.2,91.72,98.08,106.92,115.76,124.62,134],
      "segmentsByLevel": [[[33.7,2]],[[36.47,2]],[[39.23,2]],[[43.1,2]],[[45.86,2]],[[49.04,2]],[[53.46,2]],[[57.88,2]],[[62.31,2]],[[67,2]]]
    },
    {
      "id": "air_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.3,
      "formula": "59.65% × 2",
      "multiplierByLevel": [60,64.92,69.84,76.74,81.66,87.32,95.18,103.06,110.94,119.3],
      "segmentsByLevel": [[[30,2]],[[32.46,2]],[[34.92,2]],[[38.37,2]],[[40.83,2]],[[43.66,2]],[[47.59,2]],[[51.53,2]],[[55.47,2]],[[59.65,2]]]
    },
    {
      "id": "thunder_back",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 53.68,
      "formula": "53.68%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum",
      "fallbackSkillId": "heavy_iron",
      "multiplierByLevel": [27,29.22,31.43,34.53,36.75,39.29,42.84,46.38,49.92,53.68]
    },
    {
      "id": "thunder_spin",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 425.16,
      "formula": "141.72% × 3",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum",
      "multiplierByLevel": [213.84,231.39,248.91,273.48,291,311.16,339.24,367.29,395.34,425.16],
      "segmentsByLevel": [[[71.28,3]],[[77.13,3]],[[82.97,3]],[[91.16,3]],[[97,3]],[[103.72,3]],[[113.08,3]],[[122.43,3]],[[131.78,3]],[[141.72,3]]]
    },
    {
      "id": "thunder_upper",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "178.93% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum",
      "multiplierByLevel": [180,194.76,209.52,230.2,244.96,261.92,285.54,309.16,332.78,357.86],
      "segmentsByLevel": [[[90,2]],[[97.38,2]],[[104.76,2]],[[115.1,2]],[[122.48,2]],[[130.96,2]],[[142.77,2]],[[154.58,2]],[[166.39,2]],[[178.93,2]]]
    },
    {
      "id": "dodge_heavy_iron",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 139.17,
      "formula": "46.39% × 3",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum",
      "fallbackSkillId": "dodge",
      "multiplierByLevel": [70.02,75.75,81.48,89.52,95.28,101.88,111.06,120.24,129.42,139.17],
      "segmentsByLevel": [[[23.34,3]],[[25.25,3]],[[27.16,3]],[[29.84,3]],[[31.76,3]],[[33.96,3]],[[37.02,3]],[[40.08,3]],[[43.14,3]],[[46.39,3]]]
    },
    {
      "id": "dodge_thunder_back",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 53.68,
      "formula": "53.68%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "authority",
      "fallbackSkillId": "dodge_heavy_iron",
      "multiplierByLevel": [27,29.22,31.43,34.53,36.75,39.29,42.84,46.38,49.92,53.68]
    },
    {
      "id": "skill_slash",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 656.1,
      "formula": "218.70% × 3",
      "multiplierByLevel": [330,357.06,384.12,422.01,449.07,480.21,523.5,566.79,610.08,656.1],
      "segmentsByLevel": [[[110,3]],[[119.02,3]],[[128.04,3]],[[140.67,3]],[[149.69,3]],[[160.07,3]],[[174.5,3]],[[188.93,3]],[[203.36,3]],[[218.7,3]]]
    },
    {
      "id": "lib_oath",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 1099.48,
      "formula": "32.99% × 2 + 131.94% × 3 + 32.99% × 2 + 571.70%",
      "multiplierByLevel": [553,598.41,643.75,707.23,752.57,804.74,877.25,949.83,1022.34,1099.48],
      "segmentsByLevel": [[[16.59,2],[66.36,3],[16.59,2],[287.56,1]],[[17.96,2],[71.81,3],[17.96,2],[311.14,1]],[[19.32,2],[77.25,3],[19.32,2],[334.72,1]],[[21.22,2],[84.87,3],[21.22,2],[367.74,1]],[[22.58,2],[90.31,3],[22.58,2],[391.32,1]],[[24.15,2],[96.57,3],[24.15,2],[418.43,1]],[[26.32,2],[105.27,3],[26.32,2],[456.16,1]],[[28.5,2],[113.98,3],[28.5,2],[493.89,1]],[[30.67,2],[122.68,3],[30.67,2],[531.62,1]],[[32.99,2],[131.94,3],[32.99,2],[571.7,1]]]
    },
    {
      "id": "lib_sun",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 119.29,
      "formula": "119.29%",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "deterrence",
        "value": 2
      },
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [60,64.92,69.84,76.73,81.65,87.31,95.18,103.05,110.93,119.29]
    },
    {
      "id": "lib_immortal",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 1192.93,
      "formula": "238.58% + 894.65% + 5.97% × 10",
      "requiresResource": "resource_gate_3",
      "requiresResourceAtLeast": {
        "id": "deterrence",
        "value": 2
      },
      "impliedStates": [
        "phase_1_option_1"
      ],
      "multiplierByLevel": [600,649.24,698.48,767.32,816.56,873.12,951.8,1030.58,1109.27,1192.93],
      "segmentsByLevel": [[[120,1],[450,1],[3,10]],[[129.84,1],[486.9,1],[3.25,10]],[[139.68,1],[523.8,1],[3.5,10]],[[153.46,1],[575.46,1],[3.84,10]],[[163.3,1],[612.36,1],[4.09,10]],[[174.62,1],[654.8,1],[4.37,10]],[[190.36,1],[713.84,1],[4.76,10]],[[206.1,1],[772.88,1],[5.16,10]],[[221.85,1],[831.92,1],[5.55,10]],[[238.58,1],[894.65,1],[5.97,10]]]
    },
    {
      "id": "intro",
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
      "id": "sunstrike_1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 278.34,
      "formula": "139.17% × 2",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "authority",
      "fallbackSkillId": "skill_slash",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [140,151.48,162.96,179.04,190.52,203.72,222.1,240.46,258.82,278.34],
      "segmentsByLevel": [[[70,2]],[[75.74,2]],[[81.48,2]],[[89.52,2]],[[95.26,2]],[[101.86,2]],[[111.05,2]],[[120.23,2]],[[129.41,2]],[[139.17,2]]]
    },
    {
      "id": "sunstrike_2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 278.35,
      "formula": "222.67% + 27.84% × 2",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "authority",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [140,151.49,162.97,179.05,190.53,203.74,222.09,240.46,258.84,278.35],
      "segmentsByLevel": [[[112,1],[14,2]],[[121.19,1],[15.15,2]],[[130.37,1],[16.3,2]],[[143.23,1],[17.91,2]],[[152.41,1],[19.06,2]],[[162.98,1],[20.38,2]],[[177.67,1],[22.21,2]],[[192.36,1],[24.05,2]],[[207.06,1],[25.89,2]],[[222.67,1],[27.84,2]]]
    },
    {
      "id": "sunstrike_3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 865.83,
      "formula": "86.59% + 779.24%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "authority",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [435.5,471.22,506.93,556.93,592.64,633.7,690.85,747.98,805.12,865.83],
      "segmentsByLevel": [[[43.55,1],[391.95,1]],[[47.13,1],[424.09,1]],[[50.7,1],[456.23,1]],[[55.7,1],[501.23,1]],[[59.27,1],[533.37,1]],[[63.37,1],[570.33,1]],[[69.09,1],[621.76,1]],[[74.8,1],[673.18,1]],[[80.52,1],[724.6,1]],[[86.59,1],[779.24,1]]]
    },
    {
      "id": "dodge_sunstrike",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 278.34,
      "formula": "139.17% × 2",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "authority",
      "fallbackSkillId": "dodge",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [140,151.48,162.96,179.04,190.52,203.72,222.1,240.46,258.82,278.34],
      "segmentsByLevel": [[[70,2]],[[75.74,2]],[[81.48,2]],[[89.52,2]],[[95.26,2]],[[101.86,2]],[[111.05,2]],[[120.23,2]],[[129.41,2]],[[139.17,2]]]
    },
    {
      "id": "c6_wrath",
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 200,
      "formula": "100% × 2",
      "seq": 6,
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "lib_immortal",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 20,
  "echoSet2": 3,
  "combatStates": [
    {
      "id": "phase_1",
      "kind": "phase",
      "options": [
        {
          "value": "phase_1_option_1"
        }
      ]
    },
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_crown_electro",
      "zone": "damageBonus",
      "element": "electro",
      "value": 15,
      "scope": "self",
      "maxStacks": 1,
      "stackGroup": "augusta_crown",
      "stackRange": [
        1,
        1
      ],
      "stackMaxBySeq": [
        {
          "seq": 1,
          "max": 2
        },
        {
          "seq": 6,
          "max": 4
        }
      ],
      "defaultStacks": 0,
      "defaultActive": false
    },
    {
      "id": "b_outro_amp",
      "zone": "amplify",
      "value": 15,
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
          "id": "k1_crown_cd",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "maxStacks": 2,
          "stackGroup": "augusta_crown",
          "stackRange": [
            1,
            2
          ],
          "stackMaxBySeq": [
            {
              "seq": 1,
              "max": 2
            },
            {
              "seq": 6,
              "max": 4
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 1
        },
        {
          "id": "k1_crown_electro_extra",
          "zone": "damageBonus",
          "element": "electro",
          "value": 15,
          "scope": "self",
          "maxStacks": 1,
          "stackGroup": "augusta_crown",
          "stackRange": [
            2,
            2
          ],
          "stackMaxBySeq": [
            {
              "seq": 1,
              "max": 2
            },
            {
              "seq": 6,
              "max": 4
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 1
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_crown_cr",
          "zone": "critRate",
          "value": 40,
          "scope": "self",
          "maxStacks": 2,
          "stackGroup": "augusta_crown",
          "stackRange": [
            1,
            2
          ],
          "stackMaxBySeq": [
            {
              "seq": 1,
              "max": 2
            },
            {
              "seq": 6,
              "max": 4
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "triggerStacks": 1
        },
        {
          "id": "k2_overcap_cd",
          "zone": "critDamage",
          "scope": "self",
          "scaleBy": {
            "stat": "critRate",
            "statBonus": -100,
            "rate": 2,
            "min": 0,
            "cap": 100,
            "includeActiveBuffs": true
          }
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_mult",
          "zone": "skillMultBonus",
          "value": 25,
          "scope": "self",
          "skills": [
            "thunder_back",
            "dodge_thunder_back",
            "thunder_spin",
            "thunder_upper",
            "sunstrike_3",
            "lib_sun",
            "lib_immortal"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
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
      "buffs": [
        {
          "id": "k6_crown_electro_extra",
          "zone": "damageBonus",
          "element": "electro",
          "value": 30,
          "scope": "self",
          "maxStacks": 2,
          "stackGroup": "augusta_crown",
          "stackRange": [
            3,
            4
          ],
          "stackMaxBySeq": [
            {
              "seq": 6,
              "max": 4
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "thunder_spin",
            "thunder_upper"
          ],
          "triggerStacks": 2
        },
        {
          "id": "k6_crown_cd_extra",
          "zone": "critDamage",
          "value": 30,
          "scope": "self",
          "maxStacks": 2,
          "stackGroup": "augusta_crown",
          "stackRange": [
            3,
            4
          ],
          "stackMaxBySeq": [
            {
              "seq": 6,
              "max": 4
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "thunder_spin",
            "thunder_upper"
          ],
          "triggerStacks": 2
        },
        {
          "id": "k6_crown_cr_extra",
          "zone": "critRate",
          "value": 40,
          "scope": "self",
          "maxStacks": 2,
          "stackGroup": "augusta_crown",
          "stackRange": [
            3,
            4
          ],
          "stackMaxBySeq": [
            {
              "seq": 6,
              "max": 4
            }
          ],
          "defaultStacks": 0,
          "defaultActive": false,
          "triggerSkills": [
            "thunder_spin",
            "thunder_upper"
          ],
          "triggerStacks": 2
        },
        {
          "id": "k6_overcap_cd",
          "zone": "critDamage",
          "scope": "self",
          "scaleBy": {
            "stat": "critRate",
            "statBonus": -150,
            "rate": 2,
            "min": 0,
            "cap": 50,
            "includeActiveBuffs": true
          }
        }
      ]
    }
  ],
  "modes": null
});
