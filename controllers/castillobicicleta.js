// Importa el modelo 'Bicicleta' desde el archivo '../models/castillobicicleta'
var Bicicleta = require('../models/castillobicicleta');

// Función para mostrar la lista de bicicletas
exports.bicicleta_list = function(req, res){
	// Renderiza la vista 'bicicletas/index' y pasa como parámetro un objeto con todas las bicicletas
	res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
}

// Función para mostrar el formulario de creación de bicicletas (GET)
exports.bicicleta_create_get = function(req, res){
	// Renderiza la vista 'bicicletas/create'
	res.render('bicicletas/create');
}

// Función para crear una nueva bicicleta (POST)
exports.bicicleta_create_post = function(req, res){
	// Crea una nueva instancia de Bicicleta con los datos recibidos del formulario
	var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
	// Asigna la ubicación de la bicicleta con los datos recibidos del formulario
	bici.ubicacion = [req.body.lat, req.body.lng];
	// Agrega la bicicleta creada a la lista de bicicletas
	Bicicleta.add(bici);

	// Redirecciona a la página de lista de bicicletas
	res.redirect('/bicicletas');
}

// Función para mostrar el formulario de actualización de bicicletas (GET)
exports.bicicleta_update_get = function(req, res){
	// Encuentra la bicicleta con el id especificado en los parámetros de la solicitud
	var bici = Bicicleta.findById(req.params.id);

	// Renderiza la vista 'bicicletas/update' y pasa como parámetro la bicicleta a actualizar
	res.render('bicicletas/update', {bici});
}

// Función para actualizar una bicicleta existente (POST)
exports.bicicleta_update_post = function(req, res){
	// Encuentra la bicicleta con el id especificado en los parámetros de la solicitud
	var bici = Bicicleta.findById(req.params.id);
	// Actualiza los datos de la bicicleta con los recibidos del formulario
	bici.id = req.body.id;
	bici.color = req.body.color;
	bici.modelo = req.body.modelo;
	bici.ubicacion = [req.body.lat, req.body.lng];

	// Redirecciona a la página de lista de bicicletas
	res.redirect('/bicicletas');
}

// Función para eliminar una bicicleta (POST)
exports.bicicleta_delete_post = function(req, res){
	// Elimina la bicicleta con el id especificado en los parámetros de la solicitud
	Bicicleta.removeById(req.body.id);

	// Redirecciona a la página de lista de bicicletas
	res.redirect('/bicicletas');
}