var express=require('express')
const router = express.Router();

var noteController = require('../controllers/note.controller')
expressValidator = require('express-validator')
router.use(expressValidator())

router.post('/unique',noteController.note_check);
router.post('/',noteController.note_create);
router.get('/',noteController.findNotes)
module.exports=router;