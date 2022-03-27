const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value === undefined ? this.chain.push(" ") : this.chain.push("" + value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
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
  }
};

module.exports = {
  chainMaker
};