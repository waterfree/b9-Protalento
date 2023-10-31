import {Router} from 'express'

const router = Router()
//req -> request, res -> response
router.get('/api/holaCliente', function(req,res){
    res.send("<h1>Hola Fredy</h1>")

});

router.get('/api/adiosCiente', function(req, res){
    /*res.send("<h1>Adios cliente<h1>")*/
    res.json({"mensaje":"Vuelva pronto!"})      
});

router.get('/api/holaPersonalizado/:nombre', function(req, res){
    const nombre = req.params.nombre
    res.send(`<h1>Hola ${nombre}<h1>`)

});

router.get('/api/elementos',function(req, res){
    const elementos = ["piedra", "papel", "tijera"]
    res.json(elementos)

});

//api/juego/tijeras/papel

router.get('/api/juego/:elemento1/:elemento2', function(req, res){
    let elemento1 = req.params.elemento1
    let elemento2 = req.params.elemento2

    if (elemento1 == "Roca" && elemento2 == "Papel"){
        res.send(`Gano elemento ${elemento2}`)
    }
});

export default router;