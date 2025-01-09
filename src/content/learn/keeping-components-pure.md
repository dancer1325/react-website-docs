---
title: Keeping Components Pure
---


* JavaScript functions
  * 👀== pure functions 👀

* pure functions
  * := functions / 
    * ONLY 1! goal 
    * cares ONLY about it's OWN business
      * ⚠️== NOT change objects or variables / EXISTED BEFORE ⚠️
    * SAME inputs -> SAME outputs
  * benefits
    * avoid bugs
  * see [here](https://wikipedia.org/wiki/Pure_function)

## Purity: Components as formulas {/*purity-components-as-formulas*/}

* React -- is designed around -- pure functions
  * 👀== React -- assumes that -- EVERY component == pure function 👀
    * == standalone / -- NOT depend on -- OTHERS 

## Side Effects == (un)intended consequences {/*side-effects-unintended-consequences*/}

* if React Component != pure function ->
  * unexpected result | time
  * possible bugs-related

### Detecting impure calculations with StrictMode {/*detecting-impure-calculations-with-strict-mode*/}

* | React, 
  * 👀kinds of inputs / you can read | rendering 👀
    * are
      * [props](passing-props-to-a-component),
      * [state](state-a-components-memory),
      * [context](passing-data-deeply-with-context)
    * 💡-> ALWAYS treat as -- read-only 💡

* 👀if you want to change something -- in response to -- user input -> [set state](state-a-components-memory) 👀
  * ❌instead of writing | variable ❌

* React's "Strict Mode"
  * 👀calls 2 times EACH component's function | development -> find NOT pure React components 👀
    * NOT exist | production 
  ```
  <React.StrictMode>
    <YourReactComponentToTest />
  </React.StrictMode>
  ```
  * SOME frameworks do this by default

### Local mutation {/*local-mutation-your-components-little-secret*/}

* mutation
  * := process / React component changes a PREEXISTING variable | rendering

* PURE functions
  * ONLY mutate variables OR objects | function's scope == "local mutation"

## Where you _can_ cause side effects {/*where-you-_can_-cause-side-effects*/}

* side effects
  * == things / happen | "on the side" (❌NOT rendering ❌)
    * -> happen | 
      * [event handlers](responding-to-events) OR
      * returned JSX -- via -- [`useEffect`](../reference/react/useEffect)
        * ⚠️ONLY as LAST OPTION / NOT found the right event handler ⚠️
        * Reason: 🧠 ALLOWED, because it happens AFTER rendering 🧠
  * _Example:_ changes—update the screen, start an animation, change the data

* event handlers
  * := functions / React runs | perform SOME action
    * _Example:_ click a button 
    * defined | your component
    * ⚠️NOT run | rendering ⚠️
      * ⚠️-> NOT need to be pure ⚠️

### Why does React care about purity? {/*why-does-react-care-about-purity*/}

* allows
  * your components could run | DIFFERENT environment (_Example:_ | server) 
    * Reason: 🧠 SAME inputs -> SAME outputs -> 1 component can serve MANY user requests 🧠
  * improve performance  
    * Reason: 🧠 SAME inputs -> SAME outpus -> [skipping rendering components](../reference/react/memo) / ' inputs have NOT changed 🧠
    * -- via -- caching them
  * if | middle of rendering a deep component tree, SOME data changes -> React restart rendering / NOT waste time finishing the outdated render
    * purity stops calculating | ANY time

* EVERY NEW React feature -- takes advantage of -- purity
