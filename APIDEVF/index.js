//const express = require('express')// se puede poner esta o esta
import express from 'express';
import router from './rutas.js';

function main(){
    const app = express();

    app.use(express.json());// sirve para recibir json
    app.use(express.urlencoded({extended:false}));// es un medida de seguridad
    app.use(router);
    
    app.listen(3000)
    console.log("Servidor iniciado en el puerto 3000");
}

main();