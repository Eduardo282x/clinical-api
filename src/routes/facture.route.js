import { Router } from "express";
import { methods as factureControllers } from "../controllers/facture.controller";

const router=Router();

// router.get('/', factureControllers.getServices);
router.get('/temp', factureControllers.getTempFacture);
router.get('/', factureControllers.getFactures);
router.post('/add', factureControllers.addFacture);
router.post('/addtemp', factureControllers.addTempFacture);
router.post('/update', factureControllers.editTempFacture);
router.post('/delete', factureControllers.deleteTempFacture);
router.get('/banks', factureControllers.getBanks);
router.get('/payment', factureControllers.getPayMents);

export default router;