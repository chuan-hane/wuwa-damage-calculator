WUWA.register({
  "id": "phoebe",
  "aliases": [],
  "debut": 2.1,
  "element": "spectro",
  "weaponType": 5,
  "quality": 5,
  "effectTypes": [
    "lightNoise"
  ],
  "signatureWeaponId": "luminous_hymn",
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
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "gospel",
      "max": 60,
      "defaultValue": "max"
    },
    {
      "id": "prayer",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 29.53,
      "formula": "29.53%",
      "multiplierByLevel": [14.85,16.07,17.29,19,20.21,21.61,23.56,25.51,27.46,29.53]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 49.71,
      "formula": "22.37% + 27.34%",
      "multiplierByLevel": [25,27.06,29.11,31.98,34.03,36.38,39.67,42.95,46.22,49.71],
      "segmentsByLevel": [[[11.25,1],[13.75,1]],[[12.18,1],[14.88,1]],[[13.1,1],[16.01,1]],[[14.39,1],[17.59,1]],[[15.31,1],[18.72,1]],[[16.37,1],[20.01,1]],[[17.85,1],[21.82,1]],[[19.33,1],[23.62,1]],[[20.8,1],[25.42,1]],[[22.37,1],[27.34,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.92,
      "formula": "14.24% × 8",
      "multiplierByLevel": [57.36,62,66.72,73.28,78,83.44,90.96,98.48,106,113.92],
      "segmentsByLevel": [[[7.17,8]],[[7.75,8]],[[8.34,8]],[[9.16,8]],[[9.75,8]],[[10.43,8]],[[11.37,8]],[[12.31,8]],[[13.25,8]],[[14.24,8]]]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 165.4,
      "formula": "41.35% × 4",
      "multiplierByLevel": [83.2,90,96.84,106.4,113.2,121.04,131.96,142.88,153.8,165.4],
      "segmentsByLevel": [[[20.8,4]],[[22.5,4]],[[24.21,4]],[[26.6,4]],[[28.3,4]],[[30.26,4]],[[32.99,4]],[[35.72,4]],[[38.45,4]],[[41.35,4]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.46,
      "formula": "46.23% × 2",
      "multiplierByLevel": [46.5,50.32,54.14,59.48,63.28,67.68,73.78,79.88,85.98,92.46],
      "segmentsByLevel": [[[23.25,2]],[[25.16,2]],[[27.07,2]],[[29.74,2]],[[31.64,2]],[[33.84,2]],[[36.89,2]],[[39.94,2]],[[42.99,2]],[[46.23,2]]]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 172.64,
      "formula": "21.58% × 8",
      "multiplierByLevel": [86.88,94,101.12,111.12,118.24,126.4,137.76,149.2,160.56,172.64],
      "segmentsByLevel": [[[10.86,8]],[[11.75,8]],[[12.64,8]],[[13.89,8]],[[14.78,8]],[[15.8,8]],[[17.22,8]],[[18.65,8]],[[20.07,8]],[[21.58,8]]]
    },
    {
      "id": "chamuel_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 263.04,
      "formula": "43.84% × 6",
      "impliedStates": [
        "field_1_option_2"
      ],
      "multiplierByLevel": [132.3,143.16,154.02,169.2,180.06,192.54,209.88,227.28,244.62,263.04],
      "segmentsByLevel": [[[22.05,6]],[[23.86,6]],[[25.67,6]],[[28.2,6]],[[30.01,6]],[[32.09,6]],[[34.98,6]],[[37.88,6]],[[40.77,6]],[[43.84,6]]]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 125.26,
      "formula": "62.63% × 2",
      "multiplierByLevel": [63,68.18,73.34,80.58,85.74,91.68,99.94,108.22,116.48,125.26],
      "segmentsByLevel": [[[31.5,2]],[[34.09,2]],[[36.67,2]],[[40.29,2]],[[42.87,2]],[[45.84,2]],[[49.97,2]],[[54.11,2]],[[58.24,2]],[[62.63,2]]]
    },
    {
      "id": "ring_reflect",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 29.84,
      "formula": "14.92% × 2",
      "impliedStates": [
        "field_1_option_1"
      ],
      "multiplierByLevel": [15,16.24,17.46,19.2,20.42,21.84,23.8,25.78,27.74,29.84],
      "segmentsByLevel": [[[7.5,2]],[[8.12,2]],[[8.73,2]],[[9.6,2]],[[10.21,2]],[[10.92,2]],[[11.9,2]],[[12.89,2]],[[13.87,2]],[[14.92,2]]]
    },
    {
      "id": "chamuel1",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 59.35,
      "formula": "59.35%",
      "impliedStates": [
        "field_1_option_2"
      ],
      "multiplierByLevel": [29.85,32.3,34.75,38.18,40.62,43.44,47.36,51.27,55.19,59.35]
    },
    {
      "id": "chamuel2",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 79.54,
      "formula": "39.77% × 2",
      "impliedStates": [
        "field_1_option_2"
      ],
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.22,63.46,68.7,73.96,79.54],
      "segmentsByLevel": [[[20,2]],[[21.64,2]],[[23.28,2]],[[25.58,2]],[[27.22,2]],[[29.11,2]],[[31.73,2]],[[34.35,2]],[[36.98,2]],[[39.77,2]]]
    },
    {
      "id": "chamuel3",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 173.58,
      "formula": "28.93% × 6",
      "impliedStates": [
        "field_1_option_2"
      ],
      "multiplierByLevel": [87.3,94.5,101.64,111.66,118.8,127.08,138.54,149.94,161.4,173.58],
      "segmentsByLevel": [[[14.55,6]],[[15.75,6]],[[16.94,6]],[[18.61,6]],[[19.8,6]],[[21.18,6]],[[23.09,6]],[[24.99,6]],[[26.9,6]],[[28.93,6]]]
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 401.6,
      "formula": "401.60%",
      "excludesState": [
        "mode_1_option_1",
        "mode_1_option_2"
      ],
      "multiplierByLevel": [202,218.57,235.13,258.32,274.89,293.94,320.44,346.94,373.44,401.6]
    },
    {
      "id": "burst_absolution",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 401.6,
      "formula": "401.60%",
      "requiresState": "mode_1_option_1",
      "multiplierByLevel": [202,218.57,235.13,258.32,274.89,293.94,320.44,346.94,373.44,401.6]
    },
    {
      "id": "burst_confession",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 401.6,
      "formula": "401.60%",
      "requiresState": "mode_1_option_2",
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [202,218.57,235.13,258.32,274.89,293.94,320.44,346.94,373.44,401.6]
    },
    {
      "id": "intro",
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
      "id": "starflash_absolution",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 248.07,
      "formula": "82.69% × 3",
      "requiresResource": "gospel",
      "requiresResourceAtLeast": {
        "id": "gospel",
        "value": 15
      },
      "fallbackSkillId": "heavy",
      "requiresState": "mode_1_option_1",
      "multiplierByLevel": [124.77,135,145.23,159.57,169.8,181.56,197.94,214.29,230.67,248.07],
      "segmentsByLevel": [[[41.59,3]],[[45,3]],[[48.41,3]],[[53.19,3]],[[56.6,3]],[[60.52,3]],[[65.98,3]],[[71.43,3]],[[76.89,3]],[[82.69,3]]]
    },
    {
      "id": "starflash_confession",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 248.07,
      "formula": "82.69% × 3",
      "requiresResource": "gospel",
      "requiresResourceAtLeast": {
        "id": "gospel",
        "value": 30
      },
      "fallbackSkillId": "heavy",
      "requiresState": "mode_1_option_2",
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [124.77,135,145.23,159.57,169.8,181.56,197.94,214.29,230.67,248.07],
      "segmentsByLevel": [[[41.59,3]],[[45,3]],[[48.41,3]],[[53.19,3]],[[56.6,3]],[[60.52,3]],[[65.98,3]],[[71.43,3]],[[76.89,3]],[[82.69,3]]]
    },
    {
      "id": "absolution_litany",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 638.19,
      "formula": "638.19%",
      "requiresResource": "prayer",
      "requiresResourceFull": "prayer",
      "requiresState": "mode_1_option_1",
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [321,347.33,373.65,410.5,436.82,467.09,509.21,551.32,593.44,638.19]
    },
    {
      "id": "confession",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 187.88,
      "formula": "187.88%",
      "requiresResource": "prayer",
      "requiresResourceFull": "prayer",
      "requiresState": "mode_1_option_2",
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [94.5,102.25,110,120.85,128.6,137.51,149.91,162.31,174.71,187.88]
    },
    {
      "id": "c6_starflash_absolution",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 248.07,
      "formula": "82.69% × 3",
      "seq": 6,
      "requiresState": "mode_1_option_1",
      "multiplierByLevel": [124.77,135,145.23,159.57,169.8,181.56,197.94,214.29,230.67,248.07],
      "segmentsByLevel": [[[41.59,3]],[[45,3]],[[48.41,3]],[[53.19,3]],[[56.6,3]],[[60.52,3]],[[65.98,3]],[[71.43,3]],[[76.89,3]],[[82.69,3]]]
    },
    {
      "id": "c6_starflash_confession",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 248.07,
      "formula": "82.69% × 3",
      "seq": 6,
      "requiresState": "mode_1_option_2",
      "triggerEvents": [
        "applySpectroFrazzle"
      ],
      "multiplierByLevel": [124.77,135,145.23,159.57,169.8,181.56,197.94,214.29,230.67,248.07],
      "segmentsByLevel": [[[41.59,3]],[[45,3]],[[48.41,3]],[[53.19,3]],[[56.6,3]],[[60.52,3]],[[65.98,3]],[[71.43,3]],[[76.89,3]],[[82.69,3]]]
    },
    {
      "id": "outro_attentive_heart",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 783.41,
      "formula": "528.41% + 255%",
      "requiresState": "mode_1_option_1",
      "fixedLevel": true
    },
    {
      "id": "outro_attentive_confession",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 528.41,
      "formula": "528.41%",
      "requiresState": "mode_1_option_2",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "starflash_absolution",
  "skillEvents": [
    {
      "skills": [
        "absolution_litany",
        "confession"
      ],
      "event": "applySpectroFrazzle",
      "stacks": 1
    },
    {
      "skills": [
        "starflash_confession",
        "c6_starflash_confession"
      ],
      "event": "applySpectroFrazzle",
      "stacks": 5
    },
    {
      "skills": [
        "burst_confession"
      ],
      "event": "applySpectroFrazzle",
      "stacks": 8
    },
    {
      "seq": 1,
      "skills": [
        "burst_confession"
      ],
      "event": "applySpectroFrazzle",
      "stacks": "max"
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 11,
  "combatStates": [
    {
      "id": "mode_1",
      "kind": "mode",
      "options": [
        {
          "value": "mode_1_option_1"
        },
        {
          "value": "mode_1_option_2"
        }
      ]
    },
    {
      "id": "field_1",
      "kind": "field",
      "options": [
        {
          "value": "field_1_option_1"
        },
        {
          "value": "field_1_option_2"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_revelation",
      "zone": "damageBonus",
      "element": "spectro",
      "value": 12,
      "scope": "self",
      "requiresState": [
        "mode_1_option_1",
        "mode_1_option_2"
      ]
    },
    {
      "id": "b_burst_absolution",
      "zone": "skillMultBonus",
      "value": 255,
      "scope": "self",
      "skills": [
        "burst",
        "burst_absolution"
      ],
      "requiresState": "mode_1_option_1"
    },
    {
      "id": "b_starflash_absolution",
      "zone": "amplify",
      "value": 256,
      "scope": "self",
      "skills": [
        "starflash_absolution",
        "c6_starflash_absolution"
      ],
      "requiresState": "mode_1_option_1",
      "requiresEffectStacks": {
        "effect": "lightNoise",
        "stacks": 1
      }
    },
    {
      "id": "b_outro_res",
      "zone": "resShred",
      "element": "spectro",
      "value": 10,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 30
    },
    {
      "id": "b_outro_lightnoise",
      "zone": "amplify",
      "effect": "lightNoise",
      "value": 100,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 30
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_absolution_burst",
          "zone": "skillMultBonus",
          "value": 225,
          "scope": "self",
          "skills": [
            "burst",
            "burst_absolution"
          ],
          "requiresState": "mode_1_option_1"
        },
        {
          "id": "k1_confession_burst",
          "zone": "skillMultBonus",
          "value": 90,
          "scope": "self",
          "skills": [
            "burst",
            "burst_confession"
          ],
          "requiresState": "mode_1_option_2"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_lightnoise",
          "zone": "amplify",
          "effect": "lightNoise",
          "value": 120,
          "scope": "team",
          "requiresState": "mode_1_option_2",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        },
        {
          "id": "k2_outro_absolution",
          "zone": "amplify",
          "value": 120,
          "scope": "self",
          "skills": [
            "outro_attentive_heart"
          ],
          "requiresState": "mode_1_option_1",
          "requiresEffectStacks": {
            "effect": "lightNoise",
            "stacks": 1
          }
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_absolution_starflash",
          "zone": "skillMultBonus",
          "value": 91,
          "scope": "self",
          "skills": [
            "starflash_absolution",
            "c6_starflash_absolution"
          ],
          "requiresState": "mode_1_option_1"
        },
        {
          "id": "k3_confession_starflash",
          "zone": "skillMultBonus",
          "value": 249,
          "scope": "self",
          "skills": [
            "starflash_confession",
            "c6_starflash_confession"
          ],
          "requiresState": "mode_1_option_2"
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_res",
          "zone": "resShred",
          "element": "spectro",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "na1",
            "na2",
            "na3",
            "dodge",
            "chamuel_dodge",
            "chamuel1",
            "chamuel2",
            "chamuel3"
          ],
          "duration": 30
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_intro_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 12,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "intro"
          ],
          "triggerEvents": [
            "introEntry"
          ],
          "duration": 15
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_atk",
          "zone": "attackPercent",
          "value": 10,
          "scope": "self",
          "requiresState": [
            "mode_1_option_1",
            "mode_1_option_2"
          ],
          "defaultActive": false,
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
