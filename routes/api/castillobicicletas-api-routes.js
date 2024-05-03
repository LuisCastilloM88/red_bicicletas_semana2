// Importa el módulo 'express' para crear rutas
var express = require('express');
// Crea un enrutador de express
var router = express.Router();
// Importa el controlador 'bicicletaController' desde el archivo '../../controllers/api/castillobicicletaControllerAPI'
var bicicletaController = require('../../controllers/api/castillobicicletaControllerAPI');

// Define la ruta GET '/' que llama al método 'bicicleta_list' del controlador 'bicicletaController'
router.get('/', bicicletaController.bicicleta_list);
// Define la ruta POST '/create' que llama al método 'bicicleta_create' del controlador 'bicicletaController'
router.post('/create', bicicletaController.bicicleta_create);
// Define la ruta DELETE '/delete' que llama al método 'bicicleta_delete' del controlador 'bicicletaController'
router.delete('/delete', bicicletaController.bicicleta_delete);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
