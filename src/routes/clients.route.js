import { Router } from "express";
import { methods as clientsControllers } from "../controllers/clients.controller";

const router=Router();

router.get('/', clientsControllers.getClients);
router.post('/one', clientsControllers.getOneClient);
router.post('/oneAll', clientsControllers.getAllClient);
router.post('/add', clientsControllers.addClients);
router.post('/delete', clientsControllers.deleteClient);

export default router;