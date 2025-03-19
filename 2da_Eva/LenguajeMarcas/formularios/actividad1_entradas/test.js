function testEntradas () {
    let nombreUser = document.getElementById("name");
    let mailUser = document.getElementById("email");
    let ticketsUser = document.getElementById("tickets");
    let botonEnviar = document.getElementById("botonEnviar");

    console.log(nombreUser, mailUser, ticketsUser);
    //Caso 1: datos vacíos
    nombreUser.value = '';
    mailUser.value = '';
    ticketsUser.value = '';
    botonEnviar.click();
}


testEntradas();