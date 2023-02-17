var express = require('express');
var router = express.Router();

// require the controller with functionality
var skillsCtrl = require('../controllers/skills');

// all actual paths start with '/skills'

// GET 
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
