let contenedor1 = document.getElementById('contenedor');
let formulario = document.getElementById('formulario')

//contenedor1.hidden = true
//si no funciona el hidden para ocultar se usa
contenedor1.style.display = 'none'
//formulario.style.display = 'none'
error_message.hidden = true
function borrar(){
    
    contenedor1.innerHTML = "";
}

function modoOscuro(){
    contenedor1.children[0].innerHTML = "Modo Oscuro"
    contenedor1.style.backgroundColor = "#282828"
    contenedor1.style.color = "#ffffff"
}
function modoClaro(){
    contenedor1.children[0].innerHTML = "Modo Claro"
    contenedor1.style.backgroundColor = ""
    contenedor1.style.color = ""
}

function iniciarSesion(){
    let email1 = "nestor@prueba.com"
    let password1 = "1234"

    let emailForm = document.getElementById('email').value
    let passwordForm = document.getElementById('password').value
    if (emailForm === email1 && passwordForm === password1){
        formulario.innerHTML = "Todo OK"
        //esta linea se usa para redireccionar a otra pagina
        window.location.href = "./bien.html"
        return
    }
    let mensaje = document.getElementById('error_message')
    mensaje.style.display = "flex"
}
