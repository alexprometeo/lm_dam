// Seleccionar elemento por identificador
let cabeceraPrincipal = document.getElementById("cabeceraPrincipal");

// Seleccionar elementos por el nombre de su clase
let likeClass = document.getElementsByClassName("like");

// Seleccionar elementos por el nombre de etiqueta
let liTag = document.getElementsByTagName("li");

// Seleccionar elementos por el nombre de etiqueta
let ulTag = document.getElementsByTagName("ul");

console.log("Elemento cabecera: ", cabeceraPrincipal);
console.log("Elemento clase like: ", likeClass);
console.log("Elemento etiqueta li: ", liTag);
console.log("Elemento etiqueta ul: ", ulTag);

// Seleccionar elementos hijos de la 1era etiqueta "ul"
let hijos_ul = ulTag[0].childNodes;
console.log("Hijo del elemento UL:", hijos_ul);

// Seleccionar elemento padre del 1er elemento con clase "like"
let padreLike = likeClass[0].parentNode;
console.log("Elemento padre de like: ", padreLike);


// Cambiar estilo del elemento con el identificador "cabeceraPrincipal"
cabeceraPrincipal.style.backgroundColor = "tomato";

// Cambiar estilo del elemento con el identificador "cabeceraPrincipal" añadiendo un border y un color de fondo
cabeceraPrincipal.style = "border: solid 10px black; background-color: tomato";


//body -> color de fondo
//h3 -> cambiar el color de texto del 1er h3

let bodyTag = document.getElementsByTagName("body")[0];
bodyTag.style = "background-color: skyblue";

// seleccionar el 1er elemento de la colección de elementos h3
let primerH3 = document.getElementsByTagName("h3")[0];
primerH3.style = "color: yellow";


// Crear un nuevo elemento "<li></li>"
let nuevoElemento = document.createElement("li");

// Asignar valor al HTML interno del elemento creado
// windows + . -> ventana de emoticonos
nuevoElemento.innerHTML = "🐭";

console.log("nuevo elemento creado: ", nuevoElemento);

// Seleccionar etiquetas OL dentro de mi estructura HTML
let etiquetaOL = document.getElementsByTagName("OL");
console.log("etiqueta <ol>: ", etiquetaOL);

// Añadir un nuevo elemento hijo dentro de la 1era etiqueta ol
etiquetaOL[0].appendChild(nuevoElemento);

// Añadir un elemento en la posición que le indiquemos
etiquetaOL[0].insertBefore(nuevoElemento, etiquetaOL[0].children[0]);

let nuevaEtiqueta = "<h1>Cabeceraa!</h1>";

cabeceraPrincipal.insertAdjacentHTML("beforebegin","<h1>Cabecera antes de la etiqueta</h1>");
cabeceraPrincipal.insertAdjacentHTML("afterbegin", "<h1>Cabecera al principio del contenido</h1>");
cabeceraPrincipal.insertAdjacentHTML("beforeend", "<h1>Cabecera al final del contenido</h1>");
cabeceraPrincipal.insertAdjacentHTML("afterend", "<h1>Cabecera despues de la etiqueta</h1>");