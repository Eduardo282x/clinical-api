import { Router } from "express";
import servicesRouter from "./services.routes";

const apiRouter: Router = Router();

apiRouter.use('/services', servicesRouter)

export default apiRouter;