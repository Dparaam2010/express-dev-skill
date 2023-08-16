const Skill = require('../models/skill');


module.exports = {
    index,
    show
}

function show(req, res) {
    res.render('skill/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function index(req, res) {
    res.render('skills/index', {
        skill: Skill.getAll()
    });
}