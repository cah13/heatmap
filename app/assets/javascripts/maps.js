var map, pointarray, heatmap, salesAvg, rentalsAvg;

// array of each listing from db
var listingData = [
  
  ];

// returns average price of all listings for sale
function getAvgSales(){
 $.getJSON("/listings", function(response){
    var salesTotal = 0
  $.each(response, function(i, object){
    if(response[i].listing_type === "sales")
    salesTotal += response[i].price
  });
    salesAvg = (salesTotal / response.length);
    return salesAvg
 }); 
};

getAvgSales();

// return average price of all rental listings
function getAvgRentals(){
 $.getJSON("/listings", function(response){
    var rentalsTotal = 0
  $.each(response, function(i, object){
    if(response[i].listing_type === "rentals")
    rentalsTotal += response[i].price
  });
    rentalsAvg = (rentalsTotal / response.length);
    return rentalsAvg
 }); 
};

getAvgRentals();

// returns each listing from db and displays on map
function getListings(){
  $.getJSON("/listings", function(response){
    $.each(response, function(i, object) {
     if(response[i].listing_type === "sales")
      listingData.push( { location: new google.maps.LatLng(object.latitude, object.longitude), weight: ( response[i].price / (salesAvg * 3) ) } ); 
     else
      listingData.push( { location: new google.maps.LatLng(object.latitude, object.longitude), weight: ( response[i].price / (rentalsAvg * 3) ) } ); 
    });
  });
};  

getListings();

// creates transparent marker to make heat map clickable, loads info
function makeMarkers(){
  $.getJSON("/listings", function(response){
    $.each(response, function(i, object) {
       
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading">'+ object.address + ' #' + object.apt +'</h2>'+
      '<div id="bodyContent">'+
      '<h4>'+ '<strong>City/State: </strong>' + object.city + ', ' + object.state + '</h4>'+
      '<h4>'+ '<strong>Price: </strong>' + '$'+ object.price + '</h4>'+
      '<h4>'+ '<strong>Size: </strong>' + object.size + '</h4>'+
      '<h4>'+ '<strong>Square Feet: </strong>' + object.square_feet + '</h4>'+
      '<h4>'+ '<strong>Building Type: </strong>' + object.building_type + '</h4>'+
      '<h4>'+ '<strong>Neighborhood: </strong>' + object.neighborhood + '</h4>'+
      '<h4>'+ '<strong>Type: </strong>' + object.listing_type + '</h4>'+
      '</div>'+
      '</div>';  

       var infowindow = new google.maps.InfoWindow({
       content: contentString
      });

       var marker = new google.maps.Marker({
       position: new google.maps.LatLng(object.latitude, object.longitude),
       map: map,
       title: 'Listing Information',
       icon: '/assets/marker.png'
      });

       google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
      }); 
    })
  });
};

makeMarkers();

// function getSales(){
//   $.getJSON("/listings", function(response){
//     $.each(response, function(i, object) {
//      if(response[i].listing_type === "sales")
//      listingData.push( new google.maps.LatLng(object.latitude, object.longitude) );
//      // listingData.push( {location: new google.maps.LatLng(object.latitude, object.longitude), weight: weight} ); 
//     })
//   });
// };

// getSales();

// function getRentals(){
//   $.getJSON("/listings", function(response){
//     $.each(response, function(i, object) {
//      if(response[i].listing_type === "rentals")
//      listingData.push( new google.maps.LatLng(object.latitude, object.longitude) );
//      // listingData.push( {location: new google.maps.LatLng(object.latitude, object.longitude), weight: weight} ); 
//     })
//   });
// };

// var sales = document.getElementById('sales')
// $(sales).click(function() {
//   getSales();
// });

// var rentals = document.getElementById('rentals')
// $(rentals).click(function() {
//   getRentals();
// });


function initialize() {

  // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#fff" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]; 

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"}); 


  var markers = [];
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.MAP
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  // defines SW and NE points
  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.71000, -74.03893),
      new google.maps.LatLng(40.79000, -73.90366));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
    // sets zoom of searchbox
    map.setZoom(17);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });

  var pointArray = new google.maps.MVCArray(listingData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  setTimeout(function(){heatmap.setMap(map)}, 350);
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
