const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
<<<<<<< HEAD
    return this.chain.length;
  },
  addLink(value) {
    value === undefined ? this.chain.push(" ") : this.chain.push("" + value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position - 1 > this.chain.length) {
      this.chain = [];
      throw new Error()
    };
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = `( ${this.chain.join(" )~~( ")} )`;
    this.chain = [];
    return res;
=======
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
  }
};

module.exports = {
  chainMaker
};
