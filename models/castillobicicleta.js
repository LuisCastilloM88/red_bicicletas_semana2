// Define la clase Bicicleta con un constructor que recibe id, color, modelo y ubicación
var Bicicleta = function(id, color, modelo, ubicacion){
	this.id = id;
	this.color = color;
	this.modelo = modelo;
	this.ubicacion = ubicacion;
}

// Agrega un método ToString al prototipo de Bicicleta para convertir la bicicleta a string
Bicicleta.prototype.ToString = function (){
	return 'id: ' + this.id + " | color: " + this.color + " | ubicacion: " + this.ubicacion;
}

// Inicializa una lista vacía para almacenar todas las bicicletas
Bicicleta.allBicis = [];

// Método estático para agregar una bicicleta a la lista
Bicicleta.add = function(aBici){
	Bicicleta.allBicis.push(aBici);
}

// Método estático para buscar una bicicleta por su id
Bicicleta.findById = function(aBiciId){
	// Utiliza el método find para buscar una bicicleta con el id dado en la lista de bicicletas
	var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
	if (aBici)
		return aBici;
	else
		throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}

// Método estático para eliminar una bicicleta por su id
Bicicleta.removeById = function(aBiciId){
	// Utiliza un bucle for para recorrer la lista de bicicletas y eliminar la bicicleta con el id dado
	for(var i = 0; i < Bicicleta.allBicis.length; i++){
		if (Bicicleta.allBicis[i].id == aBiciId){
			Bicicleta.allBicis.splice(i, 1);
			break;
		}
	}
}

// Crea dos instancias de bicicleta y las agrega a la lista de bicicletas
var a = new Bicicleta(1,'rojo','urbana',[4.613519525006542, -74.06388900568483]);
var b = new Bicicleta(2,'verde','urbana',[4.615797359037299, -74.06878135466836]);
Bicicleta.add(a);
Bicicleta.add(b);

// Exporta la clase Bicicleta para que pueda ser utilizada en otros archivos
module.exports = Bicicleta;
