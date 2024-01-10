import { Router } from "express";
import { methods as employesControllers } from "../controllers/employes.controller";

const router=Router();

router.post('/security', employesControllers.getSecurityKeyEmployes);
router.get('/', employesControllers.getEmployes);

export default router;