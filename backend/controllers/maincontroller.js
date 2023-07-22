const User = require('../models/User.js')
const Offer = require('../models/Offer.js')
const authservice = require('../utils/authservice.js')
const bcrypt = require('bcrypt')

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
        res.send({response:'🤙'})
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
        const useremail = req.params.useremail
        const user = await authservice.getUserByEmail(useremail).populate('offers').lean()

        const userId = (user._id.toString())
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

exports.putEdit = async(req,res) =>{
    try{
        const { picture , password, id} = req.body

        const hashed_pw = await bcrypt.hash(password,10);
        const user = await User.findByIdAndUpdate(id, {picture, password:hashed_pw})
        res.send({user})
    }catch(e){
        console.log(e)
    }
}

exports.getAllCards = async(req,res) =>{
    const alloffers = await Offer.find().lean()
    console.log(alloffers)
    res.send({alloffers})
}

exports.getDetails = async(req,res) =>{
    try{
        const id = req.params.id
        const offer = await Offer.findById(id).lean()
        res.send({offer})
    }catch(e){
        console.log(e)
    }


}

exports.getDel = async (req,res) =>{
    const id = req.params.id
    await Offer.findByIdAndDelete(id)
    res.sendStatus(404);
    
}