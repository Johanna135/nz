
let map = L.map('map').setView([-45.316667, 166.983333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([-45.316667, 166.983333]).addTo(map);
marker.bindPopup("<b>popup</b><br>popup").openPopup();



/* Beispiel
mit strg + F suchen und ersetzen
//Statt "" und '' kann ich diese nehmen `` dann kann ich auch im Text stellen in Füßchen setzen
console.log(`Test`);

let absatz = "Hallo Welt!";
let nummer = 6;

console.log(`Test
<h3> Test fürs "Tutorial" </h3>
<p>${absatz}</p>
<p>Nummer plus 1 = ${nummer + 1}</p>`);
*/