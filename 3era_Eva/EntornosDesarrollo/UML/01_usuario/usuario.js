class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

class Admin extends Usuario {
    constructor(nombre, email, rol) {
        super(nombre, email);
        this.rol = rol;
    }

    decirRol() {
        console.log(`Hola soy ${this.nombre} y tengo el rol de ${this.rol}`);
    }
}

const newUser = new Usuario('Ana', 'ana@mail.com');
newUser.saludar();

const newAdmin = new Admin('John', 'john@mail.com', 'COO');
newAdmin.decirRol();