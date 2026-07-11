window.WUWA_SONATAS = [
  {
    "id": 1,
    "element": "glacio",
    "p2": {
      "zone": "damageBonus",
      "element": "glacio",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "glacio",
      "value": 30,
      "scope": "self",
      "maxStacks": 3,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerDamageTypes": [
        "basic",
        "heavy"
      ],
      "triggerStacks": 1
    },
    "lead": {
      "id": "lampylumen_myriad",
      "buffs": [
        {
          "id": "se_lampylumen_myriad_glacio",
          "zone": "damageBonus",
          "element": "glacio",
          "value": 12,
          "scope": "self",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false
        },
        {
          "id": "se_lampylumen_myriad_skill",
          "zone": "typeBonus",
          "damageType": "resonanceSkill",
          "value": 12,
          "scope": "self",
          "maxStacks": 3,
          "defaultStacks": 0,
          "defaultActive": false
        }
      ]
    }
  },
  {
    "id": 2,
    "element": "fusion",
    "p2": {
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "fusion",
      "value": 30,
      "scope": "self",
      "defaultActive": false,
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "duration": 15
    },
    "leads": [
      {
        "id": "inferno_rider",
        "buffs": [
          {
            "id": "se_inferno_fusion",
            "zone": "damageBonus",
            "element": "fusion",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          },
          {
            "id": "se_inferno_basic",
            "zone": "typeBonus",
            "damageType": "basic",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "nightmare_inferno_rider",
        "buffs": [
          {
            "id": "se_nightmare_inferno_rider_fusion",
            "zone": "damageBonus",
            "element": "fusion",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_inferno_rider_skill",
            "zone": "typeBonus",
            "damageType": "resonanceSkill",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "element": "electro",
    "p2": {
      "zone": "damageBonus",
      "element": "electro",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "electro",
      "value": 30,
      "scope": "self",
      "maxStacks": 2,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerDamageTypes": [
        "heavy"
      ],
      "triggerEvents": [
        "castResonanceSkill"
      ],
      "triggerStacks": 1,
      "duration": 15
    },
    "leads": [
      {
        "id": "thundering_mephis",
        "buffs": [
          {
            "id": "se_thundering_mephis_electro",
            "zone": "damageBonus",
            "element": "electro",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          },
          {
            "id": "se_thundering_mephis_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "tempest_mephis",
        "buffs": [
          {
            "id": "se_tempest_mephis_electro",
            "zone": "damageBonus",
            "element": "electro",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          },
          {
            "id": "se_tempest_mephis_burst",
            "zone": "typeBonus",
            "damageType": "resonanceLiberation",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "nightmare_thundering_mephis",
        "buffs": [
          {
            "id": "se_nightmare_thundering_mephis_electro",
            "zone": "damageBonus",
            "element": "electro",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_thundering_mephis_burst",
            "zone": "typeBonus",
            "damageType": "resonanceLiberation",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "nightmare_tempest_mephis",
        "buffs": [
          {
            "id": "se_nightmare_tempest_mephis_electro",
            "zone": "damageBonus",
            "element": "electro",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_tempest_mephis_skill",
            "zone": "typeBonus",
            "damageType": "resonanceSkill",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "element": "glacio",
    "p2": {
      "zone": "typeBonus",
      "damageType": "resonanceSkill",
      "value": 12,
      "scope": "self"
    },
    "p5": [
      {
        "id": "frosty_resolve_glacio",
        "zone": "damageBonus",
        "element": "glacio",
        "value": 22.5,
        "scope": "self",
        "defaultActive": false,
        "triggerEvents": [
          "castResonanceSkill"
        ],
        "duration": 15
      },
      {
        "id": "frosty_resolve_skill",
        "zone": "typeBonus",
        "damageType": "resonanceSkill",
        "value": 36,
        "scope": "self",
        "maxStacks": 2,
        "defaultStacks": 0,
        "defaultActive": false,
        "triggerEvents": [
          "castResonanceLiberation"
        ],
        "triggerStacks": 1,
        "duration": 5
      }
    ],
    "leads": [
      {
        "id": "sentry_construct",
        "buffs": [
          {
            "id": "se_sentry_construct_glacio",
            "zone": "damageBonus",
            "element": "glacio",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_sentry_construct_skill",
            "zone": "typeBonus",
            "damageType": "resonanceSkill",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "nightmare_lampylumen_myriad",
        "buffs": [
          {
            "id": "se_nightmare_lampylumen_myriad_glacio",
            "zone": "damageBonus",
            "element": "glacio",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_lampylumen_myriad_coord",
            "zone": "typeBonus",
            "damageType": "coordinated",
            "value": 30,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "element": "spectro",
    "p2": {
      "zone": "damageBonus",
      "element": "spectro",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "eternal_radiance_crit",
        "zone": "critRate",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      },
      {
        "id": "eternal_radiance_spectro",
        "zone": "damageBonus",
        "element": "spectro",
        "value": 15,
        "scope": "self",
        "defaultActive": false,
        "requiresEffectStacks": {
          "effect": "lightNoise",
          "stacks": 10
        },
        "duration": 15
      }
    ],
    "leads": [
      {
        "id": "nightmare_mourning_aix",
        "buffs": [
          {
            "id": "se_nightmare_mourning_aix_spectro",
            "zone": "damageBonus",
            "element": "spectro",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "capitaneus",
        "buffs": [
          {
            "id": "se_capitaneus_spectro",
            "zone": "damageBonus",
            "element": "spectro",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_capitaneus_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "element": "energyRegen",
    "p2": {
      "zone": "energyRegen",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "tidebreaking_courage_atk",
        "zone": "attackPercent",
        "value": 15,
        "scope": "self"
      },
      {
        "id": "tidebreaking_courage_all",
        "zone": "damageBonus",
        "value": 30,
        "scope": "self",
        "requiresSourceStat": {
          "stat": "energyRegen",
          "min": 250
        }
      }
    ],
    "leads": [
      {
        "id": "dragon_of_dirge",
        "buffs": [
          {
            "id": "se_dragon_of_dirge_fusion",
            "zone": "damageBonus",
            "element": "fusion",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_dragon_of_dirge_basic",
            "zone": "typeBonus",
            "damageType": "basic",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "dreamless",
        "buffs": [
          {
            "id": "se_dreamless_basic",
            "zone": "typeBonus",
            "damageType": "basic",
            "value": 125,
            "scope": "team",
            "maxStacks": 25,
            "defaultStacks": 0,
            "defaultActive": false,
            "stackGroup": "dreamless"
          },
          {
            "id": "se_dreamless_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 125,
            "scope": "team",
            "maxStacks": 25,
            "defaultStacks": 0,
            "defaultActive": false,
            "stackGroup": "dreamless"
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "element": "havoc",
    "p2": {
      "zone": "damageBonus",
      "element": "havoc",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "havoc",
      "value": 15,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 15
    },
    "leads": [
      {
        "id": "lorelei",
        "buffs": [
          {
            "id": "se_lorelei_havoc",
            "zone": "damageBonus",
            "element": "havoc",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_lorelei_basic",
            "zone": "typeBonus",
            "damageType": "basic",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "nightmare_impermanence_heron",
        "buffs": [
          {
            "id": "se_nightmare_impermanence_heron_havoc",
            "zone": "damageBonus",
            "element": "havoc",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_impermanence_heron_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "element": "aero",
    "p2": {
      "zone": "damageBonus",
      "element": "aero",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "gusts_of_welkin_team_aero",
        "zone": "damageBonus",
        "element": "aero",
        "value": 15,
        "scope": "team",
        "defaultActive": false,
        "duration": 20
      },
      {
        "id": "gusts_of_welkin_self_aero",
        "zone": "damageBonus",
        "element": "aero",
        "value": 15,
        "scope": "self",
        "defaultActive": false,
        "duration": 20
      }
    ],
    "leads": [
      {
        "id": "reminiscence_fleurdelys",
        "buffs": [
          {
            "id": "se_reminiscence_fleurdelys_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 10,
            "scope": "self"
          },
          {
            "id": "se_reminiscence_fleurdelys_aero_cartethyia",
            "zone": "damageBonus",
            "element": "aero",
            "value": 10,
            "scope": "self",
            "requiresChar": [
              "cartethyia",
              "rover_aero"
            ]
          }
        ]
      },
      {
        "id": "nightmare_kelpie",
        "buffs": [
          {
            "id": "se_nightmare_kelpie_glacio",
            "zone": "damageBonus",
            "element": "glacio",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_kelpie_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "element": "havoc",
    "p2": {
      "zone": "damageBonus",
      "element": "havoc",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "havoc",
      "value": 30,
      "scope": "self",
      "maxStacks": 4,
      "defaultStacks": 0,
      "defaultActive": false,
      "triggerDamageTypes": [
        "basic",
        "heavy"
      ],
      "triggerStacks": 1,
      "duration": 15
    },
    "leads": [
      {
        "id": "crownless",
        "buffs": [
          {
            "id": "se_crownless_havoc",
            "zone": "damageBonus",
            "element": "havoc",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          },
          {
            "id": "se_crownless_skill",
            "zone": "typeBonus",
            "damageType": "resonanceSkill",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "nightmare_crownless",
        "buffs": [
          {
            "id": "se_nightmare_crownless_havoc",
            "zone": "damageBonus",
            "element": "havoc",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_crownless_basic",
            "zone": "typeBonus",
            "damageType": "basic",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "element": "spectro",
    "p2": {
      "zone": "damageBonus",
      "element": "spectro",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "spectro",
      "value": 30,
      "scope": "self",
      "defaultActive": false,
      "triggerEvents": [
        "introEntry"
      ]
    },
    "leads": [
      {
        "id": "mourning_aix",
        "buffs": [
          {
            "id": "se_mourning_aix_spectro",
            "zone": "damageBonus",
            "element": "spectro",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          },
          {
            "id": "se_mourning_aix_burst",
            "zone": "typeBonus",
            "damageType": "resonanceLiberation",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "jue",
        "buffs": [
          {
            "id": "se_jue_skill",
            "zone": "typeBonus",
            "damageType": "resonanceSkill",
            "value": 16,
            "scope": "self",
            "defaultActive": false
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "element": "healing",
    "p2": {
      "zone": "healingBonus",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "attackPercent",
      "value": 15,
      "scope": "team",
      "defaultActive": false,
      "triggerEvents": [
        "heal"
      ]
    },
    "leads": [
      {
        "id": "bell_borne_geochelone",
        "buffs": [
          {
            "id": "se_bell_borne_geochelone_amp",
            "zone": "finalDmg",
            "value": 10,
            "scope": "team",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "fallacy_of_no_return",
        "buffs": [
          {
            "id": "se_fallacy_of_no_return_er",
            "zone": "energyRegen",
            "value": 10,
            "scope": "self",
            "defaultActive": false,
            "duration": 20
          },
          {
            "id": "se_fallacy_of_no_return_atk",
            "zone": "attackPercent",
            "value": 10,
            "scope": "team",
            "defaultActive": false,
            "duration": 20
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "element": "energyRegen",
    "p2": {
      "zone": "energyRegen",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "attackPercent",
      "value": 22.5,
      "scope": "team",
      "defaultActive": false,
      "triggerOutro": true,
      "duration": 15
    },
    "lead": {
      "id": "impermanence_heron",
      "buffs": [
        {
          "id": "se_impermanence_heron_final",
          "zone": "finalDmg",
          "value": 12,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 15
        }
      ]
    }
  },
  {
    "id": 8,
    "element": "attack",
    "p2": {
      "zone": "attackPercent",
      "value": 10,
      "scope": "self"
    },
    "lead": {
      "id": "mech_abomination",
      "buffs": [
        {
          "id": "se_mech_abomination_atk",
          "zone": "attackPercent",
          "value": 12,
          "scope": "self",
          "defaultActive": false,
          "duration": 15
        }
      ]
    }
  },
  {
    "id": 15,
    "element": "energyRegen",
    "p2": {
      "zone": "energyRegen",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "empyrean_anthem_coord",
        "zone": "typeBonus",
        "damageType": "coordinated",
        "value": 80,
        "scope": "self"
      },
      {
        "id": "empyrean_anthem_atk",
        "zone": "attackPercent",
        "value": 20,
        "scope": "team",
        "defaultActive": false,
        "duration": 4
      }
    ],
    "leads": [
      {
        "id": "hecate",
        "buffs": [
          {
            "id": "se_hecate_coord",
            "zone": "typeBonus",
            "damageType": "coordinated",
            "value": 40,
            "scope": "self"
          }
        ]
      },
      {
        "id": "nightmare_tempest_mephis",
        "buffs": [
          {
            "id": "se_nightmare_tempest_mephis_electro",
            "zone": "damageBonus",
            "element": "electro",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_tempest_mephis_skill",
            "zone": "typeBonus",
            "damageType": "resonanceSkill",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "nightmare_lampylumen_myriad",
        "buffs": [
          {
            "id": "se_nightmare_lampylumen_myriad_glacio",
            "zone": "damageBonus",
            "element": "glacio",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_lampylumen_myriad_coord",
            "zone": "typeBonus",
            "damageType": "coordinated",
            "value": 30,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "element": "aero",
    "p2": {
      "zone": "damageBonus",
      "element": "aero",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "windward_pilgrimage_crit",
        "zone": "critRate",
        "value": 10,
        "scope": "self",
        "defaultActive": false,
        "requiresEffectStacks": {
          "effect": "windErosion",
          "stacks": 1
        },
        "duration": 10
      },
      {
        "id": "windward_pilgrimage_aero",
        "zone": "damageBonus",
        "element": "aero",
        "value": 30,
        "scope": "self",
        "defaultActive": false,
        "requiresEffectStacks": {
          "effect": "windErosion",
          "stacks": 1
        },
        "duration": 10
      }
    ],
    "leads": [
      {
        "id": "reminiscence_fleurdelys",
        "buffs": [
          {
            "id": "se_reminiscence_fleurdelys_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 10,
            "scope": "self"
          },
          {
            "id": "se_reminiscence_fleurdelys_aero_cartethyia",
            "zone": "damageBonus",
            "element": "aero",
            "value": 10,
            "scope": "self",
            "requiresChar": [
              "cartethyia",
              "rover_aero"
            ]
          }
        ]
      },
      {
        "id": "nightmare_kelpie",
        "buffs": [
          {
            "id": "se_nightmare_kelpie_glacio",
            "zone": "damageBonus",
            "element": "glacio",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_kelpie_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "element": "fusion",
    "p2": {
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "flaming_clawprint_team_fusion",
        "zone": "damageBonus",
        "element": "fusion",
        "value": 15,
        "scope": "team",
        "defaultActive": false,
        "triggerEvents": [
          "castResonanceLiberation"
        ],
        "duration": 35
      },
      {
        "id": "flaming_clawprint_burst",
        "zone": "typeBonus",
        "damageType": "resonanceLiberation",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "triggerEvents": [
          "castResonanceLiberation"
        ],
        "duration": 35
      }
    ],
    "leads": [
      {
        "id": "lioness_of_glory",
        "buffs": [
          {
            "id": "se_lioness_of_glory_fusion",
            "zone": "damageBonus",
            "element": "fusion",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_lioness_of_glory_burst",
            "zone": "typeBonus",
            "damageType": "resonanceLiberation",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "element": "echo",
    "p3": [
      {
        "id": "dream_of_the_lost_crit",
        "zone": "critRate",
        "value": 20,
        "scope": "self",
        "defaultActive": false
      },
      {
        "id": "dream_of_the_lost_echo",
        "zone": "typeBonus",
        "damageType": "echoSkill",
        "value": 35,
        "scope": "self",
        "defaultActive": false
      }
    ],
    "leads": [
      {
        "id": "nightmare_hecate",
        "buffs": [
          {
            "id": "se_nightmare_hecate_havoc",
            "zone": "damageBonus",
            "element": "havoc",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_hecate_echo",
            "zone": "typeBonus",
            "damageType": "echoSkill",
            "value": 20,
            "scope": "self"
          }
        ]
      },
      {
        "id": "reminiscence_fenrico",
        "buffs": [
          {
            "id": "se_reminiscence_fenrico_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_reminiscence_fenrico_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "element": "echo",
    "p3": [
      {
        "id": "law_of_harmony_heavy",
        "zone": "typeBonus",
        "damageType": "heavy",
        "value": 30,
        "scope": "self",
        "defaultActive": false,
        "triggerEvents": [
          "castEchoSkill"
        ],
        "duration": 4
      },
      {
        "id": "law_of_harmony_echo",
        "zone": "typeBonus",
        "damageType": "echoSkill",
        "value": 16,
        "scope": "team",
        "maxStacks": 4,
        "defaultStacks": 0,
        "defaultActive": false,
        "triggerEvents": [
          "castEchoSkill"
        ],
        "triggerStacks": 1,
        "duration": 30
      }
    ],
    "lead": {
      "id": "reminiscence_fenrico",
      "buffs": [
        {
          "id": "se_reminiscence_fenrico_aero",
          "zone": "damageBonus",
          "element": "aero",
          "value": 12,
          "scope": "self"
        },
        {
          "id": "se_reminiscence_fenrico_heavy",
          "zone": "typeBonus",
          "damageType": "heavy",
          "value": 12,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 22,
    "element": "fusion",
    "p3": [
      {
        "id": "flamewing_shadow_heavy_crit",
        "zone": "critRate",
        "damageType": "heavy",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 6
      },
      {
        "id": "flamewing_shadow_echo_crit",
        "zone": "critRate",
        "damageType": "echoSkill",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 6
      },
      {
        "id": "flamewing_shadow_fusion",
        "zone": "damageBonus",
        "element": "fusion",
        "value": 16,
        "scope": "self",
        "defaultActive": false
      }
    ],
    "leads": [
      {
        "id": "corrosaurus",
        "buffs": [
          {
            "id": "se_corrosaurus_fusion",
            "zone": "damageBonus",
            "element": "fusion",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_corrosaurus_echo",
            "zone": "typeBonus",
            "damageType": "echoSkill",
            "value": 20,
            "scope": "self"
          }
        ]
      },
      {
        "id": "reminiscence_threnodian_leviathan",
        "buffs": [
          {
            "id": "se_reminiscence_threnodian_leviathan_havoc",
            "zone": "damageBonus",
            "element": "havoc",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_reminiscence_threnodian_leviathan_burst",
            "zone": "typeBonus",
            "damageType": "resonanceLiberation",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "element": "healing",
    "p2": {
      "zone": "healingBonus",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "id": "halo_of_starry_radiance_atk",
      "zone": "attackPercent",
      "scope": "team",
      "defaultActive": false,
      "triggerEvents": [
        "heal"
      ],
      "duration": 4,
      "scaleBy": {
        "stat": "discordEff",
        "rate": 0.2,
        "cap": 25
      }
    },
    "lead": {
      "id": "reactor_husk",
      "buffs": [
        {
          "id": "se_reactor_husk_er",
          "zone": "energyRegen",
          "value": 10,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 26,
    "element": "spectro",
    "p2": {
      "zone": "damageBonus",
      "element": "spectro",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "rite_of_gilded_revelation_spectro",
        "zone": "damageBonus",
        "element": "spectro",
        "value": 30,
        "scope": "self",
        "maxStacks": 3,
        "defaultStacks": 0,
        "defaultActive": false,
        "triggerDamageTypes": [
          "basic"
        ],
        "triggerStacks": 1,
        "duration": 5
      },
      {
        "id": "rite_of_gilded_revelation_basic",
        "zone": "typeBonus",
        "damageType": "basic",
        "value": 40,
        "scope": "self",
        "defaultActive": false,
        "triggerEvents": [
          "castResonanceLiberation"
        ],
        "requiresBuffStacks": {
          "id": "rite_of_gilded_revelation_spectro",
          "stacks": 3
        }
      }
    ],
    "lead": {
      "id": "hyvatia",
      "buffs": [
        {
          "id": "se_hyvatia_all",
          "zone": "damageBonus",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 15
        }
      ]
    }
  },
  {
    "id": 27,
    "element": "fusion",
    "p2": {
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "trailblazing_star_crit",
        "zone": "critRate",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 8
      },
      {
        "id": "trailblazing_star_fusion",
        "zone": "damageBonus",
        "element": "fusion",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 8
      }
    ],
    "lead": {
      "id": "sigillum",
      "buffs": [
        {
          "id": "se_sigillum_burst",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 25,
          "scope": "self",
          "requiresChar": [
            "aemeath"
          ]
        }
      ]
    }
  },
  {
    "id": 28,
    "element": "fusion",
    "p2": {
      "zone": "damageBonus",
      "element": "fusion",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "chromatic_foam_self_fusion",
        "zone": "damageBonus",
        "element": "fusion",
        "value": 10,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      },
      {
        "id": "chromatic_foam_team_fusion",
        "zone": "damageBonus",
        "element": "fusion",
        "value": 25,
        "scope": "team",
        "defaultActive": false,
        "triggerOutro": true,
        "duration": 15
      }
    ],
    "lead": {
      "id": "reactor_husk",
      "buffs": [
        {
          "id": "se_reactor_husk_er",
          "zone": "energyRegen",
          "value": 10,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 29,
    "element": "aero",
    "p2": {
      "zone": "damageBonus",
      "element": "aero",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "sound_of_true_name_echo_crit",
        "zone": "critRate",
        "damageType": "echoSkill",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 5
      },
      {
        "id": "sound_of_true_name_aero",
        "zone": "damageBonus",
        "element": "aero",
        "value": 15,
        "scope": "self",
        "defaultActive": false,
        "duration": 5
      }
    ],
    "lead": {
      "id": "nameless_explorer",
      "buffs": [
        {
          "id": "se_nameless_explorer_aero",
          "zone": "damageBonus",
          "element": "aero",
          "value": 12,
          "scope": "self"
        },
        {
          "id": "se_nameless_explorer_echo",
          "zone": "typeBonus",
          "damageType": "echoSkill",
          "value": 20,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 30,
    "element": "glacio",
    "p2": {
      "zone": "damageBonus",
      "element": "glacio",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "wishes_of_quiet_snowfall_glacio",
        "zone": "damageBonus",
        "element": "glacio",
        "value": 10,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      },
      {
        "id": "wishes_of_quiet_snowfall_crit",
        "zone": "critRate",
        "value": 25,
        "scope": "self",
        "defaultActive": false,
        "duration": 6
      },
      {
        "id": "wishes_of_quiet_snowfall_team_glacio",
        "zone": "damageBonus",
        "element": "glacio",
        "value": 25,
        "scope": "team",
        "defaultActive": false,
        "triggerOutro": true,
        "duration": 15
      }
    ],
    "lead": {
      "id": "reminiscence_threnodian_voidborne_construct",
      "buffs": [
        {
          "id": "se_reminiscence_threnodian_voidborne_construct_glacio",
          "zone": "damageBonus",
          "element": "glacio",
          "value": 12,
          "scope": "self"
        },
        {
          "id": "se_reminiscence_threnodian_voidborne_construct_burst",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 12,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 31,
    "element": "attack",
    "p2": {
      "zone": "attackPercent",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "id": "reel_of_spliced_memories_break_amp",
      "zone": "breakAmp",
      "value": 20,
      "scope": "team",
      "defaultActive": false,
      "duration": 30
    },
    "lead": {
      "id": "nameless_explorer",
      "buffs": [
        {
          "id": "se_nameless_explorer_aero",
          "zone": "damageBonus",
          "element": "aero",
          "value": 12,
          "scope": "self"
        },
        {
          "id": "se_nameless_explorer_echo",
          "zone": "typeBonus",
          "damageType": "echoSkill",
          "value": 20,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 24,
    "element": "hack",
    "p1": [
      {
        "id": "shadow_of_shattered_dreams_basic",
        "zone": "typeBonus",
        "damageType": "basic",
        "value": 35,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      },
      {
        "id": "shadow_of_shattered_dreams_heavy",
        "zone": "typeBonus",
        "damageType": "heavy",
        "value": 35,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      }
    ],
    "lead": {
      "id": "reminiscence_nightmare_adam_smasher",
      "buffs": [
        {
          "id": "se_reminiscence_nightmare_adam_smasher_crit",
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "requiresChar": [
            "lucy",
            "rebecca"
          ]
        }
      ]
    }
  },
  {
    "id": 23,
    "element": "effect",
    "p3": [
      {
        "id": "thread_of_severed_fate_atk",
        "zone": "attackPercent",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 5
      },
      {
        "id": "thread_of_severed_fate_burst",
        "zone": "typeBonus",
        "damageType": "resonanceLiberation",
        "value": 30,
        "scope": "self",
        "defaultActive": false,
        "duration": 5
      }
    ],
    "lead": {
      "id": "reminiscence_threnodian_leviathan",
      "buffs": [
        {
          "id": "se_reminiscence_threnodian_leviathan_havoc",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 12,
          "scope": "self"
        },
        {
          "id": "se_reminiscence_threnodian_leviathan_burst",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 12,
          "scope": "self"
        }
      ]
    }
  },
  {
    "id": 20,
    "p3": [
      {
        "id": "crown_of_valor_atk",
        "zone": "attackPercent",
        "value": 30,
        "scope": "self",
        "maxStacks": 5,
        "defaultStacks": 0,
        "defaultActive": false,
        "triggerEvents": [
          "shield"
        ],
        "triggerStacks": 1
      },
      {
        "id": "crown_of_valor_crit_damage",
        "zone": "critDamage",
        "value": 20,
        "scope": "self",
        "maxStacks": 5,
        "defaultStacks": 0,
        "defaultActive": false,
        "triggerEvents": [
          "shield"
        ],
        "triggerStacks": 1
      }
    ],
    "leads": [
      {
        "id": "the_false_sovereign",
        "buffs": [
          {
            "id": "se_the_false_sovereign_electro",
            "zone": "damageBonus",
            "element": "electro",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_the_false_sovereign_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self"
          }
        ]
      },
      {
        "id": "lady_of_the_sea",
        "buffs": [
          {
            "id": "se_lady_of_the_sea_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_lady_of_the_sea_burst",
            "zone": "typeBonus",
            "damageType": "resonanceLiberation",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "element": "aero",
    "p2": {
      "zone": "damageBonus",
      "element": "aero",
      "value": 10,
      "scope": "self"
    },
    "p5": {
      "zone": "damageBonus",
      "element": "aero",
      "value": 30,
      "scope": "self",
      "defaultActive": false,
      "triggerEvents": [
        "introEntry"
      ]
    },
    "leads": [
      {
        "id": "feilian_beringal",
        "buffs": [
          {
            "id": "se_feilian_beringal_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          },
          {
            "id": "se_feilian_beringal_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self",
            "defaultActive": false
          }
        ]
      },
      {
        "id": "nightmare_feilian_beringal",
        "buffs": [
          {
            "id": "se_nightmare_feilian_beringal_aero",
            "zone": "damageBonus",
            "element": "aero",
            "value": 12,
            "scope": "self"
          },
          {
            "id": "se_nightmare_feilian_beringal_heavy",
            "zone": "typeBonus",
            "damageType": "heavy",
            "value": 12,
            "scope": "self"
          }
        ]
      }
    ]
  },
  {
    "id": 25,
    "element": "spectro",
    "p2": {
      "zone": "damageBonus",
      "element": "spectro",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "pact_of_neonlight_leap_atk_base",
        "zone": "attackPercent",
        "value": 15,
        "scope": "team",
        "defaultActive": false,
        "triggerOutro": true,
        "duration": 15
      },
      {
        "id": "pact_of_neonlight_leap_atk_break_amp",
        "zone": "attackPercent",
        "scope": "team",
        "defaultActive": false,
        "triggerOutro": true,
        "duration": 15,
        "scaleBy": {
          "stat": "breakAmp",
          "target": "output",
          "rate": 0.3,
          "cap": 15
        }
      }
    ],
    "lead": {
      "id": "hyvatia",
      "buffs": [
        {
          "id": "se_hyvatia_all",
          "zone": "damageBonus",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "triggerOutro": true,
          "duration": 15
        }
      ]
    }
  },
  {
    "id": 350433,
    "fetterGroupId": 33,
    "element": "havoc",
    "p2": {
      "id": "song_of_feathered_trace_er",
      "zone": "energyRegen",
      "value": 10,
      "scope": "self"
    },
    "p5": [
      {
        "id": "song_of_feathered_trace_havoc_crit",
        "zone": "critRate",
        "value": 20,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      },
      {
        "id": "song_of_feathered_trace_havoc_heavy",
        "zone": "typeBonus",
        "damageType": "heavy",
        "value": 35,
        "scope": "self",
        "defaultActive": false,
        "duration": 15
      },
      {
        "id": "song_of_feathered_trace_glacio_atk",
        "zone": "attackPercent",
        "scope": "team",
        "defaultActive": false,
        "duration": 10,
        "scaleBy": {
          "stat": "energyRegen",
          "rate": 0.1,
          "cap": 25
        }
      }
    ],
    "lead": {
      "id": "thousand_puppet_pavilion",
      "cost": 4,
      "buffs": [
        {
          "id": "se_thousand_puppet_pavilion_havoc",
          "zone": "damageBonus",
          "element": "havoc",
          "value": 12,
          "scope": "self"
        },
        {
          "id": "se_thousand_puppet_pavilion_heavy",
          "zone": "typeBonus",
          "damageType": "heavy",
          "value": 12,
          "scope": "self"
        }
      ]
    }
  }
];
