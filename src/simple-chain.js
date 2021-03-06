const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined){
      value = "";
    }
    let str_value = String(value);
    this.chain.push("( " + str_value + " )");
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position < 0 || !Number.isInteger(position)){
      throw Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
