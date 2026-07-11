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
      "formula": "29.53%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 49.71,
      "formula": "22.37% + 27.34%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 113.92,
      "formula": "14.24% × 8"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 165.4,
      "formula": "41.35% × 4"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 92.46,
      "formula": "46.23% × 2"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 172.64,
      "formula": "21.58% × 8"
    },
    {
      "id": "chamuel_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 263.04,
      "formula": "43.84% × 6",
      "impliedStates": [
        "field_1_option_2"
      ]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 125.26,
      "formula": "62.63% × 2"
    },
    {
      "id": "ring_reflect",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 29.84,
      "formula": "14.92% × 2",
      "impliedStates": [
        "field_1_option_1"
      ]
    },
    {
      "id": "chamuel1",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 59.35,
      "formula": "59.35%",
      "impliedStates": [
        "field_1_option_2"
      ]
    },
    {
      "id": "chamuel2",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 79.54,
      "formula": "39.77% × 2",
      "impliedStates": [
        "field_1_option_2"
      ]
    },
    {
      "id": "chamuel3",
      "category": "resonanceSkill",
      "damageType": "basic",
      "multiplier": 173.58,
      "formula": "28.93% × 6",
      "impliedStates": [
        "field_1_option_2"
      ]
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
      ]
    },
    {
      "id": "burst_absolution",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 401.6,
      "formula": "401.60%",
      "requiresState": "mode_1_option_1"
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
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.81,
      "formula": "198.81%",
      "triggerEvents": [
        "introEntry"
      ]
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
      "requiresState": "mode_1_option_1"
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
      ]
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
      ]
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
      ]
    },
    {
      "id": "c6_starflash_absolution",
      "category": "forteCircuit",
      "damageType": "heavy",
      "multiplier": 248.07,
      "formula": "82.69% × 3",
      "seq": 6,
      "requiresState": "mode_1_option_1"
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
      ]
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
      "duration": 30
    },
    {
      "id": "b_outro_lightnoise",
      "zone": "amplify",
      "effect": "lightNoise",
      "value": 100,
      "scope": "team",
      "requiresState": "mode_1_option_2",
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
