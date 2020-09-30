const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  for (let arr of matrix){
    for (let word of arr){
      if (word == "^^"){
        counter++;
      }
    }
  }
  return counter;
};
