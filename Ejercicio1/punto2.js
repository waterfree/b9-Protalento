/*Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no 
es divisible entre 2”*/

var pregunta = prompt("Digite el numero que necesita dividir entre 2")
var respuesta = pregunta.toLowerCase()


if (respuesta% 2=== 1 ){
   alert("el numero "+ respuesta +" no es divisible entre 2")
}else{
   alert("el numero "+ respuesta +" si es divisible entre 2")
}