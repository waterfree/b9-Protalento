import { buscarPeliculas, traerTrailer } from "./controllers/controllers.js";

let posters = document.getElementById("posters")
let boton = document.getElementById("buscar")

boton.addEventListener("click",clickBuscar)

function clickBuscar(){
    //posters.innerHTML = ""
    let nombre = document.getElementById("nombre").value
    console.log(nombre)
    buscarPeliculas(nombre).then(function(objResultado){
        console.log(objResultado)
        let arreglo_peliculas= objResultado.Search
        let html = ""
        //console.log(arreglo_peliculas)
        arreglo_peliculas.forEach((elemento) => {
            html += `
                    <div class="contenedor">
                        <div class="year">${elemento.Title}<br><br>${elemento.Year}</div>
                        <img src="${elemento.Poster}" alt="peli">
                    </div>`
            //console.log(elemento.Poster)      
        });
        posters.innerHTML += html
        let contenedores = document.querySelectorAll(".contenedor");
        //console.log(contenedor)
        let video = document.getElementById("video")
        let youtube = document.getElementById("youtube")

        contenedores.forEach((contenedor)=>{
            contenedor.addEventListener("mouseover", function(){
                let mousex = event.clientX
                let mousey = event.clientY
                video.style.left = mousex+"px"
                video.style.top = mousey+"px"
                video.style.display = 'block'
                traerTrailer().then((res)=>{

                    console.log(res)
                    youtube.setAttribute("src",`https://www.youtube.com/embed/${res.results[1].key}?si=TmyReke9uRB-l__R&autoplay=1&mute=1&volume=50`)
                })
                //youtube.setAttribute("src","https://www.youtube.com/embed/MmTGsitnMrE?si=TmyReke9uRB-l__R&autoplay=1&mute=1&volume=50")
            })
            contenedor.addEventListener("mouseout", function(){
                youtube.setAttribute("src","")
                video.style.display = 'none'
            })
        })
    })
    .catch((error)=>{
        alert("No se encontraron peliculas")
    })
}