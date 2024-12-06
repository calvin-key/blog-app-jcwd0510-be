import { Router } from "express";
import { registerController } from "../controllers/auth.controller";
import { validateRegister } from "../validators/auth.validator";

const router = Router();

router.post("/register", validateRegister, registerController);

export default router;
