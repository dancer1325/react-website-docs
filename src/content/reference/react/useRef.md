---
title: useRef
---

* `useRef`
  * == React Hook /
    * lets you
      * reference a value / ❌NOT needed -- for -- rendering❌
  * use cases
    * hold a DOM node

## Reference {/*reference*/}

### `useRef(initialValue)` {/*useref*/}

* if you want to declare a [ref](../../learn/referencing-values-with-refs) -> call `useRef` | your component's top level

#### Parameters {/*parameters*/}

* `initialValue`
  * == ref object's `current` property's INITIAL value
    * ALLOWED ANY type
    * AFTER the initial render,
      * this argument is ignored 

#### Returns {/*returns*/}

* object /
  * `current`
    * 's value
      * ORIGINALLY, 
        * == `initialValue`
      * MUTABLE
        * == you can read + write
          * if you want to write -> MANUALLY
      * if you pass the ref object to React -- as a -- `ref` attribute | JSX node -> React will set its `current` property
  * 👀| NEXT renders,
    * ALWAYS return the SAME object👀

#### Caveats {/*caveats*/}

* ❌| render,
  * NOT write OR read `ref.current` ❌
    * ❌EXCEPT for [initialization.](#avoiding-recreating-the-ref-contents-avoiding-recreating-the-ref-contents)❌
    * Reason:🧠
      * it makes your component's behavior unpredictable
      * desired: your component's body behaves -- like a -- [pure function](../../learn/keeping-components-pure)🧠
* | Strict Mode,
  * React will call your component function x2
    * Reason:🧠[help you find accidental impurities](/react/useState#my-initializer-or-updater-function-runs-twice)
    * ONLY happens | development
      * ❌NOT happen | production❌
    * -> EACH ref object will be created x2
      * 1 version will be discarded
    * if your component function is pure -> this should NOT affect the behavior

## Usage {/*usage*/}

### Referencing a value -- with a -- ref {/*referencing-a-value-with-a-ref*/}

* if you want to declare >=1 [refs](../../learn/referencing-values-with-refs) -> call `useRef` | your component's top level

* vs [state](useState)
  * about trigger a re-render
    * if you change a 
      * ref -> does NOT trigger a re-render❌ 
        * Reason:🧠`ref` == plain JS object -> NOT aware if you change it🧠
      * state variable -> trigger a re-render
  * `ref.current` is MUTABLE vs state is IMMUTABLE
  * [MORE](../../learn/referencing-values-with-refs.md#differences-between-refs-and-state-differences-between-refs-and-state)

* refs
  * use case
    * store information /
      * does NOT affect the visual output of your component
        * _Example:_ store an [interval ID](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) & retrieve it later
      * BETWEEN re-renders 
        * != regular variables (they reset / EACH render) 
    * local information / EACH copy of your component 
      * != variables outside (they are shared)
  * ❌NOT use case❌
    * store information /
      * you want to display | screen
        * ALTERNATIVE: use state

### Manipulating the DOM with a ref {/*manipulating-the-dom-with-a-ref*/}

TODO: 
It's particularly common to use a ref to manipulate the [DOM.](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) React has built-in support for this.

First, declare a <CodeStep step={1}>ref object</CodeStep> with an <CodeStep step={3}>initial value</CodeStep> of `null`:

```js [[1, 4, "inputRef"], [3, 4, "null"]]
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...
```

Then pass your ref object as the `ref` attribute to the JSX of the DOM node you want to manipulate:

```js [[1, 2, "inputRef"]]
  // ...
  return <input ref={inputRef} />;
```

After React creates the DOM node and puts it on the screen, React will set the <CodeStep step={2}>`current` property</CodeStep> of your ref object to that DOM node
* Now you can access the `<input>`'s DOM node and call methods like [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus):

```js [[2, 2, "inputRef.current"]]
  function handleClick() {
    inputRef.current.focus();
  }
```

React will set the `current` property back to `null` when the node is removed from the screen.

Read more about [manipulating the DOM with refs.](/learn/manipulating-the-dom-with-refs)

<Recipes titleText="Examples of manipulating the DOM with useRef" titleId="examples-dom">

#### Focusing a text input {/*focusing-a-text-input*/}

In this example, clicking the button will focus the input:

<Sandpack>

```js
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

</Sandpack>

<Solution />

#### Scrolling an image into view {/*scrolling-an-image-into-view*/}

In this example, clicking the button will scroll an image into view
* It uses a ref to the list DOM node, and then calls DOM [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) API to 
find the image we want to scroll to.

<Sandpack>

```js
import { useRef } from 'react';

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Neo
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Millie
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Bella
        </button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
```

```css
div {
  width: 100%;
  overflow: hidden;
}

nav {
  text-align: center;
}

button {
  margin: .25rem;
}

ul,
li {
  list-style: none;
  white-space: nowrap;
}

li {
  display: inline;
  padding: 0.5rem;
}
```

</Sandpack>

<Solution />

#### Playing and pausing a video {/*playing-and-pausing-a-video*/}

This example uses a ref to call [`play()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) and [`pause()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause) on a `<video>` DOM node.

<Sandpack>

```js
import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
```

```css
button { display: block; margin-bottom: 20px; }
```

</Sandpack>

<Solution />

#### Exposing a ref to your own component {/*exposing-a-ref-to-your-own-component*/}

Sometimes, you may want to let the parent component manipulate the DOM inside of your component
* For example, maybe you're writing a `MyInput` component, but you want the parent to be able to focus the input (which the parent has no access to)
* You can use a combination of `useRef` to hold the input and [`forwardRef`](/reference/react/forwardRef) to expose it to the parent component
* Read a [detailed walkthrough](/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes) here.

<Sandpack>

```js
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

</Sandpack>

<Solution />

</Recipes>

---

### Avoiding recreating the ref contents {/*avoiding-recreating-the-ref-contents*/}

React saves the initial ref value once and ignores it on the next renders.

```js
function Video() {
  const playerRef = useRef(new VideoPlayer());
  // ...
```

Although the result of `new VideoPlayer()` is only used for the initial render, you're still calling this function on every render
* This can be wasteful if it's creating expensive objects.

To solve it, you may initialize the ref like this instead:

```js
function Video() {
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }
  // ...
```

Normally, writing or reading `ref.current` during render is not allowed
* However, it's fine in this case because the result is always the same, and the condition only executes during initialization so it's fully predictable.

<DeepDive>

#### How to avoid null checks when initializing useRef later {/*how-to-avoid-null-checks-when-initializing-use-ref-later*/}

If you use a type checker and don't want to always check for `null`, you can try a pattern like this instead:

```js
function Video() {
  const playerRef = useRef(null);

  function getPlayer() {
    if (playerRef.current !== null) {
      return playerRef.current;
    }
    const player = new VideoPlayer();
    playerRef.current = player;
    return player;
  }

  // ...
```

Here, the `playerRef` itself is nullable
* However, you should be able to convince your type checker that there is no case in which `getPlayer()` returns `null`
* Then use `getPlayer()` in your event handlers.

</DeepDive>

---

## Troubleshooting {/*troubleshooting*/}

### I can't get a ref to a custom component {/*i-cant-get-a-ref-to-a-custom-component*/}

If you try to pass a `ref` to your own component like this:

```js
const inputRef = useRef(null);

return <MyInput ref={inputRef} />;
```

You might get an error in the console:

<ConsoleBlock level="error">

Warning: Function components cannot be given refs
* Attempts to access this ref will fail
* Did you mean to use React.forwardRef()?

</ConsoleBlock>

By default, your own components don't expose refs to the DOM nodes inside them.

To fix this, find the component that you want to get a ref to:

```js
export default function MyInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
    />
  );
}
```

And then wrap it in [`forwardRef`](/reference/react/forwardRef) like this:

```js {3,8}
import { forwardRef } from 'react';

const MyInput = forwardRef(({ value, onChange }, ref) => {
  return (
    <input
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default MyInput;
```

Then the parent component can get a ref to it.

Read more about [accessing another component's DOM nodes.](/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes)
