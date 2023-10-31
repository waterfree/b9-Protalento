import { Router } from 'express';
import pg from 'pg';
const {Pool} = pg;

const router = Router();

const conexion = new Pool({
    host: "localhost",
    port: 5432,
    user: "nestor",
    password: "1234",
    database: "ATM"
});

router.get('/consultaSaldo', async function (req, res){
    let respuesta_base = await conexion.query("SELECT * FROM usuarios")
    res.status(200).json(respuesta_base.rows)
})

//esta es la prueba que nos dice que esta funcionandod e forma correcta
/*router.get('/suma', function (req, res){
    let suma = 5+7
    res.json({
        "resultado": suma
    })
})*/
/*//aqui hacemos una prueba para sumar 2 numeros cualquiera
router.get('/suma/:numero1/:numero2', function (req, res){
    let numero1 = parseInt(req.params.numero1);
    let numero2 = parseInt(req.params.numero2);
    let suma = numero1 + numero2;
    res.json({
        "resultado": suma
    })
})
//aqui restamos 
router.get('/resta/:numero1/:numero2', function (req, res){
    let numero1 = parseInt(req.params.numero1);
    let numero2 = parseInt(req.params.numero2);
    let resta = numero1 - numero2;
    res.json({
        "resultado": resta
    })
})

//aqui se calcula el area de un circulo

router.get('/area/circulo/:radio', function (req, res){
    let radio = parseFloat(req.params.radio);
    let area = (Math.PI)*(radio**2);//aqui calculamos el area del circulo

    res.json({
        "resultado": `El area del circulo es ${area}` 
    })
})*/

export default router;