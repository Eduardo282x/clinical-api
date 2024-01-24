import { Router } from "express";
import { methods as usersControllers } from "../controllers/users.controller";

const router=Router();

router.get('/', usersControllers.getUsers);
router.get('/roles', usersControllers.getRoles);

export default router;