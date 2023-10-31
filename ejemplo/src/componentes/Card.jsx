import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Card.css'

function Card({contenido,explicacion}) {
  const [count, setCount] = useState(0)

  return (
    <div className="Card">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${contenido}.png`} alt="imagen" />
        <p>{explicacion}</p>
    </div>
  )
}

export default Card