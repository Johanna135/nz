
var map = L.map('map').setView([47.32, 11.286111], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([47.32, 11.286111]).addTo(map);
marker.bindPopup("<b>Gipfelstürmernadel!</b><br>Klettern im Karwendel").openPopup();
