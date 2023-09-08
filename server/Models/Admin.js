const mongoose =  require('mongoose');

const AdminSchema = new mongoose.Schema({
    profileImage:{}
},
{timestamps:true});

module.exports = mongoose.model("AdminSchema",Admin);