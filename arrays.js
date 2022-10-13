//CONST

var edad = 12;
let edad1 = 25;
const edad2 = 45;
/*

|  id   |  nomVar  | nivel  | function | value  |  type
#000001    edad      global    null       12       var
#000001    edad2     global    null      45       const
#004500    edad2     local     this.suma  67       const
#004522    edad      local    this.suma   34       let
#004522    edad      local    this.suma   34       let
*/


console.log(edad);
console.log(edad1);
console.log(edad2);

edad = 2;
edad1 = 45;
//edad2 = 50;

console.log(edad);
console.log(edad1);
console.log(edad2);

function suma(){
	const edad2 = 67;
	let edad =34;
	edad =3;
	console.log("\n" + edad2);
	console.log(edad);
	console.log(edad1 + edad2);
}

suma();


var edad = "Treinta";
edad1 = "Cincuenta";

console.log(edad);
console.log(edad1);

//con VAR se declaran variables, se pueden nombrar de la misma forma y re-declarar las variables en el mismo nivel y cambiar contenido
//con LET se declaran variables, NO se pueden nombrar de la misma forma NI re-declarar las variables en el mismo nivel y pero si cambiar contenido
//con CONST se declara una sola vez la variable y no se puede cambiar contenido

