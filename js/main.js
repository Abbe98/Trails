function newGame() {
  // remove old game data if it exists
  localforage.clear();

  // set game version(see map.js)
  localforage.setItem('version', currentVersion);

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
  loadLocation(Stockholm);
}

function loadSavedGame() {
  // load last location
  localforage.getItem('currentLocation', function(currentLocation) {
    loadLocation(currentLocation);
  });
}

function loadLocation(location) {
  // store current location
  var currentLocation = location;
  localforage.setItem('currentLocation', currentLocation);

  // remove existing markers
  clearMarkers();

  // put current location on map
  outputMarker(currentLocation);

  // get and output all default(car) connected locations
  for(var i = 0; i < location.connections.car.length; i++) {
    // get JS object from string
    var connectedLocation = getLocationVarFromString(location.connections.car[i]);
    // output marker
    outputMarker(connectedLocation);
  }

  // if travel by train is unlocked output markers in for loop
  localforage.getItem('train', function(train) {
    if(train === true) {
      for(var i = 0; i < location.connections.train.length; i++) {
        var connectedLocation = getLocationVarFromString(location.connections.train[i]);
        outputMarker(connectedLocation);
      }
    }
  });

  // if travel by boat is unlocked output markers in for loop
  localforage.getItem('boat', function(boat) {
    if(boat === true) {
      for(var i = 0; i < location.connections.boat.length; i++) {
        var connectedLocation = getLocationVarFromString(location.connections.boat[i]);
        outputMarker(connectedLocation);
      }
    }
  });

  // if travel by flight is unlocked output markers in for loop
  localforage.getItem('flight', function(flight) {
    if(flight === true) {
      for(var i = 0; i < location.connections.flight.length; i++) {
        var connectedLocation = getLocationVarFromString(location.connections.flight[i]);
        outputMarker(connectedLocation);
      }
    }
  });

  // set new map center
  map.setView(new L.LatLng(currentLocation.coordinates[1] , currentLocation.coordinates[0]), 5);
}

// make markers array global
var markers = [];
function outputMarker(location) {
  // add marker to markers array
  markers[markers.length] = L.marker([location.coordinates[1] , location.coordinates[0]], {icon: cityIcon}).bindPopup(location.name).addTo(map);
}

function clearMarkers() {
  // remove all markers using for loop
  for(var i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
  }
}

function getLocationVarFromString(locationString) {
  switch (locationString) {
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
      console.log('Error: getLocationVarFromString() hit default(Location string not found)');
  }
}

function openLocationWindow() {
  // add content based on currentLocation
  localforage.getItem('currentLocation', function(currentLocation) {
    console.log(currentLocation.name);
  });
  // display the #content-box div by setting top to 54px
  document.getElementById('content-box').style.top = '54px';
}

function travel(cost, type, location) {
  removeCash(cost);
  loadLocation(location);
}

function addCash(value) {
  // read current cash from local
  localforage.getItem('cash', function(cash) {
    // set local cash to old cash + the new one
    localforage.setItem('cash', cash + value);

    // update cash display value
    document.getElementById('cash').innerHTML = cash + value;
  });
}

function removeCash(value) {
  // read current cash from local
  localforage.getItem('cash', function(cash) {
    // set local cash to old cash - value
    localforage.setItem('cash', cash - value);

    // update cash display value
    document.getElementById('cash').innerHTML = cash - value;
  });
}
