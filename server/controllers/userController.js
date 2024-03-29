import UserModel from "../models/UserModel.js";
import bcryptjs from 'bcryptjs';
export const createUser = async (req, res) => {
    const userCheck = await UserModel.findOne(
        {
            email: req.body.email
        }
    );
    if (userCheck) {
        res.status(406).json("Email already in use!");
    }
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);
        try {
            const newUser = new UserModel({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email,
                country: req.body.country
            });
            const user = newUser.save();
            res.status(200).json(user);
        } catch (error) {
            throw new Error("Error with creating new user: " + error);
        }
        console.log("Hello2");
    } catch (error) {
        res.status(500).json("Error: " + error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await UserModel.findOne(
            {email: req.body.email}
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