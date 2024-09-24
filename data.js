var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.20305274917221894,
        "pitch": 0.11388824413550225,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.726956515155651,
          "pitch": 0.26677811387673245,
          "rotation": 0,
          "target": "1-corridor"
        },
        {
          "yaw": 2.608928967891714,
          "pitch": 0.10867169922761377,
          "rotation": 0,
          "target": "5-balcony"
        },
        {
          "yaw": -2.2110699877871305,
          "pitch": 0.03683309364731002,
          "rotation": 0,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.09353343720291463,
        "pitch": 0.04423809879926566,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.045518186388074255,
          "pitch": 0.21497074838110564,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.2259589702736164,
          "pitch": -0.018059355374070662,
          "rotation": 0,
          "target": "6-terrace"
        },
        {
          "yaw": -2.8742896463475933,
          "pitch": 0.0010726261397522308,
          "rotation": 0,
          "target": "3-laundry-room--corridor"
        },
        {
          "yaw": -0.8052830298835367,
          "pitch": 0.046606791631809585,
          "rotation": 0,
          "target": "2-bathroom--toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom--toilet",
      "name": "Bathroom & Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.4176059257868463,
        "pitch": 0.06511684683406571,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9213296902170498,
          "pitch": 0.13486339910172518,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laundry-room--corridor",
      "name": "Laundry room & Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.3257406645335763,
        "pitch": -0.030003974781479315,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.651554235683312,
          "pitch": 0.505765707108262,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.6167034361312744,
        "pitch": 0.0735264984820958,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.067430211649267,
          "pitch": 0.1360869069891777,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.2990971518421155,
        "pitch": 0.02384388776019719,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.714360760100731,
          "pitch": -0.0008915211776177046,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.4914775373511509,
        "pitch": 0.10113756344295055,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.37288666741828,
          "pitch": 0.0386900884316681,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
