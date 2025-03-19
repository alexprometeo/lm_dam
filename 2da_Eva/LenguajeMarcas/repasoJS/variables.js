let nombre = "Alexandru";
const apellidos = "Cucuruzeanu";
var edad = 29;

//console.log("Mi nombre es", nombre, apellidos, "y tengo", edad, "años.");

//Con comillas francesas (las que están al lado de la P en el teclado)
//console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad} años.`);
mostrarMensajeConVariablesLocales();
mostrarMensajeConVariablesGlobales();

//Si la variable se ha declarado con const, no podemos modificar su valor, daría error
//apellidos = "Bezos";


//No podemos declarar variables comenzando por números
//let 10productos = "ratones";

//Ni pueden contener guiones
//let nombre-pais = "Ghana";

//Ni utilizar palabras reservadas
//let return = false;

nombre = "Pepe";
let apellidoAida = "Viyuela";

nombre = apellidoAida;

//Equivale a  edad = edad + 1;
edad++;

//Equivale a edad = edad + 5;
edad+=5;

//Equivale a edad = edad - 2;
edad-=2;

modificarEdad();


//Función que replique el console.log anterior
function mostrarMensajeConVariablesLocales() {
    let nombre = "Juan";
    let apellidos = "García";
    let edad = 25;

    console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad} años.`);
}


function mostrarMensajeConVariablesGlobales() {
    console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad} años.`);
}

//Funcion que sume 10 a la variable global "edad" y la muestre por consola
// y declarar otra variable también llamada edad, que tenga el valor 11 y lo muestre por consola.

function modificarEdad() {
    edad+= 10;
    console.log("Edad global modificado: ", edad);

    //Si queremos utilizar variables globales y variables locales con el mismo nombre, la declaración de la variable local debe estar en la 1era línea.
    //let edad = 11;

    //console.log("Edad local: ", edad);
}

