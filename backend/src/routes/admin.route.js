import express from "express";

import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong, deleteSong } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/songs", protectRoute, requireAdmin, createSong);
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);

export default router;
