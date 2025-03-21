//Variable global que tendrá el resutlado del parseado del JSON
let datosConfig;

//Elemento donde añadiremos los valores
const resultado = document.getElementById("result");

//Div contenedor del h3 y el texto del resultado
const mostrarResultado = document.getElementById("showContent");

//Div contenedor del h3 y el texto del resultado
const separador = document.getElementById("separator");

//Para redirigir al index y con eso conseguir reiniciar la página
const cabecera = document.getElementById("header");

cabecera.onclick = function () {
    window.location.href = './index.html';
}

//Leer el archivo JSON local
fetch('assets/cofiguracion_web.json')
    .then(function(response) {
        response.json()
        .then(function (data) {
            datosConfig = data;

            console.log("Datos cargados:", datosConfig);
        })
    })
    .catch(function(error) {
        console.error("Error al cargar el archivo JSON:", error)
    });

//Función para mostrar la estructura completa del JSON
function mostrarContenido() {
    let contenidoJSON = datosConfig.configuracion;

    resultado.textContent = JSON.stringify(contenidoJSON, null, 2);

    if (mostrarResultado.style.display === "none" || mostrarResultado.style.display === "") mostrarResultado.style.display = "block";
    if (separador.style.display === "none" || separador.style.display === "") separador.style.display = "block";
}