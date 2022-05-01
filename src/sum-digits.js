// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 1 = 2)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    // let sum = 0;
    if (n==0) return n%10;
    // sum += n % 10;
    return getSumOfDigits(Math.floor(n/10)); 


    // sum += n % 10;
    // n = Math.floor(n/10);
    // console.log (n);
    // return sum;

}


console.log (getSumOfDigits(101));


// module.exports = {
//   getSumOfDigits
// };


// function sumTo (n){
//     if (n<1) return n;
//     return n += sumTo(n-1);
// }

// function fib(n) {
//     if (n<=1) return n;
//     return n = fib(n-1) + fib(n -2);
// }