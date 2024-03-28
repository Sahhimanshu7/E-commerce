// Create, Read, Update, and Delete Product
// Uploading one Image

import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from "path";

import ProductModel from "../models/ProductModel.js";

export const createProduct = async (req, res) => {
    try {
        const newProduct = new ProductModel({
            productName: req.body.productName,
            brand: req.body.brand,
            originalPrice: req.body.originalPrice,
            finalPrice: req.body.finalPrice,
            sellerName: req.body.sellerName,
            description: req.body.description,
            category: req.body.category,
            ageGroup: req.body.ageGroup,
            country: req.body.country,
            createdBy: req.body.createdBy
        });
        const product = await newProduct.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json("Error creating Product " + error);
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params._id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(400).json("Product not found!");
        }
    } catch (error) {
        res.status(500).json("Error finding product: " + error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.body._id);
        if (product) {
            const updatedProduct = await ProductModel.findByIdAndUpdate(
                req.body._id,
                {
                productName: req.body.productName,
                brand: req.body.brand,
                originalPrice: req.body.originalPrice,
                finalPrice: req.body.finalPrice,
                sellerName: req.body.sellerName,
                description: req.body.description,
                category: req.body.category,
                ageGroup: req.body.ageGroup,
                country: req.body.country,
            });
            res.status(200).json(updatedProduct);
        } else {
            res.status(400).json("Product not found!");
        }
    } catch (error) {
        res.status(500).json("Error updating the product: " + error);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.body._id);
        if (product) {
            if (product.createdBy === req.body.createdBy) {
                try {
                    await ProductModel.findByIdAndDelete(req.body._id);
                    res.status(200).json("Product Deleted");
                } catch (error) {
                    res.status(500).json("Couldn't delete the product: " + error);
                }
            } else {
                res.status(400).json("Product is not created by You!");
            }
        } else {
            res.status(500).json("Product not found!");
        }
    } catch (error) {
        res.status(500).json("Error deleting the product! " + error);
    }
}

// Image upload and storage

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

export const upload = multer({ storage, fileFilter });
export const uploadImage = async (req, res) => {
    const photo = req.file.filename;
    const _id = req.body._id;

    console.log(photo);

    try {
        const product = await ProductModel.findById(_id);
        if (product) {
            await ProductModel.findByIdAndUpdate(_id, { photoURL: photo });
            res.status(201).json("Image uploaded to the product");
        } else {
            res.status(401).json("Product not Found!");
        }
    } catch(error) {
        res.status(500).json("Unable to upload Image");
    }
}

export const imageShow = async (req, res) => {

}