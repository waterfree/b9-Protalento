import { Router } from "express";
import {Hola}

const router = Router();

router.get("/hola", function(req,res){
    res.send("Hola");
})

export default router;