const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof(sampleActivity)==="string" && isFinite(+sampleActivity)){
    sampleActivity = +sampleActivity;
    if (sampleActivity>0 && sampleActivity<15){
      let k = 0.693 / HALF_LIFE_PERIOD;
      let ln = (Math.log(MODERN_ACTIVITY / sampleActivity));
      return Math.ceil(ln / k);
    }
  }
  return false;
}

module.exports = {
  dateSample
};
