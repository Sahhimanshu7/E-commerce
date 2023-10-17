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

module.exports = router;