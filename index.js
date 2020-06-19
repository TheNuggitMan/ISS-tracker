// ?units=miles
function getData(){
fetch('https://api.wheretheiss.at/v1/satellites/25544')

.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
})
}

function getMiles(){
  fetch('https://api.wheretheiss.at/v1/satellites/25544?units=miles')
  .then(function (peepResponse) {
    return peepResponse.json();
  })
  .then(function (peeps) {
    appendData(peeps);
  })
}

function appendData(data) {
const container = document.getElementById("container");
const location = document.getElementById("location");
const heightSpeed= document.getElementById("heightSpeed");
location.innerHTML = "Latitude: " + data.latitude + ', ' + "Longitude: " + data.longitude;
heightSpeed.innerHTML = 'Altitude: ' + data.altitude + '. ' + 'Current Speed: ' + data.velocity + '.';
container.append(location, timeStamp);
}

//
//
//
// function appendPeople(peeps) {
//     const peopleContainer = document.getElementById("people");
//     const howMany = document.getElementById("peopleNumber");
//     const who = document.getElementById("peopleList");
//     const astroPilots = peeps.people;
//     howMany.innerHTML = "Number of People: " + peeps.number;
//     who.innerHTML =  "Who: " +
//     astroPilots.map(function(list){return ' ' + list.name});
//     peopleContainer.append(howMany, who);
//}

document.getElementById('refresh').addEventListener("click", getData);
document.getElementById('miles').addEventListener("click", getMiles);

//The object I was working on....
// {"message": "success", "number": 5,
// "people":
// [{"craft": "ISS", "name": "Chris Cassidy"}, {"craft": "ISS", "name": "Anatoly Ivanishin"}, {"craft": "ISS", "name": "Ivan Vagner"}, {"craft": "ISS", "name": "Doug Hurley"}, {"craft": "ISS", "name": "Bob Behnken"}]
// }

//Future plans to add current Map
//
// function moveISS () {
//     $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
//         var lat = data['iss_position']['latitude'];
//         var lon = data['iss_position']['longitude'];
//
//         // See leaflet docs for setting up icons and map layers
//         // The update to the map is done here:
//         iss.setLatLng([lat, lon]);
//         isscirc.setLatLng([lat, lon]);
//         map.panTo([lat, lon], animate=true);
//     });
//     setTimeout(moveISS, 5000);
// }

// http://open-notify.org/Open-Notify-API/?ref=public-apis << Get the map website from here
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);
