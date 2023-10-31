/*Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
No considerar el caso en que ambos números son iguales.*/

primer_numero=prompt("Digite un numero")
segundo_numero=prompt("Digite un numero diferente")

  
    if(primer_numero>segundo_numero){
        alert("El numero "+primer_numero+" es mayor que "+segundo_numero)
    }else if(segundo_numero>primer_numero){
        alert("El numero "+segundo_numero+" es mayor que "+primer_numero)
    }else{
        alert("digite un numero diferente")
    }
