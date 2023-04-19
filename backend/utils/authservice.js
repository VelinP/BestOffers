const User = require('../models/User.js');
const bcrypt = require('bcrypt');

exports.getUserByUsername = (username) => User.findOne({username})
exports.getUserByEmail = (email) => User.findOne({email})


exports.register = async (email, picture,  password) =>{
    const user = await this.getUserByEmail(email);

    if(user){
        console.log("there's already a user with this name")
        return
    }

    const hashed_pw = await bcrypt.hash(password,10);

    await User.create({email, picture,  password: hashed_pw})


}