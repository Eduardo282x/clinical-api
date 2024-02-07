import { Router } from "express";
import { methods as assistentControllers } from "../controllers/assistent.controller";

const router=Router();

router.post('/assistent', assistentControllers.getAssistent);

export default router;