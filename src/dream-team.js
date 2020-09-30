const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let dream_name = []
  for (let name of members){
    if (typeof name != "string"){
      continue;
    }
    else{
      dream_name.push(name.trim()[0].toUpperCase());
    }
  }
  return dream_name.sort().join("");
};
