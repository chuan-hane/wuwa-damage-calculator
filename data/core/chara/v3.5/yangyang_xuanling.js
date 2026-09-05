"use strict";

WUWA.register({
  "id": "yangyang_xuanling",
  "aliases": [],
  "debut": 3.5,
  "element": "havoc",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "havocBane"
  ],
  "signatureWeaponId": "azure_oath",
  "portrait": "",
  "base": {
    "hp": 11025,
    "attack": 425,
    "defense": 1148,
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
      "id": "melody",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "azure_plume",
      "max": 2,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "azure_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 47.72,
      "formula": "47.72%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "multiplierByLevel": [24,25.97,27.94,30.7,32.66,34.93,38.08,41.22,44.37,47.72]
    },
    {
      "id": "azure_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.69,
      "formula": "20.14% + 20.14% + 60.41%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "multiplierByLevel": [50.65,54.8,58.95,64.78,68.93,73.7,80.34,86.99,93.64,100.69],
      "segmentsByLevel": [[[10.13,1],[10.13,1],[30.39,1]],[[10.96,1],[10.96,1],[32.88,1]],[[11.79,1],[11.79,1],[35.37,1]],[[12.96,1],[12.96,1],[38.86,1]],[[13.79,1],[13.79,1],[41.35,1]],[[14.74,1],[14.74,1],[44.22,1]],[[16.07,1],[16.07,1],[48.2,1]],[[17.4,1],[17.4,1],[52.19,1]],[[18.73,1],[18.73,1],[56.18,1]],[[20.14,1],[20.14,1],[60.41,1]]]
    },
    {
      "id": "azure_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.69,
      "formula": "30.21% + 70.48%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "multiplierByLevel": [50.65,54.8,58.96,64.77,68.92,73.7,80.34,86.99,93.63,100.69],
      "segmentsByLevel": [[[15.2,1],[35.45,1]],[[16.44,1],[38.36,1]],[[17.69,1],[41.27,1]],[[19.43,1],[45.34,1]],[[20.68,1],[48.24,1]],[[22.11,1],[51.59,1]],[[24.1,1],[56.24,1]],[[26.1,1],[60.89,1]],[[28.09,1],[65.54,1]],[[30.21,1],[70.48,1]]]
    },
    {
      "id": "azure_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 185.63,
      "formula": "18.57% + 18.57% + 148.49%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ],
      "multiplierByLevel": [93.37,101.04,108.68,119.4,127.06,135.86,148.1,160.36,172.6,185.63],
      "segmentsByLevel": [[[9.34,1],[9.34,1],[74.69,1]],[[10.11,1],[10.11,1],[80.82,1]],[[10.87,1],[10.87,1],[86.94,1]],[[11.94,1],[11.94,1],[95.52,1]],[[12.71,1],[12.71,1],[101.64,1]],[[13.59,1],[13.59,1],[108.68,1]],[[14.81,1],[14.81,1],[118.48,1]],[[16.04,1],[16.04,1],[128.28,1]],[[17.26,1],[17.26,1],[138.08,1]],[[18.57,1],[18.57,1],[148.49,1]]]
    },
    {
      "id": "feather_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.54,
      "formula": "39.77% + 39.77%",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "multiplierByLevel": [40,43.28,46.56,51.16,54.44,58.22,63.46,68.7,73.96,79.54],
      "segmentsByLevel": [[[20,1],[20,1]],[[21.64,1],[21.64,1]],[[23.28,1],[23.28,1]],[[25.58,1],[25.58,1]],[[27.22,1],[27.22,1]],[[29.11,1],[29.11,1]],[[31.73,1],[31.73,1]],[[34.35,1],[34.35,1]],[[36.98,1],[36.98,1]],[[39.77,1],[39.77,1]]]
    },
    {
      "id": "feather_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 100.68,
      "formula": "33.56% × 3",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "multiplierByLevel": [50.64,54.81,58.95,64.77,68.94,73.71,80.34,87,93.63,100.68],
      "segmentsByLevel": [[[16.88,3]],[[18.27,3]],[[19.65,3]],[[21.59,3]],[[22.98,3]],[[24.57,3]],[[26.78,3]],[[29,3]],[[31.21,3]],[[33.56,3]]]
    },
    {
      "id": "feather_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 74.29,
      "formula": "14.86% + 7.43% × 3 + 37.14%",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "multiplierByLevel": [37.38,40.46,43.5,47.79,50.86,54.39,59.29,64.19,69.09,74.29],
      "segmentsByLevel": [[[7.48,1],[3.74,3],[18.68,1]],[[8.09,1],[4.05,3],[20.22,1]],[[8.7,1],[4.35,3],[21.75,1]],[[9.56,1],[4.78,3],[23.89,1]],[[10.17,1],[5.09,3],[25.42,1]],[[10.88,1],[5.44,3],[27.19,1]],[[11.86,1],[5.93,3],[29.64,1]],[[12.84,1],[6.42,3],[32.09,1]],[[13.82,1],[6.91,3],[34.54,1]],[[14.86,1],[7.43,3],[37.14,1]]]
    },
    {
      "id": "feather_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 238.59,
      "formula": "71.58% + 71.58% + 95.43%",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ],
      "multiplierByLevel": [120,129.86,139.7,153.47,163.3,174.63,190.37,206.1,221.86,238.59],
      "segmentsByLevel": [[[36,1],[36,1],[48,1]],[[38.96,1],[38.96,1],[51.94,1]],[[41.91,1],[41.91,1],[55.88,1]],[[46.04,1],[46.04,1],[61.39,1]],[[48.99,1],[48.99,1],[65.32,1]],[[52.39,1],[52.39,1],[69.85,1]],[[57.11,1],[57.11,1],[76.15,1]],[[61.83,1],[61.83,1],[82.44,1]],[[66.56,1],[66.56,1],[88.74,1]],[[71.58,1],[71.58,1],[95.43,1]]]
    },
    {
      "id": "azure_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "multiplierByLevel": [49.6,53.67,57.74,63.43,67.5,72.18,78.69,85.19,91.7,98.61]
    },
    {
      "id": "feather_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 98.61,
      "formula": "98.61%",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "multiplierByLevel": [49.6,53.67,57.74,63.43,67.5,72.18,78.69,85.19,91.7,98.61]
    },
    {
      "id": "azure_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.13,
      "formula": "39.23% + 39.23% + 117.67%",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "multiplierByLevel": [98.65,106.74,114.84,126.15,134.24,143.54,156.49,169.43,182.38,196.13],
      "segmentsByLevel": [[[19.73,1],[19.73,1],[59.19,1]],[[21.35,1],[21.35,1],[64.04,1]],[[22.97,1],[22.97,1],[68.9,1]],[[25.23,1],[25.23,1],[75.69,1]],[[26.85,1],[26.85,1],[80.54,1]],[[28.71,1],[28.71,1],[86.12,1]],[[31.3,1],[31.3,1],[93.89,1]],[[33.89,1],[33.89,1],[101.65,1]],[[36.48,1],[36.48,1],[109.42,1]],[[39.23,1],[39.23,1],[117.67,1]]]
    },
    {
      "id": "feather_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.11,
      "formula": "65.37% × 3",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "multiplierByLevel": [98.64,106.74,114.84,126.15,134.25,143.55,156.48,169.44,182.37,196.11],
      "segmentsByLevel": [[[32.88,3]],[[35.58,3]],[[38.28,3]],[[42.05,3]],[[44.75,3]],[[47.85,3]],[[52.16,3]],[[56.48,3]],[[60.79,3]],[[65.37,3]]]
    },
    {
      "id": "switch_feather",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 100.68,
      "formula": "33.56% × 3",
      "requiresState": "sword_stance_azure",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 1
      },
      "fallbackSkillId": "flow_feather",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [50.64,54.81,58.95,64.77,68.94,73.71,80.34,87,93.63,100.68],
      "segmentsByLevel": [[[16.88,3]],[[18.27,3]],[[19.65,3]],[[21.59,3]],[[22.98,3]],[[24.57,3]],[[26.78,3]],[[29,3]],[[31.21,3]],[[33.56,3]]]
    },
    {
      "id": "switch_azure",
      "category": "resonanceSkill",
      "damageType": "heavy",
      "multiplier": 116.6,
      "formula": "69.95% + 15.55% × 3",
      "requiresState": "sword_stance_feather",
      "requiresResourceAtLeast": {
        "id": "melody",
        "value": 1
      },
      "fallbackSkillId": "flow_azure",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [58.65,63.45,68.29,75,79.8,85.34,93.05,100.72,108.43,116.6],
      "segmentsByLevel": [[[35.19,1],[7.82,3]],[[38.07,1],[8.46,3]],[[40.96,1],[9.11,3]],[[45,1],[10,3]],[[47.88,1],[10.64,3]],[[51.2,1],[11.38,3]],[[55.82,1],[12.41,3]],[[60.43,1],[13.43,3]],[[65.05,1],[14.46,3]],[[69.95,1],[15.55,3]]]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 1988.1,
      "formula": "1988.10%",
      "triggerEvents": [
        "castResonanceLiberation",
        "applyHavocBane"
      ],
      "multiplierByLevel": [1000,1082,1164,1278.8,1360.8,1455.1,1586.3,1717.5,1848.7,1988.1]
    },
    {
      "id": "lib_shadow",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%",
      "requiresState": "voice_upon_voice_active",
      "triggeredDamage": true,
      "multiplierByLevel": [170,183.94,197.88,217.4,231.34,247.37,269.68,291.98,314.28,337.98]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 116.59,
      "formula": "116.59%",
      "triggerEvents": [
        "introEntry",
        "applyHavocBane"
      ],
      "multiplierByLevel": [58.64,63.45,68.26,74.99,79.8,85.33,93.03,100.72,108.41,116.59]
    },
    {
      "id": "outro",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 300,
      "formula": "300.00%",
      "fixedLevel": true
    },
    {
      "id": "flow_azure",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 116.6,
      "formula": "69.95% + 15.55% × 3",
      "requiresState": "sword_stance_feather",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [58.65,63.45,68.29,75,79.8,85.34,93.05,100.72,108.43,116.6],
      "segmentsByLevel": [[[35.19,1],[7.82,3]],[[38.07,1],[8.46,3]],[[40.96,1],[9.11,3]],[[45,1],[10,3]],[[47.88,1],[10.64,3]],[[51.2,1],[11.38,3]],[[55.82,1],[12.41,3]],[[60.43,1],[13.43,3]],[[65.05,1],[14.46,3]],[[69.95,1],[15.55,3]]]
    },
    {
      "id": "flow_feather",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 100.68,
      "formula": "33.56% × 3",
      "requiresState": "sword_stance_azure",
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "multiplierByLevel": [50.64,54.81,58.95,64.77,68.94,73.71,80.34,87,93.63,100.68],
      "segmentsByLevel": [[[16.88,3]],[[18.27,3]],[[19.65,3]],[[21.59,3]],[[22.98,3]],[[24.57,3]],[[26.78,3]],[[29,3]],[[31.21,3]],[[33.56,3]]]
    },
    {
      "id": "azure_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 450.53,
      "formula": "135.16% + 135.16% + 180.21%",
      "requiresResourceFull": "azure_plume",
      "impliedStates": [
        "sword_stance_azure"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ],
      "multiplierByLevel": [226.63,245.2,263.79,289.8,308.39,329.76,359.49,389.23,418.96,450.53],
      "segmentsByLevel": [[[67.99,1],[67.99,1],[90.65,1]],[[73.56,1],[73.56,1],[98.08,1]],[[79.14,1],[79.14,1],[105.51,1]],[[86.94,1],[86.94,1],[115.92,1]],[[92.52,1],[92.52,1],[123.35,1]],[[98.93,1],[98.93,1],[131.9,1]],[[107.85,1],[107.85,1],[143.79,1]],[[116.77,1],[116.77,1],[155.69,1]],[[125.69,1],[125.69,1],[167.58,1]],[[135.16,1],[135.16,1],[180.21,1]]]
    },
    {
      "id": "feather_heavy",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 217.05,
      "formula": "21.71% + 195.34%",
      "requiresResourceFull": "azure_plume",
      "impliedStates": [
        "sword_stance_feather"
      ],
      "triggerEvents": [
        "applyHavocBane"
      ],
      "multiplierByLevel": [109.18,118.13,127.08,139.62,148.57,158.86,173.18,187.5,201.84,217.05],
      "segmentsByLevel": [[[10.92,1],[98.26,1]],[[11.82,1],[106.31,1]],[[12.71,1],[114.37,1]],[[13.97,1],[125.65,1]],[[14.86,1],[133.71,1]],[[15.89,1],[142.97,1]],[[17.32,1],[155.86,1]],[[18.75,1],[168.75,1]],[[20.19,1],[181.65,1]],[[21.71,1],[195.34,1]]]
    },
    {
      "id": "feather_fall",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 110.97,
      "formula": "14.80% × 3 + 66.57%",
      "requiresResourceFull": "azure_plume",
      "impliedStates": [
        "sword_stance_feather",
        "hark_the_wind_active"
      ],
      "multiplierByLevel": [55.8,60.41,64.99,71.38,75.95,81.21,88.54,95.85,103.18,110.97],
      "segmentsByLevel": [[[7.44,3],[33.48,1]],[[8.06,3],[36.23,1]],[[8.67,3],[38.98,1]],[[9.52,3],[42.82,1]],[[10.13,3],[45.56,1]],[[10.83,3],[48.72,1]],[[11.81,3],[53.11,1]],[[12.78,3],[57.51,1]],[[13.76,3],[61.9,1]],[[14.8,3],[66.57,1]]]
    },
    {
      "id": "bloom_na1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 119.37,
      "formula": "39.79% × 3",
      "requiresState": "hark_the_wind_active",
      "multiplierByLevel": [60.03,64.98,69.9,76.77,81.69,87.36,95.25,103.11,111,119.37],
      "segmentsByLevel": [[[20.01,3]],[[21.66,3]],[[23.3,3]],[[25.59,3]],[[27.23,3]],[[29.12,3]],[[31.75,3]],[[34.37,3]],[[37,3]],[[39.79,3]]]
    },
    {
      "id": "bloom_na2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 223.13,
      "formula": "89.25% + 66.94% + 66.94%",
      "requiresState": "hark_the_wind_active",
      "multiplierByLevel": [112.24,121.44,130.66,143.53,152.73,163.33,178.04,192.77,207.5,223.13],
      "segmentsByLevel": [[[44.9,1],[33.67,1],[33.67,1]],[[48.58,1],[36.43,1],[36.43,1]],[[52.26,1],[39.2,1],[39.2,1]],[[57.41,1],[43.06,1],[43.06,1]],[[61.09,1],[45.82,1],[45.82,1]],[[65.33,1],[49,1],[49,1]],[[71.22,1],[53.41,1],[53.41,1]],[[77.11,1],[57.83,1],[57.83,1]],[[83,1],[62.25,1],[62.25,1]],[[89.25,1],[66.94,1],[66.94,1]]]
    },
    {
      "id": "bloom_na3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 399.59,
      "formula": "23.98% × 5 + 279.69%",
      "requiresState": "hark_the_wind_active",
      "multiplierByLevel": [200.98,217.47,233.96,257.06,273.49,292.46,318.81,345.17,371.58,399.59],
      "segmentsByLevel": [[[12.06,5],[140.68,1]],[[13.05,5],[152.22,1]],[[14.04,5],[163.76,1]],[[15.43,5],[179.91,1]],[[16.41,5],[191.44,1]],[[17.55,5],[204.71,1]],[[19.13,5],[223.16,1]],[[20.71,5],[241.62,1]],[[22.3,5],[260.08,1]],[[23.98,5],[279.69,1]]]
    },
    {
      "id": "bloom_dodge1",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 119.37,
      "formula": "39.79% × 3",
      "requiresState": "hark_the_wind_active",
      "multiplierByLevel": [60.03,64.98,69.9,76.77,81.69,87.36,95.25,103.11,111,119.37],
      "segmentsByLevel": [[[20.01,3]],[[21.66,3]],[[23.3,3]],[[25.59,3]],[[27.23,3]],[[29.12,3]],[[31.75,3]],[[34.37,3]],[[37,3]],[[39.79,3]]]
    },
    {
      "id": "bloom_dodge2",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 223.13,
      "formula": "89.25% + 66.94% + 66.94%",
      "requiresState": "hark_the_wind_active",
      "multiplierByLevel": [112.24,121.44,130.66,143.53,152.73,163.33,178.04,192.77,207.5,223.13],
      "segmentsByLevel": [[[44.9,1],[33.67,1],[33.67,1]],[[48.58,1],[36.43,1],[36.43,1]],[[52.26,1],[39.2,1],[39.2,1]],[[57.41,1],[43.06,1],[43.06,1]],[[61.09,1],[45.82,1],[45.82,1]],[[65.33,1],[49,1],[49,1]],[[71.22,1],[53.41,1],[53.41,1]],[[77.11,1],[57.83,1],[57.83,1]],[[83,1],[62.25,1],[62.25,1]],[[89.25,1],[66.94,1],[66.94,1]]]
    },
    {
      "id": "bloom_dodge3",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 399.59,
      "formula": "23.98% × 5 + 279.69%",
      "requiresState": "hark_the_wind_active",
      "multiplierByLevel": [200.98,217.47,233.96,257.06,273.49,292.46,318.81,345.17,371.58,399.59],
      "segmentsByLevel": [[[12.06,5],[140.68,1]],[[13.05,5],[152.22,1]],[[14.04,5],[163.76,1]],[[15.43,5],[179.91,1]],[[16.41,5],[191.44,1]],[[17.55,5],[204.71,1]],[[19.13,5],[223.16,1]],[[20.71,5],[241.62,1]],[[22.3,5],[260.08,1]],[[23.98,5],[279.69,1]]]
    },
    {
      "id": "c1_shadow",
      "seq": 1,
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%",
      "triggeredDamage": true,
      "fixedLevel": true
    },
    {
      "id": "c2_shadow",
      "seq": 2,
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 337.98,
      "formula": "337.98%",
      "triggeredDamage": true,
      "fixedLevel": true
    },
    {
      "id": "c6_shadow",
      "seq": 6,
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 0,
      "formula": "337.98% × 触发次数",
      "perStack": 337.98,
      "stackMax": 5,
      "defaultLayers": 1,
      "requiresResource": "still_as_withered_wood_ready",
      "defaultResourceActive": false,
      "triggeredDamage": true,
      "fixedLevel": true
    },
    {
      "id": "wraith_of_sound",
      "category": "forteCircuit",
      "damageType": "basic",
      "element": "havoc",
      "multiplier": 0,
      "formula": "523",
      "fixedDamage": 523,
      "requiresResource": "wraith_of_sound_triggered",
      "defaultResourceActive": false,
      "triggeredDamage": true,
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "azure_heavy",
  "skillEvents": [
    {
      "skills": [
        "azure_na4",
        "feather_na4"
      ],
      "event": "applyHavocBane",
      "stacks": 1
    },
    {
      "skills": [
        "azure_heavy",
        "feather_heavy"
      ],
      "event": "applyHavocBane",
      "stacks": 2
    },
    {
      "skills": [
        "intro"
      ],
      "event": "applyHavocBane",
      "stacks": 1
    },
    {
      "skills": [
        "lib"
      ],
      "event": "applyHavocBane",
      "stacks": "max"
    },
    {
      "seq": 3,
      "skills": [
        "azure_na4",
        "feather_na4",
        "azure_heavy",
        "feather_heavy"
      ],
      "event": "applyHavocBane",
      "stacks": 1
    },
    {
      "skills": [
        "flow_azure",
        "flow_feather"
      ],
      "event": "applyHavocBane",
      "stacks": 6,
      "requiresState": "one_with_wind_active"
    }
  ],
  "combatStates": [
    {
      "id": "sword_stance",
      "kind": "mode",
      "required": true,
      "defaultValue": "sword_stance_azure",
      "options": [
        {
          "value": "sword_stance_azure"
        },
        {
          "value": "sword_stance_feather"
        }
      ]
    },
    {
      "id": "hark_the_wind",
      "kind": "status",
      "options": [
        {
          "value": "hark_the_wind_active"
        }
      ]
    },
    {
      "id": "voice_upon_voice",
      "kind": "status",
      "options": [
        {
          "value": "voice_upon_voice_active"
        }
      ]
    },
    {
      "id": "one_with_wind",
      "kind": "status",
      "options": [
        {
          "value": "one_with_wind_active"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_unbroken_vow_stack_1",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 1
      }
    },
    {
      "id": "b_unbroken_vow_stack_2",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 2
      }
    },
    {
      "id": "b_unbroken_vow_stack_3",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 3
      }
    },
    {
      "id": "b_unbroken_vow_stack_4",
      "zone": "amplify",
      "value": 12,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 4
      }
    },
    {
      "id": "b_unbroken_vow_stack_5",
      "zone": "amplify",
      "value": 12,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 5
      }
    },
    {
      "id": "b_unbroken_vow_stack_6",
      "zone": "amplify",
      "value": 12,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 6
      }
    },
    {
      "id": "b_desperate_breath_azure",
      "zone": "critDamage",
      "value": 160,
      "scope": "self",
      "defaultActive": false,
      "skills": [
        "azure_heavy"
      ]
    },
    {
      "id": "b_desperate_breath_feather",
      "zone": "critDamage",
      "value": 160,
      "scope": "self",
      "defaultActive": false,
      "skills": [
        "feather_heavy",
        "feather_fall",
        "bloom_na1",
        "bloom_na2",
        "bloom_na3",
        "bloom_dodge1",
        "bloom_dodge2",
        "bloom_dodge3"
      ],
      "duration": 15
    },
    {
      "id": "b_windbound_heavy_cd",
      "zone": "critDamage",
      "value": 150,
      "scope": "self",
      "maxStacks": 6,
      "defaultStacks": 0,
      "defaultActive": false,
      "skills": [
        "azure_heavy",
        "feather_heavy",
        "feather_fall",
        "bloom_na1",
        "bloom_na2",
        "bloom_na3",
        "bloom_dodge1",
        "bloom_dodge2",
        "bloom_dodge3"
      ],
      "duration": 4
    },
    {
      "id": "b_outro_havoc_amp",
      "zone": "amplify",
      "element": "havoc",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "requiresEffectStacks": {
        "effect": "havocBane",
        "stacks": 1
      },
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "c2_heavy_amp",
          "zone": "amplify",
          "value": 100,
          "scope": "self",
          "skills": [
            "azure_heavy",
            "feather_heavy",
            "feather_fall",
            "bloom_na1",
            "bloom_na2",
            "bloom_na3",
            "bloom_dodge1",
            "bloom_dodge2",
            "bloom_dodge3"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "c3_lib_amp",
          "zone": "amplify",
          "value": 175,
          "scope": "self",
          "skills": [
            "lib"
          ]
        },
        {
          "id": "c3_havoc_cap",
          "zone": "effectCapBonus",
          "effects": [
            "havocBane"
          ],
          "value": 3,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "flow_azure",
            "flow_feather"
          ],
          "duration": 20
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "c4_team_atk",
          "zone": "attackPercent",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerSkills": [
            "intro",
            "switch_azure",
            "switch_feather",
            "flow_azure",
            "flow_feather"
          ],
          "duration": 20
        }
      ]
    },
    {
      "seq": 5
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "c6_heavy_amp",
          "zone": "vulnerability",
          "damageType": "heavy",
          "value": 40,
          "scope": "self",
          "defaultActive": false,
          "duration": 30
        },
        {
          "id": "c6_shadow_crit",
          "zone": "critRate",
          "value": 95,
          "scope": "self",
          "skills": [
            "c6_shadow"
          ]
        }
      ]
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "echoSet": 350433,
  "echoLead": "350433:thousand_puppet_pavilion",
  "modes": null
});
