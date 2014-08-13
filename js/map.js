var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
  touchZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  tap: false,
  zoomControl: false
}).setView([0, 0], 3);

// icon options
var MapIcon = L.Icon.extend({
  options: {
    iconSize:     [36, 36],
    iconAnchor:   [18, 18],
    popupAnchor:  [0, -10]
  }
});
var cityIcon = new MapIcon({iconUrl: 'icons/city-18.png'});

// use Stockholm as start location
load_location(Stockholm);