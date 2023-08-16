const skills = [
    {id: 10, skill: 'Communication', done: true},
    {id: 20, skill: 'Creativity', done: false},
    {id: 30, skill: 'TeamWork', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    console.log(id)
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
}