import { Router } from "express";
import { methods as presupuestoControllers } from "../controllers/presupuesto.controller";

const router=Router();

router.post('/', presupuestoControllers.getPresupuesto);

export default router;