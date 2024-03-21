
var map = L.map('map').setView([-45.316667, 166.983333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-45.316667, 166.983333]).addTo(map);
marker.bindPopup("<b>popup</b><br>popup").openPopup();

