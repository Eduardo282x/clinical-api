import { Router } from "express";
import { servicesController } from "../controllers/services.controller";

const servicesRouter: Router = Router();

servicesRouter.get('/', servicesController.servicesAll);
servicesRouter.post('/', servicesController.servicesCreate);
servicesRouter.put('/', servicesController.servicesUpdate);

export default servicesRouter;