const express = require("express");
const router = express.Router();

const webformController = require("../library/webform");

const RSAController = require("../library/hm.rsa");
const AESController = require("../library/hm.aes");
const PBKDF2Controller = require("../library/hm.pbkdf2");

router
  .get("/", webformController)
  .post("/rsa/enc", RSAController.encryption)
  .post("/rsa/dec", RSAController.decryption)
  .post("/aes/enc", AESController.encryption)
  .post("/aes/dec", AESController.decryption)
  .post("/pbkdf2/enc", PBKDF2Controller.hash);

module.exports = router;
