const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let res = 0;
  backyard.forEach(element => element.forEach(item => {
    if (item === "^^") res++;
  }));
  return res;
};