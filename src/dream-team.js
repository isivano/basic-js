const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = function createDreamTeam(team) {
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
} else  return false;
=======
/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
};


