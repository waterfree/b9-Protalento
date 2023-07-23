//number 
var numero = 2
//String
var palabra = "Hola"
//boolean
var bool = true 
//null

var nulo = null
//undefined
var indefirndo = undefined

//NaN

var noEsUnNumero = NaN
//Object
var persona ={nombre: "Nestor", Edad: 40}

console.log(persona.nombre)

//arrays

var frutas = ["peras","manzanas","bananas","naranja"]

console.log(frutas[1])

//contar elemento de un aray
console.log("la cantidad de frutas es: ", frutas.length)
//como acceder al primer elemento
console.log("la primera fruta en la fila es: ", frutas[0])
//como acceder al ultimo elemento
console.log("la primera fruta en la fila es: ", frutas[frutas.length-1])
//Metodo push agrega un elemento el final del array
var verduras=["cebolla","perejil","tomate","calabaza"]


console.log(verduras)
//agrega un elemento al final del arreglo
console.log("inserto un dato al arreglo")
verduras.push("zanahoria")
console.log(verduras)

console.log("inserto dos datos al arreglo")
verduras.push("zanahoria","manzana")
console.log(verduras)

console.log("reemplazo el primer dato por brocoli")
verduras[0]="brocoli"
console.log(verduras)

//quita un elemento al final del arreglo
console.log("quito el ultimo dato del arreglo")
verduras.pop()
console.log(verduras)

//elimina el item que esta al principio
console.log("quito el primer dato del arreglo")
verduras.shift()
console.log(verduras)

//agrega un item al principio del arreglo
console.log("agrego el primer dato del arreglo")
verduras.unshift("mango")
console.log(verduras)

//convertir un string en un array

var frutas_string = "Peras,Manzanas,Uvas,Mangos,Peras"
console.log("este es un string: "+frutas_string)
console.log("convierto el string en un arreglo: ")
var array_construido = frutas_string.split(',')
console.log(array_construido)

//borrar varias posiciones al inicio del arreglo pero solo aplica al ejecutar el comando con slice

console.log("borro 2 posiciones al principio del arreglo: ")
console.log (array_construido.slice(2))
console.log(array_construido)

//con la regla (1,4) muestra desde la posicion 1, 4 posiciones despues, el cambio no es permanente 

console.log("mostrar posiciones entre la posicion 1 y 4: ")
console.log(array_construido.slice(1,4))
console.log(array_construido)

//se ubica en la posicion 3, no borra ninguna posicion y agrega los campos, el cambio es permanente

console.log("se ubica en la posicion 3, no borra ninguna posicion y agrega los campos Hola y Adios ")
array_construido.splice(3,0,"Hola","Adios")
console.log(array_construido)

//para ordenar alfabeticamente

console.log("Ordeno alfabeticamente el arreglo")
console.log(array_construido.sort())

//para ordenar al reves

console.log("Ordeno el arreglo al reves")
console.log(array_construido.reverse())

//concatenar 2 arreglos

console.log("concatenar 2 arreglos")
var verduras1 = ['Cebolla','Perejil','Tomate']
var frutas1 = ['Manzana','Pera','Platano']

var listaDeCompras = verduras1.concat(frutas1)
console.log(listaDeCompras)