const mongoose = require('mongoose');

const ProductInformationSchema = new mongoose.Schema({
    productName:{
        type: String,
        require: true,
        min: 3,
        max: 20,
    },
    MRP:{
        type: Number,
        require: true,
    },
    description:{
        type: String,
        require: true,
        min: 3,
        max: 250,
    },
    categories:{
        type: Array,
        default: []
    },
    reviewComments:{
        type: Array,
        default: []
    },
    reviewStars:{
        type: Number,
        default: null
    },
    sellerName:{
        type: String,
        require: true
    },
    sellerID:{
        type: String,
        require:true
    },
    totalSales:{
        type: Number,
        default: null
    },
    Images:{
        type: Array,
        default: []
    },
    discount:{
        type: Number,
        default: null
    }
},
{timestamps:true});

module.exports = mongoose.model("ProductInformation", ProductInformationSchema);