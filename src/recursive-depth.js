const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
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
  }
}

module.exports = {
  DepthCalculator
}
