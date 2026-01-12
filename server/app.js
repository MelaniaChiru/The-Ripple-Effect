import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

import healthRoutes from "./routes/health.js";
import levelsRoutes from "./routes/levels.js";
import tilesRoutes from "./routes/tiles.js";

const app = express();

// Required to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Serve static files from the root directory
app.use(express.static(__dirname));

// 2. API Routes
app.use("/api", healthRoutes);
app.use("/api", levelsRoutes);
app.use("/api", tilesRoutes);

// 3. The Catch-all: Hand over non-API requests to React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});