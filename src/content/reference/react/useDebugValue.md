---
title: useDebugValue
---

* `useDebugValue`
  * == React Hook /
    * lets you 
      * customize the label / [React Dev Tools](../../learn/react-developer-tools.md) display -- for -- your [CUSTOM Hook](../../learn/reusing-logic-with-custom-hooks.md)

## Reference {/*reference*/}

### `useDebugValue(value, format?)` {/*usedebugvalue*/}

#### Parameters {/*parameters*/}

* `value: ANY`
  * == value / you want to display | React DevTools
* `format`
  * OPTIONAL
    * if you do NOT specify it -> the original `value` is displayed
  * == formatting function
  * how is it used?
    * | inspect the component,
      * React DevTools 
        * call the formatting function -- with the -- `value` as the argument
        * display the returned formatted value

#### Returns {/*returns*/}

* NOTHING

## Usage {/*usage*/}

### Adding a label to a custom Hook {/*adding-a-label-to-a-custom-hook*/}

Call `useDebugValue` at the top level of your [custom Hook](/learn/reusing-logic-with-custom-hooks) to display a readable <CodeStep step={1}>debug value</CodeStep> for [React DevTools.](/learn/react-developer-tools)

```js [[1, 5, "isOnline ? 'Online' : 'Offline'"]]
import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}
```

This gives components calling `useOnlineStatus` a label like `OnlineStatus: "Online"` when you inspect them:

![A screenshot of React DevTools showing the debug value](/images/docs/react-devtools-usedebugvalue.png)

Without the `useDebugValue` call, only the underlying data (in this example, `true`) would be displayed.

<Note>

Don't add debug values to every custom Hook
* It's most valuable for custom Hooks that are part of shared libraries and that have a complex internal data structure 
that's difficult to inspect.

</Note>

### Deferring formatting of a debug value {/*deferring-formatting-of-a-debug-value*/}

You can also pass a formatting function as the second argument to `useDebugValue`:

```js [[1, 1, "date", 18], [2, 1, "date.toDateString()"]]
useDebugValue(date, date => date.toDateString());
```

Your formatting function will receive the <CodeStep step={1}>debug value</CodeStep> as a parameter and
should return a <CodeStep step={2}>formatted display value</CodeStep>
* When your component is inspected, React DevTools will call this function and display its result.

This lets you avoid running potentially expensive formatting logic unless the component is actually inspected
* For example, if `date` is a Date value, this avoids calling `toDateString()` on it for every render.
