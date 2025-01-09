function calcularPromedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: El input debe ser un array no vacío.";
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== "number") {
            return `Error: El elemento en la posición ${i} no es un número.`;
        }
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Evento para calcular el promedio
let calculo = document.getElementById("calcular");

calculo.onclick = function () {
    //Recuperar el valor del input
    const input = document.getElementById("numeros").value;
    const numeros = input.split(",").map(num => parseFloat(num.trim()));
    const resultado = calcularPromedio(numeros);

    // Mostrar el resultado y registrar en consola
    console.log("Resultado calculado:", resultado);
    document.getElementById("resultado").innerText = resultado;
}
