import { Router } from "express";
import { methods as clientsControllers } from "../controllers/clients.controller";

const router=Router();

router.get('/', clientsControllers.getClients);

export default router;