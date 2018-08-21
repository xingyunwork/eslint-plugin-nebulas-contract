# Forbid some ES2015 modules usage.

Forbid some ES2015 modules usage

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