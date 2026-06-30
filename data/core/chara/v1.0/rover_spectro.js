WUWA.register({
  "id": "rover_spectro",
  "aliases": [],
  "debut": 1,
  "element": "spectro",
  "weaponType": 2,
  "quality": 5,
  "effectTypes": [
    "lightNoise"
  ],
  "signatureWeaponId": "emerald_of_genesis",
  "defaultWeaponId": "emerald_of_genesis",
  "portrait": "",
  "base": {
    "hp": 11400,
    "attack": 375,
    "defense": 1368,
    "critRate": 5,
    "critDamage": 150,
    "energyRegen": 100,
    "discordEff": 100,
    "breakAmp": 0,
    "tree": {
      "attackPct": 12,
      "elemBonus": 12
    }
  },
  "resources": [
    {
      "id": "soundOfLight",
      "max": 50,
      "defaultValue": "max"
    }
  ],
  "skills": [
    {
      "id": "na1",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 59.15,
      "formula": "59.15%"
    },
    {
      "id": "na2",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.05,
      "formula": "76.05%"
    },
    {
      "id": "na3",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 76.05,
      "formula": "15.21% × 5"
    },
    {
      "id": "na4",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 130.13,
      "formula": "130.13%"
    },
    {
      "id": "heavy",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 96.35,
      "formula": "19.27% × 5"
    },
    {
      "id": "heavy_resonance",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 76.05,
      "formula": "76.05%"
    },
    {
      "id": "heavy_echo",
      "category": "basicAttack",
      "damageType": "heavy",
      "multiplier": 126.75,
      "formula": "126.75%"
    },
    {
      "id": "air",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 104.78,
      "formula": "104.78%"
    },
    {
      "id": "dodge",
      "category": "basicAttack",
      "damageType": "basic",
      "multiplier": 195.34,
      "formula": "195.34%"
    },
    {
      "id": "skill",
      "category": "resonanceSkill",
      "damageType": "resonanceSkill",
      "multiplier": 236.19,
      "formula": "236.19%"
    },
    {
      "id": "burst",
      "category": "resonanceLiberation",
      "damageType": "resonanceLiberation",
      "multiplier": 874.77,
      "formula": "198.81% + 675.96%"
    },
    {
      "id": "intro",
      "category": "introSkill",
      "damageType": "introSkill",
      "multiplier": 168.99,
      "formula": "168.99%",
      "triggerEvents": [
        "introEntry"
      ]
    },
    {
      "id": "forte_spin",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 258.16,
      "formula": "129.08% × 2",
      "requiresResource": "50尘微之声",
      "requiresResourceAtLeast": {
        "id": "soundOfLight",
        "value": 50
      },
      "fallbackSkillId": "skill",
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_spin_wheel",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 39.77,
      "formula": "39.77%",
      "requiresResource": "50尘微之声",
      "requiresResourceAtLeast": {
        "id": "soundOfLight",
        "value": 50
      },
      "triggerEvents": [
        "castResonanceSkill"
      ]
    },
    {
      "id": "forte_echo1",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 79.53,
      "formula": "79.53%",
      "requiresResource": "浮声千斩·旋音结束后"
    },
    {
      "id": "forte_echo2",
      "category": "forteCircuit",
      "damageType": "resonanceSkill",
      "multiplier": 159.05,
      "formula": "159.05%",
      "requiresResource": "浮声千斩·旋音结束后"
    }
  ],
  "defaultSkillId": "burst",
  "validSubs": [
    "atkFlat",
    "critRate",
    "critDamage",
    "elem",
    "burstDmg"
  ],
  "echoSet": 5,
  "buffs": [
    {
      "id": "b_reticence",
      "zone": "amplify",
      "value": 60,
      "scope": "self",
      "skills": [
        "forte_echo1",
        "forte_echo2"
      ]
    },
    {
      "id": "b_silent_listener",
      "zone": "attackPercent",
      "value": 15,
      "scope": "self",
      "defaultActive": false,
      "duration": 5
    }
  ],
  "chain": [
    {
      "seq": 1,
      "buffs": [
        {
          "id": "k1",
          "zone": "critRate",
          "value": 15,
          "scope": "self",
          "defaultActive": false,
          "triggerSkills": [
            "skill",
            "forte_spin",
            "forte_spin_wheel"
          ],
          "triggerEvents": [
            "castResonanceSkill"
          ],
          "duration": 7
        }
      ]
    },
    {
      "seq": 2,
      "buffs": [
        {
          "id": "k2",
          "zone": "damageBonus",
          "element": "spectro",
          "value": 20,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 3,
      "buffs": [
        {
          "id": "k3",
          "zone": "energyRegen",
          "value": 20,
          "scope": "self"
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
          "id": "k5",
          "zone": "typeBonus",
          "damageType": "resonanceLiberation",
          "value": 40,
          "scope": "self"
        }
      ]
    },
    {
      "seq": 6,
      "buffs": [
        {
          "id": "k6",
          "zone": "resShred",
          "element": "spectro",
          "value": 10,
          "scope": "team",
          "defaultActive": false,
          "duration": 20
        }
      ]
    }
  ],
  "modes": null
});
