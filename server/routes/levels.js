import express from "express";

import { readInfoJson, normalizeTiles, normalizeSolutions } from "../data/storeJson.mjs";

const router = express.Router();

/*
* GET /api/levels
* this is for the level selection page and return a list of available levels
*/
router.get("/levels", async (req, res) => {
  try {
    const data = await readInfoJson();
    const levels = data.levels || [];

    const list = levels.map((lvl, index) => ({
      id: index + 1,
      title: `Level ${index + 1}`,
      tileCount: Array.isArray(lvl.tiles) ? lvl.tiles.length : 0
    }));

    res.json({ levels: list });
  } catch (err) {
    res.status(500).json({ error: "***ERROR: Failed to load levels***" });
  }
});

/*
*GET /api/levels/:levelId
* For the play page and return graid size, tiles and solutions for that sprcific level
*/
router.get("/levels/:levelId", async (req, res) => {
  try {
    const levelId = Number(req.params.levelId);
    const data = await readInfoJson();
    const levels = data.levels || [];

    // here find by levelNumber 1st and then fallback to array index
    const level = levels.find((l) => Number(l.levelNumber) === levelId) || levels[levelId - 1];

    if (!level) {
      return res.status(404).json({ error: "***ERROR: Level not found***" });
    }

    res.json({
      id: level.levelNumber ?? levelId,
      gridSize: level.gridSize,
      baseStats: level.baseStats,
      tiles: normalizeTiles(level.tiles),
      solutions: normalizeSolutions(level.solutions)
    });
  } catch (err) {
    res.status(500).json({ error: "***ERROR: Failed to load level***" });
  }
});

/*
*GET /api/levels/:levelId/solution
* this returns solution placements
*/
router.get("/levels/:levelId/solution", async (req, res) => {
  try {
    const levelId = Number(req.params.levelId);
    const data = await readInfoJson();
    const levels = data.levels || [];

    const level = levels.find((l) => Number(l.levelNumber) === levelId) || levels[levelId - 1];

    if (!level) {
      return res.status(404).json({ error: "***ERROR: Level not found***" });
    }

    res.json({
      id: level.levelNumber ?? levelId,
      solutions: normalizeSolutions(level.solutions)
    });
  } catch (err) {
    res.status(500).json({ error: "***ERROR: Failed to load solution***" });
  }
});

export default router;