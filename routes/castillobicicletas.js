// Importa el módulo 'express' para crear rutas
var express = require('express');
// Crea un enrutador de express
var router = express.Router();
// Importa el controlador 'bicicletaController' desde el archivo '../controllers/castillobicicleta'
var bicicletaController = require('../controllers/castillobicicleta');

// Define la ruta GET '/' que llama al método 'bicicleta_list' del controlador 'bicicletaController'
router.get('/', bicicletaController.bicicleta_list);
// Define la ruta GET '/create' que llama al método 'bicicleta_create_get' del controlador 'bicicletaController'
router.get('/create', bicicletaController.bicicleta_create_get);
// Define la ruta POST '/create' que llama al método 'bicicleta_create_post' del controlador 'bicicletaController'
router.post('/create', bicicletaController.bicicleta_create_post);
// Define la ruta POST '/:id/delete' que llama al método 'bicicleta_delete_post' del controlador 'bicicletaController'
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);
// Define la ruta GET '/:id/update' que llama al método 'bicicleta_update_get' del controlador 'bicicletaController'
router.get('/:id/update', bicicletaController.bicicleta_update_get);
// Define la ruta POST '/:id/update' que llama al método 'bicicleta_update_post' del controlador 'bicicletaController'
router.post('/:id/update', bicicletaController.bicicleta_update_post);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
