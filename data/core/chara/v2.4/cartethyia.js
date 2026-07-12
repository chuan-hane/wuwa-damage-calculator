WUWA.register({
  "id": "cartethyia",
  "aliases": [],
  "debut": 2.4,
  "element": "aero",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "windErosion"
  ],
  "effectBaseCaps": {
    "windErosion": 3
  },
  "signatureWeaponId": "defiers_thorn",
  "portrait": "",
  "base": {
    "hp": 14800,
    "attack": 312,
    "defense": 611,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "critRate": 8,
      "hpPct": 12
    }
  },
  "resources": [
    {
      "id": "resolve",
      "max": 120,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 4.78,
      "formula": "4.78%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 13.13,
      "formula": "3.94% + 3.94% + 5.25%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 17.12,
      "formula": "4.28% + 4.28% + 4.28% + 4.28%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 15.1,
      "formula": "2.52% × 3 + 7.54%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 12.48,
      "formula": "2.08% × 3 + 6.24%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 5.65,
      "formula": "5.65%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "air_one",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 5.65,
      "formula": "5.65%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "air_two",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 9.9,
      "formula": "3.30% × 3",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "air_three",
      "category": "basicAttack",
      "damageType": "basic",
      "damageTags": [
        "windErosion"
      ],
      "stat": "hp",
      "multiplier": 33.87,
      "formula": "11.29% × 3",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 27.4,
      "formula": "6.85% + 6.85% + 6.85% + 6.85%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 29.53,
      "formula": "6.89% × 3 + 8.86%",
      "impliedStates": [
        "form_1_option_1"
      ]
    },
    {
      "id": "lib_tideblade",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "stat": "hp",
      "multiplier": 91.84,
      "formula": "13.12% × 7",
      "requiresResource": "resource_gate_1",
      "requiresResourceAtLeast": {
        "id": "resolve",
        "value": 120
      },
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "intro_past",
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "hp",
      "multiplier": 12.48,
      "formula": "2.08% × 3 + 6.24%",
      "impliedStates": [
        "form_1_option_1"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "intro_future",
      "category": "introSkill",
      "damageType": "introSkill",
      "stat": "hp",
      "multiplier": 14.25,
      "formula": "4.28% + 9.97%",
      "impliedStates": [
        "form_1_option_2"
      ],
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "fl_na1",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 6.49,
      "formula": "6.49%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_na2",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 9.09,
      "formula": "3.63% + 1.82% + 1.82% + 1.82%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_na3",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 10.65,
      "formula": "2.13% + 2.13% + 2.13% + 4.26%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_na4",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 13.7,
      "formula": "2.74% × 5",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_na5",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 36,
      "formula": "7.20% + 28.80%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_heavy",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 14.25,
      "formula": "4.28% + 9.97%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_heavy_plus",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 19.45,
      "formula": "7.78% × 2 + 3.89%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_upper",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 9.08,
      "formula": "4.54% × 2",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_air1",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 9.06,
      "formula": "2.99% + 2.99% + 3.08%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_air2",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 29.55,
      "formula": "7.39% + 7.39% + 14.77%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_air3",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 2.2,
      "formula": "2.20%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_dodge",
      "category": "forteCircuit",
      "damageType": "basic",
      "stat": "hp",
      "multiplier": 15.99,
      "formula": "3.20% + 3.20% + 3.20% + 6.39%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_skill_wave",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "stat": "hp",
      "multiplier": 24.8,
      "formula": "1.86% × 4 + 17.36%",
      "impliedStates": [
        "form_1_option_2"
      ]
    },
    {
      "id": "fl_skill_break",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "stat": "hp",
      "multiplier": 24.81,
      "formula": "1.86% × 2 + 7.03% × 3",
      "impliedStates": [
        "form_1_option_2"
      ]
    }
  ],
  "defaultSkillId": "lib_tideblade",
  "validSubs": [
    "hpFlat",
    "hpPct",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 17,
  "skillEvents": [
    {
      "skills": [
        "na4"
      ],
      "event": "applyAeroErosion",
      "stacks": 1
    },
    {
      "skills": [
        "skill",
        "intro_past"
      ],
      "event": "applyAeroErosion",
      "stacks": 2
    },
    {
      "seq": 3,
      "skills": [
        "fl_na5",
        "fl_air2",
        "fl_heavy_plus",
        "fl_skill_break"
      ],
      "event": "applyAeroErosion",
      "stacks": 2
    },
    {
      "seq": 6,
      "skills": [
        "lib_tideblade"
      ],
      "event": "applyAeroErosion",
      "stacks": "max"
    }
  ],
  "combatStates": [
    {
      "id": "form_1",
      "kind": "form",
      "required": true,
      "defaultValue": "form_1_option_1",
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
      "id": "buff_1",
      "kind": "buff",
      "options": [
        {
          "value": "buff_1_option_1"
        },
        {
          "value": "buff_1_option_2"
        },
        {
          "value": "buff_1_option_3"
        }
      ]
    }
  ],
  "buffs": [
    {
      "id": "b_erosion_base",
      "zone": "amplify",
      "value": 30,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 1
      }
    },
    {
      "id": "b_erosion_extra_4",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 4
      }
    },
    {
      "id": "b_erosion_extra_5",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 5
      }
    },
    {
      "id": "b_erosion_extra_6",
      "zone": "amplify",
      "value": 10,
      "scope": "self",
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 6
      }
    },
    {
      "id": "b_divine_erosion",
      "zone": "amplify",
      "effect": "windErosion",
      "value": 50,
      "scope": "self",
      "requiresAllStates": [
        "form_1_option_2",
        "buff_1_option_2"
      ]
    },
    {
      "id": "b_tideblade_erosion_1",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 1
      }
    },
    {
      "id": "b_tideblade_erosion_2",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 2
      }
    },
    {
      "id": "b_tideblade_erosion_3",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 3
      }
    },
    {
      "id": "b_tideblade_erosion_4",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 4
      }
    },
    {
      "id": "b_tideblade_erosion_5",
      "zone": "amplify",
      "value": 20,
      "scope": "self",
      "skills": [
        "lib_tideblade"
      ],
      "requiresEffectStacks": {
        "effect": "windErosion",
        "stacks": 5
      }
    },
    {
      "id": "outro_aero",
      "zone": "amplify",
      "element": "aero",
      "value": 17.5,
      "scope": "team",
      "requiresAnyEffectStacks": {
        "stacks": 1
      },
      "duration": 20
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1_cd",
          "zone": "critDamage",
          "value": 100,
          "scope": "self",
          "requiresState": "form_1_option_2",
          "maxStacks": 4,
          "defaultStacks": 0,
          "stackResource": "resolve",
          "stackResourceStep": 30,
          "duration": 15
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2_cap",
          "zone": "effectCapBonus",
          "effects": [
            "windErosion"
          ],
          "value": 3,
          "scope": "team",
          "requiresState": "form_1_option_2"
        },
        {
          "id": "k2_cartethyia",
          "zone": "skillMultBonus",
          "value": 50,
          "scope": "self",
          "requiresState": "form_1_option_1",
          "skills": [
            "na1",
            "na2",
            "na3",
            "na4",
            "heavy",
            "dodge",
            "intro_past"
          ]
        },
        {
          "id": "k2_air",
          "zone": "skillMultBonus",
          "value": 200,
          "scope": "self",
          "requiresState": "form_1_option_1",
          "skills": [
            "air",
            "air_one",
            "air_two",
            "air_three"
          ]
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3_tideblade",
          "zone": "skillMultBonus",
          "value": 100,
          "scope": "self",
          "requiresState": "form_1_option_2",
          "skills": [
            "lib_tideblade"
          ]
        }
      ]
    },
    {
      "seq": 4,
      "buffs": [
        {
          "id": "k4_all",
          "zone": "damageBonus",
          "value": 20,
          "scope": "team",
          "defaultActive": false,
          "triggerEvents": [
            "applyHavocBane",
            "applySpectroFrazzle",
            "applyElectroFlare",
            "applyGlacioChafe",
            "applyAeroErosion"
          ],
          "duration": 20
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
          "id": "k6_fleur_vuln",
          "zone": "vulnerability",
          "value": 40,
          "scope": "self",
          "requiresState": "form_1_option_2",
          "skills": [
            "intro_future",
            "fl_na1",
            "fl_na2",
            "fl_na3",
            "fl_na4",
            "fl_na5",
            "fl_heavy",
            "fl_heavy_plus",
            "fl_upper",
            "fl_air1",
            "fl_air2",
            "fl_air3",
            "fl_dodge",
            "fl_skill_wave",
            "fl_skill_break",
            "lib_tideblade"
          ]
        }
      ]
    }
  ],
  "modes": null
});
