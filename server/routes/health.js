import express from "express";

const router = express.Router();

//GET /api/health
// endpoint to check if backend is running
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;
