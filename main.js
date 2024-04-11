// Definition der Koordinaten latidute und longitude
let lat = -45.316667;
let lng = 166.983333;
//Zoomfaktor als Variable definieren
let zoom = 11;

//großes L --> Leaflet im Spiel
// geschwungene Klammern sind hier Object literals, innen drinnen sind keywords mit Werten, diese sind durch kommas getrennt.
// erstes Key Value pair ist center mit lat,lng das zweite ist zoom mit zoom. Änlich wie dictionary in Python --> Key Value pairs
let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
    Doubtfull Sound
    <ul>
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Länge: ${lng.toFixed(5)}</li>
    </ul>
`).openPopup();



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