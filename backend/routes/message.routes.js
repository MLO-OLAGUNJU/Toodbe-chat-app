import express from "express";
import { messageRoutes } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, messageRoutes);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
