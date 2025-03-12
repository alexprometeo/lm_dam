const btnRegister = document.getElementById("register");

function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let terms = document.getElementById("terms").checked;

    const elementosValidaciones = {
        name, 
        email, 
        password, 
        confirmPassword, 
        age, 
        phone, 
        terms
    };

    console.log(elementosValidaciones);
}

btnRegister.onclick = registerUser();