import express from "express";
const router = express.Router();

import { createProduct, deleteProduct } from "../controllers/productController.js";

router.route("/create-product")
    .post(createProduct);

router.route("/delete-product")
    .post(deleteProduct);

export default router;