# The crypto API check is provided.

The crypto provides several frequently-used cryptographic hash functions. This module need to be explicitly required.

APIs:

sha256(str)

ripemd160(str)

md5(str)

base64(str)

recoverAddress(alg, hash, sign)

### Fail

```js
var crypto = require('crypto.js');
crypto.sha2561('0123456789');
```

### Pass

```js
var crypto = require('crypto.js');
crypto.sha256('0123456789');
```