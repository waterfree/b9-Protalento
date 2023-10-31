/*Escribe un programa que responda a un usuario que quiere comprar un helado en una 
conocida marca de comida rápida cuánto le costará en función del topping que elija.

El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.

En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
“no tenemos este topping, lo sentimos.” y a continuación le informará el precio del 
helado sin ningún topping.*/

topping = prompt("¿Que topping le gustaria elegir para su helado?")
chelado = 50
coreo = 10
ckitkat = 15
cbrownie = 20

if (topping == "oreo") {
    alert(`El valor del helado con toping ${topping} tiene un costo de ${chelado + coreo} MXN`)
} else if (topping == "kitkat") {
    alert(`El valor del helado con toping ${topping} tiene un costo de ${chelado + ckitkat} MXN`)
} else if (topping == "brownie") {
    alert(`El valor del helado con toping ${topping} tiene un costo de ${chelado + cbrownie} MXN`)
} else {
    alert(`Lo sentimos no tenemos el topping ${topping}, pero puede llevar un helado sin toppig por ${chelado} MXN`)
}