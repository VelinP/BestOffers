const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('./jsonwebtoken.js')



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

exports.login = async(email, password) =>{
    try{
        const user = await this.getUserByEmail(email);

        if(!user){
            throw new Error("Fuck off");
        }

        const isvalid = await bcrypt.compare(password, user.password);
        
        if(!isvalid){
            throw new Error('Invalid token')
        }
        
    

        const payload = {
            _id: user._id,
            email
        }

        const token = await jwt.sign(payload, 'itsasecret')
        return [token, user._id]
    }
    catch(e){
        console.log(e.message)
    }

}
