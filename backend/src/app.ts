import express, { Express } from "express";
import dotenv from "dotenv";
import schemaRouter from "./routes/schemaRouter/schemaRouter";
import { filesRouter } from "./routes/files/filesRoutes";
const app: Express = express();

const PORT = process.env.PORT || 5000;

app.use("/schema", schemaRouter);
app.use("/files", filesRouter);
app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
