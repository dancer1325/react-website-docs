---
title: "Built-in React Hooks"
---

* Hooks
  * let you 
    * use DIFFERENT React features | your components
  * types
    * built-in
    * custom ones

## State Hooks {/*state-hooks*/}

* State
  * allows
    * [component can "remember" information](../../learn/state-a-components-memory) 
      * _Examples:_ 
        * form component store -- , via state, -- the input value
        * image gallery component store -- , via state, -- the selected image index
  * built-in
    * [`useState`](useState)
    * [`useReducer`](useReducer)

## Context Hooks {/*context-hooks*/}

* Context
  * allows
    * component can [receive information from DISTANT parents / WITHOUT passing it -- as -- props](../../learn/passing-props-to-a-component)
  * built-in
    * [`useContext`](useContext)

## Ref Hooks {/*ref-hooks*/}

* Refs
  * allows
    * component can [hold some information / NOT used for rendering](../../learn/referencing-values-with-refs)
      * _Example:_ DOM node OR timeout ID
      * ❌!= state❌
  * == "escape hatch" -- from the -- React paradigm
  * uses
    * | work with NON-React systems
  * built-in
    * [`useRef`](useRef)
    * [`useImperativeHandle`](useImperativeHandle)

## Effect Hooks {/*effect-hooks*/}

* Effects
  * allows
    * component can 
      * [connect -- to -- EXTERNAL systems](../../learn/synchronizing-with-effects)
        * _Example of external systems:_ deal with network, browser DOM, animations, widgets / use a DIFFERENT UI library
      * [synchronize -- with -- EXTERNAL systems](../../learn/synchronizing-with-effects.md)
  * == "escape hatch" -- from the -- React paradigm
  * built-in
    * [`useEffect`](useEffect)
    * [`useLayoutEffect`](useLayoutEffect)
    * [`useInsertionEffect`](useInsertionEffect)

## Performance Hooks {/*performance-hooks*/}

* ways to optimize re-rendering performance
  * skip unnecessary work
    * built-in
      * [`useMemo`](useMemo)
      * [`useCallback`](useCallback)
    * ❌NOT use cases❌
      * screen needs to update
  * prioritize rendering
    * built-in
      * [`useTransition`](useTransition)
      * [`useDeferredValue`](useDeferredValue)

## Other Hooks {/*other-hooks*/}

* audience
  * library authors
* built-in
  * [`useDebugValue`](useDebugValue)
  * [`useId`](useId)
  * [`useSyncExternalStore`](useSyncExternalStore)
  * [`useActionState`](useActionState)

## how to create your OWN Hooks {/*your-own-hooks*/}

* [-- as -- JS functions](../../learn/reusing-logic-with-custom-hooks.md#extracting-your-own-custom-hook-from-a-component-extracting-your-own-custom-hook-from-a-component)
