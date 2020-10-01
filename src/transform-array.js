const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw Error("Not an array");
  }
  let arr_copy = arr.slice();
  let result = [];
  for (let i = 0; i < arr_copy.length; i++){
    if(typeof arr_copy[i] == "string" && arr_copy[i].startsWith("--")){
      switch(arr_copy[i]){
        case "--discard-next":
          if(i == arr_copy.length - 1 || typeof arr_copy[i + 1] == "string" && arr_copy[i + 1].startsWith("--")){
            break;
          }
          arr_copy.splice(i + 1, 1);
          break;
        case "--discard-prev":
          if(i == 0 || result[i - 1] == undefined || typeof arr_copy[i - 1] == "string" && arr_copy[i - 1].startsWith("--")){
            break;
          }
          result.splice(i - 1, 1)
          break;
        case "--double-next":
          if(i == arr_copy.length - 1 || typeof arr_copy[i + 1] == "string" && arr_copy[i + 1].startsWith("--")){
            break;
          }
          if (Array.isArray(arr_copy[i+1])){
            result[i] = Object.values(Object.assign({}, arr_copy[i+1]));
          }
          else if (typeof arr_copy[i+1] == 'object'){
            result[i] = Object.assign({}, arr_copy[i+1]);
          }
          else{
            result[i] = arr_copy[i+1];
          }
          break;
        case "--double-prev":
          if(i == 0 || result[i - 1] == undefined || typeof result[i - 1] == "string" && result[i - 1].startsWith("--")){
            break;
          }
          if (Array.isArray(arr_copy[i-1])){
            result[i] = Object.values(Object.assign({}, arr_copy[i-1]));
          }
          else if (typeof arr_copy[i-1] == 'object'){
            result[i] = Object.assign({}, arr_copy[i-1]);
          }
          else{
            result[i] = arr_copy[i-1];
          }
          break;
      }
    }
    else{
      result[i] = arr_copy[i];
    }
  }
  return result.filter(item => (item !== undefined));
};
