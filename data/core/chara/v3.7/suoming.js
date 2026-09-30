"use strict";

WUWA.register({
  "id": "suoming",
  "aliases": [],
  "debut": 3.7,
  "element": "electro",
  "weaponType": 2,
  "quality": 5,
  "signatureWeaponId": "unspoken_rue",
  "portrait": "",
  "unison": {
    "boonClearedByBuff": "b_seal_master_cd",
    "boonGrants": [
      {
        "skills": [
          "unison_intro",
          "unison_unfurled_intro"
        ],
        "stacks": 1,
        "afterAction": true,
        "maxContribution": 1,
        "duration": 30
      },
      {
        "seq": 3,
        "skills": [
          "intro",
          "unfurled_intro"
        ],
        "stacks": 1,
        "cooldown": 25,
        "maxContribution": 1,
        "duration": 30,
        "manual": true
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
      "id": "delusion",
      "min": 0,
      "max": 800,
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
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 31.55,
      "formula": "31.55%",
      "multiplierByLevel": [15.87,17.17,18.48,20.3,21.6,23.09,25.18,27.26,29.34,31.55],
      "impliedStates": [
        "awakened_mind"
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 62.92,
      "formula": "15.73% × 2 + 31.46%",
      "multiplierByLevel": [31.67,34.24,36.84,40.48,43.08,46.07,50.2,54.36,58.52,62.92],
      "segmentsByLevel": [[[7.92,2],[15.83,1]],[[8.56,2],[17.12,1]],[[9.21,2],[18.42,1]],[[10.12,2],[20.24,1]],[[10.77,2],[21.54,1]],[[11.52,2],[23.03,1]],[[12.55,2],[25.1,1]],[[13.59,2],[27.18,1]],[[14.63,2],[29.26,1]],[[15.73,2],[31.46,1]]],
      "impliedStates": [
        "awakened_mind"
      ]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 110.05,
      "formula": "22.01% × 3 + 44.02%",
      "multiplierByLevel": [55.35,59.9,64.44,70.8,75.34,80.55,87.8,95.09,102.34,110.05],
      "segmentsByLevel": [[[11.07,3],[22.14,1]],[[11.98,3],[23.96,1]],[[12.89,3],[25.77,1]],[[14.16,3],[28.32,1]],[[15.07,3],[30.13,1]],[[16.11,3],[32.22,1]],[[17.56,3],[35.12,1]],[[19.02,3],[38.03,1]],[[20.47,3],[40.93,1]],[[22.01,3],[44.02,1]]],
      "impliedStates": [
        "awakened_mind"
      ]
    },
    {
      "id": "unfurled_na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 130.84,
      "formula": "65.42% + 32.71% × 2",
      "multiplierByLevel": [65.83,71.23,76.63,84.16,89.56,95.79,104.4,113.04,121.68,130.84],
      "segmentsByLevel": [[[32.91,1],[16.46,2]],[[35.61,1],[17.81,2]],[[38.31,1],[19.16,2]],[[42.08,1],[21.04,2]],[[44.78,1],[22.39,2]],[[47.89,1],[23.95,2]],[[52.2,1],[26.1,2]],[[56.52,1],[28.26,2]],[[60.84,1],[30.42,2]],[[65.42,1],[32.71,2]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "unfurled_na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 228.82,
      "formula": "114.40% + 38.14% × 3",
      "multiplierByLevel": [115.08,124.54,133.97,147.18,156.64,167.46,182.57,197.68,212.76,228.82],
      "segmentsByLevel": [[[57.54,1],[19.18,3]],[[62.26,1],[20.76,3]],[[66.98,1],[22.33,3]],[[73.59,1],[24.53,3]],[[78.31,1],[26.11,3]],[[83.73,1],[27.91,3]],[[91.28,1],[30.43,3]],[[98.83,1],[32.95,3]],[[106.38,1],[35.46,3]],[[114.4,1],[38.14,3]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "unfurled_na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 234.56,
      "formula": "58.64% × 2 + 58.64% × 2",
      "multiplierByLevel": [118,127.68,137.36,150.88,160.56,171.68,187.16,202.64,218.12,234.56],
      "segmentsByLevel": [[[29.5,2],[29.5,2]],[[31.92,2],[31.92,2]],[[34.34,2],[34.34,2]],[[37.72,2],[37.72,2]],[[40.14,2],[40.14,2]],[[42.92,2],[42.92,2]],[[46.79,2],[46.79,2]],[[50.66,2],[50.66,2]],[[54.53,2],[54.53,2]],[[58.64,2],[58.64,2]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "unfurled_na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 357.51,
      "formula": "107.25% + 107.25% + 47.67% × 3",
      "multiplierByLevel": [179.84,194.59,209.33,229.96,244.71,261.67,285.28,308.84,332.45,357.51],
      "segmentsByLevel": [[[53.95,1],[53.95,1],[23.98,3]],[[58.37,1],[58.37,1],[25.95,3]],[[62.8,1],[62.8,1],[27.91,3]],[[68.99,1],[68.99,1],[30.66,3]],[[73.41,1],[73.41,1],[32.63,3]],[[78.5,1],[78.5,1],[34.89,3]],[[85.58,1],[85.58,1],[38.04,3]],[[92.65,1],[92.65,1],[41.18,3]],[[99.73,1],[99.73,1],[44.33,3]],[[107.25,1],[107.25,1],[47.67,3]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 110.64,
      "formula": "27.66% × 2 + 55.32%",
      "multiplierByLevel": [55.67,60.23,64.79,71.16,75.75,80.99,88.28,95.59,102.88,110.64],
      "segmentsByLevel": [[[13.92,2],[27.83,1]],[[15.06,2],[30.11,1]],[[16.2,2],[32.39,1]],[[17.79,2],[35.58,1]],[[18.94,2],[37.87,1]],[[20.25,2],[40.49,1]],[[22.07,2],[44.14,1]],[[23.9,2],[47.79,1]],[[25.72,2],[51.44,1]],[[27.66,2],[55.32,1]]],
      "impliedStates": [
        "awakened_mind"
      ]
    },
    {
      "id": "unfurled_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 348.1,
      "formula": "174.04% + 58.02% × 3",
      "multiplierByLevel": [175.08,189.46,203.81,223.91,238.26,254.76,277.74,300.71,323.69,348.1],
      "segmentsByLevel": [[[87.54,1],[29.18,3]],[[94.72,1],[31.58,3]],[[101.9,1],[33.97,3]],[[111.95,1],[37.32,3]],[[119.13,1],[39.71,3]],[[127.38,1],[42.46,3]],[[138.87,1],[46.29,3]],[[150.35,1],[50.12,3]],[[161.84,1],[53.95,3]],[[174.04,1],[58.02,3]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "plunge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 84.2,
      "formula": "84.20%",
      "multiplierByLevel": [42.35,45.83,49.3,54.16,57.63,61.63,67.18,72.74,78.29,84.2],
      "requiresState": [
        "awakened_mind",
        "deep_mind"
      ]
    },
    {
      "id": "unfurled_whirl1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 293.28,
      "formula": "73.32% + 36.66% × 2 + 73.32% + 73.32%",
      "multiplierByLevel": [147.52,159.6,171.73,188.64,200.72,214.64,234,253.36,272.72,293.28],
      "segmentsByLevel": [[[36.88,1],[18.44,2],[36.88,1],[36.88,1]],[[39.9,1],[19.95,2],[39.9,1],[39.9,1]],[[42.93,1],[21.47,2],[42.93,1],[42.93,1]],[[47.16,1],[23.58,2],[47.16,1],[47.16,1]],[[50.18,1],[25.09,2],[50.18,1],[50.18,1]],[[53.66,1],[26.83,2],[53.66,1],[53.66,1]],[[58.5,1],[29.25,2],[58.5,1],[58.5,1]],[[63.34,1],[31.67,2],[63.34,1],[63.34,1]],[[68.18,1],[34.09,2],[68.18,1],[68.18,1]],[[73.32,1],[36.66,2],[73.32,1],[73.32,1]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "unfurled_whirl2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 283.45,
      "formula": "56.69% × 5",
      "multiplierByLevel": [142.55,154.25,165.95,182.3,194,207.45,226.15,244.85,263.55,283.45],
      "segmentsByLevel": [[[28.51,5]],[[30.85,5]],[[33.19,5]],[[36.46,5]],[[38.8,5]],[[41.49,5]],[[45.23,5]],[[48.97,5]],[[52.71,5]],[[56.69,5]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 106.61,
      "formula": "106.61%",
      "multiplierByLevel": [53.62,58.02,62.42,68.57,72.97,78.03,85.06,92.1,99.13,106.61],
      "requiresState": [
        "awakened_mind",
        "deep_mind"
      ]
    },
    {
      "id": "skill_crimson",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 157.51,
      "formula": "47.25% + 23.63% × 2 + 63.00%",
      "multiplierByLevel": [79.24,85.73,92.24,101.33,107.8,115.3,125.67,136.07,146.46,157.51],
      "segmentsByLevel": [[[23.77,1],[11.89,2],[31.69,1]],[[25.72,1],[12.86,2],[34.29,1]],[[27.67,1],[13.84,2],[36.89,1]],[[30.4,1],[15.2,2],[40.53,1]],[[32.34,1],[16.17,2],[43.12,1]],[[34.59,1],[17.3,2],[46.11,1]],[[37.7,1],[18.85,2],[50.27,1]],[[40.82,1],[20.41,2],[54.43,1]],[[43.94,1],[21.97,2],[58.58,1]],[[47.25,1],[23.63,2],[63,1]]],
      "requiresState": [
        "awakened_mind",
        "deep_mind"
      ]
    },
    {
      "id": "lib",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 695.88,
      "formula": "60.89% × 8 + 208.76%",
      "multiplierByLevel": [350.04,378.73,407.42,447.64,476.33,509.35,555.29,601.14,647.08,695.88],
      "segmentsByLevel": [[[30.63,8],[105,1]],[[33.14,8],[113.61,1]],[[35.65,8],[122.22,1]],[[39.17,8],[134.28,1]],[[41.68,8],[142.89,1]],[[44.57,8],[152.79,1]],[[48.59,8],[166.57,1]],[[52.6,8],[180.34,1]],[[56.62,8],[194.12,1]],[[60.89,8],[208.76,1]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "lib_coordinated",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 59.65,
      "formula": "59.65%",
      "multiplierByLevel": [30,32.46,34.92,38.37,40.83,43.66,47.59,51.53,55.47,59.65],
      "triggeredDamage": true,
      "damageTags": [
        "coordinated"
      ],
      "requiresState": "blight_rain_active"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "basic",
      "multiplier": 369.66,
      "formula": "110.89% × 2 + 36.97% × 4",
      "multiplierByLevel": [185.96,201.18,216.4,237.78,253,270.56,294.96,319.36,343.7,369.66],
      "segmentsByLevel": [[[55.78,2],[18.6,4]],[[60.35,2],[20.12,4]],[[64.92,2],[21.64,4]],[[71.33,2],[23.78,4]],[[75.9,2],[25.3,4]],[[81.16,2],[27.06,4]],[[88.48,2],[29.5,4]],[[95.8,2],[31.94,4]],[[103.11,2],[34.37,4]],[[110.89,2],[36.97,4]]],
      "impliedStates": [
        "awakened_mind"
      ]
    },
    {
      "id": "unfurled_intro",
      "category": "introSkill",
      "damageType": "basic",
      "multiplier": 525.73,
      "formula": "131.43% + 65.72% × 2 + 131.43% + 131.43%",
      "multiplierByLevel": [264.45,286.13,307.81,338.16,359.84,384.77,419.49,454.16,488.85,525.73],
      "segmentsByLevel": [[[66.11,1],[33.06,2],[66.11,1],[66.11,1]],[[71.53,1],[35.77,2],[71.53,1],[71.53,1]],[[76.95,1],[38.48,2],[76.95,1],[76.95,1]],[[84.54,1],[42.27,2],[84.54,1],[84.54,1]],[[89.96,1],[44.98,2],[89.96,1],[89.96,1]],[[96.19,1],[48.1,2],[96.19,1],[96.19,1]],[[104.87,1],[52.44,2],[104.87,1],[104.87,1]],[[113.54,1],[56.77,2],[113.54,1],[113.54,1]],[[122.21,1],[61.11,2],[122.21,1],[122.21,1]],[[131.43,1],[65.72,2],[131.43,1],[131.43,1]]],
      "impliedStates": [
        "deep_mind"
      ]
    },
    {
      "id": "unison_intro",
      "category": "introSkill",
      "damageType": "basic",
      "multiplier": 369.66,
      "formula": "110.89% × 2 + 36.97% × 4",
      "multiplierByLevel": [185.96,201.18,216.4,237.78,253,270.56,294.96,319.36,343.7,369.66],
      "segmentsByLevel": [[[55.78,2],[18.6,4]],[[60.35,2],[20.12,4]],[[64.92,2],[21.64,4]],[[71.33,2],[23.78,4]],[[75.9,2],[25.3,4]],[[81.16,2],[27.06,4]],[[88.48,2],[29.5,4]],[[95.8,2],[31.94,4]],[[103.11,2],[34.37,4]],[[110.89,2],[36.97,4]]],
      "impliedStates": [
        "awakened_mind"
      ],
      "requiresResource": "unison_response",
      "defaultResourceActive": false,
      "requiresUnison": true,
      "fallbackSkillId": "intro"
    },
    {
      "id": "unison_unfurled_intro",
      "category": "introSkill",
      "damageType": "basic",
      "multiplier": 525.73,
      "formula": "131.43% + 65.72% × 2 + 131.43% + 131.43%",
      "multiplierByLevel": [264.45,286.13,307.81,338.16,359.84,384.77,419.49,454.16,488.85,525.73],
      "segmentsByLevel": [[[66.11,1],[33.06,2],[66.11,1],[66.11,1]],[[71.53,1],[35.77,2],[71.53,1],[71.53,1]],[[76.95,1],[38.48,2],[76.95,1],[76.95,1]],[[84.54,1],[42.27,2],[84.54,1],[84.54,1]],[[89.96,1],[44.98,2],[89.96,1],[89.96,1]],[[96.19,1],[48.1,2],[96.19,1],[96.19,1]],[[104.87,1],[52.44,2],[104.87,1],[104.87,1]],[[113.54,1],[56.77,2],[113.54,1],[113.54,1]],[[122.21,1],[61.11,2],[122.21,1],[122.21,1]],[[131.43,1],[65.72,2],[131.43,1],[131.43,1]]],
      "impliedStates": [
        "deep_mind"
      ],
      "requiresResource": "unison_response",
      "defaultResourceActive": false,
      "requiresUnison": true,
      "fallbackSkillId": "unfurled_intro"
    },
    {
      "id": "forte_sealed",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 251.12,
      "formula": "62.78% × 2 + 31.39% × 4",
      "multiplierByLevel": [126.32,136.7,147.04,161.58,171.9,183.82,200.4,216.96,233.52,251.12],
      "segmentsByLevel": [[[31.58,2],[15.79,4]],[[34.17,2],[17.09,4]],[[36.76,2],[18.38,4]],[[40.39,2],[20.2,4]],[[42.97,2],[21.49,4]],[[45.95,2],[22.98,4]],[[50.1,2],[25.05,4]],[[54.24,2],[27.12,4]],[[58.38,2],[29.19,4]],[[62.78,2],[31.39,4]]],
      "impliedStates": [
        "awakened_mind"
      ],
      "requiresResourceFull": "delusion",
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_unforsaken",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 152.67,
      "formula": "152.67%",
      "multiplierByLevel": [76.79,83.09,89.39,98.2,104.5,111.74,121.82,131.89,141.97,152.67],
      "impliedStates": [
        "deep_mind"
      ],
      "requiresResourceFull": "delusion",
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_engraved",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 1551.41,
      "formula": "1551.41%",
      "multiplierByLevel": [780.37,844.37,908.33,997.93,1061.92,1135.51,1237.9,1340.3,1442.62,1551.41],
      "impliedStates": [
        "calamity_mind"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_engraved_hold",
      "category": "forteCircuit",
      "damageType": "basic",
      "multiplier": 387.92,
      "formula": "19.40% × 10 + 24.24% × 8",
      "multiplierByLevel": [195.2,211.2,227.2,249.6,265.6,284,309.6,335.2,360.8,387.92],
      "segmentsByLevel": [[[9.76,10],[12.2,8]],[[10.56,10],[13.2,8]],[[11.36,10],[14.2,8]],[[12.48,10],[15.6,8]],[[13.28,10],[16.6,8]],[[14.2,10],[17.75,8]],[[15.48,10],[19.35,8]],[[16.76,10],[20.95,8]],[[18.04,10],[22.55,8]],[[19.4,10],[24.24,8]]],
      "impliedStates": [
        "calamity_mind"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    }
  ],
  "skillEvents": [
    {
      "skills": ["lib"],
      "event": "gainUnison"
    },
    {
      "skills": ["unison_intro", "unison_unfurled_intro"],
      "event": "unisonResponse",
      "requiresResource": "unison_response",
      "defaultResourceActive": false,
      "requiresUnison": true
    }
  ],
  "defaultSkillId": "forte_engraved",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "basicDmg"
  ],
  "combatStates": [
    {
      "id": "mind_phase",
      "kind": "phase",
      "required": true,
      "defaultValue": "awakened_mind",
      "options": [
        {
          "value": "awakened_mind"
        },
        {
          "value": "deep_mind"
        },
        {
          "value": "calamity_mind"
        }
      ]
    },
    {
      "id": "blight_rain",
      "kind": "field",
      "options": [
        {
          "value": "blight_rain_active"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_intro_electro",
      "zone": "damageBonus",
      "element": "electro",
      "value": 50,
      "scope": "self",
      "defaultActive": false,
      "triggerSkills": [
        "intro",
        "unfurled_intro",
        "unison_intro",
        "unison_unfurled_intro"
      ],
      "duration": 15
    },
    {
      "id": "b_seal_master_cd",
      "zone": "critDamage",
      "value": 100,
      "scope": "self",
      "maxStacks": 1,
      "defaultStacks": 1,
      "defaultActive": false,
      "duration": 12,
      "clearedBySkills": [
        "lib"
      ],
      "exclusiveGroup": "seal_contract"
    },
    {
      "id": "b_seal_master_mult",
      "zone": "skillMultBonus",
      "value": 100,
      "scope": "self",
      "skills": [
        "unfurled_na1",
        "unfurled_na2",
        "unfurled_na3",
        "unfurled_na4",
        "unfurled_whirl1",
        "unfurled_whirl2"
      ],
      "requiresBuffStacks": {
        "id": "b_seal_master_cd",
        "stacks": 1
      },
      "duration": 12
    },
    {
      "id": "b_unison_boon",
      "zone": "finalDmg",
      "value": 12,
      "scope": "self",
      "maxStacks": 4,
      "stackResource": "unison_boon",
      "requiresUnison": true,
      "duration": 30
    },
    {
      "id": "b_outro_electro_bonus",
      "zone": "damageBonus",
      "element": "electro",
      "value": 30,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 8,
      "exclusiveGroup": "seal_contract"
    },
    {
      "id": "b_outro_electro_extra",
      "zone": "damageBonus",
      "element": "electro",
      "value": 40,
      "scope": "team",
      "maxStacks": 2,
      "stackResource": "unison_boon",
      "stackResourceTarget": "output",
      "requiresUnison": true,
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 8
    },
    {
      "id": "b_outro_electro_amp",
      "zone": "amplify",
      "element": "electro",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 8
    },
    {
      "id": "b_outro_skill_amp",
      "zone": "amplify",
      "damageType": "resonanceSkill",
      "value": 25,
      "scope": "team",
      "requiresUnison": true,
      "requiresResourceAtLeast": {
        "id": "unison_boon",
        "target": "output",
        "value": 1
      },
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 8
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_intro_mult",
          "zone": "skillMultBonus",
          "value": 60,
          "scope": "self",
          "skills": [
            "intro",
            "unfurled_intro",
            "unison_intro",
            "unison_unfurled_intro"
          ]
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_self_cd",
          "zone": "critDamage",
          "value": 40,
          "scope": "self"
        },
        {
          "id": "k2_outro_cd",
          "zone": "critDamage",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        },
        {
          "id": "k2_outro_cd_extra",
          "zone": "critDamage",
          "value": 24,
          "scope": "team",
          "maxStacks": 4,
          "stackResource": "unison_boon",
          "stackResourceTarget": "output",
          "requiresUnison": true,
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 30
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_basic_amp",
          "zone": "amplify",
          "damageType": "basic",
          "value": 30,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "lib"
          ],
          "duration": 25
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_attack",
          "zone": "attackPercent",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 5,
      "buffs": [
        {
          "id": "k5_lib_mult",
          "zone": "skillMultBonus",
          "value": 40,
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
          "id": "k6_unison_boon_extra",
          "zone": "finalDmg",
          "value": 6,
          "scope": "team",
          "maxStacks": 4,
          "stackResource": "unison_boon",
          "stackResourceTarget": "output",
          "requiresUnison": true
        },
        {
          "id": "k6_engraved_mult",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "skills": [
            "forte_engraved",
            "forte_engraved_hold"
          ]
        },
        {
          "id": "k6_seal_master_cd",
          "zone": "critDamage",
          "value": 200,
          "scope": "self",
          "requiresBuffStacks": {
            "id": "b_seal_master_cd",
            "stacks": 1
          },
          "duration": 12
        }
      ]
    }
  ],
  "modes": null,
  "echoSet": 360236
});
