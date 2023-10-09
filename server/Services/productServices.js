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
