import express from "express";

import healthRoutes from "./routes/health.js";
import levelsRoutes from "./routes/levels.js";
import tilesRoutes from "./routes/tiles.js";

const app = express();

app.use(express.static("../client/dist"));

app.use("/api", healthRoutes);
app.use("/api", levelsRoutes);
app.use("/api", tilesRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
