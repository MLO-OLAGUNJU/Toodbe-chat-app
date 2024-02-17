import express from "express";

const router = express.Router();

router.get("/signup");
router.get("/login");
router.get("/logout");

export default router;
