import express from "express";

import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllUsers);
router.get("/message/:userId", protectRoute, getMessages);

export default router;
