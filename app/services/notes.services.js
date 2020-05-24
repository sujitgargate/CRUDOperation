var Note = require('../models/note.model');

exports.createNote = (req, res) =>{
    if(!req.body.name){
        return res.status(400).send({
            message: 'note content not be empty'
        })
    }
    const note = new Note({ 
        name: req.body.name,
        city: req.body.city
    })

    note.save()
       .then(data => {
                 res.send(data);
             })
             .catch(err => {
                 res.status(500).send({
                     message:err.message || 'something error occured'
                 })  
             })
          }

exports.findNotes = function(req, res){
    Note.find()
    .then(notes => {
        res.send(notes)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || 'something error occured'
        })  
    })
}

exports.createUniqueRecord = function(req, res){
    Note.findOne({name:req.body.name,city: req.body.city})
    .then((user) =>{
        if(user){
            res.send({
                message: 'user already exist'
            })
        }else{
            const note = new Note({
                name: req.body.name,
                city: req.body.city
            })
            note.save()
                  .then(data => {
                    res.send(data);
               })
              .catch(err => {
                 res.status(500).send({
                 message:err.message || 'something error occured'
              })  
            })
        }
    })
}

exports.findOne=(req,res)=>{
    Note.findById(req.params.id)
    .then(data=>{
        if(data){
            res.send(data);
        }else{
            res.status(400).send({
                message:'Note Not found'
            })
        }
    })
    .catch(err=>{
        return res.send(err)
    })
}

exports.updateNote = function(req,res){
    if(!req.body.name){
        return res.status(400).send({
            message: 'note content not be empty'
        })
    }
    Note.findByIdAndUpdate(req.params.id,{
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

exports.delete=(req,res)=>{
    Note.findByIdAndDelete(req.params.id)
    .then(status=>{
        if(status){
            res.send({
                message :'record deleted sucessfully'
            })
        }else{
            res.send({
                message :'record Not found'
            })
        }
    })
    .catch(err=>{
        res.send(err);
    })
}