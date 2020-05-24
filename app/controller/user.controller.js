const userService = require('../services/user.services');
exports.user_create = function(req, res, next){
    try{
        req.assert('name','name should be atleast 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('DOB','DOB should not be empty').notEmpty();
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


exports.create_unique = function(req, res){
    try {
        req.assert('name','name length should b atleast 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('DOB','Please fill DOB, should not be emplty').notEmpty();
        req.assert('age','Please fill age, should not be empty').notEmpty();

        var error = req.validationErrors();
        if(error){
            return res.status(400).send(errors);
        } else {
            userService.createUniqueRecord(req, res)
        }
    } catch (error) {
        res.send(error)
        
    }
}

exports.update_user = function(req, res){
    try {
        req.assert('name','name length should b atleast 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('DOB','Please fill DOB, should not be emplty').notEmpty();
        req.assert('age' ,'Please fill age and should not be 18+').notEmpty();

        var error = req.validationErrors();
        if(error){
            return res.status(400).send(error);
        } else {
            userService.update_user(req, res)
        }
    } catch (error) {
        res.send(error)
        
    }
}

exports.delete_user =function (req, res){
    return userService.delete_user(req, res);
}