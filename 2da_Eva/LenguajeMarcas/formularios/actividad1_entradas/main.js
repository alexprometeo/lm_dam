let fechaEvento = document.getElementById("date");
//console.log("fechaEvento: ", fechaEvento);

// console.log("Valor fecha: ", fechaEvento.nodeValue);


fechaEvento.onchange = function($this) {
    pintarValor($this);
}


function pintarValor (elemento) {
    console.log("Valor: ", elemento.srcElement.value);
}