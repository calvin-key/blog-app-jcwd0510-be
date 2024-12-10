import { Router } from "express";
import { getBlogsController } from "../controllers/blog.controller";

const router = Router();

router.get("/", getBlogsController);

export default router;
