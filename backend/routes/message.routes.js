import express from "express";
import { messageRoutes } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", messageRoutes);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
