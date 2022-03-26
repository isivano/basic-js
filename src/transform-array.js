const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = function transform(array) {
    if (!Array.isArray(array)) throw new Error();

    let resArray = [];
    for (let i=0; i<array.length; i++){
      switch (array[i]){
        case "--discard-prev":
            if (i===1) resArray.pop();
            if (i>1 && array[i-2]!=="--discard-next"){
            resArray.pop();
          }
          break;
        case "--discard-next":
          if (i!==array.length-1)
            i++;
          break;
        case "--double-prev":
          if (i===1) resArray.push(array[i-1]);
          if (i>1 && array[i-2]!=="--discard-next"){
            resArray.push(array[i-1]);
          } 
          break;
        case "--double-next":
          if (i!==array.length-1){ 
            resArray.push(array[i+1]);
          }
          break;
        default: resArray.push(array[i]);
      }
    }
    return resArray;
=======
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
};
