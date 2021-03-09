const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let res = 0;
  backyard.forEach(element => element.forEach(item => {
    if (item === "^^") res++;
  }));
  return res;
};