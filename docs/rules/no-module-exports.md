# `module.exports = ` is necessary inside of contract.

`
{"result":"TypeError: __contract is not a constructor","execute_err":"Deploy: TypeError: __contract is not a constructor","estimate_gas":"20789"}
`

### Fail

```js
var TestContract = function() {}
```

### Pass

```js
var TestContract = function() {}
module.exports = TestContract;
```