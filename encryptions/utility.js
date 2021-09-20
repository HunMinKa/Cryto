module.exports = {
	str2byte: function (str) {
		var array = new Uint8Array(str.length);
		for (var i = 0; i < str.length; i++) {
			array[i] = str.charCodeAt(i);
		}
		return array;
	},

	arr2base: function (str) {
		return Buffer.from(str, "base64").toString("binary");
	},

	base2arr: function (str) {
		var buffer;
		if (str instanceof Buffer) {
			buffer = str;
		} else {
			buffer = Buffer.from(str.toString(), "binary");
		}

		return buffer.toString("base64");
	},

	base64ToArrayBuffer(base64) {
		var binary_string = this.arr2base(base64);
		var len = binary_string.length;
		var bytes = new Uint8Array(len);
		for (var i = 0; i < len; i++) {
			bytes[i] = binary_string.charCodeAt(i);
		}
		return bytes.buffer;
	},
};
