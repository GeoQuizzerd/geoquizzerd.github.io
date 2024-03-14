let selectedCountry = null;
let selectedCountryCode3 = null;
let checkConfirm = false;

console.log(InputMapFlag);
//InputMapFlag.addEventListener("click", CheckCountryMap);


// Créer la carte Leaflet et la centrer sur les coordonnées initiales
let map = L.map('map', {cursor: true}).setView([51.505, -0.09], 2);

// Ajouter une couche de tuiles OpenStreetMap à la carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 3,
    maxZoom: 11,
    noWrap: true
}).addTo(map);

let southWest = L.latLng(-59.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
let bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// Valeur utilisateur pour la recherche de pays
console.log(Countries);
console.log(Countries[0]);
console.log(Countries[0].alpha_3);
let countryChoice = Countries[Math.round(Math.random() * Countries.length)];
let countryCode = countryChoice.alpha_3;
console.log(countryChoice);
console.log(countryChoice.name);
console.log(countryCode);

console.log(CountriesGeo.features[80]);
console.log(CountriesGeo.features[80].properties.adm0_a3);

const DrawCountry = (ccode) => {
// Boucle pour parcourir chaque pays dans everyCountry.features
for (let i = 0; i < CountriesGeo.features.length; i++) {
    // Vérifier si le nom du pays correspond à userInput
    if (CountriesGeo.features[i].properties.adm0_a3 === ccode) {
        // Ajouter une couche GeoJSON pour le pays trouvé à la carte
        //let myStyle = {"color": "#ff0000"};
        //markerPoint = L.geoJSON(CountriesGeo.features[i].geometry, {style: myStyle});
        markerPoint = L.geoJSON(CountriesGeo.features[i].geometry);
        markerPoint.addTo(map);
    }
}
}


let markerPoint = null;
let markerPoint2 = null;

map.on('click', function(e) {
    if (!checkConfirm){
        ResetCountriesBorder();
        console.log(e.latlng);/*
        markerPoint = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
        */
        SearchCountry(e.latlng);
    }
});

const ResetCountriesBorder = () => {
    if (markerPoint != null){
        map.removeLayer(markerPoint);
    }
    if (markerPoint2 != null){
        map.removeLayer(markerPoint2);
    }
}

const CheckCountryMap = () => {
    ResetCountriesBorder();
    console.log(`validCountryCode3 == selectedCountryCode3 : ${validCountryCode3} == ${selectedCountryCode3}`)
    if (validCountryCode3.length > 0){
        checkConfirm = true;
        if (validCountryCode3 == selectedCountryCode3){
            console.log("correct !");
            score++;
            document.getElementById('score').innerHTML = score;
            let myStyle = {"color": "#00ff00"};
            let save1;
            for (let i = 0; i < CountriesGeo.features.length; i++) {
                // Vérifier si le nom du pays correspond à userInput
                if (CountriesGeo.features[i].properties.adm0_a3 === validCountryCode3) {
                    // Ajouter une couche GeoJSON pour le pays trouvé à la carte
                    //let myStyle = {"color": "#ff0000"};
                    //markerPoint = L.geoJSON(CountriesGeo.features[i].geometry, {style: myStyle});
                    save1 = i;
                }
            }
            markerPoint = L.geoJSON(CountriesGeo.features[save1].geometry, {style: myStyle});
            markerPoint.addTo(map);
        }
        else{
            console.log("FAUX !");
            error++;
            document.getElementById('error').innerHTML = error;
            let save1;
            let save2;
            for (let i = 0; i < CountriesGeo.features.length; i++) {
                // Vérifier si le nom du pays correspond à userInput
                if (CountriesGeo.features[i].properties.adm0_a3 === selectedCountryCode3) {
                    save1 = i;
                }
                if (CountriesGeo.features[i].properties.adm0_a3 === validCountryCode3) {
                    save2 = i;
                }
            }
            let myStyle = {"color": "#ff0000"};
            markerPoint = L.geoJSON(CountriesGeo.features[save1].geometry, {style: myStyle});
            markerPoint.addTo(map);
            let myStyle2 = {"color": "#f6b11c"};
            markerPoint2 = L.geoJSON(CountriesGeo.features[save2].geometry, {style: myStyle2});
            markerPoint2.addTo(map);
        }
    }
}



const SearchCountry = (coord) => {
    let coords = "";
    console.log(coord);
    for (const [key, value] of Object.entries(coord)){
        coords += String(value) + ',';
    }
    coords.substring(0, -1);
    var api_key = 'cecfb42949234d6a9a2574995c59d549';
    
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
    
    var request_url = api_url
      + '?'
      + 'key=' + api_key
      + '&q=' + encodeURIComponent(coords)
      + '&pretty=1'
      + '&no_annotations=1';
    
    // see full list of required and optional parameters:
    // https://opencagedata.com/api#required-params
    
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
    
    request.onload = function() {
        // see full list of possible response codes:
        // https://opencagedata.com/api#codes
        var data = JSON.parse(request.responseText);
        if (request.status === 200){  // Success!
            var country = 'no country returned';
            if (data.results[0].components.country != null){
                country = data.results[0].components.country;
                console.log(data.results[0].components);
                for (const [key, value] of Object.entries(data.results[0].components)){
                    if (String(key) == "ISO_3166-1_alpha-3"){
                        console.log(`selectedCountryCode3 = ${value}`);
                        selectedCountryCode3 = value;
                        DrawCountry(selectedCountryCode3);
                    }
                }
            }
            console.log('country: ' + country);
        } else {
            console.log("unable to geocode! Response code: " + request.status);
            console.log('error msg: ' + data.status.message);
        }
    };
    
    request.onerror = function() {
        // There was a connection error of some sort
        console.log("unable to connect to server");
    };
    request.send();  // make the request
}

document.getElementById("InputMapFlag").onclick = function() {
    if (!checkConfirm && selectedCountryCode3 != null) {
        document.getElementById("InputMapFlag").value = "Suivant";
        checkConfirm = true; 
        CheckCountryMap(); 
        //document.getElementById("ConfirmMapFlag").disabled = false; 
        //document.getElementById("InputMapFlag").disabled = true;
    }
    else if (checkConfirm){
        document.getElementById("InputMapFlag").value = "Confirmer";
        checkConfirm = false; 
        selectedCountryCode3 = null;
        ResetCountriesBorder(); 
        StartingGame("mapFlag"); 
        //document.getElementById("ConfirmMapFlag").disabled = true; 
        //document.getElementById("InputMapFlag").disabled = false;
    }
};
//document.getElementById("ConfirmMapFlag").onclick = function() { if (checkConfirm) {checkConfirm = false; ResetCountriesBorder(); StartingGame("mapFlag"); document.getElementById("ConfirmMapFlag").disabled = true; document.getElementById("InputMapFlag").disabled = false}};