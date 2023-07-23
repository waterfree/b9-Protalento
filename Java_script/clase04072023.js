//aqui validamos la tabla del 5

/*for (let i=0; i < 11; i++){
    console.log("5 x 11", i, "= ", (i*5))
}*/

/*let verduras = ["Zanahoria","Manzana","Tomate", "Zapallo"];

//aqui me muestra la posiscion 2 del arrglo 
console.log(verduras[2])

//aqui viaja por todo el arrglo y me va mostrando cada elemento
for (let i=0 ; i<verduras.length; i++){
    console.log("que estoy viendo: "+verduras[i])
}*/

//usando split para traer datos desde un string

/*let frutas_str = "Manzana,Banana, Naranja, Maracuya, Mora, Fresa"
let frutas1 = frutas_str.split(",");

for (let i=0; i< frutas1.length; i++){
    console.log(frutas1[i])
}*/



/*
let frutas = ["Manzana","Banana", "Naranja", "Maracuya", "Mora", "Fresa"];

for (let i=0 ; i<frutas.length; i++){
        console.log(frutas[i])
}*/

//for para todas las tablas de multiplicar
/*for (let i=1 ; i<11; i++){

    console.log("Tabla de multiplicar del: "+ i)
    for(let a=0 ; a <11; a++){
        console.log(i, "x", a, "= ", (a*i))
    }
}*/

// identificar que numero es primo y cual no


/*let numero = 101;

if(numero <= 1){
    console.log("No es primo")
}else{
//    for(let i=2; i < numero; i++){
    for(let i=2; i < Math.sqrt(numero); i++){
        if(numero % i == 0){
            console.log("No es primo")
            break;
        }else{
            console.log("si es primo")
        }
    }
}*/


//Funciones en java script

/*function Suma(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

console.log(Suma(1,3))
*/
// funcion para las tablas de multiplicar

function tablas(numero_de_tabla){
    for(let i = 1; i < numero_de_tabla+1; i++){
        console.log("La tabla de multiplicar del: "+ i)
        for(let j = 1; j < 11; j++){
            
            //console.log(i*j)
            //uso de backsteaks 
            console.log(`${i} por ${j} = ${ i*j}`)
        }
    }
}

tablas(7)

function Tabla_individual(numero1){
    console.log(`La tabla del ${numero1}`)
    for (let i = 1 ; i <= 10; i++){
    
    console.log(`${i} por ${numero1} = ${ i*numero1}`)
    }
}

//Aqui creamos el codigo para que sea impreso en la pagina web HTML

function Tabla_individual_html(numero1){
    let tablas = document.getElementById("tablas")
    
    console.log(`La tabla del ${numero1}`)
    tablas.innerHTML=""
    for (let i = 1 ; i <= 10; i++){
        tablas.innerHTML+= `${i} por ${numero1} = ${ i*numero1} <br>`
        console.log(`${i} por ${numero1} = ${ i*numero1}`)
    }
}