const Seller = require("../Models/Sellerinformation");
const bcrypt = require('bcrypt');

// Register new seller
const registerSeller = async(req,res) =>{
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
            description:req.body.description,
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
}

// Login a seller
const loginSeller = async(req,res) =>{
    try {
        const seller = UserInformation.findOne({userID:req.body.userID});
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
}

// updating seller name
const updateName = async(req,res) =>{
    const sellerID = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    try {
        await UserInformation.findByIdAndUpdate(sellerID,{firstName:firstName});
        await UserInformation.findByIdAndUpdate(sellerID,{lastName:lastName});
        res.status(200).json("Seller Name updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// update company name
const updateCompanyName = async(req,res) =>{
    const sellerID = req.params.id;
    const companyName = req.body.companyName;
    try {
        await UserInformation.findByIdAndUpdate(sellerID,{companyName:companyName});
        res.status(200).json("Company Name updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating products sold list
const updateProductsBought = async(req,res) =>{
    const sellerID = req.params.id;
    const productSoldID = req.body.productBoughtID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$push:{productsBought : productBoughtID}});
        res.status(200).json(`Product with id : ${productBoughtID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating products wishlist
const updateProductsWishlist = async(req,res) =>{
    const userID = req.params.id;
    const productWishlistID = req.body.productWishlistID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$push:{productsWishlist: productWishlistID}});
        res.status(200).json(`Wishlist with id : ${productWishlistID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// deleting products wishlist
const deleteProductsWishlist = async(req,res) =>{
    const userID = req.params.id;
    const productWishlistID = req.body.productWishlistID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$pull:{productsWishlist: productWishlistID}});
        res.status(200).json(`Wishlist with id : ${productWishlistID} removed!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating pending orders
const updateProductsPending = async(req,res) =>{
    const userID = req.params.id;
    const productPendingID = req.body.productPendingID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$push:{pendingOrders : productPendingID}});
        res.status(200).json(`Product with id : ${productPendingID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}
// removing pending orders
const deletePendingOrders = async(req,res) =>{
    const userID = req.params.id;
    const productPendingID = req.body.productPendingID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$pull:{pendingOrders: productPendingID}});
        res.status(200).json(`Product with id : ${productPendingID} removed!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { registerSeller, 
                    loginSeller, 
                    updateName,
                    updateCompanyName };