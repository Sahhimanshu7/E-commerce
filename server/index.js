// 

//          Server Starts Here

// 
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const userAuth = require("./Routes/userAuth");

const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config();

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
app.use('/api/auth', userAuth);

app.listen(PORT,() => {
    console.log(`E-commerce site listening on ${PORT}`);
})