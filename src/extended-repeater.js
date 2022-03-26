const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
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
    if (options.addition !== undefined){
      res += letsRepeat(options.addition, options.additionRepeatTimes, options.additionSeparator);
    } 
    return letsRepeat(str + res, options.repeatTimes, options.separator);
}

module.exports = {
  repeater
};
