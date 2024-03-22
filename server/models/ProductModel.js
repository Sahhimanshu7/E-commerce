import mongoose from "mongoose";

const ProductModelSchema = mongoose.Schema(
    {
        productName: String,
        brand: String,
        originalPrice: Number,
        finalPrice: Number,
        sellerName: String,
        description: String,
        category: String,
        numberOfRatings: Number,
        avgRating: Number,
        ageGroup: Array,
        country: String,
        createdBy: String
    },
    {timestamps: true}
);

const ProductModel = mongoose.model("ProductModel", ProductModelSchema);

export default ProductModel;