import { upload } from "../../utils/multer";
import express from "express";
import { uploadFile } from "./filesController";
export const filesRouter = express.Router();

filesRouter.post("/uploadFile", upload.single("file"), uploadFile);
