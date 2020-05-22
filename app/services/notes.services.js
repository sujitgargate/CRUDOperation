var Note=require('../Models/note.model')
exports.createNote = (req,res) =>{
    if(!req.body.name){
        return res.status(400).send({
            message:'Note content cant be empty'
        })
    }
}
exports.findNotes = function(req,res){
    Note.find()
    .then(notes =>{
        res.send(notes);
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || 'something error occured'
        })
    })
}

exports.createUniqueRecord = function(req,res){
    Note.findOne({ name: req.body.name,city:req.body.city })
    .then((user)=>{
        if(user){
            res.send({
                message:'Enter Unique name'
            })
        }else{
            const note=new Note({
                name:req.body.name,
                city:req.body.city
            })
            note.save()
            .then(data=>{
                res.send(data);
            })
            .catch(err =>{
                res.status(500).send({
                    message:err.message || 'something error occured'
                })
            })
        }
    })
}