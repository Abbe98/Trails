var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
  touchZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  tap: false,
  zoomControl: false
}).setView([0, 0], 3);

// object(Leaflet layer) to store markers in
var markers;

// icon options
var MapIcon = L.Icon.extend({
  options: {
    iconSize:     [36, 36],
    iconAnchor:   [18, 18],
    popupAnchor:  [0, -10]
  }
});
var cityIcon = new MapIcon({iconUrl: 'icons/city-18.png'});

// set game version
var current_version = 0.1;


localforage.getItem('version', function(version) {
  if (version === current_version) {
    // load saved game
    load_saved_game();
  } else {
    // new game
    new_game();
  };
});
