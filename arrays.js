//métodos de ordenamiento de arrays sort()
/*
const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
//const equipos = new Array ('Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus');

console.log("Elementos en equipos: \n");
//console.log(equipos);

//funcion join () para abregar, despues de cada item, caracteres

//console.log(equipos.join(" | \n")); //convierte array en cadena 
// ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'] => Real Madrid | Manchester Utd | Bayern Munich | Juventus;
alert(equipos.join(" | \n"));

//Utilizando el método sort(), se ordenan en orden ascendente
//equipos = equipos.sort();
equipos.sort(); 

console.log("Elementos ordenados: \n");
console.log(equipos.join(" | "));*/



const numeros = [1,23,5,10,45,8];
const numeros1 = [1,23,5,10,45,8];

console.log("Elementos en numeros: \n");
console.log(numeros.join(" | "));

//Utilizando el método sort(), se ordenan en orden ascendente
numeros.sort(function(a, b){return a - b});

numeros1.sort();

console.log("Elementos ordenados: \n");
console.log("Con sort(): \n" + numeros1.join(" | "));
console.log("Con funcion de comparacion sort(): \n" +numeros.join(" | "));




