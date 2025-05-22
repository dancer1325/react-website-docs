---
title: Responding to Events
---

* goal
  * DIFFERENT ways to write an event handler
  * How from a parent component -- to pass -- event handling logic 
  * How events
    * propagate
    * to stop them

* React lets you add event handlers | your JSX

* Event handlers
  * == your OWN functions / will be triggered -- in response to -- interactions (_Example:_ clicking, hovering, focusing form inputs, ...)

## Adding event handlers {/*adding-event-handlers*/}

* steps
  * define a function
    * alternatives
      * 👀recommended | OWN React Component / use it 👀
      * inline function
        * recommended | short functions
    * naming / `handleEventName`
  * [pass it as a prop](passing-props-to-a-component) | appropriate JSX tag
    * ⚠️pass != invoke ⚠️
      * if you invoke it -> fires the function | [rendering](render-and-commit) == WITHOUT waiting for event triggered
        * Reason: 🧠execute | rendering, because [`{JSCode}` | JSX](javascript-in-jsx-with-curly-braces) is WHEN it's executed 🧠

### Reading props | event handlers {/*reading-props-in-event-handlers*/}

* event handlers -- have access to the -- component's props
  * Reason: 🧠event handlers are declared | component 🧠  

### Passing event handlers -- as -- props {/*passing-event-handlers-as-props*/}

* use case 
  * parent component -- specifies a -- child's event handler 
    * used | [design system](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969)

### Naming event handler props {/*naming-event-handler-props*/}

* if you're building your OWN components -> freedom to name their event handler props
  * recommendations
    * `onFollowedByACapitalLetter`
    * 👀if 1 component supports MULTIPLE interactions -> you might name event handler props -- for -- app-specific concepts 👀

## Event propagation {/*event-propagation*/}

* Event handlers
  * catch events -- from -- 👀ANY children of YOUR component 👀

* 💡event "bubbles" or "propagates" up | tree 💡
  * == 
    * starts | event happened
    * goes up the tree
  * ⚠️EXCEPT TO, `onScroll` ⚠️
    * Reason: 🧠 ONLY work | JSX tag | you attach it to 🧠 

### Stopping propagation {/*stopping-propagation*/}

* event handlers
  * 👀receive 1! argument 👀
    * -- named as -- **event object**
    * by convention, `e`
      * == "event"
    * uses
      * read information about the event
      * stop the propagation -- via -- `e.stopPropagation()`

<DeepDive>

#### Capture phase events {/*capture-phase-events*/}

* TODO:
In rare cases, you might need to catch all events on child elements, *even if they stopped propagation*.
For example, maybe you want to log every click to analytics, regardless of the propagation logic. 
You can do this by adding `Capture` at the end of the event name:

```js
<div onClickCapture={() => { /* this runs first */ }}>
  <button onClick={e => e.stopPropagation()} />
  <button onClick={e => e.stopPropagation()} />
</div>
```

Each event propagates in three phases: 

1. It travels down, calling all `onClickCapture` handlers.
2. It runs the clicked element's `onClick` handler. 
3. It travels upwards, calling all `onClick` handlers.

Capture events are useful for code like routers or analytics, but you probably won't use them in app code.

</DeepDive>

### Passing handlers as alternative to propagation {/*passing-handlers-as-alternative-to-propagation*/}

Notice how this click handler runs a line of code _and then_ calls the `onClick` prop passed by the parent:

```js {4,5}
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
```

You could add more code to this handler before calling the parent `onClick` event handler, too. 
This pattern provides an *alternative* to propagation. 
It lets the child component handle the event, while also letting the parent component specify some additional behavior.
Unlike propagation, it's not automatic. 
But the benefit of this pattern is that you can clearly follow the whole chain of code that executes as a result of some event.

If you rely on propagation and it's difficult to trace which handlers execute and why, try this approach instead.

### Preventing default behavior {/*preventing-default-behavior*/}

Some browser events have default behavior associated with them. 
For example, a `<form>` submit event, which happens when a button inside of it is clicked, will reload the whole page by default:

<Sandpack>

```js
export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button>Send</button>
    </form>
  );
}
```

```css
button { margin-left: 5px; }
```

</Sandpack>

You can call `e.preventDefault()` on the event object to stop this from happening:

<Sandpack>

```js
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}
```

```css
button { margin-left: 5px; }
```

</Sandpack>

Don't confuse `e.stopPropagation()` and `e.preventDefault()`. They are both useful, but are unrelated:

* [`e.stopPropagation()`](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation) stops the event handlers attached to the tags above from firing.
* [`e.preventDefault()` ](https://developer.mozilla.org/docs/Web/API/Event/preventDefault) prevents the default browser behavior for the few events that have it.

## Can event handlers have side effects? {/*can-event-handlers-have-side-effects*/}

Absolutely! Event handlers are the best place for side effects.

Unlike rendering functions, event handlers don't need to be [pure](/learn/keeping-components-pure), so it's a great place to *change* something—for example, change an input's value in response to typing, or change a list in response to a button press. However, in order to change some information, you first need some way to store it. In React, this is done by using [state, a component's memory.](/learn/state-a-components-memory) You will learn all about it on the next page.

<Recap>

* You can handle events by passing a function as a prop to an element like `<button>`.
* Event handlers must be passed, **not called!** `onClick={handleClick}`, not `onClick={handleClick()}`.
* You can define an event handler function separately or inline.
* Event handlers are defined inside a component, so they can access props.
* You can declare an event handler in a parent and pass it as a prop to a child.
* You can define your own event handler props with application-specific names.
* Events propagate upwards. Call `e.stopPropagation()` on the first argument to prevent that.
* Events may have unwanted default browser behavior. Call `e.preventDefault()` to prevent that.
* Explicitly calling an event handler prop from a child handler is a good alternative to propagation.

</Recap>



<Challenges>

#### Fix an event handler {/*fix-an-event-handler*/}

Clicking this button is supposed to switch the page background between white and black. However, nothing happens when you click it. Fix the problem. (Don't worry about the logic inside `handleClick`—that part is fine.)

<Sandpack>

```js
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick()}>
      Toggle the lights
    </button>
  );
}
```

</Sandpack>

<Solution>

The problem is that `<button onClick={handleClick()}>` _calls_ the `handleClick` function while rendering instead of _passing_ it. Removing the `()` call so that it's `<button onClick={handleClick}>` fixes the issue:

<Sandpack>

```js
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}
```

</Sandpack>

Alternatively, you could wrap the call into another function, like `<button onClick={() => handleClick()}>`:

<Sandpack>

```js
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={() => handleClick()}>
      Toggle the lights
    </button>
  );
}
```

</Sandpack>

</Solution>

#### Wire up the events {/*wire-up-the-events*/}

This `ColorSwitch` component renders a button. It's supposed to change the page color. Wire it up to the `onChangeColor` event handler prop it receives from the parent so that clicking the button changes the color.

After you do this, notice that clicking the button also increments the page click counter. Your colleague who wrote the parent component insists that `onChangeColor` does not increment any counters. What else might be happening? Fix it so that clicking the button *only* changes the color, and does _not_ increment the counter.

<Sandpack>

```js src/ColorSwitch.js active
export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button>
      Change color
    </button>
  );
}
```

```js src/App.js hidden
import { useState } from 'react';
import ColorSwitch from './ColorSwitch.js';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}
```

</Sandpack>

<Solution>

First, you need to add the event handler, like `<button onClick={onChangeColor}>`.

However, this introduces the problem of the incrementing counter. If `onChangeColor` does not do this, as your colleague insists, then the problem is that this event propagates up, and some handler above does it. To solve this problem, you need to stop the propagation. But don't forget that you should still call `onChangeColor`.

<Sandpack>

```js src/ColorSwitch.js active
export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}
```

```js src/App.js hidden
import { useState } from 'react';
import ColorSwitch from './ColorSwitch.js';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}
```

</Sandpack>

</Solution>

</Challenges>
