/*Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar 
que el número efectivamente esté en ese rango, si no lo está imprima un mensaje 
de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, 
“regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10*/

calificacion1 = prompt("¿Cual es su calificacion?")
calificacion=parseInt(calificacion1)

if(calificacion <= "10" && calificacion >= "0"){
    if(calificacion < "6"){
        alert("Reprobado")
    }else if(calificacion >= "6" && calificacion <= "8"){
        alert("Regular")
    }else if(calificacion == "9"){
        alert("Bien")
    }else if(calificacion == "10"){
        alert("Exelente")
    }
}else{
    alert("Esta calificacion no es valida debe ser un numero entre 0 y 10")
}