import mongoose from "mongoose";

const UserModelSchema = mongoose.Schema(
    {
        name: String,
        country: String,
        email: String,
        yearOfBirth: Number,
        password: String,
        productsBought: Array,
        productsSold: Array,
        productsBuyInProgress: Array,
        productsSellInProgress: Array,
        cart: Array
    },
    {timestamps: true}
);

const UserModel = mongoose.model("UserModel", UserModelSchema);

export default UserModel;