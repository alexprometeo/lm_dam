//let nombre = prompt("Bienvenido al asistente de DAM, ¿cuál es tu nombre?");

//console.log("Encantado", nombre);

//let anioNacimiento = prompt("¿En qué año has nacido?");
let anioActual = new Date().getFullYear();
//let edad = anioActual - anioNacimiento;

//console.log("Tu edad es", edad);

let opcion = prompt("¿Qué opción quieres elegir? 1 o 2");
console.log("Opción elegida", opcion);

if (opcion === "1") {
    //alert("Has elegido la opcion" + opcion);

    let numeroRandom = Math.floor(Math.random() * 10);
    let numeroUsuario = Number(prompt("Introduce un nº de 1 al 10"));

    console.log("El nº random es", numeroRandom, " y el nº del usuario es:", numeroUsuario);
    
    for  (let intentos = 2; intentos >= 0; intentos--) {
        
        if (numeroRandom === numeroUsuario) {
            alert("Enhorabuena!!");
            break;
        }
        else {
            numeroUsuario = Number(prompt("Introduce un nº de 0 al 10"));
        }

        if (intentos === 0) {
            alert("Has fallado :( el nº era "+ numeroRandom);
        }

    }


}
else if (opcion === "2") {
    alert("Has elegido la opcion" + opcion);
}



