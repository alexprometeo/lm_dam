const cabecera = document.getElementById("cabecera");
const contenido = document.getElementById("contenidoPrincipal");
const pie = document.getElementById("piePagina");

function mostrarElementos () {
    console.log(cabecera);
    console.log(contenido);
    console.log(pie);
}

mostrarElementos();

//Función que modifique el contenido del elemento cabecera para que tenga otro texto
// y modifique el color de fondo del elemento contenidoPrincipal

function modificarElementos(){
    cabecera.innerHTML = "<h1>NUEVO!!</h1>";

    //contenido.style = "background-color: antiquewhite;"
    contenido.style.backgroundColor = "antiquewhite";
}

modificarElementos();

//Crea una nueva función que seleccione todos los elementos con la clase "brownText"
// y muéstralo por consola

function modificarElementosBrownText() {
    const brownText = document.getElementsByClassName("brownText");
    console.log(brownText);

    // Haciendo referencia al ultimo elemento de la colección de brownText,
    // modifica su color de fondo
    //brownText[2].style.backgroundColor = "brown";

    //brownText[brownText.length-1].style.backgroundColor = "brown";

    for (let elemento of brownText) {
        elemento.style.color = "brown";
    }
}


//Funcion que aplique a todos los elementos con clase brownText color de texto marrón
//y por cada clase de diferente color, el color de fondo especifico
function modificarClases() {
    modificarElementosBrownText();

    const green = document.getElementsByClassName("greenBackground");
    const blue = document.getElementsByClassName("blueBackground");
    const antique = document.getElementsByClassName("antiquewhiteBackground");

    green[0].style.backgroundColor = "green";
    blue[0].style.backgroundColor = "blue";
    antique[0].style.backgroundColor = "antiquewhite";
}

modificarClases();

/*
Atributos de los elementos a tener en cuenta:
 - innerHTML;
 - innerText;
 - textContent;
 - className;
 - classList;
 - children;
 - value (sobre todo en los inputs);
 - style;
 - parentElement;
*/

let nuevoTextoParrafo = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae mollitia fugiat rerum nam veniam minima, at adipisci error eum omnis, ducimus minus temporibus suscipit iusto quis consectetur incidunt dolorum.";
let nuevoElementoParrafo = document.createElement("p");

//Asignar el valor del nuevoTextoParrafo dentro del nuevo elemento y ese elemento añadirlo en el elemento contenido
nuevoElementoParrafo.textContent = nuevoTextoParrafo;

contenido.appendChild(nuevoElementoParrafo);

nuevoElementoParrafo.remove();


