import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componentes/Card'
import './App.css'

function App() {

  
  return (
    <div className="App">
      <Card contenido="Hola"/>
      <Card contenido="Adios"></Card>
      <Card contenido="Jose"/>
      <Card contenido="Sebastian" explicacion="Esta es una prueba"/>

      
        {
          (()=>{
            const tarjetas = [];          
            for(let i=0; i < 100; i++){
              tarjetas.push(<Card contenido={i}/>)
            }
            return tarjetas;
          })()
        }

    </div>
  )
}

export default App
