# The Smart contract code must have an init()

`
The Smart contract code must have an init() method, this method will only be executed once during deployment;
`

### Fail

```js
var TestContract = function() {}
```

```js
class TestContract {}
```

### Pass

```js
var TestContract = function(){};
TestContract.prototype = {
    init: function(){}
};
module.exports = TestContract;
```

```js
class TestContract {
    init() {}
}
```