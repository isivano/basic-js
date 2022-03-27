const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(direct) {
    this.directMachine = (direct === undefined || direct === true) ? true : false;
  }

  getEncryptMatrix(key) {
    let encryptMatrix = [];
    for (let i = 0; i < key.length; i++) {
      let shiftedString = "";
      shiftedString = this.alphabet.substr(this.alphabet.indexOf(key[i]), 26);
      encryptMatrix.push(shiftedString.split("")); // 
    }
    return encryptMatrix;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined)  throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    string = string.toUpperCase();
    let encryptMatrix = this.getEncryptMatrix(key);
    let resultArray = [];
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.includes(string[i])) {
        if (j === key.length) j = 0;
        let posX, posY;
        posX = j;
        posY = this.alphabet.indexOf(string[i]);
        resultArray.push(encryptMatrix[posX][posY]);
        j++;
      } else {
        resultArray.push(string[i]);
      }
    }
    return this.directMachine ? resultArray.join("") : resultArray.reverse().join("");
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined)  throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    string = string.toUpperCase();
    let encryptMatrix = this.getEncryptMatrix(key);
    let resultArray = [];
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.includes(string[i])) {
        if (j === key.length) j = 0;
        let charIndex = encryptMatrix[j].indexOf(string[i]);
        resultArray.push(this.alphabet.charAt(charIndex));
        j++;
      } else {
        resultArray.push(string[i]);
      }
    }
    return this.directMachine ? resultArray.join("") : resultArray.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
