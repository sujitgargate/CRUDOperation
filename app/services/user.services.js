var User=require('../Models/user.model')
exports.createUser = (req,res)=>{
    if(req.body.name){
        return res.status(400).send({
            message:'User cant be empty'
        })
    }
}

exports.findUser = (req,res)=>{
    User.find()
}