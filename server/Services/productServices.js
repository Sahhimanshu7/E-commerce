const ProductInformation = require('../Models/Product');

// launching a new product
const makeProduct = async(req,res) =>{
    const sellerID = req.params.iq;
    try {
        const newProduct = new ProductInformation({
            productName: req.body.productName,
            MRP: req.body.MRP,
            description: req.body.description,
            categories: req.body.categories,
            reviewComments: req.body.reviewComments,
            reviewStars: req.body.reviewStars,
            reviewStarTotal: req.body.reviewTotal,
            sellerID: sellerID,
            sellerName: req.body.sellerName,
            totalSales: req.body.totalSales,
            Images: req.body.Images,
            discount: req.body.discount
        });
        await newProduct.save();
        res.status(200).json("Product Added!");
    } catch (error) {
        res.status(500).json(error);
    }
};

// getting the product by id
const getProduct = async(req,res) =>{
    const productID = req.params.id;
    try {
        const product = await ProductInformation.findById(productID);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

// getting the product by seller
const getProductBySeller = async(req,res) =>{
    const sellerName = req.params.sellerName;
    try {
        const product = await ProductInformation.find({sellerName:sellerName});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

// getting products by categories
const getProductByCat = async(req,res) =>{
    const category = req.params.category;
    try {
        const product = await ProductInformation.find({categories:category});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

// editing product name
const changeProductName = async(req,res) =>{
    const productID = req.params.id;
    const newName = req.body.newName;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {productName:newName});
        res.status(200).json("Name updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// changing mrp
const changeProductMRP = async(req,res) =>{
    const productID = req.params.id;
    const newMRP = req.body.newMRP;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {MRP:newMRP});
        res.status(200).json("MRP updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// changing description
const changeProductDesc = async(req,res) =>{
    const productID = req.params.id;
    const newDesc = req.body.newDesc;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {description:newDesc});
        res.status(200).json("Description updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// add discount
const changeProductDisc = async(req,res) =>{
    const productID = req.params.id;
    const newDisc = req.body.newDisc;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {discout:newDisc});
        res.status(200).json("Discout updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// remove discount
const removeProductDisc = async(req,res) =>{
    const productID = req.params.id;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {discout:null});
        res.status(200).json("Discout removed!");
    } catch (error) {
        res.status(500).json(error);
    }
}

// add categories
const changeProductCategories = async(req,res) =>{
    const productID = req.params.id;
    const newCategories = req.body.newCategories;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {$push:{categories:newCategories}});
        res.status(200).json("Category added");
    } catch (error) {
        res.status(500).json(error);
    }
}

// remove categories
const removeProductCategories = async(req,res) =>{
    const productID = req.params.id;
    const newCategories = req.body.newCategories;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {$pull:{categories:newCategories}});
        res.status(200).json("Category removed");
    } catch (error) {
        res.status(500).json(error);
    }
}

// adding review stars
const addReview = async(req,res) =>{
    const productID = req.params.id;
    const newReview = req.body.review;

    const reviewNumber = req.body.reviewNumber;
    try {
        await ProductInformation.findByIdAndUpdate(productID, {
            reviewStarTotal:newReview,
            reviewTotal:reviewNumber
        });
        res.status("Review Added!");
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { makeProduct,
                    changeProductName,
                    changeProductCategories,
                    changeProductDesc,
                    changeProductDisc,
                    changeProductMRP,
                    removeProductCategories,
                    removeProductDisc,
                    addReview,
                    getProduct,
                    getProductBySeller,
                    getProductByCat }