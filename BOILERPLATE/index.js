//aqui se inicia todo
//se levanta els ervidor
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.get("/",(req, res)=> {
    res.send("Hello world!");
});
app.listen(port,()=>{
    console.log(`Servidor levantado en el puerto: $()`);
});