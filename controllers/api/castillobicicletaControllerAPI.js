// Importa el modelo 'Bicicleta' desde el archivo '../../models/castillobicicleta'
var Bicicleta = require('../../models/castillobicicleta');

// Función para obtener la lista de bicicletas (GET)
exports.bicicleta_list = function(req, res){
    // Retorna un objeto JSON con la lista de bicicletas
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}

// Función para crear una nueva bicicleta (POST)
exports.bicicleta_create = function(req, res){
    // Crea una nueva instancia de Bicicleta con los datos recibidos del formulario
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    // Asigna la ubicación de la bicicleta con los datos recibidos del formulario
    bici.ubicacion = [req.body.lat, req.body.lng];

    // Agrega la bicicleta creada a la lista de bicicletas
    Bicicleta.add(bici);

    // Retorna un objeto JSON con la bicicleta creada
    res.status(200).json({
        bicicleta: bici
    });
}

exports.bicicleta_update_post = function (req, res) {
    let bici = Bicicleta.findById(req.params.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.removeById(bici.id);
    Bicicleta.add(bici);
    res.status(200).json({
      bicicleta: bici
    })
  }

// Función para eliminar una bicicleta (DELETE)
exports.bicicleta_delete = function(req, res){
    // Elimina la bicicleta con el id especificado en los parámetros de la solicitud
    Bicicleta.removeById(req.body.id);

    // Retorna un código de estado 204 (No Content) para indicar que la bicicleta fue eliminada con éxito
    res.status(204).send();
}
