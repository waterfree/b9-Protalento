import initModels from "../models/init-models.js"
import conexion from "../database/database.js"

let tablas = initModels(conexion)

export function bienvenida(req,res){
    res.status(200).json({msg: "Bienvenido usuario"})
}

export async function getUsuarios(req,res){

    let resultado = await tablas.usuarios.findAll();
    res.status(200).json({resultado})
}