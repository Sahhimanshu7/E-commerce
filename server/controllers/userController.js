import UserModel from "../models/UserModel.js";
import bcryptjs from 'bcryptjs';

export const createUser = async (req, res) => {
    const userCheck = await UserModel.findOne(
        {
            email: req.body.email
        }
    );
    
    try {
        if (userCheck) {
            throw new Error("Email Already in Use!");
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);
        try {
            const newUser = new UserModel({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email,
                country: req.body.country,
                yearOfBirth: req.body.yearOfBirth
            });
            const user = newUser.save();
            res.status(200).json(user);
        } catch (error) {
            throw new Error("Error with creating new user: " + error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await UserModel.findOne(
            {
                email: req.body.email
            }
        );
    
        if (user) {
            const validPassword = await bcryptjs.compare(req.body.password, user.password);
            if(validPassword) {
                res.status(200).json(user);
            } else {
                res.status(400).json("Wrong password");
            }
        } else {
            res.status(400).json("Email not found! Create an account.");
        }
    } catch (error) {
        res.status(500).json("Login error: " + error);
    }
}

export const addProductOnline = async (req, res) => {
    const productId = req.body.productId;
    const userId = req.body.userId;

    // Add the productId to the productsOnline of the UserModel with 'userId'
    try {
        await UserModel.findOneAndUpdate({ _id: userId }, { $push: {productsOnline: productId }});
        res.status(200).json("Product Added To Profile");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    
}

export const productsBought = async (req, res) => {
    const productId = req.body.productId;
    const userId = req.body.userId;

    // Add the productId to the productsOnline of the UserModel with 'userId'
    try {
        await UserModel.findOneAndUpdate({ _id: userId }, { $push: {productsBought: productId }});
        res.status(200).json("Product Added To Boughtlist");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const productsSold = async (req, res) => {
    const productId = req.body.productId;
    const userId = req.body.userId;

    // Add the productId to the productsOnline of the UserModel with 'userId'
    try {
        await UserModel.findOneAndUpdate({ _id: userId }, { $push: {productsSold: productId }});
        res.status(200).json("Product Added To Soldlist");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const productsBuyInProgress = async (req, res) => {
    const productId = req.body.productId;
    const userId = req.body.userId;

    // Add the productId to the productsOnline of the UserModel with 'userId'
    try {
        await UserModel.findOneAndUpdate({ _id: userId }, { $push: {productsBuyInProgress: productId }});
        res.status(200).json("Product Added To Buyingtlist");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const productsSellInProgress = async (req, res) => {
    const productId = req.body.productId;
    const userId = req.body.userId;

    // Add the productId to the productsOnline of the UserModel with 'userId'
    try {
        await UserModel.findOneAndUpdate({ _id: userId }, { $push: {productsSellInProgress: productId }});
        res.status(200).json("Product Added To Sellinglist");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const cart = async (req, res) => {
    const productId = req.body.productId;
    const userId = req.body.userId;

    // Add the productId to the productsOnline of the UserModel with 'userId'
    try {
        await UserModel.findOneAndUpdate({ _id: userId }, { $push: {cart: productId }});
        res.status(200).json("Product Added To Cart");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}