import { Router } from "express";
import { methods as employesControllers } from "../controllers/employes.controller";

const router=Router();

router.get('/', employesControllers.getEmployes);
router.post('/security', employesControllers.getSecurityKeyEmployes);
router.post('/delete', employesControllers.deleteEmployes);

export default router;