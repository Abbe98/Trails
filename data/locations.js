"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        59.33,
        18.07
      ]
    },
    "properties": {
      "name": "Stockholm",
      "type": "city",
      "country": "Sweden",
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
        11.97
      ]
    },
    "properties": {
      "name": "Gothenburg",
      "type": "city",
      "country": "Sweden",
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
        55.61,
        13.03
      ]
    },
    "properties": {
      "name": "Malmö",
      "type": "city",
      "country": "Sweden",
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
        55.68,
        12.57
      ]
    },
    "properties": {
      "name": "Copenhagen",
      "type": "city",
      "country": "Denmark",
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
      "country": "Norway",
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
        60.17,
        24.93
      ]
    },
    "properties": {
      "name": "Helsinki",
      "type": "city",
      "country": "Finland",
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