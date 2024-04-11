// Definition der Koordinaten latidute und longitude
let lat = -45.316667;
let lng = 166.983333;
//Zoomfaktor als Variable definieren
let zoom = 11;

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
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