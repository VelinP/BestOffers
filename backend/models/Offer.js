const {Schema, model} = require('mongoose');


const offerSchema = new Schema({
    offername:{
        type:String,
        required:[true, 'Name is required']
    },

    location:{
        type:String,
        required:[true, 'Location is required is required']
    },

    type:{
        type:String,
        required:[true, 'Type is required']
    },

    price:{
        type:Number,
        required:[true, 'Price is required']
    },

    picture:{
        type:String,
        required:[true, 'Picture is required']
    },

    description:{
        type:String,
        required:[true, 'Description is required']
    }
})


const Offer = model('Offer', offerSchema);
module.exports = Offer;

