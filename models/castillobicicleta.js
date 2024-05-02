var Bicicleta = function(id, color, modelo, ubicacion){
	this.id = id;
	this.color = color;
	this.modelo = modelo;
	this.ubicacion = ubicacion;
}

Bicicleta.prototype.ToString = function (){
	return 'id: ' + this.id + " | color: " + this.color + " | ubicacion: " + this.ubicacion;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
	Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId){
	var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
	if (aBici)
		return aBici;
	else
		throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
	for(var i = 0; i < Bicicleta.allBicis.length; i++){
		if (Bicicleta.allBicis[i].id == aBiciId){
			Bicicleta.allBicis.splice(i, 1);
			break;
		}
	}
}

var a = new Bicicleta(1,'rojo','urbana',[4.613519525006542, -74.06388900568483]);
var b = new Bicicleta(2,'verde','urbana',[4.615797359037299, -74.06878135466836]);


Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;