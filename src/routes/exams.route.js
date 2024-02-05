import { Router } from "express";
import { methods as exmansControllers } from "../controllers/exams.controller";

const router=Router();

router.get('/', exmansControllers.getExams);

export default router;