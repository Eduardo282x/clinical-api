import { Router } from "express";
import { methods as factureControllers } from "../controllers/facture.controller";

const router=Router();

// router.get('/', factureControllers.getServices);
router.get('/temp', factureControllers.getTempFacture);
router.get('/', factureControllers.getFactures);
router.get('/banks', factureControllers.getBanks);
router.get('/addBanks', factureControllers.addBanks);
router.get('/payment', factureControllers.getPayMents);

router.post('/add', factureControllers.addFacture);
router.post('/deleteFacture', factureControllers.deleteFacture);
router.post('/addtemp', factureControllers.addTempFacture);
router.post('/update', factureControllers.editTempFacture);
router.post('/delete', factureControllers.deleteTempFacture);

export default router;