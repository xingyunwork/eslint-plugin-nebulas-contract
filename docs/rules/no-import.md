# Forbid the use of `import`

Forbid the use of import in nebulas smart contract

### Fail

```js
import crypto from 'crypto.js';

var TestContract = function() {}
module.exports = TestContract;
```

### Pass

```js
var crypto = require('crypto.js');

var TestContract = function() {}
module.exports = TestContract;
```