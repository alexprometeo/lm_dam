function validarFormulario() {
     // Error: debería ser `.value`
    let nombre = document.getElementById("nombre").valor;
    let edad = document.getElementById("edad").value;

    // Error: getElements los elmentos con identificador son unicos por lo que la función es en singular
    let mensaje = document.getElementsById("mensaje");
    
    if (nombre === "" || edad === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
    }

     // Error: ¿qué pasa si el campo está vacío?
    if (edad < 18) { 
        mensaje.textContent = "Debes ser mayor de edad";
    }

    console.log("Formulario validado correctamente");
}
