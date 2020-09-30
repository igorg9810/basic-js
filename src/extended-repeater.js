const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str == undefined){
    return false;
  }
  if (options.separator == undefined){
    options.separator = "+";
  }
  if (options.additionSeparator == undefined){
    options.additionSeparator = "|";
  }
  if (options.repeatTimes == undefined){
    options.repeatTimes = 0;
  }
  if (options.additionRepeatTimes == undefined){
    options.additionRepeatTimes = 0;
  }
  options.addition = String(options.addition);
  str = String(str);
  let repeat_addition = [];
  for (let i = 0; i < options.additionRepeatTimes; i++){
    repeat_addition.push(options.addition)
  }
  repeat_addition = repeat_addition.join(options.additionSeparator);
  let repeat_str = [];
  for (i = 0; i < options.repeatTimes; i++){
    repeat_str.push(str + repeat_addition)
  }
  return repeat_str.join(options.separator);
};
  