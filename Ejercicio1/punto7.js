/*Requerir al usuario que ingrese un día de la semana e imprimir un mensaje 
si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente 
si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir 
otro mensaje.*/

dia = prompt("Escriba un dia de la semana")

if (dia === "lunes"){
    alert("Este es el primer dia laboral de la semana")
}else if(dia === "martes" || dia === "miercoles" || dia === "jueves"){
    alert("Estos son dias laborales")
}else if(dia === "viernes"){
    alert("Este es el ultimo dia de la semana")
}else if(dia === "sabado" || dia === "domingo"){
    alert("Este dia es del fin de semana")
}