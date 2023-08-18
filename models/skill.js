const skills = [
    {id: 10, skill: 'Communication', done: true},
    {id: 20, skill: 'Creativity', done: false},
    {id: 30, skill: 'TeamWork', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    console.log(id)
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
}