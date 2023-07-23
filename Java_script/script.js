//asi se ejecuta una alerta
alert("Haci se ejecuta un codigo javascript desde html2")

//Console log, solo se puede ver desde consola en el ambiente desarrollador

console.log("Hola console")

console.log(2+2)

//escribir cosas en la pagina desde javascript, si genera error se puede invocar el archivo java script desde el html en despues del cierre del body para evitar este tipo de errores 

document.write("Hola desde un write")

//Combinando console con prompt 

console.log("Hola, ", prompt("Ingresa tu nombre"))

//Declaracion de variables
var nombre = "Ana Gabriela"

console.log(nombre)

//objetos
var persona = {
    nombre : "Adrian",
    edad : 27, 
    ciudad : "Mexico"
}

console.log(persona.edad);

