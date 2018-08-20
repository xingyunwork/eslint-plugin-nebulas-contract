# Forbid the use of `window`

Forbid the use of window in nebulas smart contract

### Fail

```js
var TestContract = function() {

}

TestContract.prototype = {
    init: function () {
        var name = window.name;
    }
}

module.exports = TestContract;
```

### Pass

```js
var TestContract = function() {
}
module.exports = TestContract;
```