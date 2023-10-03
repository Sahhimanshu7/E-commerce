const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
import { Upload, Update, registerUser, userLogin, getProfileImage } from '../Services/userServices';

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
router.post('/signup/user', registerUser);

// Login for user 
router.post('/login/user', userLogin);

//uploading profileImage
router.post('/profileImage/:id', upload.single('file'), Upload);

//updating profileImage
router.put('/profileImage/:id', upload.single('file'), Update);

// getting profileImage
router.get('/profileImage/:id', getProfileImage);

module.exports = router;

