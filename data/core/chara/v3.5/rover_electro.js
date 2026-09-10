WUWA.register({
  "id": "rover_electro",
  "aliases": [],
  "debut": 3.5,
  "element": "electro",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "electro"
  ],
  "signatureWeaponId": null,
  "defaultWeaponId": "emerald_of_genesis",
  "portrait": "",
  "base": {
    "hp": 10775,
    "attack": 437,
    "defense": 1136,
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
      "id": "electric_surge",
      "min": 0,
      "max": 120,
      "defaultValue": "max"
    },
    {
      "id": "thunder_rage",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "concerto_energy",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 51.08,
      "formula": "51.08%",
      "multiplierByLevel": [25.69,27.8,29.91,32.86,34.96,37.39,40.76,44.13,47.5,51.08]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 65,
      "formula": "26.00% + 39.00%",
      "multiplierByLevel": [32.7,35.38,38.07,41.82,44.5,47.58,51.87,56.15,60.45,65],
      "segmentsByLevel": [[[13.08,1],[19.62,1]],[[14.15,1],[21.23,1]],[[15.23,1],[22.84,1]],[[16.73,1],[25.09,1]],[[17.8,1],[26.7,1]],[[19.03,1],[28.55,1]],[[20.75,1],[31.12,1]],[[22.46,1],[33.69,1]],[[24.18,1],[36.27,1]],[[26,1],[39,1]]]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 92.89,
      "formula": "13.27% × 7",
      "multiplierByLevel": [46.69,50.54,54.39,59.71,63.56,67.97,74.13,80.22,86.38,92.89],
      "segmentsByLevel": [[[6.67,7]],[[7.22,7]],[[7.77,7]],[[8.53,7]],[[9.08,7]],[[9.71,7]],[[10.59,7]],[[11.46,7]],[[12.34,7]],[[13.27,7]]]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 182.04,
      "formula": "72.82% + 109.22%",
      "multiplierByLevel": [91.57,99.08,106.59,117.1,124.6,133.24,145.25,157.27,169.28,182.04],
      "segmentsByLevel": [[[36.63,1],[54.94,1]],[[39.63,1],[59.45,1]],[[42.64,1],[63.95,1]],[[46.84,1],[70.26,1]],[[49.84,1],[74.76,1]],[[53.3,1],[79.94,1]],[[58.1,1],[87.15,1]],[[62.91,1],[94.36,1]],[[67.71,1],[101.57,1]],[[72.82,1],[109.22,1]]]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 104.94,
      "formula": "104.94%",
      "multiplierByLevel": [52.78,57.11,61.44,67.5,71.83,76.81,83.73,90.65,97.58,104.94]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 148.5,
      "formula": "74.25% × 2",
      "multiplierByLevel": [74.7,80.82,86.94,95.52,101.64,108.7,118.5,128.3,138.08,148.5],
      "segmentsByLevel": [[[37.35,1],[37.35,1]],[[40.41,1],[40.41,1]],[[43.47,1],[43.47,1]],[[47.76,1],[47.76,1]],[[50.82,1],[50.82,1]],[[54.35,1],[54.35,1]],[[59.25,1],[59.25,1]],[[64.15,1],[64.15,1]],[[69.04,1],[69.04,1]],[[74.25,1],[74.25,1]]]
    },
    {
      "id": "counter",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 55.95,
      "formula": "55.95%",
      "multiplierByLevel": [28.14,30.45,32.76,35.99,38.3,40.95,44.64,48.34,52.03,55.95]
    },
    {
      "id": "counter_crumble",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 59.43,
      "formula": "59.43%",
      "multiplierByLevel": [29.89,32.35,34.8,38.23,40.68,43.5,47.42,51.34,55.26,59.43]
    },
    {
      "id": "havoc_air1",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 32.43,
      "formula": "32.43%",
      "multiplierByLevel": [16.31,17.65,18.99,20.86,22.2,23.74,25.88,28.02,30.16,32.43]
    },
    {
      "id": "havoc_air2",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 37.16,
      "formula": "37.16%",
      "multiplierByLevel": [18.69,20.23,21.76,23.91,25.44,27.2,29.65,32.11,34.56,37.16]
    },
    {
      "id": "havoc_air3",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 113.76,
      "formula": "37.54% × 2 + 38.68%",
      "multiplierByLevel": [57.22,61.91,66.61,73.18,77.87,83.27,90.76,98.27,105.79,113.76],
      "segmentsByLevel": [[[18.88,1],[18.88,1],[19.46,1]],[[20.43,1],[20.43,1],[21.05,1]],[[21.98,1],[21.98,1],[22.65,1]],[[24.15,1],[24.15,1],[24.88,1]],[[25.7,1],[25.7,1],[26.47,1]],[[27.48,1],[27.48,1],[28.31,1]],[[29.95,1],[29.95,1],[30.86,1]],[[32.43,1],[32.43,1],[33.41,1]],[[34.91,1],[34.91,1],[35.97,1]],[[37.54,1],[37.54,1],[38.68,1]]]
    },
    {
      "id": "air_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 188.44,
      "formula": "188.44%",
      "multiplierByLevel": [94.78,102.56,110.33,121.21,128.98,137.92,150.35,162.79,175.22,188.44]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 200.4,
      "formula": "100.20% × 2",
      "requiresState": "normal_resonance",
      "multiplierByLevel": [100.8,109.06,117.34,128.9,137.18,146.68,159.9,173.12,186.34,200.4],
      "segmentsByLevel": [[[50.4,2]],[[54.53,2]],[[58.67,2]],[[64.45,2]],[[68.59,2]],[[73.34,2]],[[79.95,2]],[[86.56,2]],[[93.17,2]],[[100.2,2]]]
    },
    {
      "id": "skill_repel",
      "category": "resonanceSkill",
      "damageType": "basic",
      "element": "electro",
      "multiplier": 140.29,
      "formula": "56.12% + 84.17%",
      "requiresState": "normal_resonance",
      "multiplierByLevel": [70.57,76.35,82.14,90.24,96.03,102.68,111.94,121.2,130.45,140.29],
      "segmentsByLevel": [[[28.23,1],[42.34,1]],[[30.54,1],[45.81,1]],[[32.86,1],[49.28,1]],[[36.1,1],[54.14,1]],[[38.41,1],[57.62,1]],[[41.07,1],[61.61,1]],[[44.78,1],[67.16,1]],[[48.48,1],[72.72,1]],[[52.18,1],[78.27,1]],[[56.12,1],[84.17,1]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "element": "electro",
      "multiplier": 1192.86,
      "formula": "1192.86%",
      "multiplierByLevel": [600,649.2,698.4,767.28,816.48,873.06,951.78,1030.5,1109.22,1192.86]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "element": "electro",
      "multiplier": 167.03,
      "formula": "33.41% × 2 + 100.21%",
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [84,90.9,97.79,107.44,114.33,122.24,133.25,144.29,155.3,167.03],
      "segmentsByLevel": [[[16.8,2],[50.4,1]],[[18.18,2],[54.54,1]],[[19.56,2],[58.67,1]],[[21.49,2],[64.46,1]],[[22.87,2],[68.59,1]],[[24.45,2],[73.34,1]],[[26.65,2],[79.95,1]],[[28.86,2],[86.57,1]],[[31.06,2],[93.18,1]],[[33.41,2],[100.21,1]]]
    },
    {
      "id": "overload_tap",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 1412.58,
      "formula": "80.72% × 7 + 423.77% × 2",
      "requiresState": "normal_resonance",
      "requiresResourceFull": "electric_surge",
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [710.5,768.77,827.04,908.6,966.87,1033.88,1127.11,1220.36,1313.54,1412.58],
      "segmentsByLevel": [[[40.6,7],[213.15,1],[213.15,1]],[[43.93,7],[230.63,1],[230.63,1]],[[47.26,7],[248.11,1],[248.11,1]],[[51.92,7],[272.58,1],[272.58,1]],[[55.25,7],[290.06,1],[290.06,1]],[[59.08,7],[310.16,1],[310.16,1]],[[64.41,7],[338.12,1],[338.12,1]],[[69.74,7],[366.09,1],[366.09,1]],[[75.06,7],[394.06,1],[394.06,1]],[[80.72,7],[423.77,1],[423.77,1]]]
    },
    {
      "id": "overload_hold",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 1412.58,
      "formula": "80.72% × 7 + 423.77% × 2",
      "requiresState": "normal_resonance",
      "requiresAllResourcesAtLeast": [
        {
          "id": "electric_surge",
          "fractionOfCap": 1
        },
        {
          "id": "concerto_energy",
          "value": 60
        }
      ],
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill",
        "consumeConcerto"
      ],
      "multiplierByLevel": [710.5,768.77,827.04,908.6,966.87,1033.88,1127.11,1220.36,1313.54,1412.58],
      "segmentsByLevel": [[[40.6,7],[213.15,1],[213.15,1]],[[43.93,7],[230.63,1],[230.63,1]],[[47.26,7],[248.11,1],[248.11,1]],[[51.92,7],[272.58,1],[272.58,1]],[[55.25,7],[290.06,1],[290.06,1]],[[59.08,7],[310.16,1],[310.16,1]],[[64.41,7],[338.12,1],[338.12,1]],[[69.74,7],[366.09,1],[366.09,1]],[[75.06,7],[394.06,1],[394.06,1]],[[80.72,7],[423.77,1],[423.77,1]]]
    },
    {
      "id": "thrum_aero_plunge",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 282.48,
      "formula": "282.48%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [142.09,153.74,165.39,181.7,193.35,206.75,225.39,244.03,262.67,282.48]
    },
    {
      "id": "thrum_aero_air1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 84.61,
      "formula": "84.61%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill",
        "heal"
      ],
      "multiplierByLevel": [42.56,46.05,49.54,54.43,57.92,61.93,67.51,73.1,78.68,84.61]
    },
    {
      "id": "thrum_aero_air2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 97.41,
      "formula": "97.41%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill",
        "heal"
      ],
      "multiplierByLevel": [49,53.02,57.04,62.66,66.68,71.3,77.73,84.16,90.58,97.41]
    },
    {
      "id": "thrum_aero",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 158.09,
      "formula": "158.09%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [79.52,86.04,92.56,101.69,108.21,115.71,126.14,136.57,147,158.09]
    },
    {
      "id": "thrum_spectro2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "spectro",
      "multiplier": 163.53,
      "formula": "49.06% × 2 + 65.41%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [82.26,89,95.76,105.2,111.93,119.7,130.49,141.27,152.06,163.53],
      "segmentsByLevel": [[[24.68,1],[24.68,1],[32.9,1]],[[26.7,1],[26.7,1],[35.6,1]],[[28.73,1],[28.73,1],[38.3,1]],[[31.56,1],[31.56,1],[42.08,1]],[[33.58,1],[33.58,1],[44.77,1]],[[35.91,1],[35.91,1],[47.88,1]],[[39.15,1],[39.15,1],[52.19,1]],[[42.38,1],[42.38,1],[56.51,1]],[[45.62,1],[45.62,1],[60.82,1]],[[49.06,1],[49.06,1],[65.41,1]]]
    },
    {
      "id": "thrum_spectro3",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "spectro",
      "multiplier": 255.14,
      "formula": "102.06% + 153.08%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [128.34,138.85,149.38,164.12,174.64,186.74,203.57,220.42,237.25,255.14],
      "segmentsByLevel": [[[51.34,1],[77,1]],[[55.54,1],[83.31,1]],[[59.75,1],[89.63,1]],[[65.65,1],[98.47,1]],[[69.86,1],[104.78,1]],[[74.7,1],[112.04,1]],[[81.43,1],[122.14,1]],[[88.17,1],[132.25,1]],[[94.9,1],[142.35,1]],[[102.06,1],[153.08,1]]]
    },
    {
      "id": "thrum_havoc1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 149.76,
      "formula": "14.98% × 3 + 104.82%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [75.35,81.5,87.69,96.35,102.5,109.6,119.49,129.38,139.27,149.76],
      "segmentsByLevel": [[[7.54,3],[52.73,1]],[[8.15,3],[57.05,1]],[[8.77,3],[61.38,1]],[[9.64,3],[67.43,1]],[[10.25,3],[71.75,1]],[[10.96,3],[76.72,1]],[[11.95,3],[83.64,1]],[[12.94,3],[90.56,1]],[[13.93,3],[97.48,1]],[[14.98,3],[104.82,1]]]
    },
    {
      "id": "thrum_havoc2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 138.3,
      "formula": "13.83% × 4 + 82.98%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [69.58,75.29,80.99,88.98,94.68,101.26,110.37,119.49,128.65,138.3],
      "segmentsByLevel": [[[6.96,4],[41.74,1]],[[7.53,4],[45.17,1]],[[8.1,4],[48.59,1]],[[8.9,4],[53.38,1]],[[9.47,4],[56.8,1]],[[10.13,4],[60.74,1]],[[11.04,4],[66.21,1]],[[11.95,4],[71.69,1]],[[12.87,4],[77.17,1]],[[13.83,4],[82.98,1]]]
    },
    {
      "id": "thrum_havoc3",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 208.38,
      "formula": "62.51% × 2 + 20.84% × 4",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [104.86,113.4,122,134.06,142.66,152.5,166.28,180.06,193.78,208.38],
      "segmentsByLevel": [[[31.45,1],[31.45,1],[10.49,1],[10.49,1],[10.49,1],[10.49,1]],[[34.02,1],[34.02,1],[11.34,1],[11.34,1],[11.34,1],[11.34,1]],[[36.6,1],[36.6,1],[12.2,1],[12.2,1],[12.2,1],[12.2,1]],[[40.21,1],[40.21,1],[13.41,1],[13.41,1],[13.41,1],[13.41,1]],[[42.79,1],[42.79,1],[14.27,1],[14.27,1],[14.27,1],[14.27,1]],[[45.75,1],[45.75,1],[15.25,1],[15.25,1],[15.25,1],[15.25,1]],[[49.88,1],[49.88,1],[16.63,1],[16.63,1],[16.63,1],[16.63,1]],[[54.01,1],[54.01,1],[18.01,1],[18.01,1],[18.01,1],[18.01,1]],[[58.13,1],[58.13,1],[19.38,1],[19.38,1],[19.38,1],[19.38,1]],[[62.51,1],[62.51,1],[20.84,1],[20.84,1],[20.84,1],[20.84,1]]]
    },
    {
      "id": "thrum_havoc_air1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 50.63,
      "formula": "50.63%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [25.47,27.56,29.65,32.57,34.66,37.06,40.4,43.74,47.08,50.63]
    },
    {
      "id": "thrum_havoc_air2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 63.82,
      "formula": "63.82%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [32.1,34.74,37.37,41.05,43.68,46.71,50.92,55.13,59.35,63.82]
    },
    {
      "id": "thrum_havoc_air3",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "havoc",
      "multiplier": 277.3,
      "formula": "91.51% × 2 + 94.28%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [139.49,150.94,162.36,178.37,189.82,202.97,221.27,239.57,257.87,277.3],
      "segmentsByLevel": [[[46.03,1],[46.03,1],[47.43,1]],[[49.81,1],[49.81,1],[51.32,1]],[[53.58,1],[53.58,1],[55.2,1]],[[58.86,1],[58.86,1],[60.65,1]],[[62.64,1],[62.64,1],[64.54,1]],[[66.98,1],[66.98,1],[69.01,1]],[[73.02,1],[73.02,1],[75.23,1]],[[79.06,1],[79.06,1],[81.45,1]],[[85.1,1],[85.1,1],[87.67,1]],[[91.51,1],[91.51,1],[94.28,1]]]
    },
    {
      "id": "thrum_spectro1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "spectro",
      "multiplier": 99.12,
      "formula": "99.12%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [49.86,53.95,58.04,63.76,67.85,72.55,79.09,85.63,92.17,99.12]
    },
    {
      "id": "thunder_bane",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "electro",
      "multiplier": 0,
      "perStack": 39.77,
      "stackMax": 6,
      "defaultLayers": 1,
      "stackLabel": "thunder_bane_trigger_count",
      "formula": "39.77% × n",
      "triggeredDamage": true,
      "requiresAllStates": [
        "apex_resonance",
        "thrum_hit"
      ],
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "multiplierByLevel": [0,0,0,0,0,0,0,0,0,0],
      "perStackByLevel": [20,21.64,23.28,25.58,27.22,29.11,31.73,34.35,36.98,39.77]
    },
    {
      "id": "thrum_silencing_blade",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "element": "aero",
      "multiplier": 470.68,
      "formula": "47.07% × 5 + 235.33%",
      "requiresState": "apex_resonance",
      "requiresResourceAtLeast": {
        "id": "thunder_rage",
        "value": 1
      },
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [236.77,256.18,275.59,302.77,322.18,344.49,375.57,406.6,437.68,470.68],
      "segmentsByLevel": [[[23.68,5],[118.37,1]],[[25.62,5],[128.08,1]],[[27.56,5],[137.79,1]],[[30.28,5],[151.37,1]],[[32.22,5],[161.08,1]],[[34.45,5],[172.24,1]],[[37.56,5],[187.77,1]],[[40.66,5],[203.3,1]],[[43.77,5],[218.83,1]],[[47.07,5],[235.33,1]]]
    }
  ],
  "defaultSkillId": "overload_hold",
  "skillEvents": [
    {
      "skills": [
        "overload_tap",
        "overload_hold"
      ],
      "event": "applyElectroFlare",
      "stacks": 10
    },
    {
      "seq": 2,
      "skills": [
        "lib"
      ],
      "event": "applyElectroFlare",
      "stacks": 5
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "skillDmg"
  ],
  "echoSet": 10,
  "echoLead": "10:sentry_construct",
  "combatStates": [
    {
      "id": "resonance_mode",
      "kind": "mode",
      "required": true,
      "defaultValue": "normal_resonance",
      "options": [
        {
          "value": "normal_resonance"
        },
        {
          "value": "apex_resonance"
        }
      ]
    },
    {
      "id": "thunder_bane_trigger",
      "kind": "mechanic",
      "requiresState": "apex_resonance",
      "options": [
        {
          "value": "thrum_hit"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_overload_team_atk",
      "zone": "attackPercent",
      "value": 10,
      "scope": "team",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "b_regression_skill_bonus",
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 20,
      "scope": "self",
      "defaultActive": false,
      "duration": 20
    },
    {
      "id": "b_outro_all_amp",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "requiresAnyEffectStacks": {
        "stacks": 1
      },
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
          "id": "k3_overload",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "overload_tap",
            "overload_hold"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_lib",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "lib"
          ]
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_crit_damage",
          "zone": "critDamage",
          "value": 20,
          "scope": "self",
          "requiresState": "apex_resonance"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_thrum",
          "zone": "skillMultBonus",
          "value": 20,
          "scope": "self",
          "skills": [
            "thrum_aero_plunge",
            "thrum_aero_air1",
            "thrum_aero_air2",
            "thrum_aero",
            "thrum_spectro2",
            "thrum_spectro3",
            "thrum_havoc1",
            "thrum_havoc2",
            "thrum_havoc3",
            "thrum_havoc_air1",
            "thrum_havoc_air2",
            "thrum_havoc_air3",
            "thrum_spectro1",
            "thunder_bane",
            "thrum_silencing_blade"
          ]
        }
      ]
    }
  ],
  "modes": null
});
