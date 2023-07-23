/*Este ejerccio dirigira a los clientes a la barra de bebidas o a la de comidas,
pa ello el cliente puede pedir viso, cerveza, refresco o agua.
Si pide una cerveza o un vino se la dirige a la barra y si no, se dirije a la tieneda.*/

var producto_recibido = prompt("¿Que necesitas? \n -Refresco \n -Vino \n -Cerveza \n -Agua")
var producto =producto_recibido.toLowerCase();


if(producto === "vino" || producto === "cerveza"){
    alert("Dirigete a la barra, por favor");
}else if(producto === "agua" || producto === "refresco"){
    alert("Dirigete a la tienda por favor");
}else{
    alert("No manejamos esos productos ");
}