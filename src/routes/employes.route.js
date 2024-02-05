import { Router } from "express";
import { methods as employesControllers } from "../controllers/employes.controller";

const router=Router();

router.get('/', employesControllers.getEmployes);
router.get('/keys', employesControllers.getSecurityKeys);
router.post('/getEmploye', employesControllers.getAllEmploye);
router.post('/add', employesControllers.addEmployes);
router.post('/edit', employesControllers.editEmployes);
router.post('/security', employesControllers.getSecurityKeyEmployes);
router.post('/delete', employesControllers.deleteEmployes);

export default router;