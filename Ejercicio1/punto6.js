/*Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el 
número mayor. Considerar el caso en que 2 números sean iguales.*/

primer_numero=prompt("Digite un numero")
segundo_numero=prompt("Digite un numero diferente")
tercer_numero=prompt("Digite otro numero")

if(primer_numero == segundo_numero || primer_numero == tercer_numero){
    alert("dos de los 3 numero ingresados son iguales")
}else if(segundo_numero>primer_numero && segundo_numero>tercer_numero){
    alert("El numero "+segundo_numero+" es el numero mayor")
}else if(tercer_numero>primer_numero && tercer_numero>segundo_numero){
    alert("El numero "+tercer_numero+" es el numero mayor")
}else if(primer_numero > segundo_numero && primer_numero > tercer_numero){
    alert("El numero "+primer_numero+" es el numero mayor")
}