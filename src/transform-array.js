const { NotImplementedError } = require('../extensions/index.js');

function transform(array) {
  if (!Array.isArray(array)) throw new Error('\'arr\' parameter must be an instance of the Array!');
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
}

module.exports = {
  transform
}
