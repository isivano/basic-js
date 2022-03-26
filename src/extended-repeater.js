const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = function repeater(str, options) {
  const letsRepeat = (string, times, separator) => {
    if (!Number.isInteger(times)) return string;
    let arr = [];
    string = "" + string;
    while (times > 0) { arr.push(string); times--; }
    return arr.join(separator);
  }
  let res = "";
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.addition !== undefined)
    res += letsRepeat(options.addition, options.additionRepeatTimes, options.additionSeparator);
  return letsRepeat(str + res, options.repeatTimes, options.separator);
=======
/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
};
