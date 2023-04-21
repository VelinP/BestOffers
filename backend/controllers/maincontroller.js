const User = require('../models/User.js')
const Offer = require('../models/Offer.js')
const authservice = require('../utils/authservice.js')

exports.homeget = async (req,res) =>{
    const users = await User.find().lean()
    res.send(users)
}

exports.registerpost = async ( req, res) =>{
    try{
        
        const { email, picture, password} = req.body
        await authservice.register(email, picture , password)
        res.send({res:"everything is ok 👍"})
    }catch(e){
        console.log(e.message)
    }


    
}

exports.loginpost = async(req,res) =>{
    const { email, password} = req.body

    try{
        const [token, id] = await authservice.login(email , password)
        const user = await User.findById(id).lean()
        console.log(user)
        res.send({token, email, id , picture: user.picture})

    }catch(error){
        console.log(error)
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

