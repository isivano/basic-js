const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

<<<<<<< HEAD
module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity)==="string" && isFinite(+sampleActivity)){
    sampleActivity = +sampleActivity;
    if (sampleActivity>0 && sampleActivity<15){
      let k = 0.693 / HALF_LIFE_PERIOD;
      let ln = (Math.log(MODERN_ACTIVITY / sampleActivity));
      return Math.ceil(ln / k);
    }
  }
  return false;
=======
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
};
