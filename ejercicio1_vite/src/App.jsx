import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");


  /*function handleName(e) {
    setEmail(e.target.value);
  }*/

  function handleDate(e) {
    setEmail(input1);
    setPassword(input2);
    console.log(input1)
    console.log(input2)
  }

  return (
    <div className="container">
      <div className="card">
        <section className="login">
          <h2>Email</h2>

          <input type="text" 
            onChange={(e) => setInput1(e.target.value)}/>
          
          <h2>Password</h2>
          <input type="text" 
            onChange={(e) => setInput2(e.target.value)}/>

          <button onClick={(e) => handleDate(e)}>INICIAR SESION</button>
          
        </section>
        
        <section className="result">
          <h5>
            El email ingresado es: {email}
          </h5>
          <h5>
            El password ingresado es: {password}
          </h5>
        </section>
      </div>
    </div>
  );
}

export default App;
