# Forbid the use of `Proxy`

Forbid the use of Proxy in smart contract

### Fail

```js
var TestContract = function() {
}
module.exports = TestContract;
```

### Pass

```js
var TestContract = function() {

}

TestContract.prototype = {
    init: function () {
        var o = {name: 1};
        var p = new Proxy(o, {
            get: function(target, prop, receiver){
                return target['name'];
            }
        });
    }
}

module.exports = TestContract;
```