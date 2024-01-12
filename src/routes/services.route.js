import { Router } from "express";
import { methods as servicesControllers } from "../controllers/services.controller";

const router=Router();

router.get('/', servicesControllers.getServices);

export default router;