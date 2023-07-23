class Alumno {
    //Atributos
    nombre;
    calificacion;

    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
    //metodos
    saludo(){
        console.log("Hola mi nombre es: " + this.nombre);
    }
}

let alumno1 = new Alumno("walter", 8);

alumno1.saludo();