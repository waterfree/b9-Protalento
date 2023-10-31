const API_KEY = "e5a1721c"
const URL_PELICULAS = `https://www.omdbapi.com/?apikey=${API_KEY}`
const URL_TRAILERS = `https://api.themoviedb.org/3/movie/1858/videos?languaje=en-US`
export async function buscarPeliculas(nombre){
    let resultado = await fetch(URL_PELICULAS+`&s=${nombre}`)
    let objresultado = await resultado.json() 
    return objresultado


    //console.log(objresultado)
}

export async function traerTrailer(){
    let options ={
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzdkMzI5YmRkMmQ2ZGYxZDFjNDIxODM4Y2M3MTkyNSIsInN1YiI6IjY0ZWU2ZDE5ZTBjYTdmMDEyZWIxNjk4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nmRN68xWrhNfr9PGw1Cun0rhSzx45MHDNkZuwqeL_tg'
        }
    }
    let resultado = await fetch(URL_TRAILERS,options)
    let objresultado = await resultado.json() 
    return objresultado
}