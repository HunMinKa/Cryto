const AES = require("../encryptions/aes");
const model = require("./model").model;

encryption = (req, res) => {
	const aesKeyInput = req.body["aes-key-input"];
	const aesKey = Buffer.from(aesKeyInput).toString("base64");

	const aes = new AES(aesKey);

	const aesPlaintextTextArea = req.body["aes-plaintext-textarea"];
	const aesCipherTextArea = aes.encryptAES(aesPlaintextTextArea);

	model.aesKeyInput = aesKeyInput;
	model.aesKeyInputBase64 = aesKey;
	model.aesPlaintextTextArea = aesPlaintextTextArea;
	model.aesCipherTextArea = aesCipherTextArea;

	// if (aesKeyInput.length != 32) {
	if (model.aesKeyInput.length == 32 || model.aesKeyInputBase64 == 44) {
		model.warning = "";
	} else {
		model.warning = "Make the AES key to 32 bytes";
	}

	if (aesPlaintextTextArea.length === 0) {
		model.aesCipherTextArea = "";
	}

	res.render("webform", model);
};

decryption = (req, res) => {
	const aesKeyInput = req.body["aes-key-input"];
	const aesKey = Buffer.from(aesKeyInput).toString("base64");

	const aes = new AES(aesKey);

	const aesCipherTextArea = req.body["aes-cipher-textarea"];
	const aesDecipherTextArea = aes.decryptAES(aesCipherTextArea);

	model.aesKeyInput = aesKeyInput;
	model.aesKeyInputBase64 = aesKey;
	model.aesDecipherTextArea = aesDecipherTextArea;

	if (model.aesKeyInput.length == 32 || model.aesKeyInputBase64 == 44) {
		model.warning = "";
	} else {
		model.warning = "Make the AES key to 32 bytes";
	}

	res.render("webform", model);
};

module.exports = {
	encryption,
	decryption,
};
