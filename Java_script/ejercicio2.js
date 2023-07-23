/* Una tienda aplica un descuento del 15% para las compras que incluyen 
mas de 10 articulos iguales cuyo precio sea superior a 40 euros. tu proegrama
debe comprobar y calcular la cantidad a pagar sabiendo el numero de articulos
y el precio decada uno*/

var articulo = prompt("Nombre del articulo: ");
var valor = prompt ("Valor del articulo: ");
var cantidad = prompt("Cantidad de articulos: ");

if(valor< 40){
    var costo=cantidad*valor;
    alert("Al articulo"+articulo+"no le aplica el descuento, debe cancelar un valor de "+costo+" euros en caja")
}else if(cantidad<10){
    var costo=cantidad*valor;
    alert("A la cantidad solicitada no le aplica descuento, debe cancelar un valor de "+costo+" euros en caja");
}
else if(valor >= 40 && cantidad >= 10){
    var costo=cantidad*valor;
    var descuento=(costo*15)/100;
    var total=costo-descuento;
    alert("Costo total de la compra es "+costo+" euros, para el articulo "+articulo+" le aplica un descuento de "+descuento+" euros quedando un saldo de "+total+" euros")
}