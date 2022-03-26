const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res ={};
  res.turns = Math.pow(2,disksNumber) - 1;
  res.seconds = Math.floor(res.turns * 3600 / turnsSpeed);
  return res;
=======
/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
};
