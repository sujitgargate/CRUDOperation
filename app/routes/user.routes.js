var express = require('express');
const router = express.Router();
var userController = require('../controller/user.controller');
const expressValidator = require('express-validator'); 
router.use(expressValidator());

router.post('/',userController.user_create);
router.post('/1',userController.user_check);
router.get('/',userController.findUsers);
module.exports = router