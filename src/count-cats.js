const { NotImplementedError } = require('../extensions/index.js');

function countCats(backyard) {
  let res = 0;
  backyard.forEach(element => element.forEach(item => {
    if (item === "^^") res++;
  }));
  return res;
}

module.exports = {
  countCats
};