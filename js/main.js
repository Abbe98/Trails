function load_location(location) {
  // store current location
  var current_location = location;
  // put current location on map
  output_marker(current_location);

  // get and output all default(car) connected locations
  for(var i = 0; i < location.connections.car.length; i++) {
    // get JS object from string
    var connected_location = get_location_var_from_string(location.connections.car[i]);
    // output marker
    output_marker(connected_location);
  }

  // set new map center
  map.setView(new L.LatLng(current_location.coordinates[1] , current_location.coordinates[0]), 5);
}

function output_marker(location) {
  L.marker([location.coordinates[1] , location.coordinates[0]], {icon: cityIcon}).addTo(map).bindPopup(location.name);
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
      // add some error function
      console.log('Error: get_location_var_from_string() hit default(Location string not found)');
  }
}