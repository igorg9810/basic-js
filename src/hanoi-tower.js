const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let min_turns = 2**disksNumber - 1
  return {
    turns: min_turns,
    seconds: Math.floor(min_turns*3600/(turnsSpeed))
  }
};
