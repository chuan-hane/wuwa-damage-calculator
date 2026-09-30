"use strict";

WUWA.register({
  "id": "hsin",
  "aliases": [],
  "debut": 3.7,
  "element": "electro",
  "weaponType": 5,
  "quality": 5,
  "signatureWeaponId": "blooming_jadehaven",
  "portrait": "",
  "effectTypes": ["electro"],
  "effectTypeRequiresState": {
    "electro": "electro_flare"
  },
  "unison": {
    "requiresState": "unison",
    "capBonus": 1,
    "capBonusBySeq": [
      {
        "seq": 6,
        "value": 1
      }
    ],
    "bonusContribution": 1,
    "bonusContributionBySeq": [
      {
        "seq": 6,
        "value": 1
      }
    ]
  },
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
      "id": "answering_heart",
      "min": 0,
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "illumining_heart",
      "min": 0,
      "max": 300,
      "defaultValue": 0
    },
    {
      "id": "resolution_of_wishes",
      "min": 0,
      "max": 1,
      "defaultValue": 0
    },
    {
      "id": "law_of_heaven",
      "min": 0,
      "max": 1,
      "defaultValue": 0
    },
    {
      "id": "source_intent",
      "min": 0,
      "max": 1,
      "defaultValue": 0
    },
    {
      "id": "edict",
      "min": 0,
      "max": 21,
      "defaultValue": 0
    },
    {
      "id": "heart_of_thunder",
      "min": 0,
      "max": 100,
      "defaultValue": 0
    },
    {
      "id": "thunderglow",
      "min": 0,
      "max": 10,
      "defaultValue": 0
    },
    {
      "id": "electro_flare_charges",
      "min": 0,
      "max": 5,
      "defaultValue": 0
    },
    {
      "id": "unison_boon",
      "min": 0,
      "max": 2,
      "defaultValue": 0,
      "shared": "unison"
    }
  ],
  "skills": [
    {
      "id": "answering_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.6,
      "formula": "27.84% + 41.76%",
      "multiplierByLevel": [35,37.88,40.75,44.77,47.64,50.94,55.53,60.12,64.72,69.6],
      "segmentsByLevel": [[[14,1],[21,1]],[[15.15,1],[22.73,1]],[[16.3,1],[24.45,1]],[[17.91,1],[26.86,1]],[[19.06,1],[28.58,1]],[[20.38,1],[30.56,1]],[[22.21,1],[33.32,1]],[[24.05,1],[36.07,1]],[[25.89,1],[38.83,1]],[[27.84,1],[41.76,1]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 151.44,
      "formula": "15.15% × 2 + 68.14% + 53.00%",
      "multiplierByLevel": [76.18,82.44,88.67,97.4,103.66,110.84,120.84,130.84,140.8,151.44],
      "segmentsByLevel": [[[7.62,2],[34.28,1],[26.66,1]],[[8.25,2],[37.09,1],[28.85,1]],[[8.87,2],[39.9,1],[31.03,1]],[[9.74,2],[43.83,1],[34.09,1]],[[10.37,2],[46.64,1],[36.28,1]],[[11.09,2],[49.87,1],[38.79,1]],[[12.09,2],[54.37,1],[42.29,1]],[[13.09,2],[58.87,1],[45.79,1]],[[14.08,2],[63.36,1],[49.28,1]],[[15.15,2],[68.14,1],[53,1]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 157.54,
      "formula": "31.51% × 2 + 23.63% × 2 + 47.26%",
      "multiplierByLevel": [79.26,85.74,92.25,101.34,107.85,115.31,125.71,136.11,146.51,157.54],
      "segmentsByLevel": [[[15.85,2],[11.89,2],[23.78,1]],[[17.15,2],[12.86,2],[25.72,1]],[[18.45,2],[13.84,2],[27.67,1]],[[20.27,2],[15.2,2],[30.4,1]],[[21.57,2],[16.18,2],[32.35,1]],[[23.06,2],[17.3,2],[34.59,1]],[[25.14,2],[18.86,2],[37.71,1]],[[27.22,2],[20.42,2],[40.83,1]],[[29.3,2],[21.98,2],[43.95,1]],[[31.51,2],[23.63,2],[47.26,1]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 198.59,
      "formula": "39.72% + 39.72% + 119.15%",
      "multiplierByLevel": [99.89,108.09,116.28,127.74,135.94,145.35,158.45,171.55,184.65,198.59],
      "segmentsByLevel": [[[19.98,1],[19.98,1],[59.93,1]],[[21.62,1],[21.62,1],[64.85,1]],[[23.26,1],[23.26,1],[69.76,1]],[[25.55,1],[25.55,1],[76.64,1]],[[27.19,1],[27.19,1],[81.56,1]],[[29.07,1],[29.07,1],[87.21,1]],[[31.69,1],[31.69,1],[95.07,1]],[[34.31,1],[34.31,1],[102.93,1]],[[36.93,1],[36.93,1],[110.79,1]],[[39.72,1],[39.72,1],[119.15,1]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_heavy_reign",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 696,
      "formula": "27.84% × 25",
      "multiplierByLevel": [350,378.75,407.5,447.75,476.5,509.5,555.25,601.25,647.25,696],
      "segmentsByLevel": [[[14,25]],[[15.15,25]],[[16.3,25]],[[17.91,25]],[[19.06,25]],[[20.38,25]],[[22.21,25]],[[24.05,25]],[[25.89,25]],[[27.84,25]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_air_reign",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 22.44,
      "formula": "22.44%",
      "multiplierByLevel": [11.29,12.21,13.14,14.43,15.36,16.42,17.9,19.39,20.87,22.44],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 102.76,
      "formula": "10.28% + 20.55% + 10.28% + 20.55% × 3",
      "multiplierByLevel": [51.7,55.9,60.16,66.1,70.3,75.2,81.96,88.76,95.56,102.76],
      "segmentsByLevel": [[[5.17,1],[10.34,1],[5.17,1],[10.34,3]],[[5.59,1],[11.18,1],[5.59,1],[11.18,3]],[[6.02,1],[12.03,1],[6.02,1],[12.03,3]],[[6.61,1],[13.22,1],[6.61,1],[13.22,3]],[[7.03,1],[14.06,1],[7.03,1],[14.06,3]],[[7.52,1],[15.04,1],[7.52,1],[15.04,3]],[[8.2,1],[16.39,1],[8.2,1],[16.39,3]],[[8.88,1],[17.75,1],[8.88,1],[17.75,3]],[[9.56,1],[19.11,1],[9.56,1],[19.11,3]],[[10.28,1],[20.55,1],[10.28,1],[20.55,3]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 22.44,
      "formula": "22.44%",
      "multiplierByLevel": [11.29,12.21,13.14,14.43,15.36,16.42,17.9,19.39,20.87,22.44],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "answering_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 224.9,
      "formula": "44.98% × 2 + 67.47% + 67.47%",
      "multiplierByLevel": [113.14,122.4,131.7,144.68,153.96,164.64,179.46,194.3,209.14,224.9],
      "segmentsByLevel": [[[22.63,2],[33.94,1],[33.94,1]],[[24.48,2],[36.72,1],[36.72,1]],[[26.34,2],[39.51,1],[39.51,1]],[[28.94,2],[43.4,1],[43.4,1]],[[30.79,2],[46.19,1],[46.19,1]],[[32.93,2],[49.39,1],[49.39,1]],[[35.89,2],[53.84,1],[53.84,1]],[[38.86,2],[58.29,1],[58.29,1]],[[41.83,2],[62.74,1],[62.74,1]],[[44.98,2],[67.47,1],[67.47,1]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "illumining_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.75,
      "formula": "12.55% × 2 + 37.65%",
      "multiplierByLevel": [31.58,34.15,36.75,40.38,42.95,45.94,50.08,54.23,58.35,62.75],
      "segmentsByLevel": [[[6.32,2],[18.94,1]],[[6.83,2],[20.49,1]],[[7.35,2],[22.05,1]],[[8.08,2],[24.22,1]],[[8.59,2],[25.77,1]],[[9.19,2],[27.56,1]],[[10.02,2],[30.04,1]],[[10.85,2],[32.53,1]],[[11.67,2],[35.01,1]],[[12.55,2],[37.65,1]]],
      "impliedStates": ["illumining_form"],
      "excludesState": ["mechanism_dominion"]
    },
    {
      "id": "illumining_heartlock",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 41.84,
      "formula": "20.92% × 2",
      "multiplierByLevel": [21.04,22.78,24.5,26.92,28.64,30.62,33.38,36.14,38.9,41.84],
      "segmentsByLevel": [[[10.52,2]],[[11.39,2]],[[12.25,2]],[[13.46,2]],[[14.32,2]],[[15.31,2]],[[16.69,2]],[[18.07,2]],[[19.45,2]],[[20.92,2]]],
      "impliedStates": ["illumining_form"]
    },
    {
      "id": "illumining_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 69.6,
      "formula": "34.80% × 2",
      "multiplierByLevel": [35,37.88,40.74,44.76,47.64,50.94,55.54,60.12,64.72,69.6],
      "segmentsByLevel": [[[17.5,2]],[[18.94,2]],[[20.37,2]],[[22.38,2]],[[23.82,2]],[[25.47,2]],[[27.77,2]],[[30.06,2]],[[32.36,2]],[[34.8,2]]],
      "impliedStates": ["illumining_form"],
      "excludesState": ["mechanism_dominion"]
    },
    {
      "id": "illumining_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 182.1,
      "formula": "9.11% × 4 + 18.21% × 2 + 27.31% × 4",
      "multiplierByLevel": [91.6,99.14,106.6,117.14,124.6,133.3,145.3,157.3,169.34,182.1],
      "segmentsByLevel": [[[4.58,4],[9.16,2],[13.74,4]],[[4.96,4],[9.91,2],[14.87,4]],[[5.33,4],[10.66,2],[15.99,4]],[[5.86,4],[11.71,2],[17.57,4]],[[6.23,4],[12.46,2],[18.69,4]],[[6.67,4],[13.33,2],[19.99,4]],[[7.27,4],[14.53,2],[21.79,4]],[[7.87,4],[15.73,2],[23.59,4]],[[8.47,4],[16.93,2],[25.4,4]],[[9.11,4],[18.21,2],[27.31,4]]],
      "impliedStates": ["illumining_form"],
      "excludesState": ["mechanism_dominion"]
    },
    {
      "id": "illumining_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 107.86,
      "formula": "53.93% × 2",
      "multiplierByLevel": [54.26,58.7,63.16,69.38,73.84,78.94,86.06,93.18,100.3,107.86],
      "segmentsByLevel": [[[27.13,2]],[[29.35,2]],[[31.58,2]],[[34.69,2]],[[36.92,2]],[[39.47,2]],[[43.03,2]],[[46.59,2]],[[50.15,2]],[[53.93,2]]],
      "impliedStates": ["illumining_form"]
    },
    {
      "id": "illumining_cut",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 87.57,
      "formula": "35.03% + 52.54%",
      "multiplierByLevel": [44.05,47.67,51.28,56.33,59.95,64.1,69.88,75.65,81.43,87.57],
      "segmentsByLevel": [[[17.62,1],[26.43,1]],[[19.07,1],[28.6,1]],[[20.51,1],[30.77,1]],[[22.53,1],[33.8,1]],[[23.98,1],[35.97,1]],[[25.64,1],[38.46,1]],[[27.95,1],[41.93,1]],[[30.26,1],[45.39,1]],[[32.57,1],[48.86,1]],[[35.03,1],[52.54,1]]],
      "impliedStates": ["illumining_form"]
    },
    {
      "id": "illumining_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 22.45,
      "formula": "13.47% + 8.98%",
      "multiplierByLevel": [11.3,12.22,13.15,14.44,15.37,16.43,17.9,19.39,20.87,22.45],
      "segmentsByLevel": [[[6.78,1],[4.52,1]],[[7.33,1],[4.89,1]],[[7.89,1],[5.26,1]],[[8.66,1],[5.78,1]],[[9.22,1],[6.15,1]],[[9.86,1],[6.57,1]],[[10.74,1],[7.16,1]],[[11.63,1],[7.76,1]],[[12.52,1],[8.35,1]],[[13.47,1],[8.98,1]]],
      "impliedStates": ["illumining_form"]
    },
    {
      "id": "illumining_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 191.36,
      "formula": "95.68% × 2",
      "multiplierByLevel": [96.26,104.16,112.04,123.1,130.98,140.06,152.7,165.32,177.94,191.36],
      "segmentsByLevel": [[[48.13,2]],[[52.08,2]],[[56.02,2]],[[61.55,2]],[[65.49,2]],[[70.03,2]],[[76.35,2]],[[82.66,2]],[[88.97,2]],[[95.68,2]]],
      "impliedStates": ["illumining_form"],
      "excludesState": ["mechanism_dominion"]
    },
    {
      "id": "pillars_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 86.58,
      "formula": "28.86% × 3",
      "multiplierByLevel": [43.56,47.13,50.7,55.71,59.28,63.39,69.09,74.82,80.52,86.58],
      "segmentsByLevel": [[[14.52,3]],[[15.71,3]],[[16.9,3]],[[18.57,3]],[[19.76,3]],[[21.13,3]],[[23.03,3]],[[24.94,3]],[[26.84,3]],[[28.86,3]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"]
    },
    {
      "id": "pillars_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 114.69,
      "formula": "38.23% × 3",
      "multiplierByLevel": [57.69,62.43,67.17,73.8,78.51,83.97,91.53,99.09,106.65,114.69],
      "segmentsByLevel": [[[19.23,3]],[[20.81,3]],[[22.39,3]],[[24.6,3]],[[26.17,3]],[[27.99,3]],[[30.51,3]],[[33.03,3]],[[35.55,3]],[[38.23,3]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"]
    },
    {
      "id": "pillars_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 106.75,
      "formula": "21.35% × 5",
      "multiplierByLevel": [53.7,58.1,62.5,68.7,73.1,78.15,85.2,92.25,99.3,106.75],
      "segmentsByLevel": [[[10.74,5]],[[11.62,5]],[[12.5,5]],[[13.74,5]],[[14.62,5]],[[15.63,5]],[[17.04,5]],[[18.45,5]],[[19.86,5]],[[21.35,5]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"]
    },
    {
      "id": "pillars_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 166.38,
      "formula": "16.64% × 7 + 49.90%",
      "multiplierByLevel": [83.69,90.58,97.4,107,113.88,121.78,132.7,143.7,154.69,166.38],
      "segmentsByLevel": [[[8.37,7],[25.1,1]],[[9.06,7],[27.16,1]],[[9.74,7],[29.22,1]],[[10.7,7],[32.1,1]],[[11.39,7],[34.15,1]],[[12.18,7],[36.52,1]],[[13.27,7],[39.81,1]],[[14.37,7],[43.11,1]],[[15.47,7],[46.4,1]],[[16.64,7],[49.9,1]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"]
    },
    {
      "id": "pillars_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 198.21,
      "formula": "66.07% × 3",
      "multiplierByLevel": [99.69,107.88,116.04,127.5,135.66,145.08,158.16,171.24,184.32,198.21],
      "segmentsByLevel": [[[33.23,3]],[[35.96,3]],[[38.68,3]],[[42.5,3]],[[45.22,3]],[[48.36,3]],[[52.72,3]],[[57.08,3]],[[61.44,3]],[[66.07,3]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 167.06,
      "formula": "25.06% + 25.06% + 25.06% + 16.71% × 2 + 58.46%",
      "multiplierByLevel": [84,90.92,97.8,107.46,114.34,122.26,133.27,144.31,155.32,167.06],
      "segmentsByLevel": [[[12.6,1],[12.6,1],[12.6,1],[8.4,2],[29.4,1]],[[13.64,1],[13.64,1],[13.64,1],[9.09,2],[31.82,1]],[[14.67,1],[14.67,1],[14.67,1],[9.78,2],[34.23,1]],[[16.12,1],[16.12,1],[16.12,1],[10.75,2],[37.6,1]],[[17.15,1],[17.15,1],[17.15,1],[11.44,2],[40.01,1]],[[18.34,1],[18.34,1],[18.34,1],[12.23,2],[42.78,1]],[[19.99,1],[19.99,1],[19.99,1],[13.33,2],[46.64,1]],[[21.65,1],[21.65,1],[21.65,1],[14.43,2],[50.5,1]],[[23.3,1],[23.3,1],[23.3,1],[15.53,2],[54.36,1]],[[25.06,1],[25.06,1],[25.06,1],[16.71,2],[58.46,1]]],
      "impliedStates": ["answering_form"]
    },
    {
      "id": "illumining_skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 222.7,
      "formula": "11.14% × 4 + 178.14%",
      "multiplierByLevel": [112,121.19,130.38,143.27,152.45,162.98,177.7,192.37,207.09,222.7],
      "segmentsByLevel": [[[5.6,4],[89.6,1]],[[6.06,4],[96.95,1]],[[6.52,4],[104.3,1]],[[7.17,4],[114.59,1]],[[7.63,4],[121.93,1]],[[8.15,4],[130.38,1]],[[8.89,4],[142.14,1]],[[9.62,4],[153.89,1]],[[10.36,4],[165.65,1]],[[11.14,4],[178.14,1]]],
      "impliedStates": ["illumining_form"]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceSkill",
      "multiplier": 2012.67,
      "formula": "80.51% + 90.57% + 60.38% + 100.64% + 70.45% + 1610.12%",
      "multiplierByLevel": [1012.38,1095.39,1178.4,1294.61,1377.62,1473.09,1605.91,1738.74,1871.55,2012.67],
      "segmentsByLevel": [[[40.5,1],[45.56,1],[30.38,1],[50.62,1],[35.44,1],[809.88,1]],[[43.82,1],[49.3,1],[32.87,1],[54.77,1],[38.34,1],[876.29,1]],[[47.14,1],[53.03,1],[35.36,1],[58.92,1],[41.25,1],[942.7,1]],[[51.79,1],[58.26,1],[38.84,1],[64.73,1],[45.32,1],[1035.67,1]],[[55.11,1],[62,1],[41.33,1],[68.88,1],[48.22,1],[1102.08,1]],[[58.93,1],[66.29,1],[44.2,1],[73.66,1],[51.56,1],[1178.45,1]],[[64.24,1],[72.27,1],[48.18,1],[80.3,1],[56.21,1],[1284.71,1]],[[69.55,1],[78.25,1],[52.17,1],[86.94,1],[60.86,1],[1390.97,1]],[[74.87,1],[84.22,1],[56.15,1],[93.58,1],[65.51,1],[1497.22,1]],[[80.51,1],[90.57,1],[60.38,1],[100.64,1],[70.45,1],[1610.12,1]]],
      "impliedStates": ["illumining_form"],
      "requiresResource": "pillars_across_heaven",
      "defaultResourceActive": false
    },
    {
      "id": "lib_coordinated",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 11.37,
      "formula": "11.37%",
      "multiplierByLevel": [5.72,6.19,6.66,7.31,7.78,8.32,9.07,9.82,10.57,11.37],
      "damageTags": ["coordinated"],
      "triggeredDamage": true,
      "requiresResourceAtLeast": {
        "id": "edict",
        "value": 1
      }
    },
    {
      "id": "intro_answering_electro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 157.54,
      "formula": "7.88% × 2 + 7.88% × 2 + 126.02%",
      "multiplierByLevel": [79.27,85.75,92.27,101.34,107.86,115.32,125.72,136.11,146.51,157.54],
      "segmentsByLevel": [[[3.97,2],[3.97,2],[63.39,1]],[[4.29,2],[4.29,2],[68.59,1]],[[4.62,2],[4.62,2],[73.79,1]],[[5.07,2],[5.07,2],[81.06,1]],[[5.4,2],[5.4,2],[86.26,1]],[[5.77,2],[5.77,2],[92.24,1]],[[6.29,2],[6.29,2],[100.56,1]],[[6.81,2],[6.81,2],[108.87,1]],[[7.33,2],[7.33,2],[117.19,1]],[[7.88,2],[7.88,2],[126.02,1]]],
      "impliedStates": ["answering_form", "electro_flare"]
    },
    {
      "id": "intro_answering",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 102.76,
      "formula": "10.28% + 20.55% + 10.28% + 20.55% × 3",
      "multiplierByLevel": [51.7,55.9,60.16,66.1,70.3,75.2,81.96,88.76,95.56,102.76],
      "segmentsByLevel": [[[5.17,1],[10.34,1],[5.17,1],[10.34,3]],[[5.59,1],[11.18,1],[5.59,1],[11.18,3]],[[6.02,1],[12.03,1],[6.02,1],[12.03,3]],[[6.61,1],[13.22,1],[6.61,1],[13.22,3]],[[7.03,1],[14.06,1],[7.03,1],[14.06,3]],[[7.52,1],[15.04,1],[7.52,1],[15.04,3]],[[8.2,1],[16.39,1],[8.2,1],[16.39,3]],[[8.88,1],[17.75,1],[8.88,1],[17.75,3]],[[9.56,1],[19.11,1],[9.56,1],[19.11,3]],[[10.28,1],[20.55,1],[10.28,1],[20.55,3]]],
      "impliedStates": ["answering_form", "unison"]
    },
    {
      "id": "intro_answering_unison",
      "category": "introSkill",
      "damageType": "resonanceSkill",
      "multiplier": 605.9,
      "formula": "60.59% + 121.18% + 60.59% + 121.18% × 3",
      "multiplierByLevel": [304.76,329.76,354.76,389.76,414.7,443.46,483.46,523.46,563.4,605.9],
      "segmentsByLevel": [[[30.48,1],[60.95,1],[30.48,1],[60.95,3]],[[32.98,1],[65.95,1],[32.98,1],[65.95,3]],[[35.48,1],[70.95,1],[35.48,1],[70.95,3]],[[38.98,1],[77.95,1],[38.98,1],[77.95,3]],[[41.47,1],[82.94,1],[41.47,1],[82.94,3]],[[44.35,1],[88.69,1],[44.35,1],[88.69,3]],[[48.35,1],[96.69,1],[48.35,1],[96.69,3]],[[52.35,1],[104.69,1],[52.35,1],[104.69,3]],[[56.34,1],[112.68,1],[56.34,1],[112.68,3]],[[60.59,1],[121.18,1],[60.59,1],[121.18,3]]],
      "impliedStates": ["answering_form", "unison"],
      "requiresResourceAtLeast": {
        "id": "source_intent",
        "value": 1,
        "alternateEvents": ["unisonResponse"]
      },
      "fallbackSkillId": "intro_answering"
    },
    {
      "id": "intro_illumining_electro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 228.4,
      "formula": "11.42% × 4 + 11.42% × 2 + 39.97% × 4",
      "multiplierByLevel": [114.94,124.36,133.74,146.94,156.36,167.2,182.28,197.34,212.4,228.4],
      "segmentsByLevel": [[[5.75,4],[5.75,2],[20.11,4]],[[6.22,4],[6.22,2],[21.76,4]],[[6.69,4],[6.69,2],[23.4,4]],[[7.35,4],[7.35,2],[25.71,4]],[[7.82,4],[7.82,2],[27.36,4]],[[8.36,4],[8.36,2],[29.26,4]],[[9.12,4],[9.12,2],[31.89,4]],[[9.87,4],[9.87,2],[34.53,4]],[[10.62,4],[10.62,2],[37.17,4]],[[11.42,4],[11.42,2],[39.97,4]]],
      "impliedStates": ["illumining_form", "electro_flare"]
    },
    {
      "id": "intro_illumining",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 282.96,
      "formula": "56.59% × 4 + 5.66% + 11.32% × 2 + 14.15% × 2",
      "multiplierByLevel": [142.37,154,165.68,182,193.72,207.13,225.76,244.47,263.13,282.96],
      "segmentsByLevel": [[[28.47,4],[2.85,1],[5.7,2],[7.12,2]],[[30.8,4],[3.08,1],[6.16,2],[7.7,2]],[[33.13,4],[3.32,1],[6.63,2],[8.29,2]],[[36.4,4],[3.64,1],[7.28,2],[9.1,2]],[[38.74,4],[3.88,1],[7.75,2],[9.69,2]],[[41.42,4],[4.15,1],[8.29,2],[10.36,2]],[[45.15,4],[4.52,1],[9.03,2],[11.29,2]],[[48.89,4],[4.89,1],[9.78,2],[12.23,2]],[[52.62,4],[5.27,1],[10.53,2],[13.16,2]],[[56.59,4],[5.66,1],[11.32,2],[14.15,2]]],
      "impliedStates": ["illumining_form", "unison"]
    },
    {
      "id": "intro_illumining_unison",
      "category": "introSkill",
      "damageType": "resonanceSkill",
      "multiplier": 786.13,
      "formula": "157.22% × 4 + 15.73% + 31.45% × 2 + 39.31% × 2",
      "multiplierByLevel": [395.41,427.88,460.27,505.68,538.13,575.37,627.27,679.13,731,786.13],
      "segmentsByLevel": [[[79.08,4],[7.91,1],[15.82,2],[19.77,2]],[[85.57,4],[8.56,1],[17.12,2],[21.4,2]],[[92.05,4],[9.21,1],[18.41,2],[23.02,2]],[[101.13,4],[10.12,1],[20.23,2],[25.29,2]],[[107.62,4],[10.77,1],[21.53,2],[26.91,2]],[[115.07,4],[11.51,1],[23.02,2],[28.77,2]],[[125.45,4],[12.55,1],[25.09,2],[31.37,2]],[[135.82,4],[13.59,1],[27.17,2],[33.96,2]],[[146.2,4],[14.62,1],[29.24,2],[36.55,2]],[[157.22,4],[15.73,1],[31.45,2],[39.31,2]]],
      "impliedStates": ["illumining_form", "unison"],
      "requiresResourceAtLeast": {
        "id": "source_intent",
        "value": 1,
        "alternateEvents": ["unisonResponse"]
      },
      "fallbackSkillId": "intro_illumining"
    },
    {
      "id": "forte_skill",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 897.17,
      "formula": "179.43% × 4 + 17.95% + 35.89% × 2 + 44.86% × 2",
      "multiplierByLevel": [451.33,488.33,525.33,577.13,614.13,656.68,715.88,775.09,834.27,897.17],
      "segmentsByLevel": [[[90.26,4],[9.03,1],[18.06,2],[22.57,2]],[[97.66,4],[9.77,1],[19.54,2],[24.42,2]],[[105.06,4],[10.51,1],[21.02,2],[26.27,2]],[[115.42,4],[11.55,1],[23.09,2],[28.86,2]],[[122.82,4],[12.29,1],[24.57,2],[30.71,2]],[[131.33,4],[13.14,1],[26.27,2],[32.84,2]],[[143.17,4],[14.32,1],[28.64,2],[35.8,2]],[[155.01,4],[15.51,1],[31.01,2],[38.76,2]],[[166.85,4],[16.69,1],[33.37,2],[41.72,2]],[[179.43,4],[17.95,1],[35.89,2],[44.86,2]]],
      "impliedStates": ["illumining_form"],
      "requiresResourceFull": "illumining_heart",
      "fallbackSkillId": "illumining_skill",
      "triggerEvents": ["castResonanceSkill"]
    },
    {
      "id": "forte_heavy_answering",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 570.62,
      "formula": "45.65% + 11.42% × 6 + 456.45%",
      "multiplierByLevel": [286.99,310.59,334.12,367,390.6,417.65,455.28,492.92,530.62,570.62],
      "segmentsByLevel": [[[22.96,1],[5.74,6],[229.59,1]],[[24.85,1],[6.22,6],[248.42,1]],[[26.73,1],[6.69,6],[267.25,1]],[[29.36,1],[7.34,6],[293.6,1]],[[31.25,1],[7.82,6],[312.43,1]],[[33.41,1],[8.36,6],[334.08,1]],[[36.42,1],[9.11,6],[364.2,1]],[[39.44,1],[9.86,6],[394.32,1]],[[42.45,1],[10.62,6],[424.45,1]],[[45.65,1],[11.42,6],[456.45,1]]],
      "impliedStates": ["answering_form"],
      "requiresResourceFull": "answering_heart",
      "fallbackSkillId": "heavy"
    },
    {
      "id": "forte_heavy_answering_enhanced",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 1241.45,
      "formula": "99.32% + 24.83% × 6 + 993.15%",
      "multiplierByLevel": [624.45,675.69,726.87,798.6,849.77,908.67,990.61,1072.48,1154.42,1241.45],
      "segmentsByLevel": [[[49.96,1],[12.49,6],[499.55,1]],[[54.06,1],[13.52,6],[540.51,1]],[[58.15,1],[14.54,6],[581.48,1]],[[63.89,1],[15.98,6],[638.83,1]],[[67.98,1],[17,6],[679.79,1]],[[72.69,1],[18.18,6],[726.9,1]],[[79.25,1],[19.82,6],[792.44,1]],[[85.8,1],[21.45,6],[857.98,1]],[[92.36,1],[23.09,6],[923.52,1]],[[99.32,1],[24.83,6],[993.15,1]]],
      "impliedStates": ["answering_form"],
      "requiresAllResourcesAtLeast": [
        {
          "id": "answering_heart",
          "value": 100
        },
        {
          "id": "resolution_of_wishes",
          "value": 1
        }
      ],
      "fallbackSkillId": "forte_heavy_answering"
    },
    {
      "id": "forte_heavy_illumining",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 410.78,
      "formula": "10.27% × 4 + 369.70%",
      "multiplierByLevel": [206.64,223.56,240.53,264.24,281.17,300.66,327.78,354.9,381.97,410.78],
      "segmentsByLevel": [[[5.17,4],[185.96,1]],[[5.59,4],[201.2,1]],[[6.02,4],[216.45,1]],[[6.61,4],[237.8,1]],[[7.03,4],[253.05,1]],[[7.52,4],[270.58,1]],[[8.2,4],[294.98,1]],[[8.88,4],[319.38,1]],[[9.55,4],[343.77,1]],[[10.27,4],[369.7,1]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"],
      "requiresResourceBelow": {
        "id": "illumining_heart",
        "value": 1
      },
      "fallbackSkillId": "illumining_heavy"
    },
    {
      "id": "forte_heavy_illumining_enhanced",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 1081.69,
      "formula": "27.05% × 4 + 973.49%",
      "multiplierByLevel": [544.1,588.69,633.32,695.78,740.37,791.7,863.07,934.47,1005.83,1081.69],
      "segmentsByLevel": [[[13.61,4],[489.66,1]],[[14.72,4],[529.81,1]],[[15.84,4],[569.96,1]],[[17.4,4],[626.18,1]],[[18.51,4],[666.33,1]],[[19.8,4],[712.5,1]],[[21.58,4],[776.75,1]],[[23.37,4],[840.99,1]],[[25.15,4],[905.23,1]],[[27.05,4],[973.49,1]]],
      "impliedStates": ["illumining_form", "mechanism_dominion"],
      "requiresResourceBelow": {
        "id": "illumining_heart",
        "value": 1
      },
      "requiresResourceAtLeast": {
        "id": "law_of_heaven",
        "value": 1
      },
      "fallbackSkillId": "forte_heavy_illumining"
    },
    {
      "id": "outro",
      "category": "outroSkill",
      "damageType": "outroSkill",
      "multiplier": 100,
      "formula": "100%",
      "fixedLevel": true
    }
  ],
  "defaultSkillId": "forte_heavy_answering_enhanced",
  "validSubs": ["atkFlat", "critRate", "critDamage", "elem", "skillDmg"],
  "echoSet": 360236,
  "combatStates": [
    {
      "id": "resonance_mode",
      "kind": "mode",
      "required": true,
      "defaultValue": "unison",
      "options": [
        {
          "value": "unison"
        },
        {
          "value": "electro_flare"
        }
      ]
    },
    {
      "id": "combat_form",
      "kind": "form",
      "required": true,
      "defaultValue": "answering_form",
      "options": [
        {
          "value": "answering_form"
        },
        {
          "value": "illumining_form"
        }
      ]
    },
    {
      "id": "mechanism_dominion",
      "kind": "status",
      "filterSkills": true,
      "options": [
        {
          "value": "mechanism_dominion_active"
        }
      ]
    },
    {
      "id": "heart_manifest",
      "kind": "status",
      "entryEffect": {
        "event": "applyElectroFlare",
        "stacks": 5,
        "requiresState": "electro_flare"
      },
      "options": [
        {
          "value": "heart_manifest_active"
        }
      ]
    },
    {
      "id": "fleeting_thunder",
      "kind": "target",
      "options": [
        {
          "value": "fleeting_thunder_active"
        }
      ]
    },
    {
      "id": "nearby_targets",
      "kind": "field",
      "options": [
        {
          "value": "targets_in_combat_range"
        }
      ]
    }
  ],
  "skillEvents": [
    {
      "skills": ["intro_answering_unison", "intro_illumining_unison"],
      "event": "unisonResponse",
      "requiresState": "unison",
      "requiresUnison": true,
      "requiresResource": "unison_response",
      "defaultResourceActive": false
    },
    {
      "skills": ["intro_answering_electro", "intro_illumining_electro", "forte_heavy_answering_enhanced"],
      "event": "applyElectroFlare",
      "stacks": 1,
      "requiresState": "electro_flare"
    },
    {
      "skills": ["forte_skill", "forte_heavy_illumining_enhanced"],
      "event": "applyElectroFlare",
      "stacks": 5,
      "requiresState": "electro_flare"
    },
    {
      "skills": ["pillars_na1", "pillars_na2", "pillars_na3", "pillars_na4", "pillars_dodge"],
      "event": "applyElectroFlare",
      "stacks": 1,
      "requiresState": "electro_flare",
      "requiresResourceAtLeast": {
        "id": "electro_flare_charges",
        "value": 1
      }
    },
    {
      "event": "applyElectroFlare",
      "stacks": "max",
      "maxStacks": 16,
      "requiresAllStates": ["electro_flare", "heart_manifest", "fleeting_thunder"],
      "requiresResourceAtLeast": {
        "id": "thunderglow",
        "value": 10
      }
    }
  ],
  "buffs": [
    {
      "id": "b_unison_intro_attack",
      "zone": "attackPercent",
      "value": 50,
      "scope": "self",
      "requiresState": "unison",
      "defaultActive": false,
      "triggerSkills": ["intro_answering_unison", "intro_illumining_unison"],
      "duration": 8
    },
    {
      "id": "b_electro_bonus",
      "zone": "damageBonus",
      "element": "electro",
      "value": 50,
      "scope": "self",
      "requiresState": "electro_flare",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false
    },
    {
      "id": "b_rover_electro_bonus",
      "zone": "damageBonus",
      "element": "electro",
      "value": 20,
      "scope": "team",
      "requiresState": "electro_flare",
      "requiresTeamChar": "rover_electro",
      "requiresActiveChar": ["hsin", "rover_electro"],
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_unison_boon",
      "zone": "finalDmg",
      "value": 12,
      "scope": "self",
      "maxStacks": 4,
      "stackResource": "unison_boon",
      "requiresUnison": true
    },
    {
      "id": "b_electro_trigger_base",
      "zone": "skillMultBonus",
      "effect": "electro",
      "value": -100,
      "scope": "self",
      "requiresSourceActive": true,
      "skills": ["skill", "illumining_skill", "forte_skill"],
      "requiresState": "electro_flare"
    },
    {
      "id": "b_electro_trigger_resource",
      "zone": "skillMultBonus",
      "effect": "electro",
      "value": 3500,
      "scope": "self",
      "requiresSourceActive": true,
      "maxStacks": 100,
      "stackResource": "heart_of_thunder",
      "skills": ["skill", "illumining_skill", "forte_skill"],
      "requiresState": "electro_flare"
    },
    {
      "id": "b_outro_unison_amplify",
      "zone": "amplify",
      "value": 20,
      "scope": "team",
      "requiresState": "unison",
      "requiresUnison": true,
      "triggerOutro": true,
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_outro_electro_amplify",
      "zone": "amplify",
      "element": "electro",
      "value": 20,
      "scope": "team",
      "requiresState": "electro_flare",
      "triggerOutro": true,
      "defaultActive": false,
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_intro_mult",
          "zone": "skillMultBonus",
          "value": 15,
          "scope": "self",
          "skills": ["intro_answering_unison", "intro_illumining_unison"],
          "requiresState": "unison"
        },
        {
          "id": "k1_unison_intro_mult",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": ["intro_answering_unison", "intro_illumining_unison"],
          "maxStacks": 4,
          "stackResource": "unison_boon",
          "requiresState": "unison"
        },
        {
          "id": "k1_electro_trigger_resource",
          "zone": "skillMultBonus",
          "effect": "electro",
          "value": 700,
          "scope": "self",
          "requiresSourceActive": true,
          "maxStacks": 100,
          "stackResource": "heart_of_thunder",
          "skills": ["skill", "illumining_skill", "forte_skill"],
          "requiresState": "electro_flare"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_heavy_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": ["forte_heavy_answering", "forte_heavy_answering_enhanced", "forte_heavy_illumining", "forte_heavy_illumining_enhanced"]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_lib_mult",
          "zone": "skillMultBonus",
          "value": 70,
          "scope": "self",
          "skills": ["lib"]
        },
        {
          "id": "k3_lib_cd",
          "zone": "critDamage",
          "value": 20,
          "scope": "self",
          "skills": ["lib"],
          "requiresState": "unison"
        },
        {
          "id": "k3_lib_unison_cd",
          "zone": "critDamage",
          "value": 60,
          "scope": "self",
          "skills": ["lib"],
          "requiresState": "unison",
          "maxStacks": 4,
          "stackResource": "unison_boon"
        },
        {
          "id": "k3_electro_trigger",
          "zone": "skillMultBonus",
          "effect": "electro",
          "value": 1400,
          "scope": "self",
          "requiresSourceActive": true,
          "skills": ["lib"],
          "requiresState": "electro_flare",
          "requiresEffectStacks": {
            "effect": "electro",
            "stacks": 1
          }
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_all_attribute_bonus",
          "zone": "damageBonus",
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
      "buffs": [
        {
          "id": "k6_skill_vulnerability",
          "zone": "vulnerability",
          "damageType": "resonanceSkill",
          "value": 40,
          "scope": "self"
        },
        {
          "id": "k6_skill_def_ignore",
          "zone": "defIgnore",
          "damageType": "resonanceSkill",
          "value": 20,
          "scope": "self"
        },
        {
          "id": "k6_electro_fixed_crit",
          "zone": "fixedCrit",
          "effect": "electro",
          "critRate": 80,
          "critDamage": 230,
          "scope": "team",
          "requiresAllStates": ["electro_flare", "nearby_targets"],
          "defaultActive": false
        }
      ]
    }
  ],
  "modes": null
});
