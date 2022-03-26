const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
<<<<<<< HEAD
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
=======
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
  }
}

module.exports = {
  VigenereCipheringMachine
};
