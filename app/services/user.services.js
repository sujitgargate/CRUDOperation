var User = require('../models/user.model');

exports.createUser = (req, res) =>{
    if(!req.body.name ){
        return res.status(400).send({
            message: 'user content not be empty'
        })
    }else if (req.body.age>18){
    const user = new User({
        name: req.body.name,
        city: req.body.city,
        DOB: req.body.DOB,
        age: req.body.age
    })
    user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'something error occured 1'
            })
        })
    }else{
        res.status(500).send({
            message: 'Age should be 18+'
        })
    }
}

    exports.findUsers = function (req,res){
        User.find()
        .then(users=>{
            res.send(users)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || 'something error occured 2'
            })
        })
    }    
exports.createUniqueRecord = function(req, res){
    User.findOne({name:req.body.name})
    .then((user) =>{
        if(user){
            res.send({
                message: 'user already exist'
            })
        }else {
            const user = new User({
                name: req.body.name,
                city:req.body.city,
                DOB: req.body.DOB,
                age: req.body.age
            })
            user.save()
                  .then(data => {
                    res.send(data);
               })
              .catch(err => {
                 res.status(500).send({
                 message:err.message || 'something error occured 3'
              })  
            })
        }
    })
}


exports.update_user = function(req,res){
    if(!req.body.name){
        return res.status(400).send({
            message: 'note content not be empty'
        })
    }
    User.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        city: req.body.city
    }, {new: true})
    .then(data =>{
        if(data){
            res.send(data);
        }
        else{
            return res.status(400).send({
                message:'note not found'
            })
        }
    }).catch(err =>{
        res.send(err);
    } ) 
}

exports.delete_user = (req, res)=>{
    Note.findByIdAndRemove(req.params.id)
        .then(status =>{
            if(status){
                res.send({
                    message:'Record deleted successfully'
                })
            }
            else{
                res.send({
                    message:'Record Not Found'
                })
            }
        }).catch(err =>{
            res.send(err);
        })
}
            