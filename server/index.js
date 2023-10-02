// 

//          Server Starts Here

// 
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const userAuth = require("./Routes/userAuth");
const sellerAuth = require("./Routes/sellerAuth");

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
app.use('/api/auth/', userAuth);
app.use('/api/user/images/',userAuth);

//Seller middleware
app.use('/api/auth/', sellerAuth);

app.listen(PORT,() => {
    console.log(`E-commerce site listening on ${PORT}`);
})