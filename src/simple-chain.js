const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value == undefined){
      value = "";
    }
    this.chain.push("( " + String(value) + " )");
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position < 0 || !Number.isInteger(position)){
      throw Error();
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.join("~~");
  }
};

module.exports = chainMaker;
