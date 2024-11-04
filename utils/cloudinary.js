import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";
configDotenv();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file, resourceType = "auto") => {
  try {
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      resource_type: resourceType,
    });
    return uploadResult;
  } catch (error) {
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};
