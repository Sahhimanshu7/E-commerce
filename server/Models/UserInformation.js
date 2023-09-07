const mongoose = require('mongoose');

const UserInfromationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    lastName:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    email:{

    },
    userID:{

    },
    password:{

    },
    productsBought:{

    },
    productsWishlist:{

    },
    pendingOrders:{

    },
    profileImage:{

    },
    productCart:{

    },
    reviews:{

    }
},
{timestamps:true});

module.exports = mongoose.model("UserInformation",UserInfromationSchema);