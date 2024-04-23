import express from "express";
import { craeteAdmin, getAdmin, updateAdmin } from "../controllers/admin.js";

const router = express.Router();

router.post("/", getAdmin);
router.post("/create", craeteAdmin);
router.post("/update/:id", updateAdmin);

export default router;
