const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined){
    return "Unable to determine the time of year!";
  }
  if (!(Object.prototype.toString.call(date) === '[object Date]')){
    throw Error("Argument is invalid!")
  }
  let month = date.getMonth();
  if (month < 2 || month == 11) return 'winter';
  if (month < 5 && month >= 2) return 'spring';
  if (month < 8 && month >= 5) return 'summer';
  else return 'autumn';
};
