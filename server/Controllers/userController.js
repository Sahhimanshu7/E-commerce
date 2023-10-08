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

module.exports = router;