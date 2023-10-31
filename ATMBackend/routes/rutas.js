import { Router } from "express";
import { bienvenida, getUsuarios } from "../controllers/controller.js";


let router = new Router();

router.get("/", bienvenida)
router.get("/getUsuarios", getUsuarios)
export default router
