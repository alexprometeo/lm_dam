// Escribir el valor del nombre 
// y del departamento por consola
console.log("Entro");
let responsable = document.getElementById("responsable");
let dpto = document.getElementById("departamento");    


let botonEnviar = document.getElementById("botonEnviar");

console.log(botonEnviar);

botonEnviar.onclick = function (event) {
    event.preventDefault();

    console.log("Responsable: ", responsable.value);
}