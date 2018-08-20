# Available libraries are `crypto.js`

### require

The `require` function is used to explicitly load third-party libraries those Nebulas NVM doesn't load at startup.

Available libraries are:

* `crypto.js`

The typical usage is:

```js
    var crypto = require('crypto.js');
    ...
```

### Fail

```js
var another = require('another.js');

var TestContract = function() {}
module.exports = TestContract;
```

### Pass
var crypto = require('crypto.js');

```js
var TestContract = function() {}
module.exports = TestContract;
```