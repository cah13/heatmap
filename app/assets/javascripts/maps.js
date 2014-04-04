
// function initialize() {
//   var mapOptions = {
//     center: new google.maps.LatLng(40.744, -73.968),
//     zoom: 13,
//     panControl: true,
//     zoomControl: true,
//     scaleControl: true
//   };
  
//   var map = new google.maps.Map(document.getElementById("map-canvas"),
//   mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

// Adding 500 Data Points
var map, pointarray, heatmap;

var listingData = [
  new google.maps.LatLng(40.744, -73.965),
  new google.maps.LatLng(40.743, -73.966),
  new google.maps.LatLng(40.742, -73.969),
  new google.maps.LatLng(40.741, -73.963),
  new google.maps.LatLng(40.749, -73.961),
  new google.maps.LatLng(40.748, -73.962)
  ];


function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.744, -73.968),
    zoom: 13,
    // panControl: true,
    // zoomControl: true,
    // scaleControl: true
    mapTypeId: google.maps.MapTypeId.MAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var pointArray = new google.maps.MVCArray(listingData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

google.maps.event.addDomListener(window, 'load', initialize);