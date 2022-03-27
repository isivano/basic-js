const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let shortestString = "";
  let longestString = [];

  if (s1.length<s2.length) {
    shortestString = s1;
    longestString = s2.split('');
  } else {
    shortestString = s2;
    longestString = s1.split('');
  }

  for (let char of shortestString){
    if (longestString.indexOf(char) >= 0) {
      result ++;
      longestString[longestString.indexOf(char)] = "";
    }
  }

  return result;
}

 module.exports = {
   getCommonCharacterCount
 };