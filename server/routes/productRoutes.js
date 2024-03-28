// Create, Read, Update, and Delete Product

import express from "express";
const router = express.Router();

import {
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct,
    uploadImage,
    upload
} from "../controllers/productController.js";

router.route("/create-product")
    .post(createProduct);

router.route("/get-product/:_id")
    .get(getProduct);

router.route("/update-product")
    .put(updateProduct);

router.route("/delete-product")
    .post(deleteProduct);

router.route('/upload-image')
    .put(upload.single('photo'), uploadImage);

export default router;