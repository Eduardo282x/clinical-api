import { Router } from "express";
import { methods as facturepdfControllers } from "../controllers/facturepdf.controller";

const router=Router();

router.post('/', facturepdfControllers.getFacturePdf);

export default router;