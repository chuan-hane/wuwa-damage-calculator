WUWA.register({
  "id": "zani",
  "aliases": [],
  "debut": 2.3,
  "element": "spectro",
  "weaponType": 4,
  "quality": 5,
  "effectTypes": [
    "lightNoise"
  ],
  "signatureWeaponId": "blazing_justice",
  "portrait": "",
  "resources": [
    {
      "id": "焰光",
      "min": 0,
      "max": 40,
      "defaultValue": "max"
    },
    {
      "id": "redundantKineticEnergy",
      "max": 100,
      "defaultValue": "max"
    }
  ],
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
  "echoSet": 11,
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "heavyDmg"
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 58.85,
      "formula": "58.85%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 79.53,
      "formula": "79.53%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 127.26,
      "formula": "42.42% × 3"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 270.4,
      "formula": "67.60% × 4"
    },
    {
      "id": "breakthrough",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 184.56,
      "formula": "61.50% + 17.58% × 7"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 164.32,
      "formula": "41.08% × 4"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.98,
      "formula": "104.98%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 222.69,
      "formula": "74.23% × 3"
    },
    {
      "id": "skill_standard",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 63.94,
      "formula": "63.94%"
    },
    {
      "id": "skill_counter",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 182.99,
      "formula": "61.00% + 121.99%"
    },
    {
      "id": "skill_targeted",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 287.29,
      "formula": "86.19% + 28.73% + 172.37%",
      "requiresResource": "冗余动能充满",
      "requiresResourceFull": "redundantKineticEnergy",
      "fallbackSkillId": "skill_standard",
      "impliedStates": [
        "斩棘状态"
      ],
      "triggerEvents": [
        "applySpectroFrazzle"
      ]
    },
    {
      "id": "skill_riposte",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 287.29,
      "formula": "86.19% + 28.73% + 172.37%",
      "requiresResource": "冗余动能充满",
      "requiresResourceFull": "redundantKineticEnergy",
      "fallbackSkillId": "skill_counter",
      "impliedStates": [
        "斩棘状态"
      ],
      "triggerEvents": [
        "applySpectroFrazzle"
      ]
    },
    {
      "id": "lib_rekindle",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 318.52,
      "formula": "318.52%",
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "lib_last",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 1274.08,
      "formula": "191.12% + 1082.96%",
      "impliedStates": [
        "灼焰形态"
      ],
      "triggerEvents": [
        "castResonanceLiberation"
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 202,
      "formula": "24.24% × 5 + 80.80%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_daybreak",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 198.81,
      "formula": "198.81%",
      "requiresResource": "焰光不少于30",
      "requiresResourceAtLeast": {
        "id": "焰光",
        "value": 30
      },
      "impliedStates": [
        "灼焰形态"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_dawning",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 424.07,
      "formula": "424.07%",
      "requiresResource": "重斩·破晓后",
      "impliedStates": [
        "灼焰形态"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_nightfall",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 397.63,
      "perStack": 9.95,
      "stackResource": "焰光",
      "stackLabel": "焰光",
      "formula": "135.20% + 262.43% + 9.95% × 焰光",
      "impliedStates": [
        "灼焰形态"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    },
    {
      "id": "forte_lightsmash",
      "category": "forteCircuit",
      "damageType": "heavy",
      "damageTags": [
        "lightNoise"
      ],
      "multiplier": 424.07,
      "formula": "424.07%",
      "requiresResource": "焰光不少于30",
      "requiresResourceAtLeast": {
        "id": "焰光",
        "value": 30
      },
      "impliedStates": [
        "灼焰形态"
      ],
      "triggerEvents": [
        "castBasicAttack"
      ]
    }
  ],
  "defaultSkillId": "forte_nightfall",
  "combatStates": [
    {
      "id": "灼焰形态",
      "kind": "form",
      "required": true,
      "options": [
        {
          "value": "灼焰形态"
        }
      ]
    },
    {
      "id": "斩棘状态",
      "options": [
        {
          "value": "斩棘状态"
        }
      ]
    },
    {
      "id": "烈阳余烬",
      "kind": "target",
      "options": [
        {
          "value": "烈阳余烬"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_inferno_basic_mult",
      "zone": "skillMultBonus",
      "value": 25,
      "scope": "self",
      "damageType": "basic",
      "requiresState": "灼焰形态",
      "duration": 20
    },
    {
      "id": "b_quick_spectro",
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
      "duration": 14
    },
    {
      "id": "b_sunburst_tag_amp",
      "zone": "amplify",
      "damageType": "lightNoise",
      "value": 20,
      "scope": "self",
      "requiresState": "斩棘状态",
      "duration": 14
    },
    {
      "id": "b_sunburst_effect_amp",
      "zone": "amplify",
      "effect": "lightNoise",
      "value": 20,
      "scope": "self",
      "requiresState": "斩棘状态",
      "duration": 14
    },
    {
      "id": "b_outro_spectro_amp",
      "zone": "amplify",
      "element": "spectro",
      "value": 20,
      "scope": "team",
      "requiresState": "烈阳余烬",
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_spectro",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 50,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill_targeted",
            "skill_riposte"
          ],
          "duration": 14
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_crit",
          "zone": "critRate",
          "value": 20,
          "scope": "self"
        },
        {
          "id": "k2_skill",
          "zone": "skillMultBonus",
          "value": 80,
          "scope": "self",
          "skills": [
            "skill_targeted",
            "skill_riposte"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_last",
          "multAdd": 1200,
          "scope": "self",
          "skills": [
            "lib_last"
          ],
          "requiresState": "灼焰形态",
          "defaultActive": false
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
      "buffs": [
        {
          "id": "k5_rekindle",
          "zone": "skillMultBonus",
          "value": 120,
          "scope": "self",
          "skills": [
            "lib_rekindle"
          ]
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6_slash",
          "zone": "skillMultBonus",
          "value": 40,
          "scope": "self",
          "skills": [
            "forte_daybreak",
            "forte_dawning",
            "forte_nightfall",
            "forte_lightsmash"
          ]
        },
        {
          "id": "k6_blaze",
          "perStackBonus": 40,
          "scope": "self",
          "skills": [
            "forte_nightfall"
          ]
        }
      ]
    }
  ],
  "modes": null
});
