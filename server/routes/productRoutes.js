// Create, Read, Update, and Delete Product

import express from "express";
const router = express.Router();

import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/productController.js";

router.route("/create-product")
    .post(createProduct);

router.route("/get-product/:_id")
    .get(getProduct);

router.route("/update-product")
    .put(updateProduct);

router.route("/delete-product")
    .post(deleteProduct);

export default router;