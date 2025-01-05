---
title: 'Tutorial: Tic-Tac-Toe'
---

* goal
  * build a small tic-tac-toe game  

* [code](/samples/getStarted/tic-tac-toe)
  * [CodeSandbox as alternative](https://codesandbox.io/p/sandbox/y4wfpq)

* `default`
  * == keyword / indicates that it's the MAIN | your file

* JSX element
  * == JS code + HTML tags 
  * allows
    * describing WHAT you'd like to display

* see 
  * [React Developer Tools](react-developer-tools.md)
  * [JS supports closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
    * == inner function -- has access to -- variables and functions / defined | outer function

* state | parent React component
  * typical approach

* React limits the number of renders 
  * Reason: 🧠prevent an infinite loop 🧠

* React conventions
  * `onSomething`
    * prop name / == an event

* ways to changing data
  * _mutate_ the data -- via -- changing the data's values
  * data -- is replaced with a -- NEW copy / has the desired changes
    * benefits
      * keep PREVIOUS versions of the data intact / can be reused later
      * if the state of a parent component changes -> ALL child components re-render automatically -> cheaper to compare whether their data has changed
        * React chooses when to re-render a component -- via -- [`memo` API](../reference/react/memo)

* `key`
  * := special and reserved React's property 
  * ⚠️EACH array's or iterator's child -- should have a -- UNIQUE "key" prop ⚠️
    * Reason: 🧠differentiate EACH 's child vs its siblings 🧠
    * if a component's key changes -> the component will be 
      * destroyed
      * re-created / NEW state
    * see [rendering lists](rendering-lists.md)
  * requirements
    * 👀UNIQUE between components & their siblings 👀
      * != be globally unique 
