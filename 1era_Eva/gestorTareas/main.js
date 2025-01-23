const botonAgregar = document.getElementById("agregarTarea");
console.log("botonAgregar:", botonAgregar);

const botonEliminar = document.getElementById("eliminarTareas");
console.log("eliminarTareas:", botonEliminar);

//seleccionar el elemento con el identificador "listaTareas"
let listaTareas = document.getElementById("listaTareas");


function agregarTarea() {
    let elementoMensajes = document.getElementById("mensajes");

    //declarar una variable que tenga como valor la creación de un nuevo elemento "p"
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

        let elementosHijosMensaje = elementoMensajes.children;

        // Comprobar los elementos hijos del elemento mensajes para no añadir mas de un mensaje igual
        if (elementosHijosMensaje.length !== 0) {
            for (let index = 0; index < elementosHijosMensaje.length; index++) {
                if (elementosHijosMensaje[index].textContent !== textoMensaje.textContent) {
                    elementoMensajes.appendChild(textoMensaje);
                }
            } 
        } else {
            elementoMensajes.appendChild(textoMensaje);
        }
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

        let hijosListadoTareas = listaTareas.children;
        //console.log("hijosListadoTareas: ", hijosListadoTareas);

        // Comprobación de los elementos hijos del listado de tareas para no añadir tareas duplicadas
        if (hijosListadoTareas.length !== 0) {
            let repetido = false;
            for (let index = 0; index < hijosListadoTareas.length; index++) {
                if (hijosListadoTareas[index].innerHTML == tarea.innerHTML) {
                    repetido = true;
                }
            }

            if (repetido === false || !repetido) {
                listaTareas.appendChild(tarea);
            }
        } 
        else {
            //Añadimos como elemento hijo la variable tarea al elemento con el identificador "listaTareas" 
            listaTareas.appendChild(tarea);
        }


    }

}


botonAgregar.onclick = function () {
    agregarTarea();
}

botonEliminar.onclick = function () {
    eliminarTareas();
}

//Declarar una nueva función llamada eliminarTarea
// boton por parámetro
// recuperar el elemento padre de la variable boton y eliminarlo
function eliminarTarea (boton) {
    let elementoPadre = boton.parentElement;
    let cuidado = prompt("¿Estás seguro que quieres eliminar la tarea? (S/N)");
    if (cuidado === "S") {
        elementoPadre.remove();
    }
    
}
 /*
Mejoras a implementar:
- Si el usuario hace click en DAM Prometeo, ir a la web de Prometeo;
*/


// Añadir boton que elimine todas las tareas
function eliminarTareas () {
    console.log("listaTareas elementos hijos: ", listaTareas.children);
    // let elementosHijos = listaTareas.children;

    //Al ser una colección HTML no funciona correctamente el forEach
    // elementosHijos.forEach(tarea => {
    //     tarea.remove();
    // });

    // Con un bucle for normal perdemos la referencia al estar cambiando el length de la lista de tareas y no podemos eliminar debidamente todas las tareas
    // for (let indice = 0; indice < elementosHijos.length; indice++) {
        // let tarea = elementosHijos[indice];

        //elementosHijos[indice].remove();
    // }    

    // Preguntamos si la lista de tareas tiene elementos hijos y, mientras tenga, va eleminando el primer elemento hijo de la lista
    while (listaTareas.hasChildNodes()) {
        listaTareas.removeChild(listaTareas.firstChild);
    }
}