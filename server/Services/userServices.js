const bcrypt = require('bcrypt');
const UserInformation = require("../Models/UserInformation"); 


// profileImage upload service 
const Upload = async(req,res) =>{
    if (!req.file) {
        //check if file not submitted properly
        return res.status(400).json({ message: 'No file uploaded' });
      }
      try {
          const userID = req.params.id;
          const updatedImage = JSON.stringify(req.file.path) ;
          console.log(updatedImage);
          //finding the user using user ID stored in localStorage
          await UserInformation.findByIdAndUpdate(userID,{profileImage:updatedImage});
          // Upload the image in the database
          res.json({ message: 'Image uploaded successfully' });
        } catch (error) {
          res.status(500).json({ message: 'Internal Server Error' });
        }  
}

// profileImage update service
const Update = async(req,res) =>{
    try {
        const userID = req.params.id;
        const updatedImage = req.file;
    
        UserInformation.findByIdAndUpdate(userID,{profileImage:updatedImage});
        // Update the image in the database
        res.json({ message: 'Image updated successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

// profileImage get service
const getProfileImage = async(req,res) =>{
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
}

// registering a new user 
const registerUser = async(req,res) => {
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
}

// user login
const userLogin = async(req, res) =>{
    try {
        const user = await UserInformation.findOne({userID:req.body.userID});
       
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if(validPassword){
                res.status(200).json(user);
            }else{
                res.status(400).json("Wrong Password");
            }
        } else {
            res.status(400).json("Username not found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating user name
const updateName = async(req,res) =>{
    const userID = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    try {
        await UserInformation.findByIdAndUpdate(userID,{firstName:firstName});
        await UserInformation.findByIdAndUpdate(userID,{lastName:lastName});
        res.status(200).json("User Name updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating products bought list
const updateProductsBought = async(req,res) =>{
    const userID = req.params.id;
    const productBoughtID = req.body.productBoughtID;
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
        await UserInformation.findByIdAndDelete(userID,{$pull:{productsWishlist: productWishlistID}});
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
        await UserInformation.findByIdAndDelete(userID,{$pull:{pendingOrders: productPendingID}});
        res.status(200).json(`Product with id : ${productPendingID} removed!`);
    } catch (error) {
        res.status(500).json(error);
    }
}
// updating product cart
const updateProductsCart = async(req,res) =>{
    const userID = req.params.id;
    const productCartID = req.body.productCartID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$push:{productCart : productCartID}});
        res.status(200).json(`Product with id : ${productCartID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}
// delete products cart
const deleteProductsCart = async(req,res) =>{
    const userID = req.params.id;
    const productCartID = req.body.productCartID;
    try {
        await UserInformation.findByIdAndDelete(userID,{$pull:{productCart: productCartID}});
        res.status(200).json(`Product with id : ${productCartID} removed from cart!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// updating reviews of products
const updateProductsReview = async(req,res) =>{
    const userID = req.params.id;
    const productReviewID = req.body.productReviewID;
    try {
        await UserInformation.findByIdAndUpdate(userID,{$push:{reviews : productReviewID}});
        res.status(200).json(`Review with id : ${productReviewID} added!`);
    } catch (error) {
        res.status(500).json(error);
    }
}
// reviews delete
const deleteProductsReview = async(req,res) =>{
    const userID = req.params.id;
    const productReviewID = req.body.productReviewID;
    try {
        await UserInformation.findByIdAndDelete(userID,{$pull:{reviews: productReviewID}});
        res.status(200).json(`Review with id : ${productCartID} removed!`);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { Upload, 
                Update, 
                registerUser, 
                userLogin, 
                getProfileImage, 
                updateName, 
                updateProductsBought,
                updateProductsWishlist,
                updateProductsCart,
                updateProductsPending,
                updateProductsReview,
                deleteProductsWishlist,
                deletePendingOrders,
                deleteProductsCart,
                deleteProductsReview };