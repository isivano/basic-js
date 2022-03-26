const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(team) {
  if (Array.isArray(team)){
    let dreamteam = [];
    team.forEach(element => {
      if (typeof(element) === "string") {
        element = element.trim();
        dreamteam.push(element[0].toUpperCase());
      }
    });
    if (team.length !== 0){
      dreamteam.sort();
      return dreamteam.join("");
    } else  return false;
  }  
  return false;
}

module.exports = {
  createDreamTeam
};


