const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(mode) {
        if (mode == undefined) {
            this.mode = true;
        } else {
            this.mode = mode;
        }
        this.a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    encrypt(message, key) {
        if (message == undefined || key == undefined) {
            throw Error();
        }
        let maxlength = Math.max(message.length, key.length);
        let r = '';
        let offset = 0;
        for (let i = 0; i < maxlength; i++) {
            let s = message[((i >= message.length) ? i % message.length : i)].toUpperCase()
            let mi = this.a.indexOf(s);
            if (mi == -1) {
                r += s;
                offset++;
                continue;
            }
            let ki_s = key[((i - offset >= key.length) ? (i - offset) % key.length : i - offset)];
            //console.log(ki_s)
            let ki = this.a.indexOf(ki_s.toUpperCase());
            //console.log(ki)
            let c = this.a[(((this.a.length + (mi + ki)) % this.a.length))]
            r += c;
        }
        if (this.mode) {
            return r.toUpperCase();
        } else {
            return r.toUpperCase().split("").reverse().join("");
        }
    }
    decrypt(encryptedMessage, key) {
        if (encryptedMessage == undefined || key == undefined) {
            throw Error();
        }
        let maxlength = Math.max(encryptedMessage.length, key.length);
        let r = '';
        let offset = 0;
        for (let i = 0; i < maxlength; i++) {
            let s = encryptedMessage[((i >= encryptedMessage.length) ? i % encryptedMessage.length : i)].toUpperCase()
            let mi = this.a.indexOf(s);
            if (mi == -1) {
                r += s;
                offset++;
                continue;
            }
            let ki_s = key[((i - offset >= key.length) ? (i - offset) % key.length : i - offset)];
            let ki = -this.a.indexOf(ki_s.toUpperCase());
            let c = this.a[(((this.a.length + (mi + ki)) % this.a.length))]
            r += c;
        }
        if (this.mode) {
            return r.toUpperCase();
        } else {
            return r.toUpperCase().split("").reverse().join("");
        }
    }
}

module.exports = VigenereCipheringMachine;
