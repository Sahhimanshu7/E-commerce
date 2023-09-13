const express = require('express');
const router = express.Router();
const UserInformation = require("../Models/UserInformation");
const bcrypt = require('bcrypt');

// Register new user
router.post('/signup/user', async(req,res)=> {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password.salt);

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
        if (req.body.userID) {
            const user = UserInformation.findOne({userID:req.body.userID});
        } else if(req.body.email){
            const user = UserInformation.findOne({email:req.body.email});
        }

        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if(validPassword){
                res.status(200).json(user);
            }else{
                res.status(400).json("Wronf Password")
            }
        } else {
            res.status(400).json("Username not found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;