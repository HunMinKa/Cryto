const PBKDF2 = require("../encryptions/pbkdf2");
const model = require("./model").model;

hash = (req, res) => {
	const pbkdf2 = new PBKDF2();
	const pbkdf2PlainTextArea = req.body["pbkdf2-plaintext-textarea"];
	const pbkdf2CipherTextArea = pbkdf2.pbkdf2Hash(pbkdf2PlainTextArea);

	model.pbkdf2PlaintextTextArea = pbkdf2PlainTextArea;
	model.pbkdf2CipherTextArea = pbkdf2CipherTextArea;

	res.render("webform", model);
};

module.exports = {
	hash,
};
