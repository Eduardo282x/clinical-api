import { Router } from "express";
import { methods as factureControllers } from "../controllers/facture.controller";

const router=Router();

// router.get('/', factureControllers.getServices);
router.get('/temp', factureControllers.getTempFacture);
router.post('/addtemp', factureControllers.addTempFacture);
router.get('/banks', factureControllers.getBanks);
router.get('/payment', factureControllers.getPayMents);

export default router;