/*Se trata de escribir un script que diga si un numero es par o es impar.
recordemos que un numeroe es par si al dividirlo en 2 da como residuo 0*/ 

var numero_recibido = prompt("Inserta un numero"); //string
var numero = parent(numero_recibido)


if(isNaN(numero)){
    alert("Esto no es un numero");
}else if(numero<0){
    alert("No se aceptan numero negativos")
}else if(numero%2 === 0){
    alert("El numero "+numero+" es par")
}else if(numero%2 !== 0){
alert("El numaro "+numero+" es impar")
}