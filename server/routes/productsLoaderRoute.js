import express from "express";
import { findProductByName, loadHomePage } from "../controllers/productLoaderController.js";
const router = express.Router();

router.route('/load-homepage/:country/:yearOfBirth')
  .get(loadHomePage);

router.route('/get-products/:name')
  .get(findProductByName);

export default router;