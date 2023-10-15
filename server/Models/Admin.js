const mongoose =  require('mongoose');

const AdminSchema = new mongoose.Schema({
    profileImage:{},
    username:{
        type: String,
        require: true,
        min: 3,
        max: 20
    },
    email:{
        type: String,
        require: true
    }
},
{timestamps:true});

module.exports = mongoose.model("AdminSchema",Admin);