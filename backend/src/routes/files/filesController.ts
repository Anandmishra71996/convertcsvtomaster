import { Request, Response } from "express";
import redisClient from "../../utils/redis";

interface MulterRequest extends Request {
  file: any;
}

export const uploadFile = async (req: Request, res: Response) => {
  const file = (req as MulterRequest).file;
  console.log(file);
  await redisClient.connect();
  let date = new Date();
  let dataToSave = {
    fileName: file.filename,
    date: date,
    path: file.path,
    mimetype: file.mimetype,
  };
  await redisClient.lPush("process-data", JSON.stringify(dataToSave));
  return res.status(200).json({
    success: true,
    message: "file uploaded successfully",
  });
};
