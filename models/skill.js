const skills = [
    {id: 125223, skill: 'JavaScript', done: false},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)

    return skills.find(skill => skill.id ===id);
  }