const express = require('express');
const router = express.Router();
const productServices = require('../Services/productServices');

// make a new product
router.post('/create-product/:id', function(req,res){
    productServices.makeProduct(req,res);
});

// edit product name
router.put('/edit-product-name/:id', function(req,res){
    productServices.changeProductName(req,res);
});

// change mrp 
router.put('/change-mrp/:id', function(req,res){
    productServices.changeProductMRP(req,res);
});

// change description
router.put('/change-description/:id', function(req,res){
    productServices.changeProductDesc(req,res);
});

// add discout
router.put('/add-discout/:id', function(req,res){
    productServices.changeProductDisc(req,res);
});

// remove discout
router.put('/remove-discout/:id', function(req,res){
    productServices.removeProductDisc(req,res);
});

// add categories
router.put('/add-categories/:id', function(req,res){
    productServices.changeProductCategories(req,res);
});

// remove categories
router.put('/remove-categories/:id', function(req,res){
    productServices.removeProductCategories(req,res);
});

// add review
router.put('add-review/:id', function(req,res){
    productServices.addReview(req,res);
});

//get product
router.get('/get-product/:id', function(req,res){
    productServices.getProduct(req,res);
});

// get product by sellerName
router.get('/get-product/:sellerName', function(req,res){
    productServices.getProductBySeller(req,res);
});

//get product by categories
router.get('get-product/:category', function(req,res){
    productServices.getProductByCat(req,res);
});

module.exports = router;