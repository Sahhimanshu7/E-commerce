const express = require('express');
const router = express.Router();
const UserInformation = require("../Models/UserInformation");
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

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
router.post('/signup/user', async(req,res)=> {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new UserInformation({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            userID:req.body.userID,
            password:hashPassword,
            country:req.body.country,
            productsBought:req.body.productsBought,
            productsWishlist:req.body.productsWishlist,
            pendingOrders:req.body.pendingOrders,
            profileImage:req.body.profileImage,
            productCart:req.body.productCart,
            reviews:req.body.reviews
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json(error);
    }
});

// Login for user 
// Using email or userID
router.post('/login/user',async(req,res)=>{
    try {
        const user = await UserInformation.findOne({userID:req.body.userID});
       
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if(validPassword){
                res.status(200).json(user);
            }else{
                res.status(400).json("Wrong Password")
            }
        } else {
            res.status(400).json("Username not found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//uploading profileImage
router.post('/profileImage/:id', upload.single('file'), async(req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    try {
        const userID = req.params.id;
        const updatedImage = JSON.stringify(req.file.path) ;
        console.log(updatedImage);
    
        await UserInformation.findByIdAndUpdate(userID,{profileImage:updatedImage});
        // Update the image in the database
    
        res.json({ message: 'Image uploaded successfully' });
      } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    
});

//updating profileImage
router.put('/profileImage/:id', upload.single('file'), async(req, res) => {
    try {
        const userID = req.params.id;
        const updatedImage = req.file;
    
        UserInformation.findByIdAndUpdate(userID,{profileImage:updatedImage});
        // Update the image in the database
    
        res.json({ message: 'Image updated successfully' });
      } catch (error) {
        console.error('Error updating image:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
});
// getting profileImage
router.get('/profileImage/:id',async(req,res) =>{
    try {
        const userID = req.params.id;
        console.log(userID);
        const response = await UserInformation.findById(userID);
        console.log("HEllo");
        console.log(response);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json(error);
    }
} );


module.exports = router;