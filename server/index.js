// 

//          Server Starts Here

//     Copyright @ Himanshu Sah 2023

// 
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

const userController = require('./Controllers/userController');
const sellerController = require('./Controllers/sellerController');
const reviewController = require('./Controllers/reviewController');
const productController = require('./Controllers/productController');

const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// Establish and confirm mongoose connection 
mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true,useUnifiedTopology:true}). 
then(()=>{
    console.log("Connected to the database")
}).catch(error=>{
    console.log("Error: ",error);
})

//middleware
app.use(express.json());

//User middleware
app.use('/api/auth/', userController);
app.use('/api/user/images/',userController);
app.use('/api/services/user',userController);

//Seller middleware
app.use('/api/auth/', sellerController);
app.use('/api/seller/', sellerController);

//Review middleware
app.use('/api/review/', reviewController);

//Product middleware
app.use('/api/products/', productController);

app.listen(PORT,() => {
    console.log(`E-commerce site listening on ${PORT}`);
})