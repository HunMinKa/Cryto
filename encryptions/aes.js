const crypto = require("crypto");
const atob = require("./utility").arr2base;

class AES {
	constructor(inputKey) {
		this.algorithm = "aes-256-cbc";
		this.aesKey = this.getAESKey(inputKey);
		this.iv = crypto
			.createHash("MD5")
			.update(Buffer.from(this.aesKey))
			.digest();
	}

	getAESKey(inputKey) {
		const data = atob(inputKey);
		return Uint8Array.from(data, (b) => b.charCodeAt(0));
	}

	encryptAES(text) {
		try {
			const cipher = crypto.createCipheriv(
				this.algorithm,
				this.aesKey,
				this.iv
			);
			const encrypted = cipher.update(text);
			return Buffer.concat([encrypted, cipher.final()]).toString(
				"base64"
			);
		} catch (e) {
			console.error(e);
		}
	}

	decryptAES(text) {
		try {
			const decipher = crypto.createDecipheriv(
				this.algorithm,
				this.aesKey,
				this.iv
			);
			const decrypted = decipher.update(text, "base64", "utf8");
			return decrypted + decipher.final("utf8");
		} catch (e) {
			console.error(e);
		}
	}
}

module.exports = AES;
