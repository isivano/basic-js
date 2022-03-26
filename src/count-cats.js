const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = function countCats(backyard) {
  let res = 0;
  backyard.forEach(element => element.forEach(item => {
    if (item === "^^") res++;
  }));
  return res;
};
=======
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
