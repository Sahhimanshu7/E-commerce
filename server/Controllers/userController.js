const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
var userServices = require('../Services/userServices');

//Defining the storage for images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../uploads/profileImages/')); // Define where to store the uploaded images.
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename.
    },
});
const upload = multer({ storage });

// Register new user
router.post('/signup/user', function(req,res) {
    userServices.registerUser(req,res);
});

// Login for user 
router.post('/login/user', function(req,res){
    userServices.userLogin(req,res);
});

//updating username
router.put('/updateName/user/:id', function(req,res){
    userServices.updateName(req,res);
})

//uploading profileImage
router.post('/profileImage/:id', upload.single('file'), function(req,res){
    userServices.Upload(req,res);
});

//updating profileImage
router.put('/profileImage/:id', upload.single('file'), function(req,res){
    userServices.Update(req,res);
});

// getting profileImage
router.get('/profileImage/:id', function(req,res){
    userServices.getProfileImage(req,res);
});

// updating products bought list 
router.put('/updateProductsBought/user/:id', function(req,res){
    userServices.updateProductsBought(req,res);
});

// updating products wishlist
router.put('/updateProductsWishlist/user/:id', function(req,res){
    userServices.updateProductsWishlist(req,res);
});
// deleting prducts wishlist
router.delete('/deleteProductsWishlist/user/:id', function(req,res){
    userServices.deleteProductsWishlist(req,res);
})

// updating products pending
router.put('/updateProductsPending/user/:id', function(req,res){
    userServices.updateProductsPending(req,res);
});
// delete products pending
router.delete('/deletePendingOrders/user/:id', function(req,res){
    userServices.deletePendingOrders(req,res);
})

// updating products cart
router.put('/updateProductsCart/user/:id', function(req,res){
    userServices.updateProductsCart(req,res);
});
// deleteing products cart product
router.delete('/deleteProductsCart/user/:id', function(req,res){
    userServices.deleteProductsCart(req,res);
})

// updating reviews given to
router.put('/updateProductsReview/user/:id', function(req,res){
    userServices.updateProductsReview(req,res);
});
// delete Review
router.delete('/deleteProductsReview/user/:id', function(req,res){
    userServices.deleteProductsReview(req,res);
})

module.exports = router;