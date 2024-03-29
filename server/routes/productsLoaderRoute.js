import express from "express";
import { findProductById, findProductByName, loadHomePage } from "../controllers/productLoaderController.js";
const router = express.Router();

router.route('/load-homepage/:country/:yearOfBirth')
  .get(loadHomePage);

router.route('/get-products/:name')
  .get(findProductByName);

router.route('/get-products-id/:id')
  .get(findProductById);

export default router;