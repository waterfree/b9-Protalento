function suma(a,b){
    return a+b
}

function resta(a,b){
    return a-b
}

function multiplicacion(a,b){
    return a*b
}
/*
function mostrarResultado(funcion){
    let num1 = 10
    let num2 = 8

    console.log("Hola tu resultado es:"+funcion(num1,num2))
}

mostrarResultado(suma)

mostrarResultado(resta)

mostrarResultado(multiplicacion)*/



//como hacer para aue el programa se demore un poco

let num1 = 10
let num2

setTimeout(function(){
    num2 = 10
    console.log(suma(num1,num2))
}
,2000)

//console.log(num1+num2)