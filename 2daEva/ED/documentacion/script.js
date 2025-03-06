
const formulario = document.getElementById("contactForm");


formulario.onsubmit = function (event) {
    // Evita el envío por defecto
    event.preventDefault(); 
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";
    
    // Error 1: Validación incorrecta de mensaje


    
    alert("Formulario enviado correctamente");
}