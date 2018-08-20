# Forbid the use of `Proxy`

Forbid the use of Proxy in smart contract

### Fail

```js
const handler = {
  get(target, key) {
    return Math.min(target[key], 0);
  }
};
const object = new Proxy(variable, handler);
object.a;
```

### Pass

```js
function positiveProperty(target, key) {
  return Math.min(target[key], 0);
}
positiveProperty(object, 'a');
```