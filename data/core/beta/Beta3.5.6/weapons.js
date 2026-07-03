"use strict";

window.WUWA_DATA = window.WUWA_DATA || {};
window.WUWA_DATA.weapons = window.WUWA_DATA.weapons || [];

window.WUWA_DATA.weapons.push(
  {
    "id": "azure_oath",
    "betaVersion": "Beta3.5.6",
    "type": 2,
    "quality": 5,
    "icon": "",
    "attack90": "587",
    "secondaryStat": "critRate",
    "secondary90": "24.30%",
    "effects": [
      {
        "id": "e0",
        "zone": "damageBonus",
        "value": 12,
        "rankValues": [
          12,
          15,
          18,
          21,
          24
        ],
        "scope": "self"
      },
      {
        "id": "e1",
        "zone": "amplify",
        "damageType": "heavy",
        "value": 36,
        "rankValues": [
          36,
          45,
          54,
          63,
          72
        ],
        "scope": "self",
        "defaultActive": false,
        "triggerEvents": [
          "applyHavocBane"
        ],
        "duration": 8
      },
      {
        "id": "e2",
        "zone": "defIgnore",
        "damageType": "heavy",
        "value": 12,
        "rankValues": [
          12,
          15,
          18,
          21,
          24
        ],
        "scope": "self",
        "defaultActive": false,
        "triggerEvents": [
          "applyHavocBane"
        ],
        "duration": 8
      }
    ]
  },
  {
    "id": "firstlights_herald",
    "betaVersion": "Beta3.5.6",
    "type": 5,
    "quality": 5,
    "icon": "",
    "attack90": "412",
    "secondaryStat": "energyRegen",
    "secondary90": "77.04%",
    "effects": [
      {
        "id": "e0",
        "zone": "hpPercent",
        "value": 12,
        "rankValues": [
          12,
          15,
          18,
          21,
          24
        ],
        "scope": "self"
      },
      {
        "id": "e1",
        "zone": "attackPercent",
        "value": 20,
        "rankValues": [
          20,
          25,
          30,
          35,
          40
        ],
        "scope": "team",
        "defaultActive": false,
        "duration": 6
      }
    ]
  }
);
