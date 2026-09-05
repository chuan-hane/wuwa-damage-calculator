WUWA.register({
  "id": "denia",
  "tuneStrainCapBonus": 1,
  "tuneStrainCapRequiresState": "mode_1_option_2",
  "aliases": [],
  "debut": 3.3,
  "element": "fusion",
  "weaponType": 5,
  "quality": 5,
  "effectTypes": [
    "fusion"
  ],
  "effectTypeRequiresState": {
    "fusion": "mode_1_option_1"
  },
  "signatureWeaponId": "forged_dwarf_star",
  "portrait": "",
  "base": {
    "hp": 11025,
    "attack": 425,
    "defense": 1148,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 10,
    "tree": {
      "critDamage": 16,
      "attackPct": 12
    }
  },
  "resources": [
    {
      "id": "darkCore",
      "min": 0,
      "max": 3,
      "maxBySeq": [
        {
          "seq": 3,
          "max": 5
        }
      ],
      "defaultValue": "max"
    },
    {
      "id": "voidParticle",
      "max": 100,
      "defaultValue": "max"
    },
    {
      "id": "conformalCharge",
      "max": 100,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "sc_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 32.69,
      "formula": "32.69%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [16.44,17.79,19.14,21.03,22.38,23.93,26.08,28.24,30.4,32.69]
    },
    {
      "id": "sc_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 60.36,
      "formula": "30.18% × 2",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [30.36,32.86,35.34,38.84,41.32,44.18,48.18,52.16,56.14,60.36],
      "segmentsByLevel": [[[15.18,2]],[[16.43,2]],[[17.67,2]],[[19.42,2]],[[20.66,2]],[[22.09,2]],[[24.09,2]],[[26.08,2]],[[28.07,2]],[[30.18,2]]]
    },
    {
      "id": "sc_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.47,
      "formula": "25.49% × 3",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [38.46,41.64,44.79,49.2,52.35,55.98,61.02,66.06,71.13,76.47],
      "segmentsByLevel": [[[12.82,3]],[[13.88,3]],[[14.93,3]],[[16.4,3]],[[17.45,3]],[[18.66,3]],[[20.34,3]],[[22.02,3]],[[23.71,3]],[[25.49,3]]]
    },
    {
      "id": "sc_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 128,
      "formula": "128.00%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [64.38,69.66,74.94,82.33,87.61,93.68,102.13,110.58,119.02,128]
    },
    {
      "id": "sc_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 161.52,
      "formula": "80.76% × 2",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [81.24,87.92,94.58,103.9,110.56,118.22,128.88,139.54,150.2,161.52],
      "segmentsByLevel": [[[40.62,2]],[[43.96,2]],[[47.29,2]],[[51.95,2]],[[55.28,2]],[[59.11,2]],[[64.44,2]],[[69.77,2]],[[75.1,2]],[[80.76,2]]]
    },
    {
      "id": "sc_air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 73.97,
      "formula": "29.59% + 44.38%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [37.2,40.27,43.32,47.58,50.63,54.14,59.02,63.9,68.78,73.97],
      "segmentsByLevel": [[[14.88,1],[22.32,1]],[[16.11,1],[24.16,1]],[[17.33,1],[25.99,1]],[[19.03,1],[28.55,1]],[[20.25,1],[30.38,1]],[[21.66,1],[32.48,1]],[[23.61,1],[35.41,1]],[[25.56,1],[38.34,1]],[[27.51,1],[41.27,1]],[[29.59,1],[44.38,1]]]
    },
    {
      "id": "sc_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 148.05,
      "formula": "49.35% × 3",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [74.46,80.58,86.7,95.22,101.34,108.36,118.14,127.89,137.67,148.05],
      "segmentsByLevel": [[[24.82,3]],[[26.86,3]],[[28.9,3]],[[31.74,3]],[[33.78,3]],[[36.12,3]],[[39.38,3]],[[42.63,3]],[[45.89,3]],[[49.35,3]]]
    },
    {
      "id": "bd_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 36.51,
      "formula": "36.51%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [18.36,19.87,21.38,23.48,24.99,26.72,29.13,31.54,33.95,36.51]
    },
    {
      "id": "bd_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [47.19,51.06,54.92,60.33,64.2,68.65,74.85,81,87.2,93.79],
      "segmentsByLevel": [[[18.87,1],[7.08,4]],[[20.42,1],[7.66,4]],[[21.96,1],[8.24,4]],[[24.13,1],[9.05,4]],[[25.68,1],[9.63,4]],[[27.45,1],[10.3,4]],[[29.93,1],[11.23,4]],[[32.4,1],[12.15,4]],[[34.88,1],[13.08,4]],[[37.51,1],[14.07,4]]]
    },
    {
      "id": "bd_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.39,
      "formula": "62.39%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [31.38,33.96,36.53,40.13,42.71,45.67,49.78,53.9,58.02,62.39]
    },
    {
      "id": "bd_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [59.59,64.47,69.36,76.2,81.09,86.7,94.52,102.34,110.16,118.46],
      "segmentsByLevel": [[[17.88,1],[41.71,1]],[[19.34,1],[45.13,1]],[[20.81,1],[48.55,1]],[[22.86,1],[53.34,1]],[[24.33,1],[56.76,1]],[[26.01,1],[60.69,1]],[[28.36,1],[66.16,1]],[[30.7,1],[71.64,1]],[[33.05,1],[77.11,1]],[[35.54,1],[82.92,1]]]
    },
    {
      "id": "bd_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 137.06,
      "formula": "137.06%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [68.94,74.6,80.25,88.17,93.82,100.32,109.36,118.41,127.45,137.06]
    },
    {
      "id": "bd_air_heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 73.97,
      "formula": "29.59% + 44.38%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [37.2,40.27,43.32,47.58,50.63,54.14,59.02,63.9,68.78,73.97],
      "segmentsByLevel": [[[14.88,1],[22.32,1]],[[16.11,1],[24.16,1]],[[17.33,1],[25.99,1]],[[19.03,1],[28.55,1]],[[20.25,1],[30.38,1]],[[21.66,1],[32.48,1]],[[23.61,1],[35.41,1]],[[25.56,1],[38.34,1]],[[27.51,1],[41.27,1]],[[29.59,1],[44.38,1]]]
    },
    {
      "id": "bd_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 108.08,
      "formula": "108.08%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [54.36,58.82,63.28,69.52,73.98,79.1,86.24,93.37,100.5,108.08]
    },
    {
      "id": "bd_air1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 36.51,
      "formula": "36.51%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [18.36,19.87,21.38,23.48,24.99,26.72,29.13,31.54,33.95,36.51]
    },
    {
      "id": "bd_air2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [47.19,51.06,54.92,60.33,64.2,68.65,74.85,81,87.2,93.79],
      "segmentsByLevel": [[[18.87,1],[7.08,4]],[[20.42,1],[7.66,4]],[[21.96,1],[8.24,4]],[[24.13,1],[9.05,4]],[[25.68,1],[9.63,4]],[[27.45,1],[10.3,4]],[[29.93,1],[11.23,4]],[[32.4,1],[12.15,4]],[[34.88,1],[13.08,4]],[[37.51,1],[14.07,4]]]
    },
    {
      "id": "bd_air3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.39,
      "formula": "62.39%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [31.38,33.96,36.53,40.13,42.71,45.67,49.78,53.9,58.02,62.39]
    },
    {
      "id": "bd_air4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [59.59,64.47,69.36,76.2,81.09,86.7,94.52,102.34,110.16,118.46],
      "segmentsByLevel": [[[17.88,1],[41.71,1]],[[19.34,1],[45.13,1]],[[20.81,1],[48.55,1]],[[22.86,1],[53.34,1]],[[24.33,1],[56.76,1]],[[26.01,1],[60.69,1]],[[28.36,1],[66.16,1]],[[30.7,1],[71.64,1]],[[33.05,1],[77.11,1]],[[35.54,1],[82.92,1]]]
    },
    {
      "id": "void_bd_na1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 36.51,
      "formula": "36.51%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_na1",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [18.36,19.87,21.38,23.48,24.99,26.72,29.13,31.54,33.95,36.51]
    },
    {
      "id": "void_bd_na2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_na2",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [47.19,51.06,54.92,60.33,64.2,68.65,74.85,81,87.2,93.79],
      "segmentsByLevel": [[[18.87,1],[7.08,4]],[[20.42,1],[7.66,4]],[[21.96,1],[8.24,4]],[[24.13,1],[9.05,4]],[[25.68,1],[9.63,4]],[[27.45,1],[10.3,4]],[[29.93,1],[11.23,4]],[[32.4,1],[12.15,4]],[[34.88,1],[13.08,4]],[[37.51,1],[14.07,4]]]
    },
    {
      "id": "void_bd_na3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 62.39,
      "formula": "62.39%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_na3",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [31.38,33.96,36.53,40.13,42.71,45.67,49.78,53.9,58.02,62.39]
    },
    {
      "id": "void_bd_na4",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_na4",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [59.59,64.47,69.36,76.2,81.09,86.7,94.52,102.34,110.16,118.46],
      "segmentsByLevel": [[[17.88,1],[41.71,1]],[[19.34,1],[45.13,1]],[[20.81,1],[48.55,1]],[[22.86,1],[53.34,1]],[[24.33,1],[56.76,1]],[[26.01,1],[60.69,1]],[[28.36,1],[66.16,1]],[[30.7,1],[71.64,1]],[[33.05,1],[77.11,1]],[[35.54,1],[82.92,1]]]
    },
    {
      "id": "void_bd_heavy",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 137.06,
      "formula": "137.06%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_heavy",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [68.94,74.6,80.25,88.17,93.82,100.32,109.36,118.41,127.45,137.06]
    },
    {
      "id": "void_bd_air_heavy",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 73.97,
      "formula": "29.59% + 44.38%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_air_heavy",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [37.2,40.27,43.32,47.58,50.63,54.14,59.02,63.9,68.78,73.97],
      "segmentsByLevel": [[[14.88,1],[22.32,1]],[[16.11,1],[24.16,1]],[[17.33,1],[25.99,1]],[[19.03,1],[28.55,1]],[[20.25,1],[30.38,1]],[[21.66,1],[32.48,1]],[[23.61,1],[35.41,1]],[[25.56,1],[38.34,1]],[[27.51,1],[41.27,1]],[[29.59,1],[44.38,1]]]
    },
    {
      "id": "void_bd_dodge",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 108.08,
      "formula": "108.08%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_dodge",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [54.36,58.82,63.28,69.52,73.98,79.1,86.24,93.37,100.5,108.08]
    },
    {
      "id": "void_bd_air1",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 36.51,
      "formula": "36.51%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_air1",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [18.36,19.87,21.38,23.48,24.99,26.72,29.13,31.54,33.95,36.51]
    },
    {
      "id": "void_bd_air2",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 93.79,
      "formula": "37.51% + 14.07% × 4",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_air2",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [47.19,51.06,54.92,60.33,64.2,68.65,74.85,81,87.2,93.79],
      "segmentsByLevel": [[[18.87,1],[7.08,4]],[[20.42,1],[7.66,4]],[[21.96,1],[8.24,4]],[[24.13,1],[9.05,4]],[[25.68,1],[9.63,4]],[[27.45,1],[10.3,4]],[[29.93,1],[11.23,4]],[[32.4,1],[12.15,4]],[[34.88,1],[13.08,4]],[[37.51,1],[14.07,4]]]
    },
    {
      "id": "void_bd_air3",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 62.39,
      "formula": "62.39%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_air3",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [31.38,33.96,36.53,40.13,42.71,45.67,49.78,53.9,58.02,62.39]
    },
    {
      "id": "void_bd_air4",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 118.46,
      "formula": "35.54% + 82.92%",
      "requiresResource": "voidParticle",
      "fallbackSkillId": "bd_air4",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [59.59,64.47,69.36,76.2,81.09,86.7,94.52,102.34,110.16,118.46],
      "segmentsByLevel": [[[17.88,1],[41.71,1]],[[19.34,1],[45.13,1]],[[20.81,1],[48.55,1]],[[22.86,1],[53.34,1]],[[24.33,1],[56.76,1]],[[26.01,1],[60.69,1]],[[28.36,1],[66.16,1]],[[30.7,1],[71.64,1]],[[33.05,1],[77.11,1]],[[35.54,1],[82.92,1]]]
    },
    {
      "id": "sc_skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 104.51,
      "formula": "17.42% × 3 + 52.25%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [52.56,56.88,61.19,67.24,71.56,76.5,83.39,90.29,97.19,104.51],
      "segmentsByLevel": [[[8.76,3],[26.28,1]],[[9.48,3],[28.44,1]],[[10.2,3],[30.59,1]],[[11.21,3],[33.61,1]],[[11.93,3],[35.77,1]],[[12.75,3],[38.25,1]],[[13.9,3],[41.69,1]],[[15.05,3],[45.14,1]],[[16.2,3],[48.59,1]],[[17.42,3],[52.25,1]]]
    },
    {
      "id": "bd_skill_beckon",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 103.7,
      "formula": "31.10% + 14.52% × 5",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [52.15,56.43,60.71,66.71,70.99,75.92,82.72,89.57,96.42,103.7],
      "segmentsByLevel": [[[15.65,1],[7.3,5]],[[16.93,1],[7.9,5]],[[18.21,1],[8.5,5]],[[20.01,1],[9.34,5]],[[21.29,1],[9.94,5]],[[22.77,1],[10.63,5]],[[24.82,1],[11.58,5]],[[26.87,1],[12.54,5]],[[28.92,1],[13.5,5]],[[31.1,1],[14.52,5]]]
    },
    {
      "id": "bd_banish1",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 104.04,
      "formula": "34.68% × 3",
      "requiresResource": "darkCore",
      "fallbackSkillId": "bd_skill_beckon",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [52.32,56.64,60.93,66.93,71.22,76.14,83.01,89.88,96.75,104.04],
      "segmentsByLevel": [[[17.44,3]],[[18.88,3]],[[20.31,3]],[[22.31,3]],[[23.74,3]],[[25.38,3]],[[27.67,3]],[[29.96,3]],[[32.25,3]],[[34.68,3]]]
    },
    {
      "id": "bd_banish2",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 112.01,
      "formula": "112.01%",
      "requiresResource": "darkCore",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [56.34,60.96,65.58,72.05,76.67,81.99,89.38,96.77,104.16,112.01]
    },
    {
      "id": "sc_lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 397.62,
      "formula": "397.62%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [200,216.4,232.8,255.76,272.16,291.02,317.26,343.5,369.74,397.62]
    },
    {
      "id": "bd_lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 795.24,
      "formula": "198.81% × 4",
      "requiresResource": "conformalCharge",
      "requiresResourceFull": "conformalCharge",
      "impliedStates": [
        "form_1_option_2"
      ],
      "multiplierByLevel": [400,432.8,465.6,511.52,544.32,582.04,634.52,687,739.48,795.24],
      "segmentsByLevel": [[[100,4]],[[108.2,4]],[[116.4,4]],[[127.88,4]],[[136.08,4]],[[145.51,4]],[[158.63,4]],[[171.75,4]],[[184.87,4]],[[198.81,4]]]
    },
    {
      "id": "sc_intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 104.62,
      "formula": "104.62%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [52.62,56.94,61.25,67.3,71.61,76.57,83.48,90.38,97.28,104.62]
    },
    {
      "id": "bd_intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 155.22,
      "formula": "51.74% × 3",
      "impliedStates": [
        "form_1_option_2"
      ],
      "triggerEvents": [
        "introEntry"
      ],
      "multiplierByLevel": [78.06,84.48,90.87,99.84,106.23,113.61,123.84,134.07,144.33,155.22],
      "segmentsByLevel": [[[26.02,3]],[[28.16,3]],[[30.29,3]],[[33.28,3]],[[35.41,3]],[[37.87,3]],[[41.28,3]],[[44.69,3]],[[48.11,3]],[[51.74,3]]]
    },
    {
      "id": "erosion_field",
      "category": "forteCircuit",
      "damageType": "resonanceLiberation",
      "multiplier": 136.33,
      "formula": "136.33%",
      "impliedStates": [
        "field_1_option_1"
      ],
      "multiplierByLevel": [68.58,74.2,79.82,87.69,93.32,99.78,108.78,117.78,126.77,136.33]
    },
    {
      "id": "c3_sc_na4_dark_core",
      "category": "basicAttack",
      "damageType": "resonanceLiberation",
      "multiplier": 128,
      "formula": "128.00%",
      "seq": 3,
      "requiresResource": "darkCore",
      "requiresResourceFull": "darkCore",
      "fallbackSkillId": "sc_na4",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [64.38,69.66,74.94,82.33,87.61,93.68,102.13,110.58,119.02,128]
    },
    {
      "id": "c3_sc_skill_dark_core",
      "category": "resonanceSkill",
      "damageType": "resonanceLiberation",
      "multiplier": 104.51,
      "formula": "17.42% × 3 + 52.25%",
      "seq": 3,
      "requiresResource": "darkCore",
      "requiresResourceFull": "darkCore",
      "fallbackSkillId": "sc_skill",
      "impliedStates": [
        "form_1_option_1"
      ],
      "multiplierByLevel": [52.56,56.88,61.19,67.24,71.56,76.5,83.39,90.29,97.19,104.51],
      "segmentsByLevel": [[[8.76,3],[26.28,1]],[[9.48,3],[28.44,1]],[[10.2,3],[30.59,1]],[[11.21,3],[33.61,1]],[[11.93,3],[35.77,1]],[[12.75,3],[38.25,1]],[[13.9,3],[41.69,1]],[[15.05,3],[45.14,1]],[[16.2,3],[48.59,1]],[[17.42,3],[52.25,1]]]
    }
  ],
  "defaultSkillId": "bd_lib",
  "skillEvents": [
    {
      "skills": [
        "sc_lib",
        "bd_lib",
        "sc_intro",
        "bd_intro",
        "erosion_field"
      ],
      "event": "applyFusionBurst",
      "stacks": 2,
      "requiresState": "mode_1_option_1"
    },
    {
      "skills": [
        "sc_na3",
        "sc_na4",
        "bd_na3",
        "bd_na4",
        "bd_air3",
        "bd_air4",
        "void_bd_na3",
        "void_bd_na4",
        "void_bd_air3",
        "void_bd_air4"
      ],
      "event": "applyFusionBurst",
      "stacks": 1,
      "requiresState": "mode_1_option_1"
    },
    {
      "skills": [
        "erosion_field"
      ],
      "event": "applyFusionBurst",
      "stacks": "max",
      "seq": 6,
      "requiresState": "mode_1_option_1"
    }
  ],
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 28,
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "required": true,
      "defaultValue": "form_1_option_2",
      "options": [
        {
          "value": "form_1_option_1"
        },
        {
          "value": "form_1_option_2"
        }
      ]
    },
    {
      "id": "mode_1",
      "kind": "mode",
      "required": true,
      "defaultValue": "mode_1_option_1",
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
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
        },
        {
          "value": "buff_1_option_2"
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
    },
    {
      "id": "target_1",
      "kind": "target",
      "requiresState": "mode_1_option_2",
      "options": [
        {
          "value": "target_1_option_1"
        },
        {
          "value": "target_1_option_2",
          "formulaKind": "coherenceInterference",
          "maxStacks": 4,
          "perStackRate": 0.12
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_entropy_atk",
      "zone": "attackPercent",
      "value": 30,
      "scope": "self",
      "requiresState": "buff_1_option_2"
    },
    {
      "id": "b_void_particle_mult",
      "zone": "skillMultBonus",
      "value": 50,
      "scope": "self",
      "skills": [
        "void_bd_na1",
        "void_bd_na2",
        "void_bd_na3",
        "void_bd_na4",
        "void_bd_heavy",
        "void_bd_air_heavy",
        "void_bd_dodge",
        "void_bd_air1",
        "void_bd_air2",
        "void_bd_air3",
        "void_bd_air4"
      ]
    },
    {
      "id": "b_etched_fusion",
      "zone": "damageBonus",
      "element": "fusion",
      "value": 30,
      "scope": "team",
      "requiresState": [
        "buff_1_option_1",
        "buff_1_option_2"
      ],
      "requiresAllStates": [
        "mode_1_option_1"
      ]
    },
    {
      "id": "b_etched_tune_base",
      "zone": "breakAmp",
      "value": 10,
      "scope": "team",
      "requiresState": [
        "buff_1_option_1",
        "buff_1_option_2"
      ],
      "requiresAllStates": [
        "mode_1_option_2"
      ]
    },
    {
      "id": "b_etched_tune_scale",
      "zone": "breakAmp",
      "scope": "team",
      "requiresState": [
        "buff_1_option_1",
        "buff_1_option_2"
      ],
      "requiresAllStates": [
        "mode_1_option_2"
      ],
      "scaleBy": {
        "stat": "discordEff",
        "target": "output",
        "statBonus": -100,
        "rate": 0.8,
        "min": 0,
        "cap": 40,
        "includeActiveBuffs": true
      }
    },
    {
      "id": "b_tune_response",
      "zone": "finalDmg",
      "scope": "self",
      "requiresState": "target_1_option_2",
      "requiresAllStates": [
        "mode_1_option_2"
      ],
      "maxStacks": 4,
      "defaultStacks": 0,
      "stackGroup": "stack_group_1",
      "scaleBy": {
        "stat": "breakAmp",
        "rate": 0.48
      },
      "stackState": "target_1_option_2"
    },
    {
      "id": "b_outro_fusion",
      "zone": "amplify",
      "effect": "fusion",
      "value": 60,
      "scope": "team",
      "requiresState": "mode_1_option_1",
      "triggerOutro": true,
      "defaultActive": false,
      "duration": 30
    },
    {
      "id": "b_outro_tune_all",
      "zone": "amplify",
      "value": 15,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "triggerOutro": true,
      "defaultActive": false,
      "duration": 16
    },
    {
      "id": "b_outro_tune_extra",
      "zone": "amplify",
      "value": 25,
      "scope": "team",
      "requiresState": "mode_1_option_2",
      "triggerOutro": true,
      "defaultActive": false,
      "duration": 16
    },
    {
      "id": "b_banish_dark_core_mult",
      "scope": "self",
      "skills": [
        "bd_banish2"
      ],
      "multScaleAddByResource": {
        "id": "darkCore",
        "rate": 150
      }
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_cd",
          "zone": "critDamage",
          "value": 30,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_fusion_bonus",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 50,
          "scope": "team",
          "requiresState": "mode_1_option_1",
          "defaultActive": false,
          "duration": 15
        },
        {
          "id": "k2_res",
          "zone": "resShred",
          "element": "fusion",
          "value": 10,
          "scope": "self",
          "requiresState": "mode_1_option_1",
          "maxStacks": 10,
          "defaultStacks": 0,
          "defaultActive": false,
          "stackGroup": "stack_group_2",
          "duration": 15
        },
        {
          "id": "k2_break",
          "zone": "breakAmp",
          "value": 20,
          "scope": "team",
          "requiresState": "mode_1_option_2",
          "defaultActive": false,
          "duration": 15
        },
        {
          "id": "k2_banish",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "bd_banish1",
            "bd_banish2"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_bd_lib",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "bd_lib"
          ]
        },
        {
          "id": "k3_dark_core",
          "multAdd": 1200,
          "scope": "self",
          "skills": [
            "c3_sc_na4_dark_core",
            "c3_sc_skill_dark_core"
          ]
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
          "id": "k5_sc_lib",
          "zone": "amplify",
          "value": 100,
          "scope": "self",
          "skills": [
            "sc_lib"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_atk",
          "zone": "attackPercent",
          "value": 60,
          "scope": "self",
          "requiresState": [
            "buff_1_option_1",
            "buff_1_option_2"
          ]
        },
        {
          "id": "k6_fusion",
          "zone": "damageBonus",
          "element": "fusion",
          "value": 60,
          "scope": "self",
          "requiresState": [
            "buff_1_option_1",
            "buff_1_option_2"
          ]
        },
        {
          "id": "k6_fusion_extra",
          "zone": "skillMultBonus",
          "effect": "fusion",
          "value": 200,
          "scope": "self",
          "requiresState": "mode_1_option_1",
          "skills": [
            "erosion_field"
          ]
        }
      ]
    }
  ],
  "modes": null
});
