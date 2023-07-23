/*var indice = 0

while (indice<10){
    console.log(indice)
    indice++
}*/

var arreglo =[];
var userInput;

while(!(userInput == "")){
    userInput = prompt("Agrega cosas: ");
    arreglo.push(userInput);
}

arreglo.pop();

console.log(arreglo);