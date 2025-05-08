class Persona {
    constructor(nombre, pais, edad) {
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad;
    }

    mostrarDetalles() {
        console.log(`${this.nombre} - ${this.pais} - ${this.edad}`);
    }
}

class Conductor extends Persona {
    constructor(nombre, pais, edad, licencia) {
        super(nombre, pais, edad);
        this.licencia = licencia;
        this.vahiculos = [];
    }

    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    mostrarDetalles() {
        console.log(`${this.nombre} - ${this.pais} - ${this.edad} - ${this.licencia}`);
    }
}

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles() {
        console.log(`${this.marca} - ${this.modelo} - ${this.año}`);
    }
}