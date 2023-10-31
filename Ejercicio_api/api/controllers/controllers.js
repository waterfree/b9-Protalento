//asi se pueba la api y se relaciona con el main.js, se comentarea de igual forma en el otro documento
/*const URL_objetos = "https://rps101.pythonanywhere.com/api/v1/objects/all"
//console.log(URL_objetos)
export async function validar_datos(){    
    let datos = await fetch(URL_objetos)
    let objdatos = await datos.json()
    console.log(objdatos)
    //return objdatos
}*/
let item1 = document.getElementById("lista1");
let resultado = document.getElementById("resultado");
let item2 = document.getElementById("lista2");

const URL_objetos= "https://rps101.pythonanywhere.com/api/v1/objects/all";

async function objetos(){
    let objeto = await fetch(URL_objetos);
    let jobjeto = await objeto.json();
    let html = "";

    jobjeto.forEach((opciones_jugador1) => {
        let opcion_jugador1 = `<option>${opciones_jugador1}</option>`;
        html += opcion_jugador1;
    });
    item1.innerHTML = html;
    item2.innerHTML = html;
}
objetos();

export async function jugar(){
    let jugador1 = item1.value;
    let jugador2 = item2.value;  
    //console.log(item1.value);
    const URL_compare = await fetch (`${URL_comparacion}object_one=${jugador1}&object_two=${jugador2}`);
    //const URL_compare = await fetch(URL_comparacion+"object_one=nuke&object_two=tank");
    let jcompare = await URL_compare.json();
    //console.log(jcompare);
    //resultado.innerHTML = `<p>el perdedor es: ${jcompare.loser}</p>`;
    return jcompare;
}
jugar();