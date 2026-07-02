"use strict";

window.WUWA_SONATAS = window.WUWA_SONATAS || [];

window.WUWA_SONATAS.push({
  "id": 350433,
  "fetterGroupId": 33,
  "betaVersion": "Beta3.5.4",
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
    "id": "unknown",
    "betaVersion": "Beta3.5.4",
    "cost": 4,
    "buffs": [
      {
        "id": "se_unknown_havoc",
        "zone": "damageBonus",
        "element": "havoc",
        "value": 12,
        "scope": "self"
      },
      {
        "id": "se_unknown_heavy",
        "zone": "typeBonus",
        "damageType": "heavy",
        "value": 12,
        "scope": "self"
      }
    ]
  }
});
