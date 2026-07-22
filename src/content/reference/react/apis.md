---
title: "Built-in React APIs"
---

* React's built-in React APIs
  * use cases
    * define components
  * allows
    * lists ALL the REMAINING MODERN React APIs
  * are
    * [`createContext`](createContext)
    * [`forwardRef`](forwardRef)
    * [`lazy`](lazy)
    * [`memo`](memo)
      * TODO: lets your component skip re-renders with same props
      * Used with [`useMemo`](useMemo) and [`useCallback`.](useCallback)
    * [`startTransition`](startTransition) 
      * lets you mark a state update as non-urgent
      * Similar to [`useTransition`.](useTransition)
    * [`act`](act) 
      * lets you wrap renders and interactions in tests to ensure updates have processed before making assertions.

## Resource APIs {/*resource-apis*/}

*Resources* can be accessed by a component without having them as part of their state
* For example, a component can read a message from a Promise or read styling information from a context.

To read a value from a resource, use this API:

* [`use`](use) lets you read the value of a resource like a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or [context](/learn/passing-data-deeply-with-context).
```js
function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);
  const theme = use(ThemeContext);
  // ...
}
```
