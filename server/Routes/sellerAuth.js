const express =  require('express');
const router = express.Router();
const Seller = require("../Models/Sellerinformation");
const bcrypt = require('bcrypt');

// register new seller
router.post('/signup/seller', async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        const newSeller = new Seller({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            companyName:req.body.companyName,
            userID:req.body.userID,
            password:hashedPassword,
            companyEmail:req.body.companyEmail,
            country:req.body.country,
            description:rew.body.description,
            productsListed:req.body.productsListed,
            productsSold:req.body.productsSold,
            newOrders:req.body.newOrders,
            pendingOrders:req.body.pendingOrders
        });

        const seller = await newSeller.save();
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login for seller 
// Using email or userID
router.post('/login/seller',async(req,res)=>{
    try {
        if (req.body.userID) {
            const seller = UserInformation.findOne({userID:req.body.userID});
        } else if(req.body.email){
            const seller = UserInformation.findOne({email:req.body.email});
        }

        if (seller) {
            const validPassword = await bcrypt.compare(req.body.password, seller.password);
            if(validPassword){
                res.status(200).json(seller);
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

module.exports = router;