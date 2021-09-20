const RSA = require("../encryptions/rsa");
const model = require("./model").model;

encryption = (req, res) => {
	const rsa = new RSA();
	const plaintext = req.body["rsa-plaintext-textarea"];
	const rsaCipherTextArea = rsa.RSAEncryption(plaintext);

	if (plaintext != "") {
		model.rsaPlaintextTextArea = plaintext;
		model.rsaCipherTextArea = rsaCipherTextArea.toString("base64");
	} else {
		model.rsaPlaintextTextArea = "";
		model.rsaCipherTextArea = "";
	}

	res.render("webform", model);
};

decryption = (req, res) => {
	const rsa = new RSA();
	const rsaCipherTextArea = Buffer.from(
		req.body["rsa-cipher-textarea"],
		"base64"
	);
	const rsaDecipherTextArea = rsa.RSADecryption(rsaCipherTextArea);

	model.rsaDecipherTextArea = rsaDecipherTextArea;
	res.render("webform", model);
};

module.exports = {
	encryption,
	decryption,
};
