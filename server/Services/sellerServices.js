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
            pendingOrders:req.body.pendingOrders,
            profileImage:req.body.profileImage
        });
        const seller = await newSeller.save();
        res.status(200).json(seller);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Login a seller
const loginSeller = async(req,res) =>{
    try {
        const seller = await Seller.findOne({userID:req.body.userID});
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
        await Seller.findByIdAndUpdate(sellerID,{firstName:firstName});
        await Seller.findByIdAndUpdate(sellerID,{lastName:lastName});
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
        await Seller.findByIdAndUpdate(sellerID,{companyName:companyName});
        res.status(200).json("Company Name updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating products sold list
const updateProductsSold = async(req,res) =>{
    const sellerID = req.params.id;
    const productSoldID = req.body.productSoldID;
    try {
        await Seller.findByIdAndUpdate(userID,{$push:{productsSold : productSoldID}});
        res.status(200).json(`Product with id : ${productBoughtID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating products listed
const updateProductsListed = async(req,res) =>{
    const sellerID = req.params.id;
    const productListedID = req.body.productListedID;
    try {
        await Seller.findByIdAndUpdate(sellerID,{$push:{productsListed: productListedID}});
        res.status(200).json(`Wishlist with id : ${productListedID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// deleting products listed
const deleteProductsListed = async(req,res) =>{
    const sellerID = req.params.id;
    const productListedID = req.body.productListedID;
    try {
        await Seller.findByIdAndUpdate(sellerID,{$pull:{productsListed: productListedID}});
        res.status(200).json(`Wishlist with id : ${productListedID} removed!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating new oreders
const updateNewOrders = async(req,res) =>{
    const sellerID = req.params.id;
    const productID = req.body.productPendingID;
    try {
        await Seller.findByIdAndUpdate(sellerID,{$push:{newOrders : productID}});
        res.status(200).json(`Product with id : ${productID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}
// removing new orders
const deletenewOrders = async(req,res) =>{
    const sellerID = req.params.id;
    const productID = req.body.productID;
    try {
        await Seller.findByIdAndUpdate(sellerID,{$pull:{newOrders: productID}});
        res.status(200).json(`Product with id : ${productID} removed!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// update pending orders
const updatePendingOrders = async(req,res) =>{
    const sellerID = req.params.id;
    const productID = req.body.productID;
    try {
        await Seller.findByIdAndUpdate(sellerID,{$push:{pendingOrders: productID}});
        res.status(200).json(' ');
    } catch (error) {
        res.status(500).json(error);
    }
}

// remove pending orders
const deletePendingOrders = async(req,res) =>{
    const sellerID = req.params.id;
    const productID = req.body.productID;
    try {
        await Seller.findByIdAndUpdate(sellerID,{$pull:{pendingOrders: productID}});
        res.status(200).json(' ');
    } catch (error) {
        res.status(500).json(error);
    }
}

// get seller information by _id
const getSeller = async(req,res) =>{
    const sellerID = req.body.sellerID;;
    try {
        const seller = await Seller.findOne({_id:sellerID});
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json(error);
    }
}

// upload profile image
const uploadProfileImage = async(req,res) =>{
    const sellerID = req.body.sellerID;
    const url = req.body.profileImage;
    try {
        await Seller.findByIdAndUpdate(sellerID,{profileImage:url});
        res.status(200).json("Image uploaded Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { registerSeller, 
                    loginSeller, 
                    updateName,
                    updateCompanyName,
                    updateProductsSold,
                    updateProductsListed,
                    deleteProductsListed,
                    updateNewOrders,
                    deletenewOrders,
                    updatePendingOrders,
                    deletePendingOrders,
                    getSeller,
                    uploadProfileImage};