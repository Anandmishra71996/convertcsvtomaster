import multer from "multer";
const storage = multer.diskStorage({
  destination: (
    req: Express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    // Ensure 'my-uploads' directory exists for safe file saving
    const fs = require("fs");
    const dir = "./temp/my-uploads";
    console.log(fs.existsSync(dir));
    if (!fs.existsSync(dir)) {
      console.log("creating directory");
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (
    req: Express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    // Generate a unique filename with appropriate extension
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExt = file.originalname.split(".").pop(); // Get original extension
    const filename = `${file.fieldname}-${uniqueSuffix}.${originalExt}`;
    cb(null, filename);
  },
});

export const upload: multer.Multer = multer({ storage });
