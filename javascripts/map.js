// JavaScript source code

var map;

function initMap() {    
    debugger;
    var location = getLocation("373 Glen Osmond Rd, Glen Osmond SA 5064");
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 20
    });    
}

//function addMarker() {
//    var marker = new google.maps.Marker({
//        position: uniAdelaide,
//        map: map
//    });
//}

//function showLocation() {
//    debugger;
//    var location = getLocation("373 Glen Osmond Rd, Glen Osmond SA 5064");
//    //map.setCenter({ lat: -35.774451, lng: 137.210161 });
//    //map.setCenter({ lat: location.latitude, lng: location.longitude });
//    //map.setZoom(10);
//}

//Function to covert address to Latitude and Longitude
var getLocation = function (address) {
    debugger;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {

        debugger;
        if (status == google.maps.GeocoderStatus.OK) {
           
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            map.setCenter({ lat: latitude, lng: longitude });
            map.setZoom(20);

            var marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map
            });
        } 
    }); 
}
