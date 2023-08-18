var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills');

//get request /skills
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

//Get/ Skills/:id
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);



module.exports = router;
