# The Event API check is provided.

Event API:

    Event.Trigger(topic, obj);

### Fail

```js
Event.trigger(topic, obj);
```

### Pass

```js
Event.Trigger(topic, obj);
```