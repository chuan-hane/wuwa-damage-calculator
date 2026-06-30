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
      "formula": "57.46%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134,
      "formula": "67.00% × 2"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 196.83,
      "formula": "65.61% × 3"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 193.89,
      "formula": "64.63% × 3"
    },
    {
      "id": "heavy_iron",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 139.17,
      "formula": "46.39% × 3"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.3,
      "formula": "59.65% × 2"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 134,
      "formula": "67.00% × 2"
    },
    {
      "id": "air_dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 119.3,
      "formula": "59.65% × 2"
    },
    {
      "id": "thunder_back",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 53.68,
      "formula": "53.68%",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum",
      "fallbackSkillId": "heavy_iron"
    },
    {
      "id": "thunder_spin",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 425.16,
      "formula": "141.72% × 3",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum"
    },
    {
      "id": "thunder_upper",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 357.86,
      "formula": "178.93% × 2",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum"
    },
    {
      "id": "dodge_heavy_iron",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 139.17,
      "formula": "46.39% × 3",
      "requiresResource": "resource_gate_1",
      "requiresResourceFull": "battleMomentum",
      "fallbackSkillId": "dodge"
    },
    {
      "id": "dodge_thunder_back",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 53.68,
      "formula": "53.68%",
      "requiresResource": "resource_gate_2",
      "requiresResourceFull": "authority",
      "fallbackSkillId": "dodge_heavy_iron"
    },
    {
      "id": "skill_slash",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 656.1,
      "formula": "218.70% × 3"
    },
    {
      "id": "lib_oath",
      "category": "resonanceLiberation",
      "damageType": "heavy",
      "multiplier": 1099.48,
      "formula": "32.99% × 2 + 131.94% × 3 + 32.99% × 2 + 571.70%"
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
      ]
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
      ]
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 198.82,
      "formula": "99.41% × 2",
      "triggerEvents": [
        "introEntry"
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      "id": "c6_wrath",
      "category": "resonanceChain",
      "damageType": "heavy",
      "multiplier": 200,
      "formula": "100% × 2",
      "seq": 6
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
      "required": true,
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
      "duration": 14
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
