 <body class="mceContentBody aui-theme-default wiki-content fullsize">
        <p>&nbsp;</p>         <h2><strong>목차</strong></h2><hr /><table class="wysiwyg-macro" data-macro-name="toc-zone" data-macro-id="a1502b7d-2cee-49e5-8496-d4d5d3b4d4e2" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e3RvYy16b25lfQ&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="RICH_TEXT"><tr><td class="wysiwyg-macro-body"><p><strong><img class="editor-inline-macro" src="/plugins/servlet/confluence/placeholder/macro?definition=e3RvY30&amp;locale=ko_KR&amp;version=2" data-macro-name="toc" data-macro-id="2e594e44-c1ed-4af5-9d8c-5597b0e1790d" data-macro-schema-version="1"></strong></p></td></tr></table><h2><strong style="font-size: 20.0px;letter-spacing: -0.008em;">문서 작성 목적</strong></h2><hr /><p><strong style="font-size: 20.0px;letter-spacing: -0.008em;"><img class="editor-inline-macro" src="/plugins/servlet/confluence/placeholder/macro?definition=e2ppcmE6a2V5PVJER1RETC01Mn0=&amp;locale=en_GB" data-macro-name="jira" data-macro-id="778b788b-e9ae-4a2e-a1ed-c2a09d8a2899" data-macro-parameters="key=RDGTDL-52|server=HicareNet Project Management|serverId=c4c29bd0-d143-322e-b7b9-8eab00c6b17c" data-macro-schema-version="1"></strong></p><p><br /></p><p><strong style="font-size: 20.0px;letter-spacing: -0.008em;">C# 암호화 알고리즘 사용 리스트</strong></p><hr /><ol><li> RSA 알고리즘 (비대칭키)</li><li> AES 알고리즘 (대칭키)</li><li> MD5 (단방향 해시)</li><li> PBKDF2 (단방향 해시)</li></ol><h2><strong>C# 암호화 페이지에 사용된 라이브러리 리스트</strong></h2><hr /><ol><li>RSA 암복호화 함수 관련 라이브러리 </li><li>AES  암복호화 함수 관련 라이브러리</li><li>PBKDF2 해시 함수 관련 라이브러리 </li><li>MD5 해시 함수 관련 라이브러리</li></ol><h2><strong>C# 암복호화 기능 스펙</strong></h2><hr /><table class="wrapped confluenceTable"><colgroup><col /><col /><col /><col /><col /></colgroup><tbody><tr><th class="numberingColumn confluenceTh"><br /></th><th class="confluenceTh">알고리즘</th><th class="confluenceTh">환경설정</th><th colspan="1" class="confluenceTh">namespace</th><th class="confluenceTh">참고사항</th></tr><tr><td class="numberingColumn confluenceTd">1</td><td class="confluenceTd">RSA</td><td class="confluenceTd"><p>Key Size : 4096</p><p>Keys :  Hicare DB에 저장되어 있는 값</p><p>Padding: PKCS #1 (v 1.5)</p></td><td colspan="1" class="confluenceTd"><p>System.Security.Cryptography</p><ul style="list-style-type: square;"><li><p>RSACryptoServiceProvider<span> </span></p></li></ul></td><td class="confluenceTd"><p>Public Key 로 암호화 하고, Private Key로 복호화 한다.</p><p>두 키 값은  Hicare DB에 저장되어 있으며 XML 형태다.</p></td></tr><tr><td class="numberingColumn confluenceTd">2</td><td class="confluenceTd">AES</td><td class="confluenceTd"><p>AES-256-CBC</p><p>AES Key : 256 bit (32 Byte)</p><p>IV :  126 bit (16 Byte) </p></td><td colspan="1" class="confluenceTd"><p>System.Security.Cryptography</p><ul style="list-style-type: square;"><li><p>RijndaelManaged<span> </span></p></li></ul></td><td class="confluenceTd"> IV 값은 AES KEY 값을 MD5 해시값을 사용한다.</td></tr><tr><td class="numberingColumn confluenceTd">3</td><td class="confluenceTd">PBKDF2</td><td class="confluenceTd"><p>salt: Hicare DB에 저장되어 있는 값</p><p>반복횟수: 100,000</p><p>키 길이: 64</p><p>digest : sha1</p></td><td colspan="1" class="confluenceTd"><p><strong>SimpleCrypto</strong></p><p>System.Security.Cryptography</p><ul style="list-style-type: square;"><li><p>Rfc2898DeriveBytes<span> </span></p></li></ul><p><br /></p><p><br /></p></td><td class="confluenceTd"><p><span>HMACSHA1 기반의 의사(pseudo) 난수 생성기를 사용하여 암호 기반 키 파생 기능인 PBKDF2를 구현한다.</span></p><p><span>SHA1 해시 기능을 사용하여 HMAC(해시 기반 메시지 인증 코드)를 계산한다.</span></p><p><br /></p><p><span>SimpleCrypto 에서 C# 의 System.Security.Cryptography 의 </span><span style="letter-spacing: 0.0px;">Rfc2898DeriveBytes</span><span style="letter-spacing: 0.0px;"> 클래스를 호출하여 암호화를 진행</span></p></td></tr></tbody></table><p class="auto-cursor-target"><br /></p><h2 class="auto-cursor-target"><strong>Node JS 의 Crypto 모듈</strong></h2><hr /><p><br /></p><table class="wrapped confluenceTable"><colgroup><col /><col /><col /></colgroup><tbody><tr><th class="confluenceTh">암호화 알고리즘</th><th class="confluenceTh">Crypto 모듈</th><th colspan="1" class="confluenceTh">Example Code</th></tr><tr><td class="confluenceTd"><p>RSA</p></td><td class="confluenceTd"><p>crypto.publicEncrypt()</p><p>crypto.privateDecrypt()</p><p>crypto.constants.RSA_PKCS1_PADDING</p></td><td colspan="1" class="confluenceTd"><div class="content-wrapper"><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="code" data-macro-id="e2ed0be8-3930-478e-b586-e5ea993f1a77" data-macro-parameters="language=js|title=Encryption with a Public Key" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6bGFuZ3VhZ2U9anN8dGl0bGU9RW5jcnlwdGlvbiB3aXRoIGEgUHVibGljIEtleX0&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT"><tr><td class="wysiwyg-macro-body"><pre>crypto.publicEncrypt(
	{
		key: publicKey,
		padding: padding,
	},
	Buffer.from(data)
);</pre></td></tr></table><p class="auto-cursor-target"><br /></p></div><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="code" data-macro-id="d3343803-5c67-49e5-82a0-f30c3c4e3e4c" data-macro-parameters="language=js|title=Encryption with a Private Key" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6bGFuZ3VhZ2U9anN8dGl0bGU9RW5jcnlwdGlvbiB3aXRoIGEgUHJpdmF0ZSBLZXl9&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT"><tr><td class="wysiwyg-macro-body"><pre>crypto.privateDecrypt(
	{
		key: privateKey,
		padding: padding,
	},
	Buffer.from(data)
);</pre></td></tr></table><p class="auto-cursor-target"><br /></p></td></tr><tr><td class="confluenceTd">AES</td><td class="confluenceTd"><p>crypto.createCipheriV()</p><p>crypto.Decipheriv()</p><p>crypto.update()</p><p>crpyto.final()</p></td><td colspan="1" class="confluenceTd"><div class="content-wrapper"><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="code" data-macro-id="26feab0c-77ec-472d-82e7-835bf73c4004" data-macro-parameters="language=js|title=AES Encryption" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6bGFuZ3VhZ2U9anN8dGl0bGU9QUVTIEVuY3J5cHRpb259&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT"><tr><td class="wysiwyg-macro-body"><pre>crypto.createCipheriv(AES_algorithm, array, iv);
cipher.update(inputText);</pre></td></tr></table><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="code" data-macro-id="7ba5d72f-5db8-4860-bd56-30e3680398e0" data-macro-parameters="language=js|title=AES Decryption" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6bGFuZ3VhZ2U9anN8dGl0bGU9QUVTIERlY3J5cHRpb259&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT"><tr><td class="wysiwyg-macro-body"><pre>crypto.createDecipheriv(AES_algorithm, array, iv);
cipher.update(inputText, "base64", "utf8");</pre></td></tr></table><p class="auto-cursor-target"><br /></p><p class="auto-cursor-target"><br /></p></div></td></tr><tr><td colspan="1" class="confluenceTd">MD5</td><td colspan="1" class="confluenceTd"><p>crypto.createHash()</p><p>crypto.createUpdate()</p><p>crypto.update()</p><p>crypto.digest()</p></td><td colspan="1" class="confluenceTd"><div class="content-wrapper"><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="code" data-macro-id="c6a101fe-3d45-4a0d-8b67-5addfcf75337" data-macro-parameters="language=js|title=MD5 Hash" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6bGFuZ3VhZ2U9anN8dGl0bGU9TUQ1IEhhc2h9&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT"><tr><td class="wysiwyg-macro-body"><pre>AES_IV = crypto.createHash(this.hash).update(Buffer.from(array)).digest();
</pre></td></tr></table><p class="auto-cursor-target"><br /></p></div></td></tr><tr><td class="confluenceTd">PBKDF2</td><td class="confluenceTd"><p>crypto.pbkdf2Sync() </p><p>또는 </p><p>crypto.pbkdf2() </p></td><td colspan="1" class="confluenceTd"><div class="content-wrapper"><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="code" data-macro-id="4d3b53d4-7672-4ab6-b423-13262c453e86" data-macro-parameters="language=js|title=PBKDF2 Hash" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6bGFuZ3VhZ2U9anN8dGl0bGU9UEJLREYyIEhhc2h9&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT"><tr><td class="wysiwyg-macro-body"><pre>crypto.createCipheriv(AES_algorithm, array, iv);
cipher.update(inputText);</pre></td></tr></table><p class="auto-cursor-target"><br /></p></div></td></tr></tbody></table><p class="auto-cursor-target"><br /></p><table class="wysiwyg-macro" data-macro-name="ui-text-box" data-macro-id="f561b48f-c593-4dc7-ad72-b25105fa892a" data-macro-parameters="size=medium|type=note" data-macro-schema-version="1" style="background-image: url(https://wiki.dev.hicare.net/plugins/servlet/confluence/placeholder/macro-heading?definition=e3VpLXRleHQtYm94OnNpemU9bWVkaXVtfHR5cGU9bm90ZX0&amp;locale=ko_KR&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="RICH_TEXT"><tr><td class="wysiwyg-macro-body"><p>표에 작성한 예시 코드는 실제 작동중인 코드와 다릅니다.</p></td></tr></table><p class="auto-cursor-target"><br /></p><h2 class="auto-cursor-target"><strong>참고 </strong></h2><hr /><ol><li>C# RSACyptoServiceProvider 클래스: <a href="https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.rsacryptoserviceprovider?view=net-5.0">https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.rsacryptoserviceprovider?view=net-5.0</a></li><li>C# RijndaelManaged<span style="letter-spacing: 0.0px;"> 클래스: </span><a href="https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.rijndaelmanaged?view=net-5.0">https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.rijndaelmanaged?view=net-5.0</a></li><li>C# SimpleCrypto library : <a href="https://github.com/shawnmclean/SimpleCrypto.net">https://github.com/shawnmclean/SimpleCrypto.net</a></li><li>C# MD5CryptoServiceProvider 클래스: <a href="https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.md5cryptoserviceprovider?view=net-5.0">https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.md5cryptoserviceprovider?view=net-5.0</a></li><li>C# HMACSHA1<span style="letter-spacing: 0.0px;"> 클래스 : </span><a href="https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.hmacsha1?view=net-5.0">https://docs.microsoft.com/ko-kr/dotnet/api/system.security.cryptography.hmacsha1?view=net-5.0</a></li></ol><hr /><ol><li>Node JS Crypto 모듈 사용법: <a href="https://nodejs.org/api/crypto.html">https://nodejs.org/api/crypto.html</a></li></ol><p><br /></p>
        <p>&nbsp;</p>
    </body>
