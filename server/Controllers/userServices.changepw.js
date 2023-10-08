const bcrypt = require('bcrypt');
const UserInformation = require("../Models/UserInformation"); 
const Joi = require('joi');

//send password link
const sendPasswordLink = async(req,res) =>{
    try {
        const emailSchema = Joi.object({
            email: Joi.string().email().required().label("Email")
        });
        const { error } = emailSchema.validate(req.body);
        if(error) return res.status(400).send({message: error.details[0].message});

        const user = await UserInformation.findOne({ email:req.body.email });
        if(!user)
            return res.status(409).send({message: "User with given email doesn't exist"});
        
    } catch (error) {
        
    }
}