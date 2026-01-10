import * as fs from "fs/promises";
import path from "path";

// this reads server/data/info.json
const DATA_PATH = path.join(process.cwd(), "server", "data", "info.json");

export async function readInfoJson() {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

// normalizes the tile shape for frontend
//json use postion
export function normalizeTiles(tiles = []) {
  return tiles.map((tile) => {
    const [type] = String(tile.name).split("-");
    const pos = tile.postion || [-1, -1];

    return {
      id: tile.name,
      type,
      img: tile.img,
      tileColour: tile.tileColour || null,
      position: { r: pos[0], c: pos[1] },
      effect: tile.effect
    };
  });
}