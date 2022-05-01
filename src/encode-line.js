const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
}

module.exports = {
  encodeLine
};


// assert.strictEqual(encodeLine('aaaatttt'), '4a4t');
// assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
// assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');
// assert.strictEqual(encodeLine('xyz'), 'xyz');
// assert.strictEqual(encodeLine(''), '');