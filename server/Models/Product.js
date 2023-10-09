const mongoose = require('mongoose');

const ProductInformationSchema = new mongoose.Schema({
    productName:{
        type: String,
        require: true,
        min: 3,
        max: 60,
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
    reviewStarsTotal:{
        type:Number,
        default: null
    },
    reviewTotal:{
        type: Number,
        default: 0
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