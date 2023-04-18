exports.homeget = (req,res) =>{
    res.send({"info" : "Successfully recieved data 😃"})
}

exports.registerpost = ( req, res) =>{
    debugger;
    const data = req.body;
    console.log(req.body);
    res.send({pesho:"hello this is registerost", kekw: `${JSON.stringify(data)}`})
}