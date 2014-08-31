function new_game() {
  // remove old game data if it exists
  localforage.clear();

  // set game version(see map.js)
  localforage.setItem('version', current_version);

  // set default travel booleans 
  localforage.setItem('car', true);
  localforage.setItem('train', false);
  localforage.setItem('boat', false);
  localforage.setItem('flight', false);

  // set default location booleans
  localforage.setItem('europe', true);
  localforage.setItem('asia', false);
  localforage.setItem('north_america', false);
  localforage.setItem('south_america', false);
  localforage.setItem('africa', false);
  localforage.setItem('oceania', false);

  // set default amount of cash
  localforage.setItem('cash', 10000);

  // use Stockholm as start location
  load_location(Stockholm);
}

function load_saved_game() {
  // load last location
  localforage.getItem('current_location', function(current_location) {
    load_location(current_location);
  });
}

function load_location(location) {
  // store current location
  var current_location = location;
  localforage.setItem('current_location', current_location);

  // remove existing markers
  clear_markers();

  // put current location on map
  output_marker(current_location);

  // get and output all default(car) connected locations
  for(var i = 0; i < location.connections.car.length; i++) {
    // get JS object from string
    var connected_location = get_location_var_from_string(location.connections.car[i]);
    // output marker
    output_marker(connected_location);
  }

  // if travel by train is unlocked output markers in for loop
  localforage.getItem('train', function(train) {
    if(train === true) {
      for(var i = 0; i < location.connections.train.length; i++) {
        var connected_location = get_location_var_from_string(location.connections.train[i]);
        output_marker(connected_location);
      }
    }
  });

  // if travel by boat is unlocked output markers in for loop
  localforage.getItem('boat', function(boat) {
    if(boat === true) {
      for(var i = 0; i < location.connections.boat.length; i++) {
        var connected_location = get_location_var_from_string(location.connections.boat[i]);
        output_marker(connected_location);
      }
    }
  });

  // if travel by flight is unlocked output markers in for loop
  localforage.getItem('flight', function(flight) {
    if(flight === true) {
      for(var i = 0; i < location.connections.flight.length; i++) {
        var connected_location = get_location_var_from_string(location.connections.flight[i]);
        output_marker(connected_location);
      }
    }
  });

  // set new map center
  map.setView(new L.LatLng(current_location.coordinates[1] , current_location.coordinates[0]), 5);
}

// make markers array global
var markers = []; 
function output_marker(location) {
  // add marker to markers array
  markers[markers.length] = L.marker([location.coordinates[1] , location.coordinates[0]], {icon: cityIcon}).bindPopup(location.name).addTo(map);
}

function clear_markers() {
  // remove all markers using for loop
  for(var i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
  }
}

function get_location_var_from_string(location_string) {
  switch (location_string) {
    case 'Stockholm':
      return Stockholm;
      break;
    case 'Gothenburg':
      return Gothenburg;
      break;
    case 'Malmö':
      return Malmö;
      break;
    case 'Copenhagen':
      return Copenhagen;
      break;
    case 'Oslo':
      return Oslo;
      break;
    case 'Helsinki':
      return Helsinki;
      break;
    default:
      // TODO: add some error function
      console.log('Error: get_location_var_from_string() hit default(Location string not found)');
  }
}

function add_cash(value) {
  // read current cash from local
  localforage.getItem('cash', function(cash) {
    // set local cash to old cash + the new one
    localforage.setItem('cash', cash + value);
  });
}