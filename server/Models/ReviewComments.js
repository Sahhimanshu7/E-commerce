const mongoose = require('mongoose');

const ReviewCommentsSchema = new mongoose.Schema({
    productID:{
        type: String,
        require: true
    },
    commenterID:{
        type: String,
        require: true
    },
    hasParent:{
        type: Boolean,
        require: true
    },
    parentCommentID:{
        type: String,
        default: null
    },
    likes: {
        type: Number,
        default: 0
    },
    description:{
        type: String,
        min: 3,
        max: 100,
        require: true
    }
},
{timestamps:true});

module.exports = mongoose.model("ReviewComments", ReviewCommentsSchema);