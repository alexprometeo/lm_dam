// alert("Ya es viernes!!!");

// Declaración antigua de una variable
var variableNueva = "valor nuevo";


// Declaración desde ecmascript6 let y const 
let product = "Tomatoes";

//Se peuden declarar en la misma línea pero es recomendable en líneas separadas por cada variable
let color = "red", price = 2;

//Nueva variable porque volviendo a declarar con let product falla al estar ya declarada
let techProduct = "PS5 PRO";


// Nueva asignación de valor a la variable ya declarada
product = "Nintendo Switch";


// Copiar valor de otra variable
product = techProduct;

/* Abrir consola navegador:
     - CTRL + Mayus + I
     - F12
     - Click derecha -> Inspeccionar
*/

console.log("Mi producto es: ", product);


let pokemon = "Bulbasur";

// No nos permite declarar una variable empezando por dígitos o caracteres especiales ($)
// let 1pokemon = "Charizard";

// console.log("Mi pokemon favorito es: ", pokemon);

function showPokemon (nombrePokemon) {
    pokemon = nombrePokemon;
    console.log("Mi pokemon favorito es: ", pokemon);
}

showPokemon(pokemon);

showPokemon("Pikachu");

console.log("Pokemon: ", pokemon);

let firstName = "Jon";
let lastName = "Snow";
let age = 24;

// Mi nombre es Jon Snow y tengo 24 años

// `` a  la derecha de la tecla P
console.log(`Mi nombre es ${firstName} ${lastName} y tengo ${age} años`);

console.log("Mi nombre es", firstName, lastName, "y tengo", age, "años");

// age = age + 6;
age += 6;

// age = age + 1
age++;

// age = age - 5
age -= 5;

// age = age * 3
age *= 3;

// age = age / 2
age /= 2;


console.log("Edad final: ", age);

