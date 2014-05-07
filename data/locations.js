"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        59.329444,
        18.068611
      ]
    },
    "properties": {
      "name": "Stockholm",
      "type": "city",
      "connections": {
        "car" : [
          "Gothenburg",
          "Malmö"
        ],
        "train" : [
          "Oslo",
          "Copenhagen",
        ],
        "boat" : [
          "Helsinki"
        ],
        "flight" : [
        ]
      },
      "wikipedia": "http://en.wikipedia.org/wiki/Stockholm"
    }
  },

  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        57.7,
        11.966667
      ]
    },
    "properties": {
      "name": "Gothenburg",
      "type": "city",
      "connections": {
        "car" : [
          "Stockholm",
          "Malmö"
        ],
        "train" : [
          "Oslo",
        ],
        "boat" : [
          "Copenhagen"
        ],
        "flight" : [
        ]
      },
      "wikipedia": "http://en.wikipedia.org/wiki/Gothenburg"
    }
  },

  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.605833,
        13.035833
      ]
    },
    "properties": {
      "name": "Malmö",
      "type": "city",
      "connections": {
        "car" : [
          "Copenhagen",
          "Stockholm"
        ],
        "train" : [
          "Gothenburg",
        ],
        "boat" : [
        ],
        "flight" : [
        ]
      },
      "wikipedia": "http://en.wikipedia.org/wiki/Malmö"
    }
  },

  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.676111,
        12.568333
      ]
    },
    "properties": {
      "name": "Copenhagen",
      "type": "city",
      "connections": {
        "car" : [
          "Malmö"
        ],
        "train" : [
        ],
        "boat" : [
          "Gothenburg"
        ],
        "flight" : [
          "Stockholm"
        ]
      },
      "wikipedia": "http://en.wikipedia.org/wiki/Copenhagen"
    }
  },

  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        59.95,
        10.75
      ]
    },
    "properties": {
      "name": "Oslo",
      "type": "city",
      "connections": {
        "car" : [
          "Gothenburg"
        ],
        "train" : [
          "Stockholm"
        ],
        "boat" : [
        ],
        "flight" : [
          "Copenhagen"
        ]
      },
      "wikipedia": "http://en.wikipedia.org/wiki/Oslo"
    }
  },

  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        60.170833,
        24.9375
      ]
    },
    "properties": {
      "name": "Helsinki",
      "type": "city",
      "connections": {
        "car" : [
        ],
        "train" : [
        ],
        "boat" : [
        "Stockholm"
        ],
        "flight" : [
          "Copenhagen"
        ]
      },
      "wikipedia": "http://en.wikipedia.org/wiki/Helsinki"
    }
  }