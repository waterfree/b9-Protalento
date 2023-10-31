import express from 'express';
import conexion from './config/database.js';
import router from './routes/rutas.js';


const app = express();

async function iniciarServidor(){

    try{
        await conexion.sync({forse:false})

    }catch(error){
        console.log(error.message)
        return;
    }

    //conexion.sync({force:false})
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use(router);
    app.listen(3000);

    console.log("Servidor funcionando por el puerto 3000")
}

iniciarServidor()