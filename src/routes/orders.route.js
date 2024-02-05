import { Router } from "express";
import { methods as ordersControllers } from "../controllers/orders.controller";

const router=Router();

router.get('/', ordersControllers.getOrders);

export default router;