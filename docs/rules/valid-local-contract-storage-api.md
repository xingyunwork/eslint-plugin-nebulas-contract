# The LocalContractStorage API check is provided.

LocalContractStorage API:

    LocalContractStorage.rawGet
    LocalContractStorage.rawSet
    LocalContractStorage.defineProperty
    LocalContractStorage.defineProperties
    LocalContractStorage.defineMapProperty
    LocalContractStorage.defineMapProperties
    LocalContractStorage.del
    LocalContractStorage.get
    LocalContractStorage.set

### Fail

```js
LocalContractStorage.defineMyMapProperty(this, "bankVault", {
 		parse: function (text) {
  			return new DepositeContent(text);
 		},
 		stringify: function (o) {
  			return o.toString();
 		}
	});
```

### Pass

```js
LocalContractStorage.defineMapProperty(this, "bankVault", {
    parse: function (text) {
        return new DepositeContent(text);
    },
    stringify: function (o) {
        return o.toString();
    }
});

```