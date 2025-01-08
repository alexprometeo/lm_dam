let nombre = prompt("Bienvenido al asistente de DAM, ¿cuál es tu nombre?");

console.log("Encantado", nombre);

let anioNacimiento = prompt("¿En qué año has nacido?");
let anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;

console.log("Tu edad es", edad);

let opcion = prompt("¿Qué opción quieres elegir? 1 (número random ) o 2 (operaciones)");
console.log("Opción elegida", opcion);

if (opcion === "1") {
    //alert("Has elegido la opcion" + opcion);

    let numeroRandom = Math.floor(Math.random() * 10) + 1;
    let numeroUsuario = Number(prompt("Introduce un nº de 1 al 10"));

    console.log("El nº random es", numeroRandom, " y el nº del usuario es:", numeroUsuario);
    
    for  (let intentos = 2; intentos >= 0; intentos--) {
        
        if (numeroRandom === numeroUsuario) {
            alert("Enhorabuena!!");
            break;
        }
        else {
            numeroUsuario = Number(prompt("Introduce un nº de 1 al 10"));
        }

        if (intentos === 0) {
            alert("Has fallado :( el nº era "+ numeroRandom);
        }

    }


}
else if (opcion === "2") {
    // alert("Has elegido la opcion" + opcion);
    let num1 = prompt("Introduce el primer número.");
    console.log("1er número: ", num1);

    let num2 = prompt("Introduce el segundo número.");
    console.log("2do número: ", num2);
    

    let operacion = prompt("¿Qué operación deseas realizar (+, -, *, /)?");
    console.log("operación usuario:", operacion);

    let resultado = 0;

    if (operacion === "+") resultado = Number(num1) + Number(num2);
    if (operacion === "-") resultado = Number(num1) - Number(num2);
    if (operacion === "*") resultado = Number(num1) * Number(num2);
    if (operacion === "/") resultado = Number(num1) / Number(num2);

    console.log("resultado de", operacion, " de los dos números: ", resultado);
    
}



