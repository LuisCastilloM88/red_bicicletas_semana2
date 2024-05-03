// Crea un mapa Leaflet con el id 'main_map', centrado en [4.62805556, -74.06527778] y con un zoom de 13
var map = L.map('main_map', {
    center: [4.62805556, -74.06527778],
    zoom: 13
});

// Agrega una capa de mosaico de OpenStreetMap al mapa
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

// Realiza una solicitud AJAX para obtener la lista de bicicletas desde la API
$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        // Imprime el resultado en la consola
        console.log(result);
        // Itera sobre cada bicicleta en el resultado y agrega un marcador en el mapa con su ubicación
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
});
