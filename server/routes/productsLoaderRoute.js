import express from "express";
import { loadHomePage } from "../controllers/productLoaderController.js";
const router = express.Router();

router.route('/load-homepage/:country/:yearOfBirth')
  .get(loadHomePage);

export default router;