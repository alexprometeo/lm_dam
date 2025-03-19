//Seleccionamos el elemento del formulario
let formulario = document.getElementById("formEntradas");
console.log(formulario);


//Seleccionamos el elemento de número de entradas
let numEntradas = document.getElementById("tickets");
//console.log(numEntradas);



formulario.onsubmit = function (event) {
    //Si estamos asignandole una nueva función a un evento (onsubmit, onclick, onX...)
    //Podremos utilizar el event.preventDefault() para parar la ejecución habitual de ese evento
    event.preventDefault();
    console.log("Salgo cuando hago el submit.");

    let valorEntradas = numEntradas.value;


    console.log("El usuario ha seleccionado :", valorEntradas, "entradas.");

    if (valorEntradas < 0 ) alert("El número de entradas no puede ser negativo");
    if (valorEntradas > 8 ) alert("El número de entradas no puede ser mayor de 8");
}