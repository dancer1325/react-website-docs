---
title: Conditional Rendering
---

* ways to render conditionally | JSX
  * `if`
    * recommendations
      * declare a variable, rather than SEVERAL JSX elements
  * `&&`
    * uses
      * | React components, 
        * if it's true -> you render JSX
        * 👀OTHERWISE -> NOTHING is rendered 👀 == [`return null`](#conditionally-returning-nothing----via----null-conditionally-returning-nothing-with-null)
    * see [JavaScript && expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
    * recommendations
      * left side (`something && whatToDoIfIsTrue`) is a `boolean`
        * Reason: 🧠 
          * if `something` is a number !=0 -> render `whatToDoIfIsTrue` 
          * if `something` is a number ==0 -> render `0` 🧠
  * `? :`
    * enables [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
    * 👀JSX element | pass by `?` == JSX element | pass by `:` 👀
      * Reason: 🧠 [Preserving and Resetting State](preserving-and-resetting-state) 🧠
      * ❌NOT instances as OOP ❌
      * ❌NOT hold any internal state ❌
      * ❌NOT real DOM nodes ❌

## Conditionally returning nothing -- via -- `null` {/*conditionally-returning-nothing-with-null*/}

* 👀== NO render anything -- via -- `return null` 👀
  * == "hole" | JSX tree
* NOT recommended
