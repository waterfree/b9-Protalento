import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <h1>Vite + React</h1>
      
      
      <div className="card">
        <button style={{margin:"20px"}} onClick={() => setCount((count) => count + 1)}>
          COUNT IS: {count}
        </button>

      </div>
      
    </div>
  )
}

export default App
