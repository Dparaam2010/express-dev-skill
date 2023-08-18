var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills');

//get request /skills
router.get('/', skillsCtrl.index);

//Get/ Skills/:id
router.get('/:id', skillsCtrl.show);



module.exports = router;
