var express = require('express');
const router = express.Router();
var userController = require('../controller/user.controller');
const expressValidator = require('express-validator'); 
router.use(expressValidator());

router.post('/',userController.user_create);

router.get('/',userController.findUsers);
router.get('/:id',userController.findUsers);

router.put('/',userController.update_user);
router.put('/:id',userController.update_user)

router.delete('/',userController.delete_user);
router.delete('/:id',userController.delete_user);

module.exports = router