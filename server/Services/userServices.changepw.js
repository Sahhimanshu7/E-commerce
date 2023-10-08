const bcrypt = require('bcrypt');
const UserInformation = require("../Models/UserInformation"); 
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

//send password link
const sendPasswordLink = async(req,res) =>{
    const email = req.body.email; 
    try {
        const user = UserInformation.findOne({ email:email });
        if(!user){
            return res.status(400).send("User not found");
        }
        const token = jwt.sign({id: user._id}, "jwt_secret_key", { expiresIn: "1d" });

        // nodemailer
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
        });

        var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Reset your password!',
        text: `http://localhost:3000/api/services/user/reset-password/${user._id}/${token}`
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            res.status(200).send("Email sent!");
        }
});
    } catch (error) {
        
    }
}

module.exports = { sendPasswordLink };