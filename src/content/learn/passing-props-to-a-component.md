---
title: Passing Props to a Component
---

* Props / Properties
  * := information / you pass | JSX tag
  * allows
    * React Component1 <- communicate with -> React Component2
  * use cases
    * parent component -- pass information to -> child components
  * ALLOWED values / pass -- through -- them
    * ANY JS value (objects, arrays, functions)

## Familiar props {/*familiar-props*/}

* _Example:_ `className`, `src`, `alt`, `width`, `height`

* BUILT-IN React components' ALLOWED props
  * predefined
    * _Example:_ `<img allowedProps />` follows [HTML standard](https://www.w3.org/TR/html52/semantics-embedded-content.html#the-img-element)
* 👀your OWN components are freely customized by you 👀

## Passing props | component {/*passing-props-to-a-component*/}

* 👀if you pass props | React Component / NO capture them -> NO error == ALL fine  👀
* * 👀if you pass props | React Component / capture them -> you can use them  👀
  * ways to capture
    * destructuring
      ```
      function ReactComponent({prop1, prop2, ...}) { return ... }
      ```
      * 👀you can specify a default value 👀
    * 1! argument / recommended to name `props`
      ```
      function ReactComponent(props) { return ... }
      ```
  * ways to pass
    * one by one
      ```
      <ReactComponent prop1=value1 ... />
      ```
    * spread syntax
      ```
      <ReactComponent {...variableWithProps} /> 
      ```
      * avoid repeating code

## Passing JSX -- as -- children {/*passing-jsx-as-children*/}

* `children`
  * := built-in prop / 
    * 👀enable capturing nest content | JSX tag 👀
  * uses
    * | visual wrappers (_Example:_ panels, grids, ...)
    * repetitive blocks

## How props change | over time {/*how-props-change-over-time*/}

* use case
  * props / change over time | parent component
    * 👀== parent component -- pass -- props | child component / change over time 👀
    * == props NOT ALWAYS static
      * -> props == read-only snapshots | time -> 👀NEW version of props / EACH render 👀
    * see [state](state-a-components-memory.md)

* if a component needs to change its props -> "ask" its parent component -- to pass it -- 👀NEW DIFFERENT props object👀
  * Reason: 🧠props are [immutable](https://en.wikipedia.org/wiki/Immutable_object) term | computer science 🧠
  * JavaScript engine -- will reclaim eventually the -- memory / related to OLD props object 
  * ⚠️NOT change manually the props ⚠️
  * [set the state](state-a-components-memory.md)
