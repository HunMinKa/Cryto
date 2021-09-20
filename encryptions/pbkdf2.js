const crypto = require("crypto");

class PBKDF2 {
  constructor() {
    this.salt = "100000.+hjY4OxRR3gVFiZg06uP1RodTHT6Bn4U94ICdABAKTg=";
    this.iter = 100000;
    this.keylen = 64;
    this.digest = "sha1";
  }

  pbkdf2Hash(plaintext) {
    if (plaintext === "") {
      return "";
    }
    return crypto
      .pbkdf2Sync(plaintext, this.salt, this.iter, this.keylen, this.digest)
      .toString("base64");
  }
}

module.exports = PBKDF2;
