const userService = require('../services/user.services');
exports.user_create = function(req, res, next){
    try{
        req.assert('name','name should be atleast 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('age','Age should not be empty').notEmpty();
 
        var errors = req.validationErrors();

        if(errors){
            return res.status(400).send(errors);
        } else{
            userService.createUser(req,res)   //from services 
        }
    } catch(error){
        res.send(error)
    }
}

exports.findUsers = function(req, res){
    return userService.findUsers(req, res)
}
exports.user_check = function(req,res,next){
    try{
        req.assert('name','name length should b atleast 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('age','Age should not be empty').notEmpty();
    
        var error = req.validationErrors();

        if(error){
            return res.status(400).send(errors);
        } else {
            userService.createUniqueRecord(req, res)
        }
    } catch(error){
        res.send(error)
    }
}