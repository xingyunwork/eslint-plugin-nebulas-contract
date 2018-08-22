# disallow duplicate keys in LocalContractStorage.
  

### Fail

```js
LocalContractStorage.defineMapProperty(this, 'allocation');
LocalContractStorage.defineMapProperty(this, 'allocation');
```

```js
LocalContractStorage.defineProperties(this, {
    name: null, 
    name: null
});
```

### Pass

```js
LocalContractStorage.defineMapProperty(this, 'allocation');
LocalContractStorage.defineProperties(this, {name: null, count: null});
```