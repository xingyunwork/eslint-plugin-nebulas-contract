# valid-contract.md

*   Contract must be a Prototype Object or Class in JavaScript or TypeScript.
*   A Contract must include an init function.   

### Fail

```js
module.exports = 1;
```

```js
var TestContract = function(){};
module.exports = TestContract;
```

### Pass

```js
var TestContract = function(){};
TestContract.prototype.init = function(){};
module.exports = TestContract;
```

```js
class TestContract{ 
    init(){} 
}
module.exports = TestContract;
```
