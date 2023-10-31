/*1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, 
responder: “No te creo”.*/
 var pregunta = prompt("¿Eres bellisimo/a? \n Si \n No")
 var respuesta = pregunta.toLowerCase()

 if (respuesta == "si"){
    alert("Ciertamente")
 }else{
    alert("No te creo")
 }