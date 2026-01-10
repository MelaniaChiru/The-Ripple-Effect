import express from "express";
import { readInfoJson, normalizeTiles } from "../data/storeJson.mjs";

const router = express.Router();

/*
* GET /api/tiles
* this eeturns a catalog of tile types (unique by type) so we can use this for the tile picker ui
*/
router.get("/tiles", async (req, res) => {
  try {
    const data = await readInfoJson();
    const levels = data.levels || [];

    //From MDN Web Docs: flatMap returns a new array formed by applying a given callback function to
    //each element of the array,and then flattening the result by one level
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
    const allTiles = levels.flatMap((lvl) => lvl.tiles || []);
    const normalized = normalizeTiles(allTiles);

    const unique = new Map();
    for (const t of normalized) {
      if (!unique.has(t.type)) {
        unique.set(t.type, {
          type: t.type,
          img: t.img,
          tileColour: t.tileColour,
          effect: t.effect
        });
      }
    }

    res.json({ tiles: Array.from(unique.values()) });
  } catch (err) {
    res.status(500).json({ error: "***ERROR: Failed to load tiles***" });
  }
});

/*
* GET /api/tiles/:type
* this returns one tile type definition
*/
router.get("/tiles/:type", async (req, res) => {
  try {
    const { type } = req.params;

    const data = await readInfoJson();
    const levels = data.levels || [];

    const allTiles = levels.flatMap((lvl) => lvl.tiles || []);
    const normalized = normalizeTiles(allTiles);

    const found = normalized.find((t) => t.type === type);
    if (!found) {
        return res.status(404).json({ error: "***ERROR: Tile type not found**" });
    }
    res.json({
      type: found.type,
      img: found.img,
      tileColour: found.tileColour,
      effect: found.effect
    });
  } catch (err) {
    res.status(500).json({ error: "***ERROR: Failed to load tile type***" });
  }
});

export default router;