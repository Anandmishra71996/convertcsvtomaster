import { Request, Response } from "express";
import redisClient from "../../utils/redis";

interface MulterRequest extends Request {
  file: any;
}

export const uploadFile = async (req: Request, res: Response) => {
  const file = (req as MulterRequest).file;
  await redisClient.connect();
  await redisClient.hSet("process-data", {
    fileName: "fileName",
  });
  return res.status(200).json({
    success: true,
    message: "file uploaded successfully",
  });
};
