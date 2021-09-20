const body = document.querySelector("body");
const aesKey = document.querySelectorAll(".aes-key-input");
const aesKeyBase64 = document.querySelector("#aes-key-base64");
const aesKeyLength = document.querySelector("#aes-key-length");

const aesCipherTextArea = document.querySelectorAll(".aes-cipher-textarea");

const warning = document.querySelector("#warning");

body.addEventListener("input", (e) => {
	if (e.target == aesKey[0]) {
		aesKey[1].value = aesKey[0].value;
		aesKeyLength.textContent = `( ${aesKey[0].value.length} / 32 )`;
		aesKeyBase64.value = window.btoa(aesKey[0].value);
	} else if (e.target == aesKeyBase64) {
		aesKey[0].value = window.atob(aesKeyBase64.value);
		aesKey[1].value = window.atob(aesKeyBase64.value);
	} else if (e.target == aesCipherTextArea[1]) {
		aesCipherTextArea[0].value = aesCipherTextArea[1].value;
	}
});
