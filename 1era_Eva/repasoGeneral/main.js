const botonAgregar = document.getElementById("agregarTarea");
console.log("botonAgregar:", botonAgregar);


function agregarTarea() {
    //seleccionar el elemento con el identificador "listaTareas"
    let listaTareas = document.getElementById("listaTareas");
    //declarar una variable que tenga como valor la creación de un

    let elementoMensajes = document.getElementById("mensajes");

    let textoMensaje = document.createElement("p");

    //elemento div
    let tarea = document.createElement("div");
    //pintar por consola los dos elementos
    //console.log("listaTareas:", listaTareas, "nuevo elemento:", tarea);
    //tarea.textContent = "Nueva tarea";

    //Asignar a una nueva variable textoTarea el valor que introduzca el usuario por la ventana
    let textoTarea = prompt("Introduce el nombre de la tarea");

    if(textoTarea.length === 0 || textoTarea === '') {
        elementoMensajes.style = "display: flex";

        textoMensaje.textContent = "¡El nombre de la tarea no puede estar vacía!";

        elementoMensajes.appendChild(textoMensaje);
    } else {
        textoMensaje.textContent = "";
        elementoMensajes.style = "display: none";

        //Asignamos el valor introducido por ventana al textcontent de la tarea
        tarea.textContent = textoTarea;

        //Asignamos una clase llamada "tarea" al elemento tarea
        tarea.className = "tarea";

        //creamos un nuevo elemento "button"
        let botonEliminar = document.createElement("button");

        //Asignamos el textContent de la nueva variable botonEliminar
        botonEliminar.textContent = "Eliminar";

        //Le asignamos una clase también
        botonEliminar.className = "eliminar";

        //Añadimos como elemento hijo la variable botonEliminar a la variable tarea 
        tarea.appendChild(botonEliminar);

        // Asignamos en el click la invocación de la función eliminarTarea pasandole por parametro el propio botonEliminar
        botonEliminar.onclick = function () {
            eliminarTarea(this);
        }

        //Añadimos como elemento hijo la variable tarea al elemento con el identificador "listaTareas" 
        listaTareas.appendChild(tarea);
    }

}


botonAgregar.onclick = function () {
    agregarTarea();
}

//Declarar una nueva función llamada eliminarTarea
// boton por parámetro
// recuperar el elemento padre de la variable boton y eliminarlo
function eliminarTarea (boton) {
    let elementoPadre = boton.parentElement;
    elementoPadre.remove();
}
