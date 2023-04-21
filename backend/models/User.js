const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')


const userSchema = new Schema({
   email:{
        type:String,
        required:[true, 'Email is required']
    },

    password:{
        type:String,
        required:[true, 'Password is required']
    },

    picture:{
        type:String,
        required:[true, 'Profile picture is required']
    },

    offers:[{
        type:mongoose.Types.ObjectId,
        ref: 'Offer'
        
    }],
})


const User = model('User', userSchema)

module.exports = User

