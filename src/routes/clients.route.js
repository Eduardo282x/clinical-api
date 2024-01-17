import { Router } from "express";
import { methods as clientsControllers } from "../controllers/clients.controller";

const router=Router();

router.get('/', clientsControllers.getClients);
router.post('/one', clientsControllers.getOneClient);
router.post('/add', clientsControllers.addClients);

export default router;