// Función para actualizar el contador de películas
function actualizarContador() {
    const lista = document.getElementById("peliculasLista");
    const contador = lista.childElementCount;
    console.log(`Películas restantes: ${contador}`);
}

// Modificación en la función eliminarPelicula
function eliminarPelicula(boton) {
    const elementoPadre = boton.parentElement;
    elementoPadre.remove();
    console.log("Película eliminada:", elementoPadre.querySelector("span").textContent);

    // Actualizar el contador tras eliminar
    actualizarContador();
}

// Llamar al contador al cargar la página
actualizarContador();
