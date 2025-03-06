// Selección de elementos del DOM
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const validarCamposBtn = document.getElementById('validarCampos');
const mostrarContrasenas = document.getElementById('mostrarContrasenas');

// Función de validación
const validarCampos = function () {
    // Reiniciar errores
    const campos = [username, email, age, password, confirmPassword];
    campos.forEach(function (campo) {
        campo.classList.remove('error');
    });

    let error = false;

    // Validaciones
    if (username.value.trim().length < 5) {
        username.classList.add('error');
        error = true;
    }

    if (email.value.trim() === '') {
        email.classList.add('error');
        error = true;
    }

    if (age.value < 18 || age.value > 100) {
        age.classList.add('error');
        error = true;
    }

    if (password.value.trim().length < 8) {
        password.classList.add('error');
        error = true;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        error = true;
    }

    if (error) {
        alert('Hay errores en el formulario, revisa los campos marcados.');
    } else {
        alert('Todos los campos son correctos.');
    }
};

const mostrarTexto = function () {
    // console.log("Entro!!");
    let tipo = "text";
    let estaMarcado = mostrarContrasenas.checked;

    if (!estaMarcado) {
        tipo = "password";
    }

    password.type = tipo;
    confirmPassword.type = tipo;
}

// Asignar evento al botón de validación
validarCamposBtn.onclick = validarCampos;

mostrarContrasenas.onclick = mostrarTexto;


/* 
    Función para mostrar u ocultar contraseñas si cambia el input de mostrarContrasenas:
    - Utiliza .onXXXXXX para detectar cambios en el estado del checkbox.
    - Implementa una función que cambie el atributo type de los campos de contraseña al seleccionar o deseleccionar el checkbox.
    - Asegúrate de que esta funcionalidad no afecte a las validaciones existentes.
*/