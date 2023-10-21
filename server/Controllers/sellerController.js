const express =  require('express');
const router = express.Router();

const sellerServices = require('../Services/sellerServices');

// register new seller
router.post('/signup/seller', function(req,res){
    sellerServices.registerSeller(req,res);
})
// Login for seller 
router.post('/login/seller', function(req,res){
    sellerServices.loginSeller(req,res);
});
// get seller information
router.post('/getSeller', function(req,res){
    sellerServices.getSeller(req,res);
});

// image upload
router.put('/uploadProfileImg', function(req,res){
    sellerServices.uploadProfileImage(req,res);
})

module.exports = router;