const { NotImplementedError } = require('../extensions/index.js');

<<<<<<< HEAD
module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]" || !date.getTime()){ throw new Error();}
  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return ("winter");
      break;
    case 2:
    case 3:
    case 4:
      return ("spring");
      break;
    case 5:
    case 6:
    case 7:
      return ("summer");
      break;
    case 8:
    case 9:
    case 10:
      return ("autumn");
      break;
  }
=======
/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
};
