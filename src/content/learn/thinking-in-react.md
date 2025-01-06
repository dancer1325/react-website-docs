---
title: Thinking in React
---

* goal
  * way of developing | React

* React's steps to build
  * UI -- is broken apart into -- React components hierarchy
    * techniques to decide to create a NEW one
      * [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
        * == component -- should ideally ONLY do -- 1! thing
      * UI's architecture (SOMETIMES) == data model
  * build a static version
    * == build reusable [components](your-first-component) + pass data via [props](passing-props-to-a-component)
      * ❌NOT use [state](state-a-components-memory.md) so far ❌
    * approaches
      * build "top down" or
        * recommended | simpler projects
      * build "bottom up"
        * recommended | larger projects
    * if top React Component's prop == data model == data flows in 1! direction
  * identify the state(s)
    * state
      * 👀== MINIMAL set of changing data / your app needs to remember 👀
        * ⚠️requirements ⚠️
          * changes over time
          * NOT passed -- from -- parent component
            * != is shared to child components
          * NOT computed -- based on -- EXISTING states or props
      * follows [DRY (Don't Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
      * 💡questions / wonder to confirm if it's a state 💡
        * pieces of information / POSSIBLE candidates of state
        * meet the PREVIOUS requirements
  * identify the React Component / owns the state(s)
    * 💡questions / wonder 💡
      * identify ALL components / based on state -> renders something
      * find their closest COMMON parent component
      * decide the component / recommended
        * COMMON parent
        * COMMON parent's parent == 
        * if NO component makes sense -> create a NEW component /
          * holds the state
          * add it | ABOVE COMMON parent

* React's model data
  * [Props](passing-props-to-a-component)
    * == function's arguments
    * allows
      * passing data from parent component -- to -> child component
    * _Example:_ `Form` -- can pass a `color` prop to a -- `Button`
  * [State](state-a-components-memory)
    * allows
      * component 
        * keep track of SOME information
        * changes -- in response to -- interactions
    * _Example:_ `Button` -- MIGHT keep track of -- `isHovered` state

* React
  * uses 1-way data flow
    * == from parent component -- data flows to -> child components
  * 👀if you want 2-way data flow -> pass down `setStateName` (== to child components) 👀 

* [code](/samples/getStarted/thinking-in-react)
