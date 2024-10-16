import express from "express";
import {
  getProperties,
  getPropertyById,
  createProperties,
  deleteProperties,
} from "../controllers/property.js";
import { upload } from "../middlewares/imagesUpload.js";
import authenticateJWT from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProperties);

router.get("/:id", getPropertyById);

router.post(
  "/create",
  authenticateJWT,
  upload.fields([
    { name: "photos", maxCount: 5 },
    { name: "videos", maxCount: 1 },
  ]),
  createProperties
);

router.delete("/delete/:id", authenticateJWT, deleteProperties);

export default router;
