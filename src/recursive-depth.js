const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;  
    for (let i=0; i<arr.length; i++){
      let depth = 1;
      if (Array.isArray(arr[i])){
        depth += this.calculateDepth(arr[i]); 
        if (depth > res) res = depth;
      }
    }
    return res;
=======
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
  }
}

module.exports = {
  DepthCalculator
};
