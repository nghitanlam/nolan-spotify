import express from "express";

import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/songs", protectRoute, requireAdmin, createSong);
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);

router.post("/albums", protectRoute, requireAdmin, createAlbum);
router.post("/albums/:id", protectRoute, requireAdmin, deleteAlbum);

export default router;
