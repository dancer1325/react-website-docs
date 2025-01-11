---
title: Adding Interactivity
---

* goal
  * how to write components /
    * handle interactions,
    * update their state,
    * display different output | over time 

* state
  * := data / changes over time
    * 👀data can be ANY kind of JavaScript value (ALSO objects) 👀
  * uses
    * | ANY component

## Responding to events {/*responding-to-events*/}

* *event handlers* | your JSX
  * == your OWN functions / 
    * based on user interactions (clicking, hovering, focusing | form inputs,...) -> will be triggered
      * ⚠️SOME built-in components ONLY support built-in browser events ⚠️ 
        * _Example:_ `<button>` -- & -- `onClick`

* _Example:_ see [here](/samples/learn/addingInteractivity)

* see [Responding to Events](responding-to-events)

## State: a component's memory {/*state-a-components-memory*/}
  
* state
  * := React's feature / component-specific memory
  * _Example:_ type | form -- should update -- input field
  * if you want to add state | component -> use [`useState`](../reference/react/useState) Hook  

* Hooks
  * == special functions / let your components use React features (_Example:_ state)

* see [State: A Component's Memory](../learn/state-a-components-memory)

## Render and commit {/*render-and-commit*/}

* request & serve UI steps
  1. **Triggering** a render
     * _Example in a restaurant:_ deliver the diner's order -- to the -- kitchen
       
       ![](/public/images/docs/illustrations/i_render-and-commit1.png)
  2. **Rendering** the component
     * _Example in a restaurant:_ prepare the order | kitchen
       
       ![](/public/images/docs/illustrations/i_render-and-commit2.png)
  3. **Committing** to the DOM
     * _Example in a restaurant:_ place the order | table
       
       ![](/public/images/docs/illustrations/i_render-and-commit3.png)

* see [Render and Commit](../learn/render-and-commit)

## State as a snapshot {/*state-as-a-snapshot*/}

* 👀React state == snapshot 👀
  * != regular JavaScript variables
  * if you `setStateVariable(anotherValue)` ->
    * ❌NOT change the state variable ❌
    * ⚠️triggers a re-render ⚠️
    * _Example:_ see [`StateSnapshot.js`](/samples/learn/addingInteractivity/adding-interactivity/src/StateSnapshot.js)

* see [State as a Snapshot](../learn/state-as-a-snapshot)

## Queueing a series of state updates {/*queueing-a-series-of-state-updates*/}

* if you want to queue MULTIPLE state update -> ⚠️use an updater function | setting state ⚠️

* see [Queueing a Series of State Updates](../learn/queueing-a-series-of-state-updates)

## Update state / are objects or arrays {/*updating-objects-in-state*/}

* ❌NOT change them directly ❌
* recommendations 
  * create a NEW one OR make a copy of EXISTING one
    * `...` spread syntax allows copying  
    * if you want to copy objects -> use a library
      * _Example:_ [Immer](https://github.com/immerjs/use-immer)
  * update the state -- to use -- that copy

* see [Updating Objects in State](../learn/updating-objects-in-state)
