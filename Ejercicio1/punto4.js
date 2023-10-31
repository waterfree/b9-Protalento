/*Solicitar al usuario un número de cliente. Si el número es el 1000, 
imprimir 'Ganaste un premio', en caso contrario mostrar el número y el 
mensaje “Lo sentimos, sigue participando”.*/

var pregunta = prompt("Digite su numero de cliente")
var respuesta = pregunta.toLowerCase()
var nganador = "1000"

if (respuesta === nganador){
   alert("Ganaste un premio")
}else{
   alert("Lo sentimos, sigue participando")
}
