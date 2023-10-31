import express from 'express';
import conexion from './database/database.js';
import router from './routes/rutas.js';
async function iniciarServidor(){
    const app = express();

    try {
    
        await conexion.sync({force: false})

    } catch (error) {
        console.error("Error al sincronizar: "+ error)
        return;
    }
    

    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(router)
    app.listen(3000)

    console.log("El servidor se esta ejecutando por el puerto 3000")
}

iniciarServidor()