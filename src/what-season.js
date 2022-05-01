const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  // console.log(Date.parse(date));  проверка на дату, не сработало
  if (date === undefined) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]" || !date.getTime()) {
     throw new Error("Invalid date!");
  }
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
}

module.exports = {
  getSeason
};

// let date = new Date(1456, 0, 2, 1, 50, 9, 238);
// console.log(getSeason(date));
