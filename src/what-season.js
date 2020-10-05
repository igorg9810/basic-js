const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month = date.getMonth();
  if (month < 2 || month == 11) return 'winter';
  if (month < 6 && month >= 2) return 'spring';
  if (month < 9 && month >= 6) return 'summer';
  else return 'autumn';
};
