const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  if (!arr.includes(-1)) return arr.sort((a,b) => a-b);

  let sortedArr = [];

  arr.forEach((element) => {
    if (element !== -1) sortedArr.push(element)
  });

  sortedArr.sort((a,b) => a-b);

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sortedArr[j];
      j++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
