//Declaracion
const promesa = new Promise((resolve, reject)=>{

//simulamos una tarea asincronica con un retardo de 2 segundos
setTimeout(()=>{
    const exito = true //cambie esto a fase para simular 
    if(exito){
        //Si la tarea se completo con exito, resolvamos la promesa
        resolve("La tarea fue exitosa")
    }else{
        //si hubo un error o la promesa fallo, rechasamos la promesa
        reject("Algo salio mal!")
    }
}, 2000)// 2000 milisegundos 2 segundos de retardo
})

//Ejecucion de la promesa

/*promesa.then((resultado1)=> {

console.log(resultado1)
}).catch((error)=>{
    console.log(error)    
})*/


//ASYNC Y AWAIT   <- ESPERAR 

async function inicioSesion(){
    let resultado = promesa
    console.log(resultado)
}

inicioSesion()