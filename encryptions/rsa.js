const crypto = require("crypto");

class RSA {
  constructor() {
    this.publicKey =
      "-----BEGIN PUBLIC KEY-----\r\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAq2U7rmYIzA4hCV28/7vi\r\nSFjsn3IJi8q9M0SdtdFrlvsX1I3m1QwsIiStXUqzBOTJpqcMv5f4mAJjTCIZzg62\r\nF9jpTAx4ApFKkx4XQzbhmSwNUYqi4tFPw/W5OZU38CX5J09iZKDOL7kvMouBDIvf\r\nYc0KNUetK45kXpBIcvdysMK0CZiX04Wwmorbk+Ylup3gl72Snq9nGQifASL9eN1+\r\nMsdZMB/nGAATUAnOtMbPahN/Q7UE60Wp3k8bD/IrdMDlnMi4+OZ90urO2ysFbr0x\r\nn5gKmH1KwqvfqbawnRL4ztcLU5p6Ap6R5cDG8fL5509XCo7UOmU7J0s2i4e5WrLA\r\nZfmFunjUtKyhwv17Qdy04WlnHUYXc1bM8+4qXABAcvDm2IgXyjHvZMmJscXNUg78\r\nqSA8ck0lrvNltejZZmx+L4RojdRIdspd+Iw/gUsq20r4ZG8OkfwfasFlDlXcQPMg\r\nNYQm+ao+mgFw5OhN8oHH6IqbUlBGmvT8cmLZwSTe5D18Vb0z80S4HRC7njrXXNIC\r\nzk7suE30eHlrxLJdNTGUE+nYZFE7rb/9xBPcRcrq9WgUpP0v4Gq/aTSVCwxH69xF\r\n/Duwi11iuDCJb42pah56V+D31GnthWkURIyqCrIGZbBoxUzW749UuNmQDtM9EnqC\r\njmJrOhpobQ21YyhS6ai1xmUCAwEAAQ==\r\n-----END PUBLIC KEY-----";
    this.privateKey =
      "-----BEGIN RSA PRIVATE KEY-----\r\n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\r\n-----END RSA PRIVATE KEY-----";
    this.padding = crypto.constants.RSA_PKCS1_PADDING;
  }

  RSAEncryption(data) {
    try {
      return crypto.publicEncrypt(
        {
          key: this.publicKey,
          padding: this.padding,
        },
        Buffer.from(data)
      );
    } catch (e) {
      console.error(e);
    }
  }

  RSADecryption(data) {
    try {
      return crypto.privateDecrypt(
        {
          key: this.privateKey,
          padding: this.padding,
        },
        Buffer.from(data)
      );
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = RSA;
