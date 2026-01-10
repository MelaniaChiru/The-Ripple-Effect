import fs from "fs/promises";
import path from "path";

/*
* this reads json files from ./data
* if the json files are not created yet, return null so the server can still run
*/
const dataDir = path.join(process.cwd(), "data");

export async function readJson(fileName) {
  try {
    const filePath = path.join(dataDir, fileName);
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    // json file are not ready yet, return null
    return null;
  }
}
