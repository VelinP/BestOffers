const User = require('../models/User.js')
const authservice = require('../utils/authservice.js')

exports.homeget = async (req,res) =>{
    const users = await User.find().lean()
    res.send(users)
}

exports.registerpost = async ( req, res) =>{
    try{
        
        const { email, picture, password} = req.body
        await authservice.register(email, picture , password)

    }catch(e){
        console.log(e.message)
    }


    
}

exports.loginpost = async(req,res) =>{
    const { email, password} = req.body

    try{
        const [token, id] = await authservice.login(email , password)
        res.send({token, email, id})

    }catch(error){
        console.log(error)
    }

}