const skills = [
    {id: 125223, skill: 'JavaScript', done: false},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: true}
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

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)

    return skills.find(skill => skill.id ===id);
  }