# Forbid the use of `setInterval` `setTimeout`

disallow the use of `setInterval`, `setTimeout` in nebulas smart contract

### Fail

```js
var TestContract = function() {

}

TestContract.prototype = {
    init: function () {
        setTimeout(function(){  }, 100);
    }
}

module.exports = TestContract;
```

### Pass

```js
var TestContract = function() {}
module.exports = TestContract;
```