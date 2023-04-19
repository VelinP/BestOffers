// const User = require('../models/usermodel.js')
const authservice = require('../utils/authservice.js')

exports.homeget = (req,res) =>{
    res.send({"info" : "Successfully recieved data 😃"})
}

exports.registerpost = async ( req, res) =>{
    try{
        
        const { email, picture, password} = req.body

        await authservice.register(email, picture , password)
        res.send({pesho:"hello this is registerost", email, picture,  password })

    }catch(e){
        console.log(e.message)
    }


    
}