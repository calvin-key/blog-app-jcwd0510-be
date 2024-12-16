import multer from "multer";

export const uploader = (filelimit: number = 7) => {
  const storage = multer.memoryStorage();

  const limits = { fileSize: filelimit * 1024 * 1024 };

  return multer({ storage, limits });
};
