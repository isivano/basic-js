const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  let res ={};
  res.turns = Math.pow(2,disksNumber) - 1;
  res.seconds = Math.floor(res.turns * 3600 / turnsSpeed);
  return res;
}

module.exports = {
  calculateHanoi
};
