import * as fs from "fs/promises";
import path from "path";

const filename = "info.json";

let levels = [];

class Tile {
    constructor(id, type, imgPath, posX, posY, tileColour, effect) {
        this.id = id;
        this.type = type;
        this.imgPath = imgPath;
        this.posX = posX;
        this.posY = posY;
        this.tileColour = tileColour;
        this.effect = effect;
    }
}
class Level {
    constructor(name, size, tiles, solution) {
        this.name = name;
        this.size = size;
        this.tiles = tiles;
        this.solution = solution;
    }
}

export async function readJSON() {
    try {
        const data = await fs.readFile(path.join(process.cwd(), filename), "utf-8");
        const jsonData = JSON.parse(data);
        parseLevels(jsonData);
    } catch (error) {
        console.error("Error reading JSON file:", error);
    }
}

function parseLevels(jsonData) {
    levels = jsonData.levels.map((level) => {
        const tiles = level.tiles.map((tile) => {
            const name = tile.name.split("-");
            return new Tile(
                tile.name,
                name[0],
                tile.img,
                tile.postion[0],
                tile.postion[1],
                tile.tileColour,
                tile.effect
            );
        });
        console.log("Parsed tiles:", tiles);
        return new Level(tiles, level.solution);
    });
}

readJSON();
console.log("Levels loaded:", levels);