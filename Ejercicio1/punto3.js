/*Crear un programa que determine si un número introducido en un Prompt es par o no, 
la respuesta será mostrada en un Alert.*/

var pregunta = prompt("Digite un numero")
var respuesta = pregunta.toLowerCase()


if (respuesta% 2=== 1 ){
   alert("el numero "+ respuesta +" no es par")
}else{
   alert("el numero "+ respuesta +" si par")
}
