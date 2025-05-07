/*
    Crear 3 clases en js:
        Libro:
            -id
            -ISBN
            -titulo
            -autor
            -prestar()
            -devolver()
        
        Usuario: 
            -id
            -nombre
            -solicitarLibro()
            -devolverLibro()
        
        Bibliotecario:
            -id
            -turno
            -registrarLibro()
*/

class Libro {
    constructor(id, ISBN, titulo, autor){
        this.id = id;
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
    }

    prestar(){
        console.log(`El libro ${this.titulo} ha sido prestado.`);
    }

    devolver(){
        console.log(`El libro ${this.titulo} ha sido devuelto.`);
    }
}

class Usuario {
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }

    solicitarLibro(libro){
        console.log(`El usuario ${this.nombre} ha solicitado el libro ${libro.titulo}`);
    }

    devolverLibro(libro){
        console.log(`El usuario ${this.nombre} ha devuelto el libro ${libro.titulo}`);
    }
}

class Bibliotecario {
    constructor(id, turno){
        this.id = id;
        this.turno = turno;
    }

    registrarLibro(libro){
        console.log(`Se ha registrado el libro ${libro.titulo} (${libro.ISBN}) del autor: ${libro.autor}`);
    }
}

const user = new Usuario(1, 'Jane');
const blacksad = new Libro(1, '98765431', 'Blacksad', 'Juan Díaz Canales');
const maus = new Libro(2, '987123654', 'Maus', 'Art Spigelman');
const bibliotecario = new Bibliotecario(1, 'tarde');

user.solicitarLibro(blacksad);
user.solicitarLibro(maus); 
user.devolverLibro(blacksad);

bibliotecario.registrarLibro(new Libro(3, '321654987', 'Watchmen', 'Alan Moore'));
