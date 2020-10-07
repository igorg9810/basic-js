const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max_depth = 1;
    for (let elem of arr){
      if (Array.isArray(elem)){
        let depth = this.calculateDepth(elem) + 1;
        if (depth > max_depth) max_depth = depth;
      }
    }
    return max_depth;
  }
};