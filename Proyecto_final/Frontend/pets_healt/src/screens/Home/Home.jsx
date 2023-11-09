import React from "react";

  //let infobk = document.getElementById("info")
  
  async function infoprueba(url){
    let info1 = url || `http://localhost:3000/findowner/2`
    console.log("URL para buscar: ", info1)
    let info = await fetch(info1)
    let infojson = await info.json()
    console.log("Esta es la data parseada",infojson)
  }
  infoprueba()
export default function () {


  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen bg-cyan-200">
      <header className=" h-20 w-full bg-red-500/80">NAVEGACION</header>
      <main className=" h-96 w-9/12 bg-blue-500 md:bg-yellow-500 lg:bg-red-500 rounded-2xl p-4 lg:w-1/3 lg:h-56">
        CONTENIDO
        <div className="info"></div>
      </main>
      <footer className=" h-20 w-full bg-green-500">PIE DE PAGINA</footer>
    </div>
  );
}
