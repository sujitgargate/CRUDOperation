const noteService=require('../services/notes.services')
exports.note_create=function(req,res,next){
    try {
        req.assert('name','name must be atleast 3 characters').len(3);
        req.assert('city','city should not be empty').notEmpty();
        var errors=req.validationErrors();
        if(errors){
            return res.status(400).send(errors); 
        }
        else{  
            noteService.createUniqueRecord(req,res);
        }
    } catch (error) {
        res.send(error)
    }
}

exports.note_check=function(req,res,next){
    try {
        req.assert('name','name should be greater than 3').len(3);
        var errors=req.validationErrors();
        if(errors){
            return res.status(400).send(errors); 
        }
        else{  
            noteService.createUniqueRecord(req,res);
        }
    } catch (error) {
        res.send(error)
    }
}

exports.findNotes = function(req,res){
    return noteService.findNotes(req,res);
}
