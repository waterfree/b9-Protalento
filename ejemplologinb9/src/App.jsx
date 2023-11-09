import { useState } from 'react';
import './App.css'

function App() {

  const [input, setInput] = useState(null)

  function handleRegister(e){
    e.preventDefault();
    console.log(input);
    console.log("Hice click en registrar");
  }

  function handleInput(e){
    //console.log("name: ",e.target.name) //validacion por variable
    //console.log("email: ",e.target.value) //validacion por valor de la variable
    //asi se crea un objeto si lo necesitamos
    //let objetoCreado = {[e.target.name]: e.target.value}; // {password: e.target.value} objetocreado.password === objetocreado["pssword"]

    setInput({ ...input, [e.target.name]: e.target.value});

    
  }

  return (
    <div className='main-container'>
      <form className='form-container'>
        {/* mail */}
        <section>
          <span>Email: </span>
          <input name='email' type="email" onChange={e=>handleInput(e)}/>
        </section>
        {/* contraseña */}
        <section>
        <span>Password: </span>
          <input name='password' type='password'onChange={e=>handleInput(e)}/>
        </section>
        {/* boton enviar */}
        <section>
          <button onClick={e=> handleRegister(e)}>Registrar</button>
        </section>
      </form>
    </div>
  )
}

export default App
