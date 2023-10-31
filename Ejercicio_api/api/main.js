//forma de probar la api, se comentarea en el controllers.js 
/*import {validar_datos} from "./controllers/controllers.js";
validar_datos()*/

//import {  } from "./controllers/controllers.js";
const URL_objetos = `https://rps101.pythonanywhere.com/api/v1/objects/all`;
let item1 = document.getElementById("lista1");
let item2 = document.getElementById("lista2");
let boton1 = document.getElementById("boton");
let resultado1 = document.getElementById("resultado");
let perdedor = document.getElementById("loser");

async function objetos() {
    let objeto = await fetch(URL_objetos);
    let jobjeto = await objeto.json();
    let html = "";

    jobjeto.forEach((opciones_jugador) => {
        let opcion_jugador = `<option value="${opciones_jugador}">${opciones_jugador}</option>`;
        html += opcion_jugador;
    });
    item1.innerHTML = html;
    item2.innerHTML = html;
}
objetos();
boton1.addEventListener("click", clickJugar);

async function clickJugar() {
    let jugador1 = item1.value;
    let jugador2 = item2.value;
    const URL_compare = `https://rps101.pythonanywhere.com/api/v1/match?object_one=${jugador1}&object_two=${jugador2}`;
    let URL_arreglada = await fetch(URL_compare);
    let jcompare = await URL_arreglada.json();
    resultado1.innerHTML = `<p>The winner is: ${jcompare.winner} and the loser is: ${jcompare.loser} because ${jcompare.winner} ${jcompare.outcome} to ${jcompare.loser}</p>`;

}
objetos()