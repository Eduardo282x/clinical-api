import { Router } from "express";
import { methods as employesControllers } from "../controllers/employes.controller";

const router=Router();

router.post('/employe', employesControllers.getEmployes)

export default router;