var express = require('express');
const router = express.Router();
var notecontroller = require('../controller/note.controller');
const expressValidator = require('express-validator');
router.use(expressValidator());

router.post('/0',notecontroller.note_check);
router.post('/1', notecontroller.note_create);
router.get('/2', notecontroller.findNotes);
module.exports = router