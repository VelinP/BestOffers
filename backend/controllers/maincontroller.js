const User = require('../models/User.js')
const Offer = require('../models/Offer.js')
const authservice = require('../utils/authservice.js')

exports.homeget = async (req,res) =>{
    try{
        const users = await User.find().lean()
        res.send(users)
    }catch(e){
        console.log(e.message)
    }
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

    try{
        const { email, password} = req.body
        const [token, id] = await authservice.login(email , password)
        
        if(token && id){
            const user = await User.findById(id).lean()
            res.send({token, email, id , picture: user.picture})
        }else(
            console.log("unsuccessful")
        )

    }catch(error){
        console.log(error.message)
    }

}

exports.createpost = async(req,res)=>{
    try{
        const {offername ,location, type, price, picture , description, id} = req.body;
        const user = await User.findById(id)
        const offer = await Offer.create({offername ,location, type, price, picture , description})

        user.offers.push(offer)
        user.save()
        res.send({"Offer successful with information ->":[offername ,location, type, price, picture , description]})

    }catch(e){
        console.log(e.message)
        console.log("Something went wrong with create req")
    }
}

exports.profilegetcards = async (req,res)=>{
    try{
        const userId = req.params.userId
        const user = await User.findById(userId).populate('offers').lean()
        const {email , offer, picture , offers  } = user
        res.send({userId, picture , offer , email, offers})
    }catch(e){
        console.log(e.message)
    }
}

exports.getLogout = async (req,res) =>{
    try{
        res.send({x:"Logout successful"})
    }catch(e){
        console.log(e.message)
    }
}